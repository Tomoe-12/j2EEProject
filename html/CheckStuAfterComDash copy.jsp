<%@page import="java.io.*" %>
<%@page import="java.sql.*"%>
<%@page import="dao.*" %>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html lang="en">
<%
	HttpSession ses = request.getSession();
	
	int companyId = (int)ses.getAttribute("cmpid");
	String company_requirement_position = request.getParameter("position");
	System.out.println(companyId+" "+company_requirement_position);
	applicantDao app = new applicantDao();
	ResultSet rs = app.getStuForEachJob(companyId,company_requirement_position);
	System.out.println(rs);
            
%>
<head>  
</head>
<body>         	
	< <table>
        <tr>
            <th>Student Name</th>
            <th>University</th>
            <th>Company Name</th>
            <th>Requirement Position</th>
        </tr>

<%
        // Iterate through the query results and print them in the table
        while (rs.next()) {
        	
        	String studentID = rs.getString("student_id");
%>
            <tr>
                <td><%= rs.getString("student_name") %></td>
                <td><%= rs.getString("student_university") %></td>
                <td><%= rs.getString("company_name") %></td>
                <td><%= rs.getString("company_requirement_position") %></td>
                <td><a href="test.jsp?student_id=<%= studentID %>">check</a></td>
                <%
                
                %>
            </tr>
<%}%>
	</table>  
					
</body>

</html>




