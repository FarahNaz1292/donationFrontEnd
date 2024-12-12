import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/donations" element={<DonationsPage />} />
          <Route path="/donations/:id" element={<SingleDonationPage />}></Route>
          <Route path="/fundraisings" element={<FundRaising />} />
          <Route
            path="/fundraisings/:id"
            element={<SingleFundraisingPage />}
          ></Route>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/admin" element={<AdminLayout></AdminLayout>}>
          <Route path="/admin/admin-home" element={<AdminHome />} />
          <Route path="/admin/create-donation" element={<CreateDonations />} />
          <Route path="/admin/all-donation" element={<AllDonations />} />
          <Route
            path="/admin/create-fundraiser"
            element={<CreateFundraising />}
          />
          <Route path="/admin/all-fundraiser" element={<AllFundraising />} />
          <Route path="/admin/all-user" element={<AllUser />} />
          <Route path="/admin/update-fund/:id" element={<UpdatingFund />} />
          <Route
            path="/admin/update-donation/:id"
            element={<UpdatingDonations />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
