"use client";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .thank-you-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
          padding: 20px;
        }

        .thank-you-modal {
          display: flex;
          width: 527px;
          height: 50%;
          padding: 52px 22px;
          flex-direction: column;
          align-items: center;
          gap: 37px;
          border-radius: 14px 14px 15px 15px;
          background: #fff;
          position: relative;
          box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);
          max-height: 90vh;
          overflow-y: auto;
        }

        .thank-you-close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
          z-index: 10;
        }

        .thank-you-close-button:hover {
          background: #f3f4f6;
        }

        .thank-you-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 37px;
          width: 100%;
        }

        .thank-you-illustration {
          width: 482.029px;
          height: 337.28px;
          flex-shrink: 0;
          border-radius: 0px 0px 15px 15px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .thank-you-illustration svg {
          max-width: 100%;
          height: auto;
        }

        .thank-you-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
        }

        .thank-you-title {
          width: 403.331px;
          height: 89.941px;
          flex-shrink: 0;
          color: #00201c;
          text-align: center;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 36px;
          font-style: normal;
          font-weight: 500;
          line-height: 44px;
          letter-spacing: 0px;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .thank-you-subtitle {
          display: flex;
          width: 392.088px;
          height: 44.971px;
          flex-direction: column;
          justify-content: center;
          flex-shrink: 0;
          color: #00201c;
          text-align: center;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.5px;
          margin: 0;
        }

        @media (max-width: 768px) {
          .thank-you-modal {
            width: 90%;
            max-width: 500px;
            height: auto;
            max-height: 80vh;
            padding: 40px 20px;
            gap: 30px;
          }

          .thank-you-illustration {
            width: 100%;
            height: auto;
            max-width: 400px;
          }

          .thank-you-title {
            width: 100%;
            height: auto;
            font-size: 28px;
            line-height: 36px;
          }

          .thank-you-subtitle {
            width: 100%;
            height: auto;
            font-size: 14px;
            line-height: 20px;
          }
        }

        @media (max-width: 480px) {
          .thank-you-modal {
            width: 95%;
            padding: 30px 15px;
            gap: 25px;
          }

          .thank-you-title {
            font-size: 24px;
            line-height: 32px;
          }

          .thank-you-subtitle {
            font-size: 13px;
            line-height: 18px;
          }

          .thank-you-illustration {
            max-width: 300px;
          }
        }
      `}</style>
      <div className="thank-you-modal-overlay" onClick={onClose}>
        <div className="thank-you-modal" onClick={(e) => e.stopPropagation()}>
          <button className="thank-you-close-button" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#666666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="thank-you-content">
            <div className="thank-you-illustration">
              <svg width="300" height="200" viewBox="0 0 483 338" fill="none">
                <path
                  d="M240.847 276.09C226.619 272.195 216.587 270.916 204.735 272.255C195.154 273.323 185.829 275.684 176.895 278.873C163.133 283.791 150.469 289.296 136.09 286.017C124.975 283.475 109.439 272.315 107.243 260.418C104.144 243.588 115.65 233.511 109.213 220.847C102.971 208.574 85.7952 204.377 77.4176 193.037C68.3031 180.719 66.6487 163.302 76.5152 150.878C88.2317 136.139 109.98 133.582 120.388 117.323C127.923 105.562 127.021 90.4159 134.737 78.6844C143.49 65.4037 159.418 57.1765 175.286 57.2969C193.65 57.4473 207.111 71.6605 224.739 74.5031C248.066 78.2632 265.288 60.711 285.713 53.5217C308.228 45.5954 333.737 47.0543 350.131 66.261C359.967 77.797 357.455 93.8 361.155 107.637C364.81 121.249 372.315 133.221 384.649 140.501C397.252 147.931 407.36 156.443 410.563 171.619C414.248 188.991 406.593 204.603 392.921 215.191C377.91 226.818 355.229 231.149 345.559 249.168C338.068 263.125 336.008 269.472 322.622 279.098C303.881 292.574 277.846 290.514 257.361 281.52C250.894 278.707 240.847 276.09 240.847 276.09Z"
                  fill="#DDE4EE"
                />
                <path
                  d="M116.505 98.5375C120.28 101.816 117.799 110.856 110.955 118.722C104.127 126.603 95.5238 130.318 91.7487 127.054C87.9735 123.775 90.4552 114.736 97.2986 106.87C104.142 98.9887 112.73 95.2587 116.505 98.5375Z"
                  fill="#DDE4EE"
                />
                <path
                  d="M378.755 237.209C382.53 240.488 380.049 249.528 373.205 257.394C366.377 265.275 357.774 268.99 353.999 265.726C350.224 262.447 352.705 253.408 359.549 245.542C366.377 237.661 374.98 233.931 378.755 237.209Z"
                  fill="#DDE4EE"
                />
                <path
                  d="M274.339 87.1443C266.146 80.0452 254.898 76.5737 244.137 77.8408C233.375 79.1079 223.239 85.0788 216.903 93.879C212.807 99.5895 210.151 106.498 204.753 111.011C196.873 117.589 185.434 117.277 175.28 115.819C165.126 114.361 153.896 113.701 144.367 117.485C140.375 119.082 136.817 121.651 133.675 124.584C126.211 131.562 121.351 139.199 118.921 149.127C116.804 157.771 116.526 166.606 110.243 172.889C101.234 181.898 85.8381 179.173 74.0178 183.929C66.6062 186.914 60.8956 193.267 57.3895 200.453C53.8833 207.639 52.3732 215.623 51.488 223.573C50.9499 228.52 50.6548 233.692 52.46 238.344C52.46 238.344 68.5329 223.451 92.2082 232.703C115.884 241.954 127.93 239.403 151.917 230.308C175.923 221.23 211.557 232.043 222.666 241.538L274.339 87.1443Z"
                  fill="#F43F5E"
                />
                <path
                  d="M278.54 231.662L256.548 231.002L246.846 275.385H294.509C294.839 272.191 295.707 269.136 296.991 266.22C279.582 260.353 278.54 231.662 278.54 231.662Z"
                  fill="#1E64FA"
                />
                <path
                  d="M301.917 267.451C300.147 267.156 298.498 266.74 296.988 266.236C295.704 269.135 294.853 272.207 294.506 275.401H319.344C317.331 272.485 312.592 269.222 301.917 267.451Z"
                  fill="#DDE4EE"
                />
                <path
                  d="M319.365 275.402H246.863L246.533 276.6C246.533 279.325 248.755 281.529 251.48 281.512L317.23 281.269C319.59 281.252 321.135 278.804 320.128 276.669C319.903 276.253 319.66 275.836 319.365 275.402Z"
                  fill="white"
                />
                <path
                  d="M275.179 263.392C277.193 259.538 280.577 256.796 284.76 255.598C285.75 255.32 285.316 253.793 284.344 254.071C279.779 255.372 276.03 258.393 273.825 262.593C273.339 263.496 274.711 264.294 275.179 263.392Z"
                  fill="white"
                />
                <path
                  d="M280.193 267.539C282.154 264.536 284.914 262.21 288.246 260.821C289.184 260.439 288.767 258.895 287.83 259.294C284.098 260.839 281.043 263.355 278.821 266.74C278.249 267.608 279.637 268.389 280.193 267.539Z"
                  fill="white"
                />
                <path
                  d="M270.345 257.664C273.469 254.505 276.837 251.225 281.575 251.138C282.599 251.121 282.599 249.524 281.575 249.541C276.403 249.645 272.671 253.047 269.217 256.536C268.505 257.265 269.633 258.393 270.345 257.664Z"
                  fill="white"
                />
                <path
                  d="M267.883 257.454C267.883 257.541 267.883 257.627 267.883 257.714C267.883 258.686 268.733 259.606 269.74 259.571C270.747 259.519 271.597 258.756 271.597 257.714C271.597 257.627 271.597 257.541 271.597 257.454C271.597 256.482 270.747 255.562 269.74 255.597C268.733 255.649 267.883 256.412 267.883 257.454Z"
                  fill="#1E293B"
                />
                <path
                  d="M277.428 267.505C277.428 267.591 277.428 267.678 277.428 267.765C277.428 268.737 278.278 269.657 279.285 269.622C280.292 269.57 281.142 268.806 281.142 267.765C281.142 267.678 281.142 267.591 281.142 267.505C281.142 266.533 280.292 265.613 279.285 265.647C278.278 265.7 277.428 266.481 277.428 267.505Z"
                  fill="#1E293B"
                />
                <path
                  d="M137.895 213.972L157.127 203.315L142.807 160.199L101.826 184.517C103.163 187.433 103.996 190.505 104.378 193.664C122.36 189.828 137.895 213.972 137.895 213.972Z"
                  fill="#1E64FA"
                />
                <path
                  d="M99.5195 195.125C101.203 194.465 102.817 193.997 104.38 193.667C103.998 190.508 103.165 187.436 101.828 184.52L80.4785 197.208C83.707 198.666 89.4349 199.065 99.5195 195.125Z"
                  fill="#DDE4EE"
                />
              </svg>
            </div>

            <div className="thank-you-text">
              <h2 className="thank-you-title">Thank you for the feedback!</h2>
              <p className="thank-you-subtitle">
                Your feedback is valuable & helps us to keep on improving!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
