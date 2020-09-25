window.addEventListener('scroll',function(event){
    var scroll=this.scrollY;
    // console.log(scroll);
    if(scroll < 564 && scroll >=0){
        document.getElementsByClassName('left_home')[0].classList.add('active');
    }else{
        document.getElementsByClassName('left_home')[0].classList.remove('active');
    }

    if(scroll < 1177.5999755859375 && scroll >=564){
        document.getElementsByClassName('left_about')[0].classList.add('active');
    }else{
        document.getElementsByClassName('left_about')[0].classList.remove('active');
    }

    if(scroll <1792  && scroll >=1177.5999755859375){
        document.getElementsByClassName('left_skills')[0].classList.add('active');
    }else{
        document.getElementsByClassName('left_skills')[0].classList.remove('active');
    }

    if(scroll <2404  && scroll >=1792){
        document.getElementsByClassName('left_resume')[0].classList.add('active');
    }else{
        document.getElementsByClassName('left_resume')[0].classList.remove('active');
    }

    if(scroll <3200  && scroll >=2404){
        document.getElementsByClassName('left_contact')[0].classList.add('active');
    }else{
        document.getElementsByClassName('left_contact')[0].classList.remove('active');
    }

    if(scroll>100){
        document.getElementsByClassName('scroll_top')[0].classList.add('scroll_top_active');
    }else{
        document.getElementsByClassName('scroll_top')[0].classList.remove('scroll_top_active');
    }
})


document.getElementsByClassName('scroll_top')[0].addEventListener('click',function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
})

// document.getElementsByClassName('left_home')[0].addEventListener('click',function(){
//     window.scrollTo({
//         top:0,
//         left:0,
//         behavior:"smooth"
//     });
// })