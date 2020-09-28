let flag=true;    ///if true popup and if false popdown
let present_class; 
let counter=0;//to check whether it is the present class or not

// WALLPAPER

document.getElementsByClassName('wallpaper')[0].addEventListener('click',function(){
    if(counter===0){
        present_class="wallpaper";
        document.getElementsByClassName('db')[0].classList.add('popup');
        document.getElementsByClassName('db')[0].classList.remove('popdown');
        counter=1;
    }
    
    document.getElementsByClassName('db')[0].classList.remove('zero')
    
    if(flag && present_class === "wallpaper"){
        document.getElementsByClassName('db')[0].classList.add('popup');
        document.getElementsByClassName('w')[0].classList.add('wallpaper_active');
        document.getElementsByClassName('trans')[0].classList.remove('t_active');
        document.getElementsByClassName('t')[0].classList.remove('font-size_active');
        document.getElementsByClassName('f')[0].classList.remove('font_family_active');
        document.getElementsByClassName('db')[0].classList.remove('popdown');
        flag=false;
    }else if(present_class !== "wallpaper"){
        document.getElementsByClassName('w')[0].classList.add('wallpaper_active');
        document.getElementsByClassName('trans')[0].classList.remove('t_active');
        document.getElementsByClassName('t')[0].classList.remove('font-size_active');
        document.getElementsByClassName('f')[0].classList.remove('font_family_active');
    }else{
        document.getElementsByClassName('db')[0].classList.remove('popup');
        document.getElementsByClassName('db')[0].classList.add('popdown');
        flag=true;
    }

    present_class="wallpaper";

})


// FONT FAMILY

document.getElementsByClassName('font_family')[0].addEventListener('click',function(){
        
    if(counter===0){
        present_class="font_family";
        counter=1;
    }

    document.getElementsByClassName('db')[0].classList.remove('zero')

    if(flag && present_class === "font_family"){
        document.getElementsByClassName('db')[0].classList.add('popup');
        document.getElementsByClassName('f')[0].classList.add('font_family_active');
        document.getElementsByClassName('w')[0].classList.remove('wallpaper_active');
        document.getElementsByClassName('trans')[0].classList.remove('t_active');
        document.getElementsByClassName('t')[0].classList.remove('font-size_active');
        
        document.getElementsByClassName('db')[0].classList.remove('popdown');
        flag=false;
    }else if(present_class !== "font_family"){
        document.getElementsByClassName('f')[0].classList.add('font_family_active');
        document.getElementsByClassName('w')[0].classList.remove('wallpaper_active');
        document.getElementsByClassName('trans')[0].classList.remove('t_active');
        document.getElementsByClassName('t')[0].classList.remove('font-size_active');
    }else{
        document.getElementsByClassName('db')[0].classList.remove('popup');
        document.getElementsByClassName('db')[0].classList.add('popdown');
        flag=true;
    }

    present_class="font_family";


})

// TEXT SIZE 
document.getElementsByClassName('font_size')[0].addEventListener('click',function(){

    if(counter===0){
        present_class="font_size";
        counter=1;
    }

    document.getElementsByClassName('db')[0].classList.remove('zero')

   
    if(flag){
        document.getElementsByClassName('db')[0].classList.add('popup');
        document.getElementsByClassName('t')[0].classList.add('font-size_active');
        document.getElementsByClassName('w')[0].classList.remove('wallpaper_active');
        document.getElementsByClassName('trans')[0].classList.remove('t_active');
        document.getElementsByClassName('f')[0].classList.remove('font_family_active');

        document.getElementsByClassName('db')[0].classList.remove('popdown');
        flag=false;
    }else if(present_class !== "font_size"){
        document.getElementsByClassName('t')[0].classList.add('font-size_active');
        document.getElementsByClassName('w')[0].classList.remove('wallpaper_active');
        document.getElementsByClassName('trans')[0].classList.remove('t_active');
        document.getElementsByClassName('f')[0].classList.remove('font_family_active');
    }else{
        document.getElementsByClassName('db')[0].classList.remove('popup');
        document.getElementsByClassName('db')[0].classList.add('popdown');
        flag=true;
    }

    present_class="font_size";

})

// TRANSLATOR

document.getElementsByClassName('translator')[0].addEventListener('click',function(){
    
    if(counter===0){
        present_class="translator";
        counter=1;
    }

    document.getElementsByClassName('db')[0].classList.remove('zero')

    if(flag){
        document.getElementsByClassName('db')[0].classList.add('popup');
        document.getElementsByClassName('trans')[0].classList.add('t_active');
        document.getElementsByClassName('w')[0].classList.remove('wallpaper_active');
        document.getElementsByClassName('t')[0].classList.remove('font-size_active');
        document.getElementsByClassName('f')[0].classList.remove('font_family_active');

        document.getElementsByClassName('db')[0].classList.remove('popdown');
        flag=false;
    }else if(present_class !== "translator"){
        document.getElementsByClassName('trans')[0].classList.add('t_active');
        document.getElementsByClassName('w')[0].classList.remove('wallpaper_active');
        document.getElementsByClassName('t')[0].classList.remove('font-size_active');
        document.getElementsByClassName('f')[0].classList.remove('font_family_active');
    }else{
        document.getElementsByClassName('db')[0].classList.remove('popup');
        document.getElementsByClassName('db')[0].classList.add('popdown');
        flag=true;
    }

    present_class="translator";

})

// RESET 

document.getElementsByClassName("reset")[0].addEventListener('click',function(){
    //    We will make some changes here 
    
    
    alert("changes made");
        
        
})




