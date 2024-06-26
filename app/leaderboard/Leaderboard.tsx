"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../_components/ui/table";
import FooterMenu from "../_components/FooterMenu";
import { Leaderboards } from "../_utils/global";

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState<Leaderboards[]>([]);

  useEffect(() => {
    void handleLeaderboardData();
  }, []);

  const handleLeaderboardData = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const cacheBuster = Date.now();
      const response = await fetch(
        `${baseUrl}/api/leaderboards?_=${cacheBuster}`,
        {
          credentials: "include",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        }
      );
      const resData: Leaderboards[] = (await response.json()) as Leaderboards[];
      setLeaderboardData(resData);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {/* LEADERBOARD */}
      <div className="animate-fade fade-in">
        <h1 className="text-center text-2xl font-bold text-primary bg-secondary py-4 my-0">
          Leaderboard
        </h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((player, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{player.username}</TableCell>
                <TableCell>{player.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* MENU */}
      <FooterMenu variant="leaderboard" />
    </>
  );
}
