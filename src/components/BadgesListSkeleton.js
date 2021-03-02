import React from 'react';
import Skeleton from 'react-loading-skeleton';

function BadgesListSkeleton(props) {
    const skeletonQuantity = props.quantity;
    let skeletonItems = [];
    for (let n = 0; n < skeletonQuantity; n++) {
        skeletonItems.push(
            <li className="BadgesList__item" key={n}>
                <Skeleton className="BadgesList__item__avatar" circle={true} height={80} width={80} />
                <div className="BadgesList__item__content">
                    <h2>
                        <Skeleton width={250} />
                    </h2>
                    <p>
                        <Skeleton width={250} />
                    </p>
                    <h3>
                        <Skeleton width={250} />
                    </h3>
                </div>
            </li>
        );
    }
    return (
        <div className="BadgesList">
            <ul>
                {skeletonItems}
            </ul>
        </div>
    );
}

export default BadgesListSkeleton;