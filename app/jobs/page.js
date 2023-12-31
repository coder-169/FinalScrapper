'use client'
import Credit from '@/components/Credit'
import JobCard from '@/components/JobCard'
import Loader from '@/components/Loader'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Page = () => {
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const getAllJobs = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/jobs', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const data = await res.json()
            if (data.success)
                setJobs(data.jobs)

            else
                alert(data.message)
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        getAllJobs()
    }, [])
    return (
        <div className="w-11/12 sm:w-3/4 mx-auto mb-8">
            <title>

                AI LinkedIn CV Generator | Jobs
            </title>
            <div className="mx-0 sm:mx-auto w-max">

                <Link href={'/'}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo.jpeg" alt="" className="w-48 sm:w-[200px] md:w-[280px] lg:w-[400px]" />
                </Link>
            </div>

            <div className="flex justify-between mb-8 items-center">
                <Link href={'/'} className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                    AI LinkedIn Profile Grapper
                </Link>
            </div>
            <div className="rounded-lg shadow-lg p-8">
                <h2 className="text-xl font-bold">My Jobs</h2><span className="text-blue-500">your recent</span>
            </div>
            {loading ? <Loader text={'Searching for your jobs'} /> : <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Your Recent Queries</h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">download in any format.</p>
                    </div>
                    <div className="flex flex-wrap -m-4 items-start justify-start">
                        {jobs && jobs.length <= 0 ? <h2>No Jobs Found</h2> : jobs?.map(j => {
                            return <JobCard key={j.id} id={j.id} />
                        })}
                    </div>
                </div>
            </section>}
        </div>
    )
}

export default Page
