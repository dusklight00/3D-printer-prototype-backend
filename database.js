import { v4 as uuidv4 } from "uuid";

class Database {
  constructor() {
    this.database = [];
  }

  addOrder(name, completionTime, homeIndex) {
    const data = {
      id: uuidv4(),
      name: name,
      completionTime: completionTime,
      home: homeIndex,
      status: "pending",
    };
    this.database.push(data);
  }

  getOrderIndex(id) {
    for (let i in this.database) {
      const data = this.database[i];
      if (data.id == id) return i;
    }
  }

  updateStatus(id, status) {
    const orderIndex = this.getOrderIndex(id);
    this.database[orderIndex].status = status;
  }

  deleteOrder(id) {
    const index = this.getOrderIndex(id);
    this.database.splice(index, 1);
  }

  putOrderOnPending(id) {
    this.updateStatus(id, "pending");
  }

  putOrderOnProcessing(id) {
    this.updateStatus(id, "processing");
  }

  putOrderOnComplete(id) {
    this.updateStatus(id, "complete");
  }

  getAllOrders() {
    return this.database;
  }

  truncate() {
    this.database = [];
  }
}

const database = new Database();
export default database;
