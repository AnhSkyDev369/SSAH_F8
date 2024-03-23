/**
 * If - else không quan tâm giá trị nào khác ngoài Boolean
 */
//if (bieu_thuc_dieu_kien) {
    //Thực thi khi điều kiện đưa vào là đúng
//} else {
    // Thực thi khi điều kiện đưa vào là sai, câu lệnh sai
//}

/**
 * 
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * Null
 * Khác với 6 giá trị trên thì khi JS Convert, mọi gái trị đc chuyển đổi đều là True.
 */
//  True
var isSuccess = true;
var fullName = "Thế Anh";
//  FALSE
var notANumber = NaN;
var zero = 0;
//  Với biểu thức điều kiện nằm trong if, cho dù ta nhập giá trị vào là giá trị nào đi nữa thì 
//  tự động JS sẽ convert hay chuyển đổi để hiểu và thực thi.

if (NaN) {
    console.log('Đúng');
} else {
    console.log('Sai');
}