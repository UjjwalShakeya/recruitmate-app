## ⚙️ Environment Configuration

Before running the project, create a `.env` file in the root directory and add the following environment variables:

env
EMAIL=your-email@example.com
EMAIL_PASS=your-email-app-password


# 🧑‍💼 RecruitMate - Job Recruitment Portal

RecruitMate is a full-featured Node.js job recruitment platform built using Express.js and EJS, designed to streamline the process for recruiters to post jobs and manage applicants. Applicants can browse jobs, view details, and apply with uploaded resumes. The app uses an MVC architecture, session management, middleware, and email services — ideal for learning full-stack development principles.

---

## 🚀 Features

- ✨ Follows **MVC architecture** for clean separation of concerns
- 🖼️ **EJS templating** for dynamic server-side rendering
- 📁 Organized using **ES6 modules**
- 🔒 Uses **sessions** and **cookies** to manage authentication and track last visits
- 🔐 Authentication for recruiters with **login and registration**
- 👀 Applicants can:
  - View all job postings
  - See job details
  - Apply to jobs by submitting their resume
- 🛠️ Recruiters can:
  - Create, update, delete, and manage job postings
  - View applicants for each job and access submitted resumes
- 📧 Sends **confirmation emails** when an applicant submits a job application
- 📎 **File upload middleware** to handle resume submissions
- 📄 404 page for handling invalid routes

---

## 👥 User Roles & Features

### 👨‍💼 Recruiters
- Create, update, and remove job listings  
- Access and review applicant details and uploaded résumés  

### 🙋 Applicants
- Explore all available job opportunities  
- View comprehensive job descriptions  
- Apply for jobs by submitting their résumé  

---

## 🧩 Component Structure

| Page               | Description                                                         |
|--------------------|---------------------------------------------------------------------|
| Layouts Page       | Common layout with header, footer, and content block               |
| Landing Page       | Welcome message + overview of the platform                         |
| Job Listings Page  | Displays all available job posts                                   |
| Job Details Page   | Shows detailed info about a selected job                           |
| Applicant List     | Recruiter-only list of job applicants                              |
| Login Page         | Recruiter login form                                               |
| New Job Page       | Form for recruiters to post new jobs                               |
| Update Job Page    | Form for recruiters to update existing jobs                        |
| 404 Page           | Displayed when a page is not found                                 |

---

## 🗂 Data Structures

### 👤 User

| Field      | Type     | Description                                 |
|------------|----------|---------------------------------------------|
| `id`       | String   | Unique identifier for each user             |
| `name`     | String   | Full name of the user                       |
| `email`    | String   | Email address used for login                |
| `password` | String   | Password used for authentication            |

---

### 🧾 Job

| Field              | Type     | Description                                                        |
|--------------------|----------|--------------------------------------------------------------------|
| `id`               | String   | Unique identifier for each job                                     |
| `jobcategory`      | String   | Job category/type                                                  |
| `jobdesignator`    | String   | Designation/title                                                  |
| `joblocation`      | String   | Job location                                                       |
| `companyname`      | String   | Name of the company                                                |
| `salary`           | String   | Salary range                                                       |
| `applyby`          | Date     | Application deadline                                               |
| `skillsrequired`   | Array    | Required skills                                                    |
| `numberofopenings` | Number   | Total openings                                                     |
| `jobposted`        | Date     | Timestamp when posted                                              |
| `applicants`       | Array    | List of applicants who applied for the job                         |

---

### 📄 Applicant

| Field         | Type     | Description                                |
|---------------|----------|--------------------------------------------|
| `applicantId` | String   | Unique ID for the applicant                |
| `name`        | String   | Name of the applicant                      |
| `email`       | String   | Email address                              |
| `contact`     | String   | Phone number                               |
| `resumePath`  | String   | Path to uploaded resume file               |

---

## 🔧 Additional Features (Optional Enhancements)

These features can be added to maximize performance, usability, and score:

- 🔍 Job search bar in the navbar for filtering jobs
- ↪️ Redirect logged-in recruiters to job list (skip login page)
- 🔐 Resource-based authorization: only job creator can update/delete
- 🕒 Display last visit date for personalized experience
- 🛑 Add confirmation modals before update/delete actions
- 🧼 Global form validation middleware
- 📑 Pagination for job listings and applicant views

---

## 🛠 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/UjjwalShakeya/recruitmate-app.git
cd recruitmate-app
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the Application

```bash
node index
```

---

### 4. Open in browser

```bash
[http://localhost:3200](http://localhost:3200)
```

---

## 📁 Project Structure

```plaintext
recruitmate-app/
├── node_modules/           # Installed dependencies
├── public/                 # Static assets (CSS, images, etc.)
├── src/                    # Application source code
│   ├── controller/         # Route handler logic
│   ├── middlewares/        # Middleware functions (auth, file upload, etc.)
│   ├── model/              # Application data models
│   ├── routes/             # Express route definitions
│   ├── utils/              # Helper functions and utilities
│   └── views/              # EJS templates for UI rendering
├── .env                    # Environment variables
├── .gitignore              # Files/folders ignored by Git
├── index.js                # Main entry point of the application
├── package-lock.json       # Dependency lock file
├── package.json            # Project metadata and scripts
└── README.md               # Project overview and documentation
```

---

## 🧑‍💻 Author

Built with ❤️ by [Ujjwal Shakeya](https://github.com/UjjwalShakeya)
Feel free to raise an issue or suggest improvements.

---

## 📄 License

This project was built for academic purposes as part of a full-stack development assignment.
Use freely with attribution.

---