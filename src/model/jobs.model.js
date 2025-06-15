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
    company_logo,
    apply_by
  ) {
    this.id = id;
    this.job_category = job_category;
    this.job_designation = job_designation;
    this.job_location = job_location;
    this.company_name = company_name;
    this.year_founded = year_founded;
    this.total_employees = total_employees;
    this.salary = salary;
    this.total_positions = total_positions;
    this.experience = experience;
    this.skills_required = skills;
    this.company_logo = company_logo;
    this.apply_by = apply_by;
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

    
    const formattedSalary = formatSalary(salary); 
    // 👇 Format employees with commas
    const formattedEmployees = Number(employees).toLocaleString() + "+ employees";

    const newJob = new JobsModel(
      jobs.length + 1,
      job_category,
      job_designation,
      job_location,
      company_name,
      company_founded,
      formattedEmployees,
      formattedSalary,
      number_of_openings,
      experience,
      skills_required,
      logo,
      apply_by
    );
    return jobs.push(newJob);
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
    total_employees: "10,000+ employees",
    skills_required: ["HTML", "CSS", "JavaScript", "React"],
    job_posted: "2 days ago",
  },
  {
    id: 2,
    company_logo: "https://logo.clearbit.com/microsoft.com",
    job_designation: "Backend Developer",
    company_name: "Microsoft",
    job_location: "Hyderabad, India",
    experience: "1-3 years",
    salary: "₹12 LPA",
    total_employees: "20,000+ employees",
    skills_required: ["Node.js", "MongoDB", "REST APIs"],
    job_posted: "3 days ago",
  },
  {
    id: 3,
    company_logo: "https://logo.clearbit.com/amazon.com",
    job_designation: "Full Stack Engineer",
    company_name: "Amazon",
    job_location: "Remote",
    experience: "Fresher",
    salary: "₹10 LPA",
    total_employees: "50,000+ employees",
    skills_required: ["React", "Node.js", "AWS"],
    job_posted: "1 day ago",
  },
  {
    id: 4,
    company_logo: "https://logo.clearbit.com/meta.com",
    job_designation: "Intern Software Developer",
    company_name: "Meta",
    job_location: "Mumbai, India",
    experience: "Internship",
    salary: "₹30K/month",
    total_employees: "15,000+ employees",
    skills_required: ["Python", "Flask", "Machine Learning"],
    job_posted: "5 days ago",
  },
];


// 👇 Utility function to format salary
function formatSalary(salary) {
  const annualSalary = Number(salary);
  if (isNaN(annualSalary)) return "Invalid salary";

  // Convert to Lakhs
  const inLakhs = annualSalary / 100000;

  if (inLakhs >= 1) {
    return `₹${Math.round(inLakhs)} LPA`;
  } else {
    return `₹${annualSalary.toLocaleString()}/year`;
  }
}