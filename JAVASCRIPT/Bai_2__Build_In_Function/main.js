var funcBuildIn = "Hàm dựng sẵn là gì trong JS ?";
console.log(funcBuildIn);
/**
 * Giới thiệu 1 số hàm build-in cơ bản
 *  1.  Alert
 *  2.  Console là đối tượng chứa nhiều hàm bên trong và gọi hàm đó là Phương thức .
 *  3.  Confirm
 *  4.  Prompt
 *  5.  Set TimeOut
 *  6.  Set Interval
 */

//1.
//console.log('Đây là thông báo');// In ra thông báo
//console.warn(123); // In ra cảnh báo
//console.error(2.5);// In ra lỗi
//console.clear();// Xoá sạch các giá trị console cũ

//2.
//confirm('Xác nhận bạn đủ 18+'); //Hàm confirm tạo ra hộp thoại xác nhận gồm Ok và huỷ
//prompt('Nhập vào tuổi của bạn'); // Hàm prompt sẽ tạo ra ô input để nhập giá trị vào và bấm xác nhận Ok hoặc huỷ.

//3.
// var thoiGian = "8 giờ sáng";
// setTimeout(function() {
//     alert(thoiGian);
// }, 1000);   

//  Hàm setTimeOut là cho 1 đoạn code sẽ chạy sau 1 khoảng thời gian nhất định, và khoảng thời gian này tính bằng mili/s
//  1000 mili/s = 1s
// Sau 1s chạy sẽ in ra thông báo:

//4.
//var ngayHomNay = "Ngày 22 tháng 3 năm 2024";
// setInterval(function() {
//     console.log('Đây là log' + Math.random()) ;
// }, 1000);

//  Hàm setInterval là cho 1 đoạn code sẽ chạy không ngừng sau 1 khoảng thời gian nhất định, và khoảng thời gian này cũng tính bằng mili/s.
//  Cứ cách 1s sẽ chạy liên tục lặp đi lặp lại 1 lần .

// Sử dụng chuỗi random bằng cách dùng Math.random()