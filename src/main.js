/**
 * Mentai Site Scripts (v2.0)
 * Bundled for file:// protocol compatibility (no ES modules)
 */

class Header {
  constructor() {
    this.render();
  }

  render() {
    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `
      <div class="container header-inner">
        <a href="index.html" class="logo">
          <img src="./assets/img/logo.png" alt="mentai">
        </a>
        <nav class="nav-menu">
          <ul>
            <li><a href="service.html">サービス</a></li>
            <li><a href="index.html#flow">体験の流れ</a></li>
            <li><a href="features.html">機能</a></li>
            <li><a href="case.html">導入事例</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="about.html">会社概要</a></li>
          </ul>
        </nav>
        <div class="header-actions">
           <a href="contact.html" class="btn-text">お問い合わせ</a>
           <a href="https://dr.mentai.me/" target="_blank" class="btn btn-primary sm">無料でAI面接</a>
        </div>
        <button class="mobile-menu-toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    `;

    document.body.prepend(header);
    this.addStyles();
    this.attachEvents();
  }

  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .site-header {
        height: var(--header-height);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        z-index: 1000;
        border-bottom: 1px solid var(--line);
        display: flex;
        align-items: center;
        transition: box-shadow 0.3s ease;
      }
      
      .site-header.scrolled {
        box-shadow: var(--shadow-sm);
        background: rgba(255, 255, 255, 0.85);
      }
      
      .header-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
      
      .logo {
        height: 100px;
        display: flex;
        align-items: center;
      }
      .logo img {
        height: 100%;
        width: auto;
        object-fit: contain;
      }
      
      .nav-menu ul {
        display: flex;
        gap: 28px;
        margin: 0;
      }
      
      .nav-menu a {
        font-weight: 500;
        font-size: 14px;
        color: var(--text);
        opacity: 0.8;
      }
      
      .nav-menu a:hover {
        opacity: 1;
        color: var(--primary);
      }
      
      .header-actions {
        display: flex;
        align-items: center;
        gap: 20px;
      }
      
      .btn-text {
        font-weight: 700;
        font-size: 13px;
        color: var(--muted);
      }
      .btn-text:hover {
        color: var(--primary);
      }
      
      .mobile-menu-toggle {
        display: none;
        flex-direction: column;
        gap: 6px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        z-index: 1001; 
      }
      
      .mobile-menu-toggle span {
        width: 20px;
        height: 2px;
        background-color: var(--text);
        transition: 0.3s;
        border-radius: 2px;
      }
      
      @media (max-width: 960px) {
        .nav-menu { display: none; }
        .header-actions { display: none; }
        .mobile-menu-toggle { display: flex; }
      }
      
      /* Mobile Menu Overlay Styles */
      .mobile-menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(255, 255, 255, 0.98);
        z-index: 1000;
        padding: 100px 24px 40px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
      
      body.mobile-menu-open { overflow: hidden; }
      
      body.mobile-menu-open .mobile-menu-overlay {
        opacity: 1;
        pointer-events: auto;
      }
      
      .mobile-menu-overlay ul {
        display: flex;
        flex-direction: column;
        gap: 24px;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        padding: 0;
        list-style: none;
      }
      
      .mobile-menu-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
      .mobile-menu-toggle.active span:nth-child(2) { opacity: 0; }
      .mobile-menu-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }
    `;
    document.head.appendChild(style);
  }

  attachEvents() {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.site-header');
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    setTimeout(() => {
      const toggle = document.querySelector('.mobile-menu-toggle');
      if (toggle) {
        toggle.addEventListener('click', () => {
          toggle.classList.toggle('active');
          document.body.classList.toggle('mobile-menu-open');

          let mobileMenu = document.querySelector('.mobile-menu-overlay');
          if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.className = 'mobile-menu-overlay';
            mobileMenu.innerHTML = `
                <nav>
                  <ul>
                    <li><a href="service.html">サービス詳細</a></li>
                    <li><a href="index.html#flow">体験の流れ</a></li>
                    <li><a href="features.html">機能紹介</a></li>
                    <li><a href="case.html">導入事例</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="about.html">会社概要</a></li>
                  </ul>
                  <div style="margin-top: 40px; display: flex; flex-direction: column; gap: 16px;">
                    <a href="contact.html" class="btn btn-outline" style="justify-content: center;">お問い合わせ</a>
                    <a href="https://dr.mentai.me/" class="btn btn-primary" style="justify-content: center;">無料でAI面接を体験</a>
                  </div>
                </nav>
              `;
            document.body.appendChild(mobileMenu);

            const links = mobileMenu.querySelectorAll('a');
            links.forEach(link => {
              link.addEventListener('click', () => {
                toggle.classList.remove('active');
                document.body.classList.remove('mobile-menu-open');
              });
            });
          }
        });
      }
    }, 0);
  }
}

class Footer {
  constructor() {
    this.render();
  }

  render() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
      <div class="container" style="position: relative; z-index: 10;">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">mentai</div>
            <p class="footer-desc">
              AI面接対策 × スカウト × 内定支援<br>
              あなたの「強み」を可視化するキャリア支援プラットフォーム。
            </p>
          </div>
          <div class="footer-links">
            <h4>サービス</h4>
            <ul>
              <li><a href="service.html">サービス詳細</a></li>
              <li><a href="features.html">機能紹介</a></li>
              <li><a href="index.html#flow">体験の流れ</a></li>
              <li><a href="case.html">導入事例</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>サポート</h4>
            <ul>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="contact.html">お問い合わせ</a></li>
              <li><a href="about.html">運営会社</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>SNS</h4>
            <div class="sns-links">
               <a href="https://www.instagram.com/mentai_ai_lab/" target="_blank">Instagram</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 mentai. All rights reserved.</p>
        </div>
      </div>
    `;

    document.body.appendChild(footer);
    this.addStyles();
  }

  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .site-footer {
        background-color: var(--primary);
        padding: 80px 0 32px;
        margin-top: auto;
        position: relative;
        color: white;
      }
      .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 40px;
        margin-bottom: 64px;
      }
      .footer-logo {
        font-size: 26px;
        font-weight: 800;
        color: white;
        margin-bottom: 16px;
        font-family: var(--font-en);
      }
      .footer-desc {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.8;
      }
      .footer-links h4 {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 24px;
        color: white;
        opacity: 0.9;
      }
      .footer-links ul li { margin-bottom: 12px; }
      .footer-links ul { list-style: none; padding: 0; }
      .footer-links a { font-size: 14px; color: rgba(255, 255, 255, 0.7); }
      .footer-links a:hover { color: white; }
      
      .footer-bottom {
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        padding-top: 32px;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
      }
      .footer-bottom-links { display: flex; gap: 24px; }
      .footer-bottom-links a { color: rgba(255, 255, 255, 0.6); }
      .footer-bottom-links a:hover { color: white; }
      
      @media (max-width: 900px) {
        .footer-grid { grid-template-columns: 1fr; gap: 40px; }
        .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
        .footer-bottom-links { justify-content: center; }
      }
    `;
    document.head.appendChild(style);
  }
}

class MobileStickyCTA {
  constructor() {
    this.render();
  }

  render() {
    if (typeof window === 'undefined') return;

    const stickyCTA = document.createElement('div');
    stickyCTA.className = 'mobile-sticky-cta';
    stickyCTA.innerHTML = `
      <a href="https://dr.mentai.me/" class="btn btn-primary" style="width: 100%; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);">
        無料で体験する
      </a>
    `;
    document.body.appendChild(stickyCTA);

    const style = document.createElement('style');
    style.textContent = `
      .mobile-sticky-cta {
        position: fixed;
        bottom: 24px;
        left: 20px;
        right: 20px;
        z-index: 900;
        animation: fadeInUp 0.5s 1s backwards;
        display: none;
      }
      @media (max-width: 768px) {
        .mobile-sticky-cta {
          display: block;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Initialize layout
document.addEventListener('DOMContentLoaded', () => {
  new Header();
  new Footer();
  new MobileStickyCTA();

  // Page transition effect
  document.body.classList.add('fade-in-up');
});
