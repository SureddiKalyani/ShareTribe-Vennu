$(document).ready(function () {
    setTimeout(function () {
        var val = $('.listing-details-container .row:eq(9)').text().trim().split(':').pop().trim();
        var place = $('.origin')["0"].nextElementSibling.value;
        $('.listing-details-container .row:eq(2)').html('<div class="row"><div class="col-12"> <div class="row"> <div class="col-6"><p>' + place + '</p></div>   <div class="col-6"><b>Standing / Seating</b><p>' + val + '</p> </div></div></div></div>');

        
        // heading after image and hide on top
        var title = $("#listing-title").html();
        $(".listing-details-container div.row:first").append('<div class="row"><div class="col-12"><h1 class="heading_list">' + title + '</h1></div></div>');
        $(".marketplace-lander").hide();

        // for checkboxes
        var s = document.createElement("span");
        $(s).addClass("checked_color");
        $('.checkbox-container input[type=checkbox]').wrap('<span class="checked_color" />');
    }, 1000);
});