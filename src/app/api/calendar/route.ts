import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Initialize the Google Calendar API client
const calendar = google.calendar({
  version: 'v3',
  auth: process.env.GOOGLE_API_KEY // You'll need to add this to your .env file
});

export async function GET() {
  try {
    // Get events from the calendar
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = response.data.items;
    return NextResponse.json({ events });
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return NextResponse.json({ error: 'Failed to fetch calendar events' }, { status: 500 });
  }
} 