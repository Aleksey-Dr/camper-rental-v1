import Features from 'components/Features';

import icons from 'images/icons.svg';

import css from './ModalWindow.module.scss';
import { NavLink } from 'react-router-dom';

const ModalWindow = ({
    isOpen,
    onClick,
    title,
    rating,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    reviews,
    price,
    img,
    description,
    equipment,
}) => {
    return (
        <div
            className={
                isOpen
                    ? `${css['modal-backdrop']}`
                    : `${css['modal-backdrop']} ${css['is-hidden']}`
            }
        >
            <div className={css['modal-window']}>
                <div className={css['card-header']}>
                    <h2 className={css['card-title']}>{title}</h2>
                    <button onClick={onClick} className={css['modal-btn']}>
                        <svg
                            width="32"
                            height="32"
                            className={css['modal-icon']}
                        >
                            <use href={`${icons}#icon-cross`}></use>
                        </svg>
                    </button>
                </div>
                <span className={css['card-reviews']}>
                    <svg
                        width="16"
                        height="16"
                        className={css['card-icon-star']}
                    >
                        <use href={`${icons}#icon-star`}></use>
                    </svg>
                    {rating}({reviews} Reviews)
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
                <span className={css['card-price']}>&#8364;{price}</span>
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
                    <p className={css['card-description']}>{description}</p>
                    <nav className={css.navigation}>
                        <ul className={css['navigation-list']}>
                            <li>
                                <NavLink
                                    className={`${css['navigation-link']} ${css.current}`}
                                >
                                    Features
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={css['navigation-link']}>
                                    Reviews
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Features
                        form={form}
                        length={length}
                        width={width}
                        height={height}
                        tank={tank}
                        consumption={consumption}
                        equipment={equipment}
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
