var close=document.getElementById("close");
var chrome=document.getElementsByClassName("chrome");
var notepad=document.getElementsByClassName("notepad");
var project=document.getElementsByClassName("project");
var resume=document.getElementsByClassName('resume');
var face_recognition=document.getElementsByClassName('face_recognition');
var settings=document.getElementsByClassName('settings');
var expand=document.getElementById("expand");
var shrink=document.getElementById("shrink");
var minimise=document.getElementById("minimise");
var icon_start=document.getElementById("icon_start");
var password= document.getElementById("password");
let tasskbarcolor;
let flag=true;
var f1=true;


const chromelink="https://searchencrypt.com/";
const notepadlink="./frames/notepad.html";
const projectlink="./frames/projects.html";
const resumelink="./frames/resume.html";
const settingslink="./frames/settings.html";
const facelink="./frames/face.html";


let presentlink,presenticon;

// ***********************Usable Functions**************************************

var openbox= function() {

    if(document.getElementsByClassName("start_menu")[0]!=null){
        document.getElementsByClassName('sm')[0].classList.remove("start_menu");
        document.getElementsByClassName('sm')[0].classList.add("d");
    }
    // document.getElementsByClassName('sm')[0].classList.remove("start_menu");
    // // if(document.getElementsByClassName("start_menu")[0]!=null){
    // //     document.getElementsByClassName('sm')[0].classList.remove("start_menu");
    // //     document.getElementsByClassName('sm')[0].classList.add("d");
    // // }
    
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

    

};
// *************************************desktop icons*******************************************************

settings[0].addEventListener('dblclick',function(){
    openbox();
    document.getElementById("iframe").src="./frames/settings.html";
    document.getElementById("give_icon").src="https://img.icons8.com/fluent/22/000000/settings.png";

    presenticon="https://img.icons8.com/fluent/22/000000/settings.png";
    presentlink=settingslink;

})

face_recognition[0].addEventListener('dblclick',function(){
   openbox();
    
    document.getElementById("iframe").src="./frames/face.html";
    document.getElementById("give_icon").src="https://img.icons8.com/plasticine/22/000000/face-id.png";

    presenticon="https://img.icons8.com/plasticine/22/000000/face-id.png";
    presentlink=facelink;

})

resume[0].addEventListener('dblclick',function(){
    openbox();
    document.getElementById("iframe").src="./frames/resume.html";
    document.getElementById("give_icon").src="https://img.icons8.com/fluent/22/000000/open-resume.png";

    presenticon="https://img.icons8.com/fluent/22/000000/open-resume.png";
    presentlink=resumelink;

})

project[0].addEventListener('dblclick',function(){
    
    openbox();
    document.getElementById("iframe").src="./frames/projects.html";
    document.getElementById("give_icon").src="https://img.icons8.com/fluent/22/000000/group-of-projects.png";

    presenticon="https://img.icons8.com/fluent/22/000000/group-of-projects.png";
    presentlink=projectlink;

})

notepad[0].addEventListener('dblclick',function(){
    openbox();
    
    document.getElementById("iframe").src="./frames/notepad.html";
    document.getElementById("give_icon").src="https://img.icons8.com/cute-clipart/22/000000/copybook.png";

    presenticon="https://img.icons8.com/cute-clipart/22/000000/copybook.png";
    presentlink=notepadlink;
})


chrome[0].addEventListener('dblclick',function(){
   openbox();
    
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


// *************************************start menu *********************************

document.getElementsByClassName("start")[0].addEventListener('click',function(){
    
    if(document.getElementsByClassName("start_menu")[0]==null){
        document.getElementsByClassName('sm')[0].classList.add("start_menu");
        document.getElementsByClassName('sm')[0].classList.remove("d");
        // document.getElementsByClassName("start")[0].style.backgroundColor="rgba(97, 87, 87, 0.637)";
    }else{
        document.getElementsByClassName('sm')[0].classList.remove("start_menu");
        document.getElementsByClassName('sm')[0].classList.add("d");
        // document.getElementsByClassName("start")[0].style.backgroundColor="rgb(36, 33, 33)";
    }
      
})

// *********************************Start Menu Middle***********************************************
document.getElementById("menu_chrome").addEventListener('click',function(){
        
    openbox(); 
    document.getElementById("iframe").src=chromelink;
    document.getElementById("give_icon").src="https://img.icons8.com/doodle/22/000000/chrome.png";
 
    presenticon="https://img.icons8.com/doodle/22/000000/chrome.png";
    presentlink=chromelink;
 })

 document.getElementById("menu_face").addEventListener('click',function(){
    openbox();
     
     document.getElementById("iframe").src="./frames/face.html";
     document.getElementById("give_icon").src="https://img.icons8.com/plasticine/22/000000/face-id.png";
 
     presenticon="https://img.icons8.com/plasticine/22/000000/face-id.png";
     presentlink=facelink;
 
 })

 document.getElementById("menu_project").addEventListener('click',function(){
    openbox();
    document.getElementById("iframe").src="./frames/projects.html";
    document.getElementById("give_icon").src="https://img.icons8.com/fluent/22/000000/group-of-projects.png";

    presenticon="https://img.icons8.com/fluent/22/000000/group-of-projects.png";
    presentlink=projectlink;

})

document.getElementById("menu_notepad").addEventListener('click',function(){
    openbox();
    document.getElementById("iframe").src="./frames/notepad.html";
    document.getElementById("give_icon").src="https://img.icons8.com/cute-clipart/22/000000/copybook.png";

    presenticon="https://img.icons8.com/cute-clipart/22/000000/copybook.png";
    presentlink=notepadlink;
})

document.getElementById("menu_resume").addEventListener('click',function(){
    openbox();
    document.getElementById("iframe").src="./frames/resume.html";
    document.getElementById("give_icon").src="https://img.icons8.com/fluent/22/000000/open-resume.png";

    presenticon="https://img.icons8.com/fluent/22/000000/open-resume.png";
    presentlink=resumelink;

})

document.getElementById("menu_settings").addEventListener('click',function(){
    openbox();
    document.getElementById("iframe").src="./frames/settings.html";
    document.getElementById("give_icon").src="https://img.icons8.com/fluent/22/000000/settings.png";

    presenticon="https://img.icons8.com/fluent/22/000000/settings.png";
    presentlink=settingslink;
})

document.getElementById("menu_game").addEventListener('click',function(){
    openbox();
    document.getElementById("iframe").src="https://manwindersingh1712.github.io/RGB-Game/";
    document.getElementById("give_icon").src="https://img.icons8.com/nolan/22/controller.png";

    presenticon="https://img.icons8.com/nolan/22/controller.png";
    presentlink="https://manwindersingh1712.github.io/RGB-Game/";

})

document.getElementById("menu_todo").addEventListener('click',function(){
    openbox();
    document.getElementById("iframe").src="https://manwindersingh1712.github.io/TO-DO/";
    document.getElementById("give_icon").src="https://img.icons8.com/fluent/22/000000/todo-list.png";

    presenticon="https://img.icons8.com/fluent/22/000000/todo-list.png";
    presentlink="https://manwindersingh1712.github.io/TO-DO/";

})
// *************************************End bar *********************************
document.getElementById("end_project").addEventListener('click',function(){
    openbox();
    document.getElementById("iframe").src="./frames/projects.html";
    document.getElementById("give_icon").src="https://img.icons8.com/fluent/22/000000/group-of-projects.png";

    presenticon="https://img.icons8.com/fluent/22/000000/group-of-projects.png";
    presentlink=projectlink;
})

document.getElementById("end_resume").addEventListener('click',function(){
    openbox();
    document.getElementById("iframe").src="./frames/resume.html";
    document.getElementById("give_icon").src="https://img.icons8.com/fluent/22/000000/open-resume.png";

    presenticon="https://img.icons8.com/fluent/22/000000/open-resume.png";
    presentlink=resumelink;

})

document.getElementById("end_chrome").addEventListener('click',function(){
        
    openbox(); 
    document.getElementById("iframe").src=chromelink;
    document.getElementById("give_icon").src="https://img.icons8.com/doodle/22/000000/chrome.png";
 
    presenticon="https://img.icons8.com/doodle/22/000000/chrome.png";
    presentlink=chromelink;
 })

 document.getElementById("end_face").addEventListener('click',function(){
    openbox();
     
     document.getElementById("iframe").src="./frames/face.html";
     document.getElementById("give_icon").src="https://img.icons8.com/plasticine/22/000000/face-id.png";
 
     presenticon="https://img.icons8.com/plasticine/22/000000/face-id.png";
     presentlink=facelink;
 
 })

 document.getElementById("end_game").addEventListener('click',function(){
    openbox();
    document.getElementById("iframe").src="https://manwindersingh1712.github.io/RGB-Game/";
    document.getElementById("give_icon").src="https://img.icons8.com/nolan/22/controller.png";

    presenticon="https://img.icons8.com/nolan/22/controller.png";
    presentlink="https://manwindersingh1712.github.io/RGB-Game/";

})

document.getElementById("end_notepad").addEventListener('click',function(){
    openbox();
    document.getElementById("iframe").src="./frames/notepad.html";
    document.getElementById("give_icon").src="https://img.icons8.com/cute-clipart/22/000000/copybook.png";

    presenticon="https://img.icons8.com/cute-clipart/22/000000/copybook.png";
    presentlink=notepadlink;
})




document.getElementById("end_todo").addEventListener('click',function(){
    openbox();
    document.getElementById("iframe").src="https://manwindersingh1712.github.io/TO-DO/";
    document.getElementById("give_icon").src="https://img.icons8.com/fluent/22/000000/todo-list.png";

    presenticon="https://img.icons8.com/fluent/22/000000/todo-list.png";
    presentlink="https://manwindersingh1712.github.io/TO-DO/";

})

document.getElementById("end_settings").addEventListener('click',function(){
    openbox();
    document.getElementById("iframe").src="./frames/settings.html";
    document.getElementById("give_icon").src="https://img.icons8.com/fluent/22/000000/settings.png";

    presenticon="https://img.icons8.com/fluent/22/000000/settings.png";
    presentlink=settingslink;
})

// *************************************side bar *********************************

document.getElementById("side_settings").addEventListener('click',function(){
    openbox();
    document.getElementById("iframe").src="./frames/settings.html";
    document.getElementById("give_icon").src="https://img.icons8.com/fluent/22/000000/settings.png";

    presenticon="https://img.icons8.com/fluent/22/000000/settings.png";
    presentlink=settingslink;
})

document.getElementById("side_power").addEventListener('click',function(){
    document.getElementById("blur").classList.remove("wall_up");
    document.getElementsByClassName("power")[0].classList.remove("wall_up");

    document.getElementById("blur").classList.add("wall_down");
    document.getElementsByClassName("power")[0].classList.add("wall_down");
    f1=true;
    password.value="";
    messages=[];
    document.getElementById("blank").style.zIndex=7;
    

    if(document.getElementsByClassName("start_menu")[0]!=null){
        document.getElementsByClassName('sm')[0].classList.remove("start_menu");
        document.getElementsByClassName('sm')[0].classList.add("d");
    }
    
})



// *************************************Background *********************************

document.getElementById("background").addEventListener('click',function(){
    if(document.getElementsByClassName("start_menu")[0]!=null){
        document.getElementsByClassName('sm')[0].classList.remove("start_menu");
        document.getElementsByClassName('sm')[0].classList.add("d");
    }
    
})


// *************************************Login Page*************************************

document.getElementById("password").addEventListener('click',function(){
    document.getElementById("blur").style.filter = "blur(3px)";
})




if(f1){
    localStorage.setItem("login",false);
}


document.getElementById("btn").addEventListener('click',function(e){
    let messages=[];
    f1=false;
    if(password.value == "1234"){
        localStorage.setItem("login",true);
        document.getElementById("blur").classList.add("wall_up");
        document.getElementsByClassName("power")[0].classList.add("wall_up");
        document.getElementById("blur").classList.remove("wall_down");
        document.getElementsByClassName("power")[0].classList.remove("wall_down");
        messages.pop();
        document.getElementById("error").innerText=messages.join(" , ")
        document.getElementById("blank").style.zIndex=0;
    }else{
        password.value="";
        messages.push("Password did'nt match!!");
    }

    if(messages.length>0){
        document.getElementById("error").innerText=messages.join(" , ");
    }
   
})


