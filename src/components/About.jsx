import React from "react";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="py-24 bg-[#f5f5f5]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 overflow-hidden rounded-[30px]">

          {/* LEFT IMAGE */}

          <div className="w-full h-full bg-[#7d98ee] flex items-center justify-center">

            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />

          </div>

          {/* RIGHT CONTENT */}

          <div className="bg-[#7d98ee] text-white p-16">

            <h1 className="text-6xl font-bold mb-12">
              About me
            </h1>

            <div className="space-y-10 text-2xl leading-[55px]">

              <p>
                I’m Maruthi, a data and AI professional with a Master’s
                in Computer Science and a strong foundation in analytics
                and machine learning. I work across the full data
                lifecycle: collecting data, transforming it into clean
                and reliable datasets, analyzing trends, and building
                predictive models that support real business decisions.
              </p>

              <p>
                I have experience creating dashboards for decision-makers,
                automating analysis workflows, and training machine learning
                and deep learning models for classification, forecasting,
                and computer vision.
              </p>

              <p>
                I also build modern AI applications using LLMs, RAG
                pipelines, embeddings, and multi-agent systems to bring
                intelligence and automation into workflows.
              </p>

              <p>
                I’m currently seeking a full-time role in Data Science,
                Machine Learning Engineering, or Data Analytics where I
                can apply both analytical thinking and AI-driven methods
                to deliver measurable impact.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;