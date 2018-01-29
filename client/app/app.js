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
  // setup onHover events for icons in nav bar
  navOnHover();
  // setup smooth scrolling for anchor tags
  smoothScrolling();
  
  setupProjectLinks();
};

window.onload = init;