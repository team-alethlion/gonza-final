module.exports=[424399,a=>{"use strict";var b=a.i(187924),c=a.i(572131),d=a.i(357999),e=a.i(839761),f=a.i(660246),g=a.i(170106);let h=(0,g.default)("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);var i=a.i(501199),j=a.i(104720),k=a.i(883497),l=a.i(732860),m=a.i(963519),n=a.i(992258),o=a.i(167453),p=a.i(724669),q=a.i(104416),r=a.i(501027);let s=(0,g.default)("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);var t=a.i(50522);let u="#f05a2b",v="#80CED7",w="#0d0e1a",x="#111326",y="#181a2e",z="rgba(255,255,255,0.07)",A="#f0f0f5",B="rgba(240,240,245,0.45)",C="rgba(240,240,245,0.25)",D=()=>(0,b.jsx)("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

    .lp { font-family: 'Inter', sans-serif; background: ${w}; color: ${A}; }
    .lp *, .lp *::before, .lp *::after { box-sizing: border-box; }

    /* ── Animations ── */
    @keyframes lp-fade-up {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0);    }
    }
    @keyframes lp-fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes lp-shimmer {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }
    @keyframes lp-float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50%       { transform: translateY(-10px) rotate(1deg); }
    }
    @keyframes lp-spin-slow {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes lp-pulse-dot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50%       { opacity: 0.4; transform: scale(0.8); }
    }
    @keyframes lp-reveal {
      from { clip-path: inset(0 100% 0 0); }
      to   { clip-path: inset(0 0% 0 0);   }
    }

    .lp-fade-up   { animation: lp-fade-up  0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
    .lp-fade-in   { animation: lp-fade-in  0.6s ease forwards; }
    .lp-float     { animation: lp-float    5s ease-in-out infinite; }

    .lp-shimmer-text {
      background: linear-gradient(90deg, ${A} 20%, ${u} 50%, ${v} 65%, ${A} 80%);
      background-size: 250% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: lp-shimmer 4s linear infinite;
    }

    /* ── Grid overlay ── */
    .lp-grid-bg {
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 64px 64px;
    }

    /* ── Glow ── */
    .lp-glow-primary  { box-shadow: 0 0 80px rgba(37,40,97,0.6); }
    .lp-glow-orange   { box-shadow: 0 0 60px rgba(240,90,43,0.25); }

    /* ── Cards ── */
    .lp-card {
      background: ${y};
      border: 1px solid ${z};
      transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    }
    .lp-card:hover {
      border-color: rgba(255,255,255,0.14);
      transform: translateY(-2px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06);
    }

    /* ── Buttons ── */
    .lp-btn-primary {
      display: inline-flex; align-items: center; gap: 8px;
      background: ${u};
      color: #fff;
      font-weight: 600; font-size: 14px;
      padding: 12px 24px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
      text-decoration: none;
      white-space: nowrap;
    }
    .lp-btn-primary:hover {
      background: #d94e22;
      transform: translateY(-1px);
      box-shadow: 0 8px 24px rgba(240,90,43,0.35);
    }
    .lp-btn-ghost {
      display: inline-flex; align-items: center; gap: 6px;
      background: transparent;
      color: rgba(240,240,245,0.65);
      font-weight: 500; font-size: 14px;
      padding: 10px 18px;
      border-radius: 7px;
      border: 1px solid rgba(255,255,255,0.1);
      cursor: pointer;
      transition: background 0.2s, color 0.2s, border-color 0.2s;
      text-decoration: none;
    }
    .lp-btn-ghost:hover {
      background: rgba(255,255,255,0.06);
      color: ${A};
      border-color: rgba(255,255,255,0.18);
    }
    .lp-btn-outline {
      display: inline-flex; align-items: center; gap: 8px;
      background: transparent;
      color: ${A};
      font-weight: 600; font-size: 14px;
      padding: 12px 24px;
      border-radius: 8px;
      border: 1px solid rgba(255,255,255,0.15);
      cursor: pointer;
      transition: background 0.2s, border-color 0.2s, transform 0.15s;
      text-decoration: none;
    }
    .lp-btn-outline:hover {
      background: rgba(255,255,255,0.05);
      border-color: rgba(255,255,255,0.28);
      transform: translateY(-1px);
    }

    /* ── Badge ── */
    .lp-badge {
      display: inline-flex; align-items: center; gap: 7px;
      background: rgba(37,40,97,0.5);
      border: 1px solid rgba(128,206,215,0.2);
      border-radius: 999px;
      padding: 5px 14px;
      font-size: 12px;
      color: ${v};
      letter-spacing: 0.02em;
    }

    /* ── Section label ── */
    .lp-section-label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${u};
    }

    /* ── Mockup float shadow ── */
    .lp-mockup-shadow {
      filter: drop-shadow(0 40px 80px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(37,40,97,0.4));
    }

    /* ── Divider ── */
    .lp-h-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent); }

    /* ── Feature icon ── */
    .lp-feat-icon {
      width: 40px; height: 40px;
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      background: rgba(37,40,97,0.6);
      border: 1px solid rgba(128,206,215,0.15);
      transition: transform 0.3s cubic-bezier(.34,1.56,.64,1);
    }
    .lp-card:hover .lp-feat-icon { transform: scale(1.12) rotate(-4deg); }

    /* ── Contact hover ── */
    .lp-contact-card { transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease; }
    .lp-contact-card:hover { transform: translateY(-4px); }

    /* ── Nav ── */
    .lp-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      transition: background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease;
    }
    .lp-nav-blur {
      background: rgba(13,14,26,0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }

    /* ── Stats ── */
    .lp-stat-num {
      background: linear-gradient(135deg, ${A} 30%, ${v});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ── Pulse dot ── */
    .lp-dot { animation: lp-pulse-dot 2s ease-in-out infinite; }

    /* ── Scroll-reveal utility ── */
    .lp-reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1);
    }
    .lp-reveal.visible { opacity: 1; transform: translateY(0); }

    /* ── Image mockup glow ring ── */
    .lp-ring {
      position: absolute; inset: -2px;
      border-radius: inherit;
      background: linear-gradient(135deg, rgba(240,90,43,0.3), rgba(128,206,215,0.2));
      z-index: -1;
      filter: blur(30px);
    }

    @media (max-width: 640px) {
      .lp-btn-primary, .lp-btn-outline { padding: 11px 18px; font-size: 13px; }
    }
  `}),E=(a=.12)=>{let b=(0,c.useRef)(null),[d,e]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let c=new IntersectionObserver(([a])=>{a.isIntersecting&&e(!0)},{threshold:a});return b.current&&c.observe(b.current),()=>c.disconnect()},[a]),{ref:b,visible:d}},F=()=>{let[a,e]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let a=()=>e(window.scrollY>24);return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),(0,b.jsx)("nav",{className:`lp-nav ${a?"lp-nav-blur":""}`,style:{padding:"0 clamp(16px, 4vw, 48px)"},children:(0,b.jsxs)("div",{style:{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:64},children:[(0,b.jsx)("div",{style:{display:"flex",alignItems:"center",gap:8},children:(0,b.jsx)(d.Link,{to:"/",className:"flex items-center",children:(0,b.jsx)("img",{src:"/lovable-uploads/logo sys white-01.png",alt:"Gonza Logo",className:"h-8 md:h-10"})})}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10},children:[(0,b.jsx)(d.Link,{to:"/login",className:"lp-btn-ghost",style:{fontSize:13},children:"Log In"}),(0,b.jsxs)(d.Link,{to:"/signup",className:"lp-btn-primary",style:{fontSize:13,padding:"9px 18px"},children:["Get Started ",(0,b.jsx)(l.ArrowRight,{size:14})]})]})]})})},G=()=>(0,b.jsxs)("section",{className:"lp-grid-bg",style:{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:120,paddingBottom:80,overflow:"hidden"},children:[(0,b.jsx)("div",{style:{position:"absolute",top:"15%",left:"10%",width:500,height:500,background:"radial-gradient(circle, rgba(37,40,97,0.5) 0%, transparent 70%)",pointerEvents:"none"}}),(0,b.jsx)("div",{style:{position:"absolute",bottom:"10%",right:"5%",width:400,height:400,background:"radial-gradient(circle, rgba(240,90,43,0.12) 0%, transparent 70%)",pointerEvents:"none"}}),(0,b.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:700,height:400,background:"radial-gradient(ellipse, rgba(37,40,97,0.3) 0%, transparent 70%)",pointerEvents:"none"}}),(0,b.jsxs)("div",{style:{position:"relative",zIndex:1,textAlign:"center",maxWidth:760,padding:"0 20px",width:"100%"},children:[(0,b.jsxs)("div",{className:"lp-badge lp-fade-in",style:{animationDelay:"0.1s",opacity:0,marginBottom:32},children:[(0,b.jsx)("span",{className:"lp-dot",style:{width:6,height:6,borderRadius:"50%",background:"#4ade80",display:"inline-block"}}),"Built for African businesses",(0,b.jsx)(t.ChevronRight,{size:12,opacity:.6})]}),(0,b.jsxs)("h1",{className:"lp-fade-up",style:{fontSize:"clamp(36px, 6vw, 68px)",fontWeight:900,lineHeight:1.05,letterSpacing:"-0.03em",marginBottom:24,animationDelay:"0.2s",opacity:0,color:A},children:["Business management",(0,b.jsx)("br",{}),(0,b.jsx)("span",{className:"lp-shimmer-text",children:"at the speed of light."})]}),(0,b.jsx)("p",{className:"lp-fade-up",style:{fontSize:"clamp(15px, 2vw, 18px)",color:B,lineHeight:1.65,maxWidth:560,margin:"0 auto 40px",animationDelay:"0.32s",opacity:0},children:"Track sales, profits & expenses. Generate receipts, invoices & quotes — from one powerful, cloud-based platform designed for how you work."}),(0,b.jsxs)("div",{className:"lp-fade-up",style:{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",animationDelay:"0.44s",opacity:0},children:[(0,b.jsxs)(d.Link,{to:"/signup",className:"lp-btn-primary",children:["Start for Free ",(0,b.jsx)(l.ArrowRight,{size:15})]}),(0,b.jsx)(d.Link,{to:"/login",className:"lp-btn-outline",children:"Sign In"})]}),(0,b.jsx)("p",{className:"lp-fade-up",style:{marginTop:20,fontSize:12,color:C,animationDelay:"0.54s",opacity:0},children:"No credit card required · Cloud-based · Instant setup"})]}),(0,b.jsx)("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:80,background:`linear-gradient(to top, ${w}, transparent)`,pointerEvents:"none"}})]}),H=()=>{let{ref:a,visible:c}=E(.05);return(0,b.jsxs)("section",{ref:a,style:{position:"relative",background:w,overflow:"hidden",paddingBottom:"clamp(48px,7vw,96px)"},children:[(0,b.jsx)("div",{style:{position:"absolute",top:"20%",left:"50%",transform:"translateX(-50%)",width:900,height:400,background:"radial-gradient(ellipse, rgba(37,40,97,0.55) 0%, transparent 65%)",pointerEvents:"none"}}),(0,b.jsx)("div",{style:{position:"absolute",top:"30%",left:"15%",width:320,height:320,background:"radial-gradient(circle, rgba(240,90,43,0.1) 0%, transparent 70%)",pointerEvents:"none"}}),(0,b.jsx)("div",{style:{position:"absolute",top:"30%",right:"10%",width:280,height:280,background:"radial-gradient(circle, rgba(128,206,215,0.07) 0%, transparent 70%)",pointerEvents:"none"}}),(0,b.jsxs)("div",{className:`lp-reveal ${c?"visible":""}`,style:{maxWidth:1020,margin:"0 auto",padding:"0 clamp(16px,4vw,40px)",position:"relative",zIndex:1},children:[(0,b.jsxs)("div",{style:{borderRadius:16,overflow:"hidden",border:"1px solid rgba(255,255,255,0.1)",boxShadow:`
              0 0 0 1px rgba(255,255,255,0.04),
              0 32px 80px rgba(0,0,0,0.6),
              0 0 60px rgba(37,40,97,0.4),
              0 0 0 0.5px rgba(128,206,215,0.1)
            `},children:[(0,b.jsxs)("div",{style:{background:"rgba(20,22,42,0.98)",padding:"11px 16px",display:"flex",alignItems:"center",gap:10,borderBottom:"1px solid rgba(255,255,255,0.07)"},children:[(0,b.jsx)("div",{style:{display:"flex",gap:6,flexShrink:0},children:["#ff5f57","#ffbd2e","#28c840"].map(a=>(0,b.jsx)("div",{style:{width:11,height:11,borderRadius:"50%",background:a,opacity:.85}},a))}),(0,b.jsxs)("div",{style:{flex:1,maxWidth:340,margin:"0 auto",height:24,background:"rgba(255,255,255,0.05)",borderRadius:6,border:"1px solid rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[(0,b.jsx)("span",{style:{width:7,height:7,borderRadius:"50%",background:"#4ade80",opacity:.8,flexShrink:0}}),(0,b.jsx)("span",{style:{fontSize:10,color:"rgba(240,240,245,0.35)",letterSpacing:"0.01em"},children:"gonzasystems.com"})]}),(0,b.jsx)("div",{style:{width:50,flexShrink:0}})]}),(0,b.jsxs)("div",{style:{position:"relative",lineHeight:0},children:[(0,b.jsx)("img",{src:"/lovable-uploads/GDG.png",alt:"Gonza Systems — dashboard on desktop and mobile",style:{width:"100%",height:"auto",display:"block"},onError:a=>{let b=a.target;b.dataset.tried||(b.dataset.tried="1",b.src="/lovable-uploads/GDG.png")}}),(0,b.jsx)("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:60,background:"linear-gradient(to top, rgba(13,14,26,0.6), transparent)",pointerEvents:"none"}})]})]}),(0,b.jsx)("div",{style:{display:"flex",justifyContent:"center",gap:"clamp(20px,4vw,56px)",flexWrap:"wrap",marginTop:32},children:[{label:"Desktop app",dot:v},{label:"Mobile app",dot:u},{label:"Real-time sync",dot:"#4ade80"}].map(({label:a,dot:c})=>(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:7},children:[(0,b.jsx)("span",{style:{width:7,height:7,borderRadius:"50%",background:c,display:"inline-block",flexShrink:0}}),(0,b.jsx)("span",{style:{fontSize:12,color:"rgba(240,240,245,0.4)",letterSpacing:"0.02em"},children:a})]},a))})]})]})},I=()=>{let{ref:a,visible:c}=E();return(0,b.jsx)("div",{ref:a,style:{borderTop:`1px solid ${z}`,borderBottom:`1px solid ${z}`,background:x},children:(0,b.jsx)("div",{style:{maxWidth:1100,margin:"0 auto",padding:"28px clamp(16px,4vw,48px)",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:24,textAlign:"center"},children:[{value:"500+",label:"Businesses served"},{value:"KES · UGX",label:"Multi-currency support"},{value:"99.9%",label:"Uptime guaranteed"},{value:"< 1 min",label:"Setup time"}].map((a,d)=>(0,b.jsxs)("div",{className:`lp-reveal ${c?"visible":""}`,style:{transitionDelay:`${80*d}ms`},children:[(0,b.jsx)("div",{className:"lp-stat-num",style:{fontSize:26,fontWeight:800,letterSpacing:"-0.02em",lineHeight:1},children:a.value}),(0,b.jsx)("div",{style:{fontSize:12,color:B,marginTop:6},children:a.label})]},a.label))})})},J=()=>{let{ref:a,visible:c}=E();return(0,b.jsxs)("section",{ref:a,className:"lp-grid-bg",style:{padding:"clamp(64px,8vw,120px) clamp(16px,4vw,48px)",overflow:"hidden",position:"relative"},children:[(0,b.jsx)("div",{style:{position:"absolute",top:"50%",left:"60%",width:500,height:500,background:"radial-gradient(circle, rgba(37,40,97,0.35) 0%, transparent 70%)",pointerEvents:"none",transform:"translateY(-50%)"}}),(0,b.jsxs)("div",{style:{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:60,alignItems:"center"},children:[(0,b.jsxs)("div",{className:`lp-reveal ${c?"visible":""}`,children:[(0,b.jsx)("div",{className:"lp-section-label",style:{marginBottom:16},children:"Mobile App"}),(0,b.jsxs)("h2",{style:{fontSize:"clamp(28px,4vw,42px)",fontWeight:800,lineHeight:1.1,letterSpacing:"-0.025em",marginBottom:20,color:A},children:["Your entire business,",(0,b.jsx)("br",{}),"in your pocket."]}),(0,b.jsx)("p",{style:{fontSize:15,color:B,lineHeight:1.7,marginBottom:32,maxWidth:440},children:"The Gonza mobile app puts sales tracking, inventory management, and instant document generation right at your fingertips — whether you're at the office or in the field."}),(0,b.jsx)("ul",{style:{listStyle:"none",padding:0,margin:"0 0 36px",display:"flex",flexDirection:"column",gap:14},children:["Record a sale in under 10 seconds","Generate receipts, invoices & quotes instantly","View real-time profit & expense analytics","Works on any Android or iOS device"].map(a=>(0,b.jsxs)("li",{style:{display:"flex",alignItems:"flex-start",gap:10,fontSize:14,color:B},children:[(0,b.jsx)(o.CheckCircle2,{size:16,color:u,style:{flexShrink:0,marginTop:2}}),a]},a))}),(0,b.jsxs)(d.Link,{to:"/signup",className:"lp-btn-primary",children:["Try it free ",(0,b.jsx)(l.ArrowRight,{size:15})]})]}),(0,b.jsx)("div",{className:`lp-reveal ${c?"visible":""}`,style:{transitionDelay:"150ms",display:"flex",justifyContent:"center"},children:(0,b.jsxs)("div",{style:{position:"relative",maxWidth:380},children:[(0,b.jsx)("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at center, rgba(240,90,43,0.15) 0%, transparent 70%)",borderRadius:40,filter:"blur(40px)"}}),(0,b.jsx)("img",{src:"/lovable-uploads/hand.png",alt:"Gonza app on iPhone",className:"lp-mockup-shadow lp-float",style:{width:"100%",height:"auto",position:"relative",zIndex:1},onError:a=>{a.target.src="/lovable-uploads/8e29fee9-be61-482c-b1e8-5288d0d66003.png"}})]})})]})]})},K=[{icon:i.Receipt,title:"Sales & Receipts",desc:"Record every transaction and generate professional receipts instantly — no paperwork."},{icon:j.FileText,title:"Invoices & Quotes",desc:"Send polished invoices and quotations to clients in a few taps."},{icon:e.BarChart3,title:"Profit Analytics",desc:"Crystal-clear financial insights with real-time charts and reports."},{icon:f.Users,title:"Customer Management",desc:"Rich customer profiles, purchase history, and relationship tracking."},{icon:k.Package,title:"Inventory Control",desc:"Monitor stock levels, get low-stock alerts, and avoid over-ordering."},{icon:h,title:"Cloud-Based Access",desc:"Your data secure in the cloud — accessible from any device, anywhere."},{icon:p.TrendingUp,title:"Expense Tracking",desc:"Log expenses with categories and understand where your money goes."},{icon:q.ShieldCheck,title:"Enterprise Security",desc:"Encrypted data storage with role-based access control for your team."},{icon:r.Zap,title:"Instant Documents",desc:"PDF receipts, invoices, and quotes in one tap — share via WhatsApp or email."}],L=()=>{let{ref:a,visible:c}=E();return(0,b.jsx)("section",{ref:a,style:{padding:"clamp(64px,8vw,120px) clamp(16px,4vw,48px)",background:x},children:(0,b.jsxs)("div",{style:{maxWidth:1100,margin:"0 auto"},children:[(0,b.jsxs)("div",{className:`lp-reveal ${c?"visible":""}`,style:{maxWidth:560,marginBottom:64},children:[(0,b.jsx)("div",{className:"lp-section-label",style:{marginBottom:16},children:"Features"}),(0,b.jsxs)("h2",{style:{fontSize:"clamp(28px,4vw,42px)",fontWeight:800,lineHeight:1.1,letterSpacing:"-0.025em",color:A,marginBottom:16},children:["Everything you need.",(0,b.jsx)("br",{}),"Nothing you don't."]}),(0,b.jsx)("p",{style:{fontSize:15,color:B,lineHeight:1.7},children:"A complete business management platform built for the pace of African commerce."})]}),(0,b.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:1,border:`1px solid ${z}`,borderRadius:16,overflow:"hidden"},children:K.map((a,d)=>{let e=a.icon;return(0,b.jsxs)("div",{className:`lp-card lp-reveal ${c?"visible":""}`,style:{padding:"28px 28px",borderRadius:0,border:"none",borderRight:`1px solid ${z}`,borderBottom:`1px solid ${z}`,transitionDelay:`${60*d}ms`},children:[(0,b.jsx)("div",{className:"lp-feat-icon",style:{marginBottom:16},children:(0,b.jsx)(e,{size:18,color:v})}),(0,b.jsx)("h3",{style:{fontSize:15,fontWeight:700,color:A,marginBottom:8},children:a.title}),(0,b.jsx)("p",{style:{fontSize:13,color:B,lineHeight:1.65},children:a.desc})]},a.title)})})]})})},M=()=>{let{ref:a,visible:c}=E(),e=[{icon:r.Zap,label:"Intuitive — zero training required, start in minutes."},{icon:p.TrendingUp,label:"Smart analytics that surface insights automatically."},{icon:q.ShieldCheck,label:"Bank-grade encryption keeps your data safe."},{icon:s,label:"Dedicated support team based in your timezone."}];return(0,b.jsxs)("section",{ref:a,className:"lp-grid-bg",style:{padding:"clamp(64px,8vw,120px) clamp(16px,4vw,48px)",position:"relative",overflow:"hidden"},children:[(0,b.jsx)("div",{style:{position:"absolute",bottom:"10%",left:"5%",width:350,height:350,background:"radial-gradient(circle, rgba(240,90,43,0.08) 0%, transparent 70%)",pointerEvents:"none"}}),(0,b.jsxs)("div",{style:{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:80,alignItems:"center"},children:[(0,b.jsx)("div",{className:`lp-reveal ${c?"visible":""}`,style:{order:0},children:(0,b.jsxs)("div",{style:{position:"relative",borderRadius:20,overflow:"hidden",border:`1px solid ${z}`},children:[(0,b.jsxs)("div",{style:{background:y,padding:"12px 16px",display:"flex",alignItems:"center",gap:8,borderBottom:`1px solid ${z}`},children:[(0,b.jsx)("div",{style:{width:10,height:10,borderRadius:"50%",background:"#ff5f57"}}),(0,b.jsx)("div",{style:{width:10,height:10,borderRadius:"50%",background:"#ffbd2e"}}),(0,b.jsx)("div",{style:{width:10,height:10,borderRadius:"50%",background:"#28c840"}}),(0,b.jsx)("div",{style:{flex:1,height:20,background:x,borderRadius:6,border:`1px solid ${z}`,marginLeft:8,display:"flex",alignItems:"center",paddingLeft:10},children:(0,b.jsx)("span",{style:{fontSize:10,color:C},children:"gonzasales.com/dashboard"})})]}),(0,b.jsx)("img",{src:"/lovable-uploads/5de523b3-1d7b-4772-9dd4-ba050fa3fba3.png",alt:"Gonza business dashboard",style:{width:"100%",height:"auto",display:"block"}})]})}),(0,b.jsxs)("div",{className:`lp-reveal ${c?"visible":""}`,style:{transitionDelay:"150ms"},children:[(0,b.jsx)("div",{className:"lp-section-label",style:{marginBottom:16},children:"Why Gonza"}),(0,b.jsxs)("h2",{style:{fontSize:"clamp(28px,4vw,42px)",fontWeight:800,lineHeight:1.1,letterSpacing:"-0.025em",color:A,marginBottom:20},children:["Focus on growth.",(0,b.jsx)("br",{}),(0,b.jsx)("span",{style:{color:B,fontWeight:400},children:"We handle the rest."})]}),(0,b.jsx)("p",{style:{fontSize:15,color:B,lineHeight:1.7,marginBottom:36},children:"Stop wrestling with spreadsheets. Gonza automates the tedious parts of running a business so you can focus on what actually matters — your customers and your growth."}),(0,b.jsx)("ul",{style:{listStyle:"none",padding:0,margin:"0 0 40px",display:"flex",flexDirection:"column",gap:18},children:e.map(({icon:a,label:d},e)=>(0,b.jsxs)("li",{className:`lp-reveal ${c?"visible":""}`,style:{display:"flex",alignItems:"flex-start",gap:12,transitionDelay:`${220+80*e}ms`},children:[(0,b.jsx)("div",{style:{flexShrink:0,width:32,height:32,borderRadius:8,background:"rgba(37,40,97,0.6)",border:"1px solid rgba(128,206,215,0.15)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,b.jsx)(a,{size:15,color:u})}),(0,b.jsx)("span",{style:{fontSize:14,color:B,lineHeight:1.5,paddingTop:7},children:d})]},d))}),(0,b.jsxs)(d.Link,{to:"/signup",className:"lp-btn-primary",children:["Start your free trial ",(0,b.jsx)(l.ArrowRight,{size:15})]})]})]})]})},N=()=>{let{ref:a,visible:c}=E();return(0,b.jsxs)("section",{ref:a,style:{padding:"clamp(64px,8vw,120px) clamp(16px,4vw,48px)",background:x,position:"relative"},children:[(0,b.jsx)("div",{className:"lp-h-divider",style:{position:"absolute",top:0,left:"10%",right:"10%"}}),(0,b.jsxs)("div",{style:{maxWidth:800,margin:"0 auto",textAlign:"center"},children:[(0,b.jsxs)("div",{className:`lp-reveal ${c?"visible":""}`,style:{marginBottom:48},children:[(0,b.jsx)("div",{className:"lp-section-label",style:{marginBottom:16},children:"Contact"}),(0,b.jsx)("h2",{style:{fontSize:"clamp(28px,4vw,40px)",fontWeight:800,letterSpacing:"-0.025em",color:A,marginBottom:14},children:"We're here to help"}),(0,b.jsx)("p",{style:{fontSize:15,color:B,lineHeight:1.7,maxWidth:480,margin:"0 auto"},children:"Have a question, need a demo, or want to discuss pricing? Reach out — our team responds fast."})]}),(0,b.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:16},children:[(0,b.jsxs)("a",{href:"tel:0758519696",className:`lp-contact-card lp-card lp-reveal ${c?"visible":""}`,style:{padding:"28px 24px",borderRadius:14,display:"flex",alignItems:"center",gap:18,textDecoration:"none",transitionDelay:"100ms"},onMouseEnter:a=>{a.currentTarget.style.borderColor="rgba(240,90,43,0.4)",a.currentTarget.style.boxShadow="0 8px 32px rgba(240,90,43,0.15)"},onMouseLeave:a=>{a.currentTarget.style.borderColor=z,a.currentTarget.style.boxShadow="none"},children:[(0,b.jsx)("div",{style:{flexShrink:0,width:48,height:48,borderRadius:12,background:u,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(240,90,43,0.35)"},children:(0,b.jsx)(m.Phone,{size:20,color:"#fff"})}),(0,b.jsxs)("div",{style:{textAlign:"left"},children:[(0,b.jsx)("div",{style:{fontSize:10,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:C,marginBottom:4},children:"Phone / WhatsApp"}),(0,b.jsx)("div",{style:{fontSize:18,fontWeight:700,color:A},children:"0758 519 696"})]})]}),(0,b.jsxs)("a",{href:"mailto:gonzasystems@gmail.com",className:`lp-contact-card lp-card lp-reveal ${c?"visible":""}`,style:{padding:"28px 24px",borderRadius:14,display:"flex",alignItems:"center",gap:18,textDecoration:"none",transitionDelay:"200ms"},onMouseEnter:a=>{a.currentTarget.style.borderColor="rgba(128,206,215,0.3)",a.currentTarget.style.boxShadow="0 8px 32px rgba(128,206,215,0.1)"},onMouseLeave:a=>{a.currentTarget.style.borderColor=z,a.currentTarget.style.boxShadow="none"},children:[(0,b.jsx)("div",{style:{flexShrink:0,width:48,height:48,borderRadius:12,background:"rgba(128,206,215,0.15)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(128,206,215,0.25)"},children:(0,b.jsx)(n.Mail,{size:20,color:v})}),(0,b.jsxs)("div",{style:{textAlign:"left"},children:[(0,b.jsx)("div",{style:{fontSize:10,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:C,marginBottom:4},children:"Email"}),(0,b.jsx)("div",{style:{fontSize:15,fontWeight:600,color:A},children:"gonzasystems@gmail.com"})]})]})]})]})]})},O=()=>{let{ref:a,visible:c}=E();return(0,b.jsx)("section",{ref:a,style:{padding:"clamp(64px,8vw,120px) clamp(16px,4vw,48px)",background:w},children:(0,b.jsxs)("div",{className:`lp-reveal ${c?"visible":""}`,style:{maxWidth:900,margin:"0 auto",borderRadius:24,overflow:"hidden",position:"relative",padding:"clamp(48px,7vw,96px) clamp(24px,5vw,80px)",textAlign:"center",background:"linear-gradient(135deg, #252861 0%, #1a1c3e 50%, #0d0e1a 100%)",border:"1px solid rgba(128,206,215,0.12)"},children:[(0,b.jsx)("div",{className:"lp-grid-bg",style:{position:"absolute",inset:0,opacity:.6}}),(0,b.jsx)("div",{style:{position:"absolute",top:"-40%",right:"10%",width:350,height:350,background:"radial-gradient(circle, rgba(240,90,43,0.18) 0%, transparent 70%)",pointerEvents:"none"}}),(0,b.jsx)("div",{style:{position:"absolute",bottom:"-30%",left:"5%",width:300,height:300,background:"radial-gradient(circle, rgba(128,206,215,0.12) 0%, transparent 70%)",pointerEvents:"none"}}),(0,b.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,b.jsxs)("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"rgba(240,90,43,0.12)",border:"1px solid rgba(240,90,43,0.25)",borderRadius:999,padding:"4px 14px",fontSize:12,color:u,marginBottom:28},children:[(0,b.jsx)(o.CheckCircle2,{size:12})," No credit card required"]}),(0,b.jsxs)("h2",{style:{fontSize:"clamp(28px,5vw,52px)",fontWeight:900,letterSpacing:"-0.03em",color:A,lineHeight:1.06,marginBottom:20},children:["Ready to transform",(0,b.jsx)("br",{}),"your business?"]}),(0,b.jsx)("p",{style:{fontSize:16,color:B,lineHeight:1.6,maxWidth:460,margin:"0 auto 40px"},children:"Join hundreds of businesses already running smarter with Gonza Systems."}),(0,b.jsxs)("div",{style:{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"},children:[(0,b.jsxs)(d.Link,{to:"/signup",className:"lp-btn-primary",style:{fontSize:15,padding:"14px 28px"},children:["Sign Up for Free ",(0,b.jsx)(l.ArrowRight,{size:16})]}),(0,b.jsxs)("a",{href:"tel:0758519696",className:"lp-btn-outline",style:{fontSize:15,padding:"14px 28px"},children:[(0,b.jsx)(m.Phone,{size:15})," Call 0758 519 696"]})]})]})]})})},P=()=>(0,b.jsx)("footer",{style:{background:"#070810",borderTop:`1px solid ${z}`,padding:"clamp(32px,5vw,48px) clamp(16px,4vw,48px)"},children:(0,b.jsx)("div",{style:{maxWidth:1100,margin:"0 auto"},children:(0,b.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:24,justifyContent:"space-between",alignItems:"center"},children:[(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,b.jsx)(d.Link,{to:"/",className:"flex items-center",children:(0,b.jsx)("img",{src:"/lovable-uploads/logo sys white-01.png",alt:"Gonza Logo",className:"h-8 md:h-10"})}),(0,b.jsxs)("p",{style:{fontSize:12,color:C,marginTop:4},children:["© ",new Date().getFullYear()," Gonza Systems. All rights reserved."]})]}),(0,b.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:20,alignItems:"center"},children:[(0,b.jsx)(d.Link,{to:"/privacy-policy",style:{fontSize:13,color:B,textDecoration:"none",transition:"color 0.2s"},onMouseEnter:a=>a.currentTarget.style.color=A,onMouseLeave:a=>a.currentTarget.style.color=B,children:"Privacy Policy"}),(0,b.jsxs)("a",{href:"tel:0758519696",style:{fontSize:13,color:B,textDecoration:"none",display:"flex",alignItems:"center",gap:6,transition:"color 0.2s"},onMouseEnter:a=>a.currentTarget.style.color=u,onMouseLeave:a=>a.currentTarget.style.color=B,children:[(0,b.jsx)(m.Phone,{size:13})," 0758 519 696"]}),(0,b.jsx)(d.Link,{to:"/login",style:{fontSize:13,color:B,textDecoration:"none",transition:"color 0.2s"},onMouseEnter:a=>a.currentTarget.style.color=A,onMouseLeave:a=>a.currentTarget.style.color=B,children:"Sign In"})]})]})})});a.s(["default",0,()=>(0,b.jsxs)("div",{className:"lp",children:[(0,b.jsx)(D,{}),(0,b.jsx)(F,{}),(0,b.jsxs)("main",{children:[(0,b.jsx)(G,{}),(0,b.jsx)(H,{}),(0,b.jsx)(I,{}),(0,b.jsx)(J,{}),(0,b.jsx)(L,{}),(0,b.jsx)(M,{}),(0,b.jsx)(N,{}),(0,b.jsx)(O,{})]}),(0,b.jsx)(P,{})]})],424399)}];

//# sourceMappingURL=src_pages_LandingPage_tsx_8be4d6b8._.js.map