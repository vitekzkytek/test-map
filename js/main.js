
$(function() {

    var states = Object.keys(data);
    var metrics = Object.keys(data[states[0]]["metrics"]);
    var $menu = $(".menu ul");
    var $svgContainer = $(".svg-container");

    //
    // Open / Hide menu
    //
    var $menuTrigger = $(".menu-trigger");
    $menuTrigger.click(function() {
        $menu.toggleClass("opened");
    });

    //
    // Selects a particular metrics - repaint map
    //
    var selectMetric = function(metric) {
        for (i in states) {
            var state = states[i];

            var $state = $(".state-" + state);
            var $statePin = $(".pin-" + state);

            var value = data[state]["metrics"][metric];
            $statePin.find(".number").html(value);

            $state.css("fill", "rgba(255, 0, 0, ." + value + ")");
        }
    };

    //
    // Create numbered pins
    //
    for (i in states) {
        var state = states[i];
        var $state = $(".state-" + state);

        var coordinates = $state[0].getBBox();

        var $statePin = $("<div>").attr("class", "state-pin pin-" + state).html(
                "<div class=\"number\">" + "</div>"
                + "<div class=\"detail\">"
                + "  <div class=\"title\">R&amp;D Výdaje</div>"
                + "  <div class=\"content\">"
                + "    <div class=\"left\">"
                + "      <span class=\"value\">100</span>"
                + "      <span class=\"points\">b</span>"
                + "    </div>"
                + "    <div class=\"right\">"
                + "      <div class=\"line\"><span class=\"score\">1/28</span></div>"
                + "      <div class=\"line\"><span class=\"percentage\">1,4%</span></div>"
                + "      <div class=\"comment\">Dom. s připojením k internetu</div>"
                + "    </div>"
                + "  </div>"
                + "  <button class=\"btn btn-detail\">Porovnat</button>"
                + "</div>"
                );
        $statePin.css("left", 100 / (700 / (coordinates.x + coordinates.width / 2 - data[state]["pinFix"]["x"])) + "%");
        $statePin.css("bottom", 100 - (100 / ((700 * 0.79) / (coordinates.y + coordinates.height / 2 - data[state]["pinFix"]["y"]))) + "%");
        $svgContainer.append($statePin);
    }

    for (i in metrics) {
        var metric = metrics[i];

        var $menuItem = $("<li>").html("<span data-metric=\"" + metric + "\">Metrika '" + metric + "'</span>").click(function(e) {
            selectMetric(e.target.getAttribute("data-metric"));
        });

        $menu.append($menuItem);
    }

    //select first metrics
    selectMetric(Object.keys(data[states[0]]["metrics"])[0]);


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
