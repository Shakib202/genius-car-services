import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Chackout = () => {
  const {serviceId} = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  
  const handlePlaceOrder = event => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value
    }
    axios.post('http://localhost:5000/order', order)
     .then(response => {
       const {data} = response;
       if(data.insertedId){
         toast('Your order is booked!!!');
         event.target.reset();
       }
     })
  }

  return (
    <div>
      <h2 className='text-center m-5 text-primary'>Please Order: {service.name}</h2>
      <div className='w-50 mx-auto'>
        <form onSubmit={handlePlaceOrder}>
          <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='Type here Name' id="" required readOnly disabled />
          <br />
          <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='Type here Email' id="" required readOnly disabled />
          <br />
          <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='Type here Service' id="" required readOnly />
          <br />
          <input className='w-100 mb-2' type="text" name="address" placeholder='Type here Address' autoComplete='off' id="" required />
          <br />
          <input className='w-100 mb-2' type="text" name="phone" placeholder='Type here Phone' id="" required />
          <br />
          <input className='btn btn-primary w-100' type="submit" value="Place Order" />
        </form>
      </div>
    </div>
  );
};

export default Chackout;



// important {don't delete this}


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import useServiceDetail from '../../../hooks/useServiceDetail';

// const Chackout = () => {
//   const {serviceId} = useParams();
//   const [service] = useServiceDetail(serviceId);
//   const [user, setUser] = useState({
//     name: 'Akbar The Great', 
//     email: 'akbar@momo.taj',
//     address: 'Tajmohol Road Md.pur',
//     phone: '017111111'
//   });

//   const handleAddressChange = event => {
//     console.log(event.target.value);
//     const {address, ...rest} = user;
//     const newAddress = event.target.value;
//     const newUser = {address: newAddress, ...rest};
//     console.log(newUser);
//     setUser(newUser);
//   }

//   return (
//     <div>
//       <h2 className='text-center m-5 text-primary'>Please Order: {service.name}</h2>
//       <div className='w-50 mx-auto'>
//         <form >
//           <input className='w-100 mb-2' type="text" value={user.name} name="name" placeholder='Type here Name' id="" required />
//           <br />
//           <input className='w-100 mb-2' type="email" value={user.email} name="email" placeholder='Type here Email' id="" required />
//           <br />
//           <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='Type here Service' id="" required />
//           <br />
//           <input className='w-100 mb-2' type="text" onChange={handleAddressChange} value={user.address} name="address" placeholder='Type here Address' id="" required />
//           <br />
//           <input className='w-100 mb-2' type="text" value={user.phone} name="phone" placeholder='Type here Phone' id="" required />
//           <br />
//           <input className='btn btn-primary w-100' type="submit" value="Place Order" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Chackout;