var BACK_EDGE_CONST = 5e3,
  List = function () {
    var e = new GraphWidget(),
      t = "list",
      r = [1, 100],
      s = [15, 6, 23, 4, 7, 71, 5, 50],
      n = [15, 6, 50, 4],
      l = {},
      a = 0,
      E = 9;
    function u(r) {
      var s;
      for (a = 0, o(), s = 0; s < r.length; s++) {
        var n = l.root,
          i = parseInt(r[s]);
        if (null == n)
          (l.root = parseInt(i)),
            (l[i] = {
              parent: null,
              leftChild: null,
              rightChild: null,
              vertexClassNumber: a,
            });
        else {
          for (; null != l[n].rightChild; ) n = l[n].rightChild;
          (l[n].rightChild = i),
            (l[i] = {
              parent: n,
              leftChild: null,
              rightChild: null,
              vertexClassNumber: a,
            });
        }
        a++;
      }
      for (key in (m(), l))
        "root" != key &&
          e.addVertex(l[key].cx, l[key].cy, key, l[key].vertexClassNumber, !0);
      for (key in l)
        if ("root" != key && key != l.root) {
          n = l[key].parent;
          e.addEdge(
            l[n].vertexClassNumber,
            l[key].vertexClassNumber,
            l[n].vertexClassNumber,
            EDGE_TYPE_DE,
            1,
            !0
          ),
            ("doublylist" != t && "deque" != t) ||
              e.addEdge(
                l[key].vertexClassNumber,
                l[n].vertexClassNumber,
                l[n].vertexClassNumber + BACK_EDGE_CONST,
                EDGE_TYPE_DE,
                1,
                !0
              );
        }
    }
    function o() {
      var t;
      for (t in l)
        "root" != t &&
          (e.removeEdge(l[t].vertexClassNumber + BACK_EDGE_CONST),
          e.removeEdge(l[t].vertexClassNumber));
      for (t in l) "root" != t && e.removeVertex(l[t].vertexClassNumber);
      ((l = {}).root = null), (a = 0);
    }
    function d(e, r, s) {
      (null != r && null != r && r instanceof Object) || (r = {}),
        (null != s && null != s && s instanceof Object) || (s = {});
      var n,
        l,
        a = { vl: {}, el: {} };
      for (n in e)
        "root" != n &&
          ((l = e[n].vertexClassNumber),
          (a.vl[l] = {}),
          (a.vl[l].cx = e[n].cx),
          (a.vl[l].cy = e[n].cy),
          (a.vl[l].text = n),
          (a.vl[l].state = VERTEX_DEFAULT)),
          null != e[n].rightChild &&
            ((parentChildEdgeId = e[n].vertexClassNumber),
            (a.el[parentChildEdgeId] = {}),
            (a.el[parentChildEdgeId].vertexA = e[n].vertexClassNumber),
            (a.el[parentChildEdgeId].vertexB =
              e[e[n].rightChild].vertexClassNumber),
            (a.el[parentChildEdgeId].type = EDGE_TYPE_DE),
            (a.el[parentChildEdgeId].weight = 1),
            (a.el[parentChildEdgeId].state = EDGE_DEFAULT),
            (a.el[parentChildEdgeId].animateHighlighted = !1),
            ("doublylist" != t && "deque" != t) ||
              ((parentChildEdgeId = e[n].vertexClassNumber + BACK_EDGE_CONST),
              (a.el[parentChildEdgeId] = {}),
              (a.el[parentChildEdgeId].vertexA =
                e[e[n].rightChild].vertexClassNumber),
              (a.el[parentChildEdgeId].vertexB = e[n].vertexClassNumber),
              (a.el[parentChildEdgeId].type = EDGE_TYPE_DE),
              (a.el[parentChildEdgeId].weight = 1),
              (a.el[parentChildEdgeId].state = EDGE_DEFAULT),
              (a.el[parentChildEdgeId].animateHighlighted = !1)));
      for (n in r)
        (l = e[n].vertexClassNumber), (a.vl[l].state = VERTEX_TRAVERSED);
      for (n in s) a.el[n].state = EDGE_TRAVERSED;
      return a;
    }
    function m() {
      !(function e(r) {
        if (null == r) return;
        if ("stack" == t) {
          if (r == l.root) l[r].cy = 20;
          else {
            var s = l[r].parent;
            l[r].cy = l[s].cy + 70;
          }
          l[r].cx = 350;
        } else {
          if (r == l.root) l[r].cx = 20;
          else {
            var s = l[r].parent;
            l[r].cx = l[s].cx + 70;
          }
          l[r].cy = 50;
        }
        e(l[r].rightChild);
      })(l.root);
    }
    function h(e) {
      switch (e) {
        case 0:
          (document.getElementById("code1").innerHTML = "Vertex temp1 = head"),
            (document.getElementById("code2").innerHTML = "while (--k!=0)"),
            (document.getElementById("code3").innerHTML =
              "&nbsp&nbsptemp1 = temp1.next"),
            (document.getElementById("code4").innerHTML =
              "Vertex temp2 = temp1.next"),
            (document.getElementById("code5").innerHTML =
              "Vertex newVertex = new Vertex(input)"),
            "doublylist" == t || "deque" == t
              ? ((document.getElementById("code6").innerHTML =
                  "newVertex.next = temp2 , temp2.prev = newVertex"),
                (document.getElementById("code7").innerHTML =
                  "temp1.next = newVertex , newVertex.prev = temp1"))
              : ((document.getElementById("code6").innerHTML =
                  "temp1.next = newVertex"),
                (document.getElementById("code7").innerHTML =
                  "newVertex.next = temp2"));
          break;
        case 1:
          (document.getElementById("code1").innerHTML =
            "Vertex temp = new Vertex(input)"),
            (document.getElementById("code2").innerHTML = "temp.next = head"),
            "doublylist" == t || "deque" == t
              ? 1 == a
                ? ((document.getElementById("code3").innerHTML =
                    "if (head!=null) head.prev = temp"),
                  (document.getElementById("code4").innerHTML = "head = temp"),
                  (document.getElementById("code5").innerHTML = "tail = head"))
                : ((document.getElementById("code3").innerHTML =
                    "if (head!=null) head.prev = temp"),
                  (document.getElementById("code4").innerHTML = "head = temp"),
                  (document.getElementById("code5").innerHTML = ""))
              : 1 == a
              ? ((document.getElementById("code3").innerHTML = "head = temp"),
                (document.getElementById("code4").innerHTML = "tail = head"),
                (document.getElementById("code5").innerHTML = ""))
              : ((document.getElementById("code3").innerHTML = "head = temp"),
                (document.getElementById("code4").innerHTML = ""),
                (document.getElementById("code5").innerHTML = "")),
            (document.getElementById("code6").innerHTML = ""),
            (document.getElementById("code7").innerHTML = "");
          break;
        case 2:
          (document.getElementById("code1").innerHTML =
            "Vertex temp = new Vertex(input)"),
            (document.getElementById("code2").innerHTML = "tail.next = temp"),
            "doublylist" == t || "deque" == t
              ? ((document.getElementById("code3").innerHTML =
                  "temp.prev = tail"),
                (document.getElementById("code4").innerHTML = "tail = temp"))
              : ((document.getElementById("code3").innerHTML = "tail = temp"),
                (document.getElementById("code4").innerHTML = "")),
            (document.getElementById("code5").innerHTML = ""),
            (document.getElementById("code6").innerHTML = ""),
            (document.getElementById("code7").innerHTML = "");
          break;
        case 3:
          (document.getElementById("code1").innerHTML = "return head.data"),
            (document.getElementById("code2").innerHTML = ""),
            (document.getElementById("code3").innerHTML = ""),
            (document.getElementById("code4").innerHTML = ""),
            (document.getElementById("code5").innerHTML = ""),
            (document.getElementById("code6").innerHTML = ""),
            (document.getElementById("code7").innerHTML = "");
          break;
        case 4:
          (document.getElementById("code1").innerHTML =
            "temp = head , index = 0"),
            (document.getElementById("code2").innerHTML =
              "while (temp.data != input)"),
            (document.getElementById("code3").innerHTML =
              "&nbsp&nbsptemp = temp.next , index++"),
            (document.getElementById("code4").innerHTML =
              "&nbsp&nbspif temp == null"),
            (document.getElementById("code5").innerHTML =
              "&nbsp&nbsp&nbsp&nbspreturn -1"),
            (document.getElementById("code6").innerHTML = "return index;"),
            (document.getElementById("code7").innerHTML = "");
          break;
        case 5:
          (document.getElementById("code1").innerHTML = "temp = head"),
            (document.getElementById("code2").innerHTML = "head = head.next"),
            (document.getElementById("code3").innerHTML = "delete temp"),
            (document.getElementById("code4").innerHTML =
              "doublylist" == t || "deque" == t
                ? "if(head!=null) head.prev = null"
                : ""),
            (document.getElementById("code5").innerHTML = ""),
            (document.getElementById("code6").innerHTML = ""),
            (document.getElementById("code7").innerHTML = "");
          break;
        case 6:
          (document.getElementById("code1").innerHTML = "Vertex prev = head"),
            (document.getElementById("code2").innerHTML = "temp = head.next"),
            (document.getElementById("code3").innerHTML =
              "while (temp.next!=null)"),
            (document.getElementById("code4").innerHTML =
              "&nbsp&nbsptemp = temp.next , prev = prev.next"),
            (document.getElementById("code5").innerHTML = "prev.next = null"),
            (document.getElementById("code6").innerHTML = "delete temp"),
            (document.getElementById("code7").innerHTML = "tail = prev");
          break;
        case 7:
          (document.getElementById("code1").innerHTML = "Vertex temp1 = head"),
            (document.getElementById("code2").innerHTML = "while (--k!=0)"),
            (document.getElementById("code3").innerHTML =
              "&nbsp&nbsptemp1 = temp1.next"),
            (document.getElementById("code4").innerHTML =
              "Vertex temp2 = temp1.next"),
            "doublylist" == t || "deque" == t
              ? ((document.getElementById("code5").innerHTML =
                  "Vertex temp3 = temp2.next"),
                (document.getElementById("code6").innerHTML = "delete temp2"),
                (document.getElementById("code7").innerHTML =
                  "temp1.next = temp3 , temp3.prev = temp1"))
              : ((document.getElementById("code5").innerHTML =
                  "temp1.next = temp1.next.next"),
                (document.getElementById("code6").innerHTML = "delete temp"),
                (document.getElementById("code7").innerHTML = ""));
          break;
        case 8:
          (document.getElementById("code1").innerHTML = "temp = tail"),
            (document.getElementById("code2").innerHTML = "tail = tail.prev"),
            (document.getElementById("code3").innerHTML = "tail.next = null"),
            (document.getElementById("code4").innerHTML = "delete temp"),
            (document.getElementById("code5").innerHTML = ""),
            (document.getElementById("code6").innerHTML = ""),
            (document.getElementById("code7").innerHTML = "");
          break;
        case 9:
          (document.getElementById("code1").innerHTML = "return tail.data"),
            (document.getElementById("code2").innerHTML = ""),
            (document.getElementById("code3").innerHTML = ""),
            (document.getElementById("code4").innerHTML = ""),
            (document.getElementById("code5").innerHTML = ""),
            (document.getElementById("code6").innerHTML = ""),
            (document.getElementById("code7").innerHTML = "");
      }
    }
    (l.root = null),
      u("stack" == t ? n : s),
      (this.setActiveStatus = function (e) {
        t != e && (o(), u("stack" == (t = e) ? n : s));
      }),
      (this.getActiveStatus = function () {
        return t;
      }),
      (this.widgetRecalculatePosition = function () {
        m();
      }),
      (this.getGraphWidget = function () {
        return e;
      }),
      (this.generateRandom = function () {
        for (
          var e = Math.floor(3 * Math.random() + 3), t = new Array();
          t.length < e;

        ) {
          var r = Math.floor(1 + 98 * Math.random());
          $.inArray(r, t) < 0 && t.push(r);
        }
        return u(t), !0;
      }),
      (this.generateRandomSorted = function () {
        for (
          var e = Math.floor(3 * Math.random() + 3), t = new Array();
          t.length < e;

        ) {
          var r = Math.floor(1 + 98 * Math.random());
          $.inArray(r, t) < 0 && t.push(r);
        }
        return (
          t.sort(function (e, t) {
            return e - t;
          }),
          u(t),
          !0
        );
      }),
      (this.generateRandomFixedSize = function (e) {
        if ("stack" == t) {
          if (e > 7)
            return (
              $("#create-err").html("maximum allowed number of vertex is 7"), !1
            );
        } else if (e > 10)
          return (
            $("#create-err").html("maximum allowed number of vertex is 10"), !1
          );
        for (var r = e, s = new Array(); s.length < r; ) {
          var n = Math.floor(1 + 98 * Math.random());
          $.inArray(n, s) < 0 && s.push(n);
        }
        return u(s), !0;
      }),
      (this.generateUserDefined = function (e) {
        var r = e.length;
        if ("stack" == t) {
          if (r > 7)
            return (
              $("#create-err").html("maximum allowed number of vertex is 7"), !1
            );
        } else if (r > 10)
          return (
            $("#create-err").html("maximum allowed number of vertex is 10"), !1
          );
        var s = new Array();
        for (i = 0; i < e.length; i++) {
          var n = parseInt(e[i]);
          $.inArray(n, s) < 0 && s.push(n);
        }
        return u(s), !0;
      }),
      (this.peek = function () {
        var t,
          r = [],
          s = l.root,
          n = d(l);
        return (
          (n = d(l, {}, {})),
          (t = l[s].vertexClassNumber),
          (n.vl[t].state = VERTEX_HIGHLIGHTED),
          (n.status = "return " + s),
          (n.lineNo = 1),
          r.push(n),
          ((n = d(l)).status = "Peek is complete"),
          (n.lineNo = 0),
          r.push(n),
          e.startAnimation(r),
          h(3),
          !0
        );
      }),
      (this.peekBack = function () {
        for (var t, r = [], s = l.root, n = d(l); null != l[s].rightChild; )
          s = l[s].rightChild;
        return (
          l[s].vertexClassNumber,
          (n = d(l, {}, {})),
          (t = l[s].vertexClassNumber),
          (n.vl[t].state = VERTEX_HIGHLIGHTED),
          (n.status = "return " + s),
          (n.lineNo = 1),
          r.push(n),
          ((n = d(l)).status = "Peek is complete"),
          (n.lineNo = 0),
          r.push(n),
          e.startAnimation(r),
          h(9),
          !0
        );
      }),
      (this.search = function (t) {
        var r,
          s = [],
          n = {},
          a = {},
          i = l.root,
          E = d(l),
          u = 0;
        for (
          E = d(l, n, a),
            r = l[i].vertexClassNumber,
            E.vl[r].state = VERTEX_HIGHLIGHTED,
            E.status = "The current Linked List",
            E.lineNo = 1,
            s.push(E);
          null != i &&
          ((E = d(l, n, a)),
          (r = l[i].vertexClassNumber),
          (E.vl[r].state = VERTEX_HIGHLIGHTED),
          (n[i] = !0),
          (E.status = "Comparing " + i + " with " + t + " (index = " + u + ")"),
          (E.lineNo = 2),
          s.push(E),
          parseInt(t) != parseInt(i));

        ) {
          if (
            ((E = d(l, n, a)),
            (r = l[i].vertexClassNumber),
            (E.vl[r].state = VERTEX_HIGHLIGHTED),
            (E.status = i + " is not equal to " + t),
            (E.lineNo = 2),
            s.push(E),
            null == (i = l[i].rightChild))
          ) {
            ((E = d(l, n, a)).status = "So temp points to the next vertex"),
              (E.lineNo = 3),
              s.push(E),
              ((E = d(l, n, a)).status = "temp is null"),
              (E.lineNo = 4),
              s.push(E),
              ((E = d(l, n, a)).status =
                "Vertex " + t + " is not in the Linked List"),
              (E.lineNo = 5),
              s.push(E);
            break;
          }
          (E = d(l, n, a)),
            (parentVertex = l[i].parent),
            (r = l[i].vertexClassNumber),
            (E.vl[r].state = VERTEX_HIGHLIGHTED);
          var o = l[parentVertex].vertexClassNumber;
          (a[o] = !0),
            (E.el[o].animateHighlighted = !0),
            (E.el[o].state = EDGE_TRAVERSED),
            (E.status = "So temp points to the next vertex"),
            (E.lineNo = 3),
            s.push(E),
            (E = d(l, n, a)),
            (r = l[i].vertexClassNumber),
            (E.vl[r].state = VERTEX_HIGHLIGHTED),
            (E.status = "temp is not null, continue searching"),
            (E.lineNo = 4),
            s.push(E),
            u++;
        }
        return (
          null != i &&
            ((E = d(l, n, a)),
            (r = l[i].vertexClassNumber),
            (E.vl[r].state = VERTEX_HIGHLIGHTED),
            (E.status = "Found vertex " + t + " return (index = " + u + ")"),
            (E.lineNo = 6),
            s.push(E)),
          ((E = d(l)).status = "Search is complete"),
          (E.lineNo = 0),
          s.push(E),
          e.startAnimation(s),
          h(4),
          !0
        );
      }),
      (this.insertArrKth = function (t, s) {
        if (0 == s) return this.insertArrHead(t);
        if (s == a) return this.insertArrTail(t);
        var n,
          i = [],
          u = {},
          o = {},
          p = l.root,
          v = d(l);
        (v.status = "The current Linked List"), (v.lineNo = 0), i.push(v);
        var x = deepCopy(l);
        if (isNaN(s))
          return $("#insert-err").html("Please fill in a number"), !1;
        if (s > a)
          return $("#insert-err").html("Please enter a valid index!"), !1;
        if (s < 0)
          return $("#insert-err").html("Please enter a valid index!"), !1;
        var I = parseInt(t);
        if (isNaN(I))
          return (
            $("#insert-err").html(
              "Please fill in a number or comma-separated array of numbers!"
            ),
            !1
          );
        if (null != x[I])
          return $("#insert-err").html("No duplicate vertex allowed!"), !1;
        if (parseInt(I) < r[0] || parseInt(I) > r[1])
          return (
            $("#insert-err").html(
              "Sorry, only values between " +
                r[0] +
                " and " +
                r[1] +
                " can be inserted."
            ),
            !1
          );
        if (a >= 10)
          return $("#insert-err").html("Sorry, maximum size is 10"), !1;
        var H = parseInt(t);
        for (
          u = {},
            o = {},
            p = l.root,
            v = d(l),
            0 == s && (p = null),
            v = d(l, u, o),
            n = l[p].vertexClassNumber,
            v.vl[n].state = VERTEX_HIGHLIGHTED,
            u[p] = !0,
            v.status = "set temp1 to head",
            v.lineNo = 1,
            i.push(v),
            j = 0;
          j < s - 1;
          j++
        ) {
          var T;
          if (
            ((v = d(l, u, o)),
            (n = l[p].vertexClassNumber),
            (v.vl[n].state = VERTEX_HIGHLIGHTED),
            (u[p] = !0),
            (v.status =
              "decrement k, index specified has not been reached, (k = " +
              (s - 1 - j) +
              ")"),
            (v.lineNo = 2),
            i.push(v),
            null == (T = l[p].rightChild))
          )
            break;
          (p = T), (parentVertex = l[p].parent), (v = d(l, u, o));
          var C = l[parentVertex].vertexClassNumber;
          (o[C] = !0),
            (v.el[C].animateHighlighted = !0),
            (v.el[C].state = EDGE_TRAVERSED),
            (v.status = "points to next vertex"),
            (v.lineNo = 3),
            i.push(v);
        }
        null != p &&
          ((v = d(l, u, o)),
          (n = l[p].vertexClassNumber),
          (v.vl[n].state = VERTEX_HIGHLIGHTED),
          (u[p] = !0),
          (v.status = "decrement k, k is 0, continue insertion"),
          (v.lineNo = 2),
          i.push(v)),
          (tempVertex = l[p].rightChild),
          (tempVertexClass = l[tempVertex].vertexClassNumber),
          ((v = d(l, u, o)).vl[tempVertexClass].state = VERTEX_GREEN_FILL),
          (v.vl[n].state = VERTEX_HIGHLIGHTED),
          (v.el[n].state = EDGE_TRAVERSED),
          (v.el[n].animateHighlighted = !0),
          (o[n] = !0),
          (v.status =
            "index specified is found, keep track of the next vertex"),
          (v.lineNo = 4),
          i.push(v),
          (l[parseInt(H)] = {
            leftChild: null,
            rightChild: null,
            vertexClassNumber: E++,
          }),
          a++;
        var c = parseInt(H);
        return (
          (newVertexVertexClass = l[parseInt(H)].vertexClassNumber),
          (l[c].cx = l[tempVertex].cx),
          (l[c].cy = l[tempVertex].cy + 70),
          ((v = d(l, u, o)).vl[n].state = VERTEX_HIGHLIGHTED),
          (v.vl[newVertexVertexClass].state = VERTEX_RED_FILL),
          (v.vl[tempVertexClass].state = VERTEX_GREEN_FILL),
          (v.status = "Create new vertex"),
          (v.lineNo = 5),
          i.push(v),
          (o[newVertexVertexClass] = !0),
          (l[p].rightChild = c),
          (l[c].parent = p),
          (l[c].rightChild = tempVertex),
          (l[tempVertex].parent = c),
          ((v = d(l, u, o)).vl[n].state = VERTEX_HIGHLIGHTED),
          (v.vl[newVertexVertexClass].state = VERTEX_RED_FILL),
          (v.vl[tempVertexClass].state = VERTEX_GREEN_FILL),
          (v.el[n].state = EDGE_TRAVERSED),
          (v.el[n].animateHighlighted = !0),
          (v.el[newVertexVertexClass].state = OBJ_HIDDEN),
          (v.status = "temp1.next points to newVertex"),
          (v.lineNo = 6),
          i.push(v),
          ((v = d(l, u, o)).vl[n].state = VERTEX_HIGHLIGHTED),
          (v.vl[newVertexVertexClass].state = VERTEX_RED_FILL),
          (v.vl[tempVertexClass].state = VERTEX_GREEN_FILL),
          (v.el[n].state = EDGE_TRAVERSED),
          (v.el[newVertexVertexClass].state = EDGE_RED),
          (v.el[newVertexVertexClass].animateHighlighted = !0),
          (v.status = "newVertex.next points to temp2"),
          (v.lineNo = 7),
          i.push(v),
          m(),
          ((v = d(l, u, o)).vl[n].state = VERTEX_HIGHLIGHTED),
          (v.vl[newVertexVertexClass].state = VERTEX_RED_FILL),
          (v.el[newVertexVertexClass].state = EDGE_RED),
          (v.vl[tempVertexClass].state = VERTEX_GREEN_FILL),
          (v.status =
            "Re-layout the linked list. " + H + " has been inserted!"),
          (v.lineNo = 0),
          i.push(v),
          ((v = d(l)).status = "Insert " + H + " has been completed."),
          (v.lineNo = 0),
          i.push(v),
          e.startAnimation(i),
          h(0),
          !0
        );
      }),
      (this.insertArrKthDoublyList = function (t, s) {
        if (0 == s) return this.insertArrHeadDoublyList(t);
        if (s == a) return this.insertArrTailDoublyList(t);
        var n,
          i = [],
          u = {},
          o = {},
          p = l.root,
          v = d(l);
        (v.status = "The current Linked List"), (v.lineNo = 0), i.push(v);
        var x = deepCopy(l);
        if (isNaN(s))
          return $("#insert-err").html("Please fill in a number"), !1;
        if (s > a)
          return $("#insert-err").html("Please enter a valid index!"), !1;
        if (s < 0)
          return $("#insert-err").html("Please enter a valid index!"), !1;
        var I = parseInt(t);
        if (isNaN(I))
          return (
            $("#insert-err").html(
              "Please fill in a number or comma-separated array of numbers!"
            ),
            !1
          );
        if (null != x[I])
          return $("#insert-err").html("No duplicate vertex allowed!"), !1;
        if (parseInt(I) < r[0] || parseInt(I) > r[1])
          return (
            $("#insert-err").html(
              "Sorry, only values between " +
                r[0] +
                " and " +
                r[1] +
                " can be inserted."
            ),
            !1
          );
        if (a >= 10)
          return $("#insert-err").html("Sorry, maximum size is 10"), !1;
        var H = parseInt(t);
        for (
          u = {},
            o = {},
            p = l.root,
            v = d(l),
            0 == s && (p = null),
            v = d(l, u, o),
            n = l[p].vertexClassNumber,
            v.vl[n].state = VERTEX_HIGHLIGHTED,
            u[p] = !0,
            v.status = "set temp1 to head",
            v.lineNo = 1,
            i.push(v),
            j = 0;
          j < s - 1;
          j++
        ) {
          var T;
          if (
            ((v = d(l, u, o)),
            (n = l[p].vertexClassNumber),
            (v.vl[n].state = VERTEX_HIGHLIGHTED),
            (u[p] = !0),
            (v.status =
              "decrement k, index specified has not been reached, (k = " +
              (s - 1 - j) +
              ")"),
            (v.lineNo = 2),
            i.push(v),
            null == (T = l[p].rightChild))
          )
            break;
          (p = T), (parentVertex = l[p].parent), (v = d(l, u, o));
          var C = l[parentVertex].vertexClassNumber;
          (o[C] = !0),
            (v.el[C].animateHighlighted = !0),
            (v.el[C].state = EDGE_TRAVERSED),
            (v.status = "points to next vertex"),
            (v.lineNo = 3),
            i.push(v);
        }
        null != p &&
          ((v = d(l, u, o)),
          (n = l[p].vertexClassNumber),
          (v.vl[n].state = VERTEX_HIGHLIGHTED),
          (u[p] = !0),
          (v.status = "decrement k, k is 0, continue insertion"),
          (v.lineNo = 2),
          i.push(v)),
          (tempVertex = l[p].rightChild),
          (tempVertexClass = l[tempVertex].vertexClassNumber),
          ((v = d(l, u, o)).vl[tempVertexClass].state = VERTEX_GREEN_FILL),
          (v.vl[n].state = VERTEX_HIGHLIGHTED),
          (v.el[n].state = EDGE_TRAVERSED),
          (v.el[n].animateHighlighted = !0),
          (o[n] = !0),
          (v.status =
            "index specified is found, keep track of the next vertex"),
          (v.lineNo = 4),
          i.push(v),
          (l[parseInt(H)] = {
            leftChild: null,
            rightChild: null,
            vertexClassNumber: E++,
          }),
          a++;
        var c = parseInt(H);
        return (
          (newVertexVertexClass = l[parseInt(H)].vertexClassNumber),
          (l[c].cx = l[tempVertex].cx),
          (l[c].cy = l[tempVertex].cy + 70),
          ((v = d(l, u, o)).vl[n].state = VERTEX_HIGHLIGHTED),
          (v.vl[newVertexVertexClass].state = VERTEX_RED_FILL),
          (v.vl[tempVertexClass].state = VERTEX_GREEN_FILL),
          (v.status = "Create new vertex"),
          (v.lineNo = 5),
          i.push(v),
          (o[newVertexVertexClass] = !0),
          (l[c].rightChild = tempVertex),
          (l[tempVertex].parent = c),
          ((v = d(l, u, o)).vl[n].state = VERTEX_HIGHLIGHTED),
          (v.vl[newVertexVertexClass].state = VERTEX_RED_FILL),
          (v.vl[tempVertexClass].state = VERTEX_GREEN_FILL),
          (v.el[n].state = EDGE_TRAVERSED),
          (v.el[newVertexVertexClass].state = EDGE_RED),
          (v.el[newVertexVertexClass + BACK_EDGE_CONST].state = OBJ_HIDDEN),
          (v.status = "newVertex.next points to temp2"),
          (v.lineNo = 6),
          i.push(v),
          ((v = d(l, u, o)).vl[n].state = VERTEX_HIGHLIGHTED),
          (v.vl[newVertexVertexClass].state = VERTEX_RED_FILL),
          (v.vl[tempVertexClass].state = VERTEX_GREEN_FILL),
          (v.el[n].state = EDGE_TRAVERSED),
          (v.el[newVertexVertexClass].state = EDGE_RED),
          (v.el[newVertexVertexClass + BACK_EDGE_CONST].state = EDGE_GREEN),
          (v.el[n + BACK_EDGE_CONST].state = OBJ_HIDDEN),
          (v.status = "temp2 prev points to newVertex"),
          (v.lineNo = 6),
          i.push(v),
          (l[p].rightChild = c),
          (l[c].parent = p),
          ((v = d(l, u, o)).vl[n].state = VERTEX_HIGHLIGHTED),
          (v.vl[newVertexVertexClass].state = VERTEX_RED_FILL),
          (v.vl[tempVertexClass].state = VERTEX_GREEN_FILL),
          (v.el[n].state = EDGE_TRAVERSED),
          (v.el[n + BACK_EDGE_CONST].state = OBJ_HIDDEN),
          (v.status = "temp1.next points to newVertex"),
          (v.lineNo = 7),
          i.push(v),
          ((v = d(l, u, o)).vl[n].state = VERTEX_HIGHLIGHTED),
          (v.vl[newVertexVertexClass].state = VERTEX_RED_FILL),
          (v.vl[tempVertexClass].state = VERTEX_GREEN_FILL),
          (v.el[n].state = EDGE_TRAVERSED),
          (v.el[n + BACK_EDGE_CONST].state = EDGE_RED),
          (v.status = "newVertex.prev points to temp1"),
          (v.lineNo = 7),
          i.push(v),
          m(),
          ((v = d(l, u, o)).vl[n].state = VERTEX_HIGHLIGHTED),
          (v.vl[newVertexVertexClass].state = VERTEX_RED_FILL),
          (v.el[newVertexVertexClass].state = EDGE_RED),
          (v.vl[tempVertexClass].state = VERTEX_GREEN_FILL),
          (v.status =
            "Re-layout the linked list. " + H + " has been inserted!"),
          (v.lineNo = 0),
          i.push(v),
          ((v = d(l)).status = "Insert " + H + " has been completed."),
          (v.lineNo = 0),
          i.push(v),
          e.startAnimation(i),
          h(0),
          !0
        );
      }),
      (this.insertArrHead = function (s) {
        var n,
          i,
          u = [],
          o = (l.root, {}),
          p = deepCopy(l),
          v = parseInt(s);
        if (isNaN(v))
          return (
            $("#insert-err").html(
              "Please fill in a number or comma-separated array of numbers!"
            ),
            !1
          );
        if (null != p[v])
          return $("#insert-err").html("No duplicate vertex allowed!"), !1;
        if (parseInt(v) < r[0] || parseInt(v) > r[1])
          return (
            $("#insert-err").html(
              "Sorry, only values between " +
                r[0] +
                " and " +
                r[1] +
                " can be inserted."
            ),
            !1
          );
        if ("stack" == t) {
          if (a >= 7)
            return $("#insert-err").html("Sorry, maximum size is 7"), !1;
        } else if (a >= 10)
          return $("#insert-err").html("Sorry, maximum size is 10"), !1;
        var x = parseInt(s);
        (n = {}),
          (i = {}),
          (o = a >= 1 ? d(l) : {}),
          (l[parseInt(x)] = {
            leftChild: null,
            rightChild: null,
            vertexClassNumber: E++,
          });
        var I = parseInt(x);
        if (((l[I].cx = 20), (l[I].cy = 120), ++a > 1)) {
          var H = l.root;
          (l[I].rightChild = H), (l[H].parent = I), (l.root = I);
        } else l.root = I;
        var T = l[parseInt(x)].vertexClassNumber;
        if (a > 1) {
          ((o = d(l, n, i)).vl[T].state = VERTEX_HIGHLIGHTED),
            (o.el[T].state = OBJ_HIDDEN),
            (o.status = "Create vertex"),
            (o.lineNo = 1),
            u.push(o),
            (o = d(l, n, i));
          var C = l[I].vertexClassNumber;
          (o.el[C].animateHighlighted = !0),
            (o.el[C].state = EDGE_HIGHLIGHTED),
            (o.vl[T].state = VERTEX_HIGHLIGHTED),
            (o.status = "So temp.next points to head"),
            (o.lineNo = 2),
            u.push(o);
        } else
          ((o = d(l, n, i)).vl[T].state = VERTEX_HIGHLIGHTED),
            (o.status = "Create vertex"),
            (o.lineNo = 1),
            u.push(o),
            ((o = d(l, n, i)).vl[T].state = VERTEX_HIGHLIGHTED),
            (o.status = "head is null, temp.next is null"),
            (o.lineNo = 2),
            u.push(o);
        return (
          ((o = d(l, n, i)).vl[T].state = VERTEX_GREEN_FILL),
          (o.status = "Head points to temp"),
          (o.lineNo = 3),
          u.push(o),
          1 == a &&
            (((o = d(l, n, i)).vl[T].state = VERTEX_BLUE_FILL),
            (o.status = "Tail points to head"),
            (o.lineNo = 4),
            u.push(o)),
          m(),
          ((o = d(l, n, i)).vl[T].state = VERTEX_BLUE_FILL),
          (o.status = "Re-layout the linked list"),
          (o.lineNo = 0),
          u.push(o),
          ((o = d(l, n, i)).status = x + " has been inserted!"),
          (o.lineNo = 0),
          u.push(o),
          e.startAnimation(u),
          h(1),
          !0
        );
      }),
      (this.insertArrHeadDoublyList = function (s) {
        var n,
          i,
          u = [],
          o = (l.root, {}),
          p = deepCopy(l),
          v = parseInt(s);
        if (isNaN(v))
          return (
            $("#insert-err").html(
              "Please fill in a number or comma-separated array of numbers!"
            ),
            !1
          );
        if (null != p[v])
          return $("#insert-err").html("No duplicate vertex allowed!"), !1;
        if (parseInt(v) < r[0] || parseInt(v) > r[1])
          return (
            $("#insert-err").html(
              "Sorry, only values between " +
                r[0] +
                " and " +
                r[1] +
                " can be inserted."
            ),
            !1
          );
        if ("stack" == t) {
          if (a >= 7)
            return $("#insert-err").html("Sorry, maximum size is 7"), !1;
        } else if (a >= 10)
          return $("#insert-err").html("Sorry, maximum size is 10"), !1;
        var x = parseInt(s);
        (n = {}),
          (i = {}),
          (o = a >= 1 ? d(l) : {}),
          (l[parseInt(x)] = {
            leftChild: null,
            rightChild: null,
            vertexClassNumber: E++,
          });
        var I = parseInt(x);
        if (((l[I].cx = 20), (l[I].cy = 120), ++a > 1)) {
          var H = l.root;
          (l[I].rightChild = H), (l[H].parent = I), (l.root = I);
        } else l.root = I;
        var T = l[parseInt(x)].vertexClassNumber;
        if (a > 1) {
          ((o = d(l, n, i)).vl[T].state = VERTEX_HIGHLIGHTED),
            (o.el[T].state = OBJ_HIDDEN),
            (o.el[T + BACK_EDGE_CONST].state = OBJ_HIDDEN),
            (o.status = "Create vertex"),
            (o.lineNo = 1),
            u.push(o),
            (o = d(l, n, i));
          var C = l[I].vertexClassNumber;
          (o.el[C].animateHighlighted = !0),
            (o.el[C].state = EDGE_HIGHLIGHTED),
            (o.vl[T].state = VERTEX_HIGHLIGHTED),
            (o.el[T + BACK_EDGE_CONST].state = OBJ_HIDDEN),
            (o.status = "So temp.next points to head"),
            (o.lineNo = 2),
            u.push(o),
            ((o = d(l, n, i)).vl[T].state = VERTEX_HIGHLIGHTED),
            (o.el[T + BACK_EDGE_CONST].state = EDGE_HIGHLIGHTED),
            (o.el[T + BACK_EDGE_CONST].animateHighlighted = !0),
            (o.status = "set prev pointer"),
            (o.lineNo = 3),
            u.push(o);
        } else
          ((o = d(l, n, i)).vl[T].state = VERTEX_HIGHLIGHTED),
            (o.status = "Create vertex"),
            (o.lineNo = 1),
            u.push(o),
            ((o = d(l, n, i)).vl[T].state = VERTEX_HIGHLIGHTED),
            (o.status = "head is null, temp.next is null"),
            (o.lineNo = 2),
            u.push(o),
            ((o = d(l, n, i)).vl[T].state = VERTEX_HIGHLIGHTED),
            (o.status = "head is null"),
            (o.lineNo = 3),
            u.push(o);
        return (
          ((o = d(l, n, i)).vl[T].state = VERTEX_GREEN_FILL),
          (o.status = "Head points to temp"),
          (o.lineNo = 4),
          u.push(o),
          1 == a &&
            (((o = d(l, n, i)).vl[T].state = VERTEX_BLUE_FILL),
            (o.status = "Tail points to head"),
            (o.lineNo = 5),
            u.push(o)),
          m(),
          ((o = d(l, n, i)).vl[T].state = VERTEX_BLUE_FILL),
          (o.status = "Re-layout the linked list"),
          (o.lineNo = 0),
          u.push(o),
          ((o = d(l, n, i)).status = x + " has been inserted!"),
          (o.lineNo = 0),
          u.push(o),
          e.startAnimation(u),
          h(1),
          !0
        );
      }),
      (this.insertArrTail = function (t) {
        if (0 == a) return this.insertArrHead(t);
        var s,
          n,
          i,
          u = [],
          o = l.root,
          p = d(l);
        (p.status = "The current LinkedList"), (p.lineNo = 0), u.push(p);
        var v = deepCopy(l),
          x = parseInt(t);
        if (isNaN(x))
          return (
            $("#insert-err").html(
              "Please fill in a number or comma-separated array of numbers!"
            ),
            !1
          );
        if (null != v[x])
          return $("#insert-err").html("No duplicate vertex allowed!"), !1;
        if (parseInt(x) < r[0] || parseInt(x) > r[1])
          return (
            $("#insert-err").html(
              "Sorry, only values between " +
                r[0] +
                " and " +
                r[1] +
                " can be inserted."
            ),
            !1
          );
        if (a >= 10)
          return $("#insert-err").html("Sorry, maximum size is 10"), !1;
        var I = parseInt(t);
        for (s = {}, n = {}, o = l.root, p = d(l); o != I && null != o; ) {
          var H;
          if (null == (H = l[o].rightChild)) break;
          o = H;
        }
        parseInt(I);
        (l[parseInt(I)] = {
          leftChild: null,
          rightChild: null,
          vertexClassNumber: E++,
        }),
          null != o
            ? ((l[parseInt(I)].parent = o), (l[o].rightChild = parseInt(I)))
            : ((l[parseInt(I)].parent = null), (l.root = parseInt(I))),
          a++,
          m();
        var T = l[parseInt(I)].vertexClassNumber;
        return (
          (i = l[o].vertexClassNumber),
          ((p = d(l, s, n)).el[i].state = OBJ_HIDDEN),
          (p.vl[T].state = VERTEX_HIGHLIGHTED),
          (p.status = "Create new vertex"),
          (p.lineNo = 1),
          u.push(p),
          ((p = d(l, s, n)).vl[i].state = VERTEX_BLUE_FILL),
          (p.vl[T].state = VERTEX_HIGHLIGHTED),
          (p.el[i].state = EDGE_TRAVERSED),
          (p.el[i].animateHighlighted = !0),
          (p.status =
            "tail.next points to new vertex. Inserting " + I + " ..."),
          (p.lineNo = 2),
          u.push(p),
          ((p = d(l, s, n)).vl[T].state = VERTEX_BLUE_FILL),
          (p.status = "Update tail pointer. " + I + " has been inserted!"),
          (p.lineNo = 3),
          u.push(p),
          ((p = d(l)).status = "Insert " + I + " to tail has been completed."),
          (p.lineNo = 0),
          u.push(p),
          e.startAnimation(u),
          h(2),
          !0
        );
      }),
      (this.insertArrTailDoublyList = function (t) {
        if (0 == a) return this.insertArrHeadDoublyList(t);
        var s,
          n,
          i,
          u = [],
          o = l.root,
          p = d(l);
        (p.status = "The current LinkedList"), (p.lineNo = 0), u.push(p);
        var v = deepCopy(l),
          x = parseInt(t);
        if (isNaN(x))
          return (
            $("#insert-err").html(
              "Please fill in a number or comma-separated array of numbers!"
            ),
            !1
          );
        if (null != v[x])
          return $("#insert-err").html("No duplicate vertex allowed!"), !1;
        if (parseInt(x) < r[0] || parseInt(x) > r[1])
          return (
            $("#insert-err").html(
              "Sorry, only values between " +
                r[0] +
                " and " +
                r[1] +
                " can be inserted."
            ),
            !1
          );
        if (a >= 10)
          return $("#insert-err").html("Sorry, maximum size is 10"), !1;
        var I = parseInt(t);
        for (s = {}, n = {}, o = l.root, p = d(l); o != I && null != o; ) {
          var H;
          if (null == (H = l[o].rightChild)) break;
          o = H;
        }
        parseInt(I);
        (l[parseInt(I)] = {
          leftChild: null,
          rightChild: null,
          vertexClassNumber: E++,
        }),
          null != o
            ? ((l[parseInt(I)].parent = o), (l[o].rightChild = parseInt(I)))
            : ((l[parseInt(I)].parent = null), (l.root = parseInt(I))),
          a++,
          m();
        var T = l[parseInt(I)].vertexClassNumber;
        return (
          (i = l[o].vertexClassNumber),
          ((p = d(l, s, n)).el[i].state = OBJ_HIDDEN),
          (p.el[i + BACK_EDGE_CONST].state = OBJ_HIDDEN),
          (p.vl[T].state = VERTEX_HIGHLIGHTED),
          (p.status = "Create new vertex"),
          (p.lineNo = 1),
          u.push(p),
          ((p = d(l, s, n)).vl[i].state = VERTEX_BLUE_FILL),
          (p.vl[T].state = VERTEX_HIGHLIGHTED),
          (p.el[i].state = EDGE_TRAVERSED),
          (p.el[i].animateHighlighted = !0),
          (p.el[i + BACK_EDGE_CONST].state = OBJ_HIDDEN),
          (p.status =
            "tail.next points to new vertex. Inserting " + I + " ..."),
          (p.lineNo = 2),
          u.push(p),
          ((p = d(l, s, n)).vl[T].state = VERTEX_HIGHLIGHTED),
          (p.vl[i].state = VERTEX_BLUE_FILL),
          (p.el[i + BACK_EDGE_CONST].state = EDGE_HIGHLIGHTED),
          (p.el[i + BACK_EDGE_CONST].animateHighlighted = !0),
          (p.status = "Update prev pointer of new vertex"),
          (p.lineNo = 3),
          u.push(p),
          ((p = d(l, s, n)).vl[T].state = VERTEX_BLUE_FILL),
          (p.status = "Update tail pointer. " + I + " has been inserted!"),
          (p.lineNo = 4),
          u.push(p),
          ((p = d(l)).status = "Insert " + I + " to tail has been completed."),
          (p.lineNo = 0),
          u.push(p),
          e.startAnimation(u),
          h(2),
          !0
        );
      }),
      (this.removeArrHead = function () {
        var t,
          r = [],
          s = {},
          n = {},
          i = l.root,
          E = d(l);
        if (
          ((E.status = "The current Linked List"),
          (E.lineNo = 0),
          r.push(E),
          (s = {}),
          (n = {}),
          (i = l.root),
          (E = d(l)),
          null == l[i].rightChild)
        )
          (E = d(l, s, n)),
            (t = l[i].vertexClassNumber),
            (E.vl[t].state = VERTEX_HIGHLIGHTED),
            (E.status = "Vertex has no children. It is the only vertex"),
            (E.lineNo = 1),
            r.push(E),
            (E = d(l, s, n)),
            (t = l[i].vertexClassNumber),
            (E.vl[t].state = VERTEX_HIGHLIGHTED),
            (E.status = "Head points to next (which is null)"),
            (E.lineNo = 2),
            r.push(E),
            (t = l[i].vertexClassNumber),
            delete l[i],
            delete s[i],
            delete n[t],
            ((E = d(l, s, n)).status = "Remove first vertex"),
            (E.lineNo = 3),
            r.push(E);
        else {
          (t = l[i].vertexClassNumber),
            ((E = d(l, s, n)).vl[t].state = VERTEX_HIGHLIGHTED),
            (E.status = "Vertex has a child"),
            (E.lineNo = 1),
            r.push(E);
          var u = l[i].rightChild;
          (t = l[i].vertexClassNumber),
            (rightChildVertexClass = l[u].vertexClassNumber),
            ((E = d(l, s, n)).vl[
              rightChildVertexClass
            ].state = VERTEX_BLUE_FILL),
            (E.vl[t].state = VERTEX_HIGHLIGHTED),
            (E.el[t].state = EDGE_BLUE),
            (E.el[t].animateHighlighted = !0),
            (E.status = "head points to next"),
            (E.lineNo = 2),
            r.push(E),
            (l.root = u),
            (l[u].parent = null),
            delete l[i],
            delete s[i],
            delete n[t],
            ((E = d(l, s, n)).vl[
              rightChildVertexClass
            ].state = VERTEX_BLUE_FILL),
            (E.status = "Delete vertex"),
            (E.lineNo = 3),
            r.push(E),
            m(),
            ((E = d(l, s, n)).vl[
              rightChildVertexClass
            ].state = VERTEX_BLUE_FILL),
            (E.status = "Re-layout the list"),
            (E.lineNo = 0),
            r.push(E);
        }
        return (
          ((E = d(l)).status = "Removal of first vertex completed"),
          (E.lineNo = 0),
          r.push(E),
          e.startAnimation(r),
          h(5),
          a--,
          !0
        );
      }),
      (this.removeArrHeadDoublyList = function () {
        var t,
          r = [],
          s = {},
          n = {},
          i = l.root,
          E = d(l);
        if (
          ((E.status = "The current Linked List"),
          (E.lineNo = 0),
          r.push(E),
          (s = {}),
          (n = {}),
          (i = l.root),
          (E = d(l)),
          null == l[i].rightChild)
        )
          (E = d(l, s, n)),
            (t = l[i].vertexClassNumber),
            (E.vl[t].state = VERTEX_HIGHLIGHTED),
            (E.status = "Vertex has no children. It is the only vertex"),
            (E.lineNo = 1),
            r.push(E),
            (E = d(l, s, n)),
            (t = l[i].vertexClassNumber),
            (E.vl[t].state = VERTEX_HIGHLIGHTED),
            (E.status = "Head points to next (which is null)"),
            (E.lineNo = 2),
            r.push(E),
            (t = l[i].vertexClassNumber),
            delete l[i],
            delete s[i],
            delete n[t],
            ((E = d(l, s, n)).status = "Remove first vertex"),
            (E.lineNo = 3),
            r.push(E);
        else {
          (t = l[i].vertexClassNumber),
            ((E = d(l, s, n)).vl[t].state = VERTEX_HIGHLIGHTED),
            (E.status = "Vertex has a child"),
            (E.lineNo = 1),
            r.push(E);
          var u = l[i].rightChild;
          (t = l[i].vertexClassNumber),
            (rightChildVertexClass = l[u].vertexClassNumber),
            ((E = d(l, s, n)).vl[
              rightChildVertexClass
            ].state = VERTEX_BLUE_FILL),
            (E.vl[t].state = VERTEX_HIGHLIGHTED),
            (E.el[t].state = EDGE_BLUE),
            (E.el[t].animateHighlighted = !0),
            (E.status = "head points to next"),
            (E.lineNo = 2),
            r.push(E),
            (l.root = u),
            (l[u].parent = null),
            delete l[i],
            delete s[i],
            delete n[t],
            ((E = d(l, s, n)).vl[
              rightChildVertexClass
            ].state = VERTEX_BLUE_FILL),
            (E.status = "Delete vertex"),
            (E.lineNo = 3),
            r.push(E),
            ((E = d(l, s, n)).vl[
              rightChildVertexClass
            ].state = VERTEX_BLUE_FILL),
            (E.status = "set head.prev to null"),
            (E.lineNo = 4),
            r.push(E),
            m(),
            ((E = d(l, s, n)).vl[
              rightChildVertexClass
            ].state = VERTEX_BLUE_FILL),
            (E.status = "Re-layout the list"),
            (E.lineNo = 0),
            r.push(E);
        }
        return (
          ((E = d(l)).status = "Removal of first vertex completed"),
          (E.lineNo = 0),
          r.push(E),
          e.startAnimation(r),
          h(5),
          a--,
          !0
        );
      }),
      (this.removeArrTail = function () {
        var t,
          r,
          s = [],
          n = {},
          i = {},
          E = l.root,
          u = l[E].rightChild,
          o = d(l);
        if (1 == a) return this.removeArrHead();
        for (
          o = d(l, n, i),
            t = l[E].vertexClassNumber,
            o.vl[t].state = VERTEX_HIGHLIGHTED,
            o.status = "The current Linked List",
            o.lineNo = 1,
            s.push(o),
            o = d(l, n, i),
            t = l[E].vertexClassNumber,
            o.vl[t].state = VERTEX_HIGHLIGHTED,
            r = l[u].vertexClassNumber,
            o.vl[r].state = VERTEX_GREEN_FILL,
            o.el[t].animateHighlighted = !0,
            o.el[t].state = EDGE_TRAVERSED,
            o.status = "The current Linked List",
            o.lineNo = 2,
            s.push(o);
          (o = d(l, n, i)),
            (t = l[E].vertexClassNumber),
            (o.vl[t].state = VERTEX_HIGHLIGHTED),
            (r = l[u].vertexClassNumber),
            (o.vl[r].state = VERTEX_GREEN_FILL),
            (n[E] = !0),
            (o.status = "check if temp.next is null"),
            (o.lineNo = 3),
            s.push(o),
            null != l[u].rightChild;

        ) {
          (u = l[u].rightChild),
            (E = l[E].rightChild),
            (o = d(l, n, i)),
            (t = l[E].vertexClassNumber),
            (o.vl[t].state = VERTEX_HIGHLIGHTED),
            (r = l[u].vertexClassNumber),
            (o.vl[r].state = VERTEX_GREEN_FILL),
            (n[E] = !0),
            (v = l[E].parent);
          var m = l[v].vertexClassNumber;
          (o.el[m].animateHighlighted = !0),
            (o.el[m].state = EDGE_TRAVERSED),
            (i[m] = !0);
          var p = l[E].vertexClassNumber;
          (o.el[p].animateHighlighted = !0),
            (o.el[p].state = EDGE_GREEN),
            (o.status = "points to next"),
            (o.lineNo = 4),
            s.push(o);
        }
        (o = d(l, n, i)),
          (t = l[E].vertexClassNumber),
          (r = l[u].vertexClassNumber),
          (o.el[t].state = OBJ_HIDDEN),
          (o.vl[t].state = VERTEX_HIGHLIGHTED),
          (r = l[u].vertexClassNumber),
          (o.vl[r].state = VERTEX_GREEN_FILL),
          (n[E] = !0),
          (o.status = "Set last vertex.next to null"),
          (o.lineNo = 5),
          s.push(o);
        var v = l[u].parent;
        return (
          null != v ? (l[v].rightChild = null) : (l.root = null),
          delete l[u],
          delete n[u],
          delete i[r],
          ((o = d(l, n, i)).vl[t].state = VERTEX_HIGHLIGHTED),
          (o.status = "delete last vertex"),
          (o.lineNo = 6),
          s.push(o),
          delete l[u],
          delete n[u],
          delete i[r],
          ((o = d(l, n, i)).vl[t].state = VERTEX_BLUE_FILL),
          (o.status = "update tail pointer"),
          (o.lineNo = 7),
          s.push(o),
          ((o = d(l)).status = "Removal of last vertex completed"),
          (o.lineNo = 0),
          s.push(o),
          e.startAnimation(s),
          h(6),
          a--,
          !0
        );
      }),
      (this.removeArrTailDoublyList = function () {
        var t,
          r,
          s = [],
          n = {},
          i = {},
          E = l.root,
          u = l[E].rightChild,
          o = d(l);
        if (1 == a) return this.removeArrHead();
        for (; null != l[u].rightChild; )
          (u = l[u].rightChild), (E = l[E].rightChild);
        (t = l[E].vertexClassNumber),
          (r = l[u].vertexClassNumber),
          ((o = d(l, n, i)).vl[r].state = VERTEX_HIGHLIGHTED),
          (o.status = "set temp to tail"),
          (o.lineNo = 1),
          s.push(o),
          ((o = d(l, n, i)).vl[r].state = VERTEX_HIGHLIGHTED),
          (o.el[t + BACK_EDGE_CONST].state = EDGE_HIGHLIGHTED),
          (o.vl[t].state = VERTEX_BLUE_FILL),
          (o.status = "set tail to tail.prev"),
          (o.lineNo = 2),
          s.push(o),
          (o = d(l, n, i)),
          (t = l[E].vertexClassNumber),
          (r = l[u].vertexClassNumber),
          (o.el[t].state = OBJ_HIDDEN),
          (o.vl[t].state = VERTEX_BLUE_FILL),
          (r = l[u].vertexClassNumber),
          (o.vl[r].state = VERTEX_HIGHLIGHTED),
          (n[E] = !0),
          (o.status = "Set last vertex.next to null"),
          (o.lineNo = 3),
          s.push(o);
        var m = l[u].parent;
        return (
          null != m ? (l[m].rightChild = null) : (l.root = null),
          delete l[u],
          delete n[u],
          delete i[r],
          ((o = d(l, n, i)).vl[t].state = VERTEX_BLUE_FILL),
          (o.status = "delete last vertex"),
          (o.lineNo = 4),
          s.push(o),
          ((o = d(l)).status = "Removal of last vertex completed"),
          (o.lineNo = 0),
          s.push(o),
          e.startAnimation(s),
          h(8),
          a--,
          !0
        );
      }),
      (this.removeArrKth = function (t) {
        var r,
          s,
          n,
          i = [],
          E = {},
          u = {},
          o = l.root,
          p = d(l),
          v = parseInt(t);
        if (isNaN(v))
          return (
            $("#remove-err").html(
              "Please fill in a number or comma-separated array of numbers!"
            ),
            !1
          );
        if (v >= a)
          return $("#remove-err").html("Please enter a valid index!"), !1;
        if (v < 0)
          return $("#remove-err").html("Please enter a valid index!"), !1;
        if (0 == (n = v)) return this.removeArrHead();
        if (n == a - 1) return this.removeArrTail();
        for (
          r = l[o].vertexClassNumber,
            p.vl[r].state = VERTEX_HIGHLIGHTED,
            p.status = "temp1 points to head",
            p.lineNo = 1,
            i.push(p),
            E = {},
            u = {},
            o = l.root,
            p = d(l),
            s = 0;
          s < n - 1;
          s++
        ) {
          var x;
          (p = d(l, E, u)),
            (r = l[o].vertexClassNumber),
            (p.vl[r].state = VERTEX_HIGHLIGHTED),
            (E[o] = !0),
            (p.status =
              "decrement k, index specified has not been reached, (k = " +
              (n - 1 - s) +
              ")"),
            (p.lineNo = 2),
            i.push(p),
            (I = o),
            (o = l[o].rightChild),
            (p = d(l, E, u)),
            (r = l[o].vertexClassNumber),
            (p.vl[r].state = VERTEX_HIGHLIGHTED),
            (u[(x = l[I].vertexClassNumber)] = !0),
            (p.el[x].animateHighlighted = !0),
            (p.el[x].state = EDGE_TRAVERSED),
            (p.status = "points to the next vertex"),
            (p.lineNo = 3),
            i.push(p);
        }
        ((p = d(l, E, u)),
        (r = l[o].vertexClassNumber),
        (p.vl[r].state = VERTEX_HIGHLIGHTED),
        (E[o] = !0),
        (p.status = "k is 0, continue removal"),
        (p.lineNo = 2),
        i.push(p),
        (I = o),
        null != (o = l[o].rightChild)) &&
          ((p = d(l, E, u)),
          (r = l[o].vertexClassNumber),
          (I = l[o].parent),
          (parentVertexClass = l[I].vertexClassNumber),
          (p.vl[parentVertexClass].state = VERTEX_HIGHLIGHTED),
          (u[(x = l[I].vertexClassNumber)] = !0),
          (p.el[x].animateHighlighted = !0),
          (p.el[x].state = EDGE_GREEN),
          (p.vl[r].state = VERTEX_GREEN_FILL),
          (E[o] = !0),
          (p.status = "keep track of the vertex to be deleted"),
          (p.lineNo = 4),
          i.push(p));
        if (null == l[o].rightChild);
        else {
          var I = l[o].parent,
            H = l[o].rightChild;
          null != I ? (l[I].rightChild = H) : (l.root = H),
            (l[H].parent = I),
            (r = l[o].vertexClassNumber),
            (rightChildVertexClass = l[H].vertexClassNumber),
            (l[o].cy = 50 + l[o].cy),
            (p = d(l, E, u)),
            (I = l[o].parent),
            (parentVertexClass = l[I].vertexClassNumber),
            (p.vl[parentVertexClass].state = VERTEX_HIGHLIGHTED),
            (p.vl[r].state = VERTEX_GREEN_FILL),
            null != I &&
              ((p.el[parentVertexClass].state = EDGE_HIGHLIGHTED),
              (p.el[parentVertexClass].animateHighlighted = !0)),
            (p.status = "Connect the previous vertex to the next vertex"),
            (p.lineNo = 5),
            i.push(p),
            delete l[o],
            delete E[o],
            delete u[r],
            ((p = d(l, E, u)).vl[parentVertexClass].state = VERTEX_HIGHLIGHTED),
            null != I && (p.el[parentVertexClass].state = EDGE_HIGHLIGHTED),
            (p.status = "Delete vertex"),
            (p.lineNo = 6),
            i.push(p),
            m(),
            ((p = d(l, E, u)).vl[parentVertexClass].state = VERTEX_HIGHLIGHTED),
            null != I && (p.el[parentVertexClass].state = EDGE_HIGHLIGHTED),
            (p.status = "Re-layout the list"),
            (p.lineNo = 0),
            i.push(p);
        }
        return (
          ((p = d(l)).status = "Removal completed"),
          (p.lineNo = 0),
          i.push(p),
          e.startAnimation(i),
          h(7),
          a--,
          !0
        );
      }),
      (this.removeArrKthDoublyList = function (t) {
        var r,
          s,
          n,
          i = [],
          E = {},
          u = {},
          o = l.root,
          p = d(l),
          v = parseInt(t);
        if (isNaN(v))
          return (
            $("#remove-err").html(
              "Please fill in a number or comma-separated array of numbers!"
            ),
            !1
          );
        if (v >= a)
          return $("#remove-err").html("Please enter a valid index!"), !1;
        if (v < 0)
          return $("#remove-err").html("Please enter a valid index!"), !1;
        if (0 == (n = v)) return this.removeArrHeadDoublyList();
        if (n == a - 1) return this.removeArrTailDoublyList();
        for (
          r = l[o].vertexClassNumber,
            p.vl[r].state = VERTEX_HIGHLIGHTED,
            p.status = "temp1 points to head",
            p.lineNo = 1,
            i.push(p),
            E = {},
            u = {},
            o = l.root,
            p = d(l),
            s = 0;
          s < n - 1;
          s++
        ) {
          var x;
          (p = d(l, E, u)),
            (r = l[o].vertexClassNumber),
            (p.vl[r].state = VERTEX_HIGHLIGHTED),
            (E[o] = !0),
            (p.status =
              "decrement k, index specified has not been reached, (k = " +
              (n - 1 - s) +
              ")"),
            (p.lineNo = 2),
            i.push(p),
            (I = o),
            (o = l[o].rightChild),
            (p = d(l, E, u)),
            (r = l[o].vertexClassNumber),
            (p.vl[r].state = VERTEX_HIGHLIGHTED),
            (u[(x = l[I].vertexClassNumber)] = !0),
            (p.el[x].animateHighlighted = !0),
            (p.el[x].state = EDGE_TRAVERSED),
            (p.status = "points to the next vertex"),
            (p.lineNo = 3),
            i.push(p);
        }
        ((p = d(l, E, u)),
        (r = l[o].vertexClassNumber),
        (p.vl[r].state = VERTEX_HIGHLIGHTED),
        (E[o] = !0),
        (p.status = "k is 0, continue removal"),
        (p.lineNo = 2),
        i.push(p),
        (I = o),
        null != (o = l[o].rightChild)) &&
          ((p = d(l, E, u)),
          (r = l[o].vertexClassNumber),
          (I = l[o].parent),
          (parentVertexClass = l[I].vertexClassNumber),
          (p.vl[parentVertexClass].state = VERTEX_HIGHLIGHTED),
          (u[(x = l[I].vertexClassNumber)] = !0),
          (p.el[x].animateHighlighted = !0),
          (p.el[x].state = EDGE_GREEN),
          (p.vl[r].state = VERTEX_GREEN_FILL),
          (E[o] = !0),
          (p.status = "keep track of the vertex to be deleted"),
          (p.lineNo = 4),
          i.push(p),
          (p = d(l, E, u)),
          (r = l[o].vertexClassNumber),
          (I = l[o].parent),
          (H = l[o].rightChild),
          (rightChildVertexClass = l[H].vertexClassNumber),
          (parentVertexClass = l[I].vertexClassNumber),
          (p.vl[parentVertexClass].state = VERTEX_HIGHLIGHTED),
          (u[(x = l[o].vertexClassNumber)] = !0),
          (p.el[x].animateHighlighted = !0),
          (p.vl[r].state = VERTEX_GREEN_FILL),
          (p.el[x].state = EDGE_RED),
          (p.vl[rightChildVertexClass].state = VERTEX_RED_FILL),
          (E[o] = !0),
          (p.status =
            "keep track of the vertex, next to the vertex to be deleted"),
          (p.lineNo = 5),
          i.push(p));
        if (null == l[o].rightChild);
        else {
          var I = l[o].parent,
            H = l[o].rightChild;
          null != I ? (l[I].rightChild = H) : (l.root = H),
            (l[H].parent = I),
            (parentVertexClass = l[I].vertexClassNumber),
            (r = l[o].vertexClassNumber),
            (rightChildVertexClass = l[H].vertexClassNumber),
            (l[o].cy = 50 + l[o].cy),
            delete l[o],
            delete E[o],
            delete u[r],
            ((p = d(l, E, u)).vl[parentVertexClass].state = VERTEX_HIGHLIGHTED),
            null != I && (p.el[parentVertexClass].state = EDGE_HIGHLIGHTED),
            (p.el[parentVertexClass].state = OBJ_HIDDEN),
            (p.el[parentVertexClass + BACK_EDGE_CONST].state = OBJ_HIDDEN),
            (p.vl[rightChildVertexClass].state = VERTEX_RED_FILL),
            (p.status = "Delete vertex"),
            (p.lineNo = 6),
            i.push(p),
            ((p = d(l, E, u)).vl[parentVertexClass].state = VERTEX_HIGHLIGHTED),
            (p.vl[rightChildVertexClass].state = VERTEX_RED_FILL),
            (p.el[parentVertexClass + BACK_EDGE_CONST].state = OBJ_HIDDEN),
            (p.status = "Connect the previous vertex to the next vertex"),
            (p.lineNo = 7),
            i.push(p),
            ((p = d(l, E, u)).vl[parentVertexClass].state = VERTEX_HIGHLIGHTED),
            (p.vl[rightChildVertexClass].state = VERTEX_RED_FILL),
            (p.el[parentVertexClass + BACK_EDGE_CONST].state = EDGE_RED),
            (p.status = "Connect the next vertex to the previous vertex"),
            (p.lineNo = 7),
            i.push(p),
            m(),
            ((p = d(l, E, u)).vl[parentVertexClass].state = VERTEX_HIGHLIGHTED),
            null != I && (p.el[parentVertexClass].state = EDGE_HIGHLIGHTED),
            (p.vl[rightChildVertexClass].state = VERTEX_RED_FILL),
            (p.status = "Re-layout the list"),
            (p.lineNo = 0),
            i.push(p);
        }
        return (
          ((p = d(l)).status = "Removal completed"),
          (p.lineNo = 0),
          i.push(p),
          e.startAnimation(i),
          h(7),
          a--,
          !0
        );
      });
  };
