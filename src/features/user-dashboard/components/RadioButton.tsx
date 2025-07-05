"use client";

interface RadioButtonProps {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  name?: string;
}

export default function RadioButton({
  value,
  checked,
  onChange,
  name,
}: RadioButtonProps) {
  return (
    <>
      <style>{`
        .radio-button-container {
          display: flex;
          width: 48px;
          height: 48px;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .radio-button-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100px;
        }

        .radio-state-layer {
          display: flex;
          padding: 8px;
          justify-content: center;
          align-items: center;
        }

        .radio-icon {
          width: 24px;
          height: 24px;
          position: relative;
          border: 2px solid #ccc;
          border-radius: 50%;
          background: #fff;
          transition: all 0.2s ease;
        }

        .radio-button-container:hover .radio-icon {
          border-color: #006B5F;
        }

        .radio-button-container input:checked ~ .radio-button-wrapper .radio-icon {
          border-color: #006B5F;
          background: #006B5F;
        }

        .radio-inner-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .radio-native {
          position: absolute !important;
          opacity: 0 !important;
          width: 20px !important;
          height: 20px !important;
        }
      `}</style>
      <div className="radio-button-container" onClick={() => onChange(value)}>
        <input
          type="radio"
          checked={checked}
          value={value}
          name={name}
          onChange={() => onChange(value)}
          className="radio-native"
          style={{ position: 'absolute', opacity: 0, width: 20, height: 20 }}
          tabIndex={-1}
          aria-checked={checked}
        />
        <div className="radio-button-wrapper">
          <div className="radio-state-layer">
            <div className="radio-icon">
              {checked ? (
                <div className="radio-inner-circle" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
