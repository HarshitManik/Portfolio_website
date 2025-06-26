import { useCallback } from "react";

export function useConfetti() {
  const triggerConfetti = useCallback(() => {
    // Create confetti particles
    const createConfettiParticle = () => {
      const particle = document.createElement("div");
      particle.style.position = "fixed";
      particle.style.width = "10px";
      particle.style.height = "10px";
      particle.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
      particle.style.left = Math.random() * window.innerWidth + "px";
      particle.style.top = "-10px";
      particle.style.pointerEvents = "none";
      particle.style.zIndex = "9999";
      particle.style.borderRadius = "50%";
      
      document.body.appendChild(particle);
      
      // Animate particle
      const animation = particle.animate([
        {
          transform: `translateY(0px) rotate(0deg)`,
          opacity: 1
        },
        {
          transform: `translateY(${window.innerHeight + 20}px) rotate(720deg)`,
          opacity: 0
        }
      ], {
        duration: 3000 + Math.random() * 2000,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      });
      
      animation.onfinish = () => {
        particle.remove();
      };
    };
    
    // Create multiple confetti particles
    for (let i = 0; i < 50; i++) {
      setTimeout(() => createConfettiParticle(), i * 50);
    }
  }, []);

  return { triggerConfetti };
}
