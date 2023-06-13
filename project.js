

let form=document.getElementById('addform');
let userdatils=document.getElementById('users');

let li

form.addEventListener('submit',adddata);

let arr=JSON.parse(localStorage.getItem('data'))||[]

function adddata(e){
    e.preventDefault()
    let expence=document.getElementById('name').value;
    let description=document.getElementById('description').value;
    let select=document.querySelector('#dept').value;


    let obj={
                expence,description,select
            }

        arr.push(obj)

        localStorage.setItem('data',JSON.stringify(arr))
            

    
    let td1=document.createElement('td');
    td1.innerText=expence;

    let td2=document.createElement('td');
    td2.innerText=description;

    let td3=document.createElement('td');
    td3.innerText=select;

    //DELETE BUTTON
    let deletebtn=document.createElement('button');
    deletebtn.innerText='Delete';
    deletebtn.className='delete'
    deletebtn.style.backgroundColor='red';
    deletebtn.style.color='white';
    deletebtn.addEventListener('click',deleteitem)


    //EDIT BUTTON
    
    // let editbtn=document.createElement('button');
    //     editbtn.innerText='Edit';
    //     editbtn.className='edit';
    //     editbtn.style.backgroundColor='blue';
    //     editbtn.style.color='white';
    //     editbtn.addEventListener('click',edititem)
        


    let row=document.createElement('tr');
    row.append(td1,td2,td3,deletebtn)

    document.querySelector('tbody').append(row)
    

}

function deleteitem(e){

    e.target.parentNode.remove()

}

// function edititem(e){
 

//     document.getElementById('name').innerHTML=document.getElementById('name').value;
//     document.getElementById('description').innerHTML=document.getElementById('description').value;
//     document.querySelector('#dept').innerHTML=document.getElementById('#dept').value;
  

    



// }



