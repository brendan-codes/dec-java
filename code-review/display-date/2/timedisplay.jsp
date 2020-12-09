<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="../css/style.css" type="text/css"/>
<script type="text/javascript" src="../app.js"></script>
<meta charset="UTF-8">
<title>Display Assignment</title>
</head>
<body>
	<script>
		myTimeFunc();
	</script>
	
	<h1>Current Time</h1>					
			<h1 class="time"><fmt:formatDate pattern="HH:mm aa"  value="${date}"/></h1>
</body>
</html>