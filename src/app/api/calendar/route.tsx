import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Initialize the Google Calendar API client with service account
const calendar = google.calendar({
  version: 'v3',
  auth: new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
  }),
});

export async function GET() {
  try {
    // Get events from the calendar
    const response = await calendar.events.list({
      calendarId: 'judith.brown81@gmail.com',
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = response.data.items;
    return NextResponse.json({ events });
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch calendar events', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 