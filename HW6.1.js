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

var nameSur = document.getElementsByClassName('f1');
var age = document.getElementsByClassName('f2');
var spec = document.getElementsByClassName('f3');

var butSel = document.getElementsByClassName('subbut');




function check(){
    var arr = [];
    
    for(i=0; i < nameSur.length; i++){
        // alert(nameSur[i].value);
        if(/[0-9]/g.test(nameSur[i].value)){
            // alert(/[0-9]/g.test(nameSur[i].value));
            arr.push(1);
            // alert(arr[0]);
        }else{
            // alert('нет цифр');
            arr.push(0);
        }
    }

    //блэт запилил только для русских символов
    for(i=0; i< age.length; i++){
        if(/[а-яА-ЯЁё-і]/g.test(age[i].value)){
            // alert(/[а-яА-ЯЁё-і]/g.test(age[i].value));
            arr.push(1);
            // alert('3. есть буквы');
            // alert(arr[0]);
        }else{
            // alert('3. нет букв');
            arr.push(0);
        }
    }

    for(i=0; i < spec.length; i++){
        // alert(nameSur[i].value);
        if(/[0-9]/g.test(spec[i].value)){
            // alert(/[0-9]/g.test(spec[i].value));
            arr.push(1);
            // alert(arr[0]);
        }else{
            // alert('нет цифр');
            arr.push(0);
        }
    }

    for(i = 0; i < arr.length; i++){
        if(arr[i] == 1){
            for(a=0; a < butSel.length; a++){
                // alert("lol1");
                butSel[a].style.border = "2px solid red";
                butSel[a].disabled = true;
                // alert("lol2");
                break;
            }

        }
    }

}

