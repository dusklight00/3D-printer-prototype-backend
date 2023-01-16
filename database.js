import { v4 as uuidv4 } from "uuid";

class Database {
  constructor() {
    this.database = [];
  }
  addOrder(name, model) {
    const data = {
      id: uuidv4(),
      name: name,
      model: model,
      status: "pending",
    };
    this.database.push(data);
  }
  getOrderIndex(id) {
    for (let i in this.database) {
      const data = this.database[i];
      if (data.id == id) return data;
    }
  }
  updateStatus(id, status) {
    const orderIndex = this.getOrderIndex(id);
    this.database[orderIndex].status = status;
  }
  getAllOrders() {
    return this.database;
  }
}

const database = new Database();
export default database;
