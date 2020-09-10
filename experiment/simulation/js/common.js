var colourArray = [
  "#fec515",
  "#fec515",
  "#fec515",
  "#fec515",
  "#fec515",
  "#fec515",
  "#fec515",
  "#fec515",
];
function getColours() {
  for (var e = new Array(); e.length < 4; ) {
    var t = Math.floor(Math.random() * colourArray.length);
    -1 == $.inArray(t, e) && e.push(t);
  }
  return e;
}
var generatedColours = getColours(),
  surpriseColour = colourArray[generatedColours[0]],
  colourTheSecond = colourArray[generatedColours[1]],
  colourTheThird = colourArray[generatedColours[2]],
  colourTheFourth = colourArray[generatedColours[3]];
$(document).ready(function () {
  $("#about").html(
    '<h4>About the project</h4><img class="close-overlay" src="img/cross_white.png" /><div class="content"><p><strong><span style="line-height: 200%;">Motivation</span></strong><br/>VisualGo was conceptualised in 2011 by Dr Steven Halim as a tool to help his students better understand data structures and algorithms, by allowing them to learn the basics on their own and at their own pace. Together with two of his students from the National University of Singapore, a series of visualisations were developed and consolidated, from simple sorting algorithms to complex graph data structures.</p><p>Though specifically designed for the use of NUS students taking various data structure and algorithm classes (CS1020, CS2010, CS2020, and CS3233), as advocators of online learning, we hope that curious minds around the world will find these visualisations useful as well.</p><p><strong><span style="line-height: 200%;">Ongoing developments</span></strong><br/>VisualGo is an ongoing project, and more complex visualisations are still being developed. Originally developed using HTML5 Canvas, we are currently redesigning the site to harness the power of Scalable Vector Graphics (SVG) instead. An automated testing system is also in the works.</p><p><strong><span style="line-height: 200%;">Publications</span></strong><br/>This work has been presented briefly at the CLI Workshop at the ACM ICPC World Finals 2012 (Poland, Warsaw) and at the <a href="http://www.mii.lt/olympiads_in_informatics/htm/INFOL099.htm" target="_blank">IOI Conference at IOI 2012</a> (Sirmione-Montichiari, Italy).</p></div>'
  ),
    $("#team").html(
      '<h4>The team</h4><img class="close-overlay" src="img/cross_white.png" /><div class="content"><p><strong><span style="line-height: 200%;">Project leader</span></strong><br/><a href="http://www.comp.nus.edu.sg/~stevenha/" target="_blank">Dr Steven Halim</a>, Lecturer, SoC, NUS</p><p><strong><span style="line-height: 200%;">Initial Programmers</span></strong><br/><a href="http://zichun.i-xo.net/" target="_blank">Koh Zi Chun</a><br/><a href="http://roticv.rantx.com/" target="_blank">Victor Loh Bo Huai</a></p><p><strong><span style="line-height: 200%;">Past Final Year Project students</span></strong><br/>Phan Thi Quynh Trang<br/>Peter Phandi<br/>Albert Millardo Tjindradinata<br/><p><strong><span style="line-height: 200%;">Present Final Year Project students</span></strong><br/>Nguyen Hoang Duy<br/><a href="http://www.rosemarietan.com/" target="_blank">Rose Marie Tan Zhao Yun</a><br/>Ivan Reinaldo</p><p><strong><span style="line-height: 200%;">Advisor</span></strong><br/><a href="http://felix-halim.net/" target="_blank">Felix Halim</a></p></div>'
    ),
    $("#termsofuse").html(
      '<h4>Terms of use</h4><img class="close-overlay" src="img/cross_white.png" /><div class="content"><p>If you are a data structure and algorithm teacher, you are allowed to use this website for your classes. You can take screen shots from this website and use the screen shots elsewhere as long as you cite this website as a reference.</p>\x3c!--I think we need a better copyright/terms of use statement--\x3e</div>'
    ),
    $(".colour").css("color", surpriseColour),
    $("h4").css("background-color", surpriseColour),
    $("#title a").click(function () {
      $("#title a").removeClass("selected-viz"),
        $(this).addClass("selected-viz");
    }),
    $("#trigger-about").click(function () {
      $("#dark-overlay").fadeIn(function () {
        $("#about").fadeIn();
      });
    }),
    $("#trigger-team").click(function () {
      $("#dark-overlay").fadeIn(function () {
        $("#team").fadeIn();
      });
    }),
    $("#trigger-terms").click(function () {
      $("#dark-overlay").fadeIn(function () {
        $("#termsofuse").fadeIn();
      });
    }),
    $(".close-overlay").click(function () {
      $(".overlays").fadeOut(function () {
        $("#dark-overlay").fadeOut();
      });
    });
}),
  $("#play").hide();
var listWidget = new List(),
  gw = listWidget.getGraphWidget();
function displayList() {
  (document.getElementById("insert-deque-input").style.display = "none"),
    (document.getElementById("insert-deque-front").style.display = "none"),
    (document.getElementById("insert-deque-back").style.display = "none"),
    (document.getElementById("remove-deque-front").style.display = "none"),
    (document.getElementById("remove-deque-back").style.display = "none"),
    (document.getElementById("search-peek-front").style.display = "none"),
    (document.getElementById("search-peek-back").style.display = "none"),
    (document.getElementById("enqueueback-input").style.display = "none"),
    (document.getElementById("enqueueback-go").style.display = "none"),
    (document.getElementById("pushtop-input").style.display = "none"),
    (document.getElementById("pushtop-go").style.display = "none"),
    (document.getElementById("search-input").style.display = ""),
    (document.getElementById("search-go").style.display = ""),
    (document.getElementById("insert-head").style.display = ""),
    (document.getElementById("insert-tail").style.display = ""),
    (document.getElementById("insert-kth").style.display = ""),
    (document.getElementById("remove-head").style.display = ""),
    (document.getElementById("remove-tail").style.display = ""),
    (document.getElementById("remove-kth").style.display = "");
}
function displayStack() {
  (document.getElementById("insert-deque-input").style.display = "none"),
    (document.getElementById("insert-deque-front").style.display = "none"),
    (document.getElementById("insert-deque-back").style.display = "none"),
    (document.getElementById("remove-deque-front").style.display = "none"),
    (document.getElementById("remove-deque-back").style.display = "none"),
    (document.getElementById("search-peek-front").style.display = "none"),
    (document.getElementById("search-peek-back").style.display = "none"),
    (document.getElementById("enqueueback-input").style.display = "none"),
    (document.getElementById("enqueueback-go").style.display = "none"),
    (document.getElementById("pushtop-input").style.display = ""),
    (document.getElementById("pushtop-go").style.display = ""),
    (document.getElementById("search-input").style.display = "none"),
    (document.getElementById("search-go").style.display = "none"),
    (document.getElementById("insert-head").style.display = "none"),
    (document.getElementById("insert-tail").style.display = "none"),
    (document.getElementById("insert-kth").style.display = "none"),
    (document.getElementById("remove-head").style.display = "none"),
    (document.getElementById("remove-tail").style.display = "none"),
    (document.getElementById("remove-kth").style.display = "none");
}
function displayQueue() {
  (document.getElementById("insert-deque-input").style.display = "none"),
    (document.getElementById("insert-deque-front").style.display = "none"),
    (document.getElementById("insert-deque-back").style.display = "none"),
    (document.getElementById("remove-deque-front").style.display = "none"),
    (document.getElementById("remove-deque-back").style.display = "none"),
    (document.getElementById("search-peek-front").style.display = "none"),
    (document.getElementById("search-peek-back").style.display = "none"),
    (document.getElementById("enqueueback-input").style.display = ""),
    (document.getElementById("enqueueback-go").style.display = ""),
    (document.getElementById("pushtop-input").style.display = "none"),
    (document.getElementById("pushtop-go").style.display = "none"),
    (document.getElementById("search-input").style.display = "none"),
    (document.getElementById("search-go").style.display = "none"),
    (document.getElementById("insert-head").style.display = "none"),
    (document.getElementById("insert-tail").style.display = "none"),
    (document.getElementById("insert-kth").style.display = "none"),
    (document.getElementById("remove-head").style.display = "none"),
    (document.getElementById("remove-tail").style.display = "none"),
    (document.getElementById("remove-kth").style.display = "none");
}
function displayDeque() {
  (document.getElementById("insert-deque-input").style.display = ""),
    (document.getElementById("insert-deque-front").style.display = ""),
    (document.getElementById("insert-deque-back").style.display = ""),
    (document.getElementById("remove-deque-front").style.display = ""),
    (document.getElementById("remove-deque-back").style.display = ""),
    (document.getElementById("search-peek-front").style.display = ""),
    (document.getElementById("search-peek-back").style.display = ""),
    (document.getElementById("enqueueback-input").style.display = "none"),
    (document.getElementById("enqueueback-go").style.display = "none"),
    (document.getElementById("pushtop-input").style.display = "none"),
    (document.getElementById("pushtop-go").style.display = "none"),
    (document.getElementById("search-input").style.display = "none"),
    (document.getElementById("search-go").style.display = "none"),
    (document.getElementById("insert-head").style.display = "none"),
    (document.getElementById("insert-tail").style.display = "none"),
    (document.getElementById("insert-kth").style.display = "none"),
    (document.getElementById("remove-head").style.display = "none"),
    (document.getElementById("remove-tail").style.display = "none"),
    (document.getElementById("remove-kth").style.display = "none");
}
function changeTextList() {
  (document.getElementById("list-tutorial-1-text").innerHTML =
    "Linked list is a data structure consisting of a group of vertices which together represent a sequence. Under the simplest form, each vertex is composed of a data and a reference (in other words, a link) to the next vertex in the sequence."),
    (document.getElementById("create").innerHTML = "Create"),
    (document.getElementById("search").innerHTML = "Search"),
    (document.getElementById("insert").innerHTML = "Insert"),
    (document.getElementById("remove").innerHTML = "Remove");
}
function changeTextStack() {
  (document.getElementById("list-tutorial-1-text").innerHTML =
    "Stack is a particular kind of abstract data type or collection in which the principal (or only) operations on the collection are the addition of an entity to the collection, known as push and removal of an entity, known as pop. It is known as  Last-In-First-Out (LIFO) data structure."),
    (document.getElementById("create").innerHTML = "Create"),
    (document.getElementById("search").innerHTML = "Peek"),
    (document.getElementById("insert").innerHTML = "Push"),
    (document.getElementById("remove").innerHTML = "Pop");
}
function changeTextQueue() {
  (document.getElementById("list-tutorial-1-text").innerHTML =
    "Queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principal (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. It is known as First-In-First-Out (FIFO) data structure."),
    (document.getElementById("create").innerHTML = "Create"),
    (document.getElementById("search").innerHTML = "Peek"),
    (document.getElementById("insert").innerHTML = "Enqueue"),
    (document.getElementById("remove").innerHTML = "Dequeue");
}
function changeTextDoublyList() {
  (document.getElementById("list-tutorial-1-text").innerHTML =
    "Doubly-linked list is a linked data structure that consists of a set of sequentially linked records called vertices. Each vertex contains two fields, called links, that are references to the previous and to the next vertex in the sequence of vertices."),
    (document.getElementById("create").innerHTML = "Create"),
    (document.getElementById("search").innerHTML = "Search"),
    (document.getElementById("insert").innerHTML = "Insert"),
    (document.getElementById("remove").innerHTML = "Remove");
}
function changeTextDeque() {
  (document.getElementById("list-tutorial-1-text").innerHTML =
    "Double-ended queue (dequeue, often abbreviated to deque, pronounced deck) is an abstract data type that generalizes a queue, for which elements can be added to or removed from either the front (head) or back (tail)."),
    (document.getElementById("create").innerHTML = "Create"),
    (document.getElementById("search").innerHTML = "Peek"),
    (document.getElementById("insert").innerHTML = "Enqueue"),
    (document.getElementById("remove").innerHTML = "Dequeue");
}
function searchGeneric() {
  "list" == listWidget.getActiveStatus() ||
    ("stack" == listWidget.getActiveStatus()
      ? peekStack()
      : "queue" == listWidget.getActiveStatus()
      ? peekQueue()
      : "doublylist" == listWidget.getActiveStatus() ||
        listWidget.getActiveStatus());
}
function removeGeneric() {
  "list" == listWidget.getActiveStatus() ||
    ("stack" == listWidget.getActiveStatus()
      ? removeHead()
      : "queue" == listWidget.getActiveStatus()
      ? removeHead()
      : "doublylist" == listWidget.getActiveStatus() ||
        listWidget.getActiveStatus());
}
function random() {
  isPlaying && stop(),
    setTimeout(function () {
      "exploration" == mode &&
        listWidget.generateRandom() &&
        ($("#progress-bar").slider("option", "max", 0),
        closeCreate(),
        (isPlaying = !1));
    }, 500),
    hideStatusPanel(),
    hideCodetracePanel();
}
function randomLL() {
  isPlaying && stop(),
    setTimeout(function () {
      "exploration" == mode &&
        listWidget.generateRandomSorted() &&
        ($("#progress-bar").slider("option", "max", 0),
        closeCreate(),
        (isPlaying = !1));
    }, 500),
    hideStatusPanel(),
    hideCodetracePanel();
}
function randomFixedSize() {
  isPlaying && stop(),
    setTimeout(function () {
      var e = $("#v-create-size").val();
      (e = parseInt(e)),
        "exploration" == mode &&
          listWidget.generateRandomFixedSize(e) &&
          ($("#progress-bar").slider("option", "max", 0),
          closeCreate(),
          (isPlaying = !1));
    }, 500),
    hideStatusPanel(),
    hideCodetracePanel();
}
function nonRandom() {
  isPlaying && stop(),
    setTimeout(function () {
      var e = $("#v-create-arr").val();
      (e = e.split(",")),
        "exploration" == mode &&
          listWidget.generateUserDefined(e) &&
          ($("#progress-bar").slider("option", "max", 0),
          closeCreate(),
          (isPlaying = !1));
    }, 500),
    hideStatusPanel(),
    hideCodetracePanel();
}
function peekStack() {
  isPlaying && stop(),
    setTimeout(function () {
      "exploration" == mode &&
        listWidget.peek() &&
        ($("#current-action").show(),
        $("#current-action p").html("Peek Top"),
        $("#progress-bar").slider("option", "max", gw.getTotalIteration() - 1),
        triggerRightPanels(),
        (isPlaying = !0));
    }, 500);
}
function peekQueue() {
  isPlaying && stop(),
    setTimeout(function () {
      "exploration" == mode &&
        listWidget.peek() &&
        ($("#current-action").show(),
        $("#current-action p").html("Peek Front"),
        $("#progress-bar").slider("option", "max", gw.getTotalIteration() - 1),
        triggerRightPanels(),
        (isPlaying = !0));
    }, 500);
}
function peekDeque(e) {
  isPlaying && stop(),
    setTimeout(function () {
      "front" == e
        ? "exploration" == mode &&
          listWidget.peek() &&
          ($("#current-action").show(),
          $("#current-action p").html("Peek Front"),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0))
        : "exploration" == mode &&
          listWidget.peekBack() &&
          ($("#current-action").show(),
          $("#current-action p").html("Peek Back"),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0));
    }, 500);
}
function searchVertex() {
  isPlaying && stop(),
    setTimeout(function () {
      var e = $("#v-search").val();
      (e = parseInt(e)),
        "exploration" == mode &&
          listWidget.search(e) &&
          ($("#current-action").show(),
          $("#current-action p").html("Search for " + e),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0));
    }, 500);
}
function pushTop() {
  isPlaying && stop(),
    setTimeout(function () {
      var e = $("#v-push-top-value").val();
      "exploration" == mode &&
        listWidget.insertArrHead(e) &&
        ($("#current-action").show(),
        $("#current-action p").html("Insert " + e),
        $("#progress-bar").slider("option", "max", gw.getTotalIteration() - 1),
        triggerRightPanels(),
        (isPlaying = !0));
    }, 500);
}
function enqueueBack() {
  isPlaying && stop(),
    setTimeout(function () {
      var e = $("#v-enqueue-back-value").val();
      "exploration" == mode &&
        listWidget.insertArrTail(e) &&
        ($("#current-action").show(),
        $("#current-action p").html("Insert " + e),
        $("#progress-bar").slider("option", "max", gw.getTotalIteration() - 1),
        triggerRightPanels(),
        (isPlaying = !0));
    }, 500);
}
function insertHead() {
  isPlaying && stop(),
    setTimeout(function () {
      var e = $("#v-insert-head-value").val();
      "doublylist" == listWidget.getActiveStatus()
        ? "exploration" == mode &&
          listWidget.insertArrHeadDoublyList(e) &&
          ($("#current-action").show(),
          $("#current-action p").html("Insert " + e),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0))
        : "exploration" == mode &&
          listWidget.insertArrHead(e) &&
          ($("#current-action").show(),
          $("#current-action p").html("Insert " + e),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0));
    }, 500);
}
function insertTail() {
  isPlaying && stop(),
    setTimeout(function () {
      var e = $("#v-insert-tail-value").val();
      "doublylist" == listWidget.getActiveStatus()
        ? "exploration" == mode &&
          listWidget.insertArrTailDoublyList(e) &&
          ($("#current-action").show(),
          $("#current-action p").html("Insert " + e),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0))
        : "exploration" == mode &&
          listWidget.insertArrTail(e) &&
          ($("#current-action").show(),
          $("#current-action p").html("Insert " + e),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0));
    }, 500);
}
function insertKth() {
  isPlaying && stop(),
    setTimeout(function () {
      var e = $("#v-insert-kth-value").val(),
        t = $("#v-insert-kth").val();
      "doublylist" == listWidget.getActiveStatus()
        ? "exploration" == mode &&
          listWidget.insertArrKthDoublyList(e, t) &&
          ($("#current-action").show(),
          $("#current-action p").html("Insert " + e),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0))
        : "exploration" == mode &&
          listWidget.insertArrKth(e, t) &&
          ($("#current-action").show(),
          $("#current-action p").html("Insert " + e),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0));
    }, 500);
}
function insertDeque(e) {
  isPlaying && stop(),
    setTimeout(function () {
      var t = $("#v-insert-deque-value").val();
      "front" == e
        ? "exploration" == mode &&
          listWidget.insertArrHeadDoublyList(t) &&
          ($("#current-action").show(),
          $("#current-action p").html("Insert " + t + " to Front"),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0))
        : "exploration" == mode &&
          listWidget.insertArrTailDoublyList(t) &&
          ($("#current-action").show(),
          $("#current-action p").html("Insert " + t + " to Back"),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0));
    }, 500);
}
function removeHead() {
  isPlaying && stop(),
    setTimeout(function () {
      "doublylist" == listWidget.getActiveStatus()
        ? "exploration" == mode &&
          listWidget.removeArrHeadDoublyList() &&
          ($("#current-action").show(),
          $("#current-action p").html("Remove head"),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0))
        : "exploration" == mode &&
          listWidget.removeArrHead() &&
          ($("#current-action").show(),
          $("#current-action p").html("Remove head"),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0));
    }, 500);
}
function removeTail() {
  isPlaying && stop(),
    setTimeout(function () {
      "doublylist" == listWidget.getActiveStatus()
        ? "exploration" == mode &&
          listWidget.removeArrTailDoublyList() &&
          ($("#current-action").show(),
          $("#current-action p").html("Remove Tail"),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0))
        : "exploration" == mode &&
          listWidget.removeArrTail() &&
          ($("#current-action").show(),
          $("#current-action p").html("Remove Tail"),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0));
    }, 500);
}
function removeKth() {
  isPlaying && stop(),
    setTimeout(function () {
      var e = $("#v-remove-kth").val();
      "doublylist" == listWidget.getActiveStatus()
        ? "exploration" == mode &&
          listWidget.removeArrKthDoublyList(e) &&
          ($("#current-action").show(),
          $("#current-action p").html("Remove " + e),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0))
        : "exploration" == mode &&
          listWidget.removeArrKth(e) &&
          ($("#current-action").show(),
          $("#current-action p").html("Remove " + e),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0));
    }, 500);
}
function removeDeque(e) {
  isPlaying && stop(),
    setTimeout(function () {
      "front" == e
        ? "exploration" == mode &&
          listWidget.removeArrHeadDoublyList() &&
          ($("#current-action").show(),
          $("#current-action p").html("Remove Front"),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0))
        : "exploration" == mode &&
          listWidget.removeArrTailDoublyList() &&
          ($("#current-action").show(),
          $("#current-action p").html("Remove Back"),
          $("#progress-bar").slider(
            "option",
            "max",
            gw.getTotalIteration() - 1
          ),
          triggerRightPanels(),
          (isPlaying = !0));
    }, 500);
}
function createModelingOpen(e) {
  $(".create").css("bottom", "114px"),
    "createfixedsize" != e && $("#createfixedsize-input").fadeOut("fast"),
    "createuserdefined" != e && $("#createuserdefined-input").fadeOut("fast"),
    $("#" + e + "-input").fadeIn("fast");
}
function insertModelingOpen(e) {
  $(".insert").css("bottom", "60px"),
    "insertkth" != e && $("#insertkth-input").fadeOut("fast"),
    "inserthead" != e && $("#inserthead-input").fadeOut("fast"),
    "inserttail" != e && $("#inserttail-input").fadeOut("fast"),
    $("#" + e + "-input").fadeIn("fast");
}
function removeModelingOpen(e) {
  $(".remove").css("bottom", "33px"), $("#" + e + "-input").fadeIn("fast");
}
listWidget.setActiveStatus("list"),
  $("#title-LL").click(function () {
    isPlaying && stop(),
      hideEntireActionsPanel(),
      showActionsPanel(),
      displayList(),
      changeTextList(),
      hideStatusPanel(),
      hideCodetracePanel(),
      listWidget.setActiveStatus("list");
  }),
  $("#title-Stack").click(function () {
    isPlaying && stop(),
      hideEntireActionsPanel(),
      showActionsPanel(),
      displayStack(),
      changeTextStack(),
      hideStatusPanel(),
      hideCodetracePanel(),
      listWidget.setActiveStatus("stack");
  }),
  $("#title-Queue").click(function () {
    isPlaying && stop(),
      hideEntireActionsPanel(),
      showActionsPanel(),
      displayQueue(),
      changeTextQueue(),
      hideStatusPanel(),
      hideCodetracePanel(),
      listWidget.setActiveStatus("queue");
  }),
  $("#title-DLL").click(function () {
    isPlaying && stop(),
      hideEntireActionsPanel(),
      displayList(),
      changeTextDoublyList(),
      showActionsPanel(),
      hideStatusPanel(),
      hideCodetracePanel(),
      listWidget.setActiveStatus("doublylist");
  }),
  $("#title-Deque").click(function () {
    isPlaying && stop(),
      hideEntireActionsPanel(),
      displayDeque(),
      changeTextDeque(),
      showActionsPanel(),
      hideStatusPanel(),
      hideCodetracePanel(),
      listWidget.setActiveStatus("deque");
  });
var isPaused = !1;
function isAtEnd() {
  return gw.getCurrentIteration() == gw.getTotalIteration() - 1;
}
function pause() {
  isPlaying &&
    ((isPaused = !0), gw.pause(), $("#play").show(), $("#pause").hide());
}
function play() {
  isPlaying &&
    ((isPaused = !1),
    $("#pause").show(),
    $("#play").hide(),
    isAtEnd() ? gw.replay() : gw.play());
}
function stepForward() {
  isPlaying && (pause(), gw.forceNext(250));
}
function stepBackward() {
  isPlaying && (pause(), gw.forcePrevious(250));
}
function goToBeginning() {
  isPlaying && (gw.jumpToIteration(0, 0), pause());
}
function goToEnd() {
  isPlaying && (gw.jumpToIteration(gw.getTotalIteration() - 1, 0), pause());
}
function stop() {
  gw.stop(),
    (isPaused = !1),
    (isPlaying = !1),
    $("#pause").show(),
    $("#play").hide(),
    $("#current-action").hide();
}
$(document).keydown(function (e) {
  if (32 == e.which) isPaused ? play() : pause();
  else if (37 == e.which) stepBackward();
  else if (39 == e.which) stepForward();
  else if (35 == e.which) stop();
  else if (189 == e.which) {
    (t = 2200 - gw.getAnimationDuration() - 100) > 0
      ? $("#speed-input").slider("value", t)
      : $("#speed-input").slider("value", 0);
  } else if (187 == e.which) {
    var t;
    (t = 2200 - gw.getAnimationDuration() + 100) <= 2e3
      ? $("#speed-input").slider("value", t)
      : $("#speed-input").slider("value", 2e3);
  }
}),
  $("#speed-input").slider({
    min: 200,
    max: 2e3,
    value: 1700,
    change: function (e, t) {
      gw.setAnimationDuration(2200 - t.value);
    },
  }),
  $("#progress-bar").slider({
    range: "min",
    min: 0,
    value: 0,
    slide: function (e, t) {
      gw.pause(), gw.jumpToIteration(t.value, 0);
    },
    stop: function (e, t) {
      isPaused ||
        setTimeout(function () {
          gw.play();
        }, 500);
    },
  });
