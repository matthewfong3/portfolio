const init = () => {
  // setup onHover events for icons in nav bar
  navOnHover();
  // setup smooth scrolling for anchor tags
  smoothScrolling();
  
  // set up dropdown menu for responsive view
  const dropdown = document.querySelector("#dropdown");
  const respMenu = document.querySelector("#responsiveMenu");
  if(dropdown && respMenu) {
    respMenu.style.display = "none";
    dropdown.addEventListener("click", () => toggleDropdownMenu(respMenu));
  }
};

window.onload = init;