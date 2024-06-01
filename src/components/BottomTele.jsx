import React from "react";
import { Link } from "react-router-dom";

const BottomTele = () => {
  return (
    <div>
      <Link
        href="tel:7404609190"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="bi bi-telephone"></i>
      </Link>
    </div>
  );
};

export default BottomTele;
