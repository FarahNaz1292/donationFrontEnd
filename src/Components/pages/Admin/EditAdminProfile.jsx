import React from "react";

const EditAdminProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editProfile, setEditProfile] = useState(null);
  const [fileName, setFileName] = useState();
  const [image, setImage] = useState(null);
  const loadFile = useRef(null);
  useEffect(() => {
    const getUserProfile = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/get-user/${id}`
      );

      setEditProfile(response.data.data);
    };

    getUserProfile();
  }, [id]);
  console.log(id);
  console.log(editProfile);
  if (!editProfile) {
    return (
      <div>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  const { userName, email, role } = editProfile;
  const handleEditUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const profilePicture = form.profilePicture.files[0];

    const editedProfile = {
      userName,
      email,
      profilePicture,
    };
    console.log(editedProfile);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/get-user/${id}`,
        editedProfile
      );
      console.log(res);
      if (res.data.status === "Success") {
        toast.success(res.data.message);
        navigate("/user/profile");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Navbar />
      <h1 className="text-center m-8 text-4xl font-semibold">
        Edit User Profile
      </h1>
      <div className="flex items-center justify-center">
        <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleEditUser}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">UserName</span>
              </label>
              <input
                type="text"
                placeholder="Input your name"
                className="input input-bordered"
                name="userName"
                required
                defaultValue={userName}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">email</span>
              </label>
              <input
                type="email"
                placeholder="input your email"
                className="input input-bordered"
                required
                name="email"
                defaultValue={email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <input
                type="text"
                placeholder={editProfile.role}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Picture</span>
              </label>
              <input
                onClick={() => loadFile.current.click()}
                required
                name="profilePicture"
                type="file"
                ref={loadFile}
                onChange={({ target: { files } }) => {
                  files[0] && setFileName(files[0].name);
                  if (files) {
                    setImage(URL.createObjectURL(files[0]));
                  }
                }}
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-warning" type="submit">
                Save Changes{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditAdminProfile;