import Logo from "components/Logo/Logo";
import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const LabelInput = ({
  label,
  placeholder,
  type = "text",
  InputComponent,
  wrapperClassName,
  hint,
}) => {
  return (
    <div className={wrapperClassName}>
      <label className="fs-13px dark-blue mb-5px block" htmlFor={label}>
        {label}
      </label>
      {InputComponent ? (
        <InputComponent />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="form-input graphik-light"
          id={label}
        />
      )}
      <p className="fs-13px gray mb-5px block">{hint}</p>
    </div>
  );
};

function Register() {
  return (
    <div className="py-40px">
      <div className="container-wrapper">
        <div className="text-center mb-20px">
          <Link to="/" className="navbar-left">
            <Logo />
          </Link>
        </div>

        <div className="register-form-wrapper">
          <p className="text-center dark-blue fs-24px graphik-medium mb-20px">
            Start Your Free Trial
          </p>

          <ul className="free-trial-box mb-40px">
            <li className="fs-14px dark-blue graphik-light">15-day trial</li>
            <li className="fs-14px dark-blue graphik-light">
              No credit card required
            </li>
          </ul>

          <form className="register-form">
            <LabelInput label="First name" placeholder="Help" />
            <LabelInput label="Last name" placeholder="Scout" />
            <LabelInput label="Company name" placeholder="Scout's club" />
            <LabelInput label="Work email" placeholder="scout@company.com" />
            <LabelInput
              label="Password"
              placeholder="Password"
              type="password"
              hint="At least 8 characters
              "
              wrapperClassName="mb-10px"
            />
            <LabelInput
              InputComponent={() => (
                <PhoneInput country={"us"} containerClass="containerClass" />
              )}
              label="Phone number (optional)"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
