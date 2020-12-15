var socket = io();

//show msg
function showMsg(type) {
    if(type === 0){
        $.scojs_message('This is an user online',$scojs_message.TYPE_OK)
    } else if(type === 1) {
        $.scojs_message('This is an user offline', $.scojs_message.TYPE_OK);
    }
    
}