import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import router from "./router";

import "muse-ui/lib/styles/base.less";
import { Button, Select, AppBar, Icon, Menu, List, BottomSheet } from "muse-ui";
import "muse-ui/lib/styles/theme.less";
// import theme from "muse-ui/lib/theme";
// theme.use("dark");

Vue.use(Button);
Vue.use(Select);
Vue.use(AppBar);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(List);
Vue.use(BottomSheet);

const isPC = (() => {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
    "XiaoMi/MiuiBrowser",
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
})();
Vue.prototype.isPC = isPC;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
