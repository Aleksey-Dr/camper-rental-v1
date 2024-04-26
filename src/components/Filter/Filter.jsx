import Button from 'components/Button';
import FilterItem from 'components/FilterItem';

import filterEquipment from 'data/filterEquipment.json';
import filterType from 'data/filterType.json';

import icons from 'images/icons.svg';
import css from './Filter.module.scss';

const Filter = () => {
    return (
        <div className={css.filter}>
            <h2 className={css['filter-title']}>Filters</h2>
            <div className={css['filter-equipment']}>
                <h3 className={css['filter-subtitle']}>Vehicle equipment</h3>
                <ul className={css['filter-list']}>
                    {filterEquipment.map(item =>
                        <FilterItem
                            width={32}
                            height={32}
                            href={`${icons}${item.href}`}
                            description={item.description}
                        />
                    )}
                </ul>
            </div>
            <div className={css['filter-type']}>
            <h3 className={css.subtitle}>Vehicle type</h3>
                <ul className={css['filter-list']}>
                    {filterType.map(item =>
                        <FilterItem
                            width={40}
                            height={28}
                            href={`${icons}${item.href}`}
                            description={item.description}
                        />
                    )}
                </ul>
            </div>
            <Button title={'Search'} />
        </div>
    );
};

export default Filter;