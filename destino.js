"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ColorGenerator = /*#__PURE__*/function () {
  function ColorGenerator() {
    _classCallCheck(this, ColorGenerator);
  }
  return _createClass(ColorGenerator, null, [{
    key: "getRandomNumber",
    value:
    // Método para generar un número aleatorio entre un rango dado
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Método para generar un color aleatorio en formato RGB
  }, {
    key: "getRandomColor",
    value: function getRandomColor() {
      var red = ColorGenerator.getRandomNumber(0, 255);
      var green = ColorGenerator.getRandomNumber(0, 255);
      var blue = ColorGenerator.getRandomNumber(0, 255);
      return "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
    }

    // Método para generar un color aleatorio y mostrarlo por consola
  }, {
    key: "displayRandomColor",
    value: function displayRandomColor() {
      var randomColor = ColorGenerator.getRandomColor();
      console.log("Color aleatorio:", randomColor);
    }
  }]);
}(); // Llamar al método para mostrar un color aleatorio por consola
ColorGenerator.displayRandomColor();
