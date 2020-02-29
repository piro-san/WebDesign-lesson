$(function(){
  $('#close-modal').click(function(){
    $('#mail-modal').fadeOut();
  });
  $('.mail-modal-show').click(function(){
    $('#mail-modal').fadeIn();
  });
  // ここまでモーダル

  $('.point').hover(
    function(){
      $(this).find('.point-text').addClass('text-active');
    },
    function(){
      $(this).find('.point-text').removeClass('text-active');
      
    }
    );
    // ここまでホバー

    $('.faq-list-item').click(function(){
      var $answer = $(this).find('.answer');
      if($answer.hasClass('open')){
        $answer.removeClass('open');
        $answer.slideUp();
        $(this).find('span').text('+');
      }else{
        $answer.addClass('open');
        $answer.slideDown();
        $(this).find('span').text('-');
      }
    });
    // ここまでアコーディオン


});
