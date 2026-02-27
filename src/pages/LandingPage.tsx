import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Users,
  Cloud,
  Receipt,
  FileText,
  Package,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  Star,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

/* ─────────────────────────────────────────────────────────────
   Brand tokens (mirrors tailwind.config.ts)
───────────────────────────────────────────────────────────── */
const B = {
  primary: "#252861", // deep navy
  secondary: "#f05a2b", // vibrant orange
  accent: "#80CED7", // teal
  bg: "#0d0e1a", // near-black with navy tint
  bgMid: "#111326",
  bgSurface: "#181a2e",
  border: "rgba(255,255,255,0.07)",
  borderHover: "rgba(255,255,255,0.14)",
  text: "#f0f0f5",
  textMuted: "rgba(240,240,245,0.45)",
  textDim: "rgba(240,240,245,0.25)",
};

/* ─────────────────────────────────────────────────────────────
   Global Styles
───────────────────────────────────────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

    .lp { font-family: 'Inter', sans-serif; background: ${B.bg}; color: ${B.text}; }
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
      background: linear-gradient(90deg, ${B.text} 20%, ${B.secondary} 50%, ${B.accent} 65%, ${B.text} 80%);
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
      background: ${B.bgSurface};
      border: 1px solid ${B.border};
      transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    }
    .lp-card:hover {
      border-color: ${B.borderHover};
      transform: translateY(-2px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06);
    }

    /* ── Buttons ── */
    .lp-btn-primary {
      display: inline-flex; align-items: center; gap: 8px;
      background: ${B.secondary};
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
      color: ${B.text};
      border-color: rgba(255,255,255,0.18);
    }
    .lp-btn-outline {
      display: inline-flex; align-items: center; gap: 8px;
      background: transparent;
      color: ${B.text};
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
      color: ${B.accent};
      letter-spacing: 0.02em;
    }

    /* ── Section label ── */
    .lp-section-label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${B.secondary};
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
      background: linear-gradient(135deg, ${B.text} 30%, ${B.accent});
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
  `}</style>
);

/* ─────────────────────────────────────────────────────────────
   Scroll-reveal hook
───────────────────────────────────────────────────────────── */
const useReveal = (threshold = 0.12) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
};

/* ─────────────────────────────────────────────────────────────
   NAV
───────────────────────────────────────────────────────────── */
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`lp-nav ${scrolled ? "lp-nav-blur" : ""}`}
      style={{ padding: "0 clamp(16px, 4vw, 48px)" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/logo sys white-01.png"
              alt="Gonza Logo"
              className="h-8 md:h-10"
            />
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link to="/login" className="lp-btn-ghost" style={{ fontSize: 13 }}>
            Log In
          </Link>
          <Link
            to="/signup"
            className="lp-btn-primary"
            style={{ fontSize: 13, padding: "9px 18px" }}>
            Get Started <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

/* ─────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────── */
const Hero = () => (
  <section
    className="lp-grid-bg"
    style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 120,
      paddingBottom: 80,
      overflow: "hidden",
    }}>
    {/* Background glow blobs */}
    <div
      style={{
        position: "absolute",
        top: "15%",
        left: "10%",
        width: 500,
        height: 500,
        background: `radial-gradient(circle, rgba(37,40,97,0.5) 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "10%",
        right: "5%",
        width: 400,
        height: 400,
        background: `radial-gradient(circle, rgba(240,90,43,0.12) 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: 700,
        height: 400,
        background: `radial-gradient(ellipse, rgba(37,40,97,0.3) 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />

    {/* Content */}
    <div
      style={{
        position: "relative",
        zIndex: 1,
        textAlign: "center",
        maxWidth: 760,
        padding: "0 20px",
        width: "100%",
      }}>
      {/* Badge */}
      <div
        className="lp-badge lp-fade-in"
        style={{ animationDelay: "0.1s", opacity: 0, marginBottom: 32 }}>
        <span
          className="lp-dot"
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#4ade80",
            display: "inline-block",
          }}
        />
        Built for African businesses
        <ChevronRight size={12} opacity={0.6} />
      </div>

      {/* Headline */}
      <h1
        className="lp-fade-up"
        style={{
          fontSize: "clamp(36px, 6vw, 68px)",
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          marginBottom: 24,
          animationDelay: "0.2s",
          opacity: 0,
          color: B.text,
        }}>
        Business management
        <br />
        <span className="lp-shimmer-text">at the speed of light.</span>
      </h1>

      {/* Sub */}
      <p
        className="lp-fade-up"
        style={{
          fontSize: "clamp(15px, 2vw, 18px)",
          color: B.textMuted,
          lineHeight: 1.65,
          maxWidth: 560,
          margin: "0 auto 40px",
          animationDelay: "0.32s",
          opacity: 0,
        }}>
        Track sales, profits &amp; expenses. Generate receipts, invoices &amp;
        quotes — from one powerful, cloud-based platform designed for how you
        work.
      </p>

      {/* CTA Buttons */}
      <div
        className="lp-fade-up"
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
          animationDelay: "0.44s",
          opacity: 0,
        }}>
        <Link to="/signup" className="lp-btn-primary">
          Start for Free <ArrowRight size={15} />
        </Link>
        <Link to="/login" className="lp-btn-outline">
          Sign In
        </Link>
      </div>

      {/* Trust line */}
      <p
        className="lp-fade-up"
        style={{
          marginTop: 20,
          fontSize: 12,
          color: B.textDim,
          animationDelay: "0.54s",
          opacity: 0,
        }}>
        No credit card required · Cloud-based · Instant setup
      </p>
    </div>

    {/* Bottom fade */}
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        background: `linear-gradient(to top, ${B.bg}, transparent)`,
        pointerEvents: "none",
      }}
    />
  </section>
);

/* ─────────────────────────────────────────────────────────────
   DASHBOARD SHOWCASE
───────────────────────────────────────────────────────────── */
const DashboardShowcase = () => {
  const { ref, visible } = useReveal(0.05);
  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        background: B.bg,
        overflow: "hidden",
        paddingBottom: "clamp(48px,7vw,96px)",
      }}>
      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 400,
          background: `radial-gradient(ellipse, rgba(37,40,97,0.55) 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "15%",
          width: 320,
          height: 320,
          background: `radial-gradient(circle, rgba(240,90,43,0.1) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          width: 280,
          height: 280,
          background: `radial-gradient(circle, rgba(128,206,215,0.07) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div
        className={`lp-reveal ${visible ? "visible" : ""}`}
        style={{
          maxWidth: 1020,
          margin: "0 auto",
          padding: "0 clamp(16px,4vw,40px)",
          position: "relative",
          zIndex: 1,
        }}>
        {/* Browser chrome frame */}
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: `1px solid rgba(255,255,255,0.1)`,
            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.04),
              0 32px 80px rgba(0,0,0,0.6),
              0 0 60px rgba(37,40,97,0.4),
              0 0 0 0.5px rgba(128,206,215,0.1)
            `,
          }}>
          {/* Browser top bar */}
          <div
            style={{
              background: "rgba(20,22,42,0.98)",
              padding: "11px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              borderBottom: `1px solid rgba(255,255,255,0.07)`,
            }}>
            {/* Traffic lights */}
            <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
              {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
                <div
                  key={c}
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: c,
                    opacity: 0.85,
                  }}
                />
              ))}
            </div>
            {/* URL bar */}
            <div
              style={{
                flex: 1,
                maxWidth: 340,
                margin: "0 auto",
                height: 24,
                background: "rgba(255,255,255,0.05)",
                borderRadius: 6,
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#4ade80",
                  opacity: 0.8,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 10,
                  color: "rgba(240,240,245,0.35)",
                  letterSpacing: "0.01em",
                }}>
                gonzasystems.com
              </span>
            </div>
            {/* Spacer for traffic lights symmetry */}
            <div style={{ width: 50, flexShrink: 0 }} />
          </div>

          {/* Product image */}
          <div style={{ position: "relative", lineHeight: 0 }}>
            <img
              src="/lovable-uploads/GDG.png"
              alt="Gonza Systems — dashboard on desktop and mobile"
              style={{ width: "100%", height: "auto", display: "block" }}
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                // Try the laptop+phone image uploaded via WhatsApp
                if (!img.dataset.tried) {
                  img.dataset.tried = "1";
                  img.src = "/lovable-uploads/GDG.png";
                }
              }}
            />
            {/* Subtle bottom gradient so it fades into page */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 60,
                background: `linear-gradient(to top, rgba(13,14,26,0.6), transparent)`,
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {/* Annotation strip below the frame */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(20px,4vw,56px)",
            flexWrap: "wrap",
            marginTop: 32,
          }}>
          {[
            { label: "Desktop app", dot: B.accent },
            { label: "Mobile app", dot: B.secondary },
            { label: "Real-time sync", dot: "#4ade80" },
          ].map(({ label, dot }) => (
            <div
              key={label}
              style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: dot,
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(240,240,245,0.4)",
                  letterSpacing: "0.02em",
                }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   STATS BAR
───────────────────────────────────────────────────────────── */
const StatsBar = () => {
  const { ref, visible } = useReveal();
  const stats = [
    { value: "500+", label: "Businesses served" },
    { value: "KES · UGX", label: "Multi-currency support" },
    { value: "99.9%", label: "Uptime guaranteed" },
    { value: "< 1 min", label: "Setup time" },
  ];
  return (
    <div
      ref={ref}
      style={{
        borderTop: `1px solid ${B.border}`,
        borderBottom: `1px solid ${B.border}`,
        background: B.bgMid,
      }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "28px clamp(16px,4vw,48px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 24,
          textAlign: "center",
        }}>
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`lp-reveal ${visible ? "visible" : ""}`}
            style={{ transitionDelay: `${i * 80}ms` }}>
            <div
              className="lp-stat-num"
              style={{
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}>
              {s.value}
            </div>
            <div style={{ fontSize: 12, color: B.textMuted, marginTop: 6 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   PHONE MOCKUP SECTION  (Linear "see it in action" style)
───────────────────────────────────────────────────────────── */
const AppShowcase = () => {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref}
      className="lp-grid-bg"
      style={{
        padding: "clamp(64px,8vw,120px) clamp(16px,4vw,48px)",
        overflow: "hidden",
        position: "relative",
      }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "60%",
          width: 500,
          height: 500,
          background: `radial-gradient(circle, rgba(37,40,97,0.35) 0%, transparent 70%)`,
          pointerEvents: "none",
          transform: "translateY(-50%)",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 60,
          alignItems: "center",
        }}>
        {/* Text */}
        <div className={`lp-reveal ${visible ? "visible" : ""}`}>
          <div className="lp-section-label" style={{ marginBottom: 16 }}>
            Mobile App
          </div>
          <h2
            style={{
              fontSize: "clamp(28px,4vw,42px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: 20,
              color: B.text,
            }}>
            Your entire business,
            <br />
            in your pocket.
          </h2>
          <p
            style={{
              fontSize: 15,
              color: B.textMuted,
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 440,
            }}>
            The Gonza mobile app puts sales tracking, inventory management, and
            instant document generation right at your fingertips — whether
            you're at the office or in the field.
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 36px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}>
            {[
              "Record a sale in under 10 seconds",
              "Generate receipts, invoices & quotes instantly",
              "View real-time profit & expense analytics",
              "Works on any Android or iOS device",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  fontSize: 14,
                  color: B.textMuted,
                }}>
                <CheckCircle2
                  size={16}
                  color={B.secondary}
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                {item}
              </li>
            ))}
          </ul>
          <Link to="/signup" className="lp-btn-primary">
            Try it free <ArrowRight size={15} />
          </Link>
        </div>

        {/* Phone image */}
        <div
          className={`lp-reveal ${visible ? "visible" : ""}`}
          style={{
            transitionDelay: "150ms",
            display: "flex",
            justifyContent: "center",
          }}>
          <div style={{ position: "relative", maxWidth: 380 }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(ellipse at center, rgba(240,90,43,0.15) 0%, transparent 70%)`,
                borderRadius: 40,
                filter: "blur(40px)",
              }}
            />
            <img
              src="/lovable-uploads/hand.png"
              alt="Gonza app on iPhone"
              className="lp-mockup-shadow lp-float"
              style={{
                width: "100%",
                height: "auto",
                position: "relative",
                zIndex: 1,
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/lovable-uploads/8e29fee9-be61-482c-b1e8-5288d0d66003.png";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   FEATURES GRID (Linear style — tight grid, icon + text)
───────────────────────────────────────────────────────────── */
const featureList = [
  {
    icon: Receipt,
    title: "Sales & Receipts",
    desc: "Record every transaction and generate professional receipts instantly — no paperwork.",
  },
  {
    icon: FileText,
    title: "Invoices & Quotes",
    desc: "Send polished invoices and quotations to clients in a few taps.",
  },
  {
    icon: BarChart3,
    title: "Profit Analytics",
    desc: "Crystal-clear financial insights with real-time charts and reports.",
  },
  {
    icon: Users,
    title: "Customer Management",
    desc: "Rich customer profiles, purchase history, and relationship tracking.",
  },
  {
    icon: Package,
    title: "Inventory Control",
    desc: "Monitor stock levels, get low-stock alerts, and avoid over-ordering.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based Access",
    desc: "Your data secure in the cloud — accessible from any device, anywhere.",
  },
  {
    icon: TrendingUp,
    title: "Expense Tracking",
    desc: "Log expenses with categories and understand where your money goes.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Encrypted data storage with role-based access control for your team.",
  },
  {
    icon: Zap,
    title: "Instant Documents",
    desc: "PDF receipts, invoices, and quotes in one tap — share via WhatsApp or email.",
  },
];

const Features = () => {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(64px,8vw,120px) clamp(16px,4vw,48px)",
        background: B.bgMid,
      }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div
          className={`lp-reveal ${visible ? "visible" : ""}`}
          style={{ maxWidth: 560, marginBottom: 64 }}>
          <div className="lp-section-label" style={{ marginBottom: 16 }}>
            Features
          </div>
          <h2
            style={{
              fontSize: "clamp(28px,4vw,42px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: B.text,
              marginBottom: 16,
            }}>
            Everything you need.
            <br />
            Nothing you don't.
          </h2>
          <p style={{ fontSize: 15, color: B.textMuted, lineHeight: 1.7 }}>
            A complete business management platform built for the pace of
            African commerce.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 1,
            border: `1px solid ${B.border}`,
            borderRadius: 16,
            overflow: "hidden",
          }}>
          {featureList.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`lp-card lp-reveal ${visible ? "visible" : ""}`}
                style={{
                  padding: "28px 28px",
                  borderRadius: 0,
                  border: "none",
                  borderRight: `1px solid ${B.border}`,
                  borderBottom: `1px solid ${B.border}`,
                  transitionDelay: `${i * 60}ms`,
                }}>
                <div className="lp-feat-icon" style={{ marginBottom: 16 }}>
                  <Icon size={18} color={B.accent} />
                </div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: B.text,
                    marginBottom: 8,
                  }}>
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: B.textMuted,
                    lineHeight: 1.65,
                  }}>
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   WHY SECTION — split layout
───────────────────────────────────────────────────────────── */
const WhySection = () => {
  const { ref, visible } = useReveal();
  const points = [
    {
      icon: Zap,
      label: "Intuitive — zero training required, start in minutes.",
    },
    {
      icon: TrendingUp,
      label: "Smart analytics that surface insights automatically.",
    },
    { icon: ShieldCheck, label: "Bank-grade encryption keeps your data safe." },
    { icon: Star, label: "Dedicated support team based in your timezone." },
  ];

  return (
    <section
      ref={ref}
      className="lp-grid-bg"
      style={{
        padding: "clamp(64px,8vw,120px) clamp(16px,4vw,48px)",
        position: "relative",
        overflow: "hidden",
      }}>
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: 350,
          height: 350,
          background: `radial-gradient(circle, rgba(240,90,43,0.08) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 80,
          alignItems: "center",
        }}>
        {/* Visual */}
        <div
          className={`lp-reveal ${visible ? "visible" : ""}`}
          style={{ order: 0 }}>
          <div
            style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              border: `1px solid ${B.border}`,
            }}>
            {/* Decorative top bar */}
            <div
              style={{
                background: B.bgSurface,
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                borderBottom: `1px solid ${B.border}`,
              }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#ff5f57",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#ffbd2e",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#28c840",
                }}
              />
              <div
                style={{
                  flex: 1,
                  height: 20,
                  background: B.bgMid,
                  borderRadius: 6,
                  border: `1px solid ${B.border}`,
                  marginLeft: 8,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 10,
                }}>
                <span style={{ fontSize: 10, color: B.textDim }}>
                  gonzasales.com/dashboard
                </span>
              </div>
            </div>
            <img
              src="/lovable-uploads/5de523b3-1d7b-4772-9dd4-ba050fa3fba3.png"
              alt="Gonza business dashboard"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* Text */}
        <div
          className={`lp-reveal ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "150ms" }}>
          <div className="lp-section-label" style={{ marginBottom: 16 }}>
            Why Gonza
          </div>
          <h2
            style={{
              fontSize: "clamp(28px,4vw,42px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: B.text,
              marginBottom: 20,
            }}>
            Focus on growth.
            <br />
            <span style={{ color: B.textMuted, fontWeight: 400 }}>
              We handle the rest.
            </span>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: B.textMuted,
              lineHeight: 1.7,
              marginBottom: 36,
            }}>
            Stop wrestling with spreadsheets. Gonza automates the tedious parts
            of running a business so you can focus on what actually matters —
            your customers and your growth.
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 40px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}>
            {points.map(({ icon: Icon, label }, i) => (
              <li
                key={label}
                className={`lp-reveal ${visible ? "visible" : ""}`}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  transitionDelay: `${220 + i * 80}ms`,
                }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: `rgba(37,40,97,0.6)`,
                    border: `1px solid rgba(128,206,215,0.15)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Icon size={15} color={B.secondary} />
                </div>
                <span
                  style={{
                    fontSize: 14,
                    color: B.textMuted,
                    lineHeight: 1.5,
                    paddingTop: 7,
                  }}>
                  {label}
                </span>
              </li>
            ))}
          </ul>
          <Link to="/signup" className="lp-btn-primary">
            Start your free trial <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────────────────────── */
const ContactSection = () => {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(64px,8vw,120px) clamp(16px,4vw,48px)",
        background: B.bgMid,
        position: "relative",
      }}>
      <div
        className="lp-h-divider"
        style={{ position: "absolute", top: 0, left: "10%", right: "10%" }}
      />

      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <div
          className={`lp-reveal ${visible ? "visible" : ""}`}
          style={{ marginBottom: 48 }}>
          <div className="lp-section-label" style={{ marginBottom: 16 }}>
            Contact
          </div>
          <h2
            style={{
              fontSize: "clamp(28px,4vw,40px)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: B.text,
              marginBottom: 14,
            }}>
            We're here to help
          </h2>
          <p
            style={{
              fontSize: 15,
              color: B.textMuted,
              lineHeight: 1.7,
              maxWidth: 480,
              margin: "0 auto",
            }}>
            Have a question, need a demo, or want to discuss pricing? Reach out
            — our team responds fast.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}>
          {/* Phone */}
          <a
            href="tel:0758519696"
            className={`lp-contact-card lp-card lp-reveal ${
              visible ? "visible" : ""
            }`}
            style={{
              padding: "28px 24px",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              gap: 18,
              textDecoration: "none",
              transitionDelay: "100ms",
            }}
            onMouseEnter={(e) => {
              (
                e.currentTarget as HTMLElement
              ).style.borderColor = `rgba(240,90,43,0.4)`;
              (
                e.currentTarget as HTMLElement
              ).style.boxShadow = `0 8px 32px rgba(240,90,43,0.15)`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = B.border;
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}>
            <div
              style={{
                flexShrink: 0,
                width: 48,
                height: 48,
                borderRadius: 12,
                background: B.secondary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(240,90,43,0.35)",
              }}>
              <Phone size={20} color="#fff" />
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: B.textDim,
                  marginBottom: 4,
                }}>
                Phone / WhatsApp
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: B.text }}>
                0758 519 696
              </div>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:gonzasystems@gmail.com"
            className={`lp-contact-card lp-card lp-reveal ${
              visible ? "visible" : ""
            }`}
            style={{
              padding: "28px 24px",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              gap: 18,
              textDecoration: "none",
              transitionDelay: "200ms",
            }}
            onMouseEnter={(e) => {
              (
                e.currentTarget as HTMLElement
              ).style.borderColor = `rgba(128,206,215,0.3)`;
              (
                e.currentTarget as HTMLElement
              ).style.boxShadow = `0 8px 32px rgba(128,206,215,0.1)`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = B.border;
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}>
            <div
              style={{
                flexShrink: 0,
                width: 48,
                height: 48,
                borderRadius: 12,
                background: `rgba(128,206,215,0.15)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1px solid rgba(128,206,215,0.25)`,
              }}>
              <Mail size={20} color={B.accent} />
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: B.textDim,
                  marginBottom: 4,
                }}>
                Email
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, color: B.text }}>
                gonzasystems@gmail.com
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   CTA
───────────────────────────────────────────────────────────── */
const CTA = () => {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(64px,8vw,120px) clamp(16px,4vw,48px)",
        background: B.bg,
      }}>
      <div
        className={`lp-reveal ${visible ? "visible" : ""}`}
        style={{
          maxWidth: 900,
          margin: "0 auto",
          borderRadius: 24,
          overflow: "hidden",
          position: "relative",
          padding: "clamp(48px,7vw,96px) clamp(24px,5vw,80px)",
          textAlign: "center",
          background: `linear-gradient(135deg, ${B.primary} 0%, #1a1c3e 50%, #0d0e1a 100%)`,
          border: `1px solid rgba(128,206,215,0.12)`,
        }}>
        {/* Grid bg */}
        <div
          className="lp-grid-bg"
          style={{ position: "absolute", inset: 0, opacity: 0.6 }}
        />
        {/* Glows */}
        <div
          style={{
            position: "absolute",
            top: "-40%",
            right: "10%",
            width: 350,
            height: 350,
            background: `radial-gradient(circle, rgba(240,90,43,0.18) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "5%",
            width: 300,
            height: 300,
            background: `radial-gradient(circle, rgba(128,206,215,0.12) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "rgba(240,90,43,0.12)",
              border: "1px solid rgba(240,90,43,0.25)",
              borderRadius: 999,
              padding: "4px 14px",
              fontSize: 12,
              color: B.secondary,
              marginBottom: 28,
            }}>
            <CheckCircle2 size={12} /> No credit card required
          </div>
          <h2
            style={{
              fontSize: "clamp(28px,5vw,52px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: B.text,
              lineHeight: 1.06,
              marginBottom: 20,
            }}>
            Ready to transform
            <br />
            your business?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: B.textMuted,
              lineHeight: 1.6,
              maxWidth: 460,
              margin: "0 auto 40px",
            }}>
            Join hundreds of businesses already running smarter with Gonza
            Systems.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
            <Link
              to="/signup"
              className="lp-btn-primary"
              style={{ fontSize: 15, padding: "14px 28px" }}>
              Sign Up for Free <ArrowRight size={16} />
            </Link>
            <a
              href="tel:0758519696"
              className="lp-btn-outline"
              style={{ fontSize: 15, padding: "14px 28px" }}>
              <Phone size={15} /> Call 0758 519 696
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────── */
const Footer = () => (
  <footer
    style={{
      background: "#070810",
      borderTop: `1px solid ${B.border}`,
      padding: "clamp(32px,5vw,48px) clamp(16px,4vw,48px)",
    }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/logo sys white-01.png"
              alt="Gonza Logo"
              className="h-8 md:h-10"
            />
          </Link>
          <p style={{ fontSize: 12, color: B.textDim, marginTop: 4 }}>
            © {new Date().getFullYear()} Gonza Systems. All rights reserved.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            alignItems: "center",
          }}>
          <Link
            to="/privacy-policy"
            style={{
              fontSize: 13,
              color: B.textMuted,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = B.text)
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                B.textMuted as string)
            }>
            Privacy Policy
          </Link>
          <a
            href="tel:0758519696"
            style={{
              fontSize: 13,
              color: B.textMuted,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = B.secondary)
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                B.textMuted as string)
            }>
            <Phone size={13} /> 0758 519 696
          </a>
          <Link
            to="/login"
            style={{
              fontSize: 13,
              color: B.textMuted,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = B.text)
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                B.textMuted as string)
            }>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

/* ─────────────────────────────────────────────────────────────
   ROOT
───────────────────────────────────────────────────────────── */
const LandingPage = () => (
  <div className="lp">
    <GlobalStyles />
    <Nav />
    <main>
      <Hero />
      <DashboardShowcase />
      <StatsBar />
      <AppShowcase />
      <Features />
      <WhySection />
      <ContactSection />
      <CTA />
    </main>
    <Footer />
  </div>
);

export default LandingPage;
