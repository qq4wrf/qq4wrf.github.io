//实现轮播图的切换
let img = document.querySelector('.img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slide = document.querySelector('.slide');
let lis = document.querySelectorAll('.banner_btn li') 

let imgArr = ['0.png','1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png'];

let count = 0;

//定义函数切换图片
function cutimg(){
    img.src = './images/' + imgArr[count];

    for(let i = 0; i < lis.length; i++){
        lis[i].className = '';
    }

    lis[count].className = 'active';
}

//设置定时器，每隔4s切换一次图片
let timer = setInterval(function(){
    count++;
    if(count > imgArr.length - 1){
        count = 0;
    }
    cutimg();
},4000);

//点击下一张切换图片
next.onclick = function(){
    count++;
    if(count > imgArr.length - 1){
        count = 0;
    }
    cutimg();
}

//点击上一张切换图片
prev.onclick = function(){
    count--;
    if(count < 0){
        count = imgArr.length - 1;
    }
    cutimg();
}

//鼠标滑入，定时器暂停
slide.onmouseover = function(){
    clearInterval(timer)
}

//鼠标滑出，定时器启动
slide.onmouseout = function(){
    timer = setInterval(function(){
        count++;
        if(count > imgArr.length - 1){
            count = 0;
        }
        cutimg();
    },4000);
}


//轮播图左下角点击切换图片
for(let i = 0; i < lis.length; i++){
    lis[i].onclick = () => {
        count = i;
        cutimg;
    };
}