$(function() {
    /* Fixed Header */
    let menu = $("#menu");
    let navToggle = $("#navToggle");

    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();
        menu.toggleClass("show");
    });
});


