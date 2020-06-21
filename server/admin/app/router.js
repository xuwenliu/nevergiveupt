/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const {
    router,
    controller,
    jwt,
  } = app;
  const baseRouter = app.config.baseRouter; // /api/v1
  router.post(baseRouter + "/admin/login", controller.admin.adminLogin); // 管理员登录
  router.post(baseRouter + "/upload", jwt, controller.utils.uploadFiles); //上传文件到七牛云

  router.resources("categories", baseRouter + "/categories", jwt, controller.categories); // 分类
  router.resources("tags", baseRouter + "/tags", jwt, controller.tags); // 标签
  router.resources("about", baseRouter + "/about", jwt, controller.about); // 关于
  router.resources("user", baseRouter + "/user", jwt, controller.user); // 用户
  router.resources("config", baseRouter + "/config/home", jwt, controller.config.home); // 首页配置
  router.resources("config", baseRouter + "/config/hf", jwt, controller.config.hf); // header/footer配置
  router.resources("config", baseRouter + "/config/right", jwt, controller.config.right); // 右侧配置

};