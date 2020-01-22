$(function() {

  // Create burger
  $('#addBurger').on('click', function(event) {
    event.preventDefault();
    const newBurger = { name: $('#newBurger').val().trim() };
    $.ajax('/api/', {
      type: 'POST',
      data: newBurger
      }).then (function(data) {
          $('#newBurger').val("");
          // How would you send a flash message here?
          location.reload();
        })
    });
    // Update Burger to devoured: true
    $('.burger-list').on('click', '#devour', function(event) {
      event.preventDefault();
      let id = $(this).data('id');
    $.ajax(`/api/${id}`, {
      type: 'PUT'
    }).then(() => {
      location.reload();
    });
  });
  // Delete Burger 
  $('.burger-eaten').on('click', '#delete', function(event) {
    event.preventDefault();
    let id = $(this).data('id');
    $.ajax(`/api/${id}`, {
      type: 'DELETE'
    }).then(() => {
      location.reload();
    });
  });
  
});
