// imported modules here

import JobsModel from "../model/jobs.model.js";

export default class JobController {

  // getting all jobs
  getAllJobs(req, res) {
    const jobs = JobsModel.get();
    if (!jobs || jobs.length <= 0) {
      return res.render("list-all-jobs", { msg: "something went wrong" });
    }
    return res.render("list-all-jobs", { jobs });
  };

  createJob(req, res) {
    console.log(req.body);
    const newJob = JobsModel.add(req.body); 
    if (newJob == 0){
      return res.render('404');
    }
    return res.redirect('/jobs');
  };

  getJobById(req, res) {
    // const { id } = req.params;
    // res.send(`Retrieve job listing with ID ${id}`);
  };

  updateJobById(req, res) {
    // const { id } = req.params;
    // res.send(`Update job listing with ID ${id}`);
  };

  deleteJobById(req, res) {
    const { id } = req.params;
    res.send(`Delete job listing with ID ${id}`);
  };

}
