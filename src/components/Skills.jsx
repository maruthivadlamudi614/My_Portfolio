import React, { useState } from 'react'

const technicalSkills = [

  {
    title: 'Data & Analytics',

    description:
      'SQL, Python (Pandas, NumPy, Matplotlib, Seaborn), Power BI, Tableau, Excel, Exploratory Data Analysis (EDA), A/B Testing, Hypothesis Testing, Data Cleaning, Feature Engineering, KPI Development, Statistical Analysis',
  },

  {
    title: 'Machine Learning & Deep Learning',

    description:
      'PyTorch, Scikit-learn, XGBoost, Random Forest, CNNs, Transfer Learning (ResNet, MobileNet), Computer Vision, Model Evaluation, Hyperparameter Tuning, Classification & Regression Models',
  },

  {
    title: 'AI & LLM Systems',

    description:
      'LangChain, RAG Pipelines, Embeddings, Vector Databases (FAISS, Chroma), OpenAI APIs, Prompt Engineering, Multi-Agent Systems, Retrieval Augmentation, Chatbot Workflows',
  },

  {
    title: 'Cloud & Deployment',

    description:
      'Streamlit, FastAPI, GitHub Actions, REST APIs, CI/CD Concepts, Containerization Basics, Model Deployment, Reproducibility',
  },

  {
    title: 'Business & Product Analytics',

    description:
      'Dashboard Design, Product Usage Tracking, Funnel Analysis, User Segmentation, Experimentation (A/B), Insight Generation, Stakeholder Reporting',
  },

  {
    title: 'Collaboration & Tools',

    description:
      'Git, GitHub, Jira, Agile/Scrum, Slack, Notion, Confluence, Documentation, Team Collaboration, Version Control',
  },

]

const moreSkills = [

  {
    title: 'Problem Solver',

    description:
      'I enjoy solving real-world problems using analytical thinking, machine learning, and AI-driven approaches.',
  },

  {
    title: 'Fast Learner',

    description:
      'I quickly adapt to new technologies, frameworks, and tools while continuously improving my technical skills.',
  },

  {
    title: 'Team Collaborator',

    description:
      'I work effectively in collaborative environments, communicating clearly and contributing toward shared goals.',
  },

  {
    title: 'Analytical Thinker',

    description:
      'I approach challenges with structured reasoning, data-driven analysis, and a focus on measurable outcomes.',
  },

  {
    title: 'AI Innovation Enthusiast',

    description:
      'I actively explore Generative AI, LLMs, RAG pipelines, and intelligent systems to build impactful applications.',
  },

  {
    title: 'Goal-Oriented',

    description:
      'I stay focused on achieving results through consistency, adaptability, and continuous learning.',
  },

]

const Skills = () => {

  const [activeTab, setActiveTab] = useState('skills')

  return (

    <section
      id="skills"
      className="bg-[#f5f5f5] py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <div className="text-center mb-20">

          <div className="flex justify-center items-center gap-10 mb-6">

            <button
              onClick={() => setActiveTab('skills')}
              className={`text-5xl font-bold border-b-4 pb-2 transition duration-300 ${
                activeTab === 'skills'
                  ? 'text-gray-900 border-red-500'
                  : 'text-gray-500 border-transparent'
              }`}
            >
              Skills
            </button>

            <button
              onClick={() => setActiveTab('more')}
              className={`text-5xl font-bold border-b-4 pb-2 transition duration-300 ${
                activeTab === 'more'
                  ? 'text-gray-900 border-red-500'
                  : 'text-gray-500 border-transparent'
              }`}
            >
              More
            </button>

          </div>

          <p className="text-gray-600 text-2xl">
            {activeTab === 'skills'
              ? "Things I'm good at"
              : 'What I Bring to the Table'}
          </p>

        </div>

        {/* GRID */}

        <div className="grid md:grid-cols-3 gap-10">

          {(activeTab === 'skills'
            ? technicalSkills
            : moreSkills
          ).map((skill, index) => (

            <div
              key={index}
              className="bg-white rounded-[25px] border border-gray-200 p-10 hover:shadow-xl transition duration-300"
            >

              <h3 className="text-3xl font-bold text-blue-600 mb-6">
                {skill.title}
              </h3>

              <p className="text-gray-700 leading-10 text-xl">
                {skill.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Skills