$(document).ready(() => {
    //handle nav bar aauto close after nav bar manu click in mobile and tablet device
    $(".nav-link").click(() => {
        $('.navbar-collapse').collapse('hide');
    });

    //get current copyright year
    var currentYear = new Date().getFullYear();
    $('#currentYear').text(currentYear);
});