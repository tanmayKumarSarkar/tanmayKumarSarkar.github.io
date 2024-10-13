import React from "react";

const SmartWeld = () => {
  return (
    <div>
      <div className="smartweld-wrapper">
        <div>
          <h2>DELIVERABLES FOR IMPROVING OPERATIONAL EFFICIENCY</h2>
          <h3 className="mt-4">OVERAL EQUIPMENT EFFECTIVENRSS (OEE)</h3>
          <p className="text-left text-sm">
            PRODUCTIVITY: Measurement of actual production against Norms or
            target in real time with some attributable causes. Suitable
            Management action to track the CAUSE of short-fall (if any) and
            initiate immediate counter measure to improve machine output close
            to the targeted/benchmarked output.
          </p>
          <h3 className="mt-4">YIELD</h3>
          <p className="text-left text-sm">
            QUALITY: Checking Whether Output Parameters are within the Set Limit
            or not. This will enable shop floor to achieve target with respect
            to quality conformance. Management will be assured about shop
            process consistency. Same Data can be used to generate SQC
            parameters through Digitised QC system. User's Customers get
            guaranteed about product quality and can be an USP of the
            manufacturer.
          </p>
          <h3 className="mt-4">TOC(TOTAL OPERATIONAL COST)</h3>
          <p className="text-left text-sm">
            COST: Cost of operation can be drilled down to every level and can
            be used to minimise wastage. This will help the organisation to
            adhere to Lean KPIs for operation and ensure continual improvement
            in Cost optimization.
          </p>
          <h3 className="mt-4">DIGITAL PREDICTIVE MAINTENANCE/ALARM</h3>
          <p className="text-left text-sm">
            MACHINE HEALTH: In place of routine periodic maintenance and
            replacement of components, this system will enable Predictive
            maintenance of machines resulting in major saving in operational
            cost a t the same time ensure maximum uptime and prevention of
            unwarranted breakdown. Analytics based messaging regarding Wear
            Parts like Contact Tip, Liner replacements will ensure best of
            quality at optimum costs.
          </p>
          <h3 className="mt-4">ASSET TRACKING</h3>
          <p className="text-left text-sm">
            Enables tracking M/C fleet utilisation for capacity mobilisation
            also gives fair amount of information regarding machine regarding
            asset maintenance & upkeep.
          </p>
        </div>
        <div>
          <h2 className="my-4">KEY POINTS FOR DELIVERABLES</h2>
          <ul className="text-left text-sm">
            <li>
              Creates a Real Time Dashboard to facilitate LEAN implementation in
              operation to improve OPERATIONAL EFFICIENCY every hour by checking
              actual data with BENHCHMARK DATA and improve on the same.
            </li>

            <li>
              Ensure M/C uptime & minimize spares cost by Predictive
              maintenance.
            </li>
            <li>Provide Asset sanity by Plan-Do-Check-Act- CYCLE.</li>
            <li>
              Give real time alert for operator & supervisors to take action
              regarding improvement of Quality, Cost, Productivity,
            </li>
            <li>
              Quality incidence data will be used to monitor the jobs where
              rigorous post inspection will be needed.
            </li>
            <li>
              Variation in the Output data will lead to replacement of Wear
              Parts proactively.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mt-4">PRODUCT DELEVERABLES</h2>
          <h3 className="my-2">ANALYTICS</h3>
          <ul>
            <li>
              Help to De-constraint production based by addressing Man, Machine,
              Quality issues by identifying Generic faultiness in the system &
              addressing that.
            </li>
            <li>
              Identify Skill level of the welders & their usability in different
              working conditions & types of jobs.
            </li>
            <li>
              Identify different drivers which enhances M/C life deterioration.
            </li>
            <li>
              Screening of Vendors(of welding consumables) based on their
              performance data.
            </li>
          </ul>
          <h3 className="my-2">CEO LEVEL KPI</h3>
          <p>For the running Shift & Cumulative for the month</p>
          <p>
            For all the machines with drilling down provision to departments
          </p>
          <ul>
            <li>Productivity-KG Deposited /Hr (Target Vs Actual)</li>
            <li>Cost-INR/KG of Deposition (Target Vs Actual)</li>
            <li>No of Quality Breaches (Target=0 Vs Actual)</li>
            <li>No of Machines under breakdown</li>
          </ul>
          <h3 className="my-2">PLANT MANAGER LEVEL KPI</h3>
          <p>For the running Shift & Cumulative for the month</p>
          <p>
            For all the machines with drilling down provision to each work
            station
          </p>

          <ul>
            <li className="mt-2">
              Productivity-KG Deposited /Hr(Tgt Vs Actual) [Can drill down to
              check what caused]
              <ul>
                <li>a. Man Availability </li>
                <li>b. Machine Breakdown</li> <li>c. Material Shortage.</li>
              </ul>
            </li>
            <li className="mt-2">
              Cost-INR/KG of Deposition(Tgt Vs Actual) [Can drill down to check
              what caused]
              <ul>
                <li>a. More Power</li>
                <li>b. More Consumable</li> <li>c. More Gas .</li>
              </ul>
            </li>
            <li className="mt-2">
              Quality Breaches(Tgt=0 Vs Actual) [Can drill down to check what
              caused]
              <ul>
                <li>a. Which Work Station</li>
                <li>b. Which Operator</li> <li>c. Which Job</li>
              </ul>
            </li>
            <li>
              Predictive Maintenance-No of Machines showing maintenance Needs.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="my-4">Machine Availability</h2>
          <ul>
            <li>Machines utilization</li>

            <li>Machines performance analysis of particular model/brand</li>

            <li>
              Selection of machines of particular brand /model during future
              purchase.
            </li>

            <li>Maintenance efficiency</li>
          </ul>

          <h2 className="my-4">Productivity</h2>
          <ul>
            <li>
              Real time actual vs target and past data. Key information for
              taking proper timely management action. Help to benchmark against
              global standard to derive the targeted output.
            </li>
            <li>
              Gives the granularity to get to the root cause regarding
              <ul>
                <li>MAN-Welder output</li>
                <li>Machine-Type & Make of machines and outputs.</li>
                <li>
                  Material-Type of Consumables(source & make) ,source of input
                  Jobs.
                </li>
              </ul>
            </li>
            <li>
              Finding out the constraining point in the production Chain for
              taking necessary action
            </li>
          </ul>

          <h2 className="my-4">Quality</h2>
          <ul>
            <li>Measure Quality failures Machine wise ,Job Wise.</li>
            <li>
              Gives data backed confidence to Customer that all jobs have been
              done within the given WPS.
            </li>
            <li>
              Gives the granularity to get to the root cause regarding
              <ul>
                <li>MAN-Welder</li>
                <li>Machine-Type & Make</li>
                <li>
                  Material-Consumables & Jobs(Will be a critical input regarding
                  sourcing decisions).
                </li>
              </ul>
            </li>
            <li>
              Traceability of faults of a particular job.. .Can carry out data
              driven Inspection process to ensure zero{" "}
            </li>
            <li>Product failure analysis.</li>
            <li>
              Performance of each welder, make classifications, identify
              training needs ,and plan out suitable incentives & disincentives.
            </li>
            <li>
              Gives predictive alert to change Wear parts on time to prevent
              quality issues.
            </li>
          </ul>

          <h2 className="my-4">Cost</h2>
          <ul>
            <li>
              Actual weld cost /component, each stage .Always compare with the
              target to take real time counter measure to prevent any Month or
              Quarter end surprise in the P&L.
            </li>

            <li>
              Gives granularity of all cost data including use of wire, gas,
              electricity can be compared with benchmarked target cost and area
              of loss can be identified for taking proper countermeasure to keep
              all consumptions within set limit.
            </li>

            <li>
              Can compare machine model wise electricity cost and the data will
              be generated related to machine types real time efficiency which
              will be a key input in future purchases.
            </li>

            <li>
              Will generate wear parts life data of different makes & types to
              asses actual wear parts cost/ Kg of deposition to enable data
              driven purchase decision.
            </li>
          </ul>

          <h2 className="my-4">Maintenance</h2>
          <ul>
            <li>
              Torch wear parts change schedule based on parametric variation.
            </li>

            <li>
              Prevention of major breakdown of machine based on measured machine
              health indicating parameters.
            </li>

            <li>
              Can prevent unwarranted downtime to maintain production
              continuity.
            </li>

            <li>Can help in data driven Spares & Wear parts planning.</li>
          </ul>

          <h2 className="my-4">RESOURCE MONITORING</h2>
          <ul>
            <li>
              Person working in the shift can be closely monitored can be used
              for future analysis, performance, etc.
            </li>
            <li>
              With the help of Camera, from the App it should possible to
              capture the picture of the person, timestamp before starting & at
              the end of the Job.
            </li>
          </ul>
          <h2 className="my-4">JOB MONITORING</h2>
          <ul>
            <li>
              Machine working in the shift & corresponding Job can be closely
              monitored can be used for future analysis, performance, etc.
            </li>
            <li>
              With the help of Barcode Scanner, from App it should possible to
              scan Barcode with timestamp and track each Job before starting &
              at the end of the Job.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmartWeld;
