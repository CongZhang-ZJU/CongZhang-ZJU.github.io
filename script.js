// 定义可切换的座右铭数组：每次点击按钮时随机抽取一句。
const mottos = [
  "今日座右铭：把每一次点击都做成会发光的小冒险。",
  "今日座右铭：灵感不是等待来的，而是边跑边捡到的。",
  "今日座右铭：城市再喧闹，也要给用户留一条温柔的路。",
  "今日座右铭：好看的界面要会说话，更要会照顾人。",
  "今日座右铭：把复杂问题拆开，像整理一间会发光的树屋。",
];

// 获取座右铭文本节点：后续用于更新页面显示内容。
const mottoText = document.querySelector("#motto-text");

// 获取按钮节点：用户点击后将触发随机切换逻辑。
const shuffleButton = document.querySelector("#shuffle-motto");

// 获取所有需要滚动显现的卡片：进入视口时补上 visible 类名。
const revealItems = document.querySelectorAll(".reveal");

// 记录当前显示的座右铭索引：避免连续抽中同一句。
let currentMottoIndex = 0;

// 定义一个函数：专门负责生成“与当前不同”的随机索引。
function getNextMottoIndex() {
  // 如果数组长度只有 1，就直接返回 0，避免死循环。
  if (mottos.length <= 1) {
    return 0;
  }

  // 先用当前索引作为初始值，后面会反复抽取直到不同为止。
  let nextIndex = currentMottoIndex;

  // 当新索引与旧索引相同时，继续随机抽取。
  while (nextIndex === currentMottoIndex) {
    // Math.random() 先生成 0 到 1 之间的小数，再映射到数组下标范围。
    nextIndex = Math.floor(Math.random() * mottos.length);
  }

  // 返回新的可用索引。
  return nextIndex;
}

// 定义按钮点击后的处理函数：把随机句子写回页面。
function updateMotto() {
  // 计算一个新的句子索引。
  currentMottoIndex = getNextMottoIndex();

  // 如果页面节点存在，就把文本内容替换成新句子。
  if (mottoText) {
    mottoText.textContent = mottos[currentMottoIndex];
  }
}

// 如果按钮成功获取到，就给它绑定点击事件。
if (shuffleButton) {
  shuffleButton.addEventListener("click", updateMotto);
}

// 给 body 增加标记类名：告诉 CSS 当前环境已经启用 JavaScript。
document.body.classList.add("js-enabled");

// 先判断浏览器是否支持 IntersectionObserver：这样能兼顾更多运行环境。
if ("IntersectionObserver" in window) {
  // 创建观察器：用于监听页面元素是否进入用户视口。
  const observer = new IntersectionObserver(
    (entries) => {
      // 逐个处理观察结果。
      entries.forEach((entry) => {
        // 只有当元素进入视口后才执行显现逻辑。
        if (entry.isIntersecting) {
          // 给目标元素添加 visible 类名，触发 CSS 过渡动画。
          entry.target.classList.add("visible");

          // 动画只需要执行一次，因此添加完成后取消观察。
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // 当元素有 18% 进入视口时就开始播放动画。
      threshold: 0.18,
    }
  );

  // 把所有需要动画的元素交给观察器管理。
  revealItems.forEach((item) => {
    observer.observe(item);
  });
} else {
  // 如果浏览器不支持观察器，就直接让所有卡片显示出来。
  revealItems.forEach((item) => {
    item.classList.add("visible");
  });
}
