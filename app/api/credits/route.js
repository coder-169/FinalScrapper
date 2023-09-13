import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const res = await fetch('https://botster.io/api/v2/credits', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + process.env.BEARER_TOKEN,
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        console.log(data)
        return NextResponse.json({
            message: "credits are here!",
            success: true,
            credits:data.credits
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