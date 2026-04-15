/* 全站共享数据：
 * 1. 课题组基本信息、导航、联系方式统一维护在这里；
 * 2. 四个页面的主体内容也从这里读取；
 * 3. 后续你只需修改本文件中的文本数据，即可同步更新整站内容。
 */
window.siteData = {
  // 站点基础信息会被导航、页脚、首页头图等多个位置复用。
  site: {
    name: "智能感知与协同计算课题组",
    shortName: "SCC Lab",
    tagline: "聚焦智能感知、多模态理解、协同计算与科研应用转化。",
    description:
      "课题组围绕智能感知、具身智能、多模态计算与数据驱动科研展开研究，建设开放协作、交叉融合的研究平台。",
    email: "scc-lab@example.edu.cn",
    location: "浙江大学 · 紫金港校区",
    address: "浙江省杭州市西湖区余杭塘路 866 号",
    copyrightName: "智能感知与协同计算课题组"
  },

  // 顶部导航数据单独维护，新增页面时只需在此处追加一项。
  navigation: [
    { label: "主页", href: "index.html", page: "home" },
    { label: "成员介绍", href: "members.html", page: "members" },
    { label: "工作成果", href: "research.html", page: "research" },
    { label: "完整 News", href: "news.html", page: "news" }
  ],

  // 首页头图区域的统计数据，用于快速建立可信度与信息密度。
  hero: {
    title: "智能感知与协同计算课题组",
    text:
      "我们致力于构建面向复杂真实场景的智能系统，研究方向覆盖多模态感知、边云协同推理、科学智能与开放数据平台，面向医疗、制造与城市治理等场景开展应用验证。",
    metrics: [
      { value: "20+", label: "在研成员" },
      { value: "30+", label: "近年论文成果" },
      { value: "8", label: "合作单位" },
      { value: "4", label: "重点方向" }
    ]
  },

  // 首页和成果页共用的研究方向数据。
  researchAreas: [
    {
      title: "多模态感知与理解",
      description:
        "研究视觉、文本、时序信号与传感器数据的统一表示学习，面向复杂开放环境提升模型鲁棒性与泛化能力。",
      tags: ["视觉语言", "表示学习", "时序分析"]
    },
    {
      title: "边云协同智能计算",
      description:
        "围绕资源受限设备部署、低时延推理与协同调度设计算法与系统，提高智能应用在真实场景中的可落地性。",
      tags: ["模型压缩", "系统优化", "边缘部署"]
    },
    {
      title: "科学智能与交叉应用",
      description:
        "将机器学习方法应用于医学影像、材料设计与复杂工程系统，推动科研问题的数据驱动建模与知识发现。",
      tags: ["医学 AI", "科研数据", "交叉创新"]
    },
    {
      title: "可信智能与开放平台",
      description:
        "构建可解释、可审计、可协作的智能平台，支撑课题组数据资产管理、开放共享与长期演化。",
      tags: ["可信 AI", "数据治理", "平台建设"]
    }
  ],

  // 成员页按组展示，结构适合后期持续扩展。
  members: [
    {
      groupName: "教师与负责人",
      members: [
        {
          name: "张某某",
          role: "课题组负责人 / 教授",
          research: "多模态机器学习、边云协同计算、科学智能",
          email: "leader@example.edu.cn",
          tags: ["博士生导师", "国家级项目负责人"]
        },
        {
          name: "李某某",
          role: "副教授",
          research: "可信人工智能、知识增强学习、智慧医疗",
          email: "li@example.edu.cn",
          tags: ["青年骨干", "医工交叉"]
        }
      ]
    },
    {
      groupName: "博士研究生",
      members: [
        {
          name: "陈同学",
          role: "博士研究生",
          research: "视觉语言模型与跨模态检索",
          email: "chen@example.edu.cn",
          tags: ["CVPR", "多模态"]
        },
        {
          name: "王同学",
          role: "博士研究生",
          research: "边缘设备模型压缩与实时推理优化",
          email: "wang@example.edu.cn",
          tags: ["系统优化", "部署加速"]
        }
      ]
    },
    {
      groupName: "硕士研究生",
      members: [
        {
          name: "赵同学",
          role: "硕士研究生",
          research: "医学影像分割与病灶分析",
          email: "zhao@example.edu.cn",
          tags: ["MICCAI", "医学 AI"]
        },
        {
          name: "孙同学",
          role: "硕士研究生",
          research: "城市时空数据建模与异常检测",
          email: "sun@example.edu.cn",
          tags: ["时空计算", "城市智能"]
        },
        {
          name: "周同学",
          role: "硕士研究生",
          research: "科研数据平台前端与可视分析",
          email: "zhou@example.edu.cn",
          tags: ["可视化", "Web 系统"]
        }
      ]
    },
    {
      groupName: "合作与访问成员",
      members: [
        {
          name: "钱某某",
          role: "合作研究员",
          research: "大模型推理系统与软硬件协同优化",
          email: "qian@example.org",
          tags: ["联合培养", "产业合作"]
        },
        {
          name: "吴同学",
          role: "访问学生",
          research: "数据治理与开放科研平台",
          email: "wu@example.org",
          tags: ["联合指导", "开放科学"]
        }
      ]
    }
  ],

  // 成果页中的论文信息。
  publications: [
    {
      title: "Cross-Modal Scientific Representation Learning for Complex Experiment Data",
      venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence, 2025",
      summary:
        "提出跨模态科学数据统一表示框架，提升实验场景中的检索、预测与异常识别性能。",
      tags: ["TPAMI", "科学智能", "表示学习"]
    },
    {
      title: "Adaptive Edge-Cloud Collaboration for Real-Time Multi-Camera Perception",
      venue: "ACM MobiCom, 2024",
      summary:
        "面向多摄像头实时感知任务设计自适应边云协同策略，在时延与精度之间取得更优平衡。",
      tags: ["MobiCom", "边云协同", "系统优化"]
    },
    {
      title: "可信医学影像分析中的多源知识增强分割方法",
      venue: "中国科学：信息科学, 2024",
      summary:
        "融合临床先验知识与深度学习模型，提升小样本病灶分割任务中的可解释性与稳定性。",
      tags: ["医学 AI", "知识增强", "中文期刊"]
    }
  ],

  // 成果页中的项目与转化信息。
  projects: [
    {
      title: "国家自然科学基金重点项目：开放环境下的可信多模态智能",
      summary:
        "围绕开放场景识别、分布漂移建模与模型可信评估，构建新一代可信智能方法体系。",
      meta: "2025 - 2029"
    },
    {
      title: "浙江省重点研发计划：面向智慧医疗的边缘智能分析平台",
      summary:
        "联合医院与企业伙伴建设端边云一体化平台，支持影像分析、临床辅助与隐私保护计算。",
      meta: "2024 - 2027"
    },
    {
      title: "企业合作项目：工业质检多模态大模型落地",
      summary:
        "服务智能制造场景，实现缺陷识别、知识问答与工艺辅助决策的协同部署。",
      meta: "已完成技术转化"
    }
  ],

  // 首页精选成果直接从此处读取，突出展示即可。
  featuredOutputs: [
    {
      title: "高水平论文持续产出",
      description:
        "近三年在人工智能、移动计算与交叉应用方向持续发表高水平论文，形成稳定研究主线。"
    },
    {
      title: "场景驱动的平台建设",
      description:
        "建设面向医疗与城市场景的数据平台与算法原型系统，推动算法向真实应用演进。"
    },
    {
      title: "开放合作与联合培养",
      description:
        "与高校、医院、研究院和企业建立合作，支撑联合项目、学生培养与成果转化。"
    }
  ],

  // News 数据既用于首页“近期科研进展”，也用于完整 News 页面。
  news: [
    {
      date: "2026-04-10",
      category: "论文",
      title: "课题组论文被 CVPR 2026 接收",
      summary:
        "团队关于跨模态场景理解的最新工作被 CVPR 2026 录用，相关代码与数据整理后将逐步开放。"
    },
    {
      date: "2026-03-22",
      category: "项目",
      title: "启动边云协同智能平台校企联合项目",
      summary:
        "课题组与合作企业共同启动新项目，围绕边缘设备部署、数据闭环与推理效率开展联合攻关。"
    },
    {
      date: "2026-03-05",
      category: "交流",
      title: "邀请海外学者举办学术讲座",
      summary:
        "围绕科学智能与实验自动化主题举办专题讲座，吸引校内外师生共同参与交流。"
    },
    {
      date: "2026-02-18",
      category: "获奖",
      title: "博士生获得校级优秀学术成果奖",
      summary:
        "课题组博士生在多模态学习方向的研究成果获评年度优秀学术成果。"
    },
    {
      date: "2026-01-12",
      category: "平台",
      title: "科研数据治理平台完成第一阶段上线",
      summary:
        "平台已支持项目归档、数据版本管理与基础可视化功能，为后续开放共享打下基础。"
    },
    {
      date: "2025-12-20",
      category: "合作",
      title: "与附属医院建立智慧医疗联合研究机制",
      summary:
        "双方将在影像分析、临床决策支持与数据安全治理方面开展长期合作。"
    }
  ]
};
