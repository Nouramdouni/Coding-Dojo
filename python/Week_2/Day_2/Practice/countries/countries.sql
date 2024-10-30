SELECT * FROM world.cities; 
select  c.name ,lan.language ,lan.percentage 
from  languages as lan
join countries as c on country_id=c.id 
where  lan.language="Slovene"
order by lan.percentage DESC;  
########################################################################

select c.name as name, count(ci.name) as cities
from countries as c
join cities as ci on c.id = ci.country_id
group by c.name
order by  cities desc;
####################################################################### 
select  name ,population ,country_id 
from cities 
where population>500000   
and cities.country_id = ( select id from  countries where  countries.name = "Mexico" )
order by population desc;
########################################################################
select  countries.name as name, languages.language as language, languages.percentage as percentage
 from countries
join languages on countries.id = languages.country_id
where languages.percentage > 89
order by  languages.percentage desc; 
############################################################################### 

select name, surface_area, population from countries
where surface_area < 501
and population >100000;
#############################################################################
select name, government_form,capital, life_expectancy from countries
where capital > 200
and government_form ="Constitutional Monarchy"
and life_expectancy > 75; 
############################################################################
select countries.name as country_name, cities.name as city_name, cities.district, cities.population from countries
join cities on countries.id = cities.country_id
where cities.district = "Buenos Aires"
and cities.population > 500000
order by cities.population desc;
#################################################################################
select  countries.region, count(countries.name) as countries
from  countries
group by countries.region
order by  countries desc; 
####################################################################################