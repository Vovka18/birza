import React from 'react'
import { ReactComponent as Close } from '../../../assets/icons/header-close-block.svg'
import { ReactComponent as Search } from '../../../assets/icons/search.svg'
import './SearchInput.css'

const SearchInput = ({closeFun}) => {
  return (
    <div className='HeaderSearchInput'>
        <div className="searchBlock">
            <div className="searchIco">
                <Search/>
            </div>
            <input type="text" placeholder='Поиск монет' />
        </div>
        <Close onClick={()=>{closeFun(false)}}/>
    </div>
  )
}

export default SearchInput