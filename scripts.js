$(document).ready(function(){
    $('.burgermenu').on('click', function(){
        $('.mob-nav').toggle();
    })
});

$('a[href="#"]').click(function(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
});