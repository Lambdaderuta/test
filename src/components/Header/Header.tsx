import Logo from '~/assets/logo.svg'

import { Dropdown } from '~/components/Dropdown'

import UserMenuStore from '~/stores/userMenu'

import styles from './header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={Logo} className={styles.logo} alt="logo" />

            <ul className={styles.menu}>
                <li className={styles.menuItem}>Доска заказов</li>
                <li className={styles.menuItem}>Тарифы</li>
                <li className={styles.menuItem}>Контакты</li>
            </ul>

            <button className={styles.createOrderButton}>
                Разместить заказ
            </button>

            <div className={styles.dropdown}>
                <Dropdown menuStore={UserMenuStore} />
            </div>
        </div>
    )
}

export default Header
