import { ToolsView } from "@/components/ToolsView";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tools/$toolId")({
  component: ToolsView,
  loader: async ({ params }) => {
    const { toolsList } = await import("@/api/toolsList");

    return toolsList.find((tool) => tool?.slug === params.toolId);
  },
});
