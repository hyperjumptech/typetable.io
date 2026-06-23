      (function () {
        const menuToggle = document.querySelector("[data-menu-toggle]");
        const mobileNav = document.querySelector("[data-mobile-nav]");

        if (menuToggle && mobileNav) {
          menuToggle.addEventListener("click", function () {
            const open = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", String(!open));
            mobileNav.hidden = open;
          });
          mobileNav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
              menuToggle.setAttribute("aria-expanded", "false");
              mobileNav.hidden = true;
            });
          });
        }

        document.querySelectorAll("[data-dropdown]").forEach(function (dropdown) {
          const toggle = dropdown.querySelector("[data-dropdown-toggle]");
          const menu = dropdown.querySelector("[data-dropdown-menu]");
          if (!toggle || !menu) return;
          toggle.addEventListener("click", function () {
            const open = menu.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(open));
          });
          document.addEventListener("click", function (event) {
            if (dropdown.contains(event.target)) return;
            menu.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
          });
          dropdown.addEventListener("keydown", function (event) {
            if (event.key !== "Escape") return;
            menu.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.focus();
          });
        });

        document.querySelectorAll(".faq-item").forEach(function (item) {
          const trigger = item.querySelector(".faq-trigger");
          const panel = item.querySelector(".faq-panel");
          if (!trigger || !panel) return;
          trigger.addEventListener("click", function () {
            const open = item.classList.contains("is-open");
            document
              .querySelectorAll(".faq-item.is-open")
              .forEach(function (other) {
                if (other === item) return;
                other.classList.remove("is-open");
                const t = other.querySelector(".faq-trigger");
                const p = other.querySelector(".faq-panel");
                if (t) t.setAttribute("aria-expanded", "false");
                if (p) p.hidden = true;
              });
            item.classList.toggle("is-open", !open);
            trigger.setAttribute("aria-expanded", String(!open));
            panel.hidden = open;
          });
        });
      })();
