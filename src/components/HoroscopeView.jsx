import { useState, useEffect } from 'react';
import { getHoroscope } from '../data/horoscopes';

const CATEGORIES = [
  { key: 'self', label: 'Self', symbol: '☉' },
  { key: 'love', label: 'Love & Pleasure', symbol: '♀' },
  { key: 'work', label: 'Work & Ambition', symbol: '♂' },
  { key: 'money', label: 'Money & Security', symbol: '♃' },
  { key: 'body', label: 'Body & Health', symbol: '♄' },
  { key: 'spirit', label: 'Spirit & Inner Life', symbol: '♆' },
];

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase();
}

export default function HoroscopeView({ signName, onReset }) {
  const today = new Date();
  const staticReading = getHoroscope(signName, today);
  const [reading, setReading] = useState(staticReading);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}daily-readings.json`)
      .then(r => r.json())
      .then(data => {
        const r = data?.readings?.[signName];
        if (!r) return;
        setReading(prev => ({ ...prev, ...r }));
      })
      .catch(() => {});
  }, [signName]);

  const { sign, moon, daily, goodFor, badFor, ...sections } = reading;

  return (
    <div className="reading-view">
      <button className="back-btn" onClick={onReset}>← All Signs</button>

      <header className="reading-header">
        <p className="reading-date">{formatDate(today)}</p>
        {sign.image
          ? <img
              src={`${import.meta.env.BASE_URL}signs/${sign.name.toLowerCase()}.png`}
              alt={sign.name}
              className="sign-hero-img"
              style={{ objectPosition: sign.imgPos }}
            />
          : <div className="sign-symbol-lg">{sign.symbol}</div>
        }
        <h1 className="reading-sign">{sign.name}</h1>
        <p className="reading-meta">{sign.element.toUpperCase()} · {sign.ruling.toUpperCase()} · {sign.dates.toUpperCase()}</p>
      </header>

      <hr className="divider" />

      <section className="daily-section">
        <p className="daily-headline">{daily}</p>
      </section>

      <hr className="divider" />

      <section className="moon-row">
        <span className="inline-symbol">{moon.symbol}</span>
        <div>
          <p className="row-label">{moon.name.toUpperCase()}</p>
          <p className="row-text">{moon.influence}</p>
        </div>
      </section>

      <hr className="divider" />

      {CATEGORIES.map(({ key, label, symbol }) => (
        <section key={key} className="category-section">
          <p className="category-symbol">{symbol}</p>
          <p className="category-label">{label.toUpperCase()}</p>
          <p className="category-text">{sections[key]}</p>
          <hr className="divider" />
        </section>
      ))}

      <section className="learn-avoid">
        <div className="la-col">
          <p className="la-label">Learn from</p>
          {goodFor.map(g => <p key={g} className="la-item">{g}</p>)}
        </div>
        <div className="la-col">
          <p className="la-label">Avoid</p>
          {badFor.map(b => <p key={b} className="la-item">{b}</p>)}
        </div>
      </section>
    </div>
  );
}
