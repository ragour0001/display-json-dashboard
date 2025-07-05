"use client";

import TherapistCard from "./TherapistCard";

export default function TherapistGrid() {
  return (
    <>
      <style>{`
        .therapist-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
          align-self: stretch;
        }

        .therapist-row {
          display: flex;
          height: 404px;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
          gap: 24px;
        }

        @media (max-width: 1200px) {
          .therapist-row {
            justify-content: space-around;
            flex-wrap: wrap;
            height: auto;
            gap: 20px;
          }

          .therapist-card {
            width: calc(50% - 10px);
            max-width: 283px;
          }
        }

        @media (max-width: 768px) {
          .therapist-row {
            flex-direction: column;
          }

          .therapist-card {
            width: 100%;
            max-width: none;
          }
        }
      `}</style>
      <div className="therapist-grid">
        <div className="therapist-row">
          <TherapistCard />
          <TherapistCard />
          <TherapistCard />
        </div>
        <div className="therapist-row">
          <TherapistCard />
          <TherapistCard />
          <TherapistCard />
        </div>
      </div>
    </>
  );
}
