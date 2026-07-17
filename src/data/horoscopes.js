export const SIGNS = [
  { name: 'Aries',       symbol: '♈', dates: 'Mar 21 – Apr 19', element: 'Fire',  ruling: 'Mars',    image: '/signs/aries.png',       imgPos: 'center 45%' },
  { name: 'Taurus',      symbol: '♉', dates: 'Apr 20 – May 20', element: 'Earth', ruling: 'Venus',   image: '/signs/taurus.png',      imgPos: 'center 45%' },
  { name: 'Gemini',      symbol: '♊', dates: 'May 21 – Jun 20', element: 'Air',   ruling: 'Mercury', image: '/signs/gemini.png',      imgPos: 'center 50%' },
  { name: 'Cancer',      symbol: '♋', dates: 'Jun 21 – Jul 22', element: 'Water', ruling: 'Moon',    image: '/signs/cancer.png',      imgPos: 'center 45%' },
  { name: 'Leo',         symbol: '♌', dates: 'Jul 23 – Aug 22', element: 'Fire',  ruling: 'Sun',     image: '/signs/leo.png',         imgPos: 'center 55%' },
  { name: 'Virgo',       symbol: '♍', dates: 'Aug 23 – Sep 22', element: 'Earth', ruling: 'Mercury', image: '/signs/virgo.png',       imgPos: 'center 45%' },
  { name: 'Libra',       symbol: '♎', dates: 'Sep 23 – Oct 22', element: 'Air',   ruling: 'Venus',   image: '/signs/libra.png',       imgPos: 'center 50%' },
  { name: 'Scorpio',     symbol: '♏', dates: 'Oct 23 – Nov 21', element: 'Water', ruling: 'Pluto',   image: '/signs/scorpio.png',     imgPos: 'center 40%' },
  { name: 'Sagittarius', symbol: '♐', dates: 'Nov 22 – Dec 21', element: 'Fire',  ruling: 'Jupiter', image: '/signs/sagittarius.png', imgPos: 'center 45%' },
  { name: 'Capricorn',   symbol: '♑', dates: 'Dec 22 – Jan 19', element: 'Earth', ruling: 'Saturn',  image: '/signs/capricorn.png',   imgPos: 'center 50%' },
  { name: 'Aquarius',    symbol: '♒', dates: 'Jan 20 – Feb 18', element: 'Air',   ruling: 'Uranus',  image: '/signs/aquarius.png',    imgPos: 'center 45%' },
  { name: 'Pisces',      symbol: '♓', dates: 'Feb 19 – Mar 20', element: 'Water', ruling: 'Neptune', image: '/signs/pisces.png',      imgPos: 'center 45%' },
];

const readings = {
  Aries: {
    daily: "Something you thought was behind you resurfaces. Don't mistake urgency for direction.",
    self: "The version of yourself you're performing is exhausting you.",
    love: "Wanting to be known and wanting to be seen are not the same thing.",
    work: "Confidence without preparation is just noise.",
    money: "The shortcut costs more than you think.",
    body: "Your nervous system is keeping score.",
    spirit: "Rest is not the absence of action.",
    goodFor: ["starting things", "direct conversation"],
    badFor: ["listening", "patience"],
  },
  Taurus: {
    daily: "Comfort is not the same as safety. You are confusing the two.",
    self: "You have been waiting for permission that will never come.",
    love: "Reliability is a love language. So is change.",
    work: "The slow path is still a path.",
    money: "You are allowed to want more without apologizing for it.",
    body: "Pleasure is information, not indulgence.",
    spirit: "What you refuse to release is still in charge.",
    goodFor: ["finishing things", "sensory experience"],
    badFor: ["flexibility", "letting go"],
  },
  Gemini: {
    daily: "Two truths do not cancel each other out. Hold them both.",
    self: "The version of you who knows everything is avoiding the version who feels it.",
    love: "You perform intimacy better than you practice it.",
    work: "Curiosity is not a strategy.",
    money: "The idea is not the income.",
    body: "Your mind does not live separately from the rest of you.",
    spirit: "The question is not the answer.",
    goodFor: ["communication", "making connections"],
    badFor: ["follow-through", "sitting still"],
  },
  Cancer: {
    daily: "The tide comes in whether you are ready or not.",
    self: "You are not responsible for the emotional weather of every room.",
    love: "Nurturing others to avoid being nurtured is still avoidance.",
    work: "Intuition is data. Use it.",
    money: "Security is not the same as hoarding.",
    body: "Your stomach knows before your mind does.",
    spirit: "Home is not a place. It is a practice.",
    goodFor: ["deep listening", "creative work"],
    badFor: ["detachment", "conflict"],
  },
  Leo: {
    daily: "The spotlight you crave is also the thing that blinds you.",
    self: "Generosity given to receive admiration is a transaction.",
    love: "Being witnessed is not the same as being loved.",
    work: "Your vision is not automatically everyone's vision.",
    money: "Spending on image is spending on fear.",
    body: "Your heart — the literal one — needs attention.",
    spirit: "You do not need an audience to be real.",
    goodFor: ["performance", "bold moves"],
    badFor: ["humility", "supporting roles"],
  },
  Virgo: {
    daily: "The analysis is complete. The problem is you are still analyzing.",
    self: "Criticism as a love language is still criticism.",
    love: "You are waiting for something perfect enough to deserve your care.",
    work: "Done is not the enemy of good. Inaction is.",
    money: "The budget you obsess over is not the life you are living.",
    body: "Chronic tension is a position, not a personality.",
    spirit: "The ritual matters less than the presence you bring to it.",
    goodFor: ["editing", "problem-solving"],
    badFor: ["improvisation", "self-compassion"],
  },
  Libra: {
    daily: "Every decision you defer becomes someone else's decision about you.",
    self: "You have been so agreeable you no longer know what you agree with.",
    love: "Harmony is not the same as honesty.",
    work: "The meeting about the meeting is not the work.",
    money: "Fairness is not a financial strategy.",
    body: "Your kidneys hold what you can't bring yourself to say.",
    spirit: "Balance requires knowing which side you are actually on.",
    goodFor: ["mediation", "aesthetics"],
    badFor: ["making choices", "confrontation"],
  },
  Scorpio: {
    daily: "What you are investigating in others is a mirror.",
    self: "The transformation you keep threatening yourself with — do it.",
    love: "Intensity is not intimacy.",
    work: "You are the only person who knows the whole plan. That is a liability.",
    money: "Power and money are the same energy. Notice how you move both.",
    body: "Release lives in the body before it lives in the mind.",
    spirit: "The death you are afraid of has already happened.",
    goodFor: ["research", "depth"],
    badFor: ["lightness", "trusting without proof"],
  },
  Sagittarius: {
    daily: "The horizon is infinite. That is the problem, not the solution.",
    self: "Enthusiasm is not a plan.",
    love: "Freedom you take without negotiation is just escape.",
    work: "The big picture requires some small actions.",
    money: "The bet on yourself requires actually betting.",
    body: "Your hips are carrying adventures you haven't taken yet.",
    spirit: "The truth you carry everywhere still needs to be lived, not only believed.",
    goodFor: ["exploration", "honesty"],
    badFor: ["commitment", "details"],
  },
  Capricorn: {
    daily: "You have been working toward something you no longer want.",
    self: "Achievement is not a substitute for presence.",
    love: "You show love through acts of service because emotion feels like weakness.",
    work: "The structure you built is now the thing trapping you.",
    money: "You are not your net worth. Check your relationship to this.",
    body: "Your knees and bones hold the weight of everything you refuse to put down.",
    spirit: "Rest is not earned. It is necessary.",
    goodFor: ["discipline", "long-term planning"],
    badFor: ["play", "receiving care"],
  },
  Aquarius: {
    daily: "The revolution you theorize about requires you to show up.",
    self: "Detachment is not objectivity. It is protection.",
    love: "You love humanity more easily than you love individuals.",
    work: "The unconventional path still requires walking it.",
    money: "Collective ideals and personal finances are both real.",
    body: "Your ankles and circulation — literal and metaphorical — need movement.",
    spirit: "The future you imagine has to be built in the present.",
    goodFor: ["innovation", "community"],
    badFor: ["intimacy", "routine"],
  },
  Pisces: {
    daily: "The boundary between you and everything else is the work.",
    self: "You are not responsible for dissolving into others' pain.",
    love: "Sacrifice is not love. Love does not require you to disappear.",
    work: "Vision without structure evaporates.",
    money: "Magical thinking is not a financial plan.",
    body: "Your feet carry you into other people's energy. Notice where you walk.",
    spirit: "You are allowed to be here, whole, without explaining yourself.",
    goodFor: ["creativity", "empathy"],
    badFor: ["boundaries", "practicality"],
  },
};

export const MOON_PHASES = [
  { name: 'New Moon', symbol: '🌑', influence: 'Set intentions. What you plant now grows in the dark.' },
  { name: 'Waxing Crescent', symbol: '🌒', influence: 'Gather resources. Desire is building.' },
  { name: 'First Quarter', symbol: '🌓', influence: 'Take action. Resistance is the teacher.' },
  { name: 'Waxing Gibbous', symbol: '🌔', influence: 'Refine. The work is almost visible.' },
  { name: 'Full Moon', symbol: '🌕', influence: 'Release. What illuminated cannot be ignored.' },
  { name: 'Waning Gibbous', symbol: '🌖', influence: 'Share what you know. Gratitude before grief.' },
  { name: 'Last Quarter', symbol: '🌗', influence: 'Let go. Forgiveness is a private act.' },
  { name: 'Waning Crescent', symbol: '🌘', influence: 'Rest. The ending is part of the cycle.' },
];

function getMoonPhase(date) {
  const knownNew = new Date('2000-01-06');
  const diff = date - knownNew;
  const days = diff / (1000 * 60 * 60 * 24);
  const cycle = 29.53;
  const phase = ((days % cycle) + cycle) % cycle;
  const index = Math.floor((phase / cycle) * 8) % 8;
  return MOON_PHASES[index];
}

export function getHoroscope(signName, date = new Date()) {
  const reading = readings[signName];
  const sign = SIGNS.find(s => s.name === signName);
  const moon = getMoonPhase(date);
  return { ...reading, sign, moon };
}
