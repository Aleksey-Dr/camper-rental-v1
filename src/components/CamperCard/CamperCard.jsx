import { useState } from 'react';

import Button from 'components/Button';

import icons from 'images/icons.svg';
import css from './CamperCard.module.scss';

const CamperCard = ({ img, title, price, rating, reviews, description, details }) => {
    const equipment = Object.keys(details);

    const [noOfElement, setnoOfElement] = useState(6);
    const itemsInCard = equipment.slice(0, noOfElement);

    return (
        <div className={css.card}>
            <img src={img} alt='Camper' className={css['card-img']} />
            <div className={css['card-information']}>
                <div className={css['card-header']}>
                    <h2 className={css['card-title']}>{ title }</h2>
                    <span className={css['card-price']}>&#8364;{ price }</span>
                </div>
                <span className={css['card-reviews']}>
                    <svg width='16' height='16' className={css['card-icon-star']}>
                        <use href={`${icons}#icon-star`}></use>
                    </svg>
                    { rating }({ reviews } Reviews)
                </span>
                <span className={css['card-location']}>
                    <svg width='16' height='16' className={css['card-icon-location']}>
                        <use href={`${icons}#icon-map-pin`}></use>
                    </svg>
                    Kyiv, Ukraine
                </span>
                <p className={css['card-description']}>{ description }</p>
                <ul className={css['card-equipment']}>
                    {itemsInCard.map(item =>
                        <li key={item} className={css['card-equipment-item']}>
                            <svg width='20' height='20'>
                                <use></use>
                            </svg>
                            <span>{item}</span>
                        </li>
                    )}
                </ul>
                <Button title={'Show more'}/>
            </div>
        </div>
    );
};

export default CamperCard;