export class MobileStickyCTA {
    constructor() {
        this.render();
    }

    render() {
        // Only render on mobile-ish viewport, but CSS media query is better for responsiveness
        const stickyCTA = document.createElement('div');
        stickyCTA.className = 'mobile-sticky-cta';
        stickyCTA.innerHTML = `
      <a href="https://dr.mentai.me/" class="btn btn-primary" style="width: 100%; box-shadow: 0 4px 12px rgba(255, 123, 123, 0.4);">
        無料で体験する（15分）
      </a>
    `;
        document.body.appendChild(stickyCTA);

        const style = document.createElement('style');
        style.textContent = `
      .mobile-sticky-cta {
        position: fixed;
        bottom: 24px;
        left: 24px;
        right: 24px;
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
