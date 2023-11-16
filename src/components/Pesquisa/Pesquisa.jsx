import React, { useState, useEffect } from 'react'
import '../../styles/components.css'
import { useTranslation } from 'react-i18next'
import { Icon } from 'semantic-ui-react';
import { ApiReturnAllCategories } from '../../api/ApiReturner';

const Pesquisa = props => {
    const { t } = useTranslation()
    const{handleChange} = props;
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        async function fetchData(){
            try{
                const response = await ApiReturnAllCategories()
                setCategoryList(response)
            }
            catch(e){
                console.log(e);
            }
        }
        fetchData()
      }, [])


    return (
        <div className='app-pesquisa-produtos'>
            <div className='app-pesquisa-titulo'>
                <p className='app-pesquisa-search'>{t('Search')}</p>
                <input className='app-pesquisa-input' type='text' onChange={(e) => handleChange(e.target.value, 'search')} ></input>
                <Icon name="search" color='blue'></Icon>
            </div>
            <select className='app-pesquisa-category' onChange={(e) => handleChange(e.target.value, 'filter')}>
                <option value="">{t('Category')}</option>
                {
                    categoryList ?
                    categoryList.map((item, index) => (
                        <option key={index} value={item}>{t(item)}</option>
                    )) : <></>
                }
            </select>
            <select className='app-pesquisa-dropdown' onChange={(e) => handleChange(e.target.value, 'sort')}>
                <option value="">{t('SortBy')}</option>
                <option value="1">{t('Title')} (A - Z)</option>
                <option value="2">{t('Title')} (Z - A)</option>
                <option value="3">{t('Price')} ({ t('Ascending')})</option>
                <option value="4">{t('Price')} ({ t('Descending')})</option>
            </select>
        </div>
    );
}

export default Pesquisa;