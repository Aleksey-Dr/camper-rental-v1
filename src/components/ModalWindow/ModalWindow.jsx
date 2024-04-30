import { useEffect } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCampers } from '../../redux/operations';
import { selectCampers } from '../../redux/selectors';

import icons from 'images/icons.svg';

import css from './ModalWindow.module.scss';

const ModalWindow = () => {
    const {camperId} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    const campers = useSelector(selectCampers);

    const camperInfo = campers.find(camper => camper._id === camperId);
    const img = camperInfo.gallery;

    return (
        <div
            className={css['modal-backdrop']}
        >
            <div className={css['modal-window']}>
                <div className={css['card-header']}>
                    <h2 className={css['card-title']}>{camperInfo.name}</h2>
                    <Link
                        to='/catalog'
                        className={css['modal-btn']}
                    >
                        <svg
                            width="32"
                            height="32"
                            className={css['modal-icon']}
                        >
                            <use href={`${icons}#icon-cross`}></use>
                        </svg>
                    </Link>
                </div>
                <span className={css['card-reviews']}>
                    <svg
                        width="16"
                        height="16"
                        className={css['card-icon-star']}
                    >
                        <use href={`${icons}#icon-star`}></use>
                    </svg>
                    {camperInfo.rating}({camperInfo.reviews.length} Reviews)
                </span>
                <span className={css['card-location']}>
                    <svg
                        width="16"
                        height="16"
                        className={css['card-icon-location']}
                    >
                        <use href={`${icons}#icon-map-pin`}></use>
                    </svg>
                    Kyiv, Ukraine
                </span>
                <span className={css['card-price']}>&#8364;{camperInfo.price}</span>
                <div className={css['modal-window-scroll']}>
                    <ul className={css['card-gallery']}>
                        <li>
                            <img
                                src={img[0]}
                                alt="Camper"
                                className={css['card-img']}
                            />
                        </li>
                        <li>
                            <img
                                src={img[1]}
                                alt="Camper"
                                className={css['card-img']}
                            />
                        </li>
                        <li>
                            <img
                                src={img[2]}
                                alt="Camper"
                                className={css['card-img']}
                            />
                        </li>
                    </ul>
                    <p className={css['card-description']}>{camperInfo.description}</p>
                    <nav className={css.navigation}>
                        <ul className={css['navigation-list']}>
                            <li>
                                <NavLink
                                    to='features'
                                    className={css['navigation-link']}
                                >
                                    Features
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='reviews'
                                    className={css['navigation-link']}
                                >
                                    Reviews
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
