import express from "express";
import database from "./database";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/get_orders", (req, res) => {
  const orders = database.getAllOrders();
  res.json(orders);
});

app.get("/add_order", (req, res) => {
  const name = req.query.name;
  const completeTime = req.query.completeTime;
  const homeIndex = req.query.homeIndex;
  database.addOrder(name, completeTime, homeIndex);
  res.json({
    status: "success",
    message: "Order has been placed",
  });
});

app.get("/pending_order", (req, res) => {
  const id = req.query.id;
  database.putOrderOnPending(id);
  res.json({
    status: "success",
    message: `Order ${id} has been put on pending`,
  });
});

app.get("/process_order", (req, res) => {
  const id = req.query.id;
  database.putOrderOnProcessing(id);
  res.json({
    status: "success",
    message: `Order ${id} has been put on processing`,
  });
});

app.get("/complete_order", (req, res) => {
  const id = req.query.id;
  database.putOrderOnComplete(id);
  res.json({
    status: "success",
    message: `Order ${id} has been put on complete`,
  });
});

app.get("/delete_order", (req, res) => {
  const id = req.query.id;
  database.deleteOrder(id);
  res.json({
    status: "success",
    message: `Order ${id} has been deleted`,
  });
});

app.get("/truncate", (req, res) => {
  database.truncate();
  res.json({
    status: "success",
    message: `Database has been truncate`,
  });
});

app.listen(PORT, () => {
  console.log(`[+] Server is running on the port ${PORT}`);
});
