$(function() {

    $.ajax({
        type: 'GET',
        url: '/api/lecturers',
        success: function(lecturers) {

            var lecturers_data = '';

            $.each(lecturers, function(key, value) {
                lecturers_data += '<tr>';
                lecturers_data += '<td>' + value.name + '</td>';
                lecturers_data += '<td>' + value.surname + '</td>';
                lecturers_data += '<td>' + value.department + '</td>';
                lecturers_data += '<td>' + value.mobile_number + '</td>';
                lecturers_data += '<td>' + value.email + '</td>';
                lecturers_data += '</tr>';
            });

            $('#lecturers_table').append(lecturers_data);
        },
        error: function() {
            alert('error loading data');
        }
    });

});