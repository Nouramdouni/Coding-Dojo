insert into users (first_name,last_name) 
values ('amy','give'),('eli','byers'),('kermit','the frog'),
('marky','marks'),('nour','amdouni') ;
insert into users (first_name,last_name) 
values ('big','bired');
select *from users ; 
set SQL_SAFE_UPDATES = 0;
insert into frinendshipe(users_id,friend_id)values(1,2),(1,4),(1,6);
insert into frinendshipe(users_id,friend_id)values(2,3),(2,1),(2,5);
insert into frinendshipe(users_id,friend_id)values(3,2),(3,5);  
insert into frinendshipe(users_id,friend_id)values(4,3); 

select *from frinendshipe;
insert into frinendshipe(users_id,friend_id)values(5,1),(5,6);
insert into frinendshipe(users_id,friend_id)values (6,2),(6,3);
select u.first_name ,u.last_name ,
friends.first_name as friend_first_name,friends.last_name as friend_last_name 
from  users as u 
join  frinendshipe as f on u.id=f.users_id 
join users as friends on friends.id = f.friend_id;

select u.first_name ,u.last_name ,
friends.first_name as friend_first_name,friends.last_name as friend_last_name 
from  users as u 
join  frinendshipe as f on u.id=f.users_id 
join users as friends on friends.id = f.friend_id where users_id=1;
select count(*) as num_of_friendships from frinendshipe;

select users_id, users.first_name, users.last_name, count(users_id) as num_of_friends from frinendshipe
join users on users.id = frinendshipe.users_id
group by users_id
order by  num_of_friends  desc
limit 1; 
select u.first_name ,u.last_name ,
friends.first_name as friend_first_name,friends.last_name as friend_last_name 
from  frinendshipe as f
join  users  as u on u.id=f.users_id 
join users as friends on friends.id = f.friend_id where users_id=3 
order by  friends.first_name;
