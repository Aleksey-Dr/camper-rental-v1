import { useState } from 'react';

import Button from 'components/Button';
import ModalWindow from 'components/ModalWindow';

import icons from 'images/icons.svg';
import css from './CamperCard.module.scss';

const CamperCard = ({
    img,
    title,
    price,
    rating,
    reviews,
    description,
    details,
}) => {

    const equipment = Object.keys(details);

    const [noOfElement, setNoOfElement] = useState(6);
    const [currentFirstElement, setCurrentFirst] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const showOthers = () => {
        setCurrentFirst(currentFirstElement + 6);
        setNoOfElement(noOfElement + noOfElement);
    };

    const toggleModalWindow = () => {
        setIsOpen(!isOpen);
    };

    const itemsInCard = equipment.slice(currentFirstElement, noOfElement);

    return (
        <>
            <div className={css.card}>
                <img src={img[0]} alt="Camper" className={css['card-img']} />
                <div className={css['card-information']}>
                    <div className={css['card-header']}>
                        <h2 className={css['card-title']}>{title}</h2>
                        <span className={css['card-price']}>&#8364;{price}</span>
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
                    <p className={css['card-description']}>{description}</p>
                    <div className={css['card-equipment']}>
                        <ul className={css['card-equipment-list']}>
                            {itemsInCard.map(item => (
                                <li
                                    key={item}
                                    className={css['card-equipment-item']}
                                >
                                    <svg width="20" height="20">
                                        <use></use>
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        {noOfElement <= equipment.length && (
                            <button
                                onClick={() => showOthers()}
                                className={css['card-equipment-btn']}
                            >
                                <svg width="20" height="20">
                                    <use href={`${icons}#icon-arrow-right`}></use>
                                </svg>
                            </button>
                        )}
                    </div>
                    <Button onClick={toggleModalWindow} title={'Show more'} />
                </div>
            </div>
            {isOpen &&
                <ModalWindow
                    onClick={toggleModalWindow}
                    isOpen={isOpen} 
                    title={title}
                    rating={rating}
                    reviews={reviews}
                    price={price}
                    img={img}
                    description={description}
                />
            }
        </>
    );
};

export default CamperCard;
