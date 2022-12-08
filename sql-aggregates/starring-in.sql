select "g"."name" as "genre",
  count("fg"."genreId")


  from "genres" as "g"
  join "filmGenre" as "fg" using ("genreId")
  join "castMembers" as "c" using ("filmId")
  join "actors" as "a" using ("actorId") where "a"."firstName" = 'Lisa' and "a"."lastName" = 'Monroe';
group by "g"."name";
