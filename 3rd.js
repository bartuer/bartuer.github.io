function log(content) {
    console.log(content);
    var pre = document.createElement('pre');
    pre.textContent = content;
}

function addEvent(obj, eventName, listener) {
    if (obj.addEventListener) {
        obj.addEventListener(eventName, listener, false);
    } else {
        obj.attachEvent("on" + eventName, listener);
    }
}

addEvent(document, 'DOMContentLoaded', function () {
    var xd = document.getElementById('xd');
    setTimeout(function () {
        xd.contentWindow.postMessage("pop up portal", "*");                 
    }, 2000);
    log('pop up portal window');
    addEvent(window, 'message', function (event) {
        log('pick result:'+event.data);
    });
});