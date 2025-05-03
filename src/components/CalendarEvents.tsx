'use client'

import { useEffect, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
}

export default function CalendarEvents() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/calendar');
        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setEvents(data.events || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (event: CalendarEvent) => {
    // checking to see there is a date. If not we grap the day.
    const startDate = event.start.dateTime ? new Date(event.start.dateTime) : new Date(event.start.date!);
    const endDate = event.end.dateTime ? new Date(event.end.dateTime) : new Date(event.end.date!);

    const startDay = startDate.toLocaleDateString('en-US', { weekday: 'short' });
    const endDay = endDate.toLocaleDateString('en-US', { weekday: 'short' });

    if (event.start.dateTime && event.end.dateTime) {
      // Has specific time
      return (
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>
            {startDate.toLocaleDateString()} at {startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      );
    } else {
      // All-day event
      return (
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>
            {startDay} {startDate.getDate()} - {endDay} {endDate.getDate()}
          </span>
        </div>
      );
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg inline-block">
          {error}
        </div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="bg-gray-50 text-gray-600 p-4 rounded-lg inline-block">
          No upcoming events scheduled
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                {event.summary}
              </h3>
              {event.description && (
                <p className="text-gray-600 mb-4">{event.description}</p>
              )}
              {formatDate(event)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 