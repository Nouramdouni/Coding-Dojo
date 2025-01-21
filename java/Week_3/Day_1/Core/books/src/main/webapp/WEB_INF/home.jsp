<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title> 
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
	crossorigin="anonymous">
</head> 
<body> 

<h1>Welcome  <c:out value="${user.name}"></c:out> !!!!</h1>

<p>Books from everyone s'shelves: </p>
<a href="/logout" class="btn btn-info">Logout :)</a> 
<a href="/add/new/book" class="btn btn-dark">+Add a to my shelf:)</a> 
<hr> 
<div class="container p-4">
		
		<table class="table table-striped">
			<thead>
				<tr>

					<th>Id</th>
					<th>TITLE</th>
					<th>AOUTHOR</th>
					<th>POSTED BY</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="book" items="${books}">
					<tr>
						<td class="table-primary"> ${book.id }</td>
						<td><a href="/books/${book.id}">${book.title}</a></td>
						
						<td>${ book.author}</td> 
						<td>${book.creator.getName()}</td> 
						
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
</body>
</html>