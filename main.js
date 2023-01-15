import express from "express";

const app = express();
const PORT = 5000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`[+] Server is running on the ${PORT}`);
});
