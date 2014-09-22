$(function() {
    $(".state").click(function() {
        var $state = $(this);
        
        $(".state.selected").each(function(i, item) {
           this.classList.remove("selected"); 
        });
        
        $("svg").append($state);
        this.classList.add("selected");
    });

});
