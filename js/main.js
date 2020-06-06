$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger,.header__burger-circle,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
   $('.btn_submit').click(function(event) {
   	setTimeout(clrinput, 2000);
   	function clrinput(){
   	$('.phone,.name').val("");
   	}
   });
});
var submitted=false;
$('#gform').on('submit', function(e) {
  $('.sended').addClass('active');
});
