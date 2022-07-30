// <!-- 点击后5秒自动跳转 -->

    var phone = document.querySelector('#ph');
    var timebox = document.querySelector('.timer');

    phone.addEventListener('click', function () {
        timebox.style.display = 'block';
        var times = 3;
        var time1 = setInterval(function () {
            if (times == 0) {
                location.href = 'http://localhost:8080/list.html';
            }
            else {
                timebox.innerHTML = '还有' + times + '秒跳转页面哦';
                times--;
            }
        }, 1000)
    })
    // 根据图片个数获取小圆圈个数
    var pic = document.querySelector('.pic');
    var ul = pic.querySelector('ul');
    var ol = pic.querySelector('ol');
    var pic = document.querySelector('.pic');
    var prev = pic.querySelector('.prev');
    var next = pic.querySelector('.next');

    window.addEventListener('load', function () {


        for (var i = 0; i < ul.children.length; i++) {
            var li = document.createElement('li');
            //给每个小圆圈赋值
            li.setAttribute('index', i);
            ol.appendChild(li);
            li.addEventListener('click', function () {
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].style.backgroundColor = '';
                }
                //获取每个li的index
                let index = this.getAttribute('index');
                this.style.backgroundColor = 'red';
                cartoon(ul, -(index) * 770);
            })
            ol.children[0].style.backgroundColor = 'red';
        }
        //点击左右键滚动图片
        var circle = 0
        var num = 0;
        var flag = true;
        prev.addEventListener('click', function () {
            if (flag) {
                flag = false;
                circle++;
                if (num == 4) {
                    ul.style.left = 0;
                    circle = 1;
                    num = 0
                }
                num++;
                cartoon(ul, -num * 770, function () {

                })
                for (let i = 0; i < ol.children.length; i++) {
                    ol.children[i].style.backgroundColor = ''
                }
                ol.children[circle].style.backgroundColor = 'red';
            }
            fla = true;
        })

        next.addEventListener('click', function () {
            if (flag) {
                flag = false;
                circle--;
                if (num == 0) {
                    circle = 4;//(4,用length这样比较高级)
                    num = ol.children.length;
                    ul.style.left = num * 770 + 'px';
                }
                num--;
                cartoon(ul, -num * 770, function () {
                });
                for (let i = 0; i < ol.children.length; i++) {
                    ol.children[i].style.backgroundColor = ''
                }
                ol.children[circle].style.backgroundColor = 'red';
            }
            fla = true;

        })

        // 滚动动画函数
        function cartoon(obj, target, callback) {
            //这里怕用var命名会搞混，所以用obj.timer
            obj.timer = setInterval(function () {
                var step = (target - obj.offsetLeft) / 2;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (obj.offsetLeft == target) {
                    clearInterval(obj.timer);
                    if (callback) {
                        callback();
                    }
                }

                else {
                    obj.style.left = obj.offsetLeft + step + 'px';
                }
            }, 30)
        }
        //设置定时器，让图片自动滚动
        var timer = 0;
        var fla = true;
        if (fla) {
            fla = false;
            setInterval(function () {
                if (timer > 4) {
                    cartoon(ul, 0, function () {

                    });//第二个参数就是ul离左边的距离
                    timer = 0;
                } else {
                    timer++;
                    cartoon(ul, -770 * (timer - 1));
                }
                flag = true;
                fla = true;
            }, 2500);
        }

    });
    //电梯，点击后滑到相应位置
    $('.h').click(function () {
        //这里不能用window和doucment
        $('body,html').animate({
            scrollTop: 800,
        });
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            $('.flex').fadeIn();
            if ($(this).scrollTop() >= 800) {
                $('.flex ul li:eq(1)').css({
                    backgroundColor: 'rgb(200, 22, 35)',
                    color: 'black',
                })
                $('.flex ul li:eq(1)').siblings().css('background', '');
            }
            else {
                $('.flex ul li:eq(0)').css('background', 'rgb(200, 22, 35)')
                //排他思想
                $('.flex ul li:eq(0)').siblings().css('background', '');
            }


        }
        else {
            $('.flex').fadeOut();
            $('.flex ul li').css('background', '');
        }
    })     
    H5FullscreenPage.init();

