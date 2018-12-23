$(function() {

    $.ajax({
        type: 'GET',
        url: '/api/students',
        success: function(students) {

            var students_data = '';

            $.each(students, function(key, value) {
                students_data += '<tr>';
                students_data += '<td>' + value.reg_num + '</td>';
                students_data += '<td>' + value.name + '</td>';
                students_data += '<td>' + value.surname + '</td>';
                students_data += '<td>' + value.department + '</td>';
                students_data += '<td>' + value.number_of_assessments + '</td>';
                students_data += '<td>' + value.org_name + '</td>';
                students_data += '<td>' + value.city + '</td>';
                students_data += '<td>' + value.country + '</td>';
                students_data += '</tr>';
            });

            $('#students_table').append(students_data);
        },
        error: function() {
            alert('error loading data');
        }
    });

});