import { useState } from "react";

const s = {
  app: { fontFamily:"'Segoe UI',system-ui,sans-serif", background:"#0f1923", minHeight:"100vh", color:"#e8eaf0" },
  header: { background:"linear-gradient(135deg,#1a2840,#0f1923)", borderBottom:"2px solid #c8a84b", padding:"16px 20px", display:"flex", alignItems:"center", gap:"12px" },
  logo: { fontSize:"20px", fontWeight:"800", color:"#c8a84b" },
  card: { background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"12px", padding:"16px 20px", margin:"6px 16px" },
  btn: { padding:"10px 20px", borderRadius:"8px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"14px" },
  btnGray: { background:"#2a3a54", color:"#8899aa" },
  input: { width:"100%", background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"8px", padding:"12px 16px", color:"#e8eaf0", fontSize:"14px", outline:"none", boxSizing:"border-box" },
  alpha: { padding:"6px 10px", borderRadius:"6px", border:"none", cursor:"pointer", fontSize:"12px", fontWeight:"700", minWidth:"28px" },
};

const TERMS = [
  { term:"Accessible (as applied to equipment)", ref:"NEC Art. 100", def:"Admitting close approach; not guarded by locked doors, elevation, or other effective means." },
  { term:"Accessible (as applied to wiring methods)", ref:"NEC Art. 100", def:"Capable of being removed or exposed without damaging the building structure or finish, or not permanently closed in by the structure or finish of the building." },
  { term:"Ampacity", ref:"NEC Art. 100", def:"The maximum current, in amperes, that a conductor can carry continuously under the conditions of use without exceeding its temperature rating." },
  { term:"Appliance", ref:"NEC Art. 100", def:"Utilization equipment, generally other than industrial, normally built in standardized sizes or types, which is installed or connected as a unit to perform one or more functions." },
  { term:"Arc-Fault Circuit Interrupter (AFCI)", ref:"NEC Art. 100", def:"A device intended to provide protection from the effects of arc faults by recognizing characteristics unique to arcing and by functioning to de-energize the circuit when an arc fault is detected." },
  { term:"Authority Having Jurisdiction (AHJ)", ref:"NEC Art. 100", def:"The organization, office, or individual responsible for enforcing the requirements of a code or standard, or their designated representative." },
  { term:"Bonding (Bonded)", ref:"NEC Art. 100", def:"The permanent joining of metallic parts to form an electrically conductive path that ensures electrical continuity and the capacity to conduct safely any current likely to be imposed." },
  { term:"Bonding Conductor or Jumper", ref:"NEC Art. 100", def:"A reliable conductor to ensure the required electrical conductivity between metal parts required to be electrically connected." },
  { term:"Branch Circuit", ref:"NEC Art. 100", def:"The circuit conductors between the final overcurrent device protecting the circuit and the outlet(s)." },
  { term:"Branch Circuit, Appliance", ref:"NEC Art. 100", def:"A branch circuit that supplies energy to one or more outlets to which appliances are to be connected and that has no permanently connected luminaires that are not a part of an appliance." },
  { term:"Branch Circuit, General Purpose", ref:"NEC Art. 100", def:"A branch circuit that supplies two or more receptacles or outlets for lighting and appliances." },
  { term:"Branch Circuit, Individual", ref:"NEC Art. 100", def:"A branch circuit that supplies only one utilization equipment." },
  { term:"Branch Circuit, Multiwire", ref:"NEC Art. 100", def:"A branch circuit that consists of two or more ungrounded conductors that have a voltage between them, and a grounded conductor that has equal voltage between it and each ungrounded conductor of the circuit and that is connected to the neutral or grounded conductor of the system." },
  { term:"Circuit Breaker", ref:"NEC Art. 100", def:"A device designed to open and close a circuit by nonautomatic means and to open the circuit automatically on a predetermined overcurrent without damage to itself when properly applied within its rating." },
  { term:"Conductor, Bare", ref:"NEC Art. 100", def:"A conductor having no covering or electrical insulation whatsoever." },
  { term:"Conductor, Covered", ref:"NEC Art. 100", def:"A conductor encased within material of composition or thickness that is not recognized by this Code as electrical insulation." },
  { term:"Conductor, Insulated", ref:"NEC Art. 100", def:"A conductor encased within material of composition and thickness that is recognized by this Code as electrical insulation." },
  { term:"Conduit Body", ref:"NEC Art. 100", def:"A separate portion of a conduit or tubing system that provides access through a removable cover(s) to the interior of the system at a junction of two or more sections of the system or at a terminal point of the system." },
  { term:"Continuous Load", ref:"NEC Art. 100", def:"A load where the maximum current is expected to continue for 3 hours or more." },
  { term:"Controller", ref:"NEC Art. 100", def:"A device or group of devices that serves to govern, in some predetermined manner, the electric power delivered to the apparatus to which it is connected." },
  { term:"Copper-Clad Aluminum Conductors", ref:"NEC Art. 100", def:"Conductors drawn from a copper-clad aluminum rod with the copper metallurgically bonded to an aluminum core. The copper forms a minimum of 10 percent of the cross-sectional area of a solid conductor." },
  { term:"Cutout Box", ref:"NEC Art. 100", def:"An enclosure designed for surface mounting that has swinging doors or covers secured directly to and telescoping with the walls of the box proper." },
  { term:"Dead Front", ref:"NEC Art. 100", def:"Without live parts exposed to a person on the operating side of the equipment." },
  { term:"Demand Factor", ref:"NEC Art. 100", def:"The ratio of the maximum demand of a system, or part of a system, to the total connected load of a system or the part of the system under consideration." },
  { term:"Device", ref:"NEC Art. 100", def:"A unit of an electrical system, other than a conductor, that carries or controls electric energy as its principal function." },
  { term:"Disconnecting Means", ref:"NEC Art. 100", def:"A device, or group of devices, or other means by which the conductors of a circuit can be disconnected from their source of supply." },
  { term:"Dwelling, Multifamily", ref:"NEC Art. 100", def:"A building that contains three or more dwelling units." },
  { term:"Dwelling, One-Family", ref:"NEC Art. 100", def:"A building that consists solely of one dwelling unit." },
  { term:"Dwelling, Two-Family", ref:"NEC Art. 100", def:"A building that consists solely of two dwelling units." },
  { term:"Dwelling Unit", ref:"NEC Art. 100", def:"A single unit, providing complete and independent living facilities for one or more persons, including permanent provisions for living, sleeping, cooking, and sanitation." },
  { term:"Electrically Safe Work Condition", ref:"NEC Art. 100", def:"A state in which an electrical conductor or circuit part has been disconnected from energized parts, locked/tagged in accordance with established standards, tested to verify the absence of voltage, and grounded if necessary." },
  { term:"Enclosure", ref:"NEC Art. 100", def:"The case or housing of apparatus, or the fence or walls surrounding an installation to prevent personnel from accidentally contacting energized parts or to protect the equipment from physical damage." },
  { term:"Equipment", ref:"NEC Art. 100", def:"A general term including material, fittings, devices, appliances, luminaires, apparatus, machinery, and the like used as a part of, or in connection with, an electrical installation." },
  { term:"Equipment Grounding Conductor (EGC)", ref:"NEC Art. 100", def:"The conductive path(s) that provides a ground-fault current path and connects normally non-current-carrying metal parts of equipment together and to the system grounded conductor or to the grounding electrode conductor, or both." },
  { term:"Exposed (as applied to live parts)", ref:"NEC Art. 100", def:"Capable of being inadvertently touched or approached nearer than a safe distance by a person. It is applied to parts that are not suitably guarded, isolated, or insulated." },
  { term:"Feeder", ref:"NEC Art. 100", def:"All circuit conductors between the service equipment, the source of a separately derived system, or other power supply source and the final branch-circuit overcurrent device." },
  { term:"Fitting", ref:"NEC Art. 100", def:"An accessory such as a locknut, bushing, or other part of a wiring system that is intended primarily to perform a mechanical rather than an electrical function." },
  { term:"Ground", ref:"NEC Art. 100", def:"The earth." },
  { term:"Ground Fault", ref:"NEC Art. 100", def:"An unintentional, electrically conducting connection between an ungrounded conductor of an electrical circuit and the normally non-current-carrying conductors, metallic enclosures, metallic raceways, metallic equipment, or earth." },
  { term:"Ground-Fault Circuit Interrupter (GFCI)", ref:"NEC Art. 100", def:"A device intended for the protection of personnel that functions to de-energize a circuit or portion thereof within an established period of time when a current to ground exceeds the values established for a Class A device (typically 4–6 mA)." },
  { term:"Grounded (Grounding)", ref:"NEC Art. 100", def:"Connected (connecting) to ground or to a conductive body that extends the ground connection." },
  { term:"Grounded Conductor", ref:"NEC Art. 100", def:"A system or circuit conductor that is intentionally grounded. (Note: This is the neutral — NOT the ground wire.)" },
  { term:"Grounding Electrode", ref:"NEC Art. 100", def:"A conducting object through which a direct connection to earth is established." },
  { term:"Grounding Electrode Conductor (GEC)", ref:"NEC Art. 100", def:"A conductor used to connect the system grounded conductor or the equipment to a grounding electrode or to a point on the grounding electrode system." },
  { term:"Grounding Electrode System", ref:"NEC 250.50", def:"All grounding electrodes present at a structure must be bonded together to form the grounding electrode system. Includes ground rods, metal water pipe, structural steel, concrete-encased electrodes (Ufer grounds), and plate electrodes." },
  { term:"Guarded", ref:"NEC Art. 100", def:"Covered, shielded, fenced, enclosed, or otherwise protected by means of suitable covers, casings, barriers, rails, screens, mats, or platforms to remove the likelihood of approach or contact by persons or objects to a point of danger." },
  { term:"Identified (as applied to equipment)", ref:"NEC Art. 100", def:"Recognizable as suitable for the specific purpose, function, use, environment, application, and so forth, where described in a particular Code requirement." },
  { term:"In Sight From (Within Sight From)", ref:"NEC Art. 100", def:"Where this Code specifies that one equipment shall be 'in sight from,' 'within sight from,' or 'within sight,' with reference to another equipment, one of the equipments specified shall be visible and not more than 15 m (50 ft) distant from the other." },
  { term:"Interrupting Rating", ref:"NEC Art. 100", def:"The highest current at rated voltage that a device is identified to interrupt under standard test conditions." },
  { term:"Isolated (as applied to a location)", ref:"NEC Art. 100", def:"Not readily accessible to persons unless special means for access are used." },
  { term:"Labeled", ref:"NEC Art. 100", def:"Equipment or materials to which has been attached a label, symbol, or other identifying mark of an organization that is acceptable to the authority having jurisdiction and concerned with product evaluation, that maintains periodic inspection of production of labeled equipment or materials, and by whose labeling the manufacturer indicates compliance with appropriate standards." },
  { term:"Lighting Outlet", ref:"NEC Art. 100", def:"An outlet intended for the direct connection of a lampholder or luminaire." },
  { term:"Listed", ref:"NEC Art. 100", def:"Equipment, materials, or services included in a list published by an organization that is acceptable to the authority having jurisdiction and concerned with evaluation of products or services, that maintains periodic inspection of production of listed equipment or materials or periodic evaluation of services, and whose listing states that either the equipment, material, or service meets appropriate designated standards or has been tested and found suitable for a specified purpose." },
  { term:"Location, Damp", ref:"NEC Art. 100", def:"Locations protected from weather and not subject to saturation with water or other liquids but subject to moderate degrees of moisture. Examples include partially protected locations under canopies, marquees, or roofed open porches." },
  { term:"Location, Dry", ref:"NEC Art. 100", def:"A location not normally subject to dampness or wetness. A location classified as dry may be temporarily subject to dampness or wetness, as in the case of a building under construction." },
  { term:"Location, Wet", ref:"NEC Art. 100", def:"Installations underground or in concrete slabs or masonry in direct contact with the earth; in locations subject to saturation with water or other liquids; and in unprotected locations exposed to weather." },
  { term:"Luminaire", ref:"NEC Art. 100", def:"A complete lighting unit consisting of a light source such as a lamp or lamps, together with the parts designed to distribute the light, to position and protect the lamps and ballast (where applicable), and to connect the lamps to the power supply." },
  { term:"Main Bonding Jumper", ref:"NEC Art. 100", def:"The connection between the grounded circuit conductor and the equipment grounding conductor, or the supply-side bonding jumper, or both, at the service." },
  { term:"Motor Circuit Switch", ref:"NEC Art. 100", def:"A switch, rated in horsepower, capable of interrupting the maximum operating overload current of a motor of the same horsepower rating as the switch at the rated voltage." },
  { term:"Neutral Conductor", ref:"NEC Art. 100", def:"The conductor connected to the neutral point of a system that is intended to carry current under normal conditions." },
  { term:"Neutral Point", ref:"NEC Art. 100", def:"The common point on a wye-connection in a polyphase system or midpoint on a single-phase, 3-wire system, or midpoint of a single-phase portion of a 3-phase delta system, where the common point is grounded." },
  { term:"Nonautomatic", ref:"NEC Art. 100", def:"Action requiring personal intervention for its control. As applied to an electric controller, nonautomatic control does not necessarily imply a manual controller, but only that personal intervention is necessary." },
  { term:"Outlet", ref:"NEC Art. 100", def:"A point on the wiring system at which current is taken to supply utilization equipment." },
  { term:"Overcurrent", ref:"NEC Art. 100", def:"Any current in excess of the rated current of equipment or the ampacity of a conductor. It may result from overload, short circuit, or ground fault." },
  { term:"Overcurrent Protective Device (OCPD)", ref:"NEC Art. 100", def:"A device capable of providing protection for service, feeder, and branch circuits and equipment over the full range of overcurrents between its rated current and its interrupting rating." },
  { term:"Overload", ref:"NEC Art. 100", def:"Operation of equipment in excess of normal, full-load rating, or of a conductor in excess of rated ampacity that, when it persists for a sufficient length of time, would cause damage or dangerous overheating." },
  { term:"Panelboard", ref:"NEC Art. 100", def:"A single panel or group of panel units designed for assembly in the form of a single panel, including buses and automatic overcurrent devices, and equipped with or without switches for the control of light, heat, or power circuits." },
  { term:"Power Outlet", ref:"NEC Art. 100", def:"An enclosed assembly that may include receptacles, circuit breakers, fuseholders, fused switches, buses, and watt-hour meter mounting means; intended to supply and control power to mobile homes, recreational vehicles, park trailers, or boats or to serve as a means for distributing power required to operate mobile or temporarily installed equipment." },
  { term:"Premises Wiring (System)", ref:"NEC Art. 100", def:"Interior and exterior wiring, including power, lighting, control, and signal circuit wiring together with all of their associated hardware, fittings, and wiring devices, both permanently and temporarily installed." },
  { term:"Qualified Person", ref:"NEC Art. 100", def:"One who has skills and knowledge related to the construction and operation of the electrical equipment and installations and has received safety training to recognize and avoid the hazards involved." },
  { term:"Raceway", ref:"NEC Art. 100", def:"An enclosed channel of metallic or nonmetallic materials designed expressly for holding wires, cables, or busbars, with additional functions as permitted in this Code." },
  { term:"Receptacle", ref:"NEC Art. 100", def:"A contact device installed at the outlet for the connection of an attachment plug, or for the direct connection of electrical utilization equipment designed to mate with the receptacle." },
  { term:"Receptacle Outlet", ref:"NEC Art. 100", def:"An outlet where one or more receptacles are installed." },
  { term:"Remote-Control Circuit", ref:"NEC Art. 100", def:"Any electric circuit that controls any other circuit through a relay or an equivalent device." },
  { term:"Separately Derived System", ref:"NEC Art. 100", def:"An electrical source, other than a service, having no direct connection(s) to circuit conductors of any other electrical source other than those established by grounding and bonding connections." },
  { term:"Service", ref:"NEC Art. 100", def:"The conductors and equipment for delivering electric energy from the serving utility to the wiring system of the premises served." },
  { term:"Service Conductors", ref:"NEC Art. 100", def:"The conductors from the service point to the service disconnecting means." },
  { term:"Service Drop", ref:"NEC Art. 100", def:"The overhead conductors between the utility electric supply system and the service point." },
  { term:"Service Entrance Conductors, Overhead System", ref:"NEC Art. 100", def:"The service conductors between the terminals of the service equipment and a point usually outside the building, clear of building walls, where joined by tap or splice to the service drop." },
  { term:"Service Equipment", ref:"NEC Art. 100", def:"The necessary equipment, usually consisting of a circuit breaker(s) or switch(es) and fuse(s) and their accessories, connected to the load end of service conductors to a building or other structure, or an otherwise designated area, and intended to constitute the main control and cutoff of the supply." },
  { term:"Service Point", ref:"NEC Art. 100", def:"The point of connection between the facilities of the serving utility and the premises wiring." },
  { term:"Short-Circuit Current Rating", ref:"NEC Art. 100", def:"The prospective symmetrical fault current at a nominal voltage to which an apparatus or system is able to be connected without sustaining damage exceeding defined acceptance criteria." },
  { term:"Signaling Circuit", ref:"NEC Art. 100", def:"Any electric circuit that energizes signaling equipment." },
  { term:"Surge Protective Device (SPD)", ref:"NEC Art. 100", def:"A protective device for limiting transient voltages by diverting or limiting surge current; it also prevents continued flow of follow current while remaining capable of repeating these functions and is designated as follows: Type 1, Type 2, Type 3, or Type 4." },
  { term:"Switch, General-Use", ref:"NEC Art. 100", def:"A switch intended for use in general distribution and branch circuits. It is rated in amperes, and it is capable of interrupting its rated current at its rated voltage." },
  { term:"Switch, General-Use Snap", ref:"NEC Art. 100", def:"A form of general-use switch constructed so that it can be installed in device boxes or on box covers, or otherwise used in conjunction with wiring systems recognized by this Code." },
  { term:"Switch, Isolating", ref:"NEC Art. 100", def:"A switch intended for isolating an electric circuit from the source of power. It has no interrupting rating, and it is intended to be operated only after the circuit has been opened by some other means." },
  { term:"Switchboard", ref:"NEC Art. 100", def:"A large single panel, frame, or assembly of panels on which are mounted on the face, back, or both, switches, overcurrent and other protective devices, buses, and usually instruments." },
  { term:"Switchgear", ref:"NEC Art. 100", def:"An assembly completely enclosed on all sides and top with sheet metal (except for ventilating openings and inspection windows) and containing primary power circuit switching, interrupting devices, or both, with buses and connections." },
  { term:"Transformer", ref:"NEC Art. 100", def:"An electrical device consisting of one or more windings that is used to transfer power between circuits, generally with changed values of voltage and current." },
  { term:"Ungrounded", ref:"NEC Art. 100", def:"Not connected to ground or to a conductive body that extends the ground connection." },
  { term:"Utilization Equipment", ref:"NEC Art. 100", def:"Equipment that utilizes electric energy for electronic, electromechanical, chemical, heating, lighting, or similar purposes." },
  { term:"Voltage (of a Circuit)", ref:"NEC Art. 100", def:"The greatest root-mean-square (rms) (effective) difference of potential between any two conductors of the circuit concerned." },
  { term:"Voltage to Ground", ref:"NEC Art. 100", def:"For grounded circuits, the voltage between the given conductor and that point or conductor of the circuit that is grounded; for ungrounded circuits, the greatest voltage between the given conductor and any other conductor of the circuit." },
  { term:"Wiring System", ref:"NEC Art. 100", def:"Raceways, cable assemblies, boxes, enclosures, and fittings installed as part of an electrical system." },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryPage({ onHome , onNavigate }) {
  const [search, setSearch] = useState("");
  const [letter, setLetter] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered = TERMS.filter(t => {
    const matchLetter = letter === "All" || t.term.toUpperCase().startsWith(letter);
    const q = search.toLowerCase();
    const matchSearch = !q || t.term.toLowerCase().includes(q) || t.def.toLowerCase().includes(q);
    return matchLetter && matchSearch;
  }).sort((a,b) => a.term.localeCompare(b.term));

  const usedLetters = new Set(TERMS.map(t => t.term[0].toUpperCase()));

  return (
    <div style={s.app}>

      <div style={{padding:"12px 16px 0", display:"flex", alignItems:"center", gap:"12px"}}>
        <button onClick={onHome} style={{background:"none", border:"1px solid rgba(200,168,75,0.3)", color:"#c8a84b", fontSize:"12px", fontFamily:"'Arial Black',Arial,sans-serif", fontWeight:"700", textTransform:"uppercase", padding:"6px 12px", borderRadius:"4px", cursor:"pointer"}}>← Back</button>
        <span style={{fontSize:"13px", color:"#7a8a9a"}}>NEC Glossary</span>
      </div>

      <div style={{padding:"12px 16px 0"}}>
        <input style={s.input} placeholder="Search terms or definitions..." value={search} onChange={e=>{setSearch(e.target.value); setLetter("All");}}/>
      </div>

      {/* Alphabet bar */}
      <div style={{padding:"8px 16px", display:"flex", flexWrap:"wrap", gap:"4px"}}>
        <button style={{...s.alpha, background:letter==="All"?"#c8a84b":"#2a3a54", color:letter==="All"?"#0f1923":"#8899aa"}}
          onClick={()=>{setLetter("All"); setSearch("");}}>All</button>
        {ALPHABET.filter(l => usedLetters.has(l)).map(l => (
          <button key={l}
            style={{...s.alpha, background:letter===l?"#c8a84b":"#2a3a54", color:letter===l?"#0f1923":"#8899aa"}}
            onClick={()=>{setLetter(l); setSearch("");}}>
            {l}
          </button>
        ))}
      </div>

      <div style={{padding:"4px 0 32px"}}>
        {filtered.length === 0 && (
          <div style={{padding:"32px 16px", textAlign:"center", color:"#8899aa"}}>No terms match your search.</div>
        )}
        {filtered.map((term, i) => {
          const isOpen = expanded === i;
          return (
            <div key={i} style={s.card}>
              <div style={{display:"flex", justifyContent:"space-between", gap:"12px", cursor:"pointer", alignItems:"flex-start"}}
                onClick={()=>setExpanded(isOpen ? null : i)}>
                <div style={{flex:1}}>
                  <div style={{fontWeight:"700", fontSize:"14px", color:"#e8eaf0"}}>{term.term}</div>
                  <div style={{fontSize:"11px", color:"#c8a84b", marginTop:"2px", fontWeight:"600"}}>{term.ref}</div>
                </div>
                <span style={{color:"#c8a84b", fontSize:"18px", fontWeight:"700", flexShrink:0}}>{isOpen?"−":"+"}</span>
              </div>
              {isOpen && (
                <div style={{marginTop:"10px", fontSize:"14px", color:"#aabbcc", lineHeight:"1.7", borderTop:"1px solid #2a3a54", paddingTop:"10px"}}>
                  {term.def}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
