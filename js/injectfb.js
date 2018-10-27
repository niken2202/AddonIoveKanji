
window.onload = function () {
    //get Data
    injectData();
    setInterval(function () { injectData();}, 5*60*1000);
}
function injectData() {
    var url = "https://cdn.jsdelivr.net/gh/niken2202/niken2202.github.io@d6de876d3a755cc76b4710024f70340c03c6cfb0/kanjilib.json";
    jQuery.getJSON(url, function (json) {
        var index = Math.floor(Math.random() * (json.length - 1)) + 0;
        var word = json[index];
        var container = document.getElementsByClassName("_4-u2 _1-ib _2tyk _20os _4-u8");
        var html = "";
        word.Example = word.Example.replace(/\n|\r\n/g, "<br>");
        html += '<div class="wrapper">'
            + '<div class="kanji">' + word.Kanji + '</div>'
            + '<div class="mean">' + word.Mean + '</div>'
            + '<div class="on">On: ' + word.On + '</div>'
            + '<div class="kun">kun: ' + word.Kun + '</div>'
            + '<div class="example">' + word.Example + '</div>'
            + '</div>'
            + '<div class="sign">Created with <font color="red">❤</font> by Le Trong Thang </div>';
        if (container.length != 0) {
            if(container.length==4){
                container[3].innerHTML = html;
            }
            container[2].innerHTML = html;
            container[0].innerHTML = html;
        }
    });

}
async function scheduleInject(time) {
    console.log('Taking a break...');
    await sleep(time);
    injectData();
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}