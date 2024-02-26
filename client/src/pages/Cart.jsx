import React from 'react';

// const Cart = ({ location }) => {
//   const cart = location?.state?.cart || []; // Use optional chaining to safely access nested properties

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cart.length > 0 ? (
//         <div>
//           {cart.map(item => (
//             <div key={item.id} className="mb-4">
//               <h3 className="text-lg font-bold">{item.name}</h3>
//               <p className="text-gray-300">Quantity: {item.quantity}</p>
//               <p className="text-gray-300">Price: ${item.price}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-300">No items in cart</p>
//       )}
//     </div>
//   );
// };

// Grab Products from cart and assign to Users
// Users can see items in cart
// Users can remove items from cart
const Users = () => {
  return (
    <div>
      <h2>Here's your Cart</h2>
      <p className = "testingUserCart"> You have no products in your Cart</p>
    </div>
  )
}
export default Cart;
