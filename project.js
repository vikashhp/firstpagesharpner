

let form=document.getElementById('addform');
let userdatils=document.getElementById('users');

let li

form.addEventListener('submit',adddata);

let arr=JSON.parse(localStorage.getItem('data'))||[]

function adddata(e){
    e.preventDefault()
    let expence=document.getElementById('name').value;
    let description=document.getElementById('description').value;
     li=document.createElement('li')
    
    let obj={
        expence,description
    }
    // console.log(obj)

    let deletebtn=document.createElement('button');
    deletebtn.innerText='Delete';
    deletebtn.className='delete'
    deletebtn.addEventListener('click',deleteitem)



    let editbtn=document.createElement('button');
        editbtn.innerText='Edit';
        editbtn.className='btn btn-danger btn-sm-float-right edit';
        editbtn.addEventListener('click',edit)


   li.appendChild(document.createTextNode(expence));
   li.appendChild(document.createTextNode(description));
   li.append(deletebtn);
   li.append(editbtn)

   userdatils.appendChild(li)
    arr.push(obj)

    localStorage.setItem('data',JSON.stringify(arr))
    

}

function deleteitem(e){
    if(e.target.classList.contains('delete')){
        li.remove()
        localStorage.removeItem('data')
    };

}

function edit(e)
{
   if(e.target.classList.contains('edit')){
    let li=e.target.parentElement;
    li.remove()
    
   }
}