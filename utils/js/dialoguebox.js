var close=document.getElementById("close");
var chrome=document.getElementsByClassName("chrome");
var notepad=document.getElementsByClassName("notepad");
var project=document.getElementsByClassName("project");
var expand=document.getElementById("expand");
var shrink=document.getElementById("shrink");
var minimise=document.getElementById("minimise");
var icon_start=document.getElementById("icon_start");
let tasskbarcolor;
let flag=true;

const chromelink="https://searchencrypt.com/";
const notepadlink="./frames/notepad.html";
const projectlink="./frames/projects.html";


let presentlink,presenticon;

// ***********************Usable Functions**************************************

// var openbox= function() {
//     document.getElementById("d-box").classList.remove('go_up')
//     document.getElementById("top").classList.remove('go_up')
//     document.getElementById("close").classList.remove('go_up')
//     document.getElementById("expand").classList.remove('go_up')
//     document.getElementById("shrink").classList.remove('go_up')
//     document.getElementById("minimise").classList.remove('go_up')
//     document.getElementById("iframe").classList.remove('go_up')


//     document.getElementById("d-box").classList.remove('go_down')
//     document.getElementById("top").classList.remove('go_down')
//     document.getElementById("close").classList.remove('go_down')
//     document.getElementById("expand").classList.remove('go_down')
//     document.getElementById("shrink").classList.remove('go_down')
//     document.getElementById("minimise").classList.remove('go_down')
//     document.getElementById("iframe").classList.remove('go_down')


//     document.getElementById("d-box").classList.remove('active-large')
//     document.getElementById("top").classList.remove('active-large')
//     document.getElementById("iframe").classList.remove('active-large')

//     document.getElementById("d-box").classList.add('active-small');
//     document.getElementById("top").classList.add('active-small');
//     document.getElementById("iframe").classList.add('active-small');
    
//     document.getElementById("icon_start").style.backgroundColor="rgba(97, 87, 87, 0.637)";
    
//     document.getElementById("iframe").src=chromelink;
    
//     document.getElementById("icon_start").style.visibility="visible";
//     document.getElementById("expand").style.visibility="visible";
//     document.getElementById("shrink").style.visibility="hidden";

//     document.getElementById("icon_start").style.borderBottom="4px solid rgb(196, 74, 74)";


//     presentlink=chromelink;
    
// };
// *************************************desktop icons*******************************************************

project[0].addEventListener('dblclick',function(){
    flag=true;
    document.getElementById("d-box").classList.remove('go_up')
    document.getElementById("top").classList.remove('go_up')
    document.getElementById("close").classList.remove('go_up')
    document.getElementById("expand").classList.remove('go_up')
    document.getElementById("shrink").classList.remove('go_up')
    document.getElementById("minimise").classList.remove('go_up')
    document.getElementById("iframe").classList.remove('go_up')


    document.getElementById("d-box").classList.remove('go_down')
    document.getElementById("top").classList.remove('go_down')
    document.getElementById("close").classList.remove('go_down')
    document.getElementById("expand").classList.remove('go_down')
    document.getElementById("shrink").classList.remove('go_down')
    document.getElementById("minimise").classList.remove('go_down')
    document.getElementById("iframe").classList.remove('go_down')


    document.getElementById("d-box").classList.remove('active-large')
    document.getElementById("top").classList.remove('active-large')
    document.getElementById("iframe").classList.remove('active-large')

    document.getElementById("d-box").classList.add('active-small');
    document.getElementById("top").classList.add('active-small');
    document.getElementById("iframe").classList.add('active-small');
    
    document.getElementById("icon_start").style.backgroundColor="rgba(97, 87, 87, 0.637)";
    tasskbarcolor=true;
    
    
    document.getElementById("icon_start").style.visibility="visible";
    document.getElementById("expand").style.visibility="visible";
    document.getElementById("shrink").style.visibility="hidden";
    
    document.getElementById("icon_start").style.borderBottom="4px solid rgb(196, 74, 74)";
    
    document.getElementById("iframe").src="./frames/projects.html";
    document.getElementById("give_icon").src="https://img.icons8.com/fluent/22/000000/group-of-projects.png";

    presenticon="https://img.icons8.com/fluent/22/000000/group-of-projects.png";
    presentlink=notepadlink;

})

notepad[0].addEventListener('dblclick',function(){
    flag=true;
    document.getElementById("d-box").classList.remove('go_up')
    document.getElementById("top").classList.remove('go_up')
    document.getElementById("close").classList.remove('go_up')
    document.getElementById("expand").classList.remove('go_up')
    document.getElementById("shrink").classList.remove('go_up')
    document.getElementById("minimise").classList.remove('go_up')
    document.getElementById("iframe").classList.remove('go_up')


    document.getElementById("d-box").classList.remove('go_down')
    document.getElementById("top").classList.remove('go_down')
    document.getElementById("close").classList.remove('go_down')
    document.getElementById("expand").classList.remove('go_down')
    document.getElementById("shrink").classList.remove('go_down')
    document.getElementById("minimise").classList.remove('go_down')
    document.getElementById("iframe").classList.remove('go_down')


    document.getElementById("d-box").classList.remove('active-large')
    document.getElementById("top").classList.remove('active-large')
    document.getElementById("iframe").classList.remove('active-large')

    document.getElementById("d-box").classList.add('active-small');
    document.getElementById("top").classList.add('active-small');
    document.getElementById("iframe").classList.add('active-small');
    
    document.getElementById("icon_start").style.backgroundColor="rgba(97, 87, 87, 0.637)";
    tasskbarcolor=true;
    
    
    document.getElementById("icon_start").style.visibility="visible";
    document.getElementById("expand").style.visibility="visible";
    document.getElementById("shrink").style.visibility="hidden";
    
    document.getElementById("icon_start").style.borderBottom="4px solid rgb(196, 74, 74)";
    
    document.getElementById("iframe").src="./frames/notepad.html";
    document.getElementById("give_icon").src="https://img.icons8.com/cute-clipart/22/000000/copybook.png";

    presenticon="https://img.icons8.com/cute-clipart/22/000000/copybook.png";
    presentlink=notepadlink;
})


chrome[0].addEventListener('dblclick',function(){
    flag=true;
    document.getElementById("d-box").classList.remove('go_up')
    document.getElementById("top").classList.remove('go_up')
    document.getElementById("close").classList.remove('go_up')
    document.getElementById("expand").classList.remove('go_up')
    document.getElementById("shrink").classList.remove('go_up')
    document.getElementById("minimise").classList.remove('go_up')
    document.getElementById("iframe").classList.remove('go_up')


    document.getElementById("d-box").classList.remove('go_down')
    document.getElementById("top").classList.remove('go_down')
    document.getElementById("close").classList.remove('go_down')
    document.getElementById("expand").classList.remove('go_down')
    document.getElementById("shrink").classList.remove('go_down')
    document.getElementById("minimise").classList.remove('go_down')
    document.getElementById("iframe").classList.remove('go_down')


    document.getElementById("d-box").classList.remove('active-large')
    document.getElementById("top").classList.remove('active-large')
    document.getElementById("iframe").classList.remove('active-large')

    document.getElementById("d-box").classList.add('active-small');
    document.getElementById("top").classList.add('active-small');
    document.getElementById("iframe").classList.add('active-small');
    
    document.getElementById("icon_start").style.backgroundColor="rgba(97, 87, 87, 0.637)";
    tasskbarcolor=true;
    
    
    document.getElementById("icon_start").style.visibility="visible";
    document.getElementById("expand").style.visibility="visible";
    document.getElementById("shrink").style.visibility="hidden";
    
    document.getElementById("icon_start").style.borderBottom="4px solid rgb(196, 74, 74)";
    
    document.getElementById("iframe").src=chromelink;
    document.getElementById("give_icon").src="https://img.icons8.com/doodle/22/000000/chrome.png";

    presenticon="https://img.icons8.com/doodle/22/000000/chrome.png";
    presentlink=chromelink;
})

// *********************************controlling the dialogue box***********************************************
close.addEventListener('click',function(){

    flag=true;

    document.getElementById("iframe").classList.remove('go_down')
    document.getElementById("d-box").classList.remove('go_down')
    document.getElementById("top").classList.remove('go_down')
    document.getElementById("close").classList.remove('go_down')
    document.getElementById("expand").classList.remove('go_down')
    document.getElementById("shrink").classList.remove('go_down')
    document.getElementById("minimise").classList.remove('go_down')

    document.getElementById("iframe").classList.remove('go_up')
    document.getElementById("d-box").classList.remove('go_up')
    document.getElementById("top").classList.remove('go_up')
    document.getElementById("close").classList.remove('go_up')
    document.getElementById("expand").classList.remove('go_up')
    document.getElementById("shrink").classList.remove('go_up')
    document.getElementById("minimise").classList.remove('go_up')

    document.getElementById("d-box").classList.remove('active-small')
    document.getElementById("top").classList.remove('active-small')
    document.getElementById("iframe").classList.remove('active-small')
    document.getElementById("d-box").classList.remove('active-large')
    document.getElementById("top").classList.remove('active-large')
    document.getElementById("iframe").classList.remove('active-large')

    document.getElementById("icon_start").style.backgroundColor="rgb(36, 33, 33)";
    document.getElementById("icon_start").style.border="0px solid rgb(36, 33, 33)";

    document.getElementById("icon_start").style.visibility="hidden";
    document.getElementById("expand").style.visibility="visible";
    document.getElementById("shrink").style.visibility="hidden";

    presentlink=null;
})

expand.addEventListener('click',function(){
    flag=true;

    document.getElementById("iframe").classList.remove('go_down')
    document.getElementById("d-box").classList.remove('go_down')
    document.getElementById("top").classList.remove('go_down')
    document.getElementById("close").classList.remove('go_down')
    document.getElementById("expand").classList.remove('go_down')
    document.getElementById("shrink").classList.remove('go_down')
    document.getElementById("minimise").classList.remove('go_down')
    
    document.getElementById("d-box").classList.remove('go_up')
    document.getElementById("top").classList.remove('go_up')
    document.getElementById("close").classList.remove('go_up')
    document.getElementById("expand").classList.remove('go_up')
    document.getElementById("shrink").classList.remove('go_up')
    document.getElementById("minimise").classList.remove('go_up')
    document.getElementById("iframe").classList.remove('go_up')

    

    document.getElementById("d-box").classList.add('active-large')
    document.getElementById("top").classList.add('active-large')
    document.getElementById("iframe").classList.add('active-large')
    document.getElementById("d-box").classList.remove('active-small')
    document.getElementById("top").classList.remove('active-small')
    document.getElementById("iframe").classList.remove('active-small')
    document.getElementById("expand").style.visibility="hidden";
    document.getElementById("shrink").style.visibility="visible";
    // document.getElementById("iframe").src=presentlink;
})

shrink.addEventListener('click',function(){

    document.getElementById("iframe").classList.remove('go_down')
    document.getElementById("d-box").classList.remove('go_down')
    document.getElementById("top").classList.remove('go_down')
    document.getElementById("close").classList.remove('go_down')
    document.getElementById("expand").classList.remove('go_down')
    document.getElementById("shrink").classList.remove('go_down')
    document.getElementById("minimise").classList.remove('go_down')

    document.getElementById("d-box").classList.remove('go_up')
    document.getElementById("top").classList.remove('go_up')
    document.getElementById("close").classList.remove('go_up')
    document.getElementById("expand").classList.remove('go_up')
    document.getElementById("shrink").classList.remove('go_up')
    document.getElementById("minimise").classList.remove('go_up')
    document.getElementById("iframe").classList.remove('go_up')

    document.getElementById("expand").style.visibility="visible";
    document.getElementById("shrink").style.visibility="hidden";
    document.getElementById("d-box").classList.add('active-small')
    document.getElementById("top").classList.add('active-small')
    document.getElementById("iframe").classList.add('active-small')
    document.getElementById("d-box").classList.remove('active-large')
    document.getElementById("top").classList.remove('active-large')
    document.getElementById("iframe").classList.remove('active-large')
    // document.getElementById("iframe").src=presentlink;
})

minimise.addEventListener('click',function(){

    flag=false;

    document.getElementById("iframe").classList.remove('go_up')
    document.getElementById("d-box").classList.remove('go_up')
    document.getElementById("top").classList.remove('go_up')
    document.getElementById("close").classList.remove('go_up')
    document.getElementById("expand").classList.remove('go_up')
    document.getElementById("shrink").classList.remove('go_up')
    document.getElementById("minimise").classList.remove('go_up')
    document.getElementById("iframe").classList.add('go_down')
    document.getElementById("d-box").classList.add('go_down')
    document.getElementById("top").classList.add('go_down')
    document.getElementById("close").classList.add('go_down')
    document.getElementById("expand").classList.add('go_down')
    document.getElementById("shrink").classList.add('go_down')
    document.getElementById("minimise").classList.add('go_down')

    // document.getElementById("icon_start").style.backgroundColor="rgb(36, 33, 33)";
    if(tasskbarcolor){
        document.getElementById("icon_start").style.backgroundColor="rgb(36, 33, 33)";
    }else{
        document.getElementById("icon_start").style.backgroundColor="rgba(97, 87, 87, 0.637)";
    }

    
    tasskbarcolor=!tasskbarcolor;

})

icon_start.addEventListener('click',function(){
    document.getElementById("icon_start").style.borderBottom="4px solid rgb(196, 74, 74)";


    document.getElementById("expand").style.visibility="visible";
    document.getElementById("shrink").style.visibility="hidden";

    // if(document.getElementsByClassName('go_down')!==null && document.getElementsByClassName('active-large')!==null){
    // document.getElementById("d-box").classList.remove('active-large')
    // document.getElementById("top").classList.remove('active-large')
    // document.getElementById("iframe").classList.remove('active-large')  
    // document.getElementById("d-box").classList.add('active-small')
    // document.getElementById("top").classList.add('active-small')
    // document.getElementById("iframe").classList.add('active-small')
    // alert('in 1')
    // }else if(document.getElementsByClassName('active-large')!==null){
    //     alert('in2')
    // }else{
    //     document.getElementById("d-box").classList.remove('active-large')
    //     document.getElementById("top").classList.remove('active-large')
    //     document.getElementById("iframe").classList.remove('active-large')
    //     document.getElementById("d-box").classList.add('active-small')
    //     document.getElementById("top").classList.add('active-small')
    //     document.getElementById("iframe").classList.add('active-small')
    //     alert('in3')

    // }


    document.getElementById("d-box").classList.remove('active-large')
    document.getElementById("top").classList.remove('active-large')
    document.getElementById("iframe").classList.remove('active-large')
    document.getElementById("d-box").classList.add('active-small')
    document.getElementById("top").classList.add('active-small')
    document.getElementById("iframe").classList.add('active-small')

    // document.getElementById("iframe").classList.remove('active-small')

        if(flag){
            document.getElementById("d-box").classList.toggle('go_down')
            document.getElementById("top").classList.toggle('go_down')
            document.getElementById("close").classList.toggle('go_down')
            document.getElementById("expand").classList.toggle('go_down')
            document.getElementById("shrink").classList.toggle('go_down')
            document.getElementById("minimise").classList.toggle('go_down')
            document.getElementById("iframe").classList.toggle('go_down')
        }
        else{
            document.getElementById("d-box").classList.toggle('go_up')
            document.getElementById("top").classList.toggle('go_up')
            document.getElementById("close").classList.toggle('go_up')
            document.getElementById("expand").classList.toggle('go_up')
            document.getElementById("shrink").classList.toggle('go_up')
            document.getElementById("minimise").classList.toggle('go_up')
            document.getElementById("iframe").classList.toggle('go_up')

            document.getElementById("d-box").classList.toggle('go_down')
            document.getElementById("top").classList.toggle('go_down')
            document.getElementById("close").classList.toggle('go_down')
            document.getElementById("expand").classList.toggle('go_down')
            document.getElementById("shrink").classList.toggle('go_down')
            document.getElementById("minimise").classList.toggle('go_down')
            document.getElementById("iframe").classList.toggle('go_down')
        }

        if(tasskbarcolor){
            document.getElementById("icon_start").style.backgroundColor="rgb(36, 33, 33)";
        }else{
            document.getElementById("icon_start").style.backgroundColor="rgba(97, 87, 87, 0.637)";
        }


        tasskbarcolor=!tasskbarcolor;
        flag=false;


    // document.getElementById("iframe").classList.add('active-small')s

})