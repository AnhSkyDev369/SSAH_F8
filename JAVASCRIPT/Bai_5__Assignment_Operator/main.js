/**
 * 
 *                   Toán tử gán trong JS
 * 
 * Toán tử              Ví dụ           Tương đương
 * =                    x = y              x = y
 * +=                   x += y             x = x + y
 * -=                   x -= y             x = x - y
 * *=                   x *= y             x = x * y
 * /=                   x /= y             x = x / y
 * **=                  x **= y            x = x ** y
 * 
 * 
 * 
 */

//Cách thông thường
var a = 1;
//Vế trái và vế phải   
//a = a + 2 
//Vế phải gán cho vế trái.
//console.log(a);
//Kết quả: 3

var b = 2;
b += 4;
// b = b + 4;
console.log(b);


var c = 3;
c -= 1;
// c = c - 1
console.log(c);


var d = 4;
d *= 5;
// d = d * 5;
console.log(d);


var e = 5;
e /= 5;
// e = e / 5
console.log(e);

var f = 5;
f **= 9;
//f = f ^ 9
console.log(f);