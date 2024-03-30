/**
 * Kiểu số (Number) trong Javascript
 * 
 * 1.       Tạo giá trị Number
 *      - Các cách tạo 
 *      - Dùng cách nào và tại sao ?
 *      - Kiểm tra datatype
 * 
 * 2.       Làm việc với number
 *      - To string
 *      - To fixed    
 * 
 * 3.   Keyword: Number Methods
 */

//  1.
//  Cách 1  Nên dùng cách 1
var a = 20;
var PI = 3.14;

console.log(typeof a);
console.log(typeof PI);

//  Cách 2  Tránh dùng new vì rườm rả, tạo ra đối tượng

var otherNumber = new Number(9);
console.log(typeof otherNumber);

//  Thực hiện phép toán không hợp lệ với number

var result = 20 / 'ABC';//  Số chia chữ :)))
console.log(typeof result === NaN);
//NaN không phải là số mà chỉ đại diện cho 1 số không hợp lệ.

//Sử dụng hàm isNaN(); và truyền giá trị muốn kiểm tra vào
console.log(isNaN(result)); //Trả về TRUE vì nó đúng là NaN

//  2.  
//   Phương thức toString chuyển đổi kiểu number thành string
var age = 20;
console.log(typeof age.toString());
//  Lưu thành 1 biến
var myStringAge = age.toString();
console.log(typeof myStringAge);

// var number = '100';
// console.log(number);
var Pii = 3.69;
var Piii = 2.49;
//  Tương tự

var money = 3000000000.63482894;
var moneyy = 3000000000.23482894;
console.log(money.toFixed(2));// Rút gọn để lại 2 số sau số thập phân
console.log(moneyy.toFixed(3));
//  Gia tiền tính ra từ khuyến mại, phần trăm, thuế sẽ ra số dài, thì sd toFixed(); sẽ rút gọn để in ra order

//  Phương thức to fixed để làm tròn số như phần số thập phân;
console.log(typeof Pii.toFixed());  //  Có thể truyền vào tham số, khi không truyền sẽ là số 0(kiểu False)
//  Với giá trị thập phân nhỏ hơn 0.5 như từ 4.9 đổ lại, ta sẽ làm tròn dưới
//  Ngược lại, với giá trị lớn hơn hoặc bằng 0.5 ở đằng sau sẽ là làm tròn trên
console.log(Pii.toFixed());
console.log(Piii.toFixed());