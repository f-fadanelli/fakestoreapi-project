import React from 'react'
import '../../styles/components.css'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()

    return(
    <footer className="app-footer">
        <span className="app-footer-message">
        © 2022 {t('All rights reserved.')} Reliance Retail Ltd. 
        </span>
    </footer>
    )
}

export default Footer