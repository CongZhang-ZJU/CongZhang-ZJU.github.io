/* 全站原生脚本：
 * 1. 负责渲染导航、页脚与各页面主体内容；
 * 2. 不依赖任何框架，适合 GitHub Pages 直接托管；
 * 3. 页面内容以数据驱动方式生成，便于课题组长期维护。
 */
(function initSite() {
  // 读取当前页面标识，用于决定渲染哪一部分内容。
  const currentPage = document.body.dataset.page;

  // 如果共享数据未加载，则直接终止，避免后续脚本报错。
  if (!window.siteData) {
    return;
  }

  // 先渲染所有页面都会使用到的公共区域。
  renderHeader(currentPage);
  renderFooter();

  // 再根据页面类型执行对应渲染逻辑。
  if (currentPage === "home") {
    renderHomePage();
  }

  if (currentPage === "members") {
    renderMembersPage();
  }

  if (currentPage === "research") {
    renderResearchPage();
  }

  if (currentPage === "news") {
    renderNewsPage();
  }
})();

// 将日期字符串格式化为更适合展示的中文日期格式。
function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

// 生成标签列表的 HTML，供多个模块复用。
function renderTags(tags) {
  return tags
    .map(function mapTag(tag) {
      return '<span class="tag">' + tag + "</span>";
    })
    .join("");
}

// 渲染顶部导航，并附带移动端菜单开关。
function renderHeader(currentPage) {
  const header = document.getElementById("site-header");
  const site = window.siteData.site;
  const navigation = window.siteData.navigation;

  if (!header) {
    return;
  }

  header.innerHTML =
    '<div class="container header-inner">' +
    '  <a class="brand" href="index.html">' +
    '    <span class="brand-mark">SCC</span>' +
    '    <span class="brand-copy">' +
    '      <strong>' + site.name + "</strong>" +
    '      <small>' + site.tagline + "</small>" +
    "    </span>" +
    "  </a>" +
    '  <button class="nav-toggle" id="nav-toggle" type="button" aria-expanded="false" aria-label="切换导航菜单">' +
    "    菜单" +
    "  </button>" +
    '  <nav class="site-nav" id="site-nav">' +
         navigation
           .map(function mapItem(item) {
             const activeClass = item.page === currentPage ? "is-active" : "";
             return (
               '<a class="' +
               activeClass +
               '" href="' +
               item.href +
               '">' +
               item.label +
               "</a>"
             );
           })
           .join("") +
    "  </nav>" +
    "</div>";

  const toggleButton = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");

  if (!toggleButton || !nav) {
    return;
  }

  toggleButton.addEventListener("click", function handleToggle() {
    const isOpen = nav.classList.toggle("is-open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });
}

// 渲染页脚，用于显示联系信息与版权信息。
function renderFooter() {
  const footer = document.getElementById("site-footer");
  const site = window.siteData.site;

  if (!footer) {
    return;
  }

  footer.innerHTML =
    '<div class="container footer-grid">' +
    '  <div>' +
    "    <h3>" + site.name + "</h3>" +
    "    <p>" + site.description + "</p>" +
    "  </div>" +
    '  <div class="footer-contact">' +
    "    <p><strong>邮箱：</strong>" + site.email + "</p>" +
    "    <p><strong>地址：</strong>" + site.address + "</p>" +
    "    <p><strong>地点：</strong>" + site.location + "</p>" +
    "  </div>" +
    "</div>" +
    '<div class="container footer-bottom">' +
    "  <span>© " +
    new Date().getFullYear() +
    " " +
    site.copyrightName +
    "</span>" +
    "  <span>Built with Vanilla HTML, CSS and JavaScript for GitHub Pages.</span>" +
    "</div>";
}

// 首页需要渲染头图、近期进展、研究方向和精选成果。
function renderHomePage() {
  const heroTitle = document.getElementById("hero-title");
  const heroText = document.getElementById("hero-text");
  const heroPanel = document.getElementById("hero-panel");
  const progressList = document.getElementById("recent-progress-list");
  const researchAreaList = document.getElementById("research-area-list");
  const featuredOutputList = document.getElementById("featured-output-list");
  const hero = window.siteData.hero;

  if (heroTitle) {
    heroTitle.textContent = hero.title;
  }

  if (heroText) {
    heroText.textContent = hero.text;
  }

  if (heroPanel) {
    heroPanel.innerHTML =
      '<p class="panel-title">课题组速览</p>' +
      hero.metrics
        .map(function mapMetric(metric) {
          return (
            '<div class="metric-card">' +
            '  <strong>' + metric.value + "</strong>" +
            "  <span>" + metric.label + "</span>" +
            "</div>"
          );
        })
        .join("");
  }

  if (progressList) {
    progressList.innerHTML = window.siteData.news
      .slice(0, 3)
      .map(function mapNews(item) {
        return (
          '<article class="card">' +
          '  <span class="card-kicker">' + item.category + "</span>" +
          "  <h3>" + item.title + "</h3>" +
          '  <p class="meta-text">' + formatDate(item.date) + "</p>" +
          "  <p>" + item.summary + "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  if (researchAreaList) {
    researchAreaList.innerHTML = window.siteData.researchAreas
      .map(function mapArea(area) {
        return (
          '<article class="card">' +
          "  <h3>" + area.title + "</h3>" +
          "  <p>" + area.description + "</p>" +
          '  <div class="tag-row">' + renderTags(area.tags) + "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  if (featuredOutputList) {
    featuredOutputList.innerHTML = window.siteData.featuredOutputs
      .map(function mapOutput(item) {
        return (
          '<article class="feature-card">' +
          "  <h3>" + item.title + "</h3>" +
          "  <p>" + item.description + "</p>" +
          "</article>"
        );
      })
      .join("");
  }
}

// 成员页根据分组信息批量生成成员卡片。
function renderMembersPage() {
  const memberGroupList = document.getElementById("member-group-list");

  if (!memberGroupList) {
    return;
  }

  memberGroupList.innerHTML = window.siteData.members
    .map(function mapGroup(group) {
      return (
        '<section class="member-group">' +
        "  <h2>" + group.groupName + "</h2>" +
        '  <div class="member-grid">' +
             group.members
               .map(function mapMember(member) {
                 return (
                   '<article class="member-card">' +
                   '  <div class="avatar">' + member.name.slice(0, 1) + "</div>" +
                   "  <h3>" + member.name + "</h3>" +
                   '  <p class="member-role">' + member.role + "</p>" +
                   '  <p class="member-research"><strong>研究方向：</strong>' + member.research + "</p>" +
                   '  <p class="member-email"><strong>邮箱：</strong>' + member.email + "</p>" +
                   '  <div class="tag-row">' + renderTags(member.tags) + "</div>" +
                   "</article>"
                 );
               })
               .join("") +
        "  </div>" +
        "</section>"
      );
    })
    .join("");
}

// 成果页渲染研究方向、论文与项目三个模块。
function renderResearchPage() {
  const directionList = document.getElementById("research-direction-list");
  const publicationList = document.getElementById("publication-list");
  const projectList = document.getElementById("project-list");

  if (directionList) {
    directionList.innerHTML = window.siteData.researchAreas
      .map(function mapDirection(item) {
        return (
          '<article class="card">' +
          "  <h3>" + item.title + "</h3>" +
          "  <p>" + item.description + "</p>" +
          '  <div class="tag-row">' + renderTags(item.tags) + "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  if (publicationList) {
    publicationList.innerHTML = window.siteData.publications
      .map(function mapPublication(item) {
        return (
          '<article class="stack-card">' +
          "  <h3>" + item.title + "</h3>" +
          '  <p class="meta-text">' + item.venue + "</p>" +
          "  <p>" + item.summary + "</p>" +
          '  <div class="tag-row">' + renderTags(item.tags) + "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  if (projectList) {
    projectList.innerHTML = window.siteData.projects
      .map(function mapProject(item) {
        return (
          '<article class="stack-card">' +
          '  <p class="meta-text">' + item.meta + "</p>" +
          "  <h3>" + item.title + "</h3>" +
          "  <p>" + item.summary + "</p>" +
          "</article>"
        );
      })
      .join("");
  }
}

// News 页支持简单分类筛选，便于浏览大量动态。
function renderNewsPage() {
  const filterList = document.getElementById("news-filter-list");
  const timeline = document.getElementById("news-timeline");
  const categories = ["全部"].concat(
    Array.from(
      new Set(
        window.siteData.news.map(function mapCategory(item) {
          return item.category;
        })
      )
    )
  );

  if (!filterList || !timeline) {
    return;
  }

  // 内部函数负责根据分类重新绘制动态列表。
  function updateTimeline(activeCategory) {
    timeline.innerHTML = window.siteData.news
      .filter(function filterItem(item) {
        return activeCategory === "全部" || item.category === activeCategory;
      })
      .map(function mapItem(item) {
        return (
          '<article class="timeline-item">' +
          '  <div class="timeline-date">' + formatDate(item.date) + "</div>" +
          '  <div class="timeline-content">' +
          '    <span class="card-kicker">' + item.category + "</span>" +
          "    <h3>" + item.title + "</h3>" +
          "    <p>" + item.summary + "</p>" +
          "  </div>" +
          "</article>"
        );
      })
      .join("");
  }

  filterList.innerHTML = categories
    .map(function mapCategory(category, index) {
      const activeClass = index === 0 ? "is-active" : "";
      return (
        '<button class="filter-chip ' +
        activeClass +
        '" type="button" data-category="' +
        category +
        '">' +
        category +
        "</button>"
      );
    })
    .join("");

  filterList.addEventListener("click", function handleFilterClick(event) {
    const target = event.target;

    if (!(target instanceof HTMLButtonElement)) {
      return;
    }

    const selectedCategory = target.dataset.category;
    const buttons = filterList.querySelectorAll(".filter-chip");

    buttons.forEach(function resetButton(button) {
      button.classList.remove("is-active");
    });

    target.classList.add("is-active");
    updateTimeline(selectedCategory);
  });

  updateTimeline("全部");
}
