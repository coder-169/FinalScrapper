'use client'
import Loader from '@/components/Loader'
import ClassicResume from '@/components/Resume'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const Page = ({ params }) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const id = params.id
    const getJobDetails = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/job`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    id,
                },
            });
            const d = await res.json();
            setUsers(d.data)
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    };
    const printResume = () => {
        const elem = document.querySelector(".buttons")
        // elem.classList.remove('!flex')
        // elem.classList.add('hidden') 
        elem.style.display = "none";
        window.print();
        elem.style.display = "block";
        // document.querySelector(".goBtn").style.display = "block";
    };
    useEffect(() => {
        getJobDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (

        loading ? <Loader text={'please wait we are preparing your resume'} /> : users &&
            <div className="">
                <div className="buttons">

                    <div className="my-4 mx-8">
                        <Link
                            href={`/jobs`}
                            className="goBtn !flex gap-2 items-center hover:opacity-60 font-bold"
                        >
                            <FaArrowLeft />
                            Go Back
                        </Link>
                    </div>
                    <div className="my-4 mx-8">
                        <button
                            onClick={printResume}
                            type="button"
                            className="hover:opacity-60 font-bold"
                            id="downloadBtn"
                        >
                            Download Resume
                        </button>
                    </div>
                </div>
                {users.map(user => {
                    return <ClassicResume key={user.profile_id} user={user} />
                })}
            </div>

    )
}

export default Page