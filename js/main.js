$(function() {

    var states = Object.keys(data);


    var metrics = Object.keys(data[states[0]]);

    var $menu = $(".menu");

    for (i in metrics) {
        var metric = metrics[i];

        var $menuItem = $("<option>").html("Metrika '" + metric + "'").attr("value", metric);
        console.log($menuItem);
        $menu.append($menuItem);
    }

    $menu.on("change", function(sel) {
        var metric = $menu.val();

        for (i in states) {
            var state = states[i];
            var $state = $(".state-" + state)
            var value = data[state][metric];
            console.log(state, value);
            $state.css("fill", "rgba(255, 0, 0, ." + value + ")").attr("title", value);            
        }
    });

//    for (i in states) {
//        var state = states[i];
//
//    }

//    var metrics = Object.keys(data);
//
//    for (metric in metrics) {
//        
//    } 

    $(".state").click(function() {
        var $state = $(this);

        $(".state.selected").each(function(i, item) {
            this.classList.remove("selected");
        });

//        $("svg").append($state);
        this.classList.add("selected");
    });

});
