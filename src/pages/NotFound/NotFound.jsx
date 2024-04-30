import notFound from 'images/404.svg';

const NotFound = () => {
    return (
        <div>
            <svg width='750' height='500'>
                <use href={notFound}></use>
            </svg>
            <p>404</p>
        </div>
    );
};

export default NotFound;