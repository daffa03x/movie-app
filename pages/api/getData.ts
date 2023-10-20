/* eslint-disable import/no-anonymous-default-export */
// pages/api/getData.ts

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch("URL_API_ANDA"); // Ganti dengan URL API yang sesuai
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Terjadi kesalahan saat mengambil data" });
  }
};
