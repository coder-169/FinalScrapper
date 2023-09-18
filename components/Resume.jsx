"use client";
import Script from "next/script";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
const ClassicResume = ({ user }) => {
  function formatDate(month, year) {
    if (month === "N/A") return "N/A " + year;
    else if (year === "N/A") return month + " N/A";
    const date = new Date(year, month - 1, 1);
    const monthYear = date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
    return monthYear;
  }

  return (
    <>
      <title>AI LinkedIn CV Generator | Resume</title>
      {Object.keys(user).length > 0 && (
        <div className="resume relative">
          <div className="resume_left">
            <div className="resume_profile">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={user?.profile_picture} alt="profile_pic" />
            </div>
            <div className="resume_content">
              <div className="resume_item resume_info">
                <div className="title">
                  <p className="bold">
                    {user?.first_name} {user?.last_name}
                  </p>
                  <p className="regular">{user?.sub_title}</p>
                </div>
                <ul>
                  <li>
                    <div className="flex w-8 h-8 rounded-full mr-2">
                      <HiLocationMarker className="my_icon text-xl text-white" />
                    </div>
                    <div className="data">{user?.location_default}</div>
                  </li>
                  <li>
                    <div className="flex w-8 h-8 rounded-full mr-2">
                      <FaLinkedin className="my_icon text-xl text-white" />
                    </div>
                    <div className="data pr-2">{user?.linkedin_url}</div>
                  </li>
                </ul>
              </div>
              {Object.keys(user).some(
                (key) => key.startsWith("skills_") && user[key] !== ""
              ) ? (
                <div className="resume_item resume_skills">
                  <div className="title">
                    <p className="bold">skill&apos;s</p>
                  </div>
                  <ul className="flex flex-wrap gap-1">
                    {Object.keys(user).map((key) => {
                      if (key.startsWith("skills_"))
                        return (
                          <li key={key} className="">
                            {user[key]}
                          </li>
                        );
                    })}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
          <div className="resume_right">
            <div className="resume_item resume_about">
              <div className="title">
                <p className="bold">About</p>
              </div>
              <p>{user?.summary}</p>
            </div>
            {Object.keys(user).some(
              (key) =>
                key.startsWith("experiences_") &&
                key.endsWith("_title") &&
                user[key] !== ""
            ) ? (
              <div className="resume_item resume_education">
                <div className="title">
                  <p className="bold">Work Experience</p>
                </div>
                <ul>
                  {Object.keys(user).map((key) => {
                    if (
                      key.startsWith("experiences_") &&
                      key.endsWith("_title")
                    ) {
                      const companyKey = key.replace("_title", "_company");
                      const startDateMonthKey = key.replace(
                        "_title",
                        "_date_start_month"
                      );
                      const startDateYearKey = key.replace(
                        "_title",
                        "_date_start_year"
                      );
                      const endDateMonthKey = key.replace(
                        "_title",
                        "_date_end_month"
                      );
                      const endDateYearKey = key.replace(
                        "_title",
                        "_date_end_year"
                      );

                      const companyName = user[companyKey] || "Unknown Company";
                      const startDateMonth = user[startDateMonthKey] || "N/A";
                      const startDateYear = user[startDateYearKey] || "N/A";
                      const endDateMonth = user[endDateMonthKey] || "N/A";
                      const endDateYear = user[endDateYearKey] || "N/A";
                      const title = user[key] || "Title: N/A";
                      const companyURL = user[companyKey + "_url"] || "";

                      return (
                        <li key={key}>
                          <h3>{title}</h3>
                          <p>
                            <strong>{companyName}</strong>
                          </p>
                          <p className="date">
                            {startDateMonth === "N/A" &&
                            startDateYear === startDateMonth
                              ? "N/A"
                              : formatDate(startDateMonth, startDateYear)}
                            {" - "}
                            {endDateMonth === "N/A" &&
                            endDateYear === endDateMonth
                              ? "N/A"
                              : formatDate(endDateMonth, endDateYear)}
                          </p>
                          {companyURL && (
                            <p>
                              <a href={companyURL} target="_blank">
                                Company Website
                              </a>
                            </p>
                          )}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            ) : null}
            {Object.keys(user).some(
              (key) =>
                key.startsWith("education_") &&
                key.endsWith("_school_name") &&
                user[key] !== ""
            ) ? (
              <div className="resume_item resume_education">
                <div className="title">
                  <p className="bold">Education</p>
                </div>
                <ul>
                  {Object.keys(user).map((key, i) => {
                    if (
                      key.startsWith("education_") &&
                      key.endsWith("_school_name") &&
                      user[key] !== ""
                    ) {
                      console.log(key, i, "dgree");

                      const index = key.split("_")[1];
                      const startDateMonthKey = `education_${index}_date_start_month`;
                      const startDateYearKey = `education_${index}_date_start_year`;
                      const endDateMonthKey = `education_${index}_date_end_month`;
                      const endDateYearKey = `education_${index}_date_end_year`;
                      const schoolName = user[key] || "Unknown School";
                      const startDateMonth = user[startDateMonthKey] || "N/A";
                      const startDateYear = user[startDateYearKey] || "N/A";
                      const endDateMonth = user[endDateMonthKey] || "N/A";
                      const endDateYear = user[endDateYearKey] || "N/A";
                      const degreeNameKey = `education_${index}_degree_name`;
                      const fieldOfStudyKey = `education_${index}_field_of_study`;
                      const degreeName = user[degreeNameKey] || "Degree: N/A";
                      const fieldOfStudy = user[fieldOfStudyKey] || "";

                      return (
                        <li key={key}>
                          <h3>{schoolName}</h3>
                          <p>
                            {startDateMonth === "N/A" &&
                            startDateYear === startDateMonth
                              ? "N/A"
                              : formatDate(startDateMonth, startDateYear)}
                            {" - "}
                            {endDateMonth === "N/A" &&
                            endDateMonth === endDateYear
                              ? "N/A"
                              : formatDate(endDateMonth, endDateYear)}{" "}
                          </p>
                          <p>
                            <strong>{degreeName}</strong>
                          </p>
                          <p>{fieldOfStudy}</p>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            ) : null}

            {Object.keys(user).some(
              (key) =>
                key.startsWith("courses_") &&
                key.endsWith("_name") &&
                user[key] !== ""
            ) ? (
              <div className="resume_item resume_education">
                <div className="title">
                  <p className="bold">Courses</p>
                </div>
                <ul>
                  {Object.keys(user).map((key) => {
                    if (key.startsWith("courses_") && key.endsWith("_name")) {
                      return (
                        <li key={key}>
                          <h3>{user[key]}</h3>
                        </li>
                      );
                    }
                    return null; // Return null for non-course keys
                  })}
                </ul>
              </div>
            ) : null}
            {Object.keys(user).some(
              (key) =>
                key.startsWith("award_") &&
                key.endsWith("_name") &&
                user[key] !== ""
            ) ? (
              <div className="resume_item resume_education">
                <div className="title">
                  <p className="bold">Awards</p>
                </div>
                <ul>
                  {Object.keys(user).map((key) => {
                    if (key.startsWith("award_") && key.endsWith("_name")) {
                      return (
                        <li key={key}>
                          <h3>{user[key]}</h3>
                        </li>
                      );
                    }
                    return null; // Return null for non-course keys
                  })}
                </ul>
              </div>
            ) : null}
            {Object.keys(user).some(
              (key) =>
                key.startsWith("certifications_") &&
                key.endsWith("_name") &&
                user[key] !== ""
            ) ? (
              <div className="resume_item resume_education">
                <div className="title">
                  <p className="bold">Certifications</p>
                </div>
                <ul>
                  {Object.keys(user)
                    .map((key) => {
                      if (
                        key.startsWith("certifications_") &&
                        key.endsWith("_company_name")
                      ) {
                        const certificationIndex = key.split("_")[1];
                        const certificationName =
                          user[`certifications_${certificationIndex}_name`];
                        let companyName;
                        if (
                          key.startsWith("certifications_") &&
                          key.endsWith("_company")
                        ) {
                          companyName =
                            user[
                              `certifications_${certificationIndex}_company_name`
                            ];
                        }
                        return (
                          certificationName && (
                            <li key={key}>
                              <h3>➡️ {certificationName}</h3>
                              {companyName && (
                                <p>
                                  <strong>Issued By : {companyName}</strong>
                                </p>
                              )}
                            </li>
                          )
                        );
                      } else if (
                        key.startsWith("certifications_") &&
                        key.endsWith("_company")
                      ) {
                        const certificationIndex = key.split("_")[1];
                        const certificationName =
                          user[`certifications_${certificationIndex}_name`];
                        return (
                          certificationName && (
                            <li key={key}>
                              <h3>➡️ {certificationName}</h3>
                            </li>
                          )
                        );
                      }
                      return null; // Return null for non-certification name keys
                    })
                    .filter(Boolean)}{" "}
                  {/* Use filter(Boolean) to remove null values */}
                </ul>
              </div>
            ) : null}

            {Object.keys(user).some(
              (key) =>
                key.startsWith("publications_") &&
                key.endsWith("_name") &&
                user[key] !== ""
            ) ? (
              <div className="resume_item resume_education">
                <div className="title">
                  <p className="bold">Publications</p>
                </div>
                <ul>
                  {Object.keys(user).map((key) => {
                    if (
                      key.startsWith("publications_") &&
                      key.endsWith("_url")
                    ) {
                      const publicationIndex = key.split("_")[1];
                      const publicationKey = `publications_${publicationIndex}_name`;
                      console.log(publicationKey);
                      const publicationName =
                        user[publicationKey] || "Unknown Publication";
                      return (
                        publicationName && (
                          <li key={key}>
                            <h3>{publicationName}</h3>
                          </li>
                        )
                      );
                    }
                    return null; // Return null for non-course keys
                  })}
                </ul>
              </div>
            ) : null}
            {Object.keys(user).some(
              (key) =>
                key.startsWith("languages_") &&
                key.endsWith("_name") &&
                user[key] !== ""
            ) ? (
              <div className="resume_item resume_education">
                <div className="title">
                  <p className="bold">Languages</p>
                </div>
                <ul>
                  {Object.keys(user).map((key) => {
                    if (key.startsWith("languages_") && key.endsWith("_name")) {
                      return (
                        <li key={key}>
                          <h3>{user[key]}</h3>
                        </li>
                      );
                    }
                    return null; // Return null for non-course keys
                  })}
                </ul>
              </div>
            ) : null}
            {Object.keys(user).some(
              (key) =>
                key.startsWith("patents_") &&
                key.endsWith("_name") &&
                user[key] !== ""
            ) ? (
              <div className="resume_item resume_education">
                <div className="title">
                  <p className="bold">Patents</p>
                </div>
                <ul>
                  {Object.keys(user).map((key) => {
                    if (key.startsWith("patents_") && key.endsWith("_name")) {
                      return (
                        <li key={key}>
                          <h3>{user[key]}</h3>
                        </li>
                      );
                    }
                    return null; // Return null for non-course keys
                  })}
                </ul>
              </div>
            ) : null}
            {Object.keys(user).some(
              (key) =>
                key.startsWith("projects_") &&
                key.endsWith("_title") &&
                user[key] !== ""
            ) ? (
              <div className="resume_item resume_education">
                <div className="title">
                  <p className="bold">Projects</p>
                </div>
                <ul>
                  {Object.keys(user).map((key) => {
                    if (key.startsWith("projects_") && key.endsWith("_title")) {
                      const index = key.split("_")[1];
                      const startDateMonthKey = `projects_${index}_date_start_month`;
                      const startDateYearKey = `projects_${index}_date_start_year`;
                      const endDateMonthKey = `projects_${index}_date_end_month`;
                      const endDateYearKey = `projects_${index}_date_end_year`;
                      const startDateMonth = user[startDateMonthKey] || "N/A";
                      const startDateYear = user[startDateYearKey] || "N/A";
                      const endDateMonth = user[endDateMonthKey] || "N/A";
                      const endDateYear = user[endDateYearKey] || "N/A";

                      return (
                        <li key={key}>
                          <h3>{user[key]}</h3>
                          <p>
                            {startDateMonth === "N/A" &&
                            startDateYear === startDateMonth
                              ? "N/A"
                              : formatDate(startDateMonth, startDateYear)}
                            {" - "}
                            {endDateMonth === "N/A" &&
                            endDateMonth === endDateYear
                              ? "N/A"
                              : formatDate(endDateMonth, endDateYear)}{" "}
                          </p>
                        </li>
                      );
                    }
                    return null; // Return null for non-course keys
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default ClassicResume;
