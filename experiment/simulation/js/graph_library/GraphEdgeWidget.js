markerSvg
  .append("marker")
  .attr("id", "arrow")
  .attr("viewBox", "0 -5 10 10")
  .attr("refX", ARROW_REFX)
  .attr("markerWidth", ARROW_MARKER_WIDTH)
  .attr("markerHeight", ARROW_MARKER_HEIGHT)
  .attr("orient", "auto")
  .append("path")
  .attr("d", "M0,-5 L10,0 L0,5")
  .attr("fill", ARROW_FILL),
  markerSvg
    .append("marker")
    .attr("id", "backwardArrow")
    .attr("viewBox", "-10 -5 10 10")
    .attr("refX", -1 * ARROW_REFX)
    .attr("markerWidth", ARROW_MARKER_WIDTH)
    .attr("markerHeight", ARROW_MARKER_HEIGHT)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5 L-10,0 L0,5")
    .attr("fill", ARROW_FILL);
var GraphEdgeWidget = function (t, e, r, a, i) {
  (null == i || isNaN(i)) && (i = 1);
  var h,
    n,
    o,
    s,
    d = this,
    g = 250,
    p = d3.svg
      .line()
      .x(function (t) {
        return t.x;
      })
      .y(function (t) {
        return t.y;
      })
      .interpolate("linear"),
    l = p(c()),
    f = p([c()[0], c()[0]]),
    u = {
      path: {
        id: null,
        class: null,
        d: null,
        stroke: null,
        "stroke-width": null,
      },
      weight: {
        id: null,
        startOffset: null,
        dy: null,
        fill: null,
        "font-family": null,
        "font-weight": null,
        "font-size": null,
        "text-anchor": null,
        text: null,
      },
    };
  function c() {
    for (
      var r = (function () {
          if (t) return parseFloat(t.getAttributes().outerVertex.cx);
        })(),
        a = (function () {
          if (t) return parseFloat(t.getAttributes().outerVertex.cy);
        })(),
        i = (function () {
          if (t) return parseFloat(e.getAttributes().outerVertex.cx);
        })(),
        h = (function () {
          if (t) return parseFloat(e.getAttributes().outerVertex.cy);
        })(),
        n = w(
          r,
          a,
          i,
          h,
          (function () {
            if (t) return parseFloat(t.getAttributes().outerVertex.r);
          })(),
          r,
          a
        ),
        o = w(
          r,
          a,
          i,
          h,
          (function () {
            if (t) return parseFloat(e.getAttributes().outerVertex.r);
          })(),
          i,
          h
        ),
        s = 5e3,
        d = 0,
        g = 0,
        p = 1;
      p <= 3;
      p += 2
    )
      for (var l = 1; l <= 3; l += 2) {
        var f = Math.sqrt(
          (n[p - 1] - o[l - 1]) * (n[p - 1] - o[l - 1]) +
            (n[p] - o[l]) * (n[p] - o[l])
        );
        f < s && ((s = f), (d = p), (g = l));
      }
    return [
      { x: n[d - 1], y: n[d] },
      { x: o[g - 1], y: o[g] },
    ];
  }
  function w(t, e, r, a, i, h, n) {
    var o = r - t,
      s = a - e,
      d = h - t,
      g = n - e,
      p = o * o + s * s,
      l = (o * d + s * g) / p,
      f = l * l - (d * d + g * g - i * i) / p,
      u = Math.sqrt(f),
      c = -l + u,
      w = -l - u,
      E = t - o * c,
      k = e - s * c,
      x = t - o * w,
      m = e - s * w,
      v = new Array();
    return (v[0] = E), (v[1] = k), (v[2] = x), (v[3] = m), v;
  }
  function E(t) {
    (null == t || isNaN(t)) && (t = g),
      t <= 0 && (t = 1),
      h.attr("class", u.path.class),
      h
        .transition()
        .duration(t)
        .attr("d", u.path.d)
        .attr("stroke", u.path.stroke)
        .attr("stroke-width", u.path["stroke-width"])
        .style("marker-start", function () {
          return u.path.d == f
            ? null
            : "bde" == u.path.class
            ? "url(#backwardArrow)"
            : null;
        })
        .style("marker-end", function () {
          return u.path.d == f
            ? null
            : "de" == u.path.class || "bde" == u.path.class
            ? "url(#arrow)"
            : null;
        }),
      n
        .transition()
        .duration(t)
        .attr("fill", u.weight.fill)
        .attr("font-family", u.weight["font-family"])
        .attr("font-size", u.weight["font-size"])
        .attr("font-weight", u.weight["font-weight"])
        .attr("text-anchor", u.weight["text-anchor"])
        .attr("text-decoration", "underline"),
      s
        .transition()
        .duration(t)
        .text(function () {
          return u.weight.text;
        });
  }
  function k() {
    (l = p(c())), (f = p([c()[0], c()[0]]));
  }
  k(),
    (function () {
      switch (
        ((u.path.id = "e" + r),
        (u.path.d = f),
        (u.path.stroke = graphEdgeProperties.path.default.stroke),
        (u.path["stroke-width"] =
          graphEdgeProperties.path.default["stroke-width"]),
        a)
      ) {
        case EDGE_TYPE_UDE:
          u.path.class = "ude";
          break;
        case EDGE_TYPE_DE:
          u.path.class = "de";
          break;
        case EDGE_TYPE_BDE:
          u.path.class = "bde";
      }
      (u.weight.id = "ew" + r),
        (u.weight.startOffset = graphEdgeProperties.weight.default.startOffset),
        (u.weight.dy = graphEdgeProperties.weight.default.dy),
        (u.weight.fill = graphEdgeProperties.weight.default.fill),
        (u.weight["font-family"] =
          graphEdgeProperties.weight.default["font-family"]),
        (u.weight["font-size"] = 0),
        (u.weight["font-weight"] =
          graphEdgeProperties.weight.default["font-weight"]),
        (u.weight["text-anchor"] =
          graphEdgeProperties.weight.default["text-anchor"]),
        (u.weight.text = i),
        (h = edgeSvg.append("path"))
          .attr("id", u.path.id)
          .attr("class", u.path.class);
      try {
        "MNaN,NaNLNaN,NaN" != u.path.d &&
          h
            .attr("d", u.path.d)
            .attr("stroke", u.path.stroke)
            .attr("stroke-width", u.path["stroke-width"]);
      } catch (t) {}
      (n = edgeWeightSvg.append("text")).attr("id", u.weight.id),
        n
          .attr("fill", u.weight.fill)
          .attr("font-family", u.weight["font-family"])
          .attr("font-size", u.weight["font-size"])
          .attr("font-weight", u.weight["font-weight"])
          .attr("text-anchor", u.weight["text-anchor"]),
        (o = n
          .append("textPath")
          .attr("xlink:href", function () {
            return "#" + u.path.id;
          })
          .attr("startOffset", u.weight.startOffset)),
        (s = o
          .append("tspan")
          .attr("dy", u.weight.dy)
          .text(function () {
            return u.weight.text;
          }));
    })(),
    (this.redraw = function (t) {
      E(t);
    }),
    (this.animateHighlighted = function (t) {
      (null == t || isNaN(t)) && (t = g),
        t <= 0 && (t = 1),
        edgeSvg
          .append("path")
          .attr("id", "tempEdge" + h.attr("id"))
          .attr("stroke", graphEdgeProperties.animateHighlightedPath.stroke)
          .attr(
            "stroke-width",
            graphEdgeProperties.animateHighlightedPath["stroke-width"]
          )
          .transition()
          .duration(t)
          .each("start", function () {
            edgeSvg.select("#tempEdge" + h.attr("id")).attr("d", f);
          })
          .attr("d", l)
          .each("end", function () {
            h
              .attr("stroke", graphEdgeProperties.path.highlighted.stroke)
              .attr("stroke-width", graphEdgeProperties.path["stroke-width"]),
              edgeSvg.select("#tempEdge" + h.attr("id")).remove(),
              E(0);
          });
    }),
    (this.showEdge = function () {
      (u.path.d = l),
        (u.path["stroke-width"] = graphEdgeProperties.path["stroke-width"]);
    }),
    (this.hideEdge = function () {
      u.path.d = f;
    }),
    (this.showWeight = function () {
      u.weight["font-size"] = graphEdgeProperties.weight["font-size"];
    }),
    (this.hideWeight = function () {
      u.weight["font-size"] = 0;
    }),
    (this.stateEdge = function (t) {
      var e;
      for (e in graphEdgeProperties.path[t])
        u.path[e] = graphEdgeProperties.path[t][e];
      for (e in graphEdgeProperties.weight[t])
        u.weight[e] = graphEdgeProperties.weight[t][e];
    }),
    (this.removeEdge = function () {
      t.removeEdge(d), e.removeEdge(d), h.remove(), n.remove();
    }),
    (this.refreshPath = function () {
      var t = f;
      k(), u.path.d == t ? (u.path.d = f) : (u.path.d = l);
    }),
    (this.changeVertexA = function (e) {
      var r = !1;
      u.path.d == l && (r = !0),
        t.removeEdge(d),
        (t = e),
        k(),
        (l = p(c())),
        (f = p([c()[0]])),
        (u.path.d = f),
        t.addEdge(d),
        r && (u.path.d = l);
    }),
    (this.changeVertexB = function (t) {
      var r = !1;
      u.path.d == l && (r = !0),
        e.removeEdge(d),
        (e = t),
        k(),
        (l = p(c())),
        (f = p([c()[0]])),
        (u.path.d = f),
        e.addEdge(d),
        r && (u.path.d = l);
    }),
    (this.changeType = function (t) {
      switch ((a = t)) {
        case EDGE_TYPE_UDE:
          u.path.class = "ude";
          break;
        case EDGE_TYPE_DE:
          u.path.class = "de";
          break;
        case EDGE_TYPE_BDE:
          u.path.class = "bde";
      }
    }),
    (this.changeWeight = function (t) {
      (i = t), (u.weight.text = i);
    }),
    (this.getVertex = function () {
      return [t, e];
    }),
    (this.getAttributes = function () {
      return deepCopy(u.path);
    }),
    (this.getType = function () {
      return a;
    });
};
