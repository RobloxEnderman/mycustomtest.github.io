!(function t(e, i, n) {
    function s(r, a) {
        if (!i[r]) {
            if (!e[r]) {
                var h = "function" == typeof require && require;
                if (!a && h) return h(r, !0);
                if (o) return o(r, !0);
                var l = new Error("Cannot find module '" + r + "'");
                throw ((l.code = "MODULE_NOT_FOUND"), l);
            }
            var u = (i[r] = { exports: {} });
            e[r][0].call(
                u.exports,
                function (t) {
                    var i = e[r][1][t];
                    return s(i || t);
                },
                u,
                u.exports,
                t,
                e,
                i,
                n
            );
        }
        return i[r].exports;
    }
    for (var o = "function" == typeof require && require, r = 0; r < n.length; r++) s(n[r]);
    return s;
})(
    {
        1: [
            function (t, e, i) {
                e.exports = function (t) {
                    return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                };
            },
            {},
        ],
        2: [
            function (t, e, i) {
                e.exports = function (t) {
                    return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
                };
            },
            {},
        ],
        3: [
            function (t, e, i) {
                e.exports = function (t) {
                    "string" == typeof t && (t = [t]);
                    for (var e = [].slice.call(arguments, 1), i = [], n = 0; n < t.length - 1; n++) i.push(t[n], e[n] || "");
                    return i.push(t[n]), i.join("");
                };
            },
            {},
        ],
        4: [
            function (t, e, i) {
                !(function (t) {
                    var i = /iPhone/i,
                        n = /iPod/i,
                        s = /iPad/i,
                        o = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
                        r = /Android/i,
                        a = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
                        h = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
                        l = /Windows Phone/i,
                        u = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
                        c = /BlackBerry/i,
                        p = /BB10/i,
                        f = /Opera Mini/i,
                        d = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
                        y = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
                        _ = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
                        m = function (t, e) {
                            return t.test(e);
                        },
                        v = function (t) {
                            var e = t || navigator.userAgent,
                                v = e.split("[FBAN");
                            if (
                                (void 0 !== v[1] && (e = v[0]),
                                void 0 !== (v = e.split("Twitter"))[1] && (e = v[0]),
                                (this.apple = { phone: m(i, e), ipod: m(n, e), tablet: !m(i, e) && m(s, e), device: m(i, e) || m(n, e) || m(s, e) }),
                                (this.amazon = { phone: m(a, e), tablet: !m(a, e) && m(h, e), device: m(a, e) || m(h, e) }),
                                (this.android = { phone: m(a, e) || m(o, e), tablet: !m(a, e) && !m(o, e) && (m(h, e) || m(r, e)), device: m(a, e) || m(h, e) || m(o, e) || m(r, e) }),
                                (this.windows = { phone: m(l, e), tablet: m(u, e), device: m(l, e) || m(u, e) }),
                                (this.other = { blackberry: m(c, e), blackberry10: m(p, e), opera: m(f, e), firefox: m(y, e), chrome: m(d, e), device: m(c, e) || m(p, e) || m(f, e) || m(y, e) || m(d, e) }),
                                (this.seven_inch = m(_, e)),
                                (this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch),
                                (this.phone = this.apple.phone || this.android.phone || this.windows.phone),
                                (this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet),
                                "undefined" == typeof window)
                            )
                                return this;
                        },
                        g = function () {
                            var t = new v();
                            return (t.Class = v), t;
                        };
                    void 0 !== e && e.exports && "undefined" == typeof window
                        ? (e.exports = v)
                        : void 0 !== e && e.exports && "undefined" != typeof window
                        ? (e.exports = g())
                        : "function" == typeof define && define.amd
                        ? define("isMobile", [], (t.isMobile = g()))
                        : (t.isMobile = g());
                })(this);
            },
            {},
        ],
        5: [
            function (t, e, i) {
                "use strict";
                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                Object.defineProperty(i, "__esModule", { value: !0 });
                var s = (i.saveAs =
                    window.saveAs ||
                    (function (t) {
                        if ("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
                            var e = function () {
                                    return t.URL || t.webkitURL || t;
                                },
                                i = t.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                                s = "download" in i,
                                o = function (t) {
                                    var e = new MouseEvent("click");
                                    t.dispatchEvent(e);
                                },
                                r = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                                a = t.webkitRequestFileSystem,
                                h = t.requestFileSystem || a || t.mozRequestFileSystem,
                                l = function (e) {
                                    (t.setImmediate || t.setTimeout)(function () {
                                        throw e;
                                    }, 0);
                                },
                                u = 0,
                                c = function (t) {
                                    setTimeout(function () {
                                        "string" == typeof t ? e().revokeObjectURL(t) : t.remove();
                                    }, 4e4);
                                },
                                p = function (t, e, i) {
                                    for (var n = (e = [].concat(e)).length; n--; ) {
                                        var s = t["on" + e[n]];
                                        if ("function" == typeof s)
                                            try {
                                                s.call(t, i || t);
                                            } catch (t) {
                                                l(t);
                                            }
                                    }
                                },
                                f = function (t) {
                                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\ufeff", t], { type: t.type }) : t;
                                },
                                d = function l(d, y, _) {
                                    n(this, l), _ || (d = f(d));
                                    var m,
                                        v,
                                        g,
                                        b = this,
                                        S = d.type,
                                        T = !1,
                                        w = function () {
                                            p(b, "writestart progress write writeend".split(" "));
                                        },
                                        x = function () {
                                            if (v && r && "undefined" != typeof FileReader) {
                                                var i = new FileReader();
                                                return (
                                                    (i.onloadend = function () {
                                                        var t = i.result;
                                                        (v.location.href = "data:attachment/file" + t.slice(t.search(/[,;]/))), (b.readyState = b.DONE), w();
                                                    }),
                                                    i.readAsDataURL(d),
                                                    void (b.readyState = b.INIT)
                                                );
                                            }
                                            (!T && m) || (m = e().createObjectURL(d)), v ? (v.location.href = m) : void 0 === t.open(m, "_blank") && r && (t.location.href = m), (b.readyState = b.DONE), w(), c(m);
                                        },
                                        O = function (t) {
                                            return function () {
                                                if (b.readyState !== b.DONE) return t.apply(this, arguments);
                                            };
                                        },
                                        E = { create: !0, exclusive: !1 };
                                    if (((b.readyState = b.INIT), y || (y = "download"), s))
                                        return (
                                            (m = e().createObjectURL(d)),
                                            void setTimeout(function () {
                                                (i.href = m), (i.download = y), o(i), w(), c(m), (b.readyState = b.DONE);
                                            })
                                        );
                                    t.chrome && S && "application/octet-stream" !== S && ((g = d.slice || d.webkitSlice), (d = g.call(d, 0, d.size, "application/octet-stream")), (T = !0)),
                                        a && "download" !== y && (y += ".download"),
                                        ("application/octet-stream" === S || a) && (v = t),
                                        h
                                            ? ((u += d.size),
                                              h(
                                                  t.TEMPORARY,
                                                  u,
                                                  O(function (t) {
                                                      t.root.getDirectory(
                                                          "saved",
                                                          E,
                                                          O(function (t) {
                                                              var e = function () {
                                                                  t.getFile(
                                                                      y,
                                                                      E,
                                                                      O(function (t) {
                                                                          t.createWriter(
                                                                              O(function (e) {
                                                                                  (e.onwriteend = function (e) {
                                                                                      (v.location.href = t.toURL()), (b.readyState = b.DONE), p(b, "writeend", e), c(t);
                                                                                  }),
                                                                                      (e.onerror = function () {
                                                                                          var t = e.error;
                                                                                          t.code !== t.ABORT_ERR && x();
                                                                                      }),
                                                                                      "writestart progress write abort".split(" ").forEach(function (t) {
                                                                                          e["on" + t] = b["on" + t];
                                                                                      }),
                                                                                      e.write(d),
                                                                                      (b.abort = function () {
                                                                                          e.abort(), (b.readyState = b.DONE);
                                                                                      }),
                                                                                      (b.readyState = b.WRITING);
                                                                              }),
                                                                              x
                                                                          );
                                                                      }),
                                                                      x
                                                                  );
                                                              };
                                                              t.getFile(
                                                                  y,
                                                                  { create: !1 },
                                                                  O(function (t) {
                                                                      t.remove(), e();
                                                                  }),
                                                                  O(function (t) {
                                                                      t.code === t.NOT_FOUND_ERR ? e() : x();
                                                                  })
                                                              );
                                                          }),
                                                          x
                                                      );
                                                  }),
                                                  x
                                              ))
                                            : x();
                                },
                                y = d.prototype;
                            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
                                ? function (t, e, i) {
                                      return i || (t = f(t)), navigator.msSaveOrOpenBlob(t, e || "download");
                                  }
                                : ((y.abort = function () {
                                      var t = this;
                                      (t.readyState = t.DONE), p(t, "abort");
                                  }),
                                  (y.readyState = y.INIT = 0),
                                  (y.WRITING = 1),
                                  (y.DONE = 2),
                                  (y.error = y.onwritestart = y.onprogress = y.onwrite = y.onabort = y.onerror = y.onwriteend = null),
                                  function (t, e, i) {
                                      return new d(t, e, i);
                                  });
                        }
                    })(("undefined" != typeof self && self) || ("undefined" != typeof window && window) || (void 0).content));
                i.default = s;
            },
            {},
        ],
        6: [
            function (t, e, i) {
                !(function (t, i) {
                    "function" == typeof define && define.amd ? define([], i) : "object" == typeof e && e.exports ? (e.exports = i()) : (t.StartAudioContext = i());
                })(this, function () {
                    function t(t) {
                        var e = t.createBuffer(1, 1, t.sampleRate),
                            i = t.createBufferSource();
                        (i.buffer = e), i.connect(t.destination), i.start(0), t.resume && t.resume();
                    }
                    function e(t) {
                        return "running" === t.state;
                    }
                    function i(t, i) {
                        function n() {
                            e(t) ? i() : (requestAnimationFrame(n), t.resume && t.resume());
                        }
                        e(t) ? i() : n();
                    }
                    function n(t, e, i) {
                        if (Array.isArray(t) || (NodeList && t instanceof NodeList)) for (var o = 0; o < t.length; o++) n(t[o], e, i);
                        else if ("string" == typeof t) n(document.querySelectorAll(t), e, i);
                        else if (t.jquery && "function" == typeof t.toArray) n(t.toArray(), e, i);
                        else if (Element && t instanceof Element) {
                            var r = new s(t, i);
                            e.push(r);
                        }
                    }
                    var s = function (t, e) {
                        (this._dragged = !1),
                            (this._element = t),
                            (this._bindedMove = this._moved.bind(this)),
                            (this._bindedEnd = this._ended.bind(this, e)),
                            t.addEventListener("touchstart", this._bindedEnd),
                            t.addEventListener("touchmove", this._bindedMove),
                            t.addEventListener("touchend", this._bindedEnd),
                            t.addEventListener("mouseup", this._bindedEnd);
                    };
                    return (
                        (s.prototype._moved = function (t) {
                            this._dragged = !0;
                        }),
                        (s.prototype._ended = function (e) {
                            this._dragged || t(e), (this._dragged = !1);
                        }),
                        (s.prototype.dispose = function () {
                            this._element.removeEventListener("touchstart", this._bindedEnd),
                                this._element.removeEventListener("touchmove", this._bindedMove),
                                this._element.removeEventListener("touchend", this._bindedEnd),
                                this._element.removeEventListener("mouseup", this._bindedEnd),
                                (this._bindedMove = null),
                                (this._bindedEnd = null),
                                (this._element = null);
                        }),
                        function (t, e, s) {
                            var o = new Promise(function (e) {
                                    i(t, e);
                                }),
                                r = [];
                            return (
                                e || (e = document.body),
                                n(e, r, t),
                                o.then(function () {
                                    for (var t = 0; t < r.length; t++) r[t].dispose();
                                    (r = null), s && s();
                                }),
                                o
                            );
                        }
                    );
                });
            },
            {},
        ],
        7: [
            function (t, e, i) {
                !(function (t, i) {
                    "function" == typeof define && define.amd
                        ? define(function () {
                              return i();
                          })
                        : "object" == typeof e
                        ? (e.exports = i())
                        : (t.Tone = i());
                })(this, function () {
                    "use strict";
                    function t(t) {
                        t(e);
                    }
                    var e;
                    return (
                        (function (t) {
                            e = t();
                        })(function () {
                            var t = function (t, e) {
                                this.isUndef(t) || 1 === t ? (this.input = this.context.createGain()) : t > 1 && (this.input = new Array(t)),
                                    this.isUndef(e) || 1 === e ? (this.output = this.context.createGain()) : e > 1 && (this.output = new Array(t));
                            };
                            (t.prototype.set = function (e, i, n) {
                                if (this.isObject(e)) n = i;
                                else if (this.isString(e)) {
                                    var s = {};
                                    (s[e] = i), (e = s);
                                }
                                t: for (var o in e) {
                                    i = e[o];
                                    var r = this;
                                    if (-1 !== o.indexOf(".")) {
                                        for (var a = o.split("."), h = 0; h < a.length - 1; h++)
                                            if ((r = r[a[h]]) instanceof t) {
                                                a.splice(0, h + 1);
                                                var l = a.join(".");
                                                r.set(l, i);
                                                continue t;
                                            }
                                        o = a[a.length - 1];
                                    }
                                    var u = r[o];
                                    this.isUndef(u) ||
                                        ((t.Signal && u instanceof t.Signal) || (t.Param && u instanceof t.Param)
                                            ? u.value !== i && (this.isUndef(n) ? (u.value = i) : u.rampTo(i, n))
                                            : u instanceof AudioParam
                                            ? u.value !== i && (u.value = i)
                                            : u instanceof t
                                            ? u.set(i)
                                            : u !== i && (r[o] = i));
                                }
                                return this;
                            }),
                                (t.prototype.get = function (e) {
                                    this.isUndef(e) ? (e = this._collectDefaults(this.constructor)) : this.isString(e) && (e = [e]);
                                    for (var i = {}, n = 0; n < e.length; n++) {
                                        var s = e[n],
                                            o = this,
                                            r = i;
                                        if (-1 !== s.indexOf(".")) {
                                            for (var a = s.split("."), h = 0; h < a.length - 1; h++) {
                                                var l = a[h];
                                                (r[l] = r[l] || {}), (r = r[l]), (o = o[l]);
                                            }
                                            s = a[a.length - 1];
                                        }
                                        var u = o[s];
                                        this.isObject(e[s])
                                            ? (r[s] = u.get())
                                            : t.Signal && u instanceof t.Signal
                                            ? (r[s] = u.value)
                                            : t.Param && u instanceof t.Param
                                            ? (r[s] = u.value)
                                            : u instanceof AudioParam
                                            ? (r[s] = u.value)
                                            : u instanceof t
                                            ? (r[s] = u.get())
                                            : this.isFunction(u) || this.isUndef(u) || (r[s] = u);
                                    }
                                    return i;
                                }),
                                (t.prototype._collectDefaults = function (t) {
                                    var e = [];
                                    if ((this.isUndef(t.defaults) || (e = Object.keys(t.defaults)), !this.isUndef(t._super))) for (var i = this._collectDefaults(t._super), n = 0; n < i.length; n++) -1 === e.indexOf(i[n]) && e.push(i[n]);
                                    return e;
                                }),
                                (t.prototype.toString = function () {
                                    for (var e in t) {
                                        var i = e[0].match(/^[A-Z]$/),
                                            n = t[e] === this.constructor;
                                        if (this.isFunction(t[e]) && i && n) return e;
                                    }
                                    return "Tone";
                                }),
                                Object.defineProperty(t.prototype, "numberOfInputs", {
                                    get: function () {
                                        return this.input ? (this.isArray(this.input) ? this.input.length : 1) : 0;
                                    },
                                }),
                                Object.defineProperty(t.prototype, "numberOfOutputs", {
                                    get: function () {
                                        return this.output ? (this.isArray(this.output) ? this.output.length : 1) : 0;
                                    },
                                }),
                                (t.prototype.dispose = function () {
                                    return (
                                        this.isUndef(this.input) || (this.input instanceof AudioNode && this.input.disconnect(), (this.input = null)),
                                        this.isUndef(this.output) || (this.output instanceof AudioNode && this.output.disconnect(), (this.output = null)),
                                        this
                                    );
                                }),
                                (t.prototype.connect = function (t, e, i) {
                                    return Array.isArray(this.output) ? ((e = this.defaultArg(e, 0)), this.output[e].connect(t, 0, i)) : this.output.connect(t, e, i), this;
                                }),
                                (t.prototype.disconnect = function (t, e, i) {
                                    this.isArray(this.output) ? (this.isNumber(t) ? this.output[t].disconnect() : ((e = this.defaultArg(e, 0)), this.output[e].disconnect(t, 0, i))) : this.output.disconnect.apply(this.output, arguments);
                                }),
                                (t.prototype.connectSeries = function () {
                                    if (arguments.length > 1)
                                        for (var t = arguments[0], e = 1; e < arguments.length; e++) {
                                            var i = arguments[e];
                                            t.connect(i), (t = i);
                                        }
                                    return this;
                                }),
                                (t.prototype.chain = function () {
                                    if (arguments.length > 0)
                                        for (var t = this, e = 0; e < arguments.length; e++) {
                                            var i = arguments[e];
                                            t.connect(i), (t = i);
                                        }
                                    return this;
                                }),
                                (t.prototype.fan = function () {
                                    if (arguments.length > 0) for (var t = 0; t < arguments.length; t++) this.connect(arguments[t]);
                                    return this;
                                }),
                                (AudioNode.prototype.chain = t.prototype.chain),
                                (AudioNode.prototype.fan = t.prototype.fan),
                                (t.prototype.defaultArg = function (t, e) {
                                    if (this.isObject(t) && this.isObject(e)) {
                                        var i = {};
                                        for (var n in t) i[n] = this.defaultArg(e[n], t[n]);
                                        for (var s in e) i[s] = this.defaultArg(t[s], e[s]);
                                        return i;
                                    }
                                    return this.isUndef(t) ? e : t;
                                }),
                                (t.prototype.optionsObject = function (t, e, i) {
                                    var n = {};
                                    if (1 === t.length && this.isObject(t[0])) n = t[0];
                                    else for (var s = 0; s < e.length; s++) n[e[s]] = t[s];
                                    return this.isUndef(i) ? n : this.defaultArg(n, i);
                                }),
                                (t.prototype.isUndef = function (t) {
                                    return void 0 === t;
                                }),
                                (t.prototype.isFunction = function (t) {
                                    return "function" == typeof t;
                                }),
                                (t.prototype.isNumber = function (t) {
                                    return "number" == typeof t;
                                }),
                                (t.prototype.isObject = function (t) {
                                    return "[object Object]" === Object.prototype.toString.call(t) && t.constructor === Object;
                                }),
                                (t.prototype.isBoolean = function (t) {
                                    return "boolean" == typeof t;
                                }),
                                (t.prototype.isArray = function (t) {
                                    return Array.isArray(t);
                                }),
                                (t.prototype.isString = function (t) {
                                    return "string" == typeof t;
                                }),
                                (t.noOp = function () {}),
                                (t.prototype._readOnly = function (t) {
                                    if (Array.isArray(t)) for (var e = 0; e < t.length; e++) this._readOnly(t[e]);
                                    else Object.defineProperty(this, t, { writable: !1, enumerable: !0 });
                                }),
                                (t.prototype._writable = function (t) {
                                    if (Array.isArray(t)) for (var e = 0; e < t.length; e++) this._writable(t[e]);
                                    else Object.defineProperty(this, t, { writable: !0 });
                                }),
                                (t.State = { Started: "started", Stopped: "stopped", Paused: "paused" }),
                                (t.prototype.equalPowerScale = function (t) {
                                    var e = 0.5 * Math.PI;
                                    return Math.sin(t * e);
                                }),
                                (t.prototype.dbToGain = function (t) {
                                    return Math.pow(2, t / 6);
                                }),
                                (t.prototype.gainToDb = function (t) {
                                    return (Math.log(t) / Math.LN10) * 20;
                                }),
                                (t.prototype.intervalToFrequencyRatio = function (t) {
                                    return Math.pow(2, t / 12);
                                }),
                                (t.prototype.now = function () {
                                    return t.context.now();
                                }),
                                (t.now = function () {
                                    return t.context.now();
                                }),
                                (t.extend = function (e, i) {
                                    function n() {}
                                    t.prototype.isUndef(i) && (i = t), (n.prototype = i.prototype), (e.prototype = new n()), (e.prototype.constructor = e), (e._super = i);
                                });
                            var e;
                            return (
                                Object.defineProperty(t, "context", {
                                    get: function () {
                                        return e;
                                    },
                                    set: function (i) {
                                        (e = t.Context && i instanceof t.Context ? i : new t.Context(i)), t.Context && t.Context.emit("init", e);
                                    },
                                }),
                                Object.defineProperty(t.prototype, "context", {
                                    get: function () {
                                        return t.context;
                                    },
                                }),
                                (t.setContext = function (e) {
                                    t.context = e;
                                }),
                                Object.defineProperty(t.prototype, "blockTime", {
                                    get: function () {
                                        return 128 / this.context.sampleRate;
                                    },
                                }),
                                Object.defineProperty(t.prototype, "sampleTime", {
                                    get: function () {
                                        return 1 / this.context.sampleRate;
                                    },
                                }),
                                Object.defineProperty(t, "supported", {
                                    get: function () {
                                        var t = window.hasOwnProperty("AudioContext") || window.hasOwnProperty("webkitAudioContext"),
                                            e = window.hasOwnProperty("Promise"),
                                            i = window.hasOwnProperty("Worker");
                                        return t && e && i;
                                    },
                                }),
                                (t.version = "r10"),
                                window.TONE_SILENCE_VERSION_LOGGING || console.log("%c * Tone.js " + t.version + " * ", "background: #000; color: #fff"),
                                t
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.SignalBase = function () {}),
                                t.extend(t.SignalBase),
                                (t.SignalBase.prototype.connect = function (e, i, n) {
                                    return (
                                        (t.Signal && t.Signal === e.constructor) || (t.Param && t.Param === e.constructor) || (t.TimelineSignal && t.TimelineSignal === e.constructor)
                                            ? (e._param.cancelScheduledValues(0), (e._param.value = 0), (e.overridden = !0))
                                            : e instanceof AudioParam && (e.cancelScheduledValues(0), (e.value = 0)),
                                        t.prototype.connect.call(this, e, i, n),
                                        this
                                    );
                                }),
                                t.SignalBase
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.WaveShaper = function (t, e) {
                                    (this._shaper = this.input = this.output = this.context.createWaveShaper()),
                                        (this._curve = null),
                                        Array.isArray(t)
                                            ? (this.curve = t)
                                            : isFinite(t) || this.isUndef(t)
                                            ? (this._curve = new Float32Array(this.defaultArg(t, 1024)))
                                            : this.isFunction(t) && ((this._curve = new Float32Array(this.defaultArg(e, 1024))), this.setMap(t));
                                }),
                                t.extend(t.WaveShaper, t.SignalBase),
                                (t.WaveShaper.prototype.setMap = function (t) {
                                    for (var e = 0, i = this._curve.length; e < i; e++) {
                                        var n = (e / (i - 1)) * 2 - 1;
                                        this._curve[e] = t(n, e);
                                    }
                                    return (this._shaper.curve = this._curve), this;
                                }),
                                Object.defineProperty(t.WaveShaper.prototype, "curve", {
                                    get: function () {
                                        return this._shaper.curve;
                                    },
                                    set: function (t) {
                                        (this._curve = new Float32Array(t)), (this._shaper.curve = this._curve);
                                    },
                                }),
                                Object.defineProperty(t.WaveShaper.prototype, "oversample", {
                                    get: function () {
                                        return this._shaper.oversample;
                                    },
                                    set: function (t) {
                                        if (-1 === ["none", "2x", "4x"].indexOf(t)) throw new RangeError("Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'");
                                        this._shaper.oversample = t;
                                    },
                                }),
                                (t.WaveShaper.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._shaper.disconnect(), (this._shaper = null), (this._curve = null), this;
                                }),
                                t.WaveShaper
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.TimeBase = function (e, i) {
                                    if (!(this instanceof t.TimeBase)) return new t.TimeBase(e, i);
                                    if (((this._expr = this._noOp), e instanceof t.TimeBase)) this.copy(e);
                                    else if (!this.isUndef(i) || this.isNumber(e)) {
                                        i = this.defaultArg(i, this._defaultUnits);
                                        var n = this._primaryExpressions[i].method;
                                        this._expr = n.bind(this, e);
                                    } else this.isString(e) ? this.set(e) : this.isUndef(e) && (this._expr = this._defaultExpr());
                                }),
                                t.extend(t.TimeBase),
                                (t.TimeBase.prototype.set = function (t) {
                                    return (this._expr = this._parseExprString(t)), this;
                                }),
                                (t.TimeBase.prototype.clone = function () {
                                    var t = new this.constructor();
                                    return t.copy(this), t;
                                }),
                                (t.TimeBase.prototype.copy = function (t) {
                                    var e = t._expr();
                                    return this.set(e);
                                }),
                                (t.TimeBase.prototype._primaryExpressions = {
                                    n: {
                                        regexp: /^(\d+)n/i,
                                        method: function (t) {
                                            return 1 === (t = parseInt(t)) ? this._beatsToUnits(this._timeSignature()) : this._beatsToUnits(4 / t);
                                        },
                                    },
                                    t: {
                                        regexp: /^(\d+)t/i,
                                        method: function (t) {
                                            return (t = parseInt(t)), this._beatsToUnits(8 / (3 * parseInt(t)));
                                        },
                                    },
                                    m: {
                                        regexp: /^(\d+)m/i,
                                        method: function (t) {
                                            return this._beatsToUnits(parseInt(t) * this._timeSignature());
                                        },
                                    },
                                    i: {
                                        regexp: /^(\d+)i/i,
                                        method: function (t) {
                                            return this._ticksToUnits(parseInt(t));
                                        },
                                    },
                                    hz: {
                                        regexp: /^(\d+(?:\.\d+)?)hz/i,
                                        method: function (t) {
                                            return this._frequencyToUnits(parseFloat(t));
                                        },
                                    },
                                    tr: {
                                        regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                                        method: function (t, e, i) {
                                            var n = 0;
                                            return (
                                                t && "0" !== t && (n += this._beatsToUnits(this._timeSignature() * parseFloat(t))),
                                                e && "0" !== e && (n += this._beatsToUnits(parseFloat(e))),
                                                i && "0" !== i && (n += this._beatsToUnits(parseFloat(i) / 4)),
                                                n
                                            );
                                        },
                                    },
                                    s: {
                                        regexp: /^(\d+(?:\.\d+)?s)/,
                                        method: function (t) {
                                            return this._secondsToUnits(parseFloat(t));
                                        },
                                    },
                                    samples: {
                                        regexp: /^(\d+)samples/,
                                        method: function (t) {
                                            return parseInt(t) / this.context.sampleRate;
                                        },
                                    },
                                    default: {
                                        regexp: /^(\d+(?:\.\d+)?)/,
                                        method: function (t) {
                                            return this._primaryExpressions[this._defaultUnits].method.call(this, t);
                                        },
                                    },
                                }),
                                (t.TimeBase.prototype._binaryExpressions = {
                                    "+": {
                                        regexp: /^\+/,
                                        precedence: 2,
                                        method: function (t, e) {
                                            return t() + e();
                                        },
                                    },
                                    "-": {
                                        regexp: /^\-/,
                                        precedence: 2,
                                        method: function (t, e) {
                                            return t() - e();
                                        },
                                    },
                                    "*": {
                                        regexp: /^\*/,
                                        precedence: 1,
                                        method: function (t, e) {
                                            return t() * e();
                                        },
                                    },
                                    "/": {
                                        regexp: /^\//,
                                        precedence: 1,
                                        method: function (t, e) {
                                            return t() / e();
                                        },
                                    },
                                }),
                                (t.TimeBase.prototype._unaryExpressions = {
                                    neg: {
                                        regexp: /^\-/,
                                        method: function (t) {
                                            return -t();
                                        },
                                    },
                                }),
                                (t.TimeBase.prototype._syntaxGlue = { "(": { regexp: /^\(/ }, ")": { regexp: /^\)/ } }),
                                (t.TimeBase.prototype._tokenize = function (t) {
                                    for (var e = -1, i = []; t.length > 0; ) {
                                        var n = (function (t, e) {
                                            for (var i = ["_binaryExpressions", "_unaryExpressions", "_primaryExpressions", "_syntaxGlue"], n = 0; n < i.length; n++) {
                                                var s = e[i[n]];
                                                for (var o in s) {
                                                    var r = s[o],
                                                        a = r.regexp,
                                                        h = t.match(a);
                                                    if (null !== h) return { method: r.method, precedence: r.precedence, regexp: r.regexp, value: h[0] };
                                                }
                                            }
                                            throw new SyntaxError("Tone.TimeBase: Unexpected token " + t);
                                        })((t = t.trim()), this);
                                        i.push(n), (t = t.substr(n.value.length));
                                    }
                                    return {
                                        next: function () {
                                            return i[++e];
                                        },
                                        peek: function () {
                                            return i[e + 1];
                                        },
                                    };
                                }),
                                (t.TimeBase.prototype._matchGroup = function (t, e, i) {
                                    if (!this.isUndef(t))
                                        for (var n in e) {
                                            var s = e[n];
                                            if (s.regexp.test(t.value)) {
                                                if (this.isUndef(i)) return s;
                                                if (s.precedence === i) return s;
                                            }
                                        }
                                    return !1;
                                }),
                                (t.TimeBase.prototype._parseBinary = function (t, e) {
                                    this.isUndef(e) && (e = 2);
                                    var i;
                                    i = e < 0 ? this._parseUnary(t) : this._parseBinary(t, e - 1);
                                    for (var n = t.peek(); n && this._matchGroup(n, this._binaryExpressions, e); ) (i = (n = t.next()).method.bind(this, i, this._parseBinary(t, e - 1))), (n = t.peek());
                                    return i;
                                }),
                                (t.TimeBase.prototype._parseUnary = function (t) {
                                    var e, i;
                                    e = t.peek();
                                    var n = this._matchGroup(e, this._unaryExpressions);
                                    return n ? ((e = t.next()), (i = this._parseUnary(t)), n.method.bind(this, i)) : this._parsePrimary(t);
                                }),
                                (t.TimeBase.prototype._parsePrimary = function (t) {
                                    var e, i;
                                    if (((e = t.peek()), this.isUndef(e))) throw new SyntaxError("Tone.TimeBase: Unexpected end of expression");
                                    if (this._matchGroup(e, this._primaryExpressions)) {
                                        var n = (e = t.next()).value.match(e.regexp);
                                        return e.method.bind(this, n[1], n[2], n[3]);
                                    }
                                    if (e && "(" === e.value) {
                                        if ((t.next(), (i = this._parseBinary(t)), !(e = t.next()) || ")" !== e.value)) throw new SyntaxError("Expected )");
                                        return i;
                                    }
                                    throw new SyntaxError("Tone.TimeBase: Cannot process token " + e.value);
                                }),
                                (t.TimeBase.prototype._parseExprString = function (t) {
                                    this.isString(t) || (t = t.toString());
                                    var e = this._tokenize(t);
                                    return this._parseBinary(e);
                                }),
                                (t.TimeBase.prototype._noOp = function () {
                                    return 0;
                                }),
                                (t.TimeBase.prototype._defaultExpr = function () {
                                    return this._noOp;
                                }),
                                (t.TimeBase.prototype._defaultUnits = "s"),
                                (t.TimeBase.prototype._frequencyToUnits = function (t) {
                                    return 1 / t;
                                }),
                                (t.TimeBase.prototype._beatsToUnits = function (e) {
                                    return (60 / t.Transport.bpm.value) * e;
                                }),
                                (t.TimeBase.prototype._secondsToUnits = function (t) {
                                    return t;
                                }),
                                (t.TimeBase.prototype._ticksToUnits = function (e) {
                                    return e * (this._beatsToUnits(1) / t.Transport.PPQ);
                                }),
                                (t.TimeBase.prototype._timeSignature = function () {
                                    return t.Transport.timeSignature;
                                }),
                                (t.TimeBase.prototype._pushExpr = function (e, i, n) {
                                    return e instanceof t.TimeBase || (e = new this.constructor(e, n)), (this._expr = this._binaryExpressions[i].method.bind(this, this._expr, e._expr)), this;
                                }),
                                (t.TimeBase.prototype.add = function (t, e) {
                                    return this._pushExpr(t, "+", e);
                                }),
                                (t.TimeBase.prototype.sub = function (t, e) {
                                    return this._pushExpr(t, "-", e);
                                }),
                                (t.TimeBase.prototype.mult = function (t, e) {
                                    return this._pushExpr(t, "*", e);
                                }),
                                (t.TimeBase.prototype.div = function (t, e) {
                                    return this._pushExpr(t, "/", e);
                                }),
                                (t.TimeBase.prototype.valueOf = function () {
                                    return this._expr();
                                }),
                                (t.TimeBase.prototype.dispose = function () {
                                    this._expr = null;
                                }),
                                t.TimeBase
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Time = function (e, i) {
                                    if (!(this instanceof t.Time)) return new t.Time(e, i);
                                    (this._plusNow = !1), t.TimeBase.call(this, e, i);
                                }),
                                t.extend(t.Time, t.TimeBase),
                                (t.Time.prototype._unaryExpressions = Object.create(t.TimeBase.prototype._unaryExpressions)),
                                (t.Time.prototype._unaryExpressions.quantize = {
                                    regexp: /^@/,
                                    method: function (e) {
                                        return t.Transport.nextSubdivision(e());
                                    },
                                }),
                                (t.Time.prototype._unaryExpressions.now = {
                                    regexp: /^\+/,
                                    method: function (t) {
                                        return (this._plusNow = !0), t();
                                    },
                                }),
                                (t.Time.prototype.quantize = function (t, e) {
                                    return (
                                        (e = this.defaultArg(e, 1)),
                                        (this._expr = function (t, e, i) {
                                            return (t = t()), (e = e.toSeconds()), t + (Math.round(t / e) * e - t) * i;
                                        }.bind(this, this._expr, new this.constructor(t), e)),
                                        this
                                    );
                                }),
                                (t.Time.prototype.addNow = function () {
                                    return (this._plusNow = !0), this;
                                }),
                                (t.Time.prototype._defaultExpr = function () {
                                    return (this._plusNow = !0), this._noOp;
                                }),
                                (t.Time.prototype.copy = function (e) {
                                    return t.TimeBase.prototype.copy.call(this, e), (this._plusNow = e._plusNow), this;
                                }),
                                (t.Time.prototype.toNotation = function () {
                                    var t = this.toSeconds(),
                                        e = ["1m", "2n", "4n", "8n", "16n", "32n", "64n", "128n"],
                                        i = this._toNotationHelper(t, e),
                                        n = ["1m", "2n", "2t", "4n", "4t", "8n", "8t", "16n", "16t", "32n", "32t", "64n", "64t", "128n"],
                                        s = this._toNotationHelper(t, n);
                                    return s.split("+").length < i.split("+").length ? s : i;
                                }),
                                (t.Time.prototype._toNotationHelper = function (t, e) {
                                    for (var i = this._notationToUnits(e[e.length - 1]), n = "", s = 0; s < e.length; s++) {
                                        var o = this._notationToUnits(e[s]),
                                            r = t / o;
                                        if ((1 - (r % 1) < 1e-6 && (r += 1e-6), (r = Math.floor(r)) > 0)) {
                                            if (((n += 1 === r ? e[s] : r.toString() + "*" + e[s]), (t -= r * o) < i)) break;
                                            n += " + ";
                                        }
                                    }
                                    return "" === n && (n = "0"), n;
                                }),
                                (t.Time.prototype._notationToUnits = function (t) {
                                    for (var e = this._primaryExpressions, i = [e.n, e.t, e.m], n = 0; n < i.length; n++) {
                                        var s = i[n],
                                            o = t.match(s.regexp);
                                        if (o) return s.method.call(this, o[1]);
                                    }
                                }),
                                (t.Time.prototype.toBarsBeatsSixteenths = function () {
                                    var t = this._beatsToUnits(1),
                                        e = this.toSeconds() / t,
                                        i = Math.floor(e / this._timeSignature()),
                                        n = (e % 1) * 4;
                                    return (e = Math.floor(e) % this._timeSignature()), (n = n.toString()).length > 3 && (n = parseFloat(n).toFixed(3)), [i, e, n].join(":");
                                }),
                                (t.Time.prototype.toTicks = function () {
                                    var e = this._beatsToUnits(1),
                                        i = this.valueOf() / e;
                                    return Math.floor(i * t.Transport.PPQ);
                                }),
                                (t.Time.prototype.toSamples = function () {
                                    return this.toSeconds() * this.context.sampleRate;
                                }),
                                (t.Time.prototype.toFrequency = function () {
                                    return 1 / this.toSeconds();
                                }),
                                (t.Time.prototype.toSeconds = function () {
                                    return this.valueOf();
                                }),
                                (t.Time.prototype.toMilliseconds = function () {
                                    return 1e3 * this.toSeconds();
                                }),
                                (t.Time.prototype.valueOf = function () {
                                    return this._expr() + (this._plusNow ? this.now() : 0);
                                }),
                                t.Time
                            );
                        }),
                        t(function (t) {
                            (t.Frequency = function (e, i) {
                                if (!(this instanceof t.Frequency)) return new t.Frequency(e, i);
                                t.TimeBase.call(this, e, i);
                            }),
                                t.extend(t.Frequency, t.TimeBase),
                                (t.Frequency.prototype._primaryExpressions = Object.create(t.TimeBase.prototype._primaryExpressions)),
                                (t.Frequency.prototype._primaryExpressions.midi = {
                                    regexp: /^(\d+(?:\.\d+)?midi)/,
                                    method: function (t) {
                                        return this.midiToFrequency(t);
                                    },
                                }),
                                (t.Frequency.prototype._primaryExpressions.note = {
                                    regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
                                    method: function (t, i) {
                                        var n = e[t.toLowerCase()] + 12 * (parseInt(i) + 1);
                                        return this.midiToFrequency(n);
                                    },
                                }),
                                (t.Frequency.prototype._primaryExpressions.tr = {
                                    regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                                    method: function (t, e, i) {
                                        var n = 1;
                                        return (
                                            t && "0" !== t && (n *= this._beatsToUnits(this._timeSignature() * parseFloat(t))),
                                            e && "0" !== e && (n *= this._beatsToUnits(parseFloat(e))),
                                            i && "0" !== i && (n *= this._beatsToUnits(parseFloat(i) / 4)),
                                            n
                                        );
                                    },
                                }),
                                (t.Frequency.prototype.transpose = function (t) {
                                    return (
                                        (this._expr = function (t, e) {
                                            return t() * this.intervalToFrequencyRatio(e);
                                        }.bind(this, this._expr, t)),
                                        this
                                    );
                                }),
                                (t.Frequency.prototype.harmonize = function (t) {
                                    return (
                                        (this._expr = function (t, e) {
                                            for (var i = t(), n = [], s = 0; s < e.length; s++) n[s] = i * this.intervalToFrequencyRatio(e[s]);
                                            return n;
                                        }.bind(this, this._expr, t)),
                                        this
                                    );
                                }),
                                (t.Frequency.prototype.toMidi = function () {
                                    return this.frequencyToMidi(this.valueOf());
                                }),
                                (t.Frequency.prototype.toNote = function () {
                                    var e = this.valueOf(),
                                        n = Math.log(e / t.Frequency.A4) / Math.LN2,
                                        s = Math.round(12 * n) + 57,
                                        o = Math.floor(s / 12);
                                    return o < 0 && (s += -12 * o), i[s % 12] + o.toString();
                                }),
                                (t.Frequency.prototype.toSeconds = function () {
                                    return 1 / this.valueOf();
                                }),
                                (t.Frequency.prototype.toFrequency = function () {
                                    return this.valueOf();
                                }),
                                (t.Frequency.prototype.toTicks = function () {
                                    var e = this._beatsToUnits(1),
                                        i = this.valueOf() / e;
                                    return Math.floor(i * t.Transport.PPQ);
                                }),
                                (t.Frequency.prototype._frequencyToUnits = function (t) {
                                    return t;
                                }),
                                (t.Frequency.prototype._ticksToUnits = function (e) {
                                    return 1 / ((60 * e) / (t.Transport.bpm.value * t.Transport.PPQ));
                                }),
                                (t.Frequency.prototype._beatsToUnits = function (e) {
                                    return 1 / t.TimeBase.prototype._beatsToUnits.call(this, e);
                                }),
                                (t.Frequency.prototype._secondsToUnits = function (t) {
                                    return 1 / t;
                                }),
                                (t.Frequency.prototype._defaultUnits = "hz");
                            var e = {
                                    cbb: -2,
                                    cb: -1,
                                    c: 0,
                                    "c#": 1,
                                    cx: 2,
                                    dbb: 0,
                                    db: 1,
                                    d: 2,
                                    "d#": 3,
                                    dx: 4,
                                    ebb: 2,
                                    eb: 3,
                                    e: 4,
                                    "e#": 5,
                                    ex: 6,
                                    fbb: 3,
                                    fb: 4,
                                    f: 5,
                                    "f#": 6,
                                    fx: 7,
                                    gbb: 5,
                                    gb: 6,
                                    g: 7,
                                    "g#": 8,
                                    gx: 9,
                                    abb: 7,
                                    ab: 8,
                                    a: 9,
                                    "a#": 10,
                                    ax: 11,
                                    bbb: 9,
                                    bb: 10,
                                    b: 11,
                                    "b#": 12,
                                    bx: 13,
                                },
                                i = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
                            return (
                                (t.Frequency.A4 = 440),
                                (t.Frequency.prototype.midiToFrequency = function (e) {
                                    return t.Frequency.A4 * Math.pow(2, (e - 69) / 12);
                                }),
                                (t.Frequency.prototype.frequencyToMidi = function (e) {
                                    return 69 + (12 * Math.log(e / t.Frequency.A4)) / Math.LN2;
                                }),
                                t.Frequency
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.TransportTime = function (e, i) {
                                    if (!(this instanceof t.TransportTime)) return new t.TransportTime(e, i);
                                    t.Time.call(this, e, i);
                                }),
                                t.extend(t.TransportTime, t.Time),
                                (t.TransportTime.prototype._unaryExpressions = Object.create(t.Time.prototype._unaryExpressions)),
                                (t.TransportTime.prototype._unaryExpressions.quantize = {
                                    regexp: /^@/,
                                    method: function (e) {
                                        var i = this._secondsToTicks(e()),
                                            n = Math.ceil(t.Transport.ticks / i);
                                        return this._ticksToUnits(n * i);
                                    },
                                }),
                                (t.TransportTime.prototype._secondsToTicks = function (e) {
                                    var i = e / this._beatsToUnits(1);
                                    return Math.round(i * t.Transport.PPQ);
                                }),
                                (t.TransportTime.prototype.valueOf = function () {
                                    return this._secondsToTicks(this._expr()) + (this._plusNow ? t.Transport.ticks : 0);
                                }),
                                (t.TransportTime.prototype.toTicks = function () {
                                    return this.valueOf();
                                }),
                                (t.TransportTime.prototype.toSeconds = function () {
                                    return this._expr() + (this._plusNow ? t.Transport.seconds : 0);
                                }),
                                (t.TransportTime.prototype.toFrequency = function () {
                                    return 1 / this.toSeconds();
                                }),
                                t.TransportTime
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Emitter = function () {
                                    this._events = {};
                                }),
                                t.extend(t.Emitter),
                                (t.Emitter.prototype.on = function (t, e) {
                                    for (var i = t.split(/\W+/), n = 0; n < i.length; n++) {
                                        var s = i[n];
                                        this._events.hasOwnProperty(s) || (this._events[s] = []), this._events[s].push(e);
                                    }
                                    return this;
                                }),
                                (t.Emitter.prototype.off = function (e, i) {
                                    for (var n = e.split(/\W+/), s = 0; s < n.length; s++)
                                        if (((e = n[s]), this._events.hasOwnProperty(e)))
                                            if (t.prototype.isUndef(i)) this._events[e] = [];
                                            else for (var o = this._events[e], r = 0; r < o.length; r++) o[r] === i && o.splice(r, 1);
                                    return this;
                                }),
                                (t.Emitter.prototype.emit = function (t) {
                                    if (this._events) {
                                        var e = Array.apply(null, arguments).slice(1);
                                        if (this._events.hasOwnProperty(t)) for (var i = this._events[t], n = 0, s = i.length; n < s; n++) i[n].apply(this, e);
                                    }
                                    return this;
                                }),
                                (t.Emitter.mixin = function (e) {
                                    var i = ["on", "off", "emit"];
                                    e._events = {};
                                    for (var n = 0; n < i.length; n++) {
                                        var s = i[n],
                                            o = t.Emitter.prototype[s];
                                        e[s] = o;
                                    }
                                }),
                                (t.Emitter.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), (this._events = null), this;
                                }),
                                t.Emitter
                            );
                        }),
                        t(function (t) {
                            return (
                                !window.hasOwnProperty("AudioContext") && window.hasOwnProperty("webkitAudioContext") && (window.AudioContext = window.webkitAudioContext),
                                (t.Context = function (e) {
                                    t.Emitter.call(this), e || (e = new window.AudioContext()), (this._context = e);
                                    for (var i in this._context) this._defineProperty(this._context, i);
                                    (this._latencyHint = "interactive"),
                                        (this._lookAhead = 0.1),
                                        (this._updateInterval = this._lookAhead / 3),
                                        (this._computedUpdateInterval = 0),
                                        (this._worker = this._createWorker()),
                                        (this._constants = {});
                                }),
                                t.extend(t.Context, t.Emitter),
                                t.Emitter.mixin(t.Context),
                                (t.Context.prototype._defineProperty = function (t, e) {
                                    this.isUndef(this[e]) &&
                                        Object.defineProperty(this, e, {
                                            get: function () {
                                                return "function" == typeof t[e] ? t[e].bind(t) : t[e];
                                            },
                                            set: function (i) {
                                                t[e] = i;
                                            },
                                        });
                                }),
                                (t.Context.prototype.now = function () {
                                    return this._context.currentTime;
                                }),
                                (t.Context.prototype._createWorker = function () {
                                    window.URL = window.URL || window.webkitURL;
                                    var t = new Blob([
                                            "var timeoutTime = " +
                                                (1e3 * this._updateInterval).toFixed(1) +
                                                ";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();",
                                        ]),
                                        e = URL.createObjectURL(t),
                                        i = new Worker(e);
                                    return (
                                        i.addEventListener(
                                            "message",
                                            function () {
                                                this.emit("tick");
                                            }.bind(this)
                                        ),
                                        i.addEventListener(
                                            "message",
                                            function () {
                                                var t = this.now();
                                                if (this.isNumber(this._lastUpdate)) {
                                                    var e = t - this._lastUpdate;
                                                    this._computedUpdateInterval = Math.max(e, 0.97 * this._computedUpdateInterval);
                                                }
                                                this._lastUpdate = t;
                                            }.bind(this)
                                        ),
                                        i
                                    );
                                }),
                                (t.Context.prototype.getConstant = function (t) {
                                    if (this._constants[t]) return this._constants[t];
                                    for (var e = this._context.createBuffer(1, 128, this._context.sampleRate), i = e.getChannelData(0), n = 0; n < i.length; n++) i[n] = t;
                                    var s = this._context.createBufferSource();
                                    return (s.channelCount = 1), (s.channelCountMode = "explicit"), (s.buffer = e), (s.loop = !0), s.start(0), (this._constants[t] = s), s;
                                }),
                                Object.defineProperty(t.Context.prototype, "lag", {
                                    get: function () {
                                        var t = this._computedUpdateInterval - this._updateInterval;
                                        return (t = Math.max(t, 0));
                                    },
                                }),
                                Object.defineProperty(t.Context.prototype, "lookAhead", {
                                    get: function () {
                                        return this._lookAhead;
                                    },
                                    set: function (t) {
                                        this._lookAhead = t;
                                    },
                                }),
                                Object.defineProperty(t.Context.prototype, "updateInterval", {
                                    get: function () {
                                        return this._updateInterval;
                                    },
                                    set: function (e) {
                                        (this._updateInterval = Math.max(e, t.prototype.blockTime)), this._worker.postMessage(Math.max(1e3 * e, 1));
                                    },
                                }),
                                Object.defineProperty(t.Context.prototype, "latencyHint", {
                                    get: function () {
                                        return this._latencyHint;
                                    },
                                    set: function (t) {
                                        var e = t;
                                        if (((this._latencyHint = t), this.isString(t)))
                                            switch (t) {
                                                case "interactive":
                                                    (e = 0.1), (this._context.latencyHint = t);
                                                    break;
                                                case "playback":
                                                    (e = 0.8), (this._context.latencyHint = t);
                                                    break;
                                                case "balanced":
                                                    (e = 0.25), (this._context.latencyHint = t);
                                                    break;
                                                case "fastest":
                                                    e = 0.01;
                                            }
                                        (this.lookAhead = e), (this.updateInterval = e / 3);
                                    },
                                }),
                                t.supported
                                    ? (!(function () {
                                          function e(e, n, s) {
                                              if (e.input) Array.isArray(e.input) ? (t.prototype.isUndef(s) && (s = 0), this.connect(e.input[s])) : this.connect(e.input, n, s);
                                              else
                                                  try {
                                                      e instanceof AudioNode ? i.call(this, e, n, s) : i.call(this, e, n);
                                                  } catch (t) {
                                                      throw new Error("error connecting to node: " + e + "\n" + t);
                                                  }
                                          }
                                          var i = AudioNode.prototype.connect,
                                              n = AudioNode.prototype.disconnect;
                                          AudioNode.prototype.connect !== e &&
                                              ((AudioNode.prototype.connect = e),
                                              (AudioNode.prototype.disconnect = function (e, i, s) {
                                                  if (e && e.input && Array.isArray(e.input)) t.prototype.isUndef(s) && (s = 0), this.disconnect(e.input[s], i, s);
                                                  else if (e && e.input) this.disconnect(e.input, i, s);
                                                  else
                                                      try {
                                                          n.apply(this, arguments);
                                                      } catch (t) {
                                                          throw new Error("error disconnecting node: " + e + "\n" + t);
                                                      }
                                              }));
                                      })(),
                                      (t.context = new t.Context()))
                                    : console.warn("This browser does not support Tone.js"),
                                t.Context
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Type = {
                                    Default: "number",
                                    Time: "time",
                                    Frequency: "frequency",
                                    TransportTime: "transportTime",
                                    Ticks: "ticks",
                                    NormalRange: "normalRange",
                                    AudioRange: "audioRange",
                                    Decibels: "db",
                                    Interval: "interval",
                                    BPM: "bpm",
                                    Positive: "positive",
                                    Cents: "cents",
                                    Degrees: "degrees",
                                    MIDI: "midi",
                                    BarsBeatsSixteenths: "barsBeatsSixteenths",
                                    Samples: "samples",
                                    Hertz: "hertz",
                                    Note: "note",
                                    Milliseconds: "milliseconds",
                                    Seconds: "seconds",
                                    Notation: "notation",
                                }),
                                (t.prototype.toSeconds = function (e) {
                                    return this.isNumber(e) ? e : this.isUndef(e) ? this.now() : this.isString(e) ? new t.Time(e).toSeconds() : e instanceof t.TimeBase ? e.toSeconds() : void 0;
                                }),
                                (t.prototype.toFrequency = function (e) {
                                    return this.isNumber(e) ? e : this.isString(e) || this.isUndef(e) ? new t.Frequency(e).valueOf() : e instanceof t.TimeBase ? e.toFrequency() : void 0;
                                }),
                                (t.prototype.toTicks = function (e) {
                                    return this.isNumber(e) || this.isString(e) ? new t.TransportTime(e).toTicks() : this.isUndef(e) ? t.Transport.ticks : e instanceof t.TimeBase ? e.toTicks() : void 0;
                                }),
                                t
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Param = function () {
                                    var e = this.optionsObject(arguments, ["param", "units", "convert"], t.Param.defaults);
                                    (this._param = this.input = e.param),
                                        (this.units = e.units),
                                        (this.convert = e.convert),
                                        (this.overridden = !1),
                                        (this._lfo = null),
                                        this.isObject(e.lfo) ? (this.value = e.lfo) : this.isUndef(e.value) || (this.value = e.value);
                                }),
                                t.extend(t.Param),
                                (t.Param.defaults = { units: t.Type.Default, convert: !0, param: void 0 }),
                                Object.defineProperty(t.Param.prototype, "value", {
                                    get: function () {
                                        return this._toUnits(this._param.value);
                                    },
                                    set: function (e) {
                                        if (this.isObject(e)) {
                                            if (this.isUndef(t.LFO)) throw new Error("Include 'Tone.LFO' to use an LFO as a Param value.");
                                            this._lfo && this._lfo.dispose(), (this._lfo = new t.LFO(e).start()), this._lfo.connect(this.input);
                                        } else {
                                            var i = this._fromUnits(e);
                                            this._param.cancelScheduledValues(0), (this._param.value = i);
                                        }
                                    },
                                }),
                                (t.Param.prototype._fromUnits = function (e) {
                                    if (!this.convert && !this.isUndef(this.convert)) return e;
                                    switch (this.units) {
                                        case t.Type.Time:
                                            return this.toSeconds(e);
                                        case t.Type.Frequency:
                                            return this.toFrequency(e);
                                        case t.Type.Decibels:
                                            return this.dbToGain(e);
                                        case t.Type.NormalRange:
                                            return Math.min(Math.max(e, 0), 1);
                                        case t.Type.AudioRange:
                                            return Math.min(Math.max(e, -1), 1);
                                        case t.Type.Positive:
                                            return Math.max(e, 0);
                                        default:
                                            return e;
                                    }
                                }),
                                (t.Param.prototype._toUnits = function (e) {
                                    if (!this.convert && !this.isUndef(this.convert)) return e;
                                    switch (this.units) {
                                        case t.Type.Decibels:
                                            return this.gainToDb(e);
                                        default:
                                            return e;
                                    }
                                }),
                                (t.Param.prototype._minOutput = 1e-5),
                                (t.Param.prototype.setValueAtTime = function (t, e) {
                                    return (t = this._fromUnits(t)), (e = this.toSeconds(e)) <= this.now() + this.blockTime ? (this._param.value = t) : this._param.setValueAtTime(t, e), this;
                                }),
                                (t.Param.prototype.setRampPoint = function (t) {
                                    t = this.defaultArg(t, this.now());
                                    var e = this._param.value;
                                    return 0 === e && (e = this._minOutput), this._param.setValueAtTime(e, t), this;
                                }),
                                (t.Param.prototype.linearRampToValueAtTime = function (t, e) {
                                    return (t = this._fromUnits(t)), this._param.linearRampToValueAtTime(t, this.toSeconds(e)), this;
                                }),
                                (t.Param.prototype.exponentialRampToValueAtTime = function (t, e) {
                                    return (t = this._fromUnits(t)), (t = Math.max(this._minOutput, t)), this._param.exponentialRampToValueAtTime(t, this.toSeconds(e)), this;
                                }),
                                (t.Param.prototype.exponentialRampToValue = function (t, e, i) {
                                    return (i = this.toSeconds(i)), this.setRampPoint(i), this.exponentialRampToValueAtTime(t, i + this.toSeconds(e)), this;
                                }),
                                (t.Param.prototype.linearRampToValue = function (t, e, i) {
                                    return (i = this.toSeconds(i)), this.setRampPoint(i), this.linearRampToValueAtTime(t, i + this.toSeconds(e)), this;
                                }),
                                (t.Param.prototype.setTargetAtTime = function (t, e, i) {
                                    return (t = this._fromUnits(t)), (t = Math.max(this._minOutput, t)), (i = Math.max(this._minOutput, i)), this._param.setTargetAtTime(t, this.toSeconds(e), i), this;
                                }),
                                (t.Param.prototype.setValueCurveAtTime = function (t, e, i) {
                                    for (var n = 0; n < t.length; n++) t[n] = this._fromUnits(t[n]);
                                    return this._param.setValueCurveAtTime(t, this.toSeconds(e), this.toSeconds(i)), this;
                                }),
                                (t.Param.prototype.cancelScheduledValues = function (t) {
                                    return this._param.cancelScheduledValues(this.toSeconds(t)), this;
                                }),
                                (t.Param.prototype.rampTo = function (e, i, n) {
                                    return (
                                        (i = this.defaultArg(i, 0)),
                                        this.units === t.Type.Frequency || this.units === t.Type.BPM || this.units === t.Type.Decibels ? this.exponentialRampToValue(e, i, n) : this.linearRampToValue(e, i, n),
                                        this
                                    );
                                }),
                                Object.defineProperty(t.Param.prototype, "lfo", {
                                    get: function () {
                                        return this._lfo;
                                    },
                                }),
                                (t.Param.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), (this._param = null), this._lfo && (this._lfo.dispose(), (this._lfo = null)), this;
                                }),
                                t.Param
                            );
                        }),
                        t(function (t) {
                            return (
                                window.GainNode && !AudioContext.prototype.createGain && (AudioContext.prototype.createGain = AudioContext.prototype.createGainNode),
                                (t.Gain = function () {
                                    var e = this.optionsObject(arguments, ["gain", "units"], t.Gain.defaults);
                                    (this.input = this.output = this._gainNode = this.context.createGain()),
                                        (this.gain = new t.Param({ param: this._gainNode.gain, units: e.units, value: e.gain, convert: e.convert })),
                                        this._readOnly("gain");
                                }),
                                t.extend(t.Gain),
                                (t.Gain.defaults = { gain: 1, convert: !0 }),
                                (t.Gain.prototype.dispose = function () {
                                    t.Param.prototype.dispose.call(this), this._gainNode.disconnect(), (this._gainNode = null), this._writable("gain"), this.gain.dispose(), (this.gain = null);
                                }),
                                (t.prototype.createInsOuts = function (e, i) {
                                    1 === e ? (this.input = new t.Gain()) : e > 1 && (this.input = new Array(e)), 1 === i ? (this.output = new t.Gain()) : i > 1 && (this.output = new Array(e));
                                }),
                                t.Gain
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Signal = function () {
                                    var e = this.optionsObject(arguments, ["value", "units"], t.Signal.defaults);
                                    (this.output = this._gain = this.context.createGain()), (e.param = this._gain.gain), t.Param.call(this, e), (this.input = this._param = this._gain.gain), this.context.getConstant(1).chain(this._gain);
                                }),
                                t.extend(t.Signal, t.Param),
                                (t.Signal.defaults = { value: 0, units: t.Type.Default, convert: !0 }),
                                (t.Signal.prototype.connect = t.SignalBase.prototype.connect),
                                (t.Signal.prototype.dispose = function () {
                                    return t.Param.prototype.dispose.call(this), (this._param = null), this._gain.disconnect(), (this._gain = null), this;
                                }),
                                t.Signal
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Timeline = function () {
                                    var e = this.optionsObject(arguments, ["memory"], t.Timeline.defaults);
                                    (this._timeline = []), (this._toRemove = []), (this._iterating = !1), (this.memory = e.memory);
                                }),
                                t.extend(t.Timeline),
                                (t.Timeline.defaults = { memory: 1 / 0 }),
                                Object.defineProperty(t.Timeline.prototype, "length", {
                                    get: function () {
                                        return this._timeline.length;
                                    },
                                }),
                                (t.Timeline.prototype.add = function (t) {
                                    if (this.isUndef(t.time)) throw new Error("Tone.Timeline: events must have a time attribute");
                                    if (this._timeline.length) {
                                        var e = this._search(t.time);
                                        this._timeline.splice(e + 1, 0, t);
                                    } else this._timeline.push(t);
                                    if (this.length > this.memory) {
                                        var i = this.length - this.memory;
                                        this._timeline.splice(0, i);
                                    }
                                    return this;
                                }),
                                (t.Timeline.prototype.remove = function (t) {
                                    if (this._iterating) this._toRemove.push(t);
                                    else {
                                        var e = this._timeline.indexOf(t);
                                        -1 !== e && this._timeline.splice(e, 1);
                                    }
                                    return this;
                                }),
                                (t.Timeline.prototype.get = function (t) {
                                    var e = this._search(t);
                                    return -1 !== e ? this._timeline[e] : null;
                                }),
                                (t.Timeline.prototype.peek = function () {
                                    return this._timeline[0];
                                }),
                                (t.Timeline.prototype.shift = function () {
                                    return this._timeline.shift();
                                }),
                                (t.Timeline.prototype.getAfter = function (t) {
                                    var e = this._search(t);
                                    return e + 1 < this._timeline.length ? this._timeline[e + 1] : null;
                                }),
                                (t.Timeline.prototype.getBefore = function (t) {
                                    var e = this._timeline.length;
                                    if (e > 0 && this._timeline[e - 1].time < t) return this._timeline[e - 1];
                                    var i = this._search(t);
                                    return i - 1 >= 0 ? this._timeline[i - 1] : null;
                                }),
                                (t.Timeline.prototype.cancel = function (t) {
                                    if (this._timeline.length > 1) {
                                        var e = this._search(t);
                                        if (e >= 0)
                                            if (this._timeline[e].time === t) {
                                                for (var i = e; i >= 0 && this._timeline[i].time === t; i--) e = i;
                                                this._timeline = this._timeline.slice(0, e);
                                            } else this._timeline = this._timeline.slice(0, e + 1);
                                        else this._timeline = [];
                                    } else 1 === this._timeline.length && this._timeline[0].time >= t && (this._timeline = []);
                                    return this;
                                }),
                                (t.Timeline.prototype.cancelBefore = function (t) {
                                    if (this._timeline.length) {
                                        var e = this._search(t);
                                        e >= 0 && (this._timeline = this._timeline.slice(e + 1));
                                    }
                                    return this;
                                }),
                                (t.Timeline.prototype._search = function (t) {
                                    var e = 0,
                                        i = this._timeline.length,
                                        n = i;
                                    if (i > 0 && this._timeline[i - 1].time <= t) return i - 1;
                                    for (; e < n; ) {
                                        var s = Math.floor(e + (n - e) / 2),
                                            o = this._timeline[s],
                                            r = this._timeline[s + 1];
                                        if (o.time === t) {
                                            for (var a = s; a < this._timeline.length; a++) this._timeline[a].time === t && (s = a);
                                            return s;
                                        }
                                        if (o.time < t && r.time > t) return s;
                                        o.time > t ? (n = s) : o.time < t && (e = s + 1);
                                    }
                                    return -1;
                                }),
                                (t.Timeline.prototype._iterate = function (t, e, i) {
                                    (this._iterating = !0), (e = this.defaultArg(e, 0)), (i = this.defaultArg(i, this._timeline.length - 1));
                                    for (var n = e; n <= i; n++) t(this._timeline[n]);
                                    if (((this._iterating = !1), this._toRemove.length > 0)) {
                                        for (var s = 0; s < this._toRemove.length; s++) {
                                            var o = this._timeline.indexOf(this._toRemove[s]);
                                            -1 !== o && this._timeline.splice(o, 1);
                                        }
                                        this._toRemove = [];
                                    }
                                }),
                                (t.Timeline.prototype.forEach = function (t) {
                                    return this._iterate(t), this;
                                }),
                                (t.Timeline.prototype.forEachBefore = function (t, e) {
                                    var i = this._search(t);
                                    return -1 !== i && this._iterate(e, 0, i), this;
                                }),
                                (t.Timeline.prototype.forEachAfter = function (t, e) {
                                    var i = this._search(t);
                                    return this._iterate(e, i + 1), this;
                                }),
                                (t.Timeline.prototype.forEachFrom = function (t, e) {
                                    for (var i = this._search(t); i >= 0 && this._timeline[i].time >= t; ) i--;
                                    return this._iterate(e, i + 1), this;
                                }),
                                (t.Timeline.prototype.forEachAtTime = function (t, e) {
                                    var i = this._search(t);
                                    return (
                                        -1 !== i &&
                                            this._iterate(
                                                function (i) {
                                                    i.time === t && e(i);
                                                },
                                                0,
                                                i
                                            ),
                                        this
                                    );
                                }),
                                (t.Timeline.prototype.dispose = function () {
                                    t.prototype.dispose.call(this), (this._timeline = null), (this._toRemove = null);
                                }),
                                t.Timeline
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.TimelineSignal = function () {
                                    var e = this.optionsObject(arguments, ["value", "units"], t.Signal.defaults);
                                    (this._events = new t.Timeline(10)), t.Signal.apply(this, e), (e.param = this._param), t.Param.call(this, e), (this._initial = this._fromUnits(this._param.value));
                                }),
                                t.extend(t.TimelineSignal, t.Param),
                                (t.TimelineSignal.Type = { Linear: "linear", Exponential: "exponential", Target: "target", Curve: "curve", Set: "set" }),
                                Object.defineProperty(t.TimelineSignal.prototype, "value", {
                                    get: function () {
                                        var t = this.now(),
                                            e = this.getValueAtTime(t);
                                        return this._toUnits(e);
                                    },
                                    set: function (t) {
                                        var e = this._fromUnits(t);
                                        (this._initial = e), this.cancelScheduledValues(), (this._param.value = e);
                                    },
                                }),
                                (t.TimelineSignal.prototype.setValueAtTime = function (e, i) {
                                    return (e = this._fromUnits(e)), (i = this.toSeconds(i)), this._events.add({ type: t.TimelineSignal.Type.Set, value: e, time: i }), this._param.setValueAtTime(e, i), this;
                                }),
                                (t.TimelineSignal.prototype.linearRampToValueAtTime = function (e, i) {
                                    return (e = this._fromUnits(e)), (i = this.toSeconds(i)), this._events.add({ type: t.TimelineSignal.Type.Linear, value: e, time: i }), this._param.linearRampToValueAtTime(e, i), this;
                                }),
                                (t.TimelineSignal.prototype.exponentialRampToValueAtTime = function (e, i) {
                                    i = this.toSeconds(i);
                                    var n = this._searchBefore(i);
                                    n && 0 === n.value && this.setValueAtTime(this._minOutput, n.time), (e = this._fromUnits(e));
                                    var s = Math.max(e, this._minOutput);
                                    return (
                                        this._events.add({ type: t.TimelineSignal.Type.Exponential, value: s, time: i }),
                                        e < this._minOutput ? (this._param.exponentialRampToValueAtTime(this._minOutput, i - this.sampleTime), this.setValueAtTime(0, i)) : this._param.exponentialRampToValueAtTime(e, i),
                                        this
                                    );
                                }),
                                (t.TimelineSignal.prototype.setTargetAtTime = function (e, i, n) {
                                    return (
                                        (e = this._fromUnits(e)),
                                        (e = Math.max(this._minOutput, e)),
                                        (n = Math.max(this._minOutput, n)),
                                        (i = this.toSeconds(i)),
                                        this._events.add({ type: t.TimelineSignal.Type.Target, value: e, time: i, constant: n }),
                                        this._param.setTargetAtTime(e, i, n),
                                        this
                                    );
                                }),
                                (t.TimelineSignal.prototype.setValueCurveAtTime = function (e, i, n, s) {
                                    s = this.defaultArg(s, 1);
                                    for (var o = new Array(e.length), r = 0; r < o.length; r++) o[r] = this._fromUnits(e[r]) * s;
                                    (i = this.toSeconds(i)), (n = this.toSeconds(n)), this._events.add({ type: t.TimelineSignal.Type.Curve, value: o, time: i, duration: n }), this._param.setValueAtTime(o[0], i);
                                    for (var a = 1; a < o.length; a++) {
                                        var h = i + (a / (o.length - 1)) * n;
                                        this._param.linearRampToValueAtTime(o[a], h);
                                    }
                                    return this;
                                }),
                                (t.TimelineSignal.prototype.cancelScheduledValues = function (t) {
                                    return (t = this.toSeconds(t)), this._events.cancel(t), this._param.cancelScheduledValues(t), this;
                                }),
                                (t.TimelineSignal.prototype.setRampPoint = function (e) {
                                    e = this.toSeconds(e);
                                    var i = this._toUnits(this.getValueAtTime(e)),
                                        n = this._searchBefore(e);
                                    if (n && n.time === e) this.cancelScheduledValues(e + this.sampleTime);
                                    else if (n && n.type === t.TimelineSignal.Type.Curve && n.time + n.duration > e) this.cancelScheduledValues(e), this.linearRampToValueAtTime(i, e);
                                    else {
                                        var s = this._searchAfter(e);
                                        s &&
                                            (this.cancelScheduledValues(e),
                                            s.type === t.TimelineSignal.Type.Linear ? this.linearRampToValueAtTime(i, e) : s.type === t.TimelineSignal.Type.Exponential && this.exponentialRampToValueAtTime(i, e)),
                                            this.setValueAtTime(i, e);
                                    }
                                    return this;
                                }),
                                (t.TimelineSignal.prototype.linearRampToValueBetween = function (t, e, i) {
                                    return this.setRampPoint(e), this.linearRampToValueAtTime(t, i), this;
                                }),
                                (t.TimelineSignal.prototype.exponentialRampToValueBetween = function (t, e, i) {
                                    return this.setRampPoint(e), this.exponentialRampToValueAtTime(t, i), this;
                                }),
                                (t.TimelineSignal.prototype._searchBefore = function (t) {
                                    return this._events.get(t);
                                }),
                                (t.TimelineSignal.prototype._searchAfter = function (t) {
                                    return this._events.getAfter(t);
                                }),
                                (t.TimelineSignal.prototype.getValueAtTime = function (e) {
                                    e = this.toSeconds(e);
                                    var i = this._searchAfter(e),
                                        n = this._searchBefore(e),
                                        s = this._initial;
                                    if (null === n) s = this._initial;
                                    else if (n.type === t.TimelineSignal.Type.Target) {
                                        var o,
                                            r = this._events.getBefore(n.time);
                                        (o = null === r ? this._initial : r.value), (s = this._exponentialApproach(n.time, o, n.value, n.constant, e));
                                    } else
                                        s =
                                            n.type === t.TimelineSignal.Type.Curve
                                                ? this._curveInterpolate(n.time, n.value, n.duration, e)
                                                : null === i
                                                ? n.value
                                                : i.type === t.TimelineSignal.Type.Linear
                                                ? this._linearInterpolate(n.time, n.value, i.time, i.value, e)
                                                : i.type === t.TimelineSignal.Type.Exponential
                                                ? this._exponentialInterpolate(n.time, n.value, i.time, i.value, e)
                                                : n.value;
                                    return s;
                                }),
                                (t.TimelineSignal.prototype.connect = t.SignalBase.prototype.connect),
                                (t.TimelineSignal.prototype._exponentialApproach = function (t, e, i, n, s) {
                                    return i + (e - i) * Math.exp(-(s - t) / n);
                                }),
                                (t.TimelineSignal.prototype._linearInterpolate = function (t, e, i, n, s) {
                                    return e + ((s - t) / (i - t)) * (n - e);
                                }),
                                (t.TimelineSignal.prototype._exponentialInterpolate = function (t, e, i, n, s) {
                                    return (e = Math.max(this._minOutput, e)) * Math.pow(n / e, (s - t) / (i - t));
                                }),
                                (t.TimelineSignal.prototype._curveInterpolate = function (t, e, i, n) {
                                    var s = e.length;
                                    if (n >= t + i) return e[s - 1];
                                    if (n <= t) return e[0];
                                    var o = (n - t) / i,
                                        r = Math.floor((s - 1) * o),
                                        a = Math.ceil((s - 1) * o),
                                        h = e[r],
                                        l = e[a];
                                    return a === r ? h : this._linearInterpolate(r, h, a, l, o * (s - 1));
                                }),
                                (t.TimelineSignal.prototype.dispose = function () {
                                    t.Signal.prototype.dispose.call(this), t.Param.prototype.dispose.call(this), this._events.dispose(), (this._events = null);
                                }),
                                t.TimelineSignal
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Pow = function (e) {
                                    (this._exp = this.defaultArg(e, 1)), (this._expScaler = this.input = this.output = new t.WaveShaper(this._expFunc(this._exp), 8192));
                                }),
                                t.extend(t.Pow, t.SignalBase),
                                Object.defineProperty(t.Pow.prototype, "value", {
                                    get: function () {
                                        return this._exp;
                                    },
                                    set: function (t) {
                                        (this._exp = t), this._expScaler.setMap(this._expFunc(this._exp));
                                    },
                                }),
                                (t.Pow.prototype._expFunc = function (t) {
                                    return function (e) {
                                        return Math.pow(Math.abs(e), t);
                                    };
                                }),
                                (t.Pow.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._expScaler.dispose(), (this._expScaler = null), this;
                                }),
                                t.Pow
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Envelope = function () {
                                    var e = this.optionsObject(arguments, ["attack", "decay", "sustain", "release"], t.Envelope.defaults);
                                    (this.attack = e.attack),
                                        (this.decay = e.decay),
                                        (this.sustain = e.sustain),
                                        (this.release = e.release),
                                        (this._attackCurve = "linear"),
                                        (this._releaseCurve = "exponential"),
                                        (this._sig = this.output = new t.TimelineSignal()),
                                        this._sig.setValueAtTime(0, 0),
                                        (this.attackCurve = e.attackCurve),
                                        (this.releaseCurve = e.releaseCurve);
                                }),
                                t.extend(t.Envelope),
                                (t.Envelope.defaults = { attack: 0.01, decay: 0.1, sustain: 0.5, release: 1, attackCurve: "linear", releaseCurve: "exponential" }),
                                Object.defineProperty(t.Envelope.prototype, "value", {
                                    get: function () {
                                        return this.getValueAtTime(this.now());
                                    },
                                }),
                                Object.defineProperty(t.Envelope.prototype, "attackCurve", {
                                    get: function () {
                                        if (this.isString(this._attackCurve)) return this._attackCurve;
                                        if (this.isArray(this._attackCurve)) {
                                            for (var e in t.Envelope.Type) if (t.Envelope.Type[e].In === this._attackCurve) return e;
                                            return this._attackCurve;
                                        }
                                    },
                                    set: function (e) {
                                        if (t.Envelope.Type.hasOwnProperty(e)) {
                                            var i = t.Envelope.Type[e];
                                            this.isObject(i) ? (this._attackCurve = i.In) : (this._attackCurve = i);
                                        } else {
                                            if (!this.isArray(e)) throw new Error("Tone.Envelope: invalid curve: " + e);
                                            this._attackCurve = e;
                                        }
                                    },
                                }),
                                Object.defineProperty(t.Envelope.prototype, "releaseCurve", {
                                    get: function () {
                                        if (this.isString(this._releaseCurve)) return this._releaseCurve;
                                        if (this.isArray(this._releaseCurve)) {
                                            for (var e in t.Envelope.Type) if (t.Envelope.Type[e].Out === this._releaseCurve) return e;
                                            return this._releaseCurve;
                                        }
                                    },
                                    set: function (e) {
                                        if (t.Envelope.Type.hasOwnProperty(e)) {
                                            var i = t.Envelope.Type[e];
                                            this.isObject(i) ? (this._releaseCurve = i.Out) : (this._releaseCurve = i);
                                        } else {
                                            if (!this.isArray(e)) throw new Error("Tone.Envelope: invalid curve: " + e);
                                            this._releaseCurve = e;
                                        }
                                    },
                                }),
                                (t.Envelope.prototype.triggerAttack = function (t, e) {
                                    t = this.toSeconds(t);
                                    var i = this.toSeconds(this.attack),
                                        n = i,
                                        s = this.toSeconds(this.decay);
                                    e = this.defaultArg(e, 1);
                                    var o = this.getValueAtTime(t);
                                    if ((o > 0 && (n = (1 - o) / (1 / n)), "linear" === this._attackCurve)) this._sig.linearRampToValue(e, n, t);
                                    else if ("exponential" === this._attackCurve) this._sig.exponentialRampToValue(e, n, t);
                                    else if (n > 0) {
                                        this._sig.setRampPoint(t);
                                        var r = this._attackCurve;
                                        if (n < i) {
                                            var a = 1 - n / i,
                                                h = Math.floor(a * this._attackCurve.length);
                                            (r = this._attackCurve.slice(h))[0] = o;
                                        }
                                        this._sig.setValueCurveAtTime(r, t, n, e);
                                    }
                                    return this._sig.exponentialRampToValue(e * this.sustain, s, n + t), this;
                                }),
                                (t.Envelope.prototype.triggerRelease = function (t) {
                                    t = this.toSeconds(t);
                                    var e = this.getValueAtTime(t);
                                    if (e > 0) {
                                        var i = this.toSeconds(this.release);
                                        if ("linear" === this._releaseCurve) this._sig.linearRampToValue(0, i, t);
                                        else if ("exponential" === this._releaseCurve) this._sig.exponentialRampToValue(0, i, t);
                                        else {
                                            var n = this._releaseCurve;
                                            this.isArray(n) && (this._sig.setRampPoint(t), this._sig.setValueCurveAtTime(n, t, i, e));
                                        }
                                    }
                                    return this;
                                }),
                                (t.Envelope.prototype.getValueAtTime = function (t) {
                                    return this._sig.getValueAtTime(t);
                                }),
                                (t.Envelope.prototype.triggerAttackRelease = function (t, e, i) {
                                    return (e = this.toSeconds(e)), this.triggerAttack(e, i), this.triggerRelease(e + this.toSeconds(t)), this;
                                }),
                                (t.Envelope.prototype.cancel = function (t) {
                                    return this._sig.cancelScheduledValues(t), this;
                                }),
                                (t.Envelope.prototype.connect = t.Signal.prototype.connect),
                                (function () {
                                    function e(t) {
                                        for (var e = new Array(t.length), i = 0; i < t.length; i++) e[i] = 1 - t[i];
                                        return e;
                                    }
                                    var i,
                                        n,
                                        s = [];
                                    for (i = 0; i < 128; i++) s[i] = Math.sin((i / 127) * (Math.PI / 2));
                                    var o = [];
                                    for (i = 0; i < 127; i++) {
                                        n = i / 127;
                                        var r = Math.sin(n * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1;
                                        o[i] = r / 10 + 0.83 * n;
                                    }
                                    o[127] = 1;
                                    var a = [];
                                    for (i = 0; i < 128; i++) a[i] = Math.ceil((i / 127) * 5) / 5;
                                    var h = [];
                                    for (i = 0; i < 128; i++) (n = i / 127), (h[i] = 0.5 * (1 - Math.cos(Math.PI * n)));
                                    var l = [];
                                    for (i = 0; i < 128; i++) {
                                        n = i / 127;
                                        var u = 4 * Math.pow(n, 3) + 0.2,
                                            c = Math.cos(u * Math.PI * 2 * n);
                                        l[i] = Math.abs(c * (1 - n));
                                    }
                                    t.Envelope.Type = {
                                        linear: "linear",
                                        exponential: "exponential",
                                        bounce: { In: e(l), Out: l },
                                        cosine: {
                                            In: s,
                                            Out: (function (t) {
                                                return t.slice(0).reverse();
                                            })(s),
                                        },
                                        step: { In: a, Out: e(a) },
                                        ripple: { In: o, Out: e(o) },
                                        sine: { In: h, Out: e(h) },
                                    };
                                })(),
                                (t.Envelope.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._sig.dispose(), (this._sig = null), (this._attackCurve = null), (this._releaseCurve = null), this;
                                }),
                                t.Envelope
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.AmplitudeEnvelope = function () {
                                    t.Envelope.apply(this, arguments), (this.input = this.output = new t.Gain()), this._sig.connect(this.output.gain);
                                }),
                                t.extend(t.AmplitudeEnvelope, t.Envelope),
                                (t.AmplitudeEnvelope.prototype.dispose = function () {
                                    return this.input.dispose(), (this.input = null), t.Envelope.prototype.dispose.call(this), this;
                                }),
                                t.AmplitudeEnvelope
                            );
                        }),
                        t(function (t) {
                            return (
                                window.AnalyserNode &&
                                    !AnalyserNode.prototype.getFloatTimeDomainData &&
                                    (AnalyserNode.prototype.getFloatTimeDomainData = function (t) {
                                        var e = new Uint8Array(t.length);
                                        this.getByteTimeDomainData(e);
                                        for (var i = 0; i < e.length; i++) t[i] = (e[i] - 128) / 128;
                                    }),
                                (t.Analyser = function () {
                                    var e = this.optionsObject(arguments, ["type", "size"], t.Analyser.defaults);
                                    (this._analyser = this.input = this.output = this.context.createAnalyser()),
                                        (this._type = e.type),
                                        (this._returnType = e.returnType),
                                        (this._buffer = null),
                                        (this.size = e.size),
                                        (this.type = e.type),
                                        (this.returnType = e.returnType),
                                        (this.minDecibels = e.minDecibels),
                                        (this.maxDecibels = e.maxDecibels);
                                }),
                                t.extend(t.Analyser),
                                (t.Analyser.defaults = { size: 1024, returnType: "byte", type: "fft", smoothing: 0.8, maxDecibels: -30, minDecibels: -100 }),
                                (t.Analyser.Type = { Waveform: "waveform", FFT: "fft" }),
                                (t.Analyser.ReturnType = { Byte: "byte", Float: "float" }),
                                (t.Analyser.prototype.analyse = function () {
                                    return (
                                        this._type === t.Analyser.Type.FFT
                                            ? this._returnType === t.Analyser.ReturnType.Byte
                                                ? this._analyser.getByteFrequencyData(this._buffer)
                                                : this._analyser.getFloatFrequencyData(this._buffer)
                                            : this._type === t.Analyser.Type.Waveform &&
                                              (this._returnType === t.Analyser.ReturnType.Byte ? this._analyser.getByteTimeDomainData(this._buffer) : this._analyser.getFloatTimeDomainData(this._buffer)),
                                        this._buffer
                                    );
                                }),
                                Object.defineProperty(t.Analyser.prototype, "size", {
                                    get: function () {
                                        return this._analyser.frequencyBinCount;
                                    },
                                    set: function (t) {
                                        (this._analyser.fftSize = 2 * t), (this.type = this._type);
                                    },
                                }),
                                Object.defineProperty(t.Analyser.prototype, "returnType", {
                                    get: function () {
                                        return this._returnType;
                                    },
                                    set: function (e) {
                                        if (e === t.Analyser.ReturnType.Byte) this._buffer = new Uint8Array(this._analyser.frequencyBinCount);
                                        else {
                                            if (e !== t.Analyser.ReturnType.Float) throw new TypeError("Tone.Analayser: invalid return type: " + e);
                                            this._buffer = new Float32Array(this._analyser.frequencyBinCount);
                                        }
                                        this._returnType = e;
                                    },
                                }),
                                Object.defineProperty(t.Analyser.prototype, "type", {
                                    get: function () {
                                        return this._type;
                                    },
                                    set: function (e) {
                                        if (e !== t.Analyser.Type.Waveform && e !== t.Analyser.Type.FFT) throw new TypeError("Tone.Analyser: invalid type: " + e);
                                        this._type = e;
                                    },
                                }),
                                Object.defineProperty(t.Analyser.prototype, "smoothing", {
                                    get: function () {
                                        return this._analyser.smoothingTimeConstant;
                                    },
                                    set: function (t) {
                                        this._analyser.smoothingTimeConstant = t;
                                    },
                                }),
                                Object.defineProperty(t.Analyser.prototype, "minDecibels", {
                                    get: function () {
                                        return this._analyser.minDecibels;
                                    },
                                    set: function (t) {
                                        this._analyser.minDecibels = t;
                                    },
                                }),
                                Object.defineProperty(t.Analyser.prototype, "maxDecibels", {
                                    get: function () {
                                        return this._analyser.maxDecibels;
                                    },
                                    set: function (t) {
                                        this._analyser.maxDecibels = t;
                                    },
                                }),
                                (t.Analyser.prototype.dispose = function () {
                                    t.prototype.dispose.call(this), this._analyser.disconnect(), (this._analyser = null), (this._buffer = null);
                                }),
                                t.Analyser
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Compressor = function () {
                                    var e = this.optionsObject(arguments, ["threshold", "ratio"], t.Compressor.defaults);
                                    (this._compressor = this.input = this.output = this.context.createDynamicsCompressor()),
                                        (this.threshold = new t.Param({ param: this._compressor.threshold, units: t.Type.Decibels, convert: !1 })),
                                        (this.attack = new t.Param(this._compressor.attack, t.Type.Time)),
                                        (this.release = new t.Param(this._compressor.release, t.Type.Time)),
                                        (this.knee = new t.Param({ param: this._compressor.knee, units: t.Type.Decibels, convert: !1 })),
                                        (this.ratio = new t.Param({ param: this._compressor.ratio, convert: !1 })),
                                        this._readOnly(["knee", "release", "attack", "ratio", "threshold"]),
                                        this.set(e);
                                }),
                                t.extend(t.Compressor),
                                (t.Compressor.defaults = { ratio: 12, threshold: -24, release: 0.25, attack: 0.003, knee: 30 }),
                                (t.Compressor.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this._writable(["knee", "release", "attack", "ratio", "threshold"]),
                                        this._compressor.disconnect(),
                                        (this._compressor = null),
                                        this.attack.dispose(),
                                        (this.attack = null),
                                        this.release.dispose(),
                                        (this.release = null),
                                        this.threshold.dispose(),
                                        (this.threshold = null),
                                        this.ratio.dispose(),
                                        (this.ratio = null),
                                        this.knee.dispose(),
                                        (this.knee = null),
                                        this
                                    );
                                }),
                                t.Compressor
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Add = function (e) {
                                    this.createInsOuts(2, 0), (this._sum = this.input[0] = this.input[1] = this.output = new t.Gain()), (this._param = this.input[1] = new t.Signal(e)), this._param.connect(this._sum);
                                }),
                                t.extend(t.Add, t.Signal),
                                (t.Add.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._sum.dispose(), (this._sum = null), this._param.dispose(), (this._param = null), this;
                                }),
                                t.Add
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Multiply = function (e) {
                                    this.createInsOuts(2, 0), (this._mult = this.input[0] = this.output = new t.Gain()), (this._param = this.input[1] = this.output.gain), (this._param.value = this.defaultArg(e, 0));
                                }),
                                t.extend(t.Multiply, t.Signal),
                                (t.Multiply.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._mult.dispose(), (this._mult = null), (this._param = null), this;
                                }),
                                t.Multiply
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Negate = function () {
                                    this._multiply = this.input = this.output = new t.Multiply(-1);
                                }),
                                t.extend(t.Negate, t.SignalBase),
                                (t.Negate.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._multiply.dispose(), (this._multiply = null), this;
                                }),
                                t.Negate
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Subtract = function (e) {
                                    this.createInsOuts(2, 0), (this._sum = this.input[0] = this.output = new t.Gain()), (this._neg = new t.Negate()), (this._param = this.input[1] = new t.Signal(e)), this._param.chain(this._neg, this._sum);
                                }),
                                t.extend(t.Subtract, t.Signal),
                                (t.Subtract.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._neg.dispose(), (this._neg = null), this._sum.disconnect(), (this._sum = null), this._param.dispose(), (this._param = null), this;
                                }),
                                t.Subtract
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.GreaterThanZero = function () {
                                    (this._thresh = this.output = new t.WaveShaper(function (t) {
                                        return t <= 0 ? 0 : 1;
                                    }, 127)),
                                        (this._scale = this.input = new t.Multiply(1e4)),
                                        this._scale.connect(this._thresh);
                                }),
                                t.extend(t.GreaterThanZero, t.SignalBase),
                                (t.GreaterThanZero.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._scale.dispose(), (this._scale = null), this._thresh.dispose(), (this._thresh = null), this;
                                }),
                                t.GreaterThanZero
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.GreaterThan = function (e) {
                                    this.createInsOuts(2, 0), (this._param = this.input[0] = new t.Subtract(e)), (this.input[1] = this._param.input[1]), (this._gtz = this.output = new t.GreaterThanZero()), this._param.connect(this._gtz);
                                }),
                                t.extend(t.GreaterThan, t.Signal),
                                (t.GreaterThan.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._param.dispose(), (this._param = null), this._gtz.dispose(), (this._gtz = null), this;
                                }),
                                t.GreaterThan
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Abs = function () {
                                    this._abs = this.input = this.output = new t.WaveShaper(function (t) {
                                        return 0 === t ? 0 : Math.abs(t);
                                    }, 127);
                                }),
                                t.extend(t.Abs, t.SignalBase),
                                (t.Abs.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._abs.dispose(), (this._abs = null), this;
                                }),
                                t.Abs
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Modulo = function (e) {
                                    this.createInsOuts(1, 0),
                                        (this._shaper = new t.WaveShaper(Math.pow(2, 16))),
                                        (this._multiply = new t.Multiply()),
                                        (this._subtract = this.output = new t.Subtract()),
                                        (this._modSignal = new t.Signal(e)),
                                        this.input.fan(this._shaper, this._subtract),
                                        this._modSignal.connect(this._multiply, 0, 0),
                                        this._shaper.connect(this._multiply, 0, 1),
                                        this._multiply.connect(this._subtract, 0, 1),
                                        this._setWaveShaper(e);
                                }),
                                t.extend(t.Modulo, t.SignalBase),
                                (t.Modulo.prototype._setWaveShaper = function (t) {
                                    this._shaper.setMap(function (e) {
                                        return Math.floor((e + 1e-4) / t);
                                    });
                                }),
                                Object.defineProperty(t.Modulo.prototype, "value", {
                                    get: function () {
                                        return this._modSignal.value;
                                    },
                                    set: function (t) {
                                        (this._modSignal.value = t), this._setWaveShaper(t);
                                    },
                                }),
                                (t.Modulo.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this._shaper.dispose(),
                                        (this._shaper = null),
                                        this._multiply.dispose(),
                                        (this._multiply = null),
                                        this._subtract.dispose(),
                                        (this._subtract = null),
                                        this._modSignal.dispose(),
                                        (this._modSignal = null),
                                        this
                                    );
                                }),
                                t.Modulo
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.AudioToGain = function () {
                                    this._norm = this.input = this.output = new t.WaveShaper(function (t) {
                                        return (t + 1) / 2;
                                    });
                                }),
                                t.extend(t.AudioToGain, t.SignalBase),
                                (t.AudioToGain.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._norm.dispose(), (this._norm = null), this;
                                }),
                                t.AudioToGain
                            );
                        }),
                        t(function (t) {
                            function e(t, e, i) {
                                var n = new t();
                                return i._eval(e[0]).connect(n, 0, 0), i._eval(e[1]).connect(n, 0, 1), n;
                            }
                            function i(t, e, i) {
                                var n = new t();
                                return i._eval(e[0]).connect(n, 0, 0), n;
                            }
                            function n(t) {
                                return t ? parseFloat(t) : void 0;
                            }
                            function s(t) {
                                return t && t.args ? parseFloat(t.args) : void 0;
                            }
                            return (
                                (t.Expr = function () {
                                    var t = this._replacements(Array.prototype.slice.call(arguments)),
                                        e = this._parseInputs(t);
                                    (this._nodes = []), (this.input = new Array(e));
                                    for (var i = 0; i < e; i++) this.input[i] = this.context.createGain();
                                    var n,
                                        s = this._parseTree(t);
                                    try {
                                        n = this._eval(s);
                                    } catch (e) {
                                        throw (this._disposeNodes(), new Error("Tone.Expr: Could evaluate expression: " + t));
                                    }
                                    this.output = n;
                                }),
                                t.extend(t.Expr, t.SignalBase),
                                (t.Expr._Expressions = {
                                    value: {
                                        signal: {
                                            regexp: /^\d+\.\d+|^\d+/,
                                            method: function (e) {
                                                return new t.Signal(n(e));
                                            },
                                        },
                                        input: {
                                            regexp: /^\$\d/,
                                            method: function (t, e) {
                                                return e.input[n(t.substr(1))];
                                            },
                                        },
                                    },
                                    glue: { "(": { regexp: /^\(/ }, ")": { regexp: /^\)/ }, ",": { regexp: /^,/ } },
                                    func: {
                                        abs: { regexp: /^abs/, method: i.bind(this, t.Abs) },
                                        mod: {
                                            regexp: /^mod/,
                                            method: function (e, i) {
                                                var n = s(e[1]),
                                                    o = new t.Modulo(n);
                                                return i._eval(e[0]).connect(o), o;
                                            },
                                        },
                                        pow: {
                                            regexp: /^pow/,
                                            method: function (e, i) {
                                                var n = s(e[1]),
                                                    o = new t.Pow(n);
                                                return i._eval(e[0]).connect(o), o;
                                            },
                                        },
                                        a2g: {
                                            regexp: /^a2g/,
                                            method: function (e, i) {
                                                var n = new t.AudioToGain();
                                                return i._eval(e[0]).connect(n), n;
                                            },
                                        },
                                    },
                                    binary: {
                                        "+": { regexp: /^\+/, precedence: 1, method: e.bind(this, t.Add) },
                                        "-": {
                                            regexp: /^\-/,
                                            precedence: 1,
                                            method: function (n, s) {
                                                return 1 === n.length ? i(t.Negate, n, s) : e(t.Subtract, n, s);
                                            },
                                        },
                                        "*": { regexp: /^\*/, precedence: 0, method: e.bind(this, t.Multiply) },
                                    },
                                    unary: { "-": { regexp: /^\-/, method: i.bind(this, t.Negate) }, "!": { regexp: /^\!/, method: i.bind(this, t.NOT) } },
                                }),
                                (t.Expr.prototype._parseInputs = function (t) {
                                    var e = t.match(/\$\d/g),
                                        i = 0;
                                    if (null !== e)
                                        for (var n = 0; n < e.length; n++) {
                                            var s = parseInt(e[n].substr(1)) + 1;
                                            i = Math.max(i, s);
                                        }
                                    return i;
                                }),
                                (t.Expr.prototype._replacements = function (t) {
                                    for (var e = t.shift(), i = 0; i < t.length; i++) e = e.replace(/\%/i, t[i]);
                                    return e;
                                }),
                                (t.Expr.prototype._tokenize = function (e) {
                                    for (var i = -1, n = []; e.length > 0; ) {
                                        var s = (function (e) {
                                            for (var i in t.Expr._Expressions) {
                                                var n = t.Expr._Expressions[i];
                                                for (var s in n) {
                                                    var o = n[s],
                                                        r = o.regexp,
                                                        a = e.match(r);
                                                    if (null !== a) return { type: i, value: a[0], method: o.method };
                                                }
                                            }
                                            throw new SyntaxError("Tone.Expr: Unexpected token " + e);
                                        })((e = e.trim()));
                                        n.push(s), (e = e.substr(s.value.length));
                                    }
                                    return {
                                        next: function () {
                                            return n[++i];
                                        },
                                        peek: function () {
                                            return n[i + 1];
                                        },
                                    };
                                }),
                                (t.Expr.prototype._parseTree = function (e) {
                                    function i(t, e) {
                                        return !u(t) && "glue" === t.type && t.value === e;
                                    }
                                    function n(e, i, n) {
                                        var s = t.Expr._Expressions[i];
                                        if (!u(e))
                                            for (var o in s) {
                                                var r = s[o];
                                                if (r.regexp.test(e.value)) {
                                                    if (u(n)) return !0;
                                                    if (r.precedence === n) return !0;
                                                }
                                            }
                                        return !1;
                                    }
                                    function s(t) {
                                        u(t) && (t = 5);
                                        var e;
                                        e = t < 0 ? o() : s(t - 1);
                                        for (var i = l.peek(); n(i, "binary", t); ) (e = { operator: (i = l.next()).value, method: i.method, args: [e, s(t - 1)] }), (i = l.peek());
                                        return e;
                                    }
                                    function o() {
                                        var t, e;
                                        return (t = l.peek()), n(t, "unary") ? ((t = l.next()), (e = o()), { operator: t.value, method: t.method, args: [e] }) : r();
                                    }
                                    function r() {
                                        var t, e;
                                        if (((t = l.peek()), u(t))) throw new SyntaxError("Tone.Expr: Unexpected termination of expression");
                                        if ("func" === t.type) return (t = l.next()), a(t);
                                        if ("value" === t.type) return (t = l.next()), { method: t.method, args: t.value };
                                        if (i(t, "(")) {
                                            if ((l.next(), (e = s()), (t = l.next()), !i(t, ")"))) throw new SyntaxError("Expected )");
                                            return e;
                                        }
                                        throw new SyntaxError("Tone.Expr: Parse error, cannot process token " + t.value);
                                    }
                                    function a(t) {
                                        var e,
                                            n = [];
                                        if (((e = l.next()), !i(e, "("))) throw new SyntaxError('Tone.Expr: Expected ( in a function call "' + t.value + '"');
                                        if (((e = l.peek()), i(e, ")") || (n = h()), (e = l.next()), !i(e, ")"))) throw new SyntaxError('Tone.Expr: Expected ) in a function call "' + t.value + '"');
                                        return { method: t.method, args: n, name: name };
                                    }
                                    function h() {
                                        for (var t, e, n = []; ; ) {
                                            if (((e = s()), u(e))) break;
                                            if ((n.push(e), (t = l.peek()), !i(t, ","))) break;
                                            l.next();
                                        }
                                        return n;
                                    }
                                    var l = this._tokenize(e),
                                        u = this.isUndef.bind(this);
                                    return s();
                                }),
                                (t.Expr.prototype._eval = function (t) {
                                    if (!this.isUndef(t)) {
                                        var e = t.method(t.args, this);
                                        return this._nodes.push(e), e;
                                    }
                                }),
                                (t.Expr.prototype._disposeNodes = function () {
                                    for (var t = 0; t < this._nodes.length; t++) {
                                        var e = this._nodes[t];
                                        this.isFunction(e.dispose) ? e.dispose() : this.isFunction(e.disconnect) && e.disconnect(), (e = null), (this._nodes[t] = null);
                                    }
                                    this._nodes = null;
                                }),
                                (t.Expr.prototype.dispose = function () {
                                    t.prototype.dispose.call(this), this._disposeNodes();
                                }),
                                t.Expr
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.EqualPowerGain = function () {
                                    this._eqPower = this.input = this.output = new t.WaveShaper(
                                        function (t) {
                                            return Math.abs(t) < 0.001 ? 0 : this.equalPowerScale(t);
                                        }.bind(this),
                                        4096
                                    );
                                }),
                                t.extend(t.EqualPowerGain, t.SignalBase),
                                (t.EqualPowerGain.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._eqPower.dispose(), (this._eqPower = null), this;
                                }),
                                t.EqualPowerGain
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.CrossFade = function (e) {
                                    this.createInsOuts(2, 1),
                                        (this.a = this.input[0] = new t.Gain()),
                                        (this.b = this.input[1] = new t.Gain()),
                                        (this.fade = new t.Signal(this.defaultArg(e, 0.5), t.Type.NormalRange)),
                                        (this._equalPowerA = new t.EqualPowerGain()),
                                        (this._equalPowerB = new t.EqualPowerGain()),
                                        (this._invert = new t.Expr("1 - $0")),
                                        this.a.connect(this.output),
                                        this.b.connect(this.output),
                                        this.fade.chain(this._equalPowerB, this.b.gain),
                                        this.fade.chain(this._invert, this._equalPowerA, this.a.gain),
                                        this._readOnly("fade");
                                }),
                                t.extend(t.CrossFade),
                                (t.CrossFade.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this._writable("fade"),
                                        this._equalPowerA.dispose(),
                                        (this._equalPowerA = null),
                                        this._equalPowerB.dispose(),
                                        (this._equalPowerB = null),
                                        this.fade.dispose(),
                                        (this.fade = null),
                                        this._invert.dispose(),
                                        (this._invert = null),
                                        this.a.dispose(),
                                        (this.a = null),
                                        this.b.dispose(),
                                        (this.b = null),
                                        this
                                    );
                                }),
                                t.CrossFade
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Filter = function () {
                                    this.createInsOuts(1, 1);
                                    var e = this.optionsObject(arguments, ["frequency", "type", "rolloff"], t.Filter.defaults);
                                    (this._filters = []),
                                        (this.frequency = new t.Signal(e.frequency, t.Type.Frequency)),
                                        (this.detune = new t.Signal(0, t.Type.Cents)),
                                        (this.gain = new t.Signal({ value: e.gain, convert: !1 })),
                                        (this.Q = new t.Signal(e.Q)),
                                        (this._type = e.type),
                                        (this._rolloff = e.rolloff),
                                        (this.rolloff = e.rolloff),
                                        this._readOnly(["detune", "frequency", "gain", "Q"]);
                                }),
                                t.extend(t.Filter),
                                (t.Filter.defaults = { type: "lowpass", frequency: 350, rolloff: -12, Q: 1, gain: 0 }),
                                Object.defineProperty(t.Filter.prototype, "type", {
                                    get: function () {
                                        return this._type;
                                    },
                                    set: function (t) {
                                        if (-1 === ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "notch", "allpass", "peaking"].indexOf(t)) throw new TypeError("Tone.Filter: invalid type " + t);
                                        this._type = t;
                                        for (var e = 0; e < this._filters.length; e++) this._filters[e].type = t;
                                    },
                                }),
                                Object.defineProperty(t.Filter.prototype, "rolloff", {
                                    get: function () {
                                        return this._rolloff;
                                    },
                                    set: function (t) {
                                        t = parseInt(t, 10);
                                        var e = [-12, -24, -48, -96].indexOf(t);
                                        if (-1 === e) throw new RangeError("Tone.Filter: rolloff can only be -12, -24, -48 or -96");
                                        (e += 1), (this._rolloff = t), this.input.disconnect();
                                        for (var i = 0; i < this._filters.length; i++) this._filters[i].disconnect(), (this._filters[i] = null);
                                        this._filters = new Array(e);
                                        for (var n = 0; n < e; n++) {
                                            var s = this.context.createBiquadFilter();
                                            (s.type = this._type), this.frequency.connect(s.frequency), this.detune.connect(s.detune), this.Q.connect(s.Q), this.gain.connect(s.gain), (this._filters[n] = s);
                                        }
                                        var o = [this.input].concat(this._filters).concat([this.output]);
                                        this.connectSeries.apply(this, o);
                                    },
                                }),
                                (t.Filter.prototype.dispose = function () {
                                    t.prototype.dispose.call(this);
                                    for (var e = 0; e < this._filters.length; e++) this._filters[e].disconnect(), (this._filters[e] = null);
                                    return (
                                        (this._filters = null),
                                        this._writable(["detune", "frequency", "gain", "Q"]),
                                        this.frequency.dispose(),
                                        this.Q.dispose(),
                                        (this.frequency = null),
                                        (this.Q = null),
                                        this.detune.dispose(),
                                        (this.detune = null),
                                        this.gain.dispose(),
                                        (this.gain = null),
                                        this
                                    );
                                }),
                                t.Filter
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.MultibandSplit = function () {
                                    var e = this.optionsObject(arguments, ["lowFrequency", "highFrequency"], t.MultibandSplit.defaults);
                                    (this.input = new t.Gain()),
                                        (this.output = new Array(3)),
                                        (this.low = this.output[0] = new t.Filter(0, "lowpass")),
                                        (this._lowMidFilter = new t.Filter(0, "highpass")),
                                        (this.mid = this.output[1] = new t.Filter(0, "lowpass")),
                                        (this.high = this.output[2] = new t.Filter(0, "highpass")),
                                        (this.lowFrequency = new t.Signal(e.lowFrequency, t.Type.Frequency)),
                                        (this.highFrequency = new t.Signal(e.highFrequency, t.Type.Frequency)),
                                        (this.Q = new t.Signal(e.Q)),
                                        this.input.fan(this.low, this.high),
                                        this.input.chain(this._lowMidFilter, this.mid),
                                        this.lowFrequency.connect(this.low.frequency),
                                        this.lowFrequency.connect(this._lowMidFilter.frequency),
                                        this.highFrequency.connect(this.mid.frequency),
                                        this.highFrequency.connect(this.high.frequency),
                                        this.Q.connect(this.low.Q),
                                        this.Q.connect(this._lowMidFilter.Q),
                                        this.Q.connect(this.mid.Q),
                                        this.Q.connect(this.high.Q),
                                        this._readOnly(["high", "mid", "low", "highFrequency", "lowFrequency"]);
                                }),
                                t.extend(t.MultibandSplit),
                                (t.MultibandSplit.defaults = { lowFrequency: 400, highFrequency: 2500, Q: 1 }),
                                (t.MultibandSplit.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this._writable(["high", "mid", "low", "highFrequency", "lowFrequency"]),
                                        this.low.dispose(),
                                        (this.low = null),
                                        this._lowMidFilter.dispose(),
                                        (this._lowMidFilter = null),
                                        this.mid.dispose(),
                                        (this.mid = null),
                                        this.high.dispose(),
                                        (this.high = null),
                                        this.lowFrequency.dispose(),
                                        (this.lowFrequency = null),
                                        this.highFrequency.dispose(),
                                        (this.highFrequency = null),
                                        this.Q.dispose(),
                                        (this.Q = null),
                                        this
                                    );
                                }),
                                t.MultibandSplit
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.EQ3 = function () {
                                    var e = this.optionsObject(arguments, ["low", "mid", "high"], t.EQ3.defaults);
                                    (this.output = new t.Gain()),
                                        (this._multibandSplit = this.input = new t.MultibandSplit({ lowFrequency: e.lowFrequency, highFrequency: e.highFrequency })),
                                        (this._lowGain = new t.Gain(e.low, t.Type.Decibels)),
                                        (this._midGain = new t.Gain(e.mid, t.Type.Decibels)),
                                        (this._highGain = new t.Gain(e.high, t.Type.Decibels)),
                                        (this.low = this._lowGain.gain),
                                        (this.mid = this._midGain.gain),
                                        (this.high = this._highGain.gain),
                                        (this.Q = this._multibandSplit.Q),
                                        (this.lowFrequency = this._multibandSplit.lowFrequency),
                                        (this.highFrequency = this._multibandSplit.highFrequency),
                                        this._multibandSplit.low.chain(this._lowGain, this.output),
                                        this._multibandSplit.mid.chain(this._midGain, this.output),
                                        this._multibandSplit.high.chain(this._highGain, this.output),
                                        this._readOnly(["low", "mid", "high", "lowFrequency", "highFrequency"]);
                                }),
                                t.extend(t.EQ3),
                                (t.EQ3.defaults = { low: 0, mid: 0, high: 0, lowFrequency: 400, highFrequency: 2500 }),
                                (t.EQ3.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this._writable(["low", "mid", "high", "lowFrequency", "highFrequency"]),
                                        this._multibandSplit.dispose(),
                                        (this._multibandSplit = null),
                                        (this.lowFrequency = null),
                                        (this.highFrequency = null),
                                        this._lowGain.dispose(),
                                        (this._lowGain = null),
                                        this._midGain.dispose(),
                                        (this._midGain = null),
                                        this._highGain.dispose(),
                                        (this._highGain = null),
                                        (this.low = null),
                                        (this.mid = null),
                                        (this.high = null),
                                        (this.Q = null),
                                        this
                                    );
                                }),
                                t.EQ3
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Scale = function (e, i) {
                                    (this._outputMin = this.defaultArg(e, 0)),
                                        (this._outputMax = this.defaultArg(i, 1)),
                                        (this._scale = this.input = new t.Multiply(1)),
                                        (this._add = this.output = new t.Add(0)),
                                        this._scale.connect(this._add),
                                        this._setRange();
                                }),
                                t.extend(t.Scale, t.SignalBase),
                                Object.defineProperty(t.Scale.prototype, "min", {
                                    get: function () {
                                        return this._outputMin;
                                    },
                                    set: function (t) {
                                        (this._outputMin = t), this._setRange();
                                    },
                                }),
                                Object.defineProperty(t.Scale.prototype, "max", {
                                    get: function () {
                                        return this._outputMax;
                                    },
                                    set: function (t) {
                                        (this._outputMax = t), this._setRange();
                                    },
                                }),
                                (t.Scale.prototype._setRange = function () {
                                    (this._add.value = this._outputMin), (this._scale.value = this._outputMax - this._outputMin);
                                }),
                                (t.Scale.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._add.dispose(), (this._add = null), this._scale.dispose(), (this._scale = null), this;
                                }),
                                t.Scale
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.ScaleExp = function (e, i, n) {
                                    (this._scale = this.output = new t.Scale(e, i)), (this._exp = this.input = new t.Pow(this.defaultArg(n, 2))), this._exp.connect(this._scale);
                                }),
                                t.extend(t.ScaleExp, t.SignalBase),
                                Object.defineProperty(t.ScaleExp.prototype, "exponent", {
                                    get: function () {
                                        return this._exp.value;
                                    },
                                    set: function (t) {
                                        this._exp.value = t;
                                    },
                                }),
                                Object.defineProperty(t.ScaleExp.prototype, "min", {
                                    get: function () {
                                        return this._scale.min;
                                    },
                                    set: function (t) {
                                        this._scale.min = t;
                                    },
                                }),
                                Object.defineProperty(t.ScaleExp.prototype, "max", {
                                    get: function () {
                                        return this._scale.max;
                                    },
                                    set: function (t) {
                                        this._scale.max = t;
                                    },
                                }),
                                (t.ScaleExp.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._scale.dispose(), (this._scale = null), this._exp.dispose(), (this._exp = null), this;
                                }),
                                t.ScaleExp
                            );
                        }),
                        t(function (t) {
                            return (
                                window.DelayNode && !AudioContext.prototype.createDelay && (AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode),
                                (t.Delay = function () {
                                    var e = this.optionsObject(arguments, ["delayTime", "maxDelay"], t.Delay.defaults);
                                    (this._delayNode = this.input = this.output = this.context.createDelay(this.toSeconds(e.maxDelay))),
                                        (this.delayTime = new t.Param({ param: this._delayNode.delayTime, units: t.Type.Time, value: e.delayTime })),
                                        this._readOnly("delayTime");
                                }),
                                t.extend(t.Delay),
                                (t.Delay.defaults = { maxDelay: 1, delayTime: 0 }),
                                (t.Delay.prototype.dispose = function () {
                                    return t.Param.prototype.dispose.call(this), this._delayNode.disconnect(), (this._delayNode = null), this._writable("delayTime"), (this.delayTime = null), this;
                                }),
                                t.Delay
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.FeedbackCombFilter = function () {
                                    var e = this.optionsObject(arguments, ["delayTime", "resonance"], t.FeedbackCombFilter.defaults);
                                    (this._delay = this.input = this.output = new t.Delay(e.delayTime)),
                                        (this.delayTime = this._delay.delayTime),
                                        (this._feedback = new t.Gain(e.resonance, t.Type.NormalRange)),
                                        (this.resonance = this._feedback.gain),
                                        this._delay.chain(this._feedback, this._delay),
                                        this._readOnly(["resonance", "delayTime"]);
                                }),
                                t.extend(t.FeedbackCombFilter),
                                (t.FeedbackCombFilter.defaults = { delayTime: 0.1, resonance: 0.5 }),
                                (t.FeedbackCombFilter.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this._writable(["resonance", "delayTime"]),
                                        this._delay.dispose(),
                                        (this._delay = null),
                                        (this.delayTime = null),
                                        this._feedback.dispose(),
                                        (this._feedback = null),
                                        (this.resonance = null),
                                        this
                                    );
                                }),
                                t.FeedbackCombFilter
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Follower = function () {
                                    this.createInsOuts(1, 1);
                                    var e = this.optionsObject(arguments, ["attack", "release"], t.Follower.defaults);
                                    (this._abs = new t.Abs()),
                                        (this._filter = this.context.createBiquadFilter()),
                                        (this._filter.type = "lowpass"),
                                        (this._filter.frequency.value = 0),
                                        (this._filter.Q.value = -100),
                                        (this._frequencyValues = new t.WaveShaper()),
                                        (this._sub = new t.Subtract()),
                                        (this._delay = new t.Delay(this.blockTime)),
                                        (this._mult = new t.Multiply(1e4)),
                                        (this._attack = e.attack),
                                        (this._release = e.release),
                                        this.input.chain(this._abs, this._filter, this.output),
                                        this._abs.connect(this._sub, 0, 1),
                                        this._filter.chain(this._delay, this._sub),
                                        this._sub.chain(this._mult, this._frequencyValues, this._filter.frequency),
                                        this._setAttackRelease(this._attack, this._release);
                                }),
                                t.extend(t.Follower),
                                (t.Follower.defaults = { attack: 0.05, release: 0.5 }),
                                (t.Follower.prototype._setAttackRelease = function (e, i) {
                                    var n = this.blockTime;
                                    (e = t.Time(e).toFrequency()),
                                        (i = t.Time(i).toFrequency()),
                                        (e = Math.max(e, n)),
                                        (i = Math.max(i, n)),
                                        this._frequencyValues.setMap(function (t) {
                                            return t <= 0 ? e : i;
                                        });
                                }),
                                Object.defineProperty(t.Follower.prototype, "attack", {
                                    get: function () {
                                        return this._attack;
                                    },
                                    set: function (t) {
                                        (this._attack = t), this._setAttackRelease(this._attack, this._release);
                                    },
                                }),
                                Object.defineProperty(t.Follower.prototype, "release", {
                                    get: function () {
                                        return this._release;
                                    },
                                    set: function (t) {
                                        (this._release = t), this._setAttackRelease(this._attack, this._release);
                                    },
                                }),
                                (t.Follower.prototype.connect = t.Signal.prototype.connect),
                                (t.Follower.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this._filter.disconnect(),
                                        (this._filter = null),
                                        this._frequencyValues.disconnect(),
                                        (this._frequencyValues = null),
                                        this._delay.dispose(),
                                        (this._delay = null),
                                        this._sub.disconnect(),
                                        (this._sub = null),
                                        this._abs.dispose(),
                                        (this._abs = null),
                                        this._mult.dispose(),
                                        (this._mult = null),
                                        (this._curve = null),
                                        this
                                    );
                                }),
                                t.Follower
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.ScaledEnvelope = function () {
                                    var e = this.optionsObject(arguments, ["attack", "decay", "sustain", "release"], t.Envelope.defaults);
                                    t.Envelope.call(this, e),
                                        (e = this.defaultArg(e, t.ScaledEnvelope.defaults)),
                                        (this._exp = this.output = new t.Pow(e.exponent)),
                                        (this._scale = this.output = new t.Scale(e.min, e.max)),
                                        this._sig.chain(this._exp, this._scale);
                                }),
                                t.extend(t.ScaledEnvelope, t.Envelope),
                                (t.ScaledEnvelope.defaults = { min: 0, max: 1, exponent: 1 }),
                                Object.defineProperty(t.ScaledEnvelope.prototype, "min", {
                                    get: function () {
                                        return this._scale.min;
                                    },
                                    set: function (t) {
                                        this._scale.min = t;
                                    },
                                }),
                                Object.defineProperty(t.ScaledEnvelope.prototype, "max", {
                                    get: function () {
                                        return this._scale.max;
                                    },
                                    set: function (t) {
                                        this._scale.max = t;
                                    },
                                }),
                                Object.defineProperty(t.ScaledEnvelope.prototype, "exponent", {
                                    get: function () {
                                        return this._exp.value;
                                    },
                                    set: function (t) {
                                        this._exp.value = t;
                                    },
                                }),
                                (t.ScaledEnvelope.prototype.dispose = function () {
                                    return t.Envelope.prototype.dispose.call(this), this._scale.dispose(), (this._scale = null), this._exp.dispose(), (this._exp = null), this;
                                }),
                                t.ScaledEnvelope
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.FrequencyEnvelope = function () {
                                    var e = this.optionsObject(arguments, ["attack", "decay", "sustain", "release"], t.Envelope.defaults);
                                    t.ScaledEnvelope.call(this, e), (e = this.defaultArg(e, t.FrequencyEnvelope.defaults)), (this._octaves = e.octaves), (this.baseFrequency = e.baseFrequency), (this.octaves = e.octaves);
                                }),
                                t.extend(t.FrequencyEnvelope, t.Envelope),
                                (t.FrequencyEnvelope.defaults = { baseFrequency: 200, octaves: 4, exponent: 2 }),
                                Object.defineProperty(t.FrequencyEnvelope.prototype, "baseFrequency", {
                                    get: function () {
                                        return this._scale.min;
                                    },
                                    set: function (t) {
                                        (this._scale.min = this.toFrequency(t)), (this.octaves = this._octaves);
                                    },
                                }),
                                Object.defineProperty(t.FrequencyEnvelope.prototype, "octaves", {
                                    get: function () {
                                        return this._octaves;
                                    },
                                    set: function (t) {
                                        (this._octaves = t), (this._scale.max = this.baseFrequency * Math.pow(2, t));
                                    },
                                }),
                                Object.defineProperty(t.FrequencyEnvelope.prototype, "exponent", {
                                    get: function () {
                                        return this._exp.value;
                                    },
                                    set: function (t) {
                                        this._exp.value = t;
                                    },
                                }),
                                (t.FrequencyEnvelope.prototype.dispose = function () {
                                    return t.ScaledEnvelope.prototype.dispose.call(this), this;
                                }),
                                t.FrequencyEnvelope
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Gate = function () {
                                    this.createInsOuts(1, 1);
                                    var e = this.optionsObject(arguments, ["threshold", "attack", "release"], t.Gate.defaults);
                                    (this._follower = new t.Follower(e.attack, e.release)),
                                        (this._gt = new t.GreaterThan(this.dbToGain(e.threshold))),
                                        this.input.connect(this.output),
                                        this.input.chain(this._gt, this._follower, this.output.gain);
                                }),
                                t.extend(t.Gate),
                                (t.Gate.defaults = { attack: 0.1, release: 0.1, threshold: -40 }),
                                Object.defineProperty(t.Gate.prototype, "threshold", {
                                    get: function () {
                                        return this.gainToDb(this._gt.value);
                                    },
                                    set: function (t) {
                                        this._gt.value = this.dbToGain(t);
                                    },
                                }),
                                Object.defineProperty(t.Gate.prototype, "attack", {
                                    get: function () {
                                        return this._follower.attack;
                                    },
                                    set: function (t) {
                                        this._follower.attack = t;
                                    },
                                }),
                                Object.defineProperty(t.Gate.prototype, "release", {
                                    get: function () {
                                        return this._follower.release;
                                    },
                                    set: function (t) {
                                        this._follower.release = t;
                                    },
                                }),
                                (t.Gate.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._follower.dispose(), this._gt.dispose(), (this._follower = null), (this._gt = null), this;
                                }),
                                t.Gate
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.TimelineState = function (e) {
                                    t.Timeline.call(this), (this._initial = e);
                                }),
                                t.extend(t.TimelineState, t.Timeline),
                                (t.TimelineState.prototype.getValueAtTime = function (t) {
                                    var e = this.get(t);
                                    return null !== e ? e.state : this._initial;
                                }),
                                (t.TimelineState.prototype.setStateAtTime = function (t, e) {
                                    this.add({ state: t, time: e });
                                }),
                                t.TimelineState
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Clock = function () {
                                    t.Emitter.call(this);
                                    var e = this.optionsObject(arguments, ["callback", "frequency"], t.Clock.defaults);
                                    (this.callback = e.callback),
                                        (this._nextTick = 0),
                                        (this._lastState = t.State.Stopped),
                                        (this.frequency = new t.TimelineSignal(e.frequency, t.Type.Frequency)),
                                        this._readOnly("frequency"),
                                        (this.ticks = 0),
                                        (this._state = new t.TimelineState(t.State.Stopped)),
                                        (this._boundLoop = this._loop.bind(this)),
                                        this.context.on("tick", this._boundLoop);
                                }),
                                t.extend(t.Clock, t.Emitter),
                                (t.Clock.defaults = { callback: t.noOp, frequency: 1, lookAhead: "auto" }),
                                Object.defineProperty(t.Clock.prototype, "state", {
                                    get: function () {
                                        return this._state.getValueAtTime(this.now());
                                    },
                                }),
                                (t.Clock.prototype.start = function (e, i) {
                                    return (e = this.toSeconds(e)), this._state.getValueAtTime(e) !== t.State.Started && this._state.add({ state: t.State.Started, time: e, offset: i }), this;
                                }),
                                (t.Clock.prototype.stop = function (e) {
                                    return (e = this.toSeconds(e)), this._state.cancel(e), this._state.setStateAtTime(t.State.Stopped, e), this;
                                }),
                                (t.Clock.prototype.pause = function (e) {
                                    return (e = this.toSeconds(e)), this._state.getValueAtTime(e) === t.State.Started && this._state.setStateAtTime(t.State.Paused, e), this;
                                }),
                                (t.Clock.prototype._loop = function () {
                                    for (var e = this.now() + this.context.lookAhead + this.context.updateInterval + 2 * this.context.lag; e > this._nextTick && this._state; ) {
                                        var i = this._state.getValueAtTime(this._nextTick);
                                        if (i !== this._lastState) {
                                            this._lastState = i;
                                            var n = this._state.get(this._nextTick);
                                            i === t.State.Started
                                                ? ((this._nextTick = n.time), this.isUndef(n.offset) || (this.ticks = n.offset), this.emit("start", n.time, this.ticks))
                                                : i === t.State.Stopped
                                                ? ((this.ticks = 0), this.emit("stop", n.time))
                                                : i === t.State.Paused && this.emit("pause", n.time);
                                        }
                                        var s = this._nextTick;
                                        this.frequency && ((this._nextTick += 1 / this.frequency.getValueAtTime(this._nextTick)), i === t.State.Started && (this.callback(s), this.ticks++));
                                    }
                                }),
                                (t.Clock.prototype.getStateAtTime = function (t) {
                                    return (t = this.toSeconds(t)), this._state.getValueAtTime(t);
                                }),
                                (t.Clock.prototype.dispose = function () {
                                    t.Emitter.prototype.dispose.call(this),
                                        this.context.off("tick", this._boundLoop),
                                        this._writable("frequency"),
                                        this.frequency.dispose(),
                                        (this.frequency = null),
                                        (this._boundLoop = null),
                                        (this._nextTick = 1 / 0),
                                        (this.callback = null),
                                        this._state.dispose(),
                                        (this._state = null);
                                }),
                                t.Clock
                            );
                        }),
                        t(function (t) {
                            (t.IntervalTimeline = function () {
                                (this._root = null), (this._length = 0);
                            }),
                                t.extend(t.IntervalTimeline),
                                (t.IntervalTimeline.prototype.add = function (t) {
                                    if (this.isUndef(t.time) || this.isUndef(t.duration)) throw new Error("Tone.IntervalTimeline: events must have time and duration parameters");
                                    var i = new e(t.time, t.time + t.duration, t);
                                    for (null === this._root ? (this._root = i) : this._root.insert(i), this._length++; null !== i; ) i.updateHeight(), i.updateMax(), this._rebalance(i), (i = i.parent);
                                    return this;
                                }),
                                (t.IntervalTimeline.prototype.remove = function (t) {
                                    if (null !== this._root) {
                                        var e = [];
                                        this._root.search(t.time, e);
                                        for (var i = 0; i < e.length; i++) {
                                            var n = e[i];
                                            if (n.event === t) {
                                                this._removeNode(n), this._length--;
                                                break;
                                            }
                                        }
                                    }
                                    return this;
                                }),
                                Object.defineProperty(t.IntervalTimeline.prototype, "length", {
                                    get: function () {
                                        return this._length;
                                    },
                                }),
                                (t.IntervalTimeline.prototype.cancel = function (t) {
                                    return (
                                        this.forEachAfter(
                                            t,
                                            function (t) {
                                                this.remove(t);
                                            }.bind(this)
                                        ),
                                        this
                                    );
                                }),
                                (t.IntervalTimeline.prototype._setRoot = function (t) {
                                    (this._root = t), null !== this._root && (this._root.parent = null);
                                }),
                                (t.IntervalTimeline.prototype._replaceNodeInParent = function (t, e) {
                                    null !== t.parent ? (t.isLeftChild() ? (t.parent.left = e) : (t.parent.right = e), this._rebalance(t.parent)) : this._setRoot(e);
                                }),
                                (t.IntervalTimeline.prototype._removeNode = function (t) {
                                    if (null === t.left && null === t.right) this._replaceNodeInParent(t, null);
                                    else if (null === t.right) this._replaceNodeInParent(t, t.left);
                                    else if (null === t.left) this._replaceNodeInParent(t, t.right);
                                    else {
                                        var e, i;
                                        if (t.getBalance() > 0)
                                            if (null === t.left.right) ((e = t.left).right = t.right), (i = e);
                                            else {
                                                for (e = t.left.right; null !== e.right; ) e = e.right;
                                                (e.parent.right = e.left), (i = e.parent), (e.left = t.left), (e.right = t.right);
                                            }
                                        else if (null === t.right.left) ((e = t.right).left = t.left), (i = e);
                                        else {
                                            for (e = t.right.left; null !== e.left; ) e = e.left;
                                            (e.parent = e.parent), (e.parent.left = e.right), (i = e.parent), (e.left = t.left), (e.right = t.right);
                                        }
                                        null !== t.parent ? (t.isLeftChild() ? (t.parent.left = e) : (t.parent.right = e)) : this._setRoot(e), this._rebalance(i);
                                    }
                                    t.dispose();
                                }),
                                (t.IntervalTimeline.prototype._rotateLeft = function (t) {
                                    var e = t.parent,
                                        i = t.isLeftChild(),
                                        n = t.right;
                                    (t.right = n.left), (n.left = t), null !== e ? (i ? (e.left = n) : (e.right = n)) : this._setRoot(n);
                                }),
                                (t.IntervalTimeline.prototype._rotateRight = function (t) {
                                    var e = t.parent,
                                        i = t.isLeftChild(),
                                        n = t.left;
                                    (t.left = n.right), (n.right = t), null !== e ? (i ? (e.left = n) : (e.right = n)) : this._setRoot(n);
                                }),
                                (t.IntervalTimeline.prototype._rebalance = function (t) {
                                    var e = t.getBalance();
                                    e > 1 ? (t.left.getBalance() < 0 ? this._rotateLeft(t.left) : this._rotateRight(t)) : e < -1 && (t.right.getBalance() > 0 ? this._rotateRight(t.right) : this._rotateLeft(t));
                                }),
                                (t.IntervalTimeline.prototype.get = function (t) {
                                    if (null !== this._root) {
                                        var e = [];
                                        if ((this._root.search(t, e), e.length > 0)) {
                                            for (var i = e[0], n = 1; n < e.length; n++) e[n].low > i.low && (i = e[n]);
                                            return i.event;
                                        }
                                    }
                                    return null;
                                }),
                                (t.IntervalTimeline.prototype.forEach = function (t) {
                                    if (null !== this._root) {
                                        var e = [];
                                        null !== this._root &&
                                            this._root.traverse(function (t) {
                                                e.push(t);
                                            });
                                        for (var i = 0; i < e.length; i++) {
                                            var n = e[i].event;
                                            n && t(n);
                                        }
                                    }
                                    return this;
                                }),
                                (t.IntervalTimeline.prototype.forEachAtTime = function (t, e) {
                                    if (null !== this._root) {
                                        var i = [];
                                        this._root.search(t, i);
                                        for (var n = i.length - 1; n >= 0; n--) {
                                            var s = i[n].event;
                                            s && e(s);
                                        }
                                    }
                                    return this;
                                }),
                                (t.IntervalTimeline.prototype.forEachAfter = function (t, e) {
                                    if (null !== this._root) {
                                        var i = [];
                                        this._root.searchAfter(t, i);
                                        for (var n = i.length - 1; n >= 0; n--) {
                                            var s = i[n].event;
                                            s && e(s);
                                        }
                                    }
                                    return this;
                                }),
                                (t.IntervalTimeline.prototype.dispose = function () {
                                    var t = [];
                                    null !== this._root &&
                                        this._root.traverse(function (e) {
                                            t.push(e);
                                        });
                                    for (var e = 0; e < t.length; e++) t[e].dispose();
                                    return (t = null), (this._root = null), this;
                                });
                            var e = function (t, e, i) {
                                (this.event = i), (this.low = t), (this.high = e), (this.max = this.high), (this._left = null), (this._right = null), (this.parent = null), (this.height = 0);
                            };
                            return (
                                (e.prototype.insert = function (t) {
                                    t.low <= this.low ? (null === this.left ? (this.left = t) : this.left.insert(t)) : null === this.right ? (this.right = t) : this.right.insert(t);
                                }),
                                (e.prototype.search = function (t, e) {
                                    t > this.max || (null !== this.left && this.left.search(t, e), this.low <= t && this.high > t && e.push(this), this.low > t || (null !== this.right && this.right.search(t, e)));
                                }),
                                (e.prototype.searchAfter = function (t, e) {
                                    this.low >= t && (e.push(this), null !== this.left && this.left.searchAfter(t, e)), null !== this.right && this.right.searchAfter(t, e);
                                }),
                                (e.prototype.traverse = function (t) {
                                    t(this), null !== this.left && this.left.traverse(t), null !== this.right && this.right.traverse(t);
                                }),
                                (e.prototype.updateHeight = function () {
                                    null !== this.left && null !== this.right
                                        ? (this.height = Math.max(this.left.height, this.right.height) + 1)
                                        : null !== this.right
                                        ? (this.height = this.right.height + 1)
                                        : null !== this.left
                                        ? (this.height = this.left.height + 1)
                                        : (this.height = 0);
                                }),
                                (e.prototype.updateMax = function () {
                                    (this.max = this.high), null !== this.left && (this.max = Math.max(this.max, this.left.max)), null !== this.right && (this.max = Math.max(this.max, this.right.max));
                                }),
                                (e.prototype.getBalance = function () {
                                    var t = 0;
                                    return null !== this.left && null !== this.right ? (t = this.left.height - this.right.height) : null !== this.left ? (t = this.left.height + 1) : null !== this.right && (t = -(this.right.height + 1)), t;
                                }),
                                (e.prototype.isLeftChild = function () {
                                    return null !== this.parent && this.parent.left === this;
                                }),
                                Object.defineProperty(e.prototype, "left", {
                                    get: function () {
                                        return this._left;
                                    },
                                    set: function (t) {
                                        (this._left = t), null !== t && (t.parent = this), this.updateHeight(), this.updateMax();
                                    },
                                }),
                                Object.defineProperty(e.prototype, "right", {
                                    get: function () {
                                        return this._right;
                                    },
                                    set: function (t) {
                                        (this._right = t), null !== t && (t.parent = this), this.updateHeight(), this.updateMax();
                                    },
                                }),
                                (e.prototype.dispose = function () {
                                    (this.parent = null), (this._left = null), (this._right = null), (this.event = null);
                                }),
                                t.IntervalTimeline
                            );
                        }),
                        t(function (t) {
                            (t.Transport = function () {
                                t.Emitter.call(this),
                                    (this.loop = !1),
                                    (this._loopStart = 0),
                                    (this._loopEnd = 0),
                                    (this._ppq = e.defaults.PPQ),
                                    (this._clock = new t.Clock({ callback: this._processTick.bind(this), frequency: 0 })),
                                    this._bindClockEvents(),
                                    (this.bpm = this._clock.frequency),
                                    (this.bpm._toUnits = this._toUnits.bind(this)),
                                    (this.bpm._fromUnits = this._fromUnits.bind(this)),
                                    (this.bpm.units = t.Type.BPM),
                                    (this.bpm.value = e.defaults.bpm),
                                    this._readOnly("bpm"),
                                    (this._timeSignature = e.defaults.timeSignature),
                                    (this._scheduledEvents = {}),
                                    (this._eventID = 0),
                                    (this._timeline = new t.Timeline()),
                                    (this._repeatedEvents = new t.IntervalTimeline()),
                                    (this._onceEvents = new t.Timeline()),
                                    (this._syncedSignals = []),
                                    (this._swingTicks = e.defaults.PPQ / 2),
                                    (this._swingAmount = 0);
                            }),
                                t.extend(t.Transport, t.Emitter),
                                (t.Transport.defaults = { bpm: 120, swing: 0, swingSubdivision: "8n", timeSignature: 4, loopStart: 0, loopEnd: "4m", PPQ: 192 }),
                                (t.Transport.prototype._processTick = function (e) {
                                    var i = this._clock.ticks;
                                    if (this._swingAmount > 0 && i % this._ppq != 0 && i % (2 * this._swingTicks) != 0) {
                                        var n = (i % (2 * this._swingTicks)) / (2 * this._swingTicks),
                                            s = Math.sin(n * Math.PI) * this._swingAmount;
                                        e += t.Time((2 * this._swingTicks) / 3, "i") * s;
                                    }
                                    this.loop && i === this._loopEnd && (this.emit("loopEnd", e), (this._clock.ticks = this._loopStart), (i = this._loopStart), this.emit("loopStart", e, this.seconds), this.emit("loop", e)),
                                        this._onceEvents.forEachBefore(
                                            i,
                                            function (t) {
                                                t.callback(e), delete this._scheduledEvents[t.id.toString()];
                                            }.bind(this)
                                        ),
                                        this._onceEvents.cancelBefore(i),
                                        this._timeline.forEachAtTime(i, function (t) {
                                            t.callback(e);
                                        }),
                                        this._repeatedEvents.forEachAtTime(i, function (t) {
                                            (i - t.time) % t.interval == 0 && t.callback(e);
                                        });
                                }),
                                (t.Transport.prototype.schedule = function (t, e) {
                                    var i = { time: this.toTicks(e), callback: t },
                                        n = this._eventID++;
                                    return (this._scheduledEvents[n.toString()] = { event: i, timeline: this._timeline }), this._timeline.add(i), n;
                                }),
                                (t.Transport.prototype.scheduleRepeat = function (t, e, i, n) {
                                    if (e <= 0) throw new Error("Tone.Transport: repeat events must have an interval larger than 0");
                                    var s = { time: this.toTicks(i), duration: this.toTicks(this.defaultArg(n, 1 / 0)), interval: this.toTicks(e), callback: t },
                                        o = this._eventID++;
                                    return (this._scheduledEvents[o.toString()] = { event: s, timeline: this._repeatedEvents }), this._repeatedEvents.add(s), o;
                                }),
                                (t.Transport.prototype.scheduleOnce = function (t, e) {
                                    var i = this._eventID++,
                                        n = { time: this.toTicks(e), callback: t, id: i };
                                    return (this._scheduledEvents[i.toString()] = { event: n, timeline: this._onceEvents }), this._onceEvents.add(n), i;
                                }),
                                (t.Transport.prototype.clear = function (t) {
                                    if (this._scheduledEvents.hasOwnProperty(t)) {
                                        var e = this._scheduledEvents[t.toString()];
                                        e.timeline.remove(e.event), delete this._scheduledEvents[t.toString()];
                                    }
                                    return this;
                                }),
                                (t.Transport.prototype.cancel = function (t) {
                                    return (t = this.defaultArg(t, 0)), (t = this.toTicks(t)), this._timeline.cancel(t), this._onceEvents.cancel(t), this._repeatedEvents.cancel(t), this;
                                }),
                                (t.Transport.prototype._bindClockEvents = function () {
                                    this._clock.on(
                                        "start",
                                        function (e, i) {
                                            (i = t.Time(this._clock.ticks, "i").toSeconds()), this.emit("start", e, i);
                                        }.bind(this)
                                    ),
                                        this._clock.on(
                                            "stop",
                                            function (t) {
                                                this.emit("stop", t);
                                            }.bind(this)
                                        ),
                                        this._clock.on(
                                            "pause",
                                            function (t) {
                                                this.emit("pause", t);
                                            }.bind(this)
                                        );
                                }),
                                Object.defineProperty(t.Transport.prototype, "state", {
                                    get: function () {
                                        return this._clock.getStateAtTime(this.now());
                                    },
                                }),
                                (t.Transport.prototype.start = function (t, e) {
                                    return this.isUndef(e) || (e = this.toTicks(e)), this._clock.start(t, e), this;
                                }),
                                (t.Transport.prototype.stop = function (t) {
                                    return this._clock.stop(t), this;
                                }),
                                (t.Transport.prototype.pause = function (t) {
                                    return this._clock.pause(t), this;
                                }),
                                Object.defineProperty(t.Transport.prototype, "timeSignature", {
                                    get: function () {
                                        return this._timeSignature;
                                    },
                                    set: function (t) {
                                        this.isArray(t) && (t = (t[0] / t[1]) * 4), (this._timeSignature = t);
                                    },
                                }),
                                Object.defineProperty(t.Transport.prototype, "loopStart", {
                                    get: function () {
                                        return t.TransportTime(this._loopStart, "i").toSeconds();
                                    },
                                    set: function (t) {
                                        this._loopStart = this.toTicks(t);
                                    },
                                }),
                                Object.defineProperty(t.Transport.prototype, "loopEnd", {
                                    get: function () {
                                        return t.TransportTime(this._loopEnd, "i").toSeconds();
                                    },
                                    set: function (t) {
                                        this._loopEnd = this.toTicks(t);
                                    },
                                }),
                                (t.Transport.prototype.setLoopPoints = function (t, e) {
                                    return (this.loopStart = t), (this.loopEnd = e), this;
                                }),
                                Object.defineProperty(t.Transport.prototype, "swing", {
                                    get: function () {
                                        return this._swingAmount;
                                    },
                                    set: function (t) {
                                        this._swingAmount = t;
                                    },
                                }),
                                Object.defineProperty(t.Transport.prototype, "swingSubdivision", {
                                    get: function () {
                                        return t.Time(this._swingTicks, "i").toNotation();
                                    },
                                    set: function (t) {
                                        this._swingTicks = this.toTicks(t);
                                    },
                                }),
                                Object.defineProperty(t.Transport.prototype, "position", {
                                    get: function () {
                                        return t.TransportTime(this.ticks, "i").toBarsBeatsSixteenths();
                                    },
                                    set: function (t) {
                                        var e = this.toTicks(t);
                                        this.ticks = e;
                                    },
                                }),
                                Object.defineProperty(t.Transport.prototype, "seconds", {
                                    get: function () {
                                        return t.TransportTime(this.ticks, "i").toSeconds();
                                    },
                                    set: function (t) {
                                        var e = this.toTicks(t);
                                        this.ticks = e;
                                    },
                                }),
                                Object.defineProperty(t.Transport.prototype, "progress", {
                                    get: function () {
                                        return this.loop ? (this.ticks - this._loopStart) / (this._loopEnd - this._loopStart) : 0;
                                    },
                                }),
                                Object.defineProperty(t.Transport.prototype, "ticks", {
                                    get: function () {
                                        return this._clock.ticks;
                                    },
                                    set: function (e) {
                                        if (this._clock.ticks !== e) {
                                            var i = this.now();
                                            this.state === t.State.Started ? (this.emit("stop", i), (this._clock.ticks = e), this.emit("start", i, this.seconds)) : (this._clock.ticks = e);
                                        }
                                    },
                                }),
                                Object.defineProperty(t.Transport.prototype, "PPQ", {
                                    get: function () {
                                        return this._ppq;
                                    },
                                    set: function (t) {
                                        var e = this.bpm.value;
                                        (this._ppq = t), (this.bpm.value = e);
                                    },
                                }),
                                Object.defineProperty(t.Transport.prototype, "latencyHint", {
                                    get: function () {
                                        return t.Clock.latencyHint;
                                    },
                                    set: function (e) {
                                        t.Clock.latencyHint = e;
                                    },
                                }),
                                (t.Transport.prototype._fromUnits = function (t) {
                                    return 1 / (60 / t / this.PPQ);
                                }),
                                (t.Transport.prototype._toUnits = function (t) {
                                    return (t / this.PPQ) * 60;
                                }),
                                (t.Transport.prototype.nextSubdivision = function (e) {
                                    e = this.toSeconds(e);
                                    var i;
                                    if (this.state !== t.State.Started) return 0;
                                    i = this._clock._nextTick;
                                    var n = e - (t.Time(this.ticks, "i") % e);
                                    return 0 === n && (n = e), i + n;
                                }),
                                (t.Transport.prototype.syncSignal = function (e, i) {
                                    i || (i = 0 !== e._param.value ? e._param.value / this.bpm._param.value : 0);
                                    var n = new t.Gain(i);
                                    return this.bpm.chain(n, e._param), this._syncedSignals.push({ ratio: n, signal: e, initial: e._param.value }), (e._param.value = 0), this;
                                }),
                                (t.Transport.prototype.unsyncSignal = function (t) {
                                    for (var e = this._syncedSignals.length - 1; e >= 0; e--) {
                                        var i = this._syncedSignals[e];
                                        i.signal === t && (i.ratio.dispose(), (i.signal._param.value = i.initial), this._syncedSignals.splice(e, 1));
                                    }
                                    return this;
                                }),
                                (t.Transport.prototype.dispose = function () {
                                    return (
                                        t.Emitter.prototype.dispose.call(this),
                                        this._clock.dispose(),
                                        (this._clock = null),
                                        this._writable("bpm"),
                                        (this.bpm = null),
                                        this._timeline.dispose(),
                                        (this._timeline = null),
                                        this._onceEvents.dispose(),
                                        (this._onceEvents = null),
                                        this._repeatedEvents.dispose(),
                                        (this._repeatedEvents = null),
                                        this
                                    );
                                });
                            var e = t.Transport;
                            return (
                                (t.Transport = new e()),
                                t.Context.on("init", function (i) {
                                    i.Transport instanceof e ? (t.Transport = i.Transport) : ((t.Transport = new e()), (i.Transport = t.Transport));
                                }),
                                t.Transport
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Volume = function () {
                                    var e = this.optionsObject(arguments, ["volume"], t.Volume.defaults);
                                    (this.output = this.input = new t.Gain(e.volume, t.Type.Decibels)), (this._unmutedVolume = e.volume), (this.volume = this.output.gain), this._readOnly("volume"), (this.mute = e.mute);
                                }),
                                t.extend(t.Volume),
                                (t.Volume.defaults = { volume: 0, mute: !1 }),
                                Object.defineProperty(t.Volume.prototype, "mute", {
                                    get: function () {
                                        return this.volume.value === -1 / 0;
                                    },
                                    set: function (t) {
                                        !this.mute && t ? ((this._unmutedVolume = this.volume.value), (this.volume.value = -1 / 0)) : this.mute && !t && (this.volume.value = this._unmutedVolume);
                                    },
                                }),
                                (t.Volume.prototype.dispose = function () {
                                    return this.input.dispose(), t.prototype.dispose.call(this), this._writable("volume"), this.volume.dispose(), (this.volume = null), this;
                                }),
                                t.Volume
                            );
                        }),
                        t(function (t) {
                            (t.Master = function () {
                                this.createInsOuts(1, 1), (this._volume = this.output = new t.Volume()), (this.volume = this._volume.volume), this._readOnly("volume"), this.input.chain(this.output, this.context.destination);
                            }),
                                t.extend(t.Master),
                                (t.Master.defaults = { volume: 0, mute: !1 }),
                                Object.defineProperty(t.Master.prototype, "mute", {
                                    get: function () {
                                        return this._volume.mute;
                                    },
                                    set: function (t) {
                                        this._volume.mute = t;
                                    },
                                }),
                                (t.Master.prototype.chain = function () {
                                    this.input.disconnect(), this.input.chain.apply(this.input, arguments), arguments[arguments.length - 1].connect(this.output);
                                }),
                                (t.Master.prototype.dispose = function () {
                                    t.prototype.dispose.call(this), this._writable("volume"), this._volume.dispose(), (this._volume = null), (this.volume = null);
                                }),
                                (t.prototype.toMaster = function () {
                                    return this.connect(t.Master), this;
                                }),
                                (AudioNode.prototype.toMaster = function () {
                                    return this.connect(t.Master), this;
                                });
                            var e = t.Master;
                            return (
                                (t.Master = new e()),
                                t.Context.on("init", function (i) {
                                    i.Master instanceof e ? (t.Master = i.Master) : (t.Master = new e()), (i.Master = t.Master);
                                }),
                                t.Master
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Source = function (e) {
                                    (e = this.defaultArg(e, t.Source.defaults)),
                                        (this._volume = this.output = new t.Volume(e.volume)),
                                        (this.volume = this._volume.volume),
                                        this._readOnly("volume"),
                                        (this._state = new t.TimelineState(t.State.Stopped)),
                                        (this._state.memory = 10),
                                        (this._synced = !1),
                                        (this._scheduled = []),
                                        (this._volume.output.output.channelCount = 2),
                                        (this._volume.output.output.channelCountMode = "explicit"),
                                        (this.mute = e.mute);
                                }),
                                t.extend(t.Source),
                                (t.Source.defaults = { volume: 0, mute: !1 }),
                                Object.defineProperty(t.Source.prototype, "state", {
                                    get: function () {
                                        return this._synced ? (t.Transport.state === t.State.Started ? this._state.getValueAtTime(t.Transport.seconds) : t.State.Stopped) : this._state.getValueAtTime(this.now());
                                    },
                                }),
                                Object.defineProperty(t.Source.prototype, "mute", {
                                    get: function () {
                                        return this._volume.mute;
                                    },
                                    set: function (t) {
                                        this._volume.mute = t;
                                    },
                                }),
                                (t.Source.prototype._start = t.noOp),
                                (t.Source.prototype._stop = t.noOp),
                                (t.Source.prototype.start = function (e, i, n) {
                                    if (
                                        ((e = this.isUndef(e) && this._synced ? t.Transport.seconds : this.toSeconds(e)),
                                        this.retrigger || this._state.getValueAtTime(e) !== t.State.Started || this.stop(e),
                                        this._state.setStateAtTime(t.State.Started, e),
                                        this._synced)
                                    ) {
                                        var s = this._state.get(e);
                                        (s.offset = this.defaultArg(i, 0)), (s.duration = n);
                                        var o = t.Transport.schedule(
                                            function (t) {
                                                this._start(t, i, n);
                                            }.bind(this),
                                            e
                                        );
                                        this._scheduled.push(o);
                                    } else this._start.apply(this, arguments);
                                    return this;
                                }),
                                (t.Source.prototype.stop = function (e) {
                                    if (((e = this.isUndef(e) && this._synced ? t.Transport.seconds : this.toSeconds(e)), this._state.cancel(e), this._state.setStateAtTime(t.State.Stopped, e), this._synced)) {
                                        var i = t.Transport.schedule(this._stop.bind(this), e);
                                        this._scheduled.push(i);
                                    } else this._stop.apply(this, arguments);
                                    return this;
                                }),
                                (t.Source.prototype.sync = function () {
                                    return (
                                        (this._synced = !0),
                                        t.Transport.on(
                                            "start loopStart",
                                            function (e, i) {
                                                if (i > 0) {
                                                    var n = this._state.get(i);
                                                    if (n && n.state === t.State.Started && n.time !== i) {
                                                        var s,
                                                            o = i - this.toSeconds(n.time);
                                                        n.duration && (s = this.toSeconds(n.duration) - o), this._start(e, this.toSeconds(n.offset) + o, s);
                                                    }
                                                }
                                            }.bind(this)
                                        ),
                                        t.Transport.on(
                                            "stop pause loopEnd",
                                            function (e) {
                                                this._state.getValueAtTime(t.Transport.seconds) === t.State.Started && this._stop(e);
                                            }.bind(this)
                                        ),
                                        this
                                    );
                                }),
                                (t.Source.prototype.unsync = function () {
                                    (this._synced = !1), t.Transport.off("start stop pause loopEnd loopStart");
                                    for (var e = 0; e < this._scheduled.length; e++) {
                                        var i = this._scheduled[e];
                                        t.Transport.clear(i);
                                    }
                                    return (this._scheduled = []), this._state.cancel(0), this;
                                }),
                                (t.Source.prototype.dispose = function () {
                                    t.prototype.dispose.call(this),
                                        this.unsync(),
                                        (this._scheduled = null),
                                        this._writable("volume"),
                                        this._volume.dispose(),
                                        (this._volume = null),
                                        (this.volume = null),
                                        this._state.dispose(),
                                        (this._state = null);
                                }),
                                t.Source
                            );
                        }),
                        t(function (t) {
                            return (
                                window.OscillatorNode &&
                                    !OscillatorNode.prototype.start &&
                                    ((OscillatorNode.prototype.start = OscillatorNode.prototype.noteOn),
                                    (OscillatorNode.prototype.stop = OscillatorNode.prototype.noteOff),
                                    OscillatorNode.prototype.setPeriodicWave || (OscillatorNode.prototype.setPeriodicWave = OscillatorNode.prototype.setWaveTable),
                                    AudioContext.prototype.createPeriodicWave || (AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable)),
                                (t.Oscillator = function () {
                                    var e = this.optionsObject(arguments, ["frequency", "type"], t.Oscillator.defaults);
                                    t.Source.call(this, e),
                                        (this._oscillator = null),
                                        (this.frequency = new t.Signal(e.frequency, t.Type.Frequency)),
                                        (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                                        (this._wave = null),
                                        (this._partials = this.defaultArg(e.partials, [1])),
                                        (this._phase = e.phase),
                                        (this._type = null),
                                        (this.type = e.type),
                                        (this.phase = this._phase),
                                        this._readOnly(["frequency", "detune"]);
                                }),
                                t.extend(t.Oscillator, t.Source),
                                (t.Oscillator.defaults = { type: "sine", frequency: 440, detune: 0, phase: 0, partials: [] }),
                                (t.Oscillator.Type = { Sine: "sine", Triangle: "triangle", Sawtooth: "sawtooth", Square: "square", Custom: "custom" }),
                                (t.Oscillator.prototype._start = function (t) {
                                    (this._oscillator = this.context.createOscillator()),
                                        this._oscillator.setPeriodicWave(this._wave),
                                        this._oscillator.connect(this.output),
                                        this.frequency.connect(this._oscillator.frequency),
                                        this.detune.connect(this._oscillator.detune),
                                        this._oscillator.start(this.toSeconds(t));
                                }),
                                (t.Oscillator.prototype._stop = function (t) {
                                    return this._oscillator && (this._oscillator.stop(this.toSeconds(t)), (this._oscillator = null)), this;
                                }),
                                (t.Oscillator.prototype.syncFrequency = function () {
                                    return t.Transport.syncSignal(this.frequency), this;
                                }),
                                (t.Oscillator.prototype.unsyncFrequency = function () {
                                    return t.Transport.unsyncSignal(this.frequency), this;
                                }),
                                Object.defineProperty(t.Oscillator.prototype, "type", {
                                    get: function () {
                                        return this._type;
                                    },
                                    set: function (t) {
                                        var e = this._getRealImaginary(t, this._phase),
                                            i = this.context.createPeriodicWave(e[0], e[1]);
                                        (this._wave = i), null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave), (this._type = t);
                                    },
                                }),
                                (t.Oscillator.prototype._getRealImaginary = function (e, i) {
                                    var n = 2048,
                                        s = new Float32Array(n),
                                        o = new Float32Array(n),
                                        r = 1;
                                    if (e === t.Oscillator.Type.Custom) n = r = this._partials.length + 1;
                                    else {
                                        var a = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);
                                        a && ((r = parseInt(a[2]) + 1), (e = a[1]), (n = r = Math.max(r, 2)));
                                    }
                                    for (var h = 1; h < n; ++h) {
                                        var l,
                                            u = 2 / (h * Math.PI);
                                        switch (e) {
                                            case t.Oscillator.Type.Sine:
                                                l = h <= r ? 1 : 0;
                                                break;
                                            case t.Oscillator.Type.Square:
                                                l = 1 & h ? 2 * u : 0;
                                                break;
                                            case t.Oscillator.Type.Sawtooth:
                                                l = u * (1 & h ? 1 : -1);
                                                break;
                                            case t.Oscillator.Type.Triangle:
                                                l = 1 & h ? u * u * 2 * (((h - 1) >> 1) & 1 ? -1 : 1) : 0;
                                                break;
                                            case t.Oscillator.Type.Custom:
                                                l = this._partials[h - 1];
                                                break;
                                            default:
                                                throw new TypeError("Tone.Oscillator: invalid type: " + e);
                                        }
                                        0 !== l ? ((s[h] = -l * Math.sin(i * h)), (o[h] = l * Math.cos(i * h))) : ((s[h] = 0), (o[h] = 0));
                                    }
                                    return [s, o];
                                }),
                                (t.Oscillator.prototype._inverseFFT = function (t, e, i) {
                                    for (var n = 0, s = t.length, o = 0; o < s; o++) n += t[o] * Math.cos(o * i) + e[o] * Math.sin(o * i);
                                    return n;
                                }),
                                (t.Oscillator.prototype._getInitialValue = function () {
                                    for (var t = this._getRealImaginary(this._type, 0), e = t[0], i = t[1], n = 0, s = 2 * Math.PI, o = 0; o < 8; o++) n = Math.max(this._inverseFFT(e, i, (o / 8) * s), n);
                                    return -this._inverseFFT(e, i, this._phase) / n;
                                }),
                                Object.defineProperty(t.Oscillator.prototype, "partials", {
                                    get: function () {
                                        return this._type !== t.Oscillator.Type.Custom ? [] : this._partials;
                                    },
                                    set: function (e) {
                                        (this._partials = e), (this.type = t.Oscillator.Type.Custom);
                                    },
                                }),
                                Object.defineProperty(t.Oscillator.prototype, "phase", {
                                    get: function () {
                                        return this._phase * (180 / Math.PI);
                                    },
                                    set: function (t) {
                                        (this._phase = (t * Math.PI) / 180), (this.type = this._type);
                                    },
                                }),
                                (t.Oscillator.prototype.dispose = function () {
                                    return (
                                        t.Source.prototype.dispose.call(this),
                                        null !== this._oscillator && (this._oscillator.disconnect(), (this._oscillator = null)),
                                        (this._wave = null),
                                        this._writable(["frequency", "detune"]),
                                        this.frequency.dispose(),
                                        (this.frequency = null),
                                        this.detune.dispose(),
                                        (this.detune = null),
                                        (this._partials = null),
                                        this
                                    );
                                }),
                                t.Oscillator
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Zero = function () {
                                    (this._gain = this.input = this.output = new t.Gain()), this.context.getConstant(0).connect(this._gain);
                                }),
                                t.extend(t.Zero),
                                (t.Zero.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._gain.dispose(), (this._gain = null), this;
                                }),
                                t.Zero
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.LFO = function () {
                                    var e = this.optionsObject(arguments, ["frequency", "min", "max"], t.LFO.defaults);
                                    (this._oscillator = new t.Oscillator({ frequency: e.frequency, type: e.type })),
                                        (this.frequency = this._oscillator.frequency),
                                        (this.amplitude = this._oscillator.volume),
                                        (this.amplitude.units = t.Type.NormalRange),
                                        (this.amplitude.value = e.amplitude),
                                        (this._stoppedSignal = new t.Signal(0, t.Type.AudioRange)),
                                        (this._zeros = new t.Zero()),
                                        (this._stoppedValue = 0),
                                        (this._a2g = new t.AudioToGain()),
                                        (this._scaler = this.output = new t.Scale(e.min, e.max)),
                                        (this._units = t.Type.Default),
                                        (this.units = e.units),
                                        this._oscillator.chain(this._a2g, this._scaler),
                                        this._zeros.connect(this._a2g),
                                        this._stoppedSignal.connect(this._a2g),
                                        this._readOnly(["amplitude", "frequency"]),
                                        (this.phase = e.phase);
                                }),
                                t.extend(t.LFO, t.Oscillator),
                                (t.LFO.defaults = { type: "sine", min: 0, max: 1, phase: 0, frequency: "4n", amplitude: 1, units: t.Type.Default }),
                                (t.LFO.prototype.start = function (t) {
                                    return (t = this.toSeconds(t)), this._stoppedSignal.setValueAtTime(0, t), this._oscillator.start(t), this;
                                }),
                                (t.LFO.prototype.stop = function (t) {
                                    return (t = this.toSeconds(t)), this._stoppedSignal.setValueAtTime(this._stoppedValue, t), this._oscillator.stop(t), this;
                                }),
                                (t.LFO.prototype.sync = function () {
                                    return this._oscillator.sync(), this._oscillator.syncFrequency(), this;
                                }),
                                (t.LFO.prototype.unsync = function () {
                                    return this._oscillator.unsync(), this._oscillator.unsyncFrequency(), this;
                                }),
                                Object.defineProperty(t.LFO.prototype, "min", {
                                    get: function () {
                                        return this._toUnits(this._scaler.min);
                                    },
                                    set: function (t) {
                                        (t = this._fromUnits(t)), (this._scaler.min = t);
                                    },
                                }),
                                Object.defineProperty(t.LFO.prototype, "max", {
                                    get: function () {
                                        return this._toUnits(this._scaler.max);
                                    },
                                    set: function (t) {
                                        (t = this._fromUnits(t)), (this._scaler.max = t);
                                    },
                                }),
                                Object.defineProperty(t.LFO.prototype, "type", {
                                    get: function () {
                                        return this._oscillator.type;
                                    },
                                    set: function (t) {
                                        (this._oscillator.type = t), (this._stoppedValue = this._oscillator._getInitialValue()), (this._stoppedSignal.value = this._stoppedValue);
                                    },
                                }),
                                Object.defineProperty(t.LFO.prototype, "phase", {
                                    get: function () {
                                        return this._oscillator.phase;
                                    },
                                    set: function (t) {
                                        (this._oscillator.phase = t), (this._stoppedValue = this._oscillator._getInitialValue()), (this._stoppedSignal.value = this._stoppedValue);
                                    },
                                }),
                                Object.defineProperty(t.LFO.prototype, "units", {
                                    get: function () {
                                        return this._units;
                                    },
                                    set: function (t) {
                                        var e = this.min,
                                            i = this.max;
                                        (this._units = t), (this.min = e), (this.max = i);
                                    },
                                }),
                                Object.defineProperty(t.LFO.prototype, "mute", {
                                    get: function () {
                                        return this._oscillator.mute;
                                    },
                                    set: function (t) {
                                        this._oscillator.mute = t;
                                    },
                                }),
                                Object.defineProperty(t.LFO.prototype, "state", {
                                    get: function () {
                                        return this._oscillator.state;
                                    },
                                }),
                                (t.LFO.prototype.connect = function (e) {
                                    return (
                                        (e.constructor !== t.Signal && e.constructor !== t.Param && e.constructor !== t.TimelineSignal) || ((this.convert = e.convert), (this.units = e.units)),
                                        t.Signal.prototype.connect.apply(this, arguments),
                                        this
                                    );
                                }),
                                (t.LFO.prototype._fromUnits = t.Param.prototype._fromUnits),
                                (t.LFO.prototype._toUnits = t.Param.prototype._toUnits),
                                (t.LFO.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this._writable(["amplitude", "frequency"]),
                                        this._oscillator.dispose(),
                                        (this._oscillator = null),
                                        this._stoppedSignal.dispose(),
                                        (this._stoppedSignal = null),
                                        this._zeros.dispose(),
                                        (this._zeros = null),
                                        this._scaler.dispose(),
                                        (this._scaler = null),
                                        this._a2g.dispose(),
                                        (this._a2g = null),
                                        (this.frequency = null),
                                        (this.amplitude = null),
                                        this
                                    );
                                }),
                                t.LFO
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Limiter = function () {
                                    var e = this.optionsObject(arguments, ["threshold"], t.Limiter.defaults);
                                    (this._compressor = this.input = this.output = new t.Compressor({ attack: 0.001, decay: 0.001, threshold: e.threshold })), (this.threshold = this._compressor.threshold), this._readOnly("threshold");
                                }),
                                t.extend(t.Limiter),
                                (t.Limiter.defaults = { threshold: -12 }),
                                (t.Limiter.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._compressor.dispose(), (this._compressor = null), this._writable("threshold"), (this.threshold = null), this;
                                }),
                                t.Limiter
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.LowpassCombFilter = function () {
                                    this.createInsOuts(1, 1);
                                    var e = this.optionsObject(arguments, ["delayTime", "resonance", "dampening"], t.LowpassCombFilter.defaults);
                                    (this._delay = this.input = new t.Delay(e.delayTime)),
                                        (this.delayTime = this._delay.delayTime),
                                        (this._lowpass = this.output = this.context.createBiquadFilter()),
                                        (this._lowpass.Q.value = -3.0102999566398125),
                                        (this._lowpass.type = "lowpass"),
                                        (this.dampening = new t.Param({ param: this._lowpass.frequency, units: t.Type.Frequency, value: e.dampening })),
                                        (this._feedback = new t.Gain(e.resonance, t.Type.NormalRange)),
                                        (this.resonance = this._feedback.gain),
                                        this._delay.chain(this._lowpass, this._feedback, this._delay),
                                        this._readOnly(["dampening", "resonance", "delayTime"]);
                                }),
                                t.extend(t.LowpassCombFilter),
                                (t.LowpassCombFilter.defaults = { delayTime: 0.1, resonance: 0.5, dampening: 3e3 }),
                                (t.LowpassCombFilter.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this._writable(["dampening", "resonance", "delayTime"]),
                                        this.dampening.dispose(),
                                        (this.dampening = null),
                                        this.resonance.dispose(),
                                        (this.resonance = null),
                                        this._delay.dispose(),
                                        (this._delay = null),
                                        (this.delayTime = null),
                                        this._lowpass.disconnect(),
                                        (this._lowpass = null),
                                        this._feedback.disconnect(),
                                        (this._feedback = null),
                                        this
                                    );
                                }),
                                t.LowpassCombFilter
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Merge = function () {
                                    this.createInsOuts(2, 0),
                                        (this.left = this.input[0] = new t.Gain()),
                                        (this.right = this.input[1] = new t.Gain()),
                                        (this._merger = this.output = this.context.createChannelMerger(2)),
                                        this.left.connect(this._merger, 0, 0),
                                        this.right.connect(this._merger, 0, 1),
                                        (this.left.channelCount = 1),
                                        (this.right.channelCount = 1),
                                        (this.left.channelCountMode = "explicit"),
                                        (this.right.channelCountMode = "explicit");
                                }),
                                t.extend(t.Merge),
                                (t.Merge.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this.left.dispose(), (this.left = null), this.right.dispose(), (this.right = null), this._merger.disconnect(), (this._merger = null), this;
                                }),
                                t.Merge
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Meter = function () {
                                    var e = this.optionsObject(arguments, ["type", "smoothing"], t.Meter.defaults);
                                    (this.type = e.type), (this.input = this.output = this._analyser = new t.Analyser("waveform", 512)), (this._analyser.returnType = "float"), (this.smoothing = e.smoothing), (this._lastValue = 0);
                                }),
                                t.extend(t.Meter),
                                (t.Meter.Type = { Level: "level", Signal: "signal" }),
                                (t.Meter.defaults = { smoothing: 0.8, type: t.Meter.Type.Level }),
                                Object.defineProperty(t.Meter.prototype, "value", {
                                    get: function () {
                                        var e = this._analyser.analyse();
                                        if (this.type === t.Meter.Type.Level) {
                                            for (var i = 0, n = 0; n < e.length; n++) i += Math.pow(e[n], 2);
                                            var s = Math.sqrt(i / e.length);
                                            (s = Math.max(s, this._lastValue * this.smoothing)), (this._lastValue = s);
                                            var o = s / 0.35;
                                            return Math.sqrt(o);
                                        }
                                        return e[0];
                                    },
                                }),
                                (t.Meter.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._analyser.dispose(), (this._analyser = null), this;
                                }),
                                t.Meter
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Split = function () {
                                    this.createInsOuts(0, 2),
                                        (this._splitter = this.input = this.context.createChannelSplitter(2)),
                                        (this.left = this.output[0] = new t.Gain()),
                                        (this.right = this.output[1] = new t.Gain()),
                                        this._splitter.connect(this.left, 0, 0),
                                        this._splitter.connect(this.right, 1, 0);
                                }),
                                t.extend(t.Split),
                                (t.Split.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._splitter.disconnect(), this.left.dispose(), (this.left = null), this.right.dispose(), (this.right = null), (this._splitter = null), this;
                                }),
                                t.Split
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.MidSideSplit = function () {
                                    this.createInsOuts(0, 2),
                                        (this._split = this.input = new t.Split()),
                                        (this.mid = this.output[0] = new t.Expr("($0 + $1) * $2")),
                                        (this.side = this.output[1] = new t.Expr("($0 - $1) * $2")),
                                        this._split.connect(this.mid, 0, 0),
                                        this._split.connect(this.mid, 1, 1),
                                        this._split.connect(this.side, 0, 0),
                                        this._split.connect(this.side, 1, 1),
                                        this.context.getConstant(Math.SQRT1_2).connect(this.mid, 0, 2),
                                        this.context.getConstant(Math.SQRT1_2).connect(this.side, 0, 2);
                                }),
                                t.extend(t.MidSideSplit),
                                (t.MidSideSplit.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this.mid.dispose(), (this.mid = null), this.side.dispose(), (this.side = null), this._split.dispose(), (this._split = null), this;
                                }),
                                t.MidSideSplit
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.MidSideMerge = function () {
                                    this.createInsOuts(2, 0),
                                        (this.mid = this.input[0] = new t.Gain()),
                                        (this._left = new t.Expr("($0 + $1) * $2")),
                                        (this.side = this.input[1] = new t.Gain()),
                                        (this._right = new t.Expr("($0 - $1) * $2")),
                                        (this._merge = this.output = new t.Merge()),
                                        this.mid.connect(this._left, 0, 0),
                                        this.side.connect(this._left, 0, 1),
                                        this.mid.connect(this._right, 0, 0),
                                        this.side.connect(this._right, 0, 1),
                                        this._left.connect(this._merge, 0, 0),
                                        this._right.connect(this._merge, 0, 1),
                                        this.context.getConstant(Math.SQRT1_2).connect(this._left, 0, 2),
                                        this.context.getConstant(Math.SQRT1_2).connect(this._right, 0, 2);
                                }),
                                t.extend(t.MidSideMerge),
                                (t.MidSideMerge.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this.mid.dispose(),
                                        (this.mid = null),
                                        this.side.dispose(),
                                        (this.side = null),
                                        this._left.dispose(),
                                        (this._left = null),
                                        this._right.dispose(),
                                        (this._right = null),
                                        this._merge.dispose(),
                                        (this._merge = null),
                                        this
                                    );
                                }),
                                t.MidSideMerge
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.MidSideCompressor = function (e) {
                                    (e = this.defaultArg(e, t.MidSideCompressor.defaults)),
                                        (this._midSideSplit = this.input = new t.MidSideSplit()),
                                        (this._midSideMerge = this.output = new t.MidSideMerge()),
                                        (this.mid = new t.Compressor(e.mid)),
                                        (this.side = new t.Compressor(e.side)),
                                        this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid),
                                        this._midSideSplit.side.chain(this.side, this._midSideMerge.side),
                                        this._readOnly(["mid", "side"]);
                                }),
                                t.extend(t.MidSideCompressor),
                                (t.MidSideCompressor.defaults = { mid: { ratio: 3, threshold: -24, release: 0.03, attack: 0.02, knee: 16 }, side: { ratio: 6, threshold: -30, release: 0.25, attack: 0.03, knee: 10 } }),
                                (t.MidSideCompressor.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this._writable(["mid", "side"]),
                                        this.mid.dispose(),
                                        (this.mid = null),
                                        this.side.dispose(),
                                        (this.side = null),
                                        this._midSideSplit.dispose(),
                                        (this._midSideSplit = null),
                                        this._midSideMerge.dispose(),
                                        (this._midSideMerge = null),
                                        this
                                    );
                                }),
                                t.MidSideCompressor
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Mono = function () {
                                    this.createInsOuts(1, 0), (this._merge = this.output = new t.Merge()), this.input.connect(this._merge, 0, 0), this.input.connect(this._merge, 0, 1), (this.input.gain.value = this.dbToGain(-10));
                                }),
                                t.extend(t.Mono),
                                (t.Mono.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._merge.dispose(), (this._merge = null), this;
                                }),
                                t.Mono
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.MultibandCompressor = function (e) {
                                    (e = this.defaultArg(arguments, t.MultibandCompressor.defaults)),
                                        (this._splitter = this.input = new t.MultibandSplit({ lowFrequency: e.lowFrequency, highFrequency: e.highFrequency })),
                                        (this.lowFrequency = this._splitter.lowFrequency),
                                        (this.highFrequency = this._splitter.highFrequency),
                                        (this.output = new t.Gain()),
                                        (this.low = new t.Compressor(e.low)),
                                        (this.mid = new t.Compressor(e.mid)),
                                        (this.high = new t.Compressor(e.high)),
                                        this._splitter.low.chain(this.low, this.output),
                                        this._splitter.mid.chain(this.mid, this.output),
                                        this._splitter.high.chain(this.high, this.output),
                                        this._readOnly(["high", "mid", "low", "highFrequency", "lowFrequency"]);
                                }),
                                t.extend(t.MultibandCompressor),
                                (t.MultibandCompressor.defaults = { low: t.Compressor.defaults, mid: t.Compressor.defaults, high: t.Compressor.defaults, lowFrequency: 250, highFrequency: 2e3 }),
                                (t.MultibandCompressor.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this._splitter.dispose(),
                                        this._writable(["high", "mid", "low", "highFrequency", "lowFrequency"]),
                                        this.low.dispose(),
                                        this.mid.dispose(),
                                        this.high.dispose(),
                                        (this._splitter = null),
                                        (this.low = null),
                                        (this.mid = null),
                                        (this.high = null),
                                        (this.lowFrequency = null),
                                        (this.highFrequency = null),
                                        this
                                    );
                                }),
                                t.MultibandCompressor
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Panner = function (e) {
                                    this._hasStereoPanner
                                        ? ((this._panner = this.input = this.output = this.context.createStereoPanner()), (this.pan = this._panner.pan))
                                        : ((this._crossFade = new t.CrossFade()),
                                          (this._merger = this.output = new t.Merge()),
                                          (this._splitter = this.input = new t.Split()),
                                          (this.pan = new t.Signal(0, t.Type.AudioRange)),
                                          (this._zero = new t.Zero()),
                                          (this._a2g = new t.AudioToGain()),
                                          this._zero.connect(this._a2g),
                                          this.pan.chain(this._a2g, this._crossFade.fade),
                                          this._splitter.connect(this._crossFade, 0, 0),
                                          this._splitter.connect(this._crossFade, 1, 1),
                                          this._crossFade.a.connect(this._merger, 0, 0),
                                          this._crossFade.b.connect(this._merger, 0, 1)),
                                        (this.pan.value = this.defaultArg(e, 0)),
                                        this._readOnly("pan");
                                }),
                                t.extend(t.Panner),
                                (t.Panner.prototype._hasStereoPanner = t.prototype.isFunction(t.context.createStereoPanner)),
                                (t.Panner.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this._writable("pan"),
                                        this._hasStereoPanner
                                            ? (this._panner.disconnect(), (this._panner = null), (this.pan = null))
                                            : (this._zero.dispose(),
                                              (this._zero = null),
                                              this._crossFade.dispose(),
                                              (this._crossFade = null),
                                              this._splitter.dispose(),
                                              (this._splitter = null),
                                              this._merger.dispose(),
                                              (this._merger = null),
                                              this.pan.dispose(),
                                              (this.pan = null),
                                              this._a2g.dispose(),
                                              (this._a2g = null)),
                                        this
                                    );
                                }),
                                t.Panner
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Panner3D = function () {
                                    var e = this.optionsObject(arguments, ["positionX", "positionY", "positionZ"], t.Panner3D.defaults);
                                    (this._panner = this.input = this.output = this.context.createPanner()),
                                        (this._panner.panningModel = e.panningModel),
                                        (this._panner.maxDistance = e.maxDistance),
                                        (this._panner.distanceModel = e.distanceModel),
                                        (this._panner.coneOuterGain = e.coneOuterGain),
                                        (this._panner.coneOuterAngle = e.coneOuterAngle),
                                        (this._panner.coneInnerAngle = e.coneInnerAngle),
                                        (this._panner.refDistance = e.refDistance),
                                        (this._panner.rolloffFactor = e.rolloffFactor),
                                        (this._orientation = [e.orientationX, e.orientationY, e.orientationZ]),
                                        (this._position = [e.positionX, e.positionY, e.positionZ]),
                                        (this.orientationX = e.orientationX),
                                        (this.orientationY = e.orientationY),
                                        (this.orientationZ = e.orientationZ),
                                        (this.positionX = e.positionX),
                                        (this.positionY = e.positionY),
                                        (this.positionZ = e.positionZ);
                                }),
                                t.extend(t.Panner3D),
                                (t.Panner3D.defaults = {
                                    positionX: 0,
                                    positionY: 0,
                                    positionZ: 0,
                                    orientationX: 0,
                                    orientationY: 0,
                                    orientationZ: 0,
                                    panningModel: "equalpower",
                                    maxDistance: 1e4,
                                    distanceModel: "inverse",
                                    coneOuterGain: 0,
                                    coneOuterAngle: 360,
                                    coneInnerAngle: 360,
                                    refDistance: 1,
                                    rolloffFactor: 1,
                                }),
                                (t.Panner3D.prototype._rampTimeConstant = 0.01),
                                (t.Panner3D.prototype.setPosition = function (t, e, i) {
                                    if (this._panner.positionX) {
                                        var n = this.now();
                                        this._panner.positionX.setTargetAtTime(t, n, this._rampTimeConstant),
                                            this._panner.positionY.setTargetAtTime(e, n, this._rampTimeConstant),
                                            this._panner.positionZ.setTargetAtTime(i, n, this._rampTimeConstant);
                                    } else this._panner.setPosition(t, e, i);
                                    return (this._position = Array.prototype.slice.call(arguments)), this;
                                }),
                                (t.Panner3D.prototype.setOrientation = function (t, e, i) {
                                    if (this._panner.orientationX) {
                                        var n = this.now();
                                        this._panner.orientationX.setTargetAtTime(t, n, this._rampTimeConstant),
                                            this._panner.orientationY.setTargetAtTime(e, n, this._rampTimeConstant),
                                            this._panner.orientationZ.setTargetAtTime(i, n, this._rampTimeConstant);
                                    } else this._panner.setOrientation(t, e, i);
                                    return (this._orientation = Array.prototype.slice.call(arguments)), this;
                                }),
                                Object.defineProperty(t.Panner3D.prototype, "positionX", {
                                    set: function (t) {
                                        (this._position[0] = t), this.setPosition.apply(this, this._position);
                                    },
                                    get: function () {
                                        return this._position[0];
                                    },
                                }),
                                Object.defineProperty(t.Panner3D.prototype, "positionY", {
                                    set: function (t) {
                                        (this._position[1] = t), this.setPosition.apply(this, this._position);
                                    },
                                    get: function () {
                                        return this._position[1];
                                    },
                                }),
                                Object.defineProperty(t.Panner3D.prototype, "positionZ", {
                                    set: function (t) {
                                        (this._position[2] = t), this.setPosition.apply(this, this._position);
                                    },
                                    get: function () {
                                        return this._position[2];
                                    },
                                }),
                                Object.defineProperty(t.Panner3D.prototype, "orientationX", {
                                    set: function (t) {
                                        (this._orientation[0] = t), this.setOrientation.apply(this, this._orientation);
                                    },
                                    get: function () {
                                        return this._orientation[0];
                                    },
                                }),
                                Object.defineProperty(t.Panner3D.prototype, "orientationY", {
                                    set: function (t) {
                                        (this._orientation[1] = t), this.setOrientation.apply(this, this._orientation);
                                    },
                                    get: function () {
                                        return this._orientation[1];
                                    },
                                }),
                                Object.defineProperty(t.Panner3D.prototype, "orientationZ", {
                                    set: function (t) {
                                        (this._orientation[2] = t), this.setOrientation.apply(this, this._orientation);
                                    },
                                    get: function () {
                                        return this._orientation[2];
                                    },
                                }),
                                (t.Panner3D._aliasProperty = function (e) {
                                    Object.defineProperty(t.Panner3D.prototype, e, {
                                        set: function (t) {
                                            this._panner[e] = t;
                                        },
                                        get: function () {
                                            return this._panner[e];
                                        },
                                    });
                                }),
                                t.Panner3D._aliasProperty("panningModel"),
                                t.Panner3D._aliasProperty("refDistance"),
                                t.Panner3D._aliasProperty("rolloffFactor"),
                                t.Panner3D._aliasProperty("distanceModel"),
                                t.Panner3D._aliasProperty("coneInnerAngle"),
                                t.Panner3D._aliasProperty("coneOuterAngle"),
                                t.Panner3D._aliasProperty("coneOuterGain"),
                                t.Panner3D._aliasProperty("maxDistance"),
                                (t.Panner3D.prototype.dispose = function () {
                                    return this._panner.disconnect(), (this._panner = null), (this._orientation = null), (this._position = null), this;
                                }),
                                t.Panner3D
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.PanVol = function () {
                                    var e = this.optionsObject(arguments, ["pan", "volume"], t.PanVol.defaults);
                                    (this._panner = this.input = new t.Panner(e.pan)),
                                        (this.pan = this._panner.pan),
                                        (this._volume = this.output = new t.Volume(e.volume)),
                                        (this.volume = this._volume.volume),
                                        this._panner.connect(this._volume),
                                        this._readOnly(["pan", "volume"]);
                                }),
                                t.extend(t.PanVol),
                                (t.PanVol.defaults = { pan: 0.5, volume: 0 }),
                                (t.PanVol.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this._writable(["pan", "volume"]),
                                        this._panner.dispose(),
                                        (this._panner = null),
                                        (this.pan = null),
                                        this._volume.dispose(),
                                        (this._volume = null),
                                        (this.volume = null),
                                        this
                                    );
                                }),
                                t.PanVol
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.CtrlInterpolate = function () {
                                    var e = this.optionsObject(arguments, ["values", "index"], t.CtrlInterpolate.defaults);
                                    (this.values = e.values), (this.index = e.index);
                                }),
                                t.extend(t.CtrlInterpolate),
                                (t.CtrlInterpolate.defaults = { index: 0, values: [] }),
                                Object.defineProperty(t.CtrlInterpolate.prototype, "value", {
                                    get: function () {
                                        var t = this.index;
                                        t = Math.min(t, this.values.length - 1);
                                        var e = Math.floor(t),
                                            i = this.values[e],
                                            n = this.values[Math.ceil(t)];
                                        return this._interpolate(t - e, i, n);
                                    },
                                }),
                                (t.CtrlInterpolate.prototype._interpolate = function (t, e, i) {
                                    if (this.isArray(e)) {
                                        for (var n = [], s = 0; s < e.length; s++) n[s] = this._interpolate(t, e[s], i[s]);
                                        return n;
                                    }
                                    if (this.isObject(e)) {
                                        var o = {};
                                        for (var r in e) o[r] = this._interpolate(t, e[r], i[r]);
                                        return o;
                                    }
                                    return (e = this._toNumber(e)), (i = this._toNumber(i)), (1 - t) * e + t * i;
                                }),
                                (t.CtrlInterpolate.prototype._toNumber = function (t) {
                                    return this.isNumber(t) ? t : this.toSeconds(t);
                                }),
                                (t.CtrlInterpolate.prototype.dispose = function () {
                                    this.values = null;
                                }),
                                t.CtrlInterpolate
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.CtrlMarkov = function (t, e) {
                                    (this.values = this.defaultArg(t, {})), (this.value = this.defaultArg(e, Object.keys(this.values)[0]));
                                }),
                                t.extend(t.CtrlMarkov),
                                (t.CtrlMarkov.prototype.next = function () {
                                    if (this.values.hasOwnProperty(this.value)) {
                                        var t = this.values[this.value];
                                        if (this.isArray(t))
                                            for (var e = this._getProbDistribution(t), i = Math.random(), n = 0, s = 0; s < e.length; s++) {
                                                var o = e[s];
                                                if (i > n && i < n + o) {
                                                    var r = t[s];
                                                    this.isObject(r) ? (this.value = r.value) : (this.value = r);
                                                }
                                                n += o;
                                            }
                                        else this.value = t;
                                    }
                                    return this.value;
                                }),
                                (t.CtrlMarkov.prototype._getProbDistribution = function (t) {
                                    for (var e = [], i = 0, n = !1, s = 0; s < t.length; s++) {
                                        var o = t[s];
                                        this.isObject(o) ? ((n = !0), (e[s] = o.probability)) : (e[s] = 1 / t.length), (i += e[s]);
                                    }
                                    if (n) for (var r = 0; r < e.length; r++) e[r] = e[r] / i;
                                    return e;
                                }),
                                (t.CtrlMarkov.prototype.dispose = function () {
                                    this.values = null;
                                }),
                                t.CtrlMarkov
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.CtrlPattern = function () {
                                    var e = this.optionsObject(arguments, ["values", "type"], t.CtrlPattern.defaults);
                                    (this.values = e.values), (this.index = 0), (this._type = null), (this._shuffled = null), (this._direction = null), (this.type = e.type);
                                }),
                                t.extend(t.CtrlPattern),
                                (t.CtrlPattern.Type = {
                                    Up: "up",
                                    Down: "down",
                                    UpDown: "upDown",
                                    DownUp: "downUp",
                                    AlternateUp: "alternateUp",
                                    AlternateDown: "alternateDown",
                                    Random: "random",
                                    RandomWalk: "randomWalk",
                                    RandomOnce: "randomOnce",
                                }),
                                (t.CtrlPattern.defaults = { type: t.CtrlPattern.Type.Up, values: [] }),
                                Object.defineProperty(t.CtrlPattern.prototype, "value", {
                                    get: function () {
                                        if (0 !== this.values.length) {
                                            if (1 === this.values.length) return this.values[0];
                                            this.index = Math.min(this.index, this.values.length - 1);
                                            var e = this.values[this.index];
                                            return this.type === t.CtrlPattern.Type.RandomOnce && (this.values.length !== this._shuffled.length && this._shuffleValues(), (e = this.values[this._shuffled[this.index]])), e;
                                        }
                                    },
                                }),
                                Object.defineProperty(t.CtrlPattern.prototype, "type", {
                                    get: function () {
                                        return this._type;
                                    },
                                    set: function (e) {
                                        (this._type = e),
                                            (this._shuffled = null),
                                            this._type === t.CtrlPattern.Type.Up || this._type === t.CtrlPattern.Type.UpDown || this._type === t.CtrlPattern.Type.RandomOnce || this._type === t.CtrlPattern.Type.AlternateUp
                                                ? (this.index = 0)
                                                : (this._type !== t.CtrlPattern.Type.Down && this._type !== t.CtrlPattern.Type.DownUp && this._type !== t.CtrlPattern.Type.AlternateDown) || (this.index = this.values.length - 1),
                                            this._type === t.CtrlPattern.Type.UpDown || this._type === t.CtrlPattern.Type.AlternateUp
                                                ? (this._direction = t.CtrlPattern.Type.Up)
                                                : (this._type !== t.CtrlPattern.Type.DownUp && this._type !== t.CtrlPattern.Type.AlternateDown) || (this._direction = t.CtrlPattern.Type.Down),
                                            this._type === t.CtrlPattern.Type.RandomOnce ? this._shuffleValues() : this._type === t.CtrlPattern.Random && (this.index = Math.floor(Math.random() * this.values.length));
                                    },
                                }),
                                (t.CtrlPattern.prototype.next = function () {
                                    var e = this.type;
                                    return (
                                        e === t.CtrlPattern.Type.Up
                                            ? ++this.index >= this.values.length && (this.index = 0)
                                            : e === t.CtrlPattern.Type.Down
                                            ? --this.index < 0 && (this.index = this.values.length - 1)
                                            : e === t.CtrlPattern.Type.UpDown || e === t.CtrlPattern.Type.DownUp
                                            ? (this._direction === t.CtrlPattern.Type.Up ? this.index++ : this.index--,
                                              this.index < 0
                                                  ? ((this.index = 1), (this._direction = t.CtrlPattern.Type.Up))
                                                  : this.index >= this.values.length && ((this.index = this.values.length - 2), (this._direction = t.CtrlPattern.Type.Down)))
                                            : e === t.CtrlPattern.Type.Random
                                            ? (this.index = Math.floor(Math.random() * this.values.length))
                                            : e === t.CtrlPattern.Type.RandomWalk
                                            ? Math.random() < 0.5
                                                ? (this.index--, (this.index = Math.max(this.index, 0)))
                                                : (this.index++, (this.index = Math.min(this.index, this.values.length - 1)))
                                            : e === t.CtrlPattern.Type.RandomOnce
                                            ? ++this.index >= this.values.length && ((this.index = 0), this._shuffleValues())
                                            : e === t.CtrlPattern.Type.AlternateUp
                                            ? (this._direction === t.CtrlPattern.Type.Up ? ((this.index += 2), (this._direction = t.CtrlPattern.Type.Down)) : ((this.index -= 1), (this._direction = t.CtrlPattern.Type.Up)),
                                              this.index >= this.values.length && ((this.index = 0), (this._direction = t.CtrlPattern.Type.Up)))
                                            : e === t.CtrlPattern.Type.AlternateDown &&
                                              (this._direction === t.CtrlPattern.Type.Up ? ((this.index += 1), (this._direction = t.CtrlPattern.Type.Down)) : ((this.index -= 2), (this._direction = t.CtrlPattern.Type.Up)),
                                              this.index < 0 && ((this.index = this.values.length - 1), (this._direction = t.CtrlPattern.Type.Down))),
                                        this.value
                                    );
                                }),
                                (t.CtrlPattern.prototype._shuffleValues = function () {
                                    var t = [];
                                    this._shuffled = [];
                                    for (var e = 0; e < this.values.length; e++) t[e] = e;
                                    for (; t.length > 0; ) {
                                        var i = t.splice(Math.floor(t.length * Math.random()), 1);
                                        this._shuffled.push(i[0]);
                                    }
                                }),
                                (t.CtrlPattern.prototype.dispose = function () {
                                    (this._shuffled = null), (this.values = null);
                                }),
                                t.CtrlPattern
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.CtrlRandom = function () {
                                    var e = this.optionsObject(arguments, ["min", "max"], t.CtrlRandom.defaults);
                                    (this.min = e.min), (this.max = e.max), (this.integer = e.integer);
                                }),
                                t.extend(t.CtrlRandom),
                                (t.CtrlRandom.defaults = { min: 0, max: 1, integer: !1 }),
                                Object.defineProperty(t.CtrlRandom.prototype, "value", {
                                    get: function () {
                                        var t = this.toSeconds(this.min),
                                            e = this.toSeconds(this.max),
                                            i = Math.random(),
                                            n = i * t + (1 - i) * e;
                                        return this.integer && (n = Math.floor(n)), n;
                                    },
                                }),
                                t.CtrlRandom
                            );
                        }),
                        t(function (t) {
                            return (
                                window.AudioBuffer &&
                                    !AudioBuffer.prototype.copyToChannel &&
                                    ((AudioBuffer.prototype.copyToChannel = function (t, e, i) {
                                        var n = this.getChannelData(e);
                                        i = i || 0;
                                        for (var s = 0; s < n.length; s++) n[s + i] = t[s];
                                    }),
                                    (AudioBuffer.prototype.copyFromChannel = function (t, e, i) {
                                        var n = this.getChannelData(e);
                                        i = i || 0;
                                        for (var s = 0; s < n.length; s++) t[s] = n[s + i];
                                    })),
                                (t.Buffer = function () {
                                    var e = this.optionsObject(arguments, ["url", "onload", "onerror"], t.Buffer.defaults);
                                    (this._buffer = null),
                                        (this._reversed = e.reverse),
                                        (this._xhr = null),
                                        e.url instanceof AudioBuffer || e.url instanceof t.Buffer ? (this.set(e.url), e.onload && e.onload(this)) : this.isString(e.url) && this.load(e.url, e.onload, e.onerror);
                                }),
                                t.extend(t.Buffer),
                                (t.Buffer.defaults = { url: void 0, reverse: !1 }),
                                (t.Buffer.prototype.set = function (e) {
                                    return e instanceof t.Buffer ? (this._buffer = e.get()) : (this._buffer = e), this;
                                }),
                                (t.Buffer.prototype.get = function () {
                                    return this._buffer;
                                }),
                                (t.Buffer.prototype.load = function (e, i, n) {
                                    return new Promise(
                                        function (s, o) {
                                            this._xhr = t.Buffer.load(
                                                e,
                                                function (t) {
                                                    (this._xhr = null), this.set(t), s(this), i && i(this);
                                                }.bind(this),
                                                function (t) {
                                                    (this._xhr = null), o(t), n && n(t);
                                                }.bind(this)
                                            );
                                        }.bind(this)
                                    );
                                }),
                                (t.Buffer.prototype.dispose = function () {
                                    return t.Emitter.prototype.dispose.call(this), (this._buffer = null), this._xhr && (t.Buffer._currentDownloads--, this._xhr.abort(), (this._xhr = null)), this;
                                }),
                                Object.defineProperty(t.Buffer.prototype, "loaded", {
                                    get: function () {
                                        return this.length > 0;
                                    },
                                }),
                                Object.defineProperty(t.Buffer.prototype, "duration", {
                                    get: function () {
                                        return this._buffer ? this._buffer.duration : 0;
                                    },
                                }),
                                Object.defineProperty(t.Buffer.prototype, "length", {
                                    get: function () {
                                        return this._buffer ? this._buffer.length : 0;
                                    },
                                }),
                                Object.defineProperty(t.Buffer.prototype, "numberOfChannels", {
                                    get: function () {
                                        return this._buffer ? this._buffer.numberOfChannels : 0;
                                    },
                                }),
                                (t.Buffer.prototype.fromArray = function (t) {
                                    var e = t[0].length > 0,
                                        i = e ? t.length : 1,
                                        n = e ? t[0].length : t.length,
                                        s = this.context.createBuffer(i, n, this.context.sampleRate);
                                    e || 1 !== i || (t = [t]);
                                    for (var o = 0; o < i; o++) s.copyToChannel(t[o], o);
                                    return (this._buffer = s), this;
                                }),
                                (t.Buffer.prototype.toMono = function (t) {
                                    if (this.isNumber(t)) this.fromArray(this.toArray(t));
                                    else {
                                        for (var e = new Float32Array(this.length), i = this.numberOfChannels, n = 0; n < i; n++) for (var s = this.toArray(n), o = 0; o < s.length; o++) e[o] += s[o];
                                        (e = e.map(function (t) {
                                            return t / i;
                                        })),
                                            this.fromArray(e);
                                    }
                                    return this;
                                }),
                                (t.Buffer.prototype.toArray = function (t) {
                                    if (this.isNumber(t)) return this.getChannelData(t);
                                    if (1 === this.numberOfChannels) return this.toArray(0);
                                    for (var e = [], i = 0; i < this.numberOfChannels; i++) e[i] = this.getChannelData(i);
                                    return e;
                                }),
                                (t.Buffer.prototype.getChannelData = function (t) {
                                    return this._buffer.getChannelData(t);
                                }),
                                (t.Buffer.prototype.slice = function (e, i) {
                                    i = this.defaultArg(i, this.duration);
                                    for (var n = Math.floor(this.context.sampleRate * this.toSeconds(e)), s = Math.floor(this.context.sampleRate * this.toSeconds(i)), o = [], r = 0; r < this.numberOfChannels; r++)
                                        o[r] = this.toArray(r).slice(n, s);
                                    return new t.Buffer().fromArray(o);
                                }),
                                (t.Buffer.prototype._reverse = function () {
                                    if (this.loaded) for (var t = 0; t < this.numberOfChannels; t++) Array.prototype.reverse.call(this.getChannelData(t));
                                    return this;
                                }),
                                Object.defineProperty(t.Buffer.prototype, "reverse", {
                                    get: function () {
                                        return this._reversed;
                                    },
                                    set: function (t) {
                                        this._reversed !== t && ((this._reversed = t), this._reverse());
                                    },
                                }),
                                t.Emitter.mixin(t.Buffer),
                                (t.Buffer._downloadQueue = []),
                                (t.Buffer._currentDownloads = 0),
                                (t.Buffer.baseUrl = ""),
                                (t.Buffer.load = function (e, i, n) {
                                    function s(e) {
                                        if (!n) throw new Error(e);
                                        n(e), t.Buffer.emit("error", e);
                                    }
                                    function o() {
                                        for (var e = 0, i = 0; i < t.Buffer._downloadQueue.length; i++) e += t.Buffer._downloadQueue[i].progress;
                                        t.Buffer.emit("progress", e / t.Buffer._downloadQueue.length);
                                    }
                                    i = i || t.noOp;
                                    var r = new XMLHttpRequest();
                                    return (
                                        r.open("GET", t.Buffer.baseUrl + e, !0),
                                        (r.responseType = "arraybuffer"),
                                        (r.progress = 0),
                                        t.Buffer._currentDownloads++,
                                        t.Buffer._downloadQueue.push(r),
                                        r.addEventListener("load", function () {
                                            200 === r.status
                                                ? t.context.decodeAudioData(
                                                      r.response,
                                                      function (e) {
                                                          (r.progress = 1), o(), i(e), t.Buffer._currentDownloads--, 0 === t.Buffer._currentDownloads && ((t.Buffer._downloadQueue = []), t.Buffer.emit("load"));
                                                      },
                                                      function () {
                                                          s("Tone.Buffer: could not decode audio data: " + e);
                                                      }
                                                  )
                                                : s("Tone.Buffer: could not locate file: " + e);
                                        }),
                                        r.addEventListener("error", s),
                                        r.addEventListener("progress", function (t) {
                                            t.lengthComputable && ((r.progress = (t.loaded / t.total) * 0.95), o());
                                        }),
                                        r.send(),
                                        r
                                    );
                                }),
                                (t.Buffer.cancelDownloads = function () {
                                    return (
                                        t.Buffer._downloadQueue.forEach(function (t) {
                                            t.abort();
                                        }),
                                        (t.Buffer._currentDownloads = 0),
                                        t.Buffer
                                    );
                                }),
                                (t.Buffer.supportsType = function (t) {
                                    var e = t.split(".");
                                    return (e = e[e.length - 1]), "" !== document.createElement("audio").canPlayType("audio/" + e);
                                }),
                                (t.loaded = function () {
                                    function e() {
                                        t.Buffer.off("load", i), t.Buffer.off("error", n);
                                    }
                                    var i, n;
                                    return new Promise(function (e, s) {
                                        (i = function () {
                                            e();
                                        }),
                                            (n = function () {
                                                s();
                                            }),
                                            t.Buffer.on("load", i),
                                            t.Buffer.on("error", n);
                                    })
                                        .then(e)
                                        .catch(function (t) {
                                            throw (e(), new Error(t));
                                        });
                                }),
                                t.Buffer
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Buffers = function (t, e, i) {
                                    (this._buffers = {}), (this.baseUrl = this.defaultArg(i, "")), (t = this._flattenUrls(t)), (this._loadingCount = 0);
                                    for (var n in t) this._loadingCount++, this.add(n, t[n], this._bufferLoaded.bind(this, e));
                                }),
                                t.extend(t.Buffers),
                                (t.Buffers.prototype.has = function (t) {
                                    return this._buffers.hasOwnProperty(t);
                                }),
                                (t.Buffers.prototype.get = function (t) {
                                    if (this.has(t)) return this._buffers[t];
                                    throw new Error("Tone.Buffers: no buffer named " + t);
                                }),
                                (t.Buffers.prototype._bufferLoaded = function (t) {
                                    0 === --this._loadingCount && t && t(this);
                                }),
                                Object.defineProperty(t.Buffers.prototype, "loaded", {
                                    get: function () {
                                        var t = !0;
                                        for (var e in this._buffers) {
                                            var i = this.get(e);
                                            t = t && i.loaded;
                                        }
                                        return t;
                                    },
                                }),
                                (t.Buffers.prototype.add = function (e, i, n) {
                                    return (
                                        (n = this.defaultArg(n, t.noOp)),
                                        i instanceof t.Buffer
                                            ? ((this._buffers[e] = i), n(this))
                                            : i instanceof AudioBuffer
                                            ? ((this._buffers[e] = new t.Buffer(i)), n(this))
                                            : this.isString(i) && (this._buffers[e] = new t.Buffer(this.baseUrl + i, n)),
                                        this
                                    );
                                }),
                                (t.Buffers.prototype._flattenUrls = function (t) {
                                    var e = {};
                                    for (var i in t)
                                        if (t.hasOwnProperty(i))
                                            if (this.isObject(t[i])) {
                                                var n = this._flattenUrls(t[i]);
                                                for (var s in n) n.hasOwnProperty(s) && (e[i + "." + s] = n[s]);
                                            } else e[i] = t[i];
                                    return e;
                                }),
                                (t.Buffers.prototype.dispose = function () {
                                    for (var t in this._buffers) this._buffers[t].dispose();
                                    return (this._buffers = null), this;
                                }),
                                t.Buffers
                            );
                        }),
                        t(function (t) {
                            var e = {};
                            return (
                                (t.prototype.send = function (i, n) {
                                    e.hasOwnProperty(i) || (e[i] = this.context.createGain()), (n = this.defaultArg(n, 0));
                                    var s = new t.Gain(n, t.Type.Decibels);
                                    return this.output.chain(s, e[i]), s;
                                }),
                                (t.prototype.receive = function (t, i) {
                                    return e.hasOwnProperty(t) || (e[t] = this.context.createGain()), this.isUndef(i) && (i = this.input), e[t].connect(i), this;
                                }),
                                t.Context.on("init", function (t) {
                                    t.Buses ? (e = t.Buses) : ((e = {}), (t.Buses = e));
                                }),
                                t
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Draw = function () {
                                    (this._events = new t.Timeline()), (this.expiration = 0.25), (this.anticipation = 0.008), (this._boundDrawLoop = this._drawLoop.bind(this));
                                }),
                                t.extend(t.Draw),
                                (t.Draw.prototype.schedule = function (t, e) {
                                    return this._events.add({ callback: t, time: this.toSeconds(e) }), 1 === this._events.length && requestAnimationFrame(this._boundDrawLoop), this;
                                }),
                                (t.Draw.prototype.cancel = function (t) {
                                    return this._events.cancel(this.toSeconds(t)), this;
                                }),
                                (t.Draw.prototype._drawLoop = function () {
                                    for (var e = t.now(); this._events.length && this._events.peek().time - this.anticipation <= e; ) {
                                        var i = this._events.shift();
                                        e - i.time <= this.expiration && i.callback();
                                    }
                                    this._events.length > 0 && requestAnimationFrame(this._boundDrawLoop);
                                }),
                                (t.Draw = new t.Draw()),
                                t.Draw
                            );
                        }),
                        t(function (t) {
                            (t.Listener = function () {
                                var t = this.optionsObject(arguments, ["positionX", "positionY", "positionZ"], e.defaults);
                                (this._orientation = [t.forwardX, t.forwardY, t.forwardZ, t.upX, t.upY, t.upZ]),
                                    (this._position = [t.positionX, t.positionY, t.positionZ]),
                                    (this.forwardX = t.forwardX),
                                    (this.forwardY = t.forwardY),
                                    (this.forwardZ = t.forwardZ),
                                    (this.upX = t.upX),
                                    (this.upY = t.upY),
                                    (this.upZ = t.upZ),
                                    (this.positionX = t.positionX),
                                    (this.positionY = t.positionY),
                                    (this.positionZ = t.positionZ);
                            }),
                                t.extend(t.Listener),
                                (t.Listener.defaults = { positionX: 0, positionY: 0, positionZ: 0, forwardX: 0, forwardY: 0, forwardZ: 1, upX: 0, upY: 1, upZ: 0 }),
                                (t.Listener.prototype._rampTimeConstant = 0.01),
                                (t.Listener.prototype.setPosition = function (t, e, i) {
                                    if (this.context.listener.positionX) {
                                        var n = this.now();
                                        this.context.listener.positionX.setTargetAtTime(t, n, this._rampTimeConstant),
                                            this.context.listener.positionY.setTargetAtTime(e, n, this._rampTimeConstant),
                                            this.context.listener.positionZ.setTargetAtTime(i, n, this._rampTimeConstant);
                                    } else this.context.listener.setPosition(t, e, i);
                                    return (this._position = Array.prototype.slice.call(arguments)), this;
                                }),
                                (t.Listener.prototype.setOrientation = function (t, e, i, n, s, o) {
                                    if (this.context.listener.forwardX) {
                                        var r = this.now();
                                        this.context.listener.forwardX.setTargetAtTime(t, r, this._rampTimeConstant),
                                            this.context.listener.forwardY.setTargetAtTime(e, r, this._rampTimeConstant),
                                            this.context.listener.forwardZ.setTargetAtTime(i, r, this._rampTimeConstant),
                                            this.context.listener.upX.setTargetAtTime(n, r, this._rampTimeConstant),
                                            this.context.listener.upY.setTargetAtTime(s, r, this._rampTimeConstant),
                                            this.context.listener.upZ.setTargetAtTime(o, r, this._rampTimeConstant);
                                    } else this.context.listener.setOrientation(t, e, i, n, s, o);
                                    return (this._orientation = Array.prototype.slice.call(arguments)), this;
                                }),
                                Object.defineProperty(t.Listener.prototype, "positionX", {
                                    set: function (t) {
                                        (this._position[0] = t), this.setPosition.apply(this, this._position);
                                    },
                                    get: function () {
                                        return this._position[0];
                                    },
                                }),
                                Object.defineProperty(t.Listener.prototype, "positionY", {
                                    set: function (t) {
                                        (this._position[1] = t), this.setPosition.apply(this, this._position);
                                    },
                                    get: function () {
                                        return this._position[1];
                                    },
                                }),
                                Object.defineProperty(t.Listener.prototype, "positionZ", {
                                    set: function (t) {
                                        (this._position[2] = t), this.setPosition.apply(this, this._position);
                                    },
                                    get: function () {
                                        return this._position[2];
                                    },
                                }),
                                Object.defineProperty(t.Listener.prototype, "forwardX", {
                                    set: function (t) {
                                        (this._orientation[0] = t), this.setOrientation.apply(this, this._orientation);
                                    },
                                    get: function () {
                                        return this._orientation[0];
                                    },
                                }),
                                Object.defineProperty(t.Listener.prototype, "forwardY", {
                                    set: function (t) {
                                        (this._orientation[1] = t), this.setOrientation.apply(this, this._orientation);
                                    },
                                    get: function () {
                                        return this._orientation[1];
                                    },
                                }),
                                Object.defineProperty(t.Listener.prototype, "forwardZ", {
                                    set: function (t) {
                                        (this._orientation[2] = t), this.setOrientation.apply(this, this._orientation);
                                    },
                                    get: function () {
                                        return this._orientation[2];
                                    },
                                }),
                                Object.defineProperty(t.Listener.prototype, "upX", {
                                    set: function (t) {
                                        (this._orientation[3] = t), this.setOrientation.apply(this, this._orientation);
                                    },
                                    get: function () {
                                        return this._orientation[3];
                                    },
                                }),
                                Object.defineProperty(t.Listener.prototype, "upY", {
                                    set: function (t) {
                                        (this._orientation[4] = t), this.setOrientation.apply(this, this._orientation);
                                    },
                                    get: function () {
                                        return this._orientation[4];
                                    },
                                }),
                                Object.defineProperty(t.Listener.prototype, "upZ", {
                                    set: function (t) {
                                        (this._orientation[5] = t), this.setOrientation.apply(this, this._orientation);
                                    },
                                    get: function () {
                                        return this._orientation[5];
                                    },
                                }),
                                (t.Listener.prototype.dispose = function () {
                                    return (this._orientation = null), (this._position = null), this;
                                });
                            var e = t.Listener;
                            return (
                                (t.Listener = new e()),
                                t.Context.on("init", function (i) {
                                    i.Listener instanceof e ? (t.Listener = i.Listener) : (t.Listener = new e()), (i.Listener = t.Listener);
                                }),
                                t.Listener
                            );
                        }),
                        t(function (t) {
                            return (
                                !window.hasOwnProperty("OfflineAudioContext") && window.hasOwnProperty("webkitOfflineAudioContext") && (window.OfflineAudioContext = window.webkitOfflineAudioContext),
                                (t.OfflineContext = function (e, i, n) {
                                    var s = new OfflineAudioContext(e, i * n, n);
                                    t.Context.call(this, s), (this._duration = i), (this._currentTime = 0), (this.lookAhead = this.blockTime), (this.updateInterval = this.blockTime);
                                }),
                                t.extend(t.OfflineContext, t.Context),
                                (t.OfflineContext.prototype.now = function () {
                                    return this._currentTime;
                                }),
                                (t.OfflineContext.prototype._createWorker = function () {
                                    return { postMessage: function () {} };
                                }),
                                (t.OfflineContext.prototype.render = function () {
                                    for (; this._duration - this._currentTime >= 0; ) this.emit("tick"), (this._currentTime += t.prototype.blockTime);
                                    return new Promise(
                                        function (t) {
                                            (this._context.oncomplete = function (e) {
                                                t(e.renderedBuffer);
                                            }),
                                                this._context.startRendering();
                                        }.bind(this)
                                    );
                                }),
                                t.OfflineContext
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Offline = function (e, i) {
                                    var n = t.context.sampleRate,
                                        s = t.context,
                                        o = new t.OfflineContext(2, i, n);
                                    (t.context = o), e(t.Transport);
                                    var r = o.render();
                                    return (
                                        (t.context = s),
                                        r.then(function (e) {
                                            return new t.Buffer(e);
                                        })
                                    );
                                }),
                                t.Offline
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Effect = function () {
                                    this.createInsOuts(1, 1);
                                    var e = this.optionsObject(arguments, ["wet"], t.Effect.defaults);
                                    (this._dryWet = new t.CrossFade(e.wet)),
                                        (this.wet = this._dryWet.fade),
                                        (this.effectSend = new t.Gain()),
                                        (this.effectReturn = new t.Gain()),
                                        this.input.connect(this._dryWet.a),
                                        this.input.connect(this.effectSend),
                                        this.effectReturn.connect(this._dryWet.b),
                                        this._dryWet.connect(this.output),
                                        this._readOnly(["wet"]);
                                }),
                                t.extend(t.Effect),
                                (t.Effect.defaults = { wet: 1 }),
                                (t.Effect.prototype.connectEffect = function (t) {
                                    return this.effectSend.chain(t, this.effectReturn), this;
                                }),
                                (t.Effect.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this._dryWet.dispose(),
                                        (this._dryWet = null),
                                        this.effectSend.dispose(),
                                        (this.effectSend = null),
                                        this.effectReturn.dispose(),
                                        (this.effectReturn = null),
                                        this._writable(["wet"]),
                                        (this.wet = null),
                                        this
                                    );
                                }),
                                t.Effect
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.AutoFilter = function () {
                                    var e = this.optionsObject(arguments, ["frequency", "baseFrequency", "octaves"], t.AutoFilter.defaults);
                                    t.Effect.call(this, e),
                                        (this._lfo = new t.LFO({ frequency: e.frequency, amplitude: e.depth })),
                                        (this.depth = this._lfo.amplitude),
                                        (this.frequency = this._lfo.frequency),
                                        (this.filter = new t.Filter(e.filter)),
                                        (this._octaves = 0),
                                        this.connectEffect(this.filter),
                                        this._lfo.connect(this.filter.frequency),
                                        (this.type = e.type),
                                        this._readOnly(["frequency", "depth"]),
                                        (this.octaves = e.octaves),
                                        (this.baseFrequency = e.baseFrequency);
                                }),
                                t.extend(t.AutoFilter, t.Effect),
                                (t.AutoFilter.defaults = { frequency: 1, type: "sine", depth: 1, baseFrequency: 200, octaves: 2.6, filter: { type: "lowpass", rolloff: -12, Q: 1 } }),
                                (t.AutoFilter.prototype.start = function (t) {
                                    return this._lfo.start(t), this;
                                }),
                                (t.AutoFilter.prototype.stop = function (t) {
                                    return this._lfo.stop(t), this;
                                }),
                                (t.AutoFilter.prototype.sync = function (t) {
                                    return this._lfo.sync(t), this;
                                }),
                                (t.AutoFilter.prototype.unsync = function () {
                                    return this._lfo.unsync(), this;
                                }),
                                Object.defineProperty(t.AutoFilter.prototype, "type", {
                                    get: function () {
                                        return this._lfo.type;
                                    },
                                    set: function (t) {
                                        this._lfo.type = t;
                                    },
                                }),
                                Object.defineProperty(t.AutoFilter.prototype, "baseFrequency", {
                                    get: function () {
                                        return this._lfo.min;
                                    },
                                    set: function (t) {
                                        (this._lfo.min = this.toFrequency(t)), (this.octaves = this._octaves);
                                    },
                                }),
                                Object.defineProperty(t.AutoFilter.prototype, "octaves", {
                                    get: function () {
                                        return this._octaves;
                                    },
                                    set: function (t) {
                                        (this._octaves = t), (this._lfo.max = this.baseFrequency * Math.pow(2, t));
                                    },
                                }),
                                (t.AutoFilter.prototype.dispose = function () {
                                    return (
                                        t.Effect.prototype.dispose.call(this),
                                        this._lfo.dispose(),
                                        (this._lfo = null),
                                        this.filter.dispose(),
                                        (this.filter = null),
                                        this._writable(["frequency", "depth"]),
                                        (this.frequency = null),
                                        (this.depth = null),
                                        this
                                    );
                                }),
                                t.AutoFilter
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.AutoPanner = function () {
                                    var e = this.optionsObject(arguments, ["frequency"], t.AutoPanner.defaults);
                                    t.Effect.call(this, e),
                                        (this._lfo = new t.LFO({ frequency: e.frequency, amplitude: e.depth, min: -1, max: 1 })),
                                        (this.depth = this._lfo.amplitude),
                                        (this._panner = new t.Panner()),
                                        (this.frequency = this._lfo.frequency),
                                        this.connectEffect(this._panner),
                                        this._lfo.connect(this._panner.pan),
                                        (this.type = e.type),
                                        this._readOnly(["depth", "frequency"]);
                                }),
                                t.extend(t.AutoPanner, t.Effect),
                                (t.AutoPanner.defaults = { frequency: 1, type: "sine", depth: 1 }),
                                (t.AutoPanner.prototype.start = function (t) {
                                    return this._lfo.start(t), this;
                                }),
                                (t.AutoPanner.prototype.stop = function (t) {
                                    return this._lfo.stop(t), this;
                                }),
                                (t.AutoPanner.prototype.sync = function (t) {
                                    return this._lfo.sync(t), this;
                                }),
                                (t.AutoPanner.prototype.unsync = function () {
                                    return this._lfo.unsync(), this;
                                }),
                                Object.defineProperty(t.AutoPanner.prototype, "type", {
                                    get: function () {
                                        return this._lfo.type;
                                    },
                                    set: function (t) {
                                        this._lfo.type = t;
                                    },
                                }),
                                (t.AutoPanner.prototype.dispose = function () {
                                    return (
                                        t.Effect.prototype.dispose.call(this),
                                        this._lfo.dispose(),
                                        (this._lfo = null),
                                        this._panner.dispose(),
                                        (this._panner = null),
                                        this._writable(["depth", "frequency"]),
                                        (this.frequency = null),
                                        (this.depth = null),
                                        this
                                    );
                                }),
                                t.AutoPanner
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.AutoWah = function () {
                                    var e = this.optionsObject(arguments, ["baseFrequency", "octaves", "sensitivity"], t.AutoWah.defaults);
                                    t.Effect.call(this, e),
                                        (this.follower = new t.Follower(e.follower)),
                                        (this._sweepRange = new t.ScaleExp(0, 1, 0.5)),
                                        (this._baseFrequency = e.baseFrequency),
                                        (this._octaves = e.octaves),
                                        (this._inputBoost = new t.Gain()),
                                        (this._bandpass = new t.Filter({ rolloff: -48, frequency: 0, Q: e.Q })),
                                        (this._peaking = new t.Filter(0, "peaking")),
                                        (this._peaking.gain.value = e.gain),
                                        (this.gain = this._peaking.gain),
                                        (this.Q = this._bandpass.Q),
                                        this.effectSend.chain(this._inputBoost, this.follower, this._sweepRange),
                                        this._sweepRange.connect(this._bandpass.frequency),
                                        this._sweepRange.connect(this._peaking.frequency),
                                        this.effectSend.chain(this._bandpass, this._peaking, this.effectReturn),
                                        this._setSweepRange(),
                                        (this.sensitivity = e.sensitivity),
                                        this._readOnly(["gain", "Q"]);
                                }),
                                t.extend(t.AutoWah, t.Effect),
                                (t.AutoWah.defaults = { baseFrequency: 100, octaves: 6, sensitivity: 0, Q: 2, gain: 2, follower: { attack: 0.3, release: 0.5 } }),
                                Object.defineProperty(t.AutoWah.prototype, "octaves", {
                                    get: function () {
                                        return this._octaves;
                                    },
                                    set: function (t) {
                                        (this._octaves = t), this._setSweepRange();
                                    },
                                }),
                                Object.defineProperty(t.AutoWah.prototype, "baseFrequency", {
                                    get: function () {
                                        return this._baseFrequency;
                                    },
                                    set: function (t) {
                                        (this._baseFrequency = t), this._setSweepRange();
                                    },
                                }),
                                Object.defineProperty(t.AutoWah.prototype, "sensitivity", {
                                    get: function () {
                                        return this.gainToDb(1 / this._inputBoost.gain.value);
                                    },
                                    set: function (t) {
                                        this._inputBoost.gain.value = 1 / this.dbToGain(t);
                                    },
                                }),
                                (t.AutoWah.prototype._setSweepRange = function () {
                                    (this._sweepRange.min = this._baseFrequency), (this._sweepRange.max = Math.min(this._baseFrequency * Math.pow(2, this._octaves), this.context.sampleRate / 2));
                                }),
                                (t.AutoWah.prototype.dispose = function () {
                                    return (
                                        t.Effect.prototype.dispose.call(this),
                                        this.follower.dispose(),
                                        (this.follower = null),
                                        this._sweepRange.dispose(),
                                        (this._sweepRange = null),
                                        this._bandpass.dispose(),
                                        (this._bandpass = null),
                                        this._peaking.dispose(),
                                        (this._peaking = null),
                                        this._inputBoost.dispose(),
                                        (this._inputBoost = null),
                                        this._writable(["gain", "Q"]),
                                        (this.gain = null),
                                        (this.Q = null),
                                        this
                                    );
                                }),
                                t.AutoWah
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.BitCrusher = function () {
                                    var e = this.optionsObject(arguments, ["bits"], t.BitCrusher.defaults);
                                    t.Effect.call(this, e);
                                    var i = 1 / Math.pow(2, e.bits - 1);
                                    (this._subtract = new t.Subtract()),
                                        (this._modulo = new t.Modulo(i)),
                                        (this._bits = e.bits),
                                        this.effectSend.fan(this._subtract, this._modulo),
                                        this._modulo.connect(this._subtract, 0, 1),
                                        this._subtract.connect(this.effectReturn);
                                }),
                                t.extend(t.BitCrusher, t.Effect),
                                (t.BitCrusher.defaults = { bits: 4 }),
                                Object.defineProperty(t.BitCrusher.prototype, "bits", {
                                    get: function () {
                                        return this._bits;
                                    },
                                    set: function (t) {
                                        this._bits = t;
                                        var e = 1 / Math.pow(2, t - 1);
                                        this._modulo.value = e;
                                    },
                                }),
                                (t.BitCrusher.prototype.dispose = function () {
                                    return t.Effect.prototype.dispose.call(this), this._subtract.dispose(), (this._subtract = null), this._modulo.dispose(), (this._modulo = null), this;
                                }),
                                t.BitCrusher
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Chebyshev = function () {
                                    var e = this.optionsObject(arguments, ["order"], t.Chebyshev.defaults);
                                    t.Effect.call(this, e), (this._shaper = new t.WaveShaper(4096)), (this._order = e.order), this.connectEffect(this._shaper), (this.order = e.order), (this.oversample = e.oversample);
                                }),
                                t.extend(t.Chebyshev, t.Effect),
                                (t.Chebyshev.defaults = { order: 1, oversample: "none" }),
                                (t.Chebyshev.prototype._getCoefficient = function (t, e, i) {
                                    return i.hasOwnProperty(e) ? i[e] : ((i[e] = 0 === e ? 0 : 1 === e ? t : 2 * t * this._getCoefficient(t, e - 1, i) - this._getCoefficient(t, e - 2, i)), i[e]);
                                }),
                                Object.defineProperty(t.Chebyshev.prototype, "order", {
                                    get: function () {
                                        return this._order;
                                    },
                                    set: function (t) {
                                        this._order = t;
                                        for (var e = new Array(4096), i = e.length, n = 0; n < i; ++n) {
                                            var s = (2 * n) / i - 1;
                                            e[n] = 0 === s ? 0 : this._getCoefficient(s, t, {});
                                        }
                                        this._shaper.curve = e;
                                    },
                                }),
                                Object.defineProperty(t.Chebyshev.prototype, "oversample", {
                                    get: function () {
                                        return this._shaper.oversample;
                                    },
                                    set: function (t) {
                                        this._shaper.oversample = t;
                                    },
                                }),
                                (t.Chebyshev.prototype.dispose = function () {
                                    return t.Effect.prototype.dispose.call(this), this._shaper.dispose(), (this._shaper = null), this;
                                }),
                                t.Chebyshev
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.StereoEffect = function () {
                                    this.createInsOuts(1, 1);
                                    var e = this.optionsObject(arguments, ["wet"], t.Effect.defaults);
                                    (this._dryWet = new t.CrossFade(e.wet)),
                                        (this.wet = this._dryWet.fade),
                                        (this._split = new t.Split()),
                                        (this.effectSendL = this._split.left),
                                        (this.effectSendR = this._split.right),
                                        (this._merge = new t.Merge()),
                                        (this.effectReturnL = this._merge.left),
                                        (this.effectReturnR = this._merge.right),
                                        this.input.connect(this._split),
                                        this.input.connect(this._dryWet, 0, 0),
                                        this._merge.connect(this._dryWet, 0, 1),
                                        this._dryWet.connect(this.output),
                                        this._readOnly(["wet"]);
                                }),
                                t.extend(t.StereoEffect, t.Effect),
                                (t.StereoEffect.prototype.dispose = function () {
                                    return (
                                        t.prototype.dispose.call(this),
                                        this._dryWet.dispose(),
                                        (this._dryWet = null),
                                        this._split.dispose(),
                                        (this._split = null),
                                        this._merge.dispose(),
                                        (this._merge = null),
                                        (this.effectSendL = null),
                                        (this.effectSendR = null),
                                        (this.effectReturnL = null),
                                        (this.effectReturnR = null),
                                        this._writable(["wet"]),
                                        (this.wet = null),
                                        this
                                    );
                                }),
                                t.StereoEffect
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.FeedbackEffect = function () {
                                    var e = this.optionsObject(arguments, ["feedback"]);
                                    (e = this.defaultArg(e, t.FeedbackEffect.defaults)),
                                        t.Effect.call(this, e),
                                        (this._feedbackGain = new t.Gain(e.feedback, t.Type.NormalRange)),
                                        (this.feedback = this._feedbackGain.gain),
                                        this.effectReturn.chain(this._feedbackGain, this.effectSend),
                                        this._readOnly(["feedback"]);
                                }),
                                t.extend(t.FeedbackEffect, t.Effect),
                                (t.FeedbackEffect.defaults = { feedback: 0.125 }),
                                (t.FeedbackEffect.prototype.dispose = function () {
                                    return t.Effect.prototype.dispose.call(this), this._writable(["feedback"]), this._feedbackGain.dispose(), (this._feedbackGain = null), (this.feedback = null), this;
                                }),
                                t.FeedbackEffect
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.StereoXFeedbackEffect = function () {
                                    var e = this.optionsObject(arguments, ["feedback"], t.FeedbackEffect.defaults);
                                    t.StereoEffect.call(this, e),
                                        (this.feedback = new t.Signal(e.feedback, t.Type.NormalRange)),
                                        (this._feedbackLR = new t.Gain()),
                                        (this._feedbackRL = new t.Gain()),
                                        this.effectReturnL.chain(this._feedbackLR, this.effectSendR),
                                        this.effectReturnR.chain(this._feedbackRL, this.effectSendL),
                                        this.feedback.fan(this._feedbackLR.gain, this._feedbackRL.gain),
                                        this._readOnly(["feedback"]);
                                }),
                                t.extend(t.StereoXFeedbackEffect, t.FeedbackEffect),
                                (t.StereoXFeedbackEffect.prototype.dispose = function () {
                                    return (
                                        t.StereoEffect.prototype.dispose.call(this),
                                        this._writable(["feedback"]),
                                        this.feedback.dispose(),
                                        (this.feedback = null),
                                        this._feedbackLR.dispose(),
                                        (this._feedbackLR = null),
                                        this._feedbackRL.dispose(),
                                        (this._feedbackRL = null),
                                        this
                                    );
                                }),
                                t.StereoXFeedbackEffect
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Chorus = function () {
                                    var e = this.optionsObject(arguments, ["frequency", "delayTime", "depth"], t.Chorus.defaults);
                                    t.StereoXFeedbackEffect.call(this, e),
                                        (this._depth = e.depth),
                                        (this._delayTime = e.delayTime / 1e3),
                                        (this._lfoL = new t.LFO({ frequency: e.frequency, min: 0, max: 1 })),
                                        (this._lfoR = new t.LFO({ frequency: e.frequency, min: 0, max: 1, phase: 180 })),
                                        (this._delayNodeL = new t.Delay()),
                                        (this._delayNodeR = new t.Delay()),
                                        (this.frequency = this._lfoL.frequency),
                                        this.effectSendL.chain(this._delayNodeL, this.effectReturnL),
                                        this.effectSendR.chain(this._delayNodeR, this.effectReturnR),
                                        this.effectSendL.connect(this.effectReturnL),
                                        this.effectSendR.connect(this.effectReturnR),
                                        this._lfoL.connect(this._delayNodeL.delayTime),
                                        this._lfoR.connect(this._delayNodeR.delayTime),
                                        this._lfoL.start(),
                                        this._lfoR.start(),
                                        this._lfoL.frequency.connect(this._lfoR.frequency),
                                        (this.depth = this._depth),
                                        (this.frequency.value = e.frequency),
                                        (this.type = e.type),
                                        this._readOnly(["frequency"]),
                                        (this.spread = e.spread);
                                }),
                                t.extend(t.Chorus, t.StereoXFeedbackEffect),
                                (t.Chorus.defaults = { frequency: 1.5, delayTime: 3.5, depth: 0.7, feedback: 0.1, type: "sine", spread: 180 }),
                                Object.defineProperty(t.Chorus.prototype, "depth", {
                                    get: function () {
                                        return this._depth;
                                    },
                                    set: function (t) {
                                        this._depth = t;
                                        var e = this._delayTime * t;
                                        (this._lfoL.min = Math.max(this._delayTime - e, 0)), (this._lfoL.max = this._delayTime + e), (this._lfoR.min = Math.max(this._delayTime - e, 0)), (this._lfoR.max = this._delayTime + e);
                                    },
                                }),
                                Object.defineProperty(t.Chorus.prototype, "delayTime", {
                                    get: function () {
                                        return 1e3 * this._delayTime;
                                    },
                                    set: function (t) {
                                        (this._delayTime = t / 1e3), (this.depth = this._depth);
                                    },
                                }),
                                Object.defineProperty(t.Chorus.prototype, "type", {
                                    get: function () {
                                        return this._lfoL.type;
                                    },
                                    set: function (t) {
                                        (this._lfoL.type = t), (this._lfoR.type = t);
                                    },
                                }),
                                Object.defineProperty(t.Chorus.prototype, "spread", {
                                    get: function () {
                                        return this._lfoR.phase - this._lfoL.phase;
                                    },
                                    set: function (t) {
                                        (this._lfoL.phase = 90 - t / 2), (this._lfoR.phase = t / 2 + 90);
                                    },
                                }),
                                (t.Chorus.prototype.dispose = function () {
                                    return (
                                        t.StereoXFeedbackEffect.prototype.dispose.call(this),
                                        this._lfoL.dispose(),
                                        (this._lfoL = null),
                                        this._lfoR.dispose(),
                                        (this._lfoR = null),
                                        this._delayNodeL.dispose(),
                                        (this._delayNodeL = null),
                                        this._delayNodeR.dispose(),
                                        (this._delayNodeR = null),
                                        this._writable("frequency"),
                                        (this.frequency = null),
                                        this
                                    );
                                }),
                                t.Chorus
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Convolver = function () {
                                    var e = this.optionsObject(arguments, ["url", "onload"], t.Convolver.defaults);
                                    t.Effect.call(this, e),
                                        (this._convolver = this.context.createConvolver()),
                                        (this._buffer = new t.Buffer()),
                                        this.isString(e.url)
                                            ? this._buffer.load(
                                                  e.url,
                                                  function (t) {
                                                      (this.buffer = t), e.onload();
                                                  }.bind(this)
                                              )
                                            : e.url && ((this.buffer = e.url), e.onload()),
                                        this.connectEffect(this._convolver);
                                }),
                                t.extend(t.Convolver, t.Effect),
                                (t.Convolver.defaults = { onload: t.noOp }),
                                Object.defineProperty(t.Convolver.prototype, "buffer", {
                                    get: function () {
                                        return this._buffer.get();
                                    },
                                    set: function (t) {
                                        this._buffer.set(t), (this._convolver.buffer = this._buffer.get());
                                    },
                                }),
                                (t.Convolver.prototype.load = function (t, e) {
                                    return this._buffer.load(
                                        t,
                                        function (t) {
                                            (this.buffer = t), e && e();
                                        }.bind(this)
                                    );
                                }),
                                (t.Convolver.prototype.dispose = function () {
                                    return t.Effect.prototype.dispose.call(this), this._convolver.disconnect(), (this._convolver = null), this._buffer.dispose(), (this._buffer = null), this;
                                }),
                                t.Convolver
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Distortion = function () {
                                    var e = this.optionsObject(arguments, ["distortion"], t.Distortion.defaults);
                                    t.Effect.call(this, e), (this._shaper = new t.WaveShaper(4096)), (this._distortion = e.distortion), this.connectEffect(this._shaper), (this.distortion = e.distortion), (this.oversample = e.oversample);
                                }),
                                t.extend(t.Distortion, t.Effect),
                                (t.Distortion.defaults = { distortion: 0.4, oversample: "none" }),
                                Object.defineProperty(t.Distortion.prototype, "distortion", {
                                    get: function () {
                                        return this._distortion;
                                    },
                                    set: function (t) {
                                        this._distortion = t;
                                        var e = 100 * t,
                                            i = Math.PI / 180;
                                        this._shaper.setMap(function (t) {
                                            return Math.abs(t) < 0.001 ? 0 : ((3 + e) * t * 20 * i) / (Math.PI + e * Math.abs(t));
                                        });
                                    },
                                }),
                                Object.defineProperty(t.Distortion.prototype, "oversample", {
                                    get: function () {
                                        return this._shaper.oversample;
                                    },
                                    set: function (t) {
                                        this._shaper.oversample = t;
                                    },
                                }),
                                (t.Distortion.prototype.dispose = function () {
                                    return t.Effect.prototype.dispose.call(this), this._shaper.dispose(), (this._shaper = null), this;
                                }),
                                t.Distortion
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.FeedbackDelay = function () {
                                    var e = this.optionsObject(arguments, ["delayTime", "feedback"], t.FeedbackDelay.defaults);
                                    t.FeedbackEffect.call(this, e), (this._delayNode = new t.Delay(e.delayTime)), (this.delayTime = this._delayNode.delayTime), this.connectEffect(this._delayNode), this._readOnly(["delayTime"]);
                                }),
                                t.extend(t.FeedbackDelay, t.FeedbackEffect),
                                (t.FeedbackDelay.defaults = { delayTime: 0.25 }),
                                (t.FeedbackDelay.prototype.dispose = function () {
                                    return t.FeedbackEffect.prototype.dispose.call(this), this._delayNode.dispose(), (this._delayNode = null), this._writable(["delayTime"]), (this.delayTime = null), this;
                                }),
                                t.FeedbackDelay
                            );
                        }),
                        t(function (t) {
                            var e = [1557 / 44100, 1617 / 44100, 1491 / 44100, 1422 / 44100, 1277 / 44100, 1356 / 44100, 1188 / 44100, 1116 / 44100],
                                i = [225, 556, 441, 341];
                            return (
                                (t.Freeverb = function () {
                                    var n = this.optionsObject(arguments, ["roomSize", "dampening"], t.Freeverb.defaults);
                                    t.StereoEffect.call(this, n),
                                        (this.roomSize = new t.Signal(n.roomSize, t.Type.NormalRange)),
                                        (this.dampening = new t.Signal(n.dampening, t.Type.Frequency)),
                                        (this._combFilters = []),
                                        (this._allpassFiltersL = []),
                                        (this._allpassFiltersR = []);
                                    for (var s = 0; s < i.length; s++) {
                                        var o = this.context.createBiquadFilter();
                                        (o.type = "allpass"), (o.frequency.value = i[s]), this._allpassFiltersL.push(o);
                                    }
                                    for (var r = 0; r < i.length; r++) {
                                        var a = this.context.createBiquadFilter();
                                        (a.type = "allpass"), (a.frequency.value = i[r]), this._allpassFiltersR.push(a);
                                    }
                                    for (var h = 0; h < e.length; h++) {
                                        var l = new t.LowpassCombFilter(e[h]);
                                        h < e.length / 2 ? this.effectSendL.chain(l, this._allpassFiltersL[0]) : this.effectSendR.chain(l, this._allpassFiltersR[0]),
                                            this.roomSize.connect(l.resonance),
                                            this.dampening.connect(l.dampening),
                                            this._combFilters.push(l);
                                    }
                                    this.connectSeries.apply(this, this._allpassFiltersL),
                                        this.connectSeries.apply(this, this._allpassFiltersR),
                                        this._allpassFiltersL[this._allpassFiltersL.length - 1].connect(this.effectReturnL),
                                        this._allpassFiltersR[this._allpassFiltersR.length - 1].connect(this.effectReturnR),
                                        this._readOnly(["roomSize", "dampening"]);
                                }),
                                t.extend(t.Freeverb, t.StereoEffect),
                                (t.Freeverb.defaults = { roomSize: 0.7, dampening: 3e3 }),
                                (t.Freeverb.prototype.dispose = function () {
                                    t.StereoEffect.prototype.dispose.call(this);
                                    for (var e = 0; e < this._allpassFiltersL.length; e++) this._allpassFiltersL[e].disconnect(), (this._allpassFiltersL[e] = null);
                                    this._allpassFiltersL = null;
                                    for (var i = 0; i < this._allpassFiltersR.length; i++) this._allpassFiltersR[i].disconnect(), (this._allpassFiltersR[i] = null);
                                    this._allpassFiltersR = null;
                                    for (var n = 0; n < this._combFilters.length; n++) this._combFilters[n].dispose(), (this._combFilters[n] = null);
                                    return (this._combFilters = null), this._writable(["roomSize", "dampening"]), this.roomSize.dispose(), (this.roomSize = null), this.dampening.dispose(), (this.dampening = null), this;
                                }),
                                t.Freeverb
                            );
                        }),
                        t(function (t) {
                            var e = [0.06748, 0.06404, 0.08212, 0.09004],
                                i = [0.773, 0.802, 0.753, 0.733],
                                n = [347, 113, 37];
                            return (
                                (t.JCReverb = function () {
                                    var s = this.optionsObject(arguments, ["roomSize"], t.JCReverb.defaults);
                                    t.StereoEffect.call(this, s),
                                        (this.roomSize = new t.Signal(s.roomSize, t.Type.NormalRange)),
                                        (this._scaleRoomSize = new t.Scale(-0.733, 0.197)),
                                        (this._allpassFilters = []),
                                        (this._feedbackCombFilters = []);
                                    for (var o = 0; o < n.length; o++) {
                                        var r = this.context.createBiquadFilter();
                                        (r.type = "allpass"), (r.frequency.value = n[o]), this._allpassFilters.push(r);
                                    }
                                    for (var a = 0; a < e.length; a++) {
                                        var h = new t.FeedbackCombFilter(e[a], 0.1);
                                        this._scaleRoomSize.connect(h.resonance),
                                            (h.resonance.value = i[a]),
                                            this._allpassFilters[this._allpassFilters.length - 1].connect(h),
                                            a < e.length / 2 ? h.connect(this.effectReturnL) : h.connect(this.effectReturnR),
                                            this._feedbackCombFilters.push(h);
                                    }
                                    this.roomSize.connect(this._scaleRoomSize),
                                        this.connectSeries.apply(this, this._allpassFilters),
                                        this.effectSendL.connect(this._allpassFilters[0]),
                                        this.effectSendR.connect(this._allpassFilters[0]),
                                        this._readOnly(["roomSize"]);
                                }),
                                t.extend(t.JCReverb, t.StereoEffect),
                                (t.JCReverb.defaults = { roomSize: 0.5 }),
                                (t.JCReverb.prototype.dispose = function () {
                                    t.StereoEffect.prototype.dispose.call(this);
                                    for (var e = 0; e < this._allpassFilters.length; e++) this._allpassFilters[e].disconnect(), (this._allpassFilters[e] = null);
                                    this._allpassFilters = null;
                                    for (var i = 0; i < this._feedbackCombFilters.length; i++) this._feedbackCombFilters[i].dispose(), (this._feedbackCombFilters[i] = null);
                                    return (this._feedbackCombFilters = null), this._writable(["roomSize"]), this.roomSize.dispose(), (this.roomSize = null), this._scaleRoomSize.dispose(), (this._scaleRoomSize = null), this;
                                }),
                                t.JCReverb
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.MidSideEffect = function () {
                                    t.Effect.apply(this, arguments),
                                        (this._midSideSplit = new t.MidSideSplit()),
                                        (this._midSideMerge = new t.MidSideMerge()),
                                        (this.midSend = this._midSideSplit.mid),
                                        (this.sideSend = this._midSideSplit.side),
                                        (this.midReturn = this._midSideMerge.mid),
                                        (this.sideReturn = this._midSideMerge.side),
                                        this.effectSend.connect(this._midSideSplit),
                                        this._midSideMerge.connect(this.effectReturn);
                                }),
                                t.extend(t.MidSideEffect, t.Effect),
                                (t.MidSideEffect.prototype.dispose = function () {
                                    return (
                                        t.Effect.prototype.dispose.call(this),
                                        this._midSideSplit.dispose(),
                                        (this._midSideSplit = null),
                                        this._midSideMerge.dispose(),
                                        (this._midSideMerge = null),
                                        (this.midSend = null),
                                        (this.sideSend = null),
                                        (this.midReturn = null),
                                        (this.sideReturn = null),
                                        this
                                    );
                                }),
                                t.MidSideEffect
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Phaser = function () {
                                    var e = this.optionsObject(arguments, ["frequency", "octaves", "baseFrequency"], t.Phaser.defaults);
                                    t.StereoEffect.call(this, e),
                                        (this._lfoL = new t.LFO(e.frequency, 0, 1)),
                                        (this._lfoR = new t.LFO(e.frequency, 0, 1)),
                                        (this._lfoR.phase = 180),
                                        (this._baseFrequency = e.baseFrequency),
                                        (this._octaves = e.octaves),
                                        (this.Q = new t.Signal(e.Q, t.Type.Positive)),
                                        (this._filtersL = this._makeFilters(e.stages, this._lfoL, this.Q)),
                                        (this._filtersR = this._makeFilters(e.stages, this._lfoR, this.Q)),
                                        (this.frequency = this._lfoL.frequency),
                                        (this.frequency.value = e.frequency),
                                        this.effectSendL.connect(this._filtersL[0]),
                                        this.effectSendR.connect(this._filtersR[0]),
                                        this._filtersL[e.stages - 1].connect(this.effectReturnL),
                                        this._filtersR[e.stages - 1].connect(this.effectReturnR),
                                        this._lfoL.frequency.connect(this._lfoR.frequency),
                                        (this.baseFrequency = e.baseFrequency),
                                        (this.octaves = e.octaves),
                                        this._lfoL.start(),
                                        this._lfoR.start(),
                                        this._readOnly(["frequency", "Q"]);
                                }),
                                t.extend(t.Phaser, t.StereoEffect),
                                (t.Phaser.defaults = { frequency: 0.5, octaves: 3, stages: 10, Q: 10, baseFrequency: 350 }),
                                (t.Phaser.prototype._makeFilters = function (t, e, i) {
                                    for (var n = new Array(t), s = 0; s < t; s++) {
                                        var o = this.context.createBiquadFilter();
                                        (o.type = "allpass"), i.connect(o.Q), e.connect(o.frequency), (n[s] = o);
                                    }
                                    return this.connectSeries.apply(this, n), n;
                                }),
                                Object.defineProperty(t.Phaser.prototype, "octaves", {
                                    get: function () {
                                        return this._octaves;
                                    },
                                    set: function (t) {
                                        this._octaves = t;
                                        var e = this._baseFrequency * Math.pow(2, t);
                                        (this._lfoL.max = e), (this._lfoR.max = e);
                                    },
                                }),
                                Object.defineProperty(t.Phaser.prototype, "baseFrequency", {
                                    get: function () {
                                        return this._baseFrequency;
                                    },
                                    set: function (t) {
                                        (this._baseFrequency = t), (this._lfoL.min = t), (this._lfoR.min = t), (this.octaves = this._octaves);
                                    },
                                }),
                                (t.Phaser.prototype.dispose = function () {
                                    t.StereoEffect.prototype.dispose.call(this), this._writable(["frequency", "Q"]), this.Q.dispose(), (this.Q = null), this._lfoL.dispose(), (this._lfoL = null), this._lfoR.dispose(), (this._lfoR = null);
                                    for (var e = 0; e < this._filtersL.length; e++) this._filtersL[e].disconnect(), (this._filtersL[e] = null);
                                    this._filtersL = null;
                                    for (var i = 0; i < this._filtersR.length; i++) this._filtersR[i].disconnect(), (this._filtersR[i] = null);
                                    return (this._filtersR = null), (this.frequency = null), this;
                                }),
                                t.Phaser
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.PingPongDelay = function () {
                                    var e = this.optionsObject(arguments, ["delayTime", "feedback"], t.PingPongDelay.defaults);
                                    t.StereoXFeedbackEffect.call(this, e),
                                        (this._leftDelay = new t.Delay(0, e.maxDelayTime)),
                                        (this._rightDelay = new t.Delay(0, e.maxDelayTime)),
                                        (this._rightPreDelay = new t.Delay(0, e.maxDelayTime)),
                                        (this.delayTime = new t.Signal(e.delayTime, t.Type.Time)),
                                        this.effectSendL.chain(this._leftDelay, this.effectReturnL),
                                        this.effectSendR.chain(this._rightPreDelay, this._rightDelay, this.effectReturnR),
                                        this.delayTime.fan(this._leftDelay.delayTime, this._rightDelay.delayTime, this._rightPreDelay.delayTime),
                                        this._feedbackLR.disconnect(),
                                        this._feedbackLR.connect(this._rightDelay),
                                        this._readOnly(["delayTime"]);
                                }),
                                t.extend(t.PingPongDelay, t.StereoXFeedbackEffect),
                                (t.PingPongDelay.defaults = { delayTime: 0.25, maxDelayTime: 1 }),
                                (t.PingPongDelay.prototype.dispose = function () {
                                    return (
                                        t.StereoXFeedbackEffect.prototype.dispose.call(this),
                                        this._leftDelay.dispose(),
                                        (this._leftDelay = null),
                                        this._rightDelay.dispose(),
                                        (this._rightDelay = null),
                                        this._rightPreDelay.dispose(),
                                        (this._rightPreDelay = null),
                                        this._writable(["delayTime"]),
                                        this.delayTime.dispose(),
                                        (this.delayTime = null),
                                        this
                                    );
                                }),
                                t.PingPongDelay
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.PitchShift = function () {
                                    var e = this.optionsObject(arguments, ["pitch"], t.PitchShift.defaults);
                                    t.FeedbackEffect.call(this, e),
                                        (this._frequency = new t.Signal(0)),
                                        (this._delayA = new t.Delay(0, 1)),
                                        (this._lfoA = new t.LFO({ min: 0, max: 0.1, type: "sawtooth" }).connect(this._delayA.delayTime)),
                                        (this._delayB = new t.Delay(0, 1)),
                                        (this._lfoB = new t.LFO({ min: 0, max: 0.1, type: "sawtooth", phase: 180 }).connect(this._delayB.delayTime)),
                                        (this._crossFade = new t.CrossFade()),
                                        (this._crossFadeLFO = new t.LFO({ min: 0, max: 1, type: "triangle", phase: 90 }).connect(this._crossFade.fade)),
                                        (this._feedbackDelay = new t.Delay(e.delayTime)),
                                        (this.delayTime = this._feedbackDelay.delayTime),
                                        this._readOnly("delayTime"),
                                        (this._pitch = e.pitch),
                                        (this._windowSize = e.windowSize),
                                        this._delayA.connect(this._crossFade.a),
                                        this._delayB.connect(this._crossFade.b),
                                        this._frequency.fan(this._lfoA.frequency, this._lfoB.frequency, this._crossFadeLFO.frequency),
                                        this.effectSend.fan(this._delayA, this._delayB),
                                        this._crossFade.chain(this._feedbackDelay, this.effectReturn);
                                    var i = this.now();
                                    this._lfoA.start(i), this._lfoB.start(i), this._crossFadeLFO.start(i), (this.windowSize = this._windowSize);
                                }),
                                t.extend(t.PitchShift, t.FeedbackEffect),
                                (t.PitchShift.defaults = { pitch: 0, windowSize: 0.1, delayTime: 0, feedback: 0 }),
                                Object.defineProperty(t.PitchShift.prototype, "pitch", {
                                    get: function () {
                                        return this._pitch;
                                    },
                                    set: function (t) {
                                        this._pitch = t;
                                        var e = 0;
                                        t < 0
                                            ? ((this._lfoA.min = 0), (this._lfoA.max = this._windowSize), (this._lfoB.min = 0), (this._lfoB.max = this._windowSize), (e = this.intervalToFrequencyRatio(t - 1) + 1))
                                            : ((this._lfoA.min = this._windowSize), (this._lfoA.max = 0), (this._lfoB.min = this._windowSize), (this._lfoB.max = 0), (e = this.intervalToFrequencyRatio(t) - 1)),
                                            (this._frequency.value = e * (1.2 / this._windowSize));
                                    },
                                }),
                                Object.defineProperty(t.PitchShift.prototype, "windowSize", {
                                    get: function () {
                                        return this._windowSize;
                                    },
                                    set: function (t) {
                                        (this._windowSize = this.toSeconds(t)), (this.pitch = this._pitch);
                                    },
                                }),
                                (t.PitchShift.prototype.dispose = function () {
                                    return (
                                        t.FeedbackEffect.prototype.dispose.call(this),
                                        this._frequency.dispose(),
                                        (this._frequency = null),
                                        this._delayA.disconnect(),
                                        (this._delayA = null),
                                        this._delayB.disconnect(),
                                        (this._delayB = null),
                                        this._lfoA.dispose(),
                                        (this._lfoA = null),
                                        this._lfoB.dispose(),
                                        (this._lfoB = null),
                                        this._crossFade.dispose(),
                                        (this._crossFade = null),
                                        this._crossFadeLFO.dispose(),
                                        (this._crossFadeLFO = null),
                                        this._writable("delayTime"),
                                        this._feedbackDelay.dispose(),
                                        (this._feedbackDelay = null),
                                        (this.delayTime = null),
                                        this
                                    );
                                }),
                                t.PitchShift
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.StereoFeedbackEffect = function () {
                                    var e = this.optionsObject(arguments, ["feedback"], t.FeedbackEffect.defaults);
                                    t.StereoEffect.call(this, e),
                                        (this.feedback = new t.Signal(e.feedback, t.Type.NormalRange)),
                                        (this._feedbackL = new t.Gain()),
                                        (this._feedbackR = new t.Gain()),
                                        this.effectReturnL.chain(this._feedbackL, this.effectSendL),
                                        this.effectReturnR.chain(this._feedbackR, this.effectSendR),
                                        this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain),
                                        this._readOnly(["feedback"]);
                                }),
                                t.extend(t.StereoFeedbackEffect, t.FeedbackEffect),
                                (t.StereoFeedbackEffect.prototype.dispose = function () {
                                    return (
                                        t.StereoEffect.prototype.dispose.call(this),
                                        this._writable(["feedback"]),
                                        this.feedback.dispose(),
                                        (this.feedback = null),
                                        this._feedbackL.dispose(),
                                        (this._feedbackL = null),
                                        this._feedbackR.dispose(),
                                        (this._feedbackR = null),
                                        this
                                    );
                                }),
                                t.StereoFeedbackEffect
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.StereoWidener = function () {
                                    var e = this.optionsObject(arguments, ["width"], t.StereoWidener.defaults);
                                    t.MidSideEffect.call(this, e),
                                        (this.width = new t.Signal(e.width, t.Type.NormalRange)),
                                        (this._midMult = new t.Expr("$0 * ($1 * (1 - $2))")),
                                        (this._sideMult = new t.Expr("$0 * ($1 * $2)")),
                                        (this._two = new t.Signal(2)),
                                        this._two.connect(this._midMult, 0, 1),
                                        this.width.connect(this._midMult, 0, 2),
                                        this._two.connect(this._sideMult, 0, 1),
                                        this.width.connect(this._sideMult, 0, 2),
                                        this.midSend.chain(this._midMult, this.midReturn),
                                        this.sideSend.chain(this._sideMult, this.sideReturn),
                                        this._readOnly(["width"]);
                                }),
                                t.extend(t.StereoWidener, t.MidSideEffect),
                                (t.StereoWidener.defaults = { width: 0.5 }),
                                (t.StereoWidener.prototype.dispose = function () {
                                    return (
                                        t.MidSideEffect.prototype.dispose.call(this),
                                        this._writable(["width"]),
                                        this.width.dispose(),
                                        (this.width = null),
                                        this._midMult.dispose(),
                                        (this._midMult = null),
                                        this._sideMult.dispose(),
                                        (this._sideMult = null),
                                        this._two.dispose(),
                                        (this._two = null),
                                        this
                                    );
                                }),
                                t.StereoWidener
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Tremolo = function () {
                                    var e = this.optionsObject(arguments, ["frequency", "depth"], t.Tremolo.defaults);
                                    t.StereoEffect.call(this, e),
                                        (this._lfoL = new t.LFO({ phase: e.spread, min: 1, max: 0 })),
                                        (this._lfoR = new t.LFO({ phase: e.spread, min: 1, max: 0 })),
                                        (this._amplitudeL = new t.Gain()),
                                        (this._amplitudeR = new t.Gain()),
                                        (this.frequency = new t.Signal(e.frequency, t.Type.Frequency)),
                                        (this.depth = new t.Signal(e.depth, t.Type.NormalRange)),
                                        this._readOnly(["frequency", "depth"]),
                                        this.effectSendL.chain(this._amplitudeL, this.effectReturnL),
                                        this.effectSendR.chain(this._amplitudeR, this.effectReturnR),
                                        this._lfoL.connect(this._amplitudeL.gain),
                                        this._lfoR.connect(this._amplitudeR.gain),
                                        this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency),
                                        this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude),
                                        (this.type = e.type),
                                        (this.spread = e.spread);
                                }),
                                t.extend(t.Tremolo, t.StereoEffect),
                                (t.Tremolo.defaults = { frequency: 10, type: "sine", depth: 0.5, spread: 180 }),
                                (t.Tremolo.prototype.start = function (t) {
                                    return this._lfoL.start(t), this._lfoR.start(t), this;
                                }),
                                (t.Tremolo.prototype.stop = function (t) {
                                    return this._lfoL.stop(t), this._lfoR.stop(t), this;
                                }),
                                (t.Tremolo.prototype.sync = function (t) {
                                    return this._lfoL.sync(t), this._lfoR.sync(t), this;
                                }),
                                (t.Tremolo.prototype.unsync = function () {
                                    return this._lfoL.unsync(), this._lfoR.unsync(), this;
                                }),
                                Object.defineProperty(t.Tremolo.prototype, "type", {
                                    get: function () {
                                        return this._lfoL.type;
                                    },
                                    set: function (t) {
                                        (this._lfoL.type = t), (this._lfoR.type = t);
                                    },
                                }),
                                Object.defineProperty(t.Tremolo.prototype, "spread", {
                                    get: function () {
                                        return this._lfoR.phase - this._lfoL.phase;
                                    },
                                    set: function (t) {
                                        (this._lfoL.phase = 90 - t / 2), (this._lfoR.phase = t / 2 + 90);
                                    },
                                }),
                                (t.Tremolo.prototype.dispose = function () {
                                    return (
                                        t.StereoEffect.prototype.dispose.call(this),
                                        this._writable(["frequency", "depth"]),
                                        this._lfoL.dispose(),
                                        (this._lfoL = null),
                                        this._lfoR.dispose(),
                                        (this._lfoR = null),
                                        this._amplitudeL.dispose(),
                                        (this._amplitudeL = null),
                                        this._amplitudeR.dispose(),
                                        (this._amplitudeR = null),
                                        (this.frequency = null),
                                        (this.depth = null),
                                        this
                                    );
                                }),
                                t.Tremolo
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Vibrato = function () {
                                    var e = this.optionsObject(arguments, ["frequency", "depth"], t.Vibrato.defaults);
                                    t.Effect.call(this, e),
                                        (this._delayNode = new t.Delay(0, e.maxDelay)),
                                        (this._lfo = new t.LFO({ type: e.type, min: 0, max: e.maxDelay, frequency: e.frequency, phase: -90 }).start().connect(this._delayNode.delayTime)),
                                        (this.frequency = this._lfo.frequency),
                                        (this.depth = this._lfo.amplitude),
                                        (this.depth.value = e.depth),
                                        this._readOnly(["frequency", "depth"]),
                                        this.effectSend.chain(this._delayNode, this.effectReturn);
                                }),
                                t.extend(t.Vibrato, t.Effect),
                                (t.Vibrato.defaults = { maxDelay: 0.005, frequency: 5, depth: 0.1, type: "sine" }),
                                Object.defineProperty(t.Vibrato.prototype, "type", {
                                    get: function () {
                                        return this._lfo.type;
                                    },
                                    set: function (t) {
                                        this._lfo.type = t;
                                    },
                                }),
                                (t.Vibrato.prototype.dispose = function () {
                                    t.Effect.prototype.dispose.call(this),
                                        this._delayNode.dispose(),
                                        (this._delayNode = null),
                                        this._lfo.dispose(),
                                        (this._lfo = null),
                                        this._writable(["frequency", "depth"]),
                                        (this.frequency = null),
                                        (this.depth = null);
                                }),
                                t.Vibrato
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Event = function () {
                                    var e = this.optionsObject(arguments, ["callback", "value"], t.Event.defaults);
                                    (this._loop = e.loop),
                                        (this.callback = e.callback),
                                        (this.value = e.value),
                                        (this._loopStart = this.toTicks(e.loopStart)),
                                        (this._loopEnd = this.toTicks(e.loopEnd)),
                                        (this._state = new t.TimelineState(t.State.Stopped)),
                                        (this._playbackRate = 1),
                                        (this._startOffset = 0),
                                        (this.probability = e.probability),
                                        (this.humanize = e.humanize),
                                        (this.mute = e.mute),
                                        (this.playbackRate = e.playbackRate);
                                }),
                                t.extend(t.Event),
                                (t.Event.defaults = { callback: t.noOp, loop: !1, loopEnd: "1m", loopStart: 0, playbackRate: 1, value: null, probability: 1, mute: !1, humanize: !1 }),
                                (t.Event.prototype._rescheduleEvents = function (e) {
                                    return (
                                        (e = this.defaultArg(e, -1)),
                                        this._state.forEachFrom(
                                            e,
                                            function (e) {
                                                var i;
                                                if (e.state === t.State.Started) {
                                                    this.isUndef(e.id) || t.Transport.clear(e.id);
                                                    var n = e.time + Math.round(this.startOffset / this._playbackRate);
                                                    if (this._loop) {
                                                        (i = 1 / 0), this.isNumber(this._loop) && (i = this._loop * this._getLoopDuration());
                                                        var s = this._state.getAfter(n);
                                                        null !== s && (i = Math.min(i, s.time - n)), i !== 1 / 0 && (this._state.setStateAtTime(t.State.Stopped, n + i + 1), (i = t.Time(i, "i")));
                                                        var o = t.Time(this._getLoopDuration(), "i");
                                                        e.id = t.Transport.scheduleRepeat(this._tick.bind(this), o, t.TransportTime(n, "i"), i);
                                                    } else e.id = t.Transport.schedule(this._tick.bind(this), n + "i");
                                                }
                                            }.bind(this)
                                        ),
                                        this
                                    );
                                }),
                                Object.defineProperty(t.Event.prototype, "state", {
                                    get: function () {
                                        return this._state.getValueAtTime(t.Transport.ticks);
                                    },
                                }),
                                Object.defineProperty(t.Event.prototype, "startOffset", {
                                    get: function () {
                                        return this._startOffset;
                                    },
                                    set: function (t) {
                                        this._startOffset = t;
                                    },
                                }),
                                (t.Event.prototype.start = function (e) {
                                    return (e = this.toTicks(e)), this._state.getValueAtTime(e) === t.State.Stopped && (this._state.add({ state: t.State.Started, time: e, id: void 0 }), this._rescheduleEvents(e)), this;
                                }),
                                (t.Event.prototype.stop = function (e) {
                                    if ((this.cancel(e), (e = this.toTicks(e)), this._state.getValueAtTime(e) === t.State.Started)) {
                                        this._state.setStateAtTime(t.State.Stopped, e);
                                        var i = this._state.getBefore(e),
                                            n = e;
                                        null !== i && (n = i.time), this._rescheduleEvents(n);
                                    }
                                    return this;
                                }),
                                (t.Event.prototype.cancel = function (e) {
                                    return (
                                        (e = this.defaultArg(e, -1 / 0)),
                                        (e = this.toTicks(e)),
                                        this._state.forEachFrom(e, function (e) {
                                            t.Transport.clear(e.id);
                                        }),
                                        this._state.cancel(e),
                                        this
                                    );
                                }),
                                (t.Event.prototype._tick = function (e) {
                                    if (!this.mute && this._state.getValueAtTime(t.Transport.ticks) === t.State.Started) {
                                        if (this.probability < 1 && Math.random() > this.probability) return;
                                        if (this.humanize) {
                                            var i = 0.02;
                                            this.isBoolean(this.humanize) || (i = this.toSeconds(this.humanize)), (e += (2 * Math.random() - 1) * i);
                                        }
                                        this.callback(e, this.value);
                                    }
                                }),
                                (t.Event.prototype._getLoopDuration = function () {
                                    return Math.round((this._loopEnd - this._loopStart) / this._playbackRate);
                                }),
                                Object.defineProperty(t.Event.prototype, "loop", {
                                    get: function () {
                                        return this._loop;
                                    },
                                    set: function (t) {
                                        (this._loop = t), this._rescheduleEvents();
                                    },
                                }),
                                Object.defineProperty(t.Event.prototype, "playbackRate", {
                                    get: function () {
                                        return this._playbackRate;
                                    },
                                    set: function (t) {
                                        (this._playbackRate = t), this._rescheduleEvents();
                                    },
                                }),
                                Object.defineProperty(t.Event.prototype, "loopEnd", {
                                    get: function () {
                                        return t.TransportTime(this._loopEnd, "i").toNotation();
                                    },
                                    set: function (t) {
                                        (this._loopEnd = this.toTicks(t)), this._loop && this._rescheduleEvents();
                                    },
                                }),
                                Object.defineProperty(t.Event.prototype, "loopStart", {
                                    get: function () {
                                        return t.TransportTime(this._loopStart, "i").toNotation();
                                    },
                                    set: function (t) {
                                        (this._loopStart = this.toTicks(t)), this._loop && this._rescheduleEvents();
                                    },
                                }),
                                Object.defineProperty(t.Event.prototype, "progress", {
                                    get: function () {
                                        if (this._loop) {
                                            var e = t.Transport.ticks,
                                                i = this._state.get(e);
                                            if (null !== i && i.state === t.State.Started) {
                                                var n = this._getLoopDuration();
                                                return ((e - i.time) % n) / n;
                                            }
                                            return 0;
                                        }
                                        return 0;
                                    },
                                }),
                                (t.Event.prototype.dispose = function () {
                                    this.cancel(), this._state.dispose(), (this._state = null), (this.callback = null), (this.value = null);
                                }),
                                t.Event
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Loop = function () {
                                    var e = this.optionsObject(arguments, ["callback", "interval"], t.Loop.defaults);
                                    (this._event = new t.Event({ callback: this._tick.bind(this), loop: !0, loopEnd: e.interval, playbackRate: e.playbackRate, probability: e.probability })),
                                        (this.callback = e.callback),
                                        (this.iterations = e.iterations);
                                }),
                                t.extend(t.Loop),
                                (t.Loop.defaults = { interval: "4n", callback: t.noOp, playbackRate: 1, iterations: 1 / 0, probability: !0, mute: !1 }),
                                (t.Loop.prototype.start = function (t) {
                                    return this._event.start(t), this;
                                }),
                                (t.Loop.prototype.stop = function (t) {
                                    return this._event.stop(t), this;
                                }),
                                (t.Loop.prototype.cancel = function (t) {
                                    return this._event.cancel(t), this;
                                }),
                                (t.Loop.prototype._tick = function (t) {
                                    this.callback(t);
                                }),
                                Object.defineProperty(t.Loop.prototype, "state", {
                                    get: function () {
                                        return this._event.state;
                                    },
                                }),
                                Object.defineProperty(t.Loop.prototype, "progress", {
                                    get: function () {
                                        return this._event.progress;
                                    },
                                }),
                                Object.defineProperty(t.Loop.prototype, "interval", {
                                    get: function () {
                                        return this._event.loopEnd;
                                    },
                                    set: function (t) {
                                        this._event.loopEnd = t;
                                    },
                                }),
                                Object.defineProperty(t.Loop.prototype, "playbackRate", {
                                    get: function () {
                                        return this._event.playbackRate;
                                    },
                                    set: function (t) {
                                        this._event.playbackRate = t;
                                    },
                                }),
                                Object.defineProperty(t.Loop.prototype, "humanize", {
                                    get: function () {
                                        return this._event.humanize;
                                    },
                                    set: function (t) {
                                        this._event.humanize = t;
                                    },
                                }),
                                Object.defineProperty(t.Loop.prototype, "probability", {
                                    get: function () {
                                        return this._event.probability;
                                    },
                                    set: function (t) {
                                        this._event.probability = t;
                                    },
                                }),
                                Object.defineProperty(t.Loop.prototype, "mute", {
                                    get: function () {
                                        return this._event.mute;
                                    },
                                    set: function (t) {
                                        this._event.mute = t;
                                    },
                                }),
                                Object.defineProperty(t.Loop.prototype, "iterations", {
                                    get: function () {
                                        return !0 === this._event.loop ? 1 / 0 : this._event.loop;
                                    },
                                    set: function (t) {
                                        this._event.loop = t === 1 / 0 || t;
                                    },
                                }),
                                (t.Loop.prototype.dispose = function () {
                                    this._event.dispose(), (this._event = null), (this.callback = null);
                                }),
                                t.Loop
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Part = function () {
                                    var e = this.optionsObject(arguments, ["callback", "events"], t.Part.defaults);
                                    (this._loop = e.loop),
                                        (this._loopStart = this.toTicks(e.loopStart)),
                                        (this._loopEnd = this.toTicks(e.loopEnd)),
                                        (this._playbackRate = e.playbackRate),
                                        (this._probability = e.probability),
                                        (this._humanize = e.humanize),
                                        (this._startOffset = 0),
                                        (this._state = new t.TimelineState(t.State.Stopped)),
                                        (this._events = []),
                                        (this.callback = e.callback),
                                        (this.mute = e.mute);
                                    var i = this.defaultArg(e.events, []);
                                    if (!this.isUndef(e.events)) for (var n = 0; n < i.length; n++) Array.isArray(i[n]) ? this.add(i[n][0], i[n][1]) : this.add(i[n]);
                                }),
                                t.extend(t.Part, t.Event),
                                (t.Part.defaults = { callback: t.noOp, loop: !1, loopEnd: "1m", loopStart: 0, playbackRate: 1, probability: 1, humanize: !1, mute: !1 }),
                                (t.Part.prototype.start = function (e, i) {
                                    var n = this.toTicks(e);
                                    return (
                                        this._state.getValueAtTime(n) !== t.State.Started &&
                                            ((i = this._loop ? this.defaultArg(i, this._loopStart) : this.defaultArg(i, 0)),
                                            (i = this.toTicks(i)),
                                            this._state.add({ state: t.State.Started, time: n, offset: i }),
                                            this._forEach(function (t) {
                                                this._startNote(t, n, i);
                                            })),
                                        this
                                    );
                                }),
                                (t.Part.prototype._startNote = function (e, i, n) {
                                    (i -= n),
                                        this._loop
                                            ? e.startOffset >= this._loopStart && e.startOffset < this._loopEnd
                                                ? (e.startOffset < n && (i += this._getLoopDuration()), e.start(t.TransportTime(i, "i")))
                                                : e.startOffset < this._loopStart && e.startOffset >= n && ((e.loop = !1), e.start(t.TransportTime(i, "i")))
                                            : e.startOffset >= n && e.start(t.TransportTime(i, "i"));
                                }),
                                Object.defineProperty(t.Part.prototype, "startOffset", {
                                    get: function () {
                                        return this._startOffset;
                                    },
                                    set: function (t) {
                                        (this._startOffset = t),
                                            this._forEach(function (t) {
                                                t.startOffset += this._startOffset;
                                            });
                                    },
                                }),
                                (t.Part.prototype.stop = function (e) {
                                    var i = this.toTicks(e);
                                    return (
                                        this._state.cancel(i),
                                        this._state.setStateAtTime(t.State.Stopped, i),
                                        this._forEach(function (t) {
                                            t.stop(e);
                                        }),
                                        this
                                    );
                                }),
                                (t.Part.prototype.at = function (e, i) {
                                    e = t.TransportTime(e);
                                    for (var n = t.Time(1, "i").toSeconds(), s = 0; s < this._events.length; s++) {
                                        var o = this._events[s];
                                        if (Math.abs(e.toTicks() - o.startOffset) < n) return this.isUndef(i) || (o.value = i), o;
                                    }
                                    return this.isUndef(i) ? null : (this.add(e, i), this._events[this._events.length - 1]);
                                }),
                                (t.Part.prototype.add = function (e, i) {
                                    e.hasOwnProperty("time") && (e = (i = e).time), (e = this.toTicks(e));
                                    var n;
                                    return (
                                        i instanceof t.Event ? ((n = i).callback = this._tick.bind(this)) : (n = new t.Event({ callback: this._tick.bind(this), value: i })),
                                        (n.startOffset = e),
                                        n.set({ loopEnd: this.loopEnd, loopStart: this.loopStart, loop: this.loop, humanize: this.humanize, playbackRate: this.playbackRate, probability: this.probability }),
                                        this._events.push(n),
                                        this._restartEvent(n),
                                        this
                                    );
                                }),
                                (t.Part.prototype._restartEvent = function (e) {
                                    this._state.forEach(
                                        function (i) {
                                            i.state === t.State.Started ? this._startNote(e, i.time, i.offset) : e.stop(t.TransportTime(i.time, "i"));
                                        }.bind(this)
                                    );
                                }),
                                (t.Part.prototype.remove = function (e, i) {
                                    e.hasOwnProperty("time") && (e = (i = e).time), (e = this.toTicks(e));
                                    for (var n = this._events.length - 1; n >= 0; n--) {
                                        var s = this._events[n];
                                        s instanceof t.Part ? s.remove(e, i) : s.startOffset === e && (this.isUndef(i) || (!this.isUndef(i) && s.value === i)) && (this._events.splice(n, 1), s.dispose());
                                    }
                                    return this;
                                }),
                                (t.Part.prototype.removeAll = function () {
                                    return (
                                        this._forEach(function (t) {
                                            t.dispose();
                                        }),
                                        (this._events = []),
                                        this
                                    );
                                }),
                                (t.Part.prototype.cancel = function (t) {
                                    return (
                                        (t = this.toTicks(t)),
                                        this._forEach(function (e) {
                                            e.cancel(t);
                                        }),
                                        this._state.cancel(t),
                                        this
                                    );
                                }),
                                (t.Part.prototype._forEach = function (e, i) {
                                    i = this.defaultArg(i, this);
                                    for (var n = this._events.length - 1; n >= 0; n--) {
                                        var s = this._events[n];
                                        s instanceof t.Part ? s._forEach(e, i) : e.call(i, s);
                                    }
                                    return this;
                                }),
                                (t.Part.prototype._setAll = function (t, e) {
                                    this._forEach(function (i) {
                                        i[t] = e;
                                    });
                                }),
                                (t.Part.prototype._tick = function (t, e) {
                                    this.mute || this.callback(t, e);
                                }),
                                (t.Part.prototype._testLoopBoundries = function (e) {
                                    e.startOffset < this._loopStart || e.startOffset >= this._loopEnd ? e.cancel(0) : e.state === t.State.Stopped && this._restartEvent(e);
                                }),
                                Object.defineProperty(t.Part.prototype, "probability", {
                                    get: function () {
                                        return this._probability;
                                    },
                                    set: function (t) {
                                        (this._probability = t), this._setAll("probability", t);
                                    },
                                }),
                                Object.defineProperty(t.Part.prototype, "humanize", {
                                    get: function () {
                                        return this._humanize;
                                    },
                                    set: function (t) {
                                        (this._humanize = t), this._setAll("humanize", t);
                                    },
                                }),
                                Object.defineProperty(t.Part.prototype, "loop", {
                                    get: function () {
                                        return this._loop;
                                    },
                                    set: function (t) {
                                        (this._loop = t),
                                            this._forEach(function (e) {
                                                (e._loopStart = this._loopStart), (e._loopEnd = this._loopEnd), (e.loop = t), this._testLoopBoundries(e);
                                            });
                                    },
                                }),
                                Object.defineProperty(t.Part.prototype, "loopEnd", {
                                    get: function () {
                                        return t.TransportTime(this._loopEnd, "i").toNotation();
                                    },
                                    set: function (t) {
                                        (this._loopEnd = this.toTicks(t)),
                                            this._loop &&
                                                this._forEach(function (e) {
                                                    (e.loopEnd = t), this._testLoopBoundries(e);
                                                });
                                    },
                                }),
                                Object.defineProperty(t.Part.prototype, "loopStart", {
                                    get: function () {
                                        return t.TransportTime(this._loopStart, "i").toNotation();
                                    },
                                    set: function (t) {
                                        (this._loopStart = this.toTicks(t)),
                                            this._loop &&
                                                this._forEach(function (t) {
                                                    (t.loopStart = this.loopStart), this._testLoopBoundries(t);
                                                });
                                    },
                                }),
                                Object.defineProperty(t.Part.prototype, "playbackRate", {
                                    get: function () {
                                        return this._playbackRate;
                                    },
                                    set: function (t) {
                                        (this._playbackRate = t), this._setAll("playbackRate", t);
                                    },
                                }),
                                Object.defineProperty(t.Part.prototype, "length", {
                                    get: function () {
                                        return this._events.length;
                                    },
                                }),
                                (t.Part.prototype.dispose = function () {
                                    return this.removeAll(), this._state.dispose(), (this._state = null), (this.callback = null), (this._events = null), this;
                                }),
                                t.Part
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Pattern = function () {
                                    var e = this.optionsObject(arguments, ["callback", "values", "pattern"], t.Pattern.defaults);
                                    t.Loop.call(this, e), (this._pattern = new t.CtrlPattern({ values: e.values, type: e.pattern, index: e.index }));
                                }),
                                t.extend(t.Pattern, t.Loop),
                                (t.Pattern.defaults = { pattern: t.CtrlPattern.Type.Up, values: [] }),
                                (t.Pattern.prototype._tick = function (t) {
                                    this.callback(t, this._pattern.value), this._pattern.next();
                                }),
                                Object.defineProperty(t.Pattern.prototype, "index", {
                                    get: function () {
                                        return this._pattern.index;
                                    },
                                    set: function (t) {
                                        this._pattern.index = t;
                                    },
                                }),
                                Object.defineProperty(t.Pattern.prototype, "values", {
                                    get: function () {
                                        return this._pattern.values;
                                    },
                                    set: function (t) {
                                        this._pattern.values = t;
                                    },
                                }),
                                Object.defineProperty(t.Pattern.prototype, "value", {
                                    get: function () {
                                        return this._pattern.value;
                                    },
                                }),
                                Object.defineProperty(t.Pattern.prototype, "pattern", {
                                    get: function () {
                                        return this._pattern.type;
                                    },
                                    set: function (t) {
                                        this._pattern.type = t;
                                    },
                                }),
                                (t.Pattern.prototype.dispose = function () {
                                    t.Loop.prototype.dispose.call(this), this._pattern.dispose(), (this._pattern = null);
                                }),
                                t.Pattern
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Sequence = function () {
                                    var e = this.optionsObject(arguments, ["callback", "events", "subdivision"], t.Sequence.defaults),
                                        i = e.events;
                                    if (
                                        (delete e.events,
                                        t.Part.call(this, e),
                                        (this._subdivision = this.toTicks(e.subdivision)),
                                        this.isUndef(e.loopEnd) && !this.isUndef(i) && (this._loopEnd = i.length * this._subdivision),
                                        (this._loop = !0),
                                        !this.isUndef(i))
                                    )
                                        for (var n = 0; n < i.length; n++) this.add(n, i[n]);
                                }),
                                t.extend(t.Sequence, t.Part),
                                (t.Sequence.defaults = { subdivision: "4n" }),
                                Object.defineProperty(t.Sequence.prototype, "subdivision", {
                                    get: function () {
                                        return t.Time(this._subdivision, "i").toNotation();
                                    },
                                }),
                                (t.Sequence.prototype.at = function (e, i) {
                                    return this.isArray(i) && this.remove(e), t.Part.prototype.at.call(this, this._indexTime(e), i);
                                }),
                                (t.Sequence.prototype.add = function (e, i) {
                                    if (null === i) return this;
                                    if (this.isArray(i)) {
                                        var n = Math.round(this._subdivision / i.length);
                                        i = new t.Sequence(this._tick.bind(this), i, t.Time(n, "i"));
                                    }
                                    return t.Part.prototype.add.call(this, this._indexTime(e), i), this;
                                }),
                                (t.Sequence.prototype.remove = function (e, i) {
                                    return t.Part.prototype.remove.call(this, this._indexTime(e), i), this;
                                }),
                                (t.Sequence.prototype._indexTime = function (e) {
                                    return e instanceof t.TransportTime ? e : t.TransportTime(e * this._subdivision + this.startOffset, "i");
                                }),
                                (t.Sequence.prototype.dispose = function () {
                                    return t.Part.prototype.dispose.call(this), this;
                                }),
                                t.Sequence
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.PulseOscillator = function () {
                                    var e = this.optionsObject(arguments, ["frequency", "width"], t.Oscillator.defaults);
                                    t.Source.call(this, e),
                                        (this.width = new t.Signal(e.width, t.Type.NormalRange)),
                                        (this._widthGate = new t.Gain()),
                                        (this._sawtooth = new t.Oscillator({ frequency: e.frequency, detune: e.detune, type: "sawtooth", phase: e.phase })),
                                        (this.frequency = this._sawtooth.frequency),
                                        (this.detune = this._sawtooth.detune),
                                        (this._thresh = new t.WaveShaper(function (t) {
                                            return t < 0 ? -1 : 1;
                                        })),
                                        this._sawtooth.chain(this._thresh, this.output),
                                        this.width.chain(this._widthGate, this._thresh),
                                        this._readOnly(["width", "frequency", "detune"]);
                                }),
                                t.extend(t.PulseOscillator, t.Oscillator),
                                (t.PulseOscillator.defaults = { frequency: 440, detune: 0, phase: 0, width: 0.2 }),
                                (t.PulseOscillator.prototype._start = function (t) {
                                    (t = this.toSeconds(t)), this._sawtooth.start(t), this._widthGate.gain.setValueAtTime(1, t);
                                }),
                                (t.PulseOscillator.prototype._stop = function (t) {
                                    (t = this.toSeconds(t)), this._sawtooth.stop(t), this._widthGate.gain.setValueAtTime(0, t);
                                }),
                                Object.defineProperty(t.PulseOscillator.prototype, "phase", {
                                    get: function () {
                                        return this._sawtooth.phase;
                                    },
                                    set: function (t) {
                                        this._sawtooth.phase = t;
                                    },
                                }),
                                Object.defineProperty(t.PulseOscillator.prototype, "type", {
                                    get: function () {
                                        return "pulse";
                                    },
                                }),
                                Object.defineProperty(t.PulseOscillator.prototype, "partials", {
                                    get: function () {
                                        return [];
                                    },
                                }),
                                (t.PulseOscillator.prototype.dispose = function () {
                                    return (
                                        t.Source.prototype.dispose.call(this),
                                        this._sawtooth.dispose(),
                                        (this._sawtooth = null),
                                        this._writable(["width", "frequency", "detune"]),
                                        this.width.dispose(),
                                        (this.width = null),
                                        this._widthGate.dispose(),
                                        (this._widthGate = null),
                                        this._thresh.dispose(),
                                        (this._thresh = null),
                                        (this.frequency = null),
                                        (this.detune = null),
                                        this
                                    );
                                }),
                                t.PulseOscillator
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.PWMOscillator = function () {
                                    var e = this.optionsObject(arguments, ["frequency", "modulationFrequency"], t.PWMOscillator.defaults);
                                    t.Source.call(this, e),
                                        (this._pulse = new t.PulseOscillator(e.modulationFrequency)),
                                        (this._pulse._sawtooth.type = "sine"),
                                        (this._modulator = new t.Oscillator({ frequency: e.frequency, detune: e.detune, phase: e.phase })),
                                        (this._scale = new t.Multiply(2)),
                                        (this.frequency = this._modulator.frequency),
                                        (this.detune = this._modulator.detune),
                                        (this.modulationFrequency = this._pulse.frequency),
                                        this._modulator.chain(this._scale, this._pulse.width),
                                        this._pulse.connect(this.output),
                                        this._readOnly(["modulationFrequency", "frequency", "detune"]);
                                }),
                                t.extend(t.PWMOscillator, t.Oscillator),
                                (t.PWMOscillator.defaults = { frequency: 440, detune: 0, phase: 0, modulationFrequency: 0.4 }),
                                (t.PWMOscillator.prototype._start = function (t) {
                                    (t = this.toSeconds(t)), this._modulator.start(t), this._pulse.start(t);
                                }),
                                (t.PWMOscillator.prototype._stop = function (t) {
                                    (t = this.toSeconds(t)), this._modulator.stop(t), this._pulse.stop(t);
                                }),
                                Object.defineProperty(t.PWMOscillator.prototype, "type", {
                                    get: function () {
                                        return "pwm";
                                    },
                                }),
                                Object.defineProperty(t.PWMOscillator.prototype, "partials", {
                                    get: function () {
                                        return [];
                                    },
                                }),
                                Object.defineProperty(t.PWMOscillator.prototype, "phase", {
                                    get: function () {
                                        return this._modulator.phase;
                                    },
                                    set: function (t) {
                                        this._modulator.phase = t;
                                    },
                                }),
                                (t.PWMOscillator.prototype.dispose = function () {
                                    return (
                                        t.Source.prototype.dispose.call(this),
                                        this._pulse.dispose(),
                                        (this._pulse = null),
                                        this._scale.dispose(),
                                        (this._scale = null),
                                        this._modulator.dispose(),
                                        (this._modulator = null),
                                        this._writable(["modulationFrequency", "frequency", "detune"]),
                                        (this.frequency = null),
                                        (this.detune = null),
                                        (this.modulationFrequency = null),
                                        this
                                    );
                                }),
                                t.PWMOscillator
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.FMOscillator = function () {
                                    var e = this.optionsObject(arguments, ["frequency", "type", "modulationType"], t.FMOscillator.defaults);
                                    t.Source.call(this, e),
                                        (this._carrier = new t.Oscillator(e.frequency, e.type)),
                                        (this.frequency = new t.Signal(e.frequency, t.Type.Frequency)),
                                        (this.detune = this._carrier.detune),
                                        (this.detune.value = e.detune),
                                        (this.modulationIndex = new t.Multiply(e.modulationIndex)),
                                        (this.modulationIndex.units = t.Type.Positive),
                                        (this._modulator = new t.Oscillator(e.frequency, e.modulationType)),
                                        (this.harmonicity = new t.Multiply(e.harmonicity)),
                                        (this.harmonicity.units = t.Type.Positive),
                                        (this._modulationNode = new t.Gain(0)),
                                        this.frequency.connect(this._carrier.frequency),
                                        this.frequency.chain(this.harmonicity, this._modulator.frequency),
                                        this.frequency.chain(this.modulationIndex, this._modulationNode),
                                        this._modulator.connect(this._modulationNode.gain),
                                        this._modulationNode.connect(this._carrier.frequency),
                                        this._carrier.connect(this.output),
                                        this.detune.connect(this._modulator.detune),
                                        (this.phase = e.phase),
                                        this._readOnly(["modulationIndex", "frequency", "detune", "harmonicity"]);
                                }),
                                t.extend(t.FMOscillator, t.Oscillator),
                                (t.FMOscillator.defaults = { frequency: 440, detune: 0, phase: 0, modulationIndex: 2, modulationType: "square", harmonicity: 1 }),
                                (t.FMOscillator.prototype._start = function (t) {
                                    (t = this.toSeconds(t)), this._modulator.start(t), this._carrier.start(t);
                                }),
                                (t.FMOscillator.prototype._stop = function (t) {
                                    (t = this.toSeconds(t)), this._modulator.stop(t), this._carrier.stop(t);
                                }),
                                Object.defineProperty(t.FMOscillator.prototype, "type", {
                                    get: function () {
                                        return this._carrier.type;
                                    },
                                    set: function (t) {
                                        this._carrier.type = t;
                                    },
                                }),
                                Object.defineProperty(t.FMOscillator.prototype, "modulationType", {
                                    get: function () {
                                        return this._modulator.type;
                                    },
                                    set: function (t) {
                                        this._modulator.type = t;
                                    },
                                }),
                                Object.defineProperty(t.FMOscillator.prototype, "phase", {
                                    get: function () {
                                        return this._carrier.phase;
                                    },
                                    set: function (t) {
                                        (this._carrier.phase = t), (this._modulator.phase = t);
                                    },
                                }),
                                Object.defineProperty(t.FMOscillator.prototype, "partials", {
                                    get: function () {
                                        return this._carrier.partials;
                                    },
                                    set: function (t) {
                                        this._carrier.partials = t;
                                    },
                                }),
                                (t.FMOscillator.prototype.dispose = function () {
                                    return (
                                        t.Source.prototype.dispose.call(this),
                                        this._writable(["modulationIndex", "frequency", "detune", "harmonicity"]),
                                        this.frequency.dispose(),
                                        (this.frequency = null),
                                        (this.detune = null),
                                        this.harmonicity.dispose(),
                                        (this.harmonicity = null),
                                        this._carrier.dispose(),
                                        (this._carrier = null),
                                        this._modulator.dispose(),
                                        (this._modulator = null),
                                        this._modulationNode.dispose(),
                                        (this._modulationNode = null),
                                        this.modulationIndex.dispose(),
                                        (this.modulationIndex = null),
                                        this
                                    );
                                }),
                                t.FMOscillator
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.AMOscillator = function () {
                                    var e = this.optionsObject(arguments, ["frequency", "type", "modulationType"], t.AMOscillator.defaults);
                                    t.Source.call(this, e),
                                        (this._carrier = new t.Oscillator(e.frequency, e.type)),
                                        (this.frequency = this._carrier.frequency),
                                        (this.detune = this._carrier.detune),
                                        (this.detune.value = e.detune),
                                        (this._modulator = new t.Oscillator(e.frequency, e.modulationType)),
                                        (this._modulationScale = new t.AudioToGain()),
                                        (this.harmonicity = new t.Multiply(e.harmonicity)),
                                        (this.harmonicity.units = t.Type.Positive),
                                        (this._modulationNode = new t.Gain(0)),
                                        this.frequency.chain(this.harmonicity, this._modulator.frequency),
                                        this.detune.connect(this._modulator.detune),
                                        this._modulator.chain(this._modulationScale, this._modulationNode.gain),
                                        this._carrier.chain(this._modulationNode, this.output),
                                        (this.phase = e.phase),
                                        this._readOnly(["frequency", "detune", "harmonicity"]);
                                }),
                                t.extend(t.AMOscillator, t.Oscillator),
                                (t.AMOscillator.defaults = { frequency: 440, detune: 0, phase: 0, modulationType: "square", harmonicity: 1 }),
                                (t.AMOscillator.prototype._start = function (t) {
                                    (t = this.toSeconds(t)), this._modulator.start(t), this._carrier.start(t);
                                }),
                                (t.AMOscillator.prototype._stop = function (t) {
                                    (t = this.toSeconds(t)), this._modulator.stop(t), this._carrier.stop(t);
                                }),
                                Object.defineProperty(t.AMOscillator.prototype, "type", {
                                    get: function () {
                                        return this._carrier.type;
                                    },
                                    set: function (t) {
                                        this._carrier.type = t;
                                    },
                                }),
                                Object.defineProperty(t.AMOscillator.prototype, "modulationType", {
                                    get: function () {
                                        return this._modulator.type;
                                    },
                                    set: function (t) {
                                        this._modulator.type = t;
                                    },
                                }),
                                Object.defineProperty(t.AMOscillator.prototype, "phase", {
                                    get: function () {
                                        return this._carrier.phase;
                                    },
                                    set: function (t) {
                                        (this._carrier.phase = t), (this._modulator.phase = t);
                                    },
                                }),
                                Object.defineProperty(t.AMOscillator.prototype, "partials", {
                                    get: function () {
                                        return this._carrier.partials;
                                    },
                                    set: function (t) {
                                        this._carrier.partials = t;
                                    },
                                }),
                                (t.AMOscillator.prototype.dispose = function () {
                                    return (
                                        t.Source.prototype.dispose.call(this),
                                        this._writable(["frequency", "detune", "harmonicity"]),
                                        (this.frequency = null),
                                        (this.detune = null),
                                        this.harmonicity.dispose(),
                                        (this.harmonicity = null),
                                        this._carrier.dispose(),
                                        (this._carrier = null),
                                        this._modulator.dispose(),
                                        (this._modulator = null),
                                        this._modulationNode.dispose(),
                                        (this._modulationNode = null),
                                        this._modulationScale.dispose(),
                                        (this._modulationScale = null),
                                        this
                                    );
                                }),
                                t.AMOscillator
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.FatOscillator = function () {
                                    var e = this.optionsObject(arguments, ["frequency", "type", "spread"], t.FatOscillator.defaults);
                                    t.Source.call(this, e),
                                        (this.frequency = new t.Signal(e.frequency, t.Type.Frequency)),
                                        (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                                        (this._oscillators = []),
                                        (this._spread = e.spread),
                                        (this._type = e.type),
                                        (this._phase = e.phase),
                                        (this._partials = this.defaultArg(e.partials, [])),
                                        (this.count = e.count),
                                        this._readOnly(["frequency", "detune"]);
                                }),
                                t.extend(t.FatOscillator, t.Oscillator),
                                (t.FatOscillator.defaults = { frequency: 440, detune: 0, phase: 0, spread: 20, count: 3, type: "sawtooth" }),
                                (t.FatOscillator.prototype._start = function (t) {
                                    (t = this.toSeconds(t)),
                                        this._forEach(function (e) {
                                            e.start(t);
                                        });
                                }),
                                (t.FatOscillator.prototype._stop = function (t) {
                                    (t = this.toSeconds(t)),
                                        this._forEach(function (e) {
                                            e.stop(t);
                                        });
                                }),
                                (t.FatOscillator.prototype._forEach = function (t) {
                                    for (var e = 0; e < this._oscillators.length; e++) t.call(this, this._oscillators[e], e);
                                }),
                                Object.defineProperty(t.FatOscillator.prototype, "type", {
                                    get: function () {
                                        return this._type;
                                    },
                                    set: function (t) {
                                        (this._type = t),
                                            this._forEach(function (e) {
                                                e.type = t;
                                            });
                                    },
                                }),
                                Object.defineProperty(t.FatOscillator.prototype, "spread", {
                                    get: function () {
                                        return this._spread;
                                    },
                                    set: function (t) {
                                        if (((this._spread = t), this._oscillators.length > 1)) {
                                            var e = -t / 2,
                                                i = t / (this._oscillators.length - 1);
                                            this._forEach(function (t, n) {
                                                t.detune.value = e + i * n;
                                            });
                                        }
                                    },
                                }),
                                Object.defineProperty(t.FatOscillator.prototype, "count", {
                                    get: function () {
                                        return this._oscillators.length;
                                    },
                                    set: function (e) {
                                        if (((e = Math.max(e, 1)), this._oscillators.length !== e)) {
                                            this._forEach(function (t) {
                                                t.dispose();
                                            }),
                                                (this._oscillators = []);
                                            for (var i = 0; i < e; i++) {
                                                var n = new t.Oscillator();
                                                this.type === t.Oscillator.Type.Custom ? (n.partials = this._partials) : (n.type = this._type),
                                                    (n.phase = this._phase),
                                                    (n.volume.value = -6 - e),
                                                    this.frequency.connect(n.frequency),
                                                    this.detune.connect(n.detune),
                                                    n.connect(this.output),
                                                    (this._oscillators[i] = n);
                                            }
                                            (this.spread = this._spread),
                                                this.state === t.State.Started &&
                                                    this._forEach(function (t) {
                                                        t.start();
                                                    });
                                        }
                                    },
                                }),
                                Object.defineProperty(t.FatOscillator.prototype, "phase", {
                                    get: function () {
                                        return this._phase;
                                    },
                                    set: function (t) {
                                        (this._phase = t),
                                            this._forEach(function (e) {
                                                e.phase = t;
                                            });
                                    },
                                }),
                                Object.defineProperty(t.FatOscillator.prototype, "partials", {
                                    get: function () {
                                        return this._partials;
                                    },
                                    set: function (e) {
                                        (this._partials = e),
                                            (this._type = t.Oscillator.Type.Custom),
                                            this._forEach(function (t) {
                                                t.partials = e;
                                            });
                                    },
                                }),
                                (t.FatOscillator.prototype.dispose = function () {
                                    return (
                                        t.Source.prototype.dispose.call(this),
                                        this._writable(["frequency", "detune"]),
                                        this.frequency.dispose(),
                                        (this.frequency = null),
                                        this.detune.dispose(),
                                        (this.detune = null),
                                        this._forEach(function (t) {
                                            t.dispose();
                                        }),
                                        (this._oscillators = null),
                                        (this._partials = null),
                                        this
                                    );
                                }),
                                t.FatOscillator
                            );
                        }),
                        t(function (t) {
                            (t.OmniOscillator = function () {
                                var e = this.optionsObject(arguments, ["frequency", "type"], t.OmniOscillator.defaults);
                                t.Source.call(this, e),
                                    (this.frequency = new t.Signal(e.frequency, t.Type.Frequency)),
                                    (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                                    (this._sourceType = void 0),
                                    (this._oscillator = null),
                                    (this.type = e.type),
                                    this._readOnly(["frequency", "detune"]),
                                    this.set(e);
                            }),
                                t.extend(t.OmniOscillator, t.Oscillator),
                                (t.OmniOscillator.defaults = { frequency: 440, detune: 0, type: "sine", phase: 0 });
                            var e = { Pulse: "PulseOscillator", PWM: "PWMOscillator", Osc: "Oscillator", FM: "FMOscillator", AM: "AMOscillator", Fat: "FatOscillator" };
                            return (
                                (t.OmniOscillator.prototype._start = function (t) {
                                    this._oscillator.start(t);
                                }),
                                (t.OmniOscillator.prototype._stop = function (t) {
                                    this._oscillator.stop(t);
                                }),
                                Object.defineProperty(t.OmniOscillator.prototype, "type", {
                                    get: function () {
                                        var t = "";
                                        return this._sourceType === e.FM ? (t = "fm") : this._sourceType === e.AM ? (t = "am") : this._sourceType === e.Fat && (t = "fat"), t + this._oscillator.type;
                                    },
                                    set: function (t) {
                                        "fm" === t.substr(0, 2)
                                            ? (this._createNewOscillator(e.FM), (this._oscillator.type = t.substr(2)))
                                            : "am" === t.substr(0, 2)
                                            ? (this._createNewOscillator(e.AM), (this._oscillator.type = t.substr(2)))
                                            : "fat" === t.substr(0, 3)
                                            ? (this._createNewOscillator(e.Fat), (this._oscillator.type = t.substr(3)))
                                            : "pwm" === t
                                            ? this._createNewOscillator(e.PWM)
                                            : "pulse" === t
                                            ? this._createNewOscillator(e.Pulse)
                                            : (this._createNewOscillator(e.Osc), (this._oscillator.type = t));
                                    },
                                }),
                                Object.defineProperty(t.OmniOscillator.prototype, "partials", {
                                    get: function () {
                                        return this._oscillator.partials;
                                    },
                                    set: function (t) {
                                        this._oscillator.partials = t;
                                    },
                                }),
                                (t.OmniOscillator.prototype.set = function (e, i) {
                                    return "type" === e ? (this.type = i) : this.isObject(e) && e.hasOwnProperty("type") && (this.type = e.type), t.prototype.set.apply(this, arguments), this;
                                }),
                                (t.OmniOscillator.prototype._createNewOscillator = function (e) {
                                    if (e !== this._sourceType) {
                                        this._sourceType = e;
                                        var i = t[e],
                                            n = this.now() + this.blockTime;
                                        if (null !== this._oscillator) {
                                            var s = this._oscillator;
                                            s.stop(n),
                                                setTimeout(function () {
                                                    s.dispose(), (s = null);
                                                }, 1e3 * this.blockTime);
                                        }
                                        (this._oscillator = new i()),
                                            this.frequency.connect(this._oscillator.frequency),
                                            this.detune.connect(this._oscillator.detune),
                                            this._oscillator.connect(this.output),
                                            this.state === t.State.Started && this._oscillator.start(n);
                                    }
                                }),
                                Object.defineProperty(t.OmniOscillator.prototype, "phase", {
                                    get: function () {
                                        return this._oscillator.phase;
                                    },
                                    set: function (t) {
                                        this._oscillator.phase = t;
                                    },
                                }),
                                Object.defineProperty(t.OmniOscillator.prototype, "width", {
                                    get: function () {
                                        if (this._sourceType === e.Pulse) return this._oscillator.width;
                                    },
                                }),
                                Object.defineProperty(t.OmniOscillator.prototype, "count", {
                                    get: function () {
                                        if (this._sourceType === e.Fat) return this._oscillator.count;
                                    },
                                    set: function (t) {
                                        this._sourceType === e.Fat && (this._oscillator.count = t);
                                    },
                                }),
                                Object.defineProperty(t.OmniOscillator.prototype, "spread", {
                                    get: function () {
                                        if (this._sourceType === e.Fat) return this._oscillator.spread;
                                    },
                                    set: function (t) {
                                        this._sourceType === e.Fat && (this._oscillator.spread = t);
                                    },
                                }),
                                Object.defineProperty(t.OmniOscillator.prototype, "modulationType", {
                                    get: function () {
                                        if (this._sourceType === e.FM || this._sourceType === e.AM) return this._oscillator.modulationType;
                                    },
                                    set: function (t) {
                                        (this._sourceType !== e.FM && this._sourceType !== e.AM) || (this._oscillator.modulationType = t);
                                    },
                                }),
                                Object.defineProperty(t.OmniOscillator.prototype, "modulationIndex", {
                                    get: function () {
                                        if (this._sourceType === e.FM) return this._oscillator.modulationIndex;
                                    },
                                }),
                                Object.defineProperty(t.OmniOscillator.prototype, "harmonicity", {
                                    get: function () {
                                        if (this._sourceType === e.FM || this._sourceType === e.AM) return this._oscillator.harmonicity;
                                    },
                                }),
                                Object.defineProperty(t.OmniOscillator.prototype, "modulationFrequency", {
                                    get: function () {
                                        if (this._sourceType === e.PWM) return this._oscillator.modulationFrequency;
                                    },
                                }),
                                (t.OmniOscillator.prototype.dispose = function () {
                                    return (
                                        t.Source.prototype.dispose.call(this),
                                        this._writable(["frequency", "detune"]),
                                        this.detune.dispose(),
                                        (this.detune = null),
                                        this.frequency.dispose(),
                                        (this.frequency = null),
                                        this._oscillator.dispose(),
                                        (this._oscillator = null),
                                        (this._sourceType = null),
                                        this
                                    );
                                }),
                                t.OmniOscillator
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Instrument = function (e) {
                                    (e = this.defaultArg(e, t.Instrument.defaults)), (this._volume = this.output = new t.Volume(e.volume)), (this.volume = this._volume.volume), this._readOnly("volume");
                                }),
                                t.extend(t.Instrument),
                                (t.Instrument.defaults = { volume: 0 }),
                                (t.Instrument.prototype.triggerAttack = t.noOp),
                                (t.Instrument.prototype.triggerRelease = t.noOp),
                                (t.Instrument.prototype.triggerAttackRelease = function (t, e, i, n) {
                                    return (i = this.isUndef(i) ? this.now() + this.blockTime : this.toSeconds(i)), (e = this.toSeconds(e)), this.triggerAttack(t, i, n), this.triggerRelease(i + e), this;
                                }),
                                (t.Instrument.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._volume.dispose(), (this._volume = null), this._writable(["volume"]), (this.volume = null), this;
                                }),
                                t.Instrument
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Monophonic = function (e) {
                                    (e = this.defaultArg(e, t.Monophonic.defaults)), t.Instrument.call(this, e), (this.portamento = e.portamento);
                                }),
                                t.extend(t.Monophonic, t.Instrument),
                                (t.Monophonic.defaults = { portamento: 0 }),
                                (t.Monophonic.prototype.triggerAttack = function (t, e, i) {
                                    return (e = this.isUndef(e) ? this.now() + this.blockTime : this.toSeconds(e)), this._triggerEnvelopeAttack(e, i), this.setNote(t, e), this;
                                }),
                                (t.Monophonic.prototype.triggerRelease = function (t) {
                                    return (t = this.isUndef(t) ? this.now() + this.blockTime : this.toSeconds(t)), this._triggerEnvelopeRelease(t), this;
                                }),
                                (t.Monophonic.prototype._triggerEnvelopeAttack = function () {}),
                                (t.Monophonic.prototype._triggerEnvelopeRelease = function () {}),
                                (t.Monophonic.prototype.setNote = function (t, e) {
                                    if (((e = this.toSeconds(e)), this.portamento > 0)) {
                                        var i = this.frequency.value;
                                        this.frequency.setValueAtTime(i, e);
                                        var n = this.toSeconds(this.portamento);
                                        this.frequency.exponentialRampToValueAtTime(t, e + n);
                                    } else this.frequency.setValueAtTime(t, e);
                                    return this;
                                }),
                                t.Monophonic
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Synth = function (e) {
                                    (e = this.defaultArg(e, t.Synth.defaults)),
                                        t.Monophonic.call(this, e),
                                        (this.oscillator = new t.OmniOscillator(e.oscillator)),
                                        (this.frequency = this.oscillator.frequency),
                                        (this.detune = this.oscillator.detune),
                                        (this.envelope = new t.AmplitudeEnvelope(e.envelope)),
                                        this.oscillator.chain(this.envelope, this.output),
                                        this.oscillator.start(),
                                        this._readOnly(["oscillator", "frequency", "detune", "envelope"]);
                                }),
                                t.extend(t.Synth, t.Monophonic),
                                (t.Synth.defaults = { oscillator: { type: "triangle" }, envelope: { attack: 0.005, decay: 0.1, sustain: 0.3, release: 1 } }),
                                (t.Synth.prototype._triggerEnvelopeAttack = function (t, e) {
                                    return this.envelope.triggerAttack(t, e), this;
                                }),
                                (t.Synth.prototype._triggerEnvelopeRelease = function (t) {
                                    return this.envelope.triggerRelease(t), this;
                                }),
                                (t.Synth.prototype.dispose = function () {
                                    return (
                                        t.Monophonic.prototype.dispose.call(this),
                                        this._writable(["oscillator", "frequency", "detune", "envelope"]),
                                        this.oscillator.dispose(),
                                        (this.oscillator = null),
                                        this.envelope.dispose(),
                                        (this.envelope = null),
                                        (this.frequency = null),
                                        (this.detune = null),
                                        this
                                    );
                                }),
                                t.Synth
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.AMSynth = function (e) {
                                    (e = this.defaultArg(e, t.AMSynth.defaults)),
                                        t.Monophonic.call(this, e),
                                        (this._carrier = new t.Synth()),
                                        (this._carrier.volume.value = -10),
                                        (this.oscillator = this._carrier.oscillator),
                                        (this.envelope = this._carrier.envelope.set(e.envelope)),
                                        (this._modulator = new t.Synth()),
                                        (this._modulator.volume.value = -10),
                                        (this.modulation = this._modulator.oscillator.set(e.modulation)),
                                        (this.modulationEnvelope = this._modulator.envelope.set(e.modulationEnvelope)),
                                        (this.frequency = new t.Signal(440, t.Type.Frequency)),
                                        (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                                        (this.harmonicity = new t.Multiply(e.harmonicity)),
                                        (this.harmonicity.units = t.Type.Positive),
                                        (this._modulationScale = new t.AudioToGain()),
                                        (this._modulationNode = new t.Gain()),
                                        this.frequency.connect(this._carrier.frequency),
                                        this.frequency.chain(this.harmonicity, this._modulator.frequency),
                                        this.detune.fan(this._carrier.detune, this._modulator.detune),
                                        this._modulator.chain(this._modulationScale, this._modulationNode.gain),
                                        this._carrier.chain(this._modulationNode, this.output),
                                        this._readOnly(["frequency", "harmonicity", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]);
                                }),
                                t.extend(t.AMSynth, t.Monophonic),
                                (t.AMSynth.defaults = {
                                    harmonicity: 3,
                                    detune: 0,
                                    oscillator: { type: "sine" },
                                    envelope: { attack: 0.01, decay: 0.01, sustain: 1, release: 0.5 },
                                    modulation: { type: "square" },
                                    modulationEnvelope: { attack: 0.5, decay: 0, sustain: 1, release: 0.5 },
                                }),
                                (t.AMSynth.prototype._triggerEnvelopeAttack = function (t, e) {
                                    return (t = this.toSeconds(t)), this.envelope.triggerAttack(t, e), this.modulationEnvelope.triggerAttack(t, e), this;
                                }),
                                (t.AMSynth.prototype._triggerEnvelopeRelease = function (t) {
                                    return this.envelope.triggerRelease(t), this.modulationEnvelope.triggerRelease(t), this;
                                }),
                                (t.AMSynth.prototype.dispose = function () {
                                    return (
                                        t.Monophonic.prototype.dispose.call(this),
                                        this._writable(["frequency", "harmonicity", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]),
                                        this._carrier.dispose(),
                                        (this._carrier = null),
                                        this._modulator.dispose(),
                                        (this._modulator = null),
                                        this.frequency.dispose(),
                                        (this.frequency = null),
                                        this.detune.dispose(),
                                        (this.detune = null),
                                        this.harmonicity.dispose(),
                                        (this.harmonicity = null),
                                        this._modulationScale.dispose(),
                                        (this._modulationScale = null),
                                        this._modulationNode.dispose(),
                                        (this._modulationNode = null),
                                        (this.oscillator = null),
                                        (this.envelope = null),
                                        (this.modulationEnvelope = null),
                                        (this.modulation = null),
                                        this
                                    );
                                }),
                                t.AMSynth
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.MonoSynth = function (e) {
                                    (e = this.defaultArg(e, t.MonoSynth.defaults)),
                                        t.Monophonic.call(this, e),
                                        (this.oscillator = new t.OmniOscillator(e.oscillator)),
                                        (this.frequency = this.oscillator.frequency),
                                        (this.detune = this.oscillator.detune),
                                        (this.filter = new t.Filter(e.filter)),
                                        (this.filterEnvelope = new t.FrequencyEnvelope(e.filterEnvelope)),
                                        (this.envelope = new t.AmplitudeEnvelope(e.envelope)),
                                        this.oscillator.chain(this.filter, this.envelope, this.output),
                                        this.oscillator.start(),
                                        this.filterEnvelope.connect(this.filter.frequency),
                                        this._readOnly(["oscillator", "frequency", "detune", "filter", "filterEnvelope", "envelope"]);
                                }),
                                t.extend(t.MonoSynth, t.Monophonic),
                                (t.MonoSynth.defaults = {
                                    frequency: "C4",
                                    detune: 0,
                                    oscillator: { type: "square" },
                                    filter: { Q: 6, type: "lowpass", rolloff: -24 },
                                    envelope: { attack: 0.005, decay: 0.1, sustain: 0.9, release: 1 },
                                    filterEnvelope: { attack: 0.06, decay: 0.2, sustain: 0.5, release: 2, baseFrequency: 200, octaves: 7, exponent: 2 },
                                }),
                                (t.MonoSynth.prototype._triggerEnvelopeAttack = function (t, e) {
                                    return this.envelope.triggerAttack(t, e), this.filterEnvelope.triggerAttack(t), this;
                                }),
                                (t.MonoSynth.prototype._triggerEnvelopeRelease = function (t) {
                                    return this.envelope.triggerRelease(t), this.filterEnvelope.triggerRelease(t), this;
                                }),
                                (t.MonoSynth.prototype.dispose = function () {
                                    return (
                                        t.Monophonic.prototype.dispose.call(this),
                                        this._writable(["oscillator", "frequency", "detune", "filter", "filterEnvelope", "envelope"]),
                                        this.oscillator.dispose(),
                                        (this.oscillator = null),
                                        this.envelope.dispose(),
                                        (this.envelope = null),
                                        this.filterEnvelope.dispose(),
                                        (this.filterEnvelope = null),
                                        this.filter.dispose(),
                                        (this.filter = null),
                                        (this.frequency = null),
                                        (this.detune = null),
                                        this
                                    );
                                }),
                                t.MonoSynth
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.DuoSynth = function (e) {
                                    (e = this.defaultArg(e, t.DuoSynth.defaults)),
                                        t.Monophonic.call(this, e),
                                        (this.voice0 = new t.MonoSynth(e.voice0)),
                                        (this.voice0.volume.value = -10),
                                        (this.voice1 = new t.MonoSynth(e.voice1)),
                                        (this.voice1.volume.value = -10),
                                        (this._vibrato = new t.LFO(e.vibratoRate, -50, 50)),
                                        this._vibrato.start(),
                                        (this.vibratoRate = this._vibrato.frequency),
                                        (this._vibratoGain = new t.Gain(e.vibratoAmount, t.Type.Positive)),
                                        (this.vibratoAmount = this._vibratoGain.gain),
                                        (this.frequency = new t.Signal(440, t.Type.Frequency)),
                                        (this.harmonicity = new t.Multiply(e.harmonicity)),
                                        (this.harmonicity.units = t.Type.Positive),
                                        this.frequency.connect(this.voice0.frequency),
                                        this.frequency.chain(this.harmonicity, this.voice1.frequency),
                                        this._vibrato.connect(this._vibratoGain),
                                        this._vibratoGain.fan(this.voice0.detune, this.voice1.detune),
                                        this.voice0.connect(this.output),
                                        this.voice1.connect(this.output),
                                        this._readOnly(["voice0", "voice1", "frequency", "vibratoAmount", "vibratoRate"]);
                                }),
                                t.extend(t.DuoSynth, t.Monophonic),
                                (t.DuoSynth.defaults = {
                                    vibratoAmount: 0.5,
                                    vibratoRate: 5,
                                    harmonicity: 1.5,
                                    voice0: { volume: -10, portamento: 0, oscillator: { type: "sine" }, filterEnvelope: { attack: 0.01, decay: 0, sustain: 1, release: 0.5 }, envelope: { attack: 0.01, decay: 0, sustain: 1, release: 0.5 } },
                                    voice1: { volume: -10, portamento: 0, oscillator: { type: "sine" }, filterEnvelope: { attack: 0.01, decay: 0, sustain: 1, release: 0.5 }, envelope: { attack: 0.01, decay: 0, sustain: 1, release: 0.5 } },
                                }),
                                (t.DuoSynth.prototype._triggerEnvelopeAttack = function (t, e) {
                                    return (
                                        (t = this.toSeconds(t)),
                                        this.voice0.envelope.triggerAttack(t, e),
                                        this.voice1.envelope.triggerAttack(t, e),
                                        this.voice0.filterEnvelope.triggerAttack(t),
                                        this.voice1.filterEnvelope.triggerAttack(t),
                                        this
                                    );
                                }),
                                (t.DuoSynth.prototype._triggerEnvelopeRelease = function (t) {
                                    return this.voice0.triggerRelease(t), this.voice1.triggerRelease(t), this;
                                }),
                                (t.DuoSynth.prototype.dispose = function () {
                                    return (
                                        t.Monophonic.prototype.dispose.call(this),
                                        this._writable(["voice0", "voice1", "frequency", "vibratoAmount", "vibratoRate"]),
                                        this.voice0.dispose(),
                                        (this.voice0 = null),
                                        this.voice1.dispose(),
                                        (this.voice1 = null),
                                        this.frequency.dispose(),
                                        (this.frequency = null),
                                        this._vibratoGain.dispose(),
                                        (this._vibratoGain = null),
                                        (this._vibrato = null),
                                        this.harmonicity.dispose(),
                                        (this.harmonicity = null),
                                        this.vibratoAmount.dispose(),
                                        (this.vibratoAmount = null),
                                        (this.vibratoRate = null),
                                        this
                                    );
                                }),
                                t.DuoSynth
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.FMSynth = function (e) {
                                    (e = this.defaultArg(e, t.FMSynth.defaults)),
                                        t.Monophonic.call(this, e),
                                        (this._carrier = new t.Synth(e.carrier)),
                                        (this._carrier.volume.value = -10),
                                        (this.oscillator = this._carrier.oscillator),
                                        (this.envelope = this._carrier.envelope.set(e.envelope)),
                                        (this._modulator = new t.Synth(e.modulator)),
                                        (this._modulator.volume.value = -10),
                                        (this.modulation = this._modulator.oscillator.set(e.modulation)),
                                        (this.modulationEnvelope = this._modulator.envelope.set(e.modulationEnvelope)),
                                        (this.frequency = new t.Signal(440, t.Type.Frequency)),
                                        (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                                        (this.harmonicity = new t.Multiply(e.harmonicity)),
                                        (this.harmonicity.units = t.Type.Positive),
                                        (this.modulationIndex = new t.Multiply(e.modulationIndex)),
                                        (this.modulationIndex.units = t.Type.Positive),
                                        (this._modulationNode = new t.Gain(0)),
                                        this.frequency.connect(this._carrier.frequency),
                                        this.frequency.chain(this.harmonicity, this._modulator.frequency),
                                        this.frequency.chain(this.modulationIndex, this._modulationNode),
                                        this.detune.fan(this._carrier.detune, this._modulator.detune),
                                        this._modulator.connect(this._modulationNode.gain),
                                        this._modulationNode.connect(this._carrier.frequency),
                                        this._carrier.connect(this.output),
                                        this._readOnly(["frequency", "harmonicity", "modulationIndex", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]);
                                }),
                                t.extend(t.FMSynth, t.Monophonic),
                                (t.FMSynth.defaults = {
                                    harmonicity: 3,
                                    modulationIndex: 10,
                                    detune: 0,
                                    oscillator: { type: "sine" },
                                    envelope: { attack: 0.01, decay: 0.01, sustain: 1, release: 0.5 },
                                    modulation: { type: "square" },
                                    modulationEnvelope: { attack: 0.5, decay: 0, sustain: 1, release: 0.5 },
                                }),
                                (t.FMSynth.prototype._triggerEnvelopeAttack = function (t, e) {
                                    return (t = this.toSeconds(t)), this.envelope.triggerAttack(t, e), this.modulationEnvelope.triggerAttack(t), this;
                                }),
                                (t.FMSynth.prototype._triggerEnvelopeRelease = function (t) {
                                    return (t = this.toSeconds(t)), this.envelope.triggerRelease(t), this.modulationEnvelope.triggerRelease(t), this;
                                }),
                                (t.FMSynth.prototype.dispose = function () {
                                    return (
                                        t.Monophonic.prototype.dispose.call(this),
                                        this._writable(["frequency", "harmonicity", "modulationIndex", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]),
                                        this._carrier.dispose(),
                                        (this._carrier = null),
                                        this._modulator.dispose(),
                                        (this._modulator = null),
                                        this.frequency.dispose(),
                                        (this.frequency = null),
                                        this.detune.dispose(),
                                        (this.detune = null),
                                        this.modulationIndex.dispose(),
                                        (this.modulationIndex = null),
                                        this.harmonicity.dispose(),
                                        (this.harmonicity = null),
                                        this._modulationNode.dispose(),
                                        (this._modulationNode = null),
                                        (this.oscillator = null),
                                        (this.envelope = null),
                                        (this.modulationEnvelope = null),
                                        (this.modulation = null),
                                        this
                                    );
                                }),
                                t.FMSynth
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.MembraneSynth = function (e) {
                                    (e = this.defaultArg(e, t.MembraneSynth.defaults)),
                                        t.Instrument.call(this, e),
                                        (this.oscillator = new t.OmniOscillator(e.oscillator).start()),
                                        (this.envelope = new t.AmplitudeEnvelope(e.envelope)),
                                        (this.octaves = e.octaves),
                                        (this.pitchDecay = e.pitchDecay),
                                        this.oscillator.chain(this.envelope, this.output),
                                        this._readOnly(["oscillator", "envelope"]);
                                }),
                                t.extend(t.MembraneSynth, t.Instrument),
                                (t.MembraneSynth.defaults = { pitchDecay: 0.05, octaves: 10, oscillator: { type: "sine" }, envelope: { attack: 0.001, decay: 0.4, sustain: 0.01, release: 1.4, attackCurve: "exponential" } }),
                                (t.MembraneSynth.prototype.triggerAttack = function (t, e, i) {
                                    e = this.toSeconds(e);
                                    var n = (t = this.toFrequency(t)) * this.octaves;
                                    return this.oscillator.frequency.setValueAtTime(n, e), this.oscillator.frequency.exponentialRampToValueAtTime(t, e + this.toSeconds(this.pitchDecay)), this.envelope.triggerAttack(e, i), this;
                                }),
                                (t.MembraneSynth.prototype.triggerRelease = function (t) {
                                    return this.envelope.triggerRelease(t), this;
                                }),
                                (t.MembraneSynth.prototype.dispose = function () {
                                    return t.Instrument.prototype.dispose.call(this), this._writable(["oscillator", "envelope"]), this.oscillator.dispose(), (this.oscillator = null), this.envelope.dispose(), (this.envelope = null), this;
                                }),
                                t.MembraneSynth
                            );
                        }),
                        t(function (t) {
                            var e = [1, 1.483, 1.932, 2.546, 2.63, 3.897];
                            return (
                                (t.MetalSynth = function (i) {
                                    (i = this.defaultArg(i, t.MetalSynth.defaults)),
                                        t.Instrument.call(this, i),
                                        (this.frequency = new t.Signal(i.frequency, t.Type.Frequency)),
                                        (this._oscillators = []),
                                        (this._freqMultipliers = []),
                                        (this._amplitue = new t.Gain(0).connect(this.output)),
                                        (this._highpass = new t.Filter({ type: "highpass", Q: -3.0102999566398125 }).connect(this._amplitue)),
                                        (this._octaves = i.octaves),
                                        (this._filterFreqScaler = new t.Scale(i.resonance, 7e3)),
                                        (this.envelope = new t.Envelope({ attack: i.envelope.attack, attackCurve: "linear", decay: i.envelope.decay, sustain: 0, release: i.envelope.release }).chain(
                                            this._filterFreqScaler,
                                            this._highpass.frequency
                                        )),
                                        this.envelope.connect(this._amplitue.gain);
                                    for (var n = 0; n < e.length; n++) {
                                        var s = new t.FMOscillator({ type: "square", modulationType: "square", harmonicity: i.harmonicity, modulationIndex: i.modulationIndex });
                                        s.connect(this._highpass).start(0), (this._oscillators[n] = s);
                                        var o = new t.Multiply(e[n]);
                                        (this._freqMultipliers[n] = o), this.frequency.chain(o, s.frequency);
                                    }
                                    this.octaves = i.octaves;
                                }),
                                t.extend(t.MetalSynth, t.Instrument),
                                (t.MetalSynth.defaults = { frequency: 200, envelope: { attack: 0.001, decay: 1.4, release: 0.2 }, harmonicity: 5.1, modulationIndex: 32, resonance: 4e3, octaves: 1.5 }),
                                (t.MetalSynth.prototype.triggerAttack = function (t, e) {
                                    return (t = this.toSeconds(t)), (e = this.defaultArg(e, 1)), this.envelope.triggerAttack(t, e), this;
                                }),
                                (t.MetalSynth.prototype.triggerRelease = function (t) {
                                    return (t = this.toSeconds(t)), this.envelope.triggerRelease(t), this;
                                }),
                                (t.MetalSynth.prototype.triggerAttackRelease = function (t, e, i) {
                                    return (e = this.toSeconds(e)), (t = this.toSeconds(t)), this.triggerAttack(e, i), this.triggerRelease(e + t), this;
                                }),
                                Object.defineProperty(t.MetalSynth.prototype, "modulationIndex", {
                                    get: function () {
                                        return this._oscillators[0].modulationIndex.value;
                                    },
                                    set: function (t) {
                                        for (var e = 0; e < this._oscillators.length; e++) this._oscillators[e].modulationIndex.value = t;
                                    },
                                }),
                                Object.defineProperty(t.MetalSynth.prototype, "harmonicity", {
                                    get: function () {
                                        return this._oscillators[0].harmonicity.value;
                                    },
                                    set: function (t) {
                                        for (var e = 0; e < this._oscillators.length; e++) this._oscillators[e].harmonicity.value = t;
                                    },
                                }),
                                Object.defineProperty(t.MetalSynth.prototype, "resonance", {
                                    get: function () {
                                        return this._filterFreqScaler.min;
                                    },
                                    set: function (t) {
                                        (this._filterFreqScaler.min = t), (this.octaves = this._octaves);
                                    },
                                }),
                                Object.defineProperty(t.MetalSynth.prototype, "octaves", {
                                    get: function () {
                                        return this._octaves;
                                    },
                                    set: function (t) {
                                        (this._octaves = t), (this._filterFreqScaler.max = this._filterFreqScaler.min * Math.pow(2, t));
                                    },
                                }),
                                (t.MetalSynth.prototype.dispose = function () {
                                    t.Instrument.prototype.dispose.call(this);
                                    for (var e = 0; e < this._oscillators.length; e++) this._oscillators[e].dispose(), this._freqMultipliers[e].dispose();
                                    (this._oscillators = null),
                                        (this._freqMultipliers = null),
                                        this.frequency.dispose(),
                                        (this.frequency = null),
                                        this._filterFreqScaler.dispose(),
                                        (this._filterFreqScaler = null),
                                        this._amplitue.dispose(),
                                        (this._amplitue = null),
                                        this.envelope.dispose(),
                                        (this.envelope = null),
                                        this._highpass.dispose(),
                                        (this._highpass = null);
                                }),
                                t.MetalSynth
                            );
                        }),
                        t(function (t) {
                            return (
                                window.AudioBufferSourceNode &&
                                    !AudioBufferSourceNode.prototype.start &&
                                    ((AudioBufferSourceNode.prototype.start = AudioBufferSourceNode.prototype.noteGrainOn), (AudioBufferSourceNode.prototype.stop = AudioBufferSourceNode.prototype.noteOff)),
                                (t.BufferSource = function () {
                                    var e = this.optionsObject(arguments, ["buffer", "onended"], t.BufferSource.defaults);
                                    (this.onended = e.onended),
                                        (this._startTime = -1),
                                        (this._stopTime = -1),
                                        (this._gainNode = this.output = new t.Gain()),
                                        (this._source = this.context.createBufferSource()),
                                        this._source.connect(this._gainNode),
                                        (this.playbackRate = new t.Param(this._source.playbackRate, t.Type.Positive)),
                                        (this.fadeIn = e.fadeIn),
                                        (this.fadeOut = e.fadeOut),
                                        (this._gain = 1),
                                        (this._onendedTimeout = -1),
                                        this.isUndef(e.buffer) || (this.buffer = e.buffer),
                                        (this.loop = e.loop);
                                }),
                                t.extend(t.BufferSource),
                                (t.BufferSource.defaults = { onended: t.noOp, fadeIn: 0, fadeOut: 0 }),
                                Object.defineProperty(t.BufferSource.prototype, "state", {
                                    get: function () {
                                        var e = this.now();
                                        return -1 !== this._startTime && e >= this._startTime && e < this._stopTime ? t.State.Started : t.State.Stopped;
                                    },
                                }),
                                (t.BufferSource.prototype.start = function (t, e, i, n, s) {
                                    if (-1 !== this._startTime) throw new Error("Tone.BufferSource: can only be started once.");
                                    return (
                                        this.buffer &&
                                            ((t = this.toSeconds(t)),
                                            (e = this.loop ? this.defaultArg(e, this.loopStart) : this.defaultArg(e, 0)),
                                            (e = this.toSeconds(e)),
                                            (t = this.toSeconds(t)),
                                            this._source.start(t, e),
                                            (n = this.defaultArg(n, 1)),
                                            (this._gain = n),
                                            (s = this.isUndef(s) ? this.toSeconds(this.fadeIn) : this.toSeconds(s)) > 0
                                                ? (this._gainNode.gain.setValueAtTime(0, t), this._gainNode.gain.linearRampToValueAtTime(this._gain, t + s))
                                                : this._gainNode.gain.setValueAtTime(n, t),
                                            (this._startTime = t + s),
                                            this.isUndef(i) || ((i = this.defaultArg(i, this.buffer.duration - e)), (i = this.toSeconds(i)), this.stop(t + i + s, s))),
                                        this
                                    );
                                }),
                                (t.BufferSource.prototype.stop = function (t, e) {
                                    return (
                                        this.buffer &&
                                            ((t = this.toSeconds(t)),
                                            (e = this.isUndef(e) ? this.toSeconds(this.fadeOut) : this.toSeconds(e)),
                                            (this._stopTime = t + e),
                                            this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime),
                                            e > 0 ? (this._gainNode.gain.setValueAtTime(this._gain, t), this._gainNode.gain.linearRampToValueAtTime(0, t + e), (t += e)) : this._gainNode.gain.setValueAtTime(0, t),
                                            (this.isNumber(this._source.playbackState) && 2 !== this._source.playbackState) || this._source.stop(t),
                                            clearTimeout(this._onendedTimeout),
                                            (this._onendedTimeout = setTimeout(this._onended.bind(this), 1e3 * (this._stopTime - this.now())))),
                                        this
                                    );
                                }),
                                (t.BufferSource.prototype._onended = function () {
                                    this.onended(this), this.dispose();
                                }),
                                Object.defineProperty(t.BufferSource.prototype, "loopStart", {
                                    get: function () {
                                        return this._source.loopStart;
                                    },
                                    set: function (t) {
                                        this._source.loopStart = this.toSeconds(t);
                                    },
                                }),
                                Object.defineProperty(t.BufferSource.prototype, "loopEnd", {
                                    get: function () {
                                        return this._source.loopEnd;
                                    },
                                    set: function (t) {
                                        this._source.loopEnd = this.toSeconds(t);
                                    },
                                }),
                                Object.defineProperty(t.BufferSource.prototype, "buffer", {
                                    get: function () {
                                        return this._source ? this._source.buffer : null;
                                    },
                                    set: function (e) {
                                        e instanceof t.Buffer ? (this._source.buffer = e.get()) : (this._source.buffer = e);
                                    },
                                }),
                                Object.defineProperty(t.BufferSource.prototype, "loop", {
                                    get: function () {
                                        return this._source.loop;
                                    },
                                    set: function (t) {
                                        this._source.loop = t;
                                    },
                                }),
                                (t.BufferSource.prototype.dispose = function () {
                                    return (
                                        (this.onended = null),
                                        this._source && (this._source.disconnect(), (this._source = null)),
                                        this._gainNode && (this._gainNode.dispose(), (this._gainNode = null)),
                                        (this._startTime = -1),
                                        (this.playbackRate = null),
                                        (this.output = null),
                                        clearTimeout(this._onendedTimeout),
                                        this
                                    );
                                }),
                                t.BufferSource
                            );
                        }),
                        t(function (t) {
                            function e() {
                                for (var e in i) n[e] = new t.Buffer().fromArray(i[e]);
                            }
                            (t.Noise = function () {
                                var e = this.optionsObject(arguments, ["type"], t.Noise.defaults);
                                t.Source.call(this, e), (this._source = null), (this._type = e.type), (this._playbackRate = e.playbackRate);
                            }),
                                t.extend(t.Noise, t.Source),
                                (t.Noise.defaults = { type: "white", playbackRate: 1 }),
                                Object.defineProperty(t.Noise.prototype, "type", {
                                    get: function () {
                                        return this._type;
                                    },
                                    set: function (e) {
                                        if (this._type !== e) {
                                            if (!(e in n)) throw new TypeError("Tone.Noise: invalid type: " + e);
                                            if (((this._type = e), this.state === t.State.Started)) {
                                                var i = this.now() + this.blockTime;
                                                this._stop(i), this._start(i);
                                            }
                                        }
                                    },
                                }),
                                Object.defineProperty(t.Noise.prototype, "playbackRate", {
                                    get: function () {
                                        return this._playbackRate;
                                    },
                                    set: function (t) {
                                        (this._playbackRate = t), this._source && (this._source.playbackRate.value = t);
                                    },
                                }),
                                (t.Noise.prototype._start = function (e) {
                                    var i = n[this._type];
                                    (this._source = new t.BufferSource(i).connect(this.output)),
                                        (this._source.loop = !0),
                                        (this._source.playbackRate.value = this._playbackRate),
                                        this._source.start(this.toSeconds(e), Math.random() * (i.duration - 0.001));
                                }),
                                (t.Noise.prototype._stop = function (t) {
                                    this._source && (this._source.stop(this.toSeconds(t)), (this._source = null));
                                }),
                                (t.Noise.prototype.dispose = function () {
                                    return t.Source.prototype.dispose.call(this), null !== this._source && (this._source.disconnect(), (this._source = null)), (this._buffer = null), this;
                                });
                            var i = {
                                    pink: (function () {
                                        for (var t = [], e = 0; e < 2; e++) {
                                            var i = new Float32Array(220500);
                                            t[e] = i;
                                            var n, s, o, r, a, h, l;
                                            n = s = o = r = a = h = l = 0;
                                            for (var u = 0; u < 220500; u++) {
                                                var c = 2 * Math.random() - 1;
                                                (n = 0.99886 * n + 0.0555179 * c),
                                                    (s = 0.99332 * s + 0.0750759 * c),
                                                    (o = 0.969 * o + 0.153852 * c),
                                                    (r = 0.8665 * r + 0.3104856 * c),
                                                    (a = 0.55 * a + 0.5329522 * c),
                                                    (h = -0.7616 * h - 0.016898 * c),
                                                    (i[u] = n + s + o + r + a + h + l + 0.5362 * c),
                                                    (i[u] *= 0.11),
                                                    (l = 0.115926 * c);
                                            }
                                        }
                                        return t;
                                    })(),
                                    brown: (function () {
                                        for (var t = [], e = 0; e < 2; e++) {
                                            var i = new Float32Array(220500);
                                            t[e] = i;
                                            for (var n = 0, s = 0; s < 220500; s++) {
                                                var o = 2 * Math.random() - 1;
                                                (i[s] = (n + 0.02 * o) / 1.02), (n = i[s]), (i[s] *= 3.5);
                                            }
                                        }
                                        return t;
                                    })(),
                                    white: (function () {
                                        for (var t = [], e = 0; e < 2; e++) {
                                            var i = new Float32Array(220500);
                                            t[e] = i;
                                            for (var n = 0; n < 220500; n++) i[n] = 2 * Math.random() - 1;
                                        }
                                        return t;
                                    })(),
                                },
                                n = {};
                            return e(), t.Context.on("init", e), t.Noise;
                        }),
                        t(function (t) {
                            return (
                                (t.NoiseSynth = function (e) {
                                    (e = this.defaultArg(e, t.NoiseSynth.defaults)),
                                        t.Instrument.call(this, e),
                                        (this.noise = new t.Noise()),
                                        (this.envelope = new t.AmplitudeEnvelope(e.envelope)),
                                        this.noise.chain(this.envelope, this.output),
                                        this.noise.start(),
                                        this._readOnly(["noise", "envelope"]);
                                }),
                                t.extend(t.NoiseSynth, t.Instrument),
                                (t.NoiseSynth.defaults = { noise: { type: "white" }, envelope: { attack: 0.005, decay: 0.1, sustain: 0 } }),
                                (t.NoiseSynth.prototype.triggerAttack = function (t, e) {
                                    return this.envelope.triggerAttack(t, e), this;
                                }),
                                (t.NoiseSynth.prototype.triggerRelease = function (t) {
                                    return this.envelope.triggerRelease(t), this;
                                }),
                                (t.NoiseSynth.prototype.triggerAttackRelease = function (t, e, i) {
                                    return (e = this.toSeconds(e)), (t = this.toSeconds(t)), this.triggerAttack(e, i), this.triggerRelease(e + t), this;
                                }),
                                (t.NoiseSynth.prototype.dispose = function () {
                                    return t.Instrument.prototype.dispose.call(this), this._writable(["noise", "envelope"]), this.noise.dispose(), (this.noise = null), this.envelope.dispose(), (this.envelope = null), this;
                                }),
                                t.NoiseSynth
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.PluckSynth = function (e) {
                                    (e = this.defaultArg(e, t.PluckSynth.defaults)),
                                        t.Instrument.call(this, e),
                                        (this._noise = new t.Noise("pink")),
                                        (this.attackNoise = e.attackNoise),
                                        (this._lfcf = new t.LowpassCombFilter({ resonance: e.resonance, dampening: e.dampening })),
                                        (this.resonance = this._lfcf.resonance),
                                        (this.dampening = this._lfcf.dampening),
                                        this._noise.connect(this._lfcf),
                                        this._lfcf.connect(this.output),
                                        this._readOnly(["resonance", "dampening"]);
                                }),
                                t.extend(t.PluckSynth, t.Instrument),
                                (t.PluckSynth.defaults = { attackNoise: 1, dampening: 4e3, resonance: 0.9 }),
                                (t.PluckSynth.prototype.triggerAttack = function (t, e) {
                                    (t = this.toFrequency(t)), (e = this.toSeconds(e));
                                    var i = 1 / t;
                                    return this._lfcf.delayTime.setValueAtTime(i, e), this._noise.start(e), this._noise.stop(e + i * this.attackNoise), this;
                                }),
                                (t.PluckSynth.prototype.dispose = function () {
                                    return (
                                        t.Instrument.prototype.dispose.call(this),
                                        this._noise.dispose(),
                                        this._lfcf.dispose(),
                                        (this._noise = null),
                                        (this._lfcf = null),
                                        this._writable(["resonance", "dampening"]),
                                        (this.dampening = null),
                                        (this.resonance = null),
                                        this
                                    );
                                }),
                                t.PluckSynth
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.PolySynth = function () {
                                    t.Instrument.call(this);
                                    var e = this.optionsObject(arguments, ["polyphony", "voice"], t.PolySynth.defaults);
                                    ((e = this.defaultArg(e, t.Instrument.defaults)).polyphony = Math.min(t.PolySynth.MAX_POLYPHONY, e.polyphony)),
                                        (this.voices = new Array(e.polyphony)),
                                        (this._triggers = new Array(e.polyphony)),
                                        (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                                        this._readOnly("detune");
                                    for (var i = 0; i < e.polyphony; i++) {
                                        var n = new e.voice(arguments[2], arguments[3]);
                                        (this.voices[i] = n), n.connect(this.output), n.hasOwnProperty("detune") && this.detune.connect(n.detune), (this._triggers[i] = { release: -1, note: null, voice: n });
                                    }
                                    this.volume.value = e.volume;
                                }),
                                t.extend(t.PolySynth, t.Instrument),
                                (t.PolySynth.defaults = { polyphony: 4, volume: 0, detune: 0, voice: t.Synth }),
                                (t.PolySynth.prototype.triggerAttack = function (t, e, i) {
                                    Array.isArray(t) || (t = [t]), (e = this.toSeconds(e));
                                    for (var n = 0; n < t.length; n++) {
                                        for (var s = t[n], o = this._triggers[0], r = 1; r < this._triggers.length; r++) this._triggers[r].release < o.release && ((o = this._triggers[r]), r);
                                        (o.release = 1 / 0), (o.note = JSON.stringify(s)), o.voice.triggerAttack(s, e, i);
                                    }
                                    return this;
                                }),
                                (t.PolySynth.prototype.triggerAttackRelease = function (t, e, i, n) {
                                    if (((i = this.toSeconds(i)), this.triggerAttack(t, i, n), this.isArray(e) && this.isArray(t)))
                                        for (var s = 0; s < t.length; s++) {
                                            var o = e[Math.min(s, e.length - 1)];
                                            this.triggerRelease(t[s], i + this.toSeconds(o));
                                        }
                                    else this.triggerRelease(t, i + this.toSeconds(e));
                                    return this;
                                }),
                                (t.PolySynth.prototype.triggerRelease = function (t, e) {
                                    Array.isArray(t) || (t = [t]), (e = this.toSeconds(e));
                                    for (var i = 0; i < t.length; i++)
                                        for (var n = JSON.stringify(t[i]), s = 0; s < this._triggers.length; s++) {
                                            var o = this._triggers[s];
                                            o.note === n && o.release > e && (o.voice.triggerRelease(e), (o.release = e));
                                        }
                                    return this;
                                }),
                                (t.PolySynth.prototype.set = function (t, e, i) {
                                    for (var n = 0; n < this.voices.length; n++) this.voices[n].set(t, e, i);
                                    return this;
                                }),
                                (t.PolySynth.prototype.get = function (t) {
                                    return this.voices[0].get(t);
                                }),
                                (t.PolySynth.prototype.releaseAll = function (t) {
                                    t = this.toSeconds(t);
                                    for (var e = 0; e < this._triggers.length; e++) {
                                        var i = this._triggers[e];
                                        i.release > t && ((i.release = t), i.voice.triggerRelease(t));
                                    }
                                    return this;
                                }),
                                (t.PolySynth.prototype.dispose = function () {
                                    t.Instrument.prototype.dispose.call(this);
                                    for (var e = 0; e < this.voices.length; e++) this.voices[e].dispose(), (this.voices[e] = null);
                                    return this._writable("detune"), this.detune.dispose(), (this.detune = null), (this.voices = null), (this._triggers = null), this;
                                }),
                                (t.PolySynth.MAX_POLYPHONY = 20),
                                t.PolySynth
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Player = function (e) {
                                    var i;
                                    e instanceof t.Buffer ? ((e = e.get()), (i = t.Player.defaults)) : (i = this.optionsObject(arguments, ["url", "onload"], t.Player.defaults)),
                                        t.Source.call(this, i),
                                        (this._source = null),
                                        (this.autostart = i.autostart),
                                        (this._buffer = new t.Buffer({ url: i.url, onload: this._onload.bind(this, i.onload), reverse: i.reverse })),
                                        e instanceof AudioBuffer && this._buffer.set(e),
                                        (this._loop = i.loop),
                                        (this._loopStart = i.loopStart),
                                        (this._loopEnd = i.loopEnd),
                                        (this._playbackRate = i.playbackRate),
                                        (this.retrigger = i.retrigger);
                                }),
                                t.extend(t.Player, t.Source),
                                (t.Player.defaults = { onload: t.noOp, playbackRate: 1, loop: !1, autostart: !1, loopStart: 0, loopEnd: 0, retrigger: !1, reverse: !1 }),
                                (t.Player.prototype.load = function (t, e) {
                                    return this._buffer.load(t, this._onload.bind(this, e));
                                }),
                                (t.Player.prototype._onload = function (e) {
                                    (e = this.defaultArg(e, t.noOp))(this), this.autostart && this.start();
                                }),
                                (t.Player.prototype._start = function (e, i, n) {
                                    if (!this._buffer.loaded) throw Error("Tone.Player: tried to start Player before the buffer was loaded");
                                    if (
                                        ((i = this._loop ? this.defaultArg(i, this._loopStart) : this.defaultArg(i, 0)),
                                        (i = this.toSeconds(i)),
                                        (n = this.defaultArg(n, Math.max(this._buffer.duration - i, 0))),
                                        (n = this.toSeconds(n)),
                                        (e = this.toSeconds(e)),
                                        (this._source = this.context.createBufferSource()),
                                        (this._source.buffer = this._buffer.get()),
                                        this._loop
                                            ? ((this._source.loop = this._loop), (this._source.loopStart = this.toSeconds(this._loopStart)), (this._source.loopEnd = this.toSeconds(this._loopEnd)))
                                            : this._synced || this._state.setStateAtTime(t.State.Stopped, e + n),
                                        (this._source.playbackRate.value = this._playbackRate),
                                        this._source.connect(this.output),
                                        this._loop)
                                    ) {
                                        var s = this._source.loopEnd || this._buffer.duration,
                                            o = s - this._source.loopStart;
                                        if (i > s) for (; i > s; ) i -= o;
                                        this._source.start(e, i);
                                    } else this._source.start(e, i, n);
                                    return this;
                                }),
                                (t.Player.prototype._stop = function (t) {
                                    return this._source && (this._source.stop(this.toSeconds(t)), (this._source = null)), this;
                                }),
                                (t.Player.prototype.seek = function (e, i) {
                                    return (i = this.toSeconds(i)), this._state.getValueAtTime(i) === t.State.Started && ((e = this.toSeconds(e)), this._stop(i), this._start(i, e)), this;
                                }),
                                (t.Player.prototype.setLoopPoints = function (t, e) {
                                    return (this.loopStart = t), (this.loopEnd = e), this;
                                }),
                                Object.defineProperty(t.Player.prototype, "loopStart", {
                                    get: function () {
                                        return this._loopStart;
                                    },
                                    set: function (t) {
                                        (this._loopStart = t), this._source && (this._source.loopStart = this.toSeconds(t));
                                    },
                                }),
                                Object.defineProperty(t.Player.prototype, "loopEnd", {
                                    get: function () {
                                        return this._loopEnd;
                                    },
                                    set: function (t) {
                                        (this._loopEnd = t), this._source && (this._source.loopEnd = this.toSeconds(t));
                                    },
                                }),
                                Object.defineProperty(t.Player.prototype, "buffer", {
                                    get: function () {
                                        return this._buffer;
                                    },
                                    set: function (t) {
                                        this._buffer.set(t);
                                    },
                                }),
                                Object.defineProperty(t.Player.prototype, "loop", {
                                    get: function () {
                                        return this._loop;
                                    },
                                    set: function (t) {
                                        (this._loop = t), this._source && (this._source.loop = t);
                                    },
                                }),
                                Object.defineProperty(t.Player.prototype, "playbackRate", {
                                    get: function () {
                                        return this._playbackRate;
                                    },
                                    set: function (t) {
                                        (this._playbackRate = t), this._source && (this._source.playbackRate.value = t);
                                    },
                                }),
                                Object.defineProperty(t.Player.prototype, "reverse", {
                                    get: function () {
                                        return this._buffer.reverse;
                                    },
                                    set: function (t) {
                                        this._buffer.reverse = t;
                                    },
                                }),
                                (t.Player.prototype.dispose = function () {
                                    return t.Source.prototype.dispose.call(this), null !== this._source && (this._source.disconnect(), (this._source = null)), this._buffer.dispose(), (this._buffer = null), this;
                                }),
                                t.Player
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Sampler = function () {
                                    var e = this.optionsObject(arguments, ["url", "onload"], t.Sampler.defaults);
                                    t.Instrument.call(this, e),
                                        (this.player = new t.Player(e.url, e.onload)),
                                        (this.player.retrigger = !0),
                                        (this.envelope = new t.AmplitudeEnvelope(e.envelope)),
                                        this.player.chain(this.envelope, this.output),
                                        this._readOnly(["player", "envelope"]),
                                        (this.loop = e.loop),
                                        (this.reverse = e.reverse);
                                }),
                                t.extend(t.Sampler, t.Instrument),
                                (t.Sampler.defaults = { onload: t.noOp, loop: !1, reverse: !1, envelope: { attack: 0.001, decay: 0, sustain: 1, release: 0.1 } }),
                                (t.Sampler.prototype.triggerAttack = function (t, e, i) {
                                    return (e = this.toSeconds(e)), (t = this.defaultArg(t, 0)), (this.player.playbackRate = this.intervalToFrequencyRatio(t)), this.player.start(e), this.envelope.triggerAttack(e, i), this;
                                }),
                                (t.Sampler.prototype.triggerRelease = function (t) {
                                    return (t = this.toSeconds(t)), this.envelope.triggerRelease(t), this.player.stop(this.toSeconds(this.envelope.release) + t), this;
                                }),
                                Object.defineProperty(t.Sampler.prototype, "loop", {
                                    get: function () {
                                        return this.player.loop;
                                    },
                                    set: function (t) {
                                        this.player.loop = t;
                                    },
                                }),
                                Object.defineProperty(t.Sampler.prototype, "reverse", {
                                    get: function () {
                                        return this.player.reverse;
                                    },
                                    set: function (t) {
                                        this.player.reverse = t;
                                    },
                                }),
                                Object.defineProperty(t.Sampler.prototype, "buffer", {
                                    get: function () {
                                        return this.player.buffer;
                                    },
                                    set: function (t) {
                                        this.player.buffer = t;
                                    },
                                }),
                                (t.Sampler.prototype.dispose = function () {
                                    return t.Instrument.prototype.dispose.call(this), this._writable(["player", "envelope"]), this.player.dispose(), (this.player = null), this.envelope.dispose(), (this.envelope = null), this;
                                }),
                                t.Sampler
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.GainToAudio = function () {
                                    this._norm = this.input = this.output = new t.WaveShaper(function (t) {
                                        return 2 * Math.abs(t) - 1;
                                    });
                                }),
                                t.extend(t.GainToAudio, t.SignalBase),
                                (t.GainToAudio.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._norm.dispose(), (this._norm = null), this;
                                }),
                                t.GainToAudio
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.Normalize = function (e, i) {
                                    (this._inputMin = this.defaultArg(e, 0)),
                                        (this._inputMax = this.defaultArg(i, 1)),
                                        (this._sub = this.input = new t.Add(0)),
                                        (this._div = this.output = new t.Multiply(1)),
                                        this._sub.connect(this._div),
                                        this._setRange();
                                }),
                                t.extend(t.Normalize, t.SignalBase),
                                Object.defineProperty(t.Normalize.prototype, "min", {
                                    get: function () {
                                        return this._inputMin;
                                    },
                                    set: function (t) {
                                        (this._inputMin = t), this._setRange();
                                    },
                                }),
                                Object.defineProperty(t.Normalize.prototype, "max", {
                                    get: function () {
                                        return this._inputMax;
                                    },
                                    set: function (t) {
                                        (this._inputMax = t), this._setRange();
                                    },
                                }),
                                (t.Normalize.prototype._setRange = function () {
                                    (this._sub.value = -this._inputMin), (this._div.value = 1 / (this._inputMax - this._inputMin));
                                }),
                                (t.Normalize.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this._sub.dispose(), (this._sub = null), this._div.dispose(), (this._div = null), this;
                                }),
                                t.Normalize
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.MultiPlayer = function () {
                                    var e = this.optionsObject(arguments, ["urls", "onload"], t.MultiPlayer.defaults);
                                    e.urls instanceof t.Buffers ? (this.buffers = e.urls) : (this.buffers = new t.Buffers(e.urls, e.onload)),
                                        (this._activeSources = {}),
                                        (this.fadeIn = e.fadeIn),
                                        (this.fadeOut = e.fadeOut),
                                        (this._volume = this.output = new t.Volume(e.volume)),
                                        (this.volume = this._volume.volume),
                                        this._readOnly("volume"),
                                        (this._volume.output.output.channelCount = 2),
                                        (this._volume.output.output.channelCountMode = "explicit"),
                                        (this.mute = e.mute);
                                }),
                                t.extend(t.MultiPlayer, t.Source),
                                (t.MultiPlayer.defaults = { onload: t.noOp, fadeIn: 0, fadeOut: 0 }),
                                (t.MultiPlayer.prototype._makeSource = function (e) {
                                    var i;
                                    this.isString(e) || this.isNumber(e) ? (i = this.buffers.get(e).get()) : e instanceof t.Buffer ? (i = e.get()) : e instanceof AudioBuffer && (i = e);
                                    var n = new t.BufferSource(i).connect(this.output);
                                    return this._activeSources.hasOwnProperty(e) || (this._activeSources[e] = []), this._activeSources[e].push(n), n;
                                }),
                                (t.MultiPlayer.prototype.start = function (t, e, i, n, s, o) {
                                    e = this.toSeconds(e);
                                    var r = this._makeSource(t);
                                    return r.start(e, i, n, this.defaultArg(o, 1), this.fadeIn), n && r.stop(e + this.toSeconds(n), this.fadeOut), (s = this.defaultArg(s, 0)), (r.playbackRate.value = this.intervalToFrequencyRatio(s)), this;
                                }),
                                (t.MultiPlayer.prototype.startLoop = function (t, e, i, n, s, o, r) {
                                    e = this.toSeconds(e);
                                    var a = this._makeSource(t);
                                    return (
                                        (a.loop = !0),
                                        (a.loopStart = this.toSeconds(this.defaultArg(n, 0))),
                                        (a.loopEnd = this.toSeconds(this.defaultArg(s, 0))),
                                        a.start(e, i, void 0, this.defaultArg(r, 1), this.fadeIn),
                                        (o = this.defaultArg(o, 0)),
                                        (a.playbackRate.value = this.intervalToFrequencyRatio(o)),
                                        this
                                    );
                                }),
                                (t.MultiPlayer.prototype.stop = function (t, e) {
                                    if (!this._activeSources[t] || !this._activeSources[t].length) throw new Error("Tone.MultiPlayer: cannot stop a buffer that hasn't been started or is already stopped");
                                    return (e = this.toSeconds(e)), this._activeSources[t].shift().stop(e, this.fadeOut), this;
                                }),
                                (t.MultiPlayer.prototype.stopAll = function (t) {
                                    t = this.toSeconds(t);
                                    for (var e in this._activeSources) for (var i = this._activeSources[e], n = 0; n < i.length; n++) i[n].stop(t);
                                    return this;
                                }),
                                (t.MultiPlayer.prototype.add = function (t, e, i) {
                                    return this.buffers.add(t, e, i), this;
                                }),
                                Object.defineProperty(t.MultiPlayer.prototype, "state", {
                                    get: function () {
                                        return this._activeSources.length > 0 ? t.State.Started : t.State.Stopped;
                                    },
                                }),
                                Object.defineProperty(t.MultiPlayer.prototype, "mute", {
                                    get: function () {
                                        return this._volume.mute;
                                    },
                                    set: function (t) {
                                        this._volume.mute = t;
                                    },
                                }),
                                (t.MultiPlayer.prototype.dispose = function () {
                                    t.prototype.dispose.call(this), this._volume.dispose(), (this._volume = null), this._writable("volume"), (this.volume = null);
                                    for (var e in this._activeSources)
                                        this._activeSources[e].forEach(function (t) {
                                            t.dispose();
                                        });
                                    return this.buffers.dispose(), (this.buffers = null), (this._activeSources = null), this;
                                }),
                                t.MultiPlayer
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.GrainPlayer = function () {
                                    var e = this.optionsObject(arguments, ["url", "onload"], t.GrainPlayer.defaults);
                                    t.Source.call(this),
                                        (this.buffer = new t.Buffer(e.url, e.onload)),
                                        (this._player = new t.MultiPlayer().connect(this.output)),
                                        (this._clock = new t.Clock(this._tick.bind(this), 1)),
                                        (this._loopStart = 0),
                                        (this._loopEnd = 0),
                                        (this._playbackRate = e.playbackRate),
                                        (this._grainSize = e.grainSize),
                                        (this._overlap = e.overlap),
                                        (this.detune = e.detune),
                                        (this.drift = e.drift),
                                        (this.overlap = e.overlap),
                                        (this.loop = e.loop),
                                        (this.playbackRate = e.playbackRate),
                                        (this.grainSize = e.grainSize),
                                        (this.loopStart = e.loopStart),
                                        (this.loopEnd = e.loopEnd),
                                        (this.reverse = e.reverse);
                                }),
                                t.extend(t.GrainPlayer, t.Source),
                                (t.GrainPlayer.defaults = { onload: t.noOp, overlap: 0.1, grainSize: 0.2, drift: 0, playbackRate: 1, detune: 0, loop: !1, loopStart: 0, loopEnd: 0, reverse: !1 }),
                                (t.GrainPlayer.prototype._start = function (t, e, i) {
                                    (e = this.defaultArg(e, 0)), (e = this.toSeconds(e)), (t = this.toSeconds(t)), (this._offset = e), this._clock.start(t), this._player.volume.setValueAtTime(0, t), i && this._stop(t + this.toSeconds(i));
                                }),
                                (t.GrainPlayer.prototype._stop = function (t) {
                                    this._clock.stop(t), this._player.volume.cancelScheduledValues(t), this._player.volume.setValueAtTime(-1 / 0, t);
                                }),
                                (t.GrainPlayer.prototype._tick = function (t) {
                                    var e = this.buffer.duration;
                                    this.loop && this._loopEnd > 0 && (e = this._loopEnd);
                                    var i = (2 * Math.random() - 1) * this.drift,
                                        n = this._offset - this._overlap + i,
                                        s = this.detune / 100;
                                    (n = Math.max(n, 0)), (n = Math.min(n, e));
                                    var o = this._player.fadeIn;
                                    if (this.loop && this._offset > e) {
                                        var r = this._offset - e;
                                        this._player.start(this.buffer, t, n, r + this._overlap, s),
                                            (n = this._offset % e),
                                            (this._offset = this._loopStart),
                                            (this._player.fadeIn = 0),
                                            this._player.start(this.buffer, t + r, this._offset, n + this._overlap, s);
                                    } else this._offset > e ? this.stop(t) : (0 === n && (this._player.fadeIn = 0), this._player.start(this.buffer, t, n, this.grainSize + this._overlap, s));
                                    this._player.fadeIn = o;
                                    var a = this._clock._nextTick - t;
                                    this._offset += a * this._playbackRate;
                                }),
                                (t.GrainPlayer.prototype.scrub = function (t, e) {
                                    return (this._offset = this.toSeconds(t)), this._tick(this.toSeconds(e)), this;
                                }),
                                Object.defineProperty(t.GrainPlayer.prototype, "playbackRate", {
                                    get: function () {
                                        return this._playbackRate;
                                    },
                                    set: function (t) {
                                        (this._playbackRate = t), (this.grainSize = this._grainSize);
                                    },
                                }),
                                Object.defineProperty(t.GrainPlayer.prototype, "loopStart", {
                                    get: function () {
                                        return this._loopStart;
                                    },
                                    set: function (t) {
                                        this._loopStart = this.toSeconds(t);
                                    },
                                }),
                                Object.defineProperty(t.GrainPlayer.prototype, "loopEnd", {
                                    get: function () {
                                        return this._loopEnd;
                                    },
                                    set: function (t) {
                                        this._loopEnd = this.toSeconds(t);
                                    },
                                }),
                                Object.defineProperty(t.GrainPlayer.prototype, "reverse", {
                                    get: function () {
                                        return this.buffer.reverse;
                                    },
                                    set: function (t) {
                                        this.buffer.reverse = t;
                                    },
                                }),
                                Object.defineProperty(t.GrainPlayer.prototype, "grainSize", {
                                    get: function () {
                                        return this._grainSize;
                                    },
                                    set: function (t) {
                                        (this._grainSize = this.toSeconds(t)), (this._clock.frequency.value = this._playbackRate / this._grainSize);
                                    },
                                }),
                                Object.defineProperty(t.GrainPlayer.prototype, "overlap", {
                                    get: function () {
                                        return this._overlap;
                                    },
                                    set: function (t) {
                                        (t = this.toSeconds(t)), (this._overlap = t), this._overlap < 0 ? ((this._player.fadeIn = 0.01), (this._player.fadeOut = 0.01)) : ((this._player.fadeIn = t), (this._player.fadeOut = t));
                                    },
                                }),
                                (t.GrainPlayer.prototype.dispose = function () {
                                    return t.Source.prototype.dispose.call(this), this.buffer.dispose(), (this.buffer = null), this._player.dispose(), (this._player = null), this._clock.dispose(), (this._clock = null), this;
                                }),
                                t.GrainPlayer
                            );
                        }),
                        t(function (t) {
                            return (
                                (t.UserMedia = function () {
                                    var e = this.optionsObject(arguments, ["volume"], t.UserMedia.defaults);
                                    (this._mediaStream = null),
                                        (this._stream = null),
                                        (this._device = null),
                                        (this._volume = this.output = new t.Volume(e.volume)),
                                        (this.volume = this._volume.volume),
                                        this._readOnly("volume"),
                                        (this.mute = e.mute);
                                }),
                                t.extend(t.UserMedia),
                                (t.UserMedia.defaults = { volume: 0, mute: !1 }),
                                (t.UserMedia.prototype.open = function (t) {
                                    return (
                                        (t = this.defaultArg(t, "default")),
                                        this.enumerateDevices().then(
                                            function (e) {
                                                var i;
                                                if (
                                                    (this.isNumber(t)
                                                        ? (i = e[t])
                                                        : (i = e.find(function (e) {
                                                              return e.label === t || e.deviceId === t;
                                                          })) || (i = e[0]),
                                                    !i)
                                                )
                                                    throw new Error("Tone.UserMedia: no matching audio inputs.");
                                                this._device = i;
                                                var n = { audio: { deviceId: i.deviceId, echoCancellation: !1, sampleRate: this.context.sampleRate } };
                                                return navigator.mediaDevices.getUserMedia(n).then(
                                                    function (t) {
                                                        return this._stream || ((this._stream = t), (this._mediaStream = this.context.createMediaStreamSource(t)), this._mediaStream.connect(this.output)), this;
                                                    }.bind(this)
                                                );
                                            }.bind(this)
                                        )
                                    );
                                }),
                                (t.UserMedia.prototype.close = function () {
                                    return (
                                        this._stream &&
                                            (this._stream.getAudioTracks().forEach(function (t) {
                                                t.stop();
                                            }),
                                            (this._stream = null),
                                            this._mediaStream.disconnect(),
                                            (this._mediaStream = null)),
                                        (this._device = null),
                                        this
                                    );
                                }),
                                (t.UserMedia.prototype.enumerateDevices = function () {
                                    return navigator.mediaDevices.enumerateDevices().then(function (t) {
                                        return t.filter(function (t) {
                                            return "audioinput" === t.kind;
                                        });
                                    });
                                }),
                                Object.defineProperty(t.UserMedia.prototype, "state", {
                                    get: function () {
                                        return this._stream && this._stream.active ? t.State.Started : t.State.Stopped;
                                    },
                                }),
                                Object.defineProperty(t.UserMedia.prototype, "deviceId", {
                                    get: function () {
                                        if (this._device) return this._device.deviceId;
                                    },
                                }),
                                Object.defineProperty(t.UserMedia.prototype, "groupId", {
                                    get: function () {
                                        if (this._device) return this._device.groupId;
                                    },
                                }),
                                Object.defineProperty(t.UserMedia.prototype, "label", {
                                    get: function () {
                                        if (this._device) return this._device.label;
                                    },
                                }),
                                Object.defineProperty(t.UserMedia.prototype, "mute", {
                                    get: function () {
                                        return this._volume.mute;
                                    },
                                    set: function (t) {
                                        this._volume.mute = t;
                                    },
                                }),
                                (t.UserMedia.prototype.dispose = function () {
                                    return t.prototype.dispose.call(this), this.close(), this._writable("volume"), this._volume.dispose(), (this._volume = null), (this.volume = null), this;
                                }),
                                Object.defineProperty(t.UserMedia, "supported", {
                                    get: function () {
                                        return !t.prototype.isUndef(navigator.mediaDevices) && t.prototype.isFunction(navigator.mediaDevices.getUserMedia);
                                    },
                                }),
                                t.UserMedia
                            );
                        }),
                        e
                    );
                });
            },
            {},
        ],
        8: [
            function (t, e, i) {
                e.exports = {
                    version: "0.0.1",
                    backgroundColor: 16777215,
                    attenuation: 0.999,
                    camera: { fov: 60, near: 1, far: 1e3, position: { x: 0.5530312975540033, y: 0.48524403572738883, z: 31.423164395207767 } },
                    controls: {
                        enableZoom: !0,
                        enableRotate: !0,
                        enablePan: !0,
                        enableDamping: !0,
                        dampingFactor: 0.5,
                        rotateSpeed: 0.5,
                        target: { x: 0.07717754602894467, y: -14.659580632140548, z: 1.1318653029928603 },
                        maxPolarAngle: 3.141592653589793,
                        minPolarAngle: 0,
                    },
                    light: { position: { x: 0, y: 50, z: 0 } },
                    colors: [2390944, 7389619, 11721663, 15990717, 16717396],
                };
            },
            {},
        ],
        9: [
            function (t, e, i) {
                "use strict";
                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                var s = (function () {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                            }
                        }
                        return function (e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e;
                        };
                    })(),
                    o = (t("glslify"), THREE.FloatType, CANNON.Quaternion),
                    r = CANNON.Vec3,
                    a =
                        (new THREE.Matrix4(),
                        new THREE.Vector3(1, 1, 1),
                        new THREE.Quaternion(),
                        new THREE.Vector3(),
                        (function () {
                            function t(e) {
                                n(this, t),
                                    Object.assign(
                                        this,
                                        {
                                            gravity: new r(0, -100, 0),
                                            fixedTimeStep: 1 / 60,
                                            maxSubSteps: 10,
                                            iterations: 10,
                                            world: void 0,
                                            lastTime: 0,
                                            springs: [],
                                            onUpdate: function (t) {},
                                            updateBodies: function (t, e) {
                                                t.forEach(function (t) {
                                                    t.mesh && (t.mesh.position.copy(t.position), t.mesh.quaternion.copy(t.quaternion));
                                                });
                                            },
                                        },
                                        e || {}
                                    ),
                                    this.world || this.setupWorld();
                            }
                            return (
                                s(t, [
                                    {
                                        key: "setupWorld",
                                        value: function () {
                                            (this.world = this.world || new CANNON.World()), (this.world.gravity = this.gravity), (this.world.solver.iterations = this.iterations);
                                        },
                                    },
                                    {
                                        key: "update",
                                        value: function (t) {
                                            this.lastTime && this.world.step(this.fixedTimeStep, t - this.lastTime, this.maxSubSteps),
                                                (this.lastTime = t),
                                                this.onUpdate(t),
                                                this.updateBodies(this.world.bodies, t),
                                                this.springs.forEach(function (t) {
                                                    t.applyForce();
                                                });
                                        },
                                    },
                                    {
                                        key: "addBody",
                                        value: function (t, e) {
                                            var i = new CANNON.Body(Object.assign({ mass: 1 }, e || {}));
                                            return i.addShape(t), this.world.add(i), i;
                                        },
                                    },
                                    {
                                        key: "removeBody",
                                        value: function (t) {
                                            this.world.removeBody(t);
                                        },
                                    },
                                    {
                                        key: "addConstraint",
                                        value: function (t) {
                                            return this.world.addConstraint(t), t;
                                        },
                                    },
                                    {
                                        key: "removeConstraint",
                                        value: function (t) {
                                            this.world.removeConstraint(t);
                                        },
                                    },
                                    {
                                        key: "addPointConstraint",
                                        value: function (t, e, i, n) {
                                            var s = new CANNON.PointToPointConstraint(t, e, i, n);
                                            return this.addConstraint(s);
                                        },
                                    },
                                    {
                                        key: "addLockConstraint",
                                        value: function (t, e, i) {
                                            var n = new CANNON.LockConstraint(t, e);
                                            return Object.assign(n, { maxForce: 1 / 0, collideConnected: !1 }, i || {}), this.addConstraint(n);
                                        },
                                    },
                                    {
                                        key: "addSphere",
                                        value: function (t, e) {
                                            return this.addBody(new CANNON.Sphere(t), e);
                                        },
                                    },
                                    {
                                        key: "addBox",
                                        value: function (t, e) {
                                            return this.addBody(new CANNON.Box(t), e);
                                        },
                                    },
                                    {
                                        key: "addPlane",
                                        value: function (t) {
                                            return this.addBody(new CANNON.Plane(), t);
                                        },
                                    },
                                    {
                                        key: "addBoxMesh",
                                        value: function (t, e) {
                                            t.geometry.boundingBox || t.geometry.computeBoundingBox();
                                            var i = t.geometry.boundingBox.getSize();
                                            i.multiply(t.scale).multiplyScalar(0.5);
                                            var n = this.addBox(new r().copy(i), Object.assign({ position: new r().copy(t.position), quaternion: new o().copy(t.quaternion), mass: i.x * i.y * i.z * 2 }, e));
                                            return (n.mesh = t), n;
                                        },
                                    },
                                    {
                                        key: "addSpring",
                                        value: function (t, e, i) {
                                            var n = new CANNON.Spring(t, e, i);
                                            return this.springs.push(n), n;
                                        },
                                    },
                                    {
                                        key: "getBodyCount",
                                        value: function () {
                                            return this.world.bodies.length;
                                        },
                                    },
                                ]),
                                t
                            );
                        })());
                e.exports = a;
            },
            { glslify: 3 },
        ],
        10: [
            function (t, e, i) {
                "use strict";
                var n = function (t) {
                    (t = t || {}),
                        THREE.MeshStandardMaterial.call(this),
                        (this.type = "CustomMaterial"),
                        (t.uniforms = Object.assign({}, THREE.ShaderLib.standard.uniforms, t.uniforms || {})),
                        Object.assign(this, { vertexShader: THREE.ShaderLib.physical.vertexShader, fragmentShader: THREE.ShaderLib.physical.fragmentShader }, t),
                        this.setValues(t);
                };
                ((n.prototype = Object.create(THREE.MeshStandardMaterial.prototype)).constructor = n), (n.prototype.isMeshStandardMaterial = !0), (e.exports = n);
            },
            {},
        ],
        11: [
            function (t, e, i) {
                "use strict";
                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                var s = (function () {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                            }
                        }
                        return function (e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e;
                        };
                    })(),
                    o = new THREE.Quaternion(),
                    r = new THREE.Vector3(1, 1, 1),
                    a = (function () {
                        function t(e) {
                            n(this, t),
                                Object.assign(
                                    this,
                                    { transform: new THREE.Matrix4(), offset: new THREE.Matrix4(), bodyMatrix: new THREE.Matrix4(), localMatrix: new THREE.Matrix4(), matrixWorld: new THREE.Matrix4(), body: null, debugMesh: null },
                                    e || {}
                                ),
                                this.setup(this.transform);
                        }
                        return (
                            s(t, [
                                {
                                    key: "setup",
                                    value: function (t) {
                                        this.composeBodyMatrix();
                                        var e = new THREE.Matrix4().getInverse(this.bodyMatrix);
                                        this.localMatrix.copy(e).multiply(t), this.offset.getInverse(t);
                                    },
                                },
                                {
                                    key: "update",
                                    value: function () {
                                        this.updateMatrixWorld(),
                                            this.debugMesh && this.matrixWorld.decompose(this.debugMesh.position, this.debugMesh.quaternion, this.debugMesh.scale),
                                            this.transform.copy(this.matrixWorld).multiply(this.offset);
                                    },
                                },
                                {
                                    key: "composeBodyMatrix",
                                    value: function () {
                                        this.bodyMatrix.compose(this.body.position, o.copy(this.body.quaternion), r);
                                    },
                                },
                                {
                                    key: "updateMatrixWorld",
                                    value: function () {
                                        this.composeBodyMatrix(), this.matrixWorld.copy(this.bodyMatrix).multiply(this.localMatrix);
                                    },
                                },
                            ]),
                            t
                        );
                    })();
                e.exports = a;
            },
            {},
        ],
        12: [
            function (t, e, i) {
                "use strict";
                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                var s = (function () {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                            }
                        }
                        return function (e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e;
                        };
                    })(),
                    o = (function (t) {
                        return t && t.__esModule ? t : { default: t };
                    })(t("./Joint.js")),
                    r = (function () {
                        function t(e) {
                            n(this, t), Object.assign(this, { joints: [], height: 0, texture: { value: void 0 }, textureDim: { value: new THREE.Vector2() }, onNewDataTexture: function (t) {} }, e || {});
                        }
                        return (
                            s(t, [
                                {
                                    key: "update",
                                    value: function () {
                                        var t = this;
                                        if (this.joints.length) {
                                            if ((this.height < this.joints.length && this.texture.value && (this.texture.value.dispose(), (this.texture.value = void 0)), this.height < this.joints.length)) {
                                                var e = THREE.Math.nextPowerOfTwo(this.joints.length);
                                                (this.height = e),
                                                    (this.jointData = new Float32Array(16 * e)),
                                                    (this.texture.value = new THREE.DataTexture(this.jointData, 4, e, THREE.RGBAFormat, THREE.FloatType)),
                                                    Object.assign(this.texture.value, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter }),
                                                    this.textureDim.value.set(4, e),
                                                    this.onNewDataTexture(this.texture.value);
                                            }
                                            this.joints.forEach(function (e, i) {
                                                e.update(), e.transform.toArray(t.jointData, 16 * i);
                                            }),
                                                (this.texture.value.needsUpdate = !0);
                                        }
                                    },
                                },
                                {
                                    key: "getJointCount",
                                    value: function () {
                                        return this.joints.length;
                                    },
                                },
                                {
                                    key: "addJoint",
                                    value: function (t, e, i) {
                                        var n = new o.default({ transform: e, body: t, debugMesh: i });
                                        return this.joints.push(n), n;
                                    },
                                },
                            ]),
                            t
                        );
                    })();
                e.exports = r;
            },
            { "./Joint.js": 11 },
        ],
        13: [
            function (t, e, i) {
                "use strict";
                var n = function (t) {
                    return document.createRange().createContextualFragment(t);
                };
                (e.exports.createElementFromString = n),
                    (e.exports.appendTo = function (t, e) {
                        t.appendChild(n(e));
                    }),
                    (e.exports.smoothStep = function (t) {
                        return t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t);
                    }),
                    (e.exports.smootherStep = function (t) {
                        return t <= 0 ? 0 : t >= 1 ? 1 : t * t * t * (t * (6 * t - 15) + 10);
                    }),
                    (e.exports.randomElement = function (t) {
                        return Array.isArray(t) ? t[Math.floor(Math.random() * t.length)] : t instanceof Object ? t[randElement(Object.keys[t])] : t;
                    }),
                    (e.exports.makeDataTexture = function (t, e, i, n) {
                        n = Object.assign(
                            {
                                format: THREE.RGBAFormat,
                                type: THREE.FloatType,
                                mapping: THREE.UVMapping,
                                wrapS: THREE.ClampToEdgeWrapping,
                                wrapT: THREE.ClampToEdgeWrapping,
                                minFilter: THREE.NearestFilter,
                                magFilter: THREE.NearestFilter,
                                anisotropy: 1,
                            },
                            n || {}
                        );
                        var s = new THREE.DataTexture(t, e, i, n.format, n.type, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.anisotropy);
                        return (s.needsUpdate = !0), s;
                    }),
                    (e.exports.makePaletteTexture = function (t, e) {
                        var i = t
                            .split("/")
                            .pop()
                            .split("-")
                            .map(function (t) {
                                return parseInt("0x" + t);
                            })
                            .map(function (t) {
                                return new THREE.Color(t).toArray().map(function (t) {
                                    return parseInt(Math.min(255, 255 * t));
                                });
                            });
                        i = [].concat.apply([], i);
                        var n;
                        return (n = e ? new THREE.DataTexture(new Uint8Array(i), i.length / 3, 1, THREE.RGBFormat) : new THREE.DataTexture(new Uint8Array(i), 1, i.length / 3, THREE.RGBFormat)), (n.needsUpdate = !0), n;
                    });
            },
            {},
        ],
        14: [
            function (t, e, i) {
                "use strict";
                var n = t("glslify"),
                    s = new THREE.MeshBasicMaterial({ color: "red", side: 2 }),
                    o = function (t) {
                        (this.usePO2 = !0),
                            (this.width = window.innerWidth),
                            (this.height = window.innerHeight),
                            (this.renderTargetOptions = { minFilter: THREE.LinearMipMapLinearFilter, format: THREE.RGBAFormat, wrapS: THREE.RepeatWrapping, wrapT: THREE.RepeatWrapping }),
                            (this.uResolution = { type: "v2", value: new THREE.Vector2(this.width, this.height) }),
                            (this.uOpacity = { type: "f", value: 1 }),
                            (this.fullScreenFragmentShader = n([
                                '#define GLSLIFY 1\n\n    /**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent \n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE, \n            vec2 v_rgbSW, vec2 v_rgbSE, \n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n//To save 9 dependent texture reads, you can compute\n//these in the vertex shader and use the optimized\n//frag.glsl function in your frag shader. \n\n//This is best suited for mobile devices, like iOS.\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n\t\t\tout vec2 v_rgbNW, out vec2 v_rgbNE,\n\t\t\tout vec2 v_rgbSW, out vec2 v_rgbSE,\n\t\t\tout vec2 v_rgbM) {\n\tvec2 inverseVP = 1.0 / resolution.xy;\n\tv_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n\tv_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n\tv_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n\tv_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n\tv_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvec4 apply(sampler2D tex, vec2 fragCoord, vec2 resolution) {\n\tmediump vec2 v_rgbNW;\n\tmediump vec2 v_rgbNE;\n\tmediump vec2 v_rgbSW;\n\tmediump vec2 v_rgbSE;\n\tmediump vec2 v_rgbM;\n\n\t//compute the texture coords\n\ttexcoords(fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\t\n\t//compute FXAA\n\treturn fxaa(tex, fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n\n    uniform sampler2D tDiffuse;\n    uniform vec2 resolution;\n    uniform float opacity;\n    varying vec2 vUv;\n    void main() {\n      vec4 c = apply(tDiffuse, vUv * resolution, resolution);\n      gl_FragColor = c;//vec4(c.xyz, opacity);\n    }\n    ',
                            ])),
                            (this.fullScreenVertexShader = n(["#define GLSLIFY 1\n\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = vec4( position, 1.0 );\n    }"])),
                            Object.assign(this, t),
                            this.usePO2 && ((this.width = THREE.Math.nearestPowerOfTwo(this.width)), (this.height = THREE.Math.nearestPowerOfTwo(this.height))),
                            (this.fullScreenMaterial = new THREE.ShaderMaterial({
                                transparent: !0,
                                blending: 0,
                                depthTest: !1,
                                depthWrite: !1,
                                side: 0,
                                uniforms: { resolution: this.uResolution, opacity: this.uOpacity, tDiffuse: { type: "t", value: null } },
                                vertexShader: this.fullScreenVertexShader,
                                fragmentShader: this.fullScreenFragmentShader,
                            })),
                            (this.readBuffer = new THREE.WebGLRenderTarget(this.width, this.height, this.renderTargetOptions)),
                            (this.writeBuffer = this.readBuffer.clone()),
                            (this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), s)),
                            (this.quad.frustumCulled = !1),
                            this.quad.scale.set(this.width, this.height, 1),
                            (this.quadScene = new THREE.Scene()),
                            this.quadScene.add(this.quad),
                            (this.passes = []);
                    };
                (o.prototype.addPass = function (t) {
                    (t.uniforms = Object.assign({}, t.uniforms || {}, { tDiffuse: { type: "t", value: this.readBuffer }, resolution: this.uResolution })),
                        (t = Object.assign({ vertexShader: this.fullScreenVertexShader, fragmentShader: this.fullScreenFragmentShader }, t));
                    var e = new THREE.ShaderMaterial(t);
                    return this.passes.push(e), e;
                }),
                    (o.prototype.pingPong = function () {
                        var t = this.writeBuffer;
                        (this.writeBuffer = this.readBuffer), (this.readBuffer = t);
                    }),
                    (o.prototype.doPasses = function (t, e, i) {
                        var n = this;
                        t.render(e, i, this.writeBuffer, !0),
                            this.pingPong(),
                            this.passes.forEach(function (e, s) {
                                (e.uniforms.tDiffuse.value = n.readBuffer.texture), (n.quadScene.overrideMaterial = e), t.render(n.quadScene, i, n.writeBuffer, !0), n.pingPong();
                            });
                    }),
                    (o.prototype.render = function (t, e, i, n) {
                        this.doPasses(t, e, i), (this.fullScreenMaterial.uniforms.tDiffuse.value = this.readBuffer.texture), (this.quadScene.overrideMaterial = this.fullScreenMaterial), t.render(this.quadScene, i, n, !0);
                    }),
                    (o.prototype.setSize = function (t, e) {
                        this.usePO2 && ((t = THREE.Math.nearestPowerOfTwo(t)), (e = THREE.Math.nearestPowerOfTwo(e))),
                            this.readBuffer.setSize(t, e),
                            this.writeBuffer.setSize(t, e),
                            this.uResolution.value.set(t, e),
                            this.passes.forEach(function (i, n) {
                                i.resolution && i.resolution.value.set(t, e);
                            });
                    }),
                    (e.exports = o);
            },
            { glslify: 3 },
        ],
        15: [
            function (t, e, i) {
                "use strict";
                var n =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              },
                    s =
                        "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
                            ? function (t) {
                                  return void 0 === t ? "undefined" : n(t);
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : n(t);
                              },
                    o = (function (t) {
                        return t && t.__esModule ? t : { default: t };
                    })(t("save-as")),
                    r = function (t, e) {
                        Object.keys(t).forEach(e);
                    },
                    a = function t(e, i) {
                        r(e, function (n) {
                            void 0 !== i[n] && (i[n].isColor ? i[n].setHex(e[n]) : "object" !== s(e[n]) ? (i[n] = e[n]) : t(e[n], i[n]));
                        });
                    };
                e.exports = function (t) {
                    var e = new THREE.FileLoader(t);
                    e.setResponseType("json");
                    var i = function (t, e) {
                        a(t, e);
                    };
                    return {
                        save: function (t, e) {
                            var i = new Blob([JSON.stringify(t, null, 2)], { type: "application/json" });
                            (0, o.default)(i, e || "config.json");
                        },
                        load: function (t, n) {
                            e.load(t, function (t) {
                                i(t, n);
                            });
                        },
                        jsonLoader: e,
                        setConfig: i,
                    };
                };
            },
            { "save-as": 5 },
        ],
        16: [
            function (t, e, i) {
                "use strict";
                function n(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var s = n(t("ismobilejs")),
                    o = n(t("./ThreeView.js")),
                    r = (n(t("./CustomMaterial.js")), n(t("./touchEvents.js"))),
                    a = n(t("./SimpleSettings.js")),
                    h = n(t("./CannonWrapper.js")),
                    l = n(t("./SkinManager.js")),
                    u = n(t("./PostProcess.js")),
                    c = (n(t("eases/circ-in-out")), n(t("eases/cubic-in-out")), n(t("tone"))),
                    p = n(t("startaudiocontext")),
                    f = t("./LaserUtils.js"),
                    d = t("glslify"),
                    y = s.default.any;
                (0, p.default)(c.default.context, "#container", function () {
                    console.log("started audio context");
                });
                var _ = 0,
                    m = 0,
                    v = (Math.abs, Math.max, Math.min, Math.sin),
                    g = Math.cos,
                    b = (Math.pow, Math.PI),
                    S = 2 * Math.PI,
                    T = (Math.PI, Math.random, THREE.Math.randFloat, THREE.Math.randInt, THREE.Math.lerp, THREE.Math.mapLinear),
                    w = (THREE.Math.clamp, CANNON.Vec3),
                    x = new THREE.LoadingManager(),
                    O = (new THREE.TextureLoader(x), new THREE.FileLoader(x));
                O.setResponseType("json");
                var E = (0, f.randomElement)([
                        "https://coolors.co/app/05668d-427aa1-ebf2fa-679436-a5be00",
                        "https://coolors.co/2b2d42-8d99ae-edf2f4-ef233c-d90429",
                        "https://coolors.co/1a535c-4ecdc4-f7fff7-ff6b6b-ffe66d",
                        "https://coolors.co/247ba0-70c1b3-b2dbbf-f3ffbd-ff1654",
                        "https://coolors.co/app/25ced1-ffffff-fceade-e43f6f-ff8a5b",
                    ]),
                    P = {
                        version: "0.0.1",
                        backgroundColor: 16777215,
                        attenuation: 0.999,
                        camera: { fov: 60, near: 1, far: 1e3, position: new THREE.Vector3(0, 40, 40) },
                        controls: { enableZoom: !0, enableRotate: !0, enablePan: !0, enableDamping: !0, dampingFactor: 0.5, rotateSpeed: 0.5, target: new THREE.Vector3(0, 0, 0), maxPolarAngle: b, minPolarAngle: 0 },
                        light: { position: new THREE.Vector3(0, 50, 0) },
                        colors: E.split("/")
                            .pop()
                            .split("-")
                            .map(function (t) {
                                return new THREE.Color().setStyle("#" + t);
                            }),
                    },
                    A = new a.default(x);
                A.setConfig(t("../config.json"), P);
                var k = new u.default(),
                    M = new c.default.Limiter(-3).toMaster(),
                    F = new c.default.Volume(5).connect(M),
                    R = (new c.default.Distortion(0.2).connect(F), new c.default.Volume(-50).connect(F)),
                    q = new c.default.PingPongDelay("8n", 0.2).connect(R),
                    C = new c.default.Panner(1).connect(R).connect(q),
                    j =
                        (new c.default.NoiseSynth({ noise: { type: "pink" }, envelope: { attack: 0.125, decay: 0.1, sustain: 0.01 } }).connect(C),
                        new c.default.Phaser({ frequency: 15, octaves: 5, baseFrequency: 1e3 }).connect(F),
                        new c.default.MembraneSynth({ pitchDecay: 0.05, octaves: 2, oscillator: { type: "sine" }, envelope: { attack: 0.01, decay: 0.9, sustain: 0.1, release: 2.4, attackCurve: "exponential" } })
                            .connect(F)
                            .set("volume", -10)),
                    N = new c.default.PolySynth({ pitchDecay: 0.05, oscillator: { type: "sine" }, envelope: { attack: 0.01, decay: 0.9, sustain: 0.1, release: 2.4, attackCurve: "exponential" } }).chain(q, F).set("volume", -10);
                y && console.log("MOBILE");
                e.exports = function () {
                    function t() {
                        requestAnimationFrame(t), I(), U();
                    }
                    var e = new THREE.Clock(),
                        i = new THREE.Scene(),
                        n = new THREE.PerspectiveCamera(P.camera.fov, window.innerWidth / window.innerHeight, P.camera.near, P.camera.far);
                    n.position.copy(P.camera.position), (P.camera.position = n.position);
                    var s = new o.default({ container: "container" }),
                        a = s.renderer;
                    a.setClearColor(0x24292f, 1), (a.autoClear = !0), (a.shadowMap.enabled = !0), (a.shadowMap.type = THREE.PCFSoftShadowMap);
                    var u = new THREE.OrbitControls(n, a.domElement);
                    Object.assign(u, P.controls || {});
                    var c = new THREE.HemisphereLight(15658751, 11184811, 0.75);
                    i.add(c);
                    var p = new THREE.DirectionalLight(16777215);
                    (p.castShadow = !0),
                        (p.shadow.bias = 1e-4),
                        (p.shadow.mapSize.width = 1024),
                        (p.shadow.mapSize.height = 1024),
                        (p.shadow.camera.near = 10),
                        (p.shadow.camera.far = 300),
                        (p.shadow.camera.left = -20),
                        (p.shadow.camera.right = 20),
                        (p.shadow.camera.bottom = -20),
                        (p.shadow.camera.top = 20),
                        p.position.set(0, 100, 80),
                        i.add(p),
                        i.add(p.target);
                    var b = new h.default({ gravity: new CANNON.Vec3(0, -25, 0) }),
                        x = (b.addSphere(4, { mass: 0 }), new l.default(b, { debug: !1 }));
                    (x.frustumCulled = !1), i.add(x.group);
                    var E = new w(),
                        M = new THREE.Quaternion(),
                        F = new THREE.Quaternion();
                    b.onUpdate = function () {
                        b.world.bodies.forEach(function (t, e) {
                            E.copy(t.position),
                                E.scale(T(v(2 * _ + e), -1, 1, -1, 0.7), E),
                                (E.z -= 0.01 * v(_ + e)),
                                t.applyImpulse(E, t.position),
                                t.hardPosition &&
                                    (t.position.copy(t.hardPosition),
                                    t.velocity.set(0, 0, 0),
                                    t.angularVelocity.scale(0.9, t.angularVelocity),
                                    F.copy(t.quaternion),
                                    F.slerp(M, 0.025),
                                    t.quaternion.copy(F),
                                    (t.mesh.material.emissiveIntensity = Math.max(t.mesh.material.emissiveIntensity - 0.01, 0)));
                        });
                    };
                    var R = [],
                        q = ["e3", "f3", "g3", "a3", "b3", "e4", "f4", "g4", "a4", "b4"];
                    O.load("assets/songWorm.json", function (t) {
                        for (var e = y ? 7 : 10, i = new THREE.Vector3(0, -17, 0), n = 0; n < e; n++) {
                            var s;
                            !(function (n) {
                                (i.x = 10 * v((n * S) / e)), (i.z = 10 * g((n * S) / e)), (s = new THREE.Matrix4().makeTranslation(i.x, i.y, i.z));
                                var o = x.buildSkin(t, { constraintUp: w.UNIT_Z, offset: s, fragmentShader: THREE.ShaderLib.standard.fragmentShader });
                                R.push(o),
                                    (o.customDepthMaterial = new THREE.ShaderMaterial({
                                        side: 1,
                                        uniforms: { jointTexture: o.material.uniforms.jointTexture, jointTextureDim: o.material.uniforms.jointTextureDim, jointOffset: o.material.uniforms.jointOffset },
                                        fragmentShader: "#define DEPTH_PACKING 3201 \n" + THREE.ShaderLib.depth.fragmentShader,
                                        vertexShader: d([
                                            "#define GLSLIFY 1\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nattribute vec3 jointWeights;\nattribute vec3 jointIndices;\nuniform sampler2D jointTexture;\nuniform vec2 jointTextureDim;\nuniform float jointOffset;\n\nattribute float jointIndexOffset;\n\nvoid main() {\n\n  #include <uv_vertex>\n\n  // #include <skinbase_vertex>\n\n  // #ifdef USE_DISPLACEMENTMAP\n\n  //   #include <beginnormal_vertex>\n  //   #include <morphnormal_vertex>\n  //   #include <skinnormal_vertex>\n\n  // #endif\n\n  mat4 jointMatrix = mat4( 0.0 );\n  vec3 jw = normalize(jointWeights.xyz);\n\n  for(int i=0; i<3; i++){\n\n    vec4 v0 = texture2D( jointTexture, vec2(0.0, jointIndices[i] + jointOffset ) / jointTextureDim );\n    vec4 v1 = texture2D( jointTexture, vec2(1.0, jointIndices[i] + jointOffset ) / jointTextureDim );\n    vec4 v2 = texture2D( jointTexture, vec2(2.0, jointIndices[i] + jointOffset ) / jointTextureDim );\n    vec4 v3 = texture2D( jointTexture, vec2(3.0, jointIndices[i] + jointOffset ) / jointTextureDim );\n\n    jointMatrix += jw[i] * mat4(v0, v1, v2, v3);\n  }\n\n  #include <begin_vertex>\n  // #include <morphtarget_vertex>\n  // #include <skinning_vertex>\n  // #include <displacementmap_vertex>\n\n  // #include <project_vertex>\n  vec4 mvPosition = modelViewMatrix * jointMatrix * vec4( transformed, 1.0 );\n  gl_Position = projectionMatrix * mvPosition;\n\n  #include <logdepthbuf_vertex>\n  // #include <clipping_planes_vertex>\n\n}",
                                        ]),
                                    })),
                                    (o.castShadow = !0),
                                    (o.receiveShadow = !1),
                                    (o.frustumCulled = !1),
                                    ["bulletRigidBodyShape1", "bulletRigidBodyShape28"].forEach(function (t) {
                                        o.bodyMap[t].addEventListener("collide", function (t) {
                                            var e = t.body;
                                            e.hardPosition && ((e.mesh.material.emissiveIntensity = 1.5), N.triggerAttackRelease(e.note, "8n"), j.triggerAttackRelease(e.note, "16n"));
                                        });
                                    });
                            })(n);
                        }
                    });
                    var C = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshNormalMaterial());
                    C.scale.set(6.3, 1, 6.3), (C.castShadow = !0), (C.receiveShadow = !0);
                    for (var B = 0, D = 0; B < 5; B++)
                        for (D = 0; D < 5; D++) {
                            var L = C.clone();
                            (L.position.x = 7 * (B + 0.5 - 2.5)),
                                (L.position.y = -20),
                                (L.position.z = 7 * (D + 0.5 - 2.5)),
                                (L.material = new THREE.MeshStandardMaterial({ emissiveIntensity: 0, emissive: new THREE.Color().setRGB(T(B, 0, 4, 0, 1), T(D, 0, 4, 0, 1), 1) })),
                                i.add(L),
                                (L.body = b.addBoxMesh(L, { mass: 10 })),
                                (L.body.hardPosition = L.position),
                                (L.body.note = (0, f.randomElement)(q));
                        }
                    var I = function () {
                            m++, (_ = e.getElapsedTime()), u.update(), b.update(_), x.update();
                        },
                        U = function () {
                            a.render(i, n, null, !0);
                        };
                    s.onResize = function (t, e, i) {
                        (n.aspect = s.aspect), n.updateProjectionMatrix(), k.setSize(e, i);
                    };
                    var G = function (t) {},
                        V = null;
                    new r.default({
                        element: s.container,
                        onTouchStart: function (t) {
                            V = t.touches;
                        },
                        onTouchMove: function (t) {
                            V && (G((t.type, V[0].pageX, t.touches[0].pageX, V[0].pageY, t.touches[0].pageY)), (V = t.touches));
                        },
                        onTouchEnd: function (t) {},
                    });
                    window.addEventListener("wheel", G),
                        window.addEventListener("keypress", function (t) {
                            switch (t.key) {
                                case "s":
                                    A.save(P);
                                    break;
                                case "c":
                                    console.log(
                                        "camera: ",
                                        P.camera.position.toArray().map(function (t) {
                                            return +t.toFixed(3);
                                        })
                                    ),
                                        console.log(
                                            "target: ",
                                            P.cameraSettings.target.toArray().map(function (t) {
                                                return +t.toFixed(3);
                                            })
                                        );
                                default:
                                    return;
                            }
                        }),
                        t();
                };
            },
            {
                "../config.json": 8,
                "./CannonWrapper.js": 9,
                "./CustomMaterial.js": 10,
                "./LaserUtils.js": 13,
                "./PostProcess.js": 14,
                "./SimpleSettings.js": 15,
                "./SkinManager.js": 17,
                "./ThreeView.js": 18,
                "./touchEvents.js": 21,
                "eases/circ-in-out": 1,
                "eases/cubic-in-out": 2,
                glslify: 3,
                ismobilejs: 4,
                startaudiocontext: 6,
                tone: 7,
            },
        ],
        17: [
            function (t, e, i) {
                "use strict";
                function n(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                var o = (function () {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                            }
                        }
                        return function (e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e;
                        };
                    })(),
                    r = n(t("./CustomMaterial.js")),
                    a = n(t("./skinDataToGeometry.js")),
                    h = n(t("./JointsToTexture.js")),
                    l = t("glslify"),
                    u = CANNON.Vec3,
                    c = new u(),
                    p = new THREE.Quaternion(),
                    f = new u(),
                    d = (new THREE.Matrix4(), new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "magenta", wireframe: !0 }))),
                    y = new THREE.Mesh(new THREE.SphereGeometry(1), d.material),
                    _ = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.05), new THREE.MeshBasicMaterial({ color: "red", wireframe: !1 })),
                    m = void 0,
                    v = function (t, e) {
                        var i = new u();
                        return t.cross(e || u.UNIT_X, i), i;
                    },
                    g = new h.default(),
                    b = {},
                    S = (function () {
                        function t(e, i) {
                            s(this, t), Object.assign(this, { skins: [], bodies: [], cw: e, group: new THREE.Object3D(), debug: !1, fragmentShader: this.getFragmentShader() }, i || {}), (m = this.cw);
                        }
                        return (
                            o(t, [
                                {
                                    key: "update",
                                    value: function () {
                                        g.update();
                                    },
                                },
                                {
                                    key: "buildSkin",
                                    value: function (t, e) {
                                        var i = g.getJointCount();
                                        e = Object.assign({ fragmentShader: THREE.ShaderLib.normal.fragmentShader, constraintUp: u.UNIT_Y, debug: this.debug }, e || {});
                                        var n = (0, a.default)(t, 0);
                                        b = {};
                                        var s = this.debug;
                                        this.addBodies(t, e.offset, this.debug), this.addJointsFromJson(t, s), this.addConstraintsFromJson(t, e.constraintUp);
                                        var o = new r.default({
                                                wireframe: this.debug,
                                                uniforms: { jointTexture: g.texture, jointTextureDim: g.textureDim, jointOffset: { value: i } },
                                                vertexShader: this.getVertexShader(),
                                                fragmentShader: e.fragmentShader,
                                            }),
                                            h = new THREE.Mesh(n, o);
                                        if (((h.frustumCulled = !1), this.group.add(h), this.skins.push(h), (h.bodyMap = b), e.offset)) {
                                            var l = new THREE.Vector3(),
                                                c = new THREE.Quaternion(),
                                                p = new THREE.Vector3();
                                            e.offset.decompose(l, c, p);
                                            for (var f in b) {
                                                var d = b[f];
                                                d.quaternion.mult(c, d.quaternion), (d.position.x += l.x * p.x), (d.position.y += l.y * p.y), (d.position.z += l.z * p.z);
                                            }
                                        }
                                        return h;
                                    },
                                },
                                {
                                    key: "addBodies",
                                    value: function (t, e, i) {
                                        var n = t.rigidBodies || t.bodies;
                                        for (var s in n) {
                                            var o = n[s],
                                                r = this.createRigidBody(o, i);
                                            b[s] = r;
                                        }
                                    },
                                },
                                {
                                    key: "createRigidBody",
                                    value: function (t, e) {
                                        switch (t.type) {
                                            case "sphere":
                                                return this.createSphereRigidBody(t, e);
                                            case "box":
                                            default:
                                                return this.createBoxRigidBody(t, e);
                                        }
                                    },
                                },
                                {
                                    key: "createSphereRigidBody",
                                    value: function (t, e) {
                                        new THREE.Matrix4().fromArray(t.transform).decompose(c, p, f);
                                        var i = t.radius,
                                            n = m.addSphere(i || 1, { mass: t.mass, position: c, quaternion: new CANNON.Quaternion().copy(p) });
                                        return e && ((n.mesh = y.clone()), n.mesh.scale.multiplyScalar(i), this.group.add(n.mesh)), n;
                                    },
                                },
                                {
                                    key: "createBoxRigidBody",
                                    value: function (t, e) {
                                        var i = new THREE.Vector3().fromArray(t.extents),
                                            n = new u().copy(i);
                                        n.scale(0.5, n), new THREE.Matrix4().fromArray(t.transform).decompose(c, p, f);
                                        var s = m.addBox(n, { mass: t.mass || 0, position: c, quaternion: new CANNON.Quaternion().copy(p) });
                                        return e && ((s.mesh = d.clone()), s.mesh.scale.copy(i), this.group.add(s.mesh)), s;
                                    },
                                },
                                {
                                    key: "addConstraintsFromJson",
                                    value: function (t, e) {
                                        for (var i in t.constraints) {
                                            var n = t.constraints[i],
                                                s = b[n.rigidBodyA],
                                                o = b[n.rigidBodyB],
                                                r = new u(n.translate[0], n.translate[1], n.translate[2]),
                                                a = n.angle || 1,
                                                h = n.twistAngle || 0.33,
                                                l = new u(),
                                                c = new u();
                                            s.pointToLocalFrame(r, l), o.pointToLocalFrame(r, c);
                                            var p = l.clone();
                                            p.normalize();
                                            var f = c.clone();
                                            f.normalize(), f.negate(f);
                                            var d = v(p, e),
                                                y = v(f, e),
                                                _ = new CANNON.ConeTwistConstraint(s, o, { collideConnected: !1, maxForce: 1 / 0, pivotA: l, pivotB: c, axisA: p, axisB: f, upA: d, upB: y, angle: a, twistAngle: h });
                                            m.addConstraint(_);
                                        }
                                    },
                                },
                                {
                                    key: "addJointsFromJson",
                                    value: function (t, e) {
                                        var i = this,
                                            n = t.joints.map(function (t) {
                                                var e = new THREE.Matrix4().fromArray(t.transform);
                                                return g.addJoint(b[t.rigidBody], e);
                                            });
                                        e &&
                                            n.forEach(function (t) {
                                                (t.debugMesh = _.clone()), i.group.add(t.debugMesh);
                                            });
                                    },
                                },
                                {
                                    key: "getVertexShader",
                                    value: function () {
                                        return l([
                                            "#define GLSLIFY 1\n#define PHYSICAL\n\nvarying vec3 vViewPosition;\n\n// #ifndef FLAT_SHADED\n\n  varying vec3 vNormal;\n\n// #endif\n\n#include <common>\n#include <uv_pars_vertex>\n// varying vec2 vUv;\n\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\n// joint attributes & uniforms\nattribute vec3 jointWeights;\nattribute vec3 jointIndices;\nuniform sampler2D jointTexture;\nuniform vec2 jointTextureDim;\nuniform float jointOffset;\n\nattribute float jointIndexOffset;\n\nvarying vec3 vPos;\n\nvarying vec2 vUv;\n\nvarying vec4 mvPosition;\n\nvoid main() {\n\n  vUv = uv;\n\n  vPos = position;\n\n  mat4 jointMatrix = mat4( 0.0 );\n  vec3 jw = normalize(jointWeights.xyz);\n\n  for(int i=0; i<3; i++){\n\n    vec4 v0 = texture2D( jointTexture, vec2(0.0, jointIndices[i] + jointOffset ) / jointTextureDim );\n    vec4 v1 = texture2D( jointTexture, vec2(1.0, jointIndices[i] + jointOffset ) / jointTextureDim );\n    vec4 v2 = texture2D( jointTexture, vec2(2.0, jointIndices[i] + jointOffset ) / jointTextureDim );\n    vec4 v3 = texture2D( jointTexture, vec2(3.0, jointIndices[i] + jointOffset ) / jointTextureDim );\n\n    jointMatrix += jw[i] * mat4(v0, v1, v2, v3);\n  }\n\n  #include <uv_vertex>\n  // vUv = uv;// * offsetRepeat.zw + offsetRepeat.xy;\n\n  #include <uv2_vertex>\n  #include <color_vertex>\n\n  // #include <beginnormal_vertex>\n  vec3 objectNormal = (jointMatrix * vec4(normal, 0.)).xyz;\n\n  #include <morphnormal_vertex>\n  #include <skinbase_vertex>\n  #include <skinnormal_vertex>\n  #include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n  vNormal = normalize( transformedNormal );\n\n#endif\n\n  #include <begin_vertex>\n  #include <morphtarget_vertex>\n  #include <skinning_vertex>\n  #include <displacementmap_vertex>\n  // #include <project_vertex>\n  mvPosition = modelViewMatrix * jointMatrix * vec4( transformed, 1.0 );\n  // vec4 mvPosition = modelViewMatrix * jointMatrix * vec4( transformed, 1.0 );\n\n  gl_Position = projectionMatrix * mvPosition;\n\n  #include <logdepthbuf_vertex>\n  #include <clipping_planes_vertex>\n\n  vViewPosition = - mvPosition.xyz;\n\n  #include <worldpos_vertex>\n  #include <shadowmap_vertex>\n  #include <fog_vertex>\n\n}",
                                        ]);
                                    },
                                },
                                {
                                    key: "getFragmentShader",
                                    value: function () {
                                        return "\n    uniform vec3 diffuse;\n    uniform float opacity;\n\n    varying vec4 mvPosition;\n    varying vec3 vNormal;\n    varying vec2 vUv;\n\n    vec3 getColor( float u ) {\n\n      float su = fract(u * 5.0);\n\n      float c = cos(su * 6.28) * 3.0;\n\n      return vec3(c);\n    }\n\n    void main() {\n\n      float fr = dot(normalize(mvPosition.xyz), -vNormal);\n\n      // float uVal = fract(vUv.x * 6.0);\n\n      float u = smoothstep(0.0,1.0,vUv.x);\n\n      gl_FragColor = vec4( getColor( u ) * fr * fr, 1.0 );\n\n    }\n    ";
                                    },
                                },
                            ]),
                            t
                        );
                    })();
                e.exports = S;
            },
            { "./CustomMaterial.js": 10, "./JointsToTexture.js": 12, "./skinDataToGeometry.js": 20, glslify: 3 },
        ],
        18: [
            function (t, e, i) {
                "use strict";
                e.exports = function (t, e) {
                    var i = this;
                    (e = Object.assign({ antialias: true, autoClearColor: !1 }, e || {})),
                        Object.assign(
                            this,
                            {
                                width: window.innerWidth,
                                height: window.innerHeight,
                                aspect: window.innerWidth / window.innerHeight,
                                renderer: t && t.renderer ? t.renderer : new THREE.WebGLRenderer(e),
                                setSize: function (t, e) {
                                    (i.width = t || window.innerWidth), (i.height = e || window.innerHeight), (i.aspect = i.width / i.height), i.renderer && i.renderer.setSize(i.width, i.height);
                                },
                                onResize: function (t) {},
                            },
                            t || {}
                        ),
                        this.container && ("string" == typeof this.container && (this.container = document.getElementById(this.container)), this.container.appendChild(this.renderer.domElement));
                    var n = null;
                    window.addEventListener("resize", function (t) {
                        n ||
                            (n = setTimeout(function () {
                                (n = null), i.setSize(), i.onResize(t, i.width, i.height);
                            }, 50));
                    }),
                        this.setSize();
                };
            },
            {},
        ],
        19: [
            function (t, e, i) {
                "use strict";
                var n = (function (t) {
                        return t && t.__esModule ? t : { default: t };
                    })(t("./Sketch.js")),
                    s = function () {
                        document.getElementById("loading_message").style.display = "none";
                    };
                window.onload = function (t) {
                    (0, n.default)(), s();
                };
            },
            { "./Sketch.js": 16 },
        ],
        20: [
            function (t, e, i) {
                "use strict";
                e.exports = function (t, e) {
                    var i,
                        n,
                        s = t.meshData.faces,
                        o = t.meshData.position,
                        r = t.meshData.normal,
                        a = t.meshData.uv[Object.keys(t.meshData.uv)[0]],
                        h = t.skinWeights || t.skinAndBones.skinWeights,
                        l = t.skinIndices || t.skinAndBones.skinIndices,
                        u = e || 0,
                        c = [],
                        p = [],
                        f = [],
                        d = [],
                        y = [],
                        _ = function (t) {
                            c.push(t[0], t[1], t[2]);
                        },
                        m = function (t) {
                            p.push(t[0], t[1], t[2]);
                        },
                        v = function (t) {
                            f.push(t[0], t[1]);
                        },
                        g = function (t) {
                            d.push(t[0], t[1], t[2]);
                        },
                        b = function (t) {
                            y.push(t[0] + u, t[1] + u, t[2] + u);
                        };
                    s.forEach(function (t) {
                        for (i = 1, n = 2; n < t[0].length; i++, n++)
                            _(o[t[0][0]]),
                                _(o[t[0][i]]),
                                _(o[t[0][n]]),
                                m(r[t[1][0]]),
                                m(r[t[1][i]]),
                                m(r[t[1][n]]),
                                v(a[t[2][0]]),
                                v(a[t[2][i]]),
                                v(a[t[2][n]]),
                                g(h[t[0][0]]),
                                g(h[t[0][i]]),
                                g(h[t[0][n]]),
                                b(l[t[0][0]]),
                                b(l[t[0][i]]),
                                b(l[t[0][n]]);
                    });
                    var S = new THREE.BufferGeometry();
                    return (
                        S.addAttribute("position", new THREE.BufferAttribute(new Float32Array(c), 3)),
                        S.addAttribute("orig_position", new THREE.BufferAttribute(new Float32Array(c), 3)),
                        S.addAttribute("orgPos", new THREE.BufferAttribute(new Float32Array(c), 3)),
                        S.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(p), 3)),
                        S.addAttribute("jointWeights", new THREE.BufferAttribute(new Float32Array(d), 3)),
                        S.addAttribute("jointIndices", new THREE.BufferAttribute(new Float32Array(y), 3)),
                        S.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(f), 2)),
                        S
                    );
                };
            },
            {},
        ],
        21: [
            function (t, e, i) {
                "use strict";
                e.exports = function (t) {
                    var e = this,
                        i = function (t) {
                            e.onTouchStart(t);
                        },
                        n = function (t) {
                            e.onTouchMove(t);
                        },
                        s = function (t) {
                            e.onTouchEnd(t);
                        };
                    Object.assign(
                        this,
                        {
                            element: null,
                            onToushStart: function (t) {},
                            onTouchMove: function (t) {},
                            onTouchEnd: function (t) {},
                            addListeners: function (t) {
                                e.element !== t && e.removeListeners(), (e.element = t), t.addEventListener("touchstart", i, !1), t.addEventListener("touchend", s, !1), t.addEventListener("touchmove", n, !1);
                            },
                            removeListeners: function () {
                                e.element && (e.element.removeEventListener("touchstart", i, !1), e.element.removeEventListener("touchend", s, !1), e.element.removeEventListener("touchmove", n, !1)), (e.element = null);
                            },
                        },
                        t || {}
                    ),
                        this.element && this.addListeners(this.element);
                };
            },
            {},
        ],
    },
    {},
    [19]
);
//# sourceMappingURL=bundle.js.map
