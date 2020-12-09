<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>

<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" type="text/css" href="./css/style.css">
<script type="text/javascript" src="js/date.js"></script>
<title>Display Date</title>
</head>
<body>

	<center>
	<h1>Today's Date</h1>
	<h1><c:out value = "${thisDate}"/></h1>
	</center>

</body>
</html>