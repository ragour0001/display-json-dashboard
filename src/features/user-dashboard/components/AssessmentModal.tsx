import React, { useState } from "react";
import questions from "../data/assessmentQuestions.json";

interface AssessmentModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AssessmentModal({ open, onClose }: AssessmentModalProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<{ [key: number]: string }>({});

  if (!open) return null;
  const question = questions[current];
  const total = questions.length;

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.3)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          background: '#FFF6F6',
          borderRadius: '16px',
          width: '800px',
          maxWidth: '95vw',
          boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
          padding: '32px 32px 24px 32px',
          position: 'relative',
        }}>
          <button onClick={onClose} style={{
            position: 'absolute',
            top: 16,
            right: 20,
            background: 'transparent',
            border: 'none',
            fontSize: 28,
            cursor: 'pointer',
          }}>&times;</button>
          <h2 style={{marginBottom: 0}}>Take Your Assessments</h2>
          <p style={{marginTop: 4, color: '#4B6358'}}>Help us understand you better. These quick assessments will personalize your care plan.</p>
          <div style={{margin: '18px 0 12px 0'}}>
            <div style={{height: 8, background: '#F0F0F0', borderRadius: 8, overflow: 'hidden'}}>
              <div style={{width: `${((current+1)/total)*100}%`, height: 8, background: '#006B5F', borderRadius: 8, transition: 'width 0.3s'}} />
            </div>
            <div style={{fontSize: 14, color: '#006B5F', marginTop: 6}}>Question set {current+1} of {total}</div>
          </div>
          <div style={{margin: '24px 0'}}>
            <div style={{fontWeight: 600, fontSize: 18, marginBottom: 12}}>{current+1}. {question.question}</div>
            <div>
              {question.options.map((opt: string, idx: number) => (
                <label key={idx} style={{display: 'flex', alignItems: 'center', marginBottom: 10, cursor: 'pointer'}}>
                  <input
                    type="radio"
                    name={`q${current}`}
                    value={opt}
                    checked={selected[current] === opt}
                    onChange={() => setSelected({...selected, [current]: opt})}
                    style={{marginRight: 10}}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 24}}>
            <button
              onClick={() => setCurrent(c => Math.max(0, c-1))}
              disabled={current === 0}
              style={{
                background: '#fff',
                border: '1px solid #006B5F',
                color: '#006B5F',
                borderRadius: 8,
                padding: '8px 18px',
                fontWeight: 500,
                cursor: current === 0 ? 'not-allowed' : 'pointer',
                opacity: current === 0 ? 0.5 : 1
              }}
            >Back</button>
            <button
              onClick={() => setCurrent(c => Math.min(total-1, c+1))}
              disabled={typeof selected[current] === 'undefined'}
              style={{
                background: '#006B5F',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '8px 18px',
                fontWeight: 500,
                cursor: typeof selected[current] === 'undefined' ? 'not-allowed' : 'pointer',
                opacity: typeof selected[current] === 'undefined' ? 0.5 : 1
              }}
            >{current === total-1 ? 'Finish' : 'Next Question'}</button>
          </div>
        </div>
      </div>
    </>
  );
} 