var vertexSvg = mainSvg.append("g").attr("id", "vertex"),
  edgeSvg = mainSvg.append("g").attr("id", "edge"),
  vertexTextSvg = mainSvg.append("g").attr("id", "vertexText"),
  edgeWeightSvg = mainSvg.append("g").attr("id", "edgeWeight"),
  edgeWeightPathSvg = mainSvg.append("g").attr("id", "edgeWeightPath"),
  GraphWidget = function () {
    var e = this,
      t = {},
      n = {},
      i = {},
      r = {},
      a = NO_ITERATION,
      h = NO_STATELIST,
      o = ANIMATION_STOP,
      l = 500;
    function g(o, l) {
      console.log("iteration " + a);
      var g = Object.keys(h).length - 1;
      try {
        $("#progress-bar").slider("value", a),
          $("#status p").html(h[a].status),
          highlightLine(h[a].lineNo),
          a == g
            ? (pause(),
              $("#play img")
                .attr("src", "img/replay.png")
                .attr("alt", "replay")
                .attr("title", "replay"))
            : $("#play img")
                .attr("src", "img/play.png")
                .attr("alt", "play")
                .attr("title", "play");
      } catch (e) {}
      var u,
        s = o.vl,
        d = o.el;
      for (u in s) {
        (null != t[u] && null != t[u]) ||
          e.addVertex(s[u].cx, s[u].cy, s[u].text, u, !1);
        var c = t[u];
        c.showVertex(),
          s[u].state == OBJ_HIDDEN
            ? c.hideVertex()
            : null != s[u].state
            ? c.stateVertex(s[u].state)
            : c.stateVertex(VERTEX_DEFAULT),
          c.moveVertex(s[u].cx, s[u].cy),
          c.changeText(s[u].text),
          null != s[u]["text-font-size"] &&
            c.changeTextFontSize(s[u]["text-font-size"]),
          null != s[u]["inner-r"] &&
            null != s[u]["outer-r"] &&
            c.changeRadius(s[u]["inner-r"], s[u]["outer-r"]),
          null != s[u]["inner-w"] &&
            null != s[u]["outer-w"] &&
            c.changeWidth(s[u]["inner-w"], s[u]["outer-w"]),
          null != s[u]["inner-h"] &&
            null != s[u]["outer-h"] &&
            c.changeHeight(s[u]["inner-h"], s[u]["outer-h"]),
          null != s[u]["inner-stroke-width"] &&
            null != s[u]["outer-stroke-width"] &&
            c.changeStrokeWidth(
              s[u]["inner-stroke-width"],
              s[u]["outer-stroke-width"]
            ),
          c.redraw(l),
          (i[u] = !0);
      }
      for (u in i)
        0 == i[u] && (t[u].hideVertex(), t[u].redraw(l), (i[u] = !0));
      try {
        for (u in d) {
          (null != n[u] && null != n[u]) ||
            e.addEdge(
              d[u].vertexA,
              d[u].vertexB,
              u,
              d[u].type,
              d[u].weight,
              !1
            );
          var E = n[u];
          E.showEdge(),
            d[u].state == OBJ_HIDDEN
              ? E.hideEdge()
              : null != d[u].state
              ? E.stateEdge(d[u].state)
              : E.stateEdge(EDGE_DEFAULT),
            E.hideWeight(),
            d[u].state != OBJ_HIDDEN &&
              null != d[u].displayWeight &&
              d[u].displayWeight &&
              E.showWeight(),
            E.changeVertexA(t[d[u].vertexA]),
            E.changeVertexB(t[d[u].vertexB]),
            null == d[u].type && (d[u].type = EDGE_TYPE_UDE),
            E.changeType(d[u].type),
            null != d[u].weight && E.changeWeight(d[u].weight),
            E.refreshPath(),
            null != d[u].animateHighlighted && d[u].animateHighlighted
              ? E.animateHighlighted(0.9 * l)
              : E.redraw(l),
            (r[u] = !0);
        }
        for (u in r)
          0 == r[u] && (n[u].hideEdge(), n[u].redraw(l), (r[u] = !0));
      } catch (e) {}
      for (u in i) i[u] = !1;
      for (u in r) r[u] = !1;
    }
    (this.addVertex = function (e, n, r, a, h) {
      0 != h && (h = !0);
      var o = new GraphVertexWidget(e, n, VERTEX_SHAPE_CIRCLE, r, a);
      (t[a] = o), (i[a] = !1), 1 == h && (t[a].showVertex(), t[a].redraw());
    }),
      (this.addRectVertex = function (e, n, r, a, h, o) {
        0 != h && (h = !0),
          console.log(VERTEX_SHAPE_RECT),
          void 0 === o && (o = VERTEX_SHAPE_RECT);
        var l = new GraphVertexWidget(e, n, o, r, a);
        (t[a] = l), (i[a] = !1), 1 == h && (t[a].showVertex(), t[a].redraw());
      }),
      (this.addEdge = function (e, i, a, h, o, l, g) {
        try {
          0 != l && (l = !0),
            1 != g && (g = !1),
            (null == h || isNaN(h)) && (h = EDGE_TYPE_UDE),
            (null == o || isNaN(o)) && (o = 1);
          var u = t[e],
            s = t[i],
            d = new GraphEdgeWidget(u, s, a, h, o);
          (n[a] = d),
            (r[a] = !1),
            t[e].addEdge(d),
            t[i].addEdge(d),
            1 == l &&
              (n[a].showEdge(), 1 == g && n[a].showWeight(), n[a].redraw());
        } catch (e) {}
      }),
      (this.removeEdge = function (e) {
        null != n[e] &&
          null != n[e] &&
          (n[e].removeEdge(), delete n[e], delete r[e]);
      }),
      (this.removeVertex = function (e) {
        t[e].removeVertex(), delete t[e], delete i[e];
      }),
      (this.updateGraph = function (e, t) {
        (null == t || isNaN(t)) && (t = l), g(e, t);
      }),
      (this.startAnimation = function (t) {
        null != t && (h = t), a == NO_ITERATION && (a = 0), e.play();
      }),
      (this.animate = function () {
        a >= h.length && o != ANIMATION_STOP && (o = ANIMATION_PAUSE),
          o != ANIMATION_PAUSE &&
            o != ANIMATION_STOP &&
            (e.next(l),
            setTimeout(function () {
              e.animate();
            }, l));
      }),
      (this.play = function () {
        a < 0 && (a = 0),
          o == ANIMATION_STOP
            ? ((o = ANIMATION_PLAY),
              g(h[a], l),
              setTimeout(function () {
                e.animate();
              }, l))
            : ((o = ANIMATION_PLAY), e.animate());
      }),
      (this.pause = function () {
        o = ANIMATION_PAUSE;
      }),
      (this.stop = function () {
        e.jumpToIteration(h.length - 1, 0),
          (a = h.length - 1),
          (o = ANIMATION_STOP);
        var t,
          n = h[a].vl,
          l = h[a].el;
        for (t in l) r[t] = !0;
        for (t in r) 0 == r[t] && e.removeEdge(t);
        for (t in n) i[t] = !0;
        for (t in i) 0 == i[t] && e.removeVertex(t);
        for (t in r) r[t] = !1;
        for (t in i) i[t] = !1;
        (h = NO_STATELIST), (a = NO_ITERATION);
      }),
      (this.next = function (e) {
        a < 0 && (a = 0), ++a >= h.length ? (a = h.length - 1) : g(h[a], e);
      }),
      (this.previous = function (e) {
        a >= h.length && (a = h.length - 1), --a < 0 || g(h[a], e);
      }),
      (this.forceNext = function (t) {
        e.pause(), e.next(t);
      }),
      (this.forcePrevious = function (t) {
        e.pause(), e.previous(t);
      }),
      (this.jumpToIteration = function (t, n) {
        e.pause(),
          (a = t) >= h.length && (a = h.length - 1),
          a < 0 && (a = 0),
          g(h[a], n);
      }),
      (this.replay = function () {
        e.jumpToIteration(0, 0),
          setTimeout(function () {
            e.play();
          }, 500);
      }),
      (this.getCurrentIteration = function () {
        return a;
      }),
      (this.getTotalIteration = function () {
        return Object.keys(h).length;
      }),
      (this.getAnimationDuration = function () {
        return l;
      }),
      (this.getCurrentState = function () {
        return h[a];
      }),
      (this.setAnimationDuration = function (e) {
        l = e;
      });
  };
