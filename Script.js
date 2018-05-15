

$(document).ready(function(){
setTimeout(function(){
var title = $("#listing-title").html();
$(".listing-details-container div.row:first").append('<div class="row"><div class="col-12"><h1>'+title+'</h1></div></div>');
$(".marketplace-lander").hide();
var s = document.createElement("span");
$(s).addClass("checked_color");
$('.checkbox-container input[type=checkbox]').wrap('<span class="checked_color" />');
}, 1000);
});


