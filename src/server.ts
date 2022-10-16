import express from "express";

import "./database/runMigrations";

import { router } from "./useCases/routes";

const app = express();
app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is running on PORT 3000"));
