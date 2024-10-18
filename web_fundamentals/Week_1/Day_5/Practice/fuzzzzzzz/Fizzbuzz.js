function fizzbuzz() 
{
    for (var i=1; i <= 100; i++) 
        {
        if (i %3==0 && i %5==0) {
            console.log("fizzbuzz")
        }
        if(i %3==0)
        {
            console.log("fuzz")
        }
        if(i % 5==0)
        {
            console.log("buzzz")
        }
            
        else{ 
            console.log(i)
        }
    }
}
fizzbuzz()