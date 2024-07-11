(function(t,e){for(var n in e)t[n]=e[n]})(window,function(t){var e={};function n(l){if(e[l])return e[l].exports;var i=e[l]={i:l,l:!1,exports:{}};return t[l].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(l,i,s){n.o(l,i)||Object.defineProperty(l,i,{enumerable:!0,get:s})},n.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},n.t=function(l,i){if(i&1&&(l=n(l)),i&8||i&4&&typeof l=="object"&&l&&l.__esModule)return l;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:l}),i&2&&typeof l!="string")for(var B in l)n.d(s,B,(function(Q){return l[Q]}).bind(null,B));return s},n.n=function(l){var i=l&&l.__esModule?function(){return l.default}:function(){return l};return n.d(i,"a",i),i},n.o=function(l,i){return Object.prototype.hasOwnProperty.call(l,i)},n.p="",n(n.s="./js/bootstrap.js")}({"./js/bootstrap.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap__WEBPACK_IMPORTED_MODULE_0__; });
 // Extend Tooltip to add color options

bootstrap__WEBPACK_IMPORTED_MODULE_0__["Tooltip"].prototype.show = function (original) {
  return function addTooltipColor() {
    if (this._config.toggle === 'tooltip') {
      if (this._element.getAttribute('data-color')) {
        var str = "tooltip-".concat(this._element.getAttribute('data-color'));
        this.getTipElement().classList.add(str);
      }
    }

    original.apply(this);
  };
}(bootstrap__WEBPACK_IMPORTED_MODULE_0__["Tooltip"].prototype.show); // Extend Popover to add color options


bootstrap__WEBPACK_IMPORTED_MODULE_0__["Popover"].prototype.show = function (original) {
  return function addPopoverColor() {
    if (this._config.toggle === 'popover') {
      if (this._element.getAttribute('data-color')) {
        var str = "popover-".concat(this._element.getAttribute('data-color'));
        this.getTipElement().classList.add(str);
      }
    }

    original.apply(this);
  };
}(bootstrap__WEBPACK_IMPORTED_MODULE_0__["Popover"].prototype.show);

//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9ib290c3RyYXAuanM/OTQ1ZiJdLCJuYW1lcyI6WyJib290c3RyYXAiLCJwcm90b3R5cGUiLCJzaG93Iiwib3JpZ2luYWwiLCJhZGRUb29sdGlwQ29sb3IiLCJfY29uZmlnIiwidG9nZ2xlIiwiX2VsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJzdHIiLCJnZXRUaXBFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwbHkiLCJhZGRQb3BvdmVyQ29sb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNBQSxpREFBQSxDQUFrQkMsU0FBbEIsQ0FBNEJDLElBQTVCLEdBQW9DLFVBQUFDLFFBQVEsRUFBSTtBQUM5QyxTQUFPLFNBQVNDLGVBQVQsR0FBMkI7QUFDaEMsUUFBSSxLQUFLQyxPQUFMLENBQWFDLE1BQWIsS0FBd0IsU0FBNUIsRUFBdUM7QUFDckMsVUFBSSxLQUFLQyxRQUFMLENBQWNDLFlBQWQsQ0FBMkIsWUFBM0IsQ0FBSixFQUE4QztBQUM1QyxZQUFNQyxHQUFHLHFCQUFjLEtBQUtGLFFBQUwsQ0FBY0MsWUFBZCxDQUEyQixZQUEzQixDQUFkLENBQVQ7QUFDQSxhQUFLRSxhQUFMLEdBQXFCQyxTQUFyQixDQUErQkMsR0FBL0IsQ0FBbUNILEdBQW5DO0FBQ0Q7QUFDRjs7QUFDRE4sWUFBUSxDQUFDVSxLQUFULENBQWUsSUFBZjtBQUNELEdBUkQ7QUFTRCxDQVZrQyxDQVVoQ2IsaURBQUEsQ0FBa0JDLFNBQWxCLENBQTRCQyxJQVZJLENBQW5DLEMsQ0FZQTs7O0FBQ0FGLGlEQUFBLENBQWtCQyxTQUFsQixDQUE0QkMsSUFBNUIsR0FBb0MsVUFBQUMsUUFBUSxFQUFJO0FBQzlDLFNBQU8sU0FBU1csZUFBVCxHQUEyQjtBQUNoQyxRQUFJLEtBQUtULE9BQUwsQ0FBYUMsTUFBYixLQUF3QixTQUE1QixFQUF1QztBQUNyQyxVQUFJLEtBQUtDLFFBQUwsQ0FBY0MsWUFBZCxDQUEyQixZQUEzQixDQUFKLEVBQThDO0FBQzVDLFlBQU1DLEdBQUcscUJBQWMsS0FBS0YsUUFBTCxDQUFjQyxZQUFkLENBQTJCLFlBQTNCLENBQWQsQ0FBVDtBQUNBLGFBQUtFLGFBQUwsR0FBcUJDLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQ0gsR0FBbkM7QUFDRDtBQUNGOztBQUNETixZQUFRLENBQUNVLEtBQVQsQ0FBZSxJQUFmO0FBQ0QsR0FSRDtBQVNELENBVmtDLENBVWhDYixpREFBQSxDQUFrQkMsU0FBbEIsQ0FBNEJDLElBVkksQ0FBbkMiLCJmaWxlIjoiLi9qcy9ib290c3RyYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBib290c3RyYXAgZnJvbSAnYm9vdHN0cmFwJ1xyXG5cclxuLy8gRXh0ZW5kIFRvb2x0aXAgdG8gYWRkIGNvbG9yIG9wdGlvbnNcclxuYm9vdHN0cmFwLlRvb2x0aXAucHJvdG90eXBlLnNob3cgPSAob3JpZ2luYWwgPT4ge1xyXG4gIHJldHVybiBmdW5jdGlvbiBhZGRUb29sdGlwQ29sb3IoKSB7XHJcbiAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSA9PT0gJ3Rvb2x0aXAnKSB7XHJcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gYHRvb2x0aXAtJHt0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpfWBcclxuICAgICAgICB0aGlzLmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKHN0cilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3JpZ2luYWwuYXBwbHkodGhpcylcclxuICB9XHJcbn0pKGJvb3RzdHJhcC5Ub29sdGlwLnByb3RvdHlwZS5zaG93KVxyXG5cclxuLy8gRXh0ZW5kIFBvcG92ZXIgdG8gYWRkIGNvbG9yIG9wdGlvbnNcclxuYm9vdHN0cmFwLlBvcG92ZXIucHJvdG90eXBlLnNob3cgPSAob3JpZ2luYWwgPT4ge1xyXG4gIHJldHVybiBmdW5jdGlvbiBhZGRQb3BvdmVyQ29sb3IoKSB7XHJcbiAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSA9PT0gJ3BvcG92ZXInKSB7XHJcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gYHBvcG92ZXItJHt0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpfWBcclxuICAgICAgICB0aGlzLmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKHN0cilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3JpZ2luYWwuYXBwbHkodGhpcylcclxuICB9XHJcbn0pKGJvb3RzdHJhcC5Qb3BvdmVyLnByb3RvdHlwZS5zaG93KVxyXG5cclxuZXhwb3J0IHsgYm9vdHN0cmFwIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./js/bootstrap.js
`)},"./node_modules/@popperjs/core/lib/createPopper.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return popperGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__["isElement"])(reference) ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference) : reference.contextElement ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference.contextElement) : [],
          popper: Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and \`phase\`
        // properties

        var orderedModifiers = Object(_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = Object(_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__["default"])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          Object(_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__["default"])(modifiers);

          if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_13__["auto"]) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account \`margins\` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the \`offset\` modifier, as well as', 'the \`padding\` option in the \`preventOverflow\` and \`flip\`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. \`resize\` and \`scroll\` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if \`reference\` or \`popper\` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: Object(_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(reference, Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper), state.options.strategy === 'fixed'),
          popper: Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the \`flip\` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the \`modifiersData\` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use \`\${name}#persistent\`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Object(_utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2NyZWF0ZVBvcHBlci5qcz82Y2VlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStEO0FBQ047QUFDUTtBQUNKO0FBQ0U7QUFDUjtBQUNaO0FBQ2tCO0FBQ2xCO0FBQ2dCO0FBQ1Y7QUFDTTtBQUNEO0FBQ3BCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUVBQXFFLGFBQWE7QUFDbEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBLHFCQUFxQiwyRUFBUyxjQUFjLCtFQUFpQix5Q0FBeUMsK0VBQWlCO0FBQ3ZILGtCQUFrQiwrRUFBaUI7QUFDbkMsVUFBVTtBQUNWOztBQUVBLCtCQUErQix3RUFBYyxDQUFDLHNFQUFXLHdEQUF3RDs7QUFFakg7QUFDQTtBQUNBLFNBQVMsRUFBRTtBQUNYOztBQUVBLFlBQVksSUFBcUM7QUFDakQsMEJBQTBCLGtFQUFRO0FBQ2xDO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVSwyRUFBaUI7O0FBRTNCLGNBQWMsMEVBQWdCLDhCQUE4QiwrQ0FBSTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyw4RUFBZ0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0EsY0FBYyxJQUFxQztBQUNuRDtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQSxxQkFBcUIsOEVBQWdCLFlBQVksNkVBQWU7QUFDaEUsa0JBQWtCLDJFQUFhO0FBQy9CLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsNkNBQTZDLEtBQUs7O0FBRWxEO0FBQ0Esc0VBQXNFO0FBQ3RFLFNBQVM7QUFDVDs7QUFFQSwyQkFBMkIsdUNBQXVDO0FBQ2xFLGNBQWMsSUFBcUM7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsY0FBYyxrRUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxrREFBa0QiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2NyZWF0ZVBvcHBlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRDb21wb3NpdGVSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IG9yZGVyTW9kaWZpZXJzIGZyb20gXCIuL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzXCI7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcIi4vdXRpbHMvZGVib3VuY2UuanNcIjtcbmltcG9ydCB2YWxpZGF0ZU1vZGlmaWVycyBmcm9tIFwiLi91dGlscy92YWxpZGF0ZU1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IHVuaXF1ZUJ5IGZyb20gXCIuL3V0aWxzL3VuaXF1ZUJ5LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgbWVyZ2VCeU5hbWUgZnJvbSBcIi4vdXRpbHMvbWVyZ2VCeU5hbWUuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi9lbnVtcy5qc1wiO1xudmFyIElOVkFMSURfRUxFTUVOVF9FUlJPUiA9ICdQb3BwZXI6IEludmFsaWQgcmVmZXJlbmNlIG9yIHBvcHBlciBhcmd1bWVudCBwcm92aWRlZC4gVGhleSBtdXN0IGJlIGVpdGhlciBhIERPTSBlbGVtZW50IG9yIHZpcnR1YWwgZWxlbWVudC4nO1xudmFyIElORklOSVRFX0xPT1BfRVJST1IgPSAnUG9wcGVyOiBBbiBpbmZpbml0ZSBsb29wIGluIHRoZSBtb2RpZmllcnMgY3ljbGUgaGFzIGJlZW4gZGV0ZWN0ZWQhIFRoZSBjeWNsZSBoYXMgYmVlbiBpbnRlcnJ1cHRlZCB0byBwcmV2ZW50IGEgYnJvd3NlciBjcmFzaC4nO1xudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgbW9kaWZpZXJzOiBbXSxcbiAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbn07XG5cbmZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiAhKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRNb2RpZmllcnMsXG4gICAgICBkZWZhdWx0TW9kaWZpZXJzID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZixcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIGRlZmF1bHRPcHRpb25zID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9PT0gdm9pZCAwID8gREVGQVVMVF9PUFRJT05TIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmMjtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zKSxcbiAgICAgIG1vZGlmaWVyc0RhdGE6IHt9LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlcjogcG9wcGVyXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfTtcbiAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10sXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAvLyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5lbmFibGVkO1xuICAgICAgICB9KTsgLy8gVmFsaWRhdGUgdGhlIHByb3ZpZGVkIG1vZGlmaWVycyBzbyB0aGF0IHRoZSBjb25zdW1lciB3aWxsIGdldCB3YXJuZWRcbiAgICAgICAgLy8gaWYgb25lIG9mIHRoZSBtb2RpZmllcnMgaXMgaW52YWxpZCBmb3IgYW55IHJlYXNvblxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICB2YXIgbW9kaWZpZXJzID0gdW5pcXVlQnkoW10uY29uY2F0KG9yZGVyZWRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKTtcblxuICAgICAgICAgIGlmIChnZXRCYXNlUGxhY2VtZW50KHN0YXRlLm9wdGlvbnMucGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgICAgICAgICAgdmFyIGZsaXBNb2RpZmllciA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZmluZChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmMi5uYW1lO1xuICAgICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gJ2ZsaXAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghZmxpcE1vZGlmaWVyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXV0b1wiIHBsYWNlbWVudHMgcmVxdWlyZSB0aGUgXCJmbGlwXCIgbW9kaWZpZXIgYmUnLCAncHJlc2VudCBhbmQgZW5hYmxlZCB0byB3b3JrLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwb3BwZXIpLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3AgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3AsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbSA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkJvdHRvbSxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQ7IC8vIFdlIG5vIGxvbmdlciB0YWtlIGludG8gYWNjb3VudCBgbWFyZ2luc2Agb24gdGhlIHBvcHBlciwgYW5kIGl0IGNhblxuICAgICAgICAgIC8vIGNhdXNlIGJ1Z3Mgd2l0aCBwb3NpdGlvbmluZywgc28gd2UnbGwgd2FybiB0aGUgY29uc3VtZXJcblxuXG4gICAgICAgICAgaWYgKFttYXJnaW5Ub3AsIG1hcmdpblJpZ2h0LCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnRdLnNvbWUoZnVuY3Rpb24gKG1hcmdpbikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobWFyZ2luKTtcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBDU1MgXCJtYXJnaW5cIiBzdHlsZXMgY2Fubm90IGJlIHVzZWQgdG8gYXBwbHkgcGFkZGluZycsICdiZXR3ZWVuIHRoZSBwb3BwZXIgYW5kIGl0cyByZWZlcmVuY2UgZWxlbWVudCBvciBib3VuZGFyeS4nLCAnVG8gcmVwbGljYXRlIG1hcmdpbiwgdXNlIHRoZSBgb2Zmc2V0YCBtb2RpZmllciwgYXMgd2VsbCBhcycsICd0aGUgYHBhZGRpbmdgIG9wdGlvbiBpbiB0aGUgYHByZXZlbnRPdmVyZmxvd2AgYW5kIGBmbGlwYCcsICdtb2RpZmllcnMuJ10uam9pbignICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIC8vIFN5bmMgdXBkYXRlIOKAkyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG4gICAgICAvLyBsb2dpYy5cbiAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcbiAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gX3N0YXRlJGVsZW1lbnRzLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXG4gICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG5cbiAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgIC8vIGlzIGZpbGxlZCB3aXRoIHRoZSBpbml0aWFsIGRhdGEgc3BlY2lmaWVkIGJ5IHRoZSBtb2RpZmllci4gVGhpcyBtZWFuc1xuICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBfX2RlYnVnX2xvb3BzX18gPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIF9fZGVidWdfbG9vcHNfXyArPSAxO1xuXG4gICAgICAgICAgICBpZiAoX19kZWJ1Z19sb29wc19fID4gMTAwKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5GSU5JVEVfTE9PUF9FUlJPUik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSDigJMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgKGRlYm91bmNlZCB0byBydW4gYXQgbW9zdCBvbmNlLXBlci10aWNrKVxuICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBpZiAoIWlzRGVzdHJveWVkICYmIG9wdGlvbnMub25GaXJzdFVwZGF0ZSkge1xuICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH0pOyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGJlZm9yZSB0aGUgZmlyc3RcbiAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgIC8vIG90aGVyIG1vZGlmaWVycyBuZWVkIHRvIHVzZSwgYnV0IHRoZSBtb2RpZmllciBpcyBydW4gYWZ0ZXIgdGhlIGRlcGVuZGVudFxuICAgIC8vIG9uZS5cblxuICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICAgICAgX3JlZjMkb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zID0gX3JlZjMkb3B0aW9ucyA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRvcHRpb25zLFxuICAgICAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIGNsZWFudXBGbiA9IGVmZmVjdCh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xuXG4gICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0pO1xuICAgICAgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcbn1cbmV4cG9ydCB2YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGRldGVjdE92ZXJmbG93IH07Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/createPopper.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/contains.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isShadowRoot"])(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9jb250YWlucy5qcz83ZjM3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNoQztBQUNmLDBEQUEwRDs7QUFFMUQ7QUFDQTtBQUNBLEdBQUc7QUFDSCx1QkFBdUIsbUVBQVk7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0w7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2NvbnRhaW5zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/contains.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBoundingClientRect; });
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanM/MGY4OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHg6IHJlY3QubGVmdCxcbiAgICB5OiByZWN0LnRvcFxuICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getClippingRect; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");















function getInnerBoundingClientRect(element) {
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"] ? Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) : Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(clippingParent) ? getInnerBoundingClientRect(clippingParent) : Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// \`initial\`


function getClippingParents(element) {
  var clippingParents = Object(_listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(element) ? Object(_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element) : element;

  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clippingParent) && Object(_contains_js__WEBPACK_IMPORTED_MODULE_10__["default"])(clippingParent, clipperElement) && Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["max"])(rect.top, accRect.top);
    accRect.right = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["min"])(rect.right, accRect.right);
    accRect.bottom = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["min"])(rect.bottom, accRect.bottom);
    accRect.left = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["max"])(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanM/OWRlMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNZO0FBQ0E7QUFDSTtBQUNKO0FBQ007QUFDSjtBQUNNO0FBQ0k7QUFDaEI7QUFDVjtBQUNNO0FBQ2lCO0FBQ2hCOztBQUU1QztBQUNBLGFBQWEseUVBQXFCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGtEQUFRLEdBQUcsMkVBQWdCLENBQUMsbUVBQWUsYUFBYSxvRUFBYSxnRUFBZ0UsMkVBQWdCLENBQUMsbUVBQWUsQ0FBQyxzRUFBa0I7QUFDcE4sQ0FBQztBQUNEO0FBQ0E7OztBQUdBO0FBQ0Esd0JBQXdCLHFFQUFpQixDQUFDLGlFQUFhO0FBQ3ZELHdEQUF3RCxvRUFBZ0I7QUFDeEUsNENBQTRDLG9FQUFhLFlBQVksbUVBQWU7O0FBRXBGLE9BQU8sZ0VBQVM7QUFDaEI7QUFDQSxHQUFHOzs7QUFHSDtBQUNBLFdBQVcsZ0VBQVMsb0JBQW9CLDZEQUFRLG9DQUFvQyxnRUFBVztBQUMvRixHQUFHO0FBQ0gsQ0FBQztBQUNEOzs7QUFHZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMkRBQUc7QUFDckIsb0JBQW9CLDJEQUFHO0FBQ3ZCLHFCQUFxQiwyREFBRztBQUN4QixtQkFBbUIsMkRBQUc7QUFDdEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWaWV3cG9ydFJlY3QgZnJvbSBcIi4vZ2V0Vmlld3BvcnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRSZWN0IGZyb20gXCIuL2dldERvY3VtZW50UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4vY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4uL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IG1heCwgbWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpKSA6IGlzSFRNTEVsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQpIDogcmVjdFRvQ2xpZW50UmVjdChnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKSk7XG59IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbi8vIGBpbml0aWFsYFxuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICByZXR1cm4gY2xpcHBpbmdQYXJlbnRzLmZpbHRlcihmdW5jdGlvbiAoY2xpcHBpbmdQYXJlbnQpIHtcbiAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknO1xuICB9KTtcbn0gLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KSB7XG4gIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG4gIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50KSk7XG4gIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG4gIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbn0iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCompositeRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent);
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(elementOrVirtualElement);
  var isOffsetParentAnElement = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(documentElement)) {
      scroll = Object(_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent);
    }

    if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent)) {
      offsets = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzP2QxMTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStEO0FBQ2hCO0FBQ0o7QUFDSztBQUNXO0FBQ0Y7QUFDUjtBQUNqRDs7QUFFZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isc0VBQWtCO0FBQzFDLGFBQWEseUVBQXFCO0FBQ2xDLGdDQUFnQyxvRUFBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwrREFBVztBQUNuQixJQUFJLGtFQUFjO0FBQ2xCLGVBQWUsaUVBQWE7QUFDNUI7O0FBRUEsUUFBUSxvRUFBYTtBQUNyQixnQkFBZ0IseUVBQXFCO0FBQ3JDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0JBQWtCLHVFQUFtQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZVNjcm9sbCBmcm9tIFwiLi9nZXROb2RlU2Nyb2xsLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7IC8vIFJldHVybnMgdGhlIGNvbXBvc2l0ZSByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC5cbi8vIENvbXBvc2l0ZSBtZWFucyBpdCB0YWtlcyBpbnRvIGFjY291bnQgdHJhbnNmb3JtcyBhcyB3ZWxsIGFzIGxheW91dC5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50LCBpc0ZpeGVkKSB7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50KTtcbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIHZhciBvZmZzZXRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTA3OFxuICAgIGlzU2Nyb2xsUGFyZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCk7XG4gICAgICBvZmZzZXRzLnggKz0gb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgfTtcbn0iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getComputedStyle; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzP2I1MTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ3hCO0FBQ2YsU0FBUyw2REFBUztBQUNsQiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentElement; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isElement"])(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanM/ZWY1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBNEM7QUFDN0I7QUFDZjtBQUNBLFdBQVcsZ0VBQVM7QUFDcEI7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentRect; });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");




 // Gets the entire size of the scrollable document area, even extending outside
// of the \`<html>\` and \`<body>\` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
  var y = -winScroll.scrollTop;

  if (Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body || html).direction === 'rtl') {
    x += Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXREb2N1bWVudFJlY3QuanM/M2U3OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RDtBQUNKO0FBQ007QUFDUjtBQUNaO0FBQ3ZDOztBQUVlO0FBQ2Y7O0FBRUEsYUFBYSxzRUFBa0I7QUFDL0Isa0JBQWtCLG1FQUFlO0FBQ2pDO0FBQ0EsY0FBYywwREFBRztBQUNqQixlQUFlLDBEQUFHO0FBQ2xCLGtDQUFrQyx1RUFBbUI7QUFDckQ7O0FBRUEsTUFBTSxvRUFBZ0I7QUFDdEIsU0FBUywwREFBRztBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRSZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgeyBtYXggfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBHZXRzIHRoZSBlbnRpcmUgc2l6ZSBvZiB0aGUgc2Nyb2xsYWJsZSBkb2N1bWVudCBhcmVhLCBldmVuIGV4dGVuZGluZyBvdXRzaWRlXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHTMLElementScroll; });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcz81ZmU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLayoutRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzP2UyZTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQStEO0FBQy9EOztBQUVlO0FBQ2YsbUJBQW1CLHlFQUFxQixVQUFVO0FBQ2xEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldExheW91dFJlY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiOyAvLyBSZXR1cm5zIHRoZSBsYXlvdXQgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuIExheW91dFxuLy8gbWVhbnMgaXQgZG9lc24ndCB0YWtlIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRMYXlvdXRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7IC8vIFVzZSB0aGUgY2xpZW50UmVjdCBzaXplcyBpZiBpdCdzIG5vdCBiZWVuIHRyYW5zZm9ybWVkLlxuICAvLyBGaXhlcyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEyMjNcblxuICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3Qud2lkdGggLSB3aWR0aCkgPD0gMSkge1xuICAgIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LmhlaWdodCAtIGhlaWdodCkgPD0gMSkge1xuICAgIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgeTogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeName; });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlTmFtZS5qcz81Nzg4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlTmFtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeScroll; });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node) || !Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isHTMLElement"])(node)) {
    return Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  } else {
    return Object(_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlU2Nyb2xsLmpzPzE5OWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EO0FBQ1o7QUFDUztBQUNhO0FBQzlDO0FBQ2YsZUFBZSw2REFBUyxXQUFXLG9FQUFhO0FBQ2hELFdBQVcsbUVBQWU7QUFDMUIsR0FBRztBQUNILFdBQVcsd0VBQW9CO0FBQy9CO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlU2Nyb2xsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEhUTUxFbGVtZW50U2Nyb2xsIGZyb20gXCIuL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOffsetParent; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");







function getTrueOffsetParent(element) {
  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element) || // https://github.com/popperjs/popper-core/issues/837
  Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // \`.offsetParent\` reports \`null\` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);

  while (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(currentNode) && ['html', 'body'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode)) < 0) {
    var css = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && Object(_isTableElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'html' || Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'body' && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanM/YjYyYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ0k7QUFDVTtBQUNMO0FBQ0M7QUFDRjs7QUFFL0M7QUFDQSxPQUFPLG9FQUFhO0FBQ3BCLEVBQUUsb0VBQWdCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG9FQUFhO0FBQzNCO0FBQ0EscUJBQXFCLG9FQUFnQjs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGlFQUFhOztBQUVqQyxTQUFTLG9FQUFhLDBDQUEwQywrREFBVztBQUMzRSxjQUFjLG9FQUFnQixjQUFjO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7OztBQUdlO0FBQ2YsZUFBZSw2REFBUztBQUN4Qjs7QUFFQSx5QkFBeUIsa0VBQWMsa0JBQWtCLG9FQUFnQjtBQUN6RTtBQUNBOztBQUVBLHVCQUF1QiwrREFBVyw2QkFBNkIsK0RBQVcsNkJBQTZCLG9FQUFnQjtBQUN2SDtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGlzVGFibGVFbGVtZW50IGZyb20gXCIuL2lzVGFibGVFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xO1xuICB2YXIgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpICE9PSAtMTtcblxuICBpZiAoaXNJRSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgLy8gSW4gSUUgOSwgMTAgYW5kIDExIGZpeGVkIGVsZW1lbnRzIGNvbnRhaW5pbmcgYmxvY2sgaXMgYWx3YXlzIGVzdGFibGlzaGVkIGJ5IHRoZSB2aWV3cG9ydFxuICAgIHZhciBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAgIGlmIChlbGVtZW50Q3NzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParentNode; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function getParentNode(element) {
  if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isShadowRoot"])(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element) // fallback

  );
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRQYXJlbnROb2RlLmpzPzI4YmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNjO0FBQ1Y7QUFDaEM7QUFDZixNQUFNLCtEQUFXO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQVk7QUFDaEI7QUFDQSxJQUFJLHNFQUFrQjs7QUFFdEI7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFBhcmVudE5vZGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG4gICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgKCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollParent; });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(node) && Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node)) {
    return node;
  }

  return getScrollParent(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRTY3JvbGxQYXJlbnQuanM/OWQwZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDRTtBQUNOO0FBQ0s7QUFDakM7QUFDZiw0Q0FBNEMsK0RBQVc7QUFDdkQ7QUFDQTtBQUNBOztBQUVBLE1BQU0sb0VBQWEsVUFBVSxrRUFBYztBQUMzQztBQUNBOztBQUVBLHlCQUF5QixpRUFBYTtBQUN0QyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFNjcm9sbFBhcmVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewportRect; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");



function getViewportRect(element) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, \`html.clientHeight\` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element),
    y: y
  };
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanM/N2M3MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ2tCO0FBQ0U7QUFDNUM7QUFDZixZQUFZLDZEQUFTO0FBQ3JCLGFBQWEsc0VBQWtCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsc0NBQXNDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1RUFBbUI7QUFDOUI7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Vmlld3BvcnRSZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwOyAvLyBOQjogVGhpcyBpc24ndCBzdXBwb3J0ZWQgb24gaU9TIDw9IDEyLiBJZiB0aGUga2V5Ym9hcmQgaXMgb3BlbiwgdGhlIHBvcHBlclxuICAvLyBjYW4gYmUgb2JzY3VyZWQgdW5kZXJuZWF0aCBpdC5cbiAgLy8gQWxzbywgYGh0bWwuY2xpZW50SGVpZ2h0YCBhZGRzIHRoZSBib3R0b20gYmFyIGhlaWdodCBpbiBTYWZhcmkgaU9TLCBldmVuXG4gIC8vIGlmIGl0IGlzbid0IG9wZW4sIHNvIGlmIHRoaXMgaXNuJ3QgYXZhaWxhYmxlLCB0aGUgcG9wcGVyIHdpbGwgYmUgZGV0ZWN0ZWRcbiAgLy8gdG8gb3ZlcmZsb3cgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIHRvbyBlYXJseS5cblxuICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgIGhlaWdodCA9IHZpc3VhbFZpZXdwb3J0LmhlaWdodDsgLy8gVXNlcyBMYXlvdXQgVmlld3BvcnQgKGxpa2UgQ2hyb21lOyBTYWZhcmkgZG9lcyBub3QgY3VycmVudGx5KVxuICAgIC8vIEluIENocm9tZSwgaXQgcmV0dXJucyBhIHZhbHVlIHZlcnkgY2xvc2UgdG8gMCAoKy8tKSBidXQgY29udGFpbnMgcm91bmRpbmdcbiAgICAvLyBlcnJvcnMgZHVlIHRvIGZsb2F0aW5nIHBvaW50IG51bWJlcnMsIHNvIHdlIG5lZWQgdG8gY2hlY2sgcHJlY2lzaW9uLlxuICAgIC8vIFNhZmFyaSByZXR1cm5zIGEgbnVtYmVyIDw9IDAsIHVzdWFsbHkgPCAtMSB3aGVuIHBpbmNoLXpvb21lZFxuICAgIC8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZhaWxzIGluIG1vYmlsZSBlbXVsYXRpb24gbW9kZSBpbiBDaHJvbWUuXG4gICAgLy8gTWF0aC5hYnMod2luLmlubmVyV2lkdGggLyB2aXN1YWxWaWV3cG9ydC5zY2FsZSAtIHZpc3VhbFZpZXdwb3J0LndpZHRoKSA8XG4gICAgLy8gMC4wMDFcbiAgICAvLyBGYWxsYmFjayBoZXJlOiBcIk5vdCBTYWZhcmlcIiB1c2VyQWdlbnRcblxuICAgIGlmICghL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgIHk6IHlcbiAgfTtcbn0iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindow; });
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3cuanM/MWZjMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvdy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKG5vZGUudG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScroll; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGwuanM/YTMyMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDeEI7QUFDZixZQUFZLDZEQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0O1xuICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgfTtcbn0iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScrollBarX; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report \`0\` for
  // this (e.g. Edge 2019, IE11, Safari)
  return Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzPzYxMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRDtBQUNOO0FBQ047QUFDcEM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMseUVBQXFCLENBQUMsc0VBQWtCLGtCQUFrQixtRUFBZTtBQUNsRiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbEJhclguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcbiAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAvLyBhbnl3YXkuXG4gIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXG4gIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLElement", function() { return isHTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShadowRoot", function() { return isShadowRoot; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");


function isElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzPzI3NjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1Qzs7QUFFdkM7QUFDQSxtQkFBbUIsNkRBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiw2REFBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDZEQUFTO0FBQzVCO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcblxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG59XG5cbmV4cG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH07Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isScrollParent; });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check \`-x\` and \`-y\` variations as well
  var _getComputedStyle = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1Njcm9sbFBhcmVudC5qcz9hZTZjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFxRDtBQUN0QztBQUNmO0FBQ0EsMEJBQTBCLG9FQUFnQjtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzU2Nyb2xsUGFyZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isTableElement; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1RhYmxlRWxlbWVudC5qcz9iNDUxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUM1QjtBQUNmLHVDQUF1QywrREFBVztBQUNsRCIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzVGFibGVFbGVtZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
`)},"./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listScrollParents; });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = Object(_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target)));
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcz9lYTFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRDtBQUNKO0FBQ1I7QUFDVTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLG1FQUFlO0FBQ3BDO0FBQ0EsWUFBWSw2REFBUztBQUNyQiwrREFBK0Qsa0VBQWM7QUFDN0U7QUFDQTtBQUNBLHVDQUF1QyxpRUFBYTtBQUNwRCIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tIFwiLi9nZXRTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
`)},"./node_modules/@popperjs/core/lib/enums.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return beforeRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read", function() { return read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return afterRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return beforeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return afterMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return beforeWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return write; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return afterWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzPzc3ZjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQSxDQUFDLE1BQU07O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciB0b3AgPSAndG9wJztcbmV4cG9ydCB2YXIgYm90dG9tID0gJ2JvdHRvbSc7XG5leHBvcnQgdmFyIHJpZ2h0ID0gJ3JpZ2h0JztcbmV4cG9ydCB2YXIgbGVmdCA9ICdsZWZ0JztcbmV4cG9ydCB2YXIgYXV0byA9ICdhdXRvJztcbmV4cG9ydCB2YXIgYmFzZVBsYWNlbWVudHMgPSBbdG9wLCBib3R0b20sIHJpZ2h0LCBsZWZ0XTtcbmV4cG9ydCB2YXIgc3RhcnQgPSAnc3RhcnQnO1xuZXhwb3J0IHZhciBlbmQgPSAnZW5kJztcbmV4cG9ydCB2YXIgY2xpcHBpbmdQYXJlbnRzID0gJ2NsaXBwaW5nUGFyZW50cyc7XG5leHBvcnQgdmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0JztcbmV4cG9ydCB2YXIgcG9wcGVyID0gJ3BvcHBlcic7XG5leHBvcnQgdmFyIHJlZmVyZW5jZSA9ICdyZWZlcmVuY2UnO1xuZXhwb3J0IHZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7XG5leHBvcnQgdmFyIHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovW10uY29uY2F0KGJhc2VQbGFjZW1lbnRzLCBbYXV0b10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCwgcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTsgLy8gbW9kaWZpZXJzIHRoYXQgbmVlZCB0byByZWFkIHRoZSBET01cblxuZXhwb3J0IHZhciBiZWZvcmVSZWFkID0gJ2JlZm9yZVJlYWQnO1xuZXhwb3J0IHZhciByZWFkID0gJ3JlYWQnO1xuZXhwb3J0IHZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcblxuZXhwb3J0IHZhciBiZWZvcmVNYWluID0gJ2JlZm9yZU1haW4nO1xuZXhwb3J0IHZhciBtYWluID0gJ21haW4nO1xuZXhwb3J0IHZhciBhZnRlck1haW4gPSAnYWZ0ZXJNYWluJzsgLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuXG5leHBvcnQgdmFyIGJlZm9yZVdyaXRlID0gJ2JlZm9yZVdyaXRlJztcbmV4cG9ydCB2YXIgd3JpdGUgPSAnd3JpdGUnO1xuZXhwb3J0IHZhciBhZnRlcldyaXRlID0gJ2FmdGVyV3JpdGUnO1xuZXhwb3J0IHZhciBtb2RpZmllclBoYXNlcyA9IFtiZWZvcmVSZWFkLCByZWFkLCBhZnRlclJlYWQsIGJlZm9yZU1haW4sIG1haW4sIGFmdGVyTWFpbiwgYmVmb3JlV3JpdGUsIHdyaXRlLCBhZnRlcldyaXRlXTsiXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/enums.js
`)},"./node_modules/@popperjs/core/lib/index.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "top", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["auto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["basePlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "start", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "end", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["end"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["clippingParents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["popper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["reference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["variationPlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["placements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["read"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "main", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["main"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "write", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["write"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["preventOverflow"]; });

/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["detectOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperBase", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["createPopper"]; });

/* harmony import */ var _popper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popper.js */ "./node_modules/@popperjs/core/lib/popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return _popper_js__WEBPACK_IMPORTED_MODULE_3__["createPopper"]; });

/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__["createPopper"]; });


 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2luZGV4LmpzPzEyMzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkI7QUFDVTs7QUFFaUU7O0FBRTNEIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2VudW1zLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93LCBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyQmFzZSB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciB9IGZyb20gXCIuL3BvcHBlci5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsiXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/index.js
`)},"./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the \`computeStyles\` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcHBseVN0eWxlcy5qcz8wYWI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFzRDtBQUNLO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDLFNBQVMsOEVBQWEsY0FBYyx5RUFBVztBQUMvQztBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0hBQXNIOztBQUV0SDtBQUNBO0FBQ0E7QUFDQSxPQUFPLElBQUksRUFBRTs7QUFFYixXQUFXLDhFQUFhLGNBQWMseUVBQVc7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7O0FBR2M7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBUaGlzIG1vZGlmaWVyIHRha2VzIHRoZSBzdHlsZXMgcHJlcGFyZWQgYnkgdGhlIGBjb21wdXRlU3R5bGVzYCBtb2RpZmllclxuLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUuc3R5bGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogYXBwbHlTdHlsZXMsXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/modifiers/applyStyles.js
`)},"./node_modules/@popperjs/core/lib/modifiers/arrow.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return Object(_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__["default"])(typeof padding !== 'number' ? padding : Object(_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_8__["basePlacements"]));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.placement);
  var axis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_8__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"]].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["left"];
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"];
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_5__["default"])(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__["isHTMLElement"])(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!Object(_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\\'s \`element\` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdy5qcz8wOTI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEQ7QUFDRjtBQUNWO0FBQ2M7QUFDYztBQUNwQztBQUN3QjtBQUNOO0FBQ2E7QUFDWjs7QUFFM0Q7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQSxHQUFHO0FBQ0gsU0FBUyw0RUFBa0IseUNBQXlDLHlFQUFlLFVBQVUsd0RBQWM7QUFDM0c7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBFQUFnQjtBQUN0QyxhQUFhLGtGQUF3QjtBQUNyQyxvQkFBb0IsOENBQUksRUFBRSwrQ0FBSztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMkVBQWE7QUFDL0IsK0JBQStCLDZDQUFHLEdBQUcsOENBQUk7QUFDekMsK0JBQStCLGdEQUFNLEdBQUcsK0NBQUs7QUFDN0M7QUFDQTtBQUNBLDBCQUEwQiw2RUFBZTtBQUN6QztBQUNBLHNEQUFzRDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdFQUFNLG1CQUFtQjs7QUFFeEM7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDLFNBQVMsOEVBQWE7QUFDdEI7QUFDQTtBQUNBOztBQUVBLE9BQU8sc0VBQVE7QUFDZixRQUFRLElBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdjO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4uL2RvbS11dGlscy9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgd2l0aGluIGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4uL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi4vdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzXCI7XG5pbXBvcnQgeyBsZWZ0LCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHRvcCwgYm90dG9tIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdChwYWRkaW5nLCBzdGF0ZSkge1xuICBwYWRkaW5nID0gdHlwZW9mIHBhZGRpbmcgPT09ICdmdW5jdGlvbicgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogcGFkZGluZztcbiAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG59O1xuXG5mdW5jdGlvbiBhcnJvdyhfcmVmKSB7XG4gIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XG4gIHZhciBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG4gIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgdmFyIGVuZERpZmYgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbbGVuXSArIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcbiAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICB2YXIgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcbiAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICB2YXIgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcbiAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICB2YXIgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpOyAvLyBQcmV2ZW50cyBicmVha2luZyBzeW50YXggaGlnaGxpZ2h0aW5nLi4uXG5cbiAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuICAgICAgYXJyb3dFbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gJ1tkYXRhLXBvcHBlci1hcnJvd10nIDogX29wdGlvbnMkZWxlbWVudDtcblxuICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ1NTIHNlbGVjdG9yXG5cblxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGFycm93RWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXJyb3dcIiBlbGVtZW50IG11c3QgYmUgYW4gSFRNTEVsZW1lbnQgKG5vdCBhbiBTVkdFbGVtZW50KS4nLCAnVG8gdXNlIGFuIFNWRyBhcnJvdywgd3JhcCBpdCBpbiBhbiBIVE1MRWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCBhcycsICd0aGUgYXJyb3cuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXJyb3dcIiBtb2RpZmllclxcJ3MgYGVsZW1lbnRgIG11c3QgYmUgYSBjaGlsZCBvZiB0aGUgcG9wcGVyJywgJ2VsZW1lbnQuJ10uam9pbignICcpKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0ZS5lbGVtZW50cy5hcnJvdyA9IGFycm93RWxlbWVudDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2Fycm93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGFycm93LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddXG59OyJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/modifiers/arrow.js
`)},"./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToStyles", function() { return mapToStyles; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");






 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(x * dpr) / dpr) || 0,
    y: Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"];
  var win = window;

  if (adaptive) {
    var offsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)) {
      offsetParent = Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper);

      if (Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (true) {
    var transitionProperty = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\\n\\n', 'Disable the "computeStyles" modifier\\'s \`adaptive\` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\\n\\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzPzdjZGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVEO0FBQ087QUFDWjtBQUNrQjtBQUNKO0FBQ0o7QUFDbkI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDREQUFLLENBQUMsNERBQUs7QUFDbEIsT0FBTyw0REFBSyxDQUFDLDREQUFLO0FBQ2xCO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsOENBQUk7QUFDbEIsY0FBYyw2Q0FBRztBQUNqQjs7QUFFQTtBQUNBLHVCQUF1Qiw2RUFBZTtBQUN0QztBQUNBOztBQUVBLHlCQUF5Qix1RUFBUztBQUNsQyxxQkFBcUIsZ0ZBQWtCOztBQUV2QyxVQUFVLDhFQUFnQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQSxzQkFBc0IsNkNBQUc7QUFDekIsY0FBYyxnREFBTSxDQUFDOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDhDQUFJO0FBQzFCLGNBQWMsK0NBQUssQ0FBQzs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSwyQkFBMkIsb0NBQW9DO0FBQy9EOztBQUVBLHlCQUF5QixxQ0FBcUM7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sSUFBcUM7QUFDM0MsNkJBQTZCLDhFQUFnQjs7QUFFN0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLDBFQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxtREFBbUQ7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx5Q0FBeUMsa0RBQWtEO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLDRDQUE0QztBQUM1QztBQUNBLEdBQUc7QUFDSCxDQUFDOzs7QUFHYztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB1bnNldFNpZGVzID0ge1xuICB0b3A6ICdhdXRvJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGxlZnQ6ICdhdXRvJ1xufTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cbi8vIFpvb21pbmcgY2FuIGNoYW5nZSB0aGUgRFBSLCBidXQgaXQgc2VlbXMgdG8gcmVwb3J0IGEgdmFsdWUgdGhhdCB3aWxsXG4vLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuZnVuY3Rpb24gcm91bmRPZmZzZXRzQnlEUFIoX3JlZikge1xuICB2YXIgeCA9IF9yZWYueCxcbiAgICAgIHkgPSBfcmVmLnk7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG4gIHZhciBkcHIgPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICByZXR1cm4ge1xuICAgIHg6IHJvdW5kKHJvdW5kKHggKiBkcHIpIC8gZHByKSB8fCAwLFxuICAgIHk6IHJvdW5kKHJvdW5kKHkgKiBkcHIpIC8gZHByKSB8fCAwXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0ID0gX3JlZjIucG9wcGVyUmVjdCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgIG9mZnNldHMgPSBfcmVmMi5vZmZzZXRzLFxuICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGFkYXB0aXZlID0gX3JlZjIuYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHM7XG5cbiAgdmFyIF9yZWYzID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIob2Zmc2V0cykgOiB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKG9mZnNldHMpIDogb2Zmc2V0cyxcbiAgICAgIF9yZWYzJHggPSBfcmVmMy54LFxuICAgICAgeCA9IF9yZWYzJHggPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR4LFxuICAgICAgX3JlZjMkeSA9IF9yZWYzLnksXG4gICAgICB5ID0gX3JlZjMkeSA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHk7XG5cbiAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICB2YXIgc2lkZVggPSBsZWZ0O1xuICB2YXIgc2lkZVkgPSB0b3A7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgaWYgKGFkYXB0aXZlKSB7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xuICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyKSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnKSB7XG4gICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgIH1cbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSB0b3ApIHtcbiAgICAgIHNpZGVZID0gYm90dG9tOyAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuICAgICAgeSAtPSBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF0gLSBwb3BwZXJSZWN0LmhlaWdodDtcbiAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnQgPT09IGxlZnQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG4gICAgICB4IC09IG9mZnNldFBhcmVudFt3aWR0aFByb3BdIC0gcG9wcGVyUmVjdC53aWR0aDtcbiAgICAgIHggKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBfT2JqZWN0JGFzc2lnbjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbiA9IHt9LCBfT2JqZWN0JGFzc2lnbltzaWRlWV0gPSBoYXNZID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduW3NpZGVYXSA9IGhhc1ggPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDwgMiA/IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIgOiBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDApXCIsIF9PYmplY3QkYXNzaWduKSk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNCkge1xuICB2YXIgc3RhdGUgPSBfcmVmNC5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmNC5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICBfb3B0aW9ucyRhZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmUsXG4gICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXG4gICAgICBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPSBvcHRpb25zLnJvdW5kT2Zmc2V0cyxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJvdW5kT2Zmc2V0cztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFyIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldENvbXB1dGVkU3R5bGUoc3RhdGUuZWxlbWVudHMucG9wcGVyKS50cmFuc2l0aW9uUHJvcGVydHkgfHwgJyc7XG5cbiAgICBpZiAoYWRhcHRpdmUgJiYgWyd0cmFuc2Zvcm0nLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uc29tZShmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uUHJvcGVydHkuaW5kZXhPZihwcm9wZXJ0eSkgPj0gMDtcbiAgICB9KSkge1xuICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBEZXRlY3RlZCBDU1MgdHJhbnNpdGlvbnMgb24gYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcnLCAnQ1NTIHByb3BlcnRpZXM6IFwidHJhbnNmb3JtXCIsIFwidG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIuJywgJ1xcblxcbicsICdEaXNhYmxlIHRoZSBcImNvbXB1dGVTdHlsZXNcIiBtb2RpZmllclxcJ3MgYGFkYXB0aXZlYCBvcHRpb24gdG8gYWxsb3cnLCAnZm9yIHNtb290aCB0cmFuc2l0aW9ucywgb3IgcmVtb3ZlIHRoZXNlIHByb3BlcnRpZXMgZnJvbSB0aGUgQ1NTJywgJ3RyYW5zaXRpb24gZGVjbGFyYXRpb24gb24gdGhlIHBvcHBlciBlbGVtZW50IGlmIG9ubHkgdHJhbnNpdGlvbmluZycsICdvcGFjaXR5IG9yIGJhY2tncm91bmQtY29sb3IgZm9yIGV4YW1wbGUuJywgJ1xcblxcbicsICdXZSByZWNvbW1lbmQgdXNpbmcgdGhlIHBvcHBlciBlbGVtZW50IGFzIGEgd3JhcHBlciBhcm91bmQgYW4gaW5uZXInLCAnZWxlbWVudCB0aGF0IGNhbiBoYXZlIGFueSBDU1MgcHJvcGVydHkgdHJhbnNpdGlvbmVkIGZvciBhbmltYXRpb25zLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcbiAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcbiAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb25cbiAgfTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYWRhcHRpdmU6IGZhbHNlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gIGZuOiBjb21wdXRlU3R5bGVzLFxuICBkYXRhOiB7fVxufTsiXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/modifiers/computeStyles.js
`)},"./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcz9hZDZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1RUFBUztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR2M7QUFDZjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIGRhdGE6IHt9XG59OyJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
`)},"./node_modules/@popperjs/core/lib/modifiers/flip.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"]) {
    return [];
  }

  var oppositePlacement = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  return [Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement), oppositePlacement, Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"] ? Object(_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);

    var isStartVariation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["start"];
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["right"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["left"] : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["top"];

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    }

    var altVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // \`2\` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwLmpzP2VjYjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRTtBQUNSO0FBQzBCO0FBQzlCO0FBQ1k7QUFDQTtBQUNoQjs7QUFFcEQ7QUFDQSxNQUFNLDBFQUFnQixnQkFBZ0IsOENBQUk7QUFDMUM7QUFDQTs7QUFFQSwwQkFBMEIsOEVBQW9CO0FBQzlDLFVBQVUsdUZBQTZCLGdDQUFnQyx1RkFBNkI7QUFDcEc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBFQUFnQjtBQUN0QztBQUNBLGlHQUFpRyw4RUFBb0I7QUFDckg7QUFDQSxzQkFBc0IsMEVBQWdCLGdCQUFnQiw4Q0FBSSxHQUFHLDhFQUFvQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4Qzs7QUFFQSx5QkFBeUIsMEVBQWdCOztBQUV6QywyQkFBMkIsc0VBQVksZ0JBQWdCLCtDQUFLO0FBQzVELHNCQUFzQiw2Q0FBRyxFQUFFLGdEQUFNO0FBQ2pDO0FBQ0EsbUJBQW1CLHdFQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNERBQTRELCtDQUFLLEdBQUcsOENBQUksc0JBQXNCLGdEQUFNLEdBQUcsNkNBQUc7O0FBRTFHO0FBQ0EsMEJBQTBCLDhFQUFvQjtBQUM5Qzs7QUFFQSwyQkFBMkIsOEVBQW9CO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxRQUFRO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR2M7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgYm90dG9tLCB0b3AsIHN0YXJ0LCByaWdodCwgbGVmdCwgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZmxpcCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICBkYXRhOiB7XG4gICAgX3NraXA6IGZhbHNlXG4gIH1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/modifiers/flip.js
`)},"./node_modules/@popperjs/core/lib/modifiers/hide.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9oaWRlLmpzPzFkNmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQXVEO0FBQ0M7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSw2Q0FBRyxFQUFFLCtDQUFLLEVBQUUsZ0RBQU0sRUFBRSw4Q0FBSTtBQUNsQztBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsd0VBQWM7QUFDeEM7QUFDQSxHQUFHO0FBQ0gsMEJBQTBCLHdFQUFjO0FBQ3hDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7O0FBR2M7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2hpZGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcblxuZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QsIHByZXZlbnRlZE9mZnNldHMpIHtcbiAgaWYgKHByZXZlbnRlZE9mZnNldHMgPT09IHZvaWQgMCkge1xuICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCArIHByZXZlbnRlZE9mZnNldHMueCxcbiAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0ICsgcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBvdmVyZmxvd1tzaWRlXSA+PSAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZShfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBwcmV2ZW50ZWRPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wcmV2ZW50T3ZlcmZsb3c7XG4gIHZhciByZWZlcmVuY2VPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gIH0pO1xuICB2YXIgcG9wcGVyQWx0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gIH0pO1xuICB2YXIgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocmVmZXJlbmNlT3ZlcmZsb3csIHJlZmVyZW5jZVJlY3QpO1xuICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcbiAgdmFyIGlzUmVmZXJlbmNlSGlkZGVuID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyk7XG4gIHZhciBoYXNQb3BwZXJFc2NhcGVkID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHBvcHBlckVzY2FwZU9mZnNldHMpO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuICAgIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czogcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgIHBvcHBlckVzY2FwZU9mZnNldHM6IHBvcHBlckVzY2FwZU9mZnNldHMsXG4gICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgIGhhc1BvcHBlckVzY2FwZWQ6IGhhc1BvcHBlckVzY2FwZWRcbiAgfTtcbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuJzogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgJ2RhdGEtcG9wcGVyLWVzY2FwZWQnOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaGlkZScsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J10sXG4gIGZuOiBoaWRlXG59OyJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/modifiers/hide.js
`)},"./node_modules/@popperjs/core/lib/modifiers/index.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });









//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9pbmRleC5qcz8xZTc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBEO0FBQ1o7QUFDZ0I7QUFDRTtBQUNwQjtBQUNBO0FBQ0k7QUFDYyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBhcHBseVN0eWxlcyB9IGZyb20gXCIuL2FwcGx5U3R5bGVzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycm93IH0gZnJvbSBcIi4vYXJyb3cuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcHV0ZVN0eWxlcyB9IGZyb20gXCIuL2NvbXB1dGVTdHlsZXMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9ldmVudExpc3RlbmVycy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmbGlwIH0gZnJvbSBcIi4vZmxpcC5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoaWRlIH0gZnJvbSBcIi4vaGlkZS5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvZmZzZXQgfSBmcm9tIFwiLi9vZmZzZXQuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9wcGVyT2Zmc2V0cyB9IGZyb20gXCIuL3BvcHBlck9mZnNldHMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJldmVudE92ZXJmbG93IH0gZnJvbSBcIi4vcHJldmVudE92ZXJmbG93LmpzXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/modifiers/index.js
`)},"./node_modules/@popperjs/core/lib/modifiers/offset.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceAndSkiddingToXY", function() { return distanceAndSkiddingToXY; });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["top"]].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["right"]].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"].reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9vZmZzZXQuanM/OTgzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0RDtBQUNEO0FBQ3BEO0FBQ1Asc0JBQXNCLDBFQUFnQjtBQUN0Qyx3QkFBd0IsOENBQUksRUFBRSw2Q0FBRzs7QUFFakMsbUVBQW1FO0FBQ25FO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsOENBQUksRUFBRSwrQ0FBSztBQUNyQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0RBQVU7QUFDdkI7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdjO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9vZmZzZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgcGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKHt9LCByZWN0cywge1xuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pKSA6IG9mZnNldCxcbiAgICAgIHNraWRkaW5nID0gX3JlZlswXSxcbiAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gIGRpc3RhbmNlID0gKGRpc3RhbmNlIHx8IDApICogaW52ZXJ0RGlzdGFuY2U7XG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICB4OiBkaXN0YW5jZSxcbiAgICB5OiBza2lkZGluZ1xuICB9IDoge1xuICAgIHg6IHNraWRkaW5nLFxuICAgIHk6IGRpc3RhbmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG9mZnNldChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYyLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICB2YXIgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSArPSB5O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvZmZzZXQnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIGZuOiBvZmZzZXRcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/modifiers/offset.js
`)},"./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = Object(_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzPzEzNGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUF3RDs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0VBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7O0FBR2M7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5cbmZ1bmN0aW9uIHBvcHBlck9mZnNldHMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgLy8gT2Zmc2V0cyBhcmUgdGhlIGFjdHVhbCBwb3NpdGlvbiB0aGUgcG9wcGVyIG5lZWRzIHRvIGhhdmUgdG8gYmVcbiAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgLy8gdGhlIG1vZGlmaWVycyBpbiB0aGUgbmV4dCBzdGVwXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgZWxlbWVudDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncG9wcGVyT2Zmc2V0cycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAncmVhZCcsXG4gIGZuOiBwb3BwZXJPZmZzZXRzLFxuICBkYXRhOiB7fVxufTsiXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
`)},"./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement);
  var altAxis = Object(_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : Object(_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["min"])(min, tetherMin) : min, offset, tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["max"])(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];

      var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["min"])(_min, tetherMin) : _min, _offset, tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["max"])(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanM/OTQzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEQ7QUFDRjtBQUNnQjtBQUM1QjtBQUNSO0FBQ2tCO0FBQ0k7QUFDTjtBQUNKO0FBQ1k7QUFDRTs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsd0VBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCLDBFQUFnQjtBQUN0QyxrQkFBa0Isc0VBQVk7QUFDOUI7QUFDQSxpQkFBaUIsa0ZBQXdCO0FBQ3pDLGdCQUFnQixvRUFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSw0RkFBNEY7QUFDNUY7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLDZDQUFHLEdBQUcsOENBQUk7QUFDaEQscUNBQXFDLGdEQUFNLEdBQUcsK0NBQUs7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwrQ0FBSztBQUNwQywrQkFBK0IsK0NBQUssMENBQTBDO0FBQzlFOztBQUVBO0FBQ0EsNkNBQTZDLDJFQUFhO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLHlIQUF5SCw0RUFBa0I7QUFDM0k7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGdFQUFNO0FBQ3pCO0FBQ0E7QUFDQSxvREFBb0QsNkVBQWU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsZ0VBQU0sVUFBVSwyREFBTyx5Q0FBeUMsMkRBQU87QUFDbkc7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLDZDQUFHLEdBQUcsOENBQUk7O0FBRW5ELHdDQUF3QyxnREFBTSxHQUFHLCtDQUFLOztBQUV0RDs7QUFFQTs7QUFFQTs7QUFFQSw2QkFBNkIsZ0VBQU0sVUFBVSwyREFBTyw0Q0FBNEMsMkRBQU87O0FBRXZHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR2M7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgc3RhcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRBbHRBeGlzIGZyb20gXCIuLi91dGlscy9nZXRBbHRBeGlzLmpzXCI7XG5pbXBvcnQgd2l0aGluIGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuLi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcyB8fCBjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWUgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIHRldGhlck9mZnNldFZhbHVlO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdW21haW5BeGlzXSA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihtaW4sIHRldGhlck1pbikgOiBtaW4sIG9mZnNldCwgdGV0aGVyID8gbWF0aE1heChtYXgsIHRldGhlck1heCkgOiBtYXgpO1xuICAgICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1hdGhNaW4oX21pbiwgdGV0aGVyTWluKSA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IG1hdGhNYXgoX21heCwgdGV0aGVyTWF4KSA6IF9tYXgpO1xuXG4gICAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
`)},"./node_modules/@popperjs/core/lib/popper-lite.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci1saXRlLmpzPzQ1ZDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9FO0FBQ1Q7QUFDRjtBQUNBO0FBQ0o7QUFDckQsd0JBQXdCLG9FQUFjLEVBQUUsbUVBQWEsRUFBRSxtRUFBYSxFQUFFLGlFQUFXO0FBQ2pGLGdDQUFnQyx3RUFBZTtBQUMvQztBQUNBLENBQUMsRUFBRSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLWxpdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlc107XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/popper-lite.js
`)},"./node_modules/@popperjs/core/lib/popper.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__["createPopper"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["preventOverflow"]; });











var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci5qcz8zOWMzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRTtBQUNUO0FBQ0Y7QUFDQTtBQUNKO0FBQ1Y7QUFDSjtBQUNzQjtBQUNwQjtBQUNGO0FBQ3ZDLHdCQUF3QixvRUFBYyxFQUFFLG1FQUFhLEVBQUUsbUVBQWEsRUFBRSxpRUFBVyxFQUFFLDREQUFNLEVBQUUsMERBQUksRUFBRSxxRUFBZSxFQUFFLDJEQUFLLEVBQUUsMERBQUk7QUFDN0gsZ0NBQWdDLHdFQUFlO0FBQy9DO0FBQ0EsQ0FBQyxFQUFFOztBQUV3RTs7QUFFUCIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG5pbXBvcnQgb2Zmc2V0IGZyb20gXCIuL21vZGlmaWVycy9vZmZzZXQuanNcIjtcbmltcG9ydCBmbGlwIGZyb20gXCIuL21vZGlmaWVycy9mbGlwLmpzXCI7XG5pbXBvcnQgcHJldmVudE92ZXJmbG93IGZyb20gXCIuL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBhcnJvdyBmcm9tIFwiLi9tb2RpZmllcnMvYXJyb3cuanNcIjtcbmltcG9ydCBoaWRlIGZyb20gXCIuL21vZGlmaWVycy9oaWRlLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXMsIG9mZnNldCwgZmxpcCwgcHJldmVudE92ZXJmbG93LCBhcnJvdywgaGlkZV07XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsiXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/popper.js
`)},"./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeAutoPlacement; });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"] : _options$allowedAutoP;
  var variation = Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"] : _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"].filter(function (placement) {
    return Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_1__["basePlacements"];
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (true) {
      console.error(['Popper: The \`allowedAutoPlacements\` option did not allow any', 'placements. Ensure the \`placement\` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = Object(_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LmpzPzQzY2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZDO0FBQ2tEO0FBQzlDO0FBQ0k7QUFDdEM7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsb0RBQWE7QUFDOUUsa0JBQWtCLGdFQUFZO0FBQzlCLGdEQUFnRCw2REFBbUIsR0FBRyw2REFBbUI7QUFDekYsV0FBVyxnRUFBWTtBQUN2QixHQUFHLElBQUksd0RBQWM7QUFDckI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBLHFCQUFxQixrRUFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRSxvRUFBZ0I7QUFDdkI7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyB2YXJpYXRpb25QbGFjZW1lbnRzLCBiYXNlUGxhY2VtZW50cywgcGxhY2VtZW50cyBhcyBhbGxQbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gYWxsUGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuICB2YXIgcGxhY2VtZW50cyA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcbiAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gIH0pO1xuXG4gIGlmIChhbGxvd2VkUGxhY2VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBUaGUgYGFsbG93ZWRBdXRvUGxhY2VtZW50c2Agb3B0aW9uIGRpZCBub3QgYWxsb3cgYW55JywgJ3BsYWNlbWVudHMuIEVuc3VyZSB0aGUgYHBsYWNlbWVudGAgb3B0aW9uIG1hdGNoZXMgdGhlIHZhcmlhdGlvbicsICdvZiB0aGUgYWxsb3dlZCBwbGFjZW1lbnRzLicsICdGb3IgZXhhbXBsZSwgXCJhdXRvXCIgY2Fubm90IGJlIHVzZWQgdG8gYWxsb3cgXCJib3R0b20tc3RhcnRcIi4nLCAnVXNlIFwiYXV0by1zdGFydFwiIGluc3RlYWQuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV06IEZsb3cgc2VlbXMgdG8gaGF2ZSBwcm9ibGVtcyB3aXRoIHR3byBhcnJheSB1bmlvbnMuLi5cblxuXG4gIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gIH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
`)},"./node_modules/@popperjs/core/lib/utils/computeOffsets.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeOffsets; });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["top"]:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["bottom"]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["right"]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["left"]:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? Object(_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["start"]:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["end"]:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzPzVkN2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEO0FBQ1I7QUFDd0I7QUFDRjtBQUNwRDtBQUNmO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvRUFBZ0I7QUFDbEQsOEJBQThCLGdFQUFZO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsNkNBQUc7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsZ0RBQU07QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsK0NBQUs7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsOENBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsNEVBQXdCOztBQUV6RDtBQUNBOztBQUVBO0FBQ0EsV0FBVywrQ0FBSztBQUNoQjtBQUNBOztBQUVBLFdBQVcsNkNBQUc7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlT2Zmc2V0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBzdGFydCwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBlbmQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufSJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/computeOffsets.js
`)},"./node_modules/@popperjs/core/lib/utils/debounce.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RlYm91bmNlLmpzP2IxZTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICB2YXIgcGVuZGluZztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/debounce.js
`)},"./node_modules/@popperjs/core/lib/utils/detectOverflow.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return detectOverflow; });
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["clippingParents"] : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["viewport"] : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = Object(_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(typeof padding !== 'number' ? padding : Object(_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_5__["basePlacements"]));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["reference"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"];
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = Object(_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__["isElement"])(element) ? element : element.contextElement || Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = Object(_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(referenceElement);
  var popperOffsets = Object(_computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = Object(_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzP2I2MTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRTtBQUNaO0FBQ007QUFDbkI7QUFDSTtBQUMwRDtBQUN4RDtBQUNFO0FBQ047O0FBRXBDO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHlEQUFlO0FBQy9EO0FBQ0Esd0RBQXdELGtEQUFRO0FBQ2hFO0FBQ0EsMERBQTBELGdEQUFNO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNFQUFrQix5Q0FBeUMsbUVBQWUsVUFBVSx3REFBYztBQUN4SCxzQ0FBc0MsZ0RBQU0sR0FBRyxtREFBUyxHQUFHLGdEQUFNO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2RUFBZSxDQUFDLDBFQUFTLGdEQUFnRCxnRkFBa0I7QUFDdEgsNEJBQTRCLG1GQUFxQjtBQUNqRCxzQkFBc0Isa0VBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gseUJBQXlCLG9FQUFnQixpQkFBaUI7QUFDMUQsNkNBQTZDLGdEQUFNLDBDQUEwQztBQUM3Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDLHlCQUF5QixnREFBTTtBQUMvQjtBQUNBO0FBQ0Esc0JBQXNCLCtDQUFLLEVBQUUsZ0RBQU07QUFDbkMsa0JBQWtCLDZDQUFHLEVBQUUsZ0RBQU07QUFDN0I7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Q2xpcHBpbmdSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4vY29tcHV0ZU9mZnNldHMuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IGNsaXBwaW5nUGFyZW50cywgcmVmZXJlbmNlLCBwb3BwZXIsIGJvdHRvbSwgdG9wLCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4vbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuL2V4cGFuZFRvSGFzaE1hcC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciByZWZlcmVuY2VFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpO1xuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2VFbGVtZW50KTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn0iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/detectOverflow.js
`)},"./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return expandToHashMap; });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qcz85ODUyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9leHBhbmRUb0hhc2hNYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gaGFzaE1hcDtcbiAgfSwge30pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
`)},"./node_modules/@popperjs/core/lib/utils/format.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2Zvcm1hdC5qcz9mNTNlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmLHdGQUF3RixhQUFhO0FBQ3JHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZm9ybWF0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KHN0cikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gW10uY29uY2F0KGFyZ3MpLnJlZHVjZShmdW5jdGlvbiAocCwgYykge1xuICAgIHJldHVybiBwLnJlcGxhY2UoLyVzLywgYyk7XG4gIH0sIHN0cik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/format.js
`)},"./node_modules/@popperjs/core/lib/utils/getAltAxis.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAltAxis; });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanM/ZjJlMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRBbHRBeGlzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/getAltAxis.js
`)},"./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBasePlacement; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanM/YjUwZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDcEI7QUFDZjtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufSJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/getBasePlacement.js
`)},"./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFreshSideObject; });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcz8zNWY2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
`)},"./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMainAxisFromPlacement; });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qcz9hZDlkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufSJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
`)},"./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositePlacement; });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzPzUyMzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaGFzaCA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
`)},"./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositeVariationPlacement; });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50LmpzPzUwMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
`)},"./node_modules/@popperjs/core/lib/utils/getVariation.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getVariation; });
function getVariation(placement) {
  return placement.split('-')[1];
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcz8zZDhkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufSJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/getVariation.js
`)},"./node_modules/@popperjs/core/lib/utils/math.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
var max = Math.max;
var min = Math.min;
var round = Math.round;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21hdGguanM/ODRjNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWF0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgbWF4ID0gTWF0aC5tYXg7XG5leHBvcnQgdmFyIG1pbiA9IE1hdGgubWluO1xuZXhwb3J0IHZhciByb3VuZCA9IE1hdGgucm91bmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/math.js
`)},"./node_modules/@popperjs/core/lib/utils/mergeByName.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeByName; });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlQnlOYW1lLmpzPzJhMzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RCwrQkFBK0I7QUFDL0IsNEJBQTRCO0FBQzVCLEtBQUs7QUFDTDtBQUNBLEdBQUcsSUFBSSxFQUFFOztBQUVUO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlQnlOYW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/mergeByName.js
`)},"./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergePaddingObject; });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, Object(_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), paddingObject);
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcz9kMzliIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUF5RDtBQUMxQztBQUNmLHlCQUF5QixFQUFFLHNFQUFrQjtBQUM3QyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
`)},"./node_modules/@popperjs/core/lib/utils/orderModifiers.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return orderModifiers; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzP2I5ZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVlO0FBQ2Y7QUFDQSwwQ0FBMEM7O0FBRTFDLFNBQVMsd0RBQWM7QUFDdkI7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gc291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTg3NTI1NVxuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/orderModifiers.js
`)},"./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rectToClientRect; });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanM/N2JjZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7QUFDZix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
`)},"./node_modules/@popperjs/core/lib/utils/uniqueBy.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uniqueBy; });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3VuaXF1ZUJ5LmpzPzYwMTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy91bmlxdWVCeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaXF1ZUJ5KGFyciwgZm4pIHtcbiAgdmFyIGlkZW50aWZpZXJzID0gbmV3IFNldCgpO1xuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBpZGVudGlmaWVyID0gZm4oaXRlbSk7XG5cbiAgICBpZiAoIWlkZW50aWZpZXJzLmhhcyhpZGVudGlmaWVyKSkge1xuICAgICAgaWRlbnRpZmllcnMuYWRkKGlkZW50aWZpZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/uniqueBy.js
`)},"./node_modules/@popperjs/core/lib/utils/validateModifiers.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateModifiers; });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "./node_modules/@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\\"" + String(modifier.name) + "\\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\\"" + String(modifier.enabled) + "\\""));
          }

        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].indexOf(modifier.phase) < 0) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].join(', '), "\\"" + String(modifier.phase) + "\\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\\"" + String(modifier.fn) + "\\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\\"" + String(modifier.fn) + "\\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\\"" + String(modifier.requires) + "\\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\\"" + String(modifier.requiresIfExists) + "\\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \\"" + modifier.name + "\\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\\"" + s + "\\"";
          }).join(', ') + "; but \\"" + key + "\\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3ZhbGlkYXRlTW9kaWZpZXJzLmpzPzc5NTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDWTtBQUM3QztBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMERBQU07QUFDaEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQiwwREFBTTtBQUNoQzs7QUFFQTtBQUNBLGNBQWMsd0RBQWM7QUFDNUIsMEJBQTBCLDBEQUFNLCtEQUErRCx3REFBYztBQUM3Rzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLDBEQUFNO0FBQ2hDOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsMERBQU07QUFDaEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQiwwREFBTTtBQUNoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLDBEQUFNO0FBQ2hDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCLDBEQUFNO0FBQzlCO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3ZhbGlkYXRlTW9kaWZpZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi9mb3JtYXQuanNcIjtcbmltcG9ydCB7IG1vZGlmaWVyUGhhc2VzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG52YXIgSU5WQUxJRF9NT0RJRklFUl9FUlJPUiA9ICdQb3BwZXI6IG1vZGlmaWVyIFwiJXNcIiBwcm92aWRlZCBhbiBpbnZhbGlkICVzIHByb3BlcnR5LCBleHBlY3RlZCAlcyBidXQgZ290ICVzJztcbnZhciBNSVNTSU5HX0RFUEVOREVOQ1lfRVJST1IgPSAnUG9wcGVyOiBtb2RpZmllciBcIiVzXCIgcmVxdWlyZXMgXCIlc1wiLCBidXQgXCIlc1wiIG1vZGlmaWVyIGlzIG5vdCBhdmFpbGFibGUnO1xudmFyIFZBTElEX1BST1BFUlRJRVMgPSBbJ25hbWUnLCAnZW5hYmxlZCcsICdwaGFzZScsICdmbicsICdlZmZlY3QnLCAncmVxdWlyZXMnLCAnb3B0aW9ucyddO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIE9iamVjdC5rZXlzKG1vZGlmaWVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIubmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgJ1wibmFtZVwiJywgJ1wic3RyaW5nXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5uYW1lKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZW5hYmxlZCc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5lbmFibGVkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVuYWJsZWRcIicsICdcImJvb2xlYW5cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmVuYWJsZWQpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAncGhhc2UnOlxuICAgICAgICAgIGlmIChtb2RpZmllclBoYXNlcy5pbmRleE9mKG1vZGlmaWVyLnBoYXNlKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInBoYXNlXCInLCBcImVpdGhlciBcIiArIG1vZGlmaWVyUGhhc2VzLmpvaW4oJywgJyksIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnBoYXNlKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZm4nOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImZuXCInLCAnXCJmdW5jdGlvblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZm4pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlZmZlY3QnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZWZmZWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJlZmZlY3RcIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcXVpcmVzJzpcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kaWZpZXIucmVxdWlyZXMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJyZXF1aXJlc1wiJywgJ1wiYXJyYXlcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnJlcXVpcmVzKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVxdWlyZXNJZkV4aXN0cyc6XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJyZXF1aXJlc0lmRXhpc3RzXCInLCAnXCJhcnJheVwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cykgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29wdGlvbnMnOlxuICAgICAgICBjYXNlICdkYXRhJzpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQb3BwZXJKUzogYW4gaW52YWxpZCBwcm9wZXJ0eSBoYXMgYmVlbiBwcm92aWRlZCB0byB0aGUgXFxcIlwiICsgbW9kaWZpZXIubmFtZSArIFwiXFxcIiBtb2RpZmllciwgdmFsaWQgcHJvcGVydGllcyBhcmUgXCIgKyBWQUxJRF9QUk9QRVJUSUVTLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgcmV0dXJuIFwiXFxcIlwiICsgcyArIFwiXFxcIlwiO1xuICAgICAgICAgIH0pLmpvaW4oJywgJykgKyBcIjsgYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcHJvdmlkZWQuXCIpO1xuICAgICAgfVxuXG4gICAgICBtb2RpZmllci5yZXF1aXJlcyAmJiBtb2RpZmllci5yZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xuICAgICAgICBpZiAobW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICAgIHJldHVybiBtb2QubmFtZSA9PT0gcmVxdWlyZW1lbnQ7XG4gICAgICAgIH0pID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChNSVNTSU5HX0RFUEVOREVOQ1lfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgcmVxdWlyZW1lbnQsIHJlcXVpcmVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/validateModifiers.js
`)},"./node_modules/@popperjs/core/lib/utils/within.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return within; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");

function within(min, value, max) {
  return Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["max"])(min, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["min"])(value, max));
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3dpdGhpbi5qcz9lNDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUM1QztBQUNmLFNBQVMsb0RBQU8sTUFBTSxvREFBTztBQUM3QiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvd2l0aGluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4vbWF0aC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aGluKG1pbiwgdmFsdWUsIG1heCkge1xuICByZXR1cm4gbWF0aE1heChtaW4sIG1hdGhNaW4odmFsdWUsIG1heCkpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./node_modules/@popperjs/core/lib/utils/within.js
`)},"./node_modules/bootstrap/dist/js/bootstrap.esm.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offcanvas", function() { return Offcanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpy", function() { return ScrollSpy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js");
var _KEY_TO_DIRECTION;

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000;
var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

var toType = function toType(obj) {
  if (obj === null || obj === undefined) {
    return "".concat(obj);
  }

  return {}.toString.call(obj).match(/\\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


var getUID = function getUID(prefix) {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

var getSelector = function getSelector(element) {
  var selector = element.getAttribute('data-bs-target');

  if (!selector || selector === '#') {
    var hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with \`#\` or \`.\`. If a "real" URL is used as the selector,
    // \`document.querySelector\` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273

    if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
      return null;
    } // Just in case some CMS puts out a full URL with the anchor appended


    if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
      hrefAttr = "#".concat(hrefAttr.split('#')[1]);
    }

    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  }

  return selector;
};

var getSelectorFromElement = function getSelectorFromElement(element) {
  var selector = getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

var getElementFromSelector = function getElementFromSelector(element) {
  var selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  var _window$getComputedSt = window.getComputedStyle(element),
      transitionDuration = _window$getComputedSt.transitionDuration,
      transitionDelay = _window$getComputedSt.transitionDelay;

  var floatTransitionDuration = Number.parseFloat(transitionDuration);
  var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};

var triggerTransitionEnd = function triggerTransitionEnd(element) {
  element.dispatchEvent(new Event(TRANSITION_END));
};

var isElement = function isElement(obj) {
  if (!obj || _typeof(obj) !== 'object') {
    return false;
  }

  if (typeof obj.jquery !== 'undefined') {
    obj = obj[0];
  }

  return typeof obj.nodeType !== 'undefined';
};

var getElement = function getElement(obj) {
  if (isElement(obj)) {
    // it's a jQuery object or a node element
    return obj.jquery ? obj[0] : obj;
  }

  if (typeof obj === 'string' && obj.length > 0) {
    return document.querySelector(obj);
  }

  return null;
};

var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
  Object.keys(configTypes).forEach(function (property) {
    var expectedTypes = configTypes[property];
    var value = config[property];
    var valueType = value && isElement(value) ? 'element' : toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) {
      throw new TypeError("".concat(componentName.toUpperCase(), ": Option \\"").concat(property, "\\" provided type \\"").concat(valueType, "\\" but expected type \\"").concat(expectedTypes, "\\"."));
    }
  });
};

var isVisible = function isVisible(element) {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false;
  }

  return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
};

var isDisabled = function isDisabled(element) {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }

  if (element.classList.contains('disabled')) {
    return true;
  }

  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }

  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};

var findShadowRoot = function findShadowRoot(element) {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    var root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return findShadowRoot(element.parentNode);
};

var noop = function noop() {};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */


var reflow = function reflow(element) {
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight;
};

var getjQuery = function getjQuery() {
  var _window = window,
      jQuery = _window.jQuery;

  if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return jQuery;
  }

  return null;
};

var DOMContentLoadedCallbacks = [];

var onDOMContentLoaded = function onDOMContentLoaded(callback) {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', function () {
        DOMContentLoadedCallbacks.forEach(function (callback) {
          return callback();
        });
      });
    }

    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};

var isRTL = function isRTL() {
  return document.documentElement.dir === 'rtl';
};

var defineJQueryPlugin = function defineJQueryPlugin(plugin) {
  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var name = plugin.NAME;
      var JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;

      $.fn[name].noConflict = function () {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};

var execute = function execute(callback) {
  if (typeof callback === 'function') {
    callback();
  }
};

var executeAfterTransition = function executeAfterTransition(callback, transitionElement) {
  var waitForTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!waitForTransition) {
    execute(callback);
    return;
  }

  var durationPadding = 5;
  var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  var called = false;

  var handler = function handler(_ref) {
    var target = _ref.target;

    if (target !== transitionElement) {
      return;
    }

    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };

  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(function () {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */


var getNextActiveElement = function getNextActiveElement(list, activeElement, shouldGetNext, isCycleAllowed) {
  var index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

  if (index === -1) {
    return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
  }

  var listLength = list.length;
  index += shouldGetNext ? 1 : -1;

  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }

  return list[Math.max(0, Math.min(index, listLength - 1))];
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


var namespaceRegex = /[^.]*(?=\\..*)\\.|.*/;
var stripNameRegex = /\\..*/;
var stripUidRegex = /::\\d+$/;
var eventRegistry = {}; // Events storage

var uidEvent = 1;
var customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
var customEventsRegex = /^(mouseenter|mouseleave)/i;
var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function getUidEvent(element, uid) {
  return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
}

function getEvent(element) {
  var uid = getUidEvent(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}

function bootstrapHandler(element, fn) {
  return function handler(event) {
    event.delegateTarget = element;

    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    var domElements = element.querySelectorAll(selector);

    for (var target = event.target; target && target !== this; target = target.parentNode) {
      for (var i = domElements.length; i--;) {
        if (domElements[i] === target) {
          event.delegateTarget = target;

          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    } // To please ESLint


    return null;
  };
}

function findHandler(events, handler) {
  var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var uidEventList = Object.keys(events);

  for (var i = 0, len = uidEventList.length; i < len; i++) {
    var event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
      return event;
    }
  }

  return null;
}

function normalizeParams(originalTypeEvent, handler, delegationFn) {
  var delegation = typeof handler === 'string';
  var originalHandler = delegation ? delegationFn : handler;
  var typeEvent = getTypeEvent(originalTypeEvent);
  var isNative = nativeEvents.has(typeEvent);

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = null;
  } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does


  if (customEventsRegex.test(originalTypeEvent)) {
    var wrapFn = function wrapFn(fn) {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };

    if (delegationFn) {
      delegationFn = wrapFn(delegationFn);
    } else {
      handler = wrapFn(handler);
    }
  }

  var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
      _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
      delegation = _normalizeParams2[0],
      originalHandler = _normalizeParams2[1],
      typeEvent = _normalizeParams2[2];

  var events = getEvent(element);
  var handlers = events[typeEvent] || (events[typeEvent] = {});
  var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

  if (previousFn) {
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
  }

  var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
  var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
  fn.delegationSelector = delegation ? handler : null;
  fn.originalHandler = originalHandler;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, delegation);
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  var fn = findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  var storeElementEvent = events[typeEvent] || {};
  Object.keys(storeElementEvent).forEach(function (handlerKey) {
    if (handlerKey.includes(namespace)) {
      var event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
    }
  });
}

function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '');
  return customEvents[event] || event;
}

var EventHandler = {
  on: function on(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, false);
  },
  one: function one(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, true);
  },
  off: function off(element, originalTypeEvent, handler, delegationFn) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    var _normalizeParams3 = normalizeParams(originalTypeEvent, handler, delegationFn),
        _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
        delegation = _normalizeParams4[0],
        originalHandler = _normalizeParams4[1],
        typeEvent = _normalizeParams4[2];

    var inNamespace = typeEvent !== originalTypeEvent;
    var events = getEvent(element);
    var isNamespace = originalTypeEvent.startsWith('.');

    if (typeof originalHandler !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!events || !events[typeEvent]) {
        return;
      }

      removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
      return;
    }

    if (isNamespace) {
      Object.keys(events).forEach(function (elementEvent) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      });
    }

    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (keyHandlers) {
      var handlerKey = keyHandlers.replace(stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        var event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  },
  trigger: function trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    var $ = getjQuery();
    var typeEvent = getTypeEvent(event);
    var inNamespace = event !== typeEvent;
    var isNative = nativeEvents.has(typeEvent);
    var jQueryEvent;
    var bubbles = true;
    var nativeDispatch = true;
    var defaultPrevented = false;
    var evt = null;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    if (isNative) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(typeEvent, bubbles, true);
    } else {
      evt = new CustomEvent(event, {
        bubbles: bubbles,
        cancelable: true
      });
    } // merge custom information in our event


    if (typeof args !== 'undefined') {
      Object.keys(args).forEach(function (key) {
        Object.defineProperty(evt, key, {
          get: function get() {
            return args[key];
          }
        });
      });
    }

    if (defaultPrevented) {
      evt.preventDefault();
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
      jQueryEvent.preventDefault();
    }

    return evt;
  }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var elementMap = new Map();
var Data = {
  set: function set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map());
    }

    var instanceMap = elementMap.get(element); // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used

    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
      return;
    }

    instanceMap.set(key, instance);
  },
  get: function get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }

    return null;
  },
  remove: function remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }

    var instanceMap = elementMap.get(element);
    instanceMap.delete(key); // free up element references if there are no instances left for an element

    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var VERSION = '5.1.3';

var BaseComponent = /*#__PURE__*/function () {
  function BaseComponent(element) {
    _classCallCheck(this, BaseComponent);

    element = getElement(element);

    if (!element) {
      return;
    }

    this._element = element;
    Data.set(this._element, this.constructor.DATA_KEY, this);
  }

  _createClass(BaseComponent, [{
    key: "dispose",
    value: function dispose() {
      var _this = this;

      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      Object.getOwnPropertyNames(this).forEach(function (propertyName) {
        _this[propertyName] = null;
      });
    }
  }, {
    key: "_queueCallback",
    value: function _queueCallback(callback, element) {
      var isAnimated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      executeAfterTransition(callback, element, isAnimated);
    }
    /** Static */

  }], [{
    key: "getInstance",
    value: function getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }
  }, {
    key: "getOrCreateInstance",
    value: function getOrCreateInstance(element) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.getInstance(element) || new this(element, _typeof(config) === 'object' ? config : null);
    }
  }, {
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }, {
    key: "NAME",
    get: function get() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return "bs.".concat(this.NAME);
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return ".".concat(this.DATA_KEY);
    }
  }]);

  return BaseComponent;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


var enableDismissTrigger = function enableDismissTrigger(component) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hide';
  var clickEvent = "click.dismiss".concat(component.EVENT_KEY);
  var name = component.NAME;
  EventHandler.on(document, clickEvent, "[data-bs-dismiss=\\"".concat(name, "\\"]"), function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    var target = getElementFromSelector(this) || this.closest(".".concat(name));
    var instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

    instance[method]();
  });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


var NAME$d = 'alert';
var DATA_KEY$c = 'bs.alert';
var EVENT_KEY$c = ".".concat(DATA_KEY$c);
var EVENT_CLOSE = "close".concat(EVENT_KEY$c);
var EVENT_CLOSED = "closed".concat(EVENT_KEY$c);
var CLASS_NAME_FADE$5 = 'fade';
var CLASS_NAME_SHOW$8 = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Alert = /*#__PURE__*/function (_BaseComponent) {
  _inherits(Alert, _BaseComponent);

  var _super = _createSuper(Alert);

  function Alert() {
    _classCallCheck(this, Alert);

    return _super.apply(this, arguments);
  }

  _createClass(Alert, [{
    key: "close",
    value: // Public
    function close() {
      var _this2 = this;

      var closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

      if (closeEvent.defaultPrevented) {
        return;
      }

      this._element.classList.remove(CLASS_NAME_SHOW$8);

      var isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

      this._queueCallback(function () {
        return _this2._destroyElement();
      }, this._element, isAnimated);
    } // Private

  }, {
    key: "_destroyElement",
    value: function _destroyElement() {
      this._element.remove();

      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    } // Static

  }], [{
    key: "NAME",
    get: // Getters
    function get() {
      return NAME$d;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Alert.getOrCreateInstance(this);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError("No method named \\"".concat(config, "\\""));
        }

        data[config](this);
      });
    }
  }]);

  return Alert;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


enableDismissTrigger(Alert, 'close');
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Alert to jQuery only if jQuery is present
 */

defineJQueryPlugin(Alert);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$c = 'button';
var DATA_KEY$b = 'bs.button';
var EVENT_KEY$b = ".".concat(DATA_KEY$b);
var DATA_API_KEY$7 = '.data-api';
var CLASS_NAME_ACTIVE$3 = 'active';
var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
var EVENT_CLICK_DATA_API$6 = "click".concat(EVENT_KEY$b).concat(DATA_API_KEY$7);
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Button = /*#__PURE__*/function (_BaseComponent2) {
  _inherits(Button, _BaseComponent2);

  var _super2 = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super2.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "toggle",
    value: // Public
    function toggle() {
      // Toggle class and sync the \`aria-pressed\` attribute with the return value of the \`.toggle()\` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    } // Static

  }], [{
    key: "NAME",
    get: // Getters
    function get() {
      return NAME$c;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Button.getOrCreateInstance(this);

        if (config === 'toggle') {
          data[config]();
        }
      });
    }
  }]);

  return Button;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (event) {
  event.preventDefault();
  var button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  var data = Button.getOrCreateInstance(button);
  data.toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Button to jQuery only if jQuery is present
 */

defineJQueryPlugin(Button);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(val) {
  if (val === 'true') {
    return true;
  }

  if (val === 'false') {
    return false;
  }

  if (val === Number(val).toString()) {
    return Number(val);
  }

  if (val === '' || val === 'null') {
    return null;
  }

  return val;
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, function (chr) {
    return "-".concat(chr.toLowerCase());
  });
}

var Manipulator = {
  setDataAttribute: function setDataAttribute(element, key, value) {
    element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
  },
  removeDataAttribute: function removeDataAttribute(element, key) {
    element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
  },
  getDataAttributes: function getDataAttributes(element) {
    if (!element) {
      return {};
    }

    var attributes = {};
    Object.keys(element.dataset).filter(function (key) {
      return key.startsWith('bs');
    }).forEach(function (key) {
      var pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    });
    return attributes;
  },
  getDataAttribute: function getDataAttribute(element, key) {
    return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
  },
  offset: function offset(element) {
    var rect = element.getBoundingClientRect();
    return {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset
    };
  },
  position: function position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var NODE_TEXT = 3;
var SelectorEngine = {
  find: function find(selector) {
    var _ref2;

    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(element, selector)));
  },
  findOne: function findOne(selector) {
    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return Element.prototype.querySelector.call(element, selector);
  },
  children: function children(element, selector) {
    var _ref3;

    return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(element.children)).filter(function (child) {
      return child.matches(selector);
    });
  },
  parents: function parents(element, selector) {
    var parents = [];
    var ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
      if (ancestor.matches(selector)) {
        parents.push(ancestor);
      }

      ancestor = ancestor.parentNode;
    }

    return parents;
  },
  prev: function prev(element, selector) {
    var previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },
  next: function next(element, selector) {
    var next = element.nextElementSibling;

    while (next) {
      if (next.matches(selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  },
  focusableChildren: function focusableChildren(element) {
    var focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(function (selector) {
      return "".concat(selector, ":not([tabindex^=\\"-\\"])");
    }).join(', ');
    return this.find(focusables, element).filter(function (el) {
      return !isDisabled(el) && isVisible(el);
    });
  }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$b = 'carousel';
var DATA_KEY$a = 'bs.carousel';
var EVENT_KEY$a = ".".concat(DATA_KEY$a);
var DATA_API_KEY$6 = '.data-api';
var ARROW_LEFT_KEY = 'ArrowLeft';
var ARROW_RIGHT_KEY = 'ArrowRight';
var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

var SWIPE_THRESHOLD = 40;
var Default$a = {
  interval: 5000,
  keyboard: true,
  slide: false,
  pause: 'hover',
  wrap: true,
  touch: true
};
var DefaultType$a = {
  interval: '(number|boolean)',
  keyboard: 'boolean',
  slide: '(boolean|string)',
  pause: '(string|boolean)',
  wrap: 'boolean',
  touch: 'boolean'
};
var ORDER_NEXT = 'next';
var ORDER_PREV = 'prev';
var DIRECTION_LEFT = 'left';
var DIRECTION_RIGHT = 'right';
var KEY_TO_DIRECTION = (_KEY_TO_DIRECTION = {}, _defineProperty(_KEY_TO_DIRECTION, ARROW_LEFT_KEY, DIRECTION_RIGHT), _defineProperty(_KEY_TO_DIRECTION, ARROW_RIGHT_KEY, DIRECTION_LEFT), _KEY_TO_DIRECTION);
var EVENT_SLIDE = "slide".concat(EVENT_KEY$a);
var EVENT_SLID = "slid".concat(EVENT_KEY$a);
var EVENT_KEYDOWN = "keydown".concat(EVENT_KEY$a);
var EVENT_MOUSEENTER = "mouseenter".concat(EVENT_KEY$a);
var EVENT_MOUSELEAVE = "mouseleave".concat(EVENT_KEY$a);
var EVENT_TOUCHSTART = "touchstart".concat(EVENT_KEY$a);
var EVENT_TOUCHMOVE = "touchmove".concat(EVENT_KEY$a);
var EVENT_TOUCHEND = "touchend".concat(EVENT_KEY$a);
var EVENT_POINTERDOWN = "pointerdown".concat(EVENT_KEY$a);
var EVENT_POINTERUP = "pointerup".concat(EVENT_KEY$a);
var EVENT_DRAG_START = "dragstart".concat(EVENT_KEY$a);
var EVENT_LOAD_DATA_API$2 = "load".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);
var EVENT_CLICK_DATA_API$5 = "click".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);
var CLASS_NAME_CAROUSEL = 'carousel';
var CLASS_NAME_ACTIVE$2 = 'active';
var CLASS_NAME_SLIDE = 'slide';
var CLASS_NAME_END = 'carousel-item-end';
var CLASS_NAME_START = 'carousel-item-start';
var CLASS_NAME_NEXT = 'carousel-item-next';
var CLASS_NAME_PREV = 'carousel-item-prev';
var CLASS_NAME_POINTER_EVENT = 'pointer-event';
var SELECTOR_ACTIVE$1 = '.active';
var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
var SELECTOR_ITEM = '.carousel-item';
var SELECTOR_ITEM_IMG = '.carousel-item img';
var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
var SELECTOR_INDICATORS = '.carousel-indicators';
var SELECTOR_INDICATOR = '[data-bs-target]';
var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
var POINTER_TYPE_TOUCH = 'touch';
var POINTER_TYPE_PEN = 'pen';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Carousel = /*#__PURE__*/function (_BaseComponent3) {
  _inherits(Carousel, _BaseComponent3);

  var _super3 = _createSuper(Carousel);

  function Carousel(element, config) {
    var _this3;

    _classCallCheck(this, Carousel);

    _this3 = _super3.call(this, element);
    _this3._items = null;
    _this3._interval = null;
    _this3._activeElement = null;
    _this3._isPaused = false;
    _this3._isSliding = false;
    _this3.touchTimeout = null;
    _this3.touchStartX = 0;
    _this3.touchDeltaX = 0;
    _this3._config = _this3._getConfig(config);
    _this3._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this3._element);
    _this3._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    _this3._pointerEvent = Boolean(window.PointerEvent);

    _this3._addEventListeners();

    return _this3;
  } // Getters


  _createClass(Carousel, [{
    key: "next",
    value: // Public
    function next() {
      this._slide(ORDER_NEXT);
    }
  }, {
    key: "nextWhenVisible",
    value: function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
  }, {
    key: "prev",
    value: function prev() {
      this._slide(ORDER_PREV);
    }
  }, {
    key: "pause",
    value: function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
        triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    }
  }, {
    key: "cycle",
    value: function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config && this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    }
  }, {
    key: "to",
    value: function to(index) {
      var _this4 = this;

      this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, function () {
          return _this4.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

      this._slide(order, this._items[index]);
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread({}, Default$a, {}, Manipulator.getDataAttributes(this._element), {}, _typeof(config) === 'object' ? config : {});
      typeCheckConfig(NAME$b, config, DefaultType$a);
      return config;
    }
  }, {
    key: "_handleSwipe",
    value: function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0;

      if (!direction) {
        return;
      }

      this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this5 = this;

      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN, function (event) {
          return _this5._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER, function (event) {
          return _this5.pause(event);
        });
        EventHandler.on(this._element, EVENT_MOUSELEAVE, function (event) {
          return _this5.cycle(event);
        });
      }

      if (this._config.touch && this._touchSupported) {
        this._addTouchEventListeners();
      }
    }
  }, {
    key: "_addTouchEventListeners",
    value: function _addTouchEventListeners() {
      var _this6 = this;

      var hasPointerPenTouch = function hasPointerPenTouch(event) {
        return _this6._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
      };

      var start = function start(event) {
        if (hasPointerPenTouch(event)) {
          _this6.touchStartX = event.clientX;
        } else if (!_this6._pointerEvent) {
          _this6.touchStartX = event.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        _this6.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - _this6.touchStartX;
      };

      var end = function end(event) {
        if (hasPointerPenTouch(event)) {
          _this6.touchDeltaX = event.clientX - _this6.touchStartX;
        }

        _this6._handleSwipe();

        if (_this6._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this6.pause();

          if (_this6.touchTimeout) {
            clearTimeout(_this6.touchTimeout);
          }

          _this6.touchTimeout = setTimeout(function (event) {
            return _this6.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this6._config.interval);
        }
      };

      SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (itemImg) {
        EventHandler.on(itemImg, EVENT_DRAG_START, function (event) {
          return event.preventDefault();
        });
      });

      if (this._pointerEvent) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    }
  }, {
    key: "_keydown",
    value: function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      var direction = KEY_TO_DIRECTION[event.key];

      if (direction) {
        event.preventDefault();

        this._slide(direction);
      }
    }
  }, {
    key: "_getItemIndex",
    value: function _getItemIndex(element) {
      this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
      return this._items.indexOf(element);
    }
  }, {
    key: "_getItemByOrder",
    value: function _getItemByOrder(order, activeElement) {
      var isNext = order === ORDER_NEXT;
      return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
    }
  }, {
    key: "_triggerSlideEvent",
    value: function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

      return EventHandler.trigger(this._element, EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
    }
  }, {
    key: "_setActiveIndicatorElement",
    value: function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute('aria-current');
        var indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

        for (var i = 0; i < indicators.length; i++) {
          if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
            indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
            indicators[i].setAttribute('aria-current', 'true');
            break;
          }
        }
      }
    }
  }, {
    key: "_updateInterval",
    value: function _updateInterval() {
      var element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      if (!element) {
        return;
      }

      var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }
  }, {
    key: "_slide",
    value: function _slide(directionOrOrder, element) {
      var _this7 = this;

      var order = this._directionToOrder(directionOrOrder);

      var activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || this._getItemByOrder(order, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var isNext = order === ORDER_NEXT;
      var directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      var orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

      var eventDirectionName = this._orderToDirection(order);

      if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
        this._isSliding = false;
        return;
      }

      if (this._isSliding) {
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.defaultPrevented) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;

      var triggerSlidEvent = function triggerSlidEvent() {
        EventHandler.trigger(_this7._element, EVENT_SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });
      };

      if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);

        var completeCallBack = function completeCallBack() {
          nextElement.classList.remove(directionalClassName, orderClassName);
          nextElement.classList.add(CLASS_NAME_ACTIVE$2);
          activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
          _this7._isSliding = false;
          setTimeout(triggerSlidEvent, 0);
        };

        this._queueCallback(completeCallBack, activeElement, true);
      } else {
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        this._isSliding = false;
        triggerSlidEvent();
      }

      if (isCycling) {
        this.cycle();
      }
    }
  }, {
    key: "_directionToOrder",
    value: function _directionToOrder(direction) {
      if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
        return direction;
      }

      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }

      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
  }, {
    key: "_orderToDirection",
    value: function _orderToDirection(order) {
      if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
        return order;
      }

      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }

      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$a;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$b;
    }
  }, {
    key: "carouselInterface",
    value: function carouselInterface(element, config) {
      var data = Carousel.getOrCreateInstance(element, config);
      var _config = data._config;

      if (_typeof(config) === 'object') {
        _config = _objectSpread({}, _config, {}, config);
      }

      var action = typeof config === 'string' ? config : _config.slide;

      if (typeof config === 'number') {
        data.to(config);
      } else if (typeof action === 'string') {
        if (typeof data[action] === 'undefined') {
          throw new TypeError("No method named \\"".concat(action, "\\""));
        }

        data[action]();
      } else if (_config.interval && _config.ride) {
        data.pause();
        data.cycle();
      }
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        Carousel.carouselInterface(this, config);
      });
    }
  }, {
    key: "dataApiClickHandler",
    value: function dataApiClickHandler(event) {
      var target = getElementFromSelector(this);

      if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _objectSpread({}, Manipulator.getDataAttributes(target), {}, Manipulator.getDataAttributes(this));

      var slideIndex = this.getAttribute('data-bs-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel.carouselInterface(target, config);

      if (slideIndex) {
        Carousel.getInstance(target).to(slideIndex);
      }

      event.preventDefault();
    }
  }]);

  return Carousel;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
  var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (var i = 0, len = carousels.length; i < len; i++) {
    Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
  }
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */

defineJQueryPlugin(Carousel);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$a = 'collapse';
var DATA_KEY$9 = 'bs.collapse';
var EVENT_KEY$9 = ".".concat(DATA_KEY$9);
var DATA_API_KEY$5 = '.data-api';
var Default$9 = {
  toggle: true,
  parent: null
};
var DefaultType$9 = {
  toggle: 'boolean',
  parent: '(null|element)'
};
var EVENT_SHOW$5 = "show".concat(EVENT_KEY$9);
var EVENT_SHOWN$5 = "shown".concat(EVENT_KEY$9);
var EVENT_HIDE$5 = "hide".concat(EVENT_KEY$9);
var EVENT_HIDDEN$5 = "hidden".concat(EVENT_KEY$9);
var EVENT_CLICK_DATA_API$4 = "click".concat(EVENT_KEY$9).concat(DATA_API_KEY$5);
var CLASS_NAME_SHOW$7 = 'show';
var CLASS_NAME_COLLAPSE = 'collapse';
var CLASS_NAME_COLLAPSING = 'collapsing';
var CLASS_NAME_COLLAPSED = 'collapsed';
var CLASS_NAME_DEEPER_CHILDREN = ":scope .".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE);
var CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
var WIDTH = 'width';
var HEIGHT = 'height';
var SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Collapse = /*#__PURE__*/function (_BaseComponent4) {
  _inherits(Collapse, _BaseComponent4);

  var _super4 = _createSuper(Collapse);

  function Collapse(element, config) {
    var _this8;

    _classCallCheck(this, Collapse);

    _this8 = _super4.call(this, element);
    _this8._isTransitioning = false;
    _this8._config = _this8._getConfig(config);
    _this8._triggerArray = [];
    var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

    for (var i = 0, len = toggleList.length; i < len; i++) {
      var elem = toggleList[i];
      var selector = getSelectorFromElement(elem);
      var filterElement = SelectorEngine.find(selector).filter(function (foundElem) {
        return foundElem === _this8._element;
      });

      if (selector !== null && filterElement.length) {
        _this8._selector = selector;

        _this8._triggerArray.push(elem);
      }
    }

    _this8._initializeChildren();

    if (!_this8._config.parent) {
      _this8._addAriaAndCollapsedClass(_this8._triggerArray, _this8._isShown());
    }

    if (_this8._config.toggle) {
      _this8.toggle();
    }

    return _this8;
  } // Getters


  _createClass(Collapse, [{
    key: "toggle",
    value: // Public
    function toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "show",
    value: function show() {
      var _this9 = this;

      if (this._isTransitioning || this._isShown()) {
        return;
      }

      var actives = [];
      var activesData;

      if (this._config.parent) {
        var children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
        actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(function (elem) {
          return !children.includes(elem);
        }); // remove children if greater depth
      }

      var container = SelectorEngine.findOne(this._selector);

      if (actives.length) {
        var tempActiveData = actives.find(function (elem) {
          return container !== elem;
        });
        activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

      if (startEvent.defaultPrevented) {
        return;
      }

      actives.forEach(function (elemActive) {
        if (container !== elemActive) {
          Collapse.getOrCreateInstance(elemActive, {
            toggle: false
          }).hide();
        }

        if (!activesData) {
          Data.set(elemActive, DATA_KEY$9, null);
        }
      });

      var dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      this._addAriaAndCollapsedClass(this._triggerArray, true);

      this._isTransitioning = true;

      var complete = function complete() {
        _this9._isTransitioning = false;

        _this9._element.classList.remove(CLASS_NAME_COLLAPSING);

        _this9._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

        _this9._element.style[dimension] = '';
        EventHandler.trigger(_this9._element, EVENT_SHOWN$5);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll".concat(capitalizedDimension);

      this._queueCallback(complete, this._element, true);

      this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this10 = this;

      if (this._isTransitioning || !this._isShown()) {
        return;
      }

      var startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

      if (startEvent.defaultPrevented) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
      reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

      var triggerArrayLength = this._triggerArray.length;

      for (var i = 0; i < triggerArrayLength; i++) {
        var trigger = this._triggerArray[i];
        var elem = getElementFromSelector(trigger);

        if (elem && !this._isShown(elem)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }

      this._isTransitioning = true;

      var complete = function complete() {
        _this10._isTransitioning = false;

        _this10._element.classList.remove(CLASS_NAME_COLLAPSING);

        _this10._element.classList.add(CLASS_NAME_COLLAPSE);

        EventHandler.trigger(_this10._element, EVENT_HIDDEN$5);
      };

      this._element.style[dimension] = '';

      this._queueCallback(complete, this._element, true);
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
      return element.classList.contains(CLASS_NAME_SHOW$7);
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread({}, Default$9, {}, Manipulator.getDataAttributes(this._element), {}, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      config.parent = getElement(config.parent);
      typeCheckConfig(NAME$a, config, DefaultType$9);
      return config;
    }
  }, {
    key: "_getDimension",
    value: function _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
  }, {
    key: "_initializeChildren",
    value: function _initializeChildren() {
      var _this11 = this;

      if (!this._config.parent) {
        return;
      }

      var children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(function (elem) {
        return !children.includes(elem);
      }).forEach(function (element) {
        var selected = getElementFromSelector(element);

        if (selected) {
          _this11._addAriaAndCollapsedClass([element], _this11._isShown(selected));
        }
      });
    }
  }, {
    key: "_addAriaAndCollapsedClass",
    value: function _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }

      triggerArray.forEach(function (elem) {
        if (isOpen) {
          elem.classList.remove(CLASS_NAME_COLLAPSED);
        } else {
          elem.classList.add(CLASS_NAME_COLLAPSED);
        }

        elem.setAttribute('aria-expanded', isOpen);
      });
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$9;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$a;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var _config = {};

        if (typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        var data = Collapse.getOrCreateInstance(this, _config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \\"".concat(config, "\\""));
          }

          data[config]();
        }
      });
    }
  }]);

  return Collapse;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
  }

  var selector = getSelectorFromElement(this);
  var selectorElements = SelectorEngine.find(selector);
  selectorElements.forEach(function (element) {
    Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */

defineJQueryPlugin(Collapse);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$9 = 'dropdown';
var DATA_KEY$8 = 'bs.dropdown';
var EVENT_KEY$8 = ".".concat(DATA_KEY$8);
var DATA_API_KEY$4 = '.data-api';
var ESCAPE_KEY$2 = 'Escape';
var SPACE_KEY = 'Space';
var TAB_KEY$1 = 'Tab';
var ARROW_UP_KEY = 'ArrowUp';
var ARROW_DOWN_KEY = 'ArrowDown';
var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

var REGEXP_KEYDOWN = new RegExp("".concat(ARROW_UP_KEY, "|").concat(ARROW_DOWN_KEY, "|").concat(ESCAPE_KEY$2));
var EVENT_HIDE$4 = "hide".concat(EVENT_KEY$8);
var EVENT_HIDDEN$4 = "hidden".concat(EVENT_KEY$8);
var EVENT_SHOW$4 = "show".concat(EVENT_KEY$8);
var EVENT_SHOWN$4 = "shown".concat(EVENT_KEY$8);
var EVENT_CLICK_DATA_API$3 = "click".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
var EVENT_KEYDOWN_DATA_API = "keydown".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
var EVENT_KEYUP_DATA_API = "keyup".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
var CLASS_NAME_SHOW$6 = 'show';
var CLASS_NAME_DROPUP = 'dropup';
var CLASS_NAME_DROPEND = 'dropend';
var CLASS_NAME_DROPSTART = 'dropstart';
var CLASS_NAME_NAVBAR = 'navbar';
var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
var SELECTOR_MENU = '.dropdown-menu';
var SELECTOR_NAVBAR_NAV = '.navbar-nav';
var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
var PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
var PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
var PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
var PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
var PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
var PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
var Default$8 = {
  offset: [0, 2],
  boundary: 'clippingParents',
  reference: 'toggle',
  display: 'dynamic',
  popperConfig: null,
  autoClose: true
};
var DefaultType$8 = {
  offset: '(array|string|function)',
  boundary: '(string|element)',
  reference: '(string|element|object)',
  display: 'string',
  popperConfig: '(null|object|function)',
  autoClose: '(boolean|string)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Dropdown = /*#__PURE__*/function (_BaseComponent5) {
  _inherits(Dropdown, _BaseComponent5);

  var _super5 = _createSuper(Dropdown);

  function Dropdown(element, config) {
    var _this12;

    _classCallCheck(this, Dropdown);

    _this12 = _super5.call(this, element);
    _this12._popper = null;
    _this12._config = _this12._getConfig(config);
    _this12._menu = _this12._getMenuElement();
    _this12._inNavbar = _this12._detectNavbar();
    return _this12;
  } // Getters


  _createClass(Dropdown, [{
    key: "toggle",
    value: // Public
    function toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
  }, {
    key: "show",
    value: function show() {
      if (isDisabled(this._element) || this._isShown(this._menu)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      }

      var parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

      if (this._inNavbar) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'none');
      } else {
        this._createPopper(parent);
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
        var _ref4;

        (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (elem) {
          return EventHandler.on(elem, 'mouseover', noop);
        });
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      this._menu.classList.add(CLASS_NAME_SHOW$6);

      this._element.classList.add(CLASS_NAME_SHOW$6);

      EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
    }
  }, {
    key: "hide",
    value: function hide() {
      if (isDisabled(this._element) || !this._isShown(this._menu)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };

      this._completeHide(relatedTarget);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this._popper) {
        this._popper.destroy();
      }

      _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
    }
  }, {
    key: "update",
    value: function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper) {
        this._popper.update();
      }
    } // Private

  }, {
    key: "_completeHide",
    value: function _completeHide(relatedTarget) {
      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

      if (hideEvent.defaultPrevented) {
        return;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
        var _ref5;

        (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children)).forEach(function (elem) {
          return EventHandler.off(elem, 'mouseover', noop);
        });
      }

      if (this._popper) {
        this._popper.destroy();
      }

      this._menu.classList.remove(CLASS_NAME_SHOW$6);

      this._element.classList.remove(CLASS_NAME_SHOW$6);

      this._element.setAttribute('aria-expanded', 'false');

      Manipulator.removeDataAttribute(this._menu, 'popper');
      EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread({}, this.constructor.Default, {}, Manipulator.getDataAttributes(this._element), {}, config);
      typeCheckConfig(NAME$9, config, this.constructor.DefaultType);

      if (_typeof(config.reference) === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError("".concat(NAME$9.toUpperCase(), ": Option \\"reference\\" provided type \\"object\\" without a required \\"getBoundingClientRect\\" method."));
      }

      return config;
    }
  }, {
    key: "_createPopper",
    value: function _createPopper(parent) {
      if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ === 'undefined') {
        throw new TypeError('Bootstrap\\'s dropdowns require Popper (https://popper.js.org)');
      }

      var referenceElement = this._element;

      if (this._config.reference === 'parent') {
        referenceElement = parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (_typeof(this._config.reference) === 'object') {
        referenceElement = this._config.reference;
      }

      var popperConfig = this._getPopperConfig();

      var isDisplayStatic = popperConfig.modifiers.find(function (modifier) {
        return modifier.name === 'applyStyles' && modifier.enabled === false;
      });
      this._popper = _popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"](referenceElement, this._menu, popperConfig);

      if (isDisplayStatic) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static');
      }
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
      return element.classList.contains(CLASS_NAME_SHOW$6);
    }
  }, {
    key: "_getMenuElement",
    value: function _getMenuElement() {
      return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }
  }, {
    key: "_getPlacement",
    value: function _getPlacement() {
      var parentDropdown = this._element.parentNode;

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      } // We need to trim the value because custom properties can also include spaces


      var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
  }, {
    key: "_detectNavbar",
    value: function _detectNavbar() {
      return this._element.closest(".".concat(CLASS_NAME_NAVBAR)) !== null;
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this13 = this;

      var offset = this._config.offset;

      if (typeof offset === 'string') {
        return offset.split(',').map(function (val) {
          return Number.parseInt(val, 10);
        });
      }

      if (typeof offset === 'function') {
        return function (popperData) {
          return offset(popperData, _this13._element);
        };
      }

      return offset;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig() {
      var defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }

      return _objectSpread({}, defaultBsPopperConfig, {}, typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
    }
  }, {
    key: "_selectMenuItem",
    value: function _selectMenuItem(_ref6) {
      var key = _ref6.key,
          target = _ref6.target;
      var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);

      if (!items.length) {
        return;
      } // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY


      getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$8;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$8;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$9;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Dropdown.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \\"".concat(config, "\\""));
        }

        data[config]();
      });
    }
  }, {
    key: "clearMenus",
    value: function clearMenus(event) {
      if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1)) {
        return;
      }

      var toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

      for (var i = 0, len = toggles.length; i < len; i++) {
        var context = Dropdown.getInstance(toggles[i]);

        if (!context || context._config.autoClose === false) {
          continue;
        }

        if (!context._isShown()) {
          continue;
        }

        var relatedTarget = {
          relatedTarget: context._element
        };

        if (event) {
          var composedPath = event.composedPath();
          var isMenuTarget = composedPath.includes(context._menu);

          if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
            continue;
          } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


          if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
            continue;
          }

          if (event.type === 'click') {
            relatedTarget.clickEvent = event;
          }
        }

        context._completeHide(relatedTarget);
      }
    }
  }, {
    key: "getParentFromElement",
    value: function getParentFromElement(element) {
      return getElementFromSelector(element) || element.parentNode;
    }
  }, {
    key: "dataApiKeydownHandler",
    value: function dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
        return;
      }

      var isActive = this.classList.contains(CLASS_NAME_SHOW$6);

      if (!isActive && event.key === ESCAPE_KEY$2) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (isDisabled(this)) {
        return;
      }

      var getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
      var instance = Dropdown.getOrCreateInstance(getToggleButton);

      if (event.key === ESCAPE_KEY$2) {
        instance.hide();
        return;
      }

      if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
        if (!isActive) {
          instance.show();
        }

        instance._selectMenuItem(event);

        return;
      }

      if (!isActive || event.key === SPACE_KEY) {
        Dropdown.clearMenus();
      }
    }
  }]);

  return Dropdown;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
  event.preventDefault();
  Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Dropdown to jQuery only if jQuery is present
 */

defineJQueryPlugin(Dropdown);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
var SELECTOR_STICKY_CONTENT = '.sticky-top';

var ScrollBarHelper = /*#__PURE__*/function () {
  function ScrollBarHelper() {
    _classCallCheck(this, ScrollBarHelper);

    this._element = document.body;
  }

  _createClass(ScrollBarHelper, [{
    key: "getWidth",
    value: function getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      var documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
  }, {
    key: "hide",
    value: function hide() {
      var width = this.getWidth();

      this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


      this._setElementAttributes(this._element, 'paddingRight', function (calculatedValue) {
        return calculatedValue + width;
      }); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


      this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', function (calculatedValue) {
        return calculatedValue + width;
      });

      this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', function (calculatedValue) {
        return calculatedValue - width;
      });
    }
  }, {
    key: "_disableOverFlow",
    value: function _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');

      this._element.style.overflow = 'hidden';
    }
  }, {
    key: "_setElementAttributes",
    value: function _setElementAttributes(selector, styleProp, callback) {
      var _this14 = this;

      var scrollbarWidth = this.getWidth();

      var manipulationCallBack = function manipulationCallBack(element) {
        if (element !== _this14._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }

        _this14._saveInitialAttribute(element, styleProp);

        var calculatedValue = window.getComputedStyle(element)[styleProp];
        element.style[styleProp] = "".concat(callback(Number.parseFloat(calculatedValue)), "px");
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }
  }, {
    key: "reset",
    value: function reset() {
      this._resetElementAttributes(this._element, 'overflow');

      this._resetElementAttributes(this._element, 'paddingRight');

      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
    }
  }, {
    key: "_saveInitialAttribute",
    value: function _saveInitialAttribute(element, styleProp) {
      var actualValue = element.style[styleProp];

      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProp, actualValue);
      }
    }
  }, {
    key: "_resetElementAttributes",
    value: function _resetElementAttributes(selector, styleProp) {
      var manipulationCallBack = function manipulationCallBack(element) {
        var value = Manipulator.getDataAttribute(element, styleProp);

        if (typeof value === 'undefined') {
          element.style.removeProperty(styleProp);
        } else {
          Manipulator.removeDataAttribute(element, styleProp);
          element.style[styleProp] = value;
        }
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }
  }, {
    key: "_applyManipulationCallback",
    value: function _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
      } else {
        SelectorEngine.find(selector, this._element).forEach(callBack);
      }
    }
  }, {
    key: "isOverflowing",
    value: function isOverflowing() {
      return this.getWidth() > 0;
    }
  }]);

  return ScrollBarHelper;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


var Default$7 = {
  className: 'modal-backdrop',
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  isAnimated: false,
  rootElement: 'body',
  // give the choice to place backdrop under different elements
  clickCallback: null
};
var DefaultType$7 = {
  className: 'string',
  isVisible: 'boolean',
  isAnimated: 'boolean',
  rootElement: '(element|string)',
  clickCallback: '(function|null)'
};
var NAME$8 = 'backdrop';
var CLASS_NAME_FADE$4 = 'fade';
var CLASS_NAME_SHOW$5 = 'show';
var EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME$8);

var Backdrop = /*#__PURE__*/function () {
  function Backdrop(config) {
    _classCallCheck(this, Backdrop);

    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  }

  _createClass(Backdrop, [{
    key: "show",
    value: function show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._append();

      if (this._config.isAnimated) {
        reflow(this._getElement());
      }

      this._getElement().classList.add(CLASS_NAME_SHOW$5);

      this._emulateAnimation(function () {
        execute(callback);
      });
    }
  }, {
    key: "hide",
    value: function hide(callback) {
      var _this15 = this;

      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._getElement().classList.remove(CLASS_NAME_SHOW$5);

      this._emulateAnimation(function () {
        _this15.dispose();

        execute(callback);
      });
    } // Private

  }, {
    key: "_getElement",
    value: function _getElement() {
      if (!this._element) {
        var backdrop = document.createElement('div');
        backdrop.className = this._config.className;

        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }

        this._element = backdrop;
      }

      return this._element;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread({}, Default$7, {}, _typeof(config) === 'object' ? config : {}); // use getElement() with the default "body" to get a fresh Element on each instantiation

      config.rootElement = getElement(config.rootElement);
      typeCheckConfig(NAME$8, config, DefaultType$7);
      return config;
    }
  }, {
    key: "_append",
    value: function _append() {
      var _this16 = this;

      if (this._isAppended) {
        return;
      }

      this._config.rootElement.append(this._getElement());

      EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, function () {
        execute(_this16._config.clickCallback);
      });
      this._isAppended = true;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (!this._isAppended) {
        return;
      }

      EventHandler.off(this._element, EVENT_MOUSEDOWN);

      this._element.remove();

      this._isAppended = false;
    }
  }, {
    key: "_emulateAnimation",
    value: function _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  }]);

  return Backdrop;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


var Default$6 = {
  trapElement: null,
  // The element to trap focus inside of
  autofocus: true
};
var DefaultType$6 = {
  trapElement: 'element',
  autofocus: 'boolean'
};
var NAME$7 = 'focustrap';
var DATA_KEY$7 = 'bs.focustrap';
var EVENT_KEY$7 = ".".concat(DATA_KEY$7);
var EVENT_FOCUSIN$1 = "focusin".concat(EVENT_KEY$7);
var EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY$7);
var TAB_KEY = 'Tab';
var TAB_NAV_FORWARD = 'forward';
var TAB_NAV_BACKWARD = 'backward';

var FocusTrap = /*#__PURE__*/function () {
  function FocusTrap(config) {
    _classCallCheck(this, FocusTrap);

    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  }

  _createClass(FocusTrap, [{
    key: "activate",
    value: function activate() {
      var _this17 = this;

      var _this$_config = this._config,
          trapElement = _this$_config.trapElement,
          autofocus = _this$_config.autofocus;

      if (this._isActive) {
        return;
      }

      if (autofocus) {
        trapElement.focus();
      }

      EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN$1, function (event) {
        return _this17._handleFocusin(event);
      });
      EventHandler.on(document, EVENT_KEYDOWN_TAB, function (event) {
        return _this17._handleKeydown(event);
      });
      this._isActive = true;
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      if (!this._isActive) {
        return;
      }

      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$7);
    } // Private

  }, {
    key: "_handleFocusin",
    value: function _handleFocusin(event) {
      var target = event.target;
      var trapElement = this._config.trapElement;

      if (target === document || target === trapElement || trapElement.contains(target)) {
        return;
      }

      var elements = SelectorEngine.focusableChildren(trapElement);

      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }

      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread({}, Default$6, {}, _typeof(config) === 'object' ? config : {});
      typeCheckConfig(NAME$7, config, DefaultType$6);
      return config;
    }
  }]);

  return FocusTrap;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


var NAME$6 = 'modal';
var DATA_KEY$6 = 'bs.modal';
var EVENT_KEY$6 = ".".concat(DATA_KEY$6);
var DATA_API_KEY$3 = '.data-api';
var ESCAPE_KEY$1 = 'Escape';
var Default$5 = {
  backdrop: true,
  keyboard: true,
  focus: true
};
var DefaultType$5 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean'
};
var EVENT_HIDE$3 = "hide".concat(EVENT_KEY$6);
var EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY$6);
var EVENT_HIDDEN$3 = "hidden".concat(EVENT_KEY$6);
var EVENT_SHOW$3 = "show".concat(EVENT_KEY$6);
var EVENT_SHOWN$3 = "shown".concat(EVENT_KEY$6);
var EVENT_RESIZE = "resize".concat(EVENT_KEY$6);
var EVENT_CLICK_DISMISS = "click.dismiss".concat(EVENT_KEY$6);
var EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss".concat(EVENT_KEY$6);
var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss".concat(EVENT_KEY$6);
var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat(EVENT_KEY$6);
var EVENT_CLICK_DATA_API$2 = "click".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
var CLASS_NAME_OPEN = 'modal-open';
var CLASS_NAME_FADE$3 = 'fade';
var CLASS_NAME_SHOW$4 = 'show';
var CLASS_NAME_STATIC = 'modal-static';
var OPEN_SELECTOR$1 = '.modal.show';
var SELECTOR_DIALOG = '.modal-dialog';
var SELECTOR_MODAL_BODY = '.modal-body';
var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Modal = /*#__PURE__*/function (_BaseComponent6) {
  _inherits(Modal, _BaseComponent6);

  var _super6 = _createSuper(Modal);

  function Modal(element, config) {
    var _this18;

    _classCallCheck(this, Modal);

    _this18 = _super6.call(this, element);
    _this18._config = _this18._getConfig(config);
    _this18._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, _this18._element);
    _this18._backdrop = _this18._initializeBackDrop();
    _this18._focustrap = _this18._initializeFocusTrap();
    _this18._isShown = false;
    _this18._ignoreBackdropClick = false;
    _this18._isTransitioning = false;
    _this18._scrollBar = new ScrollBarHelper();
    return _this18;
  } // Getters


  _createClass(Modal, [{
    key: "toggle",
    value: // Public
    function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
  }, {
    key: "show",
    value: function show(relatedTarget) {
      var _this19 = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget: relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;

      if (this._isAnimated()) {
        this._isTransitioning = true;
      }

      this._scrollBar.hide();

      document.body.classList.add(CLASS_NAME_OPEN);

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
        EventHandler.one(_this19._element, EVENT_MOUSEUP_DISMISS, function (event) {
          if (event.target === _this19._element) {
            _this19._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this19._showElement(relatedTarget);
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this20 = this;

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._isShown = false;

      var isAnimated = this._isAnimated();

      if (isAnimated) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      this._focustrap.deactivate();

      this._element.classList.remove(CLASS_NAME_SHOW$4);

      EventHandler.off(this._element, EVENT_CLICK_DISMISS);
      EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

      this._queueCallback(function () {
        return _this20._hideModal();
      }, this._element, isAnimated);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      [window, this._dialog].forEach(function (htmlElement) {
        return EventHandler.off(htmlElement, EVENT_KEY$6);
      });

      this._backdrop.dispose();

      this._focustrap.deactivate();

      _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this);
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate() {
      this._adjustDialog();
    } // Private

  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value
        isAnimated: this._isAnimated()
      });
    }
  }, {
    key: "_initializeFocusTrap",
    value: function _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread({}, Default$5, {}, Manipulator.getDataAttributes(this._element), {}, _typeof(config) === 'object' ? config : {});
      typeCheckConfig(NAME$6, config, DefaultType$5);
      return config;
    }
  }, {
    key: "_showElement",
    value: function _showElement(relatedTarget) {
      var _this21 = this;

      var isAnimated = this._isAnimated();

      var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.append(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.scrollTop = 0;

      if (modalBody) {
        modalBody.scrollTop = 0;
      }

      if (isAnimated) {
        reflow(this._element);
      }

      this._element.classList.add(CLASS_NAME_SHOW$4);

      var transitionComplete = function transitionComplete() {
        if (_this21._config.focus) {
          _this21._focustrap.activate();
        }

        _this21._isTransitioning = false;
        EventHandler.trigger(_this21._element, EVENT_SHOWN$3, {
          relatedTarget: relatedTarget
        });
      };

      this._queueCallback(transitionComplete, this._dialog, isAnimated);
    }
  }, {
    key: "_setEscapeEvent",
    value: function _setEscapeEvent() {
      var _this22 = this;

      if (this._isShown) {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function (event) {
          if (_this22._config.keyboard && event.key === ESCAPE_KEY$1) {
            event.preventDefault();

            _this22.hide();
          } else if (!_this22._config.keyboard && event.key === ESCAPE_KEY$1) {
            _this22._triggerBackdropTransition();
          }
        });
      } else {
        EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
      }
    }
  }, {
    key: "_setResizeEvent",
    value: function _setResizeEvent() {
      var _this23 = this;

      if (this._isShown) {
        EventHandler.on(window, EVENT_RESIZE, function () {
          return _this23._adjustDialog();
        });
      } else {
        EventHandler.off(window, EVENT_RESIZE);
      }
    }
  }, {
    key: "_hideModal",
    value: function _hideModal() {
      var _this24 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._backdrop.hide(function () {
        document.body.classList.remove(CLASS_NAME_OPEN);

        _this24._resetAdjustments();

        _this24._scrollBar.reset();

        EventHandler.trigger(_this24._element, EVENT_HIDDEN$3);
      });
    }
  }, {
    key: "_showBackdrop",
    value: function _showBackdrop(callback) {
      var _this25 = this;

      EventHandler.on(this._element, EVENT_CLICK_DISMISS, function (event) {
        if (_this25._ignoreBackdropClick) {
          _this25._ignoreBackdropClick = false;
          return;
        }

        if (event.target !== event.currentTarget) {
          return;
        }

        if (_this25._config.backdrop === true) {
          _this25.hide();
        } else if (_this25._config.backdrop === 'static') {
          _this25._triggerBackdropTransition();
        }
      });

      this._backdrop.show(callback);
    }
  }, {
    key: "_isAnimated",
    value: function _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
  }, {
    key: "_triggerBackdropTransition",
    value: function _triggerBackdropTransition() {
      var _this26 = this;

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

      if (hideEvent.defaultPrevented) {
        return;
      }

      var _this$_element = this._element,
          classList = _this$_element.classList,
          scrollHeight = _this$_element.scrollHeight,
          style = _this$_element.style;
      var isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

      if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
        return;
      }

      if (!isModalOverflowing) {
        style.overflowY = 'hidden';
      }

      classList.add(CLASS_NAME_STATIC);

      this._queueCallback(function () {
        classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          _this26._queueCallback(function () {
            style.overflowY = '';
          }, _this26._dialog);
        }
      }, this._dialog);

      this._element.focus();
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------

  }, {
    key: "_adjustDialog",
    value: function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      var scrollbarWidth = this._scrollBar.getWidth();

      var isBodyOverflowing = scrollbarWidth > 0;

      if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
        this._element.style.paddingLeft = "".concat(scrollbarWidth, "px");
      }

      if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
        this._element.style.paddingRight = "".concat(scrollbarWidth, "px");
      }
    }
  }, {
    key: "_resetAdjustments",
    value: function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$5;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$6;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = Modal.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \\"".concat(config, "\\""));
        }

        data[config](relatedTarget);
      });
    }
  }]);

  return Modal;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
  var _this27 = this;

  var target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  EventHandler.one(target, EVENT_SHOW$3, function (showEvent) {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$3, function () {
      if (isVisible(_this27)) {
        _this27.focus();
      }
    });
  }); // avoid conflict when clicking moddal toggler while another one is open

  var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

  if (allReadyOpen) {
    Modal.getInstance(allReadyOpen).hide();
  }

  var data = Modal.getOrCreateInstance(target);
  data.toggle(this);
});
enableDismissTrigger(Modal);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Modal to jQuery only if jQuery is present
 */

defineJQueryPlugin(Modal);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$5 = 'offcanvas';
var DATA_KEY$5 = 'bs.offcanvas';
var EVENT_KEY$5 = ".".concat(DATA_KEY$5);
var DATA_API_KEY$2 = '.data-api';
var EVENT_LOAD_DATA_API$1 = "load".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
var ESCAPE_KEY = 'Escape';
var Default$4 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
var DefaultType$4 = {
  backdrop: 'boolean',
  keyboard: 'boolean',
  scroll: 'boolean'
};
var CLASS_NAME_SHOW$3 = 'show';
var CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
var OPEN_SELECTOR = '.offcanvas.show';
var EVENT_SHOW$2 = "show".concat(EVENT_KEY$5);
var EVENT_SHOWN$2 = "shown".concat(EVENT_KEY$5);
var EVENT_HIDE$2 = "hide".concat(EVENT_KEY$5);
var EVENT_HIDDEN$2 = "hidden".concat(EVENT_KEY$5);
var EVENT_CLICK_DATA_API$1 = "click".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
var EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY$5);
var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Offcanvas = /*#__PURE__*/function (_BaseComponent7) {
  _inherits(Offcanvas, _BaseComponent7);

  var _super7 = _createSuper(Offcanvas);

  function Offcanvas(element, config) {
    var _this28;

    _classCallCheck(this, Offcanvas);

    _this28 = _super7.call(this, element);
    _this28._config = _this28._getConfig(config);
    _this28._isShown = false;
    _this28._backdrop = _this28._initializeBackDrop();
    _this28._focustrap = _this28._initializeFocusTrap();

    _this28._addEventListeners();

    return _this28;
  } // Getters


  _createClass(Offcanvas, [{
    key: "toggle",
    value: // Public
    function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
  }, {
    key: "show",
    value: function show(relatedTarget) {
      var _this29 = this;

      if (this._isShown) {
        return;
      }

      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;
      this._element.style.visibility = 'visible';

      this._backdrop.show();

      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.classList.add(CLASS_NAME_SHOW$3);

      var completeCallBack = function completeCallBack() {
        if (!_this29._config.scroll) {
          _this29._focustrap.activate();
        }

        EventHandler.trigger(_this29._element, EVENT_SHOWN$2, {
          relatedTarget: relatedTarget
        });
      };

      this._queueCallback(completeCallBack, this._element, true);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this30 = this;

      if (!this._isShown) {
        return;
      }

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._focustrap.deactivate();

      this._element.blur();

      this._isShown = false;

      this._element.classList.remove(CLASS_NAME_SHOW$3);

      this._backdrop.hide();

      var completeCallback = function completeCallback() {
        _this30._element.setAttribute('aria-hidden', true);

        _this30._element.removeAttribute('aria-modal');

        _this30._element.removeAttribute('role');

        _this30._element.style.visibility = 'hidden';

        if (!_this30._config.scroll) {
          new ScrollBarHelper().reset();
        }

        EventHandler.trigger(_this30._element, EVENT_HIDDEN$2);
      };

      this._queueCallback(completeCallback, this._element, true);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._backdrop.dispose();

      this._focustrap.deactivate();

      _get(_getPrototypeOf(Offcanvas.prototype), "dispose", this).call(this);
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread({}, Default$4, {}, Manipulator.getDataAttributes(this._element), {}, _typeof(config) === 'object' ? config : {});
      typeCheckConfig(NAME$5, config, DefaultType$4);
      return config;
    }
  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      var _this31 = this;

      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: this._config.backdrop,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: function clickCallback() {
          return _this31.hide();
        }
      });
    }
  }, {
    key: "_initializeFocusTrap",
    value: function _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this32 = this;

      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
        if (_this32._config.keyboard && event.key === ESCAPE_KEY) {
          _this32.hide();
        }
      });
    } // Static

  }], [{
    key: "NAME",
    get: function get() {
      return NAME$5;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$4;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Offcanvas.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError("No method named \\"".concat(config, "\\""));
        }

        data[config](this);
      });
    }
  }]);

  return Offcanvas;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
  var _this33 = this;

  var target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  EventHandler.one(target, EVENT_HIDDEN$2, function () {
    // focus on trigger when it is closed
    if (isVisible(_this33)) {
      _this33.focus();
    }
  }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

  var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

  if (allReadyOpen && allReadyOpen !== target) {
    Offcanvas.getInstance(allReadyOpen).hide();
  }

  var data = Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
  return SelectorEngine.find(OPEN_SELECTOR).forEach(function (el) {
    return Offcanvas.getOrCreateInstance(el).show();
  });
});
enableDismissTrigger(Offcanvas);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(Offcanvas);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

var DATA_URL_PATTERN = /^data:(?:image\\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\\/(?:mpeg|mp4|ogg|webm)|audio\\/(?:mp3|oga|ogg|opus));base64,[\\d+/a-z]+=*$/i;

var allowedAttribute = function allowedAttribute(attribute, allowedAttributeList) {
  var attributeName = attribute.nodeName.toLowerCase();

  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
    }

    return true;
  }

  var regExp = allowedAttributeList.filter(function (attributeRegex) {
    return attributeRegex instanceof RegExp;
  }); // Check if a regular expression validates the attribute.

  for (var i = 0, len = regExp.length; i < len; i++) {
    if (regExp[i].test(attributeName)) {
      return true;
    }
  }

  return false;
};

var DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};

function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
  var _ref7;

  if (!unsafeHtml.length) {
    return unsafeHtml;
  }

  if (sanitizeFn && typeof sanitizeFn === 'function') {
    return sanitizeFn(unsafeHtml);
  }

  var domParser = new window.DOMParser();
  var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');

  var elements = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(createdDocument.body.querySelectorAll('*')));

  var _loop = function _loop(i, len) {
    var _ref8;

    var element = elements[i];
    var elementName = element.nodeName.toLowerCase();

    if (!Object.keys(allowList).includes(elementName)) {
      element.remove();
      return "continue";
    }

    var attributeList = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(element.attributes));

    var allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
    attributeList.forEach(function (attribute) {
      if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
      }
    });
  };

  for (var i = 0, len = elements.length; i < len; i++) {
    var _ret = _loop(i, len);

    if (_ret === "continue") continue;
  }

  return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


var NAME$4 = 'tooltip';
var DATA_KEY$4 = 'bs.tooltip';
var EVENT_KEY$4 = ".".concat(DATA_KEY$4);
var CLASS_PREFIX$1 = 'bs-tooltip';
var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
var DefaultType$3 = {
  animation: 'boolean',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string',
  delay: '(number|object)',
  html: 'boolean',
  selector: '(string|boolean)',
  placement: '(string|function)',
  offset: '(array|string|function)',
  container: '(string|element|boolean)',
  fallbackPlacements: 'array',
  boundary: '(string|element)',
  customClass: '(string|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  allowList: 'object',
  popperConfig: '(null|object|function)'
};
var AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: isRTL() ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: isRTL() ? 'right' : 'left'
};
var Default$3 = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  selector: false,
  placement: 'top',
  offset: [0, 0],
  container: false,
  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
  boundary: 'clippingParents',
  customClass: '',
  sanitize: true,
  sanitizeFn: null,
  allowList: DefaultAllowlist,
  popperConfig: null
};
var Event$2 = {
  HIDE: "hide".concat(EVENT_KEY$4),
  HIDDEN: "hidden".concat(EVENT_KEY$4),
  SHOW: "show".concat(EVENT_KEY$4),
  SHOWN: "shown".concat(EVENT_KEY$4),
  INSERTED: "inserted".concat(EVENT_KEY$4),
  CLICK: "click".concat(EVENT_KEY$4),
  FOCUSIN: "focusin".concat(EVENT_KEY$4),
  FOCUSOUT: "focusout".concat(EVENT_KEY$4),
  MOUSEENTER: "mouseenter".concat(EVENT_KEY$4),
  MOUSELEAVE: "mouseleave".concat(EVENT_KEY$4)
};
var CLASS_NAME_FADE$2 = 'fade';
var CLASS_NAME_MODAL = 'modal';
var CLASS_NAME_SHOW$2 = 'show';
var HOVER_STATE_SHOW = 'show';
var HOVER_STATE_OUT = 'out';
var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
var SELECTOR_MODAL = ".".concat(CLASS_NAME_MODAL);
var EVENT_MODAL_HIDE = 'hide.bs.modal';
var TRIGGER_HOVER = 'hover';
var TRIGGER_FOCUS = 'focus';
var TRIGGER_CLICK = 'click';
var TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Tooltip = /*#__PURE__*/function (_BaseComponent8) {
  _inherits(Tooltip, _BaseComponent8);

  var _super8 = _createSuper(Tooltip);

  function Tooltip(element, config) {
    var _this34;

    _classCallCheck(this, Tooltip);

    if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ === 'undefined') {
      throw new TypeError('Bootstrap\\'s tooltips require Popper (https://popper.js.org)');
    }

    _this34 = _super8.call(this, element); // private

    _this34._isEnabled = true;
    _this34._timeout = 0;
    _this34._hoverState = '';
    _this34._activeTrigger = {};
    _this34._popper = null; // Protected

    _this34._config = _this34._getConfig(config);
    _this34.tip = null;

    _this34._setListeners();

    return _this34;
  } // Getters


  _createClass(Tooltip, [{
    key: "enable",
    value: // Public
    function enable() {
      this._isEnabled = true;
    }
  }, {
    key: "disable",
    value: function disable() {
      this._isEnabled = false;
    }
  }, {
    key: "toggleEnabled",
    value: function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
  }, {
    key: "toggle",
    value: function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var context = this._initializeOnDelegatedTarget(event);

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

      if (this.tip) {
        this.tip.remove();
      }

      this._disposePopper();

      _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
    }
  }, {
    key: "show",
    value: function show() {
      var _this35 = this;

      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }

      if (!(this.isWithContent() && this._isEnabled)) {
        return;
      }

      var showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
      var shadowRoot = findShadowRoot(this._element);
      var isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      } // A trick to recreate a tooltip in case a new title is given by using the NOT documented \`data-bs-original-title\`
      // This will be removed later in favor of a \`setContent\` method


      if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML) {
        this._disposePopper();

        this.tip.remove();
        this.tip = null;
      }

      var tip = this.getTipElement();
      var tipId = getUID(this.constructor.NAME);
      tip.setAttribute('id', tipId);

      this._element.setAttribute('aria-describedby', tipId);

      if (this._config.animation) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }

      var placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

      var attachment = this._getAttachment(placement);

      this._addAttachmentClass(attachment);

      var container = this._config.container;
      Data.set(tip, this.constructor.DATA_KEY, this);

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
      }

      if (this._popper) {
        this._popper.update();
      } else {
        this._popper = _popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"](this._element, tip, this._getPopperConfig(attachment));
      }

      tip.classList.add(CLASS_NAME_SHOW$2);

      var customClass = this._resolvePossibleFunction(this._config.customClass);

      if (customClass) {
        var _tip$classList;

        (_tip$classList = tip.classList).add.apply(_tip$classList, _toConsumableArray(customClass.split(' ')));
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement) {
        var _ref9;

        (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children)).forEach(function (element) {
          EventHandler.on(element, 'mouseover', noop);
        });
      }

      var complete = function complete() {
        var prevHoverState = _this35._hoverState;
        _this35._hoverState = null;
        EventHandler.trigger(_this35._element, _this35.constructor.Event.SHOWN);

        if (prevHoverState === HOVER_STATE_OUT) {
          _this35._leave(null, _this35);
        }
      };

      var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

      this._queueCallback(complete, this.tip, isAnimated);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this36 = this;

      if (!this._popper) {
        return;
      }

      var tip = this.getTipElement();

      var complete = function complete() {
        if (_this36._isWithActiveTrigger()) {
          return;
        }

        if (_this36._hoverState !== HOVER_STATE_SHOW) {
          tip.remove();
        }

        _this36._cleanTipClass();

        _this36._element.removeAttribute('aria-describedby');

        EventHandler.trigger(_this36._element, _this36.constructor.Event.HIDDEN);

        _this36._disposePopper();
      };

      var hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        var _ref10;

        (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children)).forEach(function (element) {
          return EventHandler.off(element, 'mouseover', noop);
        });
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

      this._queueCallback(complete, this.tip, isAnimated);

      this._hoverState = '';
    }
  }, {
    key: "update",
    value: function update() {
      if (this._popper !== null) {
        this._popper.update();
      }
    } // Protected

  }, {
    key: "isWithContent",
    value: function isWithContent() {
      return Boolean(this.getTitle());
    }
  }, {
    key: "getTipElement",
    value: function getTipElement() {
      if (this.tip) {
        return this.tip;
      }

      var element = document.createElement('div');
      element.innerHTML = this._config.template;
      var tip = element.children[0];
      this.setContent(tip);
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      this.tip = tip;
      return this.tip;
    }
  }, {
    key: "setContent",
    value: function setContent(tip) {
      this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
    }
  }, {
    key: "_sanitizeAndSetContent",
    value: function _sanitizeAndSetContent(template, content, selector) {
      var templateElement = SelectorEngine.findOne(selector, template);

      if (!content && templateElement) {
        templateElement.remove();
        return;
      } // we use append for html objects to maintain js events


      this.setElementContent(templateElement, content);
    }
  }, {
    key: "setElementContent",
    value: function setElementContent(element, content) {
      if (element === null) {
        return;
      }

      if (isElement(content)) {
        content = getElement(content); // content is a DOM node or a jQuery

        if (this._config.html) {
          if (content.parentNode !== element) {
            element.innerHTML = '';
            element.append(content);
          }
        } else {
          element.textContent = content.textContent;
        }

        return;
      }

      if (this._config.html) {
        if (this._config.sanitize) {
          content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
        }

        element.innerHTML = content;
      } else {
        element.textContent = content;
      }
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var title = this._element.getAttribute('data-bs-original-title') || this._config.title;

      return this._resolvePossibleFunction(title);
    }
  }, {
    key: "updateAttachment",
    value: function updateAttachment(attachment) {
      if (attachment === 'right') {
        return 'end';
      }

      if (attachment === 'left') {
        return 'start';
      }

      return attachment;
    } // Private

  }, {
    key: "_initializeOnDelegatedTarget",
    value: function _initializeOnDelegatedTarget(event, context) {
      return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this37 = this;

      var offset = this._config.offset;

      if (typeof offset === 'string') {
        return offset.split(',').map(function (val) {
          return Number.parseInt(val, 10);
        });
      }

      if (typeof offset === 'function') {
        return function (popperData) {
          return offset(popperData, _this37._element);
        };
      }

      return offset;
    }
  }, {
    key: "_resolvePossibleFunction",
    value: function _resolvePossibleFunction(content) {
      return typeof content === 'function' ? content.call(this._element) : content;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig(attachment) {
      var _this38 = this;

      var defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: ".".concat(this.constructor.NAME, "-arrow")
          }
        }, {
          name: 'onChange',
          enabled: true,
          phase: 'afterWrite',
          fn: function fn(data) {
            return _this38._handlePopperPlacementChange(data);
          }
        }],
        onFirstUpdate: function onFirstUpdate(data) {
          if (data.options.placement !== data.placement) {
            _this38._handlePopperPlacementChange(data);
          }
        }
      };
      return _objectSpread({}, defaultBsPopperConfig, {}, typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
    }
  }, {
    key: "_addAttachmentClass",
    value: function _addAttachmentClass(attachment) {
      this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(attachment)));
    }
  }, {
    key: "_getAttachment",
    value: function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this39 = this;

      var triggers = this._config.trigger.split(' ');

      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          EventHandler.on(_this39._element, _this39.constructor.Event.CLICK, _this39._config.selector, function (event) {
            return _this39.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this39.constructor.Event.MOUSEENTER : _this39.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this39.constructor.Event.MOUSELEAVE : _this39.constructor.Event.FOCUSOUT;
          EventHandler.on(_this39._element, eventIn, _this39._config.selector, function (event) {
            return _this39._enter(event);
          });
          EventHandler.on(_this39._element, eventOut, _this39._config.selector, function (event) {
            return _this39._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this39._element) {
          _this39.hide();
        }
      };

      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

      if (this._config.selector) {
        this._config = _objectSpread({}, this._config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    }
  }, {
    key: "_fixTitle",
    value: function _fixTitle() {
      var title = this._element.getAttribute('title');

      var originalTitleType = _typeof(this._element.getAttribute('data-bs-original-title'));

      if (title || originalTitleType !== 'string') {
        this._element.setAttribute('data-bs-original-title', title || '');

        if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
          this._element.setAttribute('aria-label', title);
        }

        this._element.setAttribute('title', '');
      }
    }
  }, {
    key: "_enter",
    value: function _enter(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context._config.delay || !context._config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context._config.delay.show);
    }
  }, {
    key: "_leave",
    value: function _leave(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context._config.delay || !context._config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context._config.delay.hide);
    }
  }, {
    key: "_isWithActiveTrigger",
    value: function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      var dataAttributes = Manipulator.getDataAttributes(this._element);
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread({}, this.constructor.Default, {}, dataAttributes, {}, _typeof(config) === 'object' && config ? config : {});
      config.container = config.container === false ? document.body : getElement(config.container);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
      }

      return config;
    }
  }, {
    key: "_getDelegateConfig",
    value: function _getDelegateConfig() {
      var config = {};

      for (var key in this._config) {
        if (this.constructor.Default[key] !== this._config[key]) {
          config[key] = this._config[key];
        }
      } // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // \`Object.fromEntries(keysWithDifferentValues)\`


      return config;
    }
  }, {
    key: "_cleanTipClass",
    value: function _cleanTipClass() {
      var tip = this.getTipElement();
      var basicClassPrefixRegex = new RegExp("(^|\\\\s)".concat(this._getBasicClassPrefix(), "\\\\S+"), 'g');
      var tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(function (token) {
          return token.trim();
        }).forEach(function (tClass) {
          return tip.classList.remove(tClass);
        });
      }
    }
  }, {
    key: "_getBasicClassPrefix",
    value: function _getBasicClassPrefix() {
      return CLASS_PREFIX$1;
    }
  }, {
    key: "_handlePopperPlacementChange",
    value: function _handlePopperPlacementChange(popperData) {
      var state = popperData.state;

      if (!state) {
        return;
      }

      this.tip = state.elements.popper;

      this._cleanTipClass();

      this._addAttachmentClass(this._getAttachment(state.placement));
    }
  }, {
    key: "_disposePopper",
    value: function _disposePopper() {
      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$3;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$4;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$2;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$3;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Tooltip.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \\"".concat(config, "\\""));
          }

          data[config]();
        }
      });
    }
  }]);

  return Tooltip;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */


defineJQueryPlugin(Tooltip);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$3 = 'popover';
var DATA_KEY$3 = 'bs.popover';
var EVENT_KEY$3 = ".".concat(DATA_KEY$3);
var CLASS_PREFIX = 'bs-popover';

var Default$2 = _objectSpread({}, Tooltip.Default, {
  placement: 'right',
  offset: [0, 8],
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
});

var DefaultType$2 = _objectSpread({}, Tooltip.DefaultType, {
  content: '(string|element|function)'
});

var Event$1 = {
  HIDE: "hide".concat(EVENT_KEY$3),
  HIDDEN: "hidden".concat(EVENT_KEY$3),
  SHOW: "show".concat(EVENT_KEY$3),
  SHOWN: "shown".concat(EVENT_KEY$3),
  INSERTED: "inserted".concat(EVENT_KEY$3),
  CLICK: "click".concat(EVENT_KEY$3),
  FOCUSIN: "focusin".concat(EVENT_KEY$3),
  FOCUSOUT: "focusout".concat(EVENT_KEY$3),
  MOUSEENTER: "mouseenter".concat(EVENT_KEY$3),
  MOUSELEAVE: "mouseleave".concat(EVENT_KEY$3)
};
var SELECTOR_TITLE = '.popover-header';
var SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Popover = /*#__PURE__*/function (_Tooltip) {
  _inherits(Popover, _Tooltip);

  var _super9 = _createSuper(Popover);

  function Popover() {
    _classCallCheck(this, Popover);

    return _super9.apply(this, arguments);
  }

  _createClass(Popover, [{
    key: "isWithContent",
    value: // Overrides
    function isWithContent() {
      return this.getTitle() || this._getContent();
    }
  }, {
    key: "setContent",
    value: function setContent(tip) {
      this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TITLE);

      this._sanitizeAndSetContent(tip, this._getContent(), SELECTOR_CONTENT);
    } // Private

  }, {
    key: "_getContent",
    value: function _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
  }, {
    key: "_getBasicClassPrefix",
    value: function _getBasicClassPrefix() {
      return CLASS_PREFIX;
    } // Static

  }], [{
    key: "Default",
    get: // Getters
    function get() {
      return Default$2;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$3;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$1;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$2;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Popover.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \\"".concat(config, "\\""));
          }

          data[config]();
        }
      });
    }
  }]);

  return Popover;
}(Tooltip);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Popover to jQuery only if jQuery is present
 */


defineJQueryPlugin(Popover);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$2 = 'scrollspy';
var DATA_KEY$2 = 'bs.scrollspy';
var EVENT_KEY$2 = ".".concat(DATA_KEY$2);
var DATA_API_KEY$1 = '.data-api';
var Default$1 = {
  offset: 10,
  method: 'auto',
  target: ''
};
var DefaultType$1 = {
  offset: 'number',
  method: 'string',
  target: '(string|element)'
};
var EVENT_ACTIVATE = "activate".concat(EVENT_KEY$2);
var EVENT_SCROLL = "scroll".concat(EVENT_KEY$2);
var EVENT_LOAD_DATA_API = "load".concat(EVENT_KEY$2).concat(DATA_API_KEY$1);
var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
var CLASS_NAME_ACTIVE$1 = 'active';
var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
var SELECTOR_NAV_LINKS = '.nav-link';
var SELECTOR_NAV_ITEMS = '.nav-item';
var SELECTOR_LIST_ITEMS = '.list-group-item';
var SELECTOR_LINK_ITEMS = "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS, ", .").concat(CLASS_NAME_DROPDOWN_ITEM);
var SELECTOR_DROPDOWN$1 = '.dropdown';
var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
var METHOD_OFFSET = 'offset';
var METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var ScrollSpy = /*#__PURE__*/function (_BaseComponent9) {
  _inherits(ScrollSpy, _BaseComponent9);

  var _super10 = _createSuper(ScrollSpy);

  function ScrollSpy(element, config) {
    var _this40;

    _classCallCheck(this, ScrollSpy);

    _this40 = _super10.call(this, element);
    _this40._scrollElement = _this40._element.tagName === 'BODY' ? window : _this40._element;
    _this40._config = _this40._getConfig(config);
    _this40._offsets = [];
    _this40._targets = [];
    _this40._activeTarget = null;
    _this40._scrollHeight = 0;
    EventHandler.on(_this40._scrollElement, EVENT_SCROLL, function () {
      return _this40._process();
    });

    _this40.refresh();

    _this40._process();

    return _this40;
  } // Getters


  _createClass(ScrollSpy, [{
    key: "refresh",
    value: // Public
    function refresh() {
      var _this41 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
      targets.map(function (element) {
        var targetSelector = getSelectorFromElement(element);
        var target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this41._offsets.push(item[0]);

        _this41._targets.push(item[1]);
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      EventHandler.off(this._scrollElement, EVENT_KEY$2);

      _get(_getPrototypeOf(ScrollSpy.prototype), "dispose", this).call(this);
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread({}, Default$1, {}, Manipulator.getDataAttributes(this._element), {}, _typeof(config) === 'object' && config ? config : {});
      config.target = getElement(config.target) || document.documentElement;
      typeCheckConfig(NAME$2, config, DefaultType$1);
      return config;
    }
  }, {
    key: "_getScrollTop",
    value: function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }
  }, {
    key: "_getScrollHeight",
    value: function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
  }, {
    key: "_getOffsetHeight",
    value: function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }
  }, {
    key: "_process",
    value: function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    }
  }, {
    key: "_activate",
    value: function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = SELECTOR_LINK_ITEMS.split(',').map(function (selector) {
        return "".concat(selector, "[data-bs-target=\\"").concat(target, "\\"],").concat(selector, "[href=\\"").concat(target, "\\"]");
      });
      var link = SelectorEngine.findOne(queries.join(','), this._config.target);
      link.classList.add(CLASS_NAME_ACTIVE$1);

      if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
      } else {
        SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(function (listGroup) {
          // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
          SelectorEngine.prev(listGroup, "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS)).forEach(function (item) {
            return item.classList.add(CLASS_NAME_ACTIVE$1);
          }); // Handle special case when .nav-link is inside .nav-item

          SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(function (navItem) {
            SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(function (item) {
              return item.classList.add(CLASS_NAME_ACTIVE$1);
            });
          });
        });
      }

      EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
  }, {
    key: "_clear",
    value: function _clear() {
      SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$1);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$1);
      });
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$1;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$2;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = ScrollSpy.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \\"".concat(config, "\\""));
        }

        data[config]();
      });
    }
  }]);

  return ScrollSpy;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
  SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (spy) {
    return new ScrollSpy(spy);
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ScrollSpy to jQuery only if jQuery is present
 */

defineJQueryPlugin(ScrollSpy);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$1 = 'tab';
var DATA_KEY$1 = 'bs.tab';
var EVENT_KEY$1 = ".".concat(DATA_KEY$1);
var DATA_API_KEY = '.data-api';
var EVENT_HIDE$1 = "hide".concat(EVENT_KEY$1);
var EVENT_HIDDEN$1 = "hidden".concat(EVENT_KEY$1);
var EVENT_SHOW$1 = "show".concat(EVENT_KEY$1);
var EVENT_SHOWN$1 = "shown".concat(EVENT_KEY$1);
var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY$1).concat(DATA_API_KEY);
var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
var CLASS_NAME_ACTIVE = 'active';
var CLASS_NAME_FADE$1 = 'fade';
var CLASS_NAME_SHOW$1 = 'show';
var SELECTOR_DROPDOWN = '.dropdown';
var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
var SELECTOR_ACTIVE = '.active';
var SELECTOR_ACTIVE_UL = ':scope > li > .active';
var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
var SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Tab = /*#__PURE__*/function (_BaseComponent10) {
  _inherits(Tab, _BaseComponent10);

  var _super11 = _createSuper(Tab);

  function Tab() {
    _classCallCheck(this, Tab);

    return _super11.apply(this, arguments);
  }

  _createClass(Tab, [{
    key: "show",
    value: // Public
    function show() {
      var _this42 = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
        return;
      }

      var previous;
      var target = getElementFromSelector(this._element);

      var listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
        previous = SelectorEngine.find(itemSelector, listElement);
        previous = previous[previous.length - 1];
      }

      var hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
        relatedTarget: this._element
      }) : null;
      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
        relatedTarget: previous
      });

      if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
        return;
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        EventHandler.trigger(previous, EVENT_HIDDEN$1, {
          relatedTarget: _this42._element
        });
        EventHandler.trigger(_this42._element, EVENT_SHOWN$1, {
          relatedTarget: previous
        });
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    } // Private

  }, {
    key: "_activate",
    value: function _activate(element, container, callback) {
      var _this43 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

      var complete = function complete() {
        return _this43._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        active.classList.remove(CLASS_NAME_SHOW$1);

        this._queueCallback(complete, element, true);
      } else {
        complete();
      }
    }
  }, {
    key: "_transitionComplete",
    value: function _transitionComplete(element, active, callback) {
      if (active) {
        active.classList.remove(CLASS_NAME_ACTIVE);
        var dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

        if (dropdownChild) {
          dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      element.classList.add(CLASS_NAME_ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$1)) {
        element.classList.add(CLASS_NAME_SHOW$1);
      }

      var parent = element.parentNode;

      if (parent && parent.nodeName === 'LI') {
        parent = parent.parentNode;
      }

      if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = element.closest(SELECTOR_DROPDOWN);

        if (dropdownElement) {
          SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(function (dropdown) {
            return dropdown.classList.add(CLASS_NAME_ACTIVE);
          });
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static

  }], [{
    key: "NAME",
    get: // Getters
    function get() {
      return NAME$1;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Tab.getOrCreateInstance(this);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \\"".concat(config, "\\""));
          }

          data[config]();
        }
      });
    }
  }]);

  return Tab;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  var data = Tab.getOrCreateInstance(this);
  data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */

defineJQueryPlugin(Tab);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'toast';
var DATA_KEY = 'bs.toast';
var EVENT_KEY = ".".concat(DATA_KEY);
var EVENT_MOUSEOVER = "mouseover".concat(EVENT_KEY);
var EVENT_MOUSEOUT = "mouseout".concat(EVENT_KEY);
var EVENT_FOCUSIN = "focusin".concat(EVENT_KEY);
var EVENT_FOCUSOUT = "focusout".concat(EVENT_KEY);
var EVENT_HIDE = "hide".concat(EVENT_KEY);
var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
var EVENT_SHOW = "show".concat(EVENT_KEY);
var EVENT_SHOWN = "shown".concat(EVENT_KEY);
var CLASS_NAME_FADE = 'fade';
var CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

var CLASS_NAME_SHOW = 'show';
var CLASS_NAME_SHOWING = 'showing';
var DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
var Default = {
  animation: true,
  autohide: true,
  delay: 5000
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Toast = /*#__PURE__*/function (_BaseComponent11) {
  _inherits(Toast, _BaseComponent11);

  var _super12 = _createSuper(Toast);

  function Toast(element, config) {
    var _this44;

    _classCallCheck(this, Toast);

    _this44 = _super12.call(this, element);
    _this44._config = _this44._getConfig(config);
    _this44._timeout = null;
    _this44._hasMouseInteraction = false;
    _this44._hasKeyboardInteraction = false;

    _this44._setListeners();

    return _this44;
  } // Getters


  _createClass(Toast, [{
    key: "show",
    value: // Public
    function show() {
      var _this45 = this;

      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }

      var complete = function complete() {
        _this45._element.classList.remove(CLASS_NAME_SHOWING);

        EventHandler.trigger(_this45._element, EVENT_SHOWN);

        _this45._maybeScheduleHide();
      };

      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOW);

      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this46 = this;

      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      var complete = function complete() {
        _this46._element.classList.add(CLASS_NAME_HIDE); // @deprecated


        _this46._element.classList.remove(CLASS_NAME_SHOWING);

        _this46._element.classList.remove(CLASS_NAME_SHOW);

        EventHandler.trigger(_this46._element, EVENT_HIDDEN);
      };

      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }

      _get(_getPrototypeOf(Toast.prototype), "dispose", this).call(this);
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread({}, Default, {}, Manipulator.getDataAttributes(this._element), {}, _typeof(config) === 'object' && config ? config : {});
      typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    }
  }, {
    key: "_maybeScheduleHide",
    value: function _maybeScheduleHide() {
      var _this47 = this;

      if (!this._config.autohide) {
        return;
      }

      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }

      this._timeout = setTimeout(function () {
        _this47.hide();
      }, this._config.delay);
    }
  }, {
    key: "_onInteraction",
    value: function _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          this._hasMouseInteraction = isInteracting;
          break;

        case 'focusin':
        case 'focusout':
          this._hasKeyboardInteraction = isInteracting;
          break;
      }

      if (isInteracting) {
        this._clearTimeout();

        return;
      }

      var nextElement = event.relatedTarget;

      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }

      this._maybeScheduleHide();
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this48 = this;

      EventHandler.on(this._element, EVENT_MOUSEOVER, function (event) {
        return _this48._onInteraction(event, true);
      });
      EventHandler.on(this._element, EVENT_MOUSEOUT, function (event) {
        return _this48._onInteraction(event, false);
      });
      EventHandler.on(this._element, EVENT_FOCUSIN, function (event) {
        return _this48._onInteraction(event, true);
      });
      EventHandler.on(this._element, EVENT_FOCUSOUT, function (event) {
        return _this48._onInteraction(event, false);
      });
    }
  }, {
    key: "_clearTimeout",
    value: function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static

  }], [{
    key: "DefaultType",
    get: function get() {
      return DefaultType;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Toast.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \\"".concat(config, "\\""));
          }

          data[config](this);
        }
      });
    }
  }]);

  return Toast;
}(BaseComponent);

enableDismissTrigger(Toast);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Toast to jQuery only if jQuery is present
 */

defineJQueryPlugin(Toast);
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3V0aWwvaW5kZXguanM/MGE3ZiIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2RvbS9ldmVudC1oYW5kbGVyLmpzP2JiMjciLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9kb20vZGF0YS5qcz9kYmUzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYmFzZS1jb21wb25lbnQuanM/MzYwMyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qcz83NjgwIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYWxlcnQuanM/ODAyNCIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2J1dHRvbi5qcz9kODQ4Iiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZG9tL21hbmlwdWxhdG9yLmpzPzVhZTIiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9kb20vc2VsZWN0b3ItZW5naW5lLmpzP2Y4N2YiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jYXJvdXNlbC5qcz9kODUyIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvY29sbGFwc2UuanM/NGM1OCIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2Ryb3Bkb3duLmpzP2VjMDQiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsL3Njcm9sbGJhci5qcz81YzdjIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdXRpbC9iYWNrZHJvcC5qcz81ODQzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdXRpbC9mb2N1c3RyYXAuanM/MjJhMiIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL21vZGFsLmpzP2U0Y2IiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9vZmZjYW52YXMuanM/MzIyNCIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3V0aWwvc2FuaXRpemVyLmpzPzE1NjEiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy90b29sdGlwLmpzP2IyNDkiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9wb3BvdmVyLmpzPzI4MzIiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9zY3JvbGxzcHkuanM/NjkwMiIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3RhYi5qcz8yYzllIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdG9hc3QuanM/ZWExMCJdLCJuYW1lcyI6WyJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJUUkFOU0lUSU9OX0VORCIsInRvVHlwZSIsIm9iaiIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJkb2N1bWVudCIsImdldFNlbGVjdG9yIiwiZWxlbWVudCIsInNlbGVjdG9yIiwiaHJlZkF0dHIiLCJnZXRTZWxlY3RvckZyb21FbGVtZW50IiwiZ2V0RWxlbWVudEZyb21TZWxlY3RvciIsImdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50Iiwid2luZG93IiwidHJhbnNpdGlvbkRlbGF5IiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJOdW1iZXIiLCJmbG9hdFRyYW5zaXRpb25EZWxheSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwiaXNFbGVtZW50IiwiZ2V0RWxlbWVudCIsInR5cGVDaGVja0NvbmZpZyIsIk9iamVjdCIsInByb3BlcnR5IiwiZXhwZWN0ZWRUeXBlcyIsImNvbmZpZ1R5cGVzIiwidmFsdWUiLCJjb25maWciLCJ2YWx1ZVR5cGUiLCJjb21wb25lbnROYW1lIiwiaXNWaXNpYmxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImlzRGlzYWJsZWQiLCJOb2RlIiwiZmluZFNoYWRvd1Jvb3QiLCJyb290Iiwibm9vcCIsInJlZmxvdyIsImdldGpRdWVyeSIsImpRdWVyeSIsIkRPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MiLCJvbkRPTUNvbnRlbnRMb2FkZWQiLCJjYWxsYmFjayIsImlzUlRMIiwiZGVmaW5lSlF1ZXJ5UGx1Z2luIiwicGx1Z2luIiwiJCIsIm5hbWUiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJleGVjdXRlIiwiZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiIsIndhaXRGb3JUcmFuc2l0aW9uIiwiZHVyYXRpb25QYWRkaW5nIiwiZW11bGF0ZWREdXJhdGlvbiIsImNhbGxlZCIsImhhbmRsZXIiLCJ0YXJnZXQiLCJ0cmFuc2l0aW9uRWxlbWVudCIsInNldFRpbWVvdXQiLCJnZXROZXh0QWN0aXZlRWxlbWVudCIsImluZGV4IiwibGlzdCIsImxpc3RMZW5ndGgiLCJzaG91bGRHZXROZXh0IiwibmFtZXNwYWNlUmVnZXgiLCJzdHJpcE5hbWVSZWdleCIsInN0cmlwVWlkUmVnZXgiLCJldmVudFJlZ2lzdHJ5IiwidWlkRXZlbnQiLCJjdXN0b21FdmVudHMiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsImN1c3RvbUV2ZW50c1JlZ2V4IiwibmF0aXZlRXZlbnRzIiwidWlkIiwiZ2V0VWlkRXZlbnQiLCJldmVudCIsIkV2ZW50SGFuZGxlciIsImZuIiwiZG9tRWxlbWVudHMiLCJpIiwiZGVsZWdhdGlvblNlbGVjdG9yIiwidWlkRXZlbnRMaXN0IiwibGVuIiwiZXZlbnRzIiwiZGVsZWdhdGlvbiIsIm9yaWdpbmFsSGFuZGxlciIsInR5cGVFdmVudCIsImdldFR5cGVFdmVudCIsImlzTmF0aXZlIiwiZGVsZWdhdGlvbkZuIiwid3JhcEZuIiwibm9ybWFsaXplUGFyYW1zIiwiZ2V0RXZlbnQiLCJoYW5kbGVycyIsInByZXZpb3VzRm4iLCJmaW5kSGFuZGxlciIsIm9yaWdpbmFsVHlwZUV2ZW50IiwiYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIiLCJib290c3RyYXBIYW5kbGVyIiwiQm9vbGVhbiIsInN0b3JlRWxlbWVudEV2ZW50IiwiaGFuZGxlcktleSIsInJlbW92ZUhhbmRsZXIiLCJvbiIsImFkZEhhbmRsZXIiLCJvbmUiLCJvZmYiLCJpbk5hbWVzcGFjZSIsImlzTmFtZXNwYWNlIiwiZWxlbWVudEV2ZW50IiwicmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzIiwia2V5SGFuZGxlcnMiLCJ0cmlnZ2VyIiwiYnViYmxlcyIsIm5hdGl2ZURpc3BhdGNoIiwiZGVmYXVsdFByZXZlbnRlZCIsImV2dCIsImpRdWVyeUV2ZW50IiwiY2FuY2VsYWJsZSIsImtleSIsImdldCIsImFyZ3MiLCJlbGVtZW50TWFwIiwic2V0IiwiaW5zdGFuY2VNYXAiLCJjb25zb2xlIiwiQXJyYXkiLCJyZW1vdmUiLCJWRVJTSU9OIiwiY29uc3RydWN0b3IiLCJEYXRhIiwiZGlzcG9zZSIsInByb3BlcnR5TmFtZSIsIl9xdWV1ZUNhbGxiYWNrIiwiaXNBbmltYXRlZCIsImdldEluc3RhbmNlIiwiZ2V0T3JDcmVhdGVJbnN0YW5jZSIsIk5BTUUiLCJEQVRBX0tFWSIsIkVWRU5UX0tFWSIsImVuYWJsZURpc21pc3NUcmlnZ2VyIiwibWV0aG9kIiwiY2xpY2tFdmVudCIsImNvbXBvbmVudCIsImluc3RhbmNlIiwiRVZFTlRfQ0xPU0UiLCJFVkVOVF9DTE9TRUQiLCJDTEFTU19OQU1FX0ZBREUiLCJDTEFTU19OQU1FX1NIT1ciLCJjbG9zZSIsImNsb3NlRXZlbnQiLCJfZGVzdHJveUVsZW1lbnQiLCJqUXVlcnlJbnRlcmZhY2UiLCJkYXRhIiwiQWxlcnQiLCJEQVRBX0FQSV9LRVkiLCJDTEFTU19OQU1FX0FDVElWRSIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCJ0b2dnbGUiLCJCdXR0b24iLCJidXR0b24iLCJ2YWwiLCJjaHIiLCJNYW5pcHVsYXRvciIsInNldERhdGFBdHRyaWJ1dGUiLCJub3JtYWxpemVEYXRhS2V5IiwicmVtb3ZlRGF0YUF0dHJpYnV0ZSIsImdldERhdGFBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInB1cmVLZXkiLCJub3JtYWxpemVEYXRhIiwiZ2V0RGF0YUF0dHJpYnV0ZSIsIm9mZnNldCIsInJlY3QiLCJ0b3AiLCJsZWZ0IiwicGFnZVhPZmZzZXQiLCJwb3NpdGlvbiIsIm9mZnNldExlZnQiLCJOT0RFX1RFWFQiLCJTZWxlY3RvckVuZ2luZSIsImZpbmQiLCJFbGVtZW50IiwiZmluZE9uZSIsImNoaWxkcmVuIiwiY2hpbGQiLCJwYXJlbnRzIiwiYW5jZXN0b3IiLCJwcmV2IiwicHJldmlvdXMiLCJuZXh0IiwiZm9jdXNhYmxlQ2hpbGRyZW4iLCJmb2N1c2FibGVzIiwiZWwiLCJBUlJPV19MRUZUX0tFWSIsIkFSUk9XX1JJR0hUX0tFWSIsIlRPVUNIRVZFTlRfQ09NUEFUX1dBSVQiLCJTV0lQRV9USFJFU0hPTEQiLCJEZWZhdWx0IiwiaW50ZXJ2YWwiLCJrZXlib2FyZCIsInNsaWRlIiwicGF1c2UiLCJ3cmFwIiwidG91Y2giLCJEZWZhdWx0VHlwZSIsIk9SREVSX05FWFQiLCJPUkRFUl9QUkVWIiwiRElSRUNUSU9OX0xFRlQiLCJESVJFQ1RJT05fUklHSFQiLCJLRVlfVE9fRElSRUNUSU9OIiwiRVZFTlRfU0xJREUiLCJFVkVOVF9TTElEIiwiRVZFTlRfS0VZRE9XTiIsIkVWRU5UX01PVVNFRU5URVIiLCJFVkVOVF9NT1VTRUxFQVZFIiwiRVZFTlRfVE9VQ0hTVEFSVCIsIkVWRU5UX1RPVUNITU9WRSIsIkVWRU5UX1RPVUNIRU5EIiwiRVZFTlRfUE9JTlRFUkRPV04iLCJFVkVOVF9QT0lOVEVSVVAiLCJFVkVOVF9EUkFHX1NUQVJUIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSIsIkNMQVNTX05BTUVfQ0FST1VTRUwiLCJDTEFTU19OQU1FX1NMSURFIiwiQ0xBU1NfTkFNRV9FTkQiLCJDTEFTU19OQU1FX1NUQVJUIiwiQ0xBU1NfTkFNRV9ORVhUIiwiQ0xBU1NfTkFNRV9QUkVWIiwiQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UIiwiU0VMRUNUT1JfQUNUSVZFIiwiU0VMRUNUT1JfQUNUSVZFX0lURU0iLCJTRUxFQ1RPUl9JVEVNIiwiU0VMRUNUT1JfSVRFTV9JTUciLCJTRUxFQ1RPUl9ORVhUX1BSRVYiLCJTRUxFQ1RPUl9JTkRJQ0FUT1JTIiwiU0VMRUNUT1JfSU5ESUNBVE9SIiwiU0VMRUNUT1JfREFUQV9TTElERSIsIlNFTEVDVE9SX0RBVEFfUklERSIsIlBPSU5URVJfVFlQRV9UT1VDSCIsIlBPSU5URVJfVFlQRV9QRU4iLCJuYXZpZ2F0b3IiLCJuZXh0V2hlblZpc2libGUiLCJjbGVhckludGVydmFsIiwiY3ljbGUiLCJzZXRJbnRlcnZhbCIsInRvIiwiYWN0aXZlSW5kZXgiLCJvcmRlciIsIl9nZXRDb25maWciLCJfaGFuZGxlU3dpcGUiLCJhYnNEZWx0YXgiLCJkaXJlY3Rpb24iLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJfYWRkVG91Y2hFdmVudExpc3RlbmVycyIsImhhc1BvaW50ZXJQZW5Ub3VjaCIsInN0YXJ0IiwibW92ZSIsImVuZCIsImNsZWFyVGltZW91dCIsIml0ZW1JbWciLCJfa2V5ZG93biIsIl9nZXRJdGVtSW5kZXgiLCJfZ2V0SXRlbUJ5T3JkZXIiLCJpc05leHQiLCJfdHJpZ2dlclNsaWRlRXZlbnQiLCJ0YXJnZXRJbmRleCIsImZyb21JbmRleCIsInJlbGF0ZWRUYXJnZXQiLCJmcm9tIiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJhY3RpdmVJbmRpY2F0b3IiLCJpbmRpY2F0b3JzIiwiX3VwZGF0ZUludGVydmFsIiwiZWxlbWVudEludGVydmFsIiwiX3NsaWRlIiwiYWN0aXZlRWxlbWVudCIsImFjdGl2ZUVsZW1lbnRJbmRleCIsIm5leHRFbGVtZW50IiwibmV4dEVsZW1lbnRJbmRleCIsImlzQ3ljbGluZyIsImRpcmVjdGlvbmFsQ2xhc3NOYW1lIiwib3JkZXJDbGFzc05hbWUiLCJldmVudERpcmVjdGlvbk5hbWUiLCJzbGlkZUV2ZW50IiwidHJpZ2dlclNsaWRFdmVudCIsImNvbXBsZXRlQ2FsbEJhY2siLCJfZGlyZWN0aW9uVG9PcmRlciIsIl9vcmRlclRvRGlyZWN0aW9uIiwiY2Fyb3VzZWxJbnRlcmZhY2UiLCJDYXJvdXNlbCIsIl9jb25maWciLCJhY3Rpb24iLCJkYXRhQXBpQ2xpY2tIYW5kbGVyIiwic2xpZGVJbmRleCIsImNhcm91c2VscyIsInBhcmVudCIsIkVWRU5UX1NIT1ciLCJFVkVOVF9TSE9XTiIsIkVWRU5UX0hJREUiLCJFVkVOVF9ISURERU4iLCJDTEFTU19OQU1FX0NPTExBUFNFIiwiQ0xBU1NfTkFNRV9DT0xMQVBTSU5HIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRUQiLCJDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiIsIkNMQVNTX05BTUVfSE9SSVpPTlRBTCIsIldJRFRIIiwiSEVJR0hUIiwiU0VMRUNUT1JfQUNUSVZFUyIsInRvZ2dsZUxpc3QiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZvdW5kRWxlbSIsInNob3ciLCJhY3RpdmVzIiwiY29udGFpbmVyIiwidGVtcEFjdGl2ZURhdGEiLCJhY3RpdmVzRGF0YSIsIkNvbGxhcHNlIiwic3RhcnRFdmVudCIsImVsZW1BY3RpdmUiLCJkaW1lbnNpb24iLCJjb21wbGV0ZSIsImNhcGl0YWxpemVkRGltZW5zaW9uIiwic2Nyb2xsU2l6ZSIsImhpZGUiLCJ0cmlnZ2VyQXJyYXlMZW5ndGgiLCJfaXNTaG93biIsIl9nZXREaW1lbnNpb24iLCJfaW5pdGlhbGl6ZUNoaWxkcmVuIiwic2VsZWN0ZWQiLCJfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwidHJpZ2dlckFycmF5Iiwic2VsZWN0b3JFbGVtZW50cyIsIkVTQ0FQRV9LRVkiLCJTUEFDRV9LRVkiLCJUQUJfS0VZIiwiQVJST1dfVVBfS0VZIiwiQVJST1dfRE9XTl9LRVkiLCJSSUdIVF9NT1VTRV9CVVRUT04iLCJSRUdFWFBfS0VZRE9XTiIsIkVWRU5UX0tFWURPV05fREFUQV9BUEkiLCJFVkVOVF9LRVlVUF9EQVRBX0FQSSIsIkNMQVNTX05BTUVfRFJPUFVQIiwiQ0xBU1NfTkFNRV9EUk9QRU5EIiwiQ0xBU1NfTkFNRV9EUk9QU1RBUlQiLCJDTEFTU19OQU1FX05BVkJBUiIsIlNFTEVDVE9SX01FTlUiLCJTRUxFQ1RPUl9OQVZCQVJfTkFWIiwiU0VMRUNUT1JfVklTSUJMRV9JVEVNUyIsIlBMQUNFTUVOVF9UT1AiLCJQTEFDRU1FTlRfVE9QRU5EIiwiUExBQ0VNRU5UX0JPVFRPTSIsIlBMQUNFTUVOVF9CT1RUT01FTkQiLCJQTEFDRU1FTlRfUklHSFQiLCJQTEFDRU1FTlRfTEVGVCIsImJvdW5kYXJ5IiwicmVmZXJlbmNlIiwiZGlzcGxheSIsInBvcHBlckNvbmZpZyIsImF1dG9DbG9zZSIsIl9lbGVtZW50Iiwic2hvd0V2ZW50IiwiRHJvcGRvd24iLCJ1cGRhdGUiLCJfY29tcGxldGVIaWRlIiwiaGlkZUV2ZW50IiwiX2NyZWF0ZVBvcHBlciIsInJlZmVyZW5jZUVsZW1lbnQiLCJpc0Rpc3BsYXlTdGF0aWMiLCJtb2RpZmllciIsIlBvcHBlciIsIl9nZXRNZW51RWxlbWVudCIsIl9nZXRQbGFjZW1lbnQiLCJwYXJlbnREcm9wZG93biIsImlzRW5kIiwiX2RldGVjdE5hdmJhciIsIl9nZXRPZmZzZXQiLCJwb3BwZXJEYXRhIiwiX2dldFBvcHBlckNvbmZpZyIsImRlZmF1bHRCc1BvcHBlckNvbmZpZyIsInBsYWNlbWVudCIsIm1vZGlmaWVycyIsIm9wdGlvbnMiLCJlbmFibGVkIiwiX3NlbGVjdE1lbnVJdGVtIiwiaXRlbXMiLCJjbGVhck1lbnVzIiwidG9nZ2xlcyIsImNvbnRleHQiLCJjb21wb3NlZFBhdGgiLCJpc01lbnVUYXJnZXQiLCJnZXRQYXJlbnRGcm9tRWxlbWVudCIsImRhdGFBcGlLZXlkb3duSGFuZGxlciIsImlzQWN0aXZlIiwiZ2V0VG9nZ2xlQnV0dG9uIiwiU0VMRUNUT1JfRklYRURfQ09OVEVOVCIsIlNFTEVDVE9SX1NUSUNLWV9DT05URU5UIiwiZ2V0V2lkdGgiLCJkb2N1bWVudFdpZHRoIiwid2lkdGgiLCJjYWxjdWxhdGVkVmFsdWUiLCJfZGlzYWJsZU92ZXJGbG93IiwiX3NldEVsZW1lbnRBdHRyaWJ1dGVzIiwic2Nyb2xsYmFyV2lkdGgiLCJtYW5pcHVsYXRpb25DYWxsQmFjayIsInJlc2V0IiwiX3NhdmVJbml0aWFsQXR0cmlidXRlIiwiYWN0dWFsVmFsdWUiLCJfcmVzZXRFbGVtZW50QXR0cmlidXRlcyIsIl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrIiwiY2FsbEJhY2siLCJpc092ZXJmbG93aW5nIiwiY2xhc3NOYW1lIiwicm9vdEVsZW1lbnQiLCJjbGlja0NhbGxiYWNrIiwiRVZFTlRfTU9VU0VET1dOIiwiX2dldEVsZW1lbnQiLCJiYWNrZHJvcCIsIl9hcHBlbmQiLCJfZW11bGF0ZUFuaW1hdGlvbiIsInRyYXBFbGVtZW50IiwiYXV0b2ZvY3VzIiwiRVZFTlRfRk9DVVNJTiIsIkVWRU5UX0tFWURPV05fVEFCIiwiVEFCX05BVl9GT1JXQVJEIiwiVEFCX05BVl9CQUNLV0FSRCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsIl9oYW5kbGVGb2N1c2luIiwiZWxlbWVudHMiLCJfaGFuZGxlS2V5ZG93biIsImZvY3VzIiwiRVZFTlRfSElERV9QUkVWRU5URUQiLCJFVkVOVF9SRVNJWkUiLCJFVkVOVF9DTElDS19ESVNNSVNTIiwiRVZFTlRfS0VZRE9XTl9ESVNNSVNTIiwiRVZFTlRfTU9VU0VVUF9ESVNNSVNTIiwiRVZFTlRfTU9VU0VET1dOX0RJU01JU1MiLCJDTEFTU19OQU1FX09QRU4iLCJDTEFTU19OQU1FX1NUQVRJQyIsIk9QRU5fU0VMRUNUT1IiLCJTRUxFQ1RPUl9ESUFMT0ciLCJTRUxFQ1RPUl9NT0RBTF9CT0RZIiwiaHRtbEVsZW1lbnQiLCJoYW5kbGVVcGRhdGUiLCJfaW5pdGlhbGl6ZUJhY2tEcm9wIiwiX2luaXRpYWxpemVGb2N1c1RyYXAiLCJfc2hvd0VsZW1lbnQiLCJtb2RhbEJvZHkiLCJ0cmFuc2l0aW9uQ29tcGxldGUiLCJfc2V0RXNjYXBlRXZlbnQiLCJfc2V0UmVzaXplRXZlbnQiLCJfaGlkZU1vZGFsIiwiX3Nob3dCYWNrZHJvcCIsIl9pc0FuaW1hdGVkIiwiX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24iLCJzdHlsZSIsImlzTW9kYWxPdmVyZmxvd2luZyIsInNjcm9sbEhlaWdodCIsImNsYXNzTGlzdCIsIl9hZGp1c3REaWFsb2ciLCJpc0JvZHlPdmVyZmxvd2luZyIsIl9yZXNldEFkanVzdG1lbnRzIiwiTW9kYWwiLCJhbGxSZWFkeU9wZW4iLCJzY3JvbGwiLCJDTEFTU19OQU1FX0JBQ0tEUk9QIiwiY29tcGxldGVDYWxsYmFjayIsIk9mZmNhbnZhcyIsInVyaUF0dHJpYnV0ZXMiLCJBUklBX0FUVFJJQlVURV9QQVRURVJOIiwiU0FGRV9VUkxfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJhbGxvd2VkQXR0cmlidXRlIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZSIsImFsbG93ZWRBdHRyaWJ1dGVMaXN0IiwicmVnRXhwIiwiYXR0cmlidXRlUmVnZXgiLCJEZWZhdWx0QWxsb3dsaXN0IiwiYSIsImFyZWEiLCJiIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImltZyIsImxpIiwib2wiLCJwIiwicHJlIiwicyIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsInVuc2FmZUh0bWwiLCJzYW5pdGl6ZUZuIiwiZG9tUGFyc2VyIiwiY3JlYXRlZERvY3VtZW50IiwiZWxlbWVudE5hbWUiLCJhdHRyaWJ1dGVMaXN0IiwiYWxsb3dlZEF0dHJpYnV0ZXMiLCJhbGxvd0xpc3QiLCJDTEFTU19QUkVGSVgiLCJESVNBTExPV0VEX0FUVFJJQlVURVMiLCJhbmltYXRpb24iLCJ0ZW1wbGF0ZSIsInRpdGxlIiwiZGVsYXkiLCJodG1sIiwiZmFsbGJhY2tQbGFjZW1lbnRzIiwiY3VzdG9tQ2xhc3MiLCJzYW5pdGl6ZSIsIkF0dGFjaG1lbnRNYXAiLCJBVVRPIiwiVE9QIiwiUklHSFQiLCJCT1RUT00iLCJMRUZUIiwiRXZlbnQiLCJISURFIiwiSElEREVOIiwiU0hPVyIsIlNIT1dOIiwiSU5TRVJURUQiLCJDTElDSyIsIkZPQ1VTSU4iLCJGT0NVU09VVCIsIk1PVVNFRU5URVIiLCJNT1VTRUxFQVZFIiwiQ0xBU1NfTkFNRV9NT0RBTCIsIkhPVkVSX1NUQVRFX1NIT1ciLCJIT1ZFUl9TVEFURV9PVVQiLCJTRUxFQ1RPUl9UT09MVElQX0lOTkVSIiwiU0VMRUNUT1JfTU9EQUwiLCJFVkVOVF9NT0RBTF9ISURFIiwiVFJJR0dFUl9IT1ZFUiIsIlRSSUdHRVJfRk9DVVMiLCJUUklHR0VSX0NMSUNLIiwiVFJJR0dFUl9NQU5VQUwiLCJlbmFibGUiLCJkaXNhYmxlIiwidG9nZ2xlRW5hYmxlZCIsInNoYWRvd1Jvb3QiLCJpc0luVGhlRG9tIiwidGlwIiwidGlwSWQiLCJhdHRhY2htZW50IiwicHJldkhvdmVyU3RhdGUiLCJpc1dpdGhDb250ZW50IiwiZ2V0VGlwRWxlbWVudCIsInNldENvbnRlbnQiLCJfc2FuaXRpemVBbmRTZXRDb250ZW50IiwidGVtcGxhdGVFbGVtZW50Iiwic2V0RWxlbWVudENvbnRlbnQiLCJjb250ZW50Iiwic2FuaXRpemVIdG1sIiwiZ2V0VGl0bGUiLCJ1cGRhdGVBdHRhY2htZW50IiwiX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldCIsIl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbiIsInBoYXNlIiwib25GaXJzdFVwZGF0ZSIsIl9hZGRBdHRhY2htZW50Q2xhc3MiLCJfZ2V0QXR0YWNobWVudCIsIl9zZXRMaXN0ZW5lcnMiLCJ0cmlnZ2VycyIsImV2ZW50SW4iLCJldmVudE91dCIsIl9maXhUaXRsZSIsIm9yaWdpbmFsVGl0bGVUeXBlIiwiX2VudGVyIiwiX2xlYXZlIiwiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCJkYXRhQXR0cmlidXRlcyIsImRhdGFBdHRyIiwiX2dldERlbGVnYXRlQ29uZmlnIiwiX2NsZWFuVGlwQ2xhc3MiLCJiYXNpY0NsYXNzUHJlZml4UmVnZXgiLCJ0YWJDbGFzcyIsInRva2VuIiwidENsYXNzIiwiX2dldEJhc2ljQ2xhc3NQcmVmaXgiLCJfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlIiwic3RhdGUiLCJfZGlzcG9zZVBvcHBlciIsIlRvb2x0aXAiLCJTRUxFQ1RPUl9USVRMRSIsIlNFTEVDVE9SX0NPTlRFTlQiLCJfZ2V0Q29udGVudCIsIlBvcG92ZXIiLCJFVkVOVF9BQ1RJVkFURSIsIkVWRU5UX1NDUk9MTCIsIkNMQVNTX05BTUVfRFJPUERPV05fSVRFTSIsIlNFTEVDVE9SX0RBVEFfU1BZIiwiU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAiLCJTRUxFQ1RPUl9OQVZfTElOS1MiLCJTRUxFQ1RPUl9OQVZfSVRFTVMiLCJTRUxFQ1RPUl9MSVNUX0lURU1TIiwiU0VMRUNUT1JfTElOS19JVEVNUyIsIlNFTEVDVE9SX0RST1BET1dOIiwiU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwiTUVUSE9EX09GRlNFVCIsIk1FVEhPRF9QT1NJVElPTiIsInJlZnJlc2giLCJhdXRvTWV0aG9kIiwib2Zmc2V0TWV0aG9kIiwib2Zmc2V0QmFzZSIsInRhcmdldHMiLCJ0YXJnZXRTZWxlY3RvciIsInRhcmdldEJDUiIsIml0ZW0iLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsIl9nZXRPZmZzZXRIZWlnaHQiLCJfcHJvY2VzcyIsInNjcm9sbFRvcCIsIm1heFNjcm9sbCIsImlzQWN0aXZlVGFyZ2V0IiwiX2FjdGl2YXRlIiwicXVlcmllcyIsImxpbmsiLCJsaXN0R3JvdXAiLCJuYXZJdGVtIiwiX2NsZWFyIiwibm9kZSIsIlNjcm9sbFNweSIsInNweSIsIkNMQVNTX05BTUVfRFJPUERPV05fTUVOVSIsIlNFTEVDVE9SX0FDVElWRV9VTCIsIlNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRCIsImxpc3RFbGVtZW50IiwiaXRlbVNlbGVjdG9yIiwiYWN0aXZlRWxlbWVudHMiLCJhY3RpdmUiLCJpc1RyYW5zaXRpb25pbmciLCJfdHJhbnNpdGlvbkNvbXBsZXRlIiwiZHJvcGRvd25DaGlsZCIsImRyb3Bkb3duRWxlbWVudCIsImRyb3Bkb3duIiwiVGFiIiwiRVZFTlRfTU9VU0VPVkVSIiwiRVZFTlRfTU9VU0VPVVQiLCJFVkVOVF9GT0NVU09VVCIsIkNMQVNTX05BTUVfSElERSIsIkNMQVNTX05BTUVfU0hPV0lORyIsImF1dG9oaWRlIiwiX21heWJlU2NoZWR1bGVIaWRlIiwiX29uSW50ZXJhY3Rpb24iLCJfY2xlYXJUaW1lb3V0IiwiVG9hc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBYjtBQUNBLElBQU1DLHVCQUF1QixHQUE3QjtBQUNBLElBQU1DLGNBQWMsR0FBcEIsZ0IsQ0FBQTs7QUFHQSxJQUFNQyxNQUFNLEdBQUdDLFNBQVRELE1BQVNDLElBQUcsRUFBSTtBQUNwQixNQUFJQSxHQUFHLEtBQUhBLFFBQWdCQSxHQUFHLEtBQXZCLFdBQXVDO0FBQ3JDO0FBQ0Q7O0FBRUQsU0FBTyw4Q0FBUCxXQUFPLEVBQVA7QUFMRjtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1DLE1BQU0sR0FBR0MsU0FBVEQsTUFBU0MsT0FBTSxFQUFJO0FBQ3ZCLEtBQUc7QUFDREEsVUFBTSxJQUFJQyxJQUFJLENBQUpBLE1BQVdBLElBQUksQ0FBSkEsV0FBckJELE9BQVVDLENBQVZEO0FBREYsV0FFU0UsUUFBUSxDQUFSQSxlQUZULE1BRVNBLENBRlQ7O0FBSUE7QUFMRjs7QUFRQSxJQUFNQyxXQUFXLEdBQUdDLFNBQWRELFdBQWNDLFFBQU8sRUFBSTtBQUM3QixNQUFJQyxRQUFRLEdBQUdELE9BQU8sQ0FBUEEsYUFBZixnQkFBZUEsQ0FBZjs7QUFFQSxNQUFJLGFBQWFDLFFBQVEsS0FBekIsS0FBbUM7QUFDakMsUUFBSUMsUUFBUSxHQUFHRixPQUFPLENBQVBBLGFBRGtCLE1BQ2xCQSxDQUFmLENBRGlDO0FBSWpDO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLGFBQWMsQ0FBQ0UsUUFBUSxDQUFSQSxTQUFELEdBQUNBLENBQUQsSUFBMkIsQ0FBQ0EsUUFBUSxDQUFSQSxXQUE5QyxHQUE4Q0EsQ0FBOUMsRUFBeUU7QUFDdkU7QUFSK0I7OztBQVlqQyxRQUFJQSxRQUFRLENBQVJBLGlCQUEwQixDQUFDQSxRQUFRLENBQVJBLFdBQS9CLEdBQStCQSxDQUEvQixFQUF5RDtBQUN2REEsY0FBUSxjQUFPQSxRQUFRLENBQVJBLFdBQWZBLENBQWVBLENBQVAsQ0FBUkE7QUFDRDs7QUFFREQsWUFBUSxHQUFHQyxRQUFRLElBQUlBLFFBQVEsS0FBcEJBLE1BQStCQSxRQUFRLENBQXZDQSxJQUErQkEsRUFBL0JBLEdBQVhEO0FBQ0Q7O0FBRUQ7QUF0QkY7O0FBeUJBLElBQU1FLHNCQUFzQixHQUFHSCxTQUF6Qkcsc0JBQXlCSCxRQUFPLEVBQUk7QUFDeEMsTUFBTUMsUUFBUSxHQUFHRixXQUFXLENBQTVCLE9BQTRCLENBQTVCOztBQUVBLGdCQUFjO0FBQ1osV0FBT0QsUUFBUSxDQUFSQSxxQ0FBUDtBQUNEOztBQUVEO0FBUEY7O0FBVUEsSUFBTU0sc0JBQXNCLEdBQUdKLFNBQXpCSSxzQkFBeUJKLFFBQU8sRUFBSTtBQUN4QyxNQUFNQyxRQUFRLEdBQUdGLFdBQVcsQ0FBNUIsT0FBNEIsQ0FBNUI7QUFFQSxTQUFPRSxRQUFRLEdBQUdILFFBQVEsQ0FBUkEsY0FBSCxRQUFHQSxDQUFILEdBQWY7QUFIRjs7QUFNQSxJQUFNTyxnQ0FBZ0MsR0FBR0wsU0FBbkNLLGdDQUFtQ0wsUUFBTyxFQUFJO0FBQ2xELE1BQUksQ0FBSixTQUFjO0FBQ1o7QUFGZ0Q7OztBQUFBLDhCQU1KTSxNQUFNLENBQU5BLGlCQUE5QyxPQUE4Q0EsQ0FOSTtBQUFBLE1BTTlDLGtCQU44Qyx5QkFNOUMsa0JBTjhDO0FBQUEsTUFNeEJDLGVBTndCLHlCQU14QkEsZUFOd0I7O0FBUWxELE1BQU1DLHVCQUF1QixHQUFHQyxNQUFNLENBQU5BLFdBQWhDLGtCQUFnQ0EsQ0FBaEM7QUFDQSxNQUFNQyxvQkFBb0IsR0FBR0QsTUFBTSxDQUFOQSxXQVRxQixlQVNyQkEsQ0FBN0IsQ0FUa0Q7O0FBWWxELE1BQUksNEJBQTRCLENBQWhDLHNCQUF1RDtBQUNyRDtBQWJnRDs7O0FBaUJsREUsb0JBQWtCLEdBQUdBLGtCQUFrQixDQUFsQkEsV0FBckJBLENBQXFCQSxDQUFyQkE7QUFDQUosaUJBQWUsR0FBR0EsZUFBZSxDQUFmQSxXQUFsQkEsQ0FBa0JBLENBQWxCQTtBQUVBLFNBQU8sQ0FBQ0UsTUFBTSxDQUFOQSxpQ0FBd0NBLE1BQU0sQ0FBTkEsV0FBekMsZUFBeUNBLENBQXpDLElBQVA7QUFwQkY7O0FBdUJBLElBQU1HLG9CQUFvQixHQUFHWixTQUF2Qlksb0JBQXVCWixRQUFPLEVBQUk7QUFDdENBLFNBQU8sQ0FBUEEsY0FBc0IsVUFBdEJBLGNBQXNCLENBQXRCQTtBQURGOztBQUlBLElBQU1hLFNBQVMsR0FBR25CLFNBQVptQixTQUFZbkIsSUFBRyxFQUFJO0FBQ3ZCLE1BQUksUUFBUSxpQkFBWixVQUFxQztBQUNuQztBQUNEOztBQUVELE1BQUksT0FBT0EsR0FBRyxDQUFWLFdBQUosYUFBdUM7QUFDckNBLE9BQUcsR0FBR0EsR0FBRyxDQUFUQSxDQUFTLENBQVRBO0FBQ0Q7O0FBRUQsU0FBTyxPQUFPQSxHQUFHLENBQVYsYUFBUDtBQVRGOztBQVlBLElBQU1vQixVQUFVLEdBQUdwQixTQUFib0IsVUFBYXBCLElBQUcsRUFBSTtBQUN4QixNQUFJbUIsU0FBUyxDQUFiLEdBQWEsQ0FBYixFQUFvQjtBQUFFO0FBQ3BCLFdBQU9uQixHQUFHLENBQUhBLFNBQWFBLEdBQUcsQ0FBaEJBLENBQWdCLENBQWhCQSxHQUFQO0FBQ0Q7O0FBRUQsTUFBSSwyQkFBMkJBLEdBQUcsQ0FBSEEsU0FBL0IsR0FBK0M7QUFDN0MsV0FBT0ksUUFBUSxDQUFSQSxjQUFQLEdBQU9BLENBQVA7QUFDRDs7QUFFRDtBQVRGOztBQVlBLElBQU1pQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLHFDQUF3QztBQUM5REMsUUFBTSxDQUFOQSwwQkFBaUNDLGtCQUFRLEVBQUk7QUFDM0MsUUFBTUMsYUFBYSxHQUFHQyxXQUFXLENBQWpDLFFBQWlDLENBQWpDO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQXBCLFFBQW9CLENBQXBCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHRixLQUFLLElBQUlQLFNBQVMsQ0FBbEJPLEtBQWtCLENBQWxCQSxlQUF3QzNCLE1BQU0sQ0FBaEUsS0FBZ0UsQ0FBaEU7O0FBRUEsUUFBSSxDQUFDLCtCQUFMLFNBQUssQ0FBTCxFQUFnRDtBQUM5QyxZQUFNLHdCQUNEOEIsYUFBYSxDQUFiQSxhQURDLHdCQUN1Q04sUUFEdkMsZ0NBQ21FSyxTQURuRSxvQ0FBTixhQUFNLFNBQU47QUFHRDtBQVRITjtBQURGOztBQWNBLElBQU1RLFNBQVMsR0FBR3hCLFNBQVp3QixTQUFZeEIsUUFBTyxFQUFJO0FBQzNCLE1BQUksQ0FBQ2EsU0FBUyxDQUFWLE9BQVUsQ0FBVixJQUF1QmIsT0FBTyxDQUFQQSw0QkFBM0IsR0FBa0U7QUFDaEU7QUFDRDs7QUFFRCxTQUFPeUIsZ0JBQWdCLENBQWhCQSxPQUFnQixDQUFoQkEsb0NBQVA7QUFMRjs7QUFRQSxJQUFNQyxVQUFVLEdBQUcxQixTQUFiMEIsVUFBYTFCLFFBQU8sRUFBSTtBQUM1QixNQUFJLFlBQVlBLE9BQU8sQ0FBUEEsYUFBcUIyQixJQUFJLENBQXpDLGNBQXdEO0FBQ3REO0FBQ0Q7O0FBRUQsTUFBSTNCLE9BQU8sQ0FBUEEsbUJBQUosVUFBSUEsQ0FBSixFQUE0QztBQUMxQztBQUNEOztBQUVELE1BQUksT0FBT0EsT0FBTyxDQUFkLGFBQUosYUFBNkM7QUFDM0MsV0FBT0EsT0FBTyxDQUFkO0FBQ0Q7O0FBRUQsU0FBT0EsT0FBTyxDQUFQQSw0QkFBb0NBLE9BQU8sQ0FBUEEsNkJBQTNDO0FBYkY7O0FBZ0JBLElBQU00QixjQUFjLEdBQUc1QixTQUFqQjRCLGNBQWlCNUIsUUFBTyxFQUFJO0FBQ2hDLE1BQUksQ0FBQ0YsUUFBUSxDQUFSQSxnQkFBTCxjQUE0QztBQUMxQztBQUY4Qjs7O0FBTWhDLE1BQUksT0FBT0UsT0FBTyxDQUFkLGdCQUFKLFlBQStDO0FBQzdDLFFBQU02QixJQUFJLEdBQUc3QixPQUFPLENBQXBCLFdBQWFBLEVBQWI7QUFDQSxXQUFPNkIsSUFBSSxZQUFKQSxvQkFBUDtBQUNEOztBQUVELE1BQUk3QixPQUFPLFlBQVgsWUFBbUM7QUFDakM7QUFaOEI7OztBQWdCaEMsTUFBSSxDQUFDQSxPQUFPLENBQVosWUFBeUI7QUFDdkI7QUFDRDs7QUFFRCxTQUFPNEIsY0FBYyxDQUFDNUIsT0FBTyxDQUE3QixVQUFxQixDQUFyQjtBQXBCRjs7QUF1QkEsSUFBTThCLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFNQyxNQUFNLEdBQUcvQixTQUFUK0IsTUFBUy9CLFFBQU8sRUFBSTtBQUN4QjtBQUNBQSxTQUFPLENBQVBBO0FBRkY7O0FBS0EsSUFBTWdDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQSxnQkFDdEIsTUFEc0I7QUFBQSxNQUNkQyxNQURjLFdBQ2RBLE1BRGM7O0FBR3RCLE1BQUlBLE1BQU0sSUFBSSxDQUFDbkMsUUFBUSxDQUFSQSxrQkFBZixtQkFBZUEsQ0FBZixFQUFnRTtBQUM5RDtBQUNEOztBQUVEO0FBUEY7O0FBVUEsSUFBTW9DLHlCQUF5QixHQUEvQjs7QUFFQSxJQUFNQyxrQkFBa0IsR0FBR0MsU0FBckJELGtCQUFxQkMsU0FBUSxFQUFJO0FBQ3JDLE1BQUl0QyxRQUFRLENBQVJBLGVBQUosV0FBdUM7QUFDckM7QUFDQSxRQUFJLENBQUNvQyx5QkFBeUIsQ0FBOUIsUUFBdUM7QUFDckNwQyxjQUFRLENBQVJBLHFDQUE4QyxZQUFNO0FBQ2xEb0MsaUNBQXlCLENBQXpCQSxRQUFrQ0Usa0JBQVE7QUFBQSxpQkFBSUEsUUFBOUNGLEVBQTBDO0FBQUEsU0FBMUNBO0FBREZwQztBQUdEOztBQUVEb0MsNkJBQXlCLENBQXpCQTtBQVJGLFNBU087QUFDTEUsWUFBUTtBQUNUO0FBWkg7O0FBZUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxTQUFNdkMsUUFBUSxDQUFSQSx3QkFBcEIsS0FBYztBQUFBLENBQWQ7O0FBRUEsSUFBTXdDLGtCQUFrQixHQUFHQyxTQUFyQkQsa0JBQXFCQyxPQUFNLEVBQUk7QUFDbkNKLG9CQUFrQixDQUFDLFlBQU07QUFDdkIsUUFBTUssQ0FBQyxHQUFHUixTQUFWO0FBQ0E7O0FBQ0EsV0FBTztBQUNMLFVBQU1TLElBQUksR0FBR0YsTUFBTSxDQUFuQjtBQUNBLFVBQU1HLGtCQUFrQixHQUFHRixDQUFDLENBQURBLEdBQTNCLElBQTJCQSxDQUEzQjtBQUNBQSxPQUFDLENBQURBLFdBQWFELE1BQU0sQ0FBbkJDO0FBQ0FBLE9BQUMsQ0FBREE7O0FBQ0FBLE9BQUMsQ0FBREEsc0JBQXdCLFlBQU07QUFDNUJBLFNBQUMsQ0FBREE7QUFDQSxlQUFPRCxNQUFNLENBQWI7QUFGRkM7QUFJRDtBQVpITCxHQUFrQixDQUFsQkE7QUFERjs7QUFpQkEsSUFBTVEsT0FBTyxHQUFHUCxTQUFWTyxPQUFVUCxTQUFRLEVBQUk7QUFDMUIsTUFBSSxvQkFBSixZQUFvQztBQUNsQ0EsWUFBUTtBQUNUO0FBSEg7O0FBTUEsSUFBTVEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5Qiw4QkFBMkQ7QUFBQSxNQUE3QkMsaUJBQTZCLHVFQUEzRCxJQUEyRDs7QUFDeEYsTUFBSSxDQUFKLG1CQUF3QjtBQUN0QkYsV0FBTyxDQUFQQSxRQUFPLENBQVBBO0FBQ0E7QUFDRDs7QUFFRCxNQUFNRyxlQUFlLEdBQXJCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcxQyxnQ0FBZ0MsQ0FBaENBLGlCQUFnQyxDQUFoQ0EsR0FBekI7QUFFQSxNQUFJMkMsTUFBTSxHQUFWOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWdCO0FBQUEsUUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUM5QixRQUFJQSxNQUFNLEtBQVYsbUJBQWtDO0FBQ2hDO0FBQ0Q7O0FBRURGLFVBQU0sR0FBTkE7QUFDQUcscUJBQWlCLENBQWpCQTtBQUNBUixXQUFPLENBQVBBLFFBQU8sQ0FBUEE7QUFQRjs7QUFVQVEsbUJBQWlCLENBQWpCQTtBQUNBQyxZQUFVLENBQUMsWUFBTTtBQUNmLFFBQUksQ0FBSixRQUFhO0FBQ1h4QywwQkFBb0IsQ0FBcEJBLGlCQUFvQixDQUFwQkE7QUFDRDtBQUhPLEtBQVZ3QyxnQkFBVSxDQUFWQTtBQXRCRjtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIscURBQXdEO0FBQ25GLE1BQUlDLEtBQUssR0FBR0MsSUFBSSxDQUFKQSxRQUR1RSxhQUN2RUEsQ0FBWixDQURtRjs7QUFJbkYsTUFBSUQsS0FBSyxLQUFLLENBQWQsR0FBa0I7QUFDaEIsV0FBT0MsSUFBSSxDQUFDLG1DQUFtQ0EsSUFBSSxDQUFKQSxTQUFuQyxJQUFaLENBQVcsQ0FBWDtBQUNEOztBQUVELE1BQU1DLFVBQVUsR0FBR0QsSUFBSSxDQUF2QjtBQUVBRCxPQUFLLElBQUlHLGFBQWEsT0FBTyxDQUE3Qkg7O0FBRUEsc0JBQW9CO0FBQ2xCQSxTQUFLLEdBQUcsQ0FBQ0EsS0FBSyxHQUFOLGNBQVJBO0FBQ0Q7O0FBRUQsU0FBT0MsSUFBSSxDQUFDMUQsSUFBSSxDQUFKQSxPQUFZQSxJQUFJLENBQUpBLFdBQWdCMkQsVUFBVSxHQUFsRCxDQUF3QjNELENBQVpBLENBQUQsQ0FBWDtBQWhCRjtBQ3BTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTTZELGNBQWMsR0FBcEI7QUFDQSxJQUFNQyxjQUFjLEdBQXBCO0FBQ0EsSUFBTUMsYUFBYSxHQUFuQjtBQUNBLElBQU1DLGFBQWEsR0FBbkIsRyxDQUFBOztBQUNBLElBQUlDLFFBQVEsR0FBWjtBQUNBLElBQU1DLFlBQVksR0FBRztBQUNuQkMsWUFBVSxFQURTO0FBRW5CQyxZQUFVLEVBQUU7QUFGTyxDQUFyQjtBQUlBLElBQU1DLGlCQUFpQixHQUF2QjtBQUNBLElBQU1DLFlBQVksR0FBRyxRQUFRLGtrQkFBN0IsUUFBNkIsQ0FBUixDQUFyQjtBQWlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNqQyxTQUFRQyxHQUFHLGNBQU9BLEdBQVAsZUFBZU4sUUFBbkIsRUFBSSxDQUFITSxJQUFtQ3BFLE9BQU8sQ0FBM0MsUUFBQ29FLElBQXVETixRQUEvRDtBQUNEOztBQUVELDJCQUEyQjtBQUN6QixNQUFNTSxHQUFHLEdBQUdDLFdBQVcsQ0FBdkIsT0FBdUIsQ0FBdkI7QUFFQXJFLFNBQU8sQ0FBUEE7QUFDQTZELGVBQWEsQ0FBYkEsR0FBYSxDQUFiQSxHQUFxQkEsYUFBYSxDQUFiQSxHQUFhLENBQWJBLElBQXJCQTtBQUVBLFNBQU9BLGFBQWEsQ0FBcEIsR0FBb0IsQ0FBcEI7QUFDRDs7QUFFRCx1Q0FBdUM7QUFDckMsU0FBTyx3QkFBd0I7QUFDN0JTLFNBQUssQ0FBTEE7O0FBRUEsUUFBSXJCLE9BQU8sQ0FBWCxRQUFvQjtBQUNsQnNCLGtCQUFZLENBQVpBLGFBQTBCRCxLQUFLLENBQS9CQztBQUNEOztBQUVELFdBQU9DLEVBQUUsQ0FBRkEsZUFBa0IsQ0FBekIsS0FBeUIsQ0FBbEJBLENBQVA7QUFQRjtBQVNEOztBQUVELDJEQUEyRDtBQUN6RCxTQUFPLHdCQUF3QjtBQUM3QixRQUFNQyxXQUFXLEdBQUd6RSxPQUFPLENBQVBBLGlCQUFwQixRQUFvQkEsQ0FBcEI7O0FBRUEsYUFBV2tELE1BQVgsU0FBV0EsTUFBWCxFQUE2QkEsTUFBTSxJQUFJQSxNQUFNLEtBQTdDLE1BQXdEQSxNQUFNLEdBQUdBLE1BQU0sQ0FBdkUsWUFBb0Y7QUFDbEYsV0FBSyxJQUFJd0IsQ0FBQyxHQUFHRCxXQUFXLENBQXhCLFFBQWlDQyxDQUFqQyxLQUF1QztBQUNyQyxZQUFJRCxXQUFXLENBQVhBLENBQVcsQ0FBWEEsS0FBSixRQUErQjtBQUM3QkgsZUFBSyxDQUFMQTs7QUFFQSxjQUFJckIsT0FBTyxDQUFYLFFBQW9CO0FBQ2xCc0Isd0JBQVksQ0FBWkEsYUFBMEJELEtBQUssQ0FBL0JDO0FBQ0Q7O0FBRUQsaUJBQU9DLEVBQUUsQ0FBRkEsY0FBaUIsQ0FBeEIsS0FBd0IsQ0FBakJBLENBQVA7QUFDRDtBQUNGO0FBZDBCOzs7QUFrQjdCO0FBbEJGO0FBb0JEOztBQUVELHNDQUFpRTtBQUFBLE1BQTNCRyxrQkFBMkIsdUVBQWpFLElBQWlFO0FBQy9ELE1BQU1DLFlBQVksR0FBRzVELE1BQU0sQ0FBTkEsS0FBckIsTUFBcUJBLENBQXJCOztBQUVBLE9BQUssSUFBSTBELENBQUMsR0FBTCxHQUFXRyxHQUFHLEdBQUdELFlBQVksQ0FBbEMsUUFBMkNGLENBQUMsR0FBNUMsS0FBb0RBLENBQXBELElBQXlEO0FBQ3ZELFFBQU1KLEtBQUssR0FBR1EsTUFBTSxDQUFDRixZQUFZLENBQWpDLENBQWlDLENBQWIsQ0FBcEI7O0FBRUEsUUFBSU4sS0FBSyxDQUFMQSwrQkFBcUNBLEtBQUssQ0FBTEEsdUJBQXpDLG9CQUEwRjtBQUN4RjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDRDs7QUFFRCxtRUFBbUU7QUFDakUsTUFBTVMsVUFBVSxHQUFHLG1CQUFuQjtBQUNBLE1BQU1DLGVBQWUsR0FBR0QsVUFBVSxrQkFBbEM7QUFFQSxNQUFJRSxTQUFTLEdBQUdDLFlBQVksQ0FBNUIsaUJBQTRCLENBQTVCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHaEIsWUFBWSxDQUFaQSxJQUFqQixTQUFpQkEsQ0FBakI7O0FBRUEsTUFBSSxDQUFKLFVBQWU7QUFDYmMsYUFBUyxHQUFUQTtBQUNEOztBQUVELFNBQU8sOEJBQVAsU0FBTyxDQUFQO0FBQ0Q7O0FBRUQsK0VBQStFO0FBQzdFLE1BQUkseUNBQXlDLENBQTdDLFNBQXVEO0FBQ3JEO0FBQ0Q7O0FBRUQsTUFBSSxDQUFKLFNBQWM7QUFDWmhDLFdBQU8sR0FBUEE7QUFDQW1DLGdCQUFZLEdBQVpBO0FBUDJFO0FBVzdFOzs7QUFDQSxNQUFJbEIsaUJBQWlCLENBQWpCQSxLQUFKLGlCQUFJQSxDQUFKLEVBQStDO0FBQzdDLFFBQU1tQixNQUFNLEdBQUdiLFNBQVRhLE1BQVNiLEdBQUUsRUFBSTtBQUNuQixhQUFPLGlCQUFpQjtBQUN0QixZQUFJLENBQUNGLEtBQUssQ0FBTixpQkFBeUJBLEtBQUssQ0FBTEEsa0JBQXdCQSxLQUFLLENBQTdCQSxrQkFBZ0QsQ0FBQ0EsS0FBSyxDQUFMQSx3QkFBOEJBLEtBQUssQ0FBakgsYUFBOEVBLENBQTlFLEVBQW1JO0FBQ2pJLGlCQUFPRSxFQUFFLENBQUZBLFdBQVAsS0FBT0EsQ0FBUDtBQUNEO0FBSEg7QUFERjs7QUFRQSxzQkFBa0I7QUFDaEJZLGtCQUFZLEdBQUdDLE1BQU0sQ0FBckJELFlBQXFCLENBQXJCQTtBQURGLFdBRU87QUFDTG5DLGFBQU8sR0FBR29DLE1BQU0sQ0FBaEJwQyxPQUFnQixDQUFoQkE7QUFDRDtBQUNGOztBQTFCNEUseUJBNEI1QnFDLGVBQWUsNkJBQWhFLFlBQWdFLENBNUJhO0FBQUE7QUFBQSxNQTRCdkUsVUE1QnVFO0FBQUEsTUE0QnZFLGVBNUJ1RTtBQUFBLE1BNEJ2RSxTQTVCdUU7O0FBNkI3RSxNQUFNUixNQUFNLEdBQUdTLFFBQVEsQ0FBdkIsT0FBdUIsQ0FBdkI7QUFDQSxNQUFNQyxRQUFRLEdBQUdWLE1BQU0sQ0FBTkEsU0FBTSxDQUFOQSxLQUFzQkEsTUFBTSxDQUFOQSxTQUFNLENBQU5BLEdBQXZDLEVBQWlCQSxDQUFqQjtBQUNBLE1BQU1XLFVBQVUsR0FBR0MsV0FBVyw0QkFBNEJYLFVBQVUsYUFBcEUsSUFBOEIsQ0FBOUI7O0FBRUEsa0JBQWdCO0FBQ2RVLGNBQVUsQ0FBVkEsU0FBb0JBLFVBQVUsQ0FBVkEsVUFBcEJBO0FBRUE7QUFDRDs7QUFFRCxNQUFNckIsR0FBRyxHQUFHQyxXQUFXLGtCQUFrQnNCLGlCQUFpQixDQUFqQkEsd0JBQXpDLEVBQXlDQSxDQUFsQixDQUF2QjtBQUNBLE1BQU1uQixFQUFFLEdBQUdPLFVBQVUsR0FDbkJhLDBCQUEwQixtQkFEUCxZQUNPLENBRFAsR0FFbkJDLGdCQUFnQixVQUZsQixPQUVrQixDQUZsQjtBQUlBckIsSUFBRSxDQUFGQSxxQkFBd0JPLFVBQVUsYUFBbENQO0FBQ0FBLElBQUUsQ0FBRkE7QUFDQUEsSUFBRSxDQUFGQTtBQUNBQSxJQUFFLENBQUZBO0FBQ0FnQixVQUFRLENBQVJBLEdBQVEsQ0FBUkE7QUFFQXhGLFNBQU8sQ0FBUEE7QUFDRDs7QUFFRCxnRkFBZ0Y7QUFDOUUsTUFBTXdFLEVBQUUsR0FBR2tCLFdBQVcsQ0FBQ1osTUFBTSxDQUFQLFNBQU8sQ0FBUCxXQUF0QixrQkFBc0IsQ0FBdEI7O0FBRUEsTUFBSSxDQUFKLElBQVM7QUFDUDtBQUNEOztBQUVEOUUsU0FBTyxDQUFQQSxtQ0FBMkM4RixPQUFPLENBQWxEOUYsa0JBQWtELENBQWxEQTtBQUNBLFNBQU84RSxNQUFNLENBQU5BLFNBQU0sQ0FBTkEsQ0FBa0JOLEVBQUUsQ0FBM0IsUUFBT00sQ0FBUDtBQUNEOztBQUVELHlFQUF5RTtBQUN2RSxNQUFNaUIsaUJBQWlCLEdBQUdqQixNQUFNLENBQU5BLFNBQU0sQ0FBTkEsSUFBMUI7QUFFQTlELFFBQU0sQ0FBTkEsZ0NBQXVDZ0Ysb0JBQVUsRUFBSTtBQUNuRCxRQUFJQSxVQUFVLENBQVZBLFNBQUosU0FBSUEsQ0FBSixFQUFvQztBQUNsQyxVQUFNMUIsS0FBSyxHQUFHeUIsaUJBQWlCLENBQS9CLFVBQStCLENBQS9CO0FBRUFFLG1CQUFhLDZCQUE2QjNCLEtBQUssQ0FBbEMsaUJBQW9EQSxLQUFLLENBQXRFMkIsa0JBQWEsQ0FBYkE7QUFDRDtBQUxIakY7QUFPRDs7QUFFRCw2QkFBNkI7QUFDM0I7QUFDQXNELE9BQUssR0FBR0EsS0FBSyxDQUFMQSx3QkFBUkEsRUFBUUEsQ0FBUkE7QUFDQSxTQUFPUCxZQUFZLENBQVpBLEtBQVksQ0FBWkEsSUFBUDtBQUNEOztBQUVELElBQU1RLFlBQVksR0FBRztBQUNuQjJCLElBRG1CLGNBQ2pCLE9BRGlCLEVBQ2pCLEtBRGlCLEVBQ2pCLE9BRGlCLEVBQ2pCLFlBRGlCLEVBQ3VCO0FBQ3hDQyxjQUFVLHdDQUFWQSxLQUFVLENBQVZBO0FBRmlCO0FBS25CQyxLQUxtQixlQUtoQixPQUxnQixFQUtoQixLQUxnQixFQUtoQixPQUxnQixFQUtoQixZQUxnQixFQUt3QjtBQUN6Q0QsY0FBVSx3Q0FBVkEsSUFBVSxDQUFWQTtBQU5pQjtBQVNuQkUsS0FUbUIsZUFTaEIsT0FUZ0IsRUFTaEIsaUJBVGdCLEVBU2hCLE9BVGdCLEVBU2hCLFlBVGdCLEVBU29DO0FBQ3JELFFBQUkseUNBQXlDLENBQTdDLFNBQXVEO0FBQ3JEO0FBQ0Q7O0FBSG9ELDRCQUtKZixlQUFlLDZCQUFoRSxZQUFnRSxDQUxYO0FBQUE7QUFBQSxRQUsvQyxVQUwrQztBQUFBLFFBSy9DLGVBTCtDO0FBQUEsUUFLL0MsU0FMK0M7O0FBTXJELFFBQU1nQixXQUFXLEdBQUdyQixTQUFTLEtBQTdCO0FBQ0EsUUFBTUgsTUFBTSxHQUFHUyxRQUFRLENBQXZCLE9BQXVCLENBQXZCO0FBQ0EsUUFBTWdCLFdBQVcsR0FBR1osaUJBQWlCLENBQWpCQSxXQUFwQixHQUFvQkEsQ0FBcEI7O0FBRUEsUUFBSSwyQkFBSixhQUE0QztBQUMxQztBQUNBLFVBQUksV0FBVyxDQUFDYixNQUFNLENBQXRCLFNBQXNCLENBQXRCLEVBQW1DO0FBQ2pDO0FBQ0Q7O0FBRURtQixtQkFBYSw4Q0FBOENsQixVQUFVLGFBQXJFa0IsSUFBYSxDQUFiQTtBQUNBO0FBQ0Q7O0FBRUQscUJBQWlCO0FBQ2ZqRixZQUFNLENBQU5BLHFCQUE0QndGLHNCQUFZLEVBQUk7QUFDMUNDLGdDQUF3QixnQ0FBZ0NkLGlCQUFpQixDQUFqQkEsTUFBeERjLENBQXdEZCxDQUFoQyxDQUF4QmM7QUFERnpGO0FBR0Q7O0FBRUQsUUFBTStFLGlCQUFpQixHQUFHakIsTUFBTSxDQUFOQSxTQUFNLENBQU5BLElBQTFCO0FBQ0E5RCxVQUFNLENBQU5BLGdDQUF1QzBGLHFCQUFXLEVBQUk7QUFDcEQsVUFBTVYsVUFBVSxHQUFHVSxXQUFXLENBQVhBLHVCQUFuQixFQUFtQkEsQ0FBbkI7O0FBRUEsVUFBSSxnQkFBZ0JmLGlCQUFpQixDQUFqQkEsU0FBcEIsVUFBb0JBLENBQXBCLEVBQTREO0FBQzFELFlBQU1yQixLQUFLLEdBQUd5QixpQkFBaUIsQ0FBL0IsV0FBK0IsQ0FBL0I7QUFFQUUscUJBQWEsNkJBQTZCM0IsS0FBSyxDQUFsQyxpQkFBb0RBLEtBQUssQ0FBdEUyQixrQkFBYSxDQUFiQTtBQUNEO0FBUEhqRjtBQXBDaUI7QUErQ25CMkYsU0EvQ21CLG1CQStDWixPQS9DWSxFQStDWixLQS9DWSxFQStDWixJQS9DWSxFQStDVztBQUM1QixRQUFJLDZCQUE2QixDQUFqQyxTQUEyQztBQUN6QztBQUNEOztBQUVELFFBQU1uRSxDQUFDLEdBQUdSLFNBQVY7QUFDQSxRQUFNaUQsU0FBUyxHQUFHQyxZQUFZLENBQTlCLEtBQThCLENBQTlCO0FBQ0EsUUFBTW9CLFdBQVcsR0FBR2hDLEtBQUssS0FBekI7QUFDQSxRQUFNYSxRQUFRLEdBQUdoQixZQUFZLENBQVpBLElBQWpCLFNBQWlCQSxDQUFqQjtBQUVBO0FBQ0EsUUFBSXlDLE9BQU8sR0FBWDtBQUNBLFFBQUlDLGNBQWMsR0FBbEI7QUFDQSxRQUFJQyxnQkFBZ0IsR0FBcEI7QUFDQSxRQUFJQyxHQUFHLEdBQVA7O0FBRUEsUUFBSVQsV0FBVyxJQUFmLEdBQXNCO0FBQ3BCVSxpQkFBVyxHQUFHeEUsQ0FBQyxDQUFEQSxhQUFkd0UsSUFBY3hFLENBQWR3RTtBQUVBeEUsT0FBQyxDQUFEQSxPQUFDLENBQURBO0FBQ0FvRSxhQUFPLEdBQUcsQ0FBQ0ksV0FBVyxDQUF0Qkosb0JBQVdJLEVBQVhKO0FBQ0FDLG9CQUFjLEdBQUcsQ0FBQ0csV0FBVyxDQUE3QkgsNkJBQWtCRyxFQUFsQkg7QUFDQUMsc0JBQWdCLEdBQUdFLFdBQVcsQ0FBOUJGLGtCQUFtQkUsRUFBbkJGO0FBQ0Q7O0FBRUQsa0JBQWM7QUFDWkMsU0FBRyxHQUFHakgsUUFBUSxDQUFSQSxZQUFOaUgsWUFBTWpILENBQU5pSDtBQUNBQSxTQUFHLENBQUhBO0FBRkYsV0FHTztBQUNMQSxTQUFHLEdBQUcsdUJBQXVCO0FBQzNCSCxlQUQyQixFQUMzQkEsT0FEMkI7QUFFM0JLLGtCQUFVLEVBQUU7QUFGZSxPQUF2QixDQUFORjtBQTdCMEI7OztBQW9DNUIsUUFBSSxnQkFBSixhQUFpQztBQUMvQi9GLFlBQU0sQ0FBTkEsbUJBQTBCa0csYUFBRyxFQUFJO0FBQy9CbEcsY0FBTSxDQUFOQSx5QkFBZ0M7QUFDOUJtRyxhQUQ4QixpQkFDeEI7QUFDSixtQkFBT0MsSUFBSSxDQUFYLEdBQVcsQ0FBWDtBQUNEO0FBSDZCLFNBQWhDcEc7QUFERkE7QUFPRDs7QUFFRCwwQkFBc0I7QUFDcEIrRixTQUFHLENBQUhBO0FBQ0Q7O0FBRUQsd0JBQW9CO0FBQ2xCL0csYUFBTyxDQUFQQTtBQUNEOztBQUVELFFBQUkrRyxHQUFHLENBQUhBLG9CQUF3Qix1QkFBNUIsYUFBZ0U7QUFDOURDLGlCQUFXLENBQVhBO0FBQ0Q7O0FBRUQ7QUFDRDtBQTFHa0IsQ0FBckI7QUM5T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUssVUFBVSxHQUFHLElBQW5CLEdBQW1CLEVBQW5CO0FBRUEsV0FBZTtBQUNiQyxLQURhLGVBQ1YsT0FEVSxFQUNWLEdBRFUsRUFDVixRQURVLEVBQ2U7QUFDMUIsUUFBSSxDQUFDRCxVQUFVLENBQVZBLElBQUwsT0FBS0EsQ0FBTCxFQUE4QjtBQUM1QkEsZ0JBQVUsQ0FBVkEsYUFBd0IsSUFBeEJBLEdBQXdCLEVBQXhCQTtBQUNEOztBQUVELFFBQU1FLFdBQVcsR0FBR0YsVUFBVSxDQUFWQSxJQUxNLE9BS05BLENBQXBCLENBTDBCO0FBUTFCOztBQUNBLFFBQUksQ0FBQ0UsV0FBVyxDQUFYQSxJQUFELEdBQUNBLENBQUQsSUFBeUJBLFdBQVcsQ0FBWEEsU0FBN0IsR0FBcUQ7QUFDbkQ7QUFDQUMsYUFBTyxDQUFQQSw0RkFBNkZDLEtBQUssQ0FBTEEsS0FBV0YsV0FBVyxDQUF0QkUsSUFBV0YsRUFBWEUsRUFBN0ZELENBQTZGQyxDQUE3RkQ7QUFDQTtBQUNEOztBQUVERCxlQUFXLENBQVhBO0FBaEJXO0FBbUJiSixLQW5CYSxlQW1CVixPQW5CVSxFQW1CVixHQW5CVSxFQW1CSztBQUNoQixRQUFJRSxVQUFVLENBQVZBLElBQUosT0FBSUEsQ0FBSixFQUE2QjtBQUMzQixhQUFPQSxVQUFVLENBQVZBLHlCQUFQO0FBQ0Q7O0FBRUQ7QUF4Qlc7QUEyQmJLLFFBM0JhLGtCQTJCUCxPQTNCTyxFQTJCUCxHQTNCTyxFQTJCUTtBQUNuQixRQUFJLENBQUNMLFVBQVUsQ0FBVkEsSUFBTCxPQUFLQSxDQUFMLEVBQThCO0FBQzVCO0FBQ0Q7O0FBRUQsUUFBTUUsV0FBVyxHQUFHRixVQUFVLENBQVZBLElBQXBCLE9BQW9CQSxDQUFwQjtBQUVBRSxlQUFXLENBQVhBLE9BUG1CLEdBT25CQSxFQVBtQjs7QUFVbkIsUUFBSUEsV0FBVyxDQUFYQSxTQUFKLEdBQTRCO0FBQzFCRixnQkFBVSxDQUFWQTtBQUNEO0FBQ0Y7QUF4Q1ksQ0FBZjtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1NLE9BQU8sR0FBYjs7SUFFQSxhO0FBQ0VDLHlCQUFXLE9BQVhBLEVBQXFCO0FBQUE7O0FBQ25CNUgsV0FBTyxHQUFHYyxVQUFVLENBQXBCZCxPQUFvQixDQUFwQkE7O0FBRUEsUUFBSSxDQUFKLFNBQWM7QUFDWjtBQUNEOztBQUVEO0FBQ0E2SCxRQUFJLENBQUpBLElBQVMsS0FBVEEsVUFBd0IsaUJBQXhCQTtBQUNEOzs7O1dBRURDLG1CQUFVO0FBQUE7O0FBQ1JELFVBQUksQ0FBSkEsT0FBWSxLQUFaQSxVQUEyQixpQkFBM0JBO0FBQ0F0RCxrQkFBWSxDQUFaQSxJQUFpQixLQUFqQkEsVUFBZ0MsaUJBQWhDQTtBQUVBdkQsWUFBTSxDQUFOQSxrQ0FBeUMrRyxzQkFBWSxFQUFJO0FBQ3ZEO0FBREYvRztBQUdEOzs7V0FFRGdILHdCQUFjLFFBQWRBLEVBQWMsT0FBZEEsRUFBcUQ7QUFBQSxVQUFuQkMsVUFBbUIsdUVBQXZDLElBQXVDO0FBQ25EckYsNEJBQXNCLG9CQUF0QkEsVUFBc0IsQ0FBdEJBO0FBQ0Q7QUFFRDs7OztXQUVPc0YscUJBQVcsT0FBWEEsRUFBcUI7QUFDMUIsYUFBT0wsSUFBSSxDQUFKQSxJQUFTL0csVUFBVSxDQUFuQitHLE9BQW1CLENBQW5CQSxFQUE4QixLQUFyQyxRQUFPQSxDQUFQO0FBQ0Q7OztXQUVNTSw2QkFBbUIsT0FBbkJBLEVBQTBDO0FBQUEsVUFBYjlHLE1BQWEsdUVBQXZCLEVBQXVCO0FBQy9DLGFBQU8sNkJBQTZCLGtCQUFrQix3Q0FBdEQsSUFBb0MsQ0FBcEM7QUFDRDs7O1NBRVVzRyxlQUFVO0FBQ25CO0FBQ0Q7OztTQUVVUyxlQUFPO0FBQ2hCLFlBQU0sVUFBTixxRUFBTSxDQUFOO0FBQ0Q7OztTQUVVQyxlQUFXO0FBQ3BCLDBCQUFhLEtBQWI7QUFDRDs7O1NBRVVDLGVBQVk7QUFDckIsd0JBQVcsS0FBWDtBQUNEOzs7OztBQ3ZFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsWUFBZ0M7QUFBQSxNQUFwQkMsTUFBb0IsdUVBQWhDLE1BQWdDO0FBQzNELE1BQU1DLFVBQVUsMEJBQW1CQyxTQUFTLENBQTVDLFNBQWdCLENBQWhCO0FBQ0EsTUFBTWpHLElBQUksR0FBR2lHLFNBQVMsQ0FBdEI7QUFFQW5FLGNBQVksQ0FBWkEsb0VBQXFFLGlCQUFpQjtBQUNwRixRQUFJLHVCQUF1QixLQUEzQixPQUFJLENBQUosRUFBMEM7QUFDeENELFdBQUssQ0FBTEE7QUFDRDs7QUFFRCxRQUFJNUMsVUFBVSxDQUFkLElBQWMsQ0FBZCxFQUFzQjtBQUNwQjtBQUNEOztBQUVELFFBQU13QixNQUFNLEdBQUc5QyxzQkFBc0IsQ0FBdEJBLElBQXNCLENBQXRCQSxJQUFnQyx3QkFBL0MsSUFBK0MsRUFBL0M7QUFDQSxRQUFNdUksUUFBUSxHQUFHRCxTQUFTLENBQVRBLG9CQVZtRSxNQVVuRUEsQ0FBakIsQ0FWb0Y7O0FBYXBGQyxZQUFRLENBQVJBLE1BQVEsQ0FBUkE7QUFiRnBFO0FBSkY7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTTZELE1BQUksR0FBVjtBQUNBLElBQU1DLFVBQVEsR0FBZDtBQUNBLElBQU1DLFdBQVMsY0FBZixVQUFlLENBQWY7QUFFQSxJQUFNTSxXQUFXLGtCQUFqQixXQUFpQixDQUFqQjtBQUNBLElBQU1DLFlBQVksbUJBQWxCLFdBQWtCLENBQWxCO0FBQ0EsSUFBTUMsaUJBQWUsR0FBckI7QUFDQSxJQUFNQyxpQkFBZSxHQUFyQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRUEsSzs7Ozs7Ozs7Ozs7OztXQUFrQztBQVNoQ0MscUJBQVE7QUFBQTs7QUFDTixVQUFNQyxVQUFVLEdBQUcxRSxZQUFZLENBQVpBLFFBQXFCLEtBQXJCQSxVQUFuQixXQUFtQkEsQ0FBbkI7O0FBRUEsVUFBSTBFLFVBQVUsQ0FBZCxrQkFBaUM7QUFDL0I7QUFDRDs7QUFFRDs7QUFFQSxVQUFNaEIsVUFBVSxHQUFHLGlDQUFuQixpQkFBbUIsQ0FBbkI7O0FBQ0EsMEJBQW9CO0FBQUEsZUFBTSxPQUExQixlQUEwQixFQUFOO0FBQUEsT0FBcEIsRUFBa0QsS0FBbEQ7QUFuQjhCLEssQ0FBQTs7OztXQXVCaENpQiwyQkFBa0I7QUFDaEI7O0FBQ0EzRSxrQkFBWSxDQUFaQSxRQUFxQixLQUFyQkE7QUFDQTtBQTFCOEIsSyxDQUFBOzs7O1NBQ2hDO0FBRVc2RCxtQkFBTztBQUNoQjtBQUo4Qjs7O1dBK0J6QmUseUJBQWUsTUFBZkEsRUFBd0I7QUFDN0IsYUFBTyxVQUFVLFlBQVk7QUFDM0IsWUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUxBLG9CQUFiLElBQWFBLENBQWI7O0FBRUEsWUFBSSxrQkFBSixVQUFnQztBQUM5QjtBQUNEOztBQUVELFlBQUlELElBQUksQ0FBSkEsTUFBSSxDQUFKQSxrQkFBOEIvSCxNQUFNLENBQU5BLFdBQTlCK0gsR0FBOEIvSCxDQUE5QitILElBQXdEL0gsTUFBTSxLQUFsRSxlQUFzRjtBQUNwRixnQkFBTSwwQ0FBTixNQUFNLFFBQU47QUFDRDs7QUFFRCtILFlBQUksQ0FBSkEsTUFBSSxDQUFKQTtBQVhGLE9BQU8sQ0FBUDtBQWFEOzs7O0VBN0NILGE7QUFnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFiLG9CQUFvQixRQUFwQkEsT0FBb0IsQ0FBcEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBakcsa0JBQWtCLENBQWxCQSxLQUFrQixDQUFsQkE7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTThGLE1BQUksR0FBVjtBQUNBLElBQU1DLFVBQVEsR0FBZDtBQUNBLElBQU1DLFdBQVMsY0FBZixVQUFlLENBQWY7QUFDQSxJQUFNZ0IsY0FBWSxHQUFsQjtBQUVBLElBQU1DLG1CQUFpQixHQUF2QjtBQUVBLElBQU1DLHNCQUFvQixHQUExQjtBQUVBLElBQU1DLHNCQUFvQixrQkFBV25CLFdBQVgsU0FBMUIsY0FBMEIsQ0FBMUI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVBLE07Ozs7Ozs7Ozs7Ozs7V0FBbUM7QUFTakNvQixzQkFBUztBQUNQO0FBQ0EsaURBQTJDLCtCQUEzQyxtQkFBMkMsQ0FBM0M7QUFYK0IsSyxDQUFBOzs7O1NBQ2pDO0FBRVd0QixtQkFBTztBQUNoQjtBQUorQjs7O1dBZ0IxQmUseUJBQWUsTUFBZkEsRUFBd0I7QUFDN0IsYUFBTyxVQUFVLFlBQVk7QUFDM0IsWUFBTUMsSUFBSSxHQUFHTyxNQUFNLENBQU5BLG9CQUFiLElBQWFBLENBQWI7O0FBRUEsWUFBSXRJLE1BQU0sS0FBVixVQUF5QjtBQUN2QitILGNBQUksQ0FBSkEsTUFBSSxDQUFKQTtBQUNEO0FBTEgsT0FBTyxDQUFQO0FBT0Q7Ozs7RUF4QkgsYTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTdFLFlBQVksQ0FBWkEsNkRBQXNFRCxlQUFLLEVBQUk7QUFDN0VBLE9BQUssQ0FBTEE7QUFFQSxNQUFNc0YsTUFBTSxHQUFHdEYsS0FBSyxDQUFMQSxlQUFmLHNCQUFlQSxDQUFmO0FBQ0EsTUFBTThFLElBQUksR0FBR08sTUFBTSxDQUFOQSxvQkFBYixNQUFhQSxDQUFiO0FBRUFQLE1BQUksQ0FBSkE7QUFORjdFO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBakMsa0JBQWtCLENBQWxCQSxNQUFrQixDQUFsQkE7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUMxQixNQUFJdUgsR0FBRyxLQUFQLFFBQW9CO0FBQ2xCO0FBQ0Q7O0FBRUQsTUFBSUEsR0FBRyxLQUFQLFNBQXFCO0FBQ25CO0FBQ0Q7O0FBRUQsTUFBSUEsR0FBRyxLQUFLcEosTUFBTSxDQUFOQSxHQUFNLENBQU5BLENBQVosUUFBWUEsRUFBWixFQUFvQztBQUNsQyxXQUFPQSxNQUFNLENBQWIsR0FBYSxDQUFiO0FBQ0Q7O0FBRUQsTUFBSW9KLEdBQUcsS0FBSEEsTUFBY0EsR0FBRyxLQUFyQixRQUFrQztBQUNoQztBQUNEOztBQUVEO0FBQ0Q7O0FBRUQsK0JBQStCO0FBQzdCLFNBQU8zQyxHQUFHLENBQUhBLGtCQUFzQjRDLGFBQUc7QUFBQSxzQkFBUUEsR0FBRyxDQUEzQyxXQUF3Q0EsRUFBUjtBQUFBLEdBQXpCNUMsQ0FBUDtBQUNEOztBQUVELElBQU02QyxXQUFXLEdBQUc7QUFDbEJDLGtCQURrQiw0QkFDRixPQURFLEVBQ0YsR0FERSxFQUNGLEtBREUsRUFDb0I7QUFDcENoSyxXQUFPLENBQVBBLCtCQUFnQ2lLLGdCQUFnQixDQUFoRGpLLEdBQWdELENBQWhEQTtBQUZnQjtBQUtsQmtLLHFCQUxrQiwrQkFLQyxPQUxELEVBS0MsR0FMRCxFQUtnQjtBQUNoQ2xLLFdBQU8sQ0FBUEEsa0NBQW1DaUssZ0JBQWdCLENBQW5EakssR0FBbUQsQ0FBbkRBO0FBTmdCO0FBU2xCbUssbUJBVGtCLDZCQVNELE9BVEMsRUFTUztBQUN6QixRQUFJLENBQUosU0FBYztBQUNaO0FBQ0Q7O0FBRUQsUUFBTUMsVUFBVSxHQUFoQjtBQUVBcEosVUFBTSxDQUFOQSxLQUFZaEIsT0FBTyxDQUFuQmdCLGdCQUNVa0csYUFBRztBQUFBLGFBQUlBLEdBQUcsQ0FBSEEsV0FEakJsRyxJQUNpQmtHLENBQUo7QUFBQSxLQURibEcsVUFFV2tHLGFBQUcsRUFBSTtBQUNkLFVBQUltRCxPQUFPLEdBQUduRCxHQUFHLENBQUhBLGVBQWQsRUFBY0EsQ0FBZDtBQUNBbUQsYUFBTyxHQUFHQSxPQUFPLENBQVBBLDBCQUFrQ0EsT0FBTyxDQUFQQSxTQUFpQkEsT0FBTyxDQUFwRUEsTUFBNENBLENBQTVDQTtBQUNBRCxnQkFBVSxDQUFWQSxPQUFVLENBQVZBLEdBQXNCRSxhQUFhLENBQUN0SyxPQUFPLENBQVBBLFFBQXBDb0ssR0FBb0NwSyxDQUFELENBQW5Db0s7QUFMSnBKO0FBUUE7QUF4QmdCO0FBMkJsQnVKLGtCQTNCa0IsNEJBMkJGLE9BM0JFLEVBMkJGLEdBM0JFLEVBMkJhO0FBQzdCLFdBQU9ELGFBQWEsQ0FBQ3RLLE9BQU8sQ0FBUEEsK0JBQWdDaUssZ0JBQWdCLENBQXJFLEdBQXFFLENBQWhEakssRUFBRCxDQUFwQjtBQTVCZ0I7QUErQmxCd0ssUUEvQmtCLGtCQStCWixPQS9CWSxFQStCRjtBQUNkLFFBQU1DLElBQUksR0FBR3pLLE9BQU8sQ0FBcEIscUJBQWFBLEVBQWI7QUFFQSxXQUFPO0FBQ0wwSyxTQUFHLEVBQUVELElBQUksQ0FBSkEsTUFBV25LLE1BQU0sQ0FEakI7QUFFTHFLLFVBQUksRUFBRUYsSUFBSSxDQUFKQSxPQUFZbkssTUFBTSxDQUFDc0s7QUFGcEIsS0FBUDtBQWxDZ0I7QUF3Q2xCQyxVQXhDa0Isb0JBd0NWLE9BeENVLEVBd0NBO0FBQ2hCLFdBQU87QUFDTEgsU0FBRyxFQUFFMUssT0FBTyxDQURQO0FBRUwySyxVQUFJLEVBQUUzSyxPQUFPLENBQUM4SztBQUZULEtBQVA7QUFJRDtBQTdDaUIsQ0FBcEI7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVVBLElBQU1DLFNBQVMsR0FBZjtBQUVBLElBQU1DLGNBQWMsR0FBRztBQUNyQkMsTUFEcUIsZ0JBQ2pCLFFBRGlCLEVBQzhCO0FBQUE7O0FBQUEsUUFBcENqTCxPQUFvQyx1RUFBMUJGLFFBQVEsQ0FBN0IsZUFBK0M7QUFDakQsV0FBTyxvREFBYW9MLE9BQU8sQ0FBUEEseUNBQXBCLFFBQW9CQSxDQUFiLEVBQVA7QUFGbUI7QUFLckJDLFNBTHFCLG1CQUtkLFFBTGMsRUFLaUM7QUFBQSxRQUFwQ25MLE9BQW9DLHVFQUExQkYsUUFBUSxDQUE3QixlQUErQztBQUNwRCxXQUFPb0wsT0FBTyxDQUFQQSxzQ0FBUCxRQUFPQSxDQUFQO0FBTm1CO0FBU3JCRSxVQVRxQixvQkFTYixPQVRhLEVBU2IsUUFUYSxFQVNPO0FBQUE7O0FBQzFCLFdBQU8sb0RBQWFwTCxPQUFPLENBQXBCLGtCQUNHcUwsZUFBSztBQUFBLGFBQUlBLEtBQUssQ0FBTEEsUUFEbkIsUUFDbUJBLENBQUo7QUFBQSxLQURSLENBQVA7QUFWbUI7QUFjckJDLFNBZHFCLG1CQWNkLE9BZGMsRUFjZCxRQWRjLEVBY007QUFDekIsUUFBTUEsT0FBTyxHQUFiO0FBRUEsUUFBSUMsUUFBUSxHQUFHdkwsT0FBTyxDQUF0Qjs7QUFFQSxXQUFPdUwsUUFBUSxJQUFJQSxRQUFRLENBQVJBLGFBQXNCNUosSUFBSSxDQUF0QzRKLGdCQUF1REEsUUFBUSxDQUFSQSxhQUE5RCxXQUErRjtBQUM3RixVQUFJQSxRQUFRLENBQVJBLFFBQUosUUFBSUEsQ0FBSixFQUFnQztBQUM5QkQsZUFBTyxDQUFQQTtBQUNEOztBQUVEQyxjQUFRLEdBQUdBLFFBQVEsQ0FBbkJBO0FBQ0Q7O0FBRUQ7QUEzQm1CO0FBOEJyQkMsTUE5QnFCLGdCQThCakIsT0E5QmlCLEVBOEJqQixRQTlCaUIsRUE4Qkc7QUFDdEIsUUFBSUMsUUFBUSxHQUFHekwsT0FBTyxDQUF0Qjs7QUFFQSxxQkFBaUI7QUFDZixVQUFJeUwsUUFBUSxDQUFSQSxRQUFKLFFBQUlBLENBQUosRUFBZ0M7QUFDOUIsZUFBTyxDQUFQLFFBQU8sQ0FBUDtBQUNEOztBQUVEQSxjQUFRLEdBQUdBLFFBQVEsQ0FBbkJBO0FBQ0Q7O0FBRUQ7QUF6Q21CO0FBNENyQkMsTUE1Q3FCLGdCQTRDakIsT0E1Q2lCLEVBNENqQixRQTVDaUIsRUE0Q0c7QUFDdEIsUUFBSUEsSUFBSSxHQUFHMUwsT0FBTyxDQUFsQjs7QUFFQSxpQkFBYTtBQUNYLFVBQUkwTCxJQUFJLENBQUpBLFFBQUosUUFBSUEsQ0FBSixFQUE0QjtBQUMxQixlQUFPLENBQVAsSUFBTyxDQUFQO0FBQ0Q7O0FBRURBLFVBQUksR0FBR0EsSUFBSSxDQUFYQTtBQUNEOztBQUVEO0FBdkRtQjtBQTBEckJDLG1CQTFEcUIsNkJBMERKLE9BMURJLEVBMERNO0FBQ3pCLFFBQU1DLFVBQVUsR0FBRyx3R0FTYjNMLGtCQUFRO0FBQUEsdUJBVEssUUFTTDtBQUFBLEtBVEssT0FBbkIsSUFBbUIsQ0FBbkI7QUFXQSxXQUFPLHNDQUFzQzRMLFlBQUU7QUFBQSxhQUFJLENBQUNuSyxVQUFVLENBQVgsRUFBVyxDQUFYLElBQW1CRixTQUFTLENBQS9FLEVBQStFLENBQWhDO0FBQUEsS0FBeEMsQ0FBUDtBQUNEO0FBdkVvQixDQUF2QjtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTTRHLE1BQUksR0FBVjtBQUNBLElBQU1DLFVBQVEsR0FBZDtBQUNBLElBQU1DLFdBQVMsY0FBZixVQUFlLENBQWY7QUFDQSxJQUFNZ0IsY0FBWSxHQUFsQjtBQUVBLElBQU13QyxjQUFjLEdBQXBCO0FBQ0EsSUFBTUMsZUFBZSxHQUFyQjtBQUNBLElBQU1DLHNCQUFzQixHQUE1QixJLENBQUE7O0FBQ0EsSUFBTUMsZUFBZSxHQUFyQjtBQUVBLElBQU1DLFNBQU8sR0FBRztBQUNkQyxVQUFRLEVBRE07QUFFZEMsVUFBUSxFQUZNO0FBR2RDLE9BQUssRUFIUztBQUlkQyxPQUFLLEVBSlM7QUFLZEMsTUFBSSxFQUxVO0FBTWRDLE9BQUssRUFBRTtBQU5PLENBQWhCO0FBU0EsSUFBTUMsYUFBVyxHQUFHO0FBQ2xCTixVQUFRLEVBRFU7QUFFbEJDLFVBQVEsRUFGVTtBQUdsQkMsT0FBSyxFQUhhO0FBSWxCQyxPQUFLLEVBSmE7QUFLbEJDLE1BQUksRUFMYztBQU1sQkMsT0FBSyxFQUFFO0FBTlcsQ0FBcEI7QUFTQSxJQUFNRSxVQUFVLEdBQWhCO0FBQ0EsSUFBTUMsVUFBVSxHQUFoQjtBQUNBLElBQU1DLGNBQWMsR0FBcEI7QUFDQSxJQUFNQyxlQUFlLEdBQXJCO0FBRUEsSUFBTUMsZ0JBQWdCLCtEQUNwQixjQURvQixFQUFHLGVBQUgsc0NBRXBCLGVBRm9CLEVBRURGLGNBRkMscUJBQXRCO0FBS0EsSUFBTUcsV0FBVyxrQkFBakIsV0FBaUIsQ0FBakI7QUFDQSxJQUFNQyxVQUFVLGlCQUFoQixXQUFnQixDQUFoQjtBQUNBLElBQU1DLGFBQWEsb0JBQW5CLFdBQW1CLENBQW5CO0FBQ0EsSUFBTUMsZ0JBQWdCLHVCQUF0QixXQUFzQixDQUF0QjtBQUNBLElBQU1DLGdCQUFnQix1QkFBdEIsV0FBc0IsQ0FBdEI7QUFDQSxJQUFNQyxnQkFBZ0IsdUJBQXRCLFdBQXNCLENBQXRCO0FBQ0EsSUFBTUMsZUFBZSxzQkFBckIsV0FBcUIsQ0FBckI7QUFDQSxJQUFNQyxjQUFjLHFCQUFwQixXQUFvQixDQUFwQjtBQUNBLElBQU1DLGlCQUFpQix3QkFBdkIsV0FBdUIsQ0FBdkI7QUFDQSxJQUFNQyxlQUFlLHNCQUFyQixXQUFxQixDQUFyQjtBQUNBLElBQU1DLGdCQUFnQixzQkFBdEIsV0FBc0IsQ0FBdEI7QUFDQSxJQUFNQyxxQkFBbUIsaUJBQVVwRixXQUFWLFNBQXpCLGNBQXlCLENBQXpCO0FBQ0EsSUFBTW1CLHNCQUFvQixrQkFBV25CLFdBQVgsU0FBMUIsY0FBMEIsQ0FBMUI7QUFFQSxJQUFNcUYsbUJBQW1CLEdBQXpCO0FBQ0EsSUFBTXBFLG1CQUFpQixHQUF2QjtBQUNBLElBQU1xRSxnQkFBZ0IsR0FBdEI7QUFDQSxJQUFNQyxjQUFjLEdBQXBCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQXRCO0FBQ0EsSUFBTUMsZUFBZSxHQUFyQjtBQUNBLElBQU1DLGVBQWUsR0FBckI7QUFDQSxJQUFNQyx3QkFBd0IsR0FBOUI7QUFFQSxJQUFNQyxpQkFBZSxHQUFyQjtBQUNBLElBQU1DLG9CQUFvQixHQUExQjtBQUNBLElBQU1DLGFBQWEsR0FBbkI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBdkI7QUFDQSxJQUFNQyxrQkFBa0IsR0FBeEI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBekI7QUFDQSxJQUFNQyxrQkFBa0IsR0FBeEI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBekI7QUFDQSxJQUFNQyxrQkFBa0IsR0FBeEI7QUFFQSxJQUFNQyxrQkFBa0IsR0FBeEI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBdEI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNBLFE7Ozs7O0FBQ0VoSCxvQkFBVyxPQUFYQSxFQUFXLE1BQVhBLEVBQTZCO0FBQUE7O0FBQUE7O0FBQzNCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLHFCQUFlLGtCQUFmLE1BQWUsQ0FBZjtBQUNBLGdDQUEwQm9ELGNBQWMsQ0FBZEEsNkJBQTRDLE9BQXRFLFFBQTBCQSxDQUExQjtBQUNBLDZCQUF1QixrQkFBa0JsTCxRQUFRLENBQTFCLG1CQUE4QytPLFNBQVMsQ0FBVEEsaUJBQXJFO0FBQ0EsMkJBQXFCL0ksT0FBTyxDQUFDeEYsTUFBTSxDQUFuQyxZQUE0QixDQUE1Qjs7QUFFQTs7QUFqQjJCO0FBRE0sRyxDQUFBOzs7OztXQUFBO0FBaUNuQ29MLG9CQUFPO0FBQ0w7QUFDRDs7O1dBRURvRCwyQkFBa0I7QUFDaEI7QUFDQTtBQUNBLFVBQUksQ0FBQ2hQLFFBQVEsQ0FBVCxVQUFvQjBCLFNBQVMsQ0FBQyxLQUFsQyxRQUFpQyxDQUFqQyxFQUFrRDtBQUNoRDtBQUNEO0FBQ0Y7OztXQUVEZ0ssZ0JBQU87QUFDTDtBQUNEOzs7V0FFRGMsZUFBSyxLQUFMQSxFQUFhO0FBQ1gsVUFBSSxDQUFKLE9BQVk7QUFDVjtBQUNEOztBQUVELFVBQUl0QixjQUFjLENBQWRBLDRCQUEyQyxLQUEvQyxRQUFJQSxDQUFKLEVBQStEO0FBQzdEcEssNEJBQW9CLENBQUMsS0FBckJBLFFBQW9CLENBQXBCQTtBQUNBO0FBQ0Q7O0FBRURtTyxtQkFBYSxDQUFDLEtBQWRBLFNBQWEsQ0FBYkE7QUFDQTtBQUNEOzs7V0FFREMsZUFBSyxLQUFMQSxFQUFhO0FBQ1gsVUFBSSxDQUFKLE9BQVk7QUFDVjtBQUNEOztBQUVELFVBQUksS0FBSixXQUFvQjtBQUNsQkQscUJBQWEsQ0FBQyxLQUFkQSxTQUFhLENBQWJBO0FBQ0E7QUFDRDs7QUFFRCxVQUFJLGdCQUFnQixhQUFoQixZQUF5QyxDQUFDLEtBQTlDLFdBQThEO0FBQzVEOztBQUVBLHlCQUFpQkUsV0FBVyxDQUMxQixDQUFDblAsUUFBUSxDQUFSQSxrQkFBMkIsS0FBM0JBLGtCQUFrRCxLQUFuRCxXQUQwQixJQUMxQixDQUQwQixFQUUxQixhQUZGLFFBQTRCLENBQTVCO0FBSUQ7QUFDRjs7O1dBRURvUCxZQUFFLEtBQUZBLEVBQVU7QUFBQTs7QUFDUiw0QkFBc0JsRSxjQUFjLENBQWRBLDhCQUE2QyxLQUFuRSxRQUFzQkEsQ0FBdEI7O0FBQ0EsVUFBTW1FLFdBQVcsR0FBRyxtQkFBbUIsS0FBdkMsY0FBb0IsQ0FBcEI7O0FBRUEsVUFBSTdMLEtBQUssR0FBRyxxQkFBUkEsS0FBa0NBLEtBQUssR0FBM0MsR0FBaUQ7QUFDL0M7QUFDRDs7QUFFRCxVQUFJLEtBQUosWUFBcUI7QUFDbkJpQixvQkFBWSxDQUFaQSxJQUFpQixLQUFqQkEsc0JBQTRDO0FBQUEsaUJBQU0sVUFBbERBLEtBQWtELENBQU47QUFBQSxTQUE1Q0E7QUFDQTtBQUNEOztBQUVELFVBQUk0SyxXQUFXLEtBQWYsT0FBMkI7QUFDekI7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsVUFBTUMsS0FBSyxHQUFHOUwsS0FBSyxHQUFMQSwyQkFBZDs7QUFJQSx5QkFBbUIsWUFBbkIsS0FBbUIsQ0FBbkI7QUExR2lDLEssQ0FBQTs7OztXQStHbkMrTCxvQkFBVSxNQUFWQSxFQUFtQjtBQUNqQmhPLFlBQU0scUJBQUcsU0FBSCxNQUVEMEksV0FBVyxDQUFYQSxrQkFBOEIsS0FGMUIsUUFFSkEsQ0FGQyxNQUdBLHdDQUFKLEVBSEksQ0FBTjFJO0FBS0FOLHFCQUFlLGlCQUFmQSxhQUFlLENBQWZBO0FBQ0E7QUFDRDs7O1dBRUR1Tyx3QkFBZTtBQUNiLFVBQU1DLFNBQVMsR0FBRzFQLElBQUksQ0FBSkEsSUFBUyxLQUEzQixXQUFrQkEsQ0FBbEI7O0FBRUEsVUFBSTBQLFNBQVMsSUFBYixpQkFBa0M7QUFDaEM7QUFDRDs7QUFFRCxVQUFNQyxTQUFTLEdBQUdELFNBQVMsR0FBRyxLQUE5QjtBQUVBOztBQUVBLFVBQUksQ0FBSixXQUFnQjtBQUNkO0FBQ0Q7O0FBRUQsa0JBQVlDLFNBQVMsR0FBVEEsc0JBQVo7QUFDRDs7O1dBRURDLDhCQUFxQjtBQUFBOztBQUNuQixVQUFJLGFBQUosVUFBMkI7QUFDekJsTCxvQkFBWSxDQUFaQSxHQUFnQixLQUFoQkEseUJBQThDRCxlQUFLO0FBQUEsaUJBQUksZ0JBQXZEQyxLQUF1RCxDQUFKO0FBQUEsU0FBbkRBO0FBQ0Q7O0FBRUQsVUFBSSx1QkFBSixTQUFvQztBQUNsQ0Esb0JBQVksQ0FBWkEsR0FBZ0IsS0FBaEJBLDRCQUFpREQsZUFBSztBQUFBLGlCQUFJLGFBQTFEQyxLQUEwRCxDQUFKO0FBQUEsU0FBdERBO0FBQ0FBLG9CQUFZLENBQVpBLEdBQWdCLEtBQWhCQSw0QkFBaURELGVBQUs7QUFBQSxpQkFBSSxhQUExREMsS0FBMEQsQ0FBSjtBQUFBLFNBQXREQTtBQUNEOztBQUVELFVBQUksc0JBQXNCLEtBQTFCLGlCQUFnRDtBQUM5QztBQUNEO0FBQ0Y7OztXQUVEbUwsbUNBQTBCO0FBQUE7O0FBQ3hCLFVBQU1DLGtCQUFrQixHQUFHckwsU0FBckJxTCxrQkFBcUJyTCxNQUFLLEVBQUk7QUFDbEMsZUFBTyx5QkFDSkEsS0FBSyxDQUFMQSxvQ0FBMENBLEtBQUssQ0FBTEEsZ0JBRDdDLGtCQUFPLENBQVA7QUFERjs7QUFLQSxVQUFNc0wsS0FBSyxHQUFHdEwsU0FBUnNMLEtBQVF0TCxNQUFLLEVBQUk7QUFDckIsWUFBSXFMLGtCQUFrQixDQUF0QixLQUFzQixDQUF0QixFQUErQjtBQUM3QiwrQkFBbUJyTCxLQUFLLENBQXhCO0FBREYsZUFFTyxJQUFJLENBQUMsT0FBTCxlQUF5QjtBQUM5QiwrQkFBbUJBLEtBQUssQ0FBTEEsV0FBbkI7QUFDRDtBQUxIOztBQVFBLFVBQU11TCxJQUFJLEdBQUd2TCxTQUFQdUwsSUFBT3ZMLE1BQUssRUFBSTtBQUNwQjtBQUNBLDZCQUFtQkEsS0FBSyxDQUFMQSxXQUFpQkEsS0FBSyxDQUFMQSxpQkFBakJBLFFBRWpCQSxLQUFLLENBQUxBLHFCQUEyQixPQUY3QjtBQUZGOztBQU9BLFVBQU13TCxHQUFHLEdBQUd4TCxTQUFOd0wsR0FBTXhMLE1BQUssRUFBSTtBQUNuQixZQUFJcUwsa0JBQWtCLENBQXRCLEtBQXNCLENBQXRCLEVBQStCO0FBQzdCLCtCQUFtQnJMLEtBQUssQ0FBTEEsVUFBZ0IsT0FBbkM7QUFDRDs7QUFFRDs7QUFDQSxZQUFJLHlCQUFKLFNBQW9DO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsY0FBSSxPQUFKLGNBQXVCO0FBQ3JCeUwsd0JBQVksQ0FBQyxPQUFiQSxZQUFZLENBQVpBO0FBQ0Q7O0FBRUQsZ0NBQW9CM00sVUFBVSxDQUFDa0IsZUFBSztBQUFBLG1CQUFJLGFBQVYsS0FBVSxDQUFKO0FBQUEsV0FBTixFQUE2QjBILHNCQUFzQixHQUFHLGVBQXBGLFFBQThCLENBQTlCO0FBQ0Q7QUFyQkg7O0FBd0JBaEIsb0JBQWMsQ0FBZEEsd0JBQXVDLEtBQXZDQSxrQkFBOERnRixpQkFBTyxFQUFJO0FBQ3ZFekwsb0JBQVksQ0FBWkEsOEJBQTJDRCxlQUFLO0FBQUEsaUJBQUlBLEtBQUssQ0FBekRDLGNBQW9ERCxFQUFKO0FBQUEsU0FBaERDO0FBREZ5Rzs7QUFJQSxVQUFJLEtBQUosZUFBd0I7QUFDdEJ6RyxvQkFBWSxDQUFaQSxHQUFnQixLQUFoQkEsNkJBQWtERCxlQUFLO0FBQUEsaUJBQUlzTCxLQUFLLENBQWhFckwsS0FBZ0UsQ0FBVDtBQUFBLFNBQXZEQTtBQUNBQSxvQkFBWSxDQUFaQSxHQUFnQixLQUFoQkEsMkJBQWdERCxlQUFLO0FBQUEsaUJBQUl3TCxHQUFHLENBQTVEdkwsS0FBNEQsQ0FBUDtBQUFBLFNBQXJEQTs7QUFFQTtBQUpGLGFBS087QUFDTEEsb0JBQVksQ0FBWkEsR0FBZ0IsS0FBaEJBLDRCQUFpREQsZUFBSztBQUFBLGlCQUFJc0wsS0FBSyxDQUEvRHJMLEtBQStELENBQVQ7QUFBQSxTQUF0REE7QUFDQUEsb0JBQVksQ0FBWkEsR0FBZ0IsS0FBaEJBLDJCQUFnREQsZUFBSztBQUFBLGlCQUFJdUwsSUFBSSxDQUE3RHRMLEtBQTZELENBQVI7QUFBQSxTQUFyREE7QUFDQUEsb0JBQVksQ0FBWkEsR0FBZ0IsS0FBaEJBLDBCQUErQ0QsZUFBSztBQUFBLGlCQUFJd0wsR0FBRyxDQUEzRHZMLEtBQTJELENBQVA7QUFBQSxTQUFwREE7QUFDRDtBQUNGOzs7V0FFRDBMLGtCQUFRLEtBQVJBLEVBQWdCO0FBQ2QsVUFBSSx1QkFBdUIzTCxLQUFLLENBQUxBLE9BQTNCLE9BQUksQ0FBSixFQUFrRDtBQUNoRDtBQUNEOztBQUVELFVBQU1rTCxTQUFTLEdBQUcxQyxnQkFBZ0IsQ0FBQ3hJLEtBQUssQ0FBeEMsR0FBa0MsQ0FBbEM7O0FBQ0EscUJBQWU7QUFDYkEsYUFBSyxDQUFMQTs7QUFDQTtBQUNEO0FBQ0Y7OztXQUVENEwsdUJBQWEsT0FBYkEsRUFBdUI7QUFDckIsb0JBQWNsUSxPQUFPLElBQUlBLE9BQU8sQ0FBbEJBLGFBQ1pnTCxjQUFjLENBQWRBLG9CQUFtQ2hMLE9BQU8sQ0FEOUJBLFVBQ1pnTCxDQURZaEwsR0FBZDtBQUlBLGFBQU8sb0JBQVAsT0FBTyxDQUFQO0FBQ0Q7OztXQUVEbVEseUJBQWUsS0FBZkEsRUFBZSxhQUFmQSxFQUFzQztBQUNwQyxVQUFNQyxNQUFNLEdBQUdoQixLQUFLLEtBQXBCO0FBQ0EsYUFBTy9MLG9CQUFvQixDQUFDLEtBQUQsK0JBQXFDLGFBQWhFLElBQTJCLENBQTNCO0FBQ0Q7OztXQUVEZ04sNEJBQWtCLGFBQWxCQSxFQUFrQixrQkFBbEJBLEVBQXNEO0FBQ3BELFVBQU1DLFdBQVcsR0FBRyxtQkFBcEIsYUFBb0IsQ0FBcEI7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHLG1CQUFtQnZGLGNBQWMsQ0FBZEEsOEJBQTZDLEtBQWxGLFFBQXFDQSxDQUFuQixDQUFsQjs7QUFFQSxhQUFPLFlBQVksQ0FBWixRQUFxQixLQUFyQix1QkFBaUQ7QUFDdER3RixxQkFEc0QsRUFDdERBLGFBRHNEO0FBRXREaEIsaUJBQVMsRUFGNkM7QUFHdERpQixZQUFJLEVBSGtEO0FBSXREdkIsVUFBRSxFQUFFb0I7QUFKa0QsT0FBakQsQ0FBUDtBQU1EOzs7V0FFREksb0NBQTBCLE9BQTFCQSxFQUFvQztBQUNsQyxVQUFJLEtBQUosb0JBQTZCO0FBQzNCLFlBQU1DLGVBQWUsR0FBRzNGLGNBQWMsQ0FBZEEsMkJBQXdDLEtBQWhFLGtCQUF3QkEsQ0FBeEI7QUFFQTJGLHVCQUFlLENBQWZBO0FBQ0FBLHVCQUFlLENBQWZBO0FBRUEsWUFBTUMsVUFBVSxHQUFHNUYsY0FBYyxDQUFkQSx5QkFBd0MsS0FBM0Qsa0JBQW1CQSxDQUFuQjs7QUFFQSxhQUFLLElBQUl0RyxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBR2tNLFVBQVUsQ0FBOUIsUUFBdUNsTSxDQUF2QyxJQUE0QztBQUMxQyxjQUFJakUsTUFBTSxDQUFOQSxTQUFnQm1RLFVBQVUsQ0FBVkEsQ0FBVSxDQUFWQSxjQUFoQm5RLGtCQUFnQm1RLENBQWhCblEsVUFBd0UsbUJBQTVFLE9BQTRFLENBQTVFLEVBQXlHO0FBQ3ZHbVEsc0JBQVUsQ0FBVkEsQ0FBVSxDQUFWQTtBQUNBQSxzQkFBVSxDQUFWQSxDQUFVLENBQVZBO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7O1dBRURDLDJCQUFrQjtBQUNoQixVQUFNN1EsT0FBTyxHQUFHLHVCQUF1QmdMLGNBQWMsQ0FBZEEsOEJBQTZDLEtBQXBGLFFBQXVDQSxDQUF2Qzs7QUFFQSxVQUFJLENBQUosU0FBYztBQUNaO0FBQ0Q7O0FBRUQsVUFBTThGLGVBQWUsR0FBR3JRLE1BQU0sQ0FBTkEsU0FBZ0JULE9BQU8sQ0FBUEEsYUFBaEJTLGtCQUFnQlQsQ0FBaEJTLEVBQXhCLEVBQXdCQSxDQUF4Qjs7QUFFQSwyQkFBcUI7QUFDbkIsdUNBQStCLGdDQUFnQyxhQUEvRDtBQUNBO0FBRkYsYUFHTztBQUNMLGdDQUF3QixnQ0FBZ0MsYUFBeEQ7QUFDRDtBQUNGOzs7V0FFRHNRLGdCQUFNLGdCQUFOQSxFQUFNLE9BQU5BLEVBQWtDO0FBQUE7O0FBQ2hDLFVBQU0zQixLQUFLLEdBQUcsdUJBQWQsZ0JBQWMsQ0FBZDs7QUFDQSxVQUFNNEIsYUFBYSxHQUFHaEcsY0FBYyxDQUFkQSw4QkFBNkMsS0FBbkUsUUFBc0JBLENBQXRCOztBQUNBLFVBQU1pRyxrQkFBa0IsR0FBRyxtQkFBM0IsYUFBMkIsQ0FBM0I7O0FBQ0EsVUFBTUMsV0FBVyxHQUFHbFIsT0FBTyxJQUFJLDRCQUEvQixhQUErQixDQUEvQjs7QUFFQSxVQUFNbVIsZ0JBQWdCLEdBQUcsbUJBQXpCLFdBQXlCLENBQXpCOztBQUNBLFVBQU1DLFNBQVMsR0FBR3RMLE9BQU8sQ0FBQyxLQUExQixTQUF5QixDQUF6QjtBQUVBLFVBQU1zSyxNQUFNLEdBQUdoQixLQUFLLEtBQXBCO0FBQ0EsVUFBTWlDLG9CQUFvQixHQUFHakIsTUFBTSxzQkFBbkM7QUFDQSxVQUFNa0IsY0FBYyxHQUFHbEIsTUFBTSxxQkFBN0I7O0FBQ0EsVUFBTW1CLGtCQUFrQixHQUFHLHVCQUEzQixLQUEyQixDQUEzQjs7QUFFQSxVQUFJTCxXQUFXLElBQUlBLFdBQVcsQ0FBWEEsbUJBQW5CLG1CQUFtQkEsQ0FBbkIsRUFBc0U7QUFDcEU7QUFDQTtBQUNEOztBQUVELFVBQUksS0FBSixZQUFxQjtBQUNuQjtBQUNEOztBQUVELFVBQU1NLFVBQVUsR0FBRyxxQ0FBbkIsa0JBQW1CLENBQW5COztBQUNBLFVBQUlBLFVBQVUsQ0FBZCxrQkFBaUM7QUFDL0I7QUFDRDs7QUFFRCxVQUFJLGtCQUFrQixDQUF0QixhQUFvQztBQUNsQztBQUNBO0FBQ0Q7O0FBRUQ7O0FBRUEscUJBQWU7QUFDYjtBQUNEOztBQUVEOztBQUNBOztBQUVBLFVBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QmxOLG9CQUFZLENBQVpBLFFBQXFCLE9BQXJCQSxzQkFBZ0Q7QUFDOUNpTSx1QkFBYSxFQURpQztBQUU5Q2hCLG1CQUFTLEVBRnFDO0FBRzlDaUIsY0FBSSxFQUgwQztBQUk5Q3ZCLFlBQUUsRUFBRWlDO0FBSjBDLFNBQWhENU07QUFERjs7QUFTQSxVQUFJLGlDQUFKLGdCQUFJLENBQUosRUFBd0Q7QUFDdEQyTSxtQkFBVyxDQUFYQTtBQUVBblAsY0FBTSxDQUFOQSxXQUFNLENBQU5BO0FBRUFpUCxxQkFBYSxDQUFiQTtBQUNBRSxtQkFBVyxDQUFYQTs7QUFFQSxZQUFNUSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JSLHFCQUFXLENBQVhBO0FBQ0FBLHFCQUFXLENBQVhBO0FBRUFGLHVCQUFhLENBQWJBO0FBRUE7QUFFQTVOLG9CQUFVLG1CQUFWQSxDQUFVLENBQVZBO0FBUkY7O0FBV0E7QUFuQkYsYUFvQk87QUFDTDROLHFCQUFhLENBQWJBO0FBQ0FFLG1CQUFXLENBQVhBO0FBRUE7QUFDQU8sd0JBQWdCO0FBQ2pCOztBQUVELHFCQUFlO0FBQ2I7QUFDRDtBQUNGOzs7V0FFREUsMkJBQWlCLFNBQWpCQSxFQUE2QjtBQUMzQixVQUFJLENBQUMsMkNBQUwsU0FBSyxDQUFMLEVBQTREO0FBQzFEO0FBQ0Q7O0FBRUQsVUFBSXRQLEtBQUosSUFBYTtBQUNYLGVBQU9tTixTQUFTLEtBQVRBLDhCQUFQO0FBQ0Q7O0FBRUQsYUFBT0EsU0FBUyxLQUFUQSw4QkFBUDtBQUNEOzs7V0FFRG9DLDJCQUFpQixLQUFqQkEsRUFBeUI7QUFDdkIsVUFBSSxDQUFDLGtDQUFMLEtBQUssQ0FBTCxFQUErQztBQUM3QztBQUNEOztBQUVELFVBQUl2UCxLQUFKLElBQWE7QUFDWCxlQUFPK00sS0FBSyxLQUFMQSw4QkFBUDtBQUNEOztBQUVELGFBQU9BLEtBQUssS0FBTEEsK0JBQVA7QUF6WWlDLEssQ0FBQTs7OztTQXVCeEJsRCxlQUFVO0FBQ25CO0FBQ0Q7OztTQUVVOUQsZUFBTztBQUNoQjtBQTVCaUM7OztXQThZNUJ5SiwyQkFBaUIsT0FBakJBLEVBQWlCLE1BQWpCQSxFQUFtQztBQUN4QyxVQUFNekksSUFBSSxHQUFHMEksUUFBUSxDQUFSQSw2QkFBYixNQUFhQSxDQUFiO0FBRHdDLFVBR2xDQyxPQUhrQyxHQUd4QyxJQUh3QyxDQUdsQ0EsT0FIa0M7O0FBSXhDLFVBQUksb0JBQUosVUFBZ0M7QUFDOUJBLGVBQU8scUJBQUcsT0FBSCxNQUVGMVEsTUFGRSxDQUFQMFE7QUFJRDs7QUFFRCxVQUFNQyxNQUFNLEdBQUcsc0NBQXNDRCxPQUFPLENBQTVEOztBQUVBLFVBQUksa0JBQUosVUFBZ0M7QUFDOUIzSSxZQUFJLENBQUpBO0FBREYsYUFFTyxJQUFJLGtCQUFKLFVBQWdDO0FBQ3JDLFlBQUksT0FBT0EsSUFBSSxDQUFYLE1BQVcsQ0FBWCxLQUFKLGFBQXlDO0FBQ3ZDLGdCQUFNLDBDQUFOLE1BQU0sUUFBTjtBQUNEOztBQUVEQSxZQUFJLENBQUpBLE1BQUksQ0FBSkE7QUFMSyxhQU1BLElBQUkySSxPQUFPLENBQVBBLFlBQW9CQSxPQUFPLENBQS9CLE1BQXNDO0FBQzNDM0ksWUFBSSxDQUFKQTtBQUNBQSxZQUFJLENBQUpBO0FBQ0Q7QUFDRjs7O1dBRU1ELHlCQUFlLE1BQWZBLEVBQXdCO0FBQzdCLGFBQU8sVUFBVSxZQUFZO0FBQzNCMkksZ0JBQVEsQ0FBUkE7QUFERixPQUFPLENBQVA7QUFHRDs7O1dBRU1HLDZCQUFtQixLQUFuQkEsRUFBMkI7QUFDaEMsVUFBTS9PLE1BQU0sR0FBRzlDLHNCQUFzQixDQUFyQyxJQUFxQyxDQUFyQzs7QUFFQSxVQUFJLFdBQVcsQ0FBQzhDLE1BQU0sQ0FBTkEsbUJBQWhCLG1CQUFnQkEsQ0FBaEIsRUFBZ0U7QUFDOUQ7QUFDRDs7QUFFRCxVQUFNN0IsTUFBTSxxQkFDUDBJLFdBQVcsQ0FBWEEsa0JBRFUsTUFDVkEsQ0FETyxNQUVQQSxXQUFXLENBQVhBLHVCQUZPLENBQVo7O0FBSUEsVUFBTW1JLFVBQVUsR0FBRyxrQkFBbkIsa0JBQW1CLENBQW5COztBQUVBLHNCQUFnQjtBQUNkN1EsY0FBTSxDQUFOQTtBQUNEOztBQUVEeVEsY0FBUSxDQUFSQTs7QUFFQSxzQkFBZ0I7QUFDZEEsZ0JBQVEsQ0FBUkE7QUFDRDs7QUFFRHhOLFdBQUssQ0FBTEE7QUFDRDs7OztFQXZjSCxhO0FBMGNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBQyxZQUFZLENBQVpBLDBEQUFxRXVOLFFBQVEsQ0FBN0V2TjtBQUVBQSxZQUFZLENBQVpBLGtDQUE2QyxZQUFNO0FBQ2pELE1BQU00TixTQUFTLEdBQUduSCxjQUFjLENBQWRBLEtBQWxCLGtCQUFrQkEsQ0FBbEI7O0FBRUEsT0FBSyxJQUFJdEcsQ0FBQyxHQUFMLEdBQVdHLEdBQUcsR0FBR3NOLFNBQVMsQ0FBL0IsUUFBd0N6TixDQUFDLEdBQXpDLEtBQWlEQSxDQUFqRCxJQUFzRDtBQUNwRG9OLFlBQVEsQ0FBUkEsa0JBQTJCSyxTQUFTLENBQXBDTCxDQUFvQyxDQUFwQ0EsRUFBeUNBLFFBQVEsQ0FBUkEsWUFBcUJLLFNBQVMsQ0FBdkVMLENBQXVFLENBQTlCQSxDQUF6Q0E7QUFDRDtBQUxIdk47QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFqQyxrQkFBa0IsQ0FBbEJBLFFBQWtCLENBQWxCQTtBQzVrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU04RixNQUFJLEdBQVY7QUFDQSxJQUFNQyxVQUFRLEdBQWQ7QUFDQSxJQUFNQyxXQUFTLGNBQWYsVUFBZSxDQUFmO0FBQ0EsSUFBTWdCLGNBQVksR0FBbEI7QUFFQSxJQUFNNEMsU0FBTyxHQUFHO0FBQ2R4QyxRQUFNLEVBRFE7QUFFZDBJLFFBQU0sRUFBRTtBQUZNLENBQWhCO0FBS0EsSUFBTTNGLGFBQVcsR0FBRztBQUNsQi9DLFFBQU0sRUFEWTtBQUVsQjBJLFFBQU0sRUFBRTtBQUZVLENBQXBCO0FBS0EsSUFBTUMsWUFBVSxpQkFBaEIsV0FBZ0IsQ0FBaEI7QUFDQSxJQUFNQyxhQUFXLGtCQUFqQixXQUFpQixDQUFqQjtBQUNBLElBQU1DLFlBQVUsaUJBQWhCLFdBQWdCLENBQWhCO0FBQ0EsSUFBTUMsY0FBWSxtQkFBbEIsV0FBa0IsQ0FBbEI7QUFDQSxJQUFNL0ksc0JBQW9CLGtCQUFXbkIsV0FBWCxTQUExQixjQUEwQixDQUExQjtBQUVBLElBQU1TLGlCQUFlLEdBQXJCO0FBQ0EsSUFBTTBKLG1CQUFtQixHQUF6QjtBQUNBLElBQU1DLHFCQUFxQixHQUEzQjtBQUNBLElBQU1DLG9CQUFvQixHQUExQjtBQUNBLElBQU1DLDBCQUEwQixxQkFBY0gsbUJBQWQsZUFBaEMsbUJBQWdDLENBQWhDO0FBQ0EsSUFBTUkscUJBQXFCLEdBQTNCO0FBRUEsSUFBTUMsS0FBSyxHQUFYO0FBQ0EsSUFBTUMsTUFBTSxHQUFaO0FBRUEsSUFBTUMsZ0JBQWdCLEdBQXRCO0FBQ0EsSUFBTXhKLHNCQUFvQixHQUExQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRUEsUTs7Ozs7QUFDRTVCLG9CQUFXLE9BQVhBLEVBQVcsTUFBWEEsRUFBNkI7QUFBQTs7QUFBQTs7QUFDM0I7QUFFQTtBQUNBLHFCQUFlLGtCQUFmLE1BQWUsQ0FBZjtBQUNBO0FBRUEsUUFBTXFMLFVBQVUsR0FBR2pJLGNBQWMsQ0FBZEEsS0FBbkIsc0JBQW1CQSxDQUFuQjs7QUFFQSxTQUFLLElBQUl0RyxDQUFDLEdBQUwsR0FBV0csR0FBRyxHQUFHb08sVUFBVSxDQUFoQyxRQUF5Q3ZPLENBQUMsR0FBMUMsS0FBa0RBLENBQWxELElBQXVEO0FBQ3JELFVBQU13TyxJQUFJLEdBQUdELFVBQVUsQ0FBdkIsQ0FBdUIsQ0FBdkI7QUFDQSxVQUFNaFQsUUFBUSxHQUFHRSxzQkFBc0IsQ0FBdkMsSUFBdUMsQ0FBdkM7QUFDQSxVQUFNZ1QsYUFBYSxHQUFHbkksY0FBYyxDQUFkQSxzQkFDWm9JLG1CQUFTO0FBQUEsZUFBSUEsU0FBUyxLQUFLLE9BRHJDLFFBQ21CO0FBQUEsT0FER3BJLENBQXRCOztBQUdBLFVBQUkvSyxRQUFRLEtBQVJBLFFBQXFCa1QsYUFBYSxDQUF0QyxRQUErQztBQUM3Qzs7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQ7O0FBRUEsUUFBSSxDQUFDLGVBQUwsUUFBMEI7QUFDeEIsdUNBQStCLE9BQS9CLGVBQW1ELE9BQW5ELFFBQW1ELEVBQW5EO0FBQ0Q7O0FBRUQsUUFBSSxlQUFKLFFBQXlCO0FBQ3ZCO0FBQ0Q7O0FBN0IwQjtBQURNLEcsQ0FBQTs7Ozs7V0FBQTtBQTZDbkN6SixzQkFBUztBQUNQLFVBQUksS0FBSixRQUFJLEVBQUosRUFBcUI7QUFDbkI7QUFERixhQUVPO0FBQ0w7QUFDRDtBQUNGOzs7V0FFRDJKLGdCQUFPO0FBQUE7O0FBQ0wsVUFBSSx5QkFBeUIsS0FBN0IsUUFBNkIsRUFBN0IsRUFBOEM7QUFDNUM7QUFDRDs7QUFFRCxVQUFJQyxPQUFPLEdBQVg7QUFDQTs7QUFFQSxVQUFJLGFBQUosUUFBeUI7QUFDdkIsWUFBTWxJLFFBQVEsR0FBR0osY0FBYyxDQUFkQSxpQ0FBZ0QsYUFBakUsTUFBaUJBLENBQWpCO0FBQ0FzSSxlQUFPLEdBQUd0SSxjQUFjLENBQWRBLHVCQUFzQyxhQUF0Q0EsZUFBa0VrSSxjQUFJO0FBQUEsaUJBQUksQ0FBQzlILFFBQVEsQ0FBUkEsU0FGOUQsSUFFOERBLENBQUw7QUFBQSxTQUF0RUosQ0FBVnNJLENBRnVCO0FBR3hCOztBQUVELFVBQU1DLFNBQVMsR0FBR3ZJLGNBQWMsQ0FBZEEsUUFBdUIsS0FBekMsU0FBa0JBLENBQWxCOztBQUNBLFVBQUlzSSxPQUFPLENBQVgsUUFBb0I7QUFDbEIsWUFBTUUsY0FBYyxHQUFHRixPQUFPLENBQVBBLEtBQWFKLGNBQUk7QUFBQSxpQkFBSUssU0FBUyxLQUFyRCxJQUF3QztBQUFBLFNBQWpCRCxDQUF2QjtBQUNBRyxtQkFBVyxHQUFHRCxjQUFjLEdBQUdFLFFBQVEsQ0FBUkEsWUFBSCxjQUFHQSxDQUFILEdBQTVCRDs7QUFFQSxZQUFJQSxXQUFXLElBQUlBLFdBQVcsQ0FBOUIsa0JBQWlEO0FBQy9DO0FBQ0Q7QUFDRjs7QUFFRCxVQUFNRSxVQUFVLEdBQUdwUCxZQUFZLENBQVpBLFFBQXFCLEtBQXJCQSxVQUFuQixZQUFtQkEsQ0FBbkI7O0FBQ0EsVUFBSW9QLFVBQVUsQ0FBZCxrQkFBaUM7QUFDL0I7QUFDRDs7QUFFREwsYUFBTyxDQUFQQSxRQUFnQk0sb0JBQVUsRUFBSTtBQUM1QixZQUFJTCxTQUFTLEtBQWIsWUFBOEI7QUFDNUJHLGtCQUFRLENBQVJBLGdDQUF5QztBQUFFaEssa0JBQU0sRUFBRTtBQUFWLFdBQXpDZ0s7QUFDRDs7QUFFRCxZQUFJLENBQUosYUFBa0I7QUFDaEI3TCxjQUFJLENBQUpBO0FBQ0Q7QUFQSHlMOztBQVVBLFVBQU1PLFNBQVMsR0FBRyxLQUFsQixhQUFrQixFQUFsQjs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQSxxQ0FBK0IsS0FBL0I7O0FBQ0E7O0FBRUEsVUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQjs7QUFFQTs7QUFDQTs7QUFFQTtBQUVBdlAsb0JBQVksQ0FBWkEsUUFBcUIsT0FBckJBO0FBUkY7O0FBV0EsVUFBTXdQLG9CQUFvQixHQUFHRixTQUFTLENBQVRBLENBQVMsQ0FBVEEsaUJBQTZCQSxTQUFTLENBQVRBLE1BQTFELENBQTBEQSxDQUExRDtBQUNBLFVBQU1HLFVBQVUsbUJBQWhCLG9CQUFnQixDQUFoQjs7QUFFQSxvQ0FBOEIsS0FBOUI7O0FBQ0EsaURBQW9DLGNBQXBDLFVBQW9DLENBQXBDO0FBQ0Q7OztXQUVEQyxnQkFBTztBQUFBOztBQUNMLFVBQUkseUJBQXlCLENBQUMsS0FBOUIsUUFBOEIsRUFBOUIsRUFBK0M7QUFDN0M7QUFDRDs7QUFFRCxVQUFNTixVQUFVLEdBQUdwUCxZQUFZLENBQVpBLFFBQXFCLEtBQXJCQSxVQUFuQixZQUFtQkEsQ0FBbkI7O0FBQ0EsVUFBSW9QLFVBQVUsQ0FBZCxrQkFBaUM7QUFDL0I7QUFDRDs7QUFFRCxVQUFNRSxTQUFTLEdBQUcsS0FBbEIsYUFBa0IsRUFBbEI7O0FBRUEsaURBQW9DLHNDQUFwQyxTQUFvQyxDQUFwQztBQUVBOVIsWUFBTSxDQUFDLEtBQVBBLFFBQU0sQ0FBTkE7O0FBRUE7O0FBQ0E7O0FBRUEsVUFBTW1TLGtCQUFrQixHQUFHLG1CQUEzQjs7QUFDQSxXQUFLLElBQUl4UCxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBakIsb0JBQXdDQSxDQUF4QyxJQUE2QztBQUMzQyxZQUFNaUMsT0FBTyxHQUFHLG1CQUFoQixDQUFnQixDQUFoQjtBQUNBLFlBQU11TSxJQUFJLEdBQUc5UyxzQkFBc0IsQ0FBbkMsT0FBbUMsQ0FBbkM7O0FBRUEsWUFBSThTLElBQUksSUFBSSxDQUFDLGNBQWIsSUFBYSxDQUFiLEVBQWtDO0FBQ2hDLHlDQUErQixDQUEvQixPQUErQixDQUEvQjtBQUNEO0FBQ0Y7O0FBRUQ7O0FBRUEsVUFBTVksUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQjs7QUFDQTs7QUFDQTs7QUFDQXZQLG9CQUFZLENBQVpBLFFBQXFCLFFBQXJCQTtBQUpGOztBQU9BOztBQUVBLG9DQUE4QixLQUE5QjtBQUNEOzs7V0FFRDRQLG9CQUFrQztBQUFBLFVBQXpCblUsT0FBeUIsdUVBQWYsS0FBWCxRQUEwQjtBQUNoQyxhQUFPQSxPQUFPLENBQVBBLG1CQUFQLGlCQUFPQSxDQUFQO0FBbktpQyxLLENBQUE7Ozs7V0F3S25DcVAsb0JBQVUsTUFBVkEsRUFBbUI7QUFDakJoTyxZQUFNLHFCQUFHLFNBQUgsTUFFRDBJLFdBQVcsQ0FBWEEsa0JBQThCLEtBRjFCLFFBRUpBLENBRkMsTUFHRDFJLE1BSEMsQ0FBTkE7QUFLQUEsWUFBTSxDQUFOQSxTQUFnQnlFLE9BQU8sQ0FBQ3pFLE1BQU0sQ0FOYixNQU1NLENBQXZCQSxDQU5pQjs7QUFPakJBLFlBQU0sQ0FBTkEsU0FBZ0JQLFVBQVUsQ0FBQ08sTUFBTSxDQUFqQ0EsTUFBMEIsQ0FBMUJBO0FBQ0FOLHFCQUFlLGlCQUFmQSxhQUFlLENBQWZBO0FBQ0E7QUFDRDs7O1dBRURxVCx5QkFBZ0I7QUFDZCxhQUFPLGtFQUFQO0FBQ0Q7OztXQUVEQywrQkFBc0I7QUFBQTs7QUFDcEIsVUFBSSxDQUFDLGFBQUwsUUFBMEI7QUFDeEI7QUFDRDs7QUFFRCxVQUFNakosUUFBUSxHQUFHSixjQUFjLENBQWRBLGlDQUFnRCxhQUFqRSxNQUFpQkEsQ0FBakI7QUFDQUEsb0JBQWMsQ0FBZEEsNkJBQTBDLGFBQTFDQSxlQUFzRWtJLGNBQUk7QUFBQSxlQUFJLENBQUM5SCxRQUFRLENBQVJBLFNBQS9FSixJQUErRUksQ0FBTDtBQUFBLE9BQTFFSixVQUNXaEwsaUJBQU8sRUFBSTtBQUNsQixZQUFNc1UsUUFBUSxHQUFHbFUsc0JBQXNCLENBQXZDLE9BQXVDLENBQXZDOztBQUVBLHNCQUFjO0FBQ1osNENBQStCLENBQS9CLE9BQStCLENBQS9CLEVBQTBDLGlCQUExQyxRQUEwQyxDQUExQztBQUNEO0FBTkw0SztBQVFEOzs7V0FFRHVKLG1DQUF5QixZQUF6QkEsRUFBeUIsTUFBekJBLEVBQWdEO0FBQzlDLFVBQUksQ0FBQ0MsWUFBWSxDQUFqQixRQUEwQjtBQUN4QjtBQUNEOztBQUVEQSxrQkFBWSxDQUFaQSxRQUFxQnRCLGNBQUksRUFBSTtBQUMzQixvQkFBWTtBQUNWQSxjQUFJLENBQUpBO0FBREYsZUFFTztBQUNMQSxjQUFJLENBQUpBO0FBQ0Q7O0FBRURBLFlBQUksQ0FBSkE7QUFQRnNCO0FBN01pQyxLLENBQUE7Ozs7U0FtQ3hCdEksZUFBVTtBQUNuQjtBQUNEOzs7U0FFVTlELGVBQU87QUFDaEI7QUF4Q2lDOzs7V0EwTjVCZSx5QkFBZSxNQUFmQSxFQUF3QjtBQUM3QixhQUFPLFVBQVUsWUFBWTtBQUMzQixZQUFNNEksT0FBTyxHQUFiOztBQUNBLFlBQUksOEJBQThCLGlCQUFsQyxNQUFrQyxDQUFsQyxFQUE0RDtBQUMxREEsaUJBQU8sQ0FBUEE7QUFDRDs7QUFFRCxZQUFNM0ksSUFBSSxHQUFHc0ssUUFBUSxDQUFSQSwwQkFBYixPQUFhQSxDQUFiOztBQUVBLFlBQUksa0JBQUosVUFBZ0M7QUFDOUIsY0FBSSxPQUFPdEssSUFBSSxDQUFYLE1BQVcsQ0FBWCxLQUFKLGFBQXlDO0FBQ3ZDLGtCQUFNLDBDQUFOLE1BQU0sUUFBTjtBQUNEOztBQUVEQSxjQUFJLENBQUpBLE1BQUksQ0FBSkE7QUFDRDtBQWRILE9BQU8sQ0FBUDtBQWdCRDs7OztFQTNPSCxhO0FBOE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBN0UsWUFBWSxDQUFaQSw2REFBc0UsaUJBQWlCO0FBQ3JGO0FBQ0EsTUFBSUQsS0FBSyxDQUFMQSwwQkFBaUNBLEtBQUssQ0FBTEEsa0JBQXdCQSxLQUFLLENBQUxBLDJCQUE3RCxLQUFvRztBQUNsR0EsU0FBSyxDQUFMQTtBQUNEOztBQUVELE1BQU1yRSxRQUFRLEdBQUdFLHNCQUFzQixDQUF2QyxJQUF1QyxDQUF2QztBQUNBLE1BQU1zVSxnQkFBZ0IsR0FBR3pKLGNBQWMsQ0FBZEEsS0FBekIsUUFBeUJBLENBQXpCO0FBRUF5SixrQkFBZ0IsQ0FBaEJBLFFBQXlCelUsaUJBQU8sRUFBSTtBQUNsQzBULFlBQVEsQ0FBUkEsNkJBQXNDO0FBQUVoSyxZQUFNLEVBQUU7QUFBVixLQUF0Q2dLO0FBREZlO0FBVEZsUTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQWpDLGtCQUFrQixDQUFsQkEsUUFBa0IsQ0FBbEJBO0FDNVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNOEYsTUFBSSxHQUFWO0FBQ0EsSUFBTUMsVUFBUSxHQUFkO0FBQ0EsSUFBTUMsV0FBUyxjQUFmLFVBQWUsQ0FBZjtBQUNBLElBQU1nQixjQUFZLEdBQWxCO0FBRUEsSUFBTW9MLFlBQVUsR0FBaEI7QUFDQSxJQUFNQyxTQUFTLEdBQWY7QUFDQSxJQUFNQyxTQUFPLEdBQWI7QUFDQSxJQUFNQyxZQUFZLEdBQWxCO0FBQ0EsSUFBTUMsY0FBYyxHQUFwQjtBQUNBLElBQU1DLGtCQUFrQixHQUF4QixFLENBQUE7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLHFCQUFjSCxZQUFkLGNBQThCQyxjQUE5QixjQUF2QixZQUF1QixFQUF2QjtBQUVBLElBQU12QyxZQUFVLGlCQUFoQixXQUFnQixDQUFoQjtBQUNBLElBQU1DLGNBQVksbUJBQWxCLFdBQWtCLENBQWxCO0FBQ0EsSUFBTUgsWUFBVSxpQkFBaEIsV0FBZ0IsQ0FBaEI7QUFDQSxJQUFNQyxhQUFXLGtCQUFqQixXQUFpQixDQUFqQjtBQUNBLElBQU03SSxzQkFBb0Isa0JBQVduQixXQUFYLFNBQTFCLGNBQTBCLENBQTFCO0FBQ0EsSUFBTTJNLHNCQUFzQixvQkFBYTNNLFdBQWIsU0FBNUIsY0FBNEIsQ0FBNUI7QUFDQSxJQUFNNE0sb0JBQW9CLGtCQUFXNU0sV0FBWCxTQUExQixjQUEwQixDQUExQjtBQUVBLElBQU1TLGlCQUFlLEdBQXJCO0FBQ0EsSUFBTW9NLGlCQUFpQixHQUF2QjtBQUNBLElBQU1DLGtCQUFrQixHQUF4QjtBQUNBLElBQU1DLG9CQUFvQixHQUExQjtBQUNBLElBQU1DLGlCQUFpQixHQUF2QjtBQUVBLElBQU05TCxzQkFBb0IsR0FBMUI7QUFDQSxJQUFNK0wsYUFBYSxHQUFuQjtBQUNBLElBQU1DLG1CQUFtQixHQUF6QjtBQUNBLElBQU1DLHNCQUFzQixHQUE1QjtBQUVBLElBQU1DLGFBQWEsR0FBR3JULEtBQUssaUJBQTNCO0FBQ0EsSUFBTXNULGdCQUFnQixHQUFHdFQsS0FBSyxtQkFBOUI7QUFDQSxJQUFNdVQsZ0JBQWdCLEdBQUd2VCxLQUFLLG9CQUE5QjtBQUNBLElBQU13VCxtQkFBbUIsR0FBR3hULEtBQUssc0JBQWpDO0FBQ0EsSUFBTXlULGVBQWUsR0FBR3pULEtBQUssb0JBQTdCO0FBQ0EsSUFBTTBULGNBQWMsR0FBRzFULEtBQUsscUJBQTVCO0FBRUEsSUFBTTZKLFNBQU8sR0FBRztBQUNkMUIsUUFBTSxFQUFFLElBRE0sQ0FDTixDQURNO0FBRWR3TCxVQUFRLEVBRk07QUFHZEMsV0FBUyxFQUhLO0FBSWRDLFNBQU8sRUFKTztBQUtkQyxjQUFZLEVBTEU7QUFNZEMsV0FBUyxFQUFFO0FBTkcsQ0FBaEI7QUFTQSxJQUFNM0osYUFBVyxHQUFHO0FBQ2xCakMsUUFBTSxFQURZO0FBRWxCd0wsVUFBUSxFQUZVO0FBR2xCQyxXQUFTLEVBSFM7QUFJbEJDLFNBQU8sRUFKVztBQUtsQkMsY0FBWSxFQUxNO0FBTWxCQyxXQUFTLEVBQUU7QUFOTyxDQUFwQjtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRUEsUTs7Ozs7QUFDRXhPLG9CQUFXLE9BQVhBLEVBQVcsTUFBWEEsRUFBNkI7QUFBQTs7QUFBQTs7QUFDM0I7QUFFQTtBQUNBLHNCQUFlLG1CQUFmLE1BQWUsQ0FBZjtBQUNBLG9CQUFhLFFBQWIsZUFBYSxFQUFiO0FBQ0Esd0JBQWlCLFFBQWpCLGFBQWlCLEVBQWpCO0FBTjJCO0FBRE0sRyxDQUFBOzs7OztXQUFBO0FBMEJuQzhCLHNCQUFTO0FBQ1AsYUFBTyxrQkFBa0IsS0FBbEIsSUFBa0IsRUFBbEIsR0FBZ0MsS0FBdkMsSUFBdUMsRUFBdkM7QUFDRDs7O1dBRUQySixnQkFBTztBQUNMLFVBQUkzUixVQUFVLENBQUMsS0FBWEEsUUFBVSxDQUFWQSxJQUE2QixjQUFjLEtBQS9DLEtBQWlDLENBQWpDLEVBQTREO0FBQzFEO0FBQ0Q7O0FBRUQsVUFBTThPLGFBQWEsR0FBRztBQUNwQkEscUJBQWEsRUFBRSxLQUFLNkY7QUFEQSxPQUF0QjtBQUlBLFVBQU1DLFNBQVMsR0FBRy9SLFlBQVksQ0FBWkEsUUFBcUIsS0FBckJBLHdCQUFsQixhQUFrQkEsQ0FBbEI7O0FBRUEsVUFBSStSLFNBQVMsQ0FBYixrQkFBZ0M7QUFDOUI7QUFDRDs7QUFFRCxVQUFNbEUsTUFBTSxHQUFHbUUsUUFBUSxDQUFSQSxxQkFBOEIsS0FmeEMsUUFlVUEsQ0FBZixDQWZLOztBQWlCTCxVQUFJLEtBQUosV0FBb0I7QUFDbEJ4TSxtQkFBVyxDQUFYQSxpQkFBNkIsS0FBN0JBO0FBREYsYUFFTztBQUNMO0FBcEJHO0FBd0JMO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBSSxrQkFBa0JqSyxRQUFRLENBQTFCLG1CQUNGLENBQUNzUyxNQUFNLENBQU5BLFFBREgsbUJBQ0dBLENBREgsRUFDd0M7QUFBQTs7QUFDdEMsNERBQWF0UyxRQUFRLENBQVJBLEtBQWIsbUJBQ1dvVCxjQUFJO0FBQUEsaUJBQUkzTyxZQUFZLENBQVpBLHNCQURuQixJQUNtQkEsQ0FBSjtBQUFBLFNBRGY7QUFFRDs7QUFFRDs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQUEsa0JBQVksQ0FBWkEsUUFBcUIsS0FBckJBO0FBQ0Q7OztXQUVEMFAsZ0JBQU87QUFDTCxVQUFJdlMsVUFBVSxDQUFDLEtBQVhBLFFBQVUsQ0FBVkEsSUFBNkIsQ0FBQyxjQUFjLEtBQWhELEtBQWtDLENBQWxDLEVBQTZEO0FBQzNEO0FBQ0Q7O0FBRUQsVUFBTThPLGFBQWEsR0FBRztBQUNwQkEscUJBQWEsRUFBRSxLQUFLNkY7QUFEQSxPQUF0Qjs7QUFJQTtBQUNEOzs7V0FFRHZPLG1CQUFVO0FBQ1IsVUFBSSxLQUFKLFNBQWtCO0FBQ2hCO0FBQ0Q7O0FBRUQ7QUFDRDs7O1dBRUQwTyxrQkFBUztBQUNQLHVCQUFpQixLQUFqQixhQUFpQixFQUFqQjs7QUFDQSxVQUFJLEtBQUosU0FBa0I7QUFDaEI7QUFDRDtBQS9GZ0MsSyxDQUFBOzs7O1dBb0duQ0MsdUJBQWEsYUFBYkEsRUFBNkI7QUFDM0IsVUFBTUMsU0FBUyxHQUFHblMsWUFBWSxDQUFaQSxRQUFxQixLQUFyQkEsd0JBQWxCLGFBQWtCQSxDQUFsQjs7QUFDQSxVQUFJbVMsU0FBUyxDQUFiLGtCQUFnQztBQUM5QjtBQUh5QjtBQU8zQjs7O0FBQ0EsVUFBSSxrQkFBa0I1VyxRQUFRLENBQTlCLGlCQUFnRDtBQUFBOztBQUM5Qyw0REFBYUEsUUFBUSxDQUFSQSxLQUFiLG1CQUNXb1QsY0FBSTtBQUFBLGlCQUFJM08sWUFBWSxDQUFaQSx1QkFEbkIsSUFDbUJBLENBQUo7QUFBQSxTQURmO0FBRUQ7O0FBRUQsVUFBSSxLQUFKLFNBQWtCO0FBQ2hCO0FBQ0Q7O0FBRUQ7O0FBQ0E7O0FBQ0E7O0FBQ0F3RixpQkFBVyxDQUFYQSxvQkFBZ0MsS0FBaENBO0FBQ0F4RixrQkFBWSxDQUFaQSxRQUFxQixLQUFyQkE7QUFDRDs7O1dBRUQ4SyxvQkFBVSxNQUFWQSxFQUFtQjtBQUNqQmhPLFlBQU0scUJBQ0QsaUJBREksT0FBSCxNQUVEMEksV0FBVyxDQUFYQSxrQkFBOEIsS0FGMUIsUUFFSkEsQ0FGQyxNQUdEMUksTUFIQyxDQUFOQTtBQU1BTixxQkFBZSxpQkFBZSxpQkFBOUJBLFdBQWUsQ0FBZkE7O0FBRUEsVUFBSSxRQUFPTSxNQUFNLENBQWIsMkJBQXdDLENBQUNSLFNBQVMsQ0FBQ1EsTUFBTSxDQUF6RCxTQUFrRCxDQUFsRCxJQUNGLE9BQU9BLE1BQU0sQ0FBTkEsVUFBUCwwQkFERixZQUVFO0FBQ0E7QUFDQSxjQUFNLHdCQUFpQitHLE1BQUksQ0FBM0IsV0FBdUJBLEVBQWpCLDBHQUFOO0FBQ0Q7O0FBRUQ7QUFDRDs7O1dBRUR1Tyx1QkFBYSxNQUFiQSxFQUFzQjtBQUNwQixVQUFJLHVEQUFKLGFBQW1DO0FBQ2pDLGNBQU0sY0FBTiwrREFBTSxDQUFOO0FBQ0Q7O0FBRUQsVUFBSUMsZ0JBQWdCLEdBQUcsS0FBdkI7O0FBRUEsVUFBSSwyQkFBSixVQUF5QztBQUN2Q0Esd0JBQWdCLEdBQWhCQTtBQURGLGFBRU8sSUFBSS9WLFNBQVMsQ0FBQyxhQUFkLFNBQWEsQ0FBYixFQUF1QztBQUM1QytWLHdCQUFnQixHQUFHOVYsVUFBVSxDQUFDLGFBQTlCOFYsU0FBNkIsQ0FBN0JBO0FBREssYUFFQSxJQUFJLFFBQU8sYUFBUCxlQUFKLFVBQWdEO0FBQ3JEQSx3QkFBZ0IsR0FBRyxhQUFuQkE7QUFDRDs7QUFFRCxVQUFNVCxZQUFZLEdBQUcsS0FBckIsZ0JBQXFCLEVBQXJCOztBQUNBLFVBQU1VLGVBQWUsR0FBR1YsWUFBWSxDQUFaQSxlQUE0Qlcsa0JBQVE7QUFBQSxlQUFJQSxRQUFRLENBQVJBLDBCQUFtQ0EsUUFBUSxDQUFSQSxZQUFuRyxLQUE0RDtBQUFBLE9BQXBDWCxDQUF4QjtBQUVBLHFCQUFlWSw4RUFBc0MsS0FBdENBLE9BQWYsWUFBZUEsQ0FBZjs7QUFFQSwyQkFBcUI7QUFDbkJoTixtQkFBVyxDQUFYQSxpQkFBNkIsS0FBN0JBO0FBQ0Q7QUFDRjs7O1dBRURvSyxvQkFBa0M7QUFBQSxVQUF6Qm5VLE9BQXlCLHVFQUFmLEtBQVgsUUFBMEI7QUFDaEMsYUFBT0EsT0FBTyxDQUFQQSxtQkFBUCxpQkFBT0EsQ0FBUDtBQUNEOzs7V0FFRGdYLDJCQUFrQjtBQUNoQixhQUFPaE0sY0FBYyxDQUFkQSxLQUFvQixLQUFwQkEseUJBQVAsQ0FBT0EsQ0FBUDtBQUNEOzs7V0FFRGlNLHlCQUFnQjtBQUNkLFVBQU1DLGNBQWMsR0FBRyxjQUF2Qjs7QUFFQSxVQUFJQSxjQUFjLENBQWRBLG1CQUFKLGtCQUFJQSxDQUFKLEVBQTJEO0FBQ3pEO0FBQ0Q7O0FBRUQsVUFBSUEsY0FBYyxDQUFkQSxtQkFBSixvQkFBSUEsQ0FBSixFQUE2RDtBQUMzRDtBQVJZOzs7QUFZZCxVQUFNQyxLQUFLLEdBQUcxVixnQkFBZ0IsQ0FBQyxLQUFqQkEsS0FBZ0IsQ0FBaEJBLDhDQUFkOztBQUVBLFVBQUl5VixjQUFjLENBQWRBLG1CQUFKLGlCQUFJQSxDQUFKLEVBQTBEO0FBQ3hELGVBQU9DLEtBQUssc0JBQVo7QUFDRDs7QUFFRCxhQUFPQSxLQUFLLHlCQUFaO0FBQ0Q7OztXQUVEQyx5QkFBZ0I7QUFDZCxhQUFPLHlEQUFQO0FBQ0Q7OztXQUVEQyxzQkFBYTtBQUFBOztBQUFBLFVBQ0g3TSxNQURHLEdBQ1EsS0FBbkIsT0FEVyxDQUNIQSxNQURHOztBQUdYLFVBQUksa0JBQUosVUFBZ0M7QUFDOUIsZUFBT0EsTUFBTSxDQUFOQSxlQUFzQlgsYUFBRztBQUFBLGlCQUFJcEosTUFBTSxDQUFOQSxjQUFwQyxFQUFvQ0EsQ0FBSjtBQUFBLFNBQXpCK0osQ0FBUDtBQUNEOztBQUVELFVBQUksa0JBQUosWUFBa0M7QUFDaEMsZUFBTzhNLG9CQUFVO0FBQUEsaUJBQUk5TSxNQUFNLGFBQWEsUUFBeEMsUUFBMkIsQ0FBVjtBQUFBLFNBQWpCO0FBQ0Q7O0FBRUQ7QUFDRDs7O1dBRUQrTSw0QkFBbUI7QUFDakIsVUFBTUMscUJBQXFCLEdBQUc7QUFDNUJDLGlCQUFTLEVBQUUsS0FEaUIsYUFDakIsRUFEaUI7QUFFNUJDLGlCQUFTLEVBQUUsQ0FBQztBQUNWalYsY0FBSSxFQURNO0FBRVZrVixpQkFBTyxFQUFFO0FBQ1AzQixvQkFBUSxFQUFFLGFBQWFBO0FBRGhCO0FBRkMsU0FBRCxFQU1YO0FBQ0V2VCxjQUFJLEVBRE47QUFFRWtWLGlCQUFPLEVBQUU7QUFDUG5OLGtCQUFNLEVBQUU7QUFERDtBQUZYLFNBTlc7QUFGaUIsT0FBOUIsQ0FEaUI7O0FBa0JqQixVQUFJLHlCQUFKLFVBQXVDO0FBQ3JDZ04sNkJBQXFCLENBQXJCQSxZQUFrQyxDQUFDO0FBQ2pDL1UsY0FBSSxFQUQ2QjtBQUVqQ21WLGlCQUFPLEVBQUU7QUFGd0IsU0FBRCxDQUFsQ0o7QUFJRDs7QUFFRCwrQkFBTyxxQkFBUCxNQUVNLE9BQU8sYUFBUCw4QkFBa0QsMEJBQWxELHFCQUFrRCxDQUFsRCxHQUFxRyxhQUF6RyxZQUZGO0FBSUQ7OztXQUVESyxnQ0FBaUM7QUFBQSxVQUFqQixHQUFpQixTQUFqQixHQUFpQjtBQUFBLFVBQVYzVSxNQUFVLFNBQVZBLE1BQVU7QUFDL0IsVUFBTTRVLEtBQUssR0FBRzlNLGNBQWMsQ0FBZEEsNkJBQTRDLEtBQTVDQSxjQUFkLFNBQWNBLENBQWQ7O0FBRUEsVUFBSSxDQUFDOE0sS0FBSyxDQUFWLFFBQW1CO0FBQ2pCO0FBSjZCO0FBUS9COzs7QUFDQXpVLDBCQUFvQixnQkFBZ0I2RCxHQUFHLEtBQW5CLGdCQUF3QyxDQUFDNFEsS0FBSyxDQUFMQSxTQUE3RHpVLE1BQTZEeVUsQ0FBekMsQ0FBcEJ6VTtBQS9QaUMsSyxDQUFBOzs7O1NBWXhCNkksZUFBVTtBQUNuQjtBQUNEOzs7U0FFVU8sZUFBYztBQUN2QjtBQUNEOzs7U0FFVXJFLGVBQU87QUFDaEI7QUFyQmlDOzs7V0FvUTVCZSx5QkFBZSxNQUFmQSxFQUF3QjtBQUM3QixhQUFPLFVBQVUsWUFBWTtBQUMzQixZQUFNQyxJQUFJLEdBQUdtTixRQUFRLENBQVJBLDBCQUFiLE1BQWFBLENBQWI7O0FBRUEsWUFBSSxrQkFBSixVQUFnQztBQUM5QjtBQUNEOztBQUVELFlBQUksT0FBT25OLElBQUksQ0FBWCxNQUFXLENBQVgsS0FBSixhQUF5QztBQUN2QyxnQkFBTSwwQ0FBTixNQUFNLFFBQU47QUFDRDs7QUFFREEsWUFBSSxDQUFKQSxNQUFJLENBQUpBO0FBWEYsT0FBTyxDQUFQO0FBYUQ7OztXQUVNMk8sb0JBQVUsS0FBVkEsRUFBa0I7QUFDdkIsVUFBSXpULEtBQUssS0FBS0EsS0FBSyxDQUFMQSxpQ0FBd0NBLEtBQUssQ0FBTEEsb0JBQTBCQSxLQUFLLENBQUxBLFFBQWhGLFNBQVMsQ0FBVCxFQUF5RztBQUN2RztBQUNEOztBQUVELFVBQU0wVCxPQUFPLEdBQUdoTixjQUFjLENBQWRBLEtBQWhCLHNCQUFnQkEsQ0FBaEI7O0FBRUEsV0FBSyxJQUFJdEcsQ0FBQyxHQUFMLEdBQVdHLEdBQUcsR0FBR21ULE9BQU8sQ0FBN0IsUUFBc0N0VCxDQUFDLEdBQXZDLEtBQStDQSxDQUEvQyxJQUFvRDtBQUNsRCxZQUFNdVQsT0FBTyxHQUFHMUIsUUFBUSxDQUFSQSxZQUFxQnlCLE9BQU8sQ0FBNUMsQ0FBNEMsQ0FBNUJ6QixDQUFoQjs7QUFDQSxZQUFJLFlBQVkwQixPQUFPLENBQVBBLHNCQUFoQixPQUFxRDtBQUNuRDtBQUNEOztBQUVELFlBQUksQ0FBQ0EsT0FBTyxDQUFaLFFBQUtBLEVBQUwsRUFBeUI7QUFDdkI7QUFDRDs7QUFFRCxZQUFNekgsYUFBYSxHQUFHO0FBQ3BCQSx1QkFBYSxFQUFFeUgsT0FBTyxDQUFDNUI7QUFESCxTQUF0Qjs7QUFJQSxtQkFBVztBQUNULGNBQU02QixZQUFZLEdBQUc1VCxLQUFLLENBQTFCLFlBQXFCQSxFQUFyQjtBQUNBLGNBQU02VCxZQUFZLEdBQUdELFlBQVksQ0FBWkEsU0FBc0JELE9BQU8sQ0FBbEQsS0FBcUJDLENBQXJCOztBQUNBLGNBQ0VBLFlBQVksQ0FBWkEsU0FBc0JELE9BQU8sQ0FBN0JDLGFBQ0NELE9BQU8sQ0FBUEEsa0NBQTBDLENBRDNDQyxnQkFFQ0QsT0FBTyxDQUFQQSxtQ0FISCxjQUlFO0FBQ0E7QUFSTzs7O0FBWVQsY0FBSUEsT0FBTyxDQUFQQSxlQUF1QjNULEtBQUssQ0FBNUIyVCxZQUEwQzNULEtBQUssQ0FBTEEsb0JBQTBCQSxLQUFLLENBQUxBLFFBQTNCLFNBQUNBLElBQW9ELDBDQUEwQ0EsS0FBSyxDQUFMQSxPQUE1SSxPQUFrRyxDQUE5RjJULENBQUosRUFBb0s7QUFDbEs7QUFDRDs7QUFFRCxjQUFJM1QsS0FBSyxDQUFMQSxTQUFKLFNBQTRCO0FBQzFCa00seUJBQWEsQ0FBYkE7QUFDRDtBQUNGOztBQUVEeUgsZUFBTyxDQUFQQTtBQUNEO0FBQ0Y7OztXQUVNRyw4QkFBb0IsT0FBcEJBLEVBQThCO0FBQ25DLGFBQU9oWSxzQkFBc0IsQ0FBdEJBLE9BQXNCLENBQXRCQSxJQUFtQ0osT0FBTyxDQUFqRDtBQUNEOzs7V0FFTXFZLCtCQUFxQixLQUFyQkEsRUFBNkI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFJLHVCQUF1Qi9ULEtBQUssQ0FBTEEsT0FBdkIsV0FDRkEsS0FBSyxDQUFMQSxxQkFBNEJBLEtBQUssQ0FBTEEseUJBQzFCQSxLQUFLLENBQUxBLDBCQUFnQ0EsS0FBSyxDQUFMQSxRQUFqQyxZQUFDQSxJQUNBQSxLQUFLLENBQUxBLGVBSEEsYUFHQUEsQ0FGMEJBLENBRDFCLEdBSUYsQ0FBQzBRLGNBQWMsQ0FBZEEsS0FBb0IxUSxLQUFLLENBSjVCLEdBSUcwUSxDQUpILEVBSW1DO0FBQ2pDO0FBQ0Q7O0FBRUQsVUFBTXNELFFBQVEsR0FBRyx3QkFBakIsaUJBQWlCLENBQWpCOztBQUVBLFVBQUksYUFBYWhVLEtBQUssQ0FBTEEsUUFBakIsY0FBMkM7QUFDekM7QUFDRDs7QUFFREEsV0FBSyxDQUFMQTtBQUNBQSxXQUFLLENBQUxBOztBQUVBLFVBQUk1QyxVQUFVLENBQWQsSUFBYyxDQUFkLEVBQXNCO0FBQ3BCO0FBQ0Q7O0FBRUQsVUFBTTZXLGVBQWUsR0FBRyw4Q0FBNEN2TixjQUFjLENBQWRBLG1DQUFwRSxDQUFvRUEsQ0FBcEU7QUFDQSxVQUFNckMsUUFBUSxHQUFHNE4sUUFBUSxDQUFSQSxvQkFBakIsZUFBaUJBLENBQWpCOztBQUVBLFVBQUlqUyxLQUFLLENBQUxBLFFBQUosY0FBOEI7QUFDNUJxRSxnQkFBUSxDQUFSQTtBQUNBO0FBQ0Q7O0FBRUQsVUFBSXJFLEtBQUssQ0FBTEEsd0JBQThCQSxLQUFLLENBQUxBLFFBQWxDLGdCQUFnRTtBQUM5RCxZQUFJLENBQUosVUFBZTtBQUNicUUsa0JBQVEsQ0FBUkE7QUFDRDs7QUFFREEsZ0JBQVEsQ0FBUkE7O0FBQ0E7QUFDRDs7QUFFRCxVQUFJLGFBQWFyRSxLQUFLLENBQUxBLFFBQWpCLFdBQTBDO0FBQ3hDaVMsZ0JBQVEsQ0FBUkE7QUFDRDtBQUNGOzs7O0VBdlhILGE7QUEwWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFoUyxZQUFZLENBQVpBLDZEQUF3RWdTLFFBQVEsQ0FBaEZoUztBQUNBQSxZQUFZLENBQVpBLG9EQUFpRWdTLFFBQVEsQ0FBekVoUztBQUNBQSxZQUFZLENBQVpBLHFDQUFnRGdTLFFBQVEsQ0FBeERoUztBQUNBQSxZQUFZLENBQVpBLG1DQUFnRGdTLFFBQVEsQ0FBeERoUztBQUNBQSxZQUFZLENBQVpBLDZEQUFzRSxpQkFBaUI7QUFDckZELE9BQUssQ0FBTEE7QUFDQWlTLFVBQVEsQ0FBUkE7QUFGRmhTO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBakMsa0JBQWtCLENBQWxCQSxRQUFrQixDQUFsQkE7QUNoZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLElBQU1rVyxzQkFBc0IsR0FBNUI7QUFDQSxJQUFNQyx1QkFBdUIsR0FBN0I7O0lBRUEsZTtBQUNFN1EsNkJBQWM7QUFBQTs7QUFDWixvQkFBZ0I5SCxRQUFRLENBQXhCO0FBQ0Q7Ozs7V0FFRDRZLG9CQUFXO0FBQ1Q7QUFDQSxVQUFNQyxhQUFhLEdBQUc3WSxRQUFRLENBQVJBLGdCQUF0QjtBQUNBLGFBQU9ELElBQUksQ0FBSkEsSUFBU1MsTUFBTSxDQUFOQSxhQUFoQixhQUFPVCxDQUFQO0FBQ0Q7OztXQUVEb1UsZ0JBQU87QUFDTCxVQUFNMkUsS0FBSyxHQUFHLEtBQWQsUUFBYyxFQUFkOztBQUNBLFdBRkssZ0JBRUwsR0FGSzs7O0FBSUwsaUNBQTJCLEtBQTNCLDBCQUEwREMseUJBQWU7QUFBQSxlQUFJQSxlQUFlLEdBSnZGLEtBSW9FO0FBQUEsT0FBekUsRUFKSzs7O0FBTUwseUVBQW1FQSx5QkFBZTtBQUFBLGVBQUlBLGVBQWUsR0FBckcsS0FBa0Y7QUFBQSxPQUFsRjs7QUFDQSx5RUFBbUVBLHlCQUFlO0FBQUEsZUFBSUEsZUFBZSxHQUFyRyxLQUFrRjtBQUFBLE9BQWxGO0FBQ0Q7OztXQUVEQyw0QkFBbUI7QUFDakIsaUNBQTJCLEtBQTNCOztBQUNBO0FBQ0Q7OztXQUVEQywrQkFBcUIsUUFBckJBLEVBQXFCLFNBQXJCQSxFQUFxQixRQUFyQkEsRUFBcUQ7QUFBQTs7QUFDbkQsVUFBTUMsY0FBYyxHQUFHLEtBQXZCLFFBQXVCLEVBQXZCOztBQUNBLFVBQU1DLG9CQUFvQixHQUFHalosU0FBdkJpWixvQkFBdUJqWixRQUFPLEVBQUk7QUFDdEMsWUFBSUEsT0FBTyxLQUFLLFFBQVpBLFlBQTZCTSxNQUFNLENBQU5BLGFBQW9CTixPQUFPLENBQVBBLGNBQXJELGdCQUEyRjtBQUN6RjtBQUNEOztBQUVEOztBQUNBLFlBQU02WSxlQUFlLEdBQUd2WSxNQUFNLENBQU5BLDBCQUF4QixTQUF3QkEsQ0FBeEI7QUFDQU4sZUFBTyxDQUFQQSw2QkFBOEJvQyxRQUFRLENBQUMzQixNQUFNLENBQU5BLFdBQXZDVCxlQUF1Q1MsQ0FBRCxDQUF0Q1Q7QUFQRjs7QUFVQTtBQUNEOzs7V0FFRGtaLGlCQUFRO0FBQ04sbUNBQTZCLEtBQTdCOztBQUNBLG1DQUE2QixLQUE3Qjs7QUFDQTs7QUFDQTtBQUNEOzs7V0FFREMsK0JBQXFCLE9BQXJCQSxFQUFxQixTQUFyQkEsRUFBMEM7QUFDeEMsVUFBTUMsV0FBVyxHQUFHcFosT0FBTyxDQUFQQSxNQUFwQixTQUFvQkEsQ0FBcEI7O0FBQ0EsdUJBQWlCO0FBQ2YrSixtQkFBVyxDQUFYQTtBQUNEO0FBQ0Y7OztXQUVEc1AsaUNBQXVCLFFBQXZCQSxFQUF1QixTQUF2QkEsRUFBNkM7QUFDM0MsVUFBTUosb0JBQW9CLEdBQUdqWixTQUF2QmlaLG9CQUF1QmpaLFFBQU8sRUFBSTtBQUN0QyxZQUFNb0IsS0FBSyxHQUFHMkksV0FBVyxDQUFYQSwwQkFBZCxTQUFjQSxDQUFkOztBQUNBLFlBQUksaUJBQUosYUFBa0M7QUFDaEMvSixpQkFBTyxDQUFQQTtBQURGLGVBRU87QUFDTCtKLHFCQUFXLENBQVhBO0FBQ0EvSixpQkFBTyxDQUFQQTtBQUNEO0FBUEg7O0FBVUE7QUFDRDs7O1dBRURzWixvQ0FBMEIsUUFBMUJBLEVBQTBCLFFBQTFCQSxFQUErQztBQUM3QyxVQUFJelksU0FBUyxDQUFiLFFBQWEsQ0FBYixFQUF5QjtBQUN2QjBZLGdCQUFRLENBQVJBLFFBQVEsQ0FBUkE7QUFERixhQUVPO0FBQ0x2TyxzQkFBYyxDQUFkQSxlQUE4QixLQUE5QkE7QUFDRDtBQUNGOzs7V0FFRHdPLHlCQUFnQjtBQUNkLGFBQU8sa0JBQVA7QUFDRDs7Ozs7QUM3Rkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQSxJQUFNdE4sU0FBTyxHQUFHO0FBQ2R1TixXQUFTLEVBREs7QUFFZGpZLFdBQVMsRUFGSztBQUVHO0FBQ2pCeUcsWUFBVSxFQUhJO0FBSWR5UixhQUFXLEVBSkc7QUFJTztBQUNyQkMsZUFBYSxFQUFFO0FBTEQsQ0FBaEI7QUFRQSxJQUFNbE4sYUFBVyxHQUFHO0FBQ2xCZ04sV0FBUyxFQURTO0FBRWxCalksV0FBUyxFQUZTO0FBR2xCeUcsWUFBVSxFQUhRO0FBSWxCeVIsYUFBVyxFQUpPO0FBS2xCQyxlQUFhLEVBQUU7QUFMRyxDQUFwQjtBQU9BLElBQU12UixNQUFJLEdBQVY7QUFDQSxJQUFNVSxpQkFBZSxHQUFyQjtBQUNBLElBQU1DLGlCQUFlLEdBQXJCO0FBRUEsSUFBTTZRLGVBQWUsMEJBQXJCLE1BQXFCLENBQXJCOztJQUVBLFE7QUFDRWhTLG9CQUFXLE1BQVhBLEVBQW9CO0FBQUE7O0FBQ2xCLG1CQUFlLGdCQUFmLE1BQWUsQ0FBZjtBQUNBO0FBQ0E7QUFDRDs7OztXQUVEeUwsY0FBSSxRQUFKQSxFQUFlO0FBQ2IsVUFBSSxDQUFDLGFBQUwsV0FBNkI7QUFDM0IxUSxlQUFPLENBQVBBLFFBQU8sQ0FBUEE7QUFDQTtBQUNEOztBQUVEOztBQUVBLFVBQUksYUFBSixZQUE2QjtBQUMzQlosY0FBTSxDQUFDLEtBQVBBLFdBQU8sRUFBRCxDQUFOQTtBQUNEOztBQUVEOztBQUVBLDZCQUF1QixZQUFNO0FBQzNCWSxlQUFPLENBQVBBLFFBQU8sQ0FBUEE7QUFERjtBQUdEOzs7V0FFRHNSLGNBQUksUUFBSkEsRUFBZTtBQUFBOztBQUNiLFVBQUksQ0FBQyxhQUFMLFdBQTZCO0FBQzNCdFIsZUFBTyxDQUFQQSxRQUFPLENBQVBBO0FBQ0E7QUFDRDs7QUFFRDs7QUFFQSw2QkFBdUIsWUFBTTtBQUMzQjs7QUFDQUEsZUFBTyxDQUFQQSxRQUFPLENBQVBBO0FBRkY7QUFsQ1csSyxDQUFBOzs7O1dBMENia1gsdUJBQWM7QUFDWixVQUFJLENBQUMsS0FBTCxVQUFvQjtBQUNsQixZQUFNQyxRQUFRLEdBQUdoYSxRQUFRLENBQVJBLGNBQWpCLEtBQWlCQSxDQUFqQjtBQUNBZ2EsZ0JBQVEsQ0FBUkEsWUFBcUIsYUFBckJBOztBQUNBLFlBQUksYUFBSixZQUE2QjtBQUMzQkEsa0JBQVEsQ0FBUkE7QUFDRDs7QUFFRDtBQUNEOztBQUVELGFBQU8sS0FBUDtBQUNEOzs7V0FFRHpLLG9CQUFVLE1BQVZBLEVBQW1CO0FBQ2pCaE8sWUFBTSxxQkFBRyxTQUFILE1BRUEsd0NBQUosRUFGSSxDQUFOQSxDQURpQjs7QUFPakJBLFlBQU0sQ0FBTkEsY0FBcUJQLFVBQVUsQ0FBQ08sTUFBTSxDQUF0Q0EsV0FBK0IsQ0FBL0JBO0FBQ0FOLHFCQUFlLGlCQUFmQSxhQUFlLENBQWZBO0FBQ0E7QUFDRDs7O1dBRURnWixtQkFBVTtBQUFBOztBQUNSLFVBQUksS0FBSixhQUFzQjtBQUNwQjtBQUNEOztBQUVELHNDQUFnQyxLQUFoQyxXQUFnQyxFQUFoQzs7QUFFQXhWLGtCQUFZLENBQVpBLEdBQWdCLEtBQWhCQSxXQUFnQixFQUFoQkEsbUJBQXFELFlBQU07QUFDekQ1QixlQUFPLENBQUMsZ0JBQVJBLGFBQU8sQ0FBUEE7QUFERjRCO0FBSUE7QUFDRDs7O1dBRUR1RCxtQkFBVTtBQUNSLFVBQUksQ0FBQyxLQUFMLGFBQXVCO0FBQ3JCO0FBQ0Q7O0FBRUR2RCxrQkFBWSxDQUFaQSxJQUFpQixLQUFqQkE7O0FBRUE7O0FBQ0E7QUFDRDs7O1dBRUR5ViwyQkFBaUIsUUFBakJBLEVBQTRCO0FBQzFCcFgsNEJBQXNCLFdBQVcsS0FBWCxXQUFXLEVBQVgsRUFBK0IsYUFBckRBLFVBQXNCLENBQXRCQTtBQUNEOzs7OztBQzlISDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQU1BLElBQU1zSixTQUFPLEdBQUc7QUFDZCtOLGFBQVcsRUFERztBQUNLO0FBQ25CQyxXQUFTLEVBQUU7QUFGRyxDQUFoQjtBQUtBLElBQU16TixhQUFXLEdBQUc7QUFDbEJ3TixhQUFXLEVBRE87QUFFbEJDLFdBQVMsRUFBRTtBQUZPLENBQXBCO0FBS0EsSUFBTTlSLE1BQUksR0FBVjtBQUNBLElBQU1DLFVBQVEsR0FBZDtBQUNBLElBQU1DLFdBQVMsY0FBZixVQUFlLENBQWY7QUFDQSxJQUFNNlIsZUFBYSxvQkFBbkIsV0FBbUIsQ0FBbkI7QUFDQSxJQUFNQyxpQkFBaUIsd0JBQXZCLFdBQXVCLENBQXZCO0FBRUEsSUFBTXhGLE9BQU8sR0FBYjtBQUNBLElBQU15RixlQUFlLEdBQXJCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQXRCOztJQUVBLFM7QUFDRTFTLHFCQUFXLE1BQVhBLEVBQW9CO0FBQUE7O0FBQ2xCLG1CQUFlLGdCQUFmLE1BQWUsQ0FBZjtBQUNBO0FBQ0E7QUFDRDs7OztXQUVEMlMsb0JBQVc7QUFBQTs7QUFBQSwwQkFDMEIsS0FBbkMsT0FEUztBQUFBLFVBQ0gsV0FERyxpQkFDSCxXQURHO0FBQUEsVUFDWUwsU0FEWixpQkFDWUEsU0FEWjs7QUFHVCxVQUFJLEtBQUosV0FBb0I7QUFDbEI7QUFDRDs7QUFFRCxxQkFBZTtBQUNiRCxtQkFBVyxDQUFYQTtBQUNEOztBQUVEMVYsa0JBQVksQ0FBWkEsY0FYUyxXQVdUQSxFQVhTOztBQVlUQSxrQkFBWSxDQUFaQSw4QkFBeUNELGVBQUs7QUFBQSxlQUFJLHVCQUFsREMsS0FBa0QsQ0FBSjtBQUFBLE9BQTlDQTtBQUNBQSxrQkFBWSxDQUFaQSxnQ0FBNkNELGVBQUs7QUFBQSxlQUFJLHVCQUF0REMsS0FBc0QsQ0FBSjtBQUFBLE9BQWxEQTtBQUVBO0FBQ0Q7OztXQUVEaVcsc0JBQWE7QUFDWCxVQUFJLENBQUMsS0FBTCxXQUFxQjtBQUNuQjtBQUNEOztBQUVEO0FBQ0FqVyxrQkFBWSxDQUFaQTtBQS9CWSxLLENBQUE7Ozs7V0FvQ2RrVyx3QkFBYyxLQUFkQSxFQUFzQjtBQUFBLFVBQ1p2WCxNQURZLEdBQ3BCLEtBRG9CLENBQ1pBLE1BRFk7QUFBQSxVQUVaK1csV0FGWSxHQUVJLEtBQXhCLE9BRm9CLENBRVpBLFdBRlk7O0FBSXBCLFVBQUkvVyxNQUFNLEtBQU5BLFlBQXVCQSxNQUFNLEtBQTdCQSxlQUFpRCtXLFdBQVcsQ0FBWEEsU0FBckQsTUFBcURBLENBQXJELEVBQW1GO0FBQ2pGO0FBQ0Q7O0FBRUQsVUFBTVMsUUFBUSxHQUFHMVAsY0FBYyxDQUFkQSxrQkFBakIsV0FBaUJBLENBQWpCOztBQUVBLFVBQUkwUCxRQUFRLENBQVJBLFdBQUosR0FBMkI7QUFDekJULG1CQUFXLENBQVhBO0FBREYsYUFFTyxJQUFJLDhCQUFKLGtCQUFvRDtBQUN6RFMsZ0JBQVEsQ0FBQ0EsUUFBUSxDQUFSQSxTQUFUQSxDQUFRLENBQVJBO0FBREssYUFFQTtBQUNMQSxnQkFBUSxDQUFSQSxDQUFRLENBQVJBO0FBQ0Q7QUFDRjs7O1dBRURDLHdCQUFjLEtBQWRBLEVBQXNCO0FBQ3BCLFVBQUlyVyxLQUFLLENBQUxBLFFBQUosU0FBMkI7QUFDekI7QUFDRDs7QUFFRCxrQ0FBNEJBLEtBQUssQ0FBTEEsOEJBQTVCO0FBQ0Q7OztXQUVEK0ssb0JBQVUsTUFBVkEsRUFBbUI7QUFDakJoTyxZQUFNLHFCQUFHLFNBQUgsTUFFQSx3Q0FBSixFQUZJLENBQU5BO0FBSUFOLHFCQUFlLGlCQUFmQSxhQUFlLENBQWZBO0FBQ0E7QUFDRDs7Ozs7QUNyR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNcUgsTUFBSSxHQUFWO0FBQ0EsSUFBTUMsVUFBUSxHQUFkO0FBQ0EsSUFBTUMsV0FBUyxjQUFmLFVBQWUsQ0FBZjtBQUNBLElBQU1nQixjQUFZLEdBQWxCO0FBQ0EsSUFBTW9MLFlBQVUsR0FBaEI7QUFFQSxJQUFNeEksU0FBTyxHQUFHO0FBQ2Q0TixVQUFRLEVBRE07QUFFZDFOLFVBQVEsRUFGTTtBQUdkd08sT0FBSyxFQUFFO0FBSE8sQ0FBaEI7QUFNQSxJQUFNbk8sYUFBVyxHQUFHO0FBQ2xCcU4sVUFBUSxFQURVO0FBRWxCMU4sVUFBUSxFQUZVO0FBR2xCd08sT0FBSyxFQUFFO0FBSFcsQ0FBcEI7QUFNQSxJQUFNckksWUFBVSxpQkFBaEIsV0FBZ0IsQ0FBaEI7QUFDQSxJQUFNc0ksb0JBQW9CLDBCQUExQixXQUEwQixDQUExQjtBQUNBLElBQU1ySSxjQUFZLG1CQUFsQixXQUFrQixDQUFsQjtBQUNBLElBQU1ILFlBQVUsaUJBQWhCLFdBQWdCLENBQWhCO0FBQ0EsSUFBTUMsYUFBVyxrQkFBakIsV0FBaUIsQ0FBakI7QUFDQSxJQUFNd0ksWUFBWSxtQkFBbEIsV0FBa0IsQ0FBbEI7QUFDQSxJQUFNQyxtQkFBbUIsMEJBQXpCLFdBQXlCLENBQXpCO0FBQ0EsSUFBTUMsdUJBQXFCLDRCQUEzQixXQUEyQixDQUEzQjtBQUNBLElBQU1DLHFCQUFxQiw0QkFBM0IsV0FBMkIsQ0FBM0I7QUFDQSxJQUFNQyx1QkFBdUIsOEJBQTdCLFdBQTZCLENBQTdCO0FBQ0EsSUFBTXpSLHNCQUFvQixrQkFBV25CLFdBQVgsU0FBMUIsY0FBMEIsQ0FBMUI7QUFFQSxJQUFNNlMsZUFBZSxHQUFyQjtBQUNBLElBQU1yUyxpQkFBZSxHQUFyQjtBQUNBLElBQU1DLGlCQUFlLEdBQXJCO0FBQ0EsSUFBTXFTLGlCQUFpQixHQUF2QjtBQUVBLElBQU1DLGVBQWEsR0FBbkI7QUFDQSxJQUFNQyxlQUFlLEdBQXJCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQXpCO0FBQ0EsSUFBTS9SLHNCQUFvQixHQUExQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRUEsSzs7Ozs7QUFDRTVCLGlCQUFXLE9BQVhBLEVBQVcsTUFBWEEsRUFBNkI7QUFBQTs7QUFBQTs7QUFDM0I7QUFFQSxzQkFBZSxtQkFBZixNQUFlLENBQWY7QUFDQSxzQkFBZW9ELGNBQWMsQ0FBZEEseUJBQXdDLFFBQXZELFFBQWVBLENBQWY7QUFDQSx3QkFBaUIsUUFBakIsbUJBQWlCLEVBQWpCO0FBQ0EseUJBQWtCLFFBQWxCLG9CQUFrQixFQUFsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFrQixJQUFsQixlQUFrQixFQUFsQjtBQVYyQjtBQURHLEcsQ0FBQTs7Ozs7V0FBQTtBQTBCaEN0QixvQkFBTSxhQUFOQSxFQUFzQjtBQUNwQixhQUFPLGdCQUFnQixLQUFoQixJQUFnQixFQUFoQixHQUE4QixVQUFyQyxhQUFxQyxDQUFyQztBQUNEOzs7V0FFRDJKLGNBQUksYUFBSkEsRUFBb0I7QUFBQTs7QUFDbEIsVUFBSSxpQkFBaUIsS0FBckIsa0JBQTRDO0FBQzFDO0FBQ0Q7O0FBRUQsVUFBTWlELFNBQVMsR0FBRyxZQUFZLENBQVosUUFBcUIsS0FBckIsd0JBQWdEO0FBQ2hFOUY7QUFEZ0UsT0FBaEQsQ0FBbEI7O0FBSUEsVUFBSThGLFNBQVMsQ0FBYixrQkFBZ0M7QUFDOUI7QUFDRDs7QUFFRDs7QUFFQSxVQUFJLEtBQUosV0FBSSxFQUFKLEVBQXdCO0FBQ3RCO0FBQ0Q7O0FBRUQ7O0FBRUF4VyxjQUFRLENBQVJBOztBQUVBOztBQUVBOztBQUNBOztBQUVBeUUsa0JBQVksQ0FBWkEsR0FBZ0IsS0FBaEJBLGtDQUF1RCxZQUFNO0FBQzNEQSxvQkFBWSxDQUFaQSxJQUFpQixRQUFqQkEsaUNBQXVERCxlQUFLLEVBQUk7QUFDOUQsY0FBSUEsS0FBSyxDQUFMQSxXQUFpQixRQUFyQixVQUFvQztBQUNsQztBQUNEO0FBSEhDO0FBREZBOztBQVFBLHlCQUFtQjtBQUFBLGVBQU0scUJBQXpCLGFBQXlCLENBQU47QUFBQSxPQUFuQjtBQUNEOzs7V0FFRDBQLGdCQUFPO0FBQUE7O0FBQ0wsVUFBSSxDQUFDLEtBQUQsWUFBa0IsS0FBdEIsa0JBQTZDO0FBQzNDO0FBQ0Q7O0FBRUQsVUFBTXlDLFNBQVMsR0FBR25TLFlBQVksQ0FBWkEsUUFBcUIsS0FBckJBLFVBQWxCLFlBQWtCQSxDQUFsQjs7QUFFQSxVQUFJbVMsU0FBUyxDQUFiLGtCQUFnQztBQUM5QjtBQUNEOztBQUVEOztBQUNBLFVBQU16TyxVQUFVLEdBQUcsS0FBbkIsV0FBbUIsRUFBbkI7O0FBRUEsc0JBQWdCO0FBQ2Q7QUFDRDs7QUFFRDs7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTFELGtCQUFZLENBQVpBLElBQWlCLEtBQWpCQTtBQUNBQSxrQkFBWSxDQUFaQSxJQUFpQixLQUFqQkE7O0FBRUEsMEJBQW9CO0FBQUEsZUFBTSxRQUExQixVQUEwQixFQUFOO0FBQUEsT0FBcEIsRUFBNkMsS0FBN0M7QUFDRDs7O1dBRUR1RCxtQkFBVTtBQUNSLGVBQVMsS0FBVCxpQkFDVzBULHFCQUFXO0FBQUEsZUFBSWpYLFlBQVksQ0FBWkEsaUJBRDFCLFdBQzBCQSxDQUFKO0FBQUEsT0FEdEI7O0FBR0E7O0FBQ0E7O0FBQ0E7QUFDRDs7O1dBRURrWCx3QkFBZTtBQUNiO0FBOUc4QixLLENBQUE7Ozs7V0FtSGhDQywrQkFBc0I7QUFDcEIsYUFBTyxhQUFhO0FBQ2xCbGEsaUJBQVMsRUFBRXNFLE9BQU8sQ0FBQyxhQURELFFBQ0EsQ0FEQTtBQUN5QjtBQUMzQ21DLGtCQUFVLEVBQUU7QUFGTSxPQUFiLENBQVA7QUFJRDs7O1dBRUQwVCxnQ0FBdUI7QUFDckIsYUFBTyxjQUFjO0FBQ25CMUIsbUJBQVcsRUFBRSxLQUFLNUQ7QUFEQyxPQUFkLENBQVA7QUFHRDs7O1dBRURoSCxvQkFBVSxNQUFWQSxFQUFtQjtBQUNqQmhPLFlBQU0scUJBQUcsU0FBSCxNQUVEMEksV0FBVyxDQUFYQSxrQkFBOEIsS0FGMUIsUUFFSkEsQ0FGQyxNQUdBLHdDQUFKLEVBSEksQ0FBTjFJO0FBS0FOLHFCQUFlLGlCQUFmQSxhQUFlLENBQWZBO0FBQ0E7QUFDRDs7O1dBRUQ2YSxzQkFBWSxhQUFaQSxFQUE0QjtBQUFBOztBQUMxQixVQUFNM1QsVUFBVSxHQUFHLEtBQW5CLFdBQW1CLEVBQW5COztBQUNBLFVBQU00VCxTQUFTLEdBQUc3USxjQUFjLENBQWRBLDZCQUE0QyxLQUE5RCxPQUFrQkEsQ0FBbEI7O0FBRUEsVUFBSSxDQUFDLGNBQUQsY0FBNkIsc0NBQXNDckosSUFBSSxDQUEzRSxjQUEwRjtBQUN4RjtBQUNBN0IsZ0JBQVEsQ0FBUkEsWUFBcUIsS0FBckJBO0FBQ0Q7O0FBRUQ7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEscUJBQWU7QUFDYitiLGlCQUFTLENBQVRBO0FBQ0Q7O0FBRUQsc0JBQWdCO0FBQ2Q5WixjQUFNLENBQUMsS0FBUEEsUUFBTSxDQUFOQTtBQUNEOztBQUVEOztBQUVBLFVBQU0rWixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsWUFBSSxnQkFBSixPQUF3QjtBQUN0QjtBQUNEOztBQUVEO0FBQ0F2WCxvQkFBWSxDQUFaQSxRQUFxQixRQUFyQkEseUJBQWlEO0FBQy9DaU07QUFEK0MsU0FBakRqTTtBQU5GOztBQVdBLDhDQUF3QyxLQUF4QztBQUNEOzs7V0FFRHdYLDJCQUFrQjtBQUFBOztBQUNoQixVQUFJLEtBQUosVUFBbUI7QUFDakJ4WCxvQkFBWSxDQUFaQSxHQUFnQixLQUFoQkEsbUNBQXNERCxlQUFLLEVBQUk7QUFDN0QsY0FBSSw0QkFBeUJBLEtBQUssQ0FBTEEsUUFBN0IsY0FBdUQ7QUFDckRBLGlCQUFLLENBQUxBOztBQUNBO0FBRkYsaUJBR08sSUFBSSxDQUFDLGdCQUFELFlBQTBCQSxLQUFLLENBQUxBLFFBQTlCLGNBQXdEO0FBQzdEO0FBQ0Q7QUFOSEM7QUFERixhQVNPO0FBQ0xBLG9CQUFZLENBQVpBLElBQWlCLEtBQWpCQTtBQUNEO0FBQ0Y7OztXQUVEeVgsMkJBQWtCO0FBQUE7O0FBQ2hCLFVBQUksS0FBSixVQUFtQjtBQUNqQnpYLG9CQUFZLENBQVpBLHlCQUFzQztBQUFBLGlCQUFNLFFBQTVDQSxhQUE0QyxFQUFOO0FBQUEsU0FBdENBO0FBREYsYUFFTztBQUNMQSxvQkFBWSxDQUFaQTtBQUNEO0FBQ0Y7OztXQUVEMFgsc0JBQWE7QUFBQTs7QUFDWDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSwwQkFBb0IsWUFBTTtBQUN4Qm5jLGdCQUFRLENBQVJBOztBQUNBOztBQUNBOztBQUNBeUUsb0JBQVksQ0FBWkEsUUFBcUIsUUFBckJBO0FBSkY7QUFNRDs7O1dBRUQyWCx1QkFBYSxRQUFiQSxFQUF3QjtBQUFBOztBQUN0QjNYLGtCQUFZLENBQVpBLEdBQWdCLEtBQWhCQSwrQkFBb0RELGVBQUssRUFBSTtBQUMzRCxZQUFJLFFBQUosc0JBQStCO0FBQzdCO0FBQ0E7QUFDRDs7QUFFRCxZQUFJQSxLQUFLLENBQUxBLFdBQWlCQSxLQUFLLENBQTFCLGVBQTBDO0FBQ3hDO0FBQ0Q7O0FBRUQsWUFBSSw2QkFBSixNQUFvQztBQUNsQztBQURGLGVBRU8sSUFBSSw2QkFBSixVQUF3QztBQUM3QztBQUNEO0FBZEhDOztBQWlCQTtBQUNEOzs7V0FFRDRYLHVCQUFjO0FBQ1osYUFBTyxpQ0FBUCxpQkFBTyxDQUFQO0FBQ0Q7OztXQUVEQyxzQ0FBNkI7QUFBQTs7QUFDM0IsVUFBTTFGLFNBQVMsR0FBR25TLFlBQVksQ0FBWkEsUUFBcUIsS0FBckJBLFVBQWxCLG9CQUFrQkEsQ0FBbEI7O0FBQ0EsVUFBSW1TLFNBQVMsQ0FBYixrQkFBZ0M7QUFDOUI7QUFDRDs7QUFKMEIsMkJBTWdCLEtBQTNDLFFBTjJCO0FBQUEsVUFNckIsU0FOcUIsa0JBTXJCLFNBTnFCO0FBQUEsVUFNckIsWUFOcUIsa0JBTXJCLFlBTnFCO0FBQUEsVUFNTTJGLEtBTk4sa0JBTU1BLEtBTk47QUFPM0IsVUFBTUMsa0JBQWtCLEdBQUdDLFlBQVksR0FBR3pjLFFBQVEsQ0FBUkEsZ0JBUGYsWUFPM0IsQ0FQMkI7O0FBVTNCLFVBQUssdUJBQXVCdWMsS0FBSyxDQUFMQSxjQUF4QixRQUFDLElBQXdERyxTQUFTLENBQVRBLFNBQTdELGlCQUE2REEsQ0FBN0QsRUFBb0c7QUFDbEc7QUFDRDs7QUFFRCxVQUFJLENBQUosb0JBQXlCO0FBQ3ZCSCxhQUFLLENBQUxBO0FBQ0Q7O0FBRURHLGVBQVMsQ0FBVEE7O0FBQ0EsMEJBQW9CLFlBQU07QUFDeEJBLGlCQUFTLENBQVRBOztBQUNBLFlBQUksQ0FBSixvQkFBeUI7QUFDdkIsaUNBQW9CLFlBQU07QUFDeEJILGlCQUFLLENBQUxBO0FBREYsYUFFRyxRQUZIO0FBR0Q7QUFOSCxTQU9HLEtBUEg7O0FBU0E7QUEzUThCLEssQ0FBQTtBQStRaEM7QUFDQTs7OztXQUVBSSx5QkFBZ0I7QUFDZCxVQUFNSCxrQkFBa0IsR0FBRyw2QkFBNkJ4YyxRQUFRLENBQVJBLGdCQUF4RDs7QUFDQSxVQUFNa1osY0FBYyxHQUFHLGdCQUF2QixRQUF1QixFQUF2Qjs7QUFDQSxVQUFNMEQsaUJBQWlCLEdBQUcxRCxjQUFjLEdBQXhDOztBQUVBLFVBQUssNENBQTRDLENBQUMzVyxLQUE5QyxFQUFDLElBQTBEcWEsaUJBQWlCLElBQUksQ0FBckJBLHNCQUE0Q3JhLEtBQTNHLElBQXFIO0FBQ25IO0FBQ0Q7O0FBRUQsVUFBS3FhLGlCQUFpQixJQUFJLENBQXJCQSxzQkFBNEMsQ0FBQ3JhLEtBQTlDLEVBQUNxYSxJQUEwRCw0Q0FBNENyYSxLQUEzRyxJQUFxSDtBQUNuSDtBQUNEO0FBQ0Y7OztXQUVEc2EsNkJBQW9CO0FBQ2xCO0FBQ0E7QUFsUzhCLEssQ0FBQTs7OztTQWdCckJ6USxlQUFVO0FBQ25CO0FBQ0Q7OztTQUVVOUQsZUFBTztBQUNoQjtBQXJCOEI7OztXQXVTekJlLHlCQUFlLE1BQWZBLEVBQWUsYUFBZkEsRUFBdUM7QUFDNUMsYUFBTyxVQUFVLFlBQVk7QUFDM0IsWUFBTUMsSUFBSSxHQUFHd1QsS0FBSyxDQUFMQSwwQkFBYixNQUFhQSxDQUFiOztBQUVBLFlBQUksa0JBQUosVUFBZ0M7QUFDOUI7QUFDRDs7QUFFRCxZQUFJLE9BQU94VCxJQUFJLENBQVgsTUFBVyxDQUFYLEtBQUosYUFBeUM7QUFDdkMsZ0JBQU0sMENBQU4sTUFBTSxRQUFOO0FBQ0Q7O0FBRURBLFlBQUksQ0FBSkEsTUFBSSxDQUFKQTtBQVhGLE9BQU8sQ0FBUDtBQWFEOzs7O0VBclRILGE7QUF3VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE3RSxZQUFZLENBQVpBLDZEQUFzRSxpQkFBaUI7QUFBQTs7QUFDckYsTUFBTXJCLE1BQU0sR0FBRzlDLHNCQUFzQixDQUFyQyxJQUFxQyxDQUFyQzs7QUFFQSxNQUFJLHVCQUF1QixLQUEzQixPQUFJLENBQUosRUFBMEM7QUFDeENrRSxTQUFLLENBQUxBO0FBQ0Q7O0FBRURDLGNBQVksQ0FBWkEsMEJBQXFDK1IsbUJBQVMsRUFBSTtBQUNoRCxRQUFJQSxTQUFTLENBQWIsa0JBQWdDO0FBQzlCO0FBQ0E7QUFDRDs7QUFFRC9SLGdCQUFZLENBQVpBLDRCQUF1QyxZQUFNO0FBQzNDLFVBQUkvQyxTQUFTLENBQWIsT0FBYSxDQUFiLEVBQXFCO0FBQ25CO0FBQ0Q7QUFISCtDO0FBYm1GLEdBT3JGQSxFQVBxRjs7QUFxQnJGLE1BQU1zWSxZQUFZLEdBQUc3UixjQUFjLENBQWRBLFFBQXJCLGVBQXFCQSxDQUFyQjs7QUFDQSxvQkFBa0I7QUFDaEI0UixTQUFLLENBQUxBO0FBQ0Q7O0FBRUQsTUFBTXhULElBQUksR0FBR3dULEtBQUssQ0FBTEEsb0JBQWIsTUFBYUEsQ0FBYjtBQUVBeFQsTUFBSSxDQUFKQTtBQTVCRjdFO0FBK0JBZ0Usb0JBQW9CLENBQXBCQSxLQUFvQixDQUFwQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFqRyxrQkFBa0IsQ0FBbEJBLEtBQWtCLENBQWxCQTtBQ2xiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTThGLE1BQUksR0FBVjtBQUNBLElBQU1DLFVBQVEsR0FBZDtBQUNBLElBQU1DLFdBQVMsY0FBZixVQUFlLENBQWY7QUFDQSxJQUFNZ0IsY0FBWSxHQUFsQjtBQUNBLElBQU1vRSxxQkFBbUIsaUJBQVVwRixXQUFWLFNBQXpCLGNBQXlCLENBQXpCO0FBQ0EsSUFBTW9NLFVBQVUsR0FBaEI7QUFFQSxJQUFNeEksU0FBTyxHQUFHO0FBQ2Q0TixVQUFRLEVBRE07QUFFZDFOLFVBQVEsRUFGTTtBQUdkMFEsUUFBTSxFQUFFO0FBSE0sQ0FBaEI7QUFNQSxJQUFNclEsYUFBVyxHQUFHO0FBQ2xCcU4sVUFBUSxFQURVO0FBRWxCMU4sVUFBUSxFQUZVO0FBR2xCMFEsUUFBTSxFQUFFO0FBSFUsQ0FBcEI7QUFNQSxJQUFNL1QsaUJBQWUsR0FBckI7QUFDQSxJQUFNZ1UsbUJBQW1CLEdBQXpCO0FBQ0EsSUFBTTFCLGFBQWEsR0FBbkI7QUFFQSxJQUFNaEosWUFBVSxpQkFBaEIsV0FBZ0IsQ0FBaEI7QUFDQSxJQUFNQyxhQUFXLGtCQUFqQixXQUFpQixDQUFqQjtBQUNBLElBQU1DLFlBQVUsaUJBQWhCLFdBQWdCLENBQWhCO0FBQ0EsSUFBTUMsY0FBWSxtQkFBbEIsV0FBa0IsQ0FBbEI7QUFDQSxJQUFNL0ksc0JBQW9CLGtCQUFXbkIsV0FBWCxTQUExQixjQUEwQixDQUExQjtBQUNBLElBQU0wUyxxQkFBcUIsNEJBQTNCLFdBQTJCLENBQTNCO0FBRUEsSUFBTXhSLHNCQUFvQixHQUExQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRUEsUzs7Ozs7QUFDRTVCLHFCQUFXLE9BQVhBLEVBQVcsTUFBWEEsRUFBNkI7QUFBQTs7QUFBQTs7QUFDM0I7QUFFQSxzQkFBZSxtQkFBZixNQUFlLENBQWY7QUFDQTtBQUNBLHdCQUFpQixRQUFqQixtQkFBaUIsRUFBakI7QUFDQSx5QkFBa0IsUUFBbEIsb0JBQWtCLEVBQWxCOztBQUNBOztBQVAyQjtBQURPLEcsQ0FBQTs7Ozs7V0FBQTtBQXVCcEM4QixvQkFBTSxhQUFOQSxFQUFzQjtBQUNwQixhQUFPLGdCQUFnQixLQUFoQixJQUFnQixFQUFoQixHQUE4QixVQUFyQyxhQUFxQyxDQUFyQztBQUNEOzs7V0FFRDJKLGNBQUksYUFBSkEsRUFBb0I7QUFBQTs7QUFDbEIsVUFBSSxLQUFKLFVBQW1CO0FBQ2pCO0FBQ0Q7O0FBRUQsVUFBTWlELFNBQVMsR0FBRyxZQUFZLENBQVosUUFBcUIsS0FBckIsd0JBQWdEO0FBQUU5RjtBQUFGLE9BQWhELENBQWxCOztBQUVBLFVBQUk4RixTQUFTLENBQWIsa0JBQWdDO0FBQzlCO0FBQ0Q7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQSxVQUFJLENBQUMsYUFBTCxRQUEwQjtBQUN4QjtBQUNEOztBQUVEOztBQUNBOztBQUNBOztBQUNBOztBQUVBLFVBQU01RSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsWUFBSSxDQUFDLGdCQUFMLFFBQTBCO0FBQ3hCO0FBQ0Q7O0FBRURuTixvQkFBWSxDQUFaQSxRQUFxQixRQUFyQkEseUJBQWlEO0FBQUVpTTtBQUFGLFNBQWpEak07QUFMRjs7QUFRQSw0Q0FBc0MsS0FBdEM7QUFDRDs7O1dBRUQwUCxnQkFBTztBQUFBOztBQUNMLFVBQUksQ0FBQyxLQUFMLFVBQW9CO0FBQ2xCO0FBQ0Q7O0FBRUQsVUFBTXlDLFNBQVMsR0FBR25TLFlBQVksQ0FBWkEsUUFBcUIsS0FBckJBLFVBQWxCLFlBQWtCQSxDQUFsQjs7QUFFQSxVQUFJbVMsU0FBUyxDQUFiLGtCQUFnQztBQUM5QjtBQUNEOztBQUVEOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLFVBQU1zRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0I7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsWUFBSSxDQUFDLGdCQUFMLFFBQTBCO0FBQ3hCO0FBQ0Q7O0FBRUR6WSxvQkFBWSxDQUFaQSxRQUFxQixRQUFyQkE7QUFWRjs7QUFhQSw0Q0FBc0MsS0FBdEM7QUFDRDs7O1dBRUR1RCxtQkFBVTtBQUNSOztBQUNBOztBQUNBO0FBbkdrQyxLLENBQUE7Ozs7V0F3R3BDdUgsb0JBQVUsTUFBVkEsRUFBbUI7QUFDakJoTyxZQUFNLHFCQUFHLFNBQUgsTUFFRDBJLFdBQVcsQ0FBWEEsa0JBQThCLEtBRjFCLFFBRUpBLENBRkMsTUFHQSx3Q0FBSixFQUhJLENBQU4xSTtBQUtBTixxQkFBZSxpQkFBZkEsYUFBZSxDQUFmQTtBQUNBO0FBQ0Q7OztXQUVEMmEsK0JBQXNCO0FBQUE7O0FBQ3BCLGFBQU8sYUFBYTtBQUNsQmpDLGlCQUFTLEVBRFM7QUFFbEJqWSxpQkFBUyxFQUFFLGFBRk87QUFHbEJ5RyxrQkFBVSxFQUhRO0FBSWxCeVIsbUJBQVcsRUFBRSxjQUpLO0FBS2xCQyxxQkFBYSxFQUFFO0FBQUEsaUJBQU0sY0FBTjtBQUFBO0FBTEcsT0FBYixDQUFQO0FBT0Q7OztXQUVEZ0MsZ0NBQXVCO0FBQ3JCLGFBQU8sY0FBYztBQUNuQjFCLG1CQUFXLEVBQUUsS0FBSzVEO0FBREMsT0FBZCxDQUFQO0FBR0Q7OztXQUVENUcsOEJBQXFCO0FBQUE7O0FBQ25CbEwsa0JBQVksQ0FBWkEsR0FBZ0IsS0FBaEJBLGlDQUFzREQsZUFBSyxFQUFJO0FBQzdELFlBQUksNEJBQXlCQSxLQUFLLENBQUxBLFFBQTdCLFlBQXVEO0FBQ3JEO0FBQ0Q7QUFISEM7QUFuSWtDLEssQ0FBQTs7OztTQWF6QjZELGVBQU87QUFDaEI7QUFDRDs7O1NBRVU4RCxlQUFVO0FBQ25CO0FBbEJrQzs7O1dBNEk3Qi9DLHlCQUFlLE1BQWZBLEVBQXdCO0FBQzdCLGFBQU8sVUFBVSxZQUFZO0FBQzNCLFlBQU1DLElBQUksR0FBRzZULFNBQVMsQ0FBVEEsMEJBQWIsTUFBYUEsQ0FBYjs7QUFFQSxZQUFJLGtCQUFKLFVBQWdDO0FBQzlCO0FBQ0Q7O0FBRUQsWUFBSTdULElBQUksQ0FBSkEsTUFBSSxDQUFKQSxrQkFBOEIvSCxNQUFNLENBQU5BLFdBQTlCK0gsR0FBOEIvSCxDQUE5QitILElBQXdEL0gsTUFBTSxLQUFsRSxlQUFzRjtBQUNwRixnQkFBTSwwQ0FBTixNQUFNLFFBQU47QUFDRDs7QUFFRCtILFlBQUksQ0FBSkEsTUFBSSxDQUFKQTtBQVhGLE9BQU8sQ0FBUDtBQWFEOzs7O0VBMUpILGE7QUE2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE3RSxZQUFZLENBQVpBLDZEQUFzRSxpQkFBaUI7QUFBQTs7QUFDckYsTUFBTXJCLE1BQU0sR0FBRzlDLHNCQUFzQixDQUFyQyxJQUFxQyxDQUFyQzs7QUFFQSxNQUFJLHVCQUF1QixLQUEzQixPQUFJLENBQUosRUFBMEM7QUFDeENrRSxTQUFLLENBQUxBO0FBQ0Q7O0FBRUQsTUFBSTVDLFVBQVUsQ0FBZCxJQUFjLENBQWQsRUFBc0I7QUFDcEI7QUFDRDs7QUFFRDZDLGNBQVksQ0FBWkEsNEJBQXVDLFlBQU07QUFDM0M7QUFDQSxRQUFJL0MsU0FBUyxDQUFiLE9BQWEsQ0FBYixFQUFxQjtBQUNuQjtBQUNEO0FBZmtGLEdBV3JGK0MsRUFYcUY7O0FBbUJyRixNQUFNc1ksWUFBWSxHQUFHN1IsY0FBYyxDQUFkQSxRQUFyQixhQUFxQkEsQ0FBckI7O0FBQ0EsTUFBSTZSLFlBQVksSUFBSUEsWUFBWSxLQUFoQyxRQUE2QztBQUMzQ0ksYUFBUyxDQUFUQTtBQUNEOztBQUVELE1BQU03VCxJQUFJLEdBQUc2VCxTQUFTLENBQVRBLG9CQUFiLE1BQWFBLENBQWI7QUFDQTdULE1BQUksQ0FBSkE7QUF6QkY3RTtBQTRCQUEsWUFBWSxDQUFaQSxrQ0FBNkM7QUFBQSxTQUMzQ3lHLGNBQWMsQ0FBZEEsNEJBQTJDYSxZQUFFO0FBQUEsV0FBSW9SLFNBQVMsQ0FBVEEsd0JBRG5EMVksSUFDbUQwWSxFQUFKO0FBQUEsR0FBN0NqUyxDQUQyQztBQUFBLENBQTdDekc7QUFJQWdFLG9CQUFvQixDQUFwQkEsU0FBb0IsQ0FBcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQWpHLGtCQUFrQixDQUFsQkEsU0FBa0IsQ0FBbEJBO0FDN1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNNGEsYUFBYSxHQUFHLFFBQVEsd0VBQTlCLFlBQThCLENBQVIsQ0FBdEI7QUFXQSxJQUFNQyxzQkFBc0IsR0FBNUI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLGdCQUFnQixHQUF0QjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQXRCOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsa0NBQXFDO0FBQzVELE1BQU1DLGFBQWEsR0FBR0MsU0FBUyxDQUFUQSxTQUF0QixXQUFzQkEsRUFBdEI7O0FBRUEsTUFBSUMsb0JBQW9CLENBQXBCQSxTQUFKLGFBQUlBLENBQUosRUFBa0Q7QUFDaEQsUUFBSVAsYUFBYSxDQUFiQSxJQUFKLGFBQUlBLENBQUosRUFBc0M7QUFDcEMsYUFBT3BYLE9BQU8sQ0FBQ3NYLGdCQUFnQixDQUFoQkEsS0FBc0JJLFNBQVMsQ0FBL0JKLGNBQThDQyxnQkFBZ0IsQ0FBaEJBLEtBQXNCRyxTQUFTLENBQTVGLFNBQTZESCxDQUEvQyxDQUFkO0FBQ0Q7O0FBRUQ7QUFDRDs7QUFFRCxNQUFNSyxNQUFNLEdBQUdELG9CQUFvQixDQUFwQkEsT0FBNEJFLHdCQUFjO0FBQUEsV0FBSUEsY0FBYyxZQVhmLE1BV0g7QUFBQSxHQUExQ0YsQ0FBZixDQVg0RDs7QUFjNUQsT0FBSyxJQUFJL1ksQ0FBQyxHQUFMLEdBQVdHLEdBQUcsR0FBRzZZLE1BQU0sQ0FBNUIsUUFBcUNoWixDQUFDLEdBQXRDLEtBQThDQSxDQUE5QyxJQUFtRDtBQUNqRCxRQUFJZ1osTUFBTSxDQUFOQSxDQUFNLENBQU5BLE1BQUosYUFBSUEsQ0FBSixFQUFtQztBQUNqQztBQUNEO0FBQ0Y7O0FBRUQ7QUFwQkY7O0FBdUJPLElBQU1FLGdCQUFnQixHQUFHO0FBQzlCO0FBQ0EsT0FBSyx1Q0FGeUIsc0JBRXpCLENBRnlCO0FBRzlCQyxHQUFDLEVBQUUsNEJBSDJCLEtBRzNCLENBSDJCO0FBSTlCQyxNQUFJLEVBSjBCO0FBSzlCQyxHQUFDLEVBTDZCO0FBTTlCQyxJQUFFLEVBTjRCO0FBTzlCQyxLQUFHLEVBUDJCO0FBUTlCQyxNQUFJLEVBUjBCO0FBUzlCQyxLQUFHLEVBVDJCO0FBVTlCQyxJQUFFLEVBVjRCO0FBVzlCQyxJQUFFLEVBWDRCO0FBWTlCQyxJQUFFLEVBWjRCO0FBYTlCQyxJQUFFLEVBYjRCO0FBYzlCQyxJQUFFLEVBZDRCO0FBZTlCQyxJQUFFLEVBZjRCO0FBZ0I5QkMsSUFBRSxFQWhCNEI7QUFpQjlCQyxJQUFFLEVBakI0QjtBQWtCOUJqYSxHQUFDLEVBbEI2QjtBQW1COUJrYSxLQUFHLEVBQUUsMkNBbkJ5QixRQW1CekIsQ0FuQnlCO0FBb0I5QkMsSUFBRSxFQXBCNEI7QUFxQjlCQyxJQUFFLEVBckI0QjtBQXNCOUJDLEdBQUMsRUF0QjZCO0FBdUI5QkMsS0FBRyxFQXZCMkI7QUF3QjlCQyxHQUFDLEVBeEI2QjtBQXlCOUJDLE9BQUssRUF6QnlCO0FBMEI5QkMsTUFBSSxFQTFCMEI7QUEyQjlCQyxLQUFHLEVBM0IyQjtBQTRCOUJDLEtBQUcsRUE1QjJCO0FBNkI5QkMsUUFBTSxFQTdCd0I7QUE4QjlCQyxHQUFDLEVBOUI2QjtBQStCOUJDLElBQUUsRUFBRTtBQS9CMEIsQ0FBekI7O0FBa0NBLHlEQUF5RDtBQUFBOztBQUM5RCxNQUFJLENBQUNDLFVBQVUsQ0FBZixRQUF3QjtBQUN0QjtBQUNEOztBQUVELE1BQUlDLFVBQVUsSUFBSSxzQkFBbEIsWUFBb0Q7QUFDbEQsV0FBT0EsVUFBVSxDQUFqQixVQUFpQixDQUFqQjtBQUNEOztBQUVELE1BQU1DLFNBQVMsR0FBRyxJQUFJcmYsTUFBTSxDQUE1QixTQUFrQixFQUFsQjtBQUNBLE1BQU1zZixlQUFlLEdBQUdELFNBQVMsQ0FBVEEsNEJBQXhCLFdBQXdCQSxDQUF4Qjs7QUFDQSxNQUFNakYsUUFBUSxHQUFHLG9EQUFha0YsZUFBZSxDQUFmQSxzQkFBOUIsR0FBOEJBLENBQWIsRUFBakI7O0FBWDhELDZCQWFyRGxiLENBYnFELEVBYTlDRyxHQWI4QztBQUFBOztBQWM1RCxRQUFNN0UsT0FBTyxHQUFHMGEsUUFBUSxDQUF4QixDQUF3QixDQUF4QjtBQUNBLFFBQU1tRixXQUFXLEdBQUc3ZixPQUFPLENBQVBBLFNBQXBCLFdBQW9CQSxFQUFwQjs7QUFFQSxRQUFJLENBQUNnQixNQUFNLENBQU5BLHlCQUFMLFdBQUtBLENBQUwsRUFBbUQ7QUFDakRoQixhQUFPLENBQVBBO0FBRUE7QUFDRDs7QUFFRCxRQUFNOGYsYUFBYSxHQUFHLG9EQUFhOWYsT0FBTyxDQUExQyxVQUFzQixFQUF0Qjs7QUFDQSxRQUFNK2YsaUJBQWlCLEdBQUcsVUFBVUMsU0FBUyxDQUFUQSxHQUFTLENBQVRBLElBQVYsSUFBZ0NBLFNBQVMsQ0FBVEEsV0FBUyxDQUFUQSxJQUExRCxFQUEwQixDQUExQjtBQUVBRixpQkFBYSxDQUFiQSxRQUFzQnRDLG1CQUFTLEVBQUk7QUFDakMsVUFBSSxDQUFDRixnQkFBZ0IsWUFBckIsaUJBQXFCLENBQXJCLEVBQXFEO0FBQ25EdGQsZUFBTyxDQUFQQSxnQkFBd0J3ZCxTQUFTLENBQWpDeGQ7QUFDRDtBQUhIOGY7QUExQjREOztBQWE5RCxPQUFLLElBQUlwYixDQUFDLEdBQUwsR0FBV0csR0FBRyxHQUFHNlYsUUFBUSxDQUE5QixRQUF1Q2hXLENBQUMsR0FBeEMsS0FBZ0RBLENBQWhELElBQXFEO0FBQUEscUJBQTVDQSxDQUE0QyxFQUFyQ0csR0FBcUM7O0FBQUEsNkJBT2pEO0FBV0g7O0FBRUQsU0FBTythLGVBQWUsQ0FBZkEsS0FBUDtBQUNEO0FDN0hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTXhYLE1BQUksR0FBVjtBQUNBLElBQU1DLFVBQVEsR0FBZDtBQUNBLElBQU1DLFdBQVMsY0FBZixVQUFlLENBQWY7QUFDQSxJQUFNMlgsY0FBWSxHQUFsQjtBQUNBLElBQU1DLHFCQUFxQixHQUFHLFFBQVEsMEJBQXRDLFlBQXNDLENBQVIsQ0FBOUI7QUFFQSxJQUFNelQsYUFBVyxHQUFHO0FBQ2xCMFQsV0FBUyxFQURTO0FBRWxCQyxVQUFRLEVBRlU7QUFHbEJDLE9BQUssRUFIYTtBQUlsQjFaLFNBQU8sRUFKVztBQUtsQjJaLE9BQUssRUFMYTtBQU1sQkMsTUFBSSxFQU5jO0FBT2xCdGdCLFVBQVEsRUFQVTtBQVFsQndYLFdBQVMsRUFSUztBQVNsQmpOLFFBQU0sRUFUWTtBQVVsQitJLFdBQVMsRUFWUztBQVdsQmlOLG9CQUFrQixFQVhBO0FBWWxCeEssVUFBUSxFQVpVO0FBYWxCeUssYUFBVyxFQWJPO0FBY2xCQyxVQUFRLEVBZFU7QUFlbEJoQixZQUFVLEVBZlE7QUFnQmxCTSxXQUFTLEVBaEJTO0FBaUJsQjdKLGNBQVksRUFBRTtBQWpCSSxDQUFwQjtBQW9CQSxJQUFNd0ssYUFBYSxHQUFHO0FBQ3BCQyxNQUFJLEVBRGdCO0FBRXBCQyxLQUFHLEVBRmlCO0FBR3BCQyxPQUFLLEVBQUV6ZSxLQUFLLGNBSFE7QUFJcEIwZSxRQUFNLEVBSmM7QUFLcEJDLE1BQUksRUFBRTNlLEtBQUssZUFBZTtBQUxOLENBQXRCO0FBUUEsSUFBTTZKLFNBQU8sR0FBRztBQUNkaVUsV0FBUyxFQURLO0FBRWRDLFVBQVEsRUFBRSxxSEFGSTtBQU1kelosU0FBTyxFQU5PO0FBT2QwWixPQUFLLEVBUFM7QUFRZEMsT0FBSyxFQVJTO0FBU2RDLE1BQUksRUFUVTtBQVVkdGdCLFVBQVEsRUFWTTtBQVdkd1gsV0FBUyxFQVhLO0FBWWRqTixRQUFNLEVBQUUsSUFaTSxDQVlOLENBWk07QUFhZCtJLFdBQVMsRUFiSztBQWNkaU4sb0JBQWtCLEVBQUUsMkJBZE4sTUFjTSxDQWROO0FBZWR4SyxVQUFRLEVBZk07QUFnQmR5SyxhQUFXLEVBaEJHO0FBaUJkQyxVQUFRLEVBakJNO0FBa0JkaEIsWUFBVSxFQWxCSTtBQW1CZE0sV0FBUyxFQW5CSztBQW9CZDdKLGNBQVksRUFBRTtBQXBCQSxDQUFoQjtBQXVCQSxJQUFNOEssT0FBSyxHQUFHO0FBQ1pDLE1BQUksZ0JBRFEsV0FDUixDQURRO0FBRVpDLFFBQU0sa0JBRk0sV0FFTixDQUZNO0FBR1pDLE1BQUksZ0JBSFEsV0FHUixDQUhRO0FBSVpDLE9BQUssaUJBSk8sV0FJUCxDQUpPO0FBS1pDLFVBQVEsb0JBTEksV0FLSixDQUxJO0FBTVpDLE9BQUssaUJBTk8sV0FNUCxDQU5PO0FBT1pDLFNBQU8sbUJBUEssV0FPTCxDQVBLO0FBUVpDLFVBQVEsb0JBUkksV0FRSixDQVJJO0FBU1pDLFlBQVUsc0JBVEUsV0FTRixDQVRFO0FBVVpDLFlBQVUsc0JBQWVyWixXQUFmO0FBVkUsQ0FBZDtBQWFBLElBQU1RLGlCQUFlLEdBQXJCO0FBQ0EsSUFBTThZLGdCQUFnQixHQUF0QjtBQUNBLElBQU03WSxpQkFBZSxHQUFyQjtBQUVBLElBQU04WSxnQkFBZ0IsR0FBdEI7QUFDQSxJQUFNQyxlQUFlLEdBQXJCO0FBRUEsSUFBTUMsc0JBQXNCLEdBQTVCO0FBQ0EsSUFBTUMsY0FBYyxjQUFwQixnQkFBb0IsQ0FBcEI7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBdEI7QUFFQSxJQUFNQyxhQUFhLEdBQW5CO0FBQ0EsSUFBTUMsYUFBYSxHQUFuQjtBQUNBLElBQU1DLGFBQWEsR0FBbkI7QUFDQSxJQUFNQyxjQUFjLEdBQXBCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFQSxPOzs7OztBQUNFemEsbUJBQVcsT0FBWEEsRUFBVyxNQUFYQSxFQUE2QjtBQUFBOztBQUFBOztBQUMzQixRQUFJLHVEQUFKLGFBQW1DO0FBQ2pDLFlBQU0sY0FBTiw4REFBTSxDQUFOO0FBQ0Q7O0FBRUQsaUNBTDJCLE9BSzNCLEVBTDJCOztBQVEzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQVoyQixJQVkzQixDQVoyQjs7QUFlM0Isc0JBQWUsbUJBQWYsTUFBZSxDQUFmO0FBQ0E7O0FBRUE7O0FBbEIyQjtBQURLLEcsQ0FBQTs7Ozs7V0FBQTtBQTBDbEMwYSxzQkFBUztBQUNQO0FBQ0Q7OztXQUVEQyxtQkFBVTtBQUNSO0FBQ0Q7OztXQUVEQyx5QkFBZ0I7QUFDZCx3QkFBa0IsQ0FBQyxLQUFuQjtBQUNEOzs7V0FFRDlZLGdCQUFNLEtBQU5BLEVBQWM7QUFDWixVQUFJLENBQUMsS0FBTCxZQUFzQjtBQUNwQjtBQUNEOztBQUVELGlCQUFXO0FBQ1QsWUFBTXVPLE9BQU8sR0FBRyxrQ0FBaEIsS0FBZ0IsQ0FBaEI7O0FBRUFBLGVBQU8sQ0FBUEEsdUJBQStCLENBQUNBLE9BQU8sQ0FBUEEsZUFBaENBOztBQUVBLFlBQUlBLE9BQU8sQ0FBWCxvQkFBSUEsRUFBSixFQUFvQztBQUNsQ0EsaUJBQU8sQ0FBUEE7QUFERixlQUVPO0FBQ0xBLGlCQUFPLENBQVBBO0FBQ0Q7QUFUSCxhQVVPO0FBQ0wsWUFBSSx3Q0FBSixpQkFBSSxDQUFKLEVBQThEO0FBQzVEOztBQUNBO0FBQ0Q7O0FBRUQ7QUFDRDtBQUNGOzs7V0FFRG5RLG1CQUFVO0FBQ1JpSSxrQkFBWSxDQUFDLEtBQWJBLFFBQVksQ0FBWkE7QUFFQXhMLGtCQUFZLENBQVpBLElBQWlCLHNCQUFqQkEsY0FBaUIsQ0FBakJBLG9CQUEwRSxLQUExRUE7O0FBRUEsVUFBSSxLQUFKLEtBQWM7QUFDWjtBQUNEOztBQUVEOztBQUNBO0FBQ0Q7OztXQUVEOE8sZ0JBQU87QUFBQTs7QUFDTCxVQUFJLGdDQUFKLFFBQTRDO0FBQzFDLGNBQU0sVUFBTixxQ0FBTSxDQUFOO0FBQ0Q7O0FBRUQsVUFBSSxFQUFFLHdCQUF3QixLQUE5QixVQUFJLENBQUosRUFBZ0Q7QUFDOUM7QUFDRDs7QUFFRCxVQUFNaUQsU0FBUyxHQUFHL1IsWUFBWSxDQUFaQSxRQUFxQixLQUFyQkEsVUFBb0MsdUJBQXRELElBQWtCQSxDQUFsQjtBQUNBLFVBQU1rZSxVQUFVLEdBQUc3Z0IsY0FBYyxDQUFDLEtBQWxDLFFBQWlDLENBQWpDO0FBQ0EsVUFBTThnQixVQUFVLEdBQUdELFVBQVUsS0FBVkEsT0FDakIscURBQXFELEtBRHBDQSxRQUNqQixDQURpQkEsR0FFakJBLFVBQVUsQ0FBVkEsU0FBb0IsS0FGdEIsUUFFRUEsQ0FGRjs7QUFJQSxVQUFJbk0sU0FBUyxDQUFUQSxvQkFBOEIsQ0FBbEMsWUFBK0M7QUFDN0M7QUFoQkc7QUFvQkw7OztBQUNBLFVBQUksdUNBQXVDLEtBQXZDLE9BQW1ELG9CQUFvQiwrQ0FBM0UsV0FBcUk7QUFDbkk7O0FBQ0E7QUFDQTtBQUNEOztBQUVELFVBQU1xTSxHQUFHLEdBQUcsS0FBWixhQUFZLEVBQVo7QUFDQSxVQUFNQyxLQUFLLEdBQUdqakIsTUFBTSxDQUFDLGlCQUFyQixJQUFvQixDQUFwQjtBQUVBZ2pCLFNBQUcsQ0FBSEE7O0FBQ0E7O0FBRUEsVUFBSSxhQUFKLFdBQTRCO0FBQzFCQSxXQUFHLENBQUhBO0FBQ0Q7O0FBRUQsVUFBTWxMLFNBQVMsR0FBRyxPQUFPLGFBQVAsMkJBQ2hCLHVDQUF1QyxLQUR2QixRQUNoQixDQURnQixHQUVoQixhQUZGOztBQUlBLFVBQU1vTCxVQUFVLEdBQUcsb0JBQW5CLFNBQW1CLENBQW5COztBQUNBOztBQTFDSyxVQTRDR3RQLFNBNUNILEdBNENpQixLQUF0QixPQTVDSyxDQTRDR0EsU0E1Q0g7QUE2Q0wxTCxVQUFJLENBQUpBLFNBQWMsaUJBQWRBOztBQUVBLFVBQUksQ0FBQyxxREFBcUQsS0FBMUQsR0FBSyxDQUFMLEVBQXFFO0FBQ25FMEwsaUJBQVMsQ0FBVEE7QUFDQWhQLG9CQUFZLENBQVpBLFFBQXFCLEtBQXJCQSxVQUFvQyx1QkFBcENBO0FBQ0Q7O0FBRUQsVUFBSSxLQUFKLFNBQWtCO0FBQ2hCO0FBREYsYUFFTztBQUNMLHVCQUFld1MsNERBQW9CLEtBQXBCQSxlQUF3QyxzQkFBdkQsVUFBdUQsQ0FBeENBLENBQWY7QUFDRDs7QUFFRDRMLFNBQUcsQ0FBSEE7O0FBRUEsVUFBTWxDLFdBQVcsR0FBRyw4QkFBOEIsYUFBbEQsV0FBb0IsQ0FBcEI7O0FBQ0EsdUJBQWlCO0FBQUE7O0FBQ2ZrQyw2QkFBRyxDQUFIQSx3REFBcUJsQyxXQUFXLENBQVhBLE1BQXJCa0MsR0FBcUJsQyxDQUFyQmtDO0FBOURHO0FBa0VMO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBSSxrQkFBa0I3aUIsUUFBUSxDQUE5QixpQkFBZ0Q7QUFBQTs7QUFDOUMsNERBQWFBLFFBQVEsQ0FBUkEsS0FBYixtQkFBNkNFLGlCQUFPLEVBQUk7QUFDdER1RSxzQkFBWSxDQUFaQTtBQURGO0FBR0Q7O0FBRUQsVUFBTXVQLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsWUFBTWdQLGNBQWMsR0FBRyxRQUF2QjtBQUVBO0FBQ0F2ZSxvQkFBWSxDQUFaQSxRQUFxQixRQUFyQkEsVUFBb0MsMEJBQXBDQTs7QUFFQSxZQUFJdWUsY0FBYyxLQUFsQixpQkFBd0M7QUFDdEM7QUFDRDtBQVJIOztBQVdBLFVBQU03YSxVQUFVLEdBQUcsNEJBQW5CLGlCQUFtQixDQUFuQjs7QUFDQSxvQ0FBOEIsS0FBOUI7QUFDRDs7O1dBRURnTSxnQkFBTztBQUFBOztBQUNMLFVBQUksQ0FBQyxLQUFMLFNBQW1CO0FBQ2pCO0FBQ0Q7O0FBRUQsVUFBTTBPLEdBQUcsR0FBRyxLQUFaLGFBQVksRUFBWjs7QUFDQSxVQUFNN08sUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixZQUFJLFFBQUosb0JBQUksRUFBSixFQUFpQztBQUMvQjtBQUNEOztBQUVELFlBQUksd0JBQUosa0JBQTJDO0FBQ3pDNk8sYUFBRyxDQUFIQTtBQUNEOztBQUVEOztBQUNBOztBQUNBcGUsb0JBQVksQ0FBWkEsUUFBcUIsUUFBckJBLFVBQW9DLDBCQUFwQ0E7O0FBRUE7QUFiRjs7QUFnQkEsVUFBTW1TLFNBQVMsR0FBR25TLFlBQVksQ0FBWkEsUUFBcUIsS0FBckJBLFVBQW9DLHVCQUF0RCxJQUFrQkEsQ0FBbEI7O0FBQ0EsVUFBSW1TLFNBQVMsQ0FBYixrQkFBZ0M7QUFDOUI7QUFDRDs7QUFFRGlNLFNBQUcsQ0FBSEEsaUJBM0JLLGlCQTJCTEEsRUEzQks7QUE4Qkw7O0FBQ0EsVUFBSSxrQkFBa0I3aUIsUUFBUSxDQUE5QixpQkFBZ0Q7QUFBQTs7QUFDOUMsOERBQWFBLFFBQVEsQ0FBUkEsS0FBYixtQkFDV0UsaUJBQU87QUFBQSxpQkFBSXVFLFlBQVksQ0FBWkEsMEJBRHRCLElBQ3NCQSxDQUFKO0FBQUEsU0FEbEI7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFFQSxVQUFNMEQsVUFBVSxHQUFHLDRCQUFuQixpQkFBbUIsQ0FBbkI7O0FBQ0Esb0NBQThCLEtBQTlCOztBQUNBO0FBQ0Q7OztXQUVEdU8sa0JBQVM7QUFDUCxVQUFJLGlCQUFKLE1BQTJCO0FBQ3pCO0FBQ0Q7QUF0TytCLEssQ0FBQTs7OztXQTJPbEN1TSx5QkFBZ0I7QUFDZCxhQUFPamQsT0FBTyxDQUFDLEtBQWYsUUFBZSxFQUFELENBQWQ7QUFDRDs7O1dBRURrZCx5QkFBZ0I7QUFDZCxVQUFJLEtBQUosS0FBYztBQUNaLGVBQU8sS0FBUDtBQUNEOztBQUVELFVBQU1oakIsT0FBTyxHQUFHRixRQUFRLENBQVJBLGNBQWhCLEtBQWdCQSxDQUFoQjtBQUNBRSxhQUFPLENBQVBBLFlBQW9CLGFBQXBCQTtBQUVBLFVBQU0yaUIsR0FBRyxHQUFHM2lCLE9BQU8sQ0FBUEEsU0FBWixDQUFZQSxDQUFaO0FBQ0E7QUFDQTJpQixTQUFHLENBQUhBO0FBRUE7QUFDQSxhQUFPLEtBQVA7QUFDRDs7O1dBRURNLG9CQUFVLEdBQVZBLEVBQWdCO0FBQ2QsdUNBQWlDLEtBQWpDLFFBQWlDLEVBQWpDO0FBQ0Q7OztXQUVEQyxnQ0FBc0IsUUFBdEJBLEVBQXNCLE9BQXRCQSxFQUFzQixRQUF0QkEsRUFBb0Q7QUFDbEQsVUFBTUMsZUFBZSxHQUFHblksY0FBYyxDQUFkQSxrQkFBeEIsUUFBd0JBLENBQXhCOztBQUVBLFVBQUksWUFBSixpQkFBaUM7QUFDL0JtWSx1QkFBZSxDQUFmQTtBQUNBO0FBTGdEOzs7QUFTbEQ7QUFDRDs7O1dBRURDLDJCQUFpQixPQUFqQkEsRUFBaUIsT0FBakJBLEVBQW9DO0FBQ2xDLFVBQUlwakIsT0FBTyxLQUFYLE1BQXNCO0FBQ3BCO0FBQ0Q7O0FBRUQsVUFBSWEsU0FBUyxDQUFiLE9BQWEsQ0FBYixFQUF3QjtBQUN0QndpQixlQUFPLEdBQUd2aUIsVUFBVSxDQURFLE9BQ0YsQ0FBcEJ1aUIsQ0FEc0I7O0FBSXRCLFlBQUksYUFBSixNQUF1QjtBQUNyQixjQUFJQSxPQUFPLENBQVBBLGVBQUosU0FBb0M7QUFDbENyakIsbUJBQU8sQ0FBUEE7QUFDQUEsbUJBQU8sQ0FBUEE7QUFDRDtBQUpILGVBS087QUFDTEEsaUJBQU8sQ0FBUEEsY0FBc0JxakIsT0FBTyxDQUE3QnJqQjtBQUNEOztBQUVEO0FBQ0Q7O0FBRUQsVUFBSSxhQUFKLE1BQXVCO0FBQ3JCLFlBQUksYUFBSixVQUEyQjtBQUN6QnFqQixpQkFBTyxHQUFHQyxZQUFZLFVBQVUsYUFBVixXQUFrQyxhQUF4REQsVUFBc0IsQ0FBdEJBO0FBQ0Q7O0FBRURyakIsZUFBTyxDQUFQQTtBQUxGLGFBTU87QUFDTEEsZUFBTyxDQUFQQTtBQUNEO0FBQ0Y7OztXQUVEdWpCLG9CQUFXO0FBQ1QsVUFBTWxELEtBQUssR0FBRyx3REFBd0QsYUFBdEU7O0FBRUEsYUFBTyw4QkFBUCxLQUFPLENBQVA7QUFDRDs7O1dBRURtRCwwQkFBZ0IsVUFBaEJBLEVBQTZCO0FBQzNCLFVBQUlYLFVBQVUsS0FBZCxTQUE0QjtBQUMxQjtBQUNEOztBQUVELFVBQUlBLFVBQVUsS0FBZCxRQUEyQjtBQUN6QjtBQUNEOztBQUVEO0FBOVRnQyxLLENBQUE7Ozs7V0FtVWxDWSxzQ0FBNEIsS0FBNUJBLEVBQTRCLE9BQTVCQSxFQUE2QztBQUMzQyxhQUFPeEwsT0FBTyxJQUFJLHFDQUFxQzNULEtBQUssQ0FBMUMsZ0JBQTJELEtBQTdFLGtCQUE2RSxFQUEzRCxDQUFsQjtBQUNEOzs7V0FFRCtTLHNCQUFhO0FBQUE7O0FBQUEsVUFDSDdNLE1BREcsR0FDUSxLQUFuQixPQURXLENBQ0hBLE1BREc7O0FBR1gsVUFBSSxrQkFBSixVQUFnQztBQUM5QixlQUFPQSxNQUFNLENBQU5BLGVBQXNCWCxhQUFHO0FBQUEsaUJBQUlwSixNQUFNLENBQU5BLGNBQXBDLEVBQW9DQSxDQUFKO0FBQUEsU0FBekIrSixDQUFQO0FBQ0Q7O0FBRUQsVUFBSSxrQkFBSixZQUFrQztBQUNoQyxlQUFPOE0sb0JBQVU7QUFBQSxpQkFBSTlNLE1BQU0sYUFBYSxRQUF4QyxRQUEyQixDQUFWO0FBQUEsU0FBakI7QUFDRDs7QUFFRDtBQUNEOzs7V0FFRGtaLGtDQUF3QixPQUF4QkEsRUFBa0M7QUFDaEMsYUFBTyxnQ0FBZ0NMLE9BQU8sQ0FBUEEsS0FBYSxLQUE3QyxRQUFnQ0EsQ0FBaEMsR0FBUDtBQUNEOzs7V0FFRDlMLDBCQUFnQixVQUFoQkEsRUFBNkI7QUFBQTs7QUFDM0IsVUFBTUMscUJBQXFCLEdBQUc7QUFDNUJDLGlCQUFTLEVBRG1CO0FBRTVCQyxpQkFBUyxFQUFFLENBQ1Q7QUFDRWpWLGNBQUksRUFETjtBQUVFa1YsaUJBQU8sRUFBRTtBQUNQNkksOEJBQWtCLEVBQUUsYUFBYUE7QUFEMUI7QUFGWCxTQURTLEVBT1Q7QUFDRS9kLGNBQUksRUFETjtBQUVFa1YsaUJBQU8sRUFBRTtBQUNQbk4sa0JBQU0sRUFBRTtBQUREO0FBRlgsU0FQUyxFQWFUO0FBQ0UvSCxjQUFJLEVBRE47QUFFRWtWLGlCQUFPLEVBQUU7QUFDUDNCLG9CQUFRLEVBQUUsYUFBYUE7QUFEaEI7QUFGWCxTQWJTLEVBbUJUO0FBQ0V2VCxjQUFJLEVBRE47QUFFRWtWLGlCQUFPLEVBQUU7QUFDUDNYLG1CQUFPLGFBQU0saUJBQWlCb0ksSUFBdkI7QUFEQTtBQUZYLFNBbkJTLEVBeUJUO0FBQ0UzRixjQUFJLEVBRE47QUFFRW1WLGlCQUFPLEVBRlQ7QUFHRStMLGVBQUssRUFIUDtBQUlFbmYsWUFBRSxFQUFFNEUsZ0JBQUk7QUFBQSxtQkFBSSwwQ0FBSjtBQUFBO0FBSlYsU0F6QlMsQ0FGaUI7QUFrQzVCd2EscUJBQWEsRUFBRXhhLDJCQUFJLEVBQUk7QUFDckIsY0FBSUEsSUFBSSxDQUFKQSxzQkFBMkJBLElBQUksQ0FBbkMsV0FBK0M7QUFDN0M7QUFDRDtBQUNGO0FBdEMyQixPQUE5QjtBQXlDQSwrQkFBTyxxQkFBUCxNQUVNLE9BQU8sYUFBUCw4QkFBa0QsMEJBQWxELHFCQUFrRCxDQUFsRCxHQUFxRyxhQUF6RyxZQUZGO0FBSUQ7OztXQUVEeWEsNkJBQW1CLFVBQW5CQSxFQUFnQztBQUM5QixtREFBc0MsMkJBQXRDLGNBQXFFLHNCQUFyRSxVQUFxRSxDQUFyRTtBQUNEOzs7V0FFREMsd0JBQWMsU0FBZEEsRUFBMEI7QUFDeEIsYUFBT25ELGFBQWEsQ0FBQ2xKLFNBQVMsQ0FBOUIsV0FBcUJBLEVBQUQsQ0FBcEI7QUFDRDs7O1dBRURzTSx5QkFBZ0I7QUFBQTs7QUFDZCxVQUFNQyxRQUFRLEdBQUcsMkJBQWpCLEdBQWlCLENBQWpCOztBQUVBQSxjQUFRLENBQVJBLFFBQWlCcmQsaUJBQU8sRUFBSTtBQUMxQixZQUFJQSxPQUFPLEtBQVgsU0FBeUI7QUFDdkJwQyxzQkFBWSxDQUFaQSxHQUFnQixRQUFoQkEsVUFBK0IsMEJBQS9CQSxPQUE2RCxnQkFBN0RBLFVBQW9GRCxlQUFLO0FBQUEsbUJBQUksZUFBN0ZDLEtBQTZGLENBQUo7QUFBQSxXQUF6RkE7QUFERixlQUVPLElBQUlvQyxPQUFPLEtBQVgsZ0JBQWdDO0FBQ3JDLGNBQU1zZCxPQUFPLEdBQUd0ZCxPQUFPLEtBQVBBLGdCQUNkLDBCQURjQSxhQUVkLDBCQUZGO0FBR0EsY0FBTXVkLFFBQVEsR0FBR3ZkLE9BQU8sS0FBUEEsZ0JBQ2YsMEJBRGVBLGFBRWYsMEJBRkY7QUFJQXBDLHNCQUFZLENBQVpBLEdBQWdCLFFBQWhCQSxtQkFBd0MsZ0JBQXhDQSxVQUErREQsZUFBSztBQUFBLG1CQUFJLGVBQXhFQyxLQUF3RSxDQUFKO0FBQUEsV0FBcEVBO0FBQ0FBLHNCQUFZLENBQVpBLEdBQWdCLFFBQWhCQSxvQkFBeUMsZ0JBQXpDQSxVQUFnRUQsZUFBSztBQUFBLG1CQUFJLGVBQXpFQyxLQUF5RSxDQUFKO0FBQUEsV0FBckVBO0FBQ0Q7QUFiSHlmOztBQWdCQSwrQkFBeUIsWUFBTTtBQUM3QixZQUFJLFFBQUosVUFBbUI7QUFDakI7QUFDRDtBQUhIOztBQU1BemYsa0JBQVksQ0FBWkEsR0FBZ0Isc0JBQWhCQSxjQUFnQixDQUFoQkEsb0JBQXlFLEtBQXpFQTs7QUFFQSxVQUFJLGFBQUosVUFBMkI7QUFDekIseUNBQ0ssS0FEVSxPQUFmO0FBRUVvQyxpQkFBTyxFQUZNLFFBQWY7QUFHRTFHLGtCQUFRLEVBQUU7QUFIWjtBQURGLGFBTU87QUFDTDtBQUNEO0FBQ0Y7OztXQUVEa2tCLHFCQUFZO0FBQ1YsVUFBTTlELEtBQUssR0FBRywyQkFBZCxPQUFjLENBQWQ7O0FBQ0EsVUFBTStELGlCQUFpQixXQUFVLDJCQUFqQyx3QkFBaUMsQ0FBVixDQUF2Qjs7QUFFQSxVQUFJL0QsS0FBSyxJQUFJK0QsaUJBQWlCLEtBQTlCLFVBQTZDO0FBQzNDLDZEQUFxRC9ELEtBQUssSUFBMUQ7O0FBQ0EsWUFBSUEsS0FBSyxJQUFJLENBQUMsMkJBQVZBLFlBQVUsQ0FBVkEsSUFBc0QsQ0FBQyxjQUEzRCxhQUFzRjtBQUNwRjtBQUNEOztBQUVEO0FBQ0Q7QUFDRjs7O1dBRURnRSxnQkFBTSxLQUFOQSxFQUFNLE9BQU5BLEVBQXVCO0FBQ3JCcE0sYUFBTyxHQUFHLHlDQUFWQSxPQUFVLENBQVZBOztBQUVBLGlCQUFXO0FBQ1RBLGVBQU8sQ0FBUEEsZUFDRTNULEtBQUssQ0FBTEEscUNBREYyVDtBQUdEOztBQUVELFVBQUlBLE9BQU8sQ0FBUEEseURBQStEQSxPQUFPLENBQVBBLGdCQUFuRSxrQkFBNkc7QUFDM0dBLGVBQU8sQ0FBUEE7QUFDQTtBQUNEOztBQUVEbEksa0JBQVksQ0FBQ2tJLE9BQU8sQ0FBcEJsSSxRQUFZLENBQVpBO0FBRUFrSSxhQUFPLENBQVBBOztBQUVBLFVBQUksQ0FBQ0EsT0FBTyxDQUFQQSxRQUFELFNBQTBCLENBQUNBLE9BQU8sQ0FBUEEsY0FBL0IsTUFBMkQ7QUFDekRBLGVBQU8sQ0FBUEE7QUFDQTtBQUNEOztBQUVEQSxhQUFPLENBQVBBLFdBQW1CN1UsVUFBVSxDQUFDLFlBQU07QUFDbEMsWUFBSTZVLE9BQU8sQ0FBUEEsZ0JBQUosa0JBQThDO0FBQzVDQSxpQkFBTyxDQUFQQTtBQUNEO0FBSDBCLFNBSTFCQSxPQUFPLENBQVBBLGNBSkhBLElBQTZCLENBQTdCQTtBQUtEOzs7V0FFRHFNLGdCQUFNLEtBQU5BLEVBQU0sT0FBTkEsRUFBdUI7QUFDckJyTSxhQUFPLEdBQUcseUNBQVZBLE9BQVUsQ0FBVkE7O0FBRUEsaUJBQVc7QUFDVEEsZUFBTyxDQUFQQSxlQUNFM1QsS0FBSyxDQUFMQSxzQ0FERjJULGlCQUVJQSxPQUFPLENBQVBBLGtCQUEwQjNULEtBQUssQ0FGbkMyVCxhQUVJQSxDQUZKQTtBQUdEOztBQUVELFVBQUlBLE9BQU8sQ0FBWCxvQkFBSUEsRUFBSixFQUFvQztBQUNsQztBQUNEOztBQUVEbEksa0JBQVksQ0FBQ2tJLE9BQU8sQ0FBcEJsSSxRQUFZLENBQVpBO0FBRUFrSSxhQUFPLENBQVBBOztBQUVBLFVBQUksQ0FBQ0EsT0FBTyxDQUFQQSxRQUFELFNBQTBCLENBQUNBLE9BQU8sQ0FBUEEsY0FBL0IsTUFBMkQ7QUFDekRBLGVBQU8sQ0FBUEE7QUFDQTtBQUNEOztBQUVEQSxhQUFPLENBQVBBLFdBQW1CN1UsVUFBVSxDQUFDLFlBQU07QUFDbEMsWUFBSTZVLE9BQU8sQ0FBUEEsZ0JBQUosaUJBQTZDO0FBQzNDQSxpQkFBTyxDQUFQQTtBQUNEO0FBSDBCLFNBSTFCQSxPQUFPLENBQVBBLGNBSkhBLElBQTZCLENBQTdCQTtBQUtEOzs7V0FFRHNNLGdDQUF1QjtBQUNyQixXQUFLLElBQUwsV0FBc0IsS0FBdEIsZ0JBQTJDO0FBQ3pDLFlBQUksb0JBQUosT0FBSSxDQUFKLEVBQWtDO0FBQ2hDO0FBQ0Q7QUFDRjs7QUFFRDtBQUNEOzs7V0FFRGxWLG9CQUFVLE1BQVZBLEVBQW1CO0FBQ2pCLFVBQU1tVixjQUFjLEdBQUd6YSxXQUFXLENBQVhBLGtCQUE4QixLQUFyRCxRQUF1QkEsQ0FBdkI7QUFFQS9JLFlBQU0sQ0FBTkEsNkJBQW9DeWpCLGtCQUFRLEVBQUk7QUFDOUMsWUFBSXZFLHFCQUFxQixDQUFyQkEsSUFBSixRQUFJQSxDQUFKLEVBQXlDO0FBQ3ZDLGlCQUFPc0UsY0FBYyxDQUFyQixRQUFxQixDQUFyQjtBQUNEO0FBSEh4akI7QUFNQUssWUFBTSxxQkFDRCxpQkFESSxPQUFILE1BQUcsY0FBSCxNQUdBLGtEQUFKLEVBSEksQ0FBTkE7QUFNQUEsWUFBTSxDQUFOQSxZQUFtQkEsTUFBTSxDQUFOQSxzQkFBNkJ2QixRQUFRLENBQXJDdUIsT0FBNkNQLFVBQVUsQ0FBQ08sTUFBTSxDQUFqRkEsU0FBMEUsQ0FBMUVBOztBQUVBLFVBQUksT0FBT0EsTUFBTSxDQUFiLFVBQUosVUFBc0M7QUFDcENBLGNBQU0sQ0FBTkEsUUFBZTtBQUNiZ1MsY0FBSSxFQUFFaFMsTUFBTSxDQURDO0FBRWI0UyxjQUFJLEVBQUU1UyxNQUFNLENBQUNpZjtBQUZBLFNBQWZqZjtBQUlEOztBQUVELFVBQUksT0FBT0EsTUFBTSxDQUFiLFVBQUosVUFBc0M7QUFDcENBLGNBQU0sQ0FBTkEsUUFBZUEsTUFBTSxDQUFOQSxNQUFmQSxRQUFlQSxFQUFmQTtBQUNEOztBQUVELFVBQUksT0FBT0EsTUFBTSxDQUFiLFlBQUosVUFBd0M7QUFDdENBLGNBQU0sQ0FBTkEsVUFBaUJBLE1BQU0sQ0FBTkEsUUFBakJBLFFBQWlCQSxFQUFqQkE7QUFDRDs7QUFFRE4scUJBQWUsaUJBQWUsaUJBQTlCQSxXQUFlLENBQWZBOztBQUVBLFVBQUlNLE1BQU0sQ0FBVixVQUFxQjtBQUNuQkEsY0FBTSxDQUFOQSxXQUFrQmlpQixZQUFZLENBQUNqaUIsTUFBTSxDQUFQLFVBQWtCQSxNQUFNLENBQXhCLFdBQW9DQSxNQUFNLENBQXhFQSxVQUE4QixDQUE5QkE7QUFDRDs7QUFFRDtBQUNEOzs7V0FFRHFqQiw4QkFBcUI7QUFDbkIsVUFBTXJqQixNQUFNLEdBQVo7O0FBRUEsV0FBSyxJQUFMLE9BQWtCLEtBQWxCLFNBQWdDO0FBQzlCLFlBQUksa0NBQWtDLGFBQXRDLEdBQXNDLENBQXRDLEVBQXlEO0FBQ3ZEQSxnQkFBTSxDQUFOQSxHQUFNLENBQU5BLEdBQWMsYUFBZEEsR0FBYyxDQUFkQTtBQUNEO0FBTmdCO0FBVW5CO0FBQ0E7OztBQUNBO0FBQ0Q7OztXQUVEc2pCLDBCQUFpQjtBQUNmLFVBQU1oQyxHQUFHLEdBQUcsS0FBWixhQUFZLEVBQVo7QUFDQSxVQUFNaUMscUJBQXFCLEdBQUcsNEJBQXFCLEtBQXJCLG9CQUFxQixFQUFyQixXQUE5QixHQUE4QixDQUE5QjtBQUNBLFVBQU1DLFFBQVEsR0FBR2xDLEdBQUcsQ0FBSEEsNEJBQWpCLHFCQUFpQkEsQ0FBakI7O0FBQ0EsVUFBSWtDLFFBQVEsS0FBUkEsUUFBcUJBLFFBQVEsQ0FBUkEsU0FBekIsR0FBOEM7QUFDNUNBLGdCQUFRLENBQVJBLElBQWFDLGVBQUs7QUFBQSxpQkFBSUEsS0FBSyxDQUEzQkQsSUFBc0JDLEVBQUo7QUFBQSxTQUFsQkQsVUFDV0UsZ0JBQU07QUFBQSxpQkFBSXBDLEdBQUcsQ0FBSEEsaUJBRHJCa0MsTUFDcUJsQyxDQUFKO0FBQUEsU0FEakJrQztBQUVEO0FBQ0Y7OztXQUVERyxnQ0FBdUI7QUFDckI7QUFDRDs7O1dBRURDLHNDQUE0QixVQUE1QkEsRUFBeUM7QUFBQSxVQUMvQkMsS0FEK0IsR0FDdkMsVUFEdUMsQ0FDL0JBLEtBRCtCOztBQUd2QyxVQUFJLENBQUosT0FBWTtBQUNWO0FBQ0Q7O0FBRUQsaUJBQVdBLEtBQUssQ0FBTEEsU0FBWDs7QUFDQTs7QUFDQSwrQkFBeUIsb0JBQW9CQSxLQUFLLENBQWxELFNBQXlCLENBQXpCO0FBQ0Q7OztXQUVEQywwQkFBaUI7QUFDZixVQUFJLEtBQUosU0FBa0I7QUFDaEI7O0FBQ0E7QUFDRDtBQWhtQitCLEssQ0FBQTs7OztTQXdCdkJqWixlQUFVO0FBQ25CO0FBQ0Q7OztTQUVVOUQsZUFBTztBQUNoQjtBQUNEOzs7U0FFVTZZLGVBQVE7QUFDakI7QUFDRDs7O1NBRVV4VSxlQUFjO0FBQ3ZCO0FBckNnQzs7O1dBcW1CM0J0RCx5QkFBZSxNQUFmQSxFQUF3QjtBQUM3QixhQUFPLFVBQVUsWUFBWTtBQUMzQixZQUFNQyxJQUFJLEdBQUdnYyxPQUFPLENBQVBBLDBCQUFiLE1BQWFBLENBQWI7O0FBRUEsWUFBSSxrQkFBSixVQUFnQztBQUM5QixjQUFJLE9BQU9oYyxJQUFJLENBQVgsTUFBVyxDQUFYLEtBQUosYUFBeUM7QUFDdkMsa0JBQU0sMENBQU4sTUFBTSxRQUFOO0FBQ0Q7O0FBRURBLGNBQUksQ0FBSkEsTUFBSSxDQUFKQTtBQUNEO0FBVEgsT0FBTyxDQUFQO0FBV0Q7Ozs7RUFqbkJILGE7QUFvbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE5RyxrQkFBa0IsQ0FBbEJBLE9BQWtCLENBQWxCQTtBQ3h2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTThGLE1BQUksR0FBVjtBQUNBLElBQU1DLFVBQVEsR0FBZDtBQUNBLElBQU1DLFdBQVMsY0FBZixVQUFlLENBQWY7QUFDQSxJQUFNMlgsWUFBWSxHQUFsQjs7QUFFQSxJQUFNL1QsU0FBTyxxQkFDUmtaLE9BQU8sQ0FESSxPQUFIO0FBRVgzTixXQUFTLEVBRkssT0FBSDtBQUdYak4sUUFBTSxFQUFFLElBSE0sQ0FHTixDQUhHO0FBSVg3RCxTQUFPLEVBSk8sT0FBSDtBQUtYMGMsU0FBTyxFQUxPLEVBQUg7QUFNWGpELFVBQVEsRUFBRSx5SkFJQTtBQVZDLEVBQWI7O0FBYUEsSUFBTTNULGFBQVcscUJBQ1oyWSxPQUFPLENBRFEsV0FBSDtBQUVmL0IsU0FBTyxFQUFFO0FBRk0sRUFBakI7O0FBS0EsSUFBTXBDLE9BQUssR0FBRztBQUNaQyxNQUFJLGdCQURRLFdBQ1IsQ0FEUTtBQUVaQyxRQUFNLGtCQUZNLFdBRU4sQ0FGTTtBQUdaQyxNQUFJLGdCQUhRLFdBR1IsQ0FIUTtBQUlaQyxPQUFLLGlCQUpPLFdBSVAsQ0FKTztBQUtaQyxVQUFRLG9CQUxJLFdBS0osQ0FMSTtBQU1aQyxPQUFLLGlCQU5PLFdBTVAsQ0FOTztBQU9aQyxTQUFPLG1CQVBLLFdBT0wsQ0FQSztBQVFaQyxVQUFRLG9CQVJJLFdBUUosQ0FSSTtBQVNaQyxZQUFVLHNCQVRFLFdBU0YsQ0FURTtBQVVaQyxZQUFVLHNCQUFlclosV0FBZjtBQVZFLENBQWQ7QUFhQSxJQUFNK2MsY0FBYyxHQUFwQjtBQUNBLElBQU1DLGdCQUFnQixHQUF0QjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRUEsTzs7Ozs7Ozs7Ozs7OztXQUE4QjtBQXFCNUJ2Qyw2QkFBZ0I7QUFDZCxhQUFPLG1CQUFtQixLQUExQixXQUEwQixFQUExQjtBQUNEOzs7V0FFREUsb0JBQVUsR0FBVkEsRUFBZ0I7QUFDZCx1Q0FBaUMsS0FBakMsUUFBaUMsRUFBakM7O0FBQ0EsdUNBQWlDLEtBQWpDLFdBQWlDLEVBQWpDO0FBM0IwQixLLENBQUE7Ozs7V0FnQzVCc0MsdUJBQWM7QUFDWixhQUFPLDhCQUE4QixhQUFyQyxPQUFPLENBQVA7QUFDRDs7O1dBRURQLGdDQUF1QjtBQUNyQjtBQXJDMEIsSyxDQUFBOzs7O1NBQzVCO0FBRVc5WSxtQkFBVTtBQUNuQjtBQUNEOzs7U0FFVTlELGVBQU87QUFDaEI7QUFDRDs7O1NBRVU2WSxlQUFRO0FBQ2pCO0FBQ0Q7OztTQUVVeFUsZUFBYztBQUN2QjtBQWhCMEI7OztXQTBDckJ0RCx5QkFBZSxNQUFmQSxFQUF3QjtBQUM3QixhQUFPLFVBQVUsWUFBWTtBQUMzQixZQUFNQyxJQUFJLEdBQUdvYyxPQUFPLENBQVBBLDBCQUFiLE1BQWFBLENBQWI7O0FBRUEsWUFBSSxrQkFBSixVQUFnQztBQUM5QixjQUFJLE9BQU9wYyxJQUFJLENBQVgsTUFBVyxDQUFYLEtBQUosYUFBeUM7QUFDdkMsa0JBQU0sMENBQU4sTUFBTSxRQUFOO0FBQ0Q7O0FBRURBLGNBQUksQ0FBSkEsTUFBSSxDQUFKQTtBQUNEO0FBVEgsT0FBTyxDQUFQO0FBV0Q7Ozs7RUF0REgsTztBQXlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBOUcsa0JBQWtCLENBQWxCQSxPQUFrQixDQUFsQkE7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTThGLE1BQUksR0FBVjtBQUNBLElBQU1DLFVBQVEsR0FBZDtBQUNBLElBQU1DLFdBQVMsY0FBZixVQUFlLENBQWY7QUFDQSxJQUFNZ0IsY0FBWSxHQUFsQjtBQUVBLElBQU00QyxTQUFPLEdBQUc7QUFDZDFCLFFBQU0sRUFEUTtBQUVkaEMsUUFBTSxFQUZRO0FBR2R0RixRQUFNLEVBQUU7QUFITSxDQUFoQjtBQU1BLElBQU11SixhQUFXLEdBQUc7QUFDbEJqQyxRQUFNLEVBRFk7QUFFbEJoQyxRQUFNLEVBRlk7QUFHbEJ0RixRQUFNLEVBQUU7QUFIVSxDQUFwQjtBQU1BLElBQU11aUIsY0FBYyxxQkFBcEIsV0FBb0IsQ0FBcEI7QUFDQSxJQUFNQyxZQUFZLG1CQUFsQixXQUFrQixDQUFsQjtBQUNBLElBQU1oWSxtQkFBbUIsaUJBQVVwRixXQUFWLFNBQXpCLGNBQXlCLENBQXpCO0FBRUEsSUFBTXFkLHdCQUF3QixHQUE5QjtBQUNBLElBQU1wYyxtQkFBaUIsR0FBdkI7QUFFQSxJQUFNcWMsaUJBQWlCLEdBQXZCO0FBQ0EsSUFBTUMseUJBQXVCLEdBQTdCO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQXhCO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQXhCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQXpCO0FBQ0EsSUFBTUMsbUJBQW1CLGFBQU1ILGtCQUFOLGVBQTZCRSxtQkFBN0IsZ0JBQXpCLHdCQUF5QixDQUF6QjtBQUNBLElBQU1FLG1CQUFpQixHQUF2QjtBQUNBLElBQU1DLDBCQUF3QixHQUE5QjtBQUVBLElBQU1DLGFBQWEsR0FBbkI7QUFDQSxJQUFNQyxlQUFlLEdBQXJCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFQSxTOzs7OztBQUNFemUscUJBQVcsT0FBWEEsRUFBVyxNQUFYQSxFQUE2QjtBQUFBOztBQUFBOztBQUMzQjtBQUNBLDZCQUFzQiwrQ0FBNEMsUUFBbEU7QUFDQSxzQkFBZSxtQkFBZixNQUFlLENBQWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBckQsZ0JBQVksQ0FBWkEsR0FBZ0IsUUFBaEJBLDhCQUFtRDtBQUFBLGFBQU0sUUFBekRBLFFBQXlELEVBQU47QUFBQSxLQUFuREE7O0FBRUE7O0FBQ0E7O0FBWjJCO0FBRE8sRyxDQUFBOzs7OztXQUFBO0FBNEJwQytoQix1QkFBVTtBQUFBOztBQUNSLFVBQU1DLFVBQVUsR0FBRyx3QkFBd0Isb0JBQXhCLHlCQUFuQjtBQUlBLFVBQU1DLFlBQVksR0FBRyw4Q0FFbkIsYUFGRjtBQUlBLFVBQU1DLFVBQVUsR0FBR0QsWUFBWSxLQUFaQSxrQkFDakIsS0FEaUJBLGFBQ2pCLEVBRGlCQSxHQUFuQjtBQUlBO0FBQ0E7QUFDQSwyQkFBcUIsS0FBckIsZ0JBQXFCLEVBQXJCO0FBRUEsVUFBTUUsT0FBTyxHQUFHMWIsY0FBYyxDQUFkQSwwQkFBeUMsYUFBekQsTUFBZ0JBLENBQWhCO0FBRUEwYixhQUFPLENBQVBBLElBQVkxbUIsaUJBQU8sRUFBSTtBQUNyQixZQUFNMm1CLGNBQWMsR0FBR3htQixzQkFBc0IsQ0FBN0MsT0FBNkMsQ0FBN0M7QUFDQSxZQUFNK0MsTUFBTSxHQUFHeWpCLGNBQWMsR0FBRzNiLGNBQWMsQ0FBZEEsUUFBSCxjQUFHQSxDQUFILEdBQTdCOztBQUVBLG9CQUFZO0FBQ1YsY0FBTTRiLFNBQVMsR0FBRzFqQixNQUFNLENBQXhCLHFCQUFrQkEsRUFBbEI7O0FBQ0EsY0FBSTBqQixTQUFTLENBQVRBLFNBQW1CQSxTQUFTLENBQWhDLFFBQXlDO0FBQ3ZDLG1CQUFPLENBQ0w3YyxXQUFXLENBQVhBLFlBQVcsQ0FBWEEsZUFESyxZQUFQLGNBQU8sQ0FBUDtBQUlEO0FBQ0Y7O0FBRUQ7QUFkRjJjLGdCQWdCVUcsY0FBSTtBQUFBLGVBaEJkSCxJQWdCYztBQUFBLE9BaEJkQSxPQWlCUTtBQUFBLGVBQVU3SSxDQUFDLENBQURBLENBQUMsQ0FBREEsR0FBT0UsQ0FBQyxDQWpCMUIySSxDQWlCMEIsQ0FBbEI7QUFBQSxPQWpCUkEsVUFrQldHLGNBQUksRUFBSTtBQUNmLDhCQUFtQkEsSUFBSSxDQUF2QixDQUF1QixDQUF2Qjs7QUFDQSw4QkFBbUJBLElBQUksQ0FBdkIsQ0FBdUIsQ0FBdkI7QUFwQkpIO0FBc0JEOzs7V0FFRDVlLG1CQUFVO0FBQ1J2RCxrQkFBWSxDQUFaQSxJQUFpQixLQUFqQkE7O0FBQ0E7QUF6RWtDLEssQ0FBQTs7OztXQThFcEM4SyxvQkFBVSxNQUFWQSxFQUFtQjtBQUNqQmhPLFlBQU0scUJBQUcsU0FBSCxNQUVEMEksV0FBVyxDQUFYQSxrQkFBOEIsS0FGMUIsUUFFSkEsQ0FGQyxNQUdBLGtEQUFKLEVBSEksQ0FBTjFJO0FBTUFBLFlBQU0sQ0FBTkEsU0FBZ0JQLFVBQVUsQ0FBQ08sTUFBTSxDQUFqQlAsTUFBVSxDQUFWQSxJQUE2QmhCLFFBQVEsQ0FBckR1QjtBQUVBTixxQkFBZSxpQkFBZkEsYUFBZSxDQUFmQTtBQUVBO0FBQ0Q7OztXQUVEK2xCLHlCQUFnQjtBQUNkLGFBQU8saUNBQ0wsb0JBREssY0FFTCxvQkFGRjtBQUdEOzs7V0FFREMsNEJBQW1CO0FBQ2pCLGFBQU8sb0NBQW9DbG5CLElBQUksQ0FBSkEsSUFDekNDLFFBQVEsQ0FBUkEsS0FEeUNELGNBRXpDQyxRQUFRLENBQVJBLGdCQUZGLFlBQTJDRCxDQUEzQztBQUlEOzs7V0FFRG1uQiw0QkFBbUI7QUFDakIsYUFBTyxpQ0FDTDFtQixNQUFNLENBREQsY0FFTCw0Q0FGRjtBQUdEOzs7V0FFRDJtQixvQkFBVztBQUNULFVBQU1DLFNBQVMsR0FBRyx1QkFBdUIsYUFBekM7O0FBQ0EsVUFBTTNLLFlBQVksR0FBRyxLQUFyQixnQkFBcUIsRUFBckI7O0FBQ0EsVUFBTTRLLFNBQVMsR0FBRyxxQ0FBcUMsS0FBdkQsZ0JBQXVELEVBQXZEOztBQUVBLFVBQUksdUJBQUosY0FBeUM7QUFDdkM7QUFDRDs7QUFFRCxVQUFJRCxTQUFTLElBQWIsV0FBNEI7QUFDMUIsWUFBTWhrQixNQUFNLEdBQUcsY0FBYyx1QkFBN0IsQ0FBZSxDQUFmOztBQUVBLFlBQUksdUJBQUosUUFBbUM7QUFDakM7QUFDRDs7QUFFRDtBQUNEOztBQUVELFVBQUksc0JBQXNCZ2tCLFNBQVMsR0FBRyxjQUFsQyxDQUFrQyxDQUFsQyxJQUFzRCxtQkFBMUQsR0FBZ0Y7QUFDOUU7O0FBQ0E7O0FBQ0E7QUFDRDs7QUFFRCxXQUFLLElBQUl4aUIsQ0FBQyxHQUFHLGNBQWIsUUFBbUNBLENBQW5DLEtBQXlDO0FBQ3ZDLFlBQU0waUIsY0FBYyxHQUFHLHVCQUF1QixjQUF2QixDQUF1QixDQUF2QixJQUNuQkYsU0FBUyxJQUFJLGNBRE0sQ0FDTixDQURNLEtBRWxCLE9BQU8sY0FBY3hpQixDQUFDLEdBQXRCLENBQU8sQ0FBUCxvQkFBK0N3aUIsU0FBUyxHQUFHLGNBQWN4aUIsQ0FBQyxHQUYvRSxDQUVnRSxDQUZ6QyxDQUF2Qjs7QUFJQSw0QkFBb0I7QUFDbEIseUJBQWUsY0FBZixDQUFlLENBQWY7QUFDRDtBQUNGO0FBQ0Y7OztXQUVEMmlCLG1CQUFTLE1BQVRBLEVBQWtCO0FBQ2hCOztBQUVBOztBQUVBLFVBQU1DLE9BQU8sR0FBR3JCLG1CQUFtQixDQUFuQkEsZUFDVGhtQixrQkFBUTtBQUFBLHlCQUFPQSxRQUFQLCtCQUFtQ2lELE1BQW5DLGlCQUErQ2pELFFBQS9DLHFCQURmLE1BQ2U7QUFBQSxPQURDZ21CLENBQWhCO0FBR0EsVUFBTXNCLElBQUksR0FBR3ZjLGNBQWMsQ0FBZEEsUUFBdUJzYyxPQUFPLENBQVBBLEtBQXZCdGMsR0FBdUJzYyxDQUF2QnRjLEVBQTBDLGFBQXZELE1BQWFBLENBQWI7QUFFQXVjLFVBQUksQ0FBSkE7O0FBQ0EsVUFBSUEsSUFBSSxDQUFKQSxtQkFBSix3QkFBSUEsQ0FBSixFQUF1RDtBQUNyRHZjLHNCQUFjLENBQWRBLG9DQUFpRHVjLElBQUksQ0FBSkEsUUFBakR2YyxtQkFBaUR1YyxDQUFqRHZjO0FBREYsYUFHTztBQUNMQSxzQkFBYyxDQUFkQSxpREFDV3djLG1CQUFTLEVBQUk7QUFDcEI7QUFDQTtBQUNBeGMsd0JBQWMsQ0FBZEEsMEJBQWtDOGEsa0JBQWxDOWEsNkNBQ1c2YixjQUFJO0FBQUEsbUJBQUlBLElBQUksQ0FBSkEsY0FKQyxtQkFJREEsQ0FBSjtBQUFBLFdBRGY3YixFQUhvQjs7QUFPcEJBLHdCQUFjLENBQWRBLDRDQUNXeWMsaUJBQU8sRUFBSTtBQUNsQnpjLDBCQUFjLENBQWRBLDhDQUNXNmIsY0FBSTtBQUFBLHFCQUFJQSxJQUFJLENBQUpBLGNBRG5CN2IsbUJBQ21CNmIsQ0FBSjtBQUFBLGFBRGY3YjtBQUZKQTtBQVJKQTtBQWNEOztBQUVEekcsa0JBQVksQ0FBWkEsUUFBcUIsS0FBckJBLGdDQUEwRDtBQUN4RGlNLHFCQUFhLEVBQUV0TjtBQUR5QyxPQUExRHFCO0FBR0Q7OztXQUVEbWpCLGtCQUFTO0FBQ1AxYyxvQkFBYyxDQUFkQSwwQkFBeUMsYUFBekNBLGVBQ1UyYyxjQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFKQSxtQkFEbEIzYyxtQkFDa0IyYyxDQUFKO0FBQUEsT0FEZDNjLFVBRVcyYyxjQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFKQSxpQkFGbkIzYyxtQkFFbUIyYyxDQUFKO0FBQUEsT0FGZjNjO0FBeExrQyxLLENBQUE7Ozs7U0FrQnpCa0IsZUFBVTtBQUNuQjtBQUNEOzs7U0FFVTlELGVBQU87QUFDaEI7QUF2QmtDOzs7V0ErTDdCZSx5QkFBZSxNQUFmQSxFQUF3QjtBQUM3QixhQUFPLFVBQVUsWUFBWTtBQUMzQixZQUFNQyxJQUFJLEdBQUd3ZSxTQUFTLENBQVRBLDBCQUFiLE1BQWFBLENBQWI7O0FBRUEsWUFBSSxrQkFBSixVQUFnQztBQUM5QjtBQUNEOztBQUVELFlBQUksT0FBT3hlLElBQUksQ0FBWCxNQUFXLENBQVgsS0FBSixhQUF5QztBQUN2QyxnQkFBTSwwQ0FBTixNQUFNLFFBQU47QUFDRDs7QUFFREEsWUFBSSxDQUFKQSxNQUFJLENBQUpBO0FBWEYsT0FBTyxDQUFQO0FBYUQ7Ozs7RUE3TUgsYTtBQWdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTdFLFlBQVksQ0FBWkEsZ0NBQTZDLFlBQU07QUFDakR5RyxnQkFBYyxDQUFkQSxnQ0FDVzZjLGFBQUc7QUFBQSxXQUFJLGNBRGxCN2MsR0FDa0IsQ0FBSjtBQUFBLEdBRGRBO0FBREZ6RztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQWpDLGtCQUFrQixDQUFsQkEsU0FBa0IsQ0FBbEJBO0FDcFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU04RixNQUFJLEdBQVY7QUFDQSxJQUFNQyxVQUFRLEdBQWQ7QUFDQSxJQUFNQyxXQUFTLGNBQWYsVUFBZSxDQUFmO0FBQ0EsSUFBTWdCLFlBQVksR0FBbEI7QUFFQSxJQUFNaUosWUFBVSxpQkFBaEIsV0FBZ0IsQ0FBaEI7QUFDQSxJQUFNQyxjQUFZLG1CQUFsQixXQUFrQixDQUFsQjtBQUNBLElBQU1ILFlBQVUsaUJBQWhCLFdBQWdCLENBQWhCO0FBQ0EsSUFBTUMsYUFBVyxrQkFBakIsV0FBaUIsQ0FBakI7QUFDQSxJQUFNN0ksb0JBQW9CLGtCQUFXbkIsV0FBWCxTQUExQixZQUEwQixDQUExQjtBQUVBLElBQU13Zix3QkFBd0IsR0FBOUI7QUFDQSxJQUFNdmUsaUJBQWlCLEdBQXZCO0FBQ0EsSUFBTVQsaUJBQWUsR0FBckI7QUFDQSxJQUFNQyxpQkFBZSxHQUFyQjtBQUVBLElBQU1tZCxpQkFBaUIsR0FBdkI7QUFDQSxJQUFNTCx1QkFBdUIsR0FBN0I7QUFDQSxJQUFNM1gsZUFBZSxHQUFyQjtBQUNBLElBQU02WixrQkFBa0IsR0FBeEI7QUFDQSxJQUFNdmUsb0JBQW9CLEdBQTFCO0FBQ0EsSUFBTTJjLHdCQUF3QixHQUE5QjtBQUNBLElBQU02Qiw4QkFBOEIsR0FBcEM7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVBLEc7Ozs7Ozs7Ozs7Ozs7V0FBZ0M7QUFTOUIzVSxvQkFBTztBQUFBOztBQUNMLFVBQUssNEJBQ0gsc0NBQXNDMVIsSUFBSSxDQUR2QyxnQkFFSCxpQ0FGRixpQkFFRSxDQUZGLEVBRXdEO0FBQ3REO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFNdUIsTUFBTSxHQUFHOUMsc0JBQXNCLENBQUMsS0FBdEMsUUFBcUMsQ0FBckM7O0FBQ0EsVUFBTTZuQixXQUFXLEdBQUcsc0JBQXBCLHVCQUFvQixDQUFwQjs7QUFFQSx1QkFBaUI7QUFDZixZQUFNQyxZQUFZLEdBQUdELFdBQVcsQ0FBWEEscUJBQWlDQSxXQUFXLENBQVhBLGFBQWpDQSw0QkFBckI7QUFDQXhjLGdCQUFRLEdBQUdULGNBQWMsQ0FBZEEsbUJBQVhTLFdBQVdULENBQVhTO0FBQ0FBLGdCQUFRLEdBQUdBLFFBQVEsQ0FBQ0EsUUFBUSxDQUFSQSxTQUFwQkEsQ0FBbUIsQ0FBbkJBO0FBQ0Q7O0FBRUQsVUFBTWlMLFNBQVMsR0FBR2pMLFFBQVEsR0FDeEIsWUFBWSxDQUFaLGdDQUEyQztBQUN6QytFLHFCQUFhLEVBQUUsS0FBSzZGO0FBRHFCLE9BQTNDLENBRHdCLEdBQTFCO0FBTUEsVUFBTUMsU0FBUyxHQUFHLFlBQVksQ0FBWixRQUFxQixLQUFyQix3QkFBZ0Q7QUFDaEU5RixxQkFBYSxFQUFFL0U7QUFEaUQsT0FBaEQsQ0FBbEI7O0FBSUEsVUFBSTZLLFNBQVMsQ0FBVEEsb0JBQStCSSxTQUFTLEtBQVRBLFFBQXNCQSxTQUFTLENBQWxFLGtCQUFzRjtBQUNwRjtBQUNEOztBQUVELHFCQUFlLEtBQWY7O0FBRUEsVUFBTTVDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJ2UCxvQkFBWSxDQUFaQSxrQ0FBNkM7QUFDM0NpTSx1QkFBYSxFQUFFLFFBQUs2RjtBQUR1QixTQUE3QzlSO0FBR0FBLG9CQUFZLENBQVpBLFFBQXFCLFFBQXJCQSx5QkFBaUQ7QUFDL0NpTSx1QkFBYSxFQUFFL0U7QUFEZ0MsU0FBakRsSDtBQUpGOztBQVNBLGtCQUFZO0FBQ1YsK0JBQXVCckIsTUFBTSxDQUE3QjtBQURGLGFBRU87QUFDTDRRLGdCQUFRO0FBQ1Q7QUF2RDJCLEssQ0FBQTs7OztXQTREOUJ1VCxtQkFBUyxPQUFUQSxFQUFTLFNBQVRBLEVBQVMsUUFBVEEsRUFBd0M7QUFBQTs7QUFDdEMsVUFBTWMsY0FBYyxHQUFHNVUsU0FBUyxLQUFLQSxTQUFTLENBQVRBLHFCQUErQkEsU0FBUyxDQUFUQSxhQUE3Q0EsSUFBUyxDQUFUQSxHQUNyQnZJLGNBQWMsQ0FBZEEseUJBRHFCdUksU0FDckJ2SSxDQURxQnVJLEdBRXJCdkksY0FBYyxDQUFkQSxvQkFGRixlQUVFQSxDQUZGO0FBSUEsVUFBTW9kLE1BQU0sR0FBR0QsY0FBYyxDQUE3QixDQUE2QixDQUE3QjtBQUNBLFVBQU1FLGVBQWUsR0FBR2ptQixRQUFRLElBQUtnbUIsTUFBYmhtQixJQUF1QmdtQixNQUFNLENBQU5BLG1CQUEvQyxpQkFBK0NBLENBQS9DOztBQUVBLFVBQU10VSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLGVBQU0sNkNBQXZCLFFBQXVCLENBQU47QUFBQSxPQUFqQjs7QUFFQSxVQUFJc1UsTUFBTSxJQUFWLGlCQUErQjtBQUM3QkEsY0FBTSxDQUFOQTs7QUFDQTtBQUZGLGFBR087QUFDTHRVLGdCQUFRO0FBQ1Q7QUFDRjs7O1dBRUR3VSw2QkFBbUIsT0FBbkJBLEVBQW1CLE1BQW5CQSxFQUFtQixRQUFuQkEsRUFBK0M7QUFDN0Msa0JBQVk7QUFDVkYsY0FBTSxDQUFOQTtBQUVBLFlBQU1HLGFBQWEsR0FBR3ZkLGNBQWMsQ0FBZEEsd0NBQXVEb2QsTUFBTSxDQUFuRixVQUFzQnBkLENBQXRCOztBQUVBLDJCQUFtQjtBQUNqQnVkLHVCQUFhLENBQWJBO0FBQ0Q7O0FBRUQsWUFBSUgsTUFBTSxDQUFOQSx5QkFBSixPQUEyQztBQUN6Q0EsZ0JBQU0sQ0FBTkE7QUFDRDtBQUNGOztBQUVEcG9CLGFBQU8sQ0FBUEE7O0FBQ0EsVUFBSUEsT0FBTyxDQUFQQSx5QkFBSixPQUE0QztBQUMxQ0EsZUFBTyxDQUFQQTtBQUNEOztBQUVEK0IsWUFBTSxDQUFOQSxPQUFNLENBQU5BOztBQUVBLFVBQUkvQixPQUFPLENBQVBBLG1CQUFKLGlCQUFJQSxDQUFKLEVBQWlEO0FBQy9DQSxlQUFPLENBQVBBO0FBQ0Q7O0FBRUQsVUFBSW9TLE1BQU0sR0FBR3BTLE9BQU8sQ0FBcEI7O0FBQ0EsVUFBSW9TLE1BQU0sSUFBSUEsTUFBTSxDQUFOQSxhQUFkLE1BQXdDO0FBQ3RDQSxjQUFNLEdBQUdBLE1BQU0sQ0FBZkE7QUFDRDs7QUFFRCxVQUFJQSxNQUFNLElBQUlBLE1BQU0sQ0FBTkEsbUJBQWQsd0JBQWNBLENBQWQsRUFBbUU7QUFDakUsWUFBTW9XLGVBQWUsR0FBR3hvQixPQUFPLENBQVBBLFFBQXhCLGlCQUF3QkEsQ0FBeEI7O0FBRUEsNkJBQXFCO0FBQ25CZ0wsd0JBQWMsQ0FBZEEsd0RBQ1d5ZCxrQkFBUTtBQUFBLG1CQUFJQSxRQUFRLENBQVJBLGNBRHZCemQsaUJBQ3VCeWQsQ0FBSjtBQUFBLFdBRG5CemQ7QUFFRDs7QUFFRGhMLGVBQU8sQ0FBUEE7QUFDRDs7QUFFRCxvQkFBYztBQUNab0MsZ0JBQVE7QUFDVDtBQTFIMkIsSyxDQUFBOzs7O1NBQzlCO0FBRVdnRyxtQkFBTztBQUNoQjtBQUo0Qjs7O1dBK0h2QmUseUJBQWUsTUFBZkEsRUFBd0I7QUFDN0IsYUFBTyxVQUFVLFlBQVk7QUFDM0IsWUFBTUMsSUFBSSxHQUFHc2YsR0FBRyxDQUFIQSxvQkFBYixJQUFhQSxDQUFiOztBQUVBLFlBQUksa0JBQUosVUFBZ0M7QUFDOUIsY0FBSSxPQUFPdGYsSUFBSSxDQUFYLE1BQVcsQ0FBWCxLQUFKLGFBQXlDO0FBQ3ZDLGtCQUFNLDBDQUFOLE1BQU0sUUFBTjtBQUNEOztBQUVEQSxjQUFJLENBQUpBLE1BQUksQ0FBSkE7QUFDRDtBQVRILE9BQU8sQ0FBUDtBQVdEOzs7O0VBM0lILGE7QUE4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE3RSxZQUFZLENBQVpBLHlEQUFzRSxpQkFBaUI7QUFDckYsTUFBSSx1QkFBdUIsS0FBM0IsT0FBSSxDQUFKLEVBQTBDO0FBQ3hDRCxTQUFLLENBQUxBO0FBQ0Q7O0FBRUQsTUFBSTVDLFVBQVUsQ0FBZCxJQUFjLENBQWQsRUFBc0I7QUFDcEI7QUFDRDs7QUFFRCxNQUFNMEgsSUFBSSxHQUFHc2YsR0FBRyxDQUFIQSxvQkFBYixJQUFhQSxDQUFiO0FBQ0F0ZixNQUFJLENBQUpBO0FBVkY3RTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQWpDLGtCQUFrQixDQUFsQkEsR0FBa0IsQ0FBbEJBO0FDN05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU04RixJQUFJLEdBQVY7QUFDQSxJQUFNQyxRQUFRLEdBQWQ7QUFDQSxJQUFNQyxTQUFTLGNBQWYsUUFBZSxDQUFmO0FBRUEsSUFBTXFnQixlQUFlLHNCQUFyQixTQUFxQixDQUFyQjtBQUNBLElBQU1DLGNBQWMscUJBQXBCLFNBQW9CLENBQXBCO0FBQ0EsSUFBTXpPLGFBQWEsb0JBQW5CLFNBQW1CLENBQW5CO0FBQ0EsSUFBTTBPLGNBQWMscUJBQXBCLFNBQW9CLENBQXBCO0FBQ0EsSUFBTXRXLFVBQVUsaUJBQWhCLFNBQWdCLENBQWhCO0FBQ0EsSUFBTUMsWUFBWSxtQkFBbEIsU0FBa0IsQ0FBbEI7QUFDQSxJQUFNSCxVQUFVLGlCQUFoQixTQUFnQixDQUFoQjtBQUNBLElBQU1DLFdBQVcsa0JBQWpCLFNBQWlCLENBQWpCO0FBRUEsSUFBTXhKLGVBQWUsR0FBckI7QUFDQSxJQUFNZ2dCLGVBQWUsR0FBckIsTyxDQUFBOztBQUNBLElBQU0vZixlQUFlLEdBQXJCO0FBQ0EsSUFBTWdnQixrQkFBa0IsR0FBeEI7QUFFQSxJQUFNdGMsV0FBVyxHQUFHO0FBQ2xCMFQsV0FBUyxFQURTO0FBRWxCNkksVUFBUSxFQUZVO0FBR2xCMUksT0FBSyxFQUFFO0FBSFcsQ0FBcEI7QUFNQSxJQUFNcFUsT0FBTyxHQUFHO0FBQ2RpVSxXQUFTLEVBREs7QUFFZDZJLFVBQVEsRUFGTTtBQUdkMUksT0FBSyxFQUFFO0FBSE8sQ0FBaEI7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVBLEs7Ozs7O0FBQ0UxWSxpQkFBVyxPQUFYQSxFQUFXLE1BQVhBLEVBQTZCO0FBQUE7O0FBQUE7O0FBQzNCO0FBRUEsc0JBQWUsbUJBQWYsTUFBZSxDQUFmO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQVAyQjtBQURHLEcsQ0FBQTs7Ozs7V0FBQTtBQTJCaEN5TCxvQkFBTztBQUFBOztBQUNMLFVBQU1pRCxTQUFTLEdBQUcvUixZQUFZLENBQVpBLFFBQXFCLEtBQXJCQSxVQUFsQixVQUFrQkEsQ0FBbEI7O0FBRUEsVUFBSStSLFNBQVMsQ0FBYixrQkFBZ0M7QUFDOUI7QUFDRDs7QUFFRDs7QUFFQSxVQUFJLGFBQUosV0FBNEI7QUFDMUI7QUFDRDs7QUFFRCxVQUFNeEMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQjs7QUFDQXZQLG9CQUFZLENBQVpBLFFBQXFCLFFBQXJCQTs7QUFFQTtBQUpGOztBQU9BLHFDQXBCSyxlQW9CTCxFQXBCSzs7O0FBcUJMeEMsWUFBTSxDQUFDLEtBQVBBLFFBQU0sQ0FBTkE7O0FBQ0E7O0FBQ0E7O0FBRUEsb0NBQThCLEtBQTlCLFVBQTZDLGFBQTdDO0FBQ0Q7OztXQUVEa1MsZ0JBQU87QUFBQTs7QUFDTCxVQUFJLENBQUMsaUNBQUwsZUFBSyxDQUFMLEVBQXdEO0FBQ3REO0FBQ0Q7O0FBRUQsVUFBTXlDLFNBQVMsR0FBR25TLFlBQVksQ0FBWkEsUUFBcUIsS0FBckJBLFVBQWxCLFVBQWtCQSxDQUFsQjs7QUFFQSxVQUFJbVMsU0FBUyxDQUFiLGtCQUFnQztBQUM5QjtBQUNEOztBQUVELFVBQU01QyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLHVDQURxQixlQUNyQixFQURxQjs7O0FBRXJCOztBQUNBOztBQUNBdlAsb0JBQVksQ0FBWkEsUUFBcUIsUUFBckJBO0FBSkY7O0FBT0E7O0FBQ0Esb0NBQThCLEtBQTlCLFVBQTZDLGFBQTdDO0FBQ0Q7OztXQUVEdUQsbUJBQVU7QUFDUjs7QUFFQSxVQUFJLGlDQUFKLGVBQUksQ0FBSixFQUF1RDtBQUNyRDtBQUNEOztBQUVEO0FBcEY4QixLLENBQUE7Ozs7V0F5RmhDdUgsb0JBQVUsTUFBVkEsRUFBbUI7QUFDakJoTyxZQUFNLHFCQUFHLE9BQUgsTUFFRDBJLFdBQVcsQ0FBWEEsa0JBQThCLEtBRjFCLFFBRUpBLENBRkMsTUFHQSxrREFBSixFQUhJLENBQU4xSTtBQU1BTixxQkFBZSxlQUFlLGlCQUE5QkEsV0FBZSxDQUFmQTtBQUVBO0FBQ0Q7OztXQUVEa29CLDhCQUFxQjtBQUFBOztBQUNuQixVQUFJLENBQUMsYUFBTCxVQUE0QjtBQUMxQjtBQUNEOztBQUVELFVBQUksNkJBQTZCLEtBQWpDLHlCQUErRDtBQUM3RDtBQUNEOztBQUVELHNCQUFnQjdsQixVQUFVLENBQUMsWUFBTTtBQUMvQjtBQUR3QixTQUV2QixhQUZILEtBQTBCLENBQTFCO0FBR0Q7OztXQUVEOGxCLHdCQUFjLEtBQWRBLEVBQWMsYUFBZEEsRUFBcUM7QUFDbkMsY0FBUTVrQixLQUFLLENBQWI7QUFDRTtBQUNBO0FBQ0U7QUFDQTs7QUFDRjtBQUNBO0FBQ0U7QUFDQTtBQVJKOztBQWFBLHlCQUFtQjtBQUNqQjs7QUFDQTtBQUNEOztBQUVELFVBQU00TSxXQUFXLEdBQUc1TSxLQUFLLENBQXpCOztBQUNBLFVBQUksaUNBQWlDLHVCQUFyQyxXQUFxQyxDQUFyQyxFQUEwRTtBQUN4RTtBQUNEOztBQUVEO0FBQ0Q7OztXQUVEeWYseUJBQWdCO0FBQUE7O0FBQ2R4ZixrQkFBWSxDQUFaQSxHQUFnQixLQUFoQkEsMkJBQWdERCxlQUFLO0FBQUEsZUFBSSw4QkFBekRDLElBQXlELENBQUo7QUFBQSxPQUFyREE7QUFDQUEsa0JBQVksQ0FBWkEsR0FBZ0IsS0FBaEJBLDBCQUErQ0QsZUFBSztBQUFBLGVBQUksOEJBQXhEQyxLQUF3RCxDQUFKO0FBQUEsT0FBcERBO0FBQ0FBLGtCQUFZLENBQVpBLEdBQWdCLEtBQWhCQSx5QkFBOENELGVBQUs7QUFBQSxlQUFJLDhCQUF2REMsSUFBdUQsQ0FBSjtBQUFBLE9BQW5EQTtBQUNBQSxrQkFBWSxDQUFaQSxHQUFnQixLQUFoQkEsMEJBQStDRCxlQUFLO0FBQUEsZUFBSSw4QkFBeERDLEtBQXdELENBQUo7QUFBQSxPQUFwREE7QUFDRDs7O1dBRUQ0a0IseUJBQWdCO0FBQ2RwWixrQkFBWSxDQUFDLEtBQWJBLFFBQVksQ0FBWkE7QUFDQTtBQXZKOEIsSyxDQUFBOzs7O1NBYXJCdEQsZUFBYztBQUN2QjtBQUNEOzs7U0FFVVAsZUFBVTtBQUNuQjtBQUNEOzs7U0FFVTlELGVBQU87QUFDaEI7QUF0QjhCOzs7V0E0SnpCZSx5QkFBZSxNQUFmQSxFQUF3QjtBQUM3QixhQUFPLFVBQVUsWUFBWTtBQUMzQixZQUFNQyxJQUFJLEdBQUdnZ0IsS0FBSyxDQUFMQSwwQkFBYixNQUFhQSxDQUFiOztBQUVBLFlBQUksa0JBQUosVUFBZ0M7QUFDOUIsY0FBSSxPQUFPaGdCLElBQUksQ0FBWCxNQUFXLENBQVgsS0FBSixhQUF5QztBQUN2QyxrQkFBTSwwQ0FBTixNQUFNLFFBQU47QUFDRDs7QUFFREEsY0FBSSxDQUFKQSxNQUFJLENBQUpBO0FBQ0Q7QUFUSCxPQUFPLENBQVA7QUFXRDs7OztFQXhLSCxhOztBQTJLQWIsb0JBQW9CLENBQXBCQSxLQUFvQixDQUFwQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFqRyxrQkFBa0IsQ0FBbEJBLEtBQWtCLENBQWxCQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuZXNtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4xLjMpOiB1dGlsL2luZGV4LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTUFYX1VJRCA9IDEwMDAwMDBcbmNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMFxuY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCdcblxuLy8gU2hvdXRvdXQgQW5ndXNDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuY29uc3QgdG9UeXBlID0gb2JqID0+IHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBgJHtvYmp9YFxuICB9XG5cbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQdWJsaWMgVXRpbCBBcGlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgZ2V0VUlEID0gcHJlZml4ID0+IHtcbiAgZG8ge1xuICAgIHByZWZpeCArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKVxuICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuXG4gIHJldHVybiBwcmVmaXhcbn1cblxuY29uc3QgZ2V0U2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JylcblxuICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICBsZXQgaHJlZkF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpXG5cbiAgICAvLyBUaGUgb25seSB2YWxpZCBjb250ZW50IHRoYXQgY291bGQgZG91YmxlIGFzIGEgc2VsZWN0b3IgYXJlIElEcyBvciBjbGFzc2VzLFxuICAgIC8vIHNvIGV2ZXJ5dGhpbmcgc3RhcnRpbmcgd2l0aCBgI2Agb3IgYC5gLiBJZiBhIFwicmVhbFwiIFVSTCBpcyB1c2VkIGFzIHRoZSBzZWxlY3RvcixcbiAgICAvLyBgZG9jdW1lbnQucXVlcnlTZWxlY3RvcmAgd2lsbCByaWdodGZ1bGx5IGNvbXBsYWluIGl0IGlzIGludmFsaWQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMzIyNzNcbiAgICBpZiAoIWhyZWZBdHRyIHx8ICghaHJlZkF0dHIuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHIuc3RhcnRzV2l0aCgnLicpKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBKdXN0IGluIGNhc2Ugc29tZSBDTVMgcHV0cyBvdXQgYSBmdWxsIFVSTCB3aXRoIHRoZSBhbmNob3IgYXBwZW5kZWRcbiAgICBpZiAoaHJlZkF0dHIuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHIuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBocmVmQXR0ciA9IGAjJHtocmVmQXR0ci5zcGxpdCgnIycpWzFdfWBcbiAgICB9XG5cbiAgICBzZWxlY3RvciA9IGhyZWZBdHRyICYmIGhyZWZBdHRyICE9PSAnIycgPyBocmVmQXR0ci50cmltKCkgOiBudWxsXG4gIH1cblxuICByZXR1cm4gc2VsZWN0b3Jcbn1cblxuY29uc3QgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBnZXRFbGVtZW50RnJvbVNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICByZXR1cm4gc2VsZWN0b3IgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IG51bGxcbn1cblxuY29uc3QgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG4gIGxldCB7IHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvbkRlbGF5IH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF1cblxuICByZXR1cm4gKE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSXG59XG5cbmNvbnN0IHRyaWdnZXJUcmFuc2l0aW9uRW5kID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKVxufVxuXG5jb25zdCBpc0VsZW1lbnQgPSBvYmogPT4ge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmouanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG9iaiA9IG9ialswXVxuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBvYmoubm9kZVR5cGUgIT09ICd1bmRlZmluZWQnXG59XG5cbmNvbnN0IGdldEVsZW1lbnQgPSBvYmogPT4ge1xuICBpZiAoaXNFbGVtZW50KG9iaikpIHsgLy8gaXQncyBhIGpRdWVyeSBvYmplY3Qgb3IgYSBub2RlIGVsZW1lbnRcbiAgICByZXR1cm4gb2JqLmpxdWVyeSA/IG9ialswXSA6IG9ialxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnICYmIG9iai5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob2JqKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgdHlwZUNoZWNrQ29uZmlnID0gKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpID0+IHtcbiAgT2JqZWN0LmtleXMoY29uZmlnVHlwZXMpLmZvckVhY2gocHJvcGVydHkgPT4ge1xuICAgIGNvbnN0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZSAmJiBpc0VsZW1lbnQodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgYCR7Y29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYFxuICAgICAgKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgaXNWaXNpYmxlID0gZWxlbWVudCA9PiB7XG4gIGlmICghaXNFbGVtZW50KGVsZW1lbnQpIHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ3Zpc2libGUnXG59XG5cbmNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodHlwZW9mIGVsZW1lbnQuZGlzYWJsZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGlzYWJsZWRcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gJ2ZhbHNlJ1xufVxuXG5jb25zdCBmaW5kU2hhZG93Um9vdCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKClcbiAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbFxuICB9XG5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuXG4gIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBmaW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG4vKipcbiAqIFRyaWNrIHRvIHJlc3RhcnQgYW4gZWxlbWVudCdzIGFuaW1hdGlvblxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4gdm9pZFxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cuY2hhcmlzdGhlby5pby9ibG9nLzIwMjEvMDIvcmVzdGFydC1hLWNzcy1hbmltYXRpb24td2l0aC1qYXZhc2NyaXB0LyNyZXN0YXJ0aW5nLWEtY3NzLWFuaW1hdGlvblxuICovXG5jb25zdCByZWZsb3cgPSBlbGVtZW50ID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICBlbGVtZW50Lm9mZnNldEhlaWdodFxufVxuXG5jb25zdCBnZXRqUXVlcnkgPSAoKSA9PiB7XG4gIGNvbnN0IHsgalF1ZXJ5IH0gPSB3aW5kb3dcblxuICBpZiAoalF1ZXJ5ICYmICFkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS1icy1uby1qcXVlcnknKSkge1xuICAgIHJldHVybiBqUXVlcnlcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MgPSBbXVxuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWQgPSBjYWxsYmFjayA9PiB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAvLyBhZGQgbGlzdGVuZXIgb24gdGhlIGZpcnN0IGNhbGwgd2hlbiB0aGUgZG9jdW1lbnQgaXMgaW4gbG9hZGluZyBzdGF0ZVxuICAgIGlmICghRE9NQ29udGVudExvYWRlZENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spXG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbmNvbnN0IGlzUlRMID0gKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCdcblxuY29uc3QgZGVmaW5lSlF1ZXJ5UGx1Z2luID0gcGx1Z2luID0+IHtcbiAgb25ET01Db250ZW50TG9hZGVkKCgpID0+IHtcbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoJCkge1xuICAgICAgY29uc3QgbmFtZSA9IHBsdWdpbi5OQU1FXG4gICAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW25hbWVdXG4gICAgICAkLmZuW25hbWVdID0gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgJC5mbltuYW1lXS5Db25zdHJ1Y3RvciA9IHBsdWdpblxuICAgICAgJC5mbltuYW1lXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgICAkLmZuW25hbWVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgICAgIHJldHVybiBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBleGVjdXRlID0gY2FsbGJhY2sgPT4ge1xuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbmNvbnN0IGV4ZWN1dGVBZnRlclRyYW5zaXRpb24gPSAoY2FsbGJhY2ssIHRyYW5zaXRpb25FbGVtZW50LCB3YWl0Rm9yVHJhbnNpdGlvbiA9IHRydWUpID0+IHtcbiAgaWYgKCF3YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkdXJhdGlvblBhZGRpbmcgPSA1XG4gIGNvbnN0IGVtdWxhdGVkRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0cmFuc2l0aW9uRWxlbWVudCkgKyBkdXJhdGlvblBhZGRpbmdcblxuICBsZXQgY2FsbGVkID0gZmFsc2VcblxuICBjb25zdCBoYW5kbGVyID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBpZiAodGFyZ2V0ICE9PSB0cmFuc2l0aW9uRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2FsbGVkID0gdHJ1ZVxuICAgIHRyYW5zaXRpb25FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpXG4gICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgfVxuXG4gIHRyYW5zaXRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRWxlbWVudClcbiAgICB9XG4gIH0sIGVtdWxhdGVkRHVyYXRpb24pXG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBwcmV2aW91cy9uZXh0IGVsZW1lbnQgb2YgYSBsaXN0LlxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGxpc3QgICAgVGhlIGxpc3Qgb2YgZWxlbWVudHNcbiAqIEBwYXJhbSBhY3RpdmVFbGVtZW50ICAgVGhlIGFjdGl2ZSBlbGVtZW50XG4gKiBAcGFyYW0gc2hvdWxkR2V0TmV4dCAgIENob29zZSB0byBnZXQgbmV4dCBvciBwcmV2aW91cyBlbGVtZW50XG4gKiBAcGFyYW0gaXNDeWNsZUFsbG93ZWRcbiAqIEByZXR1cm4ge0VsZW1lbnR8ZWxlbX0gVGhlIHByb3BlciBlbGVtZW50XG4gKi9cbmNvbnN0IGdldE5leHRBY3RpdmVFbGVtZW50ID0gKGxpc3QsIGFjdGl2ZUVsZW1lbnQsIHNob3VsZEdldE5leHQsIGlzQ3ljbGVBbGxvd2VkKSA9PiB7XG4gIGxldCBpbmRleCA9IGxpc3QuaW5kZXhPZihhY3RpdmVFbGVtZW50KVxuXG4gIC8vIGlmIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0IGluIHRoZSBsaXN0IHJldHVybiBhbiBlbGVtZW50IGRlcGVuZGluZyBvbiB0aGUgZGlyZWN0aW9uIGFuZCBpZiBjeWNsZSBpcyBhbGxvd2VkXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gbGlzdFshc2hvdWxkR2V0TmV4dCAmJiBpc0N5Y2xlQWxsb3dlZCA/IGxpc3QubGVuZ3RoIC0gMSA6IDBdXG4gIH1cblxuICBjb25zdCBsaXN0TGVuZ3RoID0gbGlzdC5sZW5ndGhcblxuICBpbmRleCArPSBzaG91bGRHZXROZXh0ID8gMSA6IC0xXG5cbiAgaWYgKGlzQ3ljbGVBbGxvd2VkKSB7XG4gICAgaW5kZXggPSAoaW5kZXggKyBsaXN0TGVuZ3RoKSAlIGxpc3RMZW5ndGhcbiAgfVxuXG4gIHJldHVybiBsaXN0W01hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCBsaXN0TGVuZ3RoIC0gMSkpXVxufVxuXG5leHBvcnQge1xuICBnZXRFbGVtZW50LFxuICBnZXRVSUQsXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCxcbiAgaXNFbGVtZW50LFxuICB0eXBlQ2hlY2tDb25maWcsXG4gIGlzVmlzaWJsZSxcbiAgaXNEaXNhYmxlZCxcbiAgZmluZFNoYWRvd1Jvb3QsXG4gIG5vb3AsXG4gIGdldE5leHRBY3RpdmVFbGVtZW50LFxuICByZWZsb3csXG4gIGdldGpRdWVyeSxcbiAgb25ET01Db250ZW50TG9hZGVkLFxuICBpc1JUTCxcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBleGVjdXRlLFxuICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjEuMyk6IGRvbS9ldmVudC1oYW5kbGVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZ2V0alF1ZXJ5IH0gZnJvbSAnLi4vdXRpbC9pbmRleCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgbmFtZXNwYWNlUmVnZXggPSAvW14uXSooPz1cXC4uKilcXC58LiovXG5jb25zdCBzdHJpcE5hbWVSZWdleCA9IC9cXC4uKi9cbmNvbnN0IHN0cmlwVWlkUmVnZXggPSAvOjpcXGQrJC9cbmNvbnN0IGV2ZW50UmVnaXN0cnkgPSB7fSAvLyBFdmVudHMgc3RvcmFnZVxubGV0IHVpZEV2ZW50ID0gMVxuY29uc3QgY3VzdG9tRXZlbnRzID0ge1xuICBtb3VzZWVudGVyOiAnbW91c2VvdmVyJyxcbiAgbW91c2VsZWF2ZTogJ21vdXNlb3V0J1xufVxuY29uc3QgY3VzdG9tRXZlbnRzUmVnZXggPSAvXihtb3VzZWVudGVyfG1vdXNlbGVhdmUpL2lcbmNvbnN0IG5hdGl2ZUV2ZW50cyA9IG5ldyBTZXQoW1xuICAnY2xpY2snLFxuICAnZGJsY2xpY2snLFxuICAnbW91c2V1cCcsXG4gICdtb3VzZWRvd24nLFxuICAnY29udGV4dG1lbnUnLFxuICAnbW91c2V3aGVlbCcsXG4gICdET01Nb3VzZVNjcm9sbCcsXG4gICdtb3VzZW92ZXInLFxuICAnbW91c2VvdXQnLFxuICAnbW91c2Vtb3ZlJyxcbiAgJ3NlbGVjdHN0YXJ0JyxcbiAgJ3NlbGVjdGVuZCcsXG4gICdrZXlkb3duJyxcbiAgJ2tleXByZXNzJyxcbiAgJ2tleXVwJyxcbiAgJ29yaWVudGF0aW9uY2hhbmdlJyxcbiAgJ3RvdWNoc3RhcnQnLFxuICAndG91Y2htb3ZlJyxcbiAgJ3RvdWNoZW5kJyxcbiAgJ3RvdWNoY2FuY2VsJyxcbiAgJ3BvaW50ZXJkb3duJyxcbiAgJ3BvaW50ZXJtb3ZlJyxcbiAgJ3BvaW50ZXJ1cCcsXG4gICdwb2ludGVybGVhdmUnLFxuICAncG9pbnRlcmNhbmNlbCcsXG4gICdnZXN0dXJlc3RhcnQnLFxuICAnZ2VzdHVyZWNoYW5nZScsXG4gICdnZXN0dXJlZW5kJyxcbiAgJ2ZvY3VzJyxcbiAgJ2JsdXInLFxuICAnY2hhbmdlJyxcbiAgJ3Jlc2V0JyxcbiAgJ3NlbGVjdCcsXG4gICdzdWJtaXQnLFxuICAnZm9jdXNpbicsXG4gICdmb2N1c291dCcsXG4gICdsb2FkJyxcbiAgJ3VubG9hZCcsXG4gICdiZWZvcmV1bmxvYWQnLFxuICAncmVzaXplJyxcbiAgJ21vdmUnLFxuICAnRE9NQ29udGVudExvYWRlZCcsXG4gICdyZWFkeXN0YXRlY2hhbmdlJyxcbiAgJ2Vycm9yJyxcbiAgJ2Fib3J0JyxcbiAgJ3Njcm9sbCdcbl0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQcml2YXRlIG1ldGhvZHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmZ1bmN0aW9uIGdldFVpZEV2ZW50KGVsZW1lbnQsIHVpZCkge1xuICByZXR1cm4gKHVpZCAmJiBgJHt1aWR9Ojoke3VpZEV2ZW50Kyt9YCkgfHwgZWxlbWVudC51aWRFdmVudCB8fCB1aWRFdmVudCsrXG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgdWlkID0gZ2V0VWlkRXZlbnQoZWxlbWVudClcblxuICBlbGVtZW50LnVpZEV2ZW50ID0gdWlkXG4gIGV2ZW50UmVnaXN0cnlbdWlkXSA9IGV2ZW50UmVnaXN0cnlbdWlkXSB8fCB7fVxuXG4gIHJldHVybiBldmVudFJlZ2lzdHJ5W3VpZF1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LmRlbGVnYXRlVGFyZ2V0ID0gZWxlbWVudFxuXG4gICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKVxuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBbZXZlbnRdKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIHNlbGVjdG9yLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXG4gICAgZm9yIChsZXQgeyB0YXJnZXQgfSA9IGV2ZW50OyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzOyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgZm9yIChsZXQgaSA9IGRvbUVsZW1lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICBpZiAoZG9tRWxlbWVudHNbaV0gPT09IHRhcmdldCkge1xuICAgICAgICAgIGV2ZW50LmRlbGVnYXRlVGFyZ2V0ID0gdGFyZ2V0XG5cbiAgICAgICAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgc2VsZWN0b3IsIGZuKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0YXJnZXQsIFtldmVudF0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUbyBwbGVhc2UgRVNMaW50XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3RvciA9IG51bGwpIHtcbiAgY29uc3QgdWlkRXZlbnRMaXN0ID0gT2JqZWN0LmtleXMoZXZlbnRzKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB1aWRFdmVudExpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50c1t1aWRFdmVudExpc3RbaV1dXG5cbiAgICBpZiAoZXZlbnQub3JpZ2luYWxIYW5kbGVyID09PSBoYW5kbGVyICYmIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvciA9PT0gZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gZXZlbnRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXJhbXMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICBjb25zdCBkZWxlZ2F0aW9uID0gdHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnXG4gIGNvbnN0IG9yaWdpbmFsSGFuZGxlciA9IGRlbGVnYXRpb24gPyBkZWxlZ2F0aW9uRm4gOiBoYW5kbGVyXG5cbiAgbGV0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChvcmlnaW5hbFR5cGVFdmVudClcbiAgY29uc3QgaXNOYXRpdmUgPSBuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudClcblxuICBpZiAoIWlzTmF0aXZlKSB7XG4gICAgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgfVxuXG4gIHJldHVybiBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdXG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbiwgb25lT2ZmKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBoYW5kbGVyID0gZGVsZWdhdGlvbkZuXG4gICAgZGVsZWdhdGlvbkZuID0gbnVsbFxuICB9XG5cbiAgLy8gaW4gY2FzZSBvZiBtb3VzZWVudGVyIG9yIG1vdXNlbGVhdmUgd3JhcCB0aGUgaGFuZGxlciB3aXRoaW4gYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgaXRzIERPTSBwb3NpdGlvblxuICAvLyB0aGlzIHByZXZlbnRzIHRoZSBoYW5kbGVyIGZyb20gYmVpbmcgZGlzcGF0Y2hlZCB0aGUgc2FtZSB3YXkgYXMgbW91c2VvdmVyIG9yIG1vdXNlb3V0IGRvZXNcbiAgaWYgKGN1c3RvbUV2ZW50c1JlZ2V4LnRlc3Qob3JpZ2luYWxUeXBlRXZlbnQpKSB7XG4gICAgY29uc3Qgd3JhcEZuID0gZm4gPT4ge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmICFldmVudC5kZWxlZ2F0ZVRhcmdldC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkpIHtcbiAgICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZWxlZ2F0aW9uRm4pIHtcbiAgICAgIGRlbGVnYXRpb25GbiA9IHdyYXBGbihkZWxlZ2F0aW9uRm4pXG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZXIgPSB3cmFwRm4oaGFuZGxlcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1zKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pXG4gIGNvbnN0IGV2ZW50cyA9IGdldEV2ZW50KGVsZW1lbnQpXG4gIGNvbnN0IGhhbmRsZXJzID0gZXZlbnRzW3R5cGVFdmVudF0gfHwgKGV2ZW50c1t0eXBlRXZlbnRdID0ge30pXG4gIGNvbnN0IHByZXZpb3VzRm4gPSBmaW5kSGFuZGxlcihoYW5kbGVycywgb3JpZ2luYWxIYW5kbGVyLCBkZWxlZ2F0aW9uID8gaGFuZGxlciA6IG51bGwpXG5cbiAgaWYgKHByZXZpb3VzRm4pIHtcbiAgICBwcmV2aW91c0ZuLm9uZU9mZiA9IHByZXZpb3VzRm4ub25lT2ZmICYmIG9uZU9mZlxuXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB1aWQgPSBnZXRVaWRFdmVudChvcmlnaW5hbEhhbmRsZXIsIG9yaWdpbmFsVHlwZUV2ZW50LnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSlcbiAgY29uc3QgZm4gPSBkZWxlZ2F0aW9uID9cbiAgICBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIDpcbiAgICBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIpXG5cbiAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gZGVsZWdhdGlvbiA/IGhhbmRsZXIgOiBudWxsXG4gIGZuLm9yaWdpbmFsSGFuZGxlciA9IG9yaWdpbmFsSGFuZGxlclxuICBmbi5vbmVPZmYgPSBvbmVPZmZcbiAgZm4udWlkRXZlbnQgPSB1aWRcbiAgaGFuZGxlcnNbdWlkXSA9IGZuXG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIGRlbGVnYXRpb24pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICBjb25zdCBmbiA9IGZpbmRIYW5kbGVyKGV2ZW50c1t0eXBlRXZlbnRdLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpXG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSlcbiAgZGVsZXRlIGV2ZW50c1t0eXBlRXZlbnRdW2ZuLnVpZEV2ZW50XVxufVxuXG5mdW5jdGlvbiByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG5hbWVzcGFjZSkge1xuICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG5cbiAgT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmZvckVhY2goaGFuZGxlcktleSA9PiB7XG4gICAgaWYgKGhhbmRsZXJLZXkuaW5jbHVkZXMobmFtZXNwYWNlKSkge1xuICAgICAgY29uc3QgZXZlbnQgPSBzdG9yZUVsZW1lbnRFdmVudFtoYW5kbGVyS2V5XVxuXG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5vcmlnaW5hbEhhbmRsZXIsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldFR5cGVFdmVudChldmVudCkge1xuICAvLyBhbGxvdyB0byBnZXQgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBuYW1lc3BhY2VkIGV2ZW50cyAoJ2NsaWNrLmJzLmJ1dHRvbicgLS0+ICdjbGljaycpXG4gIGV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpXG4gIHJldHVybiBjdXN0b21FdmVudHNbZXZlbnRdIHx8IGV2ZW50XG59XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9IHtcbiAgb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbiwgZmFsc2UpXG4gIH0sXG5cbiAgb25lKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4sIHRydWUpXG4gIH0sXG5cbiAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgW2RlbGVnYXRpb24sIG9yaWdpbmFsSGFuZGxlciwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtcyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gdHlwZUV2ZW50ICE9PSBvcmlnaW5hbFR5cGVFdmVudFxuICAgIGNvbnN0IGV2ZW50cyA9IGdldEV2ZW50KGVsZW1lbnQpXG4gICAgY29uc3QgaXNOYW1lc3BhY2UgPSBvcmlnaW5hbFR5cGVFdmVudC5zdGFydHNXaXRoKCcuJylcblxuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxIYW5kbGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gU2ltcGxlc3QgY2FzZTogaGFuZGxlciBpcyBwYXNzZWQsIHJlbW92ZSB0aGF0IGxpc3RlbmVyIE9OTFkuXG4gICAgICBpZiAoIWV2ZW50cyB8fCAhZXZlbnRzW3R5cGVFdmVudF0pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG9yaWdpbmFsSGFuZGxlciwgZGVsZWdhdGlvbiA/IGhhbmRsZXIgOiBudWxsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzTmFtZXNwYWNlKSB7XG4gICAgICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZWxlbWVudEV2ZW50ID0+IHtcbiAgICAgICAgcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgZWxlbWVudEV2ZW50LCBvcmlnaW5hbFR5cGVFdmVudC5zbGljZSgxKSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuICAgIE9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5mb3JFYWNoKGtleUhhbmRsZXJzID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXJLZXkgPSBrZXlIYW5kbGVycy5yZXBsYWNlKHN0cmlwVWlkUmVnZXgsICcnKVxuXG4gICAgICBpZiAoIWluTmFtZXNwYWNlIHx8IG9yaWdpbmFsVHlwZUV2ZW50LmluY2x1ZGVzKGhhbmRsZXJLZXkpKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gc3RvcmVFbGVtZW50RXZlbnRba2V5SGFuZGxlcnNdXG5cbiAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQub3JpZ2luYWxIYW5kbGVyLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICB0cmlnZ2VyKGVsZW1lbnQsIGV2ZW50LCBhcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gICAgY29uc3QgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KGV2ZW50KVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gZXZlbnQgIT09IHR5cGVFdmVudFxuICAgIGNvbnN0IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzLmhhcyh0eXBlRXZlbnQpXG5cbiAgICBsZXQgalF1ZXJ5RXZlbnRcbiAgICBsZXQgYnViYmxlcyA9IHRydWVcbiAgICBsZXQgbmF0aXZlRGlzcGF0Y2ggPSB0cnVlXG4gICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuICAgIGxldCBldnQgPSBudWxsXG5cbiAgICBpZiAoaW5OYW1lc3BhY2UgJiYgJCkge1xuICAgICAgalF1ZXJ5RXZlbnQgPSAkLkV2ZW50KGV2ZW50LCBhcmdzKVxuXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoalF1ZXJ5RXZlbnQpXG4gICAgICBidWJibGVzID0gIWpRdWVyeUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIG5hdGl2ZURpc3BhdGNoID0gIWpRdWVyeUV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBqUXVlcnlFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKVxuICAgIH1cblxuICAgIGlmIChpc05hdGl2ZSkge1xuICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKVxuICAgICAgZXZ0LmluaXRFdmVudCh0eXBlRXZlbnQsIGJ1YmJsZXMsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldmVudCwge1xuICAgICAgICBidWJibGVzLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIG1lcmdlIGN1c3RvbSBpbmZvcm1hdGlvbiBpbiBvdXIgZXZlbnRcbiAgICBpZiAodHlwZW9mIGFyZ3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldnQsIGtleSwge1xuICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcmdzW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICB9XG5cbiAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgdHlwZW9mIGpRdWVyeUV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgalF1ZXJ5RXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHJldHVybiBldnRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4zKTogZG9tL2RhdGEuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBlbGVtZW50TWFwID0gbmV3IE1hcCgpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0KGVsZW1lbnQsIGtleSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBlbGVtZW50TWFwLnNldChlbGVtZW50LCBuZXcgTWFwKCkpXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgLy8gbWFrZSBpdCBjbGVhciB3ZSBvbmx5IHdhbnQgb25lIGluc3RhbmNlIHBlciBlbGVtZW50XG4gICAgLy8gY2FuIGJlIHJlbW92ZWQgbGF0ZXIgd2hlbiBtdWx0aXBsZSBrZXkvaW5zdGFuY2VzIGFyZSBmaW5lIHRvIGJlIHVzZWRcbiAgICBpZiAoIWluc3RhbmNlTWFwLmhhcyhrZXkpICYmIGluc3RhbmNlTWFwLnNpemUgIT09IDApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKGBCb290c3RyYXAgZG9lc24ndCBhbGxvdyBtb3JlIHRoYW4gb25lIGluc3RhbmNlIHBlciBlbGVtZW50LiBCb3VuZCBpbnN0YW5jZTogJHtBcnJheS5mcm9tKGluc3RhbmNlTWFwLmtleXMoKSlbMF19LmApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpbnN0YW5jZU1hcC5zZXQoa2V5LCBpbnN0YW5jZSlcbiAgfSxcblxuICBnZXQoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKGVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gZWxlbWVudE1hcC5nZXQoZWxlbWVudCkuZ2V0KGtleSkgfHwgbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0sXG5cbiAgcmVtb3ZlKGVsZW1lbnQsIGtleSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIGluc3RhbmNlTWFwLmRlbGV0ZShrZXkpXG5cbiAgICAvLyBmcmVlIHVwIGVsZW1lbnQgcmVmZXJlbmNlcyBpZiB0aGVyZSBhcmUgbm8gaW5zdGFuY2VzIGxlZnQgZm9yIGFuIGVsZW1lbnRcbiAgICBpZiAoaW5zdGFuY2VNYXAuc2l6ZSA9PT0gMCkge1xuICAgICAgZWxlbWVudE1hcC5kZWxldGUoZWxlbWVudClcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4zKTogYmFzZS1jb21wb25lbnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IHtcbiAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbixcbiAgZ2V0RWxlbWVudFxufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFZFUlNJT04gPSAnNS4xLjMnXG5cbmNsYXNzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudClcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICBEYXRhLnNldCh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBEYXRhLnJlbW92ZSh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpXG5cbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKS5mb3JFYWNoKHByb3BlcnR5TmFtZSA9PiB7XG4gICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBudWxsXG4gICAgfSlcbiAgfVxuXG4gIF9xdWV1ZUNhbGxiYWNrKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkID0gdHJ1ZSkge1xuICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICAvKiogU3RhdGljICovXG5cbiAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRGF0YS5nZXQoZ2V0RWxlbWVudChlbGVtZW50KSwgdGhpcy5EQVRBX0tFWSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIGNvbmZpZyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoZWxlbWVudCkgfHwgbmV3IHRoaXMoZWxlbWVudCwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsKVxuICB9XG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIHN0YXRpYyBtZXRob2QgXCJOQU1FXCIsIGZvciBlYWNoIGNvbXBvbmVudCEnKVxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gYGJzLiR7dGhpcy5OQU1FfWBcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgIHJldHVybiBgLiR7dGhpcy5EQVRBX0tFWX1gXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbXBvbmVudFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4xLjMpOiB1dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IHsgZ2V0RWxlbWVudEZyb21TZWxlY3RvciwgaXNEaXNhYmxlZCB9IGZyb20gJy4vaW5kZXgnXG5cbmNvbnN0IGVuYWJsZURpc21pc3NUcmlnZ2VyID0gKGNvbXBvbmVudCwgbWV0aG9kID0gJ2hpZGUnKSA9PiB7XG4gIGNvbnN0IGNsaWNrRXZlbnQgPSBgY2xpY2suZGlzbWlzcyR7Y29tcG9uZW50LkVWRU5UX0tFWX1gXG4gIGNvbnN0IG5hbWUgPSBjb21wb25lbnQuTkFNRVxuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgY2xpY2tFdmVudCwgYFtkYXRhLWJzLWRpc21pc3M9XCIke25hbWV9XCJdYCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpIHx8IHRoaXMuY2xvc2VzdChgLiR7bmFtZX1gKVxuICAgIGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50LmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuXG4gICAgLy8gTWV0aG9kIGFyZ3VtZW50IGlzIGxlZnQsIGZvciBBbGVydCBhbmQgb25seSwgYXMgaXQgZG9lc24ndCBpbXBsZW1lbnQgdGhlICdoaWRlJyBtZXRob2RcbiAgICBpbnN0YW5jZVttZXRob2RdKClcbiAgfSlcbn1cblxuZXhwb3J0IHtcbiAgZW5hYmxlRGlzbWlzc1RyaWdnZXJcbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4zKTogYWxlcnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucydcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdhbGVydCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmFsZXJ0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfQ0xPU0UgPSBgY2xvc2Uke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTE9TRUQgPSBgY2xvc2VkJHtFVkVOVF9LRVl9YFxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIEFsZXJ0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGNsb3NlKCkge1xuICAgIGNvbnN0IGNsb3NlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTE9TRSlcblxuICAgIGlmIChjbG9zZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4gdGhpcy5fZGVzdHJveUVsZW1lbnQoKSwgdGhpcy5fZWxlbWVudCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2Rlc3Ryb3lFbGVtZW50KCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKClcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTE9TRUQpXG4gICAgdGhpcy5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQWxlcnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihBbGVydCwgJ2Nsb3NlJylcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkFsZXJ0IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKEFsZXJ0KVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4xLjMpOiBidXR0b24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2J1dHRvbidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmJ1dHRvbidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImJ1dHRvblwiXSdcblxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIC8vIFRvZ2dsZSBjbGFzcyBhbmQgc3luYyB0aGUgYGFyaWEtcHJlc3NlZGAgYXR0cmlidXRlIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgYC50b2dnbGUoKWAgbWV0aG9kXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IEJ1dHRvbi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpXG5cbiAgICAgIGlmIChjb25maWcgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcbiAgY29uc3QgZGF0YSA9IEJ1dHRvbi5nZXRPckNyZWF0ZUluc3RhbmNlKGJ1dHRvbilcblxuICBkYXRhLnRvZ2dsZSgpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuQnV0dG9uIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKEJ1dHRvbilcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjEuMyk6IGRvbS9tYW5pcHVsYXRvci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGEodmFsKSB7XG4gIGlmICh2YWwgPT09ICd0cnVlJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodmFsID09PSAnZmFsc2UnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodmFsID09PSBOdW1iZXIodmFsKS50b1N0cmluZygpKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWwpXG4gIH1cblxuICBpZiAodmFsID09PSAnJyB8fCB2YWwgPT09ICdudWxsJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvW0EtWl0vZywgY2hyID0+IGAtJHtjaHIudG9Mb3dlckNhc2UoKX1gKVxufVxuXG5jb25zdCBNYW5pcHVsYXRvciA9IHtcbiAgc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCwgdmFsdWUpXG4gIH0sXG5cbiAgcmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKVxuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZWxlbWVudC5kYXRhc2V0KVxuICAgICAgLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ2JzJykpXG4gICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBsZXQgcHVyZUtleSA9IGtleS5yZXBsYWNlKC9eYnMvLCAnJylcbiAgICAgICAgcHVyZUtleSA9IHB1cmVLZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBwdXJlS2V5LnNsaWNlKDEsIHB1cmVLZXkubGVuZ3RoKVxuICAgICAgICBhdHRyaWJ1dGVzW3B1cmVLZXldID0gbm9ybWFsaXplRGF0YShlbGVtZW50LmRhdGFzZXRba2V5XSlcbiAgICAgIH0pXG5cbiAgICByZXR1cm4gYXR0cmlidXRlc1xuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZURhdGEoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCkpXG4gIH0sXG5cbiAgb2Zmc2V0KGVsZW1lbnQpIHtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXRcbiAgICB9XG4gIH0sXG5cbiAgcG9zaXRpb24oZWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmlwdWxhdG9yXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjEuMyk6IGRvbS9zZWxlY3Rvci1lbmdpbmUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBpc0Rpc2FibGVkLCBpc1Zpc2libGUgfSBmcm9tICcuLi91dGlsL2luZGV4J1xuXG5jb25zdCBOT0RFX1RFWFQgPSAzXG5cbmNvbnN0IFNlbGVjdG9yRW5naW5lID0ge1xuICBmaW5kKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpKVxuICB9LFxuXG4gIGZpbmRPbmUoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKVxuICB9LFxuXG4gIGNoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5lbGVtZW50LmNoaWxkcmVuKVxuICAgICAgLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSlcbiAgfSxcblxuICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcGFyZW50cyA9IFtdXG5cbiAgICBsZXQgYW5jZXN0b3IgPSBlbGVtZW50LnBhcmVudE5vZGVcblxuICAgIHdoaWxlIChhbmNlc3RvciAmJiBhbmNlc3Rvci5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgYW5jZXN0b3Iubm9kZVR5cGUgIT09IE5PREVfVEVYVCkge1xuICAgICAgaWYgKGFuY2VzdG9yLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChhbmNlc3RvcilcbiAgICAgIH1cblxuICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudHNcbiAgfSxcblxuICBwcmV2KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAocHJldmlvdXMpIHtcbiAgICAgIGlmIChwcmV2aW91cy5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW3ByZXZpb3VzXVxuICAgICAgfVxuXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcblxuICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IG5leHQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKG5leHQpIHtcbiAgICAgIGlmIChuZXh0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbbmV4dF1cbiAgICAgIH1cblxuICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH0sXG5cbiAgZm9jdXNhYmxlQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgIGNvbnN0IGZvY3VzYWJsZXMgPSBbXG4gICAgICAnYScsXG4gICAgICAnYnV0dG9uJyxcbiAgICAgICdpbnB1dCcsXG4gICAgICAndGV4dGFyZWEnLFxuICAgICAgJ3NlbGVjdCcsXG4gICAgICAnZGV0YWlscycsXG4gICAgICAnW3RhYmluZGV4XScsXG4gICAgICAnW2NvbnRlbnRlZGl0YWJsZT1cInRydWVcIl0nXG4gICAgXS5tYXAoc2VsZWN0b3IgPT4gYCR7c2VsZWN0b3J9Om5vdChbdGFiaW5kZXhePVwiLVwiXSlgKS5qb2luKCcsICcpXG5cbiAgICByZXR1cm4gdGhpcy5maW5kKGZvY3VzYWJsZXMsIGVsZW1lbnQpLmZpbHRlcihlbCA9PiAhaXNEaXNhYmxlZChlbCkgJiYgaXNWaXNpYmxlKGVsKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvckVuZ2luZVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4xLjMpOiBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIHJlZmxvdyxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjYXJvdXNlbCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNhcm91c2VsJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCdcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0J1xuY29uc3QgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCA9IDUwMCAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGludGVydmFsOiA1MDAwLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgc2xpZGU6IGZhbHNlLFxuICBwYXVzZTogJ2hvdmVyJyxcbiAgd3JhcDogdHJ1ZSxcbiAgdG91Y2g6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHNsaWRlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIHBhdXNlOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHdyYXA6ICdib29sZWFuJyxcbiAgdG91Y2g6ICdib29sZWFuJ1xufVxuXG5jb25zdCBPUkRFUl9ORVhUID0gJ25leHQnXG5jb25zdCBPUkRFUl9QUkVWID0gJ3ByZXYnXG5jb25zdCBESVJFQ1RJT05fTEVGVCA9ICdsZWZ0J1xuY29uc3QgRElSRUNUSU9OX1JJR0hUID0gJ3JpZ2h0J1xuXG5jb25zdCBLRVlfVE9fRElSRUNUSU9OID0ge1xuICBbQVJST1dfTEVGVF9LRVldOiBESVJFQ1RJT05fUklHSFQsXG4gIFtBUlJPV19SSUdIVF9LRVldOiBESVJFQ1RJT05fTEVGVFxufVxuXG5jb25zdCBFVkVOVF9TTElERSA9IGBzbGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NMSUQgPSBgc2xpZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV04gPSBga2V5ZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRU5URVIgPSBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFTEVBVkUgPSBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIU1RBUlQgPSBgdG91Y2hzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNITU9WRSA9IGB0b3VjaG1vdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSEVORCA9IGB0b3VjaGVuZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJET1dOID0gYHBvaW50ZXJkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUlVQID0gYHBvaW50ZXJ1cCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0RSQUdfU1RBUlQgPSBgZHJhZ3N0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQ0FST1VTRUwgPSAnY2Fyb3VzZWwnXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX1NMSURFID0gJ3NsaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9FTkQgPSAnY2Fyb3VzZWwtaXRlbS1lbmQnXG5jb25zdCBDTEFTU19OQU1FX1NUQVJUID0gJ2Nhcm91c2VsLWl0ZW0tc3RhcnQnXG5jb25zdCBDTEFTU19OQU1FX05FWFQgPSAnY2Fyb3VzZWwtaXRlbS1uZXh0J1xuY29uc3QgQ0xBU1NfTkFNRV9QUkVWID0gJ2Nhcm91c2VsLWl0ZW0tcHJldidcbmNvbnN0IENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCA9ICdwb2ludGVyLWV2ZW50J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRV9JVEVNID0gJy5hY3RpdmUuY2Fyb3VzZWwtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lURU0gPSAnLmNhcm91c2VsLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9JVEVNX0lNRyA9ICcuY2Fyb3VzZWwtaXRlbSBpbWcnXG5jb25zdCBTRUxFQ1RPUl9ORVhUX1BSRVYgPSAnLmNhcm91c2VsLWl0ZW0tbmV4dCwgLmNhcm91c2VsLWl0ZW0tcHJldidcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUlMgPSAnLmNhcm91c2VsLWluZGljYXRvcnMnXG5jb25zdCBTRUxFQ1RPUl9JTkRJQ0FUT1IgPSAnW2RhdGEtYnMtdGFyZ2V0XSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfU0xJREUgPSAnW2RhdGEtYnMtc2xpZGVdLCBbZGF0YS1icy1zbGlkZS10b10nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1JJREUgPSAnW2RhdGEtYnMtcmlkZT1cImNhcm91c2VsXCJdJ1xuXG5jb25zdCBQT0lOVEVSX1RZUEVfVE9VQ0ggPSAndG91Y2gnXG5jb25zdCBQT0lOVEVSX1RZUEVfUEVOID0gJ3BlbidcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5faXRlbXMgPSBudWxsXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlXG4gICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICB0aGlzLnRvdWNoVGltZW91dCA9IG51bGxcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gMFxuICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTkRJQ0FUT1JTLCB0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX3RvdWNoU3VwcG9ydGVkID0gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbiAgICB0aGlzLl9wb2ludGVyRXZlbnQgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIG5leHQoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfTkVYVClcbiAgfVxuXG4gIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAvLyBEb24ndCBjYWxsIG5leHQgd2hlbiB0aGUgcGFnZSBpc24ndCB2aXNpYmxlXG4gICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmIGlzVmlzaWJsZSh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIHRoaXMuX3NsaWRlKE9SREVSX1BSRVYpXG4gIH1cblxuICBwYXVzZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX05FWFRfUFJFViwgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgICB0aGlzLmN5Y2xlKHRydWUpXG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgfVxuXG4gIGN5Y2xlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcgJiYgdGhpcy5fY29uZmlnLmludGVydmFsICYmICF0aGlzLl9pc1BhdXNlZCkge1xuICAgICAgdGhpcy5fdXBkYXRlSW50ZXJ2YWwoKVxuXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID8gdGhpcy5uZXh0V2hlblZpc2libGUgOiB0aGlzLm5leHQpLmJpbmQodGhpcyksXG4gICAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHRvKGluZGV4KSB7XG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fYWN0aXZlRWxlbWVudClcblxuICAgIGlmIChpbmRleCA+IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyID0gaW5kZXggPiBhY3RpdmVJbmRleCA/XG4gICAgICBPUkRFUl9ORVhUIDpcbiAgICAgIE9SREVSX1BSRVZcblxuICAgIHRoaXMuX3NsaWRlKG9yZGVyLCB0aGlzLl9pdGVtc1tpbmRleF0pXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcbiAgICB9XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2hhbmRsZVN3aXBlKCkge1xuICAgIGNvbnN0IGFic0RlbHRheCA9IE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YVgpXG5cbiAgICBpZiAoYWJzRGVsdGF4IDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gYWJzRGVsdGF4IC8gdGhpcy50b3VjaERlbHRhWFxuXG4gICAgdGhpcy50b3VjaERlbHRhWCA9IDBcblxuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9zbGlkZShkaXJlY3Rpb24gPiAwID8gRElSRUNUSU9OX1JJR0hUIDogRElSRUNUSU9OX0xFRlQpXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUVOVEVSLCBldmVudCA9PiB0aGlzLnBhdXNlKGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUxFQVZFLCBldmVudCA9PiB0aGlzLmN5Y2xlKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoICYmIHRoaXMuX3RvdWNoU3VwcG9ydGVkKSB7XG4gICAgICB0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG4gIH1cblxuICBfYWRkVG91Y2hFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBoYXNQb2ludGVyUGVuVG91Y2ggPSBldmVudCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fcG9pbnRlckV2ZW50ICYmXG4gICAgICAgIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0ID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKGhhc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IGV2ZW50LmNsaWVudFhcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZSA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIGVuc3VyZSBzd2lwaW5nIHdpdGggb25lIHRvdWNoIGFuZCBub3QgcGluY2hpbmdcbiAgICAgIHRoaXMudG91Y2hEZWx0YVggPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSA/XG4gICAgICAgIDAgOlxuICAgICAgICBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYXG4gICAgfVxuXG4gICAgY29uc3QgZW5kID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKGhhc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hhbmRsZVN3aXBlKClcbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcblxuICAgICAgICB0aGlzLnBhdXNlKClcbiAgICAgICAgaWYgKHRoaXMudG91Y2hUaW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lb3V0KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KGV2ZW50ID0+IHRoaXMuY3ljbGUoZXZlbnQpLCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgdGhpcy5fY29uZmlnLmludGVydmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTV9JTUcsIHRoaXMuX2VsZW1lbnQpLmZvckVhY2goaXRlbUltZyA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIub24oaXRlbUltZywgRVZFTlRfRFJBR19TVEFSVCwgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSlcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJET1dOLCBldmVudCA9PiBzdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUlVQLCBldmVudCA9PiBlbmQoZXZlbnQpKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UKVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hTVEFSVCwgZXZlbnQgPT4gc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNITU9WRSwgZXZlbnQgPT4gbW92ZShldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hFTkQsIGV2ZW50ID0+IGVuZChldmVudCkpXG4gICAgfVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IEtFWV9UT19ESVJFQ1RJT05bZXZlbnQua2V5XVxuICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbilcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlID9cbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTSwgZWxlbWVudC5wYXJlbnROb2RlKSA6XG4gICAgICBbXVxuXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoZWxlbWVudClcbiAgfVxuXG4gIF9nZXRJdGVtQnlPcmRlcihvcmRlciwgYWN0aXZlRWxlbWVudCkge1xuICAgIGNvbnN0IGlzTmV4dCA9IG9yZGVyID09PSBPUkRFUl9ORVhUXG4gICAgcmV0dXJuIGdldE5leHRBY3RpdmVFbGVtZW50KHRoaXMuX2l0ZW1zLCBhY3RpdmVFbGVtZW50LCBpc05leHQsIHRoaXMuX2NvbmZpZy53cmFwKVxuICB9XG5cbiAgX3RyaWdnZXJTbGlkZUV2ZW50KHJlbGF0ZWRUYXJnZXQsIGV2ZW50RGlyZWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgZnJvbUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpKVxuXG4gICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSURFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0LFxuICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICB0bzogdGFyZ2V0SW5kZXhcbiAgICB9KVxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgY29uc3QgYWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkUsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG5cbiAgICAgIGNvbnN0IGluZGljYXRvcnMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lORElDQVRPUiwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNhdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoTnVtYmVyLnBhcnNlSW50KGluZGljYXRvcnNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJyksIDEwKSA9PT0gdGhpcy5fZ2V0SXRlbUluZGV4KGVsZW1lbnQpKSB7XG4gICAgICAgICAgaW5kaWNhdG9yc1tpXS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgICAgIGluZGljYXRvcnNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVJbnRlcnZhbCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fYWN0aXZlRWxlbWVudCB8fCBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50SW50ZXJ2YWwgPSBOdW1iZXIucGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaW50ZXJ2YWwnKSwgMTApXG5cbiAgICBpZiAoZWxlbWVudEludGVydmFsKSB7XG4gICAgICB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IGVsZW1lbnRJbnRlcnZhbFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgIH1cbiAgfVxuXG4gIF9zbGlkZShkaXJlY3Rpb25Pck9yZGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3Qgb3JkZXIgPSB0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbk9yT3JkZXIpXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuX2dldEl0ZW1CeU9yZGVyKG9yZGVyLCBhY3RpdmVFbGVtZW50KVxuXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcbiAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKVxuXG4gICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFRcbiAgICBjb25zdCBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfU1RBUlQgOiBDTEFTU19OQU1FX0VORFxuICAgIGNvbnN0IG9yZGVyQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9ORVhUIDogQ0xBU1NfTkFNRV9QUkVWXG4gICAgY29uc3QgZXZlbnREaXJlY3Rpb25OYW1lID0gdGhpcy5fb3JkZXJUb0RpcmVjdGlvbihvcmRlcilcblxuICAgIGlmIChuZXh0RWxlbWVudCAmJiBuZXh0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKSB7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9IHRoaXMuX3RyaWdnZXJTbGlkZUV2ZW50KG5leHRFbGVtZW50LCBldmVudERpcmVjdGlvbk5hbWUpXG4gICAgaWYgKHNsaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50KVxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBuZXh0RWxlbWVudFxuXG4gICAgY29uc3QgdHJpZ2dlclNsaWRFdmVudCA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgICBmcm9tOiBhY3RpdmVFbGVtZW50SW5kZXgsXG4gICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NMSURFKSkge1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChvcmRlckNsYXNzTmFtZSlcblxuICAgICAgcmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGRpcmVjdGlvbmFsQ2xhc3NOYW1lLCBvcmRlckNsYXNzTmFtZSlcbiAgICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuXG4gICAgICAgIHNldFRpbWVvdXQodHJpZ2dlclNsaWRFdmVudCwgMClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgdHJpZ2dlclNsaWRFdmVudCgpXG4gICAgfVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSB7XG4gICAgaWYgKCFbRElSRUNUSU9OX1JJR0hULCBESVJFQ1RJT05fTEVGVF0uaW5jbHVkZXMoZGlyZWN0aW9uKSkge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvblxuICAgIH1cblxuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuICB9XG5cbiAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICBpZiAoIVtPUkRFUl9ORVhULCBPUkRFUl9QUkVWXS5pbmNsdWRlcyhvcmRlcikpIHtcbiAgICAgIHJldHVybiBvcmRlclxuICAgIH1cblxuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fTEVGVCA6IERJUkVDVElPTl9SSUdIVFxuICAgIH1cblxuICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9SSUdIVCA6IERJUkVDVElPTl9MRUZUXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgY2Fyb3VzZWxJbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgY29uc3QgZGF0YSA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgbGV0IHsgX2NvbmZpZyB9ID0gZGF0YVxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uX2NvbmZpZyxcbiAgICAgICAgLi4uY29uZmlnXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uID0gdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgPyBjb25maWcgOiBfY29uZmlnLnNsaWRlXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGRhdGEudG8oY29uZmlnKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVthY3Rpb25dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2FjdGlvbn1cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbYWN0aW9uXSgpXG4gICAgfSBlbHNlIGlmIChfY29uZmlnLmludGVydmFsICYmIF9jb25maWcucmlkZSkge1xuICAgICAgZGF0YS5wYXVzZSgpXG4gICAgICBkYXRhLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgQ2Fyb3VzZWwuY2Fyb3VzZWxJbnRlcmZhY2UodGhpcywgY29uZmlnKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZGF0YUFwaUNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ0FST1VTRUwpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0YXJnZXQpLFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcylcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICBjb25maWcuaW50ZXJ2YWwgPSBmYWxzZVxuICAgIH1cblxuICAgIENhcm91c2VsLmNhcm91c2VsSW50ZXJmYWNlKHRhcmdldCwgY29uZmlnKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIENhcm91c2VsLmdldEluc3RhbmNlKHRhcmdldCkudG8oc2xpZGVJbmRleClcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1NMSURFLCBDYXJvdXNlbC5kYXRhQXBpQ2xpY2tIYW5kbGVyKVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IGNhcm91c2VscyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9SSURFKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjYXJvdXNlbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBDYXJvdXNlbC5jYXJvdXNlbEludGVyZmFjZShjYXJvdXNlbHNbaV0sIENhcm91c2VsLmdldEluc3RhbmNlKGNhcm91c2Vsc1tpXSkpXG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5DYXJvdXNlbCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbClcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4zKTogY29sbGFwc2UuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIHJlZmxvdyxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjb2xsYXBzZSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHRvZ2dsZTogdHJ1ZSxcbiAgcGFyZW50OiBudWxsXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICB0b2dnbGU6ICdib29sZWFuJyxcbiAgcGFyZW50OiAnKG51bGx8ZWxlbWVudCknXG59XG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCdcbmNvbnN0IENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOID0gYDpzY29wZSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfWBcbmNvbnN0IENMQVNTX05BTUVfSE9SSVpPTlRBTCA9ICdjb2xsYXBzZS1ob3Jpem9udGFsJ1xuXG5jb25zdCBXSURUSCA9ICd3aWR0aCdcbmNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBDb2xsYXBzZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IFtdXG5cbiAgICBjb25zdCB0b2dnbGVMaXN0ID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtID0gdG9nZ2xlTGlzdFtpXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pXG4gICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcbiAgICAgICAgLmZpbHRlcihmb3VuZEVsZW0gPT4gZm91bmRFbGVtID09PSB0aGlzLl9lbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2luaXRpYWxpemVDaGlsZHJlbigpXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl90cmlnZ2VyQXJyYXksIHRoaXMuX2lzU2hvd24oKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8IHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZXMgPSBbXVxuICAgIGxldCBhY3RpdmVzRGF0YVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gU2VsZWN0b3JFbmdpbmUuZmluZChDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiwgdGhpcy5fY29uZmlnLnBhcmVudClcbiAgICAgIGFjdGl2ZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0FDVElWRVMsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtKSkgLy8gcmVtb3ZlIGNoaWxkcmVuIGlmIGdyZWF0ZXIgZGVwdGhcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHRoaXMuX3NlbGVjdG9yKVxuICAgIGlmIChhY3RpdmVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgdGVtcEFjdGl2ZURhdGEgPSBhY3RpdmVzLmZpbmQoZWxlbSA9PiBjb250YWluZXIgIT09IGVsZW0pXG4gICAgICBhY3RpdmVzRGF0YSA9IHRlbXBBY3RpdmVEYXRhID8gQ29sbGFwc2UuZ2V0SW5zdGFuY2UodGVtcEFjdGl2ZURhdGEpIDogbnVsbFxuXG4gICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVylcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhY3RpdmVzLmZvckVhY2goZWxlbUFjdGl2ZSA9PiB7XG4gICAgICBpZiAoY29udGFpbmVyICE9PSBlbGVtQWN0aXZlKSB7XG4gICAgICAgIENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbUFjdGl2ZSwgeyB0b2dnbGU6IGZhbHNlIH0pLmhpZGUoKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2ZXNEYXRhKSB7XG4gICAgICAgIERhdGEuc2V0KGVsZW1BY3RpdmUsIERBVEFfS0VZLCBudWxsKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORylcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDBcblxuICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl90cmlnZ2VyQXJyYXksIHRydWUpXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVylcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04pXG4gICAgfVxuXG4gICAgY29uc3QgY2FwaXRhbGl6ZWREaW1lbnNpb24gPSBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKVxuICAgIGNvbnN0IHNjcm9sbFNpemUgPSBgc2Nyb2xsJHtjYXBpdGFsaXplZERpbWVuc2lvbn1gXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG4gICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGBcblxuICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgdHJpZ2dlckFycmF5TGVuZ3RoID0gdGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpZ2dlckFycmF5TGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLl90cmlnZ2VyQXJyYXlbaV1cbiAgICAgIGNvbnN0IGVsZW0gPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRyaWdnZXIpXG5cbiAgICAgIGlmIChlbGVtICYmICF0aGlzLl9pc1Nob3duKGVsZW0pKSB7XG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhbdHJpZ2dlcl0sIGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIF9pc1Nob3duKGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICBjb25maWcudG9nZ2xlID0gQm9vbGVhbihjb25maWcudG9nZ2xlKSAvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlc1xuICAgIGNvbmZpZy5wYXJlbnQgPSBnZXRFbGVtZW50KGNvbmZpZy5wYXJlbnQpXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9IT1JJWk9OVEFMKSA/IFdJRFRIIDogSEVJR0hUXG4gIH1cblxuICBfaW5pdGlhbGl6ZUNoaWxkcmVuKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kKENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOLCB0aGlzLl9jb25maWcucGFyZW50KVxuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEUsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtKSlcbiAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudClcblxuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW2VsZW1lbnRdLCB0aGlzLl9pc1Nob3duKHNlbGVjdGVkKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICBpZiAoIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRyaWdnZXJBcnJheS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICB9XG5cbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH0pXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgX2NvbmZpZyA9IHt9XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgX2NvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCAoZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuICBjb25zdCBzZWxlY3RvckVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcblxuICBzZWxlY3RvckVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7IHRvZ2dsZTogZmFsc2UgfSkudG9nZ2xlKClcbiAgfSlcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Db2xsYXBzZSB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDb2xsYXBzZSlcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4zKTogZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgbm9vcCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Ryb3Bkb3duJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZHJvcGRvd24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5jb25zdCBTUEFDRV9LRVkgPSAnU3BhY2UnXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJ1xuY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJ1xuY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMiAvLyBNb3VzZUV2ZW50LmJ1dHRvbiB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBidXR0b24sIHVzdWFsbHkgdGhlIHJpZ2h0IGJ1dHRvblxuXG5jb25zdCBSRUdFWFBfS0VZRE9XTiA9IG5ldyBSZWdFeHAoYCR7QVJST1dfVVBfS0VZfXwke0FSUk9XX0RPV05fS0VZfXwke0VTQ0FQRV9LRVl9YClcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSA9IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnXG5jb25zdCBDTEFTU19OQU1FX0RST1BFTkQgPSAnZHJvcGVuZCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFNUQVJUID0gJ2Ryb3BzdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkFWQkFSID0gJ25hdmJhcidcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl0nXG5jb25zdCBTRUxFQ1RPUl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgU0VMRUNUT1JfTkFWQkFSX05BViA9ICcubmF2YmFyLW5hdidcbmNvbnN0IFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMgPSAnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG5cbmNvbnN0IFBMQUNFTUVOVF9UT1AgPSBpc1JUTCgpID8gJ3RvcC1lbmQnIDogJ3RvcC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BFTkQgPSBpc1JUTCgpID8gJ3RvcC1zdGFydCcgOiAndG9wLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT00gPSBpc1JUTCgpID8gJ2JvdHRvbS1lbmQnIDogJ2JvdHRvbS1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT01FTkQgPSBpc1JUTCgpID8gJ2JvdHRvbS1zdGFydCcgOiAnYm90dG9tLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9SSUdIVCA9IGlzUlRMKCkgPyAnbGVmdC1zdGFydCcgOiAncmlnaHQtc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfTEVGVCA9IGlzUlRMKCkgPyAncmlnaHQtc3RhcnQnIDogJ2xlZnQtc3RhcnQnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldDogWzAsIDJdLFxuICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gIHJlZmVyZW5jZTogJ3RvZ2dsZScsXG4gIGRpc3BsYXk6ICdkeW5hbWljJyxcbiAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICBhdXRvQ2xvc2U6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50fG9iamVjdCknLFxuICBkaXNwbGF5OiAnc3RyaW5nJyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKScsXG4gIGF1dG9DbG9zZTogJyhib29sZWFufHN0cmluZyknXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fbWVudSA9IHRoaXMuX2dldE1lbnVFbGVtZW50KClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24oKSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgdGhpcy5faXNTaG93bih0aGlzLl9tZW51KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCByZWxhdGVkVGFyZ2V0KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuICAgIC8vIFRvdGFsbHkgZGlzYWJsZSBQb3BwZXIgZm9yIERyb3Bkb3ducyBpbiBOYXZiYXJcbiAgICBpZiAodGhpcy5faW5OYXZiYXIpIHtcbiAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicsICdub25lJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3JlYXRlUG9wcGVyKHBhcmVudClcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICFwYXJlbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVJfTkFWKSkge1xuICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gICAgICAgIC5mb3JFYWNoKGVsZW0gPT4gRXZlbnRIYW5kbGVyLm9uKGVsZW0sICdtb3VzZW92ZXInLCBub29wKSlcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8ICF0aGlzLl9pc1Nob3duKHRoaXMuX21lbnUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIHRoaXMuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKVxuICAgICAgICAuZm9yRWFjaChlbGVtID0+IEV2ZW50SGFuZGxlci5vZmYoZWxlbSwgJ21vdXNlb3ZlcicsIG5vb3ApKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnICYmICFpc0VsZW1lbnQoY29uZmlnLnJlZmVyZW5jZSkgJiZcbiAgICAgIHR5cGVvZiBjb25maWcucmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgLy8gUG9wcGVyIHZpcnR1YWwgZWxlbWVudHMgcmVxdWlyZSBhIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2RcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7TkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jcmVhdGVQb3BwZXIocGFyZW50KSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgfVxuXG4gICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBwYXJlbnRcbiAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IGdldEVsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcbiAgICB9XG5cbiAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKVxuICAgIGNvbnN0IGlzRGlzcGxheVN0YXRpYyA9IHBvcHBlckNvbmZpZy5tb2RpZmllcnMuZmluZChtb2RpZmllciA9PiBtb2RpZmllci5uYW1lID09PSAnYXBwbHlTdHlsZXMnICYmIG1vZGlmaWVyLmVuYWJsZWQgPT09IGZhbHNlKVxuXG4gICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCBwb3BwZXJDb25maWcpXG5cbiAgICBpZiAoaXNEaXNwbGF5U3RhdGljKSB7XG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnc3RhdGljJylcbiAgICB9XG4gIH1cblxuICBfaXNTaG93bihlbGVtZW50ID0gdGhpcy5fZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICBfZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLm5leHQodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF1cbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGVcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlRcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICBjb25zdCBpc0VuZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1icy1wb3NpdGlvbicpLnRyaW0oKSA9PT0gJ2VuZCdcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUFxuICAgIH1cblxuICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NXG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoYC4ke0NMQVNTX05BTUVfTkFWQkFSfWApICE9PSBudWxsXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWwgPT4gTnVtYmVyLnBhcnNlSW50KHZhbCwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlciBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXlcbiAgICBpZiAodGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcbiAgICAgICAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLih0eXBlb2YgdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcoZGVmYXVsdEJzUG9wcGVyQ29uZmlnKSA6IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcpXG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdE1lbnVJdGVtKHsga2V5LCB0YXJnZXQgfSkge1xuICAgIGNvbnN0IGl0ZW1zID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TLCB0aGlzLl9tZW51KS5maWx0ZXIoaXNWaXNpYmxlKVxuXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGlmIHRhcmdldCBpc24ndCBpbmNsdWRlZCBpbiBpdGVtcyAoZS5nLiB3aGVuIGV4cGFuZGluZyB0aGUgZHJvcGRvd24pXG4gICAgLy8gYWxsb3cgY3ljbGluZyB0byBnZXQgdGhlIGxhc3QgaXRlbSBpbiBjYXNlIGtleSBlcXVhbHMgQVJST1dfVVBfS0VZXG4gICAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQoaXRlbXMsIHRhcmdldCwga2V5ID09PSBBUlJPV19ET1dOX0tFWSwgIWl0ZW1zLmluY2x1ZGVzKHRhcmdldCkpLmZvY3VzKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGNsZWFyTWVudXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSAhPT0gVEFCX0tFWSkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gRHJvcGRvd24uZ2V0SW5zdGFuY2UodG9nZ2xlc1tpXSlcbiAgICAgIGlmICghY29udGV4dCB8fCBjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRleHQuX2lzU2hvd24oKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBjb250ZXh0Ll9lbGVtZW50XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKVxuICAgICAgICBjb25zdCBpc01lbnVUYXJnZXQgPSBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fbWVudSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9lbGVtZW50KSB8fFxuICAgICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnaW5zaWRlJyAmJiAhaXNNZW51VGFyZ2V0KSB8fFxuICAgICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnb3V0c2lkZScgJiYgaXNNZW51VGFyZ2V0KVxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGFiIG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgZHJvcGRvd24gbWVudSBvciBldmVudHMgZnJvbSBjb250YWluZWQgaW5wdXRzIHNob3VsZG4ndCBjbG9zZSB0aGUgbWVudVxuICAgICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmICgoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkpIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRQYXJlbnRGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gIH1cblxuICBzdGF0aWMgZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgLy8gSWYgbm90IGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIEFuZCBub3QgYSBrZXkgaW4gUkVHRVhQX0tFWURPV04gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vIElmIGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIElmIHNwYWNlIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gIC0gSWYga2V5IGlzIG90aGVyIHRoYW4gZXNjYXBlXG4gICAgLy8gICAgLSBJZiBrZXkgaXMgbm90IHVwIG9yIGRvd24gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAgIC0gSWYgdHJpZ2dlciBpbnNpZGUgdGhlIG1lbnUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSA/XG4gICAgICBldmVudC5rZXkgPT09IFNQQUNFX0tFWSB8fCAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZICYmXG4gICAgICAoKGV2ZW50LmtleSAhPT0gQVJST1dfRE9XTl9LRVkgJiYgZXZlbnQua2V5ICE9PSBBUlJPV19VUF9LRVkpIHx8XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX01FTlUpKSkgOlxuICAgICAgIVJFR0VYUF9LRVlET1dOLnRlc3QoZXZlbnQua2V5KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9nZ2xlQnV0dG9uID0gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/IHRoaXMgOiBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXVxuICAgIGNvbnN0IGluc3RhbmNlID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24pXG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICBpbnN0YW5jZS5oaWRlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09IEFSUk9XX1VQX0tFWSB8fCBldmVudC5rZXkgPT09IEFSUk9XX0RPV05fS0VZKSB7XG4gICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgIGluc3RhbmNlLnNob3coKVxuICAgICAgfVxuXG4gICAgICBpbnN0YW5jZS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzQWN0aXZlIHx8IGV2ZW50LmtleSA9PT0gU1BBQ0VfS0VZKSB7XG4gICAgICBEcm9wZG93bi5jbGVhck1lbnVzKClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykudG9nZ2xlKClcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Ecm9wZG93biB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihEcm9wZG93bilcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4zKTogdXRpbC9zY3JvbGxCYXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL2luZGV4J1xuXG5jb25zdCBTRUxFQ1RPUl9GSVhFRF9DT05URU5UID0gJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnXG5jb25zdCBTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCA9ICcuc3RpY2t5LXRvcCdcblxuY2xhc3MgU2Nyb2xsQmFySGVscGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmJvZHlcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvaW5uZXJXaWR0aCN1c2FnZV9ub3Rlc1xuICAgIGNvbnN0IGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudFdpZHRoKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKVxuICAgIHRoaXMuX2Rpc2FibGVPdmVyRmxvdygpXG4gICAgLy8gZ2l2ZSBwYWRkaW5nIHRvIGVsZW1lbnQgdG8gYmFsYW5jZSB0aGUgaGlkZGVuIHNjcm9sbGJhciB3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsICdwYWRkaW5nUmlnaHQnLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gICAgLy8gdHJpY2s6IFdlIGFkanVzdCBwb3NpdGl2ZSBwYWRkaW5nUmlnaHQgYW5kIG5lZ2F0aXZlIG1hcmdpblJpZ2h0IHRvIHN0aWNreS10b3AgZWxlbWVudHMgdG8ga2VlcCBzaG93aW5nIGZ1bGx3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsICdwYWRkaW5nUmlnaHQnLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsICdtYXJnaW5SaWdodCcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgLSB3aWR0aClcbiAgfVxuXG4gIF9kaXNhYmxlT3ZlckZsb3coKSB7XG4gICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgfVxuXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRXaWR0aCgpXG4gICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3ApXG4gICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtzdHlsZVByb3BdXG4gICAgICBlbGVtZW50LnN0eWxlW3N0eWxlUHJvcF0gPSBgJHtjYWxsYmFjayhOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkVmFsdWUpKX1weGBcbiAgICB9XG5cbiAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjaylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsICdwYWRkaW5nUmlnaHQnKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgJ3BhZGRpbmdSaWdodCcpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgJ21hcmdpblJpZ2h0JylcbiAgfVxuXG4gIF9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3ApIHtcbiAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGVsZW1lbnQuc3R5bGVbc3R5bGVQcm9wXVxuICAgIGlmIChhY3R1YWxWYWx1ZSkge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3AsIGFjdHVhbFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3ApIHtcbiAgICBjb25zdCBtYW5pcHVsYXRpb25DYWxsQmFjayA9IGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcClcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVQcm9wKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3ApXG4gICAgICAgIGVsZW1lbnQuc3R5bGVbc3R5bGVQcm9wXSA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spXG4gIH1cblxuICBfYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgY2FsbEJhY2spIHtcbiAgICBpZiAoaXNFbGVtZW50KHNlbGVjdG9yKSkge1xuICAgICAgY2FsbEJhY2soc2VsZWN0b3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2VsZW1lbnQpLmZvckVhY2goY2FsbEJhY2spXG4gICAgfVxuICB9XG5cbiAgaXNPdmVyZmxvd2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRXaWR0aCgpID4gMFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJhckhlbHBlclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4xLjMpOiB1dGlsL2JhY2tkcm9wLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCB7IGV4ZWN1dGUsIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24sIGdldEVsZW1lbnQsIHJlZmxvdywgdHlwZUNoZWNrQ29uZmlnIH0gZnJvbSAnLi9pbmRleCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgY2xhc3NOYW1lOiAnbW9kYWwtYmFja2Ryb3AnLFxuICBpc1Zpc2libGU6IHRydWUsIC8vIGlmIGZhbHNlLCB3ZSB1c2UgdGhlIGJhY2tkcm9wIGhlbHBlciB3aXRob3V0IGFkZGluZyBhbnkgZWxlbWVudCB0byB0aGUgZG9tXG4gIGlzQW5pbWF0ZWQ6IGZhbHNlLFxuICByb290RWxlbWVudDogJ2JvZHknLCAvLyBnaXZlIHRoZSBjaG9pY2UgdG8gcGxhY2UgYmFja2Ryb3AgdW5kZXIgZGlmZmVyZW50IGVsZW1lbnRzXG4gIGNsaWNrQ2FsbGJhY2s6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gIGlzVmlzaWJsZTogJ2Jvb2xlYW4nLFxuICBpc0FuaW1hdGVkOiAnYm9vbGVhbicsXG4gIHJvb3RFbGVtZW50OiAnKGVsZW1lbnR8c3RyaW5nKScsXG4gIGNsaWNrQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknXG59XG5jb25zdCBOQU1FID0gJ2JhY2tkcm9wJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgRVZFTlRfTU9VU0VET1dOID0gYG1vdXNlZG93bi5icy4ke05BTUV9YFxuXG5jbGFzcyBCYWNrZHJvcCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIHNob3coY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9hcHBlbmQoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICByZWZsb3codGhpcy5fZ2V0RWxlbWVudCgpKVxuICAgIH1cblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgaGlkZShjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgdGhpcy5kaXNwb3NlKClcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0RWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGJhY2tkcm9wLmNsYXNzTmFtZSA9IHRoaXMuX2NvbmZpZy5jbGFzc05hbWVcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudCA9IGJhY2tkcm9wXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIC8vIHVzZSBnZXRFbGVtZW50KCkgd2l0aCB0aGUgZGVmYXVsdCBcImJvZHlcIiB0byBnZXQgYSBmcmVzaCBFbGVtZW50IG9uIGVhY2ggaW5zdGFudGlhdGlvblxuICAgIGNvbmZpZy5yb290RWxlbWVudCA9IGdldEVsZW1lbnQoY29uZmlnLnJvb3RFbGVtZW50KVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9hcHBlbmQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZy5yb290RWxlbWVudC5hcHBlbmQodGhpcy5fZ2V0RWxlbWVudCgpKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2dldEVsZW1lbnQoKSwgRVZFTlRfTU9VU0VET1dOLCAoKSA9PiB7XG4gICAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5jbGlja0NhbGxiYWNrKVxuICAgIH0pXG5cbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gdHJ1ZVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOKVxuXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKVxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZVxuICB9XG5cbiAgX2VtdWxhdGVBbmltYXRpb24oY2FsbGJhY2spIHtcbiAgICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCB0aGlzLl9nZXRFbGVtZW50KCksIHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tkcm9wXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjEuMyk6IHV0aWwvZm9jdXN0cmFwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IHsgdHlwZUNoZWNrQ29uZmlnIH0gZnJvbSAnLi9pbmRleCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgdHJhcEVsZW1lbnQ6IG51bGwsIC8vIFRoZSBlbGVtZW50IHRvIHRyYXAgZm9jdXMgaW5zaWRlIG9mXG4gIGF1dG9mb2N1czogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgdHJhcEVsZW1lbnQ6ICdlbGVtZW50JyxcbiAgYXV0b2ZvY3VzOiAnYm9vbGVhbidcbn1cblxuY29uc3QgTkFNRSA9ICdmb2N1c3RyYXAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5mb2N1c3RyYXAnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9UQUIgPSBga2V5ZG93bi50YWIke0VWRU5UX0tFWX1gXG5cbmNvbnN0IFRBQl9LRVkgPSAnVGFiJ1xuY29uc3QgVEFCX05BVl9GT1JXQVJEID0gJ2ZvcndhcmQnXG5jb25zdCBUQUJfTkFWX0JBQ0tXQVJEID0gJ2JhY2t3YXJkJ1xuXG5jbGFzcyBGb2N1c1RyYXAge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gbnVsbFxuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgY29uc3QgeyB0cmFwRWxlbWVudCwgYXV0b2ZvY3VzIH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGF1dG9mb2N1cykge1xuICAgICAgdHJhcEVsZW1lbnQuZm9jdXMoKVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSkgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB0aGlzLl9oYW5kbGVGb2N1c2luKGV2ZW50KSlcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fVEFCLCBldmVudCA9PiB0aGlzLl9oYW5kbGVLZXlkb3duKGV2ZW50KSlcblxuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZVxuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9oYW5kbGVGb2N1c2luKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50XG4gICAgY29uc3QgeyB0cmFwRWxlbWVudCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAodGFyZ2V0ID09PSBkb2N1bWVudCB8fCB0YXJnZXQgPT09IHRyYXBFbGVtZW50IHx8IHRyYXBFbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZm9jdXNhYmxlQ2hpbGRyZW4odHJhcEVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID09PSBUQUJfTkFWX0JBQ0tXQVJEKSB7XG4gICAgICBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5mb2N1cygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnRzWzBdLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlS2V5ZG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgIT09IFRBQl9LRVkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBldmVudC5zaGlmdEtleSA/IFRBQl9OQVZfQkFDS1dBUkQgOiBUQUJfTkFWX0ZPUldBUkRcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9jdXNUcmFwXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjEuMyk6IG1vZGFsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICByZWZsb3csXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IFNjcm9sbEJhckhlbHBlciBmcm9tICcuL3V0aWwvc2Nyb2xsYmFyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AnXG5pbXBvcnQgRm9jdXNUcmFwIGZyb20gJy4vdXRpbC9mb2N1c3RyYXAnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ21vZGFsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMubW9kYWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIGZvY3VzOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBmb2N1czogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEID0gYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9SRVNJWkUgPSBgcmVzaXplJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfRElTTUlTUyA9IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9ESVNNSVNTID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFVVBfRElTTUlTUyA9IGBtb3VzZXVwLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRURPV05fRElTTUlTUyA9IGBtb3VzZWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtb3BlbidcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NUQVRJQyA9ICdtb2RhbC1zdGF0aWMnXG5cbmNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm1vZGFsLnNob3cnXG5jb25zdCBTRUxFQ1RPUl9ESUFMT0cgPSAnLm1vZGFsLWRpYWxvZydcbmNvbnN0IFNFTEVDVE9SX01PREFMX0JPRFkgPSAnLm1vZGFsLWJvZHknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2RpYWxvZyA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRElBTE9HLCB0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKClcbiAgICB0aGlzLl9mb2N1c3RyYXAgPSB0aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKClcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX3Njcm9sbEJhciA9IG5ldyBTY3JvbGxCYXJIZWxwZXIoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG5cbiAgICBpZiAodGhpcy5faXNBbmltYXRlZCgpKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5fc2Nyb2xsQmFyLmhpZGUoKVxuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfT1BFTilcblxuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2RpYWxvZywgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MsICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VVUF9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9pc0FuaW1hdGVkKClcblxuICAgIGlmIChpc0FuaW1hdGVkKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9kaWFsb2csIEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTKVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9oaWRlTW9kYWwoKSwgdGhpcy5fZWxlbWVudCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgW3dpbmRvdywgdGhpcy5fZGlhbG9nXVxuICAgICAgLmZvckVhY2goaHRtbEVsZW1lbnQgPT4gRXZlbnRIYW5kbGVyLm9mZihodG1sRWxlbWVudCwgRVZFTlRfS0VZKSlcblxuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZSgpIHtcbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBpc1Zpc2libGU6IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKSwgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlXG4gICAgICBpc0FuaW1hdGVkOiB0aGlzLl9pc0FuaW1hdGVkKClcbiAgICB9KVxuICB9XG5cbiAgX2luaXRpYWxpemVGb2N1c1RyYXAoKSB7XG4gICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuICAgICAgdHJhcEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcbiAgICB9XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy5faXNBbmltYXRlZCgpXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NT0RBTF9CT0RZLCB0aGlzLl9kaWFsb2cpXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSB8fCB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAvLyBEb24ndCBtb3ZlIG1vZGFsJ3MgRE9NIHBvc2l0aW9uXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKVxuICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMFxuXG4gICAgaWYgKG1vZGFsQm9keSkge1xuICAgICAgbW9kYWxCb2R5LnNjcm9sbFRvcCA9IDBcbiAgICB9XG5cbiAgICBpZiAoaXNBbmltYXRlZCkge1xuICAgICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayh0cmFuc2l0aW9uQ29tcGxldGUsIHRoaXMuX2RpYWxvZywgaXNBbmltYXRlZClcbiAgfVxuXG4gIF9zZXRFc2NhcGVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLl9jb25maWcua2V5Ym9hcmQgJiYgZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRSZXNpemVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB0aGlzLl9hZGp1c3REaWFsb2coKSlcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih3aW5kb3csIEVWRU5UX1JFU0laRSlcbiAgICB9XG4gIH1cblxuICBfaGlkZU1vZGFsKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfT1BFTilcbiAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgdGhpcy5fc2Nyb2xsQmFyLnJlc2V0KClcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9KVxuICB9XG5cbiAgX3Nob3dCYWNrZHJvcChjYWxsYmFjaykge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5fYmFja2Ryb3Auc2hvdyhjYWxsYmFjaylcbiAgfVxuXG4gIF9pc0FuaW1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gIH1cblxuICBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRClcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgY2xhc3NMaXN0LCBzY3JvbGxIZWlnaHQsIHN0eWxlIH0gPSB0aGlzLl9lbGVtZW50XG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXG4gICAgLy8gcmV0dXJuIGlmIHRoZSBmb2xsb3dpbmcgYmFja2dyb3VuZCB0cmFuc2l0aW9uIGhhc24ndCB5ZXQgY29tcGxldGVkXG4gICAgaWYgKCghaXNNb2RhbE92ZXJmbG93aW5nICYmIHN0eWxlLm92ZXJmbG93WSA9PT0gJ2hpZGRlbicpIHx8IGNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NUQVRJQykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICBzdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgIH1cblxuICAgIGNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TVEFUSUMpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB7XG4gICAgICBjbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU1RBVElDKVxuICAgICAgaWYgKCFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgc3R5bGUub3ZlcmZsb3dZID0gJydcbiAgICAgICAgfSwgdGhpcy5fZGlhbG9nKVxuICAgICAgfVxuICAgIH0sIHRoaXMuX2RpYWxvZylcblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB0aGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgX2FkanVzdERpYWxvZygpIHtcbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuX3Njcm9sbEJhci5nZXRXaWR0aCgpXG4gICAgY29uc3QgaXNCb2R5T3ZlcmZsb3dpbmcgPSBzY3JvbGxiYXJXaWR0aCA+IDBcblxuICAgIGlmICgoIWlzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZyAmJiAhaXNSVEwoKSkgfHwgKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcgJiYgaXNSVEwoKSkpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG5cbiAgICBpZiAoKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcgJiYgIWlzUlRMKCkpIHx8ICghaXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nICYmIGlzUlRMKCkpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfU0hPVywgc2hvd0V2ZW50ID0+IHtcbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICAvLyBhdm9pZCBjb25mbGljdCB3aGVuIGNsaWNraW5nIG1vZGRhbCB0b2dnbGVyIHdoaWxlIGFub3RoZXIgb25lIGlzIG9wZW5cbiAgY29uc3QgYWxsUmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SKVxuICBpZiAoYWxsUmVhZHlPcGVuKSB7XG4gICAgTW9kYWwuZ2V0SW5zdGFuY2UoYWxsUmVhZHlPcGVuKS5oaWRlKClcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcblxuICBkYXRhLnRvZ2dsZSh0aGlzKVxufSlcblxuZW5hYmxlRGlzbWlzc1RyaWdnZXIoTW9kYWwpXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Nb2RhbCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihNb2RhbClcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4zKTogb2ZmY2FudmFzLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBpc0Rpc2FibGVkLFxuICBpc1Zpc2libGUsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgU2Nyb2xsQmFySGVscGVyIGZyb20gJy4vdXRpbC9zY3JvbGxiYXInXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AnXG5pbXBvcnQgRm9jdXNUcmFwIGZyb20gJy4vdXRpbC9mb2N1c3RyYXAnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ29mZmNhbnZhcydcbmNvbnN0IERBVEFfS0VZID0gJ2JzLm9mZmNhbnZhcydcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgc2Nyb2xsOiBmYWxzZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICdib29sZWFuJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgc2Nyb2xsOiAnYm9vbGVhbidcbn1cblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0JBQ0tEUk9QID0gJ29mZmNhbnZhcy1iYWNrZHJvcCdcbmNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm9mZmNhbnZhcy5zaG93J1xuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIE9mZmNhbnZhcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpXG4gICAgdGhpcy5fZm9jdXN0cmFwID0gdGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7IHJlbGF0ZWRUYXJnZXQgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcblxuICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkuaGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgICB0aGlzLl9mb2N1c3RyYXAuYWN0aXZhdGUoKVxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgeyByZWxhdGVkVGFyZ2V0IH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcbiAgICB0aGlzLl9lbGVtZW50LmJsdXIoKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkucmVzZXQoKVxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxiYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKClcbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcbiAgICB9XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgIGNsYXNzTmFtZTogQ0xBU1NfTkFNRV9CQUNLRFJPUCxcbiAgICAgIGlzVmlzaWJsZTogdGhpcy5fY29uZmlnLmJhY2tkcm9wLFxuICAgICAgaXNBbmltYXRlZDogdHJ1ZSxcbiAgICAgIHJvb3RFbGVtZW50OiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICBjbGlja0NhbGxiYWNrOiAoKSA9PiB0aGlzLmhpZGUoKVxuICAgIH0pXG4gIH1cblxuICBfaW5pdGlhbGl6ZUZvY3VzVHJhcCgpIHtcbiAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgIH0pXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgIC8vIGZvY3VzIG9uIHRyaWdnZXIgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICB0aGlzLmZvY3VzKClcbiAgICB9XG4gIH0pXG5cbiAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBhIHRvZ2dsZXIgb2YgYW4gb2ZmY2FudmFzLCB3aGlsZSBhbm90aGVyIGlzIG9wZW5cbiAgY29uc3QgYWxsUmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SKVxuICBpZiAoYWxsUmVhZHlPcGVuICYmIGFsbFJlYWR5T3BlbiAhPT0gdGFyZ2V0KSB7XG4gICAgT2ZmY2FudmFzLmdldEluc3RhbmNlKGFsbFJlYWR5T3BlbikuaGlkZSgpXG4gIH1cblxuICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuICBkYXRhLnRvZ2dsZSh0aGlzKVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT5cbiAgU2VsZWN0b3JFbmdpbmUuZmluZChPUEVOX1NFTEVDVE9SKS5mb3JFYWNoKGVsID0+IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKGVsKS5zaG93KCkpXG4pXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKE9mZmNhbnZhcylcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihPZmZjYW52YXMpXG5cbmV4cG9ydCBkZWZhdWx0IE9mZmNhbnZhc1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4xLjMpOiB1dGlsL3Nhbml0aXplci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IHVyaUF0dHJpYnV0ZXMgPSBuZXcgU2V0KFtcbiAgJ2JhY2tncm91bmQnLFxuICAnY2l0ZScsXG4gICdocmVmJyxcbiAgJ2l0ZW10eXBlJyxcbiAgJ2xvbmdkZXNjJyxcbiAgJ3Bvc3RlcicsXG4gICdzcmMnLFxuICAneGxpbms6aHJlZidcbl0pXG5cbmNvbnN0IEFSSUFfQVRUUklCVVRFX1BBVFRFUk4gPSAvXmFyaWEtW1xcdy1dKiQvaVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IHJlY29nbml6ZXMgYSBjb21tb25seSB1c2VmdWwgc3Vic2V0IG9mIFVSTHMgdGhhdCBhcmUgc2FmZS5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi8xMi4yLngvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGV8c21zKTp8W14jJi86P10qKD86WyMvP118JCkpL2lcblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi8xMi4yLngvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFtcXGQrL2Etel0rPSokL2lcblxuY29uc3QgYWxsb3dlZEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGUsIGFsbG93ZWRBdHRyaWJ1dGVMaXN0KSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKSkge1xuICAgIGlmICh1cmlBdHRyaWJ1dGVzLmhhcyhhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oU0FGRV9VUkxfUEFUVEVSTi50ZXN0KGF0dHJpYnV0ZS5ub2RlVmFsdWUpIHx8IERBVEFfVVJMX1BBVFRFUk4udGVzdChhdHRyaWJ1dGUubm9kZVZhbHVlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uc3QgcmVnRXhwID0gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKGF0dHJpYnV0ZVJlZ2V4ID0+IGF0dHJpYnV0ZVJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKVxuXG4gIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVnRXhwLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKHJlZ0V4cFtpXS50ZXN0KGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdEFsbG93bGlzdCA9IHtcbiAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgJyonOiBbJ2NsYXNzJywgJ2RpcicsICdpZCcsICdsYW5nJywgJ3JvbGUnLCBBUklBX0FUVFJJQlVURV9QQVRURVJOXSxcbiAgYTogWyd0YXJnZXQnLCAnaHJlZicsICd0aXRsZScsICdyZWwnXSxcbiAgYXJlYTogW10sXG4gIGI6IFtdLFxuICBicjogW10sXG4gIGNvbDogW10sXG4gIGNvZGU6IFtdLFxuICBkaXY6IFtdLFxuICBlbTogW10sXG4gIGhyOiBbXSxcbiAgaDE6IFtdLFxuICBoMjogW10sXG4gIGgzOiBbXSxcbiAgaDQ6IFtdLFxuICBoNTogW10sXG4gIGg2OiBbXSxcbiAgaTogW10sXG4gIGltZzogWydzcmMnLCAnc3Jjc2V0JywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgbGk6IFtdLFxuICBvbDogW10sXG4gIHA6IFtdLFxuICBwcmU6IFtdLFxuICBzOiBbXSxcbiAgc21hbGw6IFtdLFxuICBzcGFuOiBbXSxcbiAgc3ViOiBbXSxcbiAgc3VwOiBbXSxcbiAgc3Ryb25nOiBbXSxcbiAgdTogW10sXG4gIHVsOiBbXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVIdG1sKHVuc2FmZUh0bWwsIGFsbG93TGlzdCwgc2FuaXRpemVGbikge1xuICBpZiAoIXVuc2FmZUh0bWwubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuc2FmZUh0bWxcbiAgfVxuXG4gIGlmIChzYW5pdGl6ZUZuICYmIHR5cGVvZiBzYW5pdGl6ZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHNhbml0aXplRm4odW5zYWZlSHRtbClcbiAgfVxuXG4gIGNvbnN0IGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKClcbiAgY29uc3QgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJylcbiAgY29uc3QgZWxlbWVudHMgPSBbXS5jb25jYXQoLi4uY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXVxuICAgIGNvbnN0IGVsZW1lbnROYW1lID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGFsbG93TGlzdCkuaW5jbHVkZXMoZWxlbWVudE5hbWUpKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpXG5cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlTGlzdCA9IFtdLmNvbmNhdCguLi5lbGVtZW50LmF0dHJpYnV0ZXMpXG4gICAgY29uc3QgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoYWxsb3dMaXN0WycqJ10gfHwgW10sIGFsbG93TGlzdFtlbGVtZW50TmFtZV0gfHwgW10pXG5cbiAgICBhdHRyaWJ1dGVMaXN0LmZvckVhY2goYXR0cmlidXRlID0+IHtcbiAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGFsbG93ZWRBdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubm9kZU5hbWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUxcbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4zKTogdG9vbHRpcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAqIGFzIFBvcHBlciBmcm9tICdAcG9wcGVyanMvY29yZSdcblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBmaW5kU2hhZG93Um9vdCxcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0VUlELFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMLFxuICBub29wLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IHsgRGVmYXVsdEFsbG93bGlzdCwgc2FuaXRpemVIdG1sIH0gZnJvbSAnLi91dGlsL3Nhbml0aXplcidcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b29sdGlwJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudG9vbHRpcCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBDTEFTU19QUkVGSVggPSAnYnMtdG9vbHRpcCdcbmNvbnN0IERJU0FMTE9XRURfQVRUUklCVVRFUyA9IG5ldyBTZXQoWydzYW5pdGl6ZScsICdhbGxvd0xpc3QnLCAnc2FuaXRpemVGbiddKVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgdHJpZ2dlcjogJ3N0cmluZycsXG4gIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgaHRtbDogJ2Jvb2xlYW4nLFxuICBzZWxlY3RvcjogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICBwbGFjZW1lbnQ6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiAnYXJyYXknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBjdXN0b21DbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gIGFsbG93TGlzdDogJ29iamVjdCcsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknXG59XG5cbmNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gIEFVVE86ICdhdXRvJyxcbiAgVE9QOiAndG9wJyxcbiAgUklHSFQ6IGlzUlRMKCkgPyAnbGVmdCcgOiAncmlnaHQnLFxuICBCT1RUT006ICdib3R0b20nLFxuICBMRUZUOiBpc1JUTCgpID8gJ3JpZ2h0JyA6ICdsZWZ0J1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb246IHRydWUsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+JyxcbiAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgdGl0bGU6ICcnLFxuICBkZWxheTogMCxcbiAgaHRtbDogZmFsc2UsXG4gIHNlbGVjdG9yOiBmYWxzZSxcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgb2Zmc2V0OiBbMCwgMF0sXG4gIGNvbnRhaW5lcjogZmFsc2UsXG4gIGZhbGxiYWNrUGxhY2VtZW50czogWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICBjdXN0b21DbGFzczogJycsXG4gIHNhbml0aXplOiB0cnVlLFxuICBzYW5pdGl6ZUZuOiBudWxsLFxuICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gIHBvcHBlckNvbmZpZzogbnVsbFxufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERTogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU46IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBJTlNFUlRFRDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0s6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU46IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQ6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVI6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VMRUFWRTogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG59XG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9NT0RBTCA9ICdtb2RhbCdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBIT1ZFUl9TVEFURV9TSE9XID0gJ3Nob3cnXG5jb25zdCBIT1ZFUl9TVEFURV9PVVQgPSAnb3V0J1xuXG5jb25zdCBTRUxFQ1RPUl9UT09MVElQX0lOTkVSID0gJy50b29sdGlwLWlubmVyJ1xuY29uc3QgU0VMRUNUT1JfTU9EQUwgPSBgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gXG5cbmNvbnN0IEVWRU5UX01PREFMX0hJREUgPSAnaGlkZS5icy5tb2RhbCdcblxuY29uc3QgVFJJR0dFUl9IT1ZFUiA9ICdob3ZlcidcbmNvbnN0IFRSSUdHRVJfRk9DVVMgPSAnZm9jdXMnXG5jb25zdCBUUklHR0VSX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9vbHRpcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgIH1cblxuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICAvLyBwcml2YXRlXG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICAgIHRoaXMuX3RpbWVvdXQgPSAwXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9XG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLnRpcCA9IG51bGxcblxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgcmV0dXJuIEV2ZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZFxuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudClcblxuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICFjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrXG5cbiAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgY29udGV4dC5fZW50ZXIobnVsbCwgY29udGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuX2xlYXZlKG51bGwsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fZW50ZXIobnVsbCwgdGhpcylcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTU9EQUwpLCBFVkVOVF9NT0RBTF9ISURFLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICB0aGlzLnRpcC5yZW1vdmUoKVxuICAgIH1cblxuICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMuaXNXaXRoQ29udGVudCgpICYmIHRoaXMuX2lzRW5hYmxlZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPVylcbiAgICBjb25zdCBzaGFkb3dSb290ID0gZmluZFNoYWRvd1Jvb3QodGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBpc0luVGhlRG9tID0gc2hhZG93Um9vdCA9PT0gbnVsbCA/XG4gICAgICB0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpIDpcbiAgICAgIHNoYWRvd1Jvb3QuY29udGFpbnModGhpcy5fZWxlbWVudClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAhaXNJblRoZURvbSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gQSB0cmljayB0byByZWNyZWF0ZSBhIHRvb2x0aXAgaW4gY2FzZSBhIG5ldyB0aXRsZSBpcyBnaXZlbiBieSB1c2luZyB0aGUgTk9UIGRvY3VtZW50ZWQgYGRhdGEtYnMtb3JpZ2luYWwtdGl0bGVgXG4gICAgLy8gVGhpcyB3aWxsIGJlIHJlbW92ZWQgbGF0ZXIgaW4gZmF2b3Igb2YgYSBgc2V0Q29udGVudGAgbWV0aG9kXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IuTkFNRSA9PT0gJ3Rvb2x0aXAnICYmIHRoaXMudGlwICYmIHRoaXMuZ2V0VGl0bGUoKSAhPT0gdGhpcy50aXAucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9UT09MVElQX0lOTkVSKS5pbm5lckhUTUwpIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuICAgICAgdGhpcy50aXAucmVtb3ZlKClcbiAgICAgIHRoaXMudGlwID0gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgdGlwSWQgPSBnZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKVxuXG4gICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcElkKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0eXBlb2YgdGhpcy5fY29uZmlnLnBsYWNlbWVudCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICB0aGlzLl9jb25maWcucGxhY2VtZW50LmNhbGwodGhpcywgdGlwLCB0aGlzLl9lbGVtZW50KSA6XG4gICAgICB0aGlzLl9jb25maWcucGxhY2VtZW50XG5cbiAgICBjb25zdCBhdHRhY2htZW50ID0gdGhpcy5fZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpXG4gICAgdGhpcy5fYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpXG5cbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy5fY29uZmlnXG4gICAgRGF0YS5zZXQodGlwLCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMudGlwKSkge1xuICAgICAgY29udGFpbmVyLmFwcGVuZCh0aXApXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LklOU0VSVEVEKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wb3BwZXIgPSBQb3BwZXIuY3JlYXRlUG9wcGVyKHRoaXMuX2VsZW1lbnQsIHRpcCwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpKVxuICAgIH1cblxuICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGN1c3RvbUNsYXNzID0gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmN1c3RvbUNsYXNzKVxuICAgIGlmIChjdXN0b21DbGFzcykge1xuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoLi4uY3VzdG9tQ2xhc3Muc3BsaXQoJyAnKSlcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgY29uc3QgcHJldkhvdmVyU3RhdGUgPSB0aGlzLl9ob3ZlclN0YXRlXG5cbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSBudWxsXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1dOKVxuXG4gICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX3BvcHBlcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ob3ZlclN0YXRlICE9PSBIT1ZFUl9TVEFURV9TSE9XKSB7XG4gICAgICAgIHRpcC5yZW1vdmUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElEREVOKVxuXG4gICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKClcbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4gRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCkpXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0ZPQ1VTXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0hPVkVSXSA9IGZhbHNlXG5cbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgaXNBbmltYXRlZClcbiAgICB0aGlzLl9ob3ZlclN0YXRlID0gJydcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcm90ZWN0ZWRcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSlcbiAgfVxuXG4gIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICByZXR1cm4gdGhpcy50aXBcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX2NvbmZpZy50ZW1wbGF0ZVxuXG4gICAgY29uc3QgdGlwID0gZWxlbWVudC5jaGlsZHJlblswXVxuICAgIHRoaXMuc2V0Q29udGVudCh0aXApXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLnRpcCA9IHRpcFxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgc2V0Q29udGVudCh0aXApIHtcbiAgICB0aGlzLl9zYW5pdGl6ZUFuZFNldENvbnRlbnQodGlwLCB0aGlzLmdldFRpdGxlKCksIFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIpXG4gIH1cblxuICBfc2FuaXRpemVBbmRTZXRDb250ZW50KHRlbXBsYXRlLCBjb250ZW50LCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IsIHRlbXBsYXRlKVxuXG4gICAgaWYgKCFjb250ZW50ICYmIHRlbXBsYXRlRWxlbWVudCkge1xuICAgICAgdGVtcGxhdGVFbGVtZW50LnJlbW92ZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB3ZSB1c2UgYXBwZW5kIGZvciBodG1sIG9iamVjdHMgdG8gbWFpbnRhaW4ganMgZXZlbnRzXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCh0ZW1wbGF0ZUVsZW1lbnQsIGNvbnRlbnQpXG4gIH1cblxuICBzZXRFbGVtZW50Q29udGVudChlbGVtZW50LCBjb250ZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnQoY29udGVudCkpIHtcbiAgICAgIGNvbnRlbnQgPSBnZXRFbGVtZW50KGNvbnRlbnQpXG5cbiAgICAgIC8vIGNvbnRlbnQgaXMgYSBET00gbm9kZSBvciBhIGpRdWVyeVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICAgIGlmIChjb250ZW50LnBhcmVudE5vZGUgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgZWxlbWVudC5hcHBlbmQoY29udGVudClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQudGV4dENvbnRlbnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnNhbml0aXplKSB7XG4gICAgICAgIGNvbnRlbnQgPSBzYW5pdGl6ZUh0bWwoY29udGVudCwgdGhpcy5fY29uZmlnLmFsbG93TGlzdCwgdGhpcy5fY29uZmlnLnNhbml0aXplRm4pXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudFxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudFxuICAgIH1cbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKSB8fCB0aGlzLl9jb25maWcudGl0bGVcblxuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aXRsZSlcbiAgfVxuXG4gIHVwZGF0ZUF0dGFjaG1lbnQoYXR0YWNobWVudCkge1xuICAgIGlmIChhdHRhY2htZW50ID09PSAncmlnaHQnKSB7XG4gICAgICByZXR1cm4gJ2VuZCdcbiAgICB9XG5cbiAgICBpZiAoYXR0YWNobWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgICByZXR1cm4gJ3N0YXJ0J1xuICAgIH1cblxuICAgIHJldHVybiBhdHRhY2htZW50XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCwgY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0IHx8IHRoaXMuY29uc3RydWN0b3IuZ2V0T3JDcmVhdGVJbnN0YW5jZShldmVudC5kZWxlZ2F0ZVRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSlcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbCA9PiBOdW1iZXIucGFyc2VJbnQodmFsLCAxMCkpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihjb250ZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nID8gY29udGVudC5jYWxsKHRoaXMuX2VsZW1lbnQpIDogY29udGVudFxuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSB7XG4gICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiB0aGlzLl9jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRzXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnYXJyb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGAuJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWFycm93YFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdvbkNoYW5nZScsXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBwaGFzZTogJ2FmdGVyV3JpdGUnLFxuICAgICAgICAgIGZuOiBkYXRhID0+IHRoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgb25GaXJzdFVwZGF0ZTogZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLm9wdGlvbnMucGxhY2VtZW50ICE9PSBkYXRhLnBsYWNlbWVudCkge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLih0eXBlb2YgdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcoZGVmYXVsdEJzUG9wcGVyQ29uZmlnKSA6IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcpXG4gICAgfVxuICB9XG5cbiAgX2FkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgdGhpcy5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmFkZChgJHt0aGlzLl9nZXRCYXNpY0NsYXNzUHJlZml4KCl9LSR7dGhpcy51cGRhdGVBdHRhY2htZW50KGF0dGFjaG1lbnQpfWApXG4gIH1cblxuICBfZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV1cbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSB0aGlzLl9jb25maWcudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICB0cmlnZ2Vycy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy50b2dnbGUoZXZlbnQpKVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUVOVEVSIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTSU5cbiAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID9cbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFTEVBVkUgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNPVVRcblxuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRJbiwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLl9lbnRlcihldmVudCkpXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudE91dCwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLl9sZWF2ZShldmVudCkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTU9EQUwpLCBFVkVOVF9NT0RBTF9ISURFLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBzZWxlY3RvcjogJydcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZml4VGl0bGUoKVxuICAgIH1cbiAgfVxuXG4gIF9maXhUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgY29uc3Qgb3JpZ2luYWxUaXRsZVR5cGUgPSB0eXBlb2YgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKHRpdGxlIHx8IG9yaWdpbmFsVGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnLCB0aXRsZSB8fCAnJylcbiAgICAgIGlmICh0aXRsZSAmJiAhdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSAmJiAhdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRpdGxlKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJylcbiAgICB9XG4gIH1cblxuICBfZW50ZXIoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50LCBjb250ZXh0KVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUlxuICAgICAgXSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykgfHwgY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfU0hPVykge1xuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX1NIT1dcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX1NIT1dcblxuICAgIGlmICghY29udGV4dC5fY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0Ll9jb25maWcuZGVsYXkuc2hvdykge1xuICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9TSE9XKSB7XG4gICAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5fY29uZmlnLmRlbGF5LnNob3cpXG4gIH1cblxuICBfbGVhdmUoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50LCBjb250ZXh0KVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJcbiAgICAgIF0gPSBjb250ZXh0Ll9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfT1VUXG5cbiAgICBpZiAoIWNvbnRleHQuX2NvbmZpZy5kZWxheSB8fCAhY29udGV4dC5fY29uZmlnLmRlbGF5LmhpZGUpIHtcbiAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfT1VUKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5fY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgaW4gdGhpcy5fYWN0aXZlVHJpZ2dlcikge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uc3QgZGF0YUF0dHJpYnV0ZXMgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KVxuXG4gICAgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpLmZvckVhY2goZGF0YUF0dHIgPT4ge1xuICAgICAgaWYgKERJU0FMTE9XRURfQVRUUklCVVRFUy5oYXMoZGF0YUF0dHIpKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cl1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgY29uZmlnLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlID8gZG9jdW1lbnQuYm9keSA6IGdldEVsZW1lbnQoY29uZmlnLmNvbnRhaW5lcilcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICBzaG93OiBjb25maWcuZGVsYXksXG4gICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLnRpdGxlID0gY29uZmlnLnRpdGxlLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmNvbnRlbnQgPSBjb25maWcuY29udGVudC50b1N0cmluZygpXG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSlcblxuICAgIGlmIChjb25maWcuc2FuaXRpemUpIHtcbiAgICAgIGNvbmZpZy50ZW1wbGF0ZSA9IHNhbml0aXplSHRtbChjb25maWcudGVtcGxhdGUsIGNvbmZpZy5hbGxvd0xpc3QsIGNvbmZpZy5zYW5pdGl6ZUZuKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICBjb25zdCBjb25maWcgPSB7fVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fY29uZmlnKSB7XG4gICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuX2NvbmZpZ1trZXldKSB7XG4gICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5fY29uZmlnW2tleV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJbiB0aGUgZnV0dXJlIGNhbiBiZSByZXBsYWNlZCB3aXRoOlxuICAgIC8vIGNvbnN0IGtleXNXaXRoRGlmZmVyZW50VmFsdWVzID0gT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnKS5maWx0ZXIoZW50cnkgPT4gdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2VudHJ5WzBdXSAhPT0gdGhpcy5fY29uZmlnW2VudHJ5WzBdXSlcbiAgICAvLyBgT2JqZWN0LmZyb21FbnRyaWVzKGtleXNXaXRoRGlmZmVyZW50VmFsdWVzKWBcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IGJhc2ljQ2xhc3NQcmVmaXhSZWdleCA9IG5ldyBSZWdFeHAoYChefFxcXFxzKSR7dGhpcy5fZ2V0QmFzaWNDbGFzc1ByZWZpeCgpfVxcXFxTK2AsICdnJylcbiAgICBjb25zdCB0YWJDbGFzcyA9IHRpcC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykubWF0Y2goYmFzaWNDbGFzc1ByZWZpeFJlZ2V4KVxuICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICB0YWJDbGFzcy5tYXAodG9rZW4gPT4gdG9rZW4udHJpbSgpKVxuICAgICAgICAuZm9yRWFjaCh0Q2xhc3MgPT4gdGlwLmNsYXNzTGlzdC5yZW1vdmUodENsYXNzKSlcbiAgICB9XG4gIH1cblxuICBfZ2V0QmFzaWNDbGFzc1ByZWZpeCgpIHtcbiAgICByZXR1cm4gQ0xBU1NfUFJFRklYXG4gIH1cblxuICBfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKHBvcHBlckRhdGEpIHtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSBwb3BwZXJEYXRhXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRpcCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlclxuICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKVxuICAgIHRoaXMuX2FkZEF0dGFjaG1lbnRDbGFzcyh0aGlzLl9nZXRBdHRhY2htZW50KHN0YXRlLnBsYWNlbWVudCkpXG4gIH1cblxuICBfZGlzcG9zZVBvcHBlcigpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBUb29sdGlwLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Ub29sdGlwIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvb2x0aXApXG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4zKTogcG9wb3Zlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdwb3BvdmVyJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMucG9wb3ZlcidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBDTEFTU19QUkVGSVggPSAnYnMtcG9wb3ZlcidcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0LFxuICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gIG9mZnNldDogWzAsIDhdLFxuICB0cmlnZ2VyOiAnY2xpY2snLFxuICBjb250ZW50OiAnJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAnPGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2Pidcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdFR5cGUsXG4gIGNvbnRlbnQ6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERTogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU46IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBJTlNFUlRFRDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0s6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU46IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQ6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVI6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VMRUFWRTogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG59XG5cbmNvbnN0IFNFTEVDVE9SX1RJVExFID0gJy5wb3BvdmVyLWhlYWRlcidcbmNvbnN0IFNFTEVDVE9SX0NPTlRFTlQgPSAnLnBvcG92ZXItYm9keSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBUb29sdGlwIHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIE92ZXJyaWRlc1xuXG4gIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KClcbiAgfVxuXG4gIHNldENvbnRlbnQodGlwKSB7XG4gICAgdGhpcy5fc2FuaXRpemVBbmRTZXRDb250ZW50KHRpcCwgdGhpcy5nZXRUaXRsZSgpLCBTRUxFQ1RPUl9USVRMRSlcbiAgICB0aGlzLl9zYW5pdGl6ZUFuZFNldENvbnRlbnQodGlwLCB0aGlzLl9nZXRDb250ZW50KCksIFNFTEVDVE9SX0NPTlRFTlQpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jb250ZW50KVxuICB9XG5cbiAgX2dldEJhc2ljQ2xhc3NQcmVmaXgoKSB7XG4gICAgcmV0dXJuIENMQVNTX1BSRUZJWFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBQb3BvdmVyLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Qb3BvdmVyIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFBvcG92ZXIpXG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMS4zKTogc2Nyb2xsc3B5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50LFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnc2Nyb2xsc3B5J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuc2Nyb2xsc3B5J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldDogMTAsXG4gIG1ldGhvZDogJ2F1dG8nLFxuICB0YXJnZXQ6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQ6ICdudW1iZXInLFxuICBtZXRob2Q6ICdzdHJpbmcnLFxuICB0YXJnZXQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFVkVOVF9BQ1RJVkFURSA9IGBhY3RpdmF0ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NDUk9MTCA9IGBzY3JvbGwke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fSVRFTSA9ICdkcm9wZG93bi1pdGVtJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NQWSA9ICdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSU5LUyA9ICcubmF2LWxpbmsnXG5jb25zdCBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElOS19JVEVNUyA9IGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU30sIC4ke0NMQVNTX05BTUVfRFJPUERPV05fSVRFTX1gXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcblxuY29uc3QgTUVUSE9EX09GRlNFVCA9ICdvZmZzZXQnXG5jb25zdCBNRVRIT0RfUE9TSVRJT04gPSAncG9zaXRpb24nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBTY3JvbGxTcHkgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcbiAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gdGhpcy5fZWxlbWVudC50YWdOYW1lID09PSAnQk9EWScgPyB3aW5kb3cgOiB0aGlzLl9lbGVtZW50XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9vZmZzZXRzID0gW11cbiAgICB0aGlzLl90YXJnZXRzID0gW11cbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gMFxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX3Njcm9sbEVsZW1lbnQsIEVWRU5UX1NDUk9MTCwgKCkgPT4gdGhpcy5fcHJvY2VzcygpKVxuXG4gICAgdGhpcy5yZWZyZXNoKClcbiAgICB0aGlzLl9wcm9jZXNzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBhdXRvTWV0aG9kID0gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gdGhpcy5fc2Nyb2xsRWxlbWVudC53aW5kb3cgP1xuICAgICAgTUVUSE9EX09GRlNFVCA6XG4gICAgICBNRVRIT0RfUE9TSVRJT05cblxuICAgIGNvbnN0IG9mZnNldE1ldGhvZCA9IHRoaXMuX2NvbmZpZy5tZXRob2QgPT09ICdhdXRvJyA/XG4gICAgICBhdXRvTWV0aG9kIDpcbiAgICAgIHRoaXMuX2NvbmZpZy5tZXRob2RcblxuICAgIGNvbnN0IG9mZnNldEJhc2UgPSBvZmZzZXRNZXRob2QgPT09IE1FVEhPRF9QT1NJVElPTiA/XG4gICAgICB0aGlzLl9nZXRTY3JvbGxUb3AoKSA6XG4gICAgICAwXG5cbiAgICB0aGlzLl9vZmZzZXRzID0gW11cbiAgICB0aGlzLl90YXJnZXRzID0gW11cbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKVxuXG4gICAgY29uc3QgdGFyZ2V0cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfTElOS19JVEVNUywgdGhpcy5fY29uZmlnLnRhcmdldClcblxuICAgIHRhcmdldHMubWFwKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRTZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUodGFyZ2V0U2VsZWN0b3IpIDogbnVsbFxuXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldEJDUiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBpZiAodGFyZ2V0QkNSLndpZHRoIHx8IHRhcmdldEJDUi5oZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgTWFuaXB1bGF0b3Jbb2Zmc2V0TWV0aG9kXSh0YXJnZXQpLnRvcCArIG9mZnNldEJhc2UsXG4gICAgICAgICAgICB0YXJnZXRTZWxlY3RvclxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0pXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSlcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLl9vZmZzZXRzLnB1c2goaXRlbVswXSlcbiAgICAgICAgdGhpcy5fdGFyZ2V0cy5wdXNoKGl0ZW1bMV0pXG4gICAgICB9KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX3Njcm9sbEVsZW1lbnQsIEVWRU5UX0tFWSlcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBjb25maWcudGFyZ2V0ID0gZ2V0RWxlbWVudChjb25maWcudGFyZ2V0KSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldFNjcm9sbFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93ID9cbiAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQucGFnZVlPZmZzZXQgOlxuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3BcbiAgfVxuXG4gIF9nZXRTY3JvbGxIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IE1hdGgubWF4KFxuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgX2dldE9mZnNldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93ID9cbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodCA6XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICB9XG5cbiAgX3Byb2Nlc3MoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgKyB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcbiAgICBjb25zdCBtYXhTY3JvbGwgPSB0aGlzLl9jb25maWcub2Zmc2V0ICsgc2Nyb2xsSGVpZ2h0IC0gdGhpcy5fZ2V0T2Zmc2V0SGVpZ2h0KClcblxuICAgIGlmICh0aGlzLl9zY3JvbGxIZWlnaHQgIT09IHNjcm9sbEhlaWdodCkge1xuICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsVG9wID49IG1heFNjcm9sbCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0c1t0aGlzLl90YXJnZXRzLmxlbmd0aCAtIDFdXG5cbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQpXG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgJiYgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1swXSAmJiB0aGlzLl9vZmZzZXRzWzBdID4gMCkge1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgICAgdGhpcy5fY2xlYXIoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX29mZnNldHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICBjb25zdCBpc0FjdGl2ZVRhcmdldCA9IHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGhpcy5fdGFyZ2V0c1tpXSAmJlxuICAgICAgICAgIHNjcm9sbFRvcCA+PSB0aGlzLl9vZmZzZXRzW2ldICYmXG4gICAgICAgICAgKHR5cGVvZiB0aGlzLl9vZmZzZXRzW2kgKyAxXSA9PT0gJ3VuZGVmaW5lZCcgfHwgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1tpICsgMV0pXG5cbiAgICAgIGlmIChpc0FjdGl2ZVRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl90YXJnZXRzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hY3RpdmF0ZSh0YXJnZXQpIHtcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXRcblxuICAgIHRoaXMuX2NsZWFyKClcblxuICAgIGNvbnN0IHF1ZXJpZXMgPSBTRUxFQ1RPUl9MSU5LX0lURU1TLnNwbGl0KCcsJylcbiAgICAgIC5tYXAoc2VsZWN0b3IgPT4gYCR7c2VsZWN0b3J9W2RhdGEtYnMtdGFyZ2V0PVwiJHt0YXJnZXR9XCJdLCR7c2VsZWN0b3J9W2hyZWY9XCIke3RhcmdldH1cIl1gKVxuXG4gICAgY29uc3QgbGluayA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUocXVlcmllcy5qb2luKCcsJyksIHRoaXMuX2NvbmZpZy50YXJnZXQpXG5cbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fSVRFTSkpIHtcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCBsaW5rLmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgU2VsZWN0b3JFbmdpbmUucGFyZW50cyhsaW5rLCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUClcbiAgICAgICAgLmZvckVhY2gobGlzdEdyb3VwID0+IHtcbiAgICAgICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICAgICAgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU31gKVxuICAgICAgICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuXG4gICAgICAgICAgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZSB3aGVuIC5uYXYtbGluayBpcyBpbnNpZGUgLm5hdi1pdGVtXG4gICAgICAgICAgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIFNFTEVDVE9SX05BVl9JVEVNUylcbiAgICAgICAgICAgIC5mb3JFYWNoKG5hdkl0ZW0gPT4ge1xuICAgICAgICAgICAgICBTZWxlY3RvckVuZ2luZS5jaGlsZHJlbihuYXZJdGVtLCBTRUxFQ1RPUl9OQVZfTElOS1MpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9zY3JvbGxFbGVtZW50LCBFVkVOVF9BQ1RJVkFURSwge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGFyZ2V0XG4gICAgfSlcbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0xJTktfSVRFTVMsIHRoaXMuX2NvbmZpZy50YXJnZXQpXG4gICAgICAuZmlsdGVyKG5vZGUgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgLmZvckVhY2gobm9kZSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfU1BZKVxuICAgIC5mb3JFYWNoKHNweSA9PiBuZXcgU2Nyb2xsU3B5KHNweSkpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuU2Nyb2xsU3B5IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFNjcm9sbFNweSlcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjEuMyk6IHRhYi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNEaXNhYmxlZCxcbiAgcmVmbG93XG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3RhYidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRhYidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9NRU5VID0gJ2Ryb3Bkb3duLW1lbnUnXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX1VMID0gJzpzY29wZSA+IGxpID4gLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fQUNUSVZFX0NISUxEID0gJzpzY29wZSA+IC5kcm9wZG93bi1tZW51IC5hY3RpdmUnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgc2hvdygpIHtcbiAgICBpZiAoKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAmJlxuICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJlxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHByZXZpb3VzXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKVxuXG4gICAgaWYgKGxpc3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBpdGVtU2VsZWN0b3IgPSBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ09MJyA/IFNFTEVDVE9SX0FDVElWRV9VTCA6IFNFTEVDVE9SX0FDVElWRVxuICAgICAgcHJldmlvdXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKGl0ZW1TZWxlY3RvciwgbGlzdEVsZW1lbnQpXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gcHJldmlvdXMgP1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIocHJldmlvdXMsIEVWRU5UX0hJREUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSkgOlxuICAgICAgbnVsbFxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8IChoaWRlRXZlbnQgIT09IG51bGwgJiYgaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl9lbGVtZW50LCBsaXN0RWxlbWVudClcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIocHJldmlvdXMsIEVWRU5UX0hJRERFTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0LCB0YXJnZXQucGFyZW50Tm9kZSwgY29tcGxldGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FjdGl2YXRlKGVsZW1lbnQsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50cyA9IGNvbnRhaW5lciAmJiAoY29udGFpbmVyLm5vZGVOYW1lID09PSAnVUwnIHx8IGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ09MJykgP1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9BQ1RJVkVfVUwsIGNvbnRhaW5lcikgOlxuICAgICAgU2VsZWN0b3JFbmdpbmUuY2hpbGRyZW4oY29udGFpbmVyLCBTRUxFQ1RPUl9BQ1RJVkUpXG5cbiAgICBjb25zdCBhY3RpdmUgPSBhY3RpdmVFbGVtZW50c1swXVxuICAgIGNvbnN0IGlzVHJhbnNpdGlvbmluZyA9IGNhbGxiYWNrICYmIChhY3RpdmUgJiYgYWN0aXZlLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB0aGlzLl90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaylcblxuICAgIGlmIChhY3RpdmUgJiYgaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIGNvbnN0IGRyb3Bkb3duQ2hpbGQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRCwgYWN0aXZlLnBhcmVudE5vZGUpXG5cbiAgICAgIGlmIChkcm9wZG93bkNoaWxkKSB7XG4gICAgICAgIGRyb3Bkb3duQ2hpbGQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgICAgYWN0aXZlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICByZWZsb3coZWxlbWVudClcblxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIH1cblxuICAgIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5ub2RlTmFtZSA9PT0gJ0xJJykge1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcbiAgICB9XG5cbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9NRU5VKSkge1xuICAgICAgY29uc3QgZHJvcGRvd25FbGVtZW50ID0gZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKVxuXG4gICAgICBpZiAoZHJvcGRvd25FbGVtZW50KSB7XG4gICAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCBkcm9wZG93bkVsZW1lbnQpXG4gICAgICAgICAgLmZvckVhY2goZHJvcGRvd24gPT4gZHJvcGRvd24uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSkpXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZGF0YSA9IFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpXG4gIGRhdGEuc2hvdygpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuVGFiIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRhYilcblxuZXhwb3J0IGRlZmF1bHQgVGFiXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjEuMyk6IHRvYXN0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICByZWZsb3csXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucydcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b2FzdCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRvYXN0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfTU9VU0VPVkVSID0gYG1vdXNlb3ZlciR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFT1VUID0gYG1vdXNlb3V0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNPVVQgPSBgZm9jdXNvdXQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9ISURFID0gJ2hpZGUnIC8vIEBkZXByZWNhdGVkIC0ga2VwdCBoZXJlIG9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJ1xuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gIGF1dG9oaWRlOiAnYm9vbGVhbicsXG4gIGRlbGF5OiAnbnVtYmVyJ1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb246IHRydWUsXG4gIGF1dG9oaWRlOiB0cnVlLFxuICBkZWxheTogNTAwMFxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9hc3QgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gZmFsc2VcbiAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gZmFsc2VcbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgc2hvdygpIHtcbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04pXG5cbiAgICAgIHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9ISURFKSAvLyBAZGVwcmVjYXRlZFxuICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2NvbmZpZy5hbmltYXRpb24pXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURFKSAvLyBAZGVwcmVjYXRlZFxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSlcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9tYXliZVNjaGVkdWxlSGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gfHwgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpXG4gIH1cblxuICBfb25JbnRlcmFjdGlvbihldmVudCwgaXNJbnRlcmFjdGluZykge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnbW91c2VvdmVyJzpcbiAgICAgIGNhc2UgJ21vdXNlb3V0JzpcbiAgICAgICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGlzSW50ZXJhY3RpbmdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2ZvY3VzaW4nOlxuICAgICAgY2FzZSAnZm9jdXNvdXQnOlxuICAgICAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZ1xuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoaXNJbnRlcmFjdGluZykge1xuICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgIGlmICh0aGlzLl9lbGVtZW50ID09PSBuZXh0RWxlbWVudCB8fCB0aGlzLl9lbGVtZW50LmNvbnRhaW5zKG5leHRFbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVkVSLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpXG4gIH1cblxuICBfY2xlYXJUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFRvYXN0LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihUb2FzdClcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlRvYXN0IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvYXN0KVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/js/bootstrap.esm.js
`)}}));var flushPending=!1,flushing=!1,queue=[],lastFlushedIndex=-1;function scheduler(t){queueJob(t)}function queueJob(t){queue.includes(t)||queue.push(t),queueFlush()}function dequeueJob(t){let e=queue.indexOf(t);e!==-1&&e>lastFlushedIndex&&queue.splice(e,1)}function queueFlush(){!flushing&&!flushPending&&(flushPending=!0,queueMicrotask(flushJobs))}function flushJobs(){flushPending=!1,flushing=!0;for(let t=0;t<queue.length;t++)queue[t](),lastFlushedIndex=t;queue.length=0,lastFlushedIndex=-1,flushing=!1}var reactive,effect,release,raw,shouldSchedule=!0;function disableEffectScheduling(t){shouldSchedule=!1,t(),shouldSchedule=!0}function setReactivityEngine(t){reactive=t.reactive,release=t.release,effect=e=>t.effect(e,{scheduler:n=>{shouldSchedule?scheduler(n):n()}}),raw=t.raw}function overrideEffect(t){effect=t}function elementBoundEffect(t){let e=()=>{};return[l=>{let i=effect(l);return t._x_effects||(t._x_effects=new Set,t._x_runEffects=()=>{t._x_effects.forEach(s=>s())}),t._x_effects.add(i),e=()=>{i!==void 0&&(t._x_effects.delete(i),release(i))},i},()=>{e()}]}function watch(t,e){let n=!0,l,i=effect(()=>{let s=t();JSON.stringify(s),n?l=s:queueMicrotask(()=>{e(s,l),l=s}),n=!1});return()=>release(i)}var onAttributeAddeds=[],onElRemoveds=[],onElAddeds=[];function onElAdded(t){onElAddeds.push(t)}function onElRemoved(t,e){typeof e=="function"?(t._x_cleanups||(t._x_cleanups=[]),t._x_cleanups.push(e)):(e=t,onElRemoveds.push(e))}function onAttributesAdded(t){onAttributeAddeds.push(t)}function onAttributeRemoved(t,e,n){t._x_attributeCleanups||(t._x_attributeCleanups={}),t._x_attributeCleanups[e]||(t._x_attributeCleanups[e]=[]),t._x_attributeCleanups[e].push(n)}function cleanupAttributes(t,e){t._x_attributeCleanups&&Object.entries(t._x_attributeCleanups).forEach(([n,l])=>{(e===void 0||e.includes(n))&&(l.forEach(i=>i()),delete t._x_attributeCleanups[n])})}function cleanupElement(t){if(t._x_cleanups)for(;t._x_cleanups.length;)t._x_cleanups.pop()()}var observer=new MutationObserver(onMutate),currentlyObserving=!1;function startObservingMutations(){observer.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),currentlyObserving=!0}function stopObservingMutations(){flushObserver(),observer.disconnect(),currentlyObserving=!1}var queuedMutations=[];function flushObserver(){let t=observer.takeRecords();queuedMutations.push(()=>t.length>0&&onMutate(t));let e=queuedMutations.length;queueMicrotask(()=>{if(queuedMutations.length===e)for(;queuedMutations.length>0;)queuedMutations.shift()()})}function mutateDom(t){if(!currentlyObserving)return t();stopObservingMutations();let e=t();return startObservingMutations(),e}var isCollecting=!1,deferredMutations=[];function deferMutations(){isCollecting=!0}function flushAndStopDeferringMutations(){isCollecting=!1,onMutate(deferredMutations),deferredMutations=[]}function onMutate(t){if(isCollecting){deferredMutations=deferredMutations.concat(t);return}let e=new Set,n=new Set,l=new Map,i=new Map;for(let s=0;s<t.length;s++)if(!t[s].target._x_ignoreMutationObserver&&(t[s].type==="childList"&&(t[s].addedNodes.forEach(B=>B.nodeType===1&&e.add(B)),t[s].removedNodes.forEach(B=>B.nodeType===1&&n.add(B))),t[s].type==="attributes")){let B=t[s].target,Q=t[s].attributeName,c=t[s].oldValue,a=()=>{l.has(B)||l.set(B,[]),l.get(B).push({name:Q,value:B.getAttribute(Q)})},F=()=>{i.has(B)||i.set(B,[]),i.get(B).push(Q)};B.hasAttribute(Q)&&c===null?a():B.hasAttribute(Q)?(F(),a()):F()}i.forEach((s,B)=>{cleanupAttributes(B,s)}),l.forEach((s,B)=>{onAttributeAddeds.forEach(Q=>Q(B,s))});for(let s of n)e.has(s)||onElRemoveds.forEach(B=>B(s));e.forEach(s=>{s._x_ignoreSelf=!0,s._x_ignore=!0});for(let s of e)n.has(s)||s.isConnected&&(delete s._x_ignoreSelf,delete s._x_ignore,onElAddeds.forEach(B=>B(s)),s._x_ignore=!0,s._x_ignoreSelf=!0);e.forEach(s=>{delete s._x_ignoreSelf,delete s._x_ignore}),e=null,n=null,l=null,i=null}function scope(t){return mergeProxies(closestDataStack(t))}function addScopeToNode(t,e,n){return t._x_dataStack=[e,...closestDataStack(n||t)],()=>{t._x_dataStack=t._x_dataStack.filter(l=>l!==e)}}function closestDataStack(t){return t._x_dataStack?t._x_dataStack:typeof ShadowRoot=="function"&&t instanceof ShadowRoot?closestDataStack(t.host):t.parentNode?closestDataStack(t.parentNode):[]}function mergeProxies(t){return new Proxy({objects:t},mergeProxyTrap)}var mergeProxyTrap={ownKeys({objects:t}){return Array.from(new Set(t.flatMap(e=>Object.keys(e))))},has({objects:t},e){return e==Symbol.unscopables?!1:t.some(n=>Object.prototype.hasOwnProperty.call(n,e)||Reflect.has(n,e))},get({objects:t},e,n){return e=="toJSON"?collapseProxies:Reflect.get(t.find(l=>Reflect.has(l,e))||{},e,n)},set({objects:t},e,n,l){const i=t.find(B=>Object.prototype.hasOwnProperty.call(B,e))||t[t.length-1],s=Object.getOwnPropertyDescriptor(i,e);return s!=null&&s.set&&(s!=null&&s.get)?Reflect.set(i,e,n,l):Reflect.set(i,e,n)}};function collapseProxies(){return Reflect.ownKeys(this).reduce((e,n)=>(e[n]=Reflect.get(this,n),e),{})}function initInterceptors(t){let e=l=>typeof l=="object"&&!Array.isArray(l)&&l!==null,n=(l,i="")=>{Object.entries(Object.getOwnPropertyDescriptors(l)).forEach(([s,{value:B,enumerable:Q}])=>{if(Q===!1||B===void 0||typeof B=="object"&&B!==null&&B.__v_skip)return;let c=i===""?s:`${i}.${s}`;typeof B=="object"&&B!==null&&B._x_interceptor?l[s]=B.initialize(t,c,s):e(B)&&B!==l&&!(B instanceof Element)&&n(B,c)})};return n(t)}function interceptor(t,e=()=>{}){let n={initialValue:void 0,_x_interceptor:!0,initialize(l,i,s){return t(this.initialValue,()=>get(l,i),B=>set(l,i,B),i,s)}};return e(n),l=>{if(typeof l=="object"&&l!==null&&l._x_interceptor){let i=n.initialize.bind(n);n.initialize=(s,B,Q)=>{let c=l.initialize(s,B,Q);return n.initialValue=c,i(s,B,Q)}}else n.initialValue=l;return n}}function get(t,e){return e.split(".").reduce((n,l)=>n[l],t)}function set(t,e,n){if(typeof e=="string"&&(e=e.split(".")),e.length===1)t[e[0]]=n;else{if(e.length===0)throw error;return t[e[0]]||(t[e[0]]={}),set(t[e[0]],e.slice(1),n)}}var magics={};function magic(t,e){magics[t]=e}function injectMagics(t,e){return Object.entries(magics).forEach(([n,l])=>{let i=null;function s(){if(i)return i;{let[B,Q]=getElementBoundUtilities(e);return i={interceptor,...B},onElRemoved(e,Q),i}}Object.defineProperty(t,`$${n}`,{get(){return l(e,s())},enumerable:!1})}),t}function tryCatch(t,e,n,...l){try{return n(...l)}catch(i){handleError(i,t,e)}}function handleError(t,e,n=void 0){t=Object.assign(t??{message:"No error message given."},{el:e,expression:n}),console.warn(`Alpine Expression Error: ${t.message}

${n?'Expression: "'+n+`"

`:""}`,e),setTimeout(()=>{throw t},0)}var shouldAutoEvaluateFunctions=!0;function dontAutoEvaluateFunctions(t){let e=shouldAutoEvaluateFunctions;shouldAutoEvaluateFunctions=!1;let n=t();return shouldAutoEvaluateFunctions=e,n}function evaluate(t,e,n={}){let l;return evaluateLater(t,e)(i=>l=i,n),l}function evaluateLater(...t){return theEvaluatorFunction(...t)}var theEvaluatorFunction=normalEvaluator;function setEvaluator(t){theEvaluatorFunction=t}function normalEvaluator(t,e){let n={};injectMagics(n,t);let l=[n,...closestDataStack(t)],i=typeof e=="function"?generateEvaluatorFromFunction(l,e):generateEvaluatorFromString(l,e,t);return tryCatch.bind(null,t,e,i)}function generateEvaluatorFromFunction(t,e){return(n=()=>{},{scope:l={},params:i=[]}={})=>{let s=e.apply(mergeProxies([l,...t]),i);runIfTypeOfFunction(n,s)}}var evaluatorMemo={};function generateFunctionFromString(t,e){if(evaluatorMemo[t])return evaluatorMemo[t];let n=Object.getPrototypeOf(async function(){}).constructor,l=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t,s=(()=>{try{let B=new n(["__self","scope"],`with (scope) { __self.result = ${l} }; __self.finished = true; return __self.result;`);return Object.defineProperty(B,"name",{value:`[Alpine] ${t}`}),B}catch(B){return handleError(B,e,t),Promise.resolve()}})();return evaluatorMemo[t]=s,s}function generateEvaluatorFromString(t,e,n){let l=generateFunctionFromString(e,n);return(i=()=>{},{scope:s={},params:B=[]}={})=>{l.result=void 0,l.finished=!1;let Q=mergeProxies([s,...t]);if(typeof l=="function"){let c=l(l,Q).catch(a=>handleError(a,n,e));l.finished?(runIfTypeOfFunction(i,l.result,Q,B,n),l.result=void 0):c.then(a=>{runIfTypeOfFunction(i,a,Q,B,n)}).catch(a=>handleError(a,n,e)).finally(()=>l.result=void 0)}}}function runIfTypeOfFunction(t,e,n,l,i){if(shouldAutoEvaluateFunctions&&typeof e=="function"){let s=e.apply(n,l);s instanceof Promise?s.then(B=>runIfTypeOfFunction(t,B,n,l)).catch(B=>handleError(B,i,e)):t(s)}else typeof e=="object"&&e instanceof Promise?e.then(s=>t(s)):t(e)}var prefixAsString="x-";function prefix(t=""){return prefixAsString+t}function setPrefix(t){prefixAsString=t}var directiveHandlers={};function directive(t,e){return directiveHandlers[t]=e,{before(n){if(!directiveHandlers[n]){console.warn(String.raw`Cannot find directive \`${n}\`. \`${t}\` will use the default order of execution`);return}const l=directiveOrder.indexOf(n);directiveOrder.splice(l>=0?l:directiveOrder.indexOf("DEFAULT"),0,t)}}}function directiveExists(t){return Object.keys(directiveHandlers).includes(t)}function directives(t,e,n){if(e=Array.from(e),t._x_virtualDirectives){let s=Object.entries(t._x_virtualDirectives).map(([Q,c])=>({name:Q,value:c})),B=attributesOnly(s);s=s.map(Q=>B.find(c=>c.name===Q.name)?{name:`x-bind:${Q.name}`,value:`"${Q.value}"`}:Q),e=e.concat(s)}let l={};return e.map(toTransformedAttributes((s,B)=>l[s]=B)).filter(outNonAlpineAttributes).map(toParsedDirectives(l,n)).sort(byPriority).map(s=>getDirectiveHandler(t,s))}function attributesOnly(t){return Array.from(t).map(toTransformedAttributes()).filter(e=>!outNonAlpineAttributes(e))}var isDeferringHandlers=!1,directiveHandlerStacks=new Map,currentHandlerStackKey=Symbol();function deferHandlingDirectives(t){isDeferringHandlers=!0;let e=Symbol();currentHandlerStackKey=e,directiveHandlerStacks.set(e,[]);let n=()=>{for(;directiveHandlerStacks.get(e).length;)directiveHandlerStacks.get(e).shift()();directiveHandlerStacks.delete(e)},l=()=>{isDeferringHandlers=!1,n()};t(n),l()}function getElementBoundUtilities(t){let e=[],n=Q=>e.push(Q),[l,i]=elementBoundEffect(t);return e.push(i),[{Alpine:alpine_default,effect:l,cleanup:n,evaluateLater:evaluateLater.bind(evaluateLater,t),evaluate:evaluate.bind(evaluate,t)},()=>e.forEach(Q=>Q())]}function getDirectiveHandler(t,e){let n=()=>{},l=directiveHandlers[e.type]||n,[i,s]=getElementBoundUtilities(t);onAttributeRemoved(t,e.original,s);let B=()=>{t._x_ignore||t._x_ignoreSelf||(l.inline&&l.inline(t,e,i),l=l.bind(l,t,e,i),isDeferringHandlers?directiveHandlerStacks.get(currentHandlerStackKey).push(l):l())};return B.runCleanups=s,B}var startingWith=(t,e)=>({name:n,value:l})=>(n.startsWith(t)&&(n=n.replace(t,e)),{name:n,value:l}),into=t=>t;function toTransformedAttributes(t=()=>{}){return({name:e,value:n})=>{let{name:l,value:i}=attributeTransformers.reduce((s,B)=>B(s),{name:e,value:n});return l!==e&&t(l,e),{name:l,value:i}}}var attributeTransformers=[];function mapAttributes(t){attributeTransformers.push(t)}function outNonAlpineAttributes({name:t}){return alpineAttributeRegex().test(t)}var alpineAttributeRegex=()=>new RegExp(`^${prefixAsString}([^:^.]+)\\b`);function toParsedDirectives(t,e){return({name:n,value:l})=>{let i=n.match(alpineAttributeRegex()),s=n.match(/:([a-zA-Z0-9\-_:]+)/),B=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],Q=e||t[n]||n;return{type:i?i[1]:null,value:s?s[1]:null,modifiers:B.map(c=>c.replace(".","")),expression:l,original:Q}}}var DEFAULT="DEFAULT",directiveOrder=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",DEFAULT,"teleport"];function byPriority(t,e){let n=directiveOrder.indexOf(t.type)===-1?DEFAULT:t.type,l=directiveOrder.indexOf(e.type)===-1?DEFAULT:e.type;return directiveOrder.indexOf(n)-directiveOrder.indexOf(l)}function dispatch(t,e,n={}){t.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0,cancelable:!0}))}function walk(t,e){if(typeof ShadowRoot=="function"&&t instanceof ShadowRoot){Array.from(t.children).forEach(i=>walk(i,e));return}let n=!1;if(e(t,()=>n=!0),n)return;let l=t.firstElementChild;for(;l;)walk(l,e),l=l.nextElementSibling}function warn(t,...e){console.warn(`Alpine Warning: ${t}`,...e)}var started=!1;function start(){started&&warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),started=!0,document.body||warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),dispatch(document,"alpine:init"),dispatch(document,"alpine:initializing"),startObservingMutations(),onElAdded(e=>initTree(e,walk)),onElRemoved(e=>destroyTree(e)),onAttributesAdded((e,n)=>{directives(e,n).forEach(l=>l())});let t=e=>!closestRoot(e.parentElement,!0);Array.from(document.querySelectorAll(allSelectors().join(","))).filter(t).forEach(e=>{initTree(e)}),dispatch(document,"alpine:initialized"),setTimeout(()=>{warnAboutMissingPlugins()})}var rootSelectorCallbacks=[],initSelectorCallbacks=[];function rootSelectors(){return rootSelectorCallbacks.map(t=>t())}function allSelectors(){return rootSelectorCallbacks.concat(initSelectorCallbacks).map(t=>t())}function addRootSelector(t){rootSelectorCallbacks.push(t)}function addInitSelector(t){initSelectorCallbacks.push(t)}function closestRoot(t,e=!1){return findClosest(t,n=>{if((e?allSelectors():rootSelectors()).some(i=>n.matches(i)))return!0})}function findClosest(t,e){if(t){if(e(t))return t;if(t._x_teleportBack&&(t=t._x_teleportBack),!!t.parentElement)return findClosest(t.parentElement,e)}}function isRoot(t){return rootSelectors().some(e=>t.matches(e))}var initInterceptors2=[];function interceptInit(t){initInterceptors2.push(t)}function initTree(t,e=walk,n=()=>{}){deferHandlingDirectives(()=>{e(t,(l,i)=>{n(l,i),initInterceptors2.forEach(s=>s(l,i)),directives(l,l.attributes).forEach(s=>s()),l._x_ignore&&i()})})}function destroyTree(t,e=walk){e(t,n=>{cleanupAttributes(n),cleanupElement(n)})}function warnAboutMissingPlugins(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([e,n,l])=>{directiveExists(n)||l.some(i=>{if(document.querySelector(i))return warn(`found "${i}", but missing ${e} plugin`),!0})})}var tickStack=[],isHolding=!1;function nextTick(t=()=>{}){return queueMicrotask(()=>{isHolding||setTimeout(()=>{releaseNextTicks()})}),new Promise(e=>{tickStack.push(()=>{t(),e()})})}function releaseNextTicks(){for(isHolding=!1;tickStack.length;)tickStack.shift()()}function holdNextTicks(){isHolding=!0}function setClasses(t,e){return Array.isArray(e)?setClassesFromString(t,e.join(" ")):typeof e=="object"&&e!==null?setClassesFromObject(t,e):typeof e=="function"?setClasses(t,e()):setClassesFromString(t,e)}function setClassesFromString(t,e){let n=i=>i.split(" ").filter(s=>!t.classList.contains(s)).filter(Boolean),l=i=>(t.classList.add(...i),()=>{t.classList.remove(...i)});return e=e===!0?e="":e||"",l(n(e))}function setClassesFromObject(t,e){let n=Q=>Q.split(" ").filter(Boolean),l=Object.entries(e).flatMap(([Q,c])=>c?n(Q):!1).filter(Boolean),i=Object.entries(e).flatMap(([Q,c])=>c?!1:n(Q)).filter(Boolean),s=[],B=[];return i.forEach(Q=>{t.classList.contains(Q)&&(t.classList.remove(Q),B.push(Q))}),l.forEach(Q=>{t.classList.contains(Q)||(t.classList.add(Q),s.push(Q))}),()=>{B.forEach(Q=>t.classList.add(Q)),s.forEach(Q=>t.classList.remove(Q))}}function setStyles(t,e){return typeof e=="object"&&e!==null?setStylesFromObject(t,e):setStylesFromString(t,e)}function setStylesFromObject(t,e){let n={};return Object.entries(e).forEach(([l,i])=>{n[l]=t.style[l],l.startsWith("--")||(l=kebabCase(l)),t.style.setProperty(l,i)}),setTimeout(()=>{t.style.length===0&&t.removeAttribute("style")}),()=>{setStyles(t,n)}}function setStylesFromString(t,e){let n=t.getAttribute("style",e);return t.setAttribute("style",e),()=>{t.setAttribute("style",n||"")}}function kebabCase(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function once(t,e=()=>{}){let n=!1;return function(){n?e.apply(this,arguments):(n=!0,t.apply(this,arguments))}}directive("transition",(t,{value:e,modifiers:n,expression:l},{evaluate:i})=>{typeof l=="function"&&(l=i(l)),l!==!1&&(!l||typeof l=="boolean"?registerTransitionsFromHelper(t,n,e):registerTransitionsFromClassString(t,l,e))});function registerTransitionsFromClassString(t,e,n){registerTransitionObject(t,setClasses,""),{enter:i=>{t._x_transition.enter.during=i},"enter-start":i=>{t._x_transition.enter.start=i},"enter-end":i=>{t._x_transition.enter.end=i},leave:i=>{t._x_transition.leave.during=i},"leave-start":i=>{t._x_transition.leave.start=i},"leave-end":i=>{t._x_transition.leave.end=i}}[n](e)}function registerTransitionsFromHelper(t,e,n){registerTransitionObject(t,setStyles);let l=!e.includes("in")&&!e.includes("out")&&!n,i=l||e.includes("in")||["enter"].includes(n),s=l||e.includes("out")||["leave"].includes(n);e.includes("in")&&!l&&(e=e.filter((g,I)=>I<e.indexOf("out"))),e.includes("out")&&!l&&(e=e.filter((g,I)=>I>e.indexOf("out")));let B=!e.includes("opacity")&&!e.includes("scale"),Q=B||e.includes("opacity"),c=B||e.includes("scale"),a=Q?0:1,F=c?modifierValue(e,"scale",95)/100:1,o=modifierValue(e,"delay",0)/1e3,r=modifierValue(e,"origin","center"),U="opacity, transform",b=modifierValue(e,"duration",150)/1e3,u=modifierValue(e,"duration",75)/1e3,d="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(t._x_transition.enter.during={transformOrigin:r,transitionDelay:`${o}s`,transitionProperty:U,transitionDuration:`${b}s`,transitionTimingFunction:d},t._x_transition.enter.start={opacity:a,transform:`scale(${F})`},t._x_transition.enter.end={opacity:1,transform:"scale(1)"}),s&&(t._x_transition.leave.during={transformOrigin:r,transitionDelay:`${o}s`,transitionProperty:U,transitionDuration:`${u}s`,transitionTimingFunction:d},t._x_transition.leave.start={opacity:1,transform:"scale(1)"},t._x_transition.leave.end={opacity:a,transform:`scale(${F})`})}function registerTransitionObject(t,e,n={}){t._x_transition||(t._x_transition={enter:{during:n,start:n,end:n},leave:{during:n,start:n,end:n},in(l=()=>{},i=()=>{}){transition(t,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},l,i)},out(l=()=>{},i=()=>{}){transition(t,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},l,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(t,e,n,l){const i=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let s=()=>i(n);if(e){t._x_transition&&(t._x_transition.enter||t._x_transition.leave)?t._x_transition.enter&&(Object.entries(t._x_transition.enter.during).length||Object.entries(t._x_transition.enter.start).length||Object.entries(t._x_transition.enter.end).length)?t._x_transition.in(n):s():t._x_transition?t._x_transition.in(n):s();return}t._x_hidePromise=t._x_transition?new Promise((B,Q)=>{t._x_transition.out(()=>{},()=>B(l)),t._x_transitioning&&t._x_transitioning.beforeCancel(()=>Q({isFromCancelledTransition:!0}))}):Promise.resolve(l),queueMicrotask(()=>{let B=closestHide(t);B?(B._x_hideChildren||(B._x_hideChildren=[]),B._x_hideChildren.push(t)):i(()=>{let Q=c=>{let a=Promise.all([c._x_hidePromise,...(c._x_hideChildren||[]).map(Q)]).then(([F])=>F==null?void 0:F());return delete c._x_hidePromise,delete c._x_hideChildren,a};Q(t).catch(c=>{if(!c.isFromCancelledTransition)throw c})})})};function closestHide(t){let e=t.parentNode;if(e)return e._x_hidePromise?e:closestHide(e)}function transition(t,e,{during:n,start:l,end:i}={},s=()=>{},B=()=>{}){if(t._x_transitioning&&t._x_transitioning.cancel(),Object.keys(n).length===0&&Object.keys(l).length===0&&Object.keys(i).length===0){s(),B();return}let Q,c,a;performTransition(t,{start(){Q=e(t,l)},during(){c=e(t,n)},before:s,end(){Q(),a=e(t,i)},after:B,cleanup(){c(),a()}})}function performTransition(t,e){let n,l,i,s=once(()=>{mutateDom(()=>{n=!0,l||e.before(),i||(e.end(),releaseNextTicks()),e.after(),t.isConnected&&e.cleanup(),delete t._x_transitioning})});t._x_transitioning={beforeCancels:[],beforeCancel(B){this.beforeCancels.push(B)},cancel:once(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();s()}),finish:s},mutateDom(()=>{e.start(),e.during()}),holdNextTicks(),requestAnimationFrame(()=>{if(n)return;let B=Number(getComputedStyle(t).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,Q=Number(getComputedStyle(t).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;B===0&&(B=Number(getComputedStyle(t).animationDuration.replace("s",""))*1e3),mutateDom(()=>{e.before()}),l=!0,requestAnimationFrame(()=>{n||(mutateDom(()=>{e.end()}),releaseNextTicks(),setTimeout(t._x_transitioning.finish,B+Q),i=!0)})})}function modifierValue(t,e,n){if(t.indexOf(e)===-1)return n;const l=t[t.indexOf(e)+1];if(!l||e==="scale"&&isNaN(l))return n;if(e==="duration"||e==="delay"){let i=l.match(/([0-9]+)ms/);if(i)return i[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(t[t.indexOf(e)+2])?[l,t[t.indexOf(e)+2]].join(" "):l}var isCloning=!1;function skipDuringClone(t,e=()=>{}){return(...n)=>isCloning?e(...n):t(...n)}function onlyDuringClone(t){return(...e)=>isCloning&&t(...e)}var interceptors=[];function interceptClone(t){interceptors.push(t)}function cloneNode(t,e){interceptors.forEach(n=>n(t,e)),isCloning=!0,dontRegisterReactiveSideEffects(()=>{initTree(e,(n,l)=>{l(n,()=>{})})}),isCloning=!1}var isCloningLegacy=!1;function clone$1(t,e){e._x_dataStack||(e._x_dataStack=t._x_dataStack),isCloning=!0,isCloningLegacy=!0,dontRegisterReactiveSideEffects(()=>{cloneTree(e)}),isCloning=!1,isCloningLegacy=!1}function cloneTree(t){let e=!1;initTree(t,(l,i)=>{walk(l,(s,B)=>{if(e&&isRoot(s))return B();e=!0,i(s,B)})})}function dontRegisterReactiveSideEffects(t){let e=effect;overrideEffect((n,l)=>{let i=e(n);return release(i),()=>{}}),t(),overrideEffect(e)}function bind(t,e,n,l=[]){switch(t._x_bindings||(t._x_bindings=reactive({})),t._x_bindings[e]=n,e=l.includes("camel")?camelCase(e):e,e){case"value":bindInputValue(t,n);break;case"style":bindStyles(t,n);break;case"class":bindClasses(t,n);break;case"selected":case"checked":bindAttributeAndProperty(t,e,n);break;default:bindAttribute(t,e,n);break}}function bindInputValue(t,e){if(t.type==="radio")t.attributes.value===void 0&&(t.value=e),window.fromModel&&(typeof e=="boolean"?t.checked=safeParseBoolean(t.value)===e:t.checked=checkedAttrLooseCompare(t.value,e));else if(t.type==="checkbox")Number.isInteger(e)?t.value=e:!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?t.value=String(e):Array.isArray(e)?t.checked=e.some(n=>checkedAttrLooseCompare(n,t.value)):t.checked=!!e;else if(t.tagName==="SELECT")updateSelect(t,e);else{if(t.value===e)return;t.value=e===void 0?"":e}}function bindClasses(t,e){t._x_undoAddedClasses&&t._x_undoAddedClasses(),t._x_undoAddedClasses=setClasses(t,e)}function bindStyles(t,e){t._x_undoAddedStyles&&t._x_undoAddedStyles(),t._x_undoAddedStyles=setStyles(t,e)}function bindAttributeAndProperty(t,e,n){bindAttribute(t,e,n),setPropertyIfChanged(t,e,n)}function bindAttribute(t,e,n){[null,void 0,!1].includes(n)&&attributeShouldntBePreservedIfFalsy(e)?t.removeAttribute(e):(isBooleanAttr(e)&&(n=e),setIfChanged(t,e,n))}function setIfChanged(t,e,n){t.getAttribute(e)!=n&&t.setAttribute(e,n)}function setPropertyIfChanged(t,e,n){t[e]!==n&&(t[e]=n)}function updateSelect(t,e){const n=[].concat(e).map(l=>l+"");Array.from(t.options).forEach(l=>{l.selected=n.includes(l.value)})}function camelCase(t){return t.toLowerCase().replace(/-(\w)/g,(e,n)=>n.toUpperCase())}function checkedAttrLooseCompare(t,e){return t==e}function safeParseBoolean(t){return[1,"1","true","on","yes",!0].includes(t)?!0:[0,"0","false","off","no",!1].includes(t)?!1:t?!!t:null}function isBooleanAttr(t){return["disabled","checked","required","readonly","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(t)}function attributeShouldntBePreservedIfFalsy(t){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(t)}function getBinding(t,e,n){return t._x_bindings&&t._x_bindings[e]!==void 0?t._x_bindings[e]:getAttributeBinding(t,e,n)}function extractProp(t,e,n,l=!0){if(t._x_bindings&&t._x_bindings[e]!==void 0)return t._x_bindings[e];if(t._x_inlineBindings&&t._x_inlineBindings[e]!==void 0){let i=t._x_inlineBindings[e];return i.extract=l,dontAutoEvaluateFunctions(()=>evaluate(t,i.expression))}return getAttributeBinding(t,e,n)}function getAttributeBinding(t,e,n){let l=t.getAttribute(e);return l===null?typeof n=="function"?n():n:l===""?!0:isBooleanAttr(e)?!![e,"true"].includes(l):l}function debounce(t,e){var n;return function(){var l=this,i=arguments,s=function(){n=null,t.apply(l,i)};clearTimeout(n),n=setTimeout(s,e)}}function throttle$1(t,e){let n;return function(){let l=this,i=arguments;n||(t.apply(l,i),n=!0,setTimeout(()=>n=!1,e))}}function entangle({get:t,set:e},{get:n,set:l}){let i=!0,s,B=effect(()=>{let Q=t(),c=n();if(i)l(cloneIfObject(Q)),i=!1;else{let a=JSON.stringify(Q),F=JSON.stringify(c);a!==s?l(cloneIfObject(Q)):a!==F&&e(cloneIfObject(c))}s=JSON.stringify(t()),JSON.stringify(n())});return()=>{release(B)}}function cloneIfObject(t){return typeof t=="object"?JSON.parse(JSON.stringify(t)):t}function plugin(t){(Array.isArray(t)?t:[t]).forEach(n=>n(alpine_default))}var stores={},isReactive=!1;function store(t,e){if(isReactive||(stores=reactive(stores),isReactive=!0),e===void 0)return stores[t];stores[t]=e,typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&stores[t].init(),initInterceptors(stores[t])}function getStores(){return stores}var binds={};function bind2(t,e){let n=typeof e!="function"?()=>e:e;return t instanceof Element?applyBindingsObject(t,n()):(binds[t]=n,()=>{})}function injectBindingProviders(t){return Object.entries(binds).forEach(([e,n])=>{Object.defineProperty(t,e,{get(){return(...l)=>n(...l)}})}),t}function applyBindingsObject(t,e,n){let l=[];for(;l.length;)l.pop()();let i=Object.entries(e).map(([B,Q])=>({name:B,value:Q})),s=attributesOnly(i);return i=i.map(B=>s.find(Q=>Q.name===B.name)?{name:`x-bind:${B.name}`,value:`"${B.value}"`}:B),directives(t,i,n).map(B=>{l.push(B.runCleanups),B()}),()=>{for(;l.length;)l.pop()()}}var datas={};function data(t,e){datas[t]=e}function injectDataProviders(t,e){return Object.entries(datas).forEach(([n,l])=>{Object.defineProperty(t,n,{get(){return(...i)=>l.bind(e)(...i)},enumerable:!1})}),t}var Alpine={get reactive(){return reactive},get release(){return release},get effect(){return effect},get raw(){return raw},version:"3.14.0",flushAndStopDeferringMutations,dontAutoEvaluateFunctions,disableEffectScheduling,startObservingMutations,stopObservingMutations,setReactivityEngine,onAttributeRemoved,onAttributesAdded,closestDataStack,skipDuringClone,onlyDuringClone,addRootSelector,addInitSelector,interceptClone,addScopeToNode,deferMutations,mapAttributes,evaluateLater,interceptInit,setEvaluator,mergeProxies,extractProp,findClosest,onElRemoved,closestRoot,destroyTree,interceptor,transition,setStyles,mutateDom,directive,entangle,throttle:throttle$1,debounce,evaluate,initTree,nextTick,prefixed:prefix,prefix:setPrefix,plugin,magic,store,start,clone:clone$1,cloneNode,bound:getBinding,$data:scope,watch,walk,data,bind:bind2},alpine_default=Alpine;function makeMap(t,e){const n=Object.create(null),l=t.split(",");for(let i=0;i<l.length;i++)n[l[i]]=!0;return i=>!!n[i]}var EMPTY_OBJ=Object.freeze({}),hasOwnProperty=Object.prototype.hasOwnProperty,hasOwn=(t,e)=>hasOwnProperty.call(t,e),isArray=Array.isArray,isMap=t=>toTypeString(t)==="[object Map]",isString=t=>typeof t=="string",isSymbol=t=>typeof t=="symbol",isObject=t=>t!==null&&typeof t=="object",objectToString=Object.prototype.toString,toTypeString=t=>objectToString.call(t),toRawType=t=>toTypeString(t).slice(8,-1),isIntegerKey=t=>isString(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cacheStringFunction=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},capitalize=cacheStringFunction(t=>t.charAt(0).toUpperCase()+t.slice(1)),hasChanged=(t,e)=>t!==e&&(t===t||e===e),targetMap=new WeakMap,effectStack=[],activeEffect,ITERATE_KEY=Symbol("iterate"),MAP_KEY_ITERATE_KEY=Symbol("Map key iterate");function isEffect(t){return t&&t._isEffect===!0}function effect2(t,e=EMPTY_OBJ){isEffect(t)&&(t=t.raw);const n=createReactiveEffect(t,e);return e.lazy||n(),n}function stop(t){t.active&&(cleanup(t),t.options.onStop&&t.options.onStop(),t.active=!1)}var uid=0;function createReactiveEffect(t,e){const n=function(){if(!n.active)return t();if(!effectStack.includes(n)){cleanup(n);try{return enableTracking(),effectStack.push(n),activeEffect=n,t()}finally{effectStack.pop(),resetTracking(),activeEffect=effectStack[effectStack.length-1]}}};return n.id=uid++,n.allowRecurse=!!e.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=t,n.deps=[],n.options=e,n}function cleanup(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}var shouldTrack=!0,trackStack=[];function pauseTracking(){trackStack.push(shouldTrack),shouldTrack=!1}function enableTracking(){trackStack.push(shouldTrack),shouldTrack=!0}function resetTracking(){const t=trackStack.pop();shouldTrack=t===void 0?!0:t}function track(t,e,n){if(!shouldTrack||activeEffect===void 0)return;let l=targetMap.get(t);l||targetMap.set(t,l=new Map);let i=l.get(n);i||l.set(n,i=new Set),i.has(activeEffect)||(i.add(activeEffect),activeEffect.deps.push(i),activeEffect.options.onTrack&&activeEffect.options.onTrack({effect:activeEffect,target:t,type:e,key:n}))}function trigger(t,e,n,l,i,s){const B=targetMap.get(t);if(!B)return;const Q=new Set,c=F=>{F&&F.forEach(o=>{(o!==activeEffect||o.allowRecurse)&&Q.add(o)})};if(e==="clear")B.forEach(c);else if(n==="length"&&isArray(t))B.forEach((F,o)=>{(o==="length"||o>=l)&&c(F)});else switch(n!==void 0&&c(B.get(n)),e){case"add":isArray(t)?isIntegerKey(n)&&c(B.get("length")):(c(B.get(ITERATE_KEY)),isMap(t)&&c(B.get(MAP_KEY_ITERATE_KEY)));break;case"delete":isArray(t)||(c(B.get(ITERATE_KEY)),isMap(t)&&c(B.get(MAP_KEY_ITERATE_KEY)));break;case"set":isMap(t)&&c(B.get(ITERATE_KEY));break}const a=F=>{F.options.onTrigger&&F.options.onTrigger({effect:F,target:t,key:n,type:e,newValue:l,oldValue:i,oldTarget:s}),F.options.scheduler?F.options.scheduler(F):F()};Q.forEach(a)}var isNonTrackableKeys=makeMap("__proto__,__v_isRef,__isVue"),builtInSymbols=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(isSymbol)),get2=createGetter(),readonlyGet=createGetter(!0),arrayInstrumentations=createArrayInstrumentations();function createArrayInstrumentations(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const l=toRaw(this);for(let s=0,B=this.length;s<B;s++)track(l,"get",s+"");const i=l[e](...n);return i===-1||i===!1?l[e](...n.map(toRaw)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pauseTracking();const l=toRaw(this)[e].apply(this,n);return resetTracking(),l}}),t}function createGetter(t=!1,e=!1){return function(l,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_raw"&&s===(t?e?shallowReadonlyMap:readonlyMap:e?shallowReactiveMap:reactiveMap).get(l))return l;const B=isArray(l);if(!t&&B&&hasOwn(arrayInstrumentations,i))return Reflect.get(arrayInstrumentations,i,s);const Q=Reflect.get(l,i,s);return(isSymbol(i)?builtInSymbols.has(i):isNonTrackableKeys(i))||(t||track(l,"get",i),e)?Q:isRef(Q)?!B||!isIntegerKey(i)?Q.value:Q:isObject(Q)?t?readonly(Q):reactive2(Q):Q}}var set2=createSetter();function createSetter(t=!1){return function(n,l,i,s){let B=n[l];if(!t&&(i=toRaw(i),B=toRaw(B),!isArray(n)&&isRef(B)&&!isRef(i)))return B.value=i,!0;const Q=isArray(n)&&isIntegerKey(l)?Number(l)<n.length:hasOwn(n,l),c=Reflect.set(n,l,i,s);return n===toRaw(s)&&(Q?hasChanged(i,B)&&trigger(n,"set",l,i,B):trigger(n,"add",l,i)),c}}function deleteProperty(t,e){const n=hasOwn(t,e),l=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&trigger(t,"delete",e,void 0,l),i}function has(t,e){const n=Reflect.has(t,e);return(!isSymbol(e)||!builtInSymbols.has(e))&&track(t,"has",e),n}function ownKeys$1(t){return track(t,"iterate",isArray(t)?"length":ITERATE_KEY),Reflect.ownKeys(t)}var mutableHandlers={get:get2,set:set2,deleteProperty,has,ownKeys:ownKeys$1},readonlyHandlers={get:readonlyGet,set(t,e){return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},toReactive=t=>isObject(t)?reactive2(t):t,toReadonly=t=>isObject(t)?readonly(t):t,toShallow=t=>t,getProto=t=>Reflect.getPrototypeOf(t);function get$1(t,e,n=!1,l=!1){t=t.__v_raw;const i=toRaw(t),s=toRaw(e);e!==s&&!n&&track(i,"get",e),!n&&track(i,"get",s);const{has:B}=getProto(i),Q=l?toShallow:n?toReadonly:toReactive;if(B.call(i,e))return Q(t.get(e));if(B.call(i,s))return Q(t.get(s));t!==i&&t.get(e)}function has$1(t,e=!1){const n=this.__v_raw,l=toRaw(n),i=toRaw(t);return t!==i&&!e&&track(l,"has",t),!e&&track(l,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function size(t,e=!1){return t=t.__v_raw,!e&&track(toRaw(t),"iterate",ITERATE_KEY),Reflect.get(t,"size",t)}function add(t){t=toRaw(t);const e=toRaw(this);return getProto(e).has.call(e,t)||(e.add(t),trigger(e,"add",t,t)),this}function set$1(t,e){e=toRaw(e);const n=toRaw(this),{has:l,get:i}=getProto(n);let s=l.call(n,t);s?checkIdentityKeys(n,l,t):(t=toRaw(t),s=l.call(n,t));const B=i.call(n,t);return n.set(t,e),s?hasChanged(e,B)&&trigger(n,"set",t,e,B):trigger(n,"add",t,e),this}function deleteEntry(t){const e=toRaw(this),{has:n,get:l}=getProto(e);let i=n.call(e,t);i?checkIdentityKeys(e,n,t):(t=toRaw(t),i=n.call(e,t));const s=l?l.call(e,t):void 0,B=e.delete(t);return i&&trigger(e,"delete",t,void 0,s),B}function clear(){const t=toRaw(this),e=t.size!==0,n=isMap(t)?new Map(t):new Set(t),l=t.clear();return e&&trigger(t,"clear",void 0,void 0,n),l}function createForEach(t,e){return function(l,i){const s=this,B=s.__v_raw,Q=toRaw(B),c=e?toShallow:t?toReadonly:toReactive;return!t&&track(Q,"iterate",ITERATE_KEY),B.forEach((a,F)=>l.call(i,c(a),c(F),s))}}function createIterableMethod(t,e,n){return function(...l){const i=this.__v_raw,s=toRaw(i),B=isMap(s),Q=t==="entries"||t===Symbol.iterator&&B,c=t==="keys"&&B,a=i[t](...l),F=n?toShallow:e?toReadonly:toReactive;return!e&&track(s,"iterate",c?MAP_KEY_ITERATE_KEY:ITERATE_KEY),{next(){const{value:o,done:r}=a.next();return r?{value:o,done:r}:{value:Q?[F(o[0]),F(o[1])]:F(o),done:r}},[Symbol.iterator](){return this}}}}function createReadonlyMethod(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${capitalize(t)} operation ${n}failed: target is readonly.`,toRaw(this))}return t==="delete"?!1:this}}function createInstrumentations(){const t={get(s){return get$1(this,s)},get size(){return size(this)},has:has$1,add,set:set$1,delete:deleteEntry,clear,forEach:createForEach(!1,!1)},e={get(s){return get$1(this,s,!1,!0)},get size(){return size(this)},has:has$1,add,set:set$1,delete:deleteEntry,clear,forEach:createForEach(!1,!0)},n={get(s){return get$1(this,s,!0)},get size(){return size(this,!0)},has(s){return has$1.call(this,s,!0)},add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear"),forEach:createForEach(!0,!1)},l={get(s){return get$1(this,s,!0,!0)},get size(){return size(this,!0)},has(s){return has$1.call(this,s,!0)},add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear"),forEach:createForEach(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=createIterableMethod(s,!1,!1),n[s]=createIterableMethod(s,!0,!1),e[s]=createIterableMethod(s,!1,!0),l[s]=createIterableMethod(s,!0,!0)}),[t,n,e,l]}var[mutableInstrumentations,readonlyInstrumentations,shallowInstrumentations,shallowReadonlyInstrumentations]=createInstrumentations();function createInstrumentationGetter(t,e){const n=t?readonlyInstrumentations:mutableInstrumentations;return(l,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?l:Reflect.get(hasOwn(n,i)&&i in l?n:l,i,s)}var mutableCollectionHandlers={get:createInstrumentationGetter(!1)},readonlyCollectionHandlers={get:createInstrumentationGetter(!0)};function checkIdentityKeys(t,e,n){const l=toRaw(n);if(l!==n&&e.call(t,l)){const i=toRawType(t);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var reactiveMap=new WeakMap,shallowReactiveMap=new WeakMap,readonlyMap=new WeakMap,shallowReadonlyMap=new WeakMap;function targetTypeMap(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function getTargetType(t){return t.__v_skip||!Object.isExtensible(t)?0:targetTypeMap(toRawType(t))}function reactive2(t){return t&&t.__v_isReadonly?t:createReactiveObject(t,!1,mutableHandlers,mutableCollectionHandlers,reactiveMap)}function readonly(t){return createReactiveObject(t,!0,readonlyHandlers,readonlyCollectionHandlers,readonlyMap)}function createReactiveObject(t,e,n,l,i){if(!isObject(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const B=getTargetType(t);if(B===0)return t;const Q=new Proxy(t,B===2?l:n);return i.set(t,Q),Q}function toRaw(t){return t&&toRaw(t.__v_raw)||t}function isRef(t){return!!(t&&t.__v_isRef===!0)}magic("nextTick",()=>nextTick);magic("dispatch",t=>dispatch.bind(dispatch,t));magic("watch",(t,{evaluateLater:e,cleanup:n})=>(l,i)=>{let s=e(l),Q=watch(()=>{let c;return s(a=>c=a),c},i);n(Q)});magic("store",getStores);magic("data",t=>scope(t));magic("root",t=>closestRoot(t));magic("refs",t=>(t._x_refs_proxy||(t._x_refs_proxy=mergeProxies(getArrayOfRefObject(t))),t._x_refs_proxy));function getArrayOfRefObject(t){let e=[];return findClosest(t,n=>{n._x_refs&&e.push(n._x_refs)}),e}var globalIdMemo={};function findAndIncrementId(t){return globalIdMemo[t]||(globalIdMemo[t]=0),++globalIdMemo[t]}function closestIdRoot(t,e){return findClosest(t,n=>{if(n._x_ids&&n._x_ids[e])return!0})}function setIdRoot(t,e){t._x_ids||(t._x_ids={}),t._x_ids[e]||(t._x_ids[e]=findAndIncrementId(e))}magic("id",(t,{cleanup:e})=>(n,l=null)=>{let i=`${n}${l?`-${l}`:""}`;return cacheIdByNameOnElement(t,i,e,()=>{let s=closestIdRoot(t,n),B=s?s._x_ids[n]:findAndIncrementId(n);return l?`${n}-${B}-${l}`:`${n}-${B}`})});interceptClone((t,e)=>{t._x_id&&(e._x_id=t._x_id)});function cacheIdByNameOnElement(t,e,n,l){if(t._x_id||(t._x_id={}),t._x_id[e])return t._x_id[e];let i=l();return t._x_id[e]=i,n(()=>{delete t._x_id[e]}),i}magic("el",t=>t);warnMissingPluginMagic("Focus","focus","focus");warnMissingPluginMagic("Persist","persist","persist");function warnMissingPluginMagic(t,e,n){magic(e,l=>warn(`You can't use [$${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,l))}directive("modelable",(t,{expression:e},{effect:n,evaluateLater:l,cleanup:i})=>{let s=l(e),B=()=>{let F;return s(o=>F=o),F},Q=l(`${e} = __placeholder`),c=F=>Q(()=>{},{scope:{__placeholder:F}}),a=B();c(a),queueMicrotask(()=>{if(!t._x_model)return;t._x_removeModelListeners.default();let F=t._x_model.get,o=t._x_model.set,r=entangle({get(){return F()},set(U){o(U)}},{get(){return B()},set(U){c(U)}});i(r)})});directive("teleport",(t,{modifiers:e,expression:n},{cleanup:l})=>{t.tagName.toLowerCase()!=="template"&&warn("x-teleport can only be used on a <template> tag",t);let i=getTarget(n),s=t.content.cloneNode(!0).firstElementChild;t._x_teleport=s,s._x_teleportBack=t,t.setAttribute("data-teleport-template",!0),s.setAttribute("data-teleport-target",!0),t._x_forwardEvents&&t._x_forwardEvents.forEach(Q=>{s.addEventListener(Q,c=>{c.stopPropagation(),t.dispatchEvent(new c.constructor(c.type,c))})}),addScopeToNode(s,{},t);let B=(Q,c,a)=>{a.includes("prepend")?c.parentNode.insertBefore(Q,c):a.includes("append")?c.parentNode.insertBefore(Q,c.nextSibling):c.appendChild(Q)};mutateDom(()=>{B(s,i,e),skipDuringClone(()=>{initTree(s),s._x_ignore=!0})()}),t._x_teleportPutBack=()=>{let Q=getTarget(n);mutateDom(()=>{B(t._x_teleport,Q,e)})},l(()=>s.remove())});var teleportContainerDuringClone=document.createElement("div");function getTarget(t){let e=skipDuringClone(()=>document.querySelector(t),()=>teleportContainerDuringClone)();return e||warn(`Cannot find x-teleport element for selector: "${t}"`),e}var handler=()=>{};handler.inline=(t,{modifiers:e},{cleanup:n})=>{e.includes("self")?t._x_ignoreSelf=!0:t._x_ignore=!0,n(()=>{e.includes("self")?delete t._x_ignoreSelf:delete t._x_ignore})};directive("ignore",handler);directive("effect",skipDuringClone((t,{expression:e},{effect:n})=>{n(evaluateLater(t,e))}));function on$1(t,e,n,l){let i=t,s=c=>l(c),B={},Q=(c,a)=>F=>a(c,F);if(n.includes("dot")&&(e=dotSyntax(e)),n.includes("camel")&&(e=camelCase2(e)),n.includes("passive")&&(B.passive=!0),n.includes("capture")&&(B.capture=!0),n.includes("window")&&(i=window),n.includes("document")&&(i=document),n.includes("debounce")){let c=n[n.indexOf("debounce")+1]||"invalid-wait",a=isNumeric(c.split("ms")[0])?Number(c.split("ms")[0]):250;s=debounce(s,a)}if(n.includes("throttle")){let c=n[n.indexOf("throttle")+1]||"invalid-wait",a=isNumeric(c.split("ms")[0])?Number(c.split("ms")[0]):250;s=throttle$1(s,a)}return n.includes("prevent")&&(s=Q(s,(c,a)=>{a.preventDefault(),c(a)})),n.includes("stop")&&(s=Q(s,(c,a)=>{a.stopPropagation(),c(a)})),n.includes("once")&&(s=Q(s,(c,a)=>{c(a),i.removeEventListener(e,s,B)})),(n.includes("away")||n.includes("outside"))&&(i=document,s=Q(s,(c,a)=>{t.contains(a.target)||a.target.isConnected!==!1&&(t.offsetWidth<1&&t.offsetHeight<1||t._x_isShown!==!1&&c(a))})),n.includes("self")&&(s=Q(s,(c,a)=>{a.target===t&&c(a)})),(isKeyEvent(e)||isClickEvent(e))&&(s=Q(s,(c,a)=>{isListeningForASpecificKeyThatHasntBeenPressed(a,n)||c(a)})),i.addEventListener(e,s,B),()=>{i.removeEventListener(e,s,B)}}function dotSyntax(t){return t.replace(/-/g,".")}function camelCase2(t){return t.toLowerCase().replace(/-(\w)/g,(e,n)=>n.toUpperCase())}function isNumeric(t){return!Array.isArray(t)&&!isNaN(t)}function kebabCase2(t){return[" ","_"].includes(t)?t:t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function isKeyEvent(t){return["keydown","keyup"].includes(t)}function isClickEvent(t){return["contextmenu","click","mouse"].some(e=>t.includes(e))}function isListeningForASpecificKeyThatHasntBeenPressed(t,e){let n=e.filter(s=>!["window","document","prevent","stop","once","capture","self","away","outside","passive"].includes(s));if(n.includes("debounce")){let s=n.indexOf("debounce");n.splice(s,isNumeric((n[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.includes("throttle")){let s=n.indexOf("throttle");n.splice(s,isNumeric((n[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.length===0||n.length===1&&keyToModifiers(t.key).includes(n[0]))return!1;const i=["ctrl","shift","alt","meta","cmd","super"].filter(s=>n.includes(s));return n=n.filter(s=>!i.includes(s)),!(i.length>0&&i.filter(B=>((B==="cmd"||B==="super")&&(B="meta"),t[`${B}Key`])).length===i.length&&(isClickEvent(t.type)||keyToModifiers(t.key).includes(n[0])))}function keyToModifiers(t){if(!t)return[];t=kebabCase2(t);let e={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return e[t]=t,Object.keys(e).map(n=>{if(e[n]===t)return n}).filter(n=>n)}directive("model",(t,{modifiers:e,expression:n},{effect:l,cleanup:i})=>{let s=t;e.includes("parent")&&(s=t.parentNode);let B=evaluateLater(s,n),Q;typeof n=="string"?Q=evaluateLater(s,`${n} = __placeholder`):typeof n=="function"&&typeof n()=="string"?Q=evaluateLater(s,`${n()} = __placeholder`):Q=()=>{};let c=()=>{let r;return B(U=>r=U),isGetterSetter(r)?r.get():r},a=r=>{let U;B(b=>U=b),isGetterSetter(U)?U.set(r):Q(()=>{},{scope:{__placeholder:r}})};typeof n=="string"&&t.type==="radio"&&mutateDom(()=>{t.hasAttribute("name")||t.setAttribute("name",n)});var F=t.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(t.type)||e.includes("lazy")?"change":"input";let o=isCloning?()=>{}:on$1(t,F,e,r=>{a(getInputValue(t,e,r,c()))});if(e.includes("fill")&&([void 0,null,""].includes(c())||t.type==="checkbox"&&Array.isArray(c())||t.tagName.toLowerCase()==="select"&&t.multiple)&&a(getInputValue(t,e,{target:t},c())),t._x_removeModelListeners||(t._x_removeModelListeners={}),t._x_removeModelListeners.default=o,i(()=>t._x_removeModelListeners.default()),t.form){let r=on$1(t.form,"reset",[],U=>{nextTick(()=>t._x_model&&t._x_model.set(getInputValue(t,e,{target:t},c())))});i(()=>r())}t._x_model={get(){return c()},set(r){a(r)}},t._x_forceModelUpdate=r=>{r===void 0&&typeof n=="string"&&n.match(/\./)&&(r=""),window.fromModel=!0,mutateDom(()=>bind(t,"value",r)),delete window.fromModel},l(()=>{let r=c();e.includes("unintrusive")&&document.activeElement.isSameNode(t)||t._x_forceModelUpdate(r)})});function getInputValue(t,e,n,l){return mutateDom(()=>{if(n instanceof CustomEvent&&n.detail!==void 0)return n.detail!==null&&n.detail!==void 0?n.detail:n.target.value;if(t.type==="checkbox")if(Array.isArray(l)){let i=null;return e.includes("number")?i=safeParseNumber(n.target.value):e.includes("boolean")?i=safeParseBoolean(n.target.value):i=n.target.value,n.target.checked?l.includes(i)?l:l.concat([i]):l.filter(s=>!checkedAttrLooseCompare2(s,i))}else return n.target.checked;else{if(t.tagName.toLowerCase()==="select"&&t.multiple)return e.includes("number")?Array.from(n.target.selectedOptions).map(i=>{let s=i.value||i.text;return safeParseNumber(s)}):e.includes("boolean")?Array.from(n.target.selectedOptions).map(i=>{let s=i.value||i.text;return safeParseBoolean(s)}):Array.from(n.target.selectedOptions).map(i=>i.value||i.text);{let i;return t.type==="radio"?n.target.checked?i=n.target.value:i=l:i=n.target.value,e.includes("number")?safeParseNumber(i):e.includes("boolean")?safeParseBoolean(i):e.includes("trim")?i.trim():i}}})}function safeParseNumber(t){let e=t?parseFloat(t):null;return isNumeric2(e)?e:t}function checkedAttrLooseCompare2(t,e){return t==e}function isNumeric2(t){return!Array.isArray(t)&&!isNaN(t)}function isGetterSetter(t){return t!==null&&typeof t=="object"&&typeof t.get=="function"&&typeof t.set=="function"}directive("cloak",t=>queueMicrotask(()=>mutateDom(()=>t.removeAttribute(prefix("cloak")))));addInitSelector(()=>`[${prefix("init")}]`);directive("init",skipDuringClone((t,{expression:e},{evaluate:n})=>typeof e=="string"?!!e.trim()&&n(e,{},!1):n(e,{},!1)));directive("text",(t,{expression:e},{effect:n,evaluateLater:l})=>{let i=l(e);n(()=>{i(s=>{mutateDom(()=>{t.textContent=s})})})});directive("html",(t,{expression:e},{effect:n,evaluateLater:l})=>{let i=l(e);n(()=>{i(s=>{mutateDom(()=>{t.innerHTML=s,t._x_ignoreSelf=!0,initTree(t),delete t._x_ignoreSelf})})})});mapAttributes(startingWith(":",into(prefix("bind:"))));var handler2=(t,{value:e,modifiers:n,expression:l,original:i},{effect:s,cleanup:B})=>{if(!e){let c={};injectBindingProviders(c),evaluateLater(t,l)(F=>{applyBindingsObject(t,F,i)},{scope:c});return}if(e==="key")return storeKeyForXFor(t,l);if(t._x_inlineBindings&&t._x_inlineBindings[e]&&t._x_inlineBindings[e].extract)return;let Q=evaluateLater(t,l);s(()=>Q(c=>{c===void 0&&typeof l=="string"&&l.match(/\./)&&(c=""),mutateDom(()=>bind(t,e,c,n))})),B(()=>{t._x_undoAddedClasses&&t._x_undoAddedClasses(),t._x_undoAddedStyles&&t._x_undoAddedStyles()})};handler2.inline=(t,{value:e,modifiers:n,expression:l})=>{e&&(t._x_inlineBindings||(t._x_inlineBindings={}),t._x_inlineBindings[e]={expression:l,extract:!1})};directive("bind",handler2);function storeKeyForXFor(t,e){t._x_keyExpression=e}addRootSelector(()=>`[${prefix("data")}]`);directive("data",(t,{expression:e},{cleanup:n})=>{if(shouldSkipRegisteringDataDuringClone(t))return;e=e===""?"{}":e;let l={};injectMagics(l,t);let i={};injectDataProviders(i,l);let s=evaluate(t,e,{scope:i});(s===void 0||s===!0)&&(s={}),injectMagics(s,t);let B=reactive(s);initInterceptors(B);let Q=addScopeToNode(t,B);B.init&&evaluate(t,B.init),n(()=>{B.destroy&&evaluate(t,B.destroy),Q()})});interceptClone((t,e)=>{t._x_dataStack&&(e._x_dataStack=t._x_dataStack,e.setAttribute("data-has-alpine-state",!0))});function shouldSkipRegisteringDataDuringClone(t){return isCloning?isCloningLegacy?!0:t.hasAttribute("data-has-alpine-state"):!1}directive("show",(t,{modifiers:e,expression:n},{effect:l})=>{let i=evaluateLater(t,n);t._x_doHide||(t._x_doHide=()=>{mutateDom(()=>{t.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),t._x_doShow||(t._x_doShow=()=>{mutateDom(()=>{t.style.length===1&&t.style.display==="none"?t.removeAttribute("style"):t.style.removeProperty("display")})});let s=()=>{t._x_doHide(),t._x_isShown=!1},B=()=>{t._x_doShow(),t._x_isShown=!0},Q=()=>setTimeout(B),c=once(o=>o?B():s(),o=>{typeof t._x_toggleAndCascadeWithTransitions=="function"?t._x_toggleAndCascadeWithTransitions(t,o,B,s):o?Q():s()}),a,F=!0;l(()=>i(o=>{!F&&o===a||(e.includes("immediate")&&(o?Q():s()),c(o),a=o,F=!1)}))});directive("for",(t,{expression:e},{effect:n,cleanup:l})=>{let i=parseForExpression(e),s=evaluateLater(t,i.items),B=evaluateLater(t,t._x_keyExpression||"index");t._x_prevKeys=[],t._x_lookup={},n(()=>loop(t,i,s,B)),l(()=>{Object.values(t._x_lookup).forEach(Q=>Q.remove()),delete t._x_prevKeys,delete t._x_lookup})});function loop(t,e,n,l){let i=B=>typeof B=="object"&&!Array.isArray(B),s=t;n(B=>{isNumeric3(B)&&B>=0&&(B=Array.from(Array(B).keys(),d=>d+1)),B===void 0&&(B=[]);let Q=t._x_lookup,c=t._x_prevKeys,a=[],F=[];if(i(B))B=Object.entries(B).map(([d,g])=>{let I=getIterationScopeVariables(e,g,d,B);l(C=>{F.includes(C)&&warn("Duplicate key on x-for",t),F.push(C)},{scope:{index:d,...I}}),a.push(I)});else for(let d=0;d<B.length;d++){let g=getIterationScopeVariables(e,B[d],d,B);l(I=>{F.includes(I)&&warn("Duplicate key on x-for",t),F.push(I)},{scope:{index:d,...g}}),a.push(g)}let o=[],r=[],U=[],b=[];for(let d=0;d<c.length;d++){let g=c[d];F.indexOf(g)===-1&&U.push(g)}c=c.filter(d=>!U.includes(d));let u="template";for(let d=0;d<F.length;d++){let g=F[d],I=c.indexOf(g);if(I===-1)c.splice(d,0,g),o.push([u,d]);else if(I!==d){let C=c.splice(d,1)[0],V=c.splice(I-1,1)[0];c.splice(d,0,V),c.splice(I,0,C),r.push([C,V])}else b.push(g);u=g}for(let d=0;d<U.length;d++){let g=U[d];Q[g]._x_effects&&Q[g]._x_effects.forEach(dequeueJob),Q[g].remove(),Q[g]=null,delete Q[g]}for(let d=0;d<r.length;d++){let[g,I]=r[d],C=Q[g],V=Q[I],L=document.createElement("div");mutateDom(()=>{V||warn('x-for ":key" is undefined or invalid',s,I,Q),V.after(L),C.after(V),V._x_currentIfEl&&V.after(V._x_currentIfEl),L.before(C),C._x_currentIfEl&&C.after(C._x_currentIfEl),L.remove()}),V._x_refreshXForScope(a[F.indexOf(I)])}for(let d=0;d<o.length;d++){let[g,I]=o[d],C=g==="template"?s:Q[g];C._x_currentIfEl&&(C=C._x_currentIfEl);let V=a[I],L=F[I],m=document.importNode(s.content,!0).firstElementChild,G=reactive(V);addScopeToNode(m,G,s),m._x_refreshXForScope=S=>{Object.entries(S).forEach(([Z,R])=>{G[Z]=R})},mutateDom(()=>{C.after(m),skipDuringClone(()=>initTree(m))()}),typeof L=="object"&&warn("x-for key cannot be an object, it must be a string or an integer",s),Q[L]=m}for(let d=0;d<b.length;d++)Q[b[d]]._x_refreshXForScope(a[F.indexOf(b[d])]);s._x_prevKeys=F})}function parseForExpression(t){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=/^\s*\(|\)\s*$/g,l=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,i=t.match(l);if(!i)return;let s={};s.items=i[2].trim();let B=i[1].replace(n,"").trim(),Q=B.match(e);return Q?(s.item=B.replace(e,"").trim(),s.index=Q[1].trim(),Q[2]&&(s.collection=Q[2].trim())):s.item=B,s}function getIterationScopeVariables(t,e,n,l){let i={};return/^\[.*\]$/.test(t.item)&&Array.isArray(e)?t.item.replace("[","").replace("]","").split(",").map(B=>B.trim()).forEach((B,Q)=>{i[B]=e[Q]}):/^\{.*\}$/.test(t.item)&&!Array.isArray(e)&&typeof e=="object"?t.item.replace("{","").replace("}","").split(",").map(B=>B.trim()).forEach(B=>{i[B]=e[B]}):i[t.item]=e,t.index&&(i[t.index]=n),t.collection&&(i[t.collection]=l),i}function isNumeric3(t){return!Array.isArray(t)&&!isNaN(t)}function handler3(){}handler3.inline=(t,{expression:e},{cleanup:n})=>{let l=closestRoot(t);l._x_refs||(l._x_refs={}),l._x_refs[e]=t,n(()=>delete l._x_refs[e])};directive("ref",handler3);directive("if",(t,{expression:e},{effect:n,cleanup:l})=>{t.tagName.toLowerCase()!=="template"&&warn("x-if can only be used on a <template> tag",t);let i=evaluateLater(t,e),s=()=>{if(t._x_currentIfEl)return t._x_currentIfEl;let Q=t.content.cloneNode(!0).firstElementChild;return addScopeToNode(Q,{},t),mutateDom(()=>{t.after(Q),skipDuringClone(()=>initTree(Q))()}),t._x_currentIfEl=Q,t._x_undoIf=()=>{walk(Q,c=>{c._x_effects&&c._x_effects.forEach(dequeueJob)}),Q.remove(),delete t._x_currentIfEl},Q},B=()=>{t._x_undoIf&&(t._x_undoIf(),delete t._x_undoIf)};n(()=>i(Q=>{Q?s():B()})),l(()=>t._x_undoIf&&t._x_undoIf())});directive("id",(t,{expression:e},{evaluate:n})=>{n(e).forEach(i=>setIdRoot(t,i))});interceptClone((t,e)=>{t._x_ids&&(e._x_ids=t._x_ids)});mapAttributes(startingWith("@",into(prefix("on:"))));directive("on",skipDuringClone((t,{value:e,modifiers:n,expression:l},{cleanup:i})=>{let s=l?evaluateLater(t,l):()=>{};t.tagName.toLowerCase()==="template"&&(t._x_forwardEvents||(t._x_forwardEvents=[]),t._x_forwardEvents.includes(e)||t._x_forwardEvents.push(e));let B=on$1(t,e,n,Q=>{s(()=>{},{scope:{$event:Q},params:[Q]})});i(()=>B())}));warnMissingPluginDirective("Collapse","collapse","collapse");warnMissingPluginDirective("Intersect","intersect","intersect");warnMissingPluginDirective("Focus","trap","focus");warnMissingPluginDirective("Mask","mask","mask");function warnMissingPluginDirective(t,e,n){directive(e,l=>warn(`You can't use [x-${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,l))}alpine_default.setEvaluator(normalEvaluator);alpine_default.setReactivityEngine({reactive:reactive2,effect:effect2,release:stop,raw:toRaw});var src_default=alpine_default,module_default=src_default;const Filtro={inicializaCampoBusca:function(t,e,n,l="document",i){$(e).select2({dropdownParent:$(l),placeholder:n,allowClear:!0,minimumInputLength:2,language:"pt-BR",ajax:{url:t,dataType:"json",data:function(s){var B={q:s.term,page_limit:20,quem:$(e).attr("id")};return i!==void 0&&jQuery.extend(B,i.call()),B},processResults:function(s){return{results:s}}},escapeMarkup:function(s){return s}})},inicializaFormBusca:function(t,e,n){$(t).submit(function(l){var i=$(this).attr("action"),s=$(this).serializeArray();Ajax.buscarRegistros(e,i,s,"POST",Filtro.inicializaPaginacaoOrdenacao.bind(this,e,i)),l.preventDefault()}),n===!0&&$(t).submit()},inicializaPaginacaoOrdenacao:function(t,e,n){$(t).find(".pagination a, .pagination-sm a, th.sortable a").on("click",function(l){l.preventDefault();var i=e+"?"+$(this).attr("href").split("?")[1],s={};Ajax.buscarRegistros(t,i,s,"POST",Filtro.inicializaPaginacaoOrdenacao.bind(this,t,e))})}};$(document).ajaxSend(function(t,e){$(".spinner").show()});$(document).ajaxStop(function(t,e){$(".spinner").fadeOut("fast")});const Ajax$1={carregarConteudo:function(t,e){$(".spinner").show(),$.ajax({url:t,encoding:"UTF-8",success:function(n){e.html(n)},error:function(n,l,i){Ajax$1.tratarErroAjax(n.status,n.responseText),Tela.fecharModal()},complete:function(){$(".spinner").hide()}})},carregarConteudoViaPost:function(t,e,n){$(".spinner").show(),$.ajax({url:t,encoding:"UTF-8",method:"POST",data:n,success:function(l){e.html(l)},error:function(l,i,s){Ajax$1.tratarErroAjax(l.status,l.responseText),Tela.fecharModal()},complete:function(){$(".spinner").hide()}})},tratarErroAjax:function(t,e){let n=e;if(e instanceof Object&&(n=e.responseJSON,e.responseJSON instanceof Object&&(n=e.responseJSON.message)),t===401)Tela.avisoComAlerta("Sua sessão expirou! Por favor, realize o login novamente!");else if(t==500)Tela.avisoComErro(n);else if(t==403)Tela.avisoComErro("Acesso negado. Favor verificar com o suporte.");else if(t==409)Tela.avisoComErro(n);else if(t==404)Tela.avisoComErro("Página não encontrada!");else if(t==422){let l=e.responseJSON.errors,i="<ul>";$.each(l,function(s,B){i+="<li>"+B[0]+"</li>"}),i+="</ul>",Tela.avisoComErro(i)}else Tela.avisoComErro("Erro: "+t+" Mensagem: "+n)},buscarRegistros:function(t,e,n,l,i){$.ajax({url:e,type:l,data:n,success:function(s,B,Q){$(t).html(s),typeof i=="function"&&i.call()},error:function(s,B,Q){Ajax$1.tratarErroAjax(s.status,s)}})},salvarRegistro:function(t,e,n=!1){let l=$(t).serialize(),i=$(t).attr("action"),s=$(t).find("#footerModal");$.ajax({url:i,type:"POST",data:l,beforeSend:function(){$(s).find("button[type=submit]").attr("disabled","true")},success:function(B,Q,c){$("#formSearch").submit(),!$(t).find("input[name$='continue']").is(":checked")&&!n&&$(t.closest(".modal-content")).find(".btn-close").click(),$(t)[0].reset(),n&&$("#divForm_"+componente).html(B),Tela.avisoComSucesso(B),typeof e=="function"&&e.call()},error:function(B,Q,c){Ajax$1.tratarErroAjax(B.status,B)},complete:function(){$(s).find("button[type=submit]").removeAttr("disabled")}})},salvarRegistroDireto:function(t,e,n,l){let i=$(form).find("#footerModal");$.ajax({url:t,type:n,data:e,beforeSend:function(){$(i).find("button[type=submit]").attr("disabled","true")},success:function(s,B,Q){Tela.avisoComSucesso(s),typeof l=="function"&&l.call()},error:function(s,B,Q){Ajax$1.tratarErroAjax(s.status,s)},complete:function(){$(i).find("button[type=submit]").removeAttr("disabled")}})},salvarRegistroComArquivo:function(t,e,n){n===void 0&&(n=!1);let l=new FormData(t[0]),i=$(t).attr("action"),s=$(t).attr("component"),B=$(t).find("#footerModal");$.ajax({url:i,type:"POST",data:l,contentType:!1,processData:!1,beforeSend:function(){$(B).find("button[type=submit]").attr("disabled","true")},success:function(Q,c,a){$("#formSearch").submit(),!$("input[name=continuar]").is(":checked")&&!n&&$(t.closest(".modal-content")).find(".btn-close").click(),n?$("#divForm_"+s).html(Q):$(t)[0].reset(),Tela.avisoComSucesso("Salvo com sucesso!"),typeof e=="function"&&e.call()},error:function(Q,c,a){Ajax$1.tratarErroAjax(Q.status,Q)},complete:function(){$(B).find("button[type=submit]").removeAttr("disabled")}})},deletarRegistro:function(){let formUrl=$("#modalDelete_urlExcluir").val(),callback=$("#modalDelete_callback").val(),id=$("#modalDelete_id").val();$.ajax({url:formUrl,type:"DELETE",beforeSend:function(){console.log("ok")},success:function(data,textStatus,jqXHR){$("#row_"+id).remove(),$("#modalDelete").modal("hide"),Tela.avisoComSucesso("Excluído com sucesso!"),typeof eval(callback)=="function"&&callback.call()},error:function(t,e,n){Ajax$1.tratarErroAjax(t.status,t.responseJSON)},complete:function(){console.log("ok")}})},deletarRegistroDireto:function(t,e,n,l){let i=$(form).find("#footerModal");$.ajax({url:t,type:n,data:e,beforeSend:function(){$(i).find("button[type=submit]").attr("disabled","true")},success:function(s,B,Q){$("#"+s).remove(),typeof l=="function"&&l.call()},error:function(s,B,Q){Ajax$1.tratarErroAjax(s.status,s)},complete:function(){$(i).find("button[type=submit]").removeAttr("disabled")}})}};let janela=window,tipoJanela="inner",larguraJanela=0;const Tela$1={pegaTamanhoJanela:function(){"innerWidth"in window||(tipoJanela="client",janela=document.documentElement||document.body),larguraJanela=janela[tipoJanela+"Width"],janela[tipoJanela+"Height"]},fecharModal:function(t){var e=$(t).find(".modal-dialog > .modal-content > .modal-header > button.btn-close");e.click()},abrirJanela:function(t,e,n){Tela$1.pegaTamanhoJanela();let l="modal-"+n;larguraJanela<992?$("#modalBasic > div.modal-dialog").hasClass("modal-xl")||$("#modalBasic > div.modal-dialog").addClass("modal-xl"):($("#modalBasic > div.modal-dialog").hasClass("modal-lg")&&$("#modalBasic > div.modal-dialog").removeClass("modal-lg"),$("#modalBasic > div.modal-dialog").hasClass("modal-sm")&&$("#modalBasic > div.modal-dialog").removeClass("modal-sm"),$("#modalBasic > div.modal-dialog").addClass(l)),$("#modalBasic > div.modal-dialog > div.modal-content > div.modal-body").html(""),$("#modalBasic > div.modal-dialog > div.modal-content > div.modal-header > h5.modal-title").html(e),Ajax.carregarConteudo(t,$("#modalBasic > div.modal-dialog > div.modal-content > div.modal-body")),$("#modalBasic").modal("show")},abrirJanelaPost:function(t,e,n,l){Tela$1.pegaTamanhoJanela();let i="modal-"+l;larguraJanela<992?$("#modalBasic > div.modal-dialog").hasClass("modal-xl")||$("#modalBasic > div.modal-dialog").addClass("modal-xl"):($("#modalBasic > div.modal-dialog").hasClass("modal-lg")&&$("#modalBasic > div.modal-dialog").removeClass("modal-lg"),$("#modalBasic > div.modal-dialog").hasClass("modal-sm")&&$("#modalBasic > div.modal-dialog").removeClass("modal-sm"),$("#modalBasic > div.modal-dialog").addClass(i)),$("#modalBasic > div.modal-dialog > div.modal-content > div.modal-body").html(""),$("#modalBasic > div.modal-dialog > div.modal-content > div.modal-header > h5.modal-title").html(e),Ajax.carregarConteudoViaPost(t,$("#modalBasic > div.modal-dialog > div.modal-content > div.modal-body"),n),$("#modalBasic").modal("show")},abrirSubJanela:function(t,e,n){Tela$1.pegaTamanhoJanela();let l="modal-"+n;var i=$("#modalSub > div.modal-dialog");larguraJanela<992?i.hasClass("modal-xl")||i.addClass("modal-xl"):($(i).hasClass("modal-lg")&&$(i).removeClass("modal-lg"),$(i).hasClass("modal-sm")&&$(i).removeClass("modal-sm"),$(i).addClass(l)),$("#modalSub > div.modal-dialog > div.modal-content > div.modal-body").html(""),$("#modalSub > div.modal-dialog > div.modal-content > div.modal-header > h5.modal-title").html(e),Ajax.carregarConteudo(t,$("#modalSub > div.modal-dialog > div.modal-content > div.modal-body")),$("#modalSub").modal("show")},abrirJanelaExcluir:function(t,e,n){let l='<button class="btn btn-danger btn-sm" onclick="Ajax.deletarRegistro()" type="button"><i class="fa fa-save"></i> Confirmar Exclusão</button>';l+=' <button class="btn btn-warning btn-sm" data-bs-dismiss="modal" type="button"><i class="fa fa-times"></i> Fechar</button>',$("#modalDelete_urlExcluir").val(t),$("#modalDelete_callback").val(n),$("#modalDelete_id").val(e),$("#modalDelete_footerDeletar").html(l),$("#modalDelete").modal("show")},aviso:function(t,e){let n="topRight";e==="erro"?iziToast.error({message:t,position:n}):e==="sucesso"?iziToast.success({message:t,position:n}):e==="alerta"?iziToast.warning({message:t,position:n}):iziToast.show({message:t,position:n})},avisoComErro:function(t){Tela$1.aviso(t,"erro")},avisoComInformacao:function(t){Tela$1.aviso(t,"info")},avisoComAlerta:function(t){Tela$1.aviso(t,"alerta")},avisoComSucesso:function(t){Tela$1.aviso(t,"sucesso")},selecionarTodosOsCheckBoxes:function(t,e){var n=document.getElementsByClassName(t),l=0;for(l;l<n.length;l++){n[l].checked=document.getElementById(e).checked;var i=$(n[l]).parent().parent();$(n[l]).is(":checked")?$(i).addClass("success"):$(i).removeClass("success")}}};/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,l)}return n}function _objectSpread2(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach(function(l){_defineProperty(t,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))})}return t}function _typeof(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof=function(e){return typeof e}:_typeof=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(t)}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _extends(){return _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(t,e){if(t==null)return{};var n={},l=Object.keys(t),i,s;for(s=0;s<l.length;s++)i=l[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function _objectWithoutProperties(t,e){if(t==null)return{};var n=_objectWithoutPropertiesLoose(t,e),l,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)l=s[i],!(e.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var version="1.15.2";function userAgent(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var IE11OrLess=userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Edge=userAgent(/Edge/i),FireFox=userAgent(/firefox/i),Safari=userAgent(/safari/i)&&!userAgent(/chrome/i)&&!userAgent(/android/i),IOS=userAgent(/iP(ad|od|hone)/i),ChromeForAndroid=userAgent(/chrome/i)&&userAgent(/android/i),captureMode={capture:!1,passive:!1};function on(t,e,n){t.addEventListener(e,n,!IE11OrLess&&captureMode)}function off(t,e,n){t.removeEventListener(e,n,!IE11OrLess&&captureMode)}function matches(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function getParentOrHost(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function closest(t,e,n,l){if(t){n=n||document;do{if(e!=null&&(e[0]===">"?t.parentNode===n&&matches(t,e):matches(t,e))||l&&t===n)return t;if(t===n)break}while(t=getParentOrHost(t))}return null}var R_SPACE=/\s+/g;function toggleClass(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var l=(" "+t.className+" ").replace(R_SPACE," ").replace(" "+e+" "," ");t.className=(l+(n?" "+e:"")).replace(R_SPACE," ")}}function css(t,e,n){var l=t&&t.style;if(l){if(n===void 0)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),e===void 0?n:n[e];!(e in l)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),l[e]=n+(typeof n=="string"?"":"px")}}function matrix(t,e){var n="";if(typeof t=="string")n=t;else do{var l=css(t,"transform");l&&l!=="none"&&(n=l+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function find(t,e,n){if(t){var l=t.getElementsByTagName(e),i=0,s=l.length;if(n)for(;i<s;i++)n(l[i],i);return l}return[]}function getWindowScrollingElement(){var t=document.scrollingElement;return t||document.documentElement}function getRect(t,e,n,l,i){if(!(!t.getBoundingClientRect&&t!==window)){var s,B,Q,c,a,F,o;if(t!==window&&t.parentNode&&t!==getWindowScrollingElement()?(s=t.getBoundingClientRect(),B=s.top,Q=s.left,c=s.bottom,a=s.right,F=s.height,o=s.width):(B=0,Q=0,c=window.innerHeight,a=window.innerWidth,F=window.innerHeight,o=window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,!IE11OrLess))do if(i&&i.getBoundingClientRect&&(css(i,"transform")!=="none"||n&&css(i,"position")!=="static")){var r=i.getBoundingClientRect();B-=r.top+parseInt(css(i,"border-top-width")),Q-=r.left+parseInt(css(i,"border-left-width")),c=B+s.height,a=Q+s.width;break}while(i=i.parentNode);if(l&&t!==window){var U=matrix(i||t),b=U&&U.a,u=U&&U.d;U&&(B/=u,Q/=b,o/=b,F/=u,c=B+F,a=Q+o)}return{top:B,left:Q,bottom:c,right:a,width:o,height:F}}}function isScrolledPast(t,e,n){for(var l=getParentAutoScrollElement(t,!0),i=getRect(t)[e];l;){var s=getRect(l)[n],B=void 0;if(B=i>=s,!B)return l;if(l===getWindowScrollingElement())break;l=getParentAutoScrollElement(l,!1)}return!1}function getChild(t,e,n,l){for(var i=0,s=0,B=t.children;s<B.length;){if(B[s].style.display!=="none"&&B[s]!==Sortable.ghost&&(l||B[s]!==Sortable.dragged)&&closest(B[s],n.draggable,t,!1)){if(i===e)return B[s];i++}s++}return null}function lastChild(t,e){for(var n=t.lastElementChild;n&&(n===Sortable.ghost||css(n,"display")==="none"||e&&!matches(n,e));)n=n.previousElementSibling;return n||null}function index(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==Sortable.clone&&(!e||matches(t,e))&&n++;return n}function getRelativeScrollOffset(t){var e=0,n=0,l=getWindowScrollingElement();if(t)do{var i=matrix(t),s=i.a,B=i.d;e+=t.scrollLeft*s,n+=t.scrollTop*B}while(t!==l&&(t=t.parentNode));return[e,n]}function indexOfObject(t,e){for(var n in t)if(t.hasOwnProperty(n)){for(var l in e)if(e.hasOwnProperty(l)&&e[l]===t[n][l])return Number(n)}return-1}function getParentAutoScrollElement(t,e){if(!t||!t.getBoundingClientRect)return getWindowScrollingElement();var n=t,l=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=css(n);if(n.clientWidth<n.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||n.clientHeight<n.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!n.getBoundingClientRect||n===document.body)return getWindowScrollingElement();if(l||e)return n;l=!0}}while(n=n.parentNode);return getWindowScrollingElement()}function extend(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function isRectEqual(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var _throttleTimeout;function throttle(t,e){return function(){if(!_throttleTimeout){var n=arguments,l=this;n.length===1?t.call(l,n[0]):t.apply(l,n),_throttleTimeout=setTimeout(function(){_throttleTimeout=void 0},e)}}}function cancelThrottle(){clearTimeout(_throttleTimeout),_throttleTimeout=void 0}function scrollBy(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function clone(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function getChildContainingRectFromElement(t,e,n){var l={};return Array.from(t.children).forEach(function(i){var s,B,Q,c;if(!(!closest(i,e.draggable,t,!1)||i.animated||i===n)){var a=getRect(i);l.left=Math.min((s=l.left)!==null&&s!==void 0?s:1/0,a.left),l.top=Math.min((B=l.top)!==null&&B!==void 0?B:1/0,a.top),l.right=Math.max((Q=l.right)!==null&&Q!==void 0?Q:-1/0,a.right),l.bottom=Math.max((c=l.bottom)!==null&&c!==void 0?c:-1/0,a.bottom)}}),l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}var expando="Sortable"+new Date().getTime();function AnimationStateManager(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var l=[].slice.call(this.el.children);l.forEach(function(i){if(!(css(i,"display")==="none"||i===Sortable.ghost)){t.push({target:i,rect:getRect(i)});var s=_objectSpread2({},t[t.length-1].rect);if(i.thisAnimationDuration){var B=matrix(i,!0);B&&(s.top-=B.f,s.left-=B.e)}i.fromRect=s}})}},addAnimationState:function(l){t.push(l)},removeAnimationState:function(l){t.splice(indexOfObject(t,{target:l}),1)},animateAll:function(l){var i=this;if(!this.options.animation){clearTimeout(e),typeof l=="function"&&l();return}var s=!1,B=0;t.forEach(function(Q){var c=0,a=Q.target,F=a.fromRect,o=getRect(a),r=a.prevFromRect,U=a.prevToRect,b=Q.rect,u=matrix(a,!0);u&&(o.top-=u.f,o.left-=u.e),a.toRect=o,a.thisAnimationDuration&&isRectEqual(r,o)&&!isRectEqual(F,o)&&(b.top-o.top)/(b.left-o.left)===(F.top-o.top)/(F.left-o.left)&&(c=calculateRealTime(b,r,U,i.options)),isRectEqual(o,F)||(a.prevFromRect=F,a.prevToRect=o,c||(c=i.options.animation),i.animate(a,b,o,c)),c&&(s=!0,B=Math.max(B,c),clearTimeout(a.animationResetTimer),a.animationResetTimer=setTimeout(function(){a.animationTime=0,a.prevFromRect=null,a.fromRect=null,a.prevToRect=null,a.thisAnimationDuration=null},c),a.thisAnimationDuration=c)}),clearTimeout(e),s?e=setTimeout(function(){typeof l=="function"&&l()},B):typeof l=="function"&&l(),t=[]},animate:function(l,i,s,B){if(B){css(l,"transition",""),css(l,"transform","");var Q=matrix(this.el),c=Q&&Q.a,a=Q&&Q.d,F=(i.left-s.left)/(c||1),o=(i.top-s.top)/(a||1);l.animatingX=!!F,l.animatingY=!!o,css(l,"transform","translate3d("+F+"px,"+o+"px,0)"),this.forRepaintDummy=repaint(l),css(l,"transition","transform "+B+"ms"+(this.options.easing?" "+this.options.easing:"")),css(l,"transform","translate3d(0,0,0)"),typeof l.animated=="number"&&clearTimeout(l.animated),l.animated=setTimeout(function(){css(l,"transition",""),css(l,"transform",""),l.animated=!1,l.animatingX=!1,l.animatingY=!1},B)}}}}function repaint(t){return t.offsetWidth}function calculateRealTime(t,e,n,l){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*l.animation}var plugins=[],defaults={initializeByDefault:!0},PluginManager={mount:function t(e){for(var n in defaults)defaults.hasOwnProperty(n)&&!(n in e)&&(e[n]=defaults[n]);plugins.forEach(function(l){if(l.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),plugins.push(e)},pluginEvent:function t(e,n,l){var i=this;this.eventCanceled=!1,l.cancel=function(){i.eventCanceled=!0};var s=e+"Global";plugins.forEach(function(B){n[B.pluginName]&&(n[B.pluginName][s]&&n[B.pluginName][s](_objectSpread2({sortable:n},l)),n.options[B.pluginName]&&n[B.pluginName][e]&&n[B.pluginName][e](_objectSpread2({sortable:n},l)))})},initializePlugins:function t(e,n,l,i){plugins.forEach(function(Q){var c=Q.pluginName;if(!(!e.options[c]&&!Q.initializeByDefault)){var a=new Q(e,n,e.options);a.sortable=e,a.options=e.options,e[c]=a,_extends(l,a.defaults)}});for(var s in e.options)if(e.options.hasOwnProperty(s)){var B=this.modifyOption(e,s,e.options[s]);typeof B<"u"&&(e.options[s]=B)}},getEventProperties:function t(e,n){var l={};return plugins.forEach(function(i){typeof i.eventProperties=="function"&&_extends(l,i.eventProperties.call(n[i.pluginName],e))}),l},modifyOption:function t(e,n,l){var i;return plugins.forEach(function(s){e[s.pluginName]&&s.optionListeners&&typeof s.optionListeners[n]=="function"&&(i=s.optionListeners[n].call(e[s.pluginName],l))}),i}};function dispatchEvent(t){var e=t.sortable,n=t.rootEl,l=t.name,i=t.targetEl,s=t.cloneEl,B=t.toEl,Q=t.fromEl,c=t.oldIndex,a=t.newIndex,F=t.oldDraggableIndex,o=t.newDraggableIndex,r=t.originalEvent,U=t.putSortable,b=t.extraEventProperties;if(e=e||n&&n[expando],!!e){var u,d=e.options,g="on"+l.charAt(0).toUpperCase()+l.substr(1);window.CustomEvent&&!IE11OrLess&&!Edge?u=new CustomEvent(l,{bubbles:!0,cancelable:!0}):(u=document.createEvent("Event"),u.initEvent(l,!0,!0)),u.to=B||n,u.from=Q||n,u.item=i||n,u.clone=s,u.oldIndex=c,u.newIndex=a,u.oldDraggableIndex=F,u.newDraggableIndex=o,u.originalEvent=r,u.pullMode=U?U.lastPutMode:void 0;var I=_objectSpread2(_objectSpread2({},b),PluginManager.getEventProperties(l,e));for(var C in I)u[C]=I[C];n&&n.dispatchEvent(u),d[g]&&d[g].call(e,u)}}var _excluded=["evt"],pluginEvent=function t(e,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=l.evt,s=_objectWithoutProperties(l,_excluded);PluginManager.pluginEvent.bind(Sortable)(e,n,_objectSpread2({dragEl,parentEl,ghostEl,rootEl,nextEl,lastDownEl,cloneEl,cloneHidden,dragStarted:moved,putSortable,activeSortable:Sortable.active,originalEvent:i,oldIndex,oldDraggableIndex,newIndex,newDraggableIndex,hideGhostForTarget:_hideGhostForTarget,unhideGhostForTarget:_unhideGhostForTarget,cloneNowHidden:function(){cloneHidden=!0},cloneNowShown:function(){cloneHidden=!1},dispatchSortableEvent:function(Q){_dispatchEvent({sortable:n,name:Q,originalEvent:i})}},s))};function _dispatchEvent(t){dispatchEvent(_objectSpread2({putSortable,cloneEl,targetEl:dragEl,rootEl,oldIndex,oldDraggableIndex,newIndex,newDraggableIndex},t))}var dragEl,parentEl,ghostEl,rootEl,nextEl,lastDownEl,cloneEl,cloneHidden,oldIndex,newIndex,oldDraggableIndex,newDraggableIndex,activeGroup,putSortable,awaitingDragStarted=!1,ignoreNextClick=!1,sortables=[],tapEvt,touchEvt,lastDx,lastDy,tapDistanceLeft,tapDistanceTop,moved,lastTarget,lastDirection,pastFirstInvertThresh=!1,isCircumstantialInvert=!1,targetMoveDistance,ghostRelativeParent,ghostRelativeParentInitialScroll=[],_silent=!1,savedInputChecked=[],documentExists=typeof document<"u",PositionGhostAbsolutely=IOS,CSSFloatProperty=Edge||IE11OrLess?"cssFloat":"float",supportDraggable=documentExists&&!ChromeForAndroid&&!IOS&&"draggable"in document.createElement("div"),supportCssPointerEvents=function(){if(documentExists){if(IE11OrLess)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),_detectDirection=function t(e,n){var l=css(e),i=parseInt(l.width)-parseInt(l.paddingLeft)-parseInt(l.paddingRight)-parseInt(l.borderLeftWidth)-parseInt(l.borderRightWidth),s=getChild(e,0,n),B=getChild(e,1,n),Q=s&&css(s),c=B&&css(B),a=Q&&parseInt(Q.marginLeft)+parseInt(Q.marginRight)+getRect(s).width,F=c&&parseInt(c.marginLeft)+parseInt(c.marginRight)+getRect(B).width;if(l.display==="flex")return l.flexDirection==="column"||l.flexDirection==="column-reverse"?"vertical":"horizontal";if(l.display==="grid")return l.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(s&&Q.float&&Q.float!=="none"){var o=Q.float==="left"?"left":"right";return B&&(c.clear==="both"||c.clear===o)?"vertical":"horizontal"}return s&&(Q.display==="block"||Q.display==="flex"||Q.display==="table"||Q.display==="grid"||a>=i&&l[CSSFloatProperty]==="none"||B&&l[CSSFloatProperty]==="none"&&a+F>i)?"vertical":"horizontal"},_dragElInRowColumn=function t(e,n,l){var i=l?e.left:e.top,s=l?e.right:e.bottom,B=l?e.width:e.height,Q=l?n.left:n.top,c=l?n.right:n.bottom,a=l?n.width:n.height;return i===Q||s===c||i+B/2===Q+a/2},_detectNearestEmptySortable=function t(e,n){var l;return sortables.some(function(i){var s=i[expando].options.emptyInsertThreshold;if(!(!s||lastChild(i))){var B=getRect(i),Q=e>=B.left-s&&e<=B.right+s,c=n>=B.top-s&&n<=B.bottom+s;if(Q&&c)return l=i}}),l},_prepareGroup=function t(e){function n(s,B){return function(Q,c,a,F){var o=Q.options.group.name&&c.options.group.name&&Q.options.group.name===c.options.group.name;if(s==null&&(B||o))return!0;if(s==null||s===!1)return!1;if(B&&s==="clone")return s;if(typeof s=="function")return n(s(Q,c,a,F),B)(Q,c,a,F);var r=(B?Q:c).options.group.name;return s===!0||typeof s=="string"&&s===r||s.join&&s.indexOf(r)>-1}}var l={},i=e.group;(!i||_typeof(i)!="object")&&(i={name:i}),l.name=i.name,l.checkPull=n(i.pull,!0),l.checkPut=n(i.put),l.revertClone=i.revertClone,e.group=l},_hideGhostForTarget=function t(){!supportCssPointerEvents&&ghostEl&&css(ghostEl,"display","none")},_unhideGhostForTarget=function t(){!supportCssPointerEvents&&ghostEl&&css(ghostEl,"display","")};documentExists&&!ChromeForAndroid&&document.addEventListener("click",function(t){if(ignoreNextClick)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),ignoreNextClick=!1,!1},!0);var nearestEmptyInsertDetectEvent=function t(e){if(dragEl){e=e.touches?e.touches[0]:e;var n=_detectNearestEmptySortable(e.clientX,e.clientY);if(n){var l={};for(var i in e)e.hasOwnProperty(i)&&(l[i]=e[i]);l.target=l.rootEl=n,l.preventDefault=void 0,l.stopPropagation=void 0,n[expando]._onDragOver(l)}}},_checkOutsideTargetEl=function t(e){dragEl&&dragEl.parentNode[expando]._isOutsideThisEl(e.target)};function Sortable(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=_extends({},e),t[expando]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return _detectDirection(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(B,Q){B.setData("Text",Q.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:Sortable.supportPointer!==!1&&"PointerEvent"in window&&!Safari,emptyInsertThreshold:5};PluginManager.initializePlugins(this,t,n);for(var l in n)!(l in e)&&(e[l]=n[l]);_prepareGroup(e);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=e.forceFallback?!1:supportDraggable,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?on(t,"pointerdown",this._onTapStart):(on(t,"mousedown",this._onTapStart),on(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(on(t,"dragover",this),on(t,"dragenter",this)),sortables.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),_extends(this,AnimationStateManager())}Sortable.prototype={constructor:Sortable,_isOutsideThisEl:function t(e){!this.el.contains(e)&&e!==this.el&&(lastTarget=null)},_getDirection:function t(e,n){return typeof this.options.direction=="function"?this.options.direction.call(this,e,n,dragEl):this.options.direction},_onTapStart:function t(e){if(e.cancelable){var n=this,l=this.el,i=this.options,s=i.preventOnFilter,B=e.type,Q=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,c=(Q||e).target,a=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||c,F=i.filter;if(_saveInputCheckedState(l),!dragEl&&!(/mousedown|pointerdown/.test(B)&&e.button!==0||i.disabled)&&!a.isContentEditable&&!(!this.nativeDraggable&&Safari&&c&&c.tagName.toUpperCase()==="SELECT")&&(c=closest(c,i.draggable,l,!1),!(c&&c.animated)&&lastDownEl!==c)){if(oldIndex=index(c),oldDraggableIndex=index(c,i.draggable),typeof F=="function"){if(F.call(this,e,c,this)){_dispatchEvent({sortable:n,rootEl:a,name:"filter",targetEl:c,toEl:l,fromEl:l}),pluginEvent("filter",n,{evt:e}),s&&e.cancelable&&e.preventDefault();return}}else if(F&&(F=F.split(",").some(function(o){if(o=closest(a,o.trim(),l,!1),o)return _dispatchEvent({sortable:n,rootEl:o,name:"filter",targetEl:c,fromEl:l,toEl:l}),pluginEvent("filter",n,{evt:e}),!0}),F)){s&&e.cancelable&&e.preventDefault();return}i.handle&&!closest(a,i.handle,l,!1)||this._prepareDragStart(e,Q,c)}}},_prepareDragStart:function t(e,n,l){var i=this,s=i.el,B=i.options,Q=s.ownerDocument,c;if(l&&!dragEl&&l.parentNode===s){var a=getRect(l);if(rootEl=s,dragEl=l,parentEl=dragEl.parentNode,nextEl=dragEl.nextSibling,lastDownEl=l,activeGroup=B.group,Sortable.dragged=dragEl,tapEvt={target:dragEl,clientX:(n||e).clientX,clientY:(n||e).clientY},tapDistanceLeft=tapEvt.clientX-a.left,tapDistanceTop=tapEvt.clientY-a.top,this._lastX=(n||e).clientX,this._lastY=(n||e).clientY,dragEl.style["will-change"]="all",c=function(){if(pluginEvent("delayEnded",i,{evt:e}),Sortable.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!FireFox&&i.nativeDraggable&&(dragEl.draggable=!0),i._triggerDragStart(e,n),_dispatchEvent({sortable:i,name:"choose",originalEvent:e}),toggleClass(dragEl,B.chosenClass,!0)},B.ignore.split(",").forEach(function(F){find(dragEl,F.trim(),_disableDraggable)}),on(Q,"dragover",nearestEmptyInsertDetectEvent),on(Q,"mousemove",nearestEmptyInsertDetectEvent),on(Q,"touchmove",nearestEmptyInsertDetectEvent),on(Q,"mouseup",i._onDrop),on(Q,"touchend",i._onDrop),on(Q,"touchcancel",i._onDrop),FireFox&&this.nativeDraggable&&(this.options.touchStartThreshold=4,dragEl.draggable=!0),pluginEvent("delayStart",this,{evt:e}),B.delay&&(!B.delayOnTouchOnly||n)&&(!this.nativeDraggable||!(Edge||IE11OrLess))){if(Sortable.eventCanceled){this._onDrop();return}on(Q,"mouseup",i._disableDelayedDrag),on(Q,"touchend",i._disableDelayedDrag),on(Q,"touchcancel",i._disableDelayedDrag),on(Q,"mousemove",i._delayedDragTouchMoveHandler),on(Q,"touchmove",i._delayedDragTouchMoveHandler),B.supportPointer&&on(Q,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(c,B.delay)}else c()}},_delayedDragTouchMoveHandler:function t(e){var n=e.touches?e.touches[0]:e;Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function t(){dragEl&&_disableDraggable(dragEl),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function t(){var e=this.el.ownerDocument;off(e,"mouseup",this._disableDelayedDrag),off(e,"touchend",this._disableDelayedDrag),off(e,"touchcancel",this._disableDelayedDrag),off(e,"mousemove",this._delayedDragTouchMoveHandler),off(e,"touchmove",this._delayedDragTouchMoveHandler),off(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function t(e,n){n=n||e.pointerType=="touch"&&e,!this.nativeDraggable||n?this.options.supportPointer?on(document,"pointermove",this._onTouchMove):n?on(document,"touchmove",this._onTouchMove):on(document,"mousemove",this._onTouchMove):(on(dragEl,"dragend",this),on(rootEl,"dragstart",this._onDragStart));try{document.selection?_nextTick(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function t(e,n){if(awaitingDragStarted=!1,rootEl&&dragEl){pluginEvent("dragStarted",this,{evt:n}),this.nativeDraggable&&on(document,"dragover",_checkOutsideTargetEl);var l=this.options;!e&&toggleClass(dragEl,l.dragClass,!1),toggleClass(dragEl,l.ghostClass,!0),Sortable.active=this,e&&this._appendGhost(),_dispatchEvent({sortable:this,name:"start",originalEvent:n})}else this._nulling()},_emulateDragOver:function t(){if(touchEvt){this._lastX=touchEvt.clientX,this._lastY=touchEvt.clientY,_hideGhostForTarget();for(var e=document.elementFromPoint(touchEvt.clientX,touchEvt.clientY),n=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(touchEvt.clientX,touchEvt.clientY),e!==n);)n=e;if(dragEl.parentNode[expando]._isOutsideThisEl(e),n)do{if(n[expando]){var l=void 0;if(l=n[expando]._onDragOver({clientX:touchEvt.clientX,clientY:touchEvt.clientY,target:e,rootEl:n}),l&&!this.options.dragoverBubble)break}e=n}while(n=n.parentNode);_unhideGhostForTarget()}},_onTouchMove:function t(e){if(tapEvt){var n=this.options,l=n.fallbackTolerance,i=n.fallbackOffset,s=e.touches?e.touches[0]:e,B=ghostEl&&matrix(ghostEl,!0),Q=ghostEl&&B&&B.a,c=ghostEl&&B&&B.d,a=PositionGhostAbsolutely&&ghostRelativeParent&&getRelativeScrollOffset(ghostRelativeParent),F=(s.clientX-tapEvt.clientX+i.x)/(Q||1)+(a?a[0]-ghostRelativeParentInitialScroll[0]:0)/(Q||1),o=(s.clientY-tapEvt.clientY+i.y)/(c||1)+(a?a[1]-ghostRelativeParentInitialScroll[1]:0)/(c||1);if(!Sortable.active&&!awaitingDragStarted){if(l&&Math.max(Math.abs(s.clientX-this._lastX),Math.abs(s.clientY-this._lastY))<l)return;this._onDragStart(e,!0)}if(ghostEl){B?(B.e+=F-(lastDx||0),B.f+=o-(lastDy||0)):B={a:1,b:0,c:0,d:1,e:F,f:o};var r="matrix(".concat(B.a,",").concat(B.b,",").concat(B.c,",").concat(B.d,",").concat(B.e,",").concat(B.f,")");css(ghostEl,"webkitTransform",r),css(ghostEl,"mozTransform",r),css(ghostEl,"msTransform",r),css(ghostEl,"transform",r),lastDx=F,lastDy=o,touchEvt=s}e.cancelable&&e.preventDefault()}},_appendGhost:function t(){if(!ghostEl){var e=this.options.fallbackOnBody?document.body:rootEl,n=getRect(dragEl,!0,PositionGhostAbsolutely,!0,e),l=this.options;if(PositionGhostAbsolutely){for(ghostRelativeParent=e;css(ghostRelativeParent,"position")==="static"&&css(ghostRelativeParent,"transform")==="none"&&ghostRelativeParent!==document;)ghostRelativeParent=ghostRelativeParent.parentNode;ghostRelativeParent!==document.body&&ghostRelativeParent!==document.documentElement?(ghostRelativeParent===document&&(ghostRelativeParent=getWindowScrollingElement()),n.top+=ghostRelativeParent.scrollTop,n.left+=ghostRelativeParent.scrollLeft):ghostRelativeParent=getWindowScrollingElement(),ghostRelativeParentInitialScroll=getRelativeScrollOffset(ghostRelativeParent)}ghostEl=dragEl.cloneNode(!0),toggleClass(ghostEl,l.ghostClass,!1),toggleClass(ghostEl,l.fallbackClass,!0),toggleClass(ghostEl,l.dragClass,!0),css(ghostEl,"transition",""),css(ghostEl,"transform",""),css(ghostEl,"box-sizing","border-box"),css(ghostEl,"margin",0),css(ghostEl,"top",n.top),css(ghostEl,"left",n.left),css(ghostEl,"width",n.width),css(ghostEl,"height",n.height),css(ghostEl,"opacity","0.8"),css(ghostEl,"position",PositionGhostAbsolutely?"absolute":"fixed"),css(ghostEl,"zIndex","100000"),css(ghostEl,"pointerEvents","none"),Sortable.ghost=ghostEl,e.appendChild(ghostEl),css(ghostEl,"transform-origin",tapDistanceLeft/parseInt(ghostEl.style.width)*100+"% "+tapDistanceTop/parseInt(ghostEl.style.height)*100+"%")}},_onDragStart:function t(e,n){var l=this,i=e.dataTransfer,s=l.options;if(pluginEvent("dragStart",this,{evt:e}),Sortable.eventCanceled){this._onDrop();return}pluginEvent("setupClone",this),Sortable.eventCanceled||(cloneEl=clone(dragEl),cloneEl.removeAttribute("id"),cloneEl.draggable=!1,cloneEl.style["will-change"]="",this._hideClone(),toggleClass(cloneEl,this.options.chosenClass,!1),Sortable.clone=cloneEl),l.cloneId=_nextTick(function(){pluginEvent("clone",l),!Sortable.eventCanceled&&(l.options.removeCloneOnHide||rootEl.insertBefore(cloneEl,dragEl),l._hideClone(),_dispatchEvent({sortable:l,name:"clone"}))}),!n&&toggleClass(dragEl,s.dragClass,!0),n?(ignoreNextClick=!0,l._loopId=setInterval(l._emulateDragOver,50)):(off(document,"mouseup",l._onDrop),off(document,"touchend",l._onDrop),off(document,"touchcancel",l._onDrop),i&&(i.effectAllowed="move",s.setData&&s.setData.call(l,i,dragEl)),on(document,"drop",l),css(dragEl,"transform","translateZ(0)")),awaitingDragStarted=!0,l._dragStartId=_nextTick(l._dragStarted.bind(l,n,e)),on(document,"selectstart",l),moved=!0,Safari&&css(document.body,"user-select","none")},_onDragOver:function t(e){var n=this.el,l=e.target,i,s,B,Q=this.options,c=Q.group,a=Sortable.active,F=activeGroup===c,o=Q.sort,r=putSortable||a,U,b=this,u=!1;if(_silent)return;function d(h,y){pluginEvent(h,b,_objectSpread2({evt:e,isOwner:F,axis:U?"vertical":"horizontal",revert:B,dragRect:i,targetRect:s,canSort:o,fromSortable:r,target:l,completed:I,onMove:function(N,f){return _onMove(rootEl,n,dragEl,i,N,getRect(N),e,f)},changed:C},y))}function g(){d("dragOverAnimationCapture"),b.captureAnimationState(),b!==r&&r.captureAnimationState()}function I(h){return d("dragOverCompleted",{insertion:h}),h&&(F?a._hideClone():a._showClone(b),b!==r&&(toggleClass(dragEl,putSortable?putSortable.options.ghostClass:a.options.ghostClass,!1),toggleClass(dragEl,Q.ghostClass,!0)),putSortable!==b&&b!==Sortable.active?putSortable=b:b===Sortable.active&&putSortable&&(putSortable=null),r===b&&(b._ignoreWhileAnimating=l),b.animateAll(function(){d("dragOverAnimationComplete"),b._ignoreWhileAnimating=null}),b!==r&&(r.animateAll(),r._ignoreWhileAnimating=null)),(l===dragEl&&!dragEl.animated||l===n&&!l.animated)&&(lastTarget=null),!Q.dragoverBubble&&!e.rootEl&&l!==document&&(dragEl.parentNode[expando]._isOutsideThisEl(e.target),!h&&nearestEmptyInsertDetectEvent(e)),!Q.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),u=!0}function C(){newIndex=index(dragEl),newDraggableIndex=index(dragEl,Q.draggable),_dispatchEvent({sortable:b,name:"change",toEl:n,newIndex,newDraggableIndex,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),l=closest(l,Q.draggable,n,!0),d("dragOver"),Sortable.eventCanceled)return u;if(dragEl.contains(e.target)||l.animated&&l.animatingX&&l.animatingY||b._ignoreWhileAnimating===l)return I(!1);if(ignoreNextClick=!1,a&&!Q.disabled&&(F?o||(B=parentEl!==rootEl):putSortable===this||(this.lastPutMode=activeGroup.checkPull(this,a,dragEl,e))&&c.checkPut(this,a,dragEl,e))){if(U=this._getDirection(e,l)==="vertical",i=getRect(dragEl),d("dragOverValid"),Sortable.eventCanceled)return u;if(B)return parentEl=rootEl,g(),this._hideClone(),d("revert"),Sortable.eventCanceled||(nextEl?rootEl.insertBefore(dragEl,nextEl):rootEl.appendChild(dragEl)),I(!0);var V=lastChild(n,Q.draggable);if(!V||_ghostIsLast(e,U,this)&&!V.animated){if(V===dragEl)return I(!1);if(V&&n===e.target&&(l=V),l&&(s=getRect(l)),_onMove(rootEl,n,dragEl,i,l,s,e,!!l)!==!1)return g(),V&&V.nextSibling?n.insertBefore(dragEl,V.nextSibling):n.appendChild(dragEl),parentEl=n,C(),I(!0)}else if(V&&_ghostIsFirst(e,U,this)){var L=getChild(n,0,Q,!0);if(L===dragEl)return I(!1);if(l=L,s=getRect(l),_onMove(rootEl,n,dragEl,i,l,s,e,!1)!==!1)return g(),n.insertBefore(dragEl,L),parentEl=n,C(),I(!0)}else if(l.parentNode===n){s=getRect(l);var m=0,G,S=dragEl.parentNode!==n,Z=!_dragElInRowColumn(dragEl.animated&&dragEl.toRect||i,l.animated&&l.toRect||s,U),R=U?"top":"left",E=isScrolledPast(l,"top","top")||isScrolledPast(dragEl,"top","top"),x=E?E.scrollTop:void 0;lastTarget!==l&&(G=s[R],pastFirstInvertThresh=!1,isCircumstantialInvert=!Z&&Q.invertSwap||S),m=_getSwapDirection(e,l,s,U,Z?1:Q.swapThreshold,Q.invertedSwapThreshold==null?Q.swapThreshold:Q.invertedSwapThreshold,isCircumstantialInvert,lastTarget===l);var p;if(m!==0){var W=index(dragEl);do W-=m,p=parentEl.children[W];while(p&&(css(p,"display")==="none"||p===ghostEl))}if(m===0||p===l)return I(!1);lastTarget=l,lastDirection=m;var X=l.nextElementSibling,_=!1;_=m===1;var A=_onMove(rootEl,n,dragEl,i,l,s,e,_);if(A!==!1)return(A===1||A===-1)&&(_=A===1),_silent=!0,setTimeout(_unsilent,30),g(),_&&!X?n.appendChild(dragEl):l.parentNode.insertBefore(dragEl,_?X:l),E&&scrollBy(E,0,x-E.scrollTop),parentEl=dragEl.parentNode,G!==void 0&&!isCircumstantialInvert&&(targetMoveDistance=Math.abs(G-getRect(l)[R])),C(),I(!0)}if(n.contains(dragEl))return I(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function t(){off(document,"mousemove",this._onTouchMove),off(document,"touchmove",this._onTouchMove),off(document,"pointermove",this._onTouchMove),off(document,"dragover",nearestEmptyInsertDetectEvent),off(document,"mousemove",nearestEmptyInsertDetectEvent),off(document,"touchmove",nearestEmptyInsertDetectEvent)},_offUpEvents:function t(){var e=this.el.ownerDocument;off(e,"mouseup",this._onDrop),off(e,"touchend",this._onDrop),off(e,"pointerup",this._onDrop),off(e,"touchcancel",this._onDrop),off(document,"selectstart",this)},_onDrop:function t(e){var n=this.el,l=this.options;if(newIndex=index(dragEl),newDraggableIndex=index(dragEl,l.draggable),pluginEvent("drop",this,{evt:e}),parentEl=dragEl&&dragEl.parentNode,newIndex=index(dragEl),newDraggableIndex=index(dragEl,l.draggable),Sortable.eventCanceled){this._nulling();return}awaitingDragStarted=!1,isCircumstantialInvert=!1,pastFirstInvertThresh=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),_cancelNextTick(this.cloneId),_cancelNextTick(this._dragStartId),this.nativeDraggable&&(off(document,"drop",this),off(n,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Safari&&css(document.body,"user-select",""),css(dragEl,"transform",""),e&&(moved&&(e.cancelable&&e.preventDefault(),!l.dropBubble&&e.stopPropagation()),ghostEl&&ghostEl.parentNode&&ghostEl.parentNode.removeChild(ghostEl),(rootEl===parentEl||putSortable&&putSortable.lastPutMode!=="clone")&&cloneEl&&cloneEl.parentNode&&cloneEl.parentNode.removeChild(cloneEl),dragEl&&(this.nativeDraggable&&off(dragEl,"dragend",this),_disableDraggable(dragEl),dragEl.style["will-change"]="",moved&&!awaitingDragStarted&&toggleClass(dragEl,putSortable?putSortable.options.ghostClass:this.options.ghostClass,!1),toggleClass(dragEl,this.options.chosenClass,!1),_dispatchEvent({sortable:this,name:"unchoose",toEl:parentEl,newIndex:null,newDraggableIndex:null,originalEvent:e}),rootEl!==parentEl?(newIndex>=0&&(_dispatchEvent({rootEl:parentEl,name:"add",toEl:parentEl,fromEl:rootEl,originalEvent:e}),_dispatchEvent({sortable:this,name:"remove",toEl:parentEl,originalEvent:e}),_dispatchEvent({rootEl:parentEl,name:"sort",toEl:parentEl,fromEl:rootEl,originalEvent:e}),_dispatchEvent({sortable:this,name:"sort",toEl:parentEl,originalEvent:e})),putSortable&&putSortable.save()):newIndex!==oldIndex&&newIndex>=0&&(_dispatchEvent({sortable:this,name:"update",toEl:parentEl,originalEvent:e}),_dispatchEvent({sortable:this,name:"sort",toEl:parentEl,originalEvent:e})),Sortable.active&&((newIndex==null||newIndex===-1)&&(newIndex=oldIndex,newDraggableIndex=oldDraggableIndex),_dispatchEvent({sortable:this,name:"end",toEl:parentEl,originalEvent:e}),this.save()))),this._nulling()},_nulling:function t(){pluginEvent("nulling",this),rootEl=dragEl=parentEl=ghostEl=nextEl=cloneEl=lastDownEl=cloneHidden=tapEvt=touchEvt=moved=newIndex=newDraggableIndex=oldIndex=oldDraggableIndex=lastTarget=lastDirection=putSortable=activeGroup=Sortable.dragged=Sortable.ghost=Sortable.clone=Sortable.active=null,savedInputChecked.forEach(function(e){e.checked=!0}),savedInputChecked.length=lastDx=lastDy=0},handleEvent:function t(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":dragEl&&(this._onDragOver(e),_globalDragOver(e));break;case"selectstart":e.preventDefault();break}},toArray:function t(){for(var e=[],n,l=this.el.children,i=0,s=l.length,B=this.options;i<s;i++)n=l[i],closest(n,B.draggable,this.el,!1)&&e.push(n.getAttribute(B.dataIdAttr)||_generateId(n));return e},sort:function t(e,n){var l={},i=this.el;this.toArray().forEach(function(s,B){var Q=i.children[B];closest(Q,this.options.draggable,i,!1)&&(l[s]=Q)},this),n&&this.captureAnimationState(),e.forEach(function(s){l[s]&&(i.removeChild(l[s]),i.appendChild(l[s]))}),n&&this.animateAll()},save:function t(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function t(e,n){return closest(e,n||this.options.draggable,this.el,!1)},option:function t(e,n){var l=this.options;if(n===void 0)return l[e];var i=PluginManager.modifyOption(this,e,n);typeof i<"u"?l[e]=i:l[e]=n,e==="group"&&_prepareGroup(l)},destroy:function t(){pluginEvent("destroy",this);var e=this.el;e[expando]=null,off(e,"mousedown",this._onTapStart),off(e,"touchstart",this._onTapStart),off(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(off(e,"dragover",this),off(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(n){n.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),sortables.splice(sortables.indexOf(this.el),1),this.el=e=null},_hideClone:function t(){if(!cloneHidden){if(pluginEvent("hideClone",this),Sortable.eventCanceled)return;css(cloneEl,"display","none"),this.options.removeCloneOnHide&&cloneEl.parentNode&&cloneEl.parentNode.removeChild(cloneEl),cloneHidden=!0}},_showClone:function t(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(cloneHidden){if(pluginEvent("showClone",this),Sortable.eventCanceled)return;dragEl.parentNode==rootEl&&!this.options.group.revertClone?rootEl.insertBefore(cloneEl,dragEl):nextEl?rootEl.insertBefore(cloneEl,nextEl):rootEl.appendChild(cloneEl),this.options.group.revertClone&&this.animate(dragEl,cloneEl),css(cloneEl,"display",""),cloneHidden=!1}}};function _globalDragOver(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function _onMove(t,e,n,l,i,s,B,Q){var c,a=t[expando],F=a.options.onMove,o;return window.CustomEvent&&!IE11OrLess&&!Edge?c=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(c=document.createEvent("Event"),c.initEvent("move",!0,!0)),c.to=e,c.from=t,c.dragged=n,c.draggedRect=l,c.related=i||e,c.relatedRect=s||getRect(e),c.willInsertAfter=Q,c.originalEvent=B,t.dispatchEvent(c),F&&(o=F.call(a,c,B)),o}function _disableDraggable(t){t.draggable=!1}function _unsilent(){_silent=!1}function _ghostIsFirst(t,e,n){var l=getRect(getChild(n.el,0,n.options,!0)),i=getChildContainingRectFromElement(n.el,n.options,ghostEl),s=10;return e?t.clientX<i.left-s||t.clientY<l.top&&t.clientX<l.right:t.clientY<i.top-s||t.clientY<l.bottom&&t.clientX<l.left}function _ghostIsLast(t,e,n){var l=getRect(lastChild(n.el,n.options.draggable)),i=getChildContainingRectFromElement(n.el,n.options,ghostEl),s=10;return e?t.clientX>i.right+s||t.clientY>l.bottom&&t.clientX>l.left:t.clientY>i.bottom+s||t.clientX>l.right&&t.clientY>l.top}function _getSwapDirection(t,e,n,l,i,s,B,Q){var c=l?t.clientY:t.clientX,a=l?n.height:n.width,F=l?n.top:n.left,o=l?n.bottom:n.right,r=!1;if(!B){if(Q&&targetMoveDistance<a*i){if(!pastFirstInvertThresh&&(lastDirection===1?c>F+a*s/2:c<o-a*s/2)&&(pastFirstInvertThresh=!0),pastFirstInvertThresh)r=!0;else if(lastDirection===1?c<F+targetMoveDistance:c>o-targetMoveDistance)return-lastDirection}else if(c>F+a*(1-i)/2&&c<o-a*(1-i)/2)return _getInsertDirection(e)}return r=r||B,r&&(c<F+a*s/2||c>o-a*s/2)?c>F+a/2?1:-1:0}function _getInsertDirection(t){return index(dragEl)<index(t)?1:-1}function _generateId(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,l=0;n--;)l+=e.charCodeAt(n);return l.toString(36)}function _saveInputCheckedState(t){savedInputChecked.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var l=e[n];l.checked&&savedInputChecked.push(l)}}function _nextTick(t){return setTimeout(t,0)}function _cancelNextTick(t){return clearTimeout(t)}documentExists&&on(document,"touchmove",function(t){(Sortable.active||awaitingDragStarted)&&t.cancelable&&t.preventDefault()});Sortable.utils={on,off,css,find,is:function t(e,n){return!!closest(e,n,e,!1)},extend,throttle,closest,toggleClass,clone,index,nextTick:_nextTick,cancelNextTick:_cancelNextTick,detectDirection:_detectDirection,getChild};Sortable.get=function(t){return t[expando]};Sortable.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(l){if(!l.prototype||!l.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));l.utils&&(Sortable.utils=_objectSpread2(_objectSpread2({},Sortable.utils),l.utils)),PluginManager.mount(l)})};Sortable.create=function(t,e){return new Sortable(t,e)};Sortable.version=version;var autoScrolls=[],scrollEl,scrollRootEl,scrolling=!1,lastAutoScrollX,lastAutoScrollY,touchEvt$1,pointerElemChangedInterval;function AutoScrollPlugin(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(n){var l=n.originalEvent;this.sortable.nativeDraggable?on(document,"dragover",this._handleAutoScroll):this.options.supportPointer?on(document,"pointermove",this._handleFallbackAutoScroll):l.touches?on(document,"touchmove",this._handleFallbackAutoScroll):on(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(n){var l=n.originalEvent;!this.options.dragOverBubble&&!l.rootEl&&this._handleAutoScroll(l)},drop:function(){this.sortable.nativeDraggable?off(document,"dragover",this._handleAutoScroll):(off(document,"pointermove",this._handleFallbackAutoScroll),off(document,"touchmove",this._handleFallbackAutoScroll),off(document,"mousemove",this._handleFallbackAutoScroll)),clearPointerElemChangedInterval(),clearAutoScrolls(),cancelThrottle()},nulling:function(){touchEvt$1=scrollRootEl=scrollEl=scrolling=pointerElemChangedInterval=lastAutoScrollX=lastAutoScrollY=null,autoScrolls.length=0},_handleFallbackAutoScroll:function(n){this._handleAutoScroll(n,!0)},_handleAutoScroll:function(n,l){var i=this,s=(n.touches?n.touches[0]:n).clientX,B=(n.touches?n.touches[0]:n).clientY,Q=document.elementFromPoint(s,B);if(touchEvt$1=n,l||this.options.forceAutoScrollFallback||Edge||IE11OrLess||Safari){autoScroll(n,this.options,Q,l);var c=getParentAutoScrollElement(Q,!0);scrolling&&(!pointerElemChangedInterval||s!==lastAutoScrollX||B!==lastAutoScrollY)&&(pointerElemChangedInterval&&clearPointerElemChangedInterval(),pointerElemChangedInterval=setInterval(function(){var a=getParentAutoScrollElement(document.elementFromPoint(s,B),!0);a!==c&&(c=a,clearAutoScrolls()),autoScroll(n,i.options,a,l)},10),lastAutoScrollX=s,lastAutoScrollY=B)}else{if(!this.options.bubbleScroll||getParentAutoScrollElement(Q,!0)===getWindowScrollingElement()){clearAutoScrolls();return}autoScroll(n,this.options,getParentAutoScrollElement(Q,!1),!1)}}},_extends(t,{pluginName:"scroll",initializeByDefault:!0})}function clearAutoScrolls(){autoScrolls.forEach(function(t){clearInterval(t.pid)}),autoScrolls=[]}function clearPointerElemChangedInterval(){clearInterval(pointerElemChangedInterval)}var autoScroll=throttle(function(t,e,n,l){if(e.scroll){var i=(t.touches?t.touches[0]:t).clientX,s=(t.touches?t.touches[0]:t).clientY,B=e.scrollSensitivity,Q=e.scrollSpeed,c=getWindowScrollingElement(),a=!1,F;scrollRootEl!==n&&(scrollRootEl=n,clearAutoScrolls(),scrollEl=e.scroll,F=e.scrollFn,scrollEl===!0&&(scrollEl=getParentAutoScrollElement(n,!0)));var o=0,r=scrollEl;do{var U=r,b=getRect(U),u=b.top,d=b.bottom,g=b.left,I=b.right,C=b.width,V=b.height,L=void 0,m=void 0,G=U.scrollWidth,S=U.scrollHeight,Z=css(U),R=U.scrollLeft,E=U.scrollTop;U===c?(L=C<G&&(Z.overflowX==="auto"||Z.overflowX==="scroll"||Z.overflowX==="visible"),m=V<S&&(Z.overflowY==="auto"||Z.overflowY==="scroll"||Z.overflowY==="visible")):(L=C<G&&(Z.overflowX==="auto"||Z.overflowX==="scroll"),m=V<S&&(Z.overflowY==="auto"||Z.overflowY==="scroll"));var x=L&&(Math.abs(I-i)<=B&&R+C<G)-(Math.abs(g-i)<=B&&!!R),p=m&&(Math.abs(d-s)<=B&&E+V<S)-(Math.abs(u-s)<=B&&!!E);if(!autoScrolls[o])for(var W=0;W<=o;W++)autoScrolls[W]||(autoScrolls[W]={});(autoScrolls[o].vx!=x||autoScrolls[o].vy!=p||autoScrolls[o].el!==U)&&(autoScrolls[o].el=U,autoScrolls[o].vx=x,autoScrolls[o].vy=p,clearInterval(autoScrolls[o].pid),(x!=0||p!=0)&&(a=!0,autoScrolls[o].pid=setInterval((function(){l&&this.layer===0&&Sortable.active._onTouchMove(touchEvt$1);var X=autoScrolls[this.layer].vy?autoScrolls[this.layer].vy*Q:0,_=autoScrolls[this.layer].vx?autoScrolls[this.layer].vx*Q:0;typeof F=="function"&&F.call(Sortable.dragged.parentNode[expando],_,X,t,touchEvt$1,autoScrolls[this.layer].el)!=="continue"||scrollBy(autoScrolls[this.layer].el,_,X)}).bind({layer:o}),24))),o++}while(e.bubbleScroll&&r!==c&&(r=getParentAutoScrollElement(r,!1)));scrolling=a}},30),drop=function t(e){var n=e.originalEvent,l=e.putSortable,i=e.dragEl,s=e.activeSortable,B=e.dispatchSortableEvent,Q=e.hideGhostForTarget,c=e.unhideGhostForTarget;if(n){var a=l||s;Q();var F=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,o=document.elementFromPoint(F.clientX,F.clientY);c(),a&&!a.el.contains(o)&&(B("spill"),this.onSpill({dragEl:i,putSortable:l}))}};function Revert(){}Revert.prototype={startIndex:null,dragStart:function t(e){var n=e.oldDraggableIndex;this.startIndex=n},onSpill:function t(e){var n=e.dragEl,l=e.putSortable;this.sortable.captureAnimationState(),l&&l.captureAnimationState();var i=getChild(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(n,i):this.sortable.el.appendChild(n),this.sortable.animateAll(),l&&l.animateAll()},drop};_extends(Revert,{pluginName:"revertOnSpill"});function Remove(){}Remove.prototype={onSpill:function t(e){var n=e.dragEl,l=e.putSortable,i=l||this.sortable;i.captureAnimationState(),n.parentNode&&n.parentNode.removeChild(n),i.animateAll()},drop};_extends(Remove,{pluginName:"removeOnSpill"});Sortable.mount(new AutoScrollPlugin);Sortable.mount(Remove,Revert);window.Alpine=module_default;window.Filtro=Filtro;window.Ajax=Ajax$1;window.Tela=Tela$1;window.Sortable=Sortable;module_default.start();
