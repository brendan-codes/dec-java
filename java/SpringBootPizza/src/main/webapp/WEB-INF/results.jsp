<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>This is results</h1>
	
	<p>This is a str ${exampleString}</p>
	
	<p>This is a better str <c:out value="${exampleString}"></c:out></p>
	
	<div id="page">
		<div class="logo"></div>
		<ul id="navigation">
			<li><a href=""></a></li>
			<li><a href=""></a></li>
			<li><a href=""></a></li>
			<li><a href=""></a></li>
			<li><a href=""></a></li>
		</ul>
	</div>

	
</body>
</html>