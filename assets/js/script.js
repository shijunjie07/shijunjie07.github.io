(function () {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const label = document.querySelector("[data-theme-toggle-label]");

  function getSavedTheme() {
    try {
      return localStorage.getItem("theme") || "light";
    } catch (error) {
      return "light";
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      // Ignore storage errors; the visible theme can still be applied.
    }
  }

  function applyTheme(theme) {
    const nextTheme = theme === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", nextTheme);
    saveTheme(nextTheme);

    if (label) {
      label.textContent = nextTheme === "dark" ? "Light" : "Dark";
    }
  }

  applyTheme(getSavedTheme());

  if (toggle) {
    toggle.addEventListener("click", function () {
      const currentTheme = root.getAttribute("data-theme") || "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }
})();
