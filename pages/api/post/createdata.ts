import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { Name } = req.body;
    const newUser = await prisma.user.create({
      data: {
        Name: Name,
      },
    });
    res.status(200).json(newUser);
  }
}
