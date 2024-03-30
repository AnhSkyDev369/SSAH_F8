/**
 * Toán tử số học
 *       --> Cộng   +
 *       --> Trừ    -
 *       --> Nhân   *
 *       --> Chia   /
 *       --> Luỹ thừa   **  
 *       --> Chia lấy số dư %
 *       --> Tăng 1 giá trị số ++, mỗi lần thực thi sẽ tăng lên 1 giá trị so với biến ban đầu
 *       --> Giảm 1 giá trị số --, mỗi lần thực thi sẽ giảm xuống 1 giá trị so với biến ban đầu
 */
//Sử dụng dấu phẩy để nối hay kết hợp các đối số trong hàm
//VD:
var a = 10;
var b = 20;
var c = a + b;
console.log('Kết quả của phép cộng là: ', c);

var aa = 10;
var bb = 20;
var cc = aa - bb;
console.log('Kết quả của phép trừ là: ', cc);

var aaa = 10;
var bbb = 20;
var ccc = aaa * bbb;
console.log('Kết quả của phép nhân là: ', ccc);

var aaaa = 10;
var bbbb = 20;
var cccc = aaaa / bbbb;
console.log('Kết quả của phép chia là: ', cccc);

var ad = 5;
var be = 2;
var cf = ad ** be;
console.log('Kết quả của luỹ thừa là: ', cf);

var da = 10;
var eb = 20;
var fc = da % eb;
console.log('Kết quả của phép chia lấy số dư là: ', fc);

var bien1 = 20;
    bien1++; // bien1 = 20; bien1++ <=> 20 + 1 = 21
console.log('Kết quả của phép tăng 1 giá trị số là: ' , bien1);

var bien2 = 20;// bien1 = 20; bien1-- <=> 20 - 1 = 19
bien2--;
console.log('Kết quả của phép giảm 1 giá trị số là: ', bien2);

//Toán tử ++ --
// Prefix(Tiền tố)  và Postfix (Hậu tố) tả về biến copy

//VD: 
// Dù viết ở trước hay sau biến thì cviệc của phép tăng/giảm vẫn cho ra kết quả như nhau
//, tuy nhiên vẫn có sự khác nhau về giá trị trả về.

//  ++a => Trả về giá trị a sau khi + 1
//  a++ => Trả về giá trị a trước khi + 1

//  --a => Trả về giá trị a sau khi - 1
//  a-- => Trả vê giá trị a trước khi -1

var biena = 6;
// ++biena;
// console.log(biena);

var outputt = ++biena;
//Việc 1: + 1 cho biena, biena = biena + 1 = 7 => biena = 7
console.log("Biến a hiện tại: ",biena);
//Việc 2: Trả về a sau khi được cộng 1 là 7.
console.log('Trả về giá trị biến a sau khi cộng 1: ', outputt);


var bienb = 6;
// --bienb;
// console.log(bienb);

var output = --bienb;

//Việc 1: - 1 cho biena, biena = biena - 1 = 6 - 1 = 5 => biena = 5
console.log('Biến b hiện tại: ', bienb);
//Việc 2: Trả về biena sau khi được trừ 1  là 5.
console.log('Trả về biến b sau khi trừ 1: ', output);

var bienc = 9;
var output = bienc++;

// Việc 1: 'bienc sẽ copy chính giá trị của nó hay bienc = 9, copy ra 9.
// Việc 2: Cộng 1 của bienc: bienc = bienc + 1 = 9 + 1 = 10; (2)
console.log('Biến c hiện tại : ', bienc);
// Việc 3: Trả về bienc = 9 được copy;(3)
console.log("Trả về giá trị biến c trước khi cộng 1:", output);
//  Nói cách khác : Trả trước cộng sau

var biend = 10;
var output = biend--;

console.log('Biến d hiện tại : ', biend);
//10 - 1 = 9
console.log('Trả về biến d trước khi trừ 1:' , output);
//  Nói cách khác : Trả trước trừ sau


var number = 6;

var output = number++ + --number;

// 7 + 5
// 6 + 6 
//Trả về biến Copy là 6 chứ không phải 7 khi được tính toán , 
// Không lấy cái hiện tại(2) đc tính ra từ bước 2 mà lấy cái copy đc trả về từ bước 3(3)

console.log(output);

var numberNew = 10;
var output = numberNew++ + --numberNew;
// 11 + 9
// 10 + 10

console.log(output);

var number3 = 6;
var output = ++number3 * 2 - number3-- * 2;
console.log(output);

//7 * 2 - 7 * 2



