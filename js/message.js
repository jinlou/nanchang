(function () {
    var message = function () {}

    message.prototype.init = function (msg) {
        var msgHeader = '',msgContent = '',btnsHtml = ''
        if (msg.header) {
            msgHeader = '<div class="message-box-header">'+msg.header+'</div>'
        }
        if (msg.content) {
            msgContent = '<div class="message-box-header">'+msg.content+'</div>'
        }
        if (msg.btns.length) {
            for (var i = 0; i < msg.btns.length; i++) {
                btnsHtml += '<div class="message-box-' + msg.btns.className + '">' + msg.btn[i].content + '</div>'
            }
        }

        var messageHtml =
            '<div class="message-box-wrapper">'+
                '<div class="message-box">'+
                    msgHeader +
                    msgContent +
                    '<div class="message-box-btns">'+
                        btnsHtml+
                    '</div>'+
                '</div>'+
            '</div>'
        $(body).append(messageHtml)
    }

    return message = new message();
}())