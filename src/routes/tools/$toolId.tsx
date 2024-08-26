import { toolsList } from "@/api/toolsList";
import { ToolsView } from "@/components/ToolsView";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tools/$toolId")({
  component: ToolsView,
  loader: async ({ params }) => {
    return toolsList.find((tool) => tool.slug === params.toolId);
  },
});
