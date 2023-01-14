import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <div className="about">
      <h1>About This Project</h1>
      <p>This is a React app to leave feedback about a product or service</p>
      <p>Version: 1.0.0</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default AboutPage;
