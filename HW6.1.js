var mih = document.getElementsByClassName('navbar');
var count = 0;
function move(){
    for(i = 0; i < mih.length; i++){
        if(count%2 == 0 ){
            mih[i].style.left = "0px";
            mih[i].style.top = "calc(50% - 150px)";
        }else{
            mih[i].style.left = "-170px";
            mih[i].style.top = "0px";
        }  
        count++;      ``
    }
}

