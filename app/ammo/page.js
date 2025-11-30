"use client";

import HudNav from "../components/HudNav";

export default function AmmoPage() {
  const items = [
    {
      title: "Артилерійські снаряди",
      desc: "Калібри 100–203 мм. ОФ, касетні, кориговані, димові.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/47/152mm_artillery_shells.jpg"
    },
    {
      title: "Мінометні міни",
      desc: "60, 82 та 120 мм. Основні засоби ближнього вогневого ураження.",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7f/82mm_mortar_rounds.jpg"
    },
    {
      title: "Стрілецькі набої",
      desc: "5.45×39, 7.62×39, 12.7×108 мм — набої до автоматів, кулеметів, ПКМ, ДШК.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Russian_5.45x39mm_ammunition.jpg"
    },
    {
      title: "Гранати",
      desc: "РГД-5, Ф-1, РГО, РГН — ураження живої сили та техніки.",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/39/RGD-5_grenades.jpg"
    },
    {
      title: "Інженерні заряди",
      desc: "Підривні заряди, фугаси, МОН, ТМ. Для руйнування та загороджень.",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Mon-50_mine.jpg"
    },
    {
      title: "Реактивні снаряди",
      desc: "122 мм «Град», 220 мм «Ураган», 300 мм «Смерч» — масоване ураження.",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/87/BM-21_Grad_rocket.jpg"
    }
  ];

  return (
    <>
      <HudNav />

      <section className="page-section">
        <h1 className="page-title">Боєприпаси</h1>
        <p className="page-sub">
          Повний перелік основних типів боєприпасів, що застосовуються в сучасних бойових діях —
          від мінометних мін до реактивних снарядів та інженерних вибухових засобів.
        </p>

        <div className="ammo-grid">
          {items.map((item, i) => (
            <div key={i} className="ammo-card">
              <div className="ammo-img">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="ammo-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        © 2025 Боєприпаси • Збройний портал
      </footer>
    </>
  );
}
