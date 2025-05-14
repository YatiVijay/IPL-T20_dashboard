import { NextResponse } from 'next/server';
import points from '../../data/points.json';

export async function GET() {
  return NextResponse.json(points);
}
