export class Header {
    constructor() {
        this.render();
    }

    render() {
        const header = document.createElement('header');
        header.className = 'site-header';
        header.innerHTML = `
      <div class="container header-inner">
        <a href="/" class="logo">
          mentai
        </a>
        <nav class="nav-menu">
          <ul>
            <li><a href="/service.html">サービス</a></li>
            <li><a href="/features.html">機能</a></li>
            <li><a href="/pricing.html">料金</a></li>
            <li><a href="/case.html">導入事例</a></li>
            <li><a href="/faq.html">FAQ</a></li>
            <li><a href="/about.html">会社概要</a></li>
          </ul>
        </nav>
        <div class="header-actions">
           <a href="/contact.html" class="btn-text">お問い合わせ</a>
           <a href="https://dr.mentai.me/" target="_blank" class="btn btn-primary sm">無料で体験する</a>
        </div>
        <button class="mobile-menu-toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    `;

        // Insert at the top of body
        document.body.prepend(header);

        // Add styles just for header if needed, or rely on global
        this.addStyles();
        this.attachEvents();
    }

    addStyles() {
        // Basic structural styles for header to ensure it renders correctly immediately
        const style = document.createElement('style');
        style.textContent = `
      .site-header {
        height: var(--header-height);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        z-index: 1000;
        border-bottom: 1px solid var(--color-border);
        display: flex;
        align-items: center;
      }
      
      .header-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
      
      .logo {
        font-size: 24px;
        font-weight: 800;
        color: var(--color-primary);
        letter-spacing: -0.5px;
      }
      
      .nav-menu ul {
        display: flex;
        gap: 32px;
      }
      
      .nav-menu a {
        font-weight: 500;
        font-size: 15px;
      }
      
      .header-actions {
        display: flex;
        align-items: center;
        gap: 24px;
      }
      
      .btn-text {
        font-weight: 700;
        font-size: 14px;
      }
      
      .mobile-menu-toggle {
        display: none;
        flex-direction: column;
        gap: 6px;
        background: none;
        border: none;
        cursor: pointer;
      }
      
      .mobile-menu-toggle span {
        width: 24px;
        height: 2px;
        background-color: var(--color-text);
        transition: 0.3s;
      }
      
      @media (max-width: 900px) {
        .nav-menu {
          display: none; /* simple hide for now */
        }
        .header-actions {
          display: none;
        }
        .mobile-menu-toggle {
          display: flex;
        }
      }
    `;
        document.head.appendChild(style);
    }

    attachEvents() {
        // Mobile menu logic can go here
    }
}
