-- will need to use two joins
-- get firstname & lastname of all actors from 'jersey sassy'


SELECT "a"."firstName",
       "a"."lastName",
       "f"."title"
from "castMembers"
JOIN "actors" as "a" using ("actorId")
JOIN "films" as "f" using ("filmId") where "title" = 'Jersey Sassy'
