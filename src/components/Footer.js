export class Footer {
    constructor() {
        this.render();
    }

    render() {
        const footer = document.createElement('footer');
        footer.className = 'site-footer';
        footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">mentai</div>
            <p class="footer-desc">
              AI面接対策 × スカウト<br>
              内定獲得までを一気通貫で支援。
            </p>
          </div>
          <div class="footer-links">
            <h4>サービス</h4>
            <ul>
              <li><a href="/service.html">サービス詳細</a></li>
              <li><a href="/features.html">機能紹介</a></li>
              <li><a href="/pricing.html">料金プラン</a></li>
              <li><a href="/case.html">導入事例</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>サポート</h4>
            <ul>
              <li><a href="/faq.html">FAQ</a></li>
              <li><a href="/contact.html">お問い合わせ</a></li>
              <li><a href="/about.html">運営会社</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>SNS</h4>
            <div class="sns-links">
               <!-- Placeholder for SNS icons -->
               <a href="#">X (Twitter)</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 mentailab. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#">利用規約</a>
            <a href="#">プライバシーポリシー</a>
          </div>
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
        background-color: var(--color-bg-secondary);
        padding: 80px 0 32px;
        margin-top: auto; /* Push to bottom if flex column */
      }
      
      .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 40px;
        margin-bottom: 64px;
      }
      
      .footer-logo {
        font-size: 24px;
        font-weight: 800;
        color: var(--color-primary);
        margin-bottom: 16px;
      }
      
      .footer-desc {
        font-size: 14px;
        color: var(--color-text-light);
        line-height: 1.8;
      }
      
      .footer-links h4 {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 24px;
      }
      
      .footer-links ul li {
        margin-bottom: 12px;
      }
      
      .footer-links a {
        font-size: 14px;
        color: var(--color-text-light);
      }
      
      .footer-links a:hover {
        color: var(--color-primary);
      }
      
      .footer-bottom {
        border-top: 1px solid var(--color-border);
        padding-top: 32px;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: var(--color-text-light);
      }
      
      .footer-bottom-links {
        display: flex;
        gap: 24px;
      }
      
      @media (max-width: 768px) {
        .footer-grid {
          grid-template-columns: 1fr;
          gap: 40px;
        }
      }
    `;
        document.head.appendChild(style);
    }
}
