import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader';
import CamperCard from 'components/CamperCard';

import { fetchCampers } from '../../redux/operations';
import { selectInitial, selectCampers, selectFilter } from '../../redux/selectors';

import css from './MainContent.module.scss';

const MainContent = () => {
    const [noOfElement, setNoOfElement] = useState(4);
    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    const filter = useSelector(selectFilter);
    const campers = useSelector(selectCampers);
    const { isLoading, error } = useSelector(selectInitial);

    const normalizedFilter = filter.toLowerCase();
    const filterCampers = campers.filter(camper =>
        camper.name.toLowerCase().includes(normalizedFilter),
    );

    const cardsOnPage = filterCampers.slice(0, noOfElement);

    return (
        <div className={css.content}>
            {isLoading && <Loader />}
            {error && <p><b>Error: </b>{error}</p>}
            <ul className={css['content-list']}>
                {cardsOnPage.map(camper =>
                    <CamperCard
                        key={camper._id}
                        img={camper.gallery[0]}
                        title={camper.name}
                        price={camper.price}
                        rating={camper.rating}
                        reviews={camper.reviews.length}
                        description={camper.description}
                        details={camper.details}
                        id={camper._id}
                    />
                )}
            </ul>
            {noOfElement <= filterCampers.length &&
                <button
                    onClick={() => loadMore()}
                    className={css['content-btn']}
                >
                    Load more
                </button>
            }
        </div>
    );
};

export default MainContent;