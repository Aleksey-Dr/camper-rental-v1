import icons from 'images/icons.svg';

import css from './FormLocation.module.scss';

const FormLocation = () => {
    return (
        <form className={css.form}>
            <label htmlFor="location" className={css.label}>
                Location
            </label>
            <div className={css['form-input-wrapper']}>
                <input
                    type="text"
                    id="location"
                    placeholder='Kyiv, Ukraine'
                    className={css['form-input']}
                />
                <svg width="20" height="20" className={css['form-icon']}>
                    <use href={`${icons}#icon-map-pin`}></use>
                </svg>
            </div>
        </form>
    );
};

export default FormLocation;
