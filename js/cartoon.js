
var pic = document.querySelector('.pic');
var ul = pic.querySelector('ul');
var prev = pic.querySelector('.prev');

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