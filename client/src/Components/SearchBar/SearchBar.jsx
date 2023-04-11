
import { useDispatch, useSelector } from 'react-redux';
import { updateInputValue } from "../../redux/actions";
import style from "../SearchBar/SearchBar.module.css"
import { useState } from 'react';

const SearchBar = () => {

    const dispatch = useDispatch();

    const inputValue = useSelector(state => state.inputValue)
    
    const handleChange = (event) => {
        dispatch(updateInputValue(event.target.value));
    };

    return (
        <input type='text' value={inputValue} onChange={handleChange} className={style.input} placeholder='Search...'/>
    )
}

export default SearchBar;