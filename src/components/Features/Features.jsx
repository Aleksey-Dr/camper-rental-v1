import EquipmentList from 'components/EquipmentList';

import css from './Features.module.scss';
import FormBookNow from 'components/FormBookNow';

const Features = ({ equipment, form, length, width, height, tank, consumption }) => {
    return (
        <div className={css.features}>
            <div className={css['features-information']}>
                <EquipmentList items={equipment} />
                <div className={css['features-details']}>
                    <h3 className={css['features-details-title']}>Vehicle details</h3>
                    <ul className={css['features-details-list']}>
                        <li className={css['features-details-item']}>
                            Form
                            <span className={css['features-details-value']}>{form}</span>
                        </li>
                        <li className={css['features-details-item']}>
                            Length
                            <span className={css['features-details-value']}>{length}</span>
                        </li>
                        <li className={css['features-details-item']}>
                            Width
                            <span className={css['features-details-value']}>{width}</span>
                        </li>
                        <li className={css['features-details-item']}>
                            Height
                            <span className={css['features-details-value']}>{height}</span>
                        </li>
                        <li className={css['features-details-item']}>
                            Tank
                            <span className={css['features-details-value']}>{tank}</span>
                        </li>
                        <li className={css['features-details-item']}>
                            Consumption
                            <span className={css['features-details-value']}>{consumption}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={css['features-form']}>
                <FormBookNow />
            </div>
        </div>
    );
};

export default Features;