import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImSearch } from "react-icons/im";

const SearchOrder = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query) return;
        navigate(`/dashboard/trackorder/${query}`);
        setQuery('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Order Number . . ." value={query} onChange={(e)=>setQuery(e.target.value)} />
          <button type="submit" className="common_btn">search</button>
       </form> 
    );
};

export default SearchOrder;
