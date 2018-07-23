document.addEventListener('DOMContentLoaded', function() {
  particleground(document.getElementById('particles'), {
    dotColor: 'rgba(240,240,240,0.4)',
    lineColor: 'rgba(240,240,240,0.4)',
    density: 17000,
    proximity: 175,
  });
  var intro = document.getElementById('intro');
  //intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
}, false);

$(window).resize(function() {
  var w = $(window).width(), h = $(window).outerHeight(true);
  $('header').width(w);
  $('header').height(h);
  $('canvas').width(w);
  $('canvas').height(h);
  indexParticles ();
})

$(window).scroll(function() {
  indexParticles ();
  //parallaxScroll();
});
function indexParticles () {
  var alt = $(".index-first").height() - $("#particles").height();
  var alt2 = $(".index-first").height() - $(".nav-index").height();
  if ($(window).scrollTop() > alt) {
    $("#particles").removeClass("fixed");
  }
  else {
    $("#particles").addClass("fixed");
  }
  if ($(window).scrollTop() >= alt2) {
    $("#particles").addClass("mask");
  }
  else {
    $("#particles").removeClass("mask");
  }
};
