/* 兼容层：
 * 如果历史页面仍然只引入根目录 script.js，
 * 则本文件会按顺序加载新的数据脚本与主脚本。
 */
(function loadSharedScripts() {
  // 若共享数据已经存在，说明新页面已直接加载脚本，此时无需重复执行。
  if (window.siteData) {
    return;
  }

  // 先加载数据文件，保证主脚本执行时可以读取共享内容。
  var dataScript = document.createElement("script");
  dataScript.src = "assets/scripts/site-data.js";

  // 数据文件加载完成后，再加载负责页面渲染的主脚本。
  dataScript.onload = function handleDataLoaded() {
    var mainScript = document.createElement("script");
    mainScript.src = "assets/scripts/main.js";
    document.body.appendChild(mainScript);
  };

  document.body.appendChild(dataScript);
})();
