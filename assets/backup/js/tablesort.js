$(function() {

  $("table").tablesorter({ theme : 'blue' });

  $("#ajax-append").click(function() {

    $.get("assets/ajax-content.html", function(html) {

      // append the "ajax'd" data to the table body
      $("table tbody").append(html);

      // let the plugin know that we made a update
      // the resort flag set to anything BUT false (no quotes) will trigger an automatic
      // table resort using the current sort
      var resort = true;
      $("table").trigger("update", [resort]);

      // triggering the "update" function will resort the table using the current sort; since version 2.0.14
      // use the following code to change the sort; set sorting column and direction, this will sort on the first and third column
      // var sorting = [[2,1],[0,0]];
      // $("table").trigger("sorton", [sorting]);
    });

    return false;
  });

});