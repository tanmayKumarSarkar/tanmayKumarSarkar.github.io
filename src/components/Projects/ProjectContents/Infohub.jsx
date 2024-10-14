import React from "react";

const Infohub = ({ project }) => {
  return (
    <div>
      <div className="Infohub-wrapper project-wrapper">
        <div>
          <h2 className="mt-2 mb-4">COI Sustainability App Overview</h2>
          <p className="text-left text-sm">
            The COI Sustainability App, developed by COI Energy, is a
            comprehensive digital energy management platform designed to
            optimize energy use and reduce waste in buildings. Here are some key
            features:
          </p>
        </div>

        <div>
          <h2 className="mt-8">Key Features</h2>
          <h3 className="mt-4">Real-Time Insights and Control</h3>
          <ul>
            <li>
              Actionable Insights: Transforms energy data into actionable
              insights.
            </li>
            <li>Alerts: Provides alerts to optimize energy resources.</li>
            <li>
              Control: Allows direct control of energy resources via the mobile
              app.
            </li>
          </ul>

          <h3 className="mt-4">Carbon Management</h3>
          <ul>
            <li>
              Tracking: Tracks and manages the carbon impact of energy
              efficiency measures.
            </li>
            <li>
              Compliance: Helps meet sustainability goals and comply with
              mandated emissions targets.
            </li>
            System Integration
            <li>Compatibility: Works with existing infrastructure.</li>
            <li>
              Efficiency: Provides turn-key integration with most systems to
              maximize operational efficiency.
            </li>
          </ul>

          <h3 className="mt-4">Custom Reports</h3>
          <ul>
            <li>
              Reporting: Easily share reports on cost savings, energy
              performance, and emissions.
            </li>
            <li>
              Regulations: Helps meet carbon regulations and sustainability
              goals.
            </li>
            <li>Safety and Resilience</li>
            <li>Performance Data: Provides granular asset performance data.</li>
            <li>
              Notifications: Early notifications of potential electric grid
              emergencies.
            </li>
          </ul>

          <h3 className="mt-4">Community Impact</h3>
          <ul>
            <li>
              KW for Good: Earn tax credits for investing in the community.
            </li>
            <li>
              Support: Partners with utilities, NGOs, and public housing
              authorities to support those in need.
            </li>
            These features make the COI Sustainability App a powerful tool for
            businesses looking to enhance their energy efficiency and
            sustainability efforts.
          </ul>
        </div>

        <div>
          <h2 className="mt-4">PRODUCT DELEVERABLES</h2>
          <h3 className="my-2">Request for Information (RFI)</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[70%] md:w-[50%] shadow-filter"
              src={`/assets/Projects/${project.Project}/InfoHub new rfi portal.png`}
              alt="InfoHub new rfi portal"
            />
          </div>
          <ul>
            <li>User request for information via the RFI request portal</li>
            <li>Request is visible in the RFI approval CRM Portal</li>
          </ul>
          <h3 className="my-2">Sub-RFI Creation </h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[70%] md:w-[50%] shadow-filter"
              src={`/assets/Projects/${project.Project}/InfoHub sub rfis approved.png`}
              alt="InfoHub sub rfis approved"
            />
          </div>
          <ul>
            <li>
              Sub-requests are then created from them based on the selected data
              types
            </li>
          </ul>
          <h3 className="my-2">Sub-RFI Approval</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[70%] md:w-[50%] shadow-filter"
              src={`/assets/Projects/${project.Project}/InfoHub Sub rfi approval.png`}
              alt="InfoHub Sub rfi approval"
            />
          </div>
          <ul>
            <li>Each of the Sub-RFI gets manually verified and approved</li>
            <li>
              Approval process is dynamic consist of few stages based on users
              input
            </li>
          </ul>
          <h3 className="my-2">RFI Comments</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[70%] md:w-[50%] shadow-filter"
              src={`/assets/Projects/${project.Project}/InfoHub rfi approval comments.png`}
              alt="InfoHub rfi approval comments"
            />
          </div>
          <ul>
            <li>Comments are mandatory for the approval/ Denial process</li>
            <li>
              Approval/ Denial Comments & User are loged for every actions
            </li>
          </ul>
          <h3 className="my-2">RFI Closure</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[70%] md:w-[50%] shadow-filter"
              src={`/assets/Projects/${project.Project}/InfoHub rfi approval.png`}
              alt="InfoHub rfi approval"
            />
          </div>
          <ul>
            <li>
              Once all of the Sub-RFIs closes the RFI also get automatically
              closes
            </li>
            <li>Datasets are shared for the Sub-RFIs which are approved</li>
          </ul>

          <h3 className="my-2">CSV Reporting</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[70%] md:w-[50%] shadow-filter"
              src={`/assets/Projects/${project.Project}/InfoHub rfi created.png`}
              alt="InfoHub rfi created"
            />
          </div>
          <ul>
            <li>
              CSV files are generated and sent over email and also attached in
              the portal based on the input parameters
            </li>
          </ul>

          <h3 className="my-2">Power BI Reporting</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[70%] md:w-[50%] shadow-filter"
              src={`/assets/Projects/${project.Project}/InfoHub Utilities.png`}
              alt="InfoHub Utilities"
            />
          </div>
          <ul>
            <li>Reporting are done via Power BI dashboard</li>
          </ul>
        </div>

        <div>
          <h2 className="mt-4">Architecture</h2>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%] shadow-filter"
              src={`/assets/Projects/${project.Project}/InfoHub Architecture.png`}
              alt="InfoHub Architecture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infohub;
