$(document).on("pagecreate", "#pageOne",  function(event)
{
  $('#msg_b').each(function(){
      var inner = $(this).find('p');
      $(this).height(inner.outerHeight(true));
      $(this).width(inner.outerWidth(true));
  });
}
