import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import MainLayout from "./Layout/mainLayout/MainLayout.jsx";
import Home from "./Components/pages/home/Home.jsx";
import FundRaising from "./Components/pages/fundraising/FundRaising.jsx";
import Aboutus from "./Components/pages/aboutUs/Aboutus.jsx";
import ContactUs from "./Components/pages/contactUs/ContactUs.jsx";
import SignIn from "./Components/pages/loginPage/SignIn.jsx";
import SignUp from "./Components/pages/registrationPage/SignUp.jsx";
import { Toaster } from "react-hot-toast";
import DonationsPage from "./Components/pages/donation/DonationsPage.jsx";
import SingleDonationPage from "./Components/pages/donation/SingleDonationPage.jsx";
import SingleFundraisingPage from "./Components/pages/fundraising/SingleFundraisingPage.jsx";
import AdminLayout from "./Layout/adminLayout/AdminLayout.jsx";
import CreateDonations from "./Components/pages/Admin/CreateDonations.jsx";
import AllDonations from "./Components/pages/Admin/AllDonations.jsx";
import AdminHome from "./Components/pages/Admin/AdminHome.jsx";
import UpdatingDonations from "./Components/pages/UpdatingCauses/UpdatingDonations.jsx";
import CreateFundraising from "./Components/pages/Admin/CreateFundraising.jsx";
import AllFundraising from "./Components/pages/Admin/AllFundraising.jsx";
import AllUser from "./Components/pages/Admin/AllUser.jsx";
import UpdatingFund from "./Components/pages/UpdatingCauses/UpdatingFund.jsx";
import ErrorPage from "./Components/pages/ErrorHandling/ErrorPage.jsx";
import AllTransactions from "./Components/pages/Admin/AllTransactions.jsx";
import UserTransactions from "./Components/pages/userTransaction/UserTransactions.jsx";
import PrivateRoute from "./Components/pages/privateRoute/PrivateRoute.jsx";
import AdminProfile from "./Components/pages/Admin/AdminProfile.jsx";
import UserProfile from "./Components/pages/userTransaction/UserProfile.jsx";
import EditUserInfo from "./Components/pages/userTransaction/EditUserInfo.jsx";
import EditAdminProfile from "./Components/pages/Admin/EditAdminProfile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/donations" element={<DonationsPage />} />
          <Route
            path="/donations/:id"
            element={
              <PrivateRoute
                element={<SingleDonationPage />}
                allowedRole={["user"]}
              />
            }
          ></Route>
          <Route path="/fundraisings" element={<FundRaising />} />
          <Route
            path="/fundraisings/:id"
            element={
              <PrivateRoute
                element={<SingleFundraisingPage />}
                allowedRole={["user"]}
              />
            }
          ></Route>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/admin" element={<AdminLayout></AdminLayout>}>
          <Route
            path="/admin/admin-home"
            element={
              <PrivateRoute element={<AdminHome />} allowedRole={["admin"]} />
            }
          />
          <Route
            path="/admin/create-donation"
            element={
              <PrivateRoute
                element={<CreateDonations />}
                allowedRole={["admin"]}
              />
            }
          />
          <Route
            path="/admin/all-donation"
            element={
              <PrivateRoute
                element={<AllDonations />}
                allowedRole={["admin"]}
              />
            }
          />
          <Route
            path="/admin/create-fundraiser"
            element={
              <PrivateRoute
                element={<CreateFundraising />}
                allowedRole={["admin"]}
              />
            }
          />
          <Route
            path="/admin/all-fundraiser"
            element={
              <PrivateRoute
                element={<AllFundraising />}
                allowedRole={["admin"]}
              />
            }
          />
          <Route
            path="/admin/all-user"
            element={<PrivateRoute element={<AllUser />} />}
            allowedRole={["admin"]}
          />
          <Route
            path="/admin/update-fund/:id"
            element={<PrivateRoute element={<UpdatingFund />} />}
            allowedRole={["admin"]}
          />
          <Route
            path="/admin/update-donation/:id"
            element={
              <PrivateRoute
                element={<PrivateRoute element={<UpdatingDonations />} />}
                allowedRole={["admin"]}
              />
            }
          />
          <Route
            path="/admin/all-donations"
            element={
              <PrivateRoute
                element={<AllTransactions />}
                allowedRole={["admin"]}
              />
            }
          />
          <Route
            path="/admin/profile"
            element={<PrivateRoute element={<AdminProfile />} />}
            allowedRole={["admin"]}
          />
          <Route
            path="/admin/update-admin/:id"
            element={<PrivateRoute element={<EditAdminProfile />} />}
            allowedRole={["admin"]}
          />
        </Route>
        <Route
          path="/user/user-transactions"
          element={
            <PrivateRoute
              element={<UserTransactions />}
              allowedRole={["user"]}
            />
          }
        ></Route>
        <Route
          path="/user/profile"
          element={<PrivateRoute element={<UserProfile />} />}
          allowedRole={["user"]}
        />
        <Route
          path="/user/update-user/:id"
          element={<PrivateRoute element={<EditUserInfo />} />}
          allowedRole={["user"]}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
