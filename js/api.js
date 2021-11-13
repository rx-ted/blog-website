$.ajax({
    type: 'GET',
    url: 'https://v1.hitokoto.cn',
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'hitokoto',
    success(data) {

        $('#hitokoto_text').attr('href', 'https://hitokoto.cn/?uuid=' + data.uuid)
        console.log(data);
        $('#hitokoto_text').text(data.hitokoto)
    },
    error(jqXHR, textStatus, errorThrown) {
        // 错误信息处理
        console.error(textStatus, errorThrown)
    }
})