let posDiv = document.getElementById("posDiv")
let prompt = this.fillList[this.currentFillIndex].resourceContent.prompt
prompt = prompt.replace(/<formula([^>]*format[^>]*)><\/formula>/g, "<img $1>")
prompt = prompt.replace(
    /<pos([^>]*)>([^</pos]*)<\/pos>/g,
    '<pos   scene="answer" $1>$2</pos>'
)
let Pos = Vue.extend({
    template: `<div id="posDiv" style="word-wrap: break-word;word-break: normal;">${prompt}</div>`,
    data: function () {
        return {}
    },
})
new Pos().$mount(posDiv)
