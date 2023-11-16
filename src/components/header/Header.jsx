import React from 'react'
import Menu from '../Menu/Menu'
import '../../styles/components.css'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t } = useTranslation()
    return(
    <header className="app-header">
        <h1 className='app-brand'>{t('Brand')}</h1>  
        <Menu/>
    </header>
)
    
}

export default Header