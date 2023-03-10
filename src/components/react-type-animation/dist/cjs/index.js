"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("react");
function t(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var n = t(e);
function r(e, t, n, r) {
  return new (n || (n = Promise))(function (u, o) {
    function a(e) {
      try {
        i(r.next(e));
      } catch (e) {
        o(e);
      }
    }
    function c(e) {
      try {
        i(r.throw(e));
      } catch (e) {
        o(e);
      }
    }
    function i(e) {
      var t;
      e.done
        ? u(e.value)
        : ((t = e.value),
          t instanceof n
            ? t
            : new n(function (e) {
              e(t);
            })).then(a, c);
    }
    i((r = r.apply(e, t || [])).next());
  });
}
function u(e, t) {
  var n,
    r,
    u,
    o,
    a = {
      label: 0,
      sent: function () {
        if (1 & u[0]) throw u[1];
        return u[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (o = { next: c(0), throw: c(1), return: c(2) }),
    "function" == typeof Symbol &&
    (o[Symbol.iterator] = function () {
      return this;
    }),
    o
  );
  function c(o) {
    return function (c) {
      return (function (o) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; a;)
          try {
            if (((n = 1), r && (u = 2 & o[0] ? r.return : o[0] ? r.throw || ((u = r.return) && u.call(r), 0) : r.next) && !(u = u.call(r, o[1])).done)) return u;
            switch (((r = 0), u && (o = [2 & o[0], u.value]), o[0])) {
              case 0:
              case 1:
                u = o;
                break;
              case 4:
                return a.label++, { value: o[1], done: !1 };
              case 5:
                a.label++, (r = o[1]), (o = [0]);
                continue;
              case 7:
                (o = a.ops.pop()), a.trys.pop();
                continue;
              default:
                if (!((u = a.trys), (u = u.length > 0 && u[u.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!u || (o[1] > u[0] && o[1] < u[3]))) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < u[1]) {
                  (a.label = u[1]), (u = o);
                  break;
                }
                if (u && a.label < u[2]) {
                  (a.label = u[2]), a.ops.push(o);
                  break;
                }
                u[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            o = t.call(e, a);
          } catch (e) {
            (o = [6, e]), (r = 0);
          } finally {
            n = u = 0;
          }
        if (5 & o[0]) throw o[1];
        return { value: o[0] ? o[1] : void 0, done: !0 };
      })([o, c]);
    };
  }
}
function o(e) {
  var t = "function" == typeof Symbol && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && "number" == typeof e.length)
    return {
      next: function () {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function a(e, t) {
  var n = "function" == typeof Symbol && e[Symbol.iterator];
  if (!n) return e;
  var r,
    u,
    o = n.call(e),
    a = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value);
  } catch (e) {
    u = { error: e };
  } finally {
    try {
      r && !r.done && (n = o.return) && n.call(o);
    } finally {
      if (u) throw u.error;
    }
  }
  return a;
}
function c(e, t, n) {
  if (n || 2 === arguments.length) for (var r, u = 0, o = t.length; u < o; u++) (!r && u in t) || (r || (r = Array.prototype.slice.call(t, 0, u)), (r[u] = t[u]));
  return e.concat(r || Array.prototype.slice.call(t));
}
function i(e, t, n, i) {
  for (var f = [], d = 4; d < arguments.length; d++) f[d - 4] = arguments[d];
  return r(this, void 0, void 0, function () {
    var r, d, h, p, y, v;
    return u(this, function (u) {
      switch (u.label) {
        case 0:
          u.trys.push([0, 12, 13, 14]), (r = o(f)), (d = r.next()), (u.label = 1);
        case 1:
          if (d.done) return [3, 11];
          switch (((h = d.value), typeof h)) {
            case "string":
              return [3, 2];
            case "number":
              return [3, 4];
            case "function":
              return [3, 6];
          }
          return [3, 8];
        case 2:
          return [4, s(e, h, t, n, i)];
        case 3:
          return u.sent(), [3, 10];
        case 4:
          return [4, l(h)];
        case 5:
          return u.sent(), [3, 10];
        case 6:
          return [4, h.apply(void 0, c([e, t, n, i], a(f), !1))];
        case 7:
          return u.sent(), [3, 10];
        case 8:
          return [4, h];
        case 9:
          u.sent(), (u.label = 10);
        case 10:
          return (d = r.next()), [3, 1];
        case 11:
          return [3, 14];
        case 12:
          return (p = u.sent()), (y = { error: p }), [3, 14];
        case 13:
          try {
            d && !d.done && (v = r.return) && v.call(r);
          } finally {
            if (y) throw y.error;
          }
          return [7];
        case 14:
          return [2];
      }
    });
  });
}
function s(e, t, n, o, i) {
  return r(this, void 0, void 0, function () {
    var r;
    return u(this, function (u) {
      switch (u.label) {
        case 0:
          return (
            (r = (function (e, t) {
              var n = a(t).slice(0);
              return c(c([], a(e), !1), [NaN], !1).findIndex(function (e, t) {
                return n[t] !== e;
              });
            })(e.textContent, t)),
            [4, f(e, c(c([], a(h(e.textContent, r)), !1), a(d(t, r)), !1), n, o, i)]
          );
        case 1:
          return u.sent(), [2];
      }
    });
  });
}
function l(e) {
  return r(this, void 0, void 0, function () {
    return u(this, function (t) {
      switch (t.label) {
        case 0:
          return [
            4,
            new Promise(function (t) {
              return setTimeout(t, e);
            }),
          ];
        case 1:
          return t.sent(), [2];
      }
    });
  });
}
function f(e, t, n, a, c) {
  return r(this, void 0, void 0, function () {
    var r, i, s, f, d, h, p, y, v, b, m, w;
    return u(this, function (x) {
      switch (x.label) {
        case 0:
          if (((r = t), c)) {
            for (i = 0, s = 1; s < t.length; s++)
              if (((f = t[s - 1]), (d = t[s]).length > f.length || "" === d)) {
                i = s;
                break;
              }
            r = t.slice(i, t.length);
          }
          x.label = 1;
        case 1:
          x.trys.push([1, 6, 7, 8]),
            (h = o(
              (function (e) {
                var t, n, r, a, c, i, s;
                return u(this, function (l) {
                  switch (l.label) {
                    case 0:
                      (t = function (e) {
                        return u(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return [
                                4,
                                {
                                  op: function (t) {
                                    return requestAnimationFrame(function () {
                                      return (t.textContent = e);
                                    });
                                  },
                                  opCode: function (t) {
                                    return "" === e || t.textContent.length > e.length ? "DELETE" : "WRITING";
                                  },
                                },
                              ];
                            case 1:
                              return t.sent(), [2];
                          }
                        });
                      }),
                        (l.label = 1);
                    case 1:
                      l.trys.push([1, 6, 7, 8]), (n = o(e)), (r = n.next()), (l.label = 2);
                    case 2:
                      return r.done ? [3, 5] : ((a = r.value), [5, t(a)]);
                    case 3:
                      l.sent(), (l.label = 4);
                    case 4:
                      return (r = n.next()), [3, 2];
                    case 5:
                      return [3, 8];
                    case 6:
                      return (c = l.sent()), (i = { error: c }), [3, 8];
                    case 7:
                      try {
                        r && !r.done && (s = n.return) && s.call(n);
                      } finally {
                        if (i) throw i.error;
                      }
                      return [7];
                    case 8:
                      return [2];
                  }
                });
              })(r)
            )),
            (p = h.next()),
            (x.label = 2);
        case 2:
          return p.done ? [3, 5] : ((y = p.value), (v = "WRITING" === y.opCode(e) ? n + n * (Math.random() - 0.5) : a + a * (Math.random() - 0.5)), y.op(e), [4, l(v)]);
        case 3:
          x.sent(), (x.label = 4);
        case 4:
          return (p = h.next()), [3, 2];
        case 5:
          return [3, 8];
        case 6:
          return (b = x.sent()), (m = { error: b }), [3, 8];
        case 7:
          try {
            p && !p.done && (w = h.return) && w.call(h);
          } finally {
            if (m) throw m.error;
          }
          return [7];
        case 8:
          return [2];
      }
    });
  });
}
function d(e, t, n) {
  var r = a(e).slice(0);
  return (
    void 0 === t && (t = 0),
    void 0 === n && (n = r.length),
    u(this, function (e) {
      switch (e.label) {
        case 0:
          return t < n ? [4, r.slice(0, ++t).join("")] : [3, 2];
        case 1:
          return e.sent(), [3, 0];
        case 2:
          return [2];
      }
    })
  );
}
function h(e, t, n) {
  var r = a(e).slice(0);
  return (
    void 0 === t && (t = 0),
    void 0 === n && (n = r.length),
    u(this, function (e) {
      switch (e.label) {
        case 0:
          return n > t ? [4, r.slice(0, --n).join("")] : [3, 2];
        case 1:
          return e.sent(), [3, 0];
        case 2:
          return [2];
      }
    })
  );
}
var p = "index-module_type__E-SaG";
!(function (e, t) {
  void 0 === t && (t = {});
  var n = t.insertAt;
  if (e && "undefined" != typeof document) {
    var r = document.head || document.getElementsByTagName("head")[0],
      u = document.createElement("style");
    (u.type = "text/css"), "top" === n && r.firstChild ? r.insertBefore(u, r.firstChild) : r.appendChild(u), u.styleSheet ? (u.styleSheet.cssText = e) : u.appendChild(document.createTextNode(e));
  }
})(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");
var y = e.memo(
  function (t) {
    var r = t.sequence,
      u = t.repeat,
      o = t.className,
      s = t.speed,
      l = void 0 === s ? 40 : s,
      f = t.deletionSpeed,
      d = t.omitDeletionAnimation,
      h = void 0 !== d && d,
      y = t.wrapper,
      v = void 0 === y ? "div" : y,
      b = t.cursor,
      m = void 0 === b || b,
      w = t.style;
    (l = Math.abs(l - 100)), (f = f ? Math.abs(f - 100) : l);
    var x,
      g,
      _,
      S,
      E,
      C,
      T,
      N = e.useRef(null),
      A = p;
    (x = o && o.length > 0 ? (m ? "".concat(A, " ").concat(o) : o) : m ? A : ""),
      (g = function () {
        return (
          u === 1 / 0
            ? i.apply(void 0, c(c([N.current, l, f, h], a(r), !1), [i], !1))
            : "number" == typeof u
              ? i.apply(
                void 0,
                c(
                  [N.current, l, f, h],
                  a(
                    Array(1 + u)
                      .fill(r)
                      .flat()
                  ),
                  !1
                )
              )
              : i.apply(void 0, c([N.current, l, f, h], a(r), !1)),
          function () {
            N.current;
          }
        );
      }),
      (_ = e.useRef(g)),
      (S = e.useRef()),
      (E = e.useRef(!1)),
      (C = e.useRef(!1)),
      (T = a(e.useState(0), 2)[1]),
      E.current && (C.current = !0),
      e.useEffect(function () {
        return (
          E.current || ((S.current = _.current()), (E.current = !0)),
          T(function (e) {
            return e + 1;
          }),
          function () {
            C.current && S.current && S.current();
          }
        );
      }, []);
    var P = v;
    return n.default.createElement(P, { style: w, className: x, ref: N });
  },
  function (e, t) {
    return !0;
  }
);
exports.TypeAnimation = y;
