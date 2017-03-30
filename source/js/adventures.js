$(document).ready(function() {
  $( "#trigger" ).click(function() {
    $('#toggle').fadeOut('', function() {
      $('#col1').fadeIn('');
      $('#col2').fadeIn('');
      $('#col3').fadeIn('');
      $('#col4').fadeIn('');
      $('#col5').fadeIn('');
    });
    return false;
  });
});
