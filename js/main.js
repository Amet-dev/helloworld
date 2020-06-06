$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger,.header__burger-circle,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});
