/**
 *  Làm việc với Array
 *  Keyword: Javascript Array Methods 
 *  
 * 1.   to String
 * 2.   join
 * 3.   Pop
 * 4.   Push
 * 5.   Shift
 * 6.   Unshift
 * 7.   Splicing
 * 8.   Concat
 * 9    Slicing
 */

//  VD

var languages = [
    'JS',
    'PHP',
    'Ruby'
];
//.1    to String
console.log(languages.toString());

//.2. join()
console.log(languages.join(''));
console.log(languages.join(' - '));
//  Sử dụng hàm Join();  để truyền vào chuỗi rỗng, dấu ngăn cách các phần tử của mảng là 1 kí tự trống
//  Ta có thể thay đổi dấu ngăn cách đó bằng ký tự khác bao gồm số, chữ, kí tự,...

//.3.   Pop
//Xoá đi phần tử(elements) cuối mảng và trả về(return) phần tử đã xoá trước đó
console.log(languages.pop());
console.log(languages.pop());
console.log(languages.pop());
//Khi ta sử dụng pop quá số lượng phần tử trong mảng, khi đó sẽ trả về undefined
console.log(languages);
//  {} là đối tượng
//  [] là mảng

//.4.   Push
//  Thêm phần tử ở cuối mảng(1 hoặc nhiều)
console.log(languages.push('Dart','Java'));
//  Giá trị trả về của push là 4, csl nhận đc giá trị mà push trả về và in ra số 4
//  Mảng gốc được thêm phần tử vào cuối cùng
//  Có thể thêm nhiều phần tử vào hàm push bằng cách sử dụng dấu,
//  Xoá đi phần tử cuối mảng và trả về phần tử đã xoá.

//.5.   Shift
//  Xoá đi 1 phần tử ở đầu mảng và trả về phần tử đã xoá đó
console.log(languages.shift(''));
//  Tương tự pop, sẽ trả về undefined nếu gọi quá nhiều lần phần tử trong mảng

//.6.   Unshift
//  Thêm 1 hoặc nhiều phần tử mới vào đầu mảng và trả về phần tử mưới được thêm đó và trả về độ dài mới của mảng .
console.log(languages.unshift('Go', 'XML'));
//  Có thể thêm nhiều phần tử vào hàm unshift bằng cách sử dụng dấu ,

//.7.   Spilcing
//  Xoá, cắt, chèn phần tử mới vào mảng
//  Xáo 1 elenment bất kì
//  cÓ 3 THAM SỐ được sử dụng trong splice,

//  Tham số thứ 1 sẽ truyền chỉ mục mà chúng ta muốn hàm spilce đặt vào vị trí đầu tiên, vd là XML,
//  Tham số thứ 2 là deleteCount là số lượng element muốn xoá, quyết định từ vị trí đặt con trỏ sẽ xáo đi mấy phần tử
//  
languages.splice(1,1);
console.log(languages);

//  Khi truyền vào 0 sẽ không xoá phần nào
//  Tham số thứ 3 truyền vào sẽ chèn thêm 1 elenment vào 1 vị trí nào đó trong mảng .
//  Phụ thuộc vào tham số thứ nhất , vị trí mà chúng ta bắt đầu đặt con trỏ
var languagesS = [
    'JS',
    'PHP',
    'HTML',
    'JAVA'
]
languagesS.splice(1,2,'C#');
console.log(languagesS);

//.8.   Concat
//  Hàm giúp ta nối Array
var languagess = [
    'Dart',
    'JS'
];
var languagesss = [
    'Golang',
    'Scrath'
];
//  Kết quả là 1 array được hợp nhất bởi 2 array.
//  Tính mảng hợp nhất từ vị trí từ trái qua phải
//  Mảng nào àm gọi đến phương thức concat thì sẽ là mảng gốc, còn mảng nào được truyền vào là mảng hợp nhất với mảng gốc 
console.log(languagesss.concat(languagess));

//.9.Slicing
// Sử dụng slice để cắt 1 vài hoặc toàn bộ  element của mảng
var languagesssProgram = [
    'Golang',
    'PHP',
    'NodeJs',
    'ReactJS',
];
console.log(languagesssProgram);
console.log(languagesssProgram.slice(1,3));
//  Có 3 tham số của hàm slice
//  Tham số 1 là (start) chỉ mục hay bắt đầu của chỉ mục, ở ví dụ minh hoạ ta có 1 là PHP
//  Tham số 2 là (end) là vị trí dừng lại việc cắt
//  Sử dụng slice(); truyền vào tham số 0 để copy mảng

//  Sử dụng slice(); để truyền số âm vào và lấy phần từ  và vẫn từ trên xuống nhưng là từ -4,-3,-2,-1,0
var languagesssPrograms = [
    'Golang',
    'PHP',
    'NodeJs',
    'ReactJS'
];
console.log(languagesssPrograms.slice(-4, -1));