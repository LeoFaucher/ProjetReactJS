const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/igdb", {
      target: "https://api-v3.igdb.com/",
      changeOrigin: true,
      pathRewrite: {
        "^/igdb": "/" // remove base path
      }
    })
  );
};
