/**
 * Hàm(function) trong Javascript
 * 
 *  1.Hàm ?
 *  -   Một khối mã
 *  -   Làm 1 việc cụ thể
 * 
 *  2.Loại hàm
 *  -   Built-in (dựng sẵn)  
 *  -   Tự định nghĩa     
 * 
 *  3.Tính chất
 *  -   Không thực thi khi không định nghĩa
 *  -   Sẽ thực thi khi được gọi
 *  -   Có thể nhận tham số
 *  -   Có thể trả về 1 giá trị
 * 
 *  4.Tạo hàm đầu tiên
 *  
 * 
 */


/*  Quy tắc đặt tên hàm
/   Chứa chữ cái thường a-z, in hoa từ A-Z, dấu gạch dưới _, dấu $.
    Khi đặt tên hàm, số sẽ không được đưa lên đầu tiên, còn lại thì thoải mái.
*/
//  VD1:
// var age = 20;
// function showAge() {
//     alert(age);
// }
// showAge();
//  VD2:
// function showHello() {
//     console.log('Hello');
//     /* Gọi hàm console.log(); nằm trong 1 cặp mở đóng ngoặc nhọn, 
//     khi đó code trong này hiểu là nằm trong 1 khối mã và nó là 1 khối mã
//     Chỉ làm 1 việc duy nhất là show ra Hello ở console
//     */
// }
//showHello();//  Gọi hàm

function kiemTraTuoi() {
    var myAge = prompt('Mời bạn nhập vào tuổi của mình');
    if(myAge >= 18){
        alert('Bạn đã đủ tuổi')
    }else {
        alert('Bạn chưa đủ tuổi')
    }
}
kiemTraTuoi();

//  Toán tử call : call(); call = tên hàm tự định nghĩa
