
// console.log('chunnu');
let songindex=0;
let audioelement=new Audio('songs/1.mp3');
let play=document.getElementById('masterplay');
let gif=document.getElementById('gif');
let myProgressBar=document.getElementById('myProgressBar');
let songItems=Array.from(document.getElementsByClassName('songitem'));
let mastersongname=document.getElementById('songname')




let songs=[
    {songName:'Naiyo Lagda dil...',filePath:'songs/1.mp3',coverPath:'cover/1.jpg'},
    {songName:'Har Har Shambhu...',filePath:'songs/2.mp3',coverPath:'cover/2.jpg'},
    {songName:'Kya loge tum...',filePath:'songs/3.mp3',coverPath:'cover/3.jpg'},
    {songName:'Ziya le muskil...',filePath:'songs/4.mp3',coverPath:'cover/4.jpg'},
    {songName:'Ram siya ram....',filePath:'songs/5.mp3',coverPath:'cover/5.jpg'},
    {songName:'Tere vaste...',filePath:'songs/6.mp3',coverPath:'cover/6.jpg'},
    {songName:'Mile le kanhari...',filePath:'songs/7.mp3',coverPath:'cover/7.jpg'},
    {songName:'Kora bazzar...',filePath:'songs/8.mp3',coverPath:'cover/8.jpg'},

]

songItems.forEach((ele,i)=>{
  ele.getElementsByTagName('img')[0].src=songs[i].coverPath;
  ele.getElementsByClassName('songsname')[0].innerText=songs[i].songName;
})


play.addEventListener('click',()=>{
 if(audioelement.paused || audioelement.currentTime<=0){
      audioelement.play();
      gif.style.opacity=1;
      play.classList.remove('fa-play-circle');
      play.classList.add('fa-pause-circle')
 }else{
    audioelement.pause();
    play.classList.remove('fa-pause-circle');
    play.classList.add('fa-play-circle');
    gif.style.opacity=0;
 }

});

audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myProgressBar.value=progress
    
})

myProgressBar.addEventListener('change',()=>{
    audioelement.currentTime=myProgressBar.value*audioelement.duration/100;
});


const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
      
    })
}

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
    makeallplay();
    songindex=parseInt(e.target.id);
     e.target.classList.remove('fa-play-circle');
     e.target.classList.add('fa-pause-circle');
     mastersongname.innerText=songs[songindex].songName;
     
     audioelement.src=(`songs/${songindex+1}.mp3`);
     audioelement.play();
     gif.style.opacity=1;
     audioelement.currentTime=0;
     play.classList.remove('fa-play-circle');
     play.classList.add('fa-pause-circle')


   })
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }else{
        songindex-=1;
    }

    audioelement.src=(`songs/${songindex+1}.mp3`);
    mastersongname.innerText=songs[songindex].songName;
    audioelement.play();
    audioelement.currentTime=0;
    gif.style.opacity=1;
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle')
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=8){
        songindex=0;
    }else{
        songindex+=1;
    }

    audioelement.src=(`songs/${songindex+1}.mp3`);
    mastersongname.innerText=songs[songindex].songName;
    audioelement.play();
    audioelement.currentTime=0;
    gif.style.opacity=1;
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle')
})