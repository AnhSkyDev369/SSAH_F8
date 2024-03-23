/**
 *          CHUỖI TRONG JS
 *  1.  Tạo chuỗi
 *  -   Các cách tạo chuỗi
 *  -   Nên dùng cách nào? Lý do ?
 *  -   Kiểm tra Datatype
 * 
 *  2.  Một số case sử dụng backsplash \
 *  3.  Xem độ dài chuỗi
 *  4.  Chú ý độ dài khi viết Code
 *  5.  Template String CS6
 */

//VD:

var fullName = 'Nguyễn Thế Anh'; //cách 1 nên dùng
var fullNamme = new String('Nguyễn Thế Anh'); //cách 2 dài dòng hơn, kiểu dữu liệu tạo ra không mong muốn.
// new + NameObject +> khởi tạo 1 đối tượng sẽ tạo ra 1 instance
console.log(fullName);
console.log(typeof fullNamme);

var namme = 'Thế Anh là \'Kamen Rider\' ';
var nammme = 'Thế Anh là \"Kamen Rider \\\\ \" ';
// Quy ước : \' \' = '';
//         : \" \" = "";
//  2 dấu \\ sẽ bằng \
//  Dấu \ không thể hiển thị ra
// Syntax Errox: Lỗi cú pháp 
console.log(namme);
console.log(nammme);

//  Xem độ dài chuỗi

var stringLength = 'Nguyễn Thế Anh Đẹp Trai nhất Hà Nội ';
console.log(stringLength.length);
//  Sử dụng thuộc tính .length, vd ten_bien.length để xem độ dài chuỗi, tính cả dấu cách


//  Độ dài khi viết code
//  Tối đa ký tự tên 1 dòng chiều ngang là 80 ký tự
//  2 cách xuống dòng.
//  c1: sau toán tử
//  c2: sử dụng toán tử để nối chuỗi

var chuoiSieuDai = 
'Nguyễn Thế Anh Đẹp Trai nhất Hà Nội Nguyễn Thế Anh Đẹp Trai nhất Hà Nội Nguyễn Thế Anh Đẹp Trai nhất Hà Nội ';
console.log(chuoiSieuDai.length);
//  c1: sau toán tử

var chuoiSieuDaii = 
  'Nguyễn Thế Anh Đẹp Trai nhất Hà Nội '
+ 'Nguyễn Thế Anh Đẹp Trai nhất Hà Nội '
+ 'Nguyễn Thế Anh Đẹp Trai nhất Hà Nội '
;
console.log(chuoiSieuDai.length);
console.log(chuoiSieuDaii);
//  c2: tách chuỗi nhỏ và dùng toán tử + để nối chuỗi

//  Template String

var firsstName = 'Anh';
var lastName = 'Nguyễn';

console.log('Tôi là' + ' ' + lastName + ' ' + 'Thế' + ' ' + firsstName);
//  CS6
console.log(`Tôi là : ${firsstName} ${lastName}`);