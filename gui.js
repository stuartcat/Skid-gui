var app = window.open('', '_blank', 'left=100,top=100,width=620,height=320')
function run() {
    var bar = app.document.createElement('h1')
    var op = app.document.createElement('h2')
    var btn1 = app.document.createElement('button')
    var btn2 = app.document.createElement('button')
    var btn3 = app.document.createElement('button')
    var btn4 = app.document.createElement('button')
    var btn5 = app.document.createElement('button')
    btn5.onclick = function () {
        if (window.location.href.includes('https://www.youtube.com')) {
        (function(){document.querySelector('video').currentTime = document.querySelector('video').duration})();} else {
            alert('Please use the script on youtube!')
        }
    }
    btn4.onclick = function () {
        var host = window.location.hostname; if (host == "edpuzzle.com") { var r = new XMLHttpRequest(); r.open("GET", "https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js", true); r.addEventListener("load", function(){eval(this.responseText);}); r.send();} else if (host == "edpuzzle.hs.vc") {alert("To use this, drag this button into your bookmarks bar. Then, run it when you\u0027re on an Edpuzzle assignment.")} else {alert("Please run this on an Edpuzzle assignment.")}
    }
    btn1.onclick = function () {
        document.body.contentEditable = 'true'; document.designMode='on';
    }
    btn2.onclick = function () {
        (function () { var script = document.createElement('script'); script.src="//cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload = function () { eruda.init() } })();
    }
    btn3.onclick = function () {
        alert('Dont press the "dont show this message again button" and always click cancel Never click leave unless you want to leave the site!')
        window.onbeforeunload=function(){return '';}
    }
    btn1.style.color = "white";
    btn1.style.fontSize = "20px"
    btn1.style.backgroundColor = "purple"
    btn1.style.borderRadius = "12px"
    btn1.innerHTML = "Edit text"
    btn2.style.color = "white";
    btn2.style.fontSize = "20px"
    btn2.style.backgroundColor = "purple"
    btn2.style.borderRadius = "12px"
    btn2.innerHTML = "Inspect Element"
    btn3.style.color = "white";
    btn3.style.fontSize = "20px"
    btn3.style.backgroundColor = "purple"
    btn3.style.borderRadius = "12px"
    btn4.style.color = "white";
    btn4.style.fontSize = "20px"
    btn4.style.backgroundColor = "purple"
    btn4.style.borderRadius = "12px"
    btn4.innerHTML = "EdPuzzle Skip Tool"
    btn5.style.color = "white";
    btn5.style.fontSize = "20px"
    btn5.style.backgroundColor = "purple"
    btn5.style.borderRadius = "12px"
    btn5.innerHTML = "Youtube Ad Skipper"
    btn3.innerHTML = "Anti GoGuardian Tab closer"
    op.style.borderStyle = "solid";
    op.style.borderColor = "purple"
    op.style.width = "100%"
    op.style.height = "325px"
    op.innerHTML = "s"
    bar.innerHTML = '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀SKID GUI v2.3⠀⠀⠀⠀⠀'
    bar.style.backgroundColor = "black"
    app.document.body.style.backgroundColor = 'black'
    bar.style.border = '500px'
    bar.style.color = "white"
    op.appendChild(btn1)
    op.appendChild(btn2)
    op.appendChild(btn3)
    op.appendChild(btn4)
    op.appendChild(btn5)
    app.document.body.appendChild(bar)
    app.document.body.appendChild(op)
    
}

