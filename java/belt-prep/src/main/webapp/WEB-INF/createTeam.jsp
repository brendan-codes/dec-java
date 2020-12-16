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
	<h1>Welcome <c:out value="${user.email}"></c:out>! Please create team!</h1>
	<form:form method="POST" action="/createTeam" modelAttribute="team">
        <p>
            <form:label path="teamName">teamName:</form:label>
            <form:input type="text" path="teamName"/>
        </p>
        <input type="submit" value="Create team!"/>
    </form:form>
    
    <hr>
    <p>All teams!</p>
    
    <c:forEach items="${teams}" var="t">
    	<h4>Team Name: <c:out value="${t.teamName}"></c:out></h4>
    	<h4>Creator: <c:out value="${t.creator.email}"></c:out></h4>
    	<p>Member count: <c:out value="${t.members.size()}"></c:out></p>
    	<c:forEach items="${t.members}" var="m">
    		<li><c:out value="${m.email}"></c:out></li>
    	</c:forEach>
    	<form action="/joinTeam/${t.id}" method="POST">
    		<input type="submit" value="Join team!"/>
    	</form>
    	
    	<form action="/addTeam/${t.id}" method="POST">
    		<select name="userId">
    			<option value="please select" disabled selected>please select!</option>
    			<c:forEach items="${users}" var="u">
    				<option value="${u.id}"><c:out value="${u.email}"></c:out></option>
    			</c:forEach>
    		</select>
    		<input type="submit" value="Add this person to a team!" />
    	</form>
    	<hr />
    </c:forEach>
</body>
</html>