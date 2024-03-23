/**
 *          Logical Operator and CS If - Else
 */

//  Hiểu hơn về câu lệnh điều kiện
//  Phép so sánh

//  VD về biểu thức có điều kiện trả về kiểu dữ liệu BOOLEAN
var a = 1;
var b = 2;
var result = a < b;
console.log('Result :', result);
if (a < b) {
    console.log('A < B');
} else {
    console.log('A > B');
}

//  VD về biểu thức có điều kiện KHÔNG trả về kiểu dữ liệu BOOLEAN.
var c = 3;
var d = 4;
var reSult =  c < d && c > 0;
//  Biểu thức điều kiện sử dụng toán tử so sánh trả về BOOLEAN => ok .
//  Toán tử Logic sẽ trả về giá trị của 1 trong 2 vế, tuỳ vào từng trường hợp xảy ra
console.log(reSult);




var reSSult = 'A' && 'B' && 'C' && 'D';
var reSSSult = NaN && 'B' && 'C' && 'D';

console.log(reSSult);
console.log(reSSSult);

//  Khi sử dụng toán tử &&, sẽ luôn đọc từ vế trái qua phải,
//  Nếu gặp giá trị khác 6 giá trị False thì khi đó nó sẽ đọc sang vế phải ngược lại sang trái và
//  Lấy giá trị của vế phải gắn ngược lại cho reSSult .

/* 0
 * false
 * '' - ""
 * undefined
 * NaN
 * Null
 */
//  Còn nếu là 6 giá trị trên thì lấy luôn và gán và bỏ qua hết TRUE .

if (reSSult) {
    console.log('Điều Kiện Đúng');
} else {
    console.log('Điều kiện Sai');
}

//  Toán tử Or
//  Ngược lại với And
//  CTRL + D: Copy các ký tự giống nhau và sửa .

var ad = 10;
var da = 20;

var re_sult = 'A' || 'B' || 'C' ;
console.log(re_sult);
//  Đối với Or, nếu đọc giá trị đầu tiên từ trái qua phải mà khác 6 giá trị False thì lấy luôn mà không cần đếm và gán luôn.

var re__sult =  NaN || 'B' || 'C' || 'D';
console.log(re__sult);

//  Còn nếu đọc giá trị đầu tiên từ trái qua phải mà xuất hiện 1 trong 6 giá trị FALSE thì sẽ bỏ qua cho đến khi nào thấy giá trị khác 6 giá trị FALSE thì mới lấy .
//  Nếu không có gt nào đúng, nó sẽ phải trả về giá trị cuối cùng trong danh sách, trường hợp này giá rị đó bắt buộc phải là FALSE rồi;
//  vì nếu có TRUE thì sẽ không xảy ra trường hợp trên
var re____sult = NaN || NaN || '' || undefined;
console.log(re____sult);

if (re_sult) {
    console.log('Điều kiện Đúng');
} else {
    console.log('Điều kiện Sai');
}
//
if (re____sult) {
    console.log('Điều kiện Đúng');
} else {
    console.log('Điều kiện Sai');
}
