

let btn=document.querySelector('.form')

btn.addEventListener('submit',storedata);






window.addEventListener('DOMContentLoaded',async ()=>{


   const res=await axios.get('https://crudcrud.com/api/05bead4bb26c492690a9dd4b47d66f03/sellerdata')

    try{
        console.log(res.data)
        for(let i=0;i<res.data.length;i++){
                 showinscreen(res.data[i])
       }

     let sum=res.data.reduce(function(acc,el){
     return acc+Number(el.price)
    },0)

    
       document.getElementById('total').innerHTML=`Total price is ${sum}`

                   
    }
    catch(err){
        console.log(err)
    }

})







 async function storedata(e){
    e.preventDefault();
    let price=document.getElementById('price').value;
    let proname=document.getElementById('proname').value;

     let obj={
        price,proname
     }
   

    let post1=await axios.post('https://crudcrud.com/api/05bead4bb26c492690a9dd4b47d66f03/sellerdata',obj)
    //  .then((res)=>{
    //     console.log(res.data)
    //     showinscreen(res.data)
    //  })
    try{
        console.log(post1.data)
        showinscreen(post1.data)
    }
    catch(err){
        console.log(err)
    }

    


}



function showinscreen(data){
     
    const parent=document.getElementById('display');
    const child=`<li id=${data._id}>Price is Rs.${data.price} and  ProductName is ${data.proname}
                 <button onclick=deletedata('${data._id}')>Delete</button>
    
    </li>`

    parent.innerHTML=parent.innerHTML+child




}

async function deletedata(dataId){

   await axios.delete(`https://crudcrud.com/api/05bead4bb26c492690a9dd4b47d66f03/sellerdata/${dataId}`)
    // .then(()=>{
    //     removeproduct(dataId)
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })

    try{
        // console.log(post1.data)
        removeproduct(dataId)
    }
    catch(err){
        console.log(err)
    }


}



function removeproduct(dataId){

    const main_div=document.getElementById('display');
    const child=document.getElementById(dataId)

    if(child){
        main_div.removeChild(child)
    }
}



