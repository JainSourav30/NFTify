import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import ProductCard from "../Components/Raghav/ProductCard";
import useNFTityStore from "../store";

const Dashboard = () => {
  const [jwtToken] = useNFTityStore((state) => [state.jwtToken]);
  const navigate = useNavigate();

  useEffect(() => {
    if (jwtToken === "") {
      navigate("/login");
    }
  }, [jwtToken, navigate]);

  return (
    <div>
      <div>
        <ProductCard />
      </div>
    </div>
  );
};

export default Dashboard;
