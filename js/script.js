document.addEventListener('DOMContentLoaded', ()=> {
    'use strict';
    
    const name=document.getElementById('name'),
          phone=document.getElementById('phone'),
          email=document.getElementById('email'),
          text=document.getElementById('text'),
          submit=document.getElementById('submit'),
          noinput1=document.getElementById('noinput1'),
          noinput2=document.getElementById('noinput2');
          modal=document.getElementById('modal');

    phone.addEventListener('focus', () => {
        noinput1.style.display='none';
        noinput2.style.display='none';
    });

    email.addEventListener('focus', () => {
        noinput1.style.display='none';
        noinput2.style.display='none';
    });

    modal.addEventListener('click', () => {
        modal.style.display='none';
    });
    
    submit.addEventListener('click', () => {
        if (phone.value=='' && email.value=='') {
            noinput1.style.display='block';
            noinput2.style.display='block'; 
        } else {
        const request = new XMLHttpRequest();
        const url = "../send.php";
        const params = "name='" + name.value + "'&phone='" + phone.value + "'&email='" + email.value + "'&text='" + text.value +"'";
        console.log(params);
        request.open("POST", url, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
           
        request.addEventListener("readystatechange", () => {
            if(request.readyState === 4 && request.status === 200) {       
                // let savingResult=(request.responseText);
                // console.log(savingResult);
                modal.style.display='flex';
            }
          });
          request.send(params);
          name.value="";
          phone.value="";
          email.value="";
          text.value="";
           
        };

    });

    
});