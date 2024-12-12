import axios from "axios";
import Lottie from "lottie-react";

import { Link, useNavigate } from "react-router";
import Login from "../../../../public/login.json";
import toast from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      email,
      password,
    };
    await axios
      .post("http://localhost:5000/api/signin", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        toast.success("You have logged in successfully");
        navigate("/");
      });
  };

  return (
    <>
      <div className="hero bg-[#fae3a5] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" w-[50%]">
            <Lottie
              animationData={Login}
              loop={true}
              width={500}
              height={500}
            />
          </div>
          <div className="card bg-amber-200 w-[50%]  shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-amber-300 shadow-black" type="submit">
                  Login
                </button>
              </div>
              <p className="text-center">
                Dont have an account. Please{" "}
                <Link to="/signup">
                  <span className="underline">SignUp</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
