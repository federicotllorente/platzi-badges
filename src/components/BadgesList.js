import React from 'react';
import { Link } from 'react-router-dom';

import BadgesListSkeleton from './BadgesListSkeleton';
import BadgesListItem from './BadgesListItem';
import FilterBadges from './FilterBadges';
import useFilterBadges from '../hooks/useFilteredBadges';

function BadgesList(props) {
    const { query, setQuery, filteredBadges } = useFilterBadges(props.listData);
    if (props.isLoading) {
        // The 'quantity' prop is how many skeleton items are shown when the app is fetching the data
        return (
            <BadgesListSkeleton quantity="3" />
        );
    }
    if (filteredBadges?.length === 0) {
        return (
            <div className="BadgesList">
                <FilterBadges value={query} onChange={setQuery} />
                <div className="Homepage__content">
                    <h1>No badges were found</h1>
                    <p>Do you want to create a new one? Let's try out! 😄</p>
                    <Link to="/badges/new">Create a New Badge</Link>
                </div>
            </div>
        );
    }
    const reverseListData = filteredBadges?.reverse();
    return (
        <div className="BadgesList">
            <FilterBadges value={query} onChange={setQuery} />
            <ul>
                {reverseListData?.map(el => {
                    return (
                        <BadgesListItem data={el} key={el.id} />
                    );
                })}
            </ul>
        </div>
    );
}

export default BadgesList;