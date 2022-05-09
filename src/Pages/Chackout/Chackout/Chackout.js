import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import './Chackout.css';

const Chackout = () => {
  const {serviceId} = useParams();
  const [service] = useServiceDetail(serviceId);
  return (
    <div className='w-50 mx-auto'>
      <h2 className='text-center m-5 text-primary'>Please Order: {service.name}</h2>
      <form>
        <input type="text" name="name" placeholder='Name' id="" required />
      </form>
    </div>
  );
};

export default Chackout;