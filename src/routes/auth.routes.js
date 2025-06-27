// importing all routes right here
import express from "express";
const Router = express.Router();

// Import the recruiter controller (make sure the path is correct)
import RecruitersController from "../controller/recruiter.controller.js";

import validateRecruiter from "../middlewares/validateRecruiter.middleware.js";

// Create an instance of the controller class
const recruitersControllerInc = new RecruitersController();

// ************ Auth Routes ************ //

// posting on register
Router.post("/register",validateRecruiter, recruitersControllerInc.PostRegister);

// Render the login page (GET /)
Router.get("/login", recruitersControllerInc.getLogin);

// Log in a recruiter (POST /login)
Router.post("/login",recruitersControllerInc.postLogin);

// Log out the recruiter (POST /logout)
Router.get("/logout", recruitersControllerInc.postLogOut);

// Export router
export default Router;
