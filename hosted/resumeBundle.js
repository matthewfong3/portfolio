"use strict";

// function that handles nav icon onHover events
var navOnHover = function navOnHover() {
  var face = document.querySelector("#logo");
  var twitter = document.querySelector("#shortcutTwitter");
  var linkedIn = document.querySelector("#shortcutLinkedIn");
  var facebook = document.querySelector("#shortcutFB");

  face.addEventListener("mouseover", function () {
    return face.src = "/assets/images/face.png";
  });
  face.addEventListener("mouseout", function () {
    return face.src = "/assets/images/faceGray.png";
  });

  twitter.addEventListener("mouseover", function () {
    return twitter.src = "/assets/images/twitter.png";
  });
  twitter.addEventListener("mouseout", function () {
    return twitter.src = "/assets/images/twitterGray.png";
  });

  linkedIn.addEventListener("mouseover", function () {
    return linkedIn.src = "/assets/images/linkedin.png";
  });
  linkedIn.addEventListener("mouseout", function () {
    return linkedIn.src = "/assets/images/linkedinGray.png";
  });

  facebook.addEventListener("mouseover", function () {
    return facebook.src = "/assets/images/facebook.png";
  });
  facebook.addEventListener("mouseout", function () {
    return facebook.src = "/assets/images/facebookGray.png";
  });
};

// function that handles smooth scrolling 
var smoothScrolling = function smoothScrolling() {
  $('a').click(function () {
    //let anchors = document.getElementsByClassName('selected');

    //if(anchors){
    //  for(let i = 0; i < anchors.length; i++){
    //    anchors[i].classList.remove('selected');
    //  }
    //  this.classList.add('selected');
    //}

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });

  // gotta be a better way
  window.addEventListener('scroll', function () {
    var topOffset = $(window).scrollTop();

    var about = document.querySelector("#aboutAnchor");
    var projects = document.querySelector("#projectsAnchor");
    var contacts = document.querySelector("#contactsAnchor");

    if (topOffset < 570) {
      projects.classList.remove('selected');
      contacts.classList.remove('selected');
      about.classList.add('selected');
    } else if (topOffset >= 570 && topOffset < 1200) {
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
var handleError = function handleError(message) {
  $("#errorMessage").text(message);
};

// function that redirects the user on request success
var redirect = function redirect(response) {
  localStorage['url'] = JSON.stringify(response.url);
  window.location = response.redirect;
};

// function that sends ajax requests to the server
var sendAjax = function sendAjax(type, action, data, success) {
  $.ajax({
    cache: false,
    type: type,
    url: action,
    data: data,
    dataType: "json",
    success: success,
    error: function error(xhr, status, _error) {
      var messageObj = JSON.parse(xhr.responseText);
      handleError(messageObj.error);
    }
  });
};
"use strict";

var init = function init() {
  // setup onHover events for icons in nav bar
  navOnHover();
  // setup smooth scrolling for anchor tags
  smoothScrolling();
};

window.onload = init;
