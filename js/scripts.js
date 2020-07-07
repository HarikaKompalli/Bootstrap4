$(document).ready(function () {
    $("#mycarousel").carousel({
        interval: 2000
    });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        } else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
    $("#loginBtn").click(function () {
        $("#loginModal").modal('show');
    });
    $("#reserveBtn").click(function () {
        $("#reservationModal").modal('show');
    });
    $(".close").click(function () {
        $("#reservationModal").modal('hide');
        $("#loginModal").modal('hide');
    });
    $("#cancel-login, #cancel-reserve").click(function () {
        $("#reservationModal").modal('hide');
        $("#loginModal").modal('hide');
    });
})
