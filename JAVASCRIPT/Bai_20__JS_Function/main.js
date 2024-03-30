/**
 *          Tham số hàm
 * 
 * 1.   Tham số
 *          -   Định nghĩa 
 *          -   Kiểu dữ liệu
 *          -   Tính private
 *          -   1 tham số
 *          -   nhiều tham số
 * 2.   Truyền tham số
 *          - 1 tham số
 *          - nhiều tham số
 * 3.   Arguments
 *          - Đối tượng arguments
 *          - Giới thiệu vòng for of
 */

//  Tham số là gì ?
//  Tham số là 1 giá trị có thể truyền vào khi ta gọi tới 1 hàm
//  Tham số sẽ đóng vai trò làm một công việc gì đó để xử lý dữ liệu, tính toán,...
//VD1:
function writeLog(message) {
    console.log(message);
}

writeLog('Test message');  //Truyền tham số đó ra
//  Khi ta định nghĩa 1 tham số thì trong quá trình ta định nghĩa ra nó thì đó là 1 tham số
//  Gọi tới nó và truyền 1 giá trị vào thì đó là đối số
//  Gộp chung lại và gọi chung là tham số
writeLog(123);
//  Không giới hạn kiểu dữ liệu

//  Tính riêng tư (Private)
//  1 biến sử dụng làm tham số trong 1 hàm thì nó sẽ có tính private.
//  VD khi ta truyền chuỗi message vào bên trong test message 
//  thì ta sẽ chỉ có thể sử dụng được biến làm tham số trogn cặp {} của hàm writeLog thôi 
//console.log(message);

//   Nhiều tham số
//  Đối với khi ta truyền nhiều tham số, mỗi tham số sẽ ngăn cách với nhau bằng 1 dấu ,
function writeLogg(messages, messages2) {
    if(messages) {
         console.log(messages);
    }
   if(messages2){
        console.log(messages2);
   }
 
}
writeLogg('TEST 1',  'Test 2');
writeLogg();//  Nếu không truyền giá trị gì vào, giá trị mặc định của nó sẽ là undefined
writeLogg('Log 1', 'Log 2');

//  3.  Argument
function writeThreeLog () {
    console.log(arguments);
    for(var param of arguments) {
        
    }
};
//  Có thể truyền rất nhiều tham số vâo hàm console.log();
console.log(1,2,3);//    Mỗi tham số cách nhau bằng 1 dấu phẩy
writeThreeLog('Arg 1', 'Arg 2');
//  Arguments chỉ xuất hiện bên trong function,nếu gọi ở bên ngoài function sẽ bị lỗi
//  Cs.log(); sử dụng arguments, ta truyền bao nhiêu biến đối tượng arguments vẫn nhận được
//  Nếu không truyền biến đối tượng vào thì arguments có độ dài là 0


function paramTest() {
    var myString = '';
    for(var param of arguments) {
        console.log(arguments);
        myString += `${param} - `
    }
    console.log(myString);
}
paramTest('Args 1', 'Args 2');


//  Định nghĩa param of Aggruments mà
//  Arguments là array
//  Vòng for thứ nhất chạy, chạy qua Array và lấy elemnents đầu tiên của Array
//  và gán cho biến param, sau đó sẽ chạy code đc viết trong {} 
//  Sau khi hết 1 vòng thì sẽ chạy đến dấu ngoặc đóng và vòng ngược lên chạy lại
//  Lần 2 sẽ lấy phần tử thứ 2 gán vào param
//  Vòng for sẽ chỉ chạy số vòng tương ứng với số elements đang có trong mảng Arguments thôi.