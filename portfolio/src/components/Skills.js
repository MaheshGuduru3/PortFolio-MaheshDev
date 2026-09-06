
import {
  BrainCircuit,
  Bot,
  Database,
  Link2,
  Network,
  CloudCog,
  BotIcon,
} from "lucide-react";

const technologies = {
  frontend: [
    { name: 'React', icon: 'devicon-react-original colored', level: 'Advanced' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored', level: 'Advanced' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored', level: 'Advanced' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored', level: 'Strong' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain', level: 'Strong' },
    { name: 'HTML & CSS', icon: 'devicon-html5-plain colored', level: 'Comfortable' }
  ],
  backend: [
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored', level: 'Advanced' },
    { name: 'Express.js', icon: 'devicon-express-original', level: 'Strong' },
    { name: 'FastAPI', icon: 'devicon-fastapi-plain', level: 'Advanced' }
  ],
  tools: [
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', level: 'Advanced' },
    { name: 'Git', icon: 'devicon-git-plain colored', level: 'Strong' },
    { name: 'GitHub', icon: 'devicon-github-original', level: 'Strong' },
    { name: 'Docker', icon: 'devicon-docker-plain colored', level: 'Comfortable' },
    { name: 'Postman', icon: 'devicon-postman-plain colored', level: 'Comfortable' }
  ],
  ai: [
  { name: 'Generative AI', icon: BrainCircuit, level: 'Advanced' },
  { name: 'LLMs', icon: 'devicon-llm-plain colored', level: 'Advanced' },
  { name: 'RAG', icon: 'devicon-python-plain colored', level: 'Strong' },
  { name: 'LangChain', icon: 'devicon-langchain colored', level: 'Strong' },
  { name: 'LangGraph', icon: 'devicon-langgraph colored', level: 'Strong' },
  { name: 'LLM API Integration', icon: 'devicon-api-plain colored', level: 'Strong' }
]
};

const SkillCard = ({ technology }) => (
  
  <article className="skill-card">
    <div className="skill-card-top">
      <div className="skill-icon" aria-hidden="true">
        {/* <i className={technology.icon}></i>  */}
        <div>
            {
               technology.name === 'LLMs' || technology.name === 'Generative AI'|| technology.name === 'LLM API Integration' ||  technology.name === 'RAG' ||  technology.name === 'LangChain' ||  technology.name === 'LangGraph' ? <div>
                {
                   technology.name === 'Generative AI' &&  <BrainCircuit size={40} strokeWidth={1.8} />
                }
                 {
                   technology.name === 'LLMs' &&  <Bot size={40} strokeWidth={1.8} />
                }
                 {
                   technology.name === 'RAG' &&  <Database size={40} strokeWidth={1.8} />
                }
                 {
                   technology.name === 'LangChain' &&  <Link2 size={40} strokeWidth={1.8} />
                }
                 {
                   technology.name === 'LangGraph' &&  <Network size={40} strokeWidth={1.8} />
                }
                 {
                   technology.name === 'LLM API Integration' &&  <CloudCog size={40} strokeWidth={1.8} />
                }
              </div>
               :
               <div>
                <i className={technology.icon}></i> 
               </div>
            }
        </div>
      </div>
      <span className="skill-arrow" aria-hidden="true">→</span>
    </div>

    <div className="skill-name">{technology.name}</div>
    <span className={`skill-level skill-level--${technology.level.toLowerCase()}`}>
      {technology.level}
    </span>
  </article>
);

const SkillGroup = ({ icon, title, description, count, technologies: items }) => (
  <div className="skill-group">
    <div className="skill-group-header">
      <div className="skill-group-title-wrap">
        <div className="group-icon" aria-hidden="true">{icon}</div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <span className="skill-count">{count} Technologies</span>
    </div>

    <div className="skill-grid">
      {items.map((technology) => (
        <SkillCard technology={technology} key={technology.name} />
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section className="tech-section" id="skills" aria-labelledby="skills-title">
    <div className="skills-decoration skills-decoration--left" aria-hidden="true" />
    <div className="skills-decoration skills-decoration--right" aria-hidden="true" />

    <div className="page-wrap">
      <div className="skills-intro">
        <span className="skills-status">
          <span className="status-dot" />
          Currently building with these technologies
        </span>

        <h2 id="skills-title">
          My <span>Tech Stack</span>
        </h2>

        <p>
          Tools and technologies I use to build modern,
          scalable and user-friendly applications.
        </p>
      </div>

      <div className="skills-groups">
        <SkillGroup
          icon="▱"
          title="Frontend Development"
          description="Building beautiful and responsive user interfaces."
          count={technologies.frontend.length}
          technologies={technologies.frontend}
        />

        <SkillGroup
          icon="▤"
          title="Backend Development"
          description="Creating robust and scalable server-side solutions."
          count={technologies.backend.length}
          technologies={technologies.backend}
        />

        <SkillGroup
          icon="◉"
          title="Database & Tools"
          description="Managing data, version control and development workflows."
          count={technologies.tools.length}
          technologies={technologies.tools}
        />

        <SkillGroup 
          icon="✦" 
          title="AI / GenAI" 
          description="Building intelligent applications with generative AI, LLMs and AI-powered workflows." 
          count={technologies.ai.length} 
          technologies={technologies.ai} 
        />
      </div>
    </div>
  </section>
);

export default Skills;
