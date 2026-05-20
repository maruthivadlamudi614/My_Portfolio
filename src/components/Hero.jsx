import React from 'react'
import {
  Database,
  Cpu,
  LineChart,
  Bot
} from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#f5f5f5] min-h-screen text-center px-6 pt-40"
    >

      {/* NAME */}

      <h1 className="text-7xl md:text-8xl font-bold text-blue-500 mb-8">
        Maruthi Vadlamudi
      </h1>

      {/* TITLE */}

      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight max-w-6xl mx-auto mb-8">
        Data Scientist | Analytics & ML Engineer |
        <br />
        Generative AI & Predictive Modeling
      </h2>

      {/* DESCRIPTION */}

      <p className="text-gray-600 text-2xl max-w-4xl mx-auto mb-12">
        I build end-to-end AI systems,
        from pipelines to models to production apps.
      </p>

      {/* BUTTON */}

      <a href="#contact">
        <button className="bg-blue-500 hover:bg-blue-600 transition px-10 py-4 rounded-full text-white text-xl font-semibold mb-24">
          Get in Touch
        </button>
      </a>

      {/* CARDS SECTION */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">

        {/* CARD 1 */}

        <div className="bg-[#f0f0f5] rounded-3xl p-10 text-center">

          <Database className="mx-auto text-red-400 mb-6" size={48} />

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Collect
          </h2>

          <p className="text-gray-600 text-xl leading-10">
            I acquire and integrate data from APIs,
            cloud platforms, and databases using Python,
            SQL, and automated ETL pipelines.
          </p>

        </div>

        {/* CARD 2 */}

        <div className="bg-[#f0f0f5] rounded-3xl p-10 text-center">

          <Cpu className="mx-auto text-red-400 mb-6" size={48} />

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transform & Analyze
          </h2>

          <p className="text-gray-600 text-xl leading-10">
            I clean, model, and analyze data using
            Pandas, SQL, and BI tools.
          </p>

        </div>

        {/* CARD 3 */}

        <div className="bg-[#f0f0f5] rounded-3xl p-10 text-center">

          <LineChart className="mx-auto text-red-400 mb-6" size={48} />

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Predict & Deploy
          </h2>

          <p className="text-gray-600 text-xl leading-10">
            I develop machine learning and deep learning
            models using PyTorch and Scikit-learn.
          </p>

        </div>

        {/* CARD 4 */}

        <div className="bg-[#f0f0f5] rounded-3xl p-10 text-center">

          <Bot className="mx-auto text-red-400 mb-6" size={48} />

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI & LLM Systems
          </h2>

          <p className="text-gray-600 text-xl leading-10">
            I build AI applications using LLMs,
            RAG pipelines, embeddings, and LangChain.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Hero