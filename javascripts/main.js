$(function(){
  $('body').waitForImages(function() {
    $('.rainbow').addClass('shine');

    var link = $('<a href="">Activate duopolychromaticarc mode.</a>').appendTo('.page-footer p');

    link.click(function(e){
      $('.double-rainbow').addClass('shine');
      e.preventDefault();
    });
  });
});
