function hideLandingPage(){
  if($('.landingPage').is(':visible')){
    $('.mainPage').show();
    $('.landingPage').hide();
    // animation effect in the hide()
    // trasnition 10s ease all < -- css
  } else {
    $('.landingPage').show();
    $('.mainPage').hide();
  }

}

$(() => {

  $('.my-paroller').paroller();
// images parallex variation
  $(".cd").paroller({ factor: '3', type: 'foreground', direction: 'horizontal' });
  $(".boxVortex").paroller({ factor: '2', type: 'foreground', direction: 'vertical' });
  $(".security").paroller({ factor: '2', type: 'foreground', direction: 'bgVertical' });


  $('.switchButton').on('click', hideLandingPage);


});
