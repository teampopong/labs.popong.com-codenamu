(function () {
window.PG = window.PG || {};

function length(coll) {
    var cnt = 0;
    $.each(coll, function () { cnt++; });
    return cnt;
}

PG.Legend = function (map, id, w, h) { 

    var i = 0;
    var margin = 3;
    var width = w * 3;
    var height = length(map) * (h + margin);

    $('#'+id).empty();
    var R = Raphael(id, width, height);
    var legends = {};

    $.each(map, function (group, color) {
        R.rect(0, i*(h+margin), w, h).attr("fill", color).attr("stroke", 'transparent');
        R.text(w+margin, i*(h+margin)+h/2, group).attr("text-anchor", "start").attr("font-size", h);
        i++;
    });
}
}());


