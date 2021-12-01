import PricingCard from "components/PricingCard/PricingCard";
import Navbar from "layouts/Navbar/Navbar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";

function Pricing() {
  const [pricingOptions, setpricingOptions] = useState({
    annual: true,
    monthly: false,
  });

  const handleChange = (e) => {
    let title = e.toLowerCase();

    if (title === "annual") {
      setpricingOptions({
        annual: true,
        monthly: false,
      });
      return;
    }
    if (title === "monthly") {
      setpricingOptions({
        annual: false,
        monthly: true,
      });
      return;
    }
  };

  return (
    <div>
      <Navbar />

      <div className="pt-90px">
        <div className="container-wrapper">
          <p className="text-center fs-36px dark-blue graphik-medium py-30px mb-30px">
            Happy customers. Happy team.{" "}
            <span className="light-blue graphik-regular">Try for free.</span>
          </p>

          <div className="package-select mb-60px">
            <Checkbox
              title="Annual"
              radio={true}
              rounded={true}
              radioTitle="packageSelect"
              saveTitle="(Save up to 20%)"
              handleChange={handleChange}
              checked={pricingOptions.annual}
            />
            <Checkbox
              title="Monthly"
              radio={true}
              rounded={true}
              radioTitle="packageSelect"
              handleChange={handleChange}
              checked={pricingOptions.monthly}
            />
          </div>

          <div className="pricing-wrapper mb-100px">
            <img
              src="https://hs-marketing.imgix.net/images/pages/pricing/PricingPage--plan-standard--illo.png?ixlib=gatsbyHook-1.6.12&fit=min&w=160&h=375"
              alt=""
              className="pricing-img-left"
            />
            <img
              src="https://hs-marketing.imgix.net/images/pages/pricing/PricingPage--plan-company--illo.png?ixlib=gatsbyHook-1.6.12&fit=min&w=183&h=375"
              alt=""
              className="pricing-img-right"
            />
            {pricingOptions.annual ? (
              <>
                <PricingCard
                  title="Standard"
                  price="20"
                  duration="per User per month"
                  packageDisc="Reporting, automation, and integrations for support teams"
                  buttonTitle="Free 15-day Trial"
                  packageDetails={[
                    {
                      title: "3 Mailboxes, 1 Docs site",
                      tooltipText:
                        "Additional Mailboxes are $10 each/month and Docs sites are $20 each/month.",
                    },
                    { title: "Beacon with live chat" },
                    { title: "Proactive Messages", seePricing: true },
                    {
                      title: "Customer Properties",
                      badge: "New",
                      tooltipText:
                        "Enrich Customer Profiles with custom attributes",
                    },
                    { title: "Reports" },
                    { title: "Automated Workflows" },
                    { title: "API and 50+ integrations" },
                  ]}
                />
                <PricingCard
                  title="Plus"
                  price="35"
                  duration="per User per month"
                  packageDisc="Advanced features and reporting for teams at scale              "
                  buttonTitle="Free 15-day Trial"
                  buttonSpecial={true}
                  packageDetails={[
                    {
                      title: "All Standard features",
                      special: true,
                    },
                    {
                      title: "10 Mailboxes, 1 Docs site",
                      tooltipText:
                        "Enrich Customer Profiles with custom attributes",
                    },
                    { title: "Custom Fields" },
                    {
                      title: "Teams",
                    },
                    { title: "Salesforce, Jira, HubSpot Apps" },
                    { title: "HIPAA Compliance" },
                    { title: "SSO/SAML Authentication", badge: "ADD-ON" },
                    { title: "Advanced Permissions" },
                  ]}
                />
                <PricingCard
                  title="Company"
                  priceText="Contact Us"
                  duration="Designed to grow with teams of 25+"
                  packageDisc="Personalized service and enterprise security for large teams"
                  buttonTitle="Contact Us"
                  packageDetails={[
                    { title: "All Plus features", special: true },
                    { title: "Unlimited Mailboxes" },
                    { title: "Unlimited Docs sites" },
                    { title: "Flexible Users for one low price" },
                    { title: "Concierge onboarding services" },
                    { title: "Dedicated account manager" },
                    { title: "Enterprise security and SSO" },
                  ]}
                />
              </>
            ) : (
              <>
                <PricingCard
                  title="Standard"
                  price="25"
                  duration="per User per month"
                  packageDisc="Reporting, automation, and integrations for support teams"
                  buttonTitle="Free 15-day Trial"
                  packageDetails={[
                    {
                      title: "3 Mailboxes, 1 Docs site",
                      tooltipText:
                        "Additional Mailboxes are $10 each/month and Docs sites are $20 each/month.",
                    },
                    { title: "Beacon with live chat" },
                    { title: "Proactive Messages", seePricing: true },
                    {
                      title: "Customer Properties",
                      badge: "New",
                      tooltipText:
                        "Enrich Customer Profiles with custom attributes",
                    },
                    { title: "Reports" },
                    { title: "Automated Workflows" },
                    { title: "API and 50+ integrations" },
                  ]}
                />
                <PricingCard
                  title="Plus"
                  price="40"
                  duration="per User per month"
                  packageDisc="Advanced features and reporting for teams at scale              "
                  buttonTitle="Free 15-day Trial"
                  packageDetails={[
                    {
                      title: "All Standard features",
                      special: true,
                    },
                    {
                      title: "10 Mailboxes, 1 Docs site",
                      tooltipText:
                        "Enrich Customer Profiles with custom attributes",
                    },
                    { title: "Custom Fields" },
                    {
                      title: "Teams",
                    },
                    { title: "Salesforce, Jira, HubSpot Apps" },
                    { title: "HIPAA Compliance" },
                    { title: "SSO/SAML Authentication", badge: "ADD-ON" },
                    { title: "Advanced Permissions" },
                  ]}
                />
                <PricingCard
                  title="Company"
                  priceText="Contact Us"
                  duration="Designed to grow with teams of 25+"
                  packageDisc="Personalized service and enterprise security for large teams"
                  buttonTitle="Contact Us"
                  packageDetails={[
                    { title: "All Plus features", special: true },
                    { title: "Unlimited Mailboxes" },
                    { title: "Unlimited Docs sites" },
                    { title: "Flexible Users for one low price" },
                    { title: "Concierge onboarding services" },
                    { title: "Dedicated account manager" },
                    { title: "Enterprise security and SSO" },
                  ]}
                />
              </>
            )}
          </div>

          <div className="discount">
            <p className="text-center fs-30px dark-blue graphik-medium mb-50px">
              Looking for a discount?
            </p>

            <div className="mb-100px">
              <div className="discout-cards ">
                <Link to="/" className="discout-card pointer">
                  asdhjksahdjk
                </Link>
                <Link to="/" className="discout-card pointer">
                  asdhjksahdjk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

function Checkbox(props) {
  const {
    title,
    radio,
    radioTitle,
    rounded,
    saveTitle,
    handleChange,
    checked,
  } = props;
  return (
    <div className={rounded ? "checkbox rounded pointer" : "checkbox pointer"}>
      <div>
        <input
          type={radio ? "radio" : "checkbox"}
          name={radioTitle ? radioTitle : ""}
          id={title}
          onChange={() => handleChange(title)}
          checked={checked}
        />
      </div>
      <label className="fs-18px light-blue weight-4 pointer" htmlFor={title}>
        {title}{" "}
        <span
          className="fs-14px graphik-medium"
          style={{ color: "rgb(9, 130, 63)" }}
        >
          {saveTitle}
        </span>
      </label>
    </div>
  );
}
