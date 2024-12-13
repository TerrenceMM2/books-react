// https://tanstack.com/router/latest/docs/framework/react/quick-start#srcroutesindexlazytsx
import { createLazyFileRoute } from "@tanstack/react-router";
import Home from "../pages/Home";

export const Route = createLazyFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return <Home />;
}
