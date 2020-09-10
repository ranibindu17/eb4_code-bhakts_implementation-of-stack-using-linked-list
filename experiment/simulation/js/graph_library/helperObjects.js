var ObjectPair = function (t, n) {
  (this.getFirst = function () {
    return t;
  }),
    (this.getSecond = function () {
      return n;
    }),
    (this.setFirst = function (n) {
      t = n;
    }),
    (this.setSecond = function (t) {
      n = t;
    });
};
ObjectPair.compare = function (t, n) {
  return t.getFirst() > n.getFirst()
    ? 1
    : t.getFirst() < n.getFirst()
    ? -1
    : t.getSecond() > n.getSecond()
    ? 1
    : t.getSecond() < n.getSecond()
    ? -1
    : 0;
};
var ObjectTriple = function (t, n, e) {
  (this.getFirst = function () {
    return t;
  }),
    (this.getSecond = function () {
      return n;
    }),
    (this.getThird = function () {
      return e;
    }),
    (this.setFirst = function (n) {
      t = n;
    }),
    (this.setSecond = function (t) {
      n = t;
    }),
    (this.setThird = function (t) {
      e = t;
    });
};
ObjectTriple.compare = function (t, n) {
  return t.getFirst() > n.getFirst()
    ? 1
    : t.getFirst() < n.getFirst()
    ? -1
    : t.getSecond() > n.getSecond()
    ? 1
    : t.getSecond() < n.getSecond()
    ? -1
    : t.getThird() > n.getThird()
    ? 1
    : t.getThird() < n.getThird()
    ? -1
    : 0;
};
var UfdsHelper = function () {
  var t = this,
    n = {};
  (this.insert = function (t) {
    if (null != n[t]) return !1;
    var e = {};
    (e.parent = t), (e.rank = 0), (n[t] = e);
  }),
    (this.findSet = function (t) {
      if (null == n[t]) return !1;
      for (var e = n[t].parent, r = t; e != r; ) e = n[(r = e)].parent;
      return (n[t].parent = e), e;
    }),
    (this.unionSet = function (e, r) {
      if (null == n[e] || null == n[r]) return !1;
      if (t.isSameSet(e, r)) return !0;
      var i = t.findSet(e),
        u = t.findSet(r);
      n[i].rank > n[u].rank
        ? ((n[i].parent = u), n[u].rank++)
        : ((n[u].parent = i), n[i].rank++);
    }),
    (this.isSameSet = function (e, r) {
      return null != n[e] && null != n[r] && t.findSet(e) == t.findSet(r);
    });
};
