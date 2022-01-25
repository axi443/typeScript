// console.log('hello TS')
// let a: number
// a = 10
// a = 20
// let b: string = 'hello'

// function sum(a: number, b: number): number {
//     return a + b
// }
//
// sum(20, 40)
// 字面量
// let a : "haha" | "heihei"
// a = "haha"
// a = "heihei"
// a = "hehe"

// 设置为any类型，相当于对该变量关闭ts类型检测, 赋值任何类型皆可。
// 声明变量不指定类型，ts会自动判断类型为any (隐式)
/*
let s: string;
let ss: unknown;
ss = 10;
ss = true;
ss = "hello";
// s = ss;
s = ss as string;
//    || =
s = <string>ss;
//void用来表示空，函数：表示没有返回值的函数
function fn(): void {
  // return null
  return undefined;
}
//never 表示永远不会返回结果
function fn2(): never {
  throw new Error("报错了");
}
let a: object;
a = {};
a = function () {};
//  ?表示可选
let b: { name: string; age?: number };
b = { name: "孙行者", age: 21 };
let c: { name: string; [p: string]: any };
c = { name: "孙悟空", age: 22, gender: "男" };

let d: (a: number, b: number) => number;
d = (n1, n2) => n1 + n2;

let e: string[];
e = ["a", "b"];
let f: Array<number>;
f = [1, 2, 3];

// 元祖 = 固定长度的数组
let g: [string, string];
g = ["hello", "hi"];
// 枚举
enum Gender {
  Male,
  Female,
}
let h: { name: string; gender: Gender };
h = { name: "孙大圣", gender: Gender.Male };
// console.log(i.gender === Gender.Male);
// &且
let i: { name: string } & { age: number };
i = { name: "孙悟空", age: 18 };
type myType = 1 | 2 | 3;
let j: myType;
*/

// 抽象类，不能用来创建对象，用于被继承的类
abstract class Person {
  gender: string;
  readonly name: string = "孙悟空";
  static age: number = 18;
  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }
  // 如果方法以static开通，则方法就是类方法，可以直接通过类调用

  // 抽象方法，只能定义在抽象类中，子类必须定义此方法
  abstract sayHello(): void;
}
// const per = new Person("小红", "女");
// console.log(per);

// per.sayHello();
// Person.sayHello(); // ×
// per.age; // ×
console.log(Person.age);

class Dog extends Person {
  age: number;
  constructor(name: string, gender: string, age: number) {
    super(name, gender);
    this.age = age;
  }
  sayHello() {
    console.log("汪汪汪汪汪！");
  }
  run(run: string) {
    console.log(`${this.name}在${run}！！`);
  }
}
const dog = new Dog("小刚", "男", 20);
console.log(dog.run("奔跑"));

// 接口用来定义一个类结构
// 接口可以在定义类的时候 限制类的结构
interface myInterface {
  name: string;
  age: number;
}
// 接口只 定义对象的结构，而不考虑实际值
// 接口中的所有方法都为抽象方法
interface myInterface {
  gender: string;
  sayHello(): void;
}
const obj: myInterface = {
  name: "aaa",
  age: 11,
  gender: "男",
  sayHello: () => {
    throw new Error("Function not implemented.");
  },
};
// 实现接口就是使类满足接口的要求
class MyClass implements myInterface {
  name: string;
  age: number;
  gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  sayHello(): void {
    // throw new Error("Method not implemented.");
    console.log("大家好~~");
  }
}

class Color {
  // public 修饰的属性可以在 任意位置 访问(修改)默认值
  // private 私有属性，私有属性只能在类内部进行访问(修改)
  //   protected 受包含的属性，只能在当前类和子类中访问(修改)
  //   color: string;
  //   public color:string;
  private _color: string;

  constructor(color: string) {
    this._color = color;
  }
  //   getter setter方法 成为属性的存取器
  getColor() {
    return this._color;
  }
  setColor(value: string) {
    this._color = value;
  }
  get color() {
    return this._color;
  }
  set color(value) {
    this._color = value;
  }
}
const color = new Color("red");
// color.color = "green";
console.log(color.getColor());
color.setColor("green");
console.log(color.color);
color.color = "pink";

// 简写
class A {
  constructor(public a: string) {}
}
const a = new A("a");
console.log(a);


function fn<T>(a: T): T {
  return a;
}

fn(10);
fn<string>("hello");
interface Inter {
  length: number;
}
function fn1<T extends Inter>(a: T): number {
  return a.length;
}
