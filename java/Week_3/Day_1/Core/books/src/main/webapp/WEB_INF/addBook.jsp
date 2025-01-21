<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
    <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    
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
<div class="container"> 
<a href="/home" class="btn btn-info">back to the selves :)</a> 

		<h1 class="mt-4">Add a Book to your shelf:</h1>
		<form:form modelAttribute="book" method="POST" action="/add/new/book">
			<div>

				<form:label path="title">title: </form:label>
				<form:input path="title" class="form-control" />
				<form:errors class="badge text-danger" path="title" />
				<br>
				<form:label path="author">author</form:label>
				<form:input path="author" class="form-control" />
				<form:errors class="badge text-danger" path="author" />
				<br>

				<form:label path="thoughts">thoughts: </form:label>
				<form:input path="thoughts" class="form-control" />
				<form:errors class="badge text-danger" path="thoughts" />
				

			<button type="submit" class="btn btn-primary">submit</button>
		</form:form>
	</div>
</body>
</html>