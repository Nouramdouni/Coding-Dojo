<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Formatting (dates) -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
	crossorigin="anonymous">
<meta charset="UTF-8">
<title>Show One</title>
</head>
<body>

	<div class="container p-4 card mt-5">
		<div class=" ">
			<a href="/home" class="btn btn-info">back to the selves :)</a>

			<div>
				<h1 class="mb-5">${book.title}</h1>
				<p>
					<a style="color: #a64d79"> <c:out
							value="${book.creator.getName() } "></c:out>
					</a> read <a style="color: #a64d79"> <c:out value="${book.title } "></c:out>
					</a> by <a style="color: #a64d79"> <c:out value="${book.author } "></c:out>
					</a>

				</p>
				<br>
				<div>

					<p>
						Here are
						<c:out value="${book.creator.getName() } "></c:out>
						thoughts:
					</p>
					<hr>

					<c:out value="${book.thoughts} "></c:out> 
					
				</div> 
				<form action="/delete/${book.id}" method="post">
								<input type="hidden" name="_method" value="delete">
								 <input type="submit" value="Delete" class="btn btn-dark">
							</form>
				<a href="/edit/${book.id}">edite</a>
			</div>
		</div>


	</div>
</body>
</html>