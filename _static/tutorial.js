$(document).ready(function() {
  var $articleBody = $('div[itemprop=articleBody]');

  $articleBody.fitVids();

  $articleBody.on('click', '.exercise-hint button', function() {
    $(this).next('div').toggleClass('hidden');
    $(this).parent('.exercise-hint').toggleClass('shown');
  });

});
