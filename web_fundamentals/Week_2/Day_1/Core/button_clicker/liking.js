function likes()
{
    alert("ninja was liked")   
}
function login(element){  
        if(element.innerHTML=="login" )
        {
            element.innerHTML="Logout" 

        }
        else{ 
            element.innerHTML="login"
        }
} 
function finition(element) 
{
    element.remove()
}