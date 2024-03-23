/**
 *                             Toán tử so sánh 
 * 
 *       Toán tử                
 *         ==              =>      Bằng (hai)
 *         ===             =>      Bằng (ba)
 *         != ! =          =>      Không bằng
 *         >               =>      Lớn hơn
 *         <               =>      Nhỏ hơn
 *         >=              =>      Lớn hơn hoặc bằng
 *         <=              =>      Nhỏ hơn hoặc bằng
 *         
 */

var a = 1;
var b = 2;
if (a == b) {
    console.log('Điều kiện đúng');
} else {
    console.log('Điều kiện sai !')
}


var c = 8;
var d = 11;
if (c != d) {
    console.log('Phép so sánh đúng');
} else {
    console.log('Phép so sánh sai');
}


var bienA = 21;
var bienB = 20;
if (bienA > bienB) {
    console.log('Phép so sánh đúng');
} else {
    console.log('Phép so sánh sai');
}

var bienC = 19;
var bienD = 20;
if (bienC < bienD) {
    console.log('Phép so sánh đúng');
} else {
    console.log('Phép so sánh sai');
}

var bienE = 9;
var bienF = 10;
if (bienE <= bienF) {
    console.log('Điều kiện đúng');
} else {
    console.log('Điều kiện sai');
}
/**
 *     Đối với trường hợp sử dụng lớn hơn hoặc bằng hay nhỏ hơn hoặc bằng,
 *     nếu trong phép so sánh của chúng ta, vd là 9 <= 10, thì nếu 9 đủ đk là nhỏ hơn 10 thì sẽ thực hiện dòng lệnh.
 *     Tuy 9 không bằng 10 nhưng lại nhỏ hơn 10, điều kiện đúng 1 trong 2 thì vẫn thực hiện, tiên quyết là phải nhỏ hơn hoặc lớn hơn, rồi mới đến so sánh bằng.
 *      Nói đơn giản, khi so sánh với >= hay <= thì giá trị của biến đó phải đạt đủ 2 điều kiện là nhỏ hơn/lớn hơn và bằng , 
 *      sau đó mới sử dụng điều kiện là nhỏ hơn/lớn hơn hay bằng để so sánh 2 gái trị biến với nhau
 */
var bienG = 11;
var bienH = 10;
if (bienG >= bienH) {
    console.log('Điều kiện đúng');
} else {
    console.log('Điều kiện sai');
}

var myName = 'Nguyễn Thế Anh';
var myname = 'Nguyễn Thế Anh';
if (myName = myname) {
    console.log('Đúng');
} else {
    console.log('Sai');
}

// == Toán tử so sánh trừu tượng sẽ cố gắng giải quyết kiểu dữ liệu thông qua việc
// chuyển đổi kiểu dữ liệu trước khi so sánh .
// === Toán tử so sánh cân bằng nghiêm ngặt sẽ tả về FALSE nếu các gái trị khác nhau.

//VD:
console.log(3 == "3");//TRUE
console.log(3 === "3");//FALSE