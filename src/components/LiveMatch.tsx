'use client';

import React, { useEffect, useState } from 'react';

interface Match {
  team1: string;
  team2: string;
  time: string;
  venue: string;
}

interface LiveMatchData {
  liveMatch: {
    team1: string;
    team2: string;
    status: string;
    venue: string;
  };
  upcomingMatches: Match[];
}

const LiveMatch = () => {
  const [data, setData] = useState<LiveMatchData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/matches');
      const json = await res.json();
      setData(json);
      setLoading(false);
    };

    getData();
    const interval = setInterval(getData, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p className="text-center text-xl mt-4">Loading live match...</p>;

  const { liveMatch, upcomingMatches } = data as LiveMatchData;

  return (
    <div className="p-4">
      <div className="card">
        <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">Live Match</h2>

        {liveMatch ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-2 border text-left">Match</th>
                  <th className="px-4 py-2 border text-left">Status</th>
                  <th className="px-4 py-2 border text-left">Venue</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border font-medium">
                    {liveMatch.team1} vs {liveMatch.team2}
                  </td>
                  <td className="px-4 py-2 border text-green-600 font-semibold">{liveMatch.status}</td>
                  <td className="px-4 py-2 border">{liveMatch.venue}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-2 border text-left">Upcoming Match</th>
                  <th className="px-4 py-2 border text-left">Time</th>
                  <th className="px-4 py-2 border text-left">Venue</th>
                </tr>
              </thead>
              <tbody>
                {upcomingMatches.length > 0 && (
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border font-medium">
                      {upcomingMatches[0].team1} vs {upcomingMatches[0].team2}
                    </td>
                    <td className="px-4 py-2 border text-sm text-gray-700">
                      {new Date(upcomingMatches[0].time).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 border text-sm text-gray-700">
                      {upcomingMatches[0].venue}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveMatch;
