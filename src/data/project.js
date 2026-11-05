import weddingInvitation from '../assets/wedding-invitation.png';
import chatbotPrototype from '../assets/chatbot-prototype.png';
import modifiedGame from '../assets/2048-modified.png';
import portfolio from '../assets/portfolio.png';

export const projects = [
  {
    title: "Modified 2048 Game",
    image: modifiedGame,
    description: "Friend 2048 is a fun and personalized twist on the classic 2048 puzzle game. Instead of merging numbered tiles, players combine pictures of their friends to unlock new faces and progress toward the final image.",
    stack: ["HTML", "CSS", "Javascript", "Firebase"],
    github: "https://github.com/Chicoffee/js-game-ict",
    demo: "https://chicoffee.github.io/js-game-ict/",
  },
  {
    title: "Wedding Invitation",
    image: weddingInvitation,
    description: "A digital wedding invitation website for couples to share their special day with family and friends — featuring their love story, event details, entourage, and an RSVP system.",
    stack: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/Chicoffee/wedding-invitation",
    demo: "https://arwinandjen-wedding.vercel.app/",
  },
  {
    title: "Chatbot Prototype",
    image: chatbotPrototype,
    description: "Please meet ISA, Intelligent Student Assistant, that will help you with your concerns and has full cover of the college department's handbook! Mini school project powered by Gemini API model 2.5 flash lite.",
    stack: ["React", "CSS", "Gemini API"],
    github: "https://github.com/Chicoffee/chatbot-prototype",
    demo: "https://chatbot-prototype-sts.netlify.app/",
  },
  {
    title: "Portfolio",
    image: portfolio,
    description: "A collection of my projects, achievements, and technical skills, designed to reflect my growth.",
    stack: ["React", "Tailwind CSS"],
    github: "https://github.com/Chicoffee/Portfolio",
    demo: "https://devkohi.vercel.app/",
  },
  {
    title: "Holodori Hub",
    description: "To be release",
    stack: ["Next.js", "Tailwind CSS", "Supabase"],
  },
]
