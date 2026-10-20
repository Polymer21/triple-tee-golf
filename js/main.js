(function () {
  var navToggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        navToggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    });
  }

  var dialog = document.getElementById("request-dialog");
  var form = document.getElementById("request-form");
  var title = document.getElementById("request-title");
  var submit = document.getElementById("request-submit");
  var numberField = document.getElementById("number-field");
  var numberSelect = document.getElementById("request-number");
  var status = document.getElementById("request-status");

  var modes = {
    founders: {
      title: "Claim a Founders spot",
      submit: "Claim a Founders spot  →",
      number: true
    },
    list: {
      title: "Join the list",
      submit: "Join the list  →",
      number: false
    },
    number: {
      title: "Request a number",
      submit: "Request a number  →",
      number: true
    }
  };

  function openDialog(mode, number) {
    var config = modes[mode] || modes.number;
    title.textContent = number ? "Request No. " + number : config.title;
    submit.textContent = number ? "Request a number  →" : config.submit;
    numberField.hidden = !config.number && !number;
    numberSelect.required = !numberField.hidden;
    if (number) numberSelect.value = number;
    status.textContent = "";
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    }
  }

  document.addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-request]");
    if (!trigger || !dialog) return;
    event.preventDefault();
    openDialog(trigger.getAttribute("data-request"), trigger.getAttribute("data-number") || "");
  });

  var closer = dialog && dialog.querySelector("[data-close]");
  if (closer) {
    closer.addEventListener("click", function () {
      dialog.close();
    });
  }

  function bindPreview(targetForm, statusEl) {
    if (!targetForm || !statusEl) return;
    targetForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!targetForm.checkValidity()) {
        targetForm.reportValidity();
        return;
      }
      statusEl.textContent = "Received. This preview isn’t connected to a server yet.";
      targetForm.reset();
    });
  }

  bindPreview(form, status);
  bindPreview(document.getElementById("inquiry-form"), document.getElementById("inquiry-status"));
})();
