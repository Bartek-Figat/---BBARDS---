import { app } from "./app";
import { connectToDb } from "./db/mongo";
const port = process.env.PORT || 8080;

connectToDb().then(() => {
  app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
  );
});
