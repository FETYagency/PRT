const email = document.querySelector("[type='email']");
console.log(email);

const infos = document.querySelector("form")
const btn = document.querySelector(".Submit")

const userName = document.querySelector("[type='text']");


infos.addEventListener('submit', (e)=>{

    let validEmail = false;
    let validName = false;

    if(email.value.indexOf("@gmail.com") !== -1 && userName.value.length >= 2){
        validEmail = true;
        validName= true;
    }

    if(validEmail=== false || validName === false){
        e.preventDefault()
        console.log("form's not submmited")
        btn.style.color='red';
        btn.style.borderColor = 'red';
    }else{
        console.log("form's submmited")
    }
})



email.addEventListener("keydown", ()=>{
    if(email.value.indexOf("@gmail.co")=== -1){
        document.querySelector(".for__error").style.borderColor="red"
        document.querySelector(".error__mark").style.display="inline-block"
    }else{
        document.querySelector(".for__error").style.borderColor="green"
        document.querySelector(".error__mark").style.display="none"
    }
})

userName.addEventListener('keydown', ()=>{
    if(userName.value.length >= 2 ){
        userName.style.borderColor= 'green';
    }else{
        userName.style.borderColor= 'red';
    }
})




