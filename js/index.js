$('.top-back').on('click', function(event) {
    event.preventDefault();
    $('body,html').animate({
        scrollTop: 0,
    }, 700);
});

function loadhtml() {
    url = '../php/sql_select.php?sql=select * from article';
    console.log(2222);
    $.get(url, (data) => {
        html = '';
        for (let i = 0; i < data.length; i++) {
            p = data[i];
            html += `
            <li>
            <a href="${p.href}" target="_blank">
                <i>
                    <img src="${p.image}"
                            alt="">
                </i>
                <h2>${p.title}</h2>
            </a>
            <p class="blog-introduce">${p.introduce}</p>
            <p class="blog-info">
                <span>${p.time}</span>
                <span>${p.author}</span>
                <span>
                    <a href="${p.fromUrl}"  target="_blank">${p.from}</a>
                </span>

                <span>${p.likecount}</span>
            </p>
        </li>
`;
        }
        $('.blogs').html(html);
    })
}

$(() => {
    loadhtml();
});