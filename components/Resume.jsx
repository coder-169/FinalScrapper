"use client";
import Script from "next/script";
import React from "react";
import { FaLinkedin, FaLocationDot } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
const ClassicResume = ({ user }) => {

  
  return (
    <>
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
                    <HiLocationMarker className="text-xl text-white" />
                  </div>
                  <div className="data">{user?.location_default}</div>
                </li>
                <li>
                  <div className="flex w-8 h-8 rounded-full mr-2">
                    <FaLinkedin className="text-xl text-white" />
                  </div>
                  <div className="data">{user?.linkedin_url}</div>
                </li>
              </ul>
            </div>
            {Object.keys(user).length > 0 && (
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
            )}

            {/* ** SOCIAL ICONS */}
            {/* <div className="resume_item resume_social">
              <div className="title">
                <p className="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div className="">
                    <i className="fab fa-facebook-square"></i>
                  </div>
                  <div className="data">
                    <p className="semi-bold">Facebook</p>
                    <p>Stephen@facebook</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-twitter-square"></i>
                  </div>
                  <div className="data">
                    <p className="semi-bold">Twitter</p>
                    <p>Stephen@twitter</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-youtube"></i>
                  </div>
                  <div className="data">
                    <p className="semi-bold">Youtube</p>
                    <p>Stephen@youtube</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="data">
                    <p className="semi-bold">Linkedin</p>
                    <p>Stephen@linkedin</p>
                  </div>
                </li>
              </ul>
            </div> */}
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
            (key) => key.startsWith("experiences_") && key.endsWith("_title")
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
                    const startDateKey = key.replace(
                      "_title",
                      "_date_start_month"
                    );
                    const endDateKey = key.replace("_title", "_date_end_month");

                    const companyName = user[companyKey] || "Unknown Company";
                    const startDate = user[startDateKey] || "Start Date: N/A";
                    const endDate = user[endDateKey] || "End Date: N/A";
                    const title = user[key] || "Title: N/A";

                    const companyURL = user[companyKey + "_url"] || "";

                    return (
                      <li key={key}>
                        <h3>{title}</h3>
                        <p>
                          <strong>{companyName}</strong>
                        </p>
                        <p className="date">
                          {startDate} - {endDate}
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
              key.startsWith("education_") && key.endsWith("_school_name")
          ) ? (
            <div className="resume_item resume_education">
              <div className="title">
                <p className="bold">Education</p>
              </div>
              <ul>
                {Object.keys(user).map((key) => {
                  if (
                    key.startsWith("education_") &&
                    key.endsWith("_school_name")
                  ) {
                    const index = key.split("_")[1];
                    const startDateMonth =
                      user[`education_${index}_date_start_month`];
                    const startDateYear =
                      user[`education_${index}_date_start_year`];
                    const endDateMonth =
                      user[`education_${index}_date_end_month`];
                    const endDateYear =
                      user[`education_${index}_date_end_year`];
                    const schoolName = user[key] || "Unknown School";
                    const schoolURL = user[`education_${index}_school_url`];
                    const degreeName =
                      user[`education_${index}_degree_name`] || "Degree: N/A";
                    const fieldOfStudy =
                      user[`education_${index}_field_of_study`] || "";

                    return (
                      <li key={key}>
                        <h3>{schoolName}</h3>
                        <p>
                          {startDateMonth}/{startDateYear} - {endDateMonth}/
                          {endDateYear}
                        </p>
                        <p>
                          <strong>{degreeName}</strong>
                        </p>
                        <p>{fieldOfStudy}</p>
                        {schoolURL && (
                          <p>
                            <a href={schoolURL} target="_blank">
                              School Website
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
            (key) => key.startsWith("courses_") && key.endsWith("_name")
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
            (key) => key.startsWith("certifications_") && key.endsWith("_name")
          ) ? (
            <div className="resume_item resume_education">
              <div className="title">
                <p className="bold">Certifications</p>
              </div>
              <ul>
                {Object.keys(user).map((key) => {
                  if (key.startsWith("certifications_") && key.endsWith("_name")) {
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
        </div>
      </div>
    </>
  );
};

export default ClassicResume;
