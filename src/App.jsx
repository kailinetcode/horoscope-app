import { useState } from 'react';
import SignPicker from './components/SignPicker';
import HoroscopeView from './components/HoroscopeView';
import './App.css';

export default function App() {
  const [sign, setSign] = useState(null);

  return (
    <div className="app">
      <nav className="app-nav">
        <span className="nav-dot" />
        <span className="app-name">Co — Star</span>
      </nav>
      {sign
        ? <HoroscopeView signName={sign} onReset={() => setSign(null)} />
        : <SignPicker onSelect={setSign} />
      }
    </div>
  );
}
