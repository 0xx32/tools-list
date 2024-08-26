import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div className="text-3xl">
      reactuse 🚀 the largest and most useful hook library
    </div>
  ),
});
