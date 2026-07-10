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
      className="flex w-full flex-col items-center gap-3"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 12px)" }}
    >
      <div className="flex flex-wrap items-center justify-center gap-4 px-4">
        {badges.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div
              className="relative flex items-center justify-center rounded-full"
              style={{
                width: 36,
                height: 36,
                background: "rgba(255,255,255,0.64)",
                backdropFilter: "blur(10px)",
                border: "1px solid var(--nova-border-soft)",
                boxShadow: "0 10px 24px rgba(234,88,12,0.08)",
              }}
            >
              <Icon size={16} strokeWidth={1.8} style={{ color: "rgba(11,22,51,0.66)" }} />
              <span
                aria-hidden="true"
                className="absolute rounded-full"
                style={{
                  right: 8,
                  bottom: 8,
                  width: 5,
                  height: 5,
                  background: "var(--nova-orange)",
                  boxShadow: "0 0 0 2px rgba(255,255,255,0.7)",
                }}
              />
            </div>
            <span
              style={{
                fontSize: "10px",
                fontWeight: 600,
                color: "rgba(11,22,51,0.68)",
                letterSpacing: "0",
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
          color: "rgba(11,22,51,0.48)",
          lineHeight: 1.5,
          maxWidth: 320,
        }}
      >
        Financial services are subject to review and user consent.
      </p>
    </div>
  );
}
