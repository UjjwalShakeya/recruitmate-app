// import modules
import express from "express";
import ejsLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import authRouter from "./src/routes/auth.routes.js";
import jobRouter from "./src/routes/jobs.routes.js";
import session from "express-session";
import cookieParser from "cookie-parser";  // cookie parser
import { setLastVisit } from "./src/middlewares/LastVisit.js"; // lastVisit middleware
 
// reassign initiated express
const app = express();
// used in Express.js to parse incoming JSON data from the request body.
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //send HTML forms data

app.set("view engine", "ejs"); // template engine for rendering dynamic HTML views.
// Correct views directory
app.set("views", path.join(__dirname, "src", "views")); // ONLY THIS LINE

// configuring ejs layouts and using
app.use(ejsLayouts); // would load layout from views
app.set("layout", "layouts/layout"); // default layout path relative to 'views'

// Serve static files from the 'public' directory
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public"))); // you can also use this one


app.use(session({
  secret: 'SecretKey',
  resave: false,
  saveUninitialized: true,
  cookie : {secure: false}, // we are setting this as false because  there is no secure server yet has been created for example https
}));

// enabeling last visit up lastLast
app.use(cookieParser()) // using cookieParser here 
app.use(setLastVisit);

// using locals storage to store sessioned userEmail
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

// getting the home page on default request
app.get("/", (req, res) => {
  res.render("landing-page");
});

app.use('/',authRouter); // route for all auth requests

app.use('/',jobRouter); // route for all jobs requests 

app.listen(3200, () => {
  console.log("server is listening at 3200");
});
