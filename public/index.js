hamgurger = document.getElementById("burger");
menu = document.getElementById("menu");

hamgurger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
