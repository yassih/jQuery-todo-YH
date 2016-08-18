$(document).ready(function(){
  $('#newItem').val("");
  //Adding a new Item to the list
  $('#add').on('click', function(event){
    var toAdd = $('#newItem').val();
    if(toAdd.length !== 0){
      $('p').text('');
      $('p').removeClass('warning');
      var item = $('<li></li>');

      var a = $('<a href="#" class="remove">&#10008;</a>');
      removeFunctionality(a);
      item.append(a);

      var s = $('<span></span>').text(toAdd);
      item.append(s);

      console.log(item.html());
      $('.listOne').append(item);
      $('#newItem').val("");
    }else{
      $('p').text('What do you want to add?');
      $('p').addClass('warning');
    }
  });



 // Removing an item from the list
  $('a.remove').on('click', function(event){
  //  $(this).remove(); -- this will remove the X from the list
    $(event.target).parent().css("text-decoration", "line-through").delay(1000).fadeOut(300, function(){
    $(this).remove();
  });

  // removeFunctionality($('a.remove'));
 })

});
//removing all the list
$('#deleteList').on('click', function(event){
  $('.listOne').text("");
});



function removeFunctionality(a) {
  a.on('click', function(event){
  //  $(this).remove(); -- this will remove the X from the list
    $(event.target).parent().css("text-decoration", "line-through").delay(1000).fadeOut(300, function() {
      $(this).remove();
    });
  });
}
