function myfunction() {
    var main5Element = document.querySelector('.main5 ');
    Object.assign(main5Element.style, { height: '650px', });
    var commentElement = document.querySelector('.list_comment ');
    Object.assign(commentElement.style, {
        display: 'block',
    });
}

function myfunction1() {
    var main1Element = document.querySelector('.click_hidden');
    Object.assign(main1Element.style, { display: 'block', });
    var main11Element = document.querySelector('.click_main1');
    Object.assign(main11Element.style, { display: 'none', });
    var main12Element = document.querySelector('.main1');
    Object.assign(main12Element.style, {
        height: '1200px',
        /*overflow: 'scroll',*/
        position: 'relative'

    });
    var main123Element = document.querySelector('.main2');
    Object.assign(main123Element.style, { position: 'fixed' });
}

function myfunction2() {
    var main123Element = document.querySelector('.listmain3_click');
    Object.assign(main123Element.style, { display: 'block' });
    var main124Element = document.querySelector('.main1');
    Object.assign(main124Element.style, {
        height: '1200px'
            /*,
                    overflow: 'scroll'*/
    });
    var main1234Element = document.querySelector('.main2');
    Object.assign(main1234Element.style, { position: 'fixed' });
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