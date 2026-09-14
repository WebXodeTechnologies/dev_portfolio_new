import { RevealOptions } from "@/types/animation";

export const createRevealVariants = ({
  distance = 40,
  duration = 0.8,
  delay = 0,
}: RevealOptions = {}) => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
    },
  },
});
