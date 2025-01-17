import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const CWP = ({ project }) => {
  return (
    <div>
      <div className="CWP-wrapper project-wrapper">
        <div>
          <h2 className="uppercase">
            Transforming Telecom Operations with Near Real-Time Analytics
          </h2>
          <h3 className="mt-4 capitalize">Objective</h3>
          <p className="text-left text-sm mt-2">
            To leverage near real-time analytics in the telecommunications
            domain to enhance network performance, product management, revenue
            generation, customer experience, provisioning and activation
            processes, cost management, marketing effectiveness, and partner
            management
          </p>
          <h3 className="mt-4 capitalize">Challenges and Approach</h3>

          <ul className="text-left text-sm mt-2">
            <li>Monitoring Usage Behavior:</li>
            <p className="text-sm font-extralight">
              Understand usage patterns by customer or customer segment to
              tailor services and offers, leading to targeted marketing and
              improved customer satisfaction.
            </p>
            <li>Dropped Call Rates:</li>
            <p className="text-sm font-extralight">
              Analyze call drop and failure rates across regions and network
              elements to improve network performance and reduce call drops.
            </p>
            <li>Revenue and Profitability:</li>
            <p className="text-sm font-extralight">
              Identify top customers by revenue, profitability, and usage to
              optimize product offerings and increase revenue.
            </p>
            <li>Average Revenue and Margin Per User:</li>
            <p className="text-sm font-extralight">
              Calculate ARPU and AMPU to gain insights into customer
              profitability and financial health.
            </p>
            <li>Order Fallout:</li>
            <p className="text-sm font-extralight">
              Monitor order fallout percentage and identify main causes to
              improve provisioning processes and reduce fallout rates.
            </p>
            <li>Refunds and Adjustments:</li>
            <p className="text-sm font-extralight">
              Track agents making the most refunds and customers with multiple
              refunds to enhance customer service and reduce refund rates.
            </p>
            <li>Campaign Performance:</li>
            <p className="text-sm font-extralight">
              Evaluate the impact of marketing campaigns on revenue and their
              current performance to optimize marketing strategies and improve
              campaign effectiveness.
            </p>
            <li>Roaming and Interconnection:</li>
            <p className="text-sm font-extralight">
              Align roaming and interconnection income with interconnection
              costs to ensure profitability and cost management.
            </p>
          </ul>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Dashboard.png`}
              alt="Dashboard"
            />
          </div>
          <h3 className="mt-4 capitalize">Solution</h3>
          <p className="text-left text-sm">
            Implementing a comprehensive near real-time analytics solution using
            a Lambda Architecture to handle the massive volume of data generated
            in the telecom industry efficiently.
          </p>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/CDR Call Analytics.jpg`}
              alt="CDR Call Analytics"
            />
          </div>
          <h3 className="mt-4 capitalize">Results</h3>
          <p className="text-left text-sm">
            By implementing these near real-time analytics strategies, the
            telecom operator achieved significant improvements in operational
            efficiency, customer experience, and financial performance. The
            insights gained from the analytics enabled proactive
            decision-making, optimized network operations, and enhanced
            marketing effectiveness.
          </p>
          <p className="text-left text-sm">
            This use case demonstrates the transformative power of near
            real-time analytics in the telecommunications industry, driving
            continuous improvement and operational excellence.
          </p>
        </div>
        <div>
          <h2 className="mt-4">Architecture</h2>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Architecture.png`}
              alt="Architecture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CWP;
