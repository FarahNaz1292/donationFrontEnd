import axios from "axios";
import Lottie from "lottie-react";
import Login from "../../../../public/login.json";

import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.user.value;
    const email = form.email.value;
    const password = form.password.value;
    const profilePicture = form.profilePicture.value;
    const newUser = {
      username,
      email,
      password,
      profilePicture,
    };
    console.log(newUser);
    await axios
      .post("http://localhost:5000/api/signup", newUser)

      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        toast.success("You Have succesfully Signed Up");
      });
    navigate("/signin");
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

          <div className="card bg-amber-200 w-[50%] shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User</span>
                </label>
                <input
                  type="text"
                  name="user"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <input
                  type="text"
                  name="role"
                  placeholder="Role"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Photo</span>
                </label>
                <input
                  type="text"
                  name="profilePicture"
                  placeholder="Image URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-amber-300 shadow-black" type="submit">
                  SignUp
                </button>
              </div>
              <p className="text-center">
                Already have an account? Please{" "}
                <Link to="/signin">
                  <span className="underline text-blue-800">SignIn</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
