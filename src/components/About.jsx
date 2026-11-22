import { useScrollReveal } from '../hooks/useScrollReveal';
import TelemetryCounter from './TelemetryCounter';

export default function About({ config }) {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section about">
      <div className="container reveal-element" ref={ref}>
        <h2 className="section-title">
          <span className="section-number">01.</span> Architectural Overview
        </h2>

        <div className="about-grid">
          <div className="about-text">
            {config.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="about-telemetry-col">
            <h3 className="telemetry-section-tag">System Telemetry &amp; Metrics</h3>
            <div className="about-telemetry-grid">
              <TelemetryCounter
                target={8.32}
                decimals={2}
                suffix=" / 10"
                label="Cumulative CGPA (VIT)"
              />
              <TelemetryCounter
                target={90}
                decimals={0}
                suffix=" nm"
                label="Cadence Virtuoso GPDK"
              />
              <TelemetryCounter
                target={512}
                decimals={0}
                suffix=" -d"
                label="FaceNet Embedding Vector"
              />
              <TelemetryCounter
                target={8}
                decimals={0}
                suffix="+"
                label="Full-Stack &amp; VLSI Projects"
              />
              <TelemetryCounter
                target={50}
                decimals={0}
                suffix=" Hz"
                label="ATmega328P Timer PWM"
              />
              <TelemetryCounter
                target={100}
                decimals={0}
                suffix="%"
                label="DRC / LVS Matched Verification"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
