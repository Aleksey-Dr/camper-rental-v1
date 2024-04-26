import Button from 'components/Button';

import icons from 'images/icons.svg';
import css from './CamperCard.module.scss';

const CamperCard = ({ img, title }) => {
    return (
        <div className={css.card}>
            <img src={img} alt='Camper' className={css['card-img']} />
            <div className={css['card-information']}>
                <h2 className={css['card-title']}>{ title }</h2>
                <span className={css['card-reviews']}>
                    <svg width='16' height='16' className={css['card-icon-star']}>
                        <use href={`${icons}#icon-star`}></use>
                    </svg>
                    4.4(2 Reviews)
                </span>
                <span className={css['card-location']}>
                    <svg width='16' height='16' className={css['card-icon-location']}>
                        <use href={`${icons}#icon-map-pin`}></use>
                    </svg>
                    Kyiv, Ukraine
                </span>
                <p className={css['card-description']}></p>
                <ul className={css['card-equipment']}></ul>
                <Button title={'Show more'}/>
            </div>
        </div>
    );
};

export default CamperCard;