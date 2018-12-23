$(function() {

    $.ajax({
        type: 'GET',
        url: '/api/drivers',
        success: function(drivers) {
            var drivers_data = '';
            $.each(drivers, function(key, value) {
                drivers_data += '<tr>';
                drivers_data += '<td>' + value.driver_id + '</td>';
                drivers_data += '<td>' + value.name + '</td>';
                drivers_data += '<td>' + value.surname + '</td>';
                drivers_data += '<td>' + value.available + '</td>';
                drivers_data += '<td>' + value.mobile_number + '</td>';
                drivers_data += '</tr>';
            });
            $('#drivers_table').append(drivers_data);
        },
        error: function() {
            alert('error loading data');
        }
    });

});