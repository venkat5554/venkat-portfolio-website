/* ==========================================
   MOBILE NAVIGATION
=========================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


if (menuToggle && navLinks) {

  /**
   * Open mobile menu
   */
  function openMenu() {

    navLinks.classList.add("open");

    menuToggle.classList.add("active");

    document.body.classList.add("menu-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "true"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Close navigation menu"
    );

  }



  /**
   * Close mobile menu
   */
  function closeMenu() {

    navLinks.classList.remove("open");

    menuToggle.classList.remove("active");

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Open navigation menu"
    );

  }



  /**
   * Toggle menu
   */
  function toggleMenu() {

    const isOpen =
      navLinks.classList.contains("open");


    if (isOpen) {

      closeMenu();

    } else {

      openMenu();

    }

  }



  /* ==========================================
     HAMBURGER CLICK
  =========================================== */

  menuToggle.addEventListener(
    "click",
    toggleMenu
  );



  /* ==========================================
     CLOSE AFTER CLICKING NAVIGATION LINK
  =========================================== */

  const navigationItems =
    navLinks.querySelectorAll("a");


  navigationItems.forEach((link) => {

    link.addEventListener("click", () => {

      closeMenu();

    });

  });



  /* ==========================================
     ESCAPE KEY
  =========================================== */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        navLinks.classList.contains("open")
      ) {

        closeMenu();

        menuToggle.focus();

      }

    }
  );



  /* ==========================================
     CLOSE MENU WHEN RETURNING TO DESKTOP
  =========================================== */

  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 800) {

        closeMenu();

      }

    }
  );

}


/* ==========================================
   RESUME DOWNLOAD
=========================================== */

const resumeButton =
  document.getElementById("resumeDownload") ||
  document.getElementById("resumeDownloadBtn");


if (resumeButton) {

  resumeButton.addEventListener(
    "click",
    () => {

      /*
        Change the button only for the
        current page session.

        Refreshing the page automatically
        restores "Download resume".
      */

      resumeButton.classList.add("downloaded");

      resumeButton.innerHTML = `
        <span class="resume-button-icon" aria-hidden="true">
          ✓
        </span>

        <span>
          Downloaded
        </span>
      `;

      resumeButton.setAttribute(
        "aria-label",
        "Resume downloaded"
      );

    }
  );

}

// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const submitButton = contactForm.querySelector(".submit-button");

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const originalButtonText = submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        contactForm.innerHTML = `
          <div class="form-success" role="status">
            <div class="success-icon">✓</div>

            <h2>Message sent</h2>

            <p>
              Thanks for reaching out. I've received your message
              and will try to get back to you within 24 hours.
            </p>
          </div>
        `;
      } else {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
        alert("Something went wrong. Please try again.");
      }

    } catch (error) {
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
      alert("Something went wrong. Please try again.");
    }
  });
}