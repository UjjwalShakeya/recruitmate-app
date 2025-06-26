// importing all routes right here
import express from "express";
const router = express.Router();
import auth from "../middlewares/auth.middleware.js";
// multer imported here
import { uploadFile } from "../middlewares/fileupload.middlware.js";

import validationMiddleware from "../middlewares/job.middleware.js";

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
  auth,
  uploadFile.single("logo"),
  validationMiddleware,
  jobsControllerInc.createJob
);

// GET /jobs/:id - Retrieve a specific job listing by ID
router.get("/job/:id", jobsControllerInc.getJobById);

// PUT /job/update/:id - Getting update form
router.get("/job/update/:id", jobsControllerInc.showUpdateForm);

// Post /job/update/:id - Post Updated data
router.post(
  "/job/update/:id",
  // auth,
  uploadFile.single("logo"),
  jobsControllerInc.updateJob
);

// DELETE /jobs/:id - Delete a specific job listing by ID
router.get("/job/delete/:id", auth, jobsControllerInc.deleteJobById);

// GET  /job/applicants/2 - getting all applicants
router.get("/job/applicants/:id", auth,jobsControllerInc.getAllApplicants);

// POST /apply/3 - adding new applicant
router.post(
  "/apply/:id",
  // auth,
  uploadFile.single("resume"),
  jobsControllerInc.addNewApplicant
);

// Export router
export default router;
