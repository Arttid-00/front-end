import { useEffect } from "react";
import { Tooltip } from "tw-elements";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./page/Login/LoginForm";
import SaleReport from "./page/SaleTeam/SaleReport";
import CreateFormreport from "./page/SaleTeam/CreateReport";
import CreateFormtravel from "./page/SaleTeam/CreateTravel";
import SaleTravel from "./page/SaleTeam/SaleTravel";
import Navbar from "./components/Navbar";
import EngReport from "./page/EngTeam/EngReport";
import EngStatus from "./page/EngTeam/EngStatus";
import EngTravel from "./page/EngTeam/EngTravel";
import EngCreateFormreport from "./page/EngTeam/EngCreatereport";
import EngCreateFormstatust from "./page/EngTeam/EngCreaterstatus";
import EngCreateFormTravel from "./page/EngTeam/EngCreatetravel";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/SaleR" element={<SaleReport />} />
          <Route path="/SaleC" element={<CreateFormreport />} />
          <Route path="/SaleTC" element={<CreateFormtravel />} />
          <Route path="/SaleT" element={<SaleTravel />} />
          <Route path="/SaleT" element={<SaleTravel />} />

          <Route path="/EngR" element={<EngReport />} />
          <Route path="/EngCR" element={<EngCreateFormreport />} />

          <Route path="/EngS" element={<EngStatus />} />
          <Route path="/EngCS" element={<EngCreateFormstatust />} />

          <Route path="/EngT" element={<EngTravel />} />
          <Route path="/EngTC" element={<EngCreateFormTravel />} />

          <Route path="" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
