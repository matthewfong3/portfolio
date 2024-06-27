const setupProjectsLinks = () => {
  const links = document.getElementsByClassName('fake-links');
  for (const l of links) {
    l.addEventListener('click', () => {
      let data = {
        url: l.getAttribute('data-url')
      };
      sendAjax('POST', '/getProject', data, redirect);
    });
    l.addEventListener('mouseover', () => {
      let image = l.firstElementChild;
      let file = image.getAttribute('data-file');
      image.src = `assets/images/${file}.png`;
    });
    l.addEventListener('mouseout', () => {
      let image = l.firstElementChild;
      let file = image.getAttribute('data-file');
      image.src = `assets/images/${file}_gray.png`;
    });
  }
};
const init = () => {
  navOnHover();
  smoothScrolling();
  setupProjectsLinks();
};
window.onload = init;
const navOnHover = () => {
  const logo = document.getElementById('logo');
  const linkedIn = document.getElementById('shortcutLinkedIn');
  logo.addEventListener('mouseover', () => logo.src = 'assets/images/face.png');
  logo.addEventListener('mouseout', () => logo.src = 'assets/images/face_gray.png');
  linkedIn.addEventListener('mouseover', () => linkedIn.src = 'assets/images/linkedin.png');
  linkedIn.addEventListener('mouseout', () => linkedIn.src = 'assets/images/linkedin_gray.png');
};
const smoothScrolling = () => {
  // smooth scrolling
  // references: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
  $("a").on('click', function (e) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      e.preventDefault();

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  let aboutMeAnchor = document.getElementById('aboutMeAnchor');
  let projectsAnchor = document.getElementById('projectsAnchor');
  let contactsAnchor = document.getElementById('contactsAnchor');
  aboutMeAnchor.addEventListener('click', () => {
    aboutMeAnchor.classList.add('selected');
    projectsAnchor.classList.remove('selected');
    contactsAnchor.classList.remove('selected');
  });
  projectsAnchor.addEventListener('click', () => {
    aboutMeAnchor.classList.remove('selected');
    projectsAnchor.classList.add('selected');
    contactsAnchor.classList.remove('selected');
  });
  contactsAnchor.addEventListener('click', () => {
    aboutMeAnchor.classList.remove('selected');
    projectsAnchor.classList.remove('selected');
    contactsAnchor.classList.add('selected');
  });
};
const redirect = res => {
  localStorage['url'] = JSON.stringify(res.url);
  window.location = res.redirect;
};
const sendAjax = (type, action, data, success) => {
  $.ajax({
    cache: false,
    type: type,
    url: action,
    data: data,
    dataType: "json",
    success: success,
    error: (xhr, status, error) => {
      let messageObj = JSON.parse(xhr.responseText);
      console.log(messageObj.error);
    }
  });
};
