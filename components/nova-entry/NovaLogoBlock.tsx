import Image from "next/image";

export default function NovaLogoBlock() {
  return (
    <div className="flex flex-col items-center gap-4 select-none">
      <div className="relative">
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-40"
          style={{ background: "radial-gradient(circle, #FFC14D 0%, #FF8A00 50%, transparent 80%)", transform: "scale(1.4)" }}
        />
        <Image
          src="/brand/logo-mark.png"
          alt="Nova Finance Logo"
          width={96}
          height={96}
          priority
          className="relative z-10 drop-shadow-[0_4px_24px_rgba(255,138,0,0.45)]"
          style={{ width: "clamp(72px, 20vw, 96px)", height: "auto" }}
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1
          className="text-[28px] font-bold tracking-tight leading-none"
          style={{
            color: "#0B1633",
            fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          Nova Finance
        </h1>
        <p
          className="text-[13px] font-medium tracking-widest uppercase"
          style={{ color: "#FF8A00", letterSpacing: "0.18em" }}
        >
          Cambodia
        </p>
      </div>
    </div>
  );
}
