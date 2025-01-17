<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
	crossorigin="anonymous">

<title>Insert title here</title>
</head>
<body>
	<div class="container p-4">
		<h1 class="mb-3 text-center">Burger Tracker</h1>
		<table class="table table-striped">
			<thead>
				<tr>

					<th>REPENCES</th>
					<th>VENDER</th>
					<th>AMOUNT</th>
					<th>ACTION</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="trav" items="${travels}">
					<tr>
						<td class="table-primary"><a href="one/${trav.id}">${trav.name}</a></td>
						<td>${trav.vendor}</td>
						<td>${trav.description}</td>
						<td><a href="travel/edit/${trav.id}">edit</a>
							<form action="delete/travle/${trav.id}" method="post">
								<input type="hidden" name="_method" value="delete">
								 <input type="submit" value="Delete" class="btn btn-dark">
							</form>
							</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
	<div class="container">

		<h1 class="mt-4">Add an expense:</h1>
		<form:form modelAttribute="travel" method="POST" action="/travels">
			<div>

				<form:label path="name">Expense name: </form:label>
				<form:input path="name" class="form-control" />
				<form:errors class="badge text-danger" path="name" />
				<br>
				<form:label path="vendor">vendor: </form:label>
				<form:input path="vendor" class="form-control" />
				<form:errors class="badge text-danger" path="vendor" />
				<br>

				<form:label path="amount">Amount: </form:label>
				<form:input path="amount" class="form-control" />
				<form:errors class="badge text-danger" path="amount" />
				<br>
				<form:label path="description">description: </form:label>
				<form:input path="description" class="form-control" />
				<form:errors class="badge text-danger" path="description" />
			</div>

			<button type="submit" class="btn btn-primary">submit</button>
		</form:form>
	</div>


</body>
</html>