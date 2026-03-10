import { useState } from "react";

const s = {
  app: { fontFamily:"'Segoe UI',system-ui,sans-serif", background:"#0f1923", minHeight:"100vh", color:"#e8eaf0" },
  header: { background:"linear-gradient(135deg,#1a2840,#0f1923)", borderBottom:"2px solid #c8a84b", padding:"16px 20px", display:"flex", alignItems:"center", gap:"12px" },
  logo: { fontSize:"20px", fontWeight:"800", color:"#c8a84b" },
  card: { background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"12px", padding:"20px", margin:"12px 16px" },
  btn: { padding:"10px 20px", borderRadius:"8px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"14px" },
  btnGold: { background:"linear-gradient(135deg,#c8a84b,#e8c878)", color:"#0f1923" },
  btnGray: { background:"#2a3a54", color:"#8899aa" },
  btnOutline: { background:"transparent", border:"1px solid #2a3a54", color:"#8899aa", borderRadius:"8px", padding:"8px 14px", cursor:"pointer", fontSize:"13px", fontWeight:"600" },
  input: { width:"100%", background:"#0f1923", border:"1px solid #2a3a54", borderRadius:"8px", padding:"12px 16px", color:"#e8eaf0", fontSize:"14px", outline:"none", boxSizing:"border-box" },
  table: { width:"100%", borderCollapse:"collapse", fontSize:"13px" },
  th: { padding:"8px 10px", textAlign:"left", color:"#c8a84b", fontWeight:"700", borderBottom:"1px solid #2a3a54", fontSize:"11px", textTransform:"uppercase" },
  td: { padding:"8px 10px", borderBottom:"1px solid rgba(42,58,84,0.5)", color:"#aabbcc", lineHeight:"1.4" },
  tdBold: { padding:"8px 10px", borderBottom:"1px solid rgba(42,58,84,0.5)", color:"#e8eaf0", fontWeight:"700" },
};

const TABLES = [
  {
    id: "310-16",
    title: "Table 310.16 — Conductor Ampacity (75°C, Copper)",
    ref: "NEC 310.16",
    tag: "Wiring",
    note: "Most common table on the exam. Used for branch circuits, feeders, and service conductors in conduit or cable.",
    headers: ["AWG / kcmil", "Ampacity (Copper)", "Ampacity (Aluminum)"],
    rows: [
      ["14 AWG", "20A", "—"],
      ["12 AWG", "25A", "20A"],
      ["10 AWG", "35A", "30A"],
      ["8 AWG", "50A", "40A"],
      ["6 AWG", "65A", "50A"],
      ["4 AWG", "85A", "65A"],
      ["3 AWG", "100A", "75A"],
      ["2 AWG", "115A", "90A"],
      ["1 AWG", "130A", "100A"],
      ["1/0 AWG", "150A", "120A"],
      ["2/0 AWG", "175A", "135A"],
      ["3/0 AWG", "200A", "155A"],
      ["4/0 AWG", "230A", "180A"],
      ["250 kcmil", "255A", "205A"],
      ["350 kcmil", "310A", "250A"],
      ["500 kcmil", "380A", "310A"],
    ]
  },
  {
    id: "250-66",
    title: "Table 250.66 — Grounding Electrode Conductor (GEC) Sizing",
    ref: "NEC 250.66",
    tag: "Grounding",
    note: "Sized based on the largest service-entrance conductor. Exam frequently tests GEC vs EGC differences.",
    headers: ["Service Conductor Size", "GEC Size (Copper)", "GEC Size (Aluminum)"],
    rows: [
      ["2 or smaller", "8 AWG", "6 AWG"],
      ["1 or 1/0", "6 AWG", "4 AWG"],
      ["2/0 or 3/0", "4 AWG", "2 AWG"],
      ["Over 3/0 – 350 kcmil", "2 AWG", "1/0 AWG"],
      ["Over 350 – 600 kcmil", "1/0 AWG", "3/0 AWG"],
      ["Over 600 – 1100 kcmil", "2/0 AWG", "4/0 AWG"],
      ["Over 1100 kcmil", "3/0 AWG", "250 kcmil"],
    ]
  },
  {
    id: "430-52",
    title: "Table 430.52 — Motor Branch-Circuit Short-Circuit Protection",
    ref: "NEC 430.52",
    tag: "Motors",
    note: "Maximum OCPD sizing for motor branch circuits. Inverse-time breakers most common on exams.",
    headers: ["Motor Type", "Non-Time Delay Fuse", "Dual Element Fuse", "Inverse Time Breaker", "Instantaneous Trip Breaker"],
    rows: [
      ["Single-phase motors", "300%", "175%", "250%", "800%"],
      ["AC polyphase (squirrel cage)", "300%", "175%", "250%", "800%"],
      ["Wound rotor", "150%", "150%", "150%", "800%"],
      ["Direct current", "150%", "150%", "150%", "250%"],
      ["Design E", "300%", "175%", "250%", "1100%"],
    ]
  },
  {
    id: "conduit-fill",
    title: "Conduit Fill — Maximum Conductors",
    ref: "NEC Chapter 9, Tables 4 & 5",
    tag: "Conduit",
    note: "1 conductor = 53%, 2 conductors = 31%, 3+ conductors = 40% of conduit cross-sectional area.",
    headers: ["Trade Size", "EMT Area (in²)", "40% Fill (in²)", "3+ #12 THHN Conductors"],
    rows: [
      ["½\"", "0.304", "0.122", "9"],
      ["¾\"", "0.533", "0.213", "16"],
      ["1\"", "0.864", "0.346", "26"],
      ["1¼\"", "1.496", "0.598", "44"],
      ["1½\"", "2.036", "0.814", "61"],
      ["2\"", "3.356", "1.342", "101"],
      ["2½\"", "5.858", "2.343", "176"],
      ["3\"", "8.846", "3.538", "266"],
    ]
  },
  {
    id: "transformer",
    title: "Transformer OCPD Sizing — Table 450.3(B)",
    ref: "NEC 450.3(B)",
    tag: "Transformers",
    note: "Primary protection for transformers 600V and under. Oversized OCPD requires secondary protection.",
    headers: ["Impedance", "Primary OCPD (max)", "Secondary OCPD (max)"],
    rows: [
      ["Not over 6%", "125%", "125%"],
      ["Not over 6% (no secondary OCPD)", "250%", "—"],
      ["Over 6%, not over 10%", "125%", "125%"],
      ["Over 6%, not over 10% (no secondary)", "125%", "—"],
    ]
  },
  {
    id: "box-fill",
    title: "Box Fill — Conductor Volume Allowances",
    ref: "NEC 314.16(B)",
    tag: "Boxes",
    note: "Each item counts toward total box volume. Clamps, studs, and devices each count. Grounds count as one total.",
    headers: ["Item", "# of Conductors (volume count)"],
    rows: [
      ["Each current-carrying conductor", "1"],
      ["Each conductor that passes through", "1"],
      ["All ground wires combined", "1"],
      ["Each strap with 1 device (switch/outlet)", "2"],
      ["Each internal cable clamp (all count as)", "1"],
      ["Each fixture stud or hickey", "1"],
    ]
  },
  {
    id: "voltage-drop",
    title: "Voltage Drop Formula",
    ref: "NEC 210.19(A) Informational Note",
    tag: "Calculations",
    note: "NEC recommends max 3% for branch circuits, 5% total (feeder + branch). Not mandatory but frequently tested.",
    headers: ["Variable", "Formula", "Notes"],
    rows: [
      ["VD (single phase)", "VD = (2 × K × I × D) / CM", "K = 12.9 (Cu), 21.2 (Al)"],
      ["VD (three phase)", "VD = (1.732 × K × I × D) / CM", "Multiply by √3"],
      ["CM (find wire size)", "CM = (2 × K × I × D) / VD", "Then look up in Table 310.16"],
      ["K (copper)", "12.9", "Resistance constant"],
      ["K (aluminum)", "21.2", "Resistance constant"],
      ["D", "One-way distance (feet)", "Not round trip"],
      ["I", "Load current (amps)", "—"],
      ["CM", "Circular mils of conductor", "From wire tables"],
    ]
  },
  {
    id: "service-sizing",
    title: "Service Load Calculation — Residential (Standard Method)",
    ref: "NEC 220.82",
    tag: "Calculations",
    note: "Optional method for dwellings. Uses 100% of first 10 kVA of general loads, 40% of remainder.",
    headers: ["Load Type", "Demand Factor", "Notes"],
    rows: [
      ["General lighting (3 VA/sq ft)", "100%", "All square footage"],
      ["Small appliance circuits", "100%", "Min 1500 VA each, min 2 circuits"],
      ["Laundry circuit", "100%", "Min 1500 VA"],
      ["First 10 kVA of above loads", "100%", "—"],
      ["Remainder above 10 kVA", "40%", "Optional method"],
      ["A/C or heat (larger of two)", "100%", "Never add both"],
      ["Electric range ≤12 kW", "8000 VA", "Table 220.55 Col C"],
      ["Dryer", "5000 VA min or nameplate", "—"],
    ]
  },
  {
    id: "afci-gfci",
    title: "AFCI & GFCI Requirements (2020 NEC)",
    ref: "NEC 210.12, 210.8",
    tag: "Protection",
    note: "2020 NEC expanded AFCI to nearly all dwelling locations. Know which locations require each type.",
    headers: ["Location", "AFCI Required", "GFCI Required"],
    rows: [
      ["Kitchens", "✓ Yes", "✓ Yes (countertop)"],
      ["Bedrooms", "✓ Yes", "—"],
      ["Living/family/dining rooms", "✓ Yes", "—"],
      ["Hallways and closets", "✓ Yes", "—"],
      ["Bathrooms", "✓ Yes", "✓ Yes (all)"],
      ["Garages", "✓ Yes", "✓ Yes"],
      ["Unfinished basements", "✓ Yes", "✓ Yes"],
      ["Crawl spaces", "—", "✓ Yes"],
      ["Outdoors", "—", "✓ Yes"],
      ["Boathouses", "—", "✓ Yes"],
      ["Kitchenettes (non-dwelling)", "—", "✓ Yes (countertop)"],
    ]
  },
  {
    id: "working-clearance",
    title: "Working Clearance — Table 110.26(A)(1)",
    ref: "NEC 110.26(A)(1)",
    tag: "Safety",
    note: "Required clear space in front of electrical equipment. Condition depends on what's across from the equipment.",
    headers: ["Condition", "0–150V", "151–600V"],
    rows: [
      ["Condition 1 — exposed live parts on one side, grounded on other", "3 ft", "3 ft"],
      ["Condition 2 — exposed live parts on both sides", "3 ft", "3.5 ft"],
      ["Condition 3 — exposed live parts on both sides (unguarded)", "3 ft", "4 ft"],
    ]
  },
];

const TAGS = ["All", "Wiring", "Grounding", "Motors", "Conduit", "Transformers", "Boxes", "Calculations", "Protection", "Safety"];

export default function NECReferencePage({ onHome , onNavigate }) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered = TABLES.filter(t => {
    const matchTag = activeTag === "All" || t.tag === activeTag;
    const q = search.toLowerCase();
    const matchSearch = !q || t.title.toLowerCase().includes(q) || t.ref.toLowerCase().includes(q) || t.note.toLowerCase().includes(q) || t.rows.some(r => r.some(c => c.toLowerCase().includes(q)));
    return matchTag && matchSearch;
  });

  return (
    <div style={s.app}>
      <div style={s.header}>
        <span style={{fontSize:"28px"}}>⚡</span>
        <div style={{flex:1}}>
          <div style={s.logo}>NEC Quick Reference</div>
          <div style={{fontSize:"12px", color:"#8899aa"}}>Most-tested tables & formulas</div>
        </div>
        <button style={{...s.btn, ...s.btnGray, padding:"8px 14px", fontSize:"13px"}} onClick={onHome}>Menu</button>
      </div>

      <div style={{padding:"12px 16px 0"}}>
        <input
          style={s.input}
          placeholder="Search tables, articles, values..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div style={{padding:"8px 16px", display:"flex", gap:"6px", flexWrap:"wrap"}}>
        {TAGS.map(tag => (
          <button key={tag}
            style={{...s.btnOutline, ...(activeTag===tag ? {background:"#c8a84b", color:"#0f1923", borderColor:"#c8a84b", fontWeight:"700"} : {})}}
            onClick={() => setActiveTag(tag)}>
            {tag}
          </button>
        ))}
      </div>

      <div style={{padding:"0 0 32px"}}>
        {filtered.length === 0 && (
          <div style={{padding:"40px 16px", textAlign:"center", color:"#8899aa"}}>No tables match your search.</div>
        )}
        {filtered.map(table => (
          <div key={table.id} style={s.card}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"12px", cursor:"pointer"}}
              onClick={() => setExpanded(expanded===table.id ? null : table.id)}>
              <div style={{flex:1}}>
                <div style={{fontSize:"14px", fontWeight:"700", color:"#e8eaf0", marginBottom:"4px"}}>{table.title}</div>
                <div style={{display:"flex", gap:"8px", flexWrap:"wrap"}}>
                  <span style={{fontSize:"11px", padding:"2px 8px", borderRadius:"4px", background:"rgba(200,168,75,0.15)", color:"#c8a84b", fontWeight:"700"}}>{table.ref}</span>
                  <span style={{fontSize:"11px", padding:"2px 8px", borderRadius:"4px", background:"#2a3a54", color:"#8899aa", fontWeight:"700"}}>{table.tag}</span>
                </div>
              </div>
              <span style={{color:"#c8a84b", fontSize:"18px", fontWeight:"700", marginTop:"2px"}}>{expanded===table.id ? "▲" : "▼"}</span>
            </div>

            {expanded === table.id && (
              <div style={{marginTop:"14px"}}>
                <div style={{fontSize:"13px", color:"#8899aa", lineHeight:"1.5", marginBottom:"12px", padding:"10px", background:"rgba(200,168,75,0.05)", borderRadius:"6px", borderLeft:"3px solid #c8a84b"}}>
                  💡 {table.note}
                </div>
                <div style={{overflowX:"auto"}}>
                  <table style={s.table}>
                    <thead>
                      <tr>{table.headers.map(h => <th key={h} style={s.th}>{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, i) => (
                        <tr key={i}>
                          <td style={s.tdBold}>{row[0]}</td>
                          {row.slice(1).map((cell, j) => <td key={j} style={s.td}>{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
