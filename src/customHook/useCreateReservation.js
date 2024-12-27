import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useCreateReservation = () => {
  const [loading, setIsLoading] = useState(false);

  const createReservation = async ({
    tableId,
    bookingDate,
    bookingTime,
    phone,
    totalPeople,
    reservationType,
    message,
    orderNo
  }) => {
    try {
      setIsLoading(true);

      const res = await axios.post(
        `http://localhost:8000/api/tablereservation/createreservation`,
        {
          tableId,
          bookingDate,
          bookingTime,
          phone,
          totalPeople,
          reservationType,
          message,
          orderNo,
        },
        {
          withCredentials: true,
        }
      );

      const data = res.data;
      toast.success(data.message);
      
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    loading,
    createReservation,
  };
};

export default useCreateReservation;