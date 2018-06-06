const setupProjectLinks = () => {
  const links = document.getElementsByClassName('fake-links');
  
  for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', () => {
      let data = {url: links[i].getAttribute('data-url')};
      if(data.url === "/3Dmodels"){
        //sendAjax('POST', '/3Dmodels', data, redirect);
        sendAjax('POST', '/getProject', data, redirect); 
      } else {
        sendAjax('POST', '/getProject', data, redirect); 
      }
    });
    
    links[i].addEventListener('mouseover', () => {
      let img = links[i].firstElementChild;
      let file = img.getAttribute('data-file');
      
      img.src=`/assets/images/${file}.png`;
    });
    
    links[i].addEventListener('mouseout', () => {
      let img = links[i].firstElementChild;
      let file = img.getAttribute('data-file');
      
      img.src=`/assets/images/${file}Gray.png`;
    });
  }
};

const init = () => {
  // set up onHover events for icons in nav bar
  navOnHover();
  // set up smooth scrolling for anchor tags
  smoothScrolling();
  
  setupProjectLinks();
  
  // set up dropdown menu for responsive view
  const dropdown = document.querySelector("#dropdown");
  const respMenu = document.querySelector("#responsiveMenu");
  if(dropdown && respMenu) {
    respMenu.style.display = "none";
    dropdown.addEventListener("click", () => toggleDropdownMenu(respMenu));
  }
};

window.onload = init;