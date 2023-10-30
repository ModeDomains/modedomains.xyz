import "./App.css";
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AppFooter from "./components/AppFooter";
// import DomainView from "./pages/DomainView";
import { useChainModal } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useNetwork } from "wagmi";
import DomainView from "./pages/DomainView";

function App() {
  const { openChainModal } = useChainModal();
  const [nameRegistered, setNameRegistered] = useState(false);
  const { chain } = useNetwork();
  useEffect(() => {
    if (chain && chain.name !== "Mode Testnet") {
      openChainModal();
      // If connectedChain is not the predefined chain, show the chain selector popup
      // setShowChainSelector(true);
    }
  }, [chain, openChainModal]);
  useEffect(() => {
    if (chain && chain.name !== "Mode Testnet") {
      openChainModal();
      // If connectedChain is not the predefined chain, show the chain selector popup
      // setShowChainSelector(true);
    }
  }, []);
  return (
    <div className="App">
      <Router>
        <AppNavbar nameRegistered={nameRegistered} />
        <Routes>
          <Route
            path="/"
            element={<Home setNameRegistered={setNameRegistered} />}
          />
          <Route path="profile" element={<Profile />} />
          <Route path="/domain/:domainName" element={<DomainView />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
