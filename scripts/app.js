$(function () {
  $("#sortable-table tbody").sortable({
    update: function (event, ui) {
      // Get the new order of rows
      var order = [];
      $(this)
        .find("tr")
        .each(function () {
          order.push($(this).data("item-id"));
        });

      // Send an AJAX request to update the server with the new order
      $.ajax({
        url: "your_server_endpoint.php",
        method: "POST",
        data: { order: order },
        success: function (response) {
          // Handle the server response if needed
          console.log("Order updated successfully!");
        },
        error: function () {
          // Handle errors if the AJAX request fails
          console.error("Error updating order!");
        },
      });
    },
  });
  $("#sortable-table tbody").disableSelection();
});
