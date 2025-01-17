<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
      <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>  
         <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 
         <%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
         
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<title>Insert title here</title>
</head>
<body>
<div class="container"> 

        <h1 class="mt-4">edit an expense:</h1> 
        		<a href="/" class="btn btn-primary">Get Back</a>
        
        <form:form modelAttribute="travel" method="POST" action="/travel/edit/${travel.id}">
            <div>
                <input type="hidden" name="_method" value="PUT">
                <form:label path="name">Expense name: </form:label>
                <form:input path="name" class="form-control"/>
                <form:errors class="badge text-danger" path="name"/> 
                <br>
                <form:label path="vendor">vendor: </form:label>
                <form:input path="vendor" class="form-control"/>
                <form:errors class="badge text-danger" path="vendor"/> 
                <br>
                
                <form:label path="Amount">Amount: </form:label>
                <form:input path="Amount" class="form-control"/>
                <form:errors class="badge text-danger" path="Amount"/> 
                <br> 
                <form:label path="description">description: </form:label>
                <form:input path="description" class="form-control"/>
                <form:errors class="badge text-danger" path="description"/>
            </div>
            
            <button type="submit" class="btn btn-primary">submit</button>
        </form:form>
    </div>

</body>
</html>