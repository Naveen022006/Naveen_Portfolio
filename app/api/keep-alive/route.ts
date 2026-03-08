import { NextResponse } from 'next/server';

export async function GET() {
    // This endpoint can be hit by a cron service like cron-job.org every 10-15 minutes
    // It simply returns a 200 OK to keep the Vercel serverless function warm.
    return NextResponse.json({
        status: 'ok',
        message: 'Portfolio is awake!',
        timestamp: new Date().toISOString()
    });
}
