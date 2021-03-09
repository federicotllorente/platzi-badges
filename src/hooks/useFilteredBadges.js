import { useState, useMemo } from 'react';

function useFilterBadges(listData) {
    const [query, setQuery] = useState('');
    const [filteredBadges, setFilteredBadges] = useState(listData);
    useMemo(() => {
        const result = listData && listData.filter(el => {
            return `${el.fname} ${el.lname}`.toLowerCase().includes(query.toLowerCase());
        })
        setFilteredBadges(result);
    }, [listData, query]);
    return { query, setQuery, filteredBadges };
}

export default useFilterBadges;