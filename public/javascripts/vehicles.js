$(function() {

    $.ajax({
        type: 'GET',
        url: '/api/vehicles',
        success: function(vehicles) {

            var vehicles_data = '';

            $.each(vehicles, function(key, value) {
                vehicles_data += '<tr>';
                vehicles_data += '<td>' + value.vehicle_reg + '</td>';
                vehicles_data += '<td>' + value.model + '</td>';
                vehicles_data += '<td>' + value.capacity + '</td>';
                vehicles_data += '<td>' + value.availability + '</td>';
                vehicles_data += '</tr>';
            });
            $('#vehicles_table').append(vehicles_data);
        },
        error: function() {
            alert('error loading data');
        }
    });

});