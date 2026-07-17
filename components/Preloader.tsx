"use client";

import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

const DISPLAY_TIME = 1450;
const EXIT_TIME = 450;

export default function Preloader() {
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const start = window.setTimeout(() => setLeaving(true), DISPLAY_TIME);
    const finish = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    }, DISPLAY_TIME + EXIT_TIME);

    return () => {
      window.clearTimeout(start);
      window.clearTimeout(finish);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      data-preloader
      className={`${styles.overlay} ${leaving ? styles.leaving : ""}`}
      role="status"
      aria-live="polite"
      aria-label="TECHNOFROST is loading"
    >
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.truckWrapper} aria-hidden="true">
          <div className={styles.truckBody}>
            <svg viewBox="0 0 198 93" className={styles.truckSvg}>
              <path className={styles.cab} d="M135 22.5h42.264a2.5 2.5 0 0 1 2.33 1.594l12.736 32.75c.112.289.17.596.17.906V89a2.5 2.5 0 0 1-2.5 2.5h-55a2.5 2.5 0 0 1-2.5-2.5V25a2.5 2.5 0 0 1 2.5-2.5Z" />
              <path className={styles.window} d="M146 33.5h35.741a2.5 2.5 0 0 1 2.337 1.612l6.46 17A2.5 2.5 0 0 1 188.2 55.5H146a2.5 2.5 0 0 1-2.5-2.5V36a2.5 2.5 0 0 1 2.5-2.5Z" />
              <path className={styles.handle} d="M150 65c0 1.105-1.567 2-3.5 2s-3.5-.895-3.5-2 1.567-2 3.5-2 3.5.895 3.5 2Z" />
              <rect className={styles.headlight} x="187" y="63" width="5" height="7" rx="1" />
              <rect className={styles.bumper} x="193" y="81" width="4" height="11" rx="1" />
              <rect className={styles.cargo} x="6.5" y="1.5" width="121" height="90" rx="2.5" />
              <rect className={styles.rearBumper} x="1" y="84" width="6" height="4" rx="2" />
            </svg>
          </div>

          <div className={styles.tires}>
            {[0, 1].map((tire) => (
              <svg key={tire} viewBox="0 0 30 30">
                <circle className={styles.tire} cx="15" cy="15" r="13.5" />
                <circle className={styles.hub} cx="15" cy="15" r="7" />
                <path className={styles.hubLine} d="M15 8v14M8 15h14" />
              </svg>
            ))}
          </div>

          <div className={styles.road} />
          <svg viewBox="0 0 453.459 453.459" className={styles.lampPost}>
            <path d="M252.882 0c-37.781 0-68.686 29.953-70.245 67.358h-6.917v8.954c-26.109 2.163-45.463 10.011-45.463 19.366h9.993a52.53 52.53 0 1 0 100.015 0h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189 38.779 223.924 16 252.882 16c29.952 0 54.32 24.368 54.32 54.32 0 28.774-11.078 37.009-25.105 47.437-17.444 12.968-37.216 27.667-37.216 78.884v113.914c-13.398 6.016-12.277 12.594-6.65 16.243-3.432 27.933-26.851 95.744-8.226 115.459v11.202h45.75v-11.202c18.625-19.715-4.794-87.527-8.227-115.459 5.63-3.649 6.75-10.227-6.649-16.243V196.641c0-43.174 14.942-54.283 30.762-66.043 14.793-10.997 31.559-23.461 31.559-60.277C323.202 31.545 291.656 0 252.882 0Z" />
          </svg>
        </div>

        <div className={styles.brand} aria-hidden="true">
          <span>TECHNO</span><span>FROST</span>
        </div>
        <p className={styles.tagline}>Cooling solutions on the way</p>
        <div className={styles.progress} aria-hidden="true"><span /></div>
      </div>
    </div>
  );
}
