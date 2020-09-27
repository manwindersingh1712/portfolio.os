let flag=true;
let present_class="wallpaper";


document.getElementsByClassName('wallpaper')[0].addEventListener('click',function(){
    
    if(flag){
        document.getElementsByClassName('db')[0].classList.add('popup');
        document.getElementsByClassName('db')[0].classList.remove('popdown');
        flag=false;
    }else{
        document.getElementsByClassName('db')[0].classList.remove('popup');
        document.getElementsByClassName('db')[0].classList.add('popdown');
        flag=true;
    }
    present_class="wallpaper";

})

document.getElementsByClassName('font_family')[0].addEventListener('click',function(){
    document.getElementsByClassName('db')[0].classList.toggle('popup');
    present_class="font_family";

})

document.getElementsByClassName('font_size')[0].addEventListener('click',function(){
    document.getElementsByClassName('db')[0].classList.toggle('popup');
    present_class="font_size";

})

document.getElementsByClassName('translator')[0].addEventListener('click',function(){
    document.getElementsByClassName('db')[0].classList.toggle('popup');
    present_class="translator";

})


