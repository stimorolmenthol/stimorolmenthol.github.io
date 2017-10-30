$(function() {
   if ($('.slider').length > 0) {
      $('.slider').bxSlider(
         {
            mode: 'vertical',
            controls: false,
            auto: true,
            pause: 2000
         }
      );
   }

   if ($('.product-img-wrapper').length > 0) {
      $('.product-img-wrapper').zoom({url: 'img/grommets.jpg'});
   }
   
   $('.add-to-cart .plus').click(function () {
      var current_value = parseInt($('#add-to-cart-input').val());
      $('#add-to-cart-input').val(current_value + 1);
      return false;
   });
   
   $('.add-to-cart .minus').click(function () {
      var current_value = parseInt($('#add-to-cart-input').val());
      
      if (current_value <= 1) {
         return false;
      }
      
      $('#add-to-cart-input').val(current_value - 1);
      return false;
   });
}
);
