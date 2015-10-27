$(document).ready(function() {
  var $articleBody = $('div[itemprop=articleBody]');

  $articleBody.on('click', '.exercise-hint button', function() {
    $(this).next('span').toggleClass('hidden');
  });

  $articleBody.fitVids();

});
