'use strict'

var _interopRequireDefault = require('@babel/runtime-corejs3/helpers/interopRequireDefault')

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime-corejs3/helpers/classCallCheck'))

var _createClass2 = _interopRequireDefault(require('@babel/runtime-corejs3/helpers/createClass'))

var Point = /*#__PURE__*/ (function () {
  function Point(x, y) {
    ;(0, _classCallCheck2['default'])(this, Point)
    this.x = x
    this.y = y
  }

  ;(0, _createClass2['default'])(Point, [
    {
      key: 'getX',
      value: function getX() {
        return this.x
      }
    }
  ])
  return Point
})()

var cp = new Point(25, 8)
