var GraphVertexWidget = function (e, t, r, i, n) {
  var x,
    o,
    h,
    V = 250,
    a = graphVertexProperties.text["font-size"] / 3,
    l = {
      innerVertex: {
        class: null,
        cx: null,
        cy: null,
        x: null,
        y: null,
        fill: null,
        r: null,
        width: null,
        height: null,
        stroke: null,
        "stroke-width": null,
      },
      outerVertex: {
        class: null,
        cx: null,
        cy: null,
        x: null,
        y: null,
        fill: null,
        r: null,
        width: null,
        height: null,
        stroke: null,
        "stroke-width": null,
      },
      text: {
        class: null,
        x: null,
        y: null,
        fill: null,
        "font-family": null,
        "font-weight": null,
        "font-size": null,
        "text-anchor": null,
        text: null,
      },
    },
    u = {};
  !(function () {
    var V = r;
    "rect_long" == r && (V = "rect");
    (o = vertexSvg.append(V)),
      (x = vertexSvg.append(V)),
      (h = vertexTextSvg.append("text")),
      (l.innerVertex.class = "v" + n),
      (l.innerVertex.cx = e),
      (l.innerVertex.cy = t),
      (l.innerVertex.x = e - graphVertexProperties.innerVertex.width / 2),
      (l.innerVertex.y = t - graphVertexProperties.innerVertex.height / 2),
      (l.innerVertex.fill = graphVertexProperties.innerVertex.default.fill),
      (l.innerVertex.r = 0),
      (l.innerVertex.width = 0),
      (l.innerVertex.height = 0),
      (l.innerVertex.stroke = graphVertexProperties.innerVertex.default.stroke),
      (l.innerVertex["stroke-width"] = 0),
      (l.outerVertex.class = "v" + n),
      (l.outerVertex.cx = e),
      (l.outerVertex.cy = t),
      (l.outerVertex.x = e - graphVertexProperties.outerVertex.width / 2),
      (l.outerVertex.y = t - graphVertexProperties.outerVertex.height / 2),
      (l.outerVertex.fill = graphVertexProperties.outerVertex.default.fill),
      (l.outerVertex.r = 0),
      (l.innerVertex.width = 0),
      (l.innerVertex.height = 0),
      (l.outerVertex.stroke = graphVertexProperties.outerVertex.default.stroke),
      (l.outerVertex["stroke-width"] = 0),
      (l.text.class = "v" + n),
      (l.text.x = e),
      (l.text.y = t + a),
      (l.text.fill = graphVertexProperties.text.default.fill),
      (l.text["font-family"] =
        graphVertexProperties.text.default["font-family"]),
      (l.text["font-size"] = 0),
      (l.text["font-weight"] =
        graphVertexProperties.text.default["font-weight"]),
      (l.text["text-anchor"] =
        graphVertexProperties.text.default["text-anchor"]),
      "rect_long" == r && (l.text["text-anchor"] = "left");
    (l.text.text = i),
      x.attr("class", l.innerVertex.class),
      o.attr("class", l.outerVertex.class),
      h.attr("class", l.text.class),
      x
        .attr("cx", l.innerVertex.cx)
        .attr("cy", l.innerVertex.cy)
        .attr("x", l.innerVertex.x)
        .attr("y", l.innerVertex.y)
        .attr("fill", l.innerVertex.fill)
        .attr("r", l.innerVertex.r)
        .attr("width", l.innerVertex.width)
        .attr("height", l.innerVertex.height)
        .attr("stroke", l.innerVertex.stroke)
        .attr("stroke-width", l.innerVertex["stroke-width"]),
      o
        .attr("cx", l.outerVertex.cx)
        .attr("cy", l.outerVertex.cy)
        .attr("x", l.outerVertex.x)
        .attr("y", l.outerVertex.y)
        .attr("fill", l.outerVertex.fill)
        .attr("r", l.outerVertex.r)
        .attr("width", l.outerVertex.width)
        .attr("height", l.outerVertex.height)
        .attr("stroke", l.outerVertex.stroke)
        .attr("stroke-width", l.outerVertex["stroke-width"]),
      h
        .attr("x", l.text.x)
        .attr("y", l.text.y)
        .attr("fill", l.text.fill)
        .attr("font-family", l.text["font-family"])
        .attr("font-size", l.text["font-size"])
        .attr("font-weight", l.text["font-weight"])
        .attr("text-anchor", l.text["text-anchor"])
        .text(function () {
          return l.text.text;
        });
  })(),
    (this.redraw = function (e) {
      !(function (e) {
        (null == e || isNaN(e)) && (e = V);
        e <= 0 && (e = 1);
        x
          .transition()
          .duration(e)
          .attr("cx", l.innerVertex.cx)
          .attr("cy", l.innerVertex.cy)
          .attr("x", l.innerVertex.x)
          .attr("y", l.innerVertex.y)
          .attr("fill", l.innerVertex.fill)
          .attr("r", l.innerVertex.r)
          .attr("width", l.innerVertex.width)
          .attr("height", l.innerVertex.height)
          .attr("stroke", l.innerVertex.stroke)
          .attr("stroke-width", l.innerVertex["stroke-width"]),
          o
            .transition()
            .duration(e)
            .attr("cx", l.outerVertex.cx)
            .attr("cy", l.outerVertex.cy)
            .attr("x", l.outerVertex.x)
            .attr("y", l.outerVertex.y)
            .attr("fill", l.outerVertex.fill)
            .attr("r", l.outerVertex.r)
            .attr("width", l.outerVertex.width)
            .attr("height", l.outerVertex.height)
            .attr("stroke", l.outerVertex.stroke)
            .attr("stroke-width", l.outerVertex["stroke-width"]),
          h
            .transition()
            .duration(e)
            .attr("x", l.text.x)
            .attr("y", l.text.y)
            .attr("fill", l.text.fill)
            .attr("font-family", l.text["font-family"])
            .attr("font-size", l.text["font-size"])
            .attr("font-weight", l.text["font-weight"])
            .attr("text-anchor", l.text["text-anchor"])
            .text(function () {
              return l.text.text;
            });
      })(e);
    }),
    (this.showVertex = function () {
      (l.outerVertex.r = graphVertexProperties.outerVertex.r),
        (l.outerVertex.width = graphVertexProperties.outerVertex.width),
        (l.outerVertex.height = graphVertexProperties.outerVertex.height),
        (l.outerVertex["stroke-width"] =
          graphVertexProperties.outerVertex["stroke-width"]),
        (l.innerVertex.r = graphVertexProperties.innerVertex.r),
        (l.innerVertex.width = graphVertexProperties.innerVertex.width),
        (l.innerVertex.height = graphVertexProperties.innerVertex.height),
        (l.innerVertex["stroke-width"] =
          graphVertexProperties.innerVertex["stroke-width"]),
        (l.text["font-size"] = graphVertexProperties.text["font-size"]),
        "rect_long" == r
          ? ((l.outerVertex.width = 200), (l.innerVertex.width = 198))
          : "rect" == r &&
            ((l.outerVertex.width = 80), (l.innerVertex.width = 78));
    }),
    (this.hideVertex = function () {
      (l.outerVertex.r = 0),
        (l.outerVertex.width = 0),
        (l.outerVertex.height = 0),
        (l.outerVertex["stroke-width"] = 0),
        (l.innerVertex.r = 0),
        (l.innerVertex.width = 0),
        (l.innerVertex.height = 0),
        (l.innerVertex["stroke-width"] = 0),
        (l.text["font-size"] = 0);
    }),
    (this.moveVertex = function (e, t) {
      var r;
      for (r in ((l.outerVertex.cx = e),
      (l.outerVertex.cy = t),
      (l.outerVertex.x = e - graphVertexProperties.outerVertex.width / 2),
      (l.outerVertex.y = t - graphVertexProperties.outerVertex.height / 2),
      (l.innerVertex.cx = e),
      (l.innerVertex.cy = t),
      (l.innerVertex.x = e - graphVertexProperties.innerVertex.width / 2),
      (l.innerVertex.y = t - graphVertexProperties.innerVertex.height / 2),
      (l.text.x = e),
      (l.text.y = t + a),
      u))
        u[r].refreshPath();
    }),
    (this.changeText = function (e) {
      (i = e), (l.text.text = e);
    }),
    (this.changeTextFontSize = function (e) {
      null == newTextSize ||
        isNaN(newTextSize) ||
        (l.text["font-size"] = newTextSize);
    }),
    (this.changeRadius = function (e, t) {
      null == e ||
        isNaN(e) ||
        ((l.innerVertex.r = e), null == t || isNaN(t) || (l.outerVertex.r = t));
    }),
    (this.changeWidth = function (e, t) {
      null == e ||
        isNaN(e) ||
        ((l.innerVertex.width = e),
        null == t || isNaN(t) || (l.outerVertex.width = t));
    }),
    (this.changeHeight = function (e, t) {
      null == e ||
        isNaN(e) ||
        ((l.innerVertex.height = e),
        null == t || isNaN(t) || (l.outerVertex.height = t));
    }),
    (this.changeStrokeWidth = function (e, t) {
      null == e ||
        isNaN(e) ||
        ((l.innerVertex["stroke-width"] = e),
        null == t || isNaN(t) || (l.outerVertex["stroke-width"] = t));
    }),
    (this.removeVertex = function () {
      o.remove(), x.remove(), h.remove();
    }),
    (this.stateVertex = function (e) {
      var t;
      for (t in graphVertexProperties.innerVertex[e])
        l.innerVertex[t] = graphVertexProperties.innerVertex[e][t];
      for (t in graphVertexProperties.outerVertex[e])
        l.outerVertex[t] = graphVertexProperties.outerVertex[e][t];
      for (t in graphVertexProperties.text[e])
        l.text[t] = graphVertexProperties.text[e][t];
    }),
    (this.getAttributes = function () {
      return deepCopy(l);
    }),
    (this.getClassNumber = function () {
      return n;
    }),
    (this.addEdge = function (e) {
      u[e.getAttributes().id] = e;
    }),
    (this.removeEdge = function (e) {
      null != u[e.getAttributes().id] &&
        null != u[e.getAttributes().id] &&
        delete u[e.getAttributes().id];
    }),
    (this.getEdge = function () {
      var e,
        t = [];
      for (e in u) t.push(u[e]);
      return t;
    });
};
