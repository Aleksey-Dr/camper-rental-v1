import Button from 'components/Button';

import css from './CamperCard.module.scss';

const CamperCard = ({ title }) => {
    return (
        <div className={css.card}>
            <img src="" alt="" className={css['card-img']} />
            <h2 className={css['card-title']}>{ title }</h2>
            <span className={css['card-reviews']}></span>
            <span className={css['card-location']}></span>
            <p className={css['card-description']}></p>
            <ul className={css['card-equipment']}></ul>
            <Button title={'Show more'}/>
        </div>
    );
};

export default CamperCard;