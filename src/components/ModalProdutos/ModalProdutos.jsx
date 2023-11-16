import React, { useState } from "react";
import {Rating, Icon } from 'semantic-ui-react';

import '../../styles/components.css'
import { ApiReturnSingleProduct } from "../../api/ApiReturner";
import { useTranslation } from 'react-i18next'

const Modal = props => {
    const { t } = useTranslation()
    const { open, item, handleclick} = props;
    const [product, setProduct] = useState('') 

    async function fetchData(id){
        const response = await ApiReturnSingleProduct(id)
        setProduct(response)
    }

    if(item)
        fetchData(item.id)

    const {title, description, rating, category, price, image} = product;
    const {count, rate} = rating?rating:[];

    let display = open ? 'flex' : 'none'

    return (
        <div className="app-card-modal-background" style={{ display: display }}>
            <div className="app-card-modal">
                <Icon size="large" color="grey" className="app-card-modal-close-icon" onClick={(e) => handleclick(e, 'fechar')} name='close' />
                <div style={{ display: 'flex' }}>
                    <div className="app-card-modal-image-background">
                        <div className="app-card-modal-image-content">
                            <img src={image} alt={title} className="app-card-modal-image"></img>
                        </div>
                    </div>
                    <div className="app-card-modal-infos">
                        <div className="app-card-modal-infos-firts">
                            <p className='app-card-modal-title'>{title}</p>
                            <div className="app-card-modal-rating">
                                <Rating className="app-modal-rating-stars" disabled rating={rate} maxRating={5} />
                                <p className='app-card-modal-rate'>{rate ? rate.toFixed(1) : ""}</p>
                            </div>
                            <p className='app-card-modal-count'>{count} {t('assessments')}</p>
                            <p className='app-card-modal-price'>$ {price ? price.toFixed(2) : ""}</p>
                        </div>
                        <p className="app-card-modal-description">{t(description)}</p>
                        <div className='app-card-modal-category'>
                            <p className='app-card-modal-category-text'>{t(category)}</p>
                        </div>
                        <button className="app-card-modal-buy-button">{t('Buy Now')}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal;