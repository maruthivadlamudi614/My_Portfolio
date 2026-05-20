import React from "react";

import netflix from "../assets/netflix.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import loan from "../assets/loan.jpg";
import houseprice from "../assets/house.jpg";
import walmart from "../assets/walmart.jpg";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">

      <div className="portfolio-header">
        <h1 className="section-title">
          Portfolio
        </h1>

        <p className="section-subtitle">
          A sample of my work
        </p>
      </div>

      <div className="portfolio-container">

        {/* Netflix */}
        <a
          href="https://github.com/maruthivadlamudi614/netflix-churn-analysis"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <img src={netflix} alt="Netflix" />

          <div className="portfolio-content">

            <h3>
              Netflix Customer Churn Prediction
            </h3>

            <p>
              Developed a churn prediction pipeline using machine learning
              classification models and customer behavior analysis.
            </p>

            <span className="view-project">
              View project →
            </span>

          </div>
        </a>

        {/* Ecommerce */}
        <a
          href="https://github.com/maruthivadlamudi614/ecommerce-sales-analysis"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <img src={ecommerce} alt="Ecommerce" />

          <div className="portfolio-content">

            <h3>
              Ecommerce Sales Analysis
            </h3>

            <p>
              Analyzed ecommerce sales trends, customer purchasing behavior,
              and revenue insights using Python and visualization tools.
            </p>

            <span className="view-project">
              View project →
            </span>

          </div>
        </a>

        {/* Loan */}
        <a
          href="https://github.com/maruthivadlamudi614/loan-analysis"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <img src={loan} alt="Loan" />

          <div className="portfolio-content">

            <h3>
              Loan Approval Analysis
            </h3>

            <p>
              Explored applicant data to identify approval patterns,
              financial risk indicators, and customer demographic insights.
            </p>

            <span className="view-project">
              View project →
            </span>

          </div>
        </a>

        {/* House Price */}
        <a
          href="https://github.com/maruthivadlamudi614/house-price-project"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <img src={houseprice} alt="House Price" />

          <div className="portfolio-content">

            <h3>
              House Price Prediction
            </h3>

            <p>
              Built regression models to predict housing prices using
              feature engineering and exploratory data analysis techniques.
            </p>

            <span className="view-project">
              View project →
            </span>

          </div>
        </a>

        {/* Walmart */}
        <a
          href="https://github.com/maruthivadlamudi614/walmart-sales-analysis"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card"
        >
          <img src={walmart} alt="Walmart" />

          <div className="portfolio-content">

            <h3>
              Walmart Sales Analysis
            </h3>

            <p>
              Performed retail sales analysis to uncover revenue trends,
              customer purchasing behavior, and business performance insights.
            </p>

            <span className="view-project">
              View project →
            </span>

          </div>
        </a>

      </div>

    </section>
  );
}

export default Portfolio;