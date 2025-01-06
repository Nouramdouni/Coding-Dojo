import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name , String dayperiod) {
        // YOUR CODE HERE
        return String.format("Good %s, %s. Lovely to see you.", dayperiod, name);

    }
    
    public String dateAnnouncement() {
        // YOUR CODE HERE
        return String.format("it is currently %s" ,new Date());
    }
    
    public String respondBeforeAlexis(String conversation) {
        // YOUR CODE HERE  
        if (conversation.indexOf("Alexis")>-1){ 
            return "She's really of no help. What can I get for you?";
        } 
        if (conversation.indexOf("Alfred")>-1){ 
            return "At your service, naturally. How may I be of assistance?";
        } 
        return "right and with that i shall retire";
    }
    
	
}

