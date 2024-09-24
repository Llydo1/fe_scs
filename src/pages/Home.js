import React from "react";
import HeroBanner from "../components/home_components/HeroBanner"; // Adjust path as needed
import WarningBanner from "../components/home_components/WarningBanner";
import LightningDeals from "../components/home_components/LightningDeals";
import ClearanceDeals from "../components/home_components/ClearanceDeals";
import BonusCoupons from "../components/home_components/BonusCoupons";

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <WarningBanner />
            <LightningDeals />
            <ClearanceDeals />
            <BonusCoupons />
        </div>
    );
};

export default Home;
