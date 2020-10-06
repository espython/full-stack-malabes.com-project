import express from "express";
// rest of the code remains same
const app = express();
const PORT = 4000;
app.get("/", (req, res) => {
  console.log(req.body);
  res.status(200).json({ "response code": 200 });
});
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
