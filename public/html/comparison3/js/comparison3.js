class PageAnalytics {
  constructor() {
    this.init();
  }

  init() {
    this.trackPageLoad();
    this.setupFeatureCardInteractions();
  }

  trackPageLoad() {
    console.log("Modular CSS page loaded at:", new Date().toISOString());
    console.log("CSS modules architecture successfully loaded");
  }

  setupFeatureCardInteractions() {
    const featureCards = document.querySelectorAll(".featureCard");

    featureCards.forEach((card, index) => {
      card.addEventListener("click", () => {
        const title = card.querySelector("h3").textContent;
        console.log(`Feature card ${index + 1} clicked:`, title);

        // Add a subtle animation feedback
        card.style.transform = "scale(0.98)";
        setTimeout(() => {
          card.style.transform = "";
        }, 150);
      });

      // Add hover analytics
      card.addEventListener("mouseenter", () => {
        const title = card.querySelector("h3").textContent;
        console.log(`Hovering over feature:`, title);
      });
    });
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new PageAnalytics();
});

// Export for potential module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = PageAnalytics;
}
