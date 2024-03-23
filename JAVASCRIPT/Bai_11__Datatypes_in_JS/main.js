/**
 * 
 *                  Kiểu dữ liệu trong JS
 * 
 *                  1. Dữ liệu nguyên thuỷ (Primitive Data)
 * Là giá trị tạo ra và lưu vào vùng nhớ.
 * Không thể sửa vùng nhớ đó.
 * Mỗi khi gán lại giá trị thì sẽ tạo ra 1 vùng nhớ khác lưu giá trị mới.
 *      -   Number = 1,2,3,..
 *      -   String = '',"";
 *      -   Boolen  = True;False
 *      -   Underfined
 *      -   Null
 *      -   Symbol
 * 
 *                  2.  Dữ liệu phức tạp - Complex Data
 *      -   Function
 * Là dạng dữ liệu hàm, tạo ra hàm lưu vào vùng nhớ,có thể gọi thực thi, chứa nhiều phương thức, thuộc tính .
 *      -   Object
 * Cùng là 1 kiểu Oject lại có 2 kn: 
 * Array
 * Object
 * Reference Object: Dữ liệu tham chiếu.
 */

//1.
//Sử dụng (typeof _bien_kiem_tra)
//Number Type
var a = 1;
var b = 1.5;
var c = 8;
//Sử dụng (typeof _bien_kiem_tra)
console.log(typeof a);


//String type
var fullName = "Nguyễn Thế Anh \'";//Kiểu chuỗi chứa 1 chuỗi ký tự, đc bao quanh bởi dấu nháy đơn hoặc kép
var anhdepzai = 'Anh\" Đẹp trai';
console.log(fullName);
console.log(anhdepzai);
console.log(typeof fullName);
//Nếu bao quanh bằng dấu nháy đơn mà muốn hiển thị nháy kép thì sẽ được nhưng phải dùng dấu \ hay backsplash

// Boolean Type
//  Thể hiện lưu giá trị Đúng hay Sai

var isSuccess = true;
console.log(isSuccess);
console.log(typeof isSuccess);

//  Undifined Type
//  Định nghĩa 1 biến mà không gán giá trị;
var age;
console.log(age);
console.log(typeof age);

//  Null Type
//  
var isNull = null;// null = nothing
console.log(isNull);
console.log(typeof isNull);

//  Symbol Type
//  Tham số truyền vào Symbol(''); là Description (Mô Tả),
//  Đặc tính: unique hay duy nhất.
var id = Symbol('id');
var id2 = Symbol('id');
console.log(id === id2);
console.log(typeof id);

// == Toán tử so sánh trừu tượng sẽ cố gắng giải quyết kiểu dữ liệu thông qua việc
// chuyển đổi kiểu dữ liệu trước khi so sánh .
// === Toán tử so sánh cân bằng nghiêm ngặt sẽ tả về FALSE nếu các gái trị khác nhau.

//VD:
console.log(3 == "3");//TRUE
console.log(3 === "3");//FALSE



//2.

// Function Type
//  Khi địn nghĩa ra 1 func thì code bên trong func sẽ không được chạy, code chỉ được thực thi khi ta gọi tới function này ở bên trong.
var aFunction = function() {
    alert('Xin chào cấc bạn');
}
//  Gọi function bằng cách sử dụng tênfunction();
aFunction();
console.log(typeof aFunction);


//Object Types
// Cách định nghĩa Object và Array gần như nhau, chỉ khác cặp dấu mở đóng ngoặc;
//1.Object

var myObject = {
    myname: 'Thế Anh',
    age: 19,
    address: 'Hà Nội',
    myFunction: function (){

    }
};
/*        var Objiect = {
          key: value, Cách cặp key value cách nhau bằng dấu ,

          };//Trình bày bằng cách sử dụng dấu cách(space) và xuống dòng

*/
//  Chứa được nhiều dạng dữ liệu
//  Console.log có thể nhận 2 tham số.
console.log('myObject' , myObject);
console.log(typeof myObject);


//  2.Array vẫn thuộc Object Types
//  Không cần định nghĩa key
//  Khi định nghĩa 1 danh sách gì đó ta sẽ dùng array
//  kEY được đánh tự động từ 0, vẫn có key và value
var myArray = [
    'Javascript',
    'PHP',
    'Ruby'
]
console.log(myArray);
console.log(typeof myArray);

//  Cách kiểm tra dữ liệu từng biến