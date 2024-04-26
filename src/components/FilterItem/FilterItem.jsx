import css from './FilterItem.module.scss';

const FilterItem = ({ width, height, href, description }) => {
    return (
        <li className={css.item}>
            <input
                type="checkbox"
                id={description}
                className={
                    `${css['item-checkbox']}
                    ${css['visually-hidden']}`
                }
            />
            <label htmlFor={description} className={css['item-label']}>
                <span className={css['item-wrapper']}>
                    <svg width={width} height={height} className={css['item-icon']}>
                        <use href={href}></use>
                    </svg>
                    <div>{description}</div>
                </span>
            </label>
        </li>
    );
}

export default FilterItem;