import { Suspense } from 'react';
import { NavLink, Outlet } from "react-router-dom";

import Logotype from 'components/Logotype';

import css from './Layout.module.scss';

const Layout = () => {
    return (
        <>
            <header className={css.header}>
                <NavLink to='/'>
                    <Logotype />
                </NavLink>
            </header>
            <main>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};

export default Layout;