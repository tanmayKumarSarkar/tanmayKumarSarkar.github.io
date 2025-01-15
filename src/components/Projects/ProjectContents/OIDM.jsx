import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const OIDM = ({ project }) => {
  return (
    <div>
      <div className="OIDM-wrapper project-wrapper">
        <div>
          <h2 className="uppercase">OVERVIEW</h2>
          <p className="text-left text-sm mt-2">
            The Oracle Industry Data Model (OIDM) is a comprehensive, pre-built
            data model designed to provide a foundational framework for various
            industries, including retail, healthcare, financial services, and
            more. It accelerates the deployment of data warehousing and business
            intelligence solutions, enabling organizations to gain valuable
            insights and drive decision-making processes efficiently.
          </p>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Dashboard.png`}
              alt="Dashboard"
            />
          </div>

          <h2 className="my-4 uppercase">Key Features</h2>

          <ul className="text-left text-sm">
            <li>
              <strong>Comprehensive Industry Coverage</strong>: OIDM offers
              tailored data models for various industries, business processes
              and data requirements across multiple industries including retail,
              healthcare, financial services, and more.
            </li>

            <li>
              <strong>Integration</strong>: Seamlessly integrates with Oracle's
              suite of tools, including Oracle Analytics Cloud (OAC), Oracle
              Autonomous Data Warehouse (ADW), and Oracle Data Integrator (ODI).
            </li>

            <li>
              <strong>Pre-Built Schemas</strong>: Accelerate your data
              warehousing and analytics projects with industry-specific,
              pre-built schemas that reduce the time and effort required for
              data modeling.
            </li>

            <li>
              <strong>Flexibility and Scalability</strong>: Easily customizable
              to fit the unique business needs of different organizations and
              scalable to accommodate growing data volumes.
            </li>

            <li>
              <strong>Incorporates Best Practices</strong>: Built on industry
              best practices and standards, ensuring reliable and accurate data
              representation.
            </li>

            <li>
              <strong>Faster Time to Value</strong>: Reduces development time
              and accelerates the deployment of data models, delivering quicker
              insights.
            </li>

            <li>
              <strong>Cost Efficiency</strong>: Lowers development and
              maintenance costs with pre-built components and proven
              methodologies.
            </li>

            <li>
              <strong>Enhanced Data Quality</strong>: Ensures consistent,
              high-quality data representation across your organization.
            </li>

            <li>
              <strong>Advanced Analytics</strong>: Provides a strong foundation
              for advanced analytics, helping uncover valuable business
              insights.
            </li>

            <li>
              <strong>Regulatory Compliance</strong>: Supports adherence to
              industry regulations and standards, providing peace of mind.
            </li>
          </ul>

          <h2 className="mt-8 uppercase">Few Data Models</h2>

          <h3 className="mt-4 capitalize">OADM</h3>

          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Flight Tickets.png`}
              alt="Flight Tickets"
            />
          </div>
          <p className="text-left text-sm mt-2">
            Oracle Airlines Data Model provides a comprehensive pre-built data
            model designed specifically for the airline industry, enhancing data
            management, reporting, and analytics capabilities for better
            operational insights.
          </p>
          <h3 className="mt-4 capitalize">OBDM</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Banking Analytics.jpg`}
              alt="Banking Analytics"
            />
          </div>
          <p className="text-left text-sm mt-2">
            Oracle Banking Data Model is a comprehensive, pre-built data model
            designed specifically for the banking industry. It provides a robust
            framework for managing and analyzing data related to various banking
            operations, including retail, commercial, and investment banking
          </p>
          <h3 className="mt-4 capitalize">OCDM</h3>
          <p className="text-left text-sm mt-2">
            Oracle Communications Data Model offers a pre-built data warehouse
            solution designed to support telecommunications companies with
            comprehensive analytics and reporting tools.
          </p>
          <h3 className="mt-4 capitalize">OHDM</h3>
          <p className="text-left text-sm mt-2">
            Oracle Healthcare Data Model delivers a pre-built data warehouse
            framework for healthcare providers, facilitating detailed analytics,
            regulatory compliance, and operational efficiency.
          </p>
          <h3 className="mt-4 capitalize">OHTDM</h3>
          <p className="text-left text-sm mt-2">
            Oracle High-Tech Data Model provides a specialized data model for
            the high-tech industry, enabling better insights into operations,
            customer behavior, and overall performance.
          </p>
          <h3 className="mt-4 capitalize">ORDM</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/ORDM Dashboard.jpg`}
              alt="ORDM Dashboard"
            />
          </div>
          <p className="text-left text-sm mt-2">
            Oracle Retail Data Model provides a robust pre-built data model for
            retail businesses, supporting enhanced decision-making, inventory
            management, and customer insights.
          </p>
          <h3 className="mt-4 capitalize">OUDM</h3>
          <p className="text-left text-sm mt-2">
            Oracle Utilities Data Model delivers a comprehensive data framework
            for utility companies, supporting advanced analytics, regulatory
            reporting, and operational improvements.
          </p>
          <h3 className="mt-4 capitalize">NetSuite</h3>
          <p className="text-left text-sm mt-2">
            NetSuite is a leading integrated cloud business software suite,
            offering ERP, CRM, and e-commerce capabilities, designed to
            streamline business operations and improve overall efficiency.
          </p>
        </div>
        <div>
          <h2 className="my-4 uppercase">Benefits</h2>
          <ul className="text-left text-sm">
            <li>
              <strong>Faster Implementation</strong>: Significantly reduces the
              time required to develop and deploy data models, accelerating time
              to value.
            </li>

            <li>
              <strong>Cost Efficiency</strong>: Lowers development and
              maintenance costs by leveraging pre-built components and best
              practices.
            </li>

            <li>
              <strong>Improved Data Quality</strong>: Ensures high-quality,
              consistent data representation across the organization.
            </li>

            <li>
              <strong>Enhanced Insights</strong>: Provides a solid foundation
              for advanced analytics, helping organizations uncover valuable
              insights and drive business growth.
            </li>

            <li>
              <strong>Regulatory Compliance</strong>: Helps organizations comply
              with industry regulations and standards by providing a robust data
              framework.
            </li>
          </ul>

          <h2 className="mt-4 uppercase">Architecture</h2>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Architecture.jpg`}
              alt="Architecture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OIDM;
