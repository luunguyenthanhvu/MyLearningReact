import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

// Generate info for user
const myInfo = {
  name: "Vu Luu",
  description: "Full-stack web developer. I'm not the best but i'll try my best. Also a wibu 🐧."
}

// My skill list
const skillList = [
  {
    name: "Java",
    icon: "💪",
    color: 'red'
  },
  {
    name: "HTML-CSS",
    icon: "👉👈",
    color: 'blue'
  },
  {
    name: "React",
    icon: "🫵",
    color: 'orange'
  },
  {
    name: "Java Scripts",
    icon: "👉👈",
    color: 'yellow'
  }, 
  {
    name: "Spring boot",
    icon: "💪",
    color: 'purple'
  },
  {
    name: "Wibu",
    icon: "🐧",
    color: 'pink'
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
      <img className="avatar" src='sad-girl.jpg' alt="Vu Luu Full-stack web dev" ></img>
  );
}

function Intro() {
  return (
    <div>
      <h1>{myInfo.name}</h1>
      <p>{myInfo.description}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skillList.map((skill, index) => (
        <Skill 
          key={index}
          name={skill.name}
          icon={skill.icon}
          color={skill.color}
        />
      ))}
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{background:props.color}}>
      <span>{props.name}</span>
      <span>{props.icon}</span>
    </div>
  );

}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
