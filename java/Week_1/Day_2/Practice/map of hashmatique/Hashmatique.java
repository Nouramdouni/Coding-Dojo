
import java.util.HashMap;

public  class  Hashmatique{ 
    public  static   void main(String [] args) 
    { 
        HashMap<String,String> map=new HashMap<String,String>(); 
        map.put("new west"," Those Eyes ...") ; 
        map.put("tom rosenthal"," home... ") ;
        map.put ("mitski "," where s my love (acoustic).... ") ; 
        System.out.println(map.get("new west"));
        for( String key :map.keySet()){
            System.err.println(String.format("name %s \n lyrice :%s" ,key ,map.get(key)));
        }




    }
} 