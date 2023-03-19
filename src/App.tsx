import { useEffect } from 'react'
import { Header } from '~/components'

import UserMenuStore from './stores/userMenu'

import styles from './app.module.scss'

function App() {
    useEffect(() => {
        UserMenuStore.getMenuData()
    }, [])

    return (
        <div className={styles.app}>
            <Header />
        </div>
    )
}

export default App
