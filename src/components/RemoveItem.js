import { RiDeleteBin6Line } from "react-icons/ri";
import {useDispatch} from 'react-redux'
import toast from 'react-hot-toast'
import {deleteItem} from '../redux/cartSlice'

const RemoveItem=({item})=>{
   const dispatch=useDispatch()
    const {pizzaId}=item;
     
    const handleRemoveFromCart = async () => {
        dispatch(deleteItem(pizzaId));
        toast.success('Item removed from cart');
      };

    return (
        <td className="pro_icon">
        <button className="flex" onClick={handleRemoveFromCart}><RiDeleteBin6Line className="w-8 h-8 hover:text-red-600"/></button>
      </td>
    )
}

export default RemoveItem;