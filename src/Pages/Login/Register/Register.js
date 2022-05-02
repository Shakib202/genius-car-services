import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Register = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError1] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if(loading || updating){
    return <Loading></Loading>
  }

  if (user) {
    console.log('user', user);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate('/home');
  };
  return (
    <div className="register-form border p-2 mt-2">
      <PageTitle title='Register'></PageTitle>
      <h2 style={{ textAlign: "center", color: "#0d6efd" }}>Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="text" placeholder="Your Name" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          required
        />
        <input type="checkbox" name="terms" id="terms" />
        {/* <label
          className={agree ? "ps-2 text-primary" : "ps-2 text-danger"}
          onClick={() => setAgree(!agree)}
          htmlFor="terms"
        >
          Accept Genius Car Terms and Condition
        </label> */}
        <label
          className={`ps-2 ${agree ? "" : "text-danger"}`}
          htmlFor="terms"
          onClick={() => setAgree(!agree)}
        >
          Accept Genius Car Terms and Condition
        </label>
        <input
          disabled={!agree}
          className="bg-primary text-white mt-3"
          type="submit"
          value={"Register"}
        />
      </form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
