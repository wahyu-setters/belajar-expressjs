import express, { Router } from "express";
import * as path from "path";
import { routerUser } from "./src/routes/User.js";

// settingan express
const app = express();
const port = process.env.PORT || 3000;

// setting router not found
import url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// app settingan
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

// static file
app.use(express.static(path.join(__dirname, "public")));


// url handling
app.use("/user", routerUser)
app.get("/", (req, res) => {
    res.sendFile("./src/views/home.html", { root: __dirname });
});


// routing not found
app.use('*', (req, res) => {
    res.status(404);
    res.sendFile("./src/views/404.html", { root: __dirname });
});


app.listen(port, ()=>{
    console.log("server running on port 3000")
})