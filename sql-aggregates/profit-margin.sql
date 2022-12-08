WITH eachFilm as (
  select "filmId",
    "title",
    "description",
    "rating",
    (count(*) * "f"."replacementCost") as "replacement cost"
  from "inventory"
  join "films" as "f" using ("filmId")
  group by "filmId"
)

select "title",
       "description",
       "rating",
  (sum("p"."amount") - "replacement cost") as "totalProfit"
from eachFilm
join "inventory" using ("filmId")
join "rentals" using ("inventoryId")
join "payments" as "p" using ("rentalId")
group by ("title", "description", "rating", "replacement cost")
order by "totalProfit" desc
limit 5;
