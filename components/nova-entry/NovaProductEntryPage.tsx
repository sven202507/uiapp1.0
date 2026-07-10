"use client";

import RippleBackground from "./RippleBackground";
import NovaLogoBlock from "./NovaLogoBlock";
import WageLoanButton from "./WageLoanButton";
import ComplianceBadges from "./ComplianceBadges";

export default function NovaProductEntryPage() {
  return (
    <div
      className="relative flex flex-col items-center justify-between overflow-hidden"
      style={{
        minHeight: "100dvh",
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(255,193,77,0.55) 0%, transparent 55%),
          radial-gradient(ellipse at 75% 75%, rgba(255,138,0,0.35) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(255,240,210,0.9) 0%, transparent 80%),
          linear-gradient(160deg, #FFF7E8 0%, #FFE8C7 45%, #FDDBA0 100%)
        `,
        paddingTop: "env(safe-area-inset-top, 20px)",
        paddingBottom: "env(safe-area-inset-bottom, 20px)",
      }}
    >
      <RippleBackground />

      {/* Floating orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "-8%", left: "-12%",
          width: "55vw", height: "55vw",
          maxWidth: 280, maxHeight: 280,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,193,77,0.45) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "floatOrb1 8s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          bottom: "10%", right: "-10%",
          width: "50vw", height: "50vw",
          maxWidth: 240, maxHeight: 240,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,90,61,0.25) 0%, transparent 70%)",
          filter: "blur(48px)",
          animation: "floatOrb2 10s ease-in-out infinite",
        }}
      />

      <div className="flex-1 min-h-[40px]" />

      <main
        className="relative z-10 flex flex-col items-center gap-10 px-6"
        style={{ animation: "fadeSlideUp 0.9s ease both" }}
      >
        <NovaLogoBlock />
        <WageLoanButton />
      </main>

      <div className="flex-1 min-h-[32px]" />

      <footer className="relative z-10 w-full flex justify-center pb-2">
        <ComplianceBadges />
      </footer>

      <style>{`
        @keyframes fadeSlideUp {
          0%   { opacity: 0; transform: translateY(22px); }
          100% { opacity: 1; transform: translateY(0);    }
        }
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1);       }
          50%       { transform: translate(8px, 14px) scale(1.06); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1);        }
          50%       { transform: translate(-10px, -12px) scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
}
