
var text=document.getElementById("note");

text.value=localStorage.getItem("text");

function copy(){
    text.select();
    document.execCommand("copy")
    navigator.clipboard.readText()
    .then(data=>{
        localStorage.setItem("text",data);
    })
}


function new_note(){
    localStorage.setItem("text","");
    text.value=localStorage.getItem("text");

}


