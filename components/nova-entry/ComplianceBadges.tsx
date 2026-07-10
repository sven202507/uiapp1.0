import { ShieldCheck, FileCheck, Users, BadgeCheck } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Privacy Protected" },
  { icon: FileCheck,   label: "Consent Required" },
  { icon: Users,       label: "HR Verified" },
  { icon: BadgeCheck,  label: "Eligibility Review" },
];

export default function ComplianceBadges() {
  return (
    <div
      className="flex flex-col items-center gap-3 w-full"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 12px)" }}
    >
      <div className="flex items-center justify-center gap-5 flex-wrap px-4">
        {badges.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 36,
                height: 36,
                background: "rgba(255,255,255,0.22)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.35)",
                boxShadow: "0 2px 8px rgba(255,138,0,0.12)",
              }}
            >
              <Icon size={16} strokeWidth={1.8} style={{ color: "#FF8A00" }} />
            </div>
            <span
              style={{
                fontSize: "10px",
                fontWeight: 500,
                color: "rgba(11,22,51,0.55)",
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
      <p
        className="text-center px-6"
        style={{
          fontSize: "10px",
          color: "rgba(11,22,51,0.38)",
          lineHeight: 1.5,
          maxWidth: 320,
        }}
      >
        Financial services are subject to review and user consent.
      </p>
    </div>
  );
}
