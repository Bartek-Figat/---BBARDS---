import { app } from "./app";
import { connect } from "./db/mongo";

const port = process.env.PORT || 8080;

connect();

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
