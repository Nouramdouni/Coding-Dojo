<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>Welcome  <c:out value="${user.name}"></c:out> !!!!
<p> this is you dashboard nothing to see here yet !!!</p> </h1>
<a href="/logout">Logout !!</a>
</body>
</html>