# 个人学术主页

一个现代化的个人学术主页，用于展示学习笔记、论文发表、学习资源等内容。

## 功能特点

### 🎨 现代化设计
- 响应式设计，适配各种设备
- 渐变色彩和毛玻璃效果
- 平滑的动画和过渡效果
- 现代化的卡片式布局

### 📚 内容展示
- **个人介绍**：展示个人背景、研究兴趣和技能
- **学习笔记**：展示学术笔记和研究成果
- **论文发表**：列出已发表的论文和研究成果
- **学习资源**：分享代码、工具和推荐阅读
- **联系方式**：提供联系表单和社交媒体链接

### ⚡ 交互功能
- 响应式导航栏
- 平滑滚动效果
- 技能条动画
- 卡片悬停效果
- 返回顶部按钮
- 滚动进度条
- 打字机效果

## 文件结构

```
个人主页/
├── index.html          # 主页面文件
├── styles.css          # 样式文件
├── script.js           # JavaScript功能文件
└── README.md           # 说明文档
```

## 使用方法

### 1. 基本使用
直接在浏览器中打开 `index.html` 文件即可查看个人主页。

### 2. 自定义内容

#### 修改个人信息
在 `index.html` 中找到相应的部分进行修改：

```html
<!-- 修改个人介绍 -->
<section id="about" class="about">
    <div class="about-text">
        <h3>个人简介</h3>
        <p>在这里修改你的个人简介...</p>
        
        <h3>研究兴趣</h3>
        <ul class="research-interests">
            <li><i class="fas fa-chart-line"></i> 你的研究领域</li>
        </ul>
    </div>
</section>
```

#### 添加学习笔记
在 `index.html` 的笔记部分添加新的笔记卡片：

```html
<div class="note-card">
    <div class="note-icon">
        <i class="fas fa-file-pdf"></i>
    </div>
    <h3>笔记标题</h3>
    <p>笔记描述...</p>
    <div class="note-tags">
        <span class="tag">标签1</span>
        <span class="tag">标签2</span>
    </div>
    <a href="#" class="note-link">查看详情 <i class="fas fa-arrow-right"></i></a>
</div>
```

#### 添加论文发表
在论文部分添加新的论文条目：

```html
<div class="paper-item">
    <div class="paper-year">2024</div>
    <div class="paper-content">
        <h3>论文标题</h3>
        <p class="paper-authors">作者：你的姓名</p>
        <p class="paper-abstract">论文摘要...</p>
        <div class="paper-links">
            <a href="#" class="paper-link"><i class="fas fa-file-pdf"></i> PDF</a>
            <a href="#" class="paper-link"><i class="fas fa-code"></i> 代码</a>
        </div>
    </div>
</div>
```

### 3. 自定义样式

#### 修改颜色主题
在 `styles.css` 中修改主要颜色：

```css
:root {
    --primary-color: #2563eb;    /* 主色调 */
    --secondary-color: #3b82f6;  /* 次要色调 */
    --accent-color: #10b981;     /* 强调色 */
}
```

#### 修改字体
在 `index.html` 的 `<head>` 部分修改字体链接：

```html
<link href="https://fonts.googleapis.com/css2?family=你的字体:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### 4. 部署到网络

#### 使用 GitHub Pages
1. 将文件上传到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择主分支作为源

#### 使用 Netlify
1. 注册 Netlify 账户
2. 拖拽项目文件夹到 Netlify 部署区域
3. 获得自动生成的域名

## 技术栈

- **HTML5**：语义化标记
- **CSS3**：现代化样式，包括 Flexbox 和 Grid
- **JavaScript ES6+**：交互功能和动画效果
- **Font Awesome**：图标库
- **Google Fonts**：字体服务

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 自定义建议

### 1. 添加更多内容
- 项目展示
- 博客文章
- 学术会议参与
- 获奖情况

### 2. 增强功能
- 多语言支持
- 暗色主题切换
- 搜索功能
- 评论系统

### 3. 性能优化
- 图片懒加载
- 代码分割
- 缓存策略
- CDN 加速

## 许可证

MIT License - 可自由使用和修改

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 联系方式

如有问题或建议，请通过以下方式联系：
- 邮箱：your-email@example.com
- GitHub：your-github-username

---

**注意**：请记得将示例中的个人信息、链接和联系方式替换为你自己的内容。 