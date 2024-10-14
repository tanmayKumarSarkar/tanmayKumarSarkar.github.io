import React from "react";

const UHC = ({ project }) => {
  return (
    <div>
      <div className="UHC-wrapper project-wrapper">
        <div>
          <h2>Medicare Insurance Plans Overview</h2>
          <h3 className="mt-4">Plan Summary </h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/UHG Summary.png`}
              alt="UHG Summary"
            />
          </div>
          <ul className="text-left text-sm">
            <li>
              Medicare Part A (Hospital Insurance): Covers inpatient hospital
              stays, care in a skilled nursing facility, hospice care, and some
              home health care.
            </li>
            <li>
              Medicare Part B (Medical Insurance): Covers certain doctors’
              services, outpatient care, medical supplies, and preventive
              services.
            </li>
            <li>
              Medicare Part C (Medicare Advantage): An alternative to Original
              Medicare (Parts A and B) offered by private companies. These plans
              often include additional benefits like vision, dental, and
              hearing, and may include prescription drug coverage.
            </li>
            <li>
              Medicare Part D (Prescription Drug Coverage): Helps cover the cost
              of prescription drugs. These plans are offered by insurance
              companies and other private companies approved by Medicare.
            </li>
            <li>
              Medicare Supplement Insurance (Medigap): Helps pay some of the
              healthcare costs that Original Medicare doesn’t cover, like
              copayments, coinsurance, and deductibles.
            </li>
          </ul>
          <h3 className="mt-4">Plan Details </h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/UHG Details.png`}
              alt="UHG Details"
            />
          </div>
          <ul className="text-left text-sm">
            <li>
              Medicare Part A: Usually premium-free if you or your spouse paid
              Medicare taxes for a certain amount of time. Otherwise, there is a
              monthly premium. It also includes deductibles and coinsurance.
            </li>
            <li>
              Medicare Part B: Requires a monthly premium, which is based on
              your income. There are also deductibles and coinsurance.
            </li>
            <li>
              Medicare Part C: Costs vary by plan and provider. These plans
              often have networks of doctors and hospitals you must use to get
              the lowest costs.
            </li>
            <li>
              Medicare Part D: Monthly premiums vary by plan. You may also have
              to pay a deductible and copayments or coinsurance.
            </li>
            <li>
              Medicare Supplement Insurance: Monthly premiums vary based on the
              plan and the insurance company. These plans are standardized and
              labeled A through N, with each plan offering a different set of
              benefits.
            </li>
          </ul>
          <h3 className="mt-4">Plan Comparison</h3>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%]"
              src={`/assets/Projects/${project.Project}/UHG Compare.png`}
              alt="UHG Compare"
            />
          </div>
          <ul className="text-left text-sm">
            <li>
              Original Medicare (Parts A & B) vs. Medicare Advantage (Part C):
            </li>
            <li>
              Original Medicare: Offers flexibility in choosing healthcare
              providers and doesn’t require referrals for specialists. However,
              it doesn’t cover everything, and you may need a Medigap policy for
              additional coverage.
            </li>
            <li>
              Medicare Advantage: Often includes additional benefits like
              vision, dental, and hearing. These plans may have lower
              out-of-pocket costs but require you to use a network of providers.
            </li>
            <li>
              Medicare Part D: Compare plans based on the list of covered drugs
              (formulary), monthly premiums, deductibles, and out-of-pocket
              costs.
            </li>
            <li>
              Medigap Plans: Compare based on the benefits offered, premiums,
              and the insurance company’s reputation.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mt-8">Key Features</h2>
          <h3 className="mt-4">Medicare Part A (Hospital Insurance)</h3>
          <p className="text-left text-sm">
            Coverage: Inpatient hospital stays, skilled nursing facility care,
            hospice care, and some home health care.
          </p>
          <p className="text-left text-sm">
            Cost: Usually premium-free if you or your spouse paid Medicare taxes
            for a certain amount of time. Otherwise, there is a monthly premium.
            Includes deductibles and coinsurance.
          </p>
          <h3 className="mt-4">Medicare Part B (Medical Insurance)</h3>
          <p className="text-left text-sm">
            Coverage: Doctor’s services, outpatient care, medical supplies, and
            preventive services.
          </p>
          <p className="text-left text-sm">
            Cost: Monthly premium based on income, along with deductibles and
            coinsurance.
          </p>

          <h3 className="mt-4">Medicare Part C (Medicare Advantage)</h3>
          <p className="text-left text-sm">
            Coverage: Includes all benefits and services covered under Parts A
            and B, often with additional benefits like vision, dental, and
            hearing. May include prescription drug coverage.
          </p>
          <p className="text-left text-sm">
            Cost: Varies by plan and provider. Often has lower out-of-pocket
            costs but requires using a network of providers.
          </p>
          <h3 className="mt-4">Medicare Part D (Prescription Drug Coverage)</h3>
          <p className="text-left text-sm">
            Coverage: Helps cover the cost of prescription drugs.
          </p>
          <p className="text-left text-sm">
            Cost: Monthly premiums vary by plan. Includes deductibles and
            copayments or coinsurance.
          </p>
          <h3 className="mt-4">Medicare Supplement Insurance (Medigap)</h3>
          <p className="text-left text-sm">
            Coverage: Helps pay some of the healthcare costs that Original
            Medicare doesn’t cover, such as copayments, coinsurance, and
            deductibles.
          </p>
          <p className="text-left text-sm">
            Cost: Monthly premiums vary based on the plan and the insurance
            company. Plans are standardized and labeled A through N, each
            offering a different set of benefits.
          </p>
          <h3 className="mt-4">Comparing Plans</h3>
          <p className="text-left text-sm">
            Original Medicare (Parts A & B) vs. Medicare Advantage (Part C):
          </p>
          <p className="text-left text-sm">
            Original Medicare: Greater flexibility in choosing healthcare
            providers, no need for referrals to see specialists, but may require
            a Medigap policy for additional coverage.
          </p>
          <p className="text-left text-sm">
            Medicare Advantage: Often includes extra benefits and may have lower
            out-of-pocket costs, but typically requires using a network of
            providers.
          </p>
          <p className="text-left text-sm">
            Medicare Part D: Compare plans based on the list of covered drugs
            (formulary), monthly premiums, deductibles, and out-of-pocket costs.
          </p>
          <p className="text-left text-sm">
            Medigap Plans: Compare based on benefits offered, premiums, and the
            insurance company’s reputation.
          </p>
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

          <h3 className="my-2">Medicare Part A (Hospital Insurance)</h3>
          <ul className="text-left text-sm">
            <li>
              Inpatient Hospital Coverage: Includes semi-private rooms, meals,
              general nursing, and other hospital services and supplies.
            </li>
            <li>
              Skilled Nursing Facility Care: Covers care in a skilled nursing
              facility for a limited time (following a hospital stay).
            </li>
            <li>
              Hospice Care: Provides care for terminally ill patients, including
              support for family members.
            </li>
            <li>
              Home Health Care: Limited part-time or intermittent skilled
              nursing care and home health aide services.
            </li>
          </ul>
          <h3 className="my-2">Medicare Part B (Medical Insurance)</h3>
          <ul className="text-left text-sm">
            <li>
              Doctor's Services: Covers visits to doctors and other healthcare
              providers.
            </li>
            <li>
              Outpatient Care: Includes services like physical therapy, mental
              health care, and some home health services.
            </li>
            <li>
              Preventive Services: Covers screenings, vaccines, and annual
              wellness visits.
            </li>
            <li>
              Durable Medical Equipment: Includes items like wheelchairs,
              walkers, and hospital beds.
            </li>
          </ul>
          <h3 className="my-2">Medicare Part C (Medicare Advantage)</h3>
          <ul className="text-left text-sm">
            <li>
              Comprehensive Coverage: Combines Part A and Part B benefits, often
              with additional services.
            </li>
            <li>
              Additional Benefits: May include vision, dental, hearing, and
              wellness programs.
            </li>
            <li>
              Prescription Drug Coverage: Many plans include Part D coverage.
            </li>
            <li>
              Network of Providers: Requires using a network of doctors and
              hospitals to get the lowest costs.
            </li>
          </ul>
          <h3 className="my-2">Medicare Part D (Prescription Drug Coverage)</h3>
          <ul className="text-left text-sm">
            <li>
              Prescription Drug Coverage: Helps cover the cost of prescription
              medications.
            </li>
            <li>Formulary: A list of covered drugs, which can vary by plan.</li>
            <li>
              Pharmacy Network: Access to a network of pharmacies for
              prescription fulfillment.
            </li>
            <li>
              Cost Management: Includes features like tiered copayments and
              coverage gap (donut hole) management.
            </li>
          </ul>
          <h3 className="my-2">Medicare Supplement Insurance (Medigap)</h3>
          <ul className="text-left text-sm">
            <li>
              Cost Sharing: Helps pay for out-of-pocket costs not covered by
              Original Medicare, such as copayments, coinsurance, and
              deductibles.
            </li>
            <li>
              Standardized Plans: Plans are standardized and labeled A through
              N, each offering a different set of benefits.
            </li>
            <li>
              Nationwide Coverage: Generally allows you to see any doctor that
              accepts Medicare.
            </li>
            <li>
              Foreign Travel Emergency: Some plans offer coverage for emergency
              medical care when traveling outside the U.S.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mt-4">Architecture</h2>
          <div className="flex items-center justify-center py-4">
            <img
              className="w-[80%] md:w-[60%] shadow-filter"
              src={`/assets/Projects/${project.Project}/UHG Architecture.png`}
              alt="UHG Architecture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UHC;
