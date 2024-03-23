/**
 *  Toán tử Logic
 *  1.  && - And
 *  2.  || - Or
 *  3.  ! - Not
 */

//  VD:

var a = 1;
var b = 2;
var c = 3;

//  Nếu a lớn hơn 0 và b cũng lớn hơn 0 thì ta sẽ in ra dòng 'Điều kiện đúng';
//  Đòi hỏi cả vế trái và cả vế phải của toán tử && đều phải đúng mới in ra giá trị
//  Ta có thể đưa vô số điều kiện vào câu lệnh if-else chứ không phải 1 hoặc 2 đk .
//  Toán tử && sẽ đòi hỏi tất cả phải đúng còn nếu chỉ 1 điều kiện sai là toán tử sẽ không thực hiện lệnh nữa hoặc thực hiện ở else,
//  phần ngược lại của if hay else sẽ thực hiện những cái còn lại .
//  
if (a > 0 && b > 0 && c > 16 ) {
    console.log('Điều kiện đúng');
} else {
    console.log('Điều kiện sai')
}


//  Khác với toán tử &&, thì || sẽ không đòi hỏi tất cả vế trong điều kiện phải đúng mới thực thi<
//  Mà chỉ cẩn 1 vế điều kiện đúng thì || cũng vẫn sẽ thực hiện bất chấp bên trong có 1 hay nhiều điều kiện sai
//  Còn nếu tất cả vế điều kiện đều sai thì sẽ không thực hiện .
//  Toán tử || sẽ không đòi hỏi tất cả phải đúng, nếu  1 điều kiện đúng là toán tử vẫn sẽ  thực hiện lệnh  hoặc thực hiện ở else,
//  phần ngược lại của if hay else sẽ thực hiện những cái còn lại .
var ab = 1;
var bc = 2;
var cd = 3;
if (ab > 100 || bc > 100 || cd > 16 ) {
    console.log('Điều kiện đúng');
} else {
    console.log('Điều kiện sai')
}

var x = 5;
var y = 9;
var z = 14;
//  Phủ định giá trị, giá trị Đúng sẽ thành Sai và ngược lại Sai thành Đúng.

// Ở vd đầu tiên, ta có x = 5 < 0 => biểu thức so sánh sai, tuy nhiên biểu thức nằm trong ngoặc, trước đó có phủ định
//  Sai thành Đúng nên khi in ra sẽ là ở dòng if()
if (!(x < 0)) {
    console.log('Đúng');
} else {
    console.log('Sai');
}
// Ở vd thứ 2, ta có x = 5 > 0  => biểu thức so sánh đúng, tuy nhiên biểu thức nằm trong ngoặc, trước đó có phủ định
//  Biểu thức Đúng thành Biểu thức sai nên khi in ra sẽ là ở dòng else()
if (!(x > 0)) {
    console.log('Đúng');
} else {
    console.log('Sai');
}