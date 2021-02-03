var fork = require("child_process").fork
var cpus = require("os").cpus()
var server = require("net").createServer()
server.listen(8899)
var workers = {}
var createWorker = function () {
    var worker = fork(__dirname + "/bb.js")
    worker.on("exit", function () {
        console.log("Worker " + worker.pid + " exited.")
        delete workers[worker.pid]
        createWorker()
    })
    // 句柄转发
    worker.send("server", server)
    workers[worker.pid] = worker
    console.log("Create worker. pid: " + worker.pid)
}
for (var i = 0; i < cpus.length; i++) {
    createWorker()
}
// 进程自मཽ出时ǈඟ໯有工作进程ཽ出
process.on("exit", function () {
    for (var pid in workers) {
        workers[pid].kill()
    }
})
