-- "releaseYear" & genres.name with the "title" 'boogie amelie'
-- from 'filmgenre'


select "f"."releaseYear" as "release year",
       "g"."name" as "genre"
from "filmGenre"
join "genres" as "g" using ("genreId")
join "films" as "f" using ("filmId")
where "title" = 'Boogie Amelie';
