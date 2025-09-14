import React, { useEffect } from "react";
import "./Timeline.css";
import { Button } from './Button';

const Timeline = () => {
  const jobs = [
  {
    title: "Quality Assurance Analyst",
    company: "Infrastructure Health & Safety Association",
    date: "May 2025 - August 2025",
    description: [
      "Used SQL to extract relevant course and feedback data from company databases.",
      "Analyzed data using Excel and ML to identify common trends and potential issues.",
      "Used this data analysis to suggest improvements to program content, delivery, and evaluations.",
      "Created detailed reports of data findings and their use in modifying programs and services.",
      "Developed QA processes to ensure delivery of high-quality programs."
    ]
  },
  {
    title: "Quality Assurance",
    company: "Infrastructure Health & Safety Association",
    date: "September 2024 - December 2024",
    description: [
      "Performed unit, regression, integration, and system testing on a beta website and several web applications.",
      "Used JIRA to document bugs and change requests on the website and web apps for the development team.",
      "Wrote hundreds of test cases for the website and web apps based on technical and visual requirements.",
      "Ran SQL queries on SSMS and performed API calls to test the back-end of the beta website and web apps.",
      "Created input validation scripts for the company database using JavaScript regular expressions.",
      "Used project management tools such as ClickUp, JIRA, and Zoho to keep track of technical errors and tasks.",
    ],
  },
  {
    title: "Digital Advisor",
    company: "Ontario Chamber of Commerce",
    date: "January 2024 - April 2024",
    description: [
      "Performed unit, regression, and system testing on the company's Learning Management System (LMS).",
      "Ensured the LMS met WCAG AA Accessibility requirements and provided feedback to improve accessibility",
      "Entered and referred to client information and registration data in the company's internal database.",
    ],
  },
];


  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-container">
      <h1>take a look at my recent work experiences.</h1>
      <div className="btns">
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          download='/Neferty_Amooyan_Resume.pdf'
          target="_blank"
          onClick={console.log('hey')}
        >
          VIEW MY RESUME
        </Button>
      </div>
  {jobs.map((job, index) => (
    <div
      key={index}
      className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
    >
      <div className="timeline-content">
        <h3>{job.title}</h3>
        <h4>{job.company}</h4>
        <span className="timeline-date">{job.date}</span>
        {job.description && job.description.length > 0 && (
          <ul>
            {job.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  ))}
</div>

  );
};

export default Timeline;
