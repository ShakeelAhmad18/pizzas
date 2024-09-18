import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImSearch } from "react-icons/im";

const SearchOrder = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query) return;
        navigate(`/trackorder/${query}`);
        setQuery('');
    };

    return (
        <form onSubmit={handleSubmit} className='relative flex items-center justify-center'>
            <div className="relative w-full max-w-xs">
                <input 
                    type="text" 
                    placeholder="Enter Order Number" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    className="input input-bordered text-gray-900 w-full hover:bg-green-200 h-8 pr-10" 
                />
                <button type="submit" className='absolute inset-y-0 right-0 flex items-center pr-3 text-slate-800 bg-green-400 hover:bg-green-500 py-1 px-3 rounded'>
                    <ImSearch />
                </button>
            </div>
        </form>
    );
};

export default SearchOrder;
