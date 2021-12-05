import Dashboard from "./views/Dashboard/index.vue";
import TagThanos from "./views/TagThanos/index.vue";
import NotFound from "./views/NotFound/index.vue";

export default [
  { path: "/", component: Dashboard, meta: { title: "首页" } },
  {
    path: "/html-tag-thanos",
    component: TagThanos,
    meta: { title: "移除HTML标签" },
  },
  { path: "/:path(.*)", component: NotFound },
];
