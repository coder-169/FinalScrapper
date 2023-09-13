'use client'
import Loader from '@/components/Loader'
import ClassicResume from '@/components/Resume'
import React, { useEffect, useState } from 'react'

const Page = ({ params }) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const id = params.id
    console.log(id)
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
            console.log(d)
            setUsers(d.data)
            console.log(d.job)
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    };
    useEffect(() => {
        getJobDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (

        loading ? <Loader text={'please wait we are preparing your resume'} /> : users &&
            <div>
                {users.map(user => {
                    return <ClassicResume key={user.profile_id} user={user} />
                })}
                {/* {users.map((user, index) => (
                    <div key={index}>
                        <PDFDownloadLink document={<Resume user={user} />} fileName={`resume-${index + 1}.pdf`}>
                            {({ blob, url, loading, error }) =>
                                loading ? 'Loading document...' : 'Download now!'
                            }
                        </PDFDownloadLink>
                    </div>
                ))} */}


            </div>

    )
}

export default Page