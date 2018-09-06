window.onload = function () {
    shop = document.querySelector('.enter .right .shop');
    a = document.querySelector('.enter .right .shop a');
    car = document.querySelector('.enter .right .shop i');
    shopdiv = document.querySelector('.enter .shop-hid');
    sli = document.querySelectorAll('.search .small-search ul li');
    sul = document.querySelectorAll('.search .search-hid ul');
    hid = document.querySelector('.search .search-hid');
    Sli = document.querySelectorAll('.home .ele .title ul li');
    Sul = document.querySelectorAll('.home .ele .all ul');
    Li = document.querySelectorAll('.home .intel .title ul li');
    Ul = document.querySelectorAll('.home .intel .all ul');
    aLi = document.querySelectorAll('.home .adapt .title ul li');
    aUl = document.querySelectorAll('.home .adapt .all ul');
    bLi = document.querySelectorAll('.home .fit .title ul li');
    bUl = document.querySelectorAll('.home .fit .all ul');
    cLi = document.querySelectorAll('.home .around .title ul li');
    cUl = document.querySelectorAll('.home .around .all ul');
    span1 = document.querySelector('.gilt .title .trans .left');
    span2 = document.querySelector('.gilt .title .trans .right');
    aaul = document.querySelectorAll('.gilt ul');
    allul = document.querySelectorAll('.home .recommend ul');
    trans = document.querySelector(' main .home .content .title .trans');
    span3 = document.querySelector(' main .home .content .title .trans .span');
    span4 = document.querySelector(' main .home .content .title .trans .next');
    up = document.querySelector('main .home .recommend .title .trans .up');
    down = document.querySelector('main .home .recommend .title .trans .down');
    nul = document.querySelectorAll('main .home .recommend ul');
    shop.onmouseover = function() {
        shopdiv.style.height = '100px';
        a.style.color = '#ff6700';
        car.style.color = '#ff6700';
        shop.style.background='rgb(255,255,255)'
    }
    shopdiv.onmouseover = function() {
        shopdiv.style.height = '100px';
        a.style.color = '#ff6700';
        car.style.color = '#ff6700';
        shop.style.background='rgb(255,255,255)'
    }
    shop.onmouseout = function () {
        shopdiv.style.height='0';
        a.style.color = '#999';
        car.style.color = '#999';
        shop.style.background='rgba(150,150,150,.4)';
    }
    shopdiv.onmouseout = function () {
        shopdiv.style.height='0';
        a.style.color = '#999';
        car.style.color = '#999';
        shop.style.background='rgba(150,150,150,.4)';
    }
    var len = sul.length;
    for(var i = 0;i<len;i++){
        sli[i].index = i;
        sul[i].index = i;
        sli[i].onmouseover = function () {
            for(var j=0;j<len;j++){
                sli[j].style.color = '#333';
                hid.style.height = '0';
                sul[j].style.display = 'none';
            }
            sli[this.index].style.color = '#ff6700';
            hid.style.height = '190px';
            sul[this.index].style.display = 'block';
        }
        sli[i].onmouseout = function () {
            sli[this.index].style.color = '#333';
            hid.style.height = '0';
            sul[this.index].style.display = 'none';
        }
        sul[i].onmouseover = function () {
            for(var j=0;j<len;j++){
                hid.style.height = '0';
                sul[j].style.display = 'none';
            }
            hid.style.height = '190px';
            sul[this.index].style.display = 'block';
        }
        sul[i].onmouseout = function () {
           hid.style.height = '0';
        }
    }
    searchinput = document.querySelector('.search .small-search .right input');
    searchi = document.querySelector('.search .small-search .right i');
    searchrecom = document.querySelector('.search .small-search .right .recom');
    searchrepro = document.querySelector('.search .small-search .right .pro');
    searchinput.onclick = function () {
        searchinput.style.border = '1px solid #ff6700';
        searchi.style.border = '1px solid #ff6700';
        searchi.style.borderLeft = '0';
        searchrecom.style.display = 'block';
        searchrepro.style.display = 'none';
    }
    searchinput.onblur = function () {
        searchinput.style.border = '';
        searchi.style.border = '';
        searchrecom.style.display = 'none';
        searchrepro.style.display = 'block';
    }
    searchinput.onkeyup = function () {
        searchrecom.style.display = 'none';
    }
    searchi.onmouseover = function () {
        searchi.style.background = '#ff6700';
        searchi.style.color = 'white';
    };
    searchi.onmouseout = function () {
        searchi.style.background = '';
        searchi.style.color = '';
    };
    carouselimg = document.querySelectorAll('main .carousel .tu .image img');
    carouselspanone = document.querySelector('.carousel .tu .dire-span .span-one');
    carouselspantwo = document.querySelector('.carousel .tu .dire-span .span-two');
    carouseldiv = document.querySelectorAll('.carousel .tu .choice div');
    her = carouselimg.length;
    function update(num) {
        for (var j = 0; j < her; j++) {
            carouseldiv[j].style.background = '#333';
            carouselimg[j].style.display = 'none';
        }
        carouseldiv[num].style.background = 'white';
        carouselimg[num].style.display = 'block';
    }
    function autoplay() {
        num++;
        if (num >= her) {
            num = 0;
        }
        update(num);
    }
    for(var i = 0; i < her; i++) {
        carouseldiv[i].index = i;
        carouseldiv[i].onclick = function () {
            update(this.index);
        }
        carouseldiv[i].onmouseup = function () {
            num = this.index;
            timer = setInterval(autoplay,1000);
        }
        carouselspantwo.onclick = function () {
               i++;
               if (i >= her + 1) {
                   return i = 0;
               }
               for (var j = 0; j < her; j++) {
                   carouseldiv[j].style.background = '#333';
                   carouselimg[j].style.display = 'none';
               }
               carouseldiv[i].style.background = 'white';
               carouselimg[i].style.display = 'block';
        }
    }
    carouselli = document.querySelectorAll('.carousel .tu .left li');
    depotdiv = document.querySelectorAll('.carousel .tu .depot div');
    lenght = carouselli.length;
    for(var p = 0;p < lenght; p++){
        carouselli[p].index = p;
        depotdiv[p].index = p;
        carouselli[p].onmouseover = function () {
            for(var j = 0; j < lenght; j++){
                depotdiv[j].style.display = 'none';
                carouselli[j].style.background = '';
            }
            depotdiv[this.index].style.display = 'block';
            carouselli[this.index].style.background = '#ff6700';
        }
        carouselli[p].onmouseout = function () {
            depotdiv[this.index].style.display = 'none';
            carouselli[this.index].style.background = '';
        }
    }
    count = document.querySelectorAll('.home .content ul li .count');
    cou = document.querySelector('.home .content ul li .count');
    var time = setInterval(function () {
        var startTime = new Date();
        var endTime = new Date('2018 8 28 22:00:00');
        var timer = endTime.getTime() - startTime.getTime();
        function format(num){
            return num < 10 ? '0' + num : num
        }
        if (timer > 0) {
            hour = format(Math.floor(timer / 1000 / 60 / 60 % 24));
            minute =format(Math.floor(timer / 1000 / 60 % 60)) ;
            second = format(Math.floor(timer / 1000 % 60));
            document.getElementById('hours').innerHTML = hour;
            document.getElementById('minutes').innerHTML = minute;
            document.getElementById('seconds').innerHTML = second;
        }
        timer--;
        if (timer < 0){
            time == 0;
            clearInterval(timer);
        }
    }, 1000)
    var bb = Sli.length;
    for (var i = 0; i<bb;i++){
        Sli[i].index = i;
        Sli[i].onmouseover = function(){
            for (var j = 0; j<bb;j++) {
                Sli[j].style.className = '';
                Sul[j].style.display = 'none';
                Sli[j].style.color = '#424242';
                Sli[j].style.borderBottom = '0';
            }
            Sli[this.index].style.className = 'act';
            Sul[this.index].style.display = 'inline-block';
            Sli[this.index].style.color = 'orangered';
            Sli[this.index].style.borderBottom = '2px solid orangered';
        }
    }
    var cc = Li.length;
    for (var i = 0; i<cc;i++){
        Li[i].index = i;
        Li[i].onmouseover = function(){
            for (var j = 0; j<cc;j++) {
                Li[j].style.className = '';
                Ul[j].style.display = 'none';
                Li[j].style.color = '#424242';
                Li[j].style.borderBottom = '0';
            }
            Li[this.index].style.className = 'act';
            Ul[this.index].style.display = 'inline-block';
            Li[this.index].style.color = 'orangered';
            Li[this.index].style.borderBottom = '2px solid orangered';
        };
    }
    var dd = aLi.length;
    for (var i = 0; i<dd;i++) {
        aLi[i].index = i;
        aLi[i].onmouseover = function () {
            for (var j = 0; j < dd; j++) {
                aLi[j].style.className = '';
                aUl[j].style.display = 'none';
                aLi[j].style.color = '#424242';
                aLi[j].style.borderBottom = '0';
            }
            aLi[this.index].style.className = 'ada';
            aUl[this.index].style.display = 'inline-block';
            aLi[this.index].style.color = 'orangered';
            aLi[this.index].style.borderBottom = '2px solid orangered';
        };
    }
    var ee = bLi.length;
    for (var i = 0; i<ee;i++) {
        bLi[i].index = i;
        bLi[i].onmouseover = function () {
            for (var j = 0; j < dd; j++) {
                bLi[j].style.className = '';
                bUl[j].style.display = 'none';
                bLi[j].style.color = '#424242';
                bLi[j].style.borderBottom = '0';
            }
            bLi[this.index].style.className = 'out';
            bUl[this.index].style.display = 'inline-block';
            bLi[this.index].style.color = 'orangered';
            bLi[this.index].style.borderBottom = '2px solid orangered';
        };
    }
    var ff = cLi.length;
    for (var g = 0;g<ff; g++) {
        cLi[g].index = g;
        cLi[g].onmouseover = function(){
            for (var h = 0; h<ff; h++){
                cLi[h].style.className = '';
                cUl[h].style.display = 'none';
                cLi[h].style.color = '#424242';
                cLi[h].style.borderBottom = '0';
            }
            cLi[this.index].style.className = 'pem';
            cUl[this.index].style.display = 'block';
            cLi[this.index].style.color = 'orangered';
            cLi[this.index].style.borderBottom = '2px solid orangered';
        }
    }
    var w = 0;
    span2.onclick = function () {
        if(w < 1){
            aaul[w].style.display = 'none';
            aaul[w+1].style.display = 'inline-block';
        }
        ++w;
    };
    span1.onclick = function () {
        if(w > 0){
            aaul[w].style.display = 'none';
            aaul[w-1].style.display = 'inline-block';
        }
        --w;
    };
    trans.onmouseover = function(){
        span3.style.color = 'orange';
        span4.style.background = 'orange';
    }
    trans.onmouseout = function(){
        span3.style.color = '';
        span4.style.background = '';
    }
    var x = 0;
    down.onclick = function () {
        if(x <3){
            nul[x].style.display = 'none';
        }else if(x = 3){
            nul[x].style.display = 'inline-block';
        }
        ++x;
    };
    up.onclick = function () {
        if(x >= 0){
            nul[x-1].style.display = 'inline-block';
        }else if(x = 0){
            nul[x].style.display = 'inline-block';
        }
       --x;
    };
    hhdian = document.querySelectorAll('main .home .cont ul .one .dian div');
    hhimg = document.querySelector('main .home .cont ul .one .one-div .lenght');
    iidian = document.querySelectorAll('main .home .cont ul .two .dian div');
    iiimg = document.querySelector('main .home .cont ul .two .one-div .lenght');
    jjdian = document.querySelectorAll('main .home .cont ul .three .dian div');
    jjimg = document.querySelector('main .home .cont ul .three .one-div .lenght');
    kkdian = document.querySelectorAll('main .home .cont ul .fovr .dian div');
    kkimg = document.querySelector('main .home .cont ul .fovr .one-div .lenght');
    hhlen = hhdian.length;
    iilen = iidian.length;
    for (var i = 0;i < hhlen;i++){
        hhdian[i].index=i;
        hhdian[i].onclick = function () {
            for (var j = 0;j < hhlen;j++){
                hhdian[j].className = '';
                hhimg.style.left = '0'
            }
            hhdian[this.index].className = 'bast';
            hhimg.style.left = -((this.index) * 100)+'%';
        }
    }
    for (var i = 0;i < iilen;i++){
        iidian[i].index=i;
        iidian[i].onclick = function () {
            for (var j = 0;j < iilen;j++){
                iidian[j].className = '';
                jjimg.style.left = '0'
            }
            iidian[this.index].className = 'bast';
            iiimg.style.left = -((this.index) * 100)+'%';
        }
    }
    for (var i = 0;i < iilen;i++){
        jjdian[i].index=i;
        jjdian[i].onclick = function () {
            for (var j = 0;j < iilen;j++){
                jjdian[j].className = '';
                jjimg.style.left = '0'
            }
            jjdian[this.index].className = 'bast';
            jjimg.style.left = -((this.index) * 100)+'%';
        }
    }
    for (var i = 0;i < iilen;i++){
        kkdian[i].index=i;
        kkdian[i].onclick = function () {
            for (var j = 0;j < iilen;j++){
                kkdian[j].className = '';
                kkimg.style.left = '0'
            }
            kkdian[this.index].className = 'bast';
            kkimg.style.left = -((this.index) * 100)+'%';
        }
    }
    lldiv = document.querySelectorAll('.video div');
    llimg = document.querySelectorAll('main .home .video .bottom figure');
    llli = document.querySelectorAll('.video div ul li');
    body = document.querySelector('body');
    llfix = document.querySelector('.video');
    lllen = llimg.length;
    for (var i = 0;i < lllen;i++){
        llimg[i].index = i;
        lldiv[i].index = i;
        llimg[i].onclick = function () {
            lldiv[this.index].style.top = 100 + 'px';
            body.style.background = '#333';
            body.style.opacity = '0.6';
        }
    }










}
