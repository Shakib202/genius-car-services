import React from "react";
import google from "../../../images/social/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png";
import facebook from "../../../images/social/124010.png";
import github from "../../../images/social/github_PNG83.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  let errorElement;
  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (user || user1) {
    navigate("/home");
  }

  return (
    <div className="pb-2">
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-75 d-block mx-auto my-2"
        >
          <img style={{ width: "20px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="btn btn-info w-75 d-block mx-auto my-2">
          <img style={{ width: "20px" }} src={facebook} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-75 d-block mx-auto my-2"
        >
          <img style={{ width: "20px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
