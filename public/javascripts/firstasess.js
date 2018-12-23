/**
 * Created by tbill on 17-May-18.
 */
$(function() {

    $.ajax({
        type: 'GET',
        url: '/api/first',
        success: function(first_students) {

            var students_data = '';

            $.each(first_students, function(key, value) {
                students_data += '<tr>';
                students_data += '<td>' + value.reg_num + '</td>';
                students_data += '<td>' + value.name + '</td>';
                students_data += '<td>' + value.surname + '</td>';
                students_data += '<td>' + value.department + '</td>';
                students_data += '<td>' + value.org_name + '</td>';
                students_data += '<td>' + value.longitude + '</td>';
                students_data += '<td>' + value.latitude + '</td>';
                students_data += '<td>' + value.city + '</td>';
                students_data += '<td>' + value.country + '</td>';
                students_data += '</tr>';
            });

            $('#first_students_table').append(students_data);
        },
        error: function() {
            alert('error loading data');
        }
    });

});