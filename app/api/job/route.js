import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Job from "@/models/Job";
import dbConnect from "@/utils/db";


export async function POST(req, res) {
    try {
        const body = await req.json();
        const res = await fetch('https://botster.io/api/v2/bots/linkedin-profile-scraper', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.BEARER_TOKEN,
            },
            body: JSON.stringify(body)
        })
        const data = await res.json()
        await dbConnect()
        const job = await Job.create(data.job)
        console.log(job)
        return NextResponse.json({
            message: "job created successfully!",
            job: data.job,
            success: true,
        }, {
            status: 200
        })


    } catch (e) {
        return NextResponse.json(
            { success: true, message: e.message },
            { status: 500 }
        )
    }
}
export async function GET(req, res) {
    try {
        const headersList = headers();
        const id = headersList.get('id');
        const data = headersList.get('data');
        const res = await fetch(`https://botster.io/api/v2/jobs/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.BEARER_TOKEN,
            },
        })
        const d = await res.json()
        if (data)
            return NextResponse.json({
                message: "job found successfully!",
                job:d.job,
                success: true,
            }, {
                status: 200
            })
        // console.log(data)
        const resp = await fetch(d.job.runs[0].url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.BEARER_TOKEN,
            },
        })
        const dt = await resp.json()
        return NextResponse.json({
            message: "job found successfully!",
            data:dt,
            success: true,
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