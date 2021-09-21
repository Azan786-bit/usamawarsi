
  $("#cut-btn").click(function () {
    $("#navbar").hide(1000);
  });
  $("#spbackbtn").click(function () {
    $("#show-project").hide(500);
    $("#project").show();
  });
  $("#shbtn, #backbtn").click(function () {
    $("#navbar").show();
    $("#about, #contact, #project, #show-project").hide(1000);
  });
  $("#abbtn").click(function () {
    $("#about").show();
  });
  $("#conbtn").click(function () {
    $("#contact").show();
  });
  $("#probtn").click(function () {
    $("#project").show();
  });
  $("#mb_btn").click(function () {
    $("#mb").toggle();
  });
  $("#ambtn0").click(function () {
    $("#education").show();
    $("#experience").hide();
  });
  $("#ambtn1").click(function () {
    $("#education").hide();
    $("#experience").show();
  });
  $("#cc-btn").click(function () {
    $("#contact").hide();
  });

  $("#bs-btn").click(function () {
    $("#skill").animate(
      { left: '-100%' });
    $("#skill").animate(
      { transition: '2s ease' });
    $("#skill").toggle(1000);
  });
  $("#skill_btn").click(function () {
    $("#skill").toggle();
  });
  $("#view").click(function () {
    $("#show-project").show();
  });
  // vanilla tilt
  VanillaTilt.init(document.querySelectorAll(".hcardc"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,

  });
  (jQuery)
  AOS.init();




