import Anthropic from '@anthropic-ai/sdk';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces',
];

const SIGN_META = {
  Aries:       { element: 'Fire',  ruling: 'Mars',    dates: 'Mar 21 – Apr 19' },
  Taurus:      { element: 'Earth', ruling: 'Venus',   dates: 'Apr 20 – May 20' },
  Gemini:      { element: 'Air',   ruling: 'Mercury', dates: 'May 21 – Jun 20' },
  Cancer:      { element: 'Water', ruling: 'Moon',    dates: 'Jun 21 – Jul 22' },
  Leo:         { element: 'Fire',  ruling: 'Sun',     dates: 'Jul 23 – Aug 22' },
  Virgo:       { element: 'Earth', ruling: 'Mercury', dates: 'Aug 23 – Sep 22' },
  Libra:       { element: 'Air',   ruling: 'Venus',   dates: 'Sep 23 – Oct 22' },
  Scorpio:     { element: 'Water', ruling: 'Pluto',   dates: 'Oct 23 – Nov 21' },
  Sagittarius: { element: 'Fire',  ruling: 'Jupiter', dates: 'Nov 22 – Dec 21' },
  Capricorn:   { element: 'Earth', ruling: 'Saturn',  dates: 'Dec 22 – Jan 19' },
  Aquarius:    { element: 'Air',   ruling: 'Uranus',  dates: 'Jan 20 – Feb 18' },
  Pisces:      { element: 'Water', ruling: 'Neptune', dates: 'Feb 19 – Mar 20' },
};

const client = new Anthropic();

async function generateReading(sign, date) {
  const dateStr = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  const { element, ruling } = SIGN_META[sign];

  const prompt = `Generate a daily horoscope reading for ${sign} (${element} sign, ruled by ${ruling}) for ${dateStr}.

Return ONLY a valid JSON object with exactly these fields:
{
  "daily": "one sentence — a specific, unsettling insight. Not generic. Not about being bold or trusting yourself. Make it land like a cold observation.",
  "self": "one sentence about identity and self-perception for ${sign} today",
  "love": "one sentence about intimacy, desire, or connection for ${sign} today",
  "work": "one sentence about ambition, effort, or professional life for ${sign} today",
  "money": "one sentence about resources, security, or financial patterns for ${sign} today",
  "body": "one sentence about the physical body, health, or nervous system for ${sign} today",
  "spirit": "one sentence about inner life, meaning, or invisible forces for ${sign} today",
  "goodFor": ["2-word phrase", "2-word phrase"],
  "badFor": ["2-word phrase", "2-word phrase"]
}

Style requirements:
- Co-Star aesthetic: terse, aphoristic, slightly unsettling
- No affirmations, no "you are capable", no "trust the universe"
- Sentences under 20 words
- goodFor/badFor: lowercase 2-word activity phrases only (e.g. "direct conversation", "impulsive decisions")
- Return raw JSON only, no markdown, no explanation`;

  const message = await client.messages.create({
    model: 'claude-opus-4-8',
    max_tokens: 500,
    thinking: { type: 'adaptive' },
    messages: [{ role: 'user', content: prompt }],
  });

  const text = message.content.find(b => b.type === 'text')?.text || '';
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error(`No JSON in response for ${sign}: ${text}`);
  return JSON.parse(jsonMatch[0]);
}

async function main() {
  const date = new Date();
  console.log(`Generating horoscope readings for ${date.toDateString()}...`);

  const readings = {};
  for (const sign of SIGNS) {
    console.log(`  ${sign}...`);
    try {
      readings[sign] = await generateReading(sign, date);
    } catch (err) {
      console.error(`  Error for ${sign}:`, err.message);
      process.exit(1);
    }
  }

  const output = {
    generated: date.toISOString(),
    date: date.toISOString().split('T')[0],
    readings,
  };

  const outPath = join(__dirname, '..', 'public', 'daily-readings.json');
  writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`Done. Written to ${outPath}`);
}

main();
