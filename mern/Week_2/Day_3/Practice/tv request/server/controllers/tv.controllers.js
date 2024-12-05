import tvShows from "../modules/tv.modules.js";
const TvCreate={ 
    Redall:(req,res)=>{ 
        res.json(tvShows)
    },
    Yearall:(req,res)=>{  
        const result=tvShows.filter(tvShow=>tvShow.yearCreated==req.params.year)  
        res.json(result)        

    },
    deletetv: (req,res)=>{ 
        const index=tvShows.findIndex(tv=>tv.tvShow==req.params.title) 
        tvShows.splice(index,1) 
        res.json(tvShows)
    } ,
    update:(req,res)=>{  
        tvShows.forEach((tv,i)=>{ 
            if(tv.tvShow==req.params.title)
            { 
                tv.starring=req.body.starring

            } 
 
        }) 
        const tvstarr=tvShows.find(tv=>tv.tvShow==req.params.title) 
        res.json(tvstarr)

    }



}
export default TvCreate