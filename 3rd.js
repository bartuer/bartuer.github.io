function log(content) {
    console.log(content);
    var pre = document.createElement('pre');
    pre.textContent = content;
    document.body.appendChild(pre);
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
    addEvent(window, 'message', function (event) {
        var data;
        try {
            data = JSON.parse(event.data);
        } catch(e) {
            data = event.data;
        }
        if (typeof data === "object" && data.type === 'result') {
            log('pick result:'+data.payload);            
        }
        if (typeof data === "object" && data.type === 'ack') {
            var msg = {
                payload : "pop up portal",
                domain  : window.locaton.href
            };
            log('pop up portal window');
            xd.contentWindow.postMessage(JSON.stringify(msg), "*");                 
        }
    });
});