var mode = "exploration",
  codetraceColor = "white";
function highlightLine(t) {
  if (
    ($("#codetrace p")
      .css("background-color", colourTheThird)
      .css("color", codetraceColor),
    t instanceof Array)
  )
    for (var o = 0; o < t.length; o++)
      0 != t[o] &&
        $("#code" + t[o])
          .css("background-color", "black")
          .css("color", "white");
  else
    $("#code" + t)
      .css("background-color", "black")
      .css("color", "white");
}
var isPlaying = !1,
  isActionsOpen = !0,
  isStatusOpen = !1,
  isCodetraceOpen = !1;
function showActionsPanel() {
  isActionsOpen ||
    ($("#actions-hide img").removeClass("rotateLeft").addClass("rotateRight"),
    $("#actions").animate({ width: "+=" + actionsWidth }),
    (isActionsOpen = !0));
}
function hideActionsPanel() {
  isActionsOpen &&
    ($("#actions-hide img").removeClass("rotateRight").addClass("rotateLeft"),
    $("#actions").animate({ width: "-=" + actionsWidth }),
    (isActionsOpen = !1));
}
function showStatusPanel() {
  isStatusOpen ||
    ($("#status-hide img").removeClass("rotateLeft").addClass("rotateRight"),
    $("#current-action").show(),
    $("#status").animate({ width: "+=" + statusCodetraceWidth }),
    (isStatusOpen = !0));
}
function hideStatusPanel() {
  isStatusOpen &&
    ($("#status-hide img").removeClass("rotateRight").addClass("rotateLeft"),
    $("#current-action").hide(),
    $("#status").animate({ width: "-=" + statusCodetraceWidth }),
    (isStatusOpen = !1));
}
function showCodetracePanel() {
  isCodetraceOpen ||
    ($("#codetrace-hide img").removeClass("rotateLeft").addClass("rotateRight"),
    $("#codetrace").animate({ width: "+=" + statusCodetraceWidth }),
    (isCodetraceOpen = !0));
}
function hideCodetracePanel() {
  isCodetraceOpen &&
    ($("#codetrace-hide img").removeClass("rotateRight").addClass("rotateLeft"),
    $("#codetrace").animate({ width: "-=" + statusCodetraceWidth }),
    (isCodetraceOpen = !1));
}
function triggerRightPanels() {
  hideEntireActionsPanel(), showStatusPanel(), showCodetracePanel();
}
function extractQnGraph(t) {
  var o = t.internalAdjList;
  t.internalEdgeList;
  for (var e in o) {
    var c,
      s = o[e];
    (c = s.cxPercentage),
      (s.cxPercentage = s.cx),
      (s.cx = (c / 100) * MAIN_SVG_WIDTH),
      (c = s.cyPercentage),
      (s.cyPercentage = s.cy),
      (s.cy = (c / 100) * MAIN_SVG_HEIGHT);
  }
  return t;
}
$(document).ready(function () {
  var t = 27 * $("#actions p").length + 10;
  $("#actions").css("height", t), $("#actions").css("width", actionsWidth);
  var o = Math.floor((t - 16) / 2),
    e = t - 16 - o;
  $("#actions-hide").css("padding-top", o),
    $("#actions-hide").css("padding-bottom", e),
    $("#current-action").hide(),
    $("#actions-hide img").addClass("rotateRight"),
    $(".tutorial-next").css("background-color", surpriseColour),
    ("#fec515" != surpriseColour && "#a7d41e" != surpriseColour) ||
      ($(".tutorial-next").css("color", "black"),
      $(".tutorial-next img").attr("src", "img/arrow_black_right.png")),
    $("#progress-bar .ui-slider-range").css("background-color", surpriseColour),
    $("#actions").css("background-color", colourTheSecond),
    $("#actions-hide").css("background-color", colourTheSecond),
    $(".action-menu-pullout").css("left", actionsWidth + 43 + "px"),
    $(".action-menu-pullout").children().css("float", "left"),
    $(".coloured-menu-option")
      .css("background-color", colourTheSecond)
      .css("color", "white"),
    ("#fec515" != colourTheSecond && "#a7d41e" != colourTheSecond) ||
      ($("#actions p").css("color", "black"),
      $("#actions p").hover(
        function () {
          $(this).css("color", "white");
        },
        function () {
          $(this).css("color", "black");
        }
      ),
      $(".coloured-menu-option").css("color", "black"),
      $(".coloured-menu-option").hover(
        function () {
          $(this).css("color", "white");
        },
        function () {
          $(this).css("color", "black");
        }
      ),
      $("#actions-hide img").attr("src", "img/arrow_black_right.png")),
    $("#codetrace").css("background-color", colourTheThird),
    $("#codetrace-hide").css("background-color", colourTheThird),
    ("#fec515" != colourTheThird && "#a7d41e" != colourTheThird) ||
      ($("#codetrace").css("color", "black"),
      $("#codetrace-hide img").attr("src", "img/arrow_black_right.png"),
      (codetraceColor = "black")),
    $("#status").css("background-color", colourTheFourth),
    $("#status-hide").css("background-color", colourTheFourth),
    ("#fec515" != colourTheFourth && "#a7d41e" != colourTheFourth) ||
      ($("#status").css("color", "black"),
      $("#status-hide img").attr("src", "img/arrow_black_right.png")),
    $("#mode-button").click(function () {
      $("#other-modes").toggle();
    }),
    $("#mode-menu").hover(function () {
      $("#other-modes").toggle();
    }),
    $("#mode-menu a").hover(
      function () {
        $(this).css("background", surpriseColour);
      },
      function () {
        $(this).css("background", "black");
      }
    ),
    $("#mode-menu a").click(function () {
      var t = $("#mode-button").html().split("<")[0],
        o = $(this).html();
      $(this).html(t),
        $("#mode-button").html(o + '<img src="img/arrow_white.png"/>'),
        "Exploration Mode" == o
          ? ((mode = "exploration"),
            $("#status-hide").show(),
            $("#codetrace-hide").show(),
            $("#actions-hide").show(),
            $("#status").show(),
            $("#codetrace").show(),
            $("#actions").show(),
            $(".tutorial-dialog").hide(),
            hideStatusPanel(),
            hideCodetracePanel(),
            showActionsPanel())
          : "Tutorial Mode" == o &&
            ((mode = "tutorial"),
            $("#status-hide").show(),
            $("#codetrace-hide").show(),
            $("#actions-hide").show(),
            $("#current-action").html(""),
            $("#status").show(),
            $("#codetrace").show(),
            $("#actions").show(),
            isPlaying && stop(),
            hideEntireActionsPanel(),
            hideStatusPanel(),
            hideCodetracePanel(),
            $(".tutorial-dialog").first().fadeIn(500));
    }),
    $("#status-hide").click(function () {
      isStatusOpen ? hideStatusPanel() : showStatusPanel();
    }),
    $("#codetrace-hide").click(function () {
      isCodetraceOpen ? hideCodetracePanel() : showCodetracePanel();
    }),
    $("#actions-hide").click(function () {
      isActionsOpen ? hideEntireActionsPanel() : showActionsPanel();
    }),
    $(".tutorial-dialog .tutorial-next").click(function () {
      var t =
        $(this).parent().attr("id").split("-")[0] +
        "-tutorial-" +
        (parseInt($(this).parent().attr("id").slice(-1)) + 1);
      $(this)
        .parent()
        .fadeOut(500, function () {
          $("#" + t).fadeIn(500);
        });
    });
});
