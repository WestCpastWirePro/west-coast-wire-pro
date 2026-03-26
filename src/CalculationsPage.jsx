import { useState } from "react";

const s = {
  app: { fontFamily:"'Segoe UI',system-ui,sans-serif", background:"#0f1923", minHeight:"100vh", color:"#e8eaf0" },
  header: { background:"linear-gradient(135deg,#1a2840,#0f1923)", borderBottom:"2px solid #c8a84b", padding:"16px 20px", display:"flex", alignItems:"center", gap:"12px" },
  logo: { fontSize:"20px", fontWeight:"800", color:"#c8a84b" },
  card: { background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"12px", padding:"20px", margin:"12px 16px" },
  btn: { padding:"12px 24px", borderRadius:"8px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"15px" },
  btnGold: { background:"linear-gradient(135deg,#c8a84b,#e8c878)", color:"#0f1923" },
  btnGray: { background:"#2a3a54", color:"#8899aa" },
  btnSm: { padding:"8px 16px", borderRadius:"6px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"13px" },
  input: { width:"100%", background:"#0f1923", border:"1px solid #2a3a54", borderRadius:"8px", padding:"10px 14px", color:"#e8eaf0", fontSize:"14px", outline:"none", boxSizing:"border-box" },
  label: { fontSize:"12px", color:"#8899aa", marginBottom:"4px", display:"block", fontWeight:"600" },
  step: { background:"#0f1923", border:"1px solid #2a3a54", borderRadius:"8px", padding:"12px 14px", marginBottom:"8px" },
  stepNum: { fontSize:"11px", color:"#c8a84b", fontWeight:"700", marginBottom:"4px" },
  formula: { fontFamily:"monospace", fontSize:"14px", color:"#e8c878", background:"rgba(200,168,75,0.08)", padding:"8px 12px", borderRadius:"6px", margin:"8px 0" },
  result: { fontSize:"24px", fontWeight:"800", color:"#c8a84b", textAlign:"center", padding:"16px", background:"rgba(200,168,75,0.08)", borderRadius:"8px", border:"1px solid rgba(200,168,75,0.3)" },
  resultSub: { fontSize:"13px", color:"#8899aa", textAlign:"center", marginTop:"4px" },
  errorBox: { background:"rgba(231,76,60,0.1)", border:"1px solid #e74c3c", borderRadius:"8px", padding:"12px", color:"#e74c3c", fontSize:"13px", margin:"8px 16px" },
};

// ── VOLTAGE DROP ──────────────────────────────────────────────
function VoltageDropCalc() {
  const [phase, setPhase] = useState("1");
  const [current, setCurrent] = useState("");
  const [distance, setDistance] = useState("");
  const [material, setMaterial] = useState("copper");
  const [cm, setCm] = useState("");
  const [mode, setMode] = useState("find-vd"); // find-vd | find-wire
  const [voltage, setVoltage] = useState("120");
  const [result, setResult] = useState(null);

  const K = material === "copper" ? 12.9 : 21.2;
  const multiplier = phase === "3" ? 1.732 : 2;

  const calculate = () => {
    const I = parseFloat(current), D = parseFloat(distance);
    if (isNaN(I) || isNaN(D) || I <= 0 || D <= 0) { setResult({error:"Enter valid current and distance."}); return; }
    if (mode === "find-vd") {
      const CM = parseFloat(cm);
      if (isNaN(CM) || CM <= 0) { setResult({error:"Enter valid circular mils (CM)."}); return; }
      const vd = (multiplier * K * I * D) / CM;
      const pct = (vd / parseFloat(voltage)) * 100;
      setResult({ vd: vd.toFixed(2), pct: pct.toFixed(1), steps: [
        `VD = (${multiplier} × ${K} × ${I}A × ${D}ft) / ${CM} CM`,
        `VD = ${(multiplier * K * I * D).toFixed(1)} / ${CM}`,
        `VD = ${vd.toFixed(2)} volts`,
        `Percentage = ${vd.toFixed(2)}V / ${voltage}V = ${pct.toFixed(1)}%`,
        pct <= 3 ? "✓ Within 3% recommendation (NEC 210.19 Note)" : "⚠️ Exceeds 3% recommendation — upsize conductor",
      ]});
    } else {
      const allowedVD = parseFloat(voltage) * 0.03;
      const cmNeeded = (multiplier * K * I * D) / allowedVD;
      const wireOptions = [
        {size:"14 AWG", cm:4110},{size:"12 AWG", cm:6530},{size:"10 AWG", cm:10380},
        {size:"8 AWG", cm:16510},{size:"6 AWG", cm:26240},{size:"4 AWG", cm:41740},
        {size:"3 AWG", cm:52620},{size:"2 AWG", cm:66360},{size:"1 AWG", cm:83690},
        {size:"1/0 AWG", cm:105600},{size:"2/0 AWG", cm:133100},{size:"3/0 AWG", cm:167800},{size:"4/0 AWG", cm:211600},
      ];
      const wire = wireOptions.find(w => w.cm >= cmNeeded);
      setResult({ cmNeeded: Math.ceil(cmNeeded), wire: wire?.size || "500 kcmil+", steps: [
        `Allowed VD = ${phase==="3"?208:120}V × 3% = ${allowedVD.toFixed(2)}V`,
        `CM = (${multiplier} × ${K} × ${I}A × ${D}ft) / ${allowedVD.toFixed(2)}V`,
        `CM = ${(multiplier * K * I * D).toFixed(1)} / ${allowedVD.toFixed(2)}`,
        `CM needed = ${Math.ceil(cmNeeded).toLocaleString()} CM`,
        wire ? `Minimum wire size = ${wire.size} (${wire.cm.toLocaleString()} CM)` : "Size exceeds 4/0 — use kcmil conductors",
      ]});
    }
  };

  return (
    <div>
      <div style={s.card}>
        <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"12px"}}>⚡ VOLTAGE DROP CALCULATOR</div>
        <div style={{display:"flex", gap:"8px", marginBottom:"12px"}}>
          {["find-vd","find-wire"].map(m => (
            <button key={m} style={{...s.btnSm, background:mode===m?"#c8a84b":"#2a3a54", color:mode===m?"#0f1923":"#8899aa"}}
              onClick={()=>{setMode(m);setResult(null);}}>
              {m==="find-vd"?"Find Voltage Drop":"Find Wire Size"}
            </button>
          ))}
        </div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"10px"}}>
          <div>
            <label style={s.label}>Phase</label>
            <select style={{...s.input}} value={phase} onChange={e=>setPhase(e.target.value)}>
              <option value="1">Single Phase</option>
              <option value="3">Three Phase</option>
            </select>
          </div>
          <div>
            <label style={s.label}>Material</label>
            <select style={{...s.input}} value={material} onChange={e=>setMaterial(e.target.value)}>
              <option value="copper">Copper (K=12.9)</option>
              <option value="aluminum">Aluminum (K=21.2)</option>
            </select>
          </div>
          <div>
            <label style={s.label}>Current (Amps)</label>
            <input style={s.input} type="number" placeholder="e.g. 20" value={current} onChange={e=>setCurrent(e.target.value)}/>
          </div>
          <div>
            <label style={s.label}>One-Way Distance (ft)</label>
            <input style={s.input} type="number" placeholder="e.g. 150" value={distance} onChange={e=>setDistance(e.target.value)}/>
          </div>
          {mode==="find-vd" && (
            <div style={{gridColumn:"1/-1"}}>
              <label style={s.label}>Conductor Size (Circular Mils)</label>
              <input style={s.input} type="number" placeholder="e.g. 6530 for #12 Cu" value={cm} onChange={e=>setCm(e.target.value)}/>
            </div>
          )}
        </div>
        <button style={{...s.btn, ...s.btnGold, width:"100%"}} onClick={calculate}>Calculate</button>
      </div>
      {result?.error && <div style={s.errorBox}>{result.error}</div>}
      {result && !result.error && (
        <div style={s.card}>
          <div style={{fontSize:"12px", color:"#c8a84b", fontWeight:"700", marginBottom:"10px"}}>STEP-BY-STEP SOLUTION</div>
          {result.steps.map((step, i) => (
            <div key={i} style={s.step}>
              <div style={s.stepNum}>STEP {i+1}</div>
              <div style={{fontFamily:"monospace", fontSize:"13px", color:"#e8eaf0"}}>{step}</div>
            </div>
          ))}
          <div style={{marginTop:"12px"}}>
            {result.vd && <div style={s.result}>{result.vd}V drop ({result.pct}%)</div>}
            {result.wire && <div style={s.result}>{result.wire}<div style={s.resultSub}>({result.cmNeeded?.toLocaleString()} CM minimum)</div></div>}
          </div>
        </div>
      )}
    </div>
  );
}

// ── MOTOR SIZING ──────────────────────────────────────────────
function MotorCalc() {
  const [hp, setHp] = useState("");
  const [voltage, setVoltage] = useState("240");
  const [phase, setPhase] = useState("1");
  const [result, setResult] = useState(null);

  // FLA values from NEC Table 430.248 (single phase) and 430.250 (three phase)
  const FLA_1PH = { "0.5":4.9,"0.75":6.9,"1":8,"1.5":10,"2":12,"3":17,"5":28,"7.5":40,"10":50 };
  const FLA_3PH_240 = { "0.5":2,"0.75":2.8,"1":3.6,"1.5":5.2,"2":6.8,"3":9.6,"5":15.2,"7.5":22,"10":28,"15":42,"20":54,"25":68,"30":80,"40":104,"50":130,"60":154,"75":192,"100":248 };
  const FLA_3PH_480 = Object.fromEntries(Object.entries(FLA_3PH_240).map(([k,v])=>[k,v/2]));

  const calculate = () => {
    const h = parseFloat(hp);
    if (isNaN(h)) { setResult({error:"Enter valid HP."}); return; }
    let fla;
    if (phase === "1") fla = FLA_1PH[hp];
    else fla = voltage === "480" ? FLA_3PH_480[hp] : FLA_3PH_240[hp];
    if (!fla) { setResult({error:"FLA not found for this combination. Check NEC Table 430.248/250."}); return; }
    const branchConductor = fla * 1.25;
    const ocpd = fla * 2.5; // Inverse time breaker 250%
    setResult({ fla, branchConductor: branchConductor.toFixed(1), ocpd: ocpd.toFixed(1),
      steps: [
        `FLA from NEC Table ${phase==="1"?"430.248":"430.250"} = ${fla}A`,
        `Branch circuit conductor = FLA × 125% = ${fla} × 1.25 = ${branchConductor.toFixed(1)}A`,
        `Max OCPD (inverse time breaker) = FLA × 250% = ${fla} × 2.5 = ${ocpd.toFixed(1)}A`,
        `Round up to next standard breaker size (240.6): ${[15,20,25,30,35,40,45,50,60,70,80,90,100,110,125,150,175,200].find(b=>b>=ocpd)}A`,
        `Overload protection = FLA × 115% = ${(fla*1.15).toFixed(1)}A (unless marked otherwise)`,
      ]
    });
  };

  return (
    <div>
      <div style={s.card}>
        <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"12px"}}>⚙️ MOTOR SIZING CALCULATOR</div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"10px"}}>
          <div>
            <label style={s.label}>Horsepower</label>
            <select style={{...s.input}} value={hp} onChange={e=>setHp(e.target.value)}>
              <option value="">Select HP</option>
              {["0.5","0.75","1","1.5","2","3","5","7.5","10","15","20","25","30","40","50","60","75","100"].map(h=>(
                <option key={h} value={h}>{h} HP</option>
              ))}
            </select>
          </div>
          <div>
            <label style={s.label}>Phase</label>
            <select style={{...s.input}} value={phase} onChange={e=>setPhase(e.target.value)}>
              <option value="1">Single Phase</option>
              <option value="3">Three Phase</option>
            </select>
          </div>
          <div>
            <label style={s.label}>Voltage</label>
            <select style={{...s.input}} value={voltage} onChange={e=>setVoltage(e.target.value)}>
              <option value="120">120V</option>
              <option value="240">240V</option>
              <option value="480">480V</option>
            </select>
          </div>
        </div>
        <button style={{...s.btn, ...s.btnGold, width:"100%"}} onClick={calculate}>Calculate</button>
      </div>
      {result?.error && <div style={s.errorBox}>{result.error}</div>}
      {result && !result.error && (
        <div style={s.card}>
          <div style={{fontSize:"12px", color:"#c8a84b", fontWeight:"700", marginBottom:"10px"}}>STEP-BY-STEP SOLUTION</div>
          {result.steps.map((step, i) => <div key={i} style={s.step}><div style={s.stepNum}>STEP {i+1}</div><div style={{fontFamily:"monospace", fontSize:"13px", color:"#e8eaf0"}}>{step}</div></div>)}
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"10px", marginTop:"12px"}}>
            {[["FLA", result.fla + "A"], ["Min Conductor", result.branchConductor + "A"], ["Max OCPD", result.ocpd + "A"]].map(([label, val]) => (
              <div key={label} style={{textAlign:"center", padding:"12px", background:"rgba(200,168,75,0.08)", borderRadius:"8px", border:"1px solid rgba(200,168,75,0.2)"}}>
                <div style={{fontSize:"18px", fontWeight:"800", color:"#c8a84b"}}>{val}</div>
                <div style={{fontSize:"11px", color:"#8899aa", marginTop:"2px"}}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── TRANSFORMER SIZING ─────────────────────────────────────────
function TransformerCalc() {
  const [kva, setKva] = useState("");
  const [primaryV, setPrimaryV] = useState("480");
  const [secondaryV, setSecondaryV] = useState("120");
  const [phase, setPhase] = useState("1");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const k = parseFloat(kva), pv = parseFloat(primaryV), sv = parseFloat(secondaryV);
    if (isNaN(k)||isNaN(pv)||isNaN(sv)||k<=0) { setResult({error:"Enter valid values."}); return; }
    const div = phase==="3" ? (pv * 1.732) : pv;
    const divS = phase==="3" ? (sv * 1.732) : sv;
    const primaryFLA = (k * 1000) / div;
    const secondaryFLA = (k * 1000) / divS;
    const primaryOCPD = primaryFLA * 1.25;
    const secondaryOCPD = secondaryFLA * 1.25;
    setResult({ primaryFLA: primaryFLA.toFixed(1), secondaryFLA: secondaryFLA.toFixed(1), primaryOCPD: primaryOCPD.toFixed(1), secondaryOCPD: secondaryOCPD.toFixed(1),
      steps: [
        `Primary FLA = (kVA × 1000) / ${phase==="3"?"(V × 1.732)":"V"} = (${k} × 1000) / ${div.toFixed(1)} = ${primaryFLA.toFixed(1)}A`,
        `Secondary FLA = (kVA × 1000) / ${phase==="3"?"(V × 1.732)":"V"} = (${k} × 1000) / ${divS.toFixed(1)} = ${secondaryFLA.toFixed(1)}A`,
        `Primary OCPD (125%) = ${primaryFLA.toFixed(1)} × 1.25 = ${primaryOCPD.toFixed(1)}A — NEC 450.3(B)`,
        `Secondary OCPD (125%) = ${secondaryFLA.toFixed(1)} × 1.25 = ${secondaryOCPD.toFixed(1)}A`,
        `If no secondary OCPD, primary may be sized at 250% = ${(primaryFLA*2.5).toFixed(1)}A`,
      ]
    });
  };

  return (
    <div>
      <div style={s.card}>
        <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"12px"}}>🔌 TRANSFORMER SIZING</div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"10px"}}>
          <div>
            <label style={s.label}>kVA Rating</label>
            <input style={s.input} type="number" placeholder="e.g. 25" value={kva} onChange={e=>setKva(e.target.value)}/>
          </div>
          <div>
            <label style={s.label}>Phase</label>
            <select style={{...s.input}} value={phase} onChange={e=>setPhase(e.target.value)}>
              <option value="1">Single Phase</option>
              <option value="3">Three Phase</option>
            </select>
          </div>
          <div>
            <label style={s.label}>Primary Voltage</label>
            <input style={s.input} type="number" placeholder="e.g. 480" value={primaryV} onChange={e=>setPrimaryV(e.target.value)}/>
          </div>
          <div>
            <label style={s.label}>Secondary Voltage</label>
            <input style={s.input} type="number" placeholder="e.g. 120" value={secondaryV} onChange={e=>setSecondaryV(e.target.value)}/>
          </div>
        </div>
        <button style={{...s.btn, ...s.btnGold, width:"100%"}} onClick={calculate}>Calculate</button>
      </div>
      {result?.error && <div style={s.errorBox}>{result.error}</div>}
      {result && !result.error && (
        <div style={s.card}>
          <div style={{fontSize:"12px", color:"#c8a84b", fontWeight:"700", marginBottom:"10px"}}>STEP-BY-STEP SOLUTION</div>
          {result.steps.map((step, i) => <div key={i} style={s.step}><div style={s.stepNum}>STEP {i+1}</div><div style={{fontFamily:"monospace", fontSize:"13px", color:"#e8eaf0"}}>{step}</div></div>)}
        </div>
      )}
    </div>
  );
}

// ── BOX FILL ──────────────────────────────────────────────────
function BoxFillCalc() {
  const [wireSize, setWireSize] = useState("14");
  const [conductors, setConductors] = useState("");
  const [devices, setDevices] = useState("");
  const [clamps, setClamps] = useState("0");
  const [grounds, setGrounds] = useState("1");
  const [result, setResult] = useState(null);

  const VOL = { "14":2, "12":2.25, "10":2.5, "8":3, "6":5 };

  const calculate = () => {
    const vol = VOL[wireSize];
    const c = parseInt(conductors)||0, d = parseInt(devices)||0, cl = parseInt(clamps)>0?1:0, g = parseInt(grounds)>0?1:0;
    const total = (c * vol) + (d * 2 * vol) + (cl * vol) + (g * vol);
    setResult({ total: total.toFixed(2), vol, steps: [
      `Volume per ${wireSize} AWG conductor = ${vol} in³ (NEC Table 314.16(B))`,
      `${c} conductors × ${vol} in³ = ${(c*vol).toFixed(2)} in³`,
      `${d} devices × (2 × ${vol} in³) = ${(d*2*vol).toFixed(2)} in³`,
      cl ? `Cable clamps (all count as 1) × ${vol} in³ = ${vol} in³` : "No cable clamps",
      g ? `All grounds combined × ${vol} in³ = ${vol} in³` : "No grounds",
      `Total volume required = ${total.toFixed(2)} in³`,
      `Common box volumes: 4" sq × 1.5" = 21 in³ | 4" sq × 2.125" = 30.3 in³`,
    ]});
  };

  return (
    <div>
      <div style={s.card}>
        <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"12px"}}>📦 BOX FILL CALCULATOR</div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"10px"}}>
          <div>
            <label style={s.label}>Largest Wire Size</label>
            <select style={{...s.input}} value={wireSize} onChange={e=>setWireSize(e.target.value)}>
              <option value="14">#14 (2.0 in³)</option>
              <option value="12">#12 (2.25 in³)</option>
              <option value="10">#10 (2.5 in³)</option>
              <option value="8">#8 (3.0 in³)</option>
              <option value="6">#6 (5.0 in³)</option>
            </select>
          </div>
          <div>
            <label style={s.label}>Current-Carrying Conductors</label>
            <input style={s.input} type="number" placeholder="e.g. 4" value={conductors} onChange={e=>setConductors(e.target.value)}/>
          </div>
          <div>
            <label style={s.label}>Devices (switches/outlets)</label>
            <input style={s.input} type="number" placeholder="e.g. 1" value={devices} onChange={e=>setDevices(e.target.value)}/>
          </div>
          <div>
            <label style={s.label}>Internal Clamps?</label>
            <select style={{...s.input}} value={clamps} onChange={e=>setClamps(e.target.value)}>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>
          <div>
            <label style={s.label}>Ground wires present?</label>
            <select style={{...s.input}} value={grounds} onChange={e=>setGrounds(e.target.value)}>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
        </div>
        <button style={{...s.btn, ...s.btnGold, width:"100%"}} onClick={calculate}>Calculate</button>
      </div>
      {result && (
        <div style={s.card}>
          <div style={{fontSize:"12px", color:"#c8a84b", fontWeight:"700", marginBottom:"10px"}}>STEP-BY-STEP SOLUTION</div>
          {result.steps.map((step, i) => <div key={i} style={s.step}><div style={s.stepNum}>STEP {i+1}</div><div style={{fontFamily:"monospace", fontSize:"13px", color:"#e8eaf0"}}>{step}</div></div>)}
          <div style={{...s.result, marginTop:"12px"}}>{result.total} in³ required</div>
        </div>
      )}
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────
const CALCS = [
  { id:"vd", label:"Voltage Drop", icon:"⚡", desc:"Single & three phase, find VD or wire size" },
  { id:"motor", label:"Motor Sizing", icon:"⚙️", desc:"FLA, branch conductor, OCPD sizing" },
  { id:"transformer", label:"Transformer", icon:"🔌", desc:"Primary/secondary FLA and OCPD" },
  { id:"boxfill", label:"Box Fill", icon:"📦", desc:"NEC 314.16 volume calculations" },
];

export default function CalculationsPage({ onHome , onNavigate }) {
  const [active, setActive] = useState(null);

  return (
    <div style={s.app}>

      {!active && (
        <div style={{padding:"12px 0 32px"}}>
          <div style={{padding:"0 16px 8px", fontSize:"13px", color:"#8899aa", lineHeight:"1.6"}}>
            Enter values and get a full step-by-step solution — the same format you'll need to show on the exam. Each calculator includes the relevant NEC article reference.
          </div>
          {CALCS.map(c => (
            <div key={c.id} style={{...s.card, cursor:"pointer"}} onClick={()=>setActive(c.id)}>
              <div style={{display:"flex", gap:"14px", alignItems:"center"}}>
                <span style={{fontSize:"28px"}}>{c.icon}</span>
                <div style={{flex:1}}>
                  <div style={{fontWeight:"700", fontSize:"15px", color:"#e8eaf0"}}>{c.label}</div>
                  <div style={{fontSize:"12px", color:"#8899aa", marginTop:"2px"}}>{c.desc}</div>
                </div>
                <span style={{color:"#c8a84b", fontSize:"18px"}}>›</span>
              </div>
            </div>
          ))}
          <div style={{...s.card, borderColor:"rgba(200,168,75,0.3)", background:"rgba(200,168,75,0.04)"}}>
            <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"6px"}}>💡 Exam Tip</div>
            <div style={{fontSize:"13px", color:"#aabbcc", lineHeight:"1.5"}}>
              The California journeyman exam typically includes 6–10 calculation problems. Know voltage drop, motor sizing, and box fill cold — they show up every time.
            </div>
          </div>
        </div>
      )}

      {active === "vd" && <VoltageDropCalc />}
      {active === "motor" && <MotorCalc />}
      {active === "transformer" && <TransformerCalc />}
      {active === "boxfill" && <BoxFillCalc />}
    </div>
  );
}
