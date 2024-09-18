import { formatCurrency } from "../utils/helpers";

function OrderItem({ item }) {
  const { quantity, name, itemtotalprice, itemId } = item;
  console.log(name)

  return (
    <li className="py-4 border-b border-gray-300">
      <div className="flex items-center justify-between">
        {/* Image and Name */}
        <div className="flex items-center space-x-4">
          <img
            src={itemId.image.filePath}
            alt={item.fileName}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <p className="text-lg font-semibold">{itemId.name}</p>
            <p className="text-sm text-gray-500">Quantity: {quantity}</p>
          </div>
        </div>

        {/* Total Price */}
        <div className="flex-shrink-0">
          <p className="text-lg font-bold text-gray-800">
            {formatCurrency(itemtotalprice)}
          </p>
        </div>
      </div>
    </li>
  );
}

export default OrderItem;
