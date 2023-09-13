"use client";
import Script from "next/script";
import React from "react";
import { FaLinkedin, FaLocationDot } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
const ClassicResume = ({ user }) => {
  const printResume = () => {
    console.log("wonlo");
    document.querySelector("#downloadBtn").style.display = "none";
    window.print();
    document.querySelector("#downloadBtn").style.display = "block";
  };
  console.log(user);
  //   const user = {
  //     linkedin_url: "https://www.linkedin.com/in/osama-abdelhadi/",
  //     profile_id: "osama-abdelhadi",
  //     first_name: "Osama",
  //     last_name: "Abdelhadi, ICAgile-ICP®, IASSC-CGB™, CSCA™",
  //     sub_title: "Co- Founder & CEO @ Mawsool",
  //     profile_picture:
  //       "https://media.licdn.com/dms/image/C5603AQH9yk9byc14XA/profile-displayphoto-shrink_800_800/0/1620715603809?e=1700092800&v=beta&t=tefxqDySQF9KFdyBlMszpHty7ZESX3rVYhaDJcIXAsU",
  //     background_image:
  //       "https://media.licdn.com/dms/image/D4D16AQHKUStzGTCOlw/profile-displaybackgroundimage-shrink_350_1400/0/1688486552189?e=1700092800&v=beta&t=rnVNYXvTwsq5fxdQjrlMehUAp_NtG4PG8fs8V31FvXM",
  //     profile_type: "personal",
  //     entity_urn: "ACoAADSVbFoBn3H6pL21OKxeFgqVFF2-FpIhpHQ",
  //     object_urn: 882207834,
  //     birth_date: null,
  //     summary:
  //       "A passionate entrepreneur with extensive expertise in diverse domains such as Big Data, AI, B2B Sales, Digital Marketing, R&D, and Process Innovation. My journey has been marked by a relentless pursuit of excellence, a commitment to continuous learning, and a dedication to transforming traditional systems and creating value.",
  //     location_country: "Jordan",
  //     location_short: "Amman",
  //     location_city: null,
  //     location_state: null,
  //     location_default: "Amman, Jordan",
  //     premium: false,
  //     influencer: false,
  //     languages_profile_languages_0_name: "Arabic",
  //     languages_profile_languages_0_proficiency: "NATIVE_OR_BILINGUAL",
  //     languages_profile_languages_1_name: "English",
  //     languages_profile_languages_1_proficiency: "PROFESSIONAL_WORKING",
  //     industry: "Computer Software",
  //     education_0_date_start_month: 12,
  //     education_0_date_start_day: null,
  //     education_0_date_start_year: 2017,
  //     education_0_date_end_month: 6,
  //     education_0_date_end_day: null,
  //     education_0_date_end_year: 2021,
  //     education_0_school_name: 'University of Petra "جامعة البترا"​',
  //     education_0_school_logo:
  //       "https://media.licdn.com/dms/image/C560BAQH_iufAxfwxMQ/company-logo_400_400/0/1646898433401?e=1702512000&v=beta&t=gvkHPGphal9PP1FoIQVMC6nWVLitj-bWzLIw_Vk123I",
  //     education_0_school_url:
  //       "https://www.linkedin.com/school/universityofpetra/",
  //     education_0_degree_name: "Bachelor's degree",
  //     education_0_field_of_study:
  //       "Business Administration and Management, General",
  //     patents_0_inventors_0_first_name: "Osama",
  //     patents_0_inventors_0_last_name:
  //       "Abdelhadi, ICAgile-ICP®, IASSC-CGB™, CSCA™",
  //     patents_0_inventors_0_headline: "Co- Founder & CEO @ Mawsool",
  //     patents_0_inventors_0_profile_picture:
  //       "https://media.licdn.com/dms/image/C5603AQH9yk9byc14XA/profile-displayphoto-shrink_800_800/0/1620715603809?e=1700092800&v=beta&t=tefxqDySQF9KFdyBlMszpHty7ZESX3rVYhaDJcIXAsU",
  //     patents_0_patent_number: null,
  //     patents_0_title: "WEIGHT LOSS, ENERGY, AND MOOD DIETARY SUPPLEMENT SYSTEM",
  //     patents_0_issuer: "63/380,297",
  //     patents_0_date: null,
  //     patents_0_application_number: null,
  //     certifications_0_name: "ICAgile Certified Professional (ICP)®",
  //     certifications_0_date_start_month: 8,
  //     certifications_0_date_start_day: null,
  //     certifications_0_date_start_year: 2022,
  //     certifications_0_date_end_month: null,
  //     certifications_0_date_end_day: null,
  //     certifications_0_date_end_year: null,
  //     certifications_0_authority: "ICAgile",
  //     certifications_0_url: null,
  //     certifications_0_license_number:
  //       "242-32611-f11c0139-a2be-4acd-84d8-5a69b9da4208",
  //     certifications_0_display_source: null,
  //     certifications_0_company_id: null,
  //     certifications_0_company_name: "ICAgile",
  //     certifications_0_company_logo:
  //       "https://media.licdn.com/dms/image/C4E0BAQFIpMBYCThKMQ/company-logo_400_400/0/1596209405253?e=1702512000&v=beta&t=qJUecx-yxh0MMFMIwGBDjI6hPrZDA0AurerpzicdIwk",
  //     certifications_0_company_url: null,
  //     certifications_1_name:
  //       "Service Ready™ (Building Customer Loyalty, Mastering Conversation Essentials, Navigating Challenging Situations)",
  //     certifications_1_date_start_month: 7,
  //     certifications_1_date_start_day: null,
  //     certifications_1_date_start_year: 2022,
  //     certifications_1_date_end_month: null,
  //     certifications_1_date_end_day: null,
  //     certifications_1_date_end_year: null,
  //     certifications_1_authority: "Korn Ferry",
  //     certifications_1_url: null,
  //     certifications_1_license_number: null,
  //     certifications_1_display_source: null,
  //     certifications_1_company_id: null,
  //     certifications_1_company_name: "Korn Ferry",
  //     certifications_1_company_logo:
  //       "https://media.licdn.com/dms/image/C560BAQHyoaC1FCZ0HQ/company-logo_400_400/0/1575384270508?e=1702512000&v=beta&t=BIjnGkgREdKgKEwSmTTWE_l1xBaBuQi_abbwJEEizJs",
  //     certifications_1_company_url: null,
  //     certifications_2_name:
  //       "Professional Selling Skills® (Conceptual Selling, Strategic Selling & Channel Partner Management)",
  //     certifications_2_date_start_month: 8,
  //     certifications_2_date_start_day: null,
  //     certifications_2_date_start_year: 2021,
  //     certifications_2_date_end_month: null,
  //     certifications_2_date_end_day: null,
  //     certifications_2_date_end_year: null,
  //     certifications_2_authority: "Miller Heiman Group",
  //     certifications_2_url: null,
  //     certifications_2_license_number: null,
  //     certifications_2_display_source: null,
  //     certifications_2_company_id: null,
  //     certifications_2_company_name: "Miller Heiman Group, A Korn Ferry Company",
  //     certifications_2_company_logo:
  //       "https://media.licdn.com/dms/image/C4E0BAQEvNUCRK09gxQ/company-logo_400_400/0/1620233370341?e=1702512000&v=beta&t=v0WOg2OLf07FitF6axTs3bXBvsp3kIWrKPZUBFBQlN8",
  //     certifications_2_company_url: null,
  //     certifications_3_name: "IASSC Certified Green Belt (ICGB)™",
  //     certifications_3_date_start_month: 5,
  //     certifications_3_date_start_day: null,
  //     certifications_3_date_start_year: 2021,
  //     certifications_3_date_end_month: 5,
  //     certifications_3_date_end_day: null,
  //     certifications_3_date_end_year: 2024,
  //     certifications_3_authority:
  //       "International Association for Six Sigma Certification",
  //     certifications_3_url: null,
  //     certifications_3_license_number: "G-8277",
  //     certifications_3_display_source: null,
  //     certifications_3_company_id: null,
  //     certifications_3_company_name:
  //       "International Association for Six Sigma Certification",
  //     certifications_3_company_logo:
  //       "https://media.licdn.com/dms/image/C4D0BAQFbkQOqI6eHZg/company-logo_400_400/0/1519952305586?e=1702512000&v=beta&t=Fwg_ROZiBPIpq6AU2JPZbsuYZA6v5O7TBJ5ghvEKjVs",
  //     certifications_3_company_url: null,
  //     certifications_4_name: "Certified Lean Six Sigma Green Belt ",
  //     certifications_4_date_start_month: 3,
  //     certifications_4_date_start_day: null,
  //     certifications_4_date_start_year: 2021,
  //     certifications_4_date_end_month: null,
  //     certifications_4_date_end_day: null,
  //     certifications_4_date_end_year: null,
  //     certifications_4_authority: "Anexas Europe",
  //     certifications_4_url: null,
  //     certifications_4_license_number: "PCGBUAE220221/287",
  //     certifications_4_display_source: null,
  //     certifications_4_company_id: null,
  //     certifications_4_company_name: "Anexas Europe",
  //     certifications_4_company_logo:
  //       "https://media.licdn.com/dms/image/C560BAQFnMhzVjjn3Ig/company-logo_400_400/0/1608137921155?e=1702512000&v=beta&t=MP9gKFoqdN0FDIObypjLeJGUwOAEdxTPTLQHX7E2A18",
  //     certifications_4_company_url: null,
  //     certifications_5_name: "Certified Lean Six Sigma Yellow Belt",
  //     certifications_5_date_start_month: 1,
  //     certifications_5_date_start_day: null,
  //     certifications_5_date_start_year: 2021,
  //     certifications_5_date_end_month: null,
  //     certifications_5_date_end_day: null,
  //     certifications_5_date_end_year: null,
  //     certifications_5_authority: "Anexas Europe",
  //     certifications_5_url: null,
  //     certifications_5_license_number: "YBDL010121/001/04",
  //     certifications_5_display_source: null,
  //     certifications_5_company_id: null,
  //     certifications_5_company_name: "Anexas Europe",
  //     certifications_5_company_logo:
  //       "https://media.licdn.com/dms/image/C560BAQFnMhzVjjn3Ig/company-logo_400_400/0/1608137921155?e=1702512000&v=beta&t=MP9gKFoqdN0FDIObypjLeJGUwOAEdxTPTLQHX7E2A18",
  //     certifications_5_company_url: null,
  //     certifications_6_name: "Certified Supply Chain Analyst (CSCA)™",
  //     certifications_6_date_start_month: 10,
  //     certifications_6_date_start_day: null,
  //     certifications_6_date_start_year: 2020,
  //     certifications_6_date_end_month: 10,
  //     certifications_6_date_end_day: null,
  //     certifications_6_date_end_year: 2023,
  //     certifications_6_authority:
  //       "ISCEA -International Supply Chain Education Alliance",
  //     certifications_6_url: null,
  //     certifications_6_license_number: "2010032012",
  //     certifications_6_display_source: null,
  //     certifications_6_company_id: null,
  //     certifications_6_company_name:
  //       "ISCEA -International Supply Chain Education Alliance",
  //     certifications_6_company_logo:
  //       "https://media.licdn.com/dms/image/C4E0BAQHdI6RyAI--6w/company-logo_400_400/0/1519907741317?e=1702512000&v=beta&t=s9xvKxhWMQ-eiRr9UpNU7kW4rbl4kT0tPDp2mve_6Aw",
  //     certifications_6_company_url: null,
  //     certifications_7_name:
  //       "Facebook Blueprint Digital Marketing Associate Certification",
  //     certifications_7_date_start_month: 12,
  //     certifications_7_date_start_day: null,
  //     certifications_7_date_start_year: 2019,
  //     certifications_7_date_end_month: null,
  //     certifications_7_date_end_day: null,
  //     certifications_7_date_end_year: null,
  //     certifications_7_authority: "Facebook",
  //     certifications_7_url: null,
  //     certifications_7_license_number: null,
  //     certifications_7_display_source: null,
  //     certifications_7_company_id: null,
  //     certifications_7_company_name: "Facebook",
  //     certifications_7_company_logo:
  //       "https://media.licdn.com/dms/image/C4E0BAQHi-wrXiQcbxw/company-logo_400_400/0/1635988509026?e=1702512000&v=beta&t=EbZJnH7j6hmZtuj6FKtXTFi-paOMMwZCV67Wvj4nKvg",
  //     certifications_7_company_url: null,
  //     certifications_8_name: "Google Ads Search Certification",
  //     certifications_8_date_start_month: 9,
  //     certifications_8_date_start_day: null,
  //     certifications_8_date_start_year: 2019,
  //     certifications_8_date_end_month: null,
  //     certifications_8_date_end_day: null,
  //     certifications_8_date_end_year: null,
  //     certifications_8_authority: "Google",
  //     certifications_8_url: null,
  //     certifications_8_license_number: null,
  //     certifications_8_display_source: null,
  //     certifications_8_company_id: null,
  //     certifications_8_company_name: "Google",
  //     certifications_8_company_logo:
  //       "https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_400_400/0/1519856215226?e=1702512000&v=beta&t=kpbp8yPF3pYO28SFOQ0nopt9izQaeibSbqM5GvIVKBE",
  //     certifications_8_company_url: null,
  //     organizations_0_name: "Makany Centre",
  //     organizations_0_position: null,
  //     organizations_0_date_start_month: 1,
  //     organizations_0_date_start_day: null,
  //     organizations_0_date_start_year: 2015,
  //     organizations_0_date_end: null,
  //     publications_0_name:
  //       "Impact of Lean Six Sigma on Companies’ Performance during the  COVID-19 Pandemic",
  //     publications_0_publisher:
  //       "International Journal of Six Sigma and Competitive Advantage. (Inderscience)",
  //     publications_0_url:
  //       "https://www.inderscience.com/info/ingeneral/forthcoming.php?jcode=ijssca",
  //     publications_0_date_month: null,
  //     publications_0_date_day: null,
  //     publications_0_date_year: null,
  //     publications_0_authors_0_type: "standardizedContributor",
  //     publications_0_authors_0_first_name: "Osama",
  //     publications_0_authors_0_last_name:
  //       "Abdelhadi, ICAgile-ICP®, IASSC-CGB™, CSCA™",
  //     publications_0_authors_0_name: null,
  //     publications_0_authors_0_headline: "Co- Founder & CEO @ Mawsool",
  //     courses_0_name: "Advanced Microsoft Excel",
  //     courses_0_number: null,
  //     courses_1_name: "Almohawer Diploma",
  //     courses_1_number: null,
  //     courses_2_name: "Body Language",
  //     courses_2_number: null,
  //     courses_3_name: "Driving Value Through Logistics Management",
  //     courses_3_number: null,
  //     courses_4_name: "E-Commerce from A to Z",
  //     courses_4_number: null,
  //     courses_5_name: "Lean Six Sigma Green Belt Project Completion",
  //     courses_5_number: null,
  //     courses_6_name: "LinkedIn & Labor Market",
  //     courses_6_number: null,
  //     courses_7_name: "Logistics Management",
  //     courses_7_number: null,
  //     courses_8_name: "Negotiation Management",
  //     courses_8_number: null,
  //     courses_9_name: "Preparing for the Job Market",
  //     courses_9_number: null,
  //     courses_10_name: "Presentation Skills",
  //     courses_10_number: null,
  //     courses_11_name:
  //       "Professional Empowerment Programs - Job Skills Workshop Series",
  //     courses_11_number: null,
  //     courses_12_name: "Project Management",
  //     courses_12_number: null,
  //     courses_13_name: "SAP for Supply Chain",
  //     courses_13_number: null,
  //     courses_14_name:
  //       "Skill Set for Supply Chain Professionals … A Road Map to Flourish",
  //     courses_14_number: null,
  //     courses_15_name: "Social Media is Not a Post",
  //     courses_15_number: null,
  //     courses_16_name: "WordPress Development",
  //     courses_16_number: null,
  //     experiences_0_company_id: 81831244,
  //     experiences_0_company_name: "Mawsool International ",
  //     experiences_0_company_logo:
  //       "https://media.licdn.com/dms/image/D4D0BAQHxvPD28jGoIQ/company-logo_400_400/0/1689270312433?e=1702512000&v=beta&t=JLtL37q8qHG9s0KzT7xtlp1P3stFaPAqngbQRjdFGAU",
  //     experiences_0_company_url:
  //       "https://www.linkedin.com/company/mawsool-%D9%85%D9%88%D8%B5%D9%88%D9%84/",
  //     experiences_0_company_employees_start: 2,
  //     experiences_0_company_employees_end: 10,
  //     experiences_0_date_start_month: 10,
  //     experiences_0_date_start_day: null,
  //     experiences_0_date_start_year: 2022,
  //     experiences_0_date_end_month: null,
  //     experiences_0_date_end_day: null,
  //     experiences_0_date_end_year: null,
  //     experiences_0_profile_positions_0_location: "United Arab Emirates",
  //     experiences_0_profile_positions_0_date_start_month: 10,
  //     experiences_0_profile_positions_0_date_start_day: null,
  //     experiences_0_profile_positions_0_date_start_year: 2022,
  //     experiences_0_profile_positions_0_date_end_month: null,
  //     experiences_0_profile_positions_0_date_end_day: null,
  //     experiences_0_profile_positions_0_date_end_year: null,
  //     experiences_0_profile_positions_0_company: "Mawsool International ",
  //     experiences_0_profile_positions_0_description: null,
  //     experiences_0_profile_positions_0_title: "Co- Founder & CEO",
  //     experiences_0_profile_positions_0_employment_type: "Full-time",
  //     experiences_1_company_id: 82616117,
  //     experiences_1_company_name: "Kaitamin",
  //     experiences_1_company_logo:
  //       "https://media.licdn.com/dms/image/C4E0BAQHKD1FCYADe4w/company-logo_400_400/0/1679924000730?e=1702512000&v=beta&t=5iUmB-YbSPtXiUaNkf4aid3IXBw55n9H4fVzVdSsGqk",
  //     experiences_1_company_url: "https://www.linkedin.com/company/kaitamin/",
  //     experiences_1_company_employees_start: 11,
  //     experiences_1_company_employees_end: 50,
  //     experiences_1_date_start_month: 8,
  //     experiences_1_date_start_day: null,
  //     experiences_1_date_start_year: 2021,
  //     experiences_1_date_end_month: null,
  //     experiences_1_date_end_day: null,
  //     experiences_1_date_end_year: null,
  //     experiences_1_profile_positions_0_location: "United States",
  //     experiences_1_profile_positions_0_date_start_month: 8,
  //     experiences_1_profile_positions_0_date_start_day: null,
  //     experiences_1_profile_positions_0_date_start_year: 2021,
  //     experiences_1_profile_positions_0_date_end_month: null,
  //     experiences_1_profile_positions_0_date_end_day: null,
  //     experiences_1_profile_positions_0_date_end_year: null,
  //     experiences_1_profile_positions_0_company: "Kaitamin",
  //     experiences_1_profile_positions_0_description: null,
  //     experiences_1_profile_positions_0_title: "Co-Founder",
  //     experiences_1_profile_positions_0_employment_type: null,
  //     experiences_1_profile_positions_1_location: "United States",
  //     experiences_1_profile_positions_1_date_start_month: 8,
  //     experiences_1_profile_positions_1_date_start_day: null,
  //     experiences_1_profile_positions_1_date_start_year: 2021,
  //     experiences_1_profile_positions_1_date_end_month: 12,
  //     experiences_1_profile_positions_1_date_end_day: null,
  //     experiences_1_profile_positions_1_date_end_year: 2022,
  //     experiences_1_profile_positions_1_company: "Kaitamin",
  //     experiences_1_profile_positions_1_description: null,
  //     experiences_1_profile_positions_1_title: "Business Manager",
  //     experiences_1_profile_positions_1_employment_type: "Full-time",
  //     experiences_2_company_id: 18348487,
  //     experiences_2_company_name: "Confidential",
  //     experiences_2_company_logo:
  //       "https://media.licdn.com/dms/image/C4D0BAQGhCgSRs7F8KQ/company-logo_400_400/0/1654586556964?e=1702512000&v=beta&t=JbwOFOe7rDTYdFGVCsTHOkewdxNjMgJmO8HNNq8nj_k",
  //     experiences_2_company_url: "https://www.linkedin.com/company/zexxx/",
  //     experiences_2_company_employees_start: 1001,
  //     experiences_2_company_employees_end: 5000,
  //     experiences_2_date_start_month: 11,
  //     experiences_2_date_start_day: null,
  //     experiences_2_date_start_year: 2019,
  //     experiences_2_date_end_month: null,
  //     experiences_2_date_end_day: null,
  //     experiences_2_date_end_year: null,
  //     experiences_2_profile_positions_0_location: null,
  //     experiences_2_profile_positions_0_date_start_month: 11,
  //     experiences_2_profile_positions_0_date_start_day: null,
  //     experiences_2_profile_positions_0_date_start_year: 2019,
  //     experiences_2_profile_positions_0_date_end_month: null,
  //     experiences_2_profile_positions_0_date_end_day: null,
  //     experiences_2_profile_positions_0_date_end_year: null,
  //     experiences_2_profile_positions_0_company: "Confidential",
  //     experiences_2_profile_positions_0_description: null,
  //     experiences_2_profile_positions_0_title: "Business Consultant",
  //     experiences_2_profile_positions_0_employment_type: "Freelance",
  //     experiences_3_company_id: 19145014,
  //     experiences_3_company_name: "KAIZMED",
  //     experiences_3_company_logo:
  //       "https://media.licdn.com/dms/image/C4E0BAQHNvWUNnyzeyA/company-logo_400_400/0/1649748021772?e=1702512000&v=beta&t=i8es8FbjjqU2OsYevjm8LTnHuqNrrOv07g8u2Qc5yBQ",
  //     experiences_3_company_url: "https://www.linkedin.com/company/kaizmed/",
  //     experiences_3_company_employees_start: 11,
  //     experiences_3_company_employees_end: 50,
  //     experiences_3_date_start_month: 7,
  //     experiences_3_date_start_day: null,
  //     experiences_3_date_start_year: 2021,
  //     experiences_3_date_end_month: 12,
  //     experiences_3_date_end_day: null,
  //     experiences_3_date_end_year: 2022,
  //     experiences_3_profile_positions_0_location: null,
  //     experiences_3_profile_positions_0_date_start_month: 7,
  //     experiences_3_profile_positions_0_date_start_day: null,
  //     experiences_3_profile_positions_0_date_start_year: 2021,
  //     experiences_3_profile_positions_0_date_end_month: 12,
  //     experiences_3_profile_positions_0_date_end_day: null,
  //     experiences_3_profile_positions_0_date_end_year: 2022,
  //     experiences_3_profile_positions_0_company: "Kaizmed",
  //     experiences_3_profile_positions_0_description: null,
  //     experiences_3_profile_positions_0_title: "Supply Chain Manager",
  //     experiences_3_profile_positions_0_employment_type: "Full-time",
  //     experiences_4_company_id: null,
  //     experiences_4_company_name: "Döner Kebab Restaurant ",
  //     experiences_4_company_logo: null,
  //     experiences_4_company_url: null,
  //     experiences_4_company_employees_start: null,
  //     experiences_4_company_employees_end: null,
  //     experiences_4_date_start_month: 1,
  //     experiences_4_date_start_day: null,
  //     experiences_4_date_start_year: 2016,
  //     experiences_4_date_end_month: 10,
  //     experiences_4_date_end_day: null,
  //     experiences_4_date_end_year: 2016,
  //     experiences_4_profile_positions_0_location: null,
  //     experiences_4_profile_positions_0_date_start_month: 1,
  //     experiences_4_profile_positions_0_date_start_day: null,
  //     experiences_4_profile_positions_0_date_start_year: 2016,
  //     experiences_4_profile_positions_0_date_end_month: 10,
  //     experiences_4_profile_positions_0_date_end_day: null,
  //     experiences_4_profile_positions_0_date_end_year: 2016,
  //     experiences_4_profile_positions_0_company: "Döner Kebab Restaurant ",
  //     experiences_4_profile_positions_0_description: null,
  //     experiences_4_profile_positions_0_title: "Supply Chain Officer",
  //     experiences_4_profile_positions_0_employment_type: "Full-time",
  //     skills_0: "Project Management",
  //     skills_1: "Research and Development (R&D)",
  //     skills_2: "Supply Chain Management",
  //     skills_3: "Lean Six Sigma",
  //     skills_4: "Agile Software Development",
  //     skills_5: "Miller Heiman Strategic Selling",
  //     skills_6: "Blue Sky Thinking",
  //     skills_7: "Big Data",
  //     skills_8: "Digital Marketing",
  //     skills_9: "Artificial Intelligence (AI)",
  //     skills_10: "Machine Learning",
  //     skills_11: "Data Science",
  //     skills_12: "Data Analytics",
  //     skills_13: "Application Programming Interfaces (API)",
  //     skills_14: "Software as a Service (SaaS)",
  //     skills_15: "Cross-functional Collaborations",
  //     skills_16: "Entrepreneurship",
  //     skills_17: "Business Management",
  //     skills_18: "Strategic Planning",
  //     skills_19: "Continuous Process Improvement",
  //     network_info_followable: true,
  //     network_info_followers_count: 2426,
  //     network_info_connections_count: 500,
  //     related_profiles_0_profile_id: "tasneem-haimur",
  //     related_profiles_0_first_name: "Tasneem",
  //     related_profiles_0_last_name: "Khalid",
  //     related_profiles_0_sub_title:
  //       "Segment Manager (Medical Devices Division), MBA. BME",
  //     related_profiles_0_profile_picture:
  //       "https://media.licdn.com/dms/image/D4D03AQHNM4gSP8SaiA/profile-displayphoto-shrink_800_800/0/1674456313050?e=1700092800&v=beta&t=kyqciOnczOt8gELZohA02hXa0tT18KllWeQCVsDIv6w",
  //     related_profiles_0_background_image: null,
  //     related_profiles_1_profile_id: "kareem-alnajjar-b958571a5",
  //     related_profiles_1_first_name: "Kareem",
  //     related_profiles_1_last_name: "Alnajjar",
  //     related_profiles_1_sub_title: " IOS Software Engineer @ TECHNZONE",
  //     related_profiles_1_profile_picture:
  //       "https://media.licdn.com/dms/image/C4D03AQFwwAmzIqh1eg/profile-displayphoto-shrink_800_800/0/1659017001008?e=1700092800&v=beta&t=2mPk7ZoAuInJnU5RJnPjU_4m3vAYhN9vBRsKImbbW14",
  //     related_profiles_1_background_image: null,
  //     related_profiles_2_profile_id: "seif-zammar-8a6268115",
  //     related_profiles_2_first_name: "Seif",
  //     related_profiles_2_last_name: "Zammar",
  //     related_profiles_2_sub_title:
  //       "Senior Digital Marketing Specialist / MSc Digital marketing",
  //     related_profiles_2_profile_picture:
  //       "https://media.licdn.com/dms/image/D4D35AQGoSkbOPAw1PA/profile-framedphoto-shrink_800_800/0/1681259155963?e=1695186000&v=beta&t=0sfxCloDQzLn2GWN7g7RZ24qIKxrDTEPeaEzW9iHasQ",
  //     related_profiles_2_background_image: null,
  //     related_profiles_3_profile_id: "mustafa-fardous-979329212",
  //     related_profiles_3_first_name: "Mustafa",
  //     related_profiles_3_last_name: "Fardous",
  //     related_profiles_3_sub_title: "Procurement & Supply Chain Officer",
  //     related_profiles_3_profile_picture:
  //       "https://media.licdn.com/dms/image/C4E03AQGoBey9oMrlcg/profile-displayphoto-shrink_800_800/0/1621238144544?e=1700092800&v=beta&t=zTZ51dTgC7vupoO2TlhMForEeprQAUj-Pa8gGBjddiQ",
  //     related_profiles_3_background_image: null,
  //     related_profiles_4_profile_id: "anas-m-jarrar",
  //     related_profiles_4_first_name: "Anas",
  //     related_profiles_4_last_name: "Jarrar",
  //     related_profiles_4_sub_title: "Fundraising Consultant | Venture Builder",
  //     related_profiles_4_profile_picture:
  //       "https://media.licdn.com/dms/image/D4D03AQFJZ0BY8K58_w/profile-displayphoto-shrink_800_800/0/1691327869811?e=1700092800&v=beta&t=ULAqOvJ43wd8HlIBuBjn4h5BVILakjhyGxQiguCK1ns",
  //     related_profiles_4_background_image: null,
  //     related_profiles_5_profile_id: "aseel-othman",
  //     related_profiles_5_first_name: "Aseel",
  //     related_profiles_5_last_name: "Othman",
  //     related_profiles_5_sub_title:
  //       "Account Manager- B2B Healthcare Sales Professional",
  //     related_profiles_5_profile_picture: null,
  //     related_profiles_5_background_image: null,
  //     related_profiles_6_profile_id: "merit-sammour",
  //     related_profiles_6_first_name: "Merit",
  //     related_profiles_6_last_name: "Sammour",
  //     related_profiles_6_sub_title:
  //       "Sales and Business Development Engineer at KAIZMED",
  //     related_profiles_6_profile_picture:
  //       "https://media.licdn.com/dms/image/C4D03AQGOlnE3TKk8bw/profile-displayphoto-shrink_800_800/0/1636834076117?e=1700092800&v=beta&t=4JGCV_hJP7u2y1Rm1iwku0w2X8qfzp31rm6ejcFIh5w",
  //     related_profiles_6_background_image: null,
  //     related_profiles_7_profile_id: "malik-yasin-kaizmed",
  //     related_profiles_7_first_name: "Oday",
  //     related_profiles_7_last_name: "Khalil Kaizmed",
  //     related_profiles_7_sub_title: "Account Executive",
  //     related_profiles_7_profile_picture:
  //       "https://media.licdn.com/dms/image/D4E03AQGKXXuSZQVdTQ/profile-displayphoto-shrink_800_800/0/1693138134062?e=1700092800&v=beta&t=GO3Eq_rZeiVzT8hSkbhb_cyIk2sBO2a8-WS2ZzhdFa4",
  //     related_profiles_7_background_image: null,
  //     related_profiles_8_profile_id: "mohdshaheen",
  //     related_profiles_8_first_name: "Mohammad",
  //     related_profiles_8_last_name: "Shaheen",
  //     related_profiles_8_sub_title: "Business Manager at Kaitamin",
  //     related_profiles_8_profile_picture:
  //       "https://media.licdn.com/dms/image/D4E03AQEujnhjp50xMg/profile-displayphoto-shrink_800_800/0/1673528499728?e=1700092800&v=beta&t=QSxTIF117wRYhzE1Xy5w4bv5nljJdfr8wrf7CYWXgiY",
  //     related_profiles_8_background_image: null,
  //     related_profiles_9_profile_id: "ahmad-alhusaini-cips-l4-student-23a650219",
  //     related_profiles_9_first_name: "Ahmad",
  //     related_profiles_9_last_name: "Alhusaini, CIPS L4 Student",
  //     related_profiles_9_sub_title:
  //       "Procurement Officer - CIPS diploma student - Civil Engineer",
  //     related_profiles_9_profile_picture:
  //       "https://media.licdn.com/dms/image/D4D03AQHCc8UpDOWnlA/profile-displayphoto-shrink_800_800/0/1688636924997?e=1700092800&v=beta&t=h96rputVYIYGT0EPOQYPPQ9S5Dmw_SMfnOjr_AmzmXI",
  //     related_profiles_9_background_image: null,
  //     contact_info_email: null,
  //     contact_info_twitter: null,
  //   };
  return (
    <>
      <div className="resume relative">
        <button
          onClick={printResume}
          type="button"
          className="absolute right-4 top-4"
          id="downloadBtn"
        >
          Download Resume
        </button>
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
        </div>
      </div>
    </>
  );
};

export default ClassicResume;
