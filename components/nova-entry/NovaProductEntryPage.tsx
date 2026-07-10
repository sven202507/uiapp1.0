"use client";

import RippleBackground from "./RippleBackground";
import NovaLogoBlock from "./NovaLogoBlock";
import WageLoanButton from "./WageLoanButton";
import ComplianceBadges from "./ComplianceBadges";

export default function NovaProductEntryPage() {
  return (
    <div
      className="relative flex min-h-dvh flex-col items-center justify-between overflow-hidden"
      style={{
        minHeight: "100dvh",
        background: `
          radial-gradient(circle at 50% 30%, rgba(249, 115, 22, 0.22), transparent 36%),
          radial-gradient(circle at 18% 18%, rgba(248, 184, 78, 0.20), transparent 28%),
          radial-gradient(circle at 82% 70%, rgba(255, 107, 33, 0.16), transparent 30%),
          linear-gradient(180deg, var(--nova-cream) 0%, #FFF3E4 48%, var(--nova-white) 100%)
        `,
        paddingTop: "calc(env(safe-area-inset-top, 0px) + 48px)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 24px)",
      }}
    >
      <RippleBackground />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "-10%",
          left: "-14%",
          width: "54vw",
          height: "54vw",
          maxWidth: 260,
          maxHeight: 260,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(248,184,78,0.20) 0%, transparent 72%)",
          filter: "blur(44px)",
          animation: "floatOrb1 8s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          bottom: "8%",
          right: "-12%",
          width: "50vw",
          height: "50vw",
          maxWidth: 230,
          maxHeight: 230,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.16) 0%, transparent 72%)",
          filter: "blur(52px)",
          animation: "floatOrb2 10s ease-in-out infinite",
        }}
      />

      <main
        className="relative z-10 flex flex-1 flex-col items-center justify-center gap-12 px-6 sm:gap-14"
        style={{ animation: "fadeSlideUp 0.9s ease both" }}
      >
        <NovaLogoBlock />
        <WageLoanButton />
      </main>

      <footer className="relative z-10 flex w-full justify-center">
        <ComplianceBadges />
      </footer>

      <style>{`
        @keyframes fadeSlideUp {
          0%   { opacity: 0; transform: translateY(2px);   }
          100% { opacity: 1; transform: translateY(-20px); }
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
