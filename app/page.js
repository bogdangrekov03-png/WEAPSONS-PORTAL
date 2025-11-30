"use client";

import HudNav from "./components/HudNav";
import { useEffect } from "react";

export default function Home() {

  // Паралакс-ефект
  useEffect(() => {
    const heroParallax = document.getElementById("heroParallax");

    const applyParallax = (xNorm, yNorm) => {
      if (!heroParallax) return;
      heroParallax.style.transform =
        `translate3d(${xNorm * 18}px, ${yNorm * 18}px, 0)
        rotateX(${yNorm * 6}deg)
        rotateY(${-xNorm * 6}deg)`;
    };

    // рух миші
    window.addEventListener("mousemove", e => {
      const xNorm = (e.clientX / window.innerWidth - 0.5) * 2;
      const yNorm = (e.clientY / window.innerHeight - 0.5) * 2;
      applyParallax(xNorm, yNorm);
    });

    // рух телефону
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", event => {
        let xNorm = (event.gamma || 0) / 45;
        let yNorm = (event.beta || 0) / 45;
        xNorm = Math.max(-1, Math.min(1, xNorm));
        yNorm = Math.max(-1, Math.min(1, yNorm));
        applyParallax(xNorm, yNorm);
      });
    }

  }, []);

  return (
    <>
      <HudNav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-parallax" id="heroParallax"></div>

        <div className="hero-inner">
          <div className="hero-badge">• тактичний огляд •</div>

          <h1 className="hero-title">Засоби ураження</h1>

          <p className="hero-sub">
            Інформаційний портал про основні засоби ураження, їх завдання, сфери застосування
            та тактичні можливості. Зручний доступ до даних по боєприпасах, ракетних комплексах,
            ППО та безпілотних системах.
          </p>

          <div className="hero-meta">
            <span>Артилерія</span>
            <span>Міномети</span>
            <span>Стрілецька зброя</span>
            <span>Гранати</span>
            <span>Інженерні боєприпаси</span>
            <span>Ракетні комплекси</span>
            <span>ППО</span>
            <span>БпЛА</span>
            <span>Авіаційні боєприпаси</span>
          </div>
        </div>
      </section>

      {/* СЕКЦІЯ: РОЗДІЛИ */}
      <section id="sec-cats">
        <h2 className="section-title">Розділи порталу</h2>
        <p className="section-text">
          Для зручності уся інформація розділена на окремі блоки. Обери потрібну категорію, щоб
          перейти до повного переліку з картками, фото, характеристиками та описом.
        </p>

        <div className="categories-grid">
          <div className="cat-card" onClick={() => window.location.href = "/ammo"}>
            <h3>Боєприпаси</h3>
            <p>Снаряди, міни, патрони, інженерні заряди та інші типи боєприпасів.</p>
          </div>

          <div className="cat-card" onClick={() => window.location.href = "/rockets"}>
            <h3>Ракетні комплекси</h3>
            <p>Оперативно-тактичні, протитанкові, зенітні ракетні комплекси.</p>
          </div>

          <div className="cat-card" onClick={() => window.location.href = "/pvo"}>
            <h3>ППО</h3>
            <p>Засоби протиповітряної оборони та боротьби з повітряними цілями.</p>
          </div>

          <div className="cat-card" onClick={() => window.location.href = "/uav"}>
            <h3>БпЛА</h3>
            <p>Розвідувальні, ударні, коригувальні й спеціальні безпілотні системи.</p>
          </div>
        </div>
      </section>

      {/* СЕКЦІЯ: СТРУКТУРА */}
      <section id="sec-structure">
        <h2 className="section-title">Структура засобів ураження</h2>
        <p className="section-text">
          Умовно всі засоби ураження можна поділити на кілька основних напрямків, кожен з яких
          має власні завдання, номенклатуру та особливості застосування.
        </p>

        <div className="categories-grid">
          <div className="cat-card"><h3>Артилерійські боєприпаси</h3><p>Снаряди для гармат, гаубиць, САУ.</p></div>
          <div className="cat-card"><h3>Мінометні міни</h3><p>Калібри 60–120 мм.</p></div>
          <div className="cat-card"><h3>Стрілецькі боєприпаси</h3><p>Патрони до автоматів та кулеметів.</p></div>
          <div className="cat-card"><h3>Інженерні боєприпаси</h3><p>Міни, заряди, підривні засоби.</p></div>
          <div className="cat-card"><h3>Ракетні комплекси</h3><p>Протитанкові та зенітні ракети.</p></div>
          <div className="cat-card"><h3>ППО</h3><p>Боротьба з літаками, ракетами, БпЛА.</p></div>
          <div className="cat-card"><h3>БпЛА</h3><p>Розвідувальні та ударні дрони.</p></div>
          <div className="cat-card"><h3>Авіаційні боєприпаси</h3><p>Бомби та керовані ракети.</p></div>
        </div>
      </section>

      {/* ФУТЕР */}
      <footer>
        © 2025 Засоби ураження • Інформаційний тактичний портал
        <br /><br />
        <a href="https://zbroya-portal.com.ua" target="_blank">
          www.zbroya-portal.com.ua
        </a>
      </footer>
    </>
  );
}
