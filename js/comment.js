function send() {
    $name = $('#pinglun-name').val();
    if ($name == '' || $name == null) {
        alert('请输入昵称');
        return;
    }
    $content = $('#pinglun-content').val();
    if ($content == '' || $content == null) {
        alert('请输入留言');
        return;
    }
    $time = getdate();
    var jsondata = {};
    jsondata['name'] = $name;
    jsondata['content'] = $content;
    jsondata['datetime'] = $time;
    url = '../php/sql_insert.php';
    //异步HTTP请求
    $.ajax({
        url: url,
        async: false,
        data: jsondata,
        success: (result) => {
            console.log(result);
            if (result == null || result == '') {
                alert('请求异常！');
                return;
            }
            if (result == 200) {
                loadComment();
            }
        },
        error: (e) => {
            alert('错误原因是：' + e);
        }
    });
}

function getdate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var t = year + "-" + month + "-" + day + " " + hour + ':' + minutes + ':' + second;
    return t;
}

function del(id) {
    url = '../php/sql_delete.php?id=' + id;
    $.get(url, (data) => {
        console.log('success to delete!');
        loadComment();
    })
}

function loadComment() {

    url = '../php/sql_select.php?sql=select * from comment';
    $.get(url, (data) => {
        // console.log(data);
        var pinglun_content = '';
        for (let i = 0; i < data.length; i++) {
            var p = data[i];
            pinglun_content += `<p style='margin-top: 20px;margin-bottom: 20px;'><br><span style='color: red;font-size: 20px;font-weight: bold;margin-right: 10px;margin-left: 20px;'> ${p.name} </span><b>${p.datetime}</b><button onclick='del(${p.Id})' style='float:right;margin-right: 50px;height:50px;font-size:20px;'>删除</button></p><p style = 'margin-top: 20px;margin-bottom: 20px;margin-left: 20px;' >${p.content} </p><hr>`;
        }
        $("#pinglun_content").html(pinglun_content);
    });
};
$(() => {
    loadComment();
});