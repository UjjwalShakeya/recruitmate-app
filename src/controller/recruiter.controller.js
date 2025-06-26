// import modules right here
import recruiterModel from "../model/recruiter.model.js";

// model for recruiters
export default class recruitersController {

  // post Register
  PostRegister(req, res, next) {
    recruiterModel.add(req.body);
    return res.redirect("/login");
  };

  // post Login
  getLogin(req, res) {
    res.render("user-login");
  };
  // post Login
  postLogin(req, res, next) {
    const { email, password } = req.body;
    const recruiterFound = recruiterModel.isValidUser(email, password);

    if (!recruiterFound) {
      return res.render("user-login", { msg: "Invalid Credentials" }); // if recruiter not found throwing error in login.ejs with errorMessage
    }
    req.session.user = recruiterFound; // parsing session in request
    res.redirect("/"); // if recruiter successfully log in then render to index
  };

  // post Logout
  postLogOut(req, res, next) {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error logging out");
      }
      res.clearCookie("connect.sid"); // Optional: removes session cookie
      res.clearCookie("lastVisit", { path: "/" });
 // clearing right here cookies
      res.redirect("/"); // Redirect to home or login page
    });
  };
}
