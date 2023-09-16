'use client'
import Loader from "@/components/Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [position_groups, setPosition_groups] = useState("1")

  const [job, setJob] = useState({
    jobName: "",
    input: "",
    award_: "off",
    skills_: "off",
    courses_: "off",
    patents_: "off",
    projects_: "off",
    education_: "off",
    contact_info_: "off",
    publications_: "off",
    certifications_: "off",
    recommendations_: "off",
    languages_profile_: "off",
    volunteer_experiences_: "off"
  })
  const [timer, setTimer] = useState(45)
  // create JOB
  const createJob = async (e) => {
    e.preventDefault()

    if (job.input === '') return alert('Please fill links')
    let arr = job.input.split('\n')
    // return
    setLoading(true)


    let scrape_options = []
    for (const key in job) {
      if (job.hasOwnProperty(key)) { // Check if the property belongs to the object, not its prototype chain
        if (job[key] === 'on')
          scrape_options.push(key.toString())
      }
    }
    try {
      const res = await fetch('/api/job', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: job.jobName, input: arr, scrape_options, position_groups: parseInt(position_groups) })
      })
      const d = await res.json()
      if (d.success) {
        router.push('/jobs')
        setLoading(false)
      }
    } catch (error) {
      alert(error.message)
      setLoading(false)
    }

  }
  const changeHandler = (e) => {
    // return setJob({ ...job, [e.target.name]: 'off' })
    if (job[e.target.name] === 'on') {
      setJob({ ...job, [e.target.name]: 'off' })
    } else {
      setJob({ ...job, [e.target.name]: e.target.value })
    }
  }
  const resetValues = () => {
    setJob({
      jobName: "",
      input: "",
      award_: "",
      skills_: "",
      courses_: "",
      patents_: "",
      projects_: "",
      education_: "",
      contact_info_: "",
      publications_: "",
      certifications_: "",
      recommendations_: "",
      languages_profile_: "",
      volunteer_experiences_: ""
    })
    setPosition_groups("")

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
      // console.log(d)
      if (d.success) {
        setCredits(d.credits)
      }
    } catch (error) {
      alert(error.message)
    }

  }
  const handleOptionChange = (e) => {
    setPosition_groups(e.target.id);
  };
  const checkAll = () => {
    const updatedJob = {};
    for (const key in job) {
      if (key === 'jobName' || key === 'input' || key === 'position_groups') {
        updatedJob[key] = job[key];
      }
      else {
        updatedJob[key] = 'on';
      }
      continue
    }
    // console.log(updatedJob)
    setJob(updatedJob);
  };
  useEffect(() => {
    getCredits()
  }, [job])
  return (
    <main className="w-11/12 sm:w-3/4 mx-auto mb-8">
      <title>AI LinkedIn CV Generator</title>
      {/* <img src="/fav.jpeg" alt="" className="fixed top-40 left-16 w-16 h-" /> */}
      <div className="mx-0 sm:mx-auto w-max">

        <Link href={'/'}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpeg" alt="" className="w-48 sm:w-[200px] md:w-[280px] lg:w-[400px]" />
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-2 justify-between mb-8 sm:items-center">
        <Link href={'/'} className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
          AI LinkedIn Profile Grapper
        </Link>
        <Link href={'/jobs'} className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Your Jobs
        </Link>
      </div>
      <div className="rounded-lg shadow-lg p-8">
        <h2 className="text-xl font-bold">Start bot: AI LinkedIn CV Generator</h2>
        {/* <a className="text-blue-500" href="#">Return to the bot information</a> */}
      </div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap -m-4 justify-between ">
            <div className="lg:w-2/3 w-full flex flex-shrink flex-col items-start">
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
                    </div>
                  </div>
                </div>
                <div className="space-y-4 my-4 shadow-lg rounded-lg p-4">
                  <h2 htmlFor="about" className="text-base font-semibold leading-7 text-gray-900">   Jobs (Experiences)</h2>
                  <div className="flex items-center gap-x-3">
                    <input id="1" name="position_groups" type="radio" checked={position_groups === '1'}
                      onChange={handleOptionChange} className="form-radio h-4 w-4 text-red-600 transition duration-500 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-red focus:shadow-lg" />
                    <label htmlFor="1" className="block text-sm font-medium leading-6 text-gray-500">Most recent only</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input id="5" name="position_groups" checked={position_groups === '5'}
                      onChange={handleOptionChange} type="radio" className="form-radio h-4 w-4 text-red-600 transition duration-500 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-red focus:shadow-lg" />
                    <label htmlFor="5" className="block text-sm font-medium leading-6 text-gray-500">Five recent experiences</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input id="15" name="position_groups" checked={position_groups === '15'}
                      onChange={handleOptionChange} type="radio" className="form-radio h-4 w-4 text-red-600 transition duration-500 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-red focus:shadow-lg" />
                    <label htmlFor="15" className="block text-sm font-medium leading-6 text-gray-500">Up to 10 recent experiences</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input id="20" name="position_groups" checked={position_groups === '20'}
                      onChange={handleOptionChange} type="radio" className="form-radio h-4 w-4 text-red-600 transition duration-500 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-red focus:shadow-lg" />
                    <label htmlFor="20" className="block text-sm font-medium leading-6 text-gray-500">Up to 20 recent experiences</label>
                  </div>
                </div>
                <div className="space-y-4 my-4 shadow-lg rounded-lg p-4">
                  <div className="mb-4">
                    <h2 htmlFor="about" className="text-base font-semibold leading-7 text-gray-900">Custom Options</h2>
                  </div>
                  <label htmlFor="about" className="text-base font-semibold leading-7 text-gray-900">  Extract data</label>
                  <button type="button" onClick={checkAll} className="ml-4 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Check all</button>
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
            <div className="bg-white border-2 border-gray-300 border-opacity-60 p-4 h-max shadow-lg md:ml-4 rounded-lg lg:w-[33%] mt-8 sm:m-0 w-full flex flex-col items-start">

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
                    {credits}.00
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
