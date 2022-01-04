
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

(function() {
    const env = {"WIDGET_PATH":"meiosis","NODE_ENV":"development","QUERY_UUID":"d503ca10-8afd-4e54-a956-4dbe5ef98b0f"};
    try {
        if (process) {
            process.env = Object.assign({}, process.env);
            Object.assign(process.env, env);
            return;
        }
    } catch (e) {} // avoid ReferenceError: process is not defined
    globalThis.process = { env:env };
})();

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "*{margin:0;padding:0;outline:none;font-family:Roboto-Regular,sans-serif;box-sizing:border-box}.timelineWrapper{width:100%;position:relative}.timelineWrapper .view{margin:0 auto;min-height:360px;display:block;border-top:0}.timelineWrapper .progressBar{top:0;right:0;position:absolute;width:100%;height:100%;background:#000;opacity:.4}.timelineWrapper .loadingStatus{width:100%;top:50%;transform:translateY(-100%);background:#fff;text-align:center;font-size:18px;padding:10px 0;text-transform:uppercase;position:absolute}.timelineWrapper .controlsWrapper{display:flex;margin-top:10px;padding:0 10px;align-items:center}.timelineWrapper .controlsWrapper .rangeControl{flex:1}.timelineWrapper .controlsWrapper .playButton{width:47px;height:40px;border-radius:5px;margin-right:10px;font-size:13px;border:2px solid #006c96;background:#fff;-webkit-appearance:none;cursor:pointer}.timelineWrapper .controlsWrapper .playButton:hover{border:2px solid #00a2e0;background:#daf5ff}.timelineWrapper .hidden{display:none}.timelineWrapper input[type=range]{-webkit-appearance:none;margin:18px 0;width:100%}.timelineWrapper input[type=range]:focus{outline:none}.timelineWrapper input[type=range]::-webkit-slider-runnable-track{width:100%;height:8.4px;cursor:pointer;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;background:#3071a9;border-radius:1.3px;border:.2px solid #010101}.timelineWrapper input[type=range]::-webkit-slider-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;border:1px solid #000;height:36px;width:16px;border-radius:3px;background:#fff;cursor:pointer;-webkit-appearance:none;margin-top:-14px}.timelineWrapper input[type=range]:focus::-webkit-slider-runnable-track{background:#367ebd}.timelineWrapper input[type=range]::-moz-range-track{width:100%;height:8.4px;cursor:pointer;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;background:#3071a9;border-radius:1.3px;border:.2px solid #010101}.timelineWrapper input[type=range]::-moz-range-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;border:1px solid #000;height:36px;width:16px;border-radius:3px;background:#fff;cursor:pointer}.timelineWrapper input[type=range]::-ms-track{width:100%;height:8.4px;cursor:pointer;background:transparent;border-color:transparent;border-width:16px 0;color:transparent}.timelineWrapper input[type=range]::-ms-fill-lower{background:#2a6495;border:.2px solid #010101;border-radius:2.6px;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d}.timelineWrapper input[type=range]::-ms-fill-upper{background:#3071a9;border:.2px solid #010101;border-radius:2.6px;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d}.timelineWrapper input[type=range]::-ms-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;border:1px solid #000;height:36px;width:16px;border-radius:3px;background:#fff;cursor:pointer}.timelineWrapper input[type=range]:focus::-ms-fill-lower{background:#3071a9}.timelineWrapper input[type=range]:focus::-ms-fill-upper{background:#367ebd}";
styleInject(css_248z$1);

var LAYOUT = "\n    <div class=\"loadingStatus\">Loading...</div>\n    <div class=\"progressBar\"></div>\n    <canvas class=\"view\"></canvas>\n    <div class=\"controlsWrapper\">\n      <button class=\"playButton\">Play</button>\n      <input class=\"rangeControl\" type=\"range\" value=\"0\" min=\"0\">\n    </div>\n";

var Timeline = /*#__PURE__*/function () {
  function Timeline(_ref) {
    var containerId = _ref.containerId,
        namePattern = _ref.namePattern,
        fileExtension = _ref.fileExtension,
        framesCount = _ref.framesCount,
        framesFolder = _ref.framesFolder,
        fps = _ref.fps,
        info = _ref.info,
        _ref$layout = _ref.layout,
        layout = _ref$layout === void 0 ? LAYOUT : _ref$layout,
        _ref$prefix = _ref.prefix,
        prefix = _ref$prefix === void 0 ? "00000" : _ref$prefix,
        _ref$separator = _ref.separator,
        separator = _ref$separator === void 0 ? "_" : _ref$separator,
        _ref$onLoad = _ref.onLoad,
        onLoad = _ref$onLoad === void 0 ? function () {} : _ref$onLoad,
        _ref$canvasRes = _ref.canvasRes,
        canvasRes = _ref$canvasRes === void 0 ? {} : _ref$canvasRes;

    _classCallCheck(this, Timeline);

    this.currentFrame = 0;
    this.isPlaying = false;
    this.data = [];
    this.interval = null;
    this.containerId = containerId;
    this.namePattern = namePattern;
    this.fileExtension = fileExtension;
    this.framesCount = framesCount;
    this.framesFolder = framesFolder;
    this.fps = fps;
    this.info = info;
    this.layout = layout;
    this.prefix = prefix;
    this.separator = separator;
    this.onLoad = onLoad;
    this.isEnded = false;
    this.canvasResolution = canvasRes;
  }

  _createClass(Timeline, [{
    key: "init",
    value: function init() {
      var _this = this;

      var container = document.getElementById(this.containerId);
      container.classList.add("timelineWrapper");
      container.innerHTML = this.layout;

      var _container$getElement = container.getElementsByClassName("loadingStatus");

      var _container$getElement2 = _slicedToArray(_container$getElement, 1);

      this.loadingStatus = _container$getElement2[0];

      var _container$getElement3 = container.getElementsByClassName("progressBar");

      var _container$getElement4 = _slicedToArray(_container$getElement3, 1);

      this.progressBar = _container$getElement4[0];

      var _container$getElement5 = container.getElementsByClassName("playButton");

      var _container$getElement6 = _slicedToArray(_container$getElement5, 1);

      this.playButton = _container$getElement6[0];

      var _container$getElement7 = container.getElementsByClassName("rangeControl");

      var _container$getElement8 = _slicedToArray(_container$getElement7, 1);

      this.rangeControl = _container$getElement8[0];
      this.closeInfoContainer = document.getElementById("closeInfoContainer");
      this.infoButtons = document.getElementsByClassName("infoButton");
      this.rangeControl.max = String(this.framesCount - 1);

      var _container$getElement9 = container.getElementsByClassName("view");

      var _container$getElement10 = _slicedToArray(_container$getElement9, 1);

      this.view = _container$getElement10[0];
      this.ctx = this.view.getContext("2d");
      this.generateFrameData();
      this.cacheImages();
      this.setFrame(1);

      if (this.rangeControl) {
        this.rangeControl.addEventListener("change", function () {
          _this.setFrame(+_this.rangeControl.value);
        });
        this.rangeControl.addEventListener("input", function () {
          _this.pause();

          _this.setFrame(+_this.rangeControl.value);
        });
      }

      this.playButton.addEventListener("click", function () {
        if (_this.isPlaying) {
          _this.pause();
        } else {
          _this.play();
        }
      });

      if (this.closeInfoContainer) {
        this.closeInfoContainer.addEventListener("click", function () {
          _this.hideInfoContainer();
        });
      }

      if (this.infoButtons.length) {
        var _iterator = _createForOfIteratorHelper(this.infoButtons),
            _step;

        try {
          var _loop = function _loop() {
            var infoButton = _step.value;
            infoButton.addEventListener("click", function () {
              var type = infoButton.getAttribute("data-type");

              _this.showInfoContainer(_this.info[type]);
            });
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, {
    key: "showInfoContainer",
    value: function showInfoContainer(info) {
      document.getElementById("infoContainer").classList.add("show");
      document.getElementById("infoContainerContent").innerHTML = info;
    }
  }, {
    key: "hideInfoContainer",
    value: function hideInfoContainer() {
      document.getElementById("infoContainer").classList.remove("show");
      document.getElementById("infoContainerContent").innerHTML = "";
    }
  }, {
    key: "getFrameName",
    value: function getFrameName(frame) {
      return ".".concat(this.framesFolder, "/").concat(this.namePattern).concat(this.separator).concat("".concat(this.prefix).concat(frame).slice(-this.prefix.length), ".").concat(this.fileExtension);
    }
  }, {
    key: "setLoadingProgress",
    value: function setLoadingProgress(percentage) {
      this.progressBar.style.width = "".concat(percentage, "%");
      this.loadingStatus.innerText = "Please wait, loading... ".concat(Math.ceil(100 - percentage), "%");

      if (!percentage) {
        this.progressBar.remove();
        this.loadingStatus.remove();
        this.play();
        this.onLoad();
      }
    }
  }, {
    key: "generateFrameData",
    value: function generateFrameData() {
      for (var i = 0; i < this.framesCount; i += 1) {
        this.data.push(this.getFrameName(i));
      }
    }
  }, {
    key: "cacheImages",
    value: function cacheImages() {
      var _this2 = this;

      var list = [];

      var _loop2 = function _loop2(i) {
        fetch(_this2.data[i]).then(function () {
          list.push(i);

          _this2.setLoadingProgress(100 - list.length / _this2.data.length * 100);
        });
      };

      for (var i = 0; i < this.data.length; i += 1) {
        _loop2(i);
      }
    }
  }, {
    key: "setFrame",
    value: function setFrame(frame) {
      var _this3 = this;

      if (this.rangeControl) {
        this.rangeControl.value = frame;
      }

      this.currentFrame = frame;
      var image = new Image();
      image.src = this.getFrameName(frame);

      image.onload = function () {
        _this3.view.height = _this3.canvasResolution.height || image.naturalHeight;
        _this3.view.width = _this3.canvasResolution.width || image.naturalWidth;

        _this3.ctx.drawImage(image, 0, 0, _this3.canvasResolution.width || image.naturalWidth, _this3.canvasResolution.height || image.naturalHeight);
      };
    }
  }, {
    key: "play",
    value: function play() {
      var _this4 = this;

      this.isPlaying = true;
      this.playButton.innerText = "Pause";
      this.interval = setInterval(function () {
        if (_this4.currentFrame < _this4.framesCount - 1) {
          _this4.currentFrame += 1;

          _this4.setFrame(_this4.currentFrame);
        } else {
          _this4.isEnded = true;
          _this4.currentFrame = 0;

          _this4.pause();
        }
      }, 1000 / this.fps);
    }
  }, {
    key: "pause",
    value: function pause() {
      clearInterval(this.interval);
      this.isPlaying = false;
      this.playButton.innerText = "Play";
    }
  }, {
    key: "destroy",
    value: function destroy() {
      document.getElementById(this.containerId).innerHTML = "";
      clearInterval(this.interval);
    }
  }]);

  return Timeline;
}();

var css_248z = ".point:hover{fill:rgba(120,226,196,.26);stroke:#fff;stroke-width:2;stroke-linecap:round}#timeline-wrapper{position:absolute;width:100%;height:fit-content;min-height:360px;background-color:#fff;top:-30px;left:50%;transform:translate(-50%,-100%);border-radius:0 0 5px 5px;box-shadow:0 0 10px rgba(0,0,0,.43);transition:all .5s ease-in-out;padding-bottom:15px}#closeButton{display:flex;width:100%;justify-content:center;-webkit-appearance:none;background:none;border:0;font-size:14px;height:30px;align-items:center;cursor:pointer}#closeButton:hover{background:#f7f7f7}#closeButton span{width:10px;height:10px;border-right:2px solid #000;border-top:2px solid #000;transform:rotate(-45deg) translate(-4px,-1px);margin-right:7px}#timeline-wrapper.opened{transform:translateX(-50%);top:0}.point{position:relative}.buttons-wrapper{margin-top:80px;position:absolute;display:flex;flex-wrap:wrap;align-items:center;align-content:space-around;justify-items:center;justify-content:space-around;width:640px;height:360px;top:0;left:0;right:0}.buttons-wrapper .first-row{display:flex;justify-content:space-around;width:100%}.buttons-wrapper .first-row div:first-of-type{margin-right:100px}.buttons-wrapper .first-row div:last-of-type{margin-left:100px}.buttons-wrapper .second-row{display:flex;justify-content:space-around;width:100%}.buttons-wrapper .second-row div:first-of-type{margin-right:100px}.buttons-wrapper .second-row div:last-of-type{margin-left:100px}.buttons-wrapper>.title{margin-bottom:60px}.title{position:relative;height:24px;width:fit-content;min-width:126px;padding:7px 12px;border-radius:10px;background:#828191;font-size:15px;white-space:nowrap;color:#fff;transition:all .2s ease;display:flex;align-items:center;justify-content:center}span{text-align:center}.title:hover{transform:scale(1.2);cursor:pointer}.title:active{background:#545454}";
styleInject(css_248z);

var popup = document.getElementById("timeline-wrapper");
var titles = document.getElementsByClassName("title");
var timeline;
var seqCount = {
  "INT3D-77-EarlyMeiosis1": 525,
  "INT3D-78-LateMeiosis1": 326,
  "INT3D-79-EarlyMeiosis2": 306,
  "INT3D-80-LateMeiosis2": 443,
  "INT3D-119-Allphasesofmeiosis": 1594
};

var showVideo = function showVideo(id) {
  popup.classList.add("opened");
  timeline = new Timeline({
    containerId: "timeline",
    namePattern: id,
    fileExtension: "jpg",
    framesCount: seqCount[id],
    framesFolder: "/assets/static/".concat(id),
    fps: 30
  });
  timeline.init();
};

var closePopUp = function closePopUp() {
  if (popup.classList.contains("opened")) {
    popup.classList.remove("opened");
    timeline.destroy();
  }
};

var _iterator = _createForOfIteratorHelper(titles),
    _step;

try {
  var _loop = function _loop() {
    var title = _step.value;
    title.addEventListener("click", function () {
      showVideo(title.getAttribute("data-point"));
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

document.getElementById("closeButton").addEventListener("click", function () {
  closePopUp();
});
//# sourceMappingURL=indexd503ca10-8afd-4e54-a956-4dbe5ef98b0f.js.map
