select "co"."name",
  count("c".*) as "cities"
  from "countries" as "co"
  join "cities" as "c" using ("countryId")
group by "co"."countryId";
