import { useState } from 'react'


export const InputAddCategoria = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState([]);

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleAddSearch = (event) => {
        event.preventDefault();

        if (inputValue.trim().lenght < 1) return; //Evitar ingresar info vacia

        onNewCategory(inputValue.trim()); //Envio del hijo al padre
        setInputValue('');

    }

    return (
        <form onSubmit={handleAddSearch}>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChange} //El evento que reciba el input se lo vamos a pasar como callback a la funcion que declaramos antes
            />
        </form>
    )

}
