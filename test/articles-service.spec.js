const ArticleService = require("../src/articles-service");
const knex = require("knex");

describe(`getAllArticles()`, () => {
  let db;

  before(() => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DB_URL
    });
  });

  it(`resolves all articles from 'blogful_articles' table`, () => {
    // test that ArticlesService.getAllArticles gets data from the table
  });
});
