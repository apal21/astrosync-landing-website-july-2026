(() => {
  // Keep local preview traffic out of production analytics.
  if (!["astrosync.in", "www.astrosync.in"].includes(window.location.hostname)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", "G-KCZBN5Z8LP");

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-KCZBN5Z8LP";
  document.head.appendChild(script);

  document.querySelectorAll("[data-store]").forEach((link) => {
    link.addEventListener("click", () => {
      window.gtag("event", "store_download_click", {
        platform: link.dataset.store,
        placement: link.dataset.placement,
        transport_type: "beacon",
      });
    });
  });
})();
