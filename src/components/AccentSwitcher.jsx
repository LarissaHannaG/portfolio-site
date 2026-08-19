import { useEffect, useState } from "react";

const COLORS = [
  { name: "Blue", light: "#B8CCFF", mid: "#5C86FF", full: "#0057FF" },
  { name: "Red", light: "#FFC9C4", mid: "#FF7A70", full: "#FF3B30" },
  { name: "Pink", light: "#FFD3E4", mid: "#FF8AB5", full: "#FF3D81" },
  { name: "Orange", light: "#FFE0BF", mid: "#FFB266", full: "#FF7A00" },
];

function AccentSwitcher() {
  const [active, setActive] = useState(COLORS[0]);

  useEffect(() => {
    const root = document.documentElement.style;
    root.setProperty("--color-accent-light", active.light);
    root.setProperty("--color-accent-mid", active.mid);
    root.setProperty("--color-accent-full", active.full);
  }, [active]);

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-2 bg-cream/80 px-2 py-1.5 backdrop-blur-sm">
      {COLORS.map((color) => (
        <button
          key={color.name}
          type="button"
          aria-label={`Switch accent color to ${color.name}`}
          aria-pressed={active.name === color.name}
          onClick={() => setActive(color)}
          className={`rounded-full transition-all ${
            active.name === color.name ? "h-5 w-5" : "h-4 w-4"
          }`}
          style={{ backgroundColor: color.full }}
        />
      ))}
    </div>
  );
}

export default AccentSwitcher;
