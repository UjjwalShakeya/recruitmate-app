// importing all routes right here
import express from "express";
const router = express.Router();
import auth from "../middlewares/auth.middleware.js";
// multer imported here
import { uploadFile } from "../middlewares/fileupload.middlware.js";

import validationMiddleware from "../middlewares/validation.middleware.js";

// Import the recruiter controller (make sure the path is correct)
import JobsController from "../controller/jobs.controller.js";


// Create an instance of the controller class
const jobsControllerInc = new JobsController();

// ************ Job Routes ************ //
// GET /jobs - Retrieve all job listings

router.get("/jobs", jobsControllerInc.getAllJobs);

router.get("/postjob", auth, (req, res) => {
  res.render("new-job");
});

router.post(
  "/job",
  // auth,
  uploadFile.single('logo'),
  validationMiddleware,
  jobsControllerInc.createJob,
);

// GET /jobs/:id - Retrieve a specific job listing by ID
router.get("/jobs/:id", jobsControllerInc.getJobById);

// // PUT /jobs/:id - Update a specific job listing by ID
// router.put("/:id", auth, jobsControllerInc.updateJobById);

// // DELETE /jobs/:id - Delete a specific job listing by ID
// router.delete("/:id", auth, jobsControllerInc.deleteJobById);

// Export router
export default router;
