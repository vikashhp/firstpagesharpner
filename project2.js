

let btn=document.querySelector('.form')

btn.addEventListener('submit',storedata);






window.addEventListener('DOMContentLoaded',()=>{


    axios.get('https://crudcrud.com/api/616614b18e074d27a5b3ac03ffaba248/sellerdata')
    .then((res)=>{
         
        for(let i=0;i<res.data.length;i++){
            showinscreen(res.data[i])
        }
       
       
 let sum=res.data.reduce(function(acc,el){
    return acc+Number(el.price)
   },0)


  document.getElementById('total').innerHTML=`Total price is ${sum}`

        
        
     
       


       
    })
    .catch((err)=>{
        console.log(err)
    })







})







function storedata(e){
    e.preventDefault();



   
    
    let price=document.getElementById('price').value;
    let proname=document.getElementById('proname').value;

     let obj={
        price,proname
     }
   

     axios.post('https://crudcrud.com/api/616614b18e074d27a5b3ac03ffaba248/sellerdata',obj)
     .then((res)=>{
        console.log(res.data)
        showinscreen(res.data)
     })
     .catch((err)=>{
        console.log(err)
     })

    
       






}



function showinscreen(data){
     
    const parent=document.getElementById('display');
    const child=`<li id=${data._id}>Price is Rs.${data.price} and  ProductName is ${data.proname}
                 <button onclick=deletedata('${data._id}')>Delete</button>
    
    </li>`

    parent.innerHTML=parent.innerHTML+child




}

function deletedata(dataId){

    axios.delete(`https://crudcrud.com/api/616614b18e074d27a5b3ac03ffaba248/sellerdata/${dataId}`)
    .then(()=>{
        removeproduct(dataId)
    })
    .catch((err)=>{
        console.log(err)
    })

}

function removeproduct(dataId){

    const main_div=document.getElementById('display');
    const child=document.getElementById(dataId)

    if(child){
        main_div.removeChild(child)
    }

    
       

}



