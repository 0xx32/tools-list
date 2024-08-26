import { Button } from "@/components/ui";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div>
      <Button>awdawd</Button>
    </div>
  ),
});
