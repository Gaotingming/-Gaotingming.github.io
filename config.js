// 个人主页配置文件
// 高廷明 - 对外经济贸易大学经济学博士

const CONFIG = {
    // 基本信息
    personal: {
        name: "高廷明",
        title: "经济学博士",
        subtitle: "对外经济贸易大学经济学院2024级",
        description: "我是对外经济贸易大学经济学院2024级经济学博士，主要研究方向包括发展经济学、劳动经济学和文化经济学。致力于通过严谨的学术研究，为经济发展和社会进步贡献智慧。",
        location: "中国，北京",
        email: "gaotingming@uibe.edu.cn",
        phone: "+86 123 4567 8900"
    },

    // 研究领域
    researchInterests: [
        { icon: "fas fa-globe", text: "发展经济学" },
        { icon: "fas fa-users", text: "劳动经济学" },
        { icon: "fas fa-theater-masks", text: "文化经济学" },
        { icon: "fas fa-chart-line", text: "计量经济学" },
        { icon: "fas fa-microscope", text: "应用微观计量" }
    ],

    // 技能
    skills: [
        { name: "计量经济学", level: 90 },
        { name: "应用微观计量", level: 85 },
        { name: "Python数据分析", level: 80 },
        { name: "R语言", level: 75 },
        { name: "Stata", level: 85 },
        { name: "LaTeX排版", level: 80 }
    ],

    // 论文发表
    papers: [
        {
            year: "2024",
            title: "发展经济学视角下的区域经济增长研究",
            authors: "高廷明",
            abstract: "本文从发展经济学的角度，分析了区域经济增长的影响因素，探讨了政策干预对经济发展的作用机制。",
            journal: "待发表",
            links: [
                { icon: "fas fa-file-pdf", text: "PDF", url: "#" },
                { icon: "fas fa-code", text: "代码", url: "#" }
            ]
        },
        {
            year: "2024",
            title: "劳动市场中的性别差异：文化经济学解释",
            authors: "高廷明",
            abstract: "运用文化经济学的理论框架，分析了劳动市场中性别差异的文化根源和制度影响。",
            journal: "工作论文",
            links: [
                { icon: "fas fa-file-pdf", text: "PDF", url: "#" },
                { icon: "fas fa-code", text: "代码", url: "#" }
            ]
        },
        {
            year: "2024",
            title: "文化资本对人力资本积累的影响",
            authors: "高廷明",
            abstract: "探讨了文化资本在人力资本积累过程中的作用机制，为理解教育投资提供了新的视角。",
            journal: "研究进行中",
            links: [
                { icon: "fas fa-file-pdf", text: "PDF", url: "#" },
                { icon: "fas fa-code", text: "代码", url: "#" }
            ]
        }
    ],

    // 课程资料
    courses: [
        {
            icon: "fas fa-chart-line",
            title: "计量经济学",
            instructor: "授课教师",
            semester: "2024年秋季",
            description: "计量经济学理论与应用，包括线性回归、工具变量、面板数据等方法。",
            notes: [
                "线性回归模型",
                "工具变量法",
                "面板数据分析",
                "时间序列分析"
            ],
            materials: [
                { icon: "fas fa-file-pdf", text: "课程大纲", url: "#" },
                { icon: "fas fa-book", text: "课程笔记", url: "#" },
                { icon: "fas fa-code", text: "代码示例", url: "#" }
            ]
        },
        {
            icon: "fas fa-microscope",
            title: "应用微观计量",
            instructor: "授课教师",
            semester: "2024年秋季",
            description: "微观计量经济学在实证研究中的应用，重点关注因果推断和识别策略。",
            notes: [
                "因果推断基础",
                "随机实验设计",
                "自然实验方法",
                "断点回归设计"
            ],
            materials: [
                { icon: "fas fa-file-pdf", text: "课程大纲", url: "#" },
                { icon: "fas fa-book", text: "课程笔记", url: "#" },
                { icon: "fas fa-code", text: "代码示例", url: "#" }
            ]
        }
    ],

    // 组会记录
    seminars: [
        {
            icon: "fas fa-users",
            title: "发展经济学组会",
            date: "2024年12月",
            topic: "区域发展政策评估",
            description: "讨论了区域发展政策的评估方法，包括双重差分、合成控制等方法的应用。",
            presenter: "组会主讲人",
            notes: "政策评估中的识别问题、数据质量要求、稳健性检验等",
            materials: [
                { icon: "fas fa-file-pdf", text: "组会材料", url: "#" },
                { icon: "fas fa-book", text: "讨论记录", url: "#" }
            ]
        },
        {
            icon: "fas fa-users",
            title: "劳动经济学组会",
            date: "2024年11月",
            topic: "劳动力市场匹配理论",
            description: "探讨了劳动力市场中的匹配机制，以及信息不对称对就业的影响。",
            presenter: "组会主讲人",
            notes: "匹配理论、搜索摩擦、工资决定机制等",
            materials: [
                { icon: "fas fa-file-pdf", text: "组会材料", url: "#" },
                { icon: "fas fa-book", text: "讨论记录", url: "#" }
            ]
        },
        {
            icon: "fas fa-users",
            title: "文化经济学组会",
            date: "2024年10月",
            topic: "文化认同与经济行为",
            description: "分析了文化认同如何影响个体的经济决策和行为模式。",
            presenter: "组会主讲人",
            notes: "文化认同测量、行为经济学、实验设计等",
            materials: [
                { icon: "fas fa-file-pdf", text: "组会材料", url: "#" },
                { icon: "fas fa-book", text: "讨论记录", url: "#" }
            ]
        }
    ],

    // IDEA想法
    ideas: [
        {
            icon: "fas fa-lightbulb",
            title: "数字经济发展与文化传承",
            category: "发展经济学",
            description: "探讨数字技术发展对传统文化传承的影响，以及如何在数字化时代保护和发展文化遗产。",
            status: "构思阶段",
            keywords: ["数字经济", "文化传承", "政策设计"],
            notes: "需要收集文化产业发展数据，设计政策评估框架"
        },
        {
            icon: "fas fa-lightbulb",
            title: "教育投资的文化回报",
            category: "劳动经济学",
            description: "研究教育投资在不同文化背景下的回报差异，以及文化因素对人力资本积累的影响。",
            status: "文献调研",
            keywords: ["教育回报", "文化资本", "人力资本"],
            notes: "需要构建文化资本测量指标，收集教育面板数据"
        },
        {
            icon: "fas fa-lightbulb",
            title: "文化认同与消费行为",
            category: "文化经济学",
            description: "分析文化认同如何影响消费决策，以及文化因素在消费行为中的作用机制。",
            status: "理论构建",
            keywords: ["文化认同", "消费行为", "行为经济学"],
            notes: "需要设计实验验证文化认同对消费的影响"
        }
    ],

    // 学习资源
    resources: [
        {
            icon: "fas fa-download",
            title: "研究工具",
            description: "常用的经济学研究工具和软件，提高研究效率。",
            items: ["Stata", "R语言", "Python", "LaTeX"],
            link: "#"
        },
        {
            icon: "fas fa-book-open",
            title: "推荐阅读",
            description: "发展经济学、劳动经济学、文化经济学的经典文献和最新研究。",
            items: ["发展经济学经典", "劳动经济学前沿", "文化经济学新进展"],
            link: "#"
        },
        {
            icon: "fas fa-tools",
            title: "研究方法",
            description: "计量经济学和应用微观计量的研究方法与技巧。",
            items: ["因果推断", "实验设计", "数据处理"],
            link: "#"
        }
    ],

    // 社交媒体链接
    socialLinks: [
        { icon: "fab fa-github", url: "https://github.com/gaotingming" },
        { icon: "fab fa-linkedin", url: "https://linkedin.com/in/gaotingming" },
        { icon: "fab fa-google-scholar", url: "https://scholar.google.com/citations?user=your-id" },
        { icon: "fas fa-envelope", url: "mailto:gaotingming@uibe.edu.cn" }
    ],

    // 网站设置
    site: {
        title: "高廷明 - 经济学博士个人主页",
        description: "对外经济贸易大学经济学院2024级经济学博士，研究方向：发展经济学、劳动经济学、文化经济学",
        keywords: "高廷明,经济学博士,发展经济学,劳动经济学,文化经济学,对外经济贸易大学"
    },

    // 主题颜色
    theme: {
        primary: "#2563eb",
        secondary: "#3b82f6",
        accent: "#10b981",
        background: "#f8fafc",
        text: "#1f2937"
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
} 