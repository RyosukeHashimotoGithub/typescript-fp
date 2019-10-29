// http://bitterharvest.hatenablog.com/entry/2014/12/09/072542


// 問題１（加算）：xの値を325とし、yの値を567とし、zをx + yとしたとき、zの値を求める。
const plus =
  (x: number) =>
    (y: number) =>
      x + y;
// console.log(plus(325)(567));

// 問題２（減算）：xの値を743とし、yの値を321とし、zをx - yとしたとき、zの値を求める。
const minus =
  (x: number) =>
    (y: number) =>
      x - y;
// console.log(minus(743)(321));

// 問題３（乗算）：xの値を42とし、yの値を13とし、zをx * yとしたとき、zの値を求める。
const multiply =
  (x: number) =>
    (y: number) =>
      x * y;
// console.log(multiply(42)(13));

// 問題４（除算）：xの値を46とし、yの値を32とし、zをx / yとしたとき、zの値を求める。
const divide =
  (x: number) =>
    (y: number) =>
      x / y;
// console.log(divide(46)(32));

// 問題５：x=5, y=23, z=35, a = x + y - zとした時のaを求めなさい。
const a =
  (x: number) =>
    (y: number) =>
      (z: number) => {
        const res = plus(x)(y);
        return minus(res)(z);
      };
// console.log(a(5)(23)(35));

// 問題６：x = 51, y = 19, z = 32, a = (x + y) / zとした時のaを求めなさい。
const b =
  (x: number) =>
    (y: number) =>
      (z: number) => {
        const res = plus(x)(y);
        return divide(res)(z);
      }
// console.log(b(51)(19)(32));

// 問題７：x = 51, y = 19, z = 32, a = x + y / zとした時のaを求めなさい。
const c =
  (x: number) =>
    (y: number) =>
      (z: number) => {
        const res = divide(y)(z);
        return plus(x)(res);
      }
// console.log(c(51)(19)(32));

// 問題８：x = 51, y = 19, z = 32, a = (x + y) / zとした時のaを求めなさい。
// console.log(b(51)(19)(32));

// 問題９：x = 12, y = 42, z = 3, a = (x + y) * zとした時のaを求めなさい。
const d =
  (x: number) =>
    (y: number) =>
      (z: number) => {
        const res = plus(x)(y);
        return multiply(res)(z);
      }
// console.log(d(12)(42)(3));

// 問題１０：x = 12, y = 42, z = 3, a = x + y * zとした時のaを求めなさい。
const e =
  (x: number) =>
    (y: number) =>
      (z: number) => {
        const res = multiply(y)(z);
        return plus(x)(res);
      }
console.log(e(12)(42)(3));
