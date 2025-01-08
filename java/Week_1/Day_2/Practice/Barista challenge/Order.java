
import java.time.chrono.ThaiBuddhistChronology;
import java.util.ArrayList;

public  class  Order{ 
     private  String name; 
     private boolean ready; 
     private ArrayList<Item> items;
    public  Order(String name ) 
    { 
        this.name=name; 
        this.items = new ArrayList<Item>();
 
    }    
    public Order() {
        this.name = "Guest";
        this.items = new ArrayList<Item>();
    }

    public String getName() {
        return name;
    }

    public boolean isReady() {
        return ready;
    }

    public ArrayList<Item> getItems() {
        return items;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setReady(boolean ready) {
        this.ready = ready;
    }

    public void setItems(ArrayList<Item> items) {
        this.items = items;
    } 
    public  void addItem(Item item){
        this.items.add(item); 

    } 
    public String getStatusMessage(){
         if (this.ready){ 
            return "your order is reday "; 
            
         } 
        else{ 
            return "thank your for waiting .your arder will be read soon";
         } 

    } 
    public double  getOrderTotal(){ 
         double total=0.0; 
         for (Item item :this.items )
         {
            total+=item.getPrice();

        } 
        return total;
    } 
    
    
        public void display(){
        System.out.println("Customer Name: "+this.name);
        for(Item item : items){
            System.out.println(item.getName()+" - $"+item.getPrice());
        }
        System.out.println("Total: $"+getOrderTotal());
    }

    
 



}