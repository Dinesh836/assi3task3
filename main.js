const text='hiii dinesh here ,best developer';

let ind=0;

function writeText(){
    document.body.innerText=text.slice(0,ind);
    ind++;
    // if(ind>text.length-1){
    //     ind=0;
    // }
}

setInterval(writeText , 100);