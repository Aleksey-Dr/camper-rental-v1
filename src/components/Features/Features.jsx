import EquipmentList from 'components/EquipmentList';

import css from './Features.module.scss';

const Features = ({ equipment }) => {
    return (
        <div className={css.features}>
            <div className={css['features-information']}>
                <EquipmentList items={equipment} />
            </div>
        </div>
    );
};

export default Features;