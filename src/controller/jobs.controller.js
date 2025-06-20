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
  }

  createJob(req, res) {
    // accessing images file from images folder to render image in jobs section
    const logo = "images/" + req.file.filename;
    req.body.logo = logo;

    const newJob = JobsModel.add(req.body);
    if (newJob == 0) {
      return res.render("404");
    }
    res.redirect("/jobs");
  }

  getJobById(req, res) {
    const { id } = req.params;
    const data = JobsModel.find(id);
    if (!data) {
      return res.render("404");
    }
    res.render("job-details", { data });
  }

  showUpdateForm(req, res) {
    const { id } = req.params;
    const job = JobsModel.find(id);
    // logo
    if (!job) {
      return res.render("404");
    };
    return res.render("update-job", { job });
  };
  
  // updating job
  updateJob(req, res) {
  const { id } = req.params;
  const data = req.body;

  if (req.file && req.file.filename) {
    // new file was uploaded
    data.company_logo = "images/" + req.file.filename; // attaching newly uploaded 
  } else {
    // no new file, use old path
    data.company_logo = req.body.old_logo; // attaching Older File 
  };
  
  const isJobUpdated = JobsModel.update(id, data); 
  if (!isJobUpdated) {
    return res.render("404");
  }
  return res.redirect("/jobs");
};

// deleting job by id
  deleteJobById(req, res) {
    const { id } = req.params; // constructing id from params
    const isJobDeleted = JobsModel.delete(id);
    if (!isJobDeleted) {
      return res.render("404");
    }
    return res.redirect("/jobs");
  }

  // getting all applicants
  getAllApplicants(req, res) {
    const { id } = req.params; // constructing id from params
    const allApplicants = JobsModel.getApplicants(id);
    if (!allApplicants) {
      return res.render("404");
    };
    return res.render("all-applicants", {allApplicants});
  };
};
