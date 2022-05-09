import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  return (
    <div>
      <div className="text-center m-4">
        <h2 className="mb-3 text-primary">You are about to book: {service.name}</h2>
        <img style={{ borderRadius: "20px" }} src={service.img} alt="" />
      </div>
      <div className="text-center">
        <Link to={`/checkout/${serviceId}`}>
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
