select "c"."firstName",
       "c"."lastName",
       "films"."title"
  from "rentals"
  join "customers" as "c" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId") where "title" = 'Magic Mallrats';
