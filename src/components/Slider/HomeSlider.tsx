"use client";

import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

interface LogoRow {
  direction: "slideLeft" | "slideRight";
  logos: Logo[];
}

export default function HomeSlider() {
  // Define your rows dynamically
  const logoRows: LogoRow[] = [
    {
      direction: "slideLeft",
      logos: [
        { src: "/images/Clients-logo/ylopo.png", alt: "YLOPO" },
        { src: "/images/Clients-logo/imvi.png", alt: "IMVI" },
        { src: "/images/Clients-logo/chemco.png", alt: "CHEMCO" },
        { src: "/images/Clients-logo/cammi.png", alt: "CAMMI" },
        { src: "/images/Clients-logo/mdb.png", alt: "MDB" },

        // add more logos here
      ],
    },
    {
      direction: "slideRight",
      logos: [
        { src: "/images/Clients-logo/cammi.png", alt: "CAMMI" },
        { src: "/images/Clients-logo/chemco.png", alt: "CHEMCO" },
        { src: "/images/Clients-logo/zilow.png", alt: "ZILLOW" },
        { src: "/images/Clients-logo/ylopo.png", alt: "YLOPO" },
        { src: "/images/Clients-logo/mdb.png", alt: "MDB" },

        // add more logos here
      ],
    },
    {
      direction: "slideLeft",
      logos: [
        { src: "/images/Clients-logo/mdb.png", alt: "MDB" },
        { src: "/images/Clients-logo/zilow.png", alt: "ZILLOW" },
        { src: "/images/Clients-logo/chemco.png", alt: "CHEMCO" },
        { src: "/images/Clients-logo/ylopo.png", alt: "YLOPO" },
        { src: "/images/Clients-logo/cammi.png", alt: "CAMMI" },
        // add more logos here
      ],
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes slideLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .slider-container {
          width: 70vw;
          overflow: hidden;
          padding: 0.1rem 0;
          position: relative;
        }

        .slider-container::before,
        .slider-container::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 180px;
          z-index: 20;
          pointer-events: none;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .slider-container::before {
          left: 0;
          background: linear-gradient(to right, rgba(255, 255, 255, 0.85), transparent);
        }

        .slider-container::after {
          right: 0;
          background: linear-gradient(to left, rgba(255, 255, 255, 0.85), transparent);
        }

        .slider-track {
          display: flex;
          animation: var(--anim) 30s linear infinite;
          will-change: transform;
          padding: 0 180px;
          gap: 16rem;
          mask-image: linear-gradient(
            to right,
            transparent 0px,
            black 120px,
            black calc(100% - 120px),
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0px,
            black 120px,
            black calc(100% - 120px),
            transparent 100%
          );
        }

        .slider-track:hover {
          animation-play-state: paused;
        }

        .logo-item {
          flex: 0 0 auto;
        }

        .logo-container {
          width: 150px;
          height: 60px;
          border-radius: 9999px;
          padding: 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo-grid {
          display: grid;
          grid-template-rows: repeat(${logoRows.length}, 1fr);
          gap: 0.5rem;
          width: fit-content;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .slider-container::before,
          .slider-container::after {
            width: 100px;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
          }
          .slider-track {
            padding: 0 100px;
            gap: 5rem;
            mask-image: linear-gradient(
              to right,
              transparent 80px,
              black 80px,
              black calc(100% - 80px),
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 80px,
              black 80px,
              black calc(100% - 80px),
              transparent 100%
            );
          }
          .logo-container {
            width: 120px;
            height: 48px;
          }
        }
      `}</style>

      <div className="slider-container">
        <div className="logo-grid">
          {logoRows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="slider-track"
              style={{ "--anim": row.direction } as React.CSSProperties}
            >
              {row.logos.map((logo, i) => (
                <div key={`r${rowIndex}-logo-${i}`} className="logo-item">
                  <div className="logo-container">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={150}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
