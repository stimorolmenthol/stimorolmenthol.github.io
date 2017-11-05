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

   if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('.items .item').hover(function () {
         $(this).find('.add-to-cart-wrapper').slideDown();
      }, function () {
         $(this).find('.add-to-cart-wrapper').slideUp();
      });
   }

   $('.categories li a').click(function () {
      var category = $(this).data('category');

      $('.items .item').hide();
      $('.items .item[data-category="' + category + '"]').show();

      return false;
   });
});
