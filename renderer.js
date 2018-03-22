// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let $ = require('jquery')  // jQuery now loaded and assigned to $
let count = 0
$('#click-counter').text(count.toString())
$('#countbtn').on('click', () => {
    count ++
        $('#click-counter').text(count)
})

let AutoLaunch = require('auto-launch');

let AutoLauncher = new AutoLaunch({
   name: "web-box-connect",
    path: "/home/mkopec/web_box_connect/out/web-box-connect-linux-x64/web-box-connect"
});

$('#btnOnStartup').on('click', () => {
   count ++
       AutoLauncher.enable()

});

$('#btnOnStartupOff').on('click', () => {
    count --
        AutoLauncher.disable()

});

AutoLauncher.isEnabled()
.then(function(isEnabled){
    if(isEnabled) {
        $('#onStartup').text("enabled on startup");
    }
    else{
        $('#onStartup').text("disabled on startup");
    }
});