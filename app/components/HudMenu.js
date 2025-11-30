"use client";

export default function HudMenu({ open }) {
  const go = (link) => {
    window.location.href = link;
  };

  return (
    <div className={`hud-menu ${open ? "visible" : ""}`}>
      <div className="hud-menu-groups">

        <div className="menu-group">
          <div className="menu-group-title">Основне</div>
          <ul>
            <li><button onClick={() => go("/")}>Головна</button></li>
          </ul>
        </div>

        <div className="menu-group">
          <div className="menu-group-title">Категорії озброєння</div>
          <ul>
            <li><button onClick={() => go("/ammo")}>Боєприпаси</button></li>
            <li><button onClick={() => go("/rockets")}>Ракетні комплекси</button></li>
            <li><button onClick={() => go("/pvo")}>ППО</button></li>
            <li><button onClick={() => go("/uav")}>БпЛА</button></li>
          </ul>
        </div>

        <div className="menu-group">
          <div className="menu-group-title">Довідник</div>
          <ul>
            <li><button onClick={() => go("/classification")}>Класифікація</button></li>
            <li><button onClick={() => go("/calibers")}>Калібри</button></li>
          </ul>
        </div>

        <div className="menu-group">
          <div className="menu-group-title">Тактика</div>
          <ul>
            <li><button onClick={() => go("/tactics")}>Тактичне застосування</button></li>
          </ul>
        </div>

        <div className="menu-group">
          <div className="menu-group-title">Українські розробки</div>
          <ul>
            <li><button onClick={() => go("/ukraine-dev")}>Огляд</button></li>
          </ul>
        </div>

        <div className="menu-group">
          <div className="menu-group-title">Безпека</div>
          <ul>
            <li><button onClick={() => go("/safety")}>Правила безпеки</button></li>
          </ul>
        </div>

      </div>
    </div>
  );
}

