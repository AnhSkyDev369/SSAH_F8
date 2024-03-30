/**
 *  Làm việc với chuỗi
 * 
 */

//  Keywork : Javascript String Methods

//  1.  Length
//  2.  Find Index
//  3.  Cut String
//  4.  Relape
//  5.  Convert to upper case
//  6.  Conver to lower case
//  7.  Trim
//  8.  Split
//  9.  Get a character by index

var myString =  'Nguyễn Thế Anh';
console.log(myString.length);// Thuộc tính length xem độ dài ký tự của chuỗi.

var myF8 = 'Hoc JS tai JS F8 JS ';
//  Find Ĩndex
console.log(myF8.indexOf('JS',6));
//  Thuộc tính indexOf đánh index cho ký tự index trong chuỗi bắt đầu từ số 0,
//  Tăng dần lên 0,1,2,3,4,...

//VD, trong chuỗi có nhiều chữ JS
// Ta có thể thấy rằng thuộc tính indexOf sẽ trả về vị trí chuỗi đầu tiên trong chuỗi lớn.
//console.log(myF8.indexOf('JS',6));
//  Truyền vào vị trí đứng sau cái vị trí chữ JS số 1

//  Tìm chuỗi JS cuối cùng trong chuỗi
console.log(myF8.lastIndexOf('JS'));
//Bằng cách sử dụng lastIndexof, ta có thể tìm được ký tự cuối trong chuỗi mà mình muốn tìm.
//  Nếu ta viết thêm ký tự giống với ký tự cần tìm, nó sẽ trả về vị trí của chuỗi ký tự theo cập nhật mưới nhất.

//  Nếu không tìm được sẽ trả về - 1
console.log(myF8.indexOf('ABC',6));

//  Phương thức search(tìm kiếm)
console.log(myF8.search('JS'));

//  Với indexOf, ta cso thể truyền tham số thứ 2 vào

//  Nhưng đối với search, ta sẽ không thể truyền tham số thứ 2 vào để quy định vị trí bắt đầu tìm kiếm.
//  Search hỗ trợ tìm kiếm theo biểu thức chính quy

//  3.Cut string

/*
Cut từ trái qua phải
*/  
var mySecondString = 'Hoc JS tai F8!';
console.log(mySecondString.slice(4,6));
//  Cut từ vị trí đầu tiên là chữ J của JS thì ta sẽ truyền vào số 4 và vị trí kết thúc là sau chữ S của JS là 6

//  VD2: Cut từ JS đến hết
console.log(mySecondString.slice(4));
//  Bỏ tham số thứ 2, chỉ cần quy định tham số vị trí bắt đầu cut là được, tức là tham số 1

//  Cắt từ đầu đến cuối thì tham số 1 chuyển thành 0
console.log(mySecondString.slice(0));

/*
Cut từ phải qua trái,
ta sẽ bắt đầu đếm từ vị trí số 0 đến -1,-2,-3
*/ 
console.log(mySecondString.slice(-3, -1));
// slice(start,end)

//  4.  Replace

console.log(mySecondString.replace('JS','Javascript'));
//  Tham số 1 của replace muốn tìm kiếm để thay đổi ký tự chuỗi,tham số thứ 2 là ký tự chuỗi mới muốn thay đổi chuỗi ký tự cũ.
//  Nếu chỉ có 1 tham số thứ nhất mà không có truyền vào tham số thứ 2, ký tự trong chuỗi sẽ được hiểun là undefined.

//  Vậy nếu có nhiều Js muốn thay đổi thành Javascript
var myThirdString = 'Hoc JS tai JS F8 JS!'
console.log(myThirdString.replace('JS','Javascript'));
//  Thì ký tự đầu tiên sẽ được thay đổi, những cái đằng sau giống JS thì không
//  Nếu muốn tìm kiếm thì sử dụng biểu thức chính quy
console.log(myThirdString.replace(/JS/g,'Javascript'));

//  5.  Convert to lower case
//  Chuyển đổi tất cả chuỗi thành chữ thường
console.log(myThirdString.toLowerCase());

//  6.  Convert to upper case
//  Chuyển đổi tất cả chuỗi thành chữ hoa
console.log(myThirdString.toUpperCase());

//  7.  Trim
//  Xử lý dữ liệu nhập vào của người dùng
//  Ví dụ trong form, người dùng nhập vào thừa dấu cách tạo ra khoảng trống ký tự trong email chẳng hạn, thì
//  Trim đã loại bỏ khoảng trắng bị thừa ở đầu và cuối hoặc 1 trong .
var myFourString = '       Hoc JS tai F8        ';

console.log(myFourString.trim().length);

//  8.  Split
//  Cắt 1 chuỗi chuyển thành array từ điểm chung của chuỗi
var languages = 'Javascript, PHP, Ruby';
console.log(languages.split(','));//    Cắt theo dấu, vì có 1 điểm chung
console.log(languages.split(', '));//   Cắt theo dấu, cách vì có 2 điểm chung
//  Cần có điểm chung để tách, vd như dấu phẩy

var languagesS = 'Javascript';//    TH2: Cắt tất cả các từ ra, mỗi chữ cái trong từ chuyển thành 1 phần tử của mảng, ta làm như sau
//  Khi làm như vậy ta sẽ truyền vào chuỗi rỗng, và điểm chung sẽ là khoảng giữa những chữ cái
console.log(languagesS.split(''));
//  Hiểu đơn giản ,split sẽ dựa vào điểm chung để cắt thành array từ chuỗi


//  9.  Get a character by index  (Thuộc tính charAt)
//  Lấy 1 kí tự bởi 1 index cho trc, từ index cho trước, ta cso thể lấy được chữ cái tương ứng
var myString2 = 'Thế Anh';
console.log(myString2.charAt(0));
//  Truyền index không có sẽ tả về 1 chuỗi rỗng, hay sử dụng typeOf để biết đó là String
console.log(typeof myString2.charAt(10));

//  Cách 2. Sử dụng dấu ngoặc vuông và truyền vào dấu index
console.log(typeof myString2[10]);
//  Nếu truyền vào index không nằm trong chuỗi hoặc quá giới hạn trong chuỗi đó, giá trị trả về sẽ là undefined
