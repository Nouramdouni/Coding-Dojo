function clike()
{
    alert("Lading weather report...........")
} 
function teperatur() {
    var arr=["t1","t2","t3","t4","t5","t6","t7","t8"]
    for(var i=0;i<=arr.length;i++){
        changetofahrenheit(arr[i])
    }
}
function changetofahrenheit(id){
    var nb=document.getElementById(id);
    nb.innerHTML=Math.floor((nb.innerText)*9/5+32);
    
}
function delte(element)
{ 
    a=document.querySelector(element)
    a.remove();
}