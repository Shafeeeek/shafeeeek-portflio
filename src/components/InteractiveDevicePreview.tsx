import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Wind, 
  Activity, 
  CheckCircle2, 
  RefreshCw, 
  Scan, 
  Smile, 
  ShieldCheck, 
  Smartphone,
  Sparkles
} from 'lucide-react';

interface InteractiveDevicePreviewProps {
  initialApp?: 'calm-cue' | 'diabetes-expert' | 'coffee-brain';
}

export const InteractiveDevicePreview: React.FC<InteractiveDevicePreviewProps> = ({
  initialApp = 'calm-cue',
}) => {
  const [activeApp, setActiveApp] = useState<'calm-cue' | 'diabetes-expert' | 'coffee-brain'>(initialApp);

  useEffect(() => {
    setActiveApp(initialApp);
  }, [initialApp]);

  // Calm Cue State: Breathing exercise
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

  // DES State: Clinical Questionnaire & Inference
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

  // Coffee Brain State: Scanner & Sentiment
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'detected'>('idle');
  const [activeItem, setActiveItem] = useState({
    name: 'Ethiopian Yirgacheffe Beans (1kg)',
    sku: 'CB-ET-8941',
    stock: 42,
    confidence: '98.4%',
  });
  const [sampleReview] = useState(
    'The aroma and roast quality are exceptional. Quick delivery and fresh beans!'
  );
  const [sentimentAnalysis] = useState<{
    score: number;
    tone: string;
  }>({
    score: 94,
    tone: 'Positive',
  });

  const handleScanSimulation = () => {
    setScanState('scanning');
    setTimeout(() => {
      setScanState('detected');
      setActiveItem({
        name: 'Colombian Supremo Dark Roast (500g)',
        sku: 'CB-COL-1022',
        stock: 18,
        confidence: '99.1%',
      });
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Device Tab Selector */}
      <div className="flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 mb-6 max-w-md w-full overflow-x-auto">
        <button
          id="btn-app-calmcue"
          onClick={() => setActiveApp('calm-cue')}
          className={`flex-1 py-1.5 px-3 rounded-full text-[11px] uppercase tracking-wider font-semibold whitespace-nowrap transition-all flex items-center justify-center gap-1.5 ${
            activeApp === 'calm-cue'
              ? 'bg-white text-black shadow-sm'
              : 'text-white/50 hover:text-white'
          }`}
        >
          <Wind className="w-3 h-3" />
          Calm Cue
        </button>

        <button
          id="btn-app-des"
          onClick={() => setActiveApp('diabetes-expert')}
          className={`flex-1 py-1.5 px-3 rounded-full text-[11px] uppercase tracking-wider font-semibold whitespace-nowrap transition-all flex items-center justify-center gap-1.5 ${
            activeApp === 'diabetes-expert'
              ? 'bg-white text-black shadow-sm'
              : 'text-white/50 hover:text-white'
          }`}
        >
          <Activity className="w-3 h-3" />
          DES Clinical
        </button>

        <button
          id="btn-app-coffeebrain"
          onClick={() => setActiveApp('coffee-brain')}
          className={`flex-1 py-1.5 px-3 rounded-full text-[11px] uppercase tracking-wider font-semibold whitespace-nowrap transition-all flex items-center justify-center gap-1.5 ${
            activeApp === 'coffee-brain'
              ? 'bg-white text-black shadow-sm'
              : 'text-white/50 hover:text-white'
          }`}
        >
          <Sparkles className="w-3 h-3" />
          Coffee Brain
        </button>
      </div>

      {/* Elegant Dark Device Chassis */}
      <div className="relative w-[320px] sm:w-[350px] h-[640px] bg-[#0A0A0A] rounded-[44px] p-3 shadow-2xl border border-white/15 ring-1 ring-white/5 flex flex-col justify-between overflow-hidden">
        {/* Hardware Notch / Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3 border border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white/70" />
          </div>
          <div className="w-10 h-1.5 rounded-full bg-[#151515]" />
          <div className="w-2 h-2 rounded-full bg-[#151515]" />
        </div>

        {/* Screen Content */}
        <div className="relative w-full h-full bg-[#121212] rounded-[34px] overflow-hidden flex flex-col pt-8 pb-3 px-3 text-[#F5F5F5] select-none border border-white/5">
          
          {/* Top Status Bar */}
          <div className="flex justify-between items-center text-[10px] font-mono text-white/40 px-2 mb-2">
            <span>09:41</span>
            <span className="flex items-center gap-1 text-white/60">
              <span className="text-[9px] uppercase tracking-wider font-semibold">React Native</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </span>
          </div>

          {/* APP 1: CALM CUE */}
          {activeApp === 'calm-cue' && (
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-sm bg-white/5 border border-white/15 flex items-center justify-center text-white">
                      <Wind className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white tracking-wider uppercase">Calm Cue</h4>
                      <p className="text-[10px] text-white/40 font-light">Anxiety Alleviation Engine</p>
                    </div>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 font-mono">
                    Supabase Encrypted
                  </span>
                </div>

                {/* Sub-tabs */}
                <div className="grid grid-cols-2 gap-1 mt-3 bg-[#0A0A0A] p-1 rounded-md border border-white/10 text-xs">
                  <button
                    onClick={() => setCalmTab('breathe')}
                    className={`py-1 rounded text-center text-[11px] font-medium transition-colors ${
                      calmTab === 'breathe' ? 'bg-white text-black' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    Box Breathing
                  </button>
                  <button
                    onClick={() => setCalmTab('grounding')}
                    className={`py-1 rounded text-center text-[11px] font-medium transition-colors ${
                      calmTab === 'grounding' ? 'bg-white text-black' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    5-4-3 Grounding
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              {calmTab === 'breathe' ? (
                <div className="my-auto flex flex-col items-center justify-center text-center">
                  <div className="relative flex items-center justify-center my-4">
                    <div
                      className={`w-36 h-36 rounded-full border border-white/20 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
                        breathPhase === 'Inhale'
                          ? 'scale-110 bg-white/10 ring-4 ring-white/15'
                          : breathPhase === 'Hold'
                          ? 'scale-105 bg-white/5 ring-2 ring-white/10'
                          : breathPhase === 'Exhale'
                          ? 'scale-90 bg-transparent'
                          : 'scale-95 bg-transparent'
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold mb-1">
                        {breathPhase}
                      </span>
                      <span className="text-3xl font-light font-mono text-white tracking-tight">
                        {breathSeconds}s
                      </span>
                      <span className="text-[10px] text-white/40 mt-1 flex items-center gap-1">
                        <Heart className="w-3 h-3 text-white/60" /> Steady
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-white/50 max-w-[220px] font-light leading-relaxed">
                    Designed for acute anxiety. Inhale and exhale in synchrony with the pulse.
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => setIsBreathingActive(!isBreathingActive)}
                      className="px-3 py-1 text-[11px] font-semibold rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors uppercase tracking-wider"
                    >
                      {isBreathingActive ? 'Pause' : 'Resume'}
                    </button>
                    <button
                      onClick={() => {
                        setBreathPhase('Inhale');
                        setBreathSeconds(4);
                      }}
                      className="p-1.5 rounded-full text-white/40 hover:text-white"
                      title="Reset"
                    >
                      <RefreshCw className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="my-auto space-y-1.5 py-2 text-xs">
                  <div className="p-2 rounded-sm bg-[#0A0A0A] border border-white/10">
                    <span className="font-semibold text-white">5 Things</span> you can see right now.
                  </div>
                  <div className="p-2 rounded-sm bg-[#0A0A0A] border border-white/10">
                    <span className="font-semibold text-white">4 Things</span> you can physically touch.
                  </div>
                  <div className="p-2 rounded-sm bg-[#0A0A0A] border border-white/10">
                    <span className="font-semibold text-white">3 Things</span> you can hear in room.
                  </div>
                  <div className="p-2 rounded-sm bg-[#0A0A0A] border border-white/10">
                    <span className="font-semibold text-white">2 Things</span> you can smell.
                  </div>
                  <div className="p-2 rounded-sm bg-[#0A0A0A] border border-white/10">
                    <span className="font-semibold text-white">1 Thing</span> you are grateful for.
                  </div>
                </div>
              )}

              <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] text-white/40">
                <span className="flex items-center gap-1 text-white/60">
                  <ShieldCheck className="w-3 h-3" /> End-to-End Encrypted
                </span>
                <span>iOS & Android Native</span>
              </div>
            </div>
          )}

          {/* APP 2: DES EXPERT SYSTEM */}
          {activeApp === 'diabetes-expert' && (
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-sm bg-white/5 border border-white/15 flex items-center justify-center text-white">
                      <Activity className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white tracking-wider uppercase">DES Clinical</h4>
                      <p className="text-[10px] text-white/40 font-light">24+ Rule Inference Engine</p>
                    </div>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 font-mono">
                    Expo & Python
                  </span>
                </div>
              </div>

              {/* Assessment Form */}
              <div className="my-auto space-y-2 text-xs">
                {!desResult ? (
                  <>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-wider text-white/40">Family History:</label>
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          onClick={() => setDesAnswers({ ...desAnswers, familyHistory: true })}
                          className={`py-1.5 px-2 rounded-sm border text-center transition-all text-[11px] ${
                            desAnswers.familyHistory
                              ? 'bg-white text-black border-white font-semibold'
                              : 'bg-[#0A0A0A] border-white/10 text-white/50'
                          }`}
                        >
                          Yes (Immediate)
                        </button>
                        <button
                          onClick={() => setDesAnswers({ ...desAnswers, familyHistory: false })}
                          className={`py-1.5 px-2 rounded-sm border text-center transition-all text-[11px] ${
                            !desAnswers.familyHistory
                              ? 'bg-white text-black border-white font-semibold'
                              : 'bg-[#0A0A0A] border-white/10 text-white/50'
                          }`}
                        >
                          No History
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-wider text-white/40">Physical Activity:</label>
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          onClick={() => setDesAnswers({ ...desAnswers, activity: 'moderate' })}
                          className={`py-1.5 px-2 rounded-sm border text-center transition-all text-[11px] ${
                            desAnswers.activity === 'moderate'
                              ? 'bg-white text-black border-white font-semibold'
                              : 'bg-[#0A0A0A] border-white/10 text-white/50'
                          }`}
                        >
                          Active
                        </button>
                        <button
                          onClick={() => setDesAnswers({ ...desAnswers, activity: 'sedentary' })}
                          className={`py-1.5 px-2 rounded-sm border text-center transition-all text-[11px] ${
                            desAnswers.activity === 'sedentary'
                              ? 'bg-white text-black border-white font-semibold'
                              : 'bg-[#0A0A0A] border-white/10 text-white/50'
                          }`}
                        >
                          Sedentary
                        </button>
                      </div>
                    </div>

                    <button
                      id="btn-run-inference"
                      onClick={calculateDesRisk}
                      className="w-full mt-3 py-2 bg-white hover:bg-white/90 text-black font-semibold rounded-sm shadow-md transition-all text-xs uppercase tracking-wider"
                    >
                      Run Inference Engine
                    </button>
                  </>
                ) : (
                  <div className="p-3 rounded-sm bg-[#0A0A0A] border border-white/15 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-widest text-white/40">Clinical Evaluation</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20">
                        {desResult.category}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-light text-white font-mono">{desResult.score}</span>
                      <span className="text-[10px] text-white/40">/ 100 Clinical Index</span>
                    </div>

                    <div className="space-y-1 pt-2 border-t border-white/10">
                      {desResult.recommendations.map((r, i) => (
                        <p key={i} className="text-[9px] text-white/70 flex items-start gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5 text-white/90 mt-0.5 shrink-0" />
                          <span>{r}</span>
                        </p>
                      ))}
                    </div>

                    <button
                      onClick={() => setDesResult(null)}
                      className="w-full text-center text-[10px] uppercase tracking-wider text-white/50 hover:text-white pt-1"
                    >
                      ← Reset Questionnaire
                    </button>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] text-white/40">
                <span>Weighted Clinical Matrix</span>
                <span>Expo Framework</span>
              </div>
            </div>
          )}

          {/* APP 3: COFFEE BRAIN AI */}
          {activeApp === 'coffee-brain' && (
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-sm bg-white/5 border border-white/15 flex items-center justify-center text-white">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white tracking-wider uppercase">Coffee Brain</h4>
                      <p className="text-[10px] text-white/40 font-light">SME Automation AI</p>
                    </div>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 font-mono">
                    CV & NLP
                  </span>
                </div>
              </div>

              {/* Simulation Box */}
              <div className="my-auto space-y-2 text-xs">
                <div className="p-2.5 rounded-sm bg-[#0A0A0A] border border-white/10">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-semibold text-white uppercase tracking-wider flex items-center gap-1">
                      <Scan className="w-3 h-3 text-white/70" /> Vision Scanner
                    </span>
                    <span className="text-[9px] text-white/40 font-mono">REST API</span>
                  </div>

                  {scanState === 'scanning' ? (
                    <div className="h-16 flex flex-col items-center justify-center bg-white/5 rounded-sm border border-dashed border-white/20">
                      <RefreshCw className="w-3.5 h-3.5 text-white animate-spin mb-1" />
                      <span className="text-[10px] text-white/60">Extracting product features...</span>
                    </div>
                  ) : (
                    <div className="p-2 bg-white/5 rounded-sm border border-white/10 space-y-1">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-medium text-white truncate max-w-[160px]">{activeItem.name}</span>
                        <span className="text-white/80 font-mono">{activeItem.confidence}</span>
                      </div>
                      <div className="flex justify-between text-[9px] text-white/40">
                        <span>SKU: {activeItem.sku}</span>
                        <span>Stock: {activeItem.stock}</span>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleScanSimulation}
                    disabled={scanState === 'scanning'}
                    className="w-full mt-2 py-1.5 bg-white text-black hover:bg-white/90 rounded-sm text-[10px] font-semibold uppercase tracking-wider transition-all"
                  >
                    Simulate Product Scan
                  </button>
                </div>

                <div className="p-2.5 rounded-sm bg-[#0A0A0A] border border-white/10 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-wider text-white/40">NLP Review Sentiment</span>
                    <span className="text-[9px] font-mono text-white font-bold">{sentimentAnalysis.score}% Pos</span>
                  </div>
                  <p className="text-[9px] italic text-white/70 font-light">"{sampleReview}"</p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] text-white/40">
                <span>Automated PO System</span>
                <span>Django + React</span>
              </div>
            </div>
          )}

          {/* Bottom Home Bar */}
          <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mt-2" />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/40">
        <Smartphone className="w-3 h-3 text-white/60" />
        <span>Mobile Engineering Architecture Preview</span>
      </div>
    </div>
  );
};
