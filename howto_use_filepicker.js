function handlePickResult(resultObj) {
    var errormsg = "";
    if (resultObj.error) {
        console.error(resultObj.error); // TODO need handle cancel
    } else {
        try {
            var pre = document.createElement('pre');
            pre.textContent = JSON.stringify(resultObj, null, 4);
            document.body.appendChild(pre);
            pre.setAttribute('id', "result_description");
            var href = document.createElement('a');
            href.setAttribute('href', resultObj.Link);
            href.setAttribute('id', "result_link");
            href.textContent = resultObj.FileName;
            document.body.appendChild(href);
        } catch (e) {
            errormsg += e;
        }
    }
}

function pickOnclick() {
    OneDrivePro.Open({
        LinkType: "sharing",
        MultiSelect: false,
        FolderSelect: false
    }, handlePickResult);
}

function createButton() {
    var button = document.getElementById(button_id);
    if (button === null) {
        var button_id = "file_picker_button";
        var button_content = 'pick';
        var button_style = "width:100px;height:45px;margin:12px;line-height:45px;font-size:28px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;";
        button = document.createElement('button');
        button.setAttribute('id', button_id);
        button.setAttribute('style', button_style);
        document.body.appendChild(button);
        button.textContent = button_content;
    }
    button.onclick = pickOnclick;
}

function addEvent(obj, eventName, listener) {
    if( obj.addEventListener ) {
        obj.addEventListener( eventName, listener, false );
    } else {
        obj.attachEvent("on" + eventName, listener);
   }
}

addEvent(document, 'DOMContentLoaded', function() {
    createButton();
});