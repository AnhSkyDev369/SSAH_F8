/**
 *  Giới thiệu về toán tử trong JS
 * 
 * 1. Toán tử số học (Arithmectic)
 * 2. Toán tử gán (Assignment)
 * 3. Toán tử so sánh (Comparison)
 * 4. Toán tử Logic (Logical)
 */

//1.
var a = 1 + 2;// Toán tử số học là sử sử các phép tính +,-,*,/ để thực hiện các phép tính trong biểu thức .
console.log(a);

//2.
var toantuGan = 8;// Toán tử gán để gán giá trị này với biến kia và ngược lại thông qua dấu =;
console.log(toantuGan);
//3.

var b = 2;
var c = 2;
// Sử dụng toán tử so sánh để tìm ra đk đúng hoặc sai để thực thi 1 chức năng gì đó trong {}

//  Biểu thức điều kiện if_else
if (b == c) {
    console.log("Đúng");
}

//  Nếu (điều kiện đúng) {
//  Đoạn code bên trong sẽ được thực thi
//}

//  Toán tử so sánh sẽ là >,<,>=, <=, == (sử dụng 2 dấu = = sẽ giống với dấu bằng trogn toán tử so sánh thay vì 1 dấu =)
//  Nếu sử dụng 1 dấu = sẽ trùng với toán tử gán.

//4.
// && thay cho dấu và trong câu điều kiện, và cả 2 biểu thức trong câu điều kiện được so sánh thông
//  qua toán tử logic && mà đúng thì mới thực hiện chức năng trong đoạn code bên dưới dấu {}.

//  Nếu 1 trong 2 vế hoặc cả 2 vế biểu thức đều sai thì đoạn code bên trong {} sẽ không thực hiên .

var d = 1;
var e = 2;

if ( d < e && e < d) {
    alert("So sánh đúng");
}