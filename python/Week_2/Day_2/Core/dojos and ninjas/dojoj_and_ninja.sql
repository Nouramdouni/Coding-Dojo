insert into dojos (namee) values ('dojo code '),('RBK'),('GO MAY CODE');
select * from dojos;   
SET SQL_SAFE_UPDATES = 0;
delete from dojos ; 
insert into dojos (namee) values ('rbk'),('DJOJ'),('INFO+'); 
select * from dojos;
insert into ninjas (first_name,last_name,age,dojo_id) value ('nourhen','amdouni','24','4') ,('yessin','bn','23','4'),('aziz','tounsi','21','4');
insert into ninjas (first_name,last_name,age,dojo_id) value ('aye','amdouni','24','5') ,('helmi','bn','23','5'),('malek','tounsi','21','5');
insert into ninjas (first_name,last_name,age,dojo_id) value ('fedi','amdouni','24','6') ,('meryen','bn','23','6'),('tekwa','tounsi','21','6');
select * from dojos
join ninjas on dojos.id =ninjas.dojo_id
where ninjas.id=( select  max(id)  from ninjas );
select *from ninjas where id=1; 
select * from ninjas order by dojo_id DESC  limit 1;
select ninjas*  namee, id  from  ninjas dojos  join dojos on ninjas.dojo_id =dojos.id
where ninjas.id=6




