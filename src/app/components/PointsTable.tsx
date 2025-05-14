'use client';

import React, { useEffect, useState } from 'react';

interface PointsTableData {
  team: string;
  points: number;
  netRunRate: string;
}

const PointsTable = () => {
  const [points, setPoints] = useState<PointsTableData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPoints = async () => {
      const res = await fetch('/api/points');
      const json = await res.json();
      setPoints(json);
      setLoading(false);
    };

    getPoints();
  }, []);

  if (loading) return <p className="text-center text-xl">Loading points table...</p>;

  return (
    <div className="p-4">
      <div className="card">
        <h2 className="text-2xl font-bold mb-4 text-blue-700  text-center">Points Table</h2>
        {points && points.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-2 border-b">Team</th>
                  <th className="px-4 py-2 border-b">Points</th>
                  <th className="px-4 py-2 border-b">Net Run Rate</th>
                </tr>
              </thead>
              <tbody>
                {points.map((team, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{team.team}</td>
                    <td className="px-4 py-2 border-b">{team.points}</td>
                    <td className="px-4 py-2 border-b">{team.netRunRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center">No points data available</p>
        )}
      </div>
    </div>
  );
};

export default PointsTable;
