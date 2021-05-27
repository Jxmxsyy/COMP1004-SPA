$(document).ready(function () {
    $('#admin').click(function () { 
        $('.body').load('admin.html');  
    });    
});

$(document).on("click", "#bookings", function () {
    $('.body').load('bookings.html');

});

$(document).on("click", "#edit", function () {
    $('.body').load('edit.html');

});

$(document).on("click", "#covid", function () {
    $('.body').load('covidReporting.html');

});

$(document).on("click", "#logout", function () {   
    $('.body').load('index.html');
    
});

