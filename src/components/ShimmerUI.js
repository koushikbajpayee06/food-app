import React from "react";

const ShimmerUI = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-img"></div>

      <div className="skeleton-line short"></div>
      <div className="skeleton-line normal"></div>
      <div className="skeleton-line long"></div>
    </div>
  );
};

export default ShimmerUI;
