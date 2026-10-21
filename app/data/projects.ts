export interface Project {
  id: number;
  image: string;
  title: string;
  category: "web" | "algo" | "game";
  description: string;
  tags: string[];
  link: string;
  download?: { url: string; label: string };
}

export const projects: Project[] = [
  {
    id: 1,
    image: "/hj.png",
    title: "Hasty Judgement",
    category: "game",
    description:
      "Fast-paced multiplayer game where decisions directly impact outcomes. Built with responsive networking logic.",
    tags: ["Unity", "C#", "Multiplayer"],
    link: "https://asralov.itch.io/hasty-judgement",
  },
  {
    id: 2,
    image: "/algo_playground.png",
    title: "Algo Playground",
    category: "algo",
    description:
      "Interactive educational web application visualizing complex data structures and step-by-step algorithmic execution.",
    tags: ["JavaScript", "HTML5/CSS3", "Algorithms"],
    link: "https://asralov.github.io/algo_playground/",
  },
  {
    id: 3,
    image: "/gpu_image.jpg",
    title: "GPU Sales & Value Tracker",
    category: "web",
    description:
      "Data extraction and pipeline project utilizing SerpAPI to scrape, clean, and visualize real-time GPU hardware pricing.",
    tags: ["Python", "NumPy", "Pandas", "SerpAPI"],
    link: "https://colab.research.google.com/drive/1RWs8o2DybkxKADhrAwubLUsLkBbf0zre?usp=sharing",
  },
  {
    id: 4,
    image: "/chatgpt.jpg",
    title: "Lose The Bias",
    category: "web",
    description:
      "AI-assisted full-stack news platform synthesizing multi-perspective news feeds and automating key summaries.",
    tags: ["Node.js", "Express", "AI/LLM API", "MongoDB"],
    link: "https://github.com/asralov/csc337-final-project",
  },
  {
    id: 5,
    image: "/trie.jpg",
    title: "Trie Data Structure Engine",
    category: "algo",
    description: "Java implementation of a Trie for prefix searches.",
    tags: ["Java", "Data Structures", "OOP"],
    link: "https://github.com/asralov/CSC-345-Group-Project",
  },
  {
    id: 6,
    image: "/word_search.png",
    title: "Interactive Word Search Engine",
    category: "game",
    description:
      "Python word-search game with a Pygame interface, Trie-based word lookup, hints, and saved games.",
    tags: ["Python", "Pygame", "Trie", "DFS"],
    link: "https://github.com/asralov/wordSearchGame",
    download: {
      url: "https://github.com/asralov/my_page/releases/download/v1.0.0/Game.exe",
      label: "Download for Windows (.exe)",
    },
  },
  {
    id: 7,
    image: "/bud_bloom.png",
    title: "From Bud To Bloom",
    category: "game",
    description:
      "Unity environmental simulation game featuring custom shader effects and physical interaction mechanics.",
    tags: ["Unity", "C#", "Shaders"],
    link: "https://pulyau.itch.io/from-bud-to-bloom",
  },
  {
    id: 8,
    image: "/fishing.png",
    title: "Fishing Simulator 2D",
    category: "game",
    description:
      "Physics-driven ocean exploration title with responsive custom player controllers and collision systems.",
    tags: ["Unity", "C#", "2D Physics"],
    link: "https://pulyau.itch.io/fishing-simulator-2d",
  },
  {
    id: 9,
    image: "/before_flush.png",
    title: "Before The Flush",
    category: "game",
    description:
      "Arcade-style 3D runner built around time-critical obstacle generation and dynamic speed escalations.",
    tags: ["Unity", "3D Graphics", "C#"],
    link: "https://asralov.itch.io/before-the-flush",
  },
  {
    id: 10,
    image: "/lh.png",
    title: "The Last Hero",
    category: "game",
    description:
      "2D boss encounter game inspired by classic synthwave tracks, featuring custom state-machine boss AI.",
    tags: ["Unity", "State Machine AI", "C#"],
    link: "https://pulyau.itch.io/the-last-hero",
  },
  {
    id: 11,
    image: "/checkers.png",
    title: "Checkers Engine & Graphical UI",
    category: "web",
    description:
      "Full Checkers desktop application featuring standard rule engine validation and automated AI minimax opponent.",
    tags: ["Java", "Swing/GUI", "Minimax AI"],
    link: "https://github.com/asralov/CS335-Final-Project",
  },
];
