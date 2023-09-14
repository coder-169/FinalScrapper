import Job from "@/models/Job";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req, res) {
    try {
        await dbConnect()

        
        const jobs = await Job.find({ token: process.env.BEARER_TOKEN })
        console.log(jobs)
        return NextResponse.json({
            message: "jobs found successfully!",
            success: true,
            jobs
        }, {
            status: 200
        })

    } catch (e) {
        return NextResponse.json(
            { success: false, message: e.message },
            { status: 500 }
        )
    }
}