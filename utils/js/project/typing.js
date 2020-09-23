const texts=["an engineering student","a web developer","a full stack developer","a web enthusiast"];
let count=0; // for iterating over all the texts
let index=0; // for iterating over specific string
let flag=true;
let counter=0;
let currentText='';
let letters='';


(function type(){

    if(count=== texts.length){
        count=0;
    }
    if(flag){
        index++;
    }else{
        index--;
    }

    currentText=texts[count];
    letters=currentText.slice(0,index);

    document.getElementsByClassName("typing")[0].textContent=letters;

    if(index === 0 && flag===false){
        flag=true;
        count++;
    }
    if(letters.length === currentText.length){
        flag=false;
    }
    setTimeout(type,200);

}());