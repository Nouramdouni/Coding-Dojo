package zookeeper;

public class Test { 
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Gorilla gorilla =new Gorilla();
        Bat bat =new Bat();
        gorilla.throwsomething();
        gorilla.throwsomething();
        gorilla.throwsomething();
        gorilla.eatBanans();
        gorilla.eatBanans();
        gorilla.climb();
        gorilla.displayinfo();

        System.out.println("**********************");
        bat.attackTown();
        bat.attackTown();
        bat.attackTown();
        bat.eatHumans();
        bat.eatHumans();
        bat.fly();
        bat.fly();
        bat.displayinfo();
        
	}


}
