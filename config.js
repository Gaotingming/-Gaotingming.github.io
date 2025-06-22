// 个人主页配置文件
// 请根据你的实际情况修改以下内容

const CONFIG = {
    // 基本信息
    personal: {
        name: "高廷明",
        title: "经济学博士生",
        subtitle: "发展经济学",
        description: "我是一名专注于经济学研究的学者，主要研究方向包括宏观经济学、货币政策理论等。通过深入分析Gali、Walsh等经典文献，致力于理解现代宏观经济学的核心理论框架。",
        location: "中国，北京",
        email: "gaotingming@example.com",
        phone: "+86 123 4567 8900"
    },

    // 研究兴趣
    researchInterests: [
        { icon: "fas fa-chart-line", text: "宏观经济学" },
        { icon: "fas fa-coins", text: "货币政策理论" },
        { icon: "fas fa-industry", text: "生产函数分析" },
        { icon: "fas fa-calculator", text: "经济模型构建" },
        { icon: "fas fa-globe", text: "发展经济学" }
    ],

    // 技能
    skills: [
        { name: "Python数据分析", level: 90 },
        { name: "LaTeX排版", level: 85 },
        { name: "经济建模", level: 80 },
        { name: "统计分析", level: 75 },
        { name: "学术写作", level: 85 },
        { name: "R语言", level: 70 }
    ],

    // 学习笔记
    notes: [
        {
            icon: "fas fa-file-pdf",
            title: "Gali模型分析",
            description: "深入分析Gali的宏观经济学模型，包括生产函数、效用函数等核心概念的理论框架。",
            tags: ["宏观经济学", "DSGE模型"],
            link: "#"
        },
        {
            icon: "fas fa-calculator",
            title: "Walsh公式提取",
            description: "从Walsh文献中提取的关键公式和理论推导，包含货币政策传导机制分析。",
            tags: ["货币政策", "公式推导"],
            link: "#"
        },
        {
            icon: "fas fa-chart-bar",
            title: "生产函数分析",
            description: "不同类型生产函数的比较分析，包括有资本和无资本情况下的理论差异。",
            tags: ["生产理论", "比较分析"],
            link: "#"
        },
        {
            icon: "fas fa-book",
            title: "PDF分析报告",
            description: "对多篇经济学文献的系统性分析报告，总结核心观点和理论贡献。",
            tags: ["文献综述", "理论总结"],
            link: "#"
        }
    ],

    // 论文发表
    papers: [
        {
            year: "2024",
            title: "现代宏观经济学中的生产函数理论：一个比较分析框架",
            authors: "作者：高廷明",
            abstract: "本文通过比较分析Gali和Walsh等经典文献，探讨了不同生产函数设定对宏观经济模型的影响，为理解现代宏观经济学理论提供了新的视角。",
            links: [
                { icon: "fas fa-file-pdf", text: "PDF", url: "#" },
                { icon: "fas fa-code", text: "代码", url: "#" }
            ]
        },
        {
            year: "2024",
            title: "货币政策传导机制的理论与实证研究",
            authors: "作者：高廷明",
            abstract: "基于Walsh的理论框架，本文分析了货币政策传导机制的理论基础，并通过实证研究验证了理论模型的适用性。",
            links: [
                { icon: "fas fa-file-pdf", text: "PDF", url: "#" },
                { icon: "fas fa-code", text: "代码", url: "#" }
            ]
        }
    ],

    // 学习资源
    resources: [
        {
            icon: "fas fa-download",
            title: "代码资源",
            description: "Python代码和LaTeX模板，用于经济模型分析和学术论文写作。",
            items: ["PDF分析工具", "公式提取脚本", "LaTeX模板"],
            link: "#"
        },
        {
            icon: "fas fa-book-open",
            title: "推荐阅读",
            description: "精选的经济学经典文献和最新研究成果，帮助深入理解相关理论。",
            items: ["Gali - Monetary Policy", "Walsh - Monetary Theory", "相关研究论文"],
            link: "#"
        },
        {
            icon: "fas fa-tools",
            title: "工具推荐",
            description: "实用的学术研究工具和软件，提高研究效率。",
            items: ["Python数据分析", "LaTeX编辑器", "文献管理工具"],
            link: "#"
        }
    ],

    // 社交媒体链接
    socialLinks: [
        { icon: "fab fa-github", url: "https://github.com/gaotingming" },
        { icon: "fab fa-linkedin", url: "https://linkedin.com/in/gaotingming" },
        { icon: "fab fa-twitter", url: "https://twitter.com/gaotingming" },
        { icon: "fab fa-google-scholar", url: "https://scholar.google.com/citations?user=your-id" }
    ],

    // 网站设置
    site: {
        title: "高廷明 - 个人学术主页",
        description: "专注于经济学研究，分享学习心得与学术成果",
        keywords: "经济学,宏观经济学,货币政策,学术研究,学习笔记,高廷明"
    },

    // 主题颜色（可选）
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