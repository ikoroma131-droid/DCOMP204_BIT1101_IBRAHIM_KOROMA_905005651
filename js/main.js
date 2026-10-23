/* ============================================================
   FOODIE RESTAURANT - JAVASCRIPT
   Makes the page do things: the mobile menu, the menu filters,
   the gallery pop-up, the Book a Table form and the contact form.
   ============================================================ */

/* ---------- Small helpers ---------- */

// Show or hide an element. Icons are SVG, so they need the real
// "hidden" attribute set on and off - .hidden does nothing to them.
function setHidden(el, isHidden) {
  if (!el) return;
  if (isHidden) el.setAttribute("hidden", "");
  else el.removeAttribute("hidden");
}

// Show a short message at the top of the page.
function showToast(message, type) {
  var toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.toggle("error", type === "error");
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(function () {
    toast.classList.remove("show");
  }, 4000);
}

// Open / close any panel that has the [hidden] attribute.
function openPanel(panel) {
  if (!panel) return;
  panel.hidden = false;
  document.body.style.overflow = "hidden";
}
function closePanel(panel) {
  if (!panel) return;
  panel.hidden = true;
  document.body.style.overflow = "";
}

/* ---------- Mobile navigation ---------- */
function initNav() {
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMobile");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    menu.hidden = !menu.hidden;
    toggle.setAttribute("aria-expanded", String(!menu.hidden));
    setHidden(document.getElementById("iconOpen"), !menu.hidden);
    setHidden(document.getElementById("iconClose"), menu.hidden);
  });
}

/* ---------- Menu page: category filters ---------- */
function initMenuFilters() {
  var buttons = document.querySelectorAll("[data-filter]");
  var items = document.querySelectorAll("[data-category]");
  if (!buttons.length || !items.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var wanted = btn.getAttribute("data-filter");

      buttons.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });

      items.forEach(function (item) {
        item.hidden = wanted !== "All" && item.getAttribute("data-category") !== wanted;
      });
    });
  });
}

/* ---------- Gallery page: click a photo to see it bigger ---------- */
function initGallery() {
  var box = document.getElementById("lightbox");
  if (!box) return;
  var img = document.getElementById("lightboxImg");
  var caption = document.getElementById("lightboxCaption");

  document.querySelectorAll("[data-photo]").forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      img.src = thumb.getAttribute("data-photo");
      img.alt = thumb.getAttribute("data-caption") || "";
      caption.textContent = thumb.getAttribute("data-caption") || "";
      openPanel(box);
    });
  });

  box.addEventListener("click", function (event) {
    if (event.target === box || event.target.hasAttribute("data-close-lightbox")) {
      closePanel(box);
    }
  });
}

/* ---------- Book a Table popup + form ---------- */
function initBooking() {
  var modal = document.getElementById("bookingModal");
  var form = document.getElementById("bookingForm");
  if (!modal) return;

  // Today's date, so nobody can book a table in the past.
  var dateField = form && form.querySelector('[name="date"]');
  if (dateField) {
    dateField.min = new Date().toISOString().split("T")[0];
  }

  document.querySelectorAll("[data-open-booking]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openPanel(modal);
    });
  });

  modal.querySelectorAll("[data-close-booking]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      closePanel(modal);
    });
  });

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var data = {};
    new FormData(form).forEach(function (value, key) {
      data[key] = typeof value === "string" ? value.trim() : value;
    });

    // Phone number must be digits, spaces, dashes or a leading +.
    if (!/^[+\d\s-]{7,}$/.test(data.phone || "")) {
      showToast("Please enter a valid phone number.", "error");
      return;
    }

    // Save the booking in this browser (localStorage).
    var saved = [];
    try {
      saved = JSON.parse(localStorage.getItem("foodie-bookings") || "[]");
    } catch (err) {
      saved = [];
    }
    saved.push(data);
    localStorage.setItem("foodie-bookings", JSON.stringify(saved));

    showToast(
      "Thank you " + data.name + "! Your table for " + data.guests +
      " is reserved on " + data.date + " at " + data.time + "."
    );

    form.reset();
    closePanel(modal);
  });
}

/* ---------- Contact page: message form ---------- */
function initContactForm() {
  var form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var data = {};
    new FormData(form).forEach(function (value, key) {
      data[key] = typeof value === "string" ? value.trim() : value;
    });

    if (!data.name || !data.email || !data.message) {
      showToast("Please fill in every field.", "error");
      return;
    }

    showToast("Thanks " + data.name + ", your message has been sent! We'll reply soon.");
    form.reset();
  });
}

/* ---------- Run everything once the page is ready ---------- */
document.addEventListener("DOMContentLoaded", function () {
  initNav();
  initMenuFilters();
  initGallery();
  initBooking();
  initContactForm();

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});

// Press Escape to close anything that is open.
document.addEventListener("keydown", function (event) {
  if (event.key !== "Escape") return;
  var lightbox = document.getElementById("lightbox");
  var modal = document.getElementById("bookingModal");
  if (lightbox && !lightbox.hidden) closePanel(lightbox);
  else if (modal && !modal.hidden) closePanel(modal);
});
