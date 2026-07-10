"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

type BtnRipple = { id: number; x: number; y: number };

export default function WageLoanButton() {
  const router = useRouter();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<BtnRipple[]>([]);
  const [pressed, setPressed] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setPressed(true);
    setRipples((prev) => [...prev.slice(-3), { id, x, y }]);
    setTimeout(() => setPressed(false), 180);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);
    setTimeout(() => router.push("/wage-loan/apply"), 160);
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      aria-label="Apply for Wage Loan"
      className="relative overflow-hidden select-none outline-none focus-visible:ring-4 focus-visible:ring-orange-300"
      style={{
        width: "clamp(260px, 80vw, 320px)",
        height: "68px",
        borderRadius: "34px",
        background: "linear-gradient(135deg, #FF8A00 0%, #FFC14D 55%, #FF8A00 100%)",
        boxShadow: pressed
          ? "0 2px 12px rgba(255,138,0,0.35)"
          : "0 8px 32px rgba(255,138,0,0.45), 0 2px 8px rgba(255,90,61,0.25), inset 0 1px 0 rgba(255,255,255,0.35)",
        transform: pressed ? "scale(0.97)" : "scale(1)",
        transition: "transform 150ms ease, box-shadow 150ms ease",
        border: "none",
        cursor: "pointer",
      }}
    >
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "50%",
          borderRadius: "34px 34px 0 0",
          background: "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: r.x - 8,
            top: r.y - 8,
            width: 16,
            height: 16,
            background: "rgba(255,255,255,0.55)",
            animation: "btnRipple 0.65s ease-out forwards",
          }}
        />
      ))}
      <span className="relative z-10 flex flex-col items-center justify-center gap-0.5 pointer-events-none">
        <span
          className="flex items-center gap-1.5"
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.01em",
            fontFamily: "'Inter', system-ui, sans-serif",
            textShadow: "0 1px 4px rgba(0,0,0,0.18)",
          }}
        >
          Wage Loan
          <ChevronRight size={18} strokeWidth={2.5} className="opacity-80" />
        </span>
        <span
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.06em",
          }}
        >
          工薪贷
        </span>
      </span>
      <style>{`
        @keyframes btnRipple {
          0%   { transform: scale(1);  opacity: 0.7; }
          100% { transform: scale(14); opacity: 0;   }
        }
      `}</style>
    </button>
  );
}
