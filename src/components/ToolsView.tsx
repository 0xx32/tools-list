import { useLoaderData } from "@tanstack/react-router";

interface ToolCategory {
  tools: Tool[];
  name: string;
}

export const ToolsView = () => {
  const toolCategory: ToolCategory = useLoaderData({ from: "/tools/$toolId" });

  return (
    <div className="flex flex-col gap-3 h-screen p-6 pt-0">
      <h2 className="text-3xl text-white mb-6 font-semibold">
        {toolCategory.name}
      </h2>
      {toolCategory.tools.length &&
        toolCategory.tools.map((tool, index) => (
          <div
            key={tool.name}
            className="flex gap-4 items-center border-b border-white/20 pb-2 hover:bg-muted p-2 rounded-md "
          >
            <span>{index + 1}.</span>
            <a
              href={tool.link}
              target="_blank"
              className="text-lg hover:underline hover:text-muted-foreground transition-colors capitalize flex items-center gap-3"
            >
              <i className="w-6 h-6">
                <img
                  className="w-full"
                  src={tool.link + "favicon.ico"}
                  alt=""
                />
              </i>

              <span> {tool.name}</span>
            </a>
          </div>
        ))}
    </div>
  );
};
