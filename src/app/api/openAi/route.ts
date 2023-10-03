// pages/api/openai/routes.ts
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const OPENAI_API_KEY = process.env.OPEN_AI_KEY;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      prompt: `Translate the following English text to French: "${req.body.text}"`,
      max_tokens: 60
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      }
    });

    res.status(200).json(response.data);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}
