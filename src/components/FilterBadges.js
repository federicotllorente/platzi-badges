import React from 'react';

function FilterBadges(props) {
    return (
        <input
            className="BadgesList__search"
            type="text"
            name="search"
            id="search"
            placeholder="Search badges"
            value={props.value}
            onChange={e => {
                props.onChange(e.target.value)
            }}
        />
    );
}

export default FilterBadges;