import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import EquipmentList from 'components/EquipmentList';
import FormBookNow from 'components/FormBookNow';

import { fetchCampers } from "../../redux/operations";
import { selectCampers } from "../../redux/selectors";

import css from './Features.module.scss';

const Features = () => {
    const { camperId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    const campers = useSelector(selectCampers);

    const camperInfo = campers.find(camper => camper._id === camperId);
    const equipment = Object.keys(camperInfo.details);

    return (
        <div className={css.features}>
            <div className={css['features-information']}>
                <EquipmentList items={equipment} />
                <div className={css['features-details']}>
                    <h3 className={css['features-details-title']}>Vehicle details</h3>
                    <ul className={css['features-details-list']}>
                        <li className={css['features-details-item']}>
                            Form
                            <span className={css['features-details-value']}>{camperInfo.form}</span>
                        </li>
                        <li className={css['features-details-item']}>
                            Length
                            <span className={css['features-details-value']}>{camperInfo.length}</span>
                        </li>
                        <li className={css['features-details-item']}>
                            Width
                            <span className={css['features-details-value']}>{camperInfo.width}</span>
                        </li>
                        <li className={css['features-details-item']}>
                            Height
                            <span className={css['features-details-value']}>{camperInfo.height}</span>
                        </li>
                        <li className={css['features-details-item']}>
                            Tank
                            <span className={css['features-details-value']}>{camperInfo.tank}</span>
                        </li>
                        <li className={css['features-details-item']}>
                            Consumption
                            <span className={css['features-details-value']}>{camperInfo.consumption}</span>
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