window.addEventListener('message', function (event) {
    let show = event.data.show;
    let title = event.data.title;
    let values = event.data.values;

    if (show) {
        $(".app").empty();
        $(".app").append(createTitle(title));
        $(".app").append(createValues(values));
        $(".app").show();
        $(".app").animate({ bottom: '0px' }, 250);

    } else {
        $(".app").animate({ bottom: '-500px' }, 250, function () {
            $(".app").empty();
            $(".app").hide();
        });
    }

});

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

function createTitle(title) {
    return createParagraph(title, "title");
}

function createValues(values) {
    var valuesHTML = "";
    for (var i = 0; i < values.length; ++i) {
        valuesHTML += createParagraph(values[i], "text");
    }

    return valuesHTML;
}

function createParagraph(contents, className) {
    return "<p class='" + className + "'>" + contents + "</p>";
}
