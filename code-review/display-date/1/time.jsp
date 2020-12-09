
<!DOCTYPE html><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Display Time</title>
<link rel="stylesheet" type="text/css" href="./css/style.css">
<script type="text/javascript" src="js/time.js"></script>
</head>
<body>

	<center>
	<h2>Current Time</h2>
	<h2><c:out value = "${thisTime}"/></h2>
	</center>

</body>
</html>