-- show firstName & lastName & total amount paid on rentals and order by desc

select "cu"."firstName",
       "cu"."lastName",
       sum("amount") as "total amount"
  FROM "payments" as "p"
  JOIN "customers" as "cu" using ("customerId")
group by "customerId"
order by "total amount" DESC
