// model for recruiters
export default class JobsModel {
  constructor(
    id,
    job_category,
    job_designation,
    job_location,
    company_name,
    year_founded,
    total_employees,
    salary,
    total_positions,
    experience,
    skills,
    logo,
    apply_by,
    applicants
  ) {
    this.id = id;
    this.job_category = job_category;
    this.job_designation = job_designation;
    this.job_location = job_location;
    this.company_name = company_name;
    this.year_founded = year_founded;
    this.total_employees = total_employees;
    this.salary = salary;
    this.number_of_openings = total_positions;
    this.experience = experience;
    this.skills_required = skills;
    this.company_logo = logo;
    this.apply_by = apply_by;
    this.applicants = applicants;
  }

  //   adding new job
  static get() {
    return jobs;
  }

  //   adding new job
  static add(job) {
    const {
      job_category,
      job_designation,
      job_location,
      company_name,
      company_founded,
      employees,
      salary,
      number_of_openings,
      experience,
      skills_required,
      logo,
      apply_by,
    } = job;

    // creating model for job
    const newJob = new JobsModel(
      jobs.length + 1,
      job_category,
      job_designation,
      job_location,
      company_name,
      company_founded,
      employees,
      salary,
      number_of_openings,
      experience,
      checkSkills(skills_required),
      logo,
      apply_by,
      []
    );
    return jobs.push(newJob);
  }
  //   adding new job
  static find(id) {
    const isJobFound = jobs.find((job) => job.id == id);
    return isJobFound;
  }
  //   deleting a particular Job
  static delete(id) {
    const jobIndex = jobs.findIndex((j) => j.id == id);
    const temp = jobs.splice(jobIndex, 1);
    return temp;
  }
  //   adding new job
  static update(id, data) {
    const jobIndex = jobs.findIndex((j) => j.id == id);
    data.id = id; // attaching id with data
    jobs[jobIndex] = data;
    return jobIndex;
  }

  //   getting all applicants
  static getApplicants(id) {
    const jobIndex = jobs.findIndex((job) => job.id == id); // find correct index
    return jobs[jobIndex].applicants || null;
  }

  //   adding a new applicant
  static addApplicants(jobId, applicant) {
    const jobIndex = jobs.findIndex((job) => job.id == jobId);

    if (jobIndex === -1) return null;

    if (!jobs[jobIndex].applicants) {
      jobs[jobIndex].applicants = [];
    }

    jobs[jobIndex].applicants.push(applicant);
    console.log("Updated Applicants:", jobs[jobIndex].applicants);

    return jobs[jobIndex].applicants;
  }
}

let jobs = [
  {
    id: 1,
    company_logo: "https://logo.clearbit.com/google.com",
    job_designation: "Frontend Developer",
    company_name: "Google",
    job_location: "Bangalore, India",
    experience: "0-1 year",
    salary: "₹8 LPA",
    number_of_openings: "1200",
    total_employees: "10,000+ employees",
    skills_required: ["HTML", "CSS", "JavaScript", "React"],
    apply_by: "2025-09-03",
  },
  {
    id: 2,
    company_logo: "https://logo.clearbit.com/microsoft.com",
    job_designation: "Backend Developer",
    company_name: "Microsoft",
    job_location: "Hyderabad, India",
    experience: "1-3 years",
    salary: "₹12 LPA",
    number_of_openings: "800",
    total_employees: "20,000+ employees",
    skills_required: ["Node.js", "MongoDB", "REST APIs"],
    apply_by: "2025-12-23",
  },
  {
    id: 3,
    company_logo: "https://logo.clearbit.com/amazon.com",
    job_designation: "Full Stack Engineer",
    company_name: "Amazon",
    job_location: "Remote",
    experience: "Fresher",
    salary: "₹10 LPA",
    number_of_openings: "8",
    total_employees: "50,000+ employees",
    skills_required: ["React", "Node.js", "AWS"],
    apply_by: "2025-08-16",
  },
  {
    id: 4,
    company_logo: "https://logo.clearbit.com/meta.com",
    job_designation: "Intern Software Developer",
    company_name: "Meta",
    job_location: "Mumbai, India",
    experience: "Internship",
    salary: "₹30K/month",
    number_of_openings: "16",
    total_employees: "15,000+ employees",
    skills_required: ["Python", "Flask", "Machine Learning"],
    apply_by: "2025-08-16",
  },
];

// 👇 Utility function to format salary
// function formatSalary(salary) {
//   const annualSalary = Number(salary);
//   if (isNaN(annualSalary)) return "Invalid salary";

//   // Convert to Lakhs
//   const inLakhs = annualSalary / 100000;

//   if (inLakhs >= 1) {
//     return `₹${Math.round(inLakhs)} LPA`;
//   } else {
//     return `₹${annualSalary.toLocaleString()}/year`;
//   }
// }

// checking the skills whether that is array or not
function checkSkills(skills_required) {
  // 🛠 Ensure it's always an array
  if (Array.isArray(skills_required)) {
    return skills_required;
  } else if (typeof skills_required === "string") {
    return skills_required.split(",").map((skill) => skill.trim());
  }
  return [];
}
