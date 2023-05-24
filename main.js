

const l=document.getElementById("hello");
l.style.color="green"

const h2=document.querySelector("#hello2");
h2.style.color="yellow"


let h1=document.querySelector("h1");
h1.style.color="orange"

let container=document.querySelector(".container");
container.style.background="black"

let myform=document.querySelector(".form");

let msg=document.querySelector(".msg");

let name=document.querySelector("#name");

let email=document.querySelector("#email");

let users=document.querySelector("#users")

myform.addEventListener("submit",Onsubmit);

function Onsubmit(e)
{
    e.preventDefault();
    if(name.value === "" || email.value==="")
    {
        msg.classList.add('error')
        msg.innerHTML="Please enter details";

        setTimeout(()=>msg.remove(),3000)
    }else
    {
       let li=document.createElement("li");
       li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));

       users.appendChild(li);

       name.value="";
       email.value="";

    }
   
   }

