import React from "react";
import ProductCard from "../ProductCard"; // Assuming ProductCard is in the same folder

const LightningDeals = () => {
    return (
        <div>
            <h2>Lightning deals</h2>
            <div>
                {/* You'll likely use a loop or map here to render multiple ProductCard components */}
                <ProductCard />
                <ProductCard />
                {/* ... more ProductCard components */}
            </div>
        </div>
    );
};

export default LightningDeals;
