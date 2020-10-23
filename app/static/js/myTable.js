function getData(cb_func) {
    $.ajax({
      url: "/static/ajax/objects.txt",
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
