import React, { useState, useEffect, useMemo } from 'react';
import { Card, Rating } from 'semantic-ui-react';
import ModalProdutos from '../ModalProdutos/ModalProdutos'
import Pesquisa from '../Pesquisa/Pesquisa'
import Titulo from '../Titulo/Titulo';
import ApiReturnAllProducts from '../../api/ApiReturner';
import { useTranslation } from 'react-i18next'

import '../../styles/components.css'

function Catalogo() {
  const [data, setData] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [productItem, setProductItem] = useState("")
  const [backgroundPointerEvents, setbackgroundPointerEvents] = useState("all")
  const [searchValue, setSearchValue] = useState('')
  const [sortValue, setSortValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')
  const { t } = useTranslation()


  useEffect(() => {
    async function fetchData(){
      try{
        const response = await ApiReturnAllProducts()
        setData(response)
      }
      catch(e){
        console.log(e);
      }
      
    }
    fetchData()
  }, [])

  const filteredData = useMemo(()=>{
    let result = data.filter((item)=>t(item.title).toLowerCase().includes(searchValue.toLowerCase()))
    if(categoryValue!=='')
      result=result.filter((item)=> item.category===categoryValue)
    switch(sortValue){
      case "1":
        result = [...result].sort((a, b) => {
          return t(a.title).localeCompare(t(b.title));
        })
        break
      case "2":
        result = [...result].sort((a, b) => {
          return t(b.title).localeCompare(t(a.title));
        })
        break
      case "3":
        result = [...result].sort((a, b) => {
          return a.price-b.price;
        })
        break
      case "4":
        result = [...result].sort((a, b) => {
          return b.price-a.price;
        });
        break
      default:
    }

    return result;
  }, [data, searchValue, categoryValue, sortValue, t])


  function abrirModal(event, item) {
    setProductItem(item)
    setbackgroundPointerEvents("none")
    setIsOpen(true)
  }

  function handleclick(event, type) {
    setProductItem('')
    setbackgroundPointerEvents("all")
    setIsOpen(false)
  }

  function handleChange(value, type){
     switch (type) {
       case 'search':
         setSearchValue(value)
         break
       case 'filter':
         setCategoryValue(value)
         break
       case 'sort':
         setSortValue(value)
         break
       default:
     }
  };

  return (
    <div>
      <Pesquisa handleChange={handleChange}/>
      <Titulo title="Products"/>
      <div style={{ pointerEvents: backgroundPointerEvents }} className='app-catalogo'>
        {
          data
            ?
            filteredData.map((item, index) => (
              <Card className='app-card' key={index} onClick={(e) => abrirModal(e, item)}  >
                <div className='app-card-image-content'>
                  <img className='app-card-image' src={item.image} alt={item.title}></img>
                </div>
                <div className='app-card-infos'>
                  <p className='app-card-title'>{t(item.title)}</p>  
                  <div className='app-card-category'>
                    <p className='app-card-category-text'>{t(item.category)}</p>
                  </div>
                  <Rating className='app-card-rating-stars' disabled  rating={item.rating.rate} maxRating={5} />
                  <p className='app-card-rate'>{item.rating.rate.toFixed(1)}</p>
                  <p className='app-card-count'>{item.rating.count} {t('assessments')}</p>
                </div>
                <p className='app-card-price'>$ {item.price.toFixed(2)}</p>
              </Card>
            ))
            :
            <>
            </>
        }
      </div>
      <ModalProdutos open={isOpen} item={productItem} handleclick={handleclick} />
    </div>
  );
}

export default Catalogo