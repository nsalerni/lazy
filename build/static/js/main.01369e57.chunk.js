(this.webpackJsonplazy=this.webpackJsonplazy||[]).push([[0],[function(e,t,o){e.exports=o(1)},function(e,t){var o={video:{facingMode:"environment"},audio:!1},n=document.querySelector("#camera--view"),c=document.querySelector("#camera--output"),a=document.querySelector("#camera--sensor");document.querySelector("#camera--trigger").onclick=function(){a.width=n.videoWidth,a.height=n.videoHeight,a.getContext("2d").drawImage(n,0,0),c.src=a.toDataURL("image/webp"),c.classList.add("taken")},window.addEventListener("load",(function(){navigator.mediaDevices.getUserMedia(o).then((function(e){e.getTracks()[0];n.srcObject=e})).catch((function(e){console.error("Oops. Something is broken.",e)}))}),!1)}],[[0,1]]]);
//# sourceMappingURL=main.01369e57.chunk.js.map