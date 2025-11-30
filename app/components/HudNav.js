"use client";
import { useState } from "react";
import HudMenu from "./HudMenu";

export default function HudNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="hud-nav">
        <div className="hud-logo">
          <div className="hud-emblem">
            <svg viewBox="0 0 32 44">
              <path d="M16 2C11 5 9 10 9 16v14l-4-4v6l7 6h2V17h4v21h2l7-6v-6l-4 4V16c0-6-2-11-7-14z"/>
            </svg>
          </div>

          <div className="hud-logo-text">
            <div className="hud-logo-main">Збройний портал</div>
            <div className="hud-logo-sub">Інформаційний тактичний портал</div>
          </div>
        </div>

        <div
          className={`hud-burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
        </div>
      </div>

      <HudMenu open={menuOpen} />
    </>
  );
}

