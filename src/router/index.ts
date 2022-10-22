import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
} from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes = [
  {
    path: "/",
    redirect: "/app/index",
  },
  {
    path: "/index",
    redirect: "/app/index",
  },
  {
    path: "/app",
    name: "app",
    component: () => import("../views/Index.vue"),
    redirect: "/app/index",
    children: [
      {
        path: "index",
        component: () => import("../views/inner/IndexInner.vue"),
        meta: {
          title: "王小波中文站",
          keepAlive: false,
        },
      },
      {
        path: "biography",
        name: "biography",
        component: () => import("../components/Content.vue"),
        meta: {
          title: "生平事迹 - 王小波中文站",
          keepAlive: false,
        },
        props: () => {
          return {
            pageName: "生平事迹",
            source: "Biography",
          };
        },
      },
      {
        path: "interview-video",
        name: "interview-video",
        component: () => import("../views/inner/InterviewVideoInner.vue"),
        meta: {
          title: "采访视频 - 王小波中文站",
          keepAlive: false,
        },
        props: () => {
          return {};
        },
      },
      {
        path: "stories",
        name: "stories",
        component: () => import("../views/inner/StoriesInner.vue"),
        meta: {
          title: "短篇小说 - 王小波中文站",
          keepAlive: false,
        },
        props: () => {
          return {};
        },
      },
      {
        path: "novel",
        name: "novel",
        component: () => import("../views/inner/NovelInner.vue"),
        meta: {
          title: "长篇小说 - 王小波中文站",
          keepAlive: false,
        },
        props: () => {
          return {};
        },
      },
      {
        path: "nonfiction",
        name: "nonfiction",
        component: () => import("../views/inner/NonfictionInner.vue"),
        meta: {
          title: "非小说作品 - 王小波中文站",
          keepAlive: false,
        },
        props: () => {
          return {};
        },
      },
      {
        path: "search",
        name: "search",
        component: () => import("../views/inner/SearchInner.vue"),
        meta: {
          title: "图书搜索 - 王小波中文站",
          keepAlive: false,
        },
        props: () => {
          return {};
        },
      },
      {
        path: "reviews",
        name: "reviews",
        component: () => import("../components/Content.vue"),
        meta: {
          title: "相关评论 - 王小波中文站",
          keepAlive: false,
        },
        props: () => {
          return {
            pageName: "相关评论",
            source: "Reviews",
          };
        },
      },
      {
        path: "with-programming",
        name: "with-programming",
        component: () => import("../components/Content.vue"),
        meta: {
          title: "王小波和编程 - 王小波中文站",
          keepAlive: false,
        },
        props: () => {
          return {
            pageName: "王小波和编程",
            source: "With-Programming",
          };
        },
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("../components/Content.vue"),
        meta: {
          title: "联系方式 - 王小波中文站",
          keepAlive: false,
        },
        props: () => {
          return {
            pageName: "联系方式",
            source: "Contact",
          };
        },
      },
      {
        path: "about",
        name: "about",
        component: () => import("../components/Content.vue"),
        meta: {
          title: "关于本站 - 王小波中文站",
          keepAlive: false,
        },
        props: () => {
          return {
            pageName: "关于本站",
            source: "About",
          };
        },
      },
      {
        path: "about",
        name: "about",
        component: () => import("../components/Content.vue"),
        meta: {
          title: "关于本站 - 王小波中文站",
          keepAlive: false,
        },
        props: () => {
          return {
            pageName: "关于本站",
            source: "About",
          };
        },
      },
      {
        path: "message-board",
        name: "message-board",
        component: () => import("../views/inner/MessageBoardInner.vue"),
        meta: {
          title: "留言板 - 王小波中文站",
          keepAlive: false,
        },
        props: () => {
          return {};
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});
// 配置NProgress进度条选项  —— 动画效果
NProgress.configure({ ease: "ease", speed: 500 });
router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
    const paths = router.getRoutes().map((item) => item.path);
    if (!paths.includes(to.fullPath)) {
      console.log(`${to.fullPath} 在 ${paths} 中不存在`);
      router.push("/app");
    }

    if (to.meta.title) {
      document.title = to.meta.title as string;
    }
    // NProgress开始进度条
    NProgress.start();
    next();
  }
);

// 全局后置钩子-常用于结束动画等
router.afterEach(() => {
  // NProgress结束进度条
  NProgress.done();
  // console.log(transition)
});

export default router;
