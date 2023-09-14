import { connectToDatabase } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('jobs',);
        const jobs = await collection.find({token:process.env.BEARER_TOKEN}).toArray();
        return NextResponse.json({
            message: "jobs found successfully!",
            success: true,
            jobs
        }, {
            status: 200
        })

    } catch (e) {
        console.log(e.message)
        return NextResponse.json(
            { success: false, message: e.message },
            { status: 500 }
        )
    }
}