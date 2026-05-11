"use client";

const cols = [
  { title: "company 🏢", links: ["about us", "privacy policy", "contact"] },
  { title: "support 💬", links: ["terms", "shipping", "refunds"] },
  { title: "social 📱",  links: ["twitter / x 🐦", "instagram 📸", "youtube 📺"] },
];

function AlienScene() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <style>{`
        @keyframes shipHover   { 0%,100%{transform:translateY(0)}      50%{transform:translateY(-10px)} }
        @keyframes beamPulse   { 0%,100%{opacity:0.12} 50%{opacity:0.38} }
        @keyframes cycleMove   { from{transform:translateX(-160px)} to{transform:translateX(calc(100% + 160px))} }
        @keyframes wheelTurn   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes skaterMove  { from{transform:translateX(110%)} to{transform:translateX(-160px)} }
        @keyframes bobUp       { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes bobDown     { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
        @keyframes laserL      { 0%{transform:translateX(0);opacity:1} 100%{transform:translateX(90px);opacity:0} }
        @keyframes laserR      { 0%{transform:translateX(0);opacity:1} 100%{transform:translateX(-90px);opacity:0} }
        @keyframes twinkle     { 0%,100%{opacity:0.7} 50%{opacity:0.1} }
        @keyframes jumpBounce  { 0%,100%{transform:translateY(0)} 40%{transform:translateY(-20px)} 60%{transform:translateY(-14px)} }
        @keyframes moonDrift   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
      `}</style>

      <svg
        viewBox="0 0 900 220"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
        aria-hidden="true"
      >
        {/* Stars */}
        {[[50,12],[130,8],[200,18],[290,6],[370,16],[460,10],[540,20],[620,7],[700,15],[780,11],[860,19],[920,14],[80,30],[260,34],[500,28],[720,36],[840,29]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r={i%3===0?1.1:.7} fill="white"
            style={{animation:`twinkle ${1.5+i*0.28}s ${i*0.18}s ease-in-out infinite`,opacity:.65}}/>
        ))}

        {/* Moon */}
        <g style={{animation:"moonDrift 5s ease-in-out infinite"}}>
          <circle cx="840" cy="30" r="17" fill="#fffce8" opacity=".92"/>
          <circle cx="848" cy="24" r="17" fill="#05050f"/>
          <circle cx="830" cy="34" r="2.2" fill="#f0e68c" opacity=".35"/>
          <circle cx="836" cy="42" r="1.5" fill="#f0e68c" opacity=".25"/>
        </g>

        {/* Ground line */}
        <rect x="0" y="178" width="900" height="2" fill="#a8d400" opacity=".2" rx="1"/>

        {/* ══ 1. UFO HOVERING + BEAM ══ */}
        <g style={{transformOrigin:"148px 58px", animation:"shipHover 3.2s ease-in-out infinite"}}>
          <polygon points="122,68 174,68 196,178 100,178" fill="#a8d400"
            style={{animation:"beamPulse 2.2s ease-in-out infinite"}}/>
          <ellipse cx="148" cy="68" rx="52" ry="10" fill="#9b1d80" stroke="#000" strokeWidth="1.5"/>
          <ellipse cx="148" cy="56" rx="36" ry="16" fill="#cc2fa0" stroke="#000" strokeWidth="1.5"/>
          <ellipse cx="148" cy="46" rx="20" ry="14" fill="#8a5ecc" stroke="#000" strokeWidth="1.5"/>
          <ellipse cx="148" cy="46" rx="13" ry="9" fill="#00b8cc" opacity=".4"/>
          <circle cx="114" cy="67" r="3.5" fill="#a8d400"/>
          <circle cx="148" cy="70" r="3.5" fill="#ffdd00"/>
          <circle cx="182" cy="67" r="3.5" fill="#cc2fa0"/>
          {/* alien in dome — big cranium shape */}
          <path d="M140,36 Q140,26 148,26 Q156,26 156,36 Q156,44 148,45 Q140,44 140,36Z"
            fill="#a8d400" stroke="#000" strokeWidth="1"/>
          <ellipse cx="145" cy="37" rx="2.2" ry="3" fill="#000"/>
          <ellipse cx="151" cy="37" rx="2.2" ry="3" fill="#000"/>
          <circle cx="144.5" cy="36" r=".9" fill="white" opacity=".75"/>
          <circle cx="150.5" cy="36" r=".9" fill="white" opacity=".75"/>
          <line x1="144" y1="27" x2="140" y2="21" stroke="#000" strokeWidth="1" strokeLinecap="round"/>
          <circle cx="139.5" cy="20" r="2" fill="#cc2fa0"/>
          <line x1="152" y1="27" x2="156" y2="21" stroke="#000" strokeWidth="1" strokeLinecap="round"/>
          <circle cx="156.5" cy="20" r="2" fill="#a8d400"/>
        </g>

        {/* ══ 2. ALIEN CYCLIST ══ */}
        <g style={{animation:"cycleMove 8s .4s linear infinite"}}>
          <g style={{transformOrigin:"28px 163px", animation:"wheelTurn .55s linear infinite"}}>
            <circle cx="28" cy="163" r="14" fill="none" stroke="#a8d400" strokeWidth="2.5"/>
            <line x1="28" y1="149" x2="28" y2="177" stroke="#a8d400" strokeWidth="1.5"/>
            <line x1="14" y1="163" x2="42" y2="163" stroke="#a8d400" strokeWidth="1.5"/>
            <line x1="18" y1="153" x2="38" y2="173" stroke="#a8d400" strokeWidth="1"/>
            <line x1="38" y1="153" x2="18" y2="173" stroke="#a8d400" strokeWidth="1"/>
          </g>
          <g style={{transformOrigin:"64px 163px", animation:"wheelTurn .55s linear infinite"}}>
            <circle cx="64" cy="163" r="14" fill="none" stroke="#a8d400" strokeWidth="2.5"/>
            <line x1="64" y1="149" x2="64" y2="177" stroke="#a8d400" strokeWidth="1.5"/>
            <line x1="50" y1="163" x2="78" y2="163" stroke="#a8d400" strokeWidth="1.5"/>
            <line x1="54" y1="153" x2="74" y2="173" stroke="#a8d400" strokeWidth="1"/>
            <line x1="74" y1="153" x2="54" y2="173" stroke="#a8d400" strokeWidth="1"/>
          </g>
          <line x1="28" y1="163" x2="46" y2="142" stroke="#cc2fa0" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="64" y1="163" x2="46" y2="142" stroke="#cc2fa0" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="28" y1="163" x2="64" y2="163" stroke="#cc2fa0" strokeWidth="2" strokeLinecap="round"/>
          <line x1="64" y1="163" x2="72" y2="142" stroke="#cc2fa0" strokeWidth="2" strokeLinecap="round"/>
          <line x1="68" y1="141" x2="76" y2="141" stroke="#cc2fa0" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="46" y1="142" x2="46" y2="134" stroke="#8a5ecc" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="40" y1="133" x2="52" y2="133" stroke="#8a5ecc" strokeWidth="3.5" strokeLinecap="round"/>
          {/* alien rider */}
          <g style={{transformOrigin:"50px 118px", animation:"bobUp .45s ease-in-out infinite"}}>
            {/* torso */}
            <ellipse cx="50" cy="129" rx="7" ry="10" fill="#a8d400" stroke="#000" strokeWidth="1.2"/>
            {/* head — wide top tapers to chin, classic grey-alien proportions */}
            <path d="M37,112 Q37,96 50,96 Q63,96 63,112 Q63,122 50,124 Q37,122 37,112Z"
              fill="#a8d400" stroke="#000" strokeWidth="1.3"/>
            {/* large almond eyes */}
            <ellipse cx="44" cy="109" rx="4.5" ry="6" fill="white" stroke="#000" strokeWidth="1"/>
            <ellipse cx="56" cy="109" rx="4.5" ry="6" fill="white" stroke="#000" strokeWidth="1"/>
            <ellipse cx="44" cy="110" rx="2.5" ry="3.5" fill="#000"/>
            <ellipse cx="56" cy="110" rx="2.5" ry="3.5" fill="#000"/>
            <circle cx="43.2" cy="108.5" r="1" fill="white" opacity=".8"/>
            <circle cx="55.2" cy="108.5" r="1" fill="white" opacity=".8"/>
            {/* tiny nose slits */}
            <ellipse cx="50" cy="115" rx="1.5" ry=".9" fill="#8bba00" opacity=".6"/>
            {/* slim mouth */}
            <path d="M46,118 Q50,121 54,118" stroke="#000" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
            {/* antennae */}
            <line x1="44" y1="97" x2="39" y2="88" stroke="#000" strokeWidth="1.1" strokeLinecap="round"/>
            <circle cx="38.5" cy="87" r="2.3" fill="#cc2fa0"/>
            <line x1="56" y1="97" x2="61" y2="88" stroke="#000" strokeWidth="1.1" strokeLinecap="round"/>
            <circle cx="61.5" cy="87" r="2.3" fill="#ffdd00"/>
            {/* helmet visor */}
            <path d="M36,110 Q36,92 50,92 Q64,92 64,110" fill="#cc2fa0" stroke="#000" strokeWidth="1.2" fillOpacity=".5"/>
            {/* arms */}
            <line x1="57" y1="124" x2="68" y2="137" stroke="#a8d400" strokeWidth="3.5" strokeLinecap="round"/>
            <line x1="43" y1="126" x2="36" y2="137" stroke="#a8d400" strokeWidth="3.5" strokeLinecap="round"/>
            {/* legs */}
            <line x1="46" y1="139" x2="42" y2="151" stroke="#a8d400" strokeWidth="4" strokeLinecap="round"/>
            <line x1="54" y1="139" x2="58" y2="151" stroke="#a8d400" strokeWidth="4" strokeLinecap="round"/>
          </g>
        </g>

        {/* ══ 3. ALIEN BATTLE ══ */}
        {/* left fighter */}
        <g style={{transformOrigin:"390px 148px", animation:"bobUp 1.1s .2s ease-in-out infinite"}}>
          <ellipse cx="390" cy="158" rx="8" ry="11" fill="#a8d400" stroke="#000" strokeWidth="1.3"/>
          {/* head — tall cranium */}
          <path d="M373,140 Q373,120 390,120 Q407,120 407,140 Q407,152 390,154 Q373,152 373,140Z"
            fill="#a8d400" stroke="#000" strokeWidth="1.3"/>
          <ellipse cx="382" cy="137" rx="5.5" ry="7.5" fill="white" stroke="#000" strokeWidth="1"/>
          <ellipse cx="398" cy="137" rx="5.5" ry="7.5" fill="white" stroke="#000" strokeWidth="1"/>
          <ellipse cx="382" cy="138" rx="3" ry="4.5" fill="#8a5ecc"/>
          <ellipse cx="398" cy="138" rx="3" ry="4.5" fill="#8a5ecc"/>
          <ellipse cx="382" cy="138" rx="1.8" ry="3" fill="#000"/>
          <ellipse cx="398" cy="138" rx="1.8" ry="3" fill="#000"/>
          <circle cx="381" cy="136.5" r="1.1" fill="white" opacity=".8"/>
          <circle cx="397" cy="136.5" r="1.1" fill="white" opacity=".8"/>
          <ellipse cx="390" cy="145" rx="1.8" ry="1.1" fill="#8bba00" opacity=".6"/>
          <path d="M385,149 Q390,154 395,149" stroke="#000" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <line x1="381" y1="121" x2="375" y2="112" stroke="#000" strokeWidth="1.1" strokeLinecap="round"/>
          <circle cx="374" cy="111" r="2.4" fill="#ffdd00"/>
          <line x1="399" y1="121" x2="405" y2="112" stroke="#000" strokeWidth="1.1" strokeLinecap="round"/>
          <circle cx="406" cy="111" r="2.4" fill="#a8d400"/>
          {/* zapper arm */}
          <line x1="399" y1="154" x2="414" y2="150" stroke="#a8d400" strokeWidth="3.5" strokeLinecap="round"/>
          <rect x="413" y="147" width="20" height="7" rx="3.5" fill="#00b8cc" stroke="#000" strokeWidth="1"/>
          <rect x="431" y="145" width="5" height="11" rx="2" fill="#cc2fa0"/>
          <line x1="381" y1="154" x2="372" y2="150" stroke="#a8d400" strokeWidth="3.5" strokeLinecap="round"/>
          <line x1="384" y1="169" x2="380" y2="178" stroke="#a8d400" strokeWidth="4.5" strokeLinecap="round"/>
          <line x1="396" y1="169" x2="400" y2="178" stroke="#a8d400" strokeWidth="4.5" strokeLinecap="round"/>
          <rect x="436" y="148" width="22" height="3.5" rx="1.5" fill="#ffdd00"
            style={{animation:"laserL .5s ease-out infinite"}}/>
        </g>

        {/* right fighter (pink) */}
        <g style={{transformOrigin:"470px 148px", animation:"bobDown 1.1s .5s ease-in-out infinite"}}>
          <ellipse cx="470" cy="158" rx="8" ry="11" fill="#cc2fa0" stroke="#000" strokeWidth="1.3"/>
          <path d="M453,140 Q453,120 470,120 Q487,120 487,140 Q487,152 470,154 Q453,152 453,140Z"
            fill="#cc2fa0" stroke="#000" strokeWidth="1.3"/>
          <ellipse cx="462" cy="137" rx="5.5" ry="7.5" fill="white" stroke="#000" strokeWidth="1"/>
          <ellipse cx="478" cy="137" rx="5.5" ry="7.5" fill="white" stroke="#000" strokeWidth="1"/>
          <ellipse cx="462" cy="138" rx="3" ry="4.5" fill="#cc2fa0"/>
          <ellipse cx="478" cy="138" rx="3" ry="4.5" fill="#cc2fa0"/>
          <ellipse cx="462" cy="138" rx="1.8" ry="3" fill="#000"/>
          <ellipse cx="478" cy="138" rx="1.8" ry="3" fill="#000"/>
          <circle cx="461" cy="136.5" r="1.1" fill="white" opacity=".8"/>
          <circle cx="477" cy="136.5" r="1.1" fill="white" opacity=".8"/>
          <ellipse cx="470" cy="145" rx="1.8" ry="1.1" fill="#9b1d80" opacity=".6"/>
          <path d="M465,149 Q470,154 475,149" stroke="#000" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <line x1="462" y1="121" x2="456" y2="112" stroke="#000" strokeWidth="1.1" strokeLinecap="round"/>
          <circle cx="455" cy="111" r="2.4" fill="#8a5ecc"/>
          <line x1="478" y1="121" x2="484" y2="112" stroke="#000" strokeWidth="1.1" strokeLinecap="round"/>
          <circle cx="485" cy="111" r="2.4" fill="#cc2fa0"/>
          {/* zapper arm left */}
          <line x1="461" y1="154" x2="446" y2="150" stroke="#cc2fa0" strokeWidth="3.5" strokeLinecap="round"/>
          <rect x="425" y="147" width="22" height="7" rx="3.5" fill="#8a5ecc" stroke="#000" strokeWidth="1"/>
          <rect x="424" y="145" width="5" height="11" rx="2" fill="#a8d400"/>
          <line x1="479" y1="154" x2="488" y2="150" stroke="#cc2fa0" strokeWidth="3.5" strokeLinecap="round"/>
          <line x1="464" y1="169" x2="460" y2="178" stroke="#cc2fa0" strokeWidth="4.5" strokeLinecap="round"/>
          <line x1="476" y1="169" x2="480" y2="178" stroke="#cc2fa0" strokeWidth="4.5" strokeLinecap="round"/>
          <rect x="403" y="148" width="22" height="3.5" rx="1.5" fill="#cc2fa0"
            style={{animation:"laserR .5s .25s ease-out infinite"}}/>
        </g>
        {/* explosion */}
        {[[430,133,"#ffdd00"],[436,144,"#cc2fa0"],[424,141,"#a8d400"],[432,128,"#00b8cc"]].map(([x,y,c],i)=>(
          <circle key={i} cx={x} cy={y} r="3.5" fill={c}
            style={{animation:`twinkle ${.35+i*.12}s ${i*.08}s ease-in-out infinite`}}/>
        ))}
        <text x="424" y="125" fontSize="12" style={{animation:"twinkle .4s ease-in-out infinite"}}>💥</text>

        {/* ══ 4. DANCING ALIEN ══ */}
        <g style={{transformOrigin:"640px 148px", animation:"jumpBounce 1.3s .1s ease-in-out infinite"}}>
          <ellipse cx="640" cy="162" rx="8" ry="11" fill="#8a5ecc" stroke="#000" strokeWidth="1.3"/>
          {/* head */}
          <path d="M623,144 Q623,124 640,124 Q657,124 657,144 Q657,156 640,158 Q623,156 623,144Z"
            fill="#8a5ecc" stroke="#000" strokeWidth="1.3"/>
          <ellipse cx="632" cy="141" rx="5.5" ry="7.5" fill="white" stroke="#000" strokeWidth="1"/>
          <ellipse cx="648" cy="141" rx="5.5" ry="7.5" fill="white" stroke="#000" strokeWidth="1"/>
          <ellipse cx="632" cy="142" rx="3" ry="4.5" fill="#cc2fa0"/>
          <ellipse cx="648" cy="142" rx="3" ry="4.5" fill="#cc2fa0"/>
          <ellipse cx="632" cy="142" rx="1.8" ry="3" fill="#000"/>
          <ellipse cx="648" cy="142" rx="1.8" ry="3" fill="#000"/>
          <circle cx="631" cy="140.5" r="1.1" fill="white" opacity=".8"/>
          <circle cx="647" cy="140.5" r="1.1" fill="white" opacity=".8"/>
          <ellipse cx="640" cy="148" rx="1.8" ry="1.1" fill="#6a3eb5" opacity=".6"/>
          <path d="M635,152 Q640,157 645,152" stroke="#000" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <line x1="632" y1="125" x2="626" y2="115" stroke="#000" strokeWidth="1.1" strokeLinecap="round"/>
          <circle cx="625" cy="114" r="2.4" fill="#ffdd00"/>
          <line x1="648" y1="125" x2="654" y2="115" stroke="#000" strokeWidth="1.1" strokeLinecap="round"/>
          <circle cx="655" cy="114" r="2.4" fill="#a8d400"/>
          {/* arms up */}
          <line x1="632" y1="159" x2="619" y2="148" stroke="#8a5ecc" strokeWidth="4" strokeLinecap="round"/>
          <line x1="648" y1="159" x2="661" y2="148" stroke="#8a5ecc" strokeWidth="4" strokeLinecap="round"/>
          {/* legs */}
          <line x1="634" y1="173" x2="628" y2="178" stroke="#8a5ecc" strokeWidth="4.5" strokeLinecap="round"/>
          <line x1="646" y1="173" x2="652" y2="178" stroke="#8a5ecc" strokeWidth="4.5" strokeLinecap="round"/>
        </g>
        {[["♪",618,112,"#ffdd00","1s"],["♫",660,108,"#cc2fa0",".6s"],["✦",608,127,"#a8d400","1.4s"]].map(([t,x,y,c,d],i)=>(
          <text key={i} x={x} y={y} fontSize="11" fill={c}
            style={{animation:`twinkle 1.3s ${d} ease-in-out infinite`}}>{t}</text>
        ))}

        {/* ══ 5. ALIEN SKATEBOARDER ══ */}
        <g style={{animation:"skaterMove 9s 1s linear infinite"}}>
          <rect x="710" y="170" width="50" height="7" rx="3.5" fill="#ffdd00" stroke="#000" strokeWidth="1.2"/>
          <ellipse cx="720" cy="179" rx="5" ry="4" fill="#333" stroke="#000" strokeWidth="1"/>
          <ellipse cx="750" cy="179" rx="5" ry="4" fill="#333" stroke="#000" strokeWidth="1"/>
          {/* torso */}
          <ellipse cx="735" cy="158" rx="8" ry="11" fill="#00b8cc" stroke="#000" strokeWidth="1.3"/>
          {/* head */}
          <path d="M718,142 Q718,122 735,122 Q752,122 752,142 Q752,154 735,156 Q718,154 718,142Z"
            fill="#00b8cc" stroke="#000" strokeWidth="1.3"/>
          <ellipse cx="727" cy="139" rx="5.5" ry="7.5" fill="white" stroke="#000" strokeWidth="1"/>
          <ellipse cx="743" cy="139" rx="5.5" ry="7.5" fill="white" stroke="#000" strokeWidth="1"/>
          <ellipse cx="727" cy="140" rx="3" ry="4.5" fill="#8a5ecc"/>
          <ellipse cx="743" cy="140" rx="3" ry="4.5" fill="#8a5ecc"/>
          <ellipse cx="727" cy="140" rx="1.8" ry="3" fill="#000"/>
          <ellipse cx="743" cy="140" rx="1.8" ry="3" fill="#000"/>
          <circle cx="726" cy="138.5" r="1.1" fill="white" opacity=".8"/>
          <circle cx="742" cy="138.5" r="1.1" fill="white" opacity=".8"/>
          <ellipse cx="735" cy="147" rx="1.8" ry="1.1" fill="#009aaa" opacity=".6"/>
          <path d="M730,151 Q735,156 740,151" stroke="#000" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <line x1="727" y1="123" x2="721" y2="113" stroke="#000" strokeWidth="1.1" strokeLinecap="round"/>
          <circle cx="720" cy="112" r="2.4" fill="#cc2fa0"/>
          <line x1="743" y1="123" x2="749" y2="113" stroke="#000" strokeWidth="1.1" strokeLinecap="round"/>
          <circle cx="750" cy="112" r="2.4" fill="#ffdd00"/>
          {/* cap */}
          <path d="M717,138 Q717,118 735,118 Q753,118 753,138" fill="#cc2fa0" stroke="#000" strokeWidth="1.3" fillOpacity=".65"/>
          <rect x="715" y="136" width="40" height="5" rx="2.5" fill="#cc2fa0" stroke="#000" strokeWidth="1"/>
          <rect x="715" y="136" width="9" height="5" rx="2" fill="#9b1d80"/>
          {/* balance arms */}
          <line x1="727" y1="155" x2="715" y2="150" stroke="#00b8cc" strokeWidth="4" strokeLinecap="round"/>
          <line x1="743" y1="155" x2="755" y2="146" stroke="#00b8cc" strokeWidth="4" strokeLinecap="round"/>
          {/* legs */}
          <line x1="729" y1="169" x2="726" y2="172" stroke="#00b8cc" strokeWidth="4.5" strokeLinecap="round"/>
          <line x1="741" y1="169" x2="744" y2="172" stroke="#00b8cc" strokeWidth="4.5" strokeLinecap="round"/>
        </g>

      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contact" style={{
      background: "var(--bg)",
      borderTop: "1px solid var(--border)",
      padding: "4rem 2rem 2rem",
      position: "relative",
      zIndex: 1,
    }}>
      <style>{`
        .footer-link {
          color: var(--muted);
          text-decoration: none;
          font-family: var(--font-fun);
          font-size: 0.9rem;
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--lime); }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto 3rem;
        }

        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-bottom { font-size: 0.72rem !important; line-height: 1.7 !important; }
        }
        @media (max-width: 380px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Banner */}
      <div style={{ marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border)" }}>
        <div style={{
          borderRadius: "20px",
          border: "1px solid rgba(168,212,0,0.12)",
          overflow: "hidden",
          marginBottom: "1.5rem",
        }}>
          <AlienScene />
        </div>

        <div style={{ textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--font-wack)",
            fontSize: "clamp(2rem, 6vw, 3rem)",
            color: "var(--lime)",
            marginBottom: "0.4rem",
            lineHeight: 1,
          }}>
            H.A.C.K ✌️
          </h2>
          <p style={{ fontFamily: "var(--font-fun)", color: "var(--muted)", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
            hippie aliens collective — spreading vibes since the big bang
          </p>
        </div>
      </div>

      {/* Link grid */}
      <div className="footer-grid">
        {cols.map((col) => (
          <div key={col.title}>
            <h4 style={{ fontFamily: "var(--font-wack)", fontSize: "1rem", color: "var(--sky)", marginBottom: "1rem" }}>
              {col.title}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {col.links.map((link) => (
                <li key={link} style={{ marginBottom: "0.5rem", textTransform: "capitalize" }}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom" style={{
        textAlign: "center",
        color: "var(--muted)",
        fontFamily: "var(--font-fun)",
        fontSize: "0.82rem",
        paddingTop: "2rem",
        borderTop: "1px solid var(--border)",
        lineHeight: 1.5,
      }}>
        © 2025 H.A.C.K — Zura Tech Pvt. Ltd, Ranchi, JH &nbsp;|&nbsp; contact@hippiealiens.com &nbsp;|&nbsp; made with 💚 and cosmic energy
      </div>
    </footer>
  );
}