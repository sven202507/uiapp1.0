import Image from "next/image";

export default function NovaLogoBlock() {
  return (
    <div className="flex select-none flex-col items-center gap-4">
      <div className="relative">
        <div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(249,115,22,0.28) 0%, rgba(248,184,78,0.18) 48%, transparent 78%)",
            opacity: 0.72,
            transform: "scale(1.34)",
          }}
        />
        <Image
          src="/brand/logo-mark.png"
          alt="Nova Finance Logo"
          width={152}
          height={152}
          priority
          className="relative z-10"
          style={{
            width: "clamp(116px, 31vw, 152px)",
            height: "auto",
            filter: "drop-shadow(0 18px 38px rgba(234,88,12,0.18))",
          }}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1
          className="text-[32px] font-bold leading-none sm:text-[36px]"
          style={{
            color: "var(--nova-navy)",
            fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
            letterSpacing: "0",
          }}
        >
          Nova Finance
        </h1>
      </div>
    </div>
  );
}
