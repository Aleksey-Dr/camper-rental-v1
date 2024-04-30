// import css from './Reviews.module.scss';

import { useParams } from "react-router-dom";

const Reviews = () => {
    const { camperId } = useParams();
    
    return (
        <h2>{`ID - ${camperId}`}</h2>
    );
};

export default Reviews;