<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
     <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>  
         <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
     
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"> 
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<title>Insert title here</title>
</head>
<body>   
<div class="container p-4">
		<h1 class="mb-3 text-center">Burger Tracker</h1>
		<table class="table table-striped">
		    <thead>
		        <tr>
		            
		            <th>Burger Name</th>
		            <th>Restaurant  name</th>
		            <th>Rating(out of 5)</th>
		        </tr>
		    </thead>
		    <tbody>
		         <c:forEach var="burger" items="${burgers}">
		         	<tr>
		         		<td class="table-primary">${burger.burger_name}</td>
		         		<td>${burger.restaurant_name}</td>
		         		<td>${burger.rating}</td>
		         	</tr>
		         </c:forEach>
		    </tbody>
		</table>
	</div>
<div class="container"> 

        <h1 class="mt-4">Create a burger:</h1>
        <form:form modelAttribute="burger" method="POST" action="/process">
            <div>
                
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
            
            <button type="submit" class="btn btn-primary">Save</button>
        </form:form>
    </div>


</body>
</html>