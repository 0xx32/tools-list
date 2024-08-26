import { toolsList } from "@/api/toolsList";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";

export const SideBar = () => {
  const pathname = window.location.pathname;

  return (
    <aside className="fixed  hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r border-white/20">
      <div className="pr-6">
        <h4 className="mb-1 rounded-md px-2 py-1 text-lg font-semibold">
          Tools
        </h4>
        <div className="grid grid-flow-row auto-rows-max text-sm">
          {toolsList.map((tool) => (
            <Link
              key={tool.slug}
              to="/tools/$toolId"
              params={{ toolId: tool.slug }}
              className={clsx(
                "group flex w-full items-center rounded-md border border-transparent px-2 text-md py-1 hover:underline text-muted-foreground",
                {
                  "text-white": pathname === `/tools/${tool.slug}`,
                },
              )}
            >
              {tool.name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};
