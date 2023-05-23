$('.scale__result').html($('input[type="range"]').val());

$(document).on('input change', 'input[type="range"]', function() {
  $('.scale__result').html($(this).val()+' %');
});