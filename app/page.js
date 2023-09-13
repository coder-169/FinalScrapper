'use client'
import Loader from "@/components/Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [job, setJob] = useState({
    jobName: "",
    jobProject: "",
    input: "",
    award_: "",
    skills_: "",
    courses_: "",
    patents_: "",
    projects_: "",
    education_: "",
    contact_info_: "",
    network_info_: "",
    publications_: "",
    certifications_: "",
    treasury_media_: "",
    recommendations_: "",
    related_profiles_: "",
    languages_profile_: "",
    volunteer_experiences_: "", position_groups: ""
  })
  const [timer, setTimer] = useState(45)
  // create JOB
  const createJob = async (e) => {
    e.preventDefault()

    if (job.input === '') return alert('Please fill links')
    let arr = job.input.split('\n')
    console.log(arr)
    // return
    setLoading(true)


    let scrape_options = []
    for (const key in job) {
      if (job.hasOwnProperty(key)) { // Check if the property belongs to the object, not its prototype chain
        console.log()
        if (job[key] === 'on')
          scrape_options.push(key.toString())
        // console.log(`${key}: ${myObject[key]}`);
      }
    }
    try {
      const res = await fetch('/api/job', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: job.jobName || "No Name", input: arr, scrape_options, position_groups:20 })
      })
      const d = await res.json()
      console.log(d)
      if (d.success) {

        // if (!d.job.finished) {
        //   console.log('not finished')
        //   setTimeout(() => {
        //     router.push('/jobs')
        //     setLoading(false)
        //   }, 45000);
        // }
        // else {
          router.push('/jobs')
          setLoading(false)
        // }
      }
    } catch (error) {
      alert(error.message)
      setLoading(false)
    }

  }
  const changeHandler = (e) => {
    // return setJob({ ...job, [e.target.name]: 'off' })
    setJob({ ...job, [e.target.name]: e.target.value })
  }
  const resetValues = () => {
    setJob({
      jobName,
      jobProject: "",
      input: "",
      award_: "",
      skills_: "",
      courses_: "",
      patents_: "",
      projects_: "",
      education_: "",
      contact_info_: "",
      network_info_: "",
      publications_: "",
      certifications_: "",
      treasury_media_: "",
      recommendations_: "",
      related_profiles_: "",
      languages_profile_: "",
      volunteer_experiences_: "", position_groups: 20
    })

  }
  const [credits, setCredits] = useState(0)
  const getCredits = async () => {
    try {
      const res = await fetch('/api/credits', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const d = await res.json()
      console.log(d)
      if (d.success) {
        setCredits(d.credits)
      }
    } catch (error) {
      alert(error.message)
    }

  }
  useEffect(() => {
    getCredits()
    // if (loading) {
    //   const countdown = setInterval(() => {
    //     // Decrement the timer by 1 second
    //     if (timer >= 1) {
    //       setTimer((prevTimer) => prevTimer - 1);
    //     }
    //   }, 1000); // Update every 1000 milliseconds (1 second)

      // Clean up the interval when the component unmounts
      // return () => clearInterval(countdown);
    // }
  }, [])
  return (
    <main className="w-11/12 sm:w-3/4 mx-auto my-8">
      <div className="flex justify-between">

        <Link href={'/'}>
          <h3 className="text-sm text-gray-800 my-2">Linked In Profile Scrapper</h3>
        </Link>
        <Link href={'/jobs'}>
          <h3 className="text-sm text-gray-800 my-2">Your Jobs</h3>
        </Link>
      </div>
      <div className="rounded-lg shadow-lg p-8">
        <h2 className="text-xl font-bold">Start bot: LinkedIn Profile Extractor</h2>
        {/* <a className="text-blue-500" href="#">Return to the bot information</a> */}
      </div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="md:w-2/3 flex flex-col items-start">
              {loading ? <Loader text={`please wait`} /> : <form onSubmit={createJob} className="w-full">
                <div className="space-y-12 shadow-lg rounded-lg p-4">
                  <div className="pb-8">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="col-span-full">
                        <label htmlFor="jobName" className="text-base font-semibold leading-7 text-gray-900">Name your job (optional)</label>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Give your job a meaningful title, or leave empty.</p>
                        <div className="mt-2">
                          <input id="jobName" name="jobName" value={job.jobName} onChange={changeHandler} className="block w-full px-4 py-3 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:z-10 text-sm leading-5 border border-gray-400 transition duration-500 ease-in-out transform hover:bg-green-500/10 hover:shadow-lg focus:scale-100 focus:bg-green-500/10 focus:shadow-lg focus:text-green-400 focus:font-semibold hover:border-green-700 focus:border-2 focus:border-green-700" />
                        </div>
                      </div>
                      <div className="col-span-full">
                        <label htmlFor="jobProject" className="text-base font-semibold leading-7 text-gray-900">Create a project folder (optional)</label>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Add this job to one of your projects..</p>
                        <div className="mt-2">
                          <input id="jobProject" name="jobProject" value={job.jobProject} onChange={changeHandler} className="block w-full px-4 py-3 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:z-10 text-sm leading-5 border border-gray-400 transition duration-500 ease-in-out transform hover:scale-102 hover:bg-green-500/10 hover:shadow-lg focus:scale-100 focus:bg-green-500/10 focus:shadow-lg focus:text-green-400 focus:font-semibold hover:border-green-700 focus:border-2 focus:border-green-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 my-4 shadow-lg rounded-lg p-4">
                  <h2 htmlFor="about" className="text-base font-semibold leading-7 text-gray-900">   Jobs (Experiences)</h2>
                  <div className="flex items-center gap-x-3">
                    <input id="p_0" name="push-notifications" type="radio" className="form-radio h-4 w-4 text-red-600 transition duration-500 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-red focus:shadow-lg" />
                    <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-500">Most recent only</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input id="position_groups" name="position_groups" type="radio" className="form-radio h-4 w-4 text-red-600 transition duration-500 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-red focus:shadow-lg" />
                    <label htmlFor="position_groups" className="block text-sm font-medium leading-6 text-gray-500">Five recent experiences</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input id="push-email" name="push-notifications" type="radio" className="form-radio h-4 w-4 text-red-600 transition duration-500 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-red focus:shadow-lg" />
                    <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-500">Up to 10 recent experiences</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input id="push-email" name="push-notifications" type="radio" className="form-radio h-4 w-4 text-red-600 transition duration-500 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-red focus:shadow-lg" />
                    <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-500">Up to 20 recent experiences</label>
                  </div>
                </div>
                <div className="space-y-4 my-4 shadow-lg rounded-lg p-4">
                  <div className="mb-4">
                    <h2 htmlFor="about" className="text-base font-semibold leading-7 text-gray-900">Custom Options</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Give your job a meaningful title, or leave empty.</p>
                  </div>
                  <label htmlFor="about" className="text-base font-semibold leading-7 text-gray-900">  Extract data</label>

                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input id="award_" name="award_" type="checkbox"
                        checked={job.award_ === 'on'} onChange={changeHandler}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="award_" className="font-medium text-gray-900 text-xs">Award</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input id="skills_" name="skills_" type="checkbox"
                        checked={job.skills_ === 'on'} onChange={changeHandler}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="skills_" className="font-medium text-gray-900 text-xs">Skills</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input id="courses_" name="courses_" type="checkbox"
                        checked={job.courses_ === 'on'} onChange={changeHandler}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="courses_" className="font-medium text-gray-900 text-xs">Courses</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input id="patents_" name="patents_" type="checkbox"
                        checked={job.patents_ === 'on'} onChange={changeHandler}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="patents_" className="font-medium text-gray-900 text-xs">Patents</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input id="projects_" name="projects_" type="checkbox"
                        checked={job.projects_ === 'on'} onChange={changeHandler}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="projects_" className="font-medium text-gray-900 text-xs">Projects</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input id="education_" name="education_" type="checkbox"
                        checked={job.education_ === 'on'} onChange={changeHandler}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="education_" className="font-medium text-gray-900 text-xs">Education</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input id="contact_info_" name="contact_info_" type="checkbox"
                        checked={job.contact_info_ === 'on'} onChange={changeHandler}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="contact_info_" className="font-medium text-gray-900 text-xs">Contact Info</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input id="network_info_" name="network_info_" type="checkbox"
                        checked={job.network_info_ === 'on'} onChange={changeHandler}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="network_info_" className="font-medium text-gray-900 text-xs">Network Info</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input id="publications_" name="publications_" type="checkbox"
                        checked={job.publications_ === 'on'} onChange={changeHandler}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="publications_" className="font-medium text-gray-900 text-xs">Publications</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input id="certifications_" name="certifications_" type="checkbox"
                        checked={job.certifications_ === 'on'} onChange={changeHandler}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="certifications_" className="font-medium text-gray-900 text-xs">Certifications</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input id="treasury_media_" name="treasury_media_" type="checkbox"
                        checked={job.treasury_media_ === 'on'} onChange={changeHandler}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="treasury_media_" className="font-medium text-gray-900 text-xs">Treasury Media</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input id="recommendations_" name="recommendations_" type="checkbox"
                        checked={job.recommendations_ === 'on'} onChange={changeHandler}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="recommendations_" className="font-medium text-gray-900 text-xs">Recommendations</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input id="related_profiles_" name="related_profiles_" type="checkbox"
                        checked={job.related_profiles_ === 'on'} onChange={changeHandler}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="related_profiles_" className="font-medium text-gray-900 text-xs">Related Profiles</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input id="languages_profile_" name="languages_profile_" type="checkbox"
                        checked={job.languages_profile_ === 'on'} onChange={changeHandler}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="languages_profile_" className="font-medium text-gray-900 text-xs">Languages</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input id="volunteer_experiences_" name="volunteer_experiences_" type="checkbox"
                        checked={job.volunteer_experiences_ === 'on'} onChange={changeHandler}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="volunteer_experiences_" className="font-medium text-gray-900 text-xs">Volunteer Experiences</label>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 text-sm bg-red-100 border-red-600 p-2">
                  <p className="text-red-400 font-normal">
                    The usage of this bot is limited for free accounts. You are able to input a maximum of <span className="font-bold">2 queries</span>. Keep that in mind when selecting your options. To remove the limits consider <span className="text-blue-400">buying credits</span>
                    &nbsp;or&nbsp;
                    <span className="text-blue-400">
                      subscribing
                    </span>.
                    &nbsp;
                  </p>
                  <p className="mt-2">
                    <span className="text-blue-400">
                      Why this limit?
                    </span>.
                  </p>
                </div>
                <div className="space-y-4 my-4 shadow-lg rounded-lg p-4">
                  <div className="mb-4">
                    <h2 htmlFor="input" className="text-base font-semibold leading-7 text-gray-900">Links to profiles</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">*Each link must go on a new line!.</p>
                  </div>
                  <div className="col-span-full">
                    <div className="mt-2">
                      <textarea id="input" value={job.input} onChange={changeHandler} name="input" rows="3" className="block w-full px-4 py-3 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:z-10 text-sm leading-5 border border-gray-400 transition duration-500 ease-in-out transform  hover:bg-green-500/10 hover:shadow-lg focus:scale-100 focus:bg-green-500/10 focus:shadow-lg focus:text-green-400 focus:font-semibold hover:border-green-700 focus:border-2 focus:border-green-700" ></textarea>
                    </div>
                  </div>
                  <small className="text-red-500 text-sm">The value is required</small>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button type="button" onClick={resetValues} className="rounded-md border-2 border-green-500 px-3 py-2 text-sm font-semibold text-green-500 hover:text-white shadow-sm transition-all duration-200 hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Reset</button>
                  <button type="submit" className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Search</button>
                </div>
              </form>}
            </div>
            <div className="bg-white p-4 h-max shadow-lg ml-9 rounded-lg md:w-[30%] flex flex-col items-start">

              <div className=" w-full lg:py-6 mb-6 lg:mb-0">
                <div className="flex mb-4">
                  <a className="flex-grow text-green-500 border-b-2 border-green-500 py-2 text-lg px-1">
                    Credit History
                  </a>
                </div>
                <div className="flex py-2">
                  <span className="text-gray-500">Your balance</span>
                  <span className="ml-auto text-gray-900">{credits}</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Base price</span>
                  <span className="ml-auto text-gray-900">
                    0 credits total
                    <br />
                    <small className="text-xs -mt-2">50 credits per line</small>
                  </span>
                </div>
                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span className="text-gray-500">Options</span>
                  <span className="ml-auto text-gray-900">0 credits</span>
                </div>
                <div className="flex">
                  <h3 className="flex mr-auto text-green-500 border-0 py-2 p rounded">
                    Total credits
                  </h3>
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${credits}.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
