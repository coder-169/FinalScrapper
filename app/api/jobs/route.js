import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const res = await fetch('https://botster.io/api/v2/jobs', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + process.env.BEARER_TOKEN,
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        console.log(data)
        return NextResponse.json({
            message: "jobs found successfully!",
            success: true,
            jobs:data.jobs
        }, {
            status: 200
        })


    } catch (e) {
        return NextResponse.json(
            { success: true, message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}