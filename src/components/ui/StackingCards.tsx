"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CardData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
}

const defaultCards: CardData[] = [
  {
    id: 1,
    title: "Design",
    subtitle: "Creative Vision",
    description: "Transform ideas into stunning visual experiences with modern design principles.",
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
  },
  {
    id: 2,
    title: "Develop",
    subtitle: "Clean Code",
    description: "Build scalable applications with cutting-edge technologies and best practices.",
    gradient: "from-cyan-500 via-blue-600 to-indigo-600",
  },
  {
    id: 3,
    title: "Deploy",
    subtitle: "Global Scale",
    description: "Ship your products worldwide with lightning-fast performance and reliability.",
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
  },
  {
    id: 4,
    title: "Iterate",
    subtitle: "Continuous Growth",
    description: "Evolve your product through data-driven insights and user feedback.",
    gradient: "from-orange-500 via-rose-500 to-pink-600",
  },
];

interface StackingCardProps {
  card: CardData;
  index: number;
  totalCards: number;
  progress: any;
}

const StackingCard = ({ card, index, totalCards, progress }: StackingCardProps) => {
  const cardStart = index / totalCards;
  const cardEnd = (index + 1) / totalCards;

  const y = useTransform(
    progress,
    [cardStart, cardEnd],
    ["100vh", "0vh"]
  );

  const rotate = useTransform(
    progress,
    [cardStart, cardStart + 0.05, cardEnd],
    [8, 4, 0]
  );

  const scale = useTransform(
    progress,
    [cardEnd, cardEnd + 0.1],
    [1, 0.95]
  );

  return (
    <motion.div
      style={{
        y: index === 0 ? 0 : y,
        rotateX: index === 0 ? 0 : rotate,
        scale,
        zIndex: index + 1,
      }}
      className="absolute inset-0 origin-bottom"
    >
      <div
        className={`h-full w-full rounded-3xl bg-gradient-to-br ${card.gradient} p-10 md:p-16 flex flex-col justify-between shadow-2xl`}
      >
        {/* Card Header */}
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
            0{card.id}
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-3">
            {card.title}
          </h2>
          <p className="text-2xl md:text-3xl text-white/80 font-light">
            {card.subtitle}
          </p>
        </div>

        {/* Card Footer */}
        <div className="flex items-end justify-between">
          <p className="text-lg md:text-xl text-white/70 max-w-md leading-relaxed">
            {card.description}
          </p>
          <div className="hidden md:flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-red-500 backdrop-blur-sm" />
            <div className="w-12 h-12 rounded-full bg-red-500 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface StackingCardsProps {
  cards?: CardData[];
}

export const StackingCards = ({ cards = defaultCards }: StackingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${(cards.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden p-4 md:p-8">
        <div className="relative h-full w-full max-w-6xl mx-auto" style={{ perspective: "1500px" }}>
          {cards.map((card, index) => (
            <StackingCard
              key={card.id}
              card={card}
              index={index}
              totalCards={cards.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackingCards;
