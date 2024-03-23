/**
 *      TOÁN TỬ SO SÁNH P2
 *      
 *      !== hay ! ==
 *      ===
 */
// == Toán tử so sánh trừu tượng sẽ cố gắng giải quyết kiểu dữ liệu thông qua việc
// chuyển đổi kiểu dữ liệu trước khi so sánh .
// === Toán tử so sánh cân bằng nghiêm ngặt sẽ tả về FALSE nếu các gái trị khác nhau.

var a = '2';
var b = 2;
console.log(a == b);//TRUE
// Chuyển đổi dữ liệu từ string về number, so sánh 2 number đều là 2 => true

console.log(a === b );
// Không chuyển dữ liệu từ string về number mà so sánh luôn kiểun dữ liệu => string khác number mặc dù đều là 2 => trả về False

var ab = 1;
var ba = 1;
console.log(ab == ba);//TRUE
// Cả 2 đều cùng kiểu dữ liệu là number nên không chuyển đổi, và vì đều là number 2 => true
console.log(ab === ba);//TRUE
// So sánh luôn nhưng cũng đều là number => trả về True

// Nhắc lại: 
//!= hay ! = là so sánh không bằng
// !== hay ! == là so sánh
var c = '6';
var d = 8;
console.log(c != d);
// 6 không bằng 8 =. đúng nên trả về TRUE, tuy nhiên vẫn sẽ chuyển đổi kiểu dữ liệu trước sau đó mới  so sánh
console.log(c !== d);
//Không chuyển đổi kiểu dữ liệu mà so sánh luôn, do khác kiểu và khác giá trị hay 6 khac 8, cả 2 vế đều đúng => Trả về TRUE

var cd = '9';
var dc = '9';

console.log(cd != dc);
// Chuyển đổi cả 2 kiểu dữ liệu từ String về Number hay từ '9' sang 9, cả 2 vế = nhau, nhưng dùng không bằng nên trả về FALSE.
console.log(cd !== dc);
// So sánh luôn , cùng kiểu dữ liệu tuy nhiên lại bằng nhau, àm ở đây lại dùng ! == nên trả về FALSE;
