<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Fruit Store</h1>
	<table class="table table-striped-columns">
		<thead>
			<tr>
				<th>Name</th>
				<th>Price</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<c:forEach var="friuts" items="${fruitscotrolles}">
					<tr>
						<td><c:out value="${friuts.name} ">
							</c:out></td>

						<td><c:out value="${friuts.price} ">
							</c:out>
						<td></td>
				</c:forEach>
			</tr>


		</tbody>
	</table>
</body>
</html>