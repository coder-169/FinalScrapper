import Job from "@/models/Job";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        await dbConnect()
        const jobs = await Job.find()
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
            { success: true, message: e.message},
            { status: 500 }
        )
    }
}