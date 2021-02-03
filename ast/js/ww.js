
// let prompt = "1、3、<pos type=\"underline\">1</pos>、<pos type=\"underline\">2</pos>、<pos type=\"underline\">3</pos>、11"
// var gg = [44,25,65]
// prompt = prompt.replace(/<formula([^>]*format[^>]*)><\/formula>/g, "<img $1>")
// prompt = prompt.replace(
//     /<pos([^>]*)>([^</pos]*)<\/pos>/g,
//     `<pos1 gg[$2]  scene="answer" $1>$2</pos1>`
// )

// prompt = prompt.replace(/<pos([^>]*)>([^</pos]*)<\/pos>/g, '<pos ref="pos$2" scene="answer" :posIndex="$2-1" :selectedPos="selectedPos" :selectedFrac="selectedFrac" :rightAnswer="rightAnswer($2-1)" :userAnswer="posAnswer($2-1)" @posActive="selectPos" :isAnswerCorrect="isAnswerCorrect($2-1)" $1></pos>');
// console.log(prompt);

// var rr = xx(
//     '<pos1 sc="answer" ></pos1>',
// 'pos1',
// 'sc',
// 'gg'
// )
// console.log(rr);
// function  xx(src_str, tag, attr, val) {
    
 
//     var reg = new RegExp('<' + tag + '[^>]*(' + attr + '=[\'\"](\\w*%?)[\'\"])?[^>]*>', 'gi');
//     return src_str.replace(reg, function (match) {
//         if(match.indexOf(attr) > 0) {
//             //包含attr属性,替换attr
//             var sub_reg = new RegExp(attr + '=[\'\"](\\w*%?)[\'\"]', 'gi');
//             return match.replace(sub_reg, attr +'=' + val);
//         }else{
//             //不包含attr属性,添加attr
//             return match.substr(0, tag.length + 1) + ' ' + attr + '=' + val + ' ' + match.substr(tag.length + 2, match.length);
//         }
//     });
// }

var gg = "<pos-1 scene='record' rightAnswer='1'     >"
var sub_reg = new RegExp('rightAnswer' + '=[\'\"](\\w*%?)[\'\"]', 'gi');
console.log(sub_reg.exec(gg));
