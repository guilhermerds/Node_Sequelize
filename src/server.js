const express = require("Express");
const routes = require("./routes");

require("./database");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);