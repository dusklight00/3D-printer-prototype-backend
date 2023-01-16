import database from "./database";

database.addOrder("pratul", "model1");
const result = database.getAllOrders();
console.log(result);
