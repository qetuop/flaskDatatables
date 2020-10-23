function getDataFile() {
    $.ajax({
        url: "/static/ajax/objects.txt",
        success: function(data) {
            var columns = [];

            data = JSON.parse(data)

            columnNames = Object.keys(data.data[0]);
            for (var i in columnNames) {
                columns.push({
                    data: columnNames[i],
                    title: columnNames[i]
                });
            }
            table = $('#example').DataTable({
                data: data.data,
                columns: columns
            });
        }
    })
}

function getData() {
    $.ajax({
        url: "/data",
        success: function(data) {
            var columns = [];

            // no need to parse ?object?

            columnNames = Object.keys(data.data[0]);
            for (var i in columnNames) {
                columns.push({
                    data: columnNames[i],
                    title: columnNames[i]
                });
            }
            table = $('#example2').DataTable({
                data: data.data,
                columns: columns
            });
        }
    })
}

/*  This will update table on page load
ready() calls getData passing in a function that is called in ajax: success

function getData(cb_func) {
    $.ajax({
      url: "/ajax/objects.txt",
      success: cb_func
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function() {
  getData(function( data ) {
    var columns = [];
    data = JSON.parse(data);
    columnNames = Object.keys(data.data[0]);
    for (var i in columnNames) {
      columns.push({data: columnNames[i], 
                    title: capitalizeFirstLetter(columnNames[i])});
    }
	$('#example').DataTable( {
		data: data.data,
		columns: columns
	} );
  });
  
} );
*/