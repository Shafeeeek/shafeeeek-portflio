import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Wind, 
  Activity, 
  CheckCircle2, 
  RefreshCw, 
  Scan, 
  Smartphone,
  Laptop,
  Code2,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Layers
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface InteractiveDevicePreviewProps {
  initialApp?: 'calm-cue' | 'diabetes-expert' | 'coffee-brain';
}

export const InteractiveDevicePreview: React.FC<InteractiveDevicePreviewProps> = ({
  initialApp = 'calm-cue',
}) => {
  const [activeApp, setActiveApp] = useState<'calm-cue' | 'diabetes-expert' | 'coffee-brain'>(initialApp);
  const [viewMode, setViewMode] = useState<'mobile' | 'web'>('mobile');
  const [showJsxSnippet, setShowJsxSnippet] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    setActiveApp(initialApp);
    if (initialApp === 'coffee-brain') {
      setViewMode('web');
    } else {
      setViewMode('mobile');
    }
  }, [initialApp]);

  // Calm Cue: Box-breathing React State
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Rest'>('Inhale');
  const [breathSeconds, setBreathSeconds] = useState(4);
  const [isBreathingActive, setIsBreathingActive] = useState(true);
  const [calmTab, setCalmTab] = useState<'breathe' | 'grounding'>('breathe');

  useEffect(() => {
    if (!isBreathingActive || activeApp !== 'calm-cue') return;
    const interval = setInterval(() => {
      setBreathSeconds((prev) => {
        if (prev <= 1) {
          setBreathPhase((current) => {
            if (current === 'Inhale') return 'Hold';
            if (current === 'Hold') return 'Exhale';
            if (current === 'Exhale') return 'Rest';
            return 'Inhale';
          });
          return 4;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isBreathingActive, activeApp, breathPhase]);

  // DES Clinical: Dynamic Questionnaire State
  const [desAnswers, setDesAnswers] = useState({
    age: '30-45',
    familyHistory: true,
    activity: 'moderate',
    symptoms: ['thirst'],
  });
  const [desResult, setDesResult] = useState<{
    score: number;
    category: 'Low Risk' | 'Moderate Risk' | 'High Risk';
    recommendations: string[];
  } | null>(null);

  const calculateDesRisk = () => {
    let score = 15;
    if (desAnswers.familyHistory) score += 30;
    if (desAnswers.activity === 'sedentary') score += 25;
    if (desAnswers.activity === 'moderate') score += 10;
    if (desAnswers.symptoms.includes('thirst')) score += 18;
    if (desAnswers.symptoms.includes('fatigue')) score += 12;

    let category: 'Low Risk' | 'Moderate Risk' | 'High Risk' = 'Low Risk';
    if (score > 60) category = 'High Risk';
    else if (score > 35) category = 'Moderate Risk';

    const recs = [
      category === 'High Risk'
        ? 'Prompt HbA1c clinical laboratory screening recommended.'
        : 'Maintain annual routine biometric screenings.',
      'Adopt low-glycemic dietary regimen rich in leafy fibers.',
      'Preserve 150+ minutes of weekly aerobic exercise.',
    ];

    setDesResult({ score, category, recommendations: recs });
  };

  // Coffee Brain: React Web Dashboard State
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'detected'>('idle');
  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: 'Ethiopian Yirgacheffe Beans (1kg)', sku: 'CB-ET-8941', stock: 42, status: 'Optimal' },
    { id: 2, name: 'Colombian Supremo Dark (500g)', sku: 'CB-COL-1022', stock: 12, status: 'Reorder Low' },
    { id: 3, name: 'Guatemala Antigua Estate', sku: 'CB-GT-3319', stock: 28, status: 'Optimal' },
  ]);
  const [sentimentVal, setSentimentVal] = useState(94);
  const [activeItem, setActiveItem] = useState({
    name: 'Ethiopian Yirgacheffe Beans (1kg)',
    sku: 'CB-ET-8941',
    stock: 42,
    confidence: '98.4%',
  });

  const handleScanSimulation = () => {
    setScanState('scanning');
    setTimeout(() => {
      setScanState('detected');
      setActiveItem({
        name: 'Colombian Supremo Dark (500g)',
        sku: 'CB-COL-1022',
        stock: 12,
        confidence: '99.1%',
      });
      setSentimentVal(96);
    }, 1000);
  };

  // React JSX Snippet for the active app
  const getJsxSnippet = () => {
    switch (activeApp) {
      case 'calm-cue':
        return `// CalmCue.tsx (React Native CLI)
import { useBreathingCycle } from './hooks/useBreathingCycle';
import { BoxBreather, SupabaseVault } from '@calmcue/ui';

export function CalmCueScreen() {
  const { phase, seconds, toggleActive } = useBreathingCycle({ initialPace: 4 });
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Calm Cue" status="Supabase Sync" />
      <BoxBreather phase={phase} timer={seconds} onToggle={toggleActive} />
      <GroundingTactics activeTab="sensory" />
    </SafeAreaView>
  );
}`;
      case 'diabetes-expert':
        return `// DiabetesExpertScreen.tsx (React Native + Expo)
import { useClinicalInference } from './hooks/useClinicalInference';
import { RiskCard, DiagnosticForm } from './components';

export function DESScreen() {
  const { answers, evaluateMatrix, assessment } = useClinicalInference();
  return (
    <ScrollView style={styles.viewport}>
      <DiagnosticForm state={answers} onSubmit={evaluateMatrix} />
      {assessment && <RiskCard score={assessment.score} tier={assessment.tier} />}
    </ScrollView>
  );
}`;
      case 'coffee-brain':
        return `// CoffeeBrainDashboard.tsx (ReactJS Web SPA)
import { useState, useCallback } from 'react';
import { useVisionScanner } from './hooks/useVisionScanner';
import { InventoryGrid, SentimentMeter } from './components';

export function Dashboard() {
  const [inventory, setInventory] = useState(initialStock);
  const { isScanning, triggerScan, lastItem } = useVisionScanner();
  return (
    <div className="dashboard-grid">
      <InventoryGrid items={inventory} onScan={triggerScan} />
      <SentimentMeter score={sentimentVal} source="NLP-BERT" />
    </div>
  );
}`;
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      {/* Simulator Switcher Controls */}
      <div className={`w-full flex items-center justify-between p-2 rounded-sm mb-4 border transition-colors ${
        isDark ? 'bg-[#151515] border-white/10' : 'bg-white border-slate-200 shadow-xs'
      }`}>
        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              setActiveApp('coffee-brain');
              setViewMode('web');
            }}
            className={`px-2.5 py-1 rounded-full text-[10px] uppercase font-mono tracking-wider transition-all flex items-center gap-1 ${
              activeApp === 'coffee-brain'
                ? (isDark ? 'bg-white text-black font-semibold' : 'bg-slate-900 text-white font-semibold')
                : (isDark ? 'text-white/50 hover:text-white' : 'text-slate-600 hover:text-slate-900')
            }`}
          >
            <Laptop className="w-3 h-3" />
            <span>React Web</span>
          </button>
          
          <button
            onClick={() => {
              setActiveApp('calm-cue');
              setViewMode('mobile');
            }}
            className={`px-2.5 py-1 rounded-full text-[10px] uppercase font-mono tracking-wider transition-all flex items-center gap-1 ${
              activeApp === 'calm-cue'
                ? (isDark ? 'bg-white text-black font-semibold' : 'bg-slate-900 text-white font-semibold')
                : (isDark ? 'text-white/50 hover:text-white' : 'text-slate-600 hover:text-slate-900')
            }`}
          >
            <Smartphone className="w-3 h-3" />
            <span>React Native</span>
          </button>

          <button
            onClick={() => {
              setActiveApp('diabetes-expert');
              setViewMode('mobile');
            }}
            className={`px-2.5 py-1 rounded-full text-[10px] uppercase font-mono tracking-wider transition-all ${
              activeApp === 'diabetes-expert'
                ? (isDark ? 'bg-white text-black font-semibold' : 'bg-slate-900 text-white font-semibold')
                : (isDark ? 'text-white/50 hover:text-white' : 'text-slate-600 hover:text-slate-900')
            }`}
          >
            <span>DES (Expo)</span>
          </button>
        </div>

        {/* JSX Code Inspector toggle */}
        <button
          onClick={() => setShowJsxSnippet(!showJsxSnippet)}
          title="Inspect React Component Code"
          className={`px-2 py-1 rounded-sm text-[10px] font-mono flex items-center gap-1 border transition-colors ${
            showJsxSnippet
              ? 'bg-sky-500 text-white border-sky-400'
              : (isDark ? 'bg-white/5 border-white/10 text-white/70 hover:text-white' : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900')
          }`}
        >
          <Code2 className="w-3 h-3" />
          <span>JSX</span>
        </button>
      </div>

      {/* Code Inspector Flyout */}
      {showJsxSnippet && (
        <div className={`w-full mb-4 p-3.5 rounded-sm border font-mono text-[10px] overflow-x-auto transition-colors ${
          isDark ? 'bg-[#0A0A0A] border-white/15 text-white/80' : 'bg-slate-900 border-slate-800 text-slate-100 shadow-md'
        }`}>
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10 text-sky-400 text-[9px] uppercase tracking-wider">
            <span>React Component Specification</span>
            <span className="text-white/40">TypeScript JSX</span>
          </div>
          <pre className="text-[10.5px] leading-relaxed whitespace-pre font-mono">
            {getJsxSnippet()}
          </pre>
        </div>
      )}

      {/* HARDWARE SIMULATOR CHASSIS */}
      {viewMode === 'web' ? (
        /* DESKTOP BROWSER CHASSIS (React Web Application View) */
        <div className={`w-full rounded-md border shadow-2xl overflow-hidden transition-colors ${
          isDark ? 'bg-[#151515] border-white/15' : 'bg-white border-slate-300'
        }`}>
          {/* Browser Window Header */}
          <div className={`px-3 py-2 border-b flex items-center justify-between ${
            isDark ? 'bg-[#0A0A0A] border-white/10' : 'bg-slate-100 border-slate-200'
          }`}>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            
            {/* Mock URL bar */}
            <div className={`px-3 py-0.5 rounded-full text-[10px] font-mono truncate max-w-[200px] border ${
              isDark ? 'bg-white/5 border-white/10 text-white/60' : 'bg-white border-slate-300 text-slate-600'
            }`}>
              https://coffee-brain.app/dashboard
            </div>

            <div className="flex items-center gap-1 text-[9px] font-mono text-sky-500">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              <span>React 18</span>
            </div>
          </div>

          {/* Web App Body */}
          <div className={`p-4 min-h-[460px] flex flex-col justify-between text-xs ${
            isDark ? 'bg-[#111111] text-white' : 'bg-slate-50 text-slate-900'
          }`}>
            <div>
              {/* Dashboard Navbar */}
              <div className="flex items-center justify-between pb-3 border-b border-black/10 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-500">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs uppercase tracking-wide">Coffee Brain SME</h4>
                    <p className="text-[10px] opacity-60">ReactJS + Django REST API</p>
                  </div>
                </div>

                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                  Role: Admin
                </div>
              </div>

              {/* KPI Strip */}
              <div className="grid grid-cols-2 gap-2 mt-3 mb-3">
                <div className={`p-2.5 rounded-sm border ${
                  isDark ? 'bg-[#181818] border-white/10' : 'bg-white border-slate-200'
                }`}>
                  <p className="text-[10px] uppercase font-mono opacity-60">Inventory Health</p>
                  <p className="text-base font-bold mt-0.5 text-emerald-500">98.2%</p>
                  <p className="text-[9px] opacity-60">82 active line SKUs</p>
                </div>

                <div className={`p-2.5 rounded-sm border ${
                  isDark ? 'bg-[#181818] border-white/10' : 'bg-white border-slate-200'
                }`}>
                  <p className="text-[10px] uppercase font-mono opacity-60">NLP Sentiment</p>
                  <p className="text-base font-bold mt-0.5 text-sky-500">{sentimentVal}% Pos</p>
                  <p className="text-[9px] opacity-60">Automated BERT model</p>
                </div>
              </div>

              {/* Real-time Inventory Table (React Component) */}
              <div className={`p-2.5 rounded-sm border mb-3 ${
                isDark ? 'bg-[#181818] border-white/10' : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold opacity-70">
                    Active Stock Register
                  </span>
                  <span className="text-[9px] font-mono text-sky-500">React state live</span>
                </div>

                <div className="space-y-1.5 text-[10px]">
                  {inventoryItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-1.5 rounded bg-black/5 dark:bg-white/5">
                      <div className="truncate max-w-[160px]">
                        <p className="font-medium truncate">{item.name}</p>
                        <p className="opacity-50 text-[9px] font-mono">{item.sku}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-semibold">{item.stock} bags</span>
                        <p className={`text-[8px] font-mono ${item.stock < 15 ? 'text-amber-500' : 'text-emerald-500'}`}>
                          {item.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Computer Vision OCR Scanner Module */}
              <div className={`p-2.5 rounded-sm border ${
                isDark ? 'bg-[#181818] border-white/10' : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1">
                    <Scan className="w-3 h-3 text-sky-500" />
                    CV Product Scanner
                  </span>
                  <span className="text-[9px] font-mono opacity-50">Django API Endpoint</span>
                </div>

                {scanState === 'scanning' ? (
                  <div className="py-4 flex flex-col items-center justify-center border border-dashed border-sky-500/40 rounded bg-sky-500/5">
                    <RefreshCw className="w-4 h-4 text-sky-500 animate-spin mb-1" />
                    <span className="text-[10px] text-sky-500 font-mono">Running feature inference...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-[10px] p-2 rounded bg-black/5 dark:bg-white/5 mb-2">
                    <div>
                      <p className="font-semibold">{activeItem.name}</p>
                      <p className="opacity-50 text-[9px]">Matched with {activeItem.confidence} certainty</p>
                    </div>
                    <span className="font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[9px]">
                      CONFIRMED
                    </span>
                  </div>
                )}

                <button
                  onClick={handleScanSimulation}
                  disabled={scanState === 'scanning'}
                  className={`w-full py-2 rounded-sm text-[10px] uppercase font-mono font-semibold tracking-wider transition-all ${
                    isDark ? 'bg-white text-black hover:bg-white/90' : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Trigger Live CV Barcode Scan
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-black/10 dark:border-white/10 flex justify-between items-center text-[9px] font-mono opacity-50 mt-3">
              <span>React Virtual DOM</span>
              <span>REST JSON Payload</span>
            </div>
          </div>
        </div>
      ) : (
        /* SMARTPHONE CHASSIS (React Native Mobile View) */
        <div className={`relative w-[300px] h-[580px] rounded-[36px] border-4 p-3.5 shadow-2xl flex flex-col justify-between transition-colors ${
          isDark 
            ? 'bg-[#151515] border-[#2A2A2A] text-white shadow-black/80' 
            : 'bg-white border-slate-300 text-slate-900 shadow-slate-300'
        }`}>
          {/* Dynamic Island / Notch */}
          <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-black/60 mr-2" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60" />
          </div>

          {/* APP: CALM CUE */}
          {activeApp === 'calm-cue' && (
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-sm bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                      <Heart className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider">Calm Cue</h4>
                      <p className="text-[9px] opacity-60">React Native CLI</p>
                    </div>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-mono">
                    Supabase
                  </span>
                </div>

                {/* Sub tabs */}
                <div className="flex gap-1 p-0.5 rounded-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[10px] mb-3">
                  <button
                    onClick={() => setCalmTab('breathe')}
                    className={`flex-1 py-1 rounded-xs font-medium transition-all ${
                      calmTab === 'breathe' ? (isDark ? 'bg-white text-black' : 'bg-slate-900 text-white') : 'opacity-60'
                    }`}
                  >
                    Box Breathing
                  </button>
                  <button
                    onClick={() => setCalmTab('grounding')}
                    className={`flex-1 py-1 rounded-xs font-medium transition-all ${
                      calmTab === 'grounding' ? (isDark ? 'bg-white text-black' : 'bg-slate-900 text-white') : 'opacity-60'
                    }`}
                  >
                    5-4-3-2-1
                  </button>
                </div>
              </div>

              {/* Interactive Core */}
              {calmTab === 'breathe' ? (
                <div className="my-auto text-center space-y-4">
                  <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                    <div
                      className={`absolute inset-0 rounded-full border-2 transition-all duration-1000 ${
                        breathPhase === 'Inhale'
                          ? 'scale-110 border-emerald-500 bg-emerald-500/10'
                          : breathPhase === 'Hold'
                          ? 'scale-105 border-sky-500 bg-sky-500/10'
                          : 'scale-90 border-white/20 bg-transparent'
                      }`}
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
                        {breathPhase}
                      </p>
                      <p className="text-2xl font-light font-mono mt-0.5">{breathSeconds}s</p>
                    </div>
                  </div>

                  <p className="text-[10px] opacity-70 px-4 font-light leading-relaxed">
                    Therapeutic 4x4 pacing to rapidly reduce acute autonomic stress.
                  </p>

                  <button
                    onClick={() => setIsBreathingActive(!isBreathingActive)}
                    className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-semibold border transition-all ${
                      isBreathingActive
                        ? 'border-emerald-500 text-emerald-500 bg-emerald-500/10'
                        : (isDark ? 'bg-white text-black' : 'bg-slate-900 text-white')
                    }`}
                  >
                    {isBreathingActive ? 'Pause Session' : 'Resume Session'}
                  </button>
                </div>
              ) : (
                <div className="my-auto space-y-2 text-xs">
                  <div className="p-2 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    <p className="font-semibold text-[11px] text-emerald-500">5 Things You Can See</p>
                    <p className="text-[10px] opacity-60">Scan surrounding physical space to reground attention.</p>
                  </div>
                  <div className="p-2 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    <p className="font-semibold text-[11px] text-sky-500">4 Things You Can Feel</p>
                    <p className="text-[10px] opacity-60">Ground your feet against floor; observe tactile textures.</p>
                  </div>
                  <div className="p-2 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    <p className="font-semibold text-[11px] text-amber-500">3 Things You Can Hear</p>
                    <p className="text-[10px] opacity-60">Focus on ambient frequencies in current room.</p>
                  </div>
                </div>
              )}

              <div className="pt-2 border-t border-black/10 dark:border-white/10 flex justify-between items-center text-[9px] opacity-50 font-mono">
                <span>React Native Audio/Haptics</span>
                <span>iOS / Android</span>
              </div>
            </div>
          )}

          {/* APP: DIABETES EXPERT SYSTEM */}
          {activeApp === 'diabetes-expert' && (
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-sm bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-500">
                      <Activity className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider">DES Clinical</h4>
                      <p className="text-[9px] opacity-60">React Native + Expo</p>
                    </div>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-500 font-mono">
                    24 Rules
                  </span>
                </div>
              </div>

              {/* Assessment Form */}
              <div className="my-auto space-y-2.5 text-xs">
                <div className="p-2.5 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="opacity-70">Family History</span>
                    <button
                      onClick={() => setDesAnswers({ ...desAnswers, familyHistory: !desAnswers.familyHistory })}
                      className={`px-2 py-0.5 rounded font-mono font-semibold ${
                        desAnswers.familyHistory ? 'bg-sky-500 text-white' : 'bg-black/10 dark:bg-white/10 opacity-60'
                      }`}
                    >
                      {desAnswers.familyHistory ? 'Positive' : 'None'}
                    </button>
                  </div>

                  <div className="flex justify-between items-center text-[10px]">
                    <span className="opacity-70">Physical Activity</span>
                    <button
                      onClick={() =>
                        setDesAnswers({
                          ...desAnswers,
                          activity: desAnswers.activity === 'moderate' ? 'sedentary' : 'moderate',
                        })
                      }
                      className="px-2 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono font-semibold capitalize"
                    >
                      {desAnswers.activity}
                    </button>
                  </div>

                  <button
                    onClick={calculateDesRisk}
                    className={`w-full py-1.5 rounded-xs text-[10px] font-semibold uppercase tracking-wider transition-all mt-1 ${
                      isDark ? 'bg-white text-black hover:bg-white/90' : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    Run Inference Engine
                  </button>
                </div>

                {desResult && (
                  <div className="p-2.5 rounded bg-sky-500/10 border border-sky-500/30 text-[10px] space-y-1 animate-fadeIn">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sky-500 uppercase tracking-wider">
                        {desResult.category}
                      </span>
                      <span className="font-mono font-bold">{desResult.score} / 100</span>
                    </div>
                    <p className="opacity-70 text-[9px] leading-tight">
                      {desResult.recommendations[0]}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-black/10 dark:border-white/10 flex justify-between items-center text-[9px] opacity-50 font-mono">
                <span>Weighted Matrix</span>
                <span>Dynamic Forms</span>
              </div>
            </div>
          )}

          {/* Home indicator */}
          <div className="w-24 h-1 bg-black/20 dark:bg-white/20 rounded-full mx-auto mt-2" />
        </div>
      )}

      {/* Simulator Caption */}
      <div className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-wider opacity-60 font-mono">
        <Layers className="w-3 h-3" />
        <span>{viewMode === 'web' ? 'ReactJS Web Client Simulator' : 'React Native Mobile Architecture'}</span>
      </div>
    </div>
  );
};
