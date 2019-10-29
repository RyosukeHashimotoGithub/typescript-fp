// http://bitterharvest.hatenablog.com/entry/2014/12/09/072542
// 問題１（加算）：xの値を325とし、yの値を567とし、zをx + yとしたとき、zの値を求める。
var plus = function (x) {
    return function (y) {
        return x + y;
    };
};
// console.log(plus(325)(567));
// 問題２（減算）：xの値を743とし、yの値を321とし、zをx - yとしたとき、zの値を求める。
var minus = function (x) {
    return function (y) {
        return x - y;
    };
};
// console.log(minus(743)(321));
// 問題３（乗算）：xの値を42とし、yの値を13とし、zをx * yとしたとき、zの値を求める。
var multiply = function (x) {
    return function (y) {
        return x * y;
    };
};
// console.log(multiply(42)(13));
// 問題４（除算）：xの値を46とし、yの値を32とし、zをx / yとしたとき、zの値を求める。
var divide = function (x) {
    return function (y) {
        return x / y;
    };
};
// console.log(divide(46)(32));
// 問題５：x=5, y=23, z=35, a = x + y - zとした時のaを求めなさい。
var a = function (x) {
    return function (y) {
        return function (z) {
            var res = plus(x)(y);
            return minus(res)(z);
        };
    };
};
// console.log(a(5)(23)(35));
// 問題６：x = 51, y = 19, z = 32, a = (x + y) / zとした時のaを求めなさい。
var b = function (x) {
    return function (y) {
        return function (z) {
            var res = plus(x)(y);
            return divide(res)(z);
        };
    };
};
// console.log(b(51)(19)(32));
// 問題７：x = 51, y = 19, z = 32, a = x + y / zとした時のaを求めなさい。
var c = function (x) {
    return function (y) {
        return function (z) {
            var res = divide(y)(z);
            return plus(x)(res);
        };
    };
};
// console.log(c(51)(19)(32));
// 問題８：x = 51, y = 19, z = 32, a = (x + y) / zとした時のaを求めなさい。
// console.log(b(51)(19)(32));
// 問題９：x = 12, y = 42, z = 3, a = (x + y) * zとした時のaを求めなさい。
var d = function (x) {
    return function (y) {
        return function (z) {
            var res = plus(x)(y);
            return multiply(res)(z);
        };
    };
};
// console.log(d(12)(42)(3));
// 問題１０：x = 12, y = 42, z = 3, a = x + y * zとした時のaを求めなさい。
var e = function (x) {
    return function (y) {
        return function (z) {
            var res = multiply(y)(z);
            return plus(x)(res);
        };
    };
};
console.log(e(12)(42)(3));
