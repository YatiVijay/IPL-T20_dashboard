'use client';

import React, { useEffect, useState } from 'react';

interface MatchScheduleData {
  team1: string;
  team2: string;
  time: string;
  venue: string;
}

const Schedule = () => {
  const [schedule, setSchedule] = useState<MatchScheduleData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSchedule = async () => {
      const res = await fetch('/api/schedule');
      const json = await res.json();
      setSchedule(json);
      setLoading(false);
    };

    getSchedule();
  }, []);

  if (loading) return <p className="text-center text-xl mt-4">Loading schedule...</p>;

  return (
    <div className="p-4">
      <div className="card">
        <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">Match Schedule</h2>
        {schedule && schedule.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-2 text-left border">Match</th>
                  <th className="px-4 py-2 text-left border">Time</th>
                  <th className="px-4 py-2 text-left border">Venue</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((match, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border font-medium">
                      {match.team1} vs {match.team2}
                    </td>
                    <td className="px-4 py-2 border text-sm text-gray-700">
                      {new Date(match.time).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 border text-sm text-gray-700">{match.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-lg text-red-500">No schedule data available</p>
        )}
      </div>
    </div>
  );
};

export default Schedule;
