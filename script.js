const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");
const copyDiscordUser = document.getElementById("copyDiscordUser");
const copyNote = document.getElementById("copyNote");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

if (copyDiscordUser) {
  const originalText = copyDiscordUser.textContent;
  const username = copyDiscordUser.dataset.username || "freeleo27";

  copyDiscordUser.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(username);

      copyDiscordUser.textContent = "Copied!";
      if (copyNote) {
        copyNote.textContent = `Copied Discord username: ${username}`;
      }

      setTimeout(() => {
        copyDiscordUser.textContent = originalText;
        if (copyNote) {
          copyNote.textContent = "";
        }
      }, 2200);
    } catch (error) {
      if (copyNote) {
        copyNote.textContent = `Copy failed. My Discord user is: ${username}`;
      }
    }
  });
}

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});
