import React from 'react'

import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'

const projects = [

  {
    image: project1,

    title:
      'Netflix Customer Churn Prediction — Classification Models',

    description:
      'Developed a machine learning pipeline to predict customer churn using Logistic Regression, Random Forest, and XGBoost models. Performed EDA, preprocessing, feature engineering, and model evaluation to identify customer retention patterns.',

    link:
      'https://github.com/maruthivadlamudi/netflix-churn-prediction',
  },

  {
    image: project2,

    title:
      'Credit Card Fraud Detection — Imbalanced Classification',

    description:
      'Built a fraud detection system using SMOTE oversampling and Random Forest classification to identify fraudulent transactions from highly imbalanced financial datasets with strong ROC-AUC performance.',

    link:
      'https://github.com/maruthivadlamudi/credit-card-fraud-detection',
  },

  {
    image: project3,

    title:
      'House Price Prediction — Regression Models',

    description:
      'Created an end-to-end regression pipeline using Linear Regression, Ridge, Lasso, and Random Forest models for predicting house prices using feature engineering and exploratory data analysis.',

    link:
      'https://github.com/maruthivadlamudi/house-price-prediction',
  },

  {
    image: project4,

    title:
      'Loan Default Prediction — Deep Learning Models',

    description:
      'Built a deep learning model using TensorFlow and Keras to predict loan defaults. Implemented preprocessing pipelines, feature scaling, model tuning, and performance evaluation techniques.',

    link:
      'https://github.com/maruthivadlamudi/loan-default-prediction',
  },

  {
    image: project5,

    title:
      'Customer Segmentation — K-Means Clustering',

    description:
      'Performed unsupervised learning and customer segmentation using K-Means clustering to analyze customer purchasing behavior and generate business insights from retail datasets.',

    link:
      'https://github.com/maruthivadlamudi/customer-segmentation',
  },

  {
    image: project6,

    title:
      'IMDb Sentiment Analysis — NLP Streamlit Application',

    description:
      'Developed an NLP sentiment analysis application using TF-IDF vectorization, Logistic Regression, and Streamlit deployment for classifying IMDb movie reviews into positive and negative sentiments.',

    link:
      'https://github.com/maruthivadlamudi/imdb-sentiment-analysis',
  },

]

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#f5f5f5] py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-orange-500 mb-6">
            Portfolio
          </h2>

          <p className="text-gray-600 text-2xl">
            A sample of my work
          </p>

        </div>

        {/* PROJECT GRID */}

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white rounded-[25px] border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300"
            >

              {/* IMAGE */}

              <img
                src={project.image}
                alt="project"
                className="w-full h-[220px] object-cover"
              />

              {/* CONTENT */}

              <div className="p-8">

                <h3 className="text-3xl font-bold leading-tight text-gray-900 mb-6">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-9 text-lg mb-8">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 font-bold text-xl hover:underline"
                >
                  View project →
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects