$('document').ready(function() {
  $('.gray-logo-img')
    .mouseover(function() {
      var src = $(this).attr('src').replace('-gray.png', '.png');
      $(this).attr('src', src);
    })
    .mouseout(function() {
      var src = $(this).attr('src').replace('.png', '-gray.png');
      $(this).attr('src', src);
    })
})
