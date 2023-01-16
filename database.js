import { v4 as uuidv4 } from "uuid";

class Database {
  constructor() {
    this.database = [
      {
        id: "1f13c983-8b83-4626-b90e-6a8e51551568",
        name: "pratul",
        model: "model1",
        status: "pending",
      },
    ];
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
      if (data.id == id) return i;
    }
  }
  updateStatus(id, status) {
    const orderIndex = this.getOrderIndex(id);
    this.database[orderIndex].status = status;
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
}

const database = new Database();
export default database;
