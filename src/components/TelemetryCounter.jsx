import { useState, useEffect, useRef } from 'react';

/**
 * Precision Telemetry Counter
 * Smoothly interpolates numerical values upon entering the viewport.
 * Uses font-variant-numeric: tabular-nums to prevent layout jitter.
 */
export default function TelemetryCounter({
  target,
  decimals = 0,
  duration = 1800,
  prefix = '',
  suffix = '',
  label = '',
}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const startVal = 0;

          // Ease-out expo for precision feel: fast ramp, slow settling
          const easeOutExpo = (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutExpo(progress);
            const current = startVal + (target - startVal) * eased;

            setValue(current);

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setValue(target);
            }
          };

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals, duration]);

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value);

  return (
    <div className="telemetry-card" ref={ref}>
      <div className="telemetry-display">
        {prefix}
        <span className="telemetry-digits">{formatted}</span>
        {suffix}
      </div>
      {label && <div className="telemetry-label">{label}</div>}
    </div>
  );
}
