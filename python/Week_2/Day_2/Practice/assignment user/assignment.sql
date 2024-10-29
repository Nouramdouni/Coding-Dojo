insert into users (first_name,last_names,email)
values ('nourhene','amdouni','nourhene@gmail'),('malek','amdouni','malek@gmail'),('aye','sehili','aye@gmail');
select * from users ;  

select * from users where id =1;  
select *from users  ORDER BY id DESC LIMIT 1;  
update users set  last_name='Pancakes' where id=3; 
delete from users where  id=2;
select *from users  ORDER BY id asc;   
select *from users  ORDER BY firs_name desc;


