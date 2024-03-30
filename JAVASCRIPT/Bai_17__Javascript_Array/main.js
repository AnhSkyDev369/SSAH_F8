/**
 * 
 *  Mảng trong Javascript   - Array
 * 
 * 1.   Tạo mảng
 *  -   Cách tạo
 *  -   Sử dụng cách nào, tại sao ?
 *  -   Kiểm tra datatype
 * 
 * 2.   Truy xuất mảng
 *  -   Độ dài mảng
 *  -   Lấy phần tử theo index   
 * 
 */

//VD
var language = 'Javascript';
var languges2 = 'PHP';
var languges3 = 'Ruby';

//  Để tạo mảng ta sẽ sử dụng dấu mở đóng ngoặc vuông
//  Sử dụng Ctl + C để copy , không cần bôi đen tất cả mà chỉ chần đặt trỏ chuột vào cuối dòng
//  Mảng languages chứa các phần tử của mảng languages là JS,PHP,RUBY.
//  Ruby,JS,PHP là 1 phần tử của mảng
var languages = [
    'Ruby',
    'PHP',
    'JS',
    'Dart'
];
//  Đặc tính : Tự động đánh chỉ mục cho từng elenments , đánh tự động và bắt đầu từ 0
//  Số 4 đại diện cho sô lượng phần tử của mảng hay độ dài.
//  Array có thể chứa tất cả kiểu dữ liệu trong JS, bao gồm TRUE AND FALSE
console.log(languages);

var datatypeS = [
    1,
    'PHP',
    3.5,
    function(){

    },
    null, 
    undefined,
    NaN,

];
console.log(datatypeS);

//  Cách 2 tạo mảng bằng cách sửu dụng từ khoá New và đối tượng Array

var datatypeSs = new Array (
    1,
    'PHP',
    3.5,
    function(){

    },
    {},
    null, 
    undefined,
    NaN,
);

console.log(typeof {});
console.log(datatypeS);
//  Kiểu dữ liệu của object là 1 object
//  typeOf của 1 array là [] cũng là 1 object


console.log(Array.isArray(datatypeS));

//  Sử dụng phương thức isArray(); và truyền vào biến muốn kiểm tra
console.log(Array.isArray({}));//Không phải array
console.log(Array.isArray([]));//   Array
console.log(Array(new Array(1,2)));

//  Truy xuất mảng
//  Truy xuất để đếm độ dài của mảng sử dụng thuộc tính length

var languages2 = [
    'Ruby',
    'PHP',
    'JS',
    'Dart',
    'C#'
];
console.log(languages2);

//  Lấy phần tử theo index
//   index hoặc key

var languages3 = [
    'Ruby',
    'PHP',
    'JS',
    'Dart',
    'C#'
];
console.log(languages3[0]);//    Gọi key là chỉ mục 