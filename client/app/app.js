const setupProjectsLinks = () => {
  const links = document.getElementsByClassName("fake-links");

  for (const l of links) {
    l.addEventListener("click", () => {
      let data = { url: l.getAttribute("data-url") };
      sendAjax("POST", "/getProject", data, redirect);
    });

    l.addEventListener("mouseover", () => {
      let image = l.firstElementChild;
      let file = image.getAttribute("data-file");

      image.src = `assets/images/${file}.png`;
    });

    l.addEventListener("mouseout", () => {
      let image = l.firstElementChild;
      let file = image.getAttribute("data-file");

      image.src = `assets/images/${file}_gray.png`;
    });
  }
};

const init = () => {
  const respProps = {
    showDropdown: false,
  };

  navOnHover();

  setupDropdown(respProps);

  smoothScrolling(respProps);

  setupProjectsLinks();
};

window.onload = init;
