<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="../css/style.css" type="text/css"/>
<script type="text/javascript" src="../js/app.js"></script>
<meta charset="UTF-8">
<title>Display Assignment</title>
</head>
<body>
	<script>
		myDateFunc();
	</script>
	
	<h1>Today's Date</h1>
	<p> <fmt:formatDate pattern = "E,d-m-yy" value = "${date}"/> </p>
	
</body>
</html>