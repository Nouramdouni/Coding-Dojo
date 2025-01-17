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
  <h1 class="mt-4">Create a burger:</h1>
        <form:form modelAttribute="burger" method="POST" action="/edit/burger/${burger.id}">
            <div>
               <input type="hidden" name="_method" value="PUT">
                
                <form:label path="burger_name">Burger name: </form:label>
                <form:input path="burger_name" class="form-control"/>
                <form:errors class="badge text-danger" path="burger_name"/> 
                <br>
                <form:label path="restaurant_name">Restaurant name: </form:label>
                <form:input path="restaurant_name" class="form-control"/>
                <form:errors class="badge text-danger" path="restaurant_name"/> 
                <br>
                
                <form:label path="rating">rating: </form:label>
                <form:input path="rating" class="form-control"/>
                <form:errors class="badge text-danger" path="rating"/> 
                <br> 
                <form:label path="note">Notes: </form:label>
                <form:input path="note" class="form-control"/>
                <form:errors class="badge text-danger" path="note"/>
            </div>
            
            <button type="submit" class="btn btn-primary">edit</button>
        </form:form>
    </div>
</body>
</html>