import {useState} from 'react'

const PizzaDetails = () => {
   
    const [quantity,setQuantity]=useState(4)
  
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mx-auto relative mt-10">
          {/* Close Button */}
          <button className="absolute top-2 right-2 text-gray-600" onClick=''>
            ×
          </button>
  
          {/* Pizza Image */}
          <img src='pizza.png' alt='pizza' className="rounded-lg w-full mb-4" />
  
          {/* Pizza Name and Description */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">Classic Pizza</h3>
            <p className="text-sm text-gray-600 mt-1">Delicious pizza</p>
            <p className="text-lg font-bold text-blue-600 mt-2">Rs. 78</p>
          </div>
  
          {/* Crust Selection */}
          <div className="mt-4">
            <p className="text-red-500 font-bold">Select Crust for PIZZA <span className="text-sm">(Required)</span></p>
            <div className="mt-2">
              <label className="block">
                <input
                  type="radio"
                  name="crust"
                  value="Hand Tossed"
                  //checked={selectedCrust === 'Hand Tossed'}
                  //onChange={() => setSelectedCrust('Hand Tossed')}
                  className="mr-2"
                />
                Hand Tossed
              </label>
              <label className="block mt-2">
                <input
                  type="radio"
                  name="crust"
                  value="Pan"
                  checked={'' === 'Pan'}
                  //onChange={() => setSelectedCrust('Pan')}
                  className="mr-2"
                />
                Pan
              </label>
            </div>
          </div>
  
          {/* Quantity Controls */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center">
              <button onClick={''} className="bg-gray-200 px-3 py-1 rounded-full">-</button>
              <span className="mx-3">{quantity}</span>
              <button onClick={''} className="bg-gray-200 px-3 py-1 rounded-full">+</button>
            </div>
  
            {/* Add to Order Button */}
            <button
              onClick={() => alert(`Added ${quantity} ${'pizza'} to order with ${'taste'} crust`)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Add to Order (Rs. 8990)
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default PizzaDetails;
  