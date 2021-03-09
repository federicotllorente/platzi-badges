import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import twitterLogo from '../img/twitter.svg';
import BadgesListSkeleton from './BadgesListSkeleton';
import Gravatar from './Gravatar';
import FilterBadges from './FilterBadges';

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

function BadgesList(props) {
    const { query, setQuery, filteredBadges } = useFilterBadges(props.listData);
    if (props.isLoading) {
        // The 'quantity' prop is how many skeleton items are shown when the app is fetching the data
        return (
            <BadgesListSkeleton quantity="3" />
        );
    }
    if (filteredBadges && filteredBadges.length === 0) {
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
    const reverseListData = filteredBadges && filteredBadges.reverse();
    return (
        <div className="BadgesList">
            <FilterBadges value={query} onChange={setQuery} />
            <ul>
                {reverseListData && reverseListData.map(el => {
                    return (
                        <li className="BadgesList__item" key={el.id}>
                            <Gravatar className="BadgesList__item__avatar" email={el.email} alt={`${el.fname} ${el.lname}`} />
                            <div className="BadgesList__item__content">
                                <h2><Link className="AnchorWithoutStyles" to={`badges/${el.id}`}>{el.fname} {el.lname}</Link></h2>
                                {el.twitter && (
                                    <p>
                                        <img src={twitterLogo} alt="Twitter Logo" />
                                        <a href={`https://www.twitter.com/${el.twitter}/`}>@{el.twitter}</a>
                                    </p>
                                )}
                                <h3>{el.jtitle}</h3>
                            </div>
                            <div className="BadgesList__item__buttons">
                                <Link to={`badges/${el.id}/edit`}>Edit</Link>
                                <Link to={`badges/${el.id}/delete`}>Delete</Link>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default BadgesList;