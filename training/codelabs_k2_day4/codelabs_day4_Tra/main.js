function Comment_Item() {
    var main5Element = document.querySelector('.main5 ');
    Object.assign(main5Element.style, { height: '650px', });
    var commentElement = document.querySelector('.list_comment ');
    Object.assign(commentElement.style, {
        display: 'block'
    });
}

function show_more_less() {
    var showmore = document.querySelector('.click_hidden');
    var item = document.querySelector('.fa-angle-down')
        /*Object.assign(showmore.style, { display: 'block', });*/
    var text = document.getElementById('.main_text');
    if (item.style.display === 'none') {
        item.style.display = 'inline',
            main_text.innerHTML = 'Xem thêm',
            showmore.style.display = 'none'

    } else {
        item.style.display = 'none',
            main_text.innerHTML = 'Ẩn bớt',
            showmore.style.display = 'inline'
    }

    var main12Element = document.querySelector('.main1');
    Object.assign(main12Element.style, {
        overflow: 'auto',
        width: '33.33333 %',

    });
    /* var main123Element = document.querySelector('.main2');
    Object.assign(main123Element.style, { position: 'fixed' });*/
}

function myfunction2() {
    var main123Element = document.querySelector('.listmain3_click');
    Object.assign(main123Element.style, { display: 'block' });

    /* var main1234Element = document.querySelector('.main2');
    Object.assign(main1234Element.style, { position: 'fixed' });*/
    var clickElement = document.querySelector('.click_main2');
    Object.assign(clickElement.style, { display: 'none', });
}
var inputElement = document.querySelector('input[type = "text"]');
console.log(inputElement);
inputElement.oninput = function(e) {

    console.log(e.target.value);
}

/* function myfunction3() { var createElement = document.querySelector('.create_plus'); Object.assign(createElement.style, { display: 'block' }); } function myfunction4() { var createElement = document.querySelector('.header-notify');
Object.assign(createElement.style, { display: 'block' }); }*/