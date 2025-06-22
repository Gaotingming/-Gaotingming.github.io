// 导航栏功能
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 点击导航链接时关闭菜单
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 技能条动画
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 观察技能部分
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// 卡片动画
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// 为所有卡片添加动画
document.querySelectorAll('.note-card, .resource-card, .paper-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardObserver.observe(card);
});

// 表单提交处理
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // 这里可以添加实际的表单提交逻辑
        console.log('表单提交:', { name, email, message });
        
        // 显示成功消息
        alert('消息已发送！我会尽快回复您。');
        
        // 清空表单
        contactForm.reset();
    });
}

// 打字机效果
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 页面加载完成后执行打字机效果
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// 添加页面加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 添加滚动进度条
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #2563eb, #3b82f6);
    z-index: 1001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// 添加返回顶部按钮
const backToTop = document.createElement('button');
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
`;

document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
    }
});

// 添加鼠标悬停效果
backToTop.addEventListener('mouseenter', () => {
    backToTop.style.transform = 'scale(1.1)';
});

backToTop.addEventListener('mouseleave', () => {
    backToTop.style.transform = 'scale(1)';
});

// 添加页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化所有工具提示
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', (e) => {
            const text = e.target.getAttribute('data-tooltip');
            const tooltipEl = document.createElement('div');
            tooltipEl.textContent = text;
            tooltipEl.style.cssText = `
                position: absolute;
                background: #1f2937;
                color: white;
                padding: 0.5rem;
                border-radius: 4px;
                font-size: 0.875rem;
                z-index: 1000;
                pointer-events: none;
            `;
            document.body.appendChild(tooltipEl);
            
            const rect = e.target.getBoundingClientRect();
            tooltipEl.style.left = rect.left + (rect.width / 2) - (tooltipEl.offsetWidth / 2) + 'px';
            tooltipEl.style.top = rect.top - tooltipEl.offsetHeight - 10 + 'px';
            
            e.target._tooltip = tooltipEl;
        });
        
        tooltip.addEventListener('mouseleave', (e) => {
            if (e.target._tooltip) {
                e.target._tooltip.remove();
                e.target._tooltip = null;
            }
        });
    });
});

// 个人主页交互脚本
document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面
    initPage();
    
    // 导航栏交互
    initNavigation();
    
    // 平滑滚动
    initSmoothScroll();
    
    // 动画效果
    initAnimations();
    
    // 表单处理
    initContactForm();
    
    // 返回顶部按钮
    initBackToTop();
});

// 初始化页面
function initPage() {
    // 设置页面标题和描述
    if (window.CONFIG) {
        document.title = CONFIG.site.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', CONFIG.site.description);
        }
    }
    
    // 添加页面加载动画
    document.body.classList.add('loaded');
}

// 导航栏交互
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 汉堡菜单切换
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // 导航链接点击关闭菜单
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // 滚动时导航栏样式变化
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 活跃导航链接高亮
    highlightActiveNavLink();
}

// 高亮当前活跃的导航链接
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// 平滑滚动
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // 考虑导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 动画效果
function initAnimations() {
    // 观察器选项
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // 创建观察器
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animateElements = document.querySelectorAll('.paper-item, .course-card, .seminar-item, .idea-card, .skill-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // 技能条动画
    animateSkillBars();
}

// 技能条动画
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// 联系表单处理
function initContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // 简单验证
            if (!name || !email || !message) {
                showNotification('请填写所有必填字段', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('请输入有效的邮箱地址', 'error');
                return;
            }
            
            // 模拟发送邮件
            showNotification('消息发送成功！我会尽快回复您。', 'success');
            this.reset();
        });
    }
}

// 邮箱验证
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 关闭按钮事件
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        hideNotification(notification);
    });
    
    // 自动关闭
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
}

// 隐藏通知
function hideNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// 返回顶部按钮
function initBackToTop() {
    // 创建返回顶部按钮
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // 滚动显示/隐藏按钮
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // 点击返回顶部
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 悬停效果
    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 6px 25px rgba(37, 99, 235, 0.4)';
    });
    
    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 20px rgba(37, 99, 235, 0.3)';
    });
}

// 动态加载配置数据（如果使用配置文件）
function loadConfigData() {
    if (window.CONFIG) {
        // 更新个人信息
        updatePersonalInfo();
        
        // 更新研究领域
        updateResearchInterests();
        
        // 更新技能
        updateSkills();
        
        // 更新论文列表
        updatePapers();
        
        // 更新课程资料
        updateCourses();
        
        // 更新组会记录
        updateSeminars();
        
        // 更新IDEA想法
        updateIdeas();
        
        // 更新联系信息
        updateContactInfo();
    }
}

// 更新个人信息
function updatePersonalInfo() {
    const personal = CONFIG.personal;
    
    // 更新页面标题
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.textContent = personal.name;
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = personal.subtitle;
    
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) heroDescription.textContent = `研究方向：${CONFIG.researchInterests.map(r => r.text).join(' · ')}`;
    
    // 更新关于我部分
    const aboutDescription = document.querySelector('.about-text p');
    if (aboutDescription) aboutDescription.textContent = personal.description;
    
    // 更新联系信息
    const contactEmail = document.querySelector('.contact-item span');
    if (contactEmail) contactEmail.textContent = personal.email;
}

// 更新研究领域
function updateResearchInterests() {
    const interestsList = document.querySelector('.research-interests');
    if (interestsList && CONFIG.researchInterests) {
        interestsList.innerHTML = CONFIG.researchInterests.map(interest => 
            `<li><i class="${interest.icon}"></i> ${interest.text}</li>`
        ).join('');
    }
}

// 更新技能
function updateSkills() {
    const skillsContainer = document.querySelector('.skills');
    if (skillsContainer && CONFIG.skills) {
        skillsContainer.innerHTML = CONFIG.skills.map(skill => `
            <div class="skill-item">
                <span class="skill-name">${skill.name}</span>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `).join('');
    }
}

// 更新论文列表
function updatePapers() {
    const papersList = document.querySelector('.papers-list');
    if (papersList && CONFIG.papers) {
        papersList.innerHTML = CONFIG.papers.map(paper => `
            <div class="paper-item">
                <div class="paper-year">${paper.year}</div>
                <div class="paper-content">
                    <h3>${paper.title}</h3>
                    <p class="paper-authors">作者：${paper.authors}</p>
                    <p class="paper-journal">期刊：${paper.journal}</p>
                    <p class="paper-abstract">${paper.abstract}</p>
                    <div class="paper-links">
                        ${paper.links.map(link => 
                            `<a href="${link.url}" class="paper-link"><i class="${link.icon}"></i> ${link.text}</a>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// 更新课程资料
function updateCourses() {
    const coursesGrid = document.querySelector('.courses-grid');
    if (coursesGrid && CONFIG.courses) {
        coursesGrid.innerHTML = CONFIG.courses.map(course => `
            <div class="course-card">
                <div class="course-icon">
                    <i class="${course.icon}"></i>
                </div>
                <h3>${course.title}</h3>
                <p class="course-instructor">授课教师：${course.instructor}</p>
                <p class="course-semester">学期：${course.semester}</p>
                <p class="course-description">${course.description}</p>
                
                <h4>课程内容</h4>
                <ul class="course-notes">
                    ${course.notes.map(note => `<li>${note}</li>`).join('')}
                </ul>
                
                <div class="course-materials">
                    ${course.materials.map(material => 
                        `<a href="${material.url}" class="material-link"><i class="${material.icon}"></i> ${material.text}</a>`
                    ).join('')}
                </div>
            </div>
        `).join('');
    }
}

// 更新组会记录
function updateSeminars() {
    const seminarsList = document.querySelector('.seminars-list');
    if (seminarsList && CONFIG.seminars) {
        seminarsList.innerHTML = CONFIG.seminars.map(seminar => `
            <div class="seminar-item">
                <div class="seminar-header">
                    <div class="seminar-icon">
                        <i class="${seminar.icon}"></i>
                    </div>
                    <div class="seminar-info">
                        <h3>${seminar.title}</h3>
                        <p class="seminar-date">${seminar.date}</p>
                        <p class="seminar-topic">主题：${seminar.topic}</p>
                    </div>
                </div>
                <div class="seminar-content">
                    <p class="seminar-description">${seminar.description}</p>
                    <p class="seminar-presenter">主讲人：${seminar.presenter}</p>
                    <p class="seminar-notes"><strong>讨论要点：</strong>${seminar.notes}</p>
                    <div class="seminar-materials">
                        ${seminar.materials.map(material => 
                            `<a href="${material.url}" class="material-link"><i class="${material.icon}"></i> ${material.text}</a>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// 更新IDEA想法
function updateIdeas() {
    const ideasGrid = document.querySelector('.ideas-grid');
    if (ideasGrid && CONFIG.ideas) {
        ideasGrid.innerHTML = CONFIG.ideas.map(idea => `
            <div class="idea-card">
                <div class="idea-icon">
                    <i class="${idea.icon}"></i>
                </div>
                <h3>${idea.title}</h3>
                <p class="idea-category">${idea.category}</p>
                <p class="idea-description">${idea.description}</p>
                <div class="idea-status">
                    <span class="status-badge status-${idea.status.toLowerCase().replace(' ', '-')}">${idea.status}</span>
                </div>
                <div class="idea-keywords">
                    ${idea.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
                </div>
                <p class="idea-notes"><strong>下一步：</strong>${idea.notes}</p>
            </div>
        `).join('');
    }
}

// 更新联系信息
function updateContactInfo() {
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo && CONFIG.personal) {
        const personal = CONFIG.personal;
        contactInfo.innerHTML = `
            <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <span>${personal.email}</span>
            </div>
            <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${personal.location}</span>
            </div>
            <div class="contact-item">
                <i class="fas fa-university"></i>
                <span>${personal.subtitle}</span>
            </div>
            <div class="social-links">
                ${CONFIG.socialLinks.map(link => 
                    `<a href="${link.url}" class="social-link"><i class="${link.icon}"></i></a>`
                ).join('')}
            </div>
        `;
    }
}

// 页面加载完成后执行
window.addEventListener('load', function() {
    // 加载配置数据
    loadConfigData();
    
    // 添加页面加载完成类
    document.body.classList.add('page-loaded');
    
    // 初始化工具提示
    initTooltips();
});

// 初始化工具提示
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: #1f2937;
                color: white;
                padding: 0.5rem 0.75rem;
                border-radius: 6px;
                font-size: 0.875rem;
                z-index: 1000;
                pointer-events: none;
                white-space: nowrap;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// 添加CSS动画类
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .nav-link.active {
        color: #2563eb;
        font-weight: 600;
    }
    
    .loaded {
        opacity: 1;
    }
    
    .page-loaded {
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style); 