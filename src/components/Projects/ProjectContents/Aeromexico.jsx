import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Aeromexico = ({ project }) => {
  return (
    <div>
      <div className="Aeromexico-wrapper project-wrapper">
        <div>
          <h2 className="uppercase">Key Analytics</h2>
          <h3 className="mt-4 capitalize">RFMP Analytics</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/RFMP Analytics.jpg`}
              alt="RFMP Analytics"
            />
          </div>
          <p className="text-left text-sm mt-2">
            This report includes Recency Frequency Monitor Tracking information,
            segmenting group-wise customer counts along with the RFMP
            percentage. It categorizes which RFMP bucket each passenger falls
            into.
          </p>
          <h3 className="mt-4 capitalize">Baggage Analytics</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Baggage Tracking.png`}
              alt="Baggage Tracking"
            />
          </div>
          <p className="text-left text-sm mt-2">
            This report provides real-time baggage tracking specific to a
            passenger, along with baggage flow information based on the origin
            and destination points.
          </p>
          <h3 className="mt-4 capitalize">Baggage Transfer Delay</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Baggage Transfer Delay.png`}
              alt="Baggage Transfer Delay"
            />
          </div>
          <p className="text-left text-sm mt-2">
            This report tracks and analyzes delays in baggage transfers, helping
            identify bottlenecks and improve operational efficiency.
          </p>
          <h3 className="mt-4 capitalize">Baggage Weight Analytics</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Baggage Weight Change.png`}
              alt="Baggage Weight Change"
            />
          </div>
          <p className="text-left text-sm mt-2">
            This report monitors changes in baggage weight, providing insights
            into weight management and potential discrepancies.
          </p>

          <h3 className="mt-4 capitalize">Customer Loyalty Analytics</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Customer Loyalty Analytics.jpg`}
              alt="Customer Loyalty Analytics"
            />
          </div>
          <p className="text-left text-sm mt-2">
            This report highlights customer loyalty metrics, focusing on the
            life time value of Frequent Flyer segment. It provides insights into
            points accumulation, redemption patterns, and loyalty status
            distribution across different geographical regions and customer
            segments.
          </p>
          <h3 className="mt-4 capitalize">
            Customer Life Time Value Analytics
          </h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Customer Life Time Value Analytics.jpg`}
              alt="Customer Life Time Value Analytics.jpg"
            />
          </div>
          <p className="text-left text-sm mt-2">
            This report contains detailed information about the lifetime value
            of customers. It provides insights into how much revenue a customer
            is expected to generate over their entire relationship with the
            airline, segmented by factors such as loyalty status, geographical
            region, and frequency of travel.
          </p>
          <h3 className="mt-4 capitalize">Customer Churn Analytics</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Customer Churn Analytics.jpg`}
              alt="Customer Churn Analytics.jpg"
            />
          </div>
          <p className="text-left text-sm mt-2">
            This report contains information about customer count versus churn
            count, with trend analysis segmentation.
          </p>
          <h3 className="mt-4 capitalize">Customer 360 Analytics</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Customer 360 Analytics.jpg`}
              alt="Customer 360 Analytics.jpg"
            />
          </div>
          <p className="text-left text-sm mt-2">
            This report offers comprehensive demographic information about
            customers, including flight count, revenue impact, and age
            segmentation.
          </p>
          <h3 className="mt-4 capitalize">Flight Tickets Analytics</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Flight Tickets.png`}
              alt="Flight Tickets.jpg"
            />
          </div>
          <p className="text-left text-sm mt-2">
            This report contains information about issued flight tickets,
            including passenger details, flight schedules, and booking status.
          </p>
          <h3 className="mt-4 capitalize">Last Week Tickets Analytics</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/Last Week Tickets.png`}
              alt="Last Week Tickets.jpg"
            />
          </div>
          <p className="text-left text-sm mt-2">
            Provides a summary of flight tickets issued in the last week,
            highlighting trends and booking patterns.
          </p>

          <p className="mt-4">
            This comprehensive implementation leverages OADM to enhance
            Aero-Mexico's operational efficiency, customer experience, and
            data-driven decision-making through advanced analytics and real-time
            monitoring.
          </p>

          <h3 className="mt-4 capitalize">
            Development for Real-Time Collection, Monitoring, and Analytics
          </h3>

          <ul className="text-left text-sm mt-4">
            <li>
              <strong>Real-Time Data Collection</strong>: Collecting real-time
              data from RFID baggage tracking systems.
            </li>
            <li>
              <strong>Baggage Tracking</strong>: Effectively tracking the
              location and status of customer baggage.
            </li>
            <li>
              <strong>Data Analytics</strong>: Performing real-time and
              historical baggage data analytics.
            </li>
            <li>
              <strong>Customer Updates</strong>: Providing real-time updates via
              push notifications, SMS, or email to customers.
            </li>
          </ul>
          <h3 className="mt-4 capitalize">Technology Stack</h3>
          <ul className="text-left text-sm">
            <li>Kafka</li>
            <li>Oracle NoSQL</li>
            <li>Hive</li>
            <li>Oracle DB</li>
            <li>Oracle Analytical Cloud BI</li>
          </ul>
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

export default Aeromexico;
