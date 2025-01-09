package zookeeper;

public class Gorilla extends Mammal { 
	public Gorilla () { 
		super();
	} 
	public void throwsomething() {  
		this.setEnergy(getEnergy()-5); 
		System.out.println("this gaorilla has thrrown somthing!!!"); 
		
		
	}  
	public void eatBanans(){ 
		this.setEnergy(getEnergy()+10); 
		System.out.println("thisgorilla has cimbed a tree");  
		
		
	} 
	public void climb() { 
		this.setEnergy(getEnergy()-10); 
		System.out.println("The gorilla has climbed a tree!");
	}
	
 
}
