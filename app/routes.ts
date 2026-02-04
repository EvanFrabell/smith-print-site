import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"), 
  route("mac", "routes/mac.tsx"),
  route("pc", "routes/pc.tsx"),
  route("ios", "routes/ios.tsx"),
  route("android", "routes/android.tsx"),
  route("chromebook", "routes/chromebook.tsx"),
] satisfies RouteConfig;
