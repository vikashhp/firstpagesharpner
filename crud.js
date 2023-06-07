
let btn=document.querySelector('.form')

btn.addEventListener('submit',storedata)
// let arr=JSON.parse(localStorage.getItem('data'))||[]


window.addEventListener('DOMContentLoaded',()=>{

    axios.get("https://crudcrud.com/api/fbcd9888cf7041f8a56cfa8914db62ca/studentdata")
    .then((res)=>{
        console.log(res.data)
        for(let i=0;i<res.data.length;i++){
            showinscreen(res.data[i])
        }
        
    })
    .catch((err)=>{
        console.log(err)
    })


})




function storedata(e)
{
    e.preventDefault();
    // let return_data=JSON.parse(localStorage.getItem('data')||[]);
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('number').value;

    // let deletebtn=document.createElement('button');
    // deletebtn.innerText="Delete"
   
    
    
    let obj={
        name,email,phone
    }
    // arr.push(obj)
     
    // localStorage.setItem('data',JSON.stringify(arr))

    axios.post("https://crudcrud.com/api/fbcd9888cf7041f8a56cfa8914db62ca/studentdata",obj)
    .then((res)=>{
        console.log(res)
        showinscreen(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })

}

let deletebtn


function showinscreen(data){

    //   document.getElementById('email').value='';
    //   document.getElementById('name').value='';
    //   document.getElementById('phone').value='';
     
      const parent=document.getElementById('display')
      const childhtml=`<li id=${data._id}>${data.name}-${data.email}-${data.phone}
                       <button onclick=deleteUser('${data._id}')>Delete</button>
                       <button onclick=EditUser('${data.name}','${data.email}','${data.phone}','${data._id}')>Edit</button>
      </li>`

      parent.innerHTML=parent.innerHTML+childhtml;


}



function deleteUser(userId){
    // console.log(userId)

axios.delete(`https://crudcrud.com/api/fbcd9888cf7041f8a56cfa8914db62ca/studentdata/${userId}`)
//   console.log(user)
.then((res)=>{
    removeuserfromscreen(userId)
    console.log(userId)
    // console.log(res)
})
.catch((err)=>{
    console.log(err)
})

// console.log(userId)
// console.log('chunnu')
}

function removeuserfromscreen(userId){
   const main_div=document.getElementById('display')
    const child=document.getElementById(userId);
    if(child){
        main_div.removeChild(child)
    }

}

function EditUser(name,email,phone,userId){
    document.getElementById('name').value=name;
    document.getElementById('email').value=email;
    document.getElementById('number').value=phone;

    deleteUser(userId)
}


