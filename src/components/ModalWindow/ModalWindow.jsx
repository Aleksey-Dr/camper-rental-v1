import icons from 'images/icons.svg';

import css from './ModalWindow.module.scss';

const ModalWindow = ({
    isOpen,
    onClick,
    title,
    rating,
    reviews,
    price,
    img,
    description
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
                <ul className={css['card-gallery']}>
                    <li>
                        <img src={img[0]} alt="Camper" className={css['card-img']} />
                    </li>
                    <li>
                        <img src={img[1]} alt="Camper" className={css['card-img']} />
                    </li>
                    <li>
                        <img src={img[2]} alt="Camper" className={css['card-img']} />
                    </li>
                </ul>
                <p className={css['card-description']}>{description}</p>
            </div>
        </div>
    );
};

export default ModalWindow;
