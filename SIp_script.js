function fPrincipala(){alert("hello1");}
window.onload=fPrincipala;
window.onload=function()
{//alert("hello2");
var obImagine = document.getElementById("i");
//alert(obImagine.src);
obImagine.src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Elijah_Wood_%2847955399861%29_%28cropped%29.jpg/220px-Elijah_Wood_%2847955399861%29_%28cropped%29.jpg'
obImagine.onclick = function()
{alert("hello3") ;
obImagine.style.width = "30%"
var s1="abc";
var s2=s1;
   s1="xyz";
   alert(s2);
}
//obImagine.onclick = f1;
}
function f1(){alert(obImagine);}