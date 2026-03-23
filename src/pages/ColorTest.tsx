const palettes = [
  { name: "Midnight Blue & White", bg: "#0F172A", text: "#F8FAFC", accent: "#3B82F6" },
  { name: "Charcoal & Emerald", bg: "#1A1A2E", text: "#E5E5E5", accent: "#10B981" },
  { name: "Dark Slate & Amber", bg: "#0F1419", text: "#F5F0E8", accent: "#F59E0B" },
  { name: "Neutral Gray & Cyan", bg: "#111111", text: "#D4D4D4", accent: "#06B6D4" },
  { name: "Obsidian & Rose", bg: "#0D0D0D", text: "#FAFAFA", accent: "#F43F5E" },
  { name: "Deep Indigo & Lime", bg: "#1E1B4B", text: "#E2E8F0", accent: "#84CC16" },
  { name: "Gunmetal & Teal", bg: "#1C2526", text: "#F0F4F8", accent: "#14B8A6" },
  { name: "Onyx & Violet", bg: "#121218", text: "#E8E8ED", accent: "#8B5CF6" },
  { name: "Carbon & Orange", bg: "#171717", text: "#EDEDED", accent: "#F97316" },
  { name: "Steel Blue & Gold", bg: "#0C1222", text: "#E1E7EF", accent: "#EAB308" },
];

const ColorTest = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
        Pick Your Color Palette
      </h1>
      <p className="text-gray-400 text-center mb-10">
        Each card shows background, text, and accent colors with a mini UI preview.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {palettes.map((p, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden border border-white/10"
            style={{ backgroundColor: p.bg }}
          >
            {/* Header */}
            <div className="p-5 pb-3">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold" style={{ color: p.text }}>
                  {i + 1}. {p.name}
                </span>
                <div className="flex gap-2">
                  {[
                    { label: "BG", color: p.bg },
                    { label: "Text", color: p.text },
                    { label: "Accent", color: p.accent },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col items-center gap-1">
                      <div
                        className="w-8 h-8 rounded-full border border-white/20"
                        style={{ backgroundColor: s.color }}
                      />
                      <span className="text-[10px] text-gray-400">{s.color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini UI Preview */}
              <div
                className="rounded-lg p-5 border"
                style={{
                  backgroundColor: p.bg,
                  borderColor: p.accent + "33",
                }}
              >
                <h2
                  className="text-xl font-bold mb-1"
                  style={{ color: p.text }}
                >
                  Hi, I'm Arun Anbu
                </h2>
                <p
                  className="text-sm mb-4 opacity-70"
                  style={{ color: p.text }}
                >
                  Robotics Engineer & Tech Explorer building intelligent machines.
                </p>
                <div className="flex gap-3">
                  <button
                    className="px-4 py-2 rounded-md text-sm font-medium transition-all"
                    style={{
                      backgroundColor: p.accent,
                      color: p.bg,
                    }}
                  >
                    View My Work
                  </button>
                  <button
                    className="px-4 py-2 rounded-md text-sm font-medium border transition-all"
                    style={{
                      borderColor: p.accent,
                      color: p.accent,
                      backgroundColor: "transparent",
                    }}
                  >
                    Contact Me
                  </button>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mt-4">
                  {["Python", "ROS", "OpenCV"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: p.accent + "20",
                        color: p.accent,
                        border: `1px solid ${p.accent}44`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card preview */}
                <div
                  className="mt-4 p-3 rounded-md border"
                  style={{
                    backgroundColor: p.accent + "08",
                    borderColor: p.accent + "22",
                  }}
                >
                  <div className="text-sm font-medium" style={{ color: p.text }}>
                    Autonomous Drone Navigation
                  </div>
                  <div className="text-xs mt-1 opacity-50" style={{ color: p.text }}>
                    A sample project card preview
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorTest;
