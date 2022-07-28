// let VIDEO=null;
// let CANVAS=null;
// let CONTEXT=null;

// function main(){
//     CANVAS=document.getElementById("mycanvas");
//     CONTEXT=CANVAS.getContext("2d");
//     CANVAS.width=window.innerWidth;
//     CANVAS.height=window.innerHeight;
//     let promise = navigator.mediaDevices.getUserMedia({video:true});
//     promise.then(function(sinnal){
//         VIDEO=document.createElement("video");
//         VIDEO.srcObject=sinnal;
//         VIDEO.play();

//         VIDEO.onloadeddata=function(){
//             updatecanvas();
//         }

//     }).catch(function(err){
//         alert("camera error: "+err);
//     });
// }

// function updatecanvas(){
//     CONTEXT.drawImage(VIDEO,0,0);
//     window.requestAnimationFrame(updatecanvas);
// }

let canvas =document.getElementById("canvas");
let context = canvas.getContext("2d");
let video = document.getElementById("video");

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({ video: true}).then((stream)=>{
        video.srcObject = stream;
        video.play();
    })
}
document.getElementById("snap").addEventListener('click', ()=>{
    context.drawImage(video,0,0,640,480);
})