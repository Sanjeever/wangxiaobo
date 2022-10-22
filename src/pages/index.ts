/*
 ** 全局注册组件
 */
import { defineAsyncComponent, type App, type AsyncComponentLoader } from "vue";
const components = import.meta.glob("../pages/*.md");
export default function install(app: App) {
  for (const [key, value] of Object.entries(components)) {
    const name = key.slice(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
    app.component(name, defineAsyncComponent(value as AsyncComponentLoader));
  }
}
