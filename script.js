$(document).ready(function() {
    $('nav a').on('click', function() {
        alert('Navigating to ' + $(this).text() + ' page!');
    });
});
