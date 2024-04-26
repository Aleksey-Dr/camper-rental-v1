import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader';
import CamperCard from 'components/CamperCard';

import { fetchCampers } from '../../redux/operations';
import { selectInitial, selectCampers, selectFilter } from '../../redux/selectors';

import css from './MainContent.module.scss';

const MainContent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    const filter = useSelector(selectFilter);
    const campers = useSelector(selectCampers);
    const { isLoading, error } = useSelector(selectInitial);

    const normalizedFilter = filter.toLowerCase();
    const filterCampers = campers.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
        <div className={css.content}>
            {isLoading && <Loader />}
            {error && <p><b>Error: </b>{error}</p>}
            <ul className={css['content-list']}>
                {filterCampers.map(camper => 
                    <CamperCard
                        key={camper._id}
                        img={camper.gallery[0]}
                        title={camper.name}
                    />
                )}
            </ul>
        </div>
    );
};

export default MainContent;