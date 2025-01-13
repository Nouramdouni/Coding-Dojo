<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<title>Insert title here</title>
</head>
<body> 
<form class="col-6 border rounded p-5 " action="/submit" method="POST">
            <div class="form-group">
                <label for="numberYear">Pick any number from 5 to 25</label>
                <input type="number" class="form-control" id="numberYear" name="numberYear">
              </div>
             <div class="form-group">
               <label for="city">Enter the name of any city:</label>
               <input type="text" class="form-control" id="city" name="city">
             </div>
             <div class="form-group">
               <label for="person">Enter the name of any real person:</label>
               <input type="text" class="form-control" id="person" name="person">
             </div>
             <div class="form-group">
               <label for="hobby">Enter professional endeavor or hobby:</label>
               <input type="text" class="form-control" id="hobby" name="hobby">
             </div>
             <div class="form-group">
               <label for="thing">Enter any type of living thing:</label>
               <input type="text" class="form-control" id="thing" name="thing">
             </div>
             <div class="form-group">
               <label for="nice">Say something nice to someone :</label>
               <textarea class="form-control" id="nice" name="nice" rows="" cols=""></textarea>
             </div>
             <p>Send and show a friend</p>
             <div class="text-end">
                  <button type="submit" class="btn btn-primary">Send</button>
             </div>
        </form>


</body>
</html>