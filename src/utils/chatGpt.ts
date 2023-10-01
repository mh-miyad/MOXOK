import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
});

async function main() {
  const chatCompletion:any = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });

  console.log(chatCompletion.choices[0].text);
}

main();
