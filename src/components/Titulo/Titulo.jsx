import React from 'react'
import '../../styles/components.css'
import { useTranslation } from 'react-i18next'

const Titulo = props => {
    const { t } = useTranslation()
    const {title} = props;
    return (
    <div className='app-titulo-produtos'>
        <div className='app-titulo-produtos-principal'>
            <h1>{t(title)}</h1>
        </div>
    </div>
    )
}
export default Titulo;