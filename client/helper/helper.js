// function that handles nav icon onHover events
const navOnHover = () => {
  const face = document.querySelector("#logo");
  const twitter = document.querySelector("#shortcutTwitter");
  const linkedIn = document.querySelector("#shortcutLinkedIn");
  const facebook = document.querySelector("#shortcutFB");
  //const dropdown = document.querySelector("#dropdown");
  
  face.addEventListener("mouseover", () => face.src="/assets/images/face.png");
  face.addEventListener("mouseout", () => face.src="/assets/images/faceGray.png");
  
  twitter.addEventListener("mouseover", () => twitter.src="/assets/images/twitter.png");
  twitter.addEventListener("mouseout", () => twitter.src="/assets/images/twitterGray.png");
  
  linkedIn.addEventListener("mouseover", () => linkedIn.src="/assets/images/linkedin.png");
  linkedIn.addEventListener("mouseout", () => linkedIn.src="/assets/images/linkedinGray.png");
  
  facebook.addEventListener("mouseover", () => facebook.src="/assets/images/facebook.png");
  facebook.addEventListener("mouseout", () => facebook.src="/assets/images/facebookGray.png");
  
  /*if(dropdown){
    dropdown.addEventListener("mouseover", () => dropdown.src="/assets/images/dropdownHover.png");
    dropdown.addEventListener("mouseout", () => dropdown.src="/assets/images/dropdown.png");
  }*/
};

// function that handles dropdown menu animation & display
const toggleDropdownMenu = (respMenu) => {
  $("#responsiveMenu").toggle("slide");

  //if(respMenu.style.display === "none"){
    //$("#responsiveMenu").show("slide", {direction: "right"}, 1000);
    //respMenu.style.display = "block";
  //} 
  //else{
    //$("#responsiveMenu").show("slide", {direction: "left"}, 1000);
    //respMenu.style.display = "none"; 
  //}
};

// function that handles smooth scrolling 
const smoothScrolling = () => {
  $('a').click(function(){
    //let anchors = document.getElementsByClassName('selected');
    
    //if(anchors){
    //  for(let i = 0; i < anchors.length; i++){
    //    anchors[i].classList.remove('selected');
    //  }
    //  this.classList.add('selected');
    //}
    
    // hide dropdown menu once a link is clicked
    //console.log("hide dropdown menu once a link is clicked");
    //$("#responsiveMenu").toggle("slide");
    
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });
  
  // gotta be a better way
  window.addEventListener('scroll', () => { 
    let topOffset = $(window).scrollTop();
    
    let about = document.querySelector("#aboutAnchor");
    let projects = document.querySelector("#projectsAnchor");
    let contacts = document.querySelector("#contactsAnchor");
    
    if(topOffset < 570){
      projects.classList.remove('selected');
      contacts.classList.remove('selected');
      about.classList.add('selected');
    } else if(topOffset >= 570 && topOffset < 1200){
      about.classList.remove('selected');
      contacts.classList.remove('selected');
      projects.classList.add('selected');
    } else {
      about.classList.remove('selected');
      projects.classList.remove('selected');
      contacts.classList.add('selected');
    }
  });
};

// function that handles error messages from the server
const handleError = (message) => {
  $("#errorMessage").text(message);
};

// function that redirects the user on request success
const redirect = (response) => {
  localStorage['url'] = JSON.stringify(response.url);
  window.location = response.redirect;
};

// function that sends ajax requests to the server
const sendAjax = (type, action, data, success) => {
  $.ajax({
    cache: false,
    type: type,
    url: action,
    data: data, 
    dataType: "json",
    success: success,
    error: function(xhr, status, error){
      var messageObj = JSON.parse(xhr.responseText); 
      handleError(messageObj.error);  
    }
  });
};