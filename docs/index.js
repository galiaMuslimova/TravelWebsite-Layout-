$(document).ready(function(){
  $('.header__icon').click(function(event){
    $('.header__icon, .header__body').toggleClass('active');
    $('body').toggleClass('lock');
  })
})