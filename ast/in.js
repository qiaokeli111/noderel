var fs = require("fs")
var file = fs.readFileSync("./ss.js", "utf8")
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const core = require("@babel/core")
// console.log(file)
let ast = parser.parse(file)
let cl = parser.parse('console.log(3131)')
let path1
console.log(4324);
traverse(ast, {
  IfStatement(path) {
    // // 1.生成数字 1
    // const number = t.numericLiteral(1)

    // // 2.生成二元表达式 1+ 1
    // const exp = t.binaryExpression("+", number, number)
    // // 3.生成变量a
    // const variable = t.identifier("a")
    // // 4.生成变量声明  a = 1 + 1
    // const declarations = t.variableDeclarator(variable, exp)
    // // 5.生成变量声明  const a = 1 + 1
    // const content = t.variableDeclaration("const", [declarations])
    const number11 = t.numericLiteral(3122)
    const con = t.identifier("console")
    const lo = t.identifier("log")
    const exp1 = t.MemberExpression(con, lo)
    let aa = t.CallExpression(exp1, [number11])
    let ss = t.ExpressionStatement(aa)
    let el = path.node.alternate.body.push(ss,cl)
  },
})
let result = core.transformFromAstSync(ast).code
// fs.writeFile("./pa.json", JSON.stringify(ast), "utf8", function (err) {
//   //如果err=null，表示文件使用成功，否则，表示希尔文件失败
//   if (err) console.log("写文件出错了，错误是：" + err)
// })
fs.writeFile("./ss.js", result, "utf8", function (err) {
  //如果err=null，表示文件使用成功，否则，表示希尔文件失败
  if (err) console.log("写文件出错了，错误是：" + err)
})
