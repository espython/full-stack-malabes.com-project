import express from "express";
import admin from "firebase-admin";

import serviceAccount from "./clothing-db.json";

const defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: "https://clothing-db-2b748.firebaseio.com"
});
const db = defaultApp.firestore();

// rest of the code remains same
const app = express();
const PORT = 4000;
app.get("/api", async (req, res) => {
  const users = [];
  const usersQuery = (await db.collection("users").get()).docs;
  console.log(
    "users",
    usersQuery.forEach(doc => {
      console.log(doc.id, "=>", doc.data());
      users.push(doc.data() as never);
    })
  );
  console.log("json", req.body);
  // console.log(defaultApp.)
  res.status(200).json({ users });
});
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
