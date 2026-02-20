import { index, layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("./core/layout/explorer.layout.tsx", [
    route("/system-experiences/live-activities", "./system-experiences/view/live-activities.tsx"),
  ]),
] satisfies RouteConfig;
