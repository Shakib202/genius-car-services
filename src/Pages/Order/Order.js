import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `https://nameless-falls-64465.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);

  return (
    <div>
      <h2 className="text-center mt-5 text-primary">
        Your Orders: {orders.length}
      </h2>
      <div className="text-center mt-5 text-primary">
        {
          orders.map(order => <div key={order._id}>
            <p className="h5">{order.email} : {order.service}</p>
          </div>)
        }
      </div>
    </div>
  );
};

export default Order;
