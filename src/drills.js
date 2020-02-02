require("dotenv").config();
const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL
});

function searchByTerm(searchTerm) {
  knexInstance
    .select("*")
    .from("shopping_list")
    .where("name", "ILIKE", `%${searchTerm}%`)
    .then(result => {
      console.log(result);
    });
}

// searchByTerm('hi');

function paginateProducts(pageNumber) {
  const productsPerPage = 6;
  const offset = productsPerPage * (pageNumber - 1);

  knexInstance
    .select("*")
    .from("shopping_list")
    .limit(productsPerPage)
    .offset(offset)
    .then(result => {
      console.log(result);
    });
}

// paginateProducts(3);

function searchByDate(daysAgo) {
  knexInstance
    .select("*")
    .from("shopping_list")
    .where(
      "date_added",
      ">",
      knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
    )
    .then(result => {
      console.log(result);
    });
}

//  searchByDate(3);

function categoryTotals() {
  knexInstance
    .select("category")
    .sum("price as total")
    .from("shopping_list")
    .groupBy("category")
    .then(result => {
      console.log(result);
    });
}

categoryTotals();
