// http://bitterharvest.hatenablog.com/entry/2014/12/09/105243


// 問題1：３つの数を掛け合わせた関数multiply3 x y zを作成しなさい。また、変数に値を与えて、正しく動くことを確認しなさい。
const multiply3 =
  (x: number) =>
    (y: number) =>
      (z: number) =>
        x * y * z;
// console.log(multiply3(2)(4)(6));

// 問題２：２つの数の二乗を足し合わせた関数square2 x yを作成しなさい。また、変数に値を与えて、正しく動くことを確認しなさい。
const square2 =
  (x: number) =>
    (y: number) =>
      x * x + y * y;
// console.log(square2(3)(5));

// 問題３：３つの数を足し合わせ、その合計の二乗を得る関数square3 x y zを作成しなさい。また、変数に値を与えて、正しく動くことを確認しなさい。
const square3 =
  (x: number) =>
    (y: number) =>
      (z: number) => {
        const sum = x + y + z;
        return sum * sum;
      }
// console.log(square3(1)(2)(3));

// 問題４：三角形の底辺をa、高さをhとしたとき三角形の面積を求める関数triangle a hを作成しなさい。また、変数に値を与えて、正しく動くことを確認しなさい。
const triangle =
  (a: number) =>
    (h: number) =>
      a * h / 2;
// console.log(triangle(15)(28));

// 問題５：円の半径をrとしたとき円周を求める関数circumference rを作成しなさい。また、変数に値を与えて、正しく動くことを確認しなさい。
const circumference =
  (r: number) =>
    r * 3.14;
// console.log(circumference(8));

// 問題６：正六角形の一片の長さをaとしたとき、その面積を求める関数hexagon aを作成しなさい。また、変数に値を与えて、正しく動くことを確認しなさい。
const hexagon =
  (a: number) =>
    a * a * 2.6;
console.log(hexagon(6));