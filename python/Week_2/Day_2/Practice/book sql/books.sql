insert into users (first_name,last_name)
values('jane','amsden'),('emily','dixon'),('theodore','dostoevsky')
,('william','shapiro'),('lao','xiu');   
SET SQL_SAFE_UPDATES = 0;
select *from users ;

insert into books (title) values('Cshrap'),('java'),('python'),('php'),('ruby');  
select * from books; 
update books set  title='c#' where title='Cshrap' ; 
update users set  first_name='bil' where id= 4 ;
insert into favorit(user_id, book_id) values ('1','2'),('1','3'),('1','4'),('1','5'); 
insert into favorit(user_id, book_id) values ('2','1'),('2','2'),('2','3'); 
insert into favorit(user_id, book_id) values ('3','1'),('3','2'),('3','3'),('3','4'); 
select *from favorite;  

select u.first_name, u.last_name
from  users u
join favorites on u.id=f.user_id 
where favorites .book_id=3; 

delete from  favorites 
where user_id=1 and book_id=3; 


insert into favorites (users_id,book_id) values (5,2);
select title 
from books b 
join favorites f on b.id = f.book_id
where  f.user_id = 3;

select u.first_name, u.last_name
from users u
join favorites f on u.id = f.user_id
where f.book_id = 5; 