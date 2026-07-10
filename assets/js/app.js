// PressGang landing page — the only two interactions on the page.
// Progressive enhancement: everything renders and reads fine without this file.
(function () {
  "use strict";

  /* --- Mobile navigation menu ---------------------------------------- */
  document.querySelectorAll("[data-nav-toggle]").forEach(function (toggle) {
    var menu = document.getElementById(toggle.getAttribute("aria-controls"));
    if (!menu) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      menu.setAttribute("data-open", String(open));
    }

    setOpen(false);

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 921px)").matches) setOpen(false);
    });
  });

  /* --- Copy the install command to the clipboard --------------------- */
  document.querySelectorAll("[data-copy]").forEach(function (el) {
    var label = el.querySelector(".copy-label");
    var reset;
    el.addEventListener("click", function () {
      var text = el.getAttribute("data-copy");
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        if (label) label.textContent = "copy failed";
        return;
      }

      navigator.clipboard.writeText(text).then(function () {
        if (label) label.textContent = "✓ copied";
        clearTimeout(reset);
        reset = setTimeout(function () {
          if (label) label.textContent = "⧉";
        }, 2000);
      }).catch(function () {
        if (label) label.textContent = "copy failed";
      });
    });
  });

  /* --- Quartermaster before / after tabs ----------------------------- */
  document.querySelectorAll("[data-tabs]").forEach(function (group) {
    var tabs = group.querySelectorAll("[data-tab]");
    var panels = group.querySelectorAll("[data-panel]");
    function selectTab(tab, focus) {
      var name = tab.getAttribute("data-tab");
      tabs.forEach(function (t) {
        var selected = t === tab;
        t.setAttribute("aria-selected", String(selected));
        t.setAttribute("tabindex", selected ? "0" : "-1");
      });
      panels.forEach(function (p) {
        p.hidden = p.getAttribute("data-panel") !== name;
      });
      if (focus) tab.focus();
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        selectTab(tab, false);
      });
      tab.addEventListener("keydown", function (event) {
        var index = Array.prototype.indexOf.call(tabs, tab);
        var next = null;

        if (event.key === "ArrowRight") next = tabs[(index + 1) % tabs.length];
        if (event.key === "ArrowLeft") next = tabs[(index - 1 + tabs.length) % tabs.length];
        if (event.key === "Home") next = tabs[0];
        if (event.key === "End") next = tabs[tabs.length - 1];

        if (next) {
          event.preventDefault();
          selectTab(next, true);
        }
      });
    });
  });
})();
