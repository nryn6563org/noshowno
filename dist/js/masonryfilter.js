var grid = document.querySelector('.grid-w');
var msnry;
// element selectors
let imgAll = document.querySelectorAll('.grid-item');
let gridMember = document.querySelectorAll('.member');
let gridMemberReturn = document.querySelectorAll('.return');
let gridMemberSjoin = document.querySelectorAll('.simple-join');
let gridMemberComplete = document.querySelectorAll('.complete');
let gridMemberJoin = document.querySelectorAll('.join');
let gridMain = document.querySelectorAll('.main');
let gridMainCreate = document.querySelectorAll('.create');
let gridMainAmount = document.querySelectorAll('.amount');
let gridMainReturn = document.querySelectorAll('.m-return');
let gridMainUrl = document.querySelectorAll('.m-url');
let gridPromise = document.querySelectorAll('.promise');
let gridPromiseDetail = document.querySelectorAll('.detail');
let gridPromiseReturn = document.querySelectorAll('.p-return');
let gridPromiseCancel = document.querySelectorAll('.cancel');
let gridMypage = document.querySelectorAll('.mypage');
let gridMypageMain = document.querySelectorAll('.my-main');
let gridMypageSetting = document.querySelectorAll('.my-setting');
let gridMypageConnect = document.querySelectorAll('.my-connect');
let gridCustomer = document.querySelectorAll('.customer');

// buttons
const tabsUl = document.getElementById('buttonGroup');
const tabsUls = document.querySelectorAll('.buttonGroups');
const lis = tabsUl.children;
const gridItems = grid.children;

imagesLoaded(grid, function () {
    msnry = new Masonry(grid, {
        //options
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
    });
});

//element & class name
function toggleClass(parentElem, childElems, className) {
    for (let i = 0; i < childElems.length; i++) {
        if (childElems[i] == parentElem) {
            childElems[i].classList.add(className);
        } else {
            childElems[i].classList.remove(className);
        }
    }
}

function showImages(showImg) {
    for (let i = 0; i < showImg.length; i++) {
        showImg[i].style.display = 'block';
    }
}

function showImages1(showImg, hideImg1, hideImg2, hideImg3, hideImg4) {
    for (let i = 0; i < showImg.length; i++) {
        showImg[i].style.display = 'block';
    }
    for (let i = 0; i < hideImg1.length; i++) {
        hideImg1[i].style.display = 'none';
    }
    for (let i = 0; i < hideImg2.length; i++) {
        hideImg2[i].style.display = 'none';
    }
    for (let i = 0; i < hideImg3.length; i++) {
        hideImg3[i].style.display = 'none';
    }
    for (let i = 0; i < hideImg4.length; i++) {
        hideImg4[i].style.display = 'none';
    }
}

function showImages2(showImg, hideImg1, hideImg2, hideImg3) {
    for (let i = 0; i < showImg.length; i++) {
        showImg[i].style.display = 'block';
    }
    for (let i = 0; i < hideImg1.length; i++) {
        hideImg1[i].style.display = 'none';
    }
    for (let i = 0; i < hideImg2.length; i++) {
        hideImg2[i].style.display = 'none';
    }
    for (let i = 0; i < hideImg3.length; i++) {
        hideImg3[i].style.display = 'none';
    }
}

function showImages3(showImg, hideImg1, hideImg2) {
    for (let i = 0; i < showImg.length; i++) {
        showImg[i].style.display = 'block';
    }
    for (let i = 0; i < hideImg1.length; i++) {
        hideImg1[i].style.display = 'none';
    }
    for (let i = 0; i < hideImg2.length; i++) {
        hideImg2[i].style.display = 'none';
    }
}

function hideImages(hideImg1, hideImg2, hideImg3, hideImg4) {
    for (let i = 0; i < hideImg1.length; i++) {
        hideImg1[i].style.display = 'none';
    }
    for (let i = 0; i < hideImg2.length; i++) {
        hideImg2[i].style.display = 'none';
    }
    for (let i = 0; i < hideImg3.length; i++) {
        hideImg3[i].style.display = 'none';
    }
    for (let i = 0; i < hideImg4.length; i++) {
        hideImg4[i].style.display = 'none';
    }
}

document.querySelector('#allpage').addEventListener('click', function () {
    window.location.reload();
});

tabsUl.addEventListener('click', event => {
    let tabLi = event.target.parentNode;

    toggleClass(tabLi, lis, 'is-active');

    //show ny images
    if (event.target.id == 'member') {
        showImages1(gridMember, gridMain, gridMypage, gridCustomer, gridPromise);
    }
    if (event.target.id == 'main') {
        showImages1(gridMain, gridMypage, gridCustomer, gridPromise, gridMember);
    }
    if (event.target.id == 'mypage') {
        showImages1(gridMypage, gridCustomer, gridPromise, gridMember, gridMain);
    }
    if (event.target.id == 'customer') {
        showImages1(gridCustomer, gridPromise, gridMember, gridMain, gridMypage);
    }
    if (event.target.id == 'promise') {
        showImages1(gridPromise, gridMember, gridMain, gridMypage, gridCustomer);
    }

    msnry.layout();
});

for (i = 0; i < tabsUls.length; i++) {
    const tabUli = tabsUls[i];

    tabUli.addEventListener('click', event => {
        let liss = event.target.children;
        let tabLi = event.target.parentNode;

        toggleClass(tabLi, liss, 'is-active');

        //로그인
        if (event.target.id == 'simple-join') {
            showImages2(gridMemberSjoin, gridMemberComplete, gridMemberReturn, gridMemberJoin);
            hideImages(gridMain, gridPromise, gridMypage, gridCustomer);
        }
        if (event.target.id == 'return') {
            showImages2(gridMemberReturn, gridMemberSjoin, gridMemberComplete, gridMemberJoin);
            hideImages(gridMain, gridPromise, gridMypage, gridCustomer);
        }
        if (event.target.id == 'complete') {
            showImages2(gridMemberComplete, gridMemberReturn, gridMemberSjoin, gridMemberJoin);
            hideImages(gridMain, gridPromise, gridMypage, gridCustomer);
        }
        //메인페이지
        if (event.target.id == 'create') {
            showImages2(gridMainCreate, gridMainAmount, gridMainReturn, gridMainUrl);
            hideImages(gridMember, gridPromise, gridMypage, gridCustomer);
        }
        if (event.target.id == 'amount') {
            showImages2(gridMainAmount, gridMainReturn, gridMainCreate, gridMainUrl);
            hideImages(gridMember, gridPromise, gridMypage, gridCustomer);
        }
        if (event.target.id == 'm-return') {
            showImages2(gridMainReturn, gridMainCreate, gridMainUrl, gridMainAmount);
            hideImages(gridMember, gridPromise, gridMypage, gridCustomer);
        }
        if (event.target.id == 'm-url') {
            showImages2(gridMainUrl, gridMainReturn, gridMainCreate, gridMainAmount);
            hideImages(gridMember, gridPromise, gridMypage, gridCustomer);
        }
        //약속관리
        if (event.target.id == 'detail') {
            showImages3(gridPromiseDetail, gridPromiseCancel, gridPromiseReturn);
            hideImages(gridMember, gridMain, gridMypage, gridCustomer);
        }
        if (event.target.id == 'p-return') {
            showImages3(gridPromiseReturn, gridPromiseDetail, gridPromiseCancel);
            hideImages(gridMember, gridMain, gridMypage, gridCustomer);
        }
        if (event.target.id == 'cancel') {
            showImages3(gridPromiseCancel, gridPromiseReturn, gridPromiseDetail);
            hideImages(gridMember, gridMain, gridMypage, gridCustomer);
        }

        //마이페이지
        if (event.target.id == 'my-main') {
            showImages3(gridMypageMain, gridMypageConnect, gridMypageSetting);
            hideImages(gridMember, gridMain, gridCustomer, gridPromise);
        }
        if (event.target.id == 'my-connect') {
            showImages3(gridMypageConnect, gridMypageSetting, gridMypageMain);
            hideImages(gridMember, gridMain, gridCustomer, gridPromise);
        }
        if (event.target.id == 'my-setting') {
            showImages3(gridMypageSetting, gridMypageMain, gridMypageConnect);
            hideImages(gridMember, gridMain, gridCustomer, gridPromise);
        }

        msnry.layout();
    });
}

grid.addEventListener('click', function (event) {
    let imgContainer = event.target.parentNode;
    toggleClass(imgContainer, gridItems, 'grid-item__expanded');
    msnry.layout();
});
