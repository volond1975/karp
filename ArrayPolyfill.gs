if (!Array.prototype.filter) {
  Array.prototype.filter = function(fun/*, thisArg*/) {
    'use strict';
Logger.log('Array.prototype.filter')
    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var res = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i];

        // ПРИМЕЧАНИЕ: Технически, здесь должен быть Object.defineProperty на
        //             следующий индекс, поскольку push может зависеть от
        //             свойств на Object.prototype и Array.prototype.
        //             Но этот метод новый и коллизии должны быть редкими,
        //             так что используем более совместимую альтернативу.
        if (fun.call(thisArg, val, i, t)) {
          res.push(val);
        }
      }
    }

    return res;
  };
}

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
function flatten(array) {
  var flattend = [];
  (function flat(array) {
    array.forEach(function(el) {
      if (Array.isArray(el)) flat(el);
      else flattend.push(el);
    });
  })(array);
  return flattend;
}




function transpose(a) {

  // Calculate the width and height of the Array
  var w = a.length || 0;
  var h = a[0] instanceof Array ? a[0].length : 0;

  // In case it is a zero matrix, no transpose routine needed.
  if(h === 0 || w === 0) { return []; }

  /**
   * @var {Number} i Counter
   * @var {Number} j Counter
   * @var {Array} t Transposed data is stored in this array.
   */
  var i, j, t = [];

  // Loop through every item in the outer array (height)
  for(i=0; i<h; i++) {

    // Insert a new row (array)
    t[i] = [];

    // Loop through every item per item in outer array (width)
    for(j=0; j<w; j++) {

      // Save transposed data.
      t[i][j] = a[j][i];
    }
  }

  return t;
}

