const ShoppingListService = require("../src/shopping-list-service");
const knex = require("knex");

describe(`Shopping-list Service Object`, () => {
  let db;
  let testList = [
    {
      id: 1,
      name: "Fish tricks",
      price: "13.10",
      category: "Main",
      checked: false,
      date_added: new Date("2029-01-22T16:28:32.615Z")
    },
    {
      id: 2,
      name: "Not Dogs",
      price: "4.99",
      category: "Snack",
      checked: true,
      date_added: new Date("2100-05-22T16:28:32.615Z")
    },
    {
      id: 3,
      name: "Bluffalo Wings",
      price: "5.50",
      category: "Snack",
      checked: false,
      date_added: new Date("1919-12-22T16:28:32.615Z")
    }
  ];

  before(() => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DB_URL
    });
  });

  before(() => db("shopping_list").truncate());

  afterEach(() => db("shopping_list").truncate());

  after(() => db.destroy());

  context(`Given ShoppingList has data`, () => {
    beforeEach(() => {
      return db.into("shopping_list").insert(testList);
    });

    it(`getAllItems() resolves all items from 'shopping_list' table`, () => {
      return ShoppingListService.getAllItems(db).then(actual => {
        expect(actual).to.eql(testList);
      });
    });

    it(`getById() resolves an item by id from 'shopping_list'table`, () => {
      const thirdId = 3;
      const thirdItem = testList[thirdId - 1];
      return ShoppingListService.getById(db, thirdId).then(actual => {
        expect(actual).to.eql({
          id: thirdId,
          name: thirdItem.name,
          price: thirdItem.price,
          category: thirdItem.category,
          checked: thirdItem.checked,
          date_added: thirdItem.date_added
        });
      });
    });

    it(`deleteItem() removes an item by id from 'shopping_list' table`, () => {
      const itemId = 3;
      return ShoppingListService.deleteItem(db, itemId)
        .then(() => ShoppingListService.getAllItems(db))
        .then(allItems => {
          const expected = testList.filter(item => item.id !== itemId);
          expect(allItems).to.eql(expected);
        });
    });

    it(`updateItem() updates an item from 'shopping_list' table`, () => {
      const idOfItemToUpdate = 1;
      const updatedContent = {
        name: "updated name",
        price: "100.00",
        category: "Main",
        checked: true,
        date_added: new Date("2100-05-22T16:28:32.615Z")
      };
      return ShoppingListService.updateItem(
        db,
        idOfItemToUpdate,
        updatedContent
      )
        .then(() => ShoppingListService.getById(db, idOfItemToUpdate))
        .then(actual => {
          expect(actual).to.eql({
            id: idOfItemToUpdate,
            ...updatedContent
          });
        });
    });
  });

  context(`Given 'shopping_list' has no data`, () => {
    it(`getAllItems() resolves an empty array`, () => {
      return ShoppingListService.getAllItems(db).then(actual => {
        expect(actual).to.eql([]);
      });
    });

    it(`insertItem() inserts a new item and resolves the new item with an id`, () => {
      const newItem = {
        name: "new item",
        price: "0.99",
        category: "Main",
        checked: true,
        date_added: new Date("2050-05-22T16:28:32.615Z")
      };
      return ShoppingListService.insertItem(db, newItem).then(actual => {
        expect(actual).to.eql({
          id: 1,
          ...newItem
        });
      });
    });
  });
});
