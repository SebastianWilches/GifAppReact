import { useState } from "react";
import { InputAddCategoria } from '../utils/InputAddCategoria'

export const GifReactApp = () => {

    const [categorias, setCategorias] = useState(['Perros', 'Gatos']);

    const onAddCategory = (newCategory) => {
        setCategorias([...categorias, newCategory]);
    }

    return (
        <div className="principal-container">
            <h1>Gif React App</h1>
            <InputAddCategoria onNewCategory={(category) => onAddCategory(category)} /> {/* Evento hijo-padre */}


            {categorias.map((categoria, index) => {
                return <li key={index}>{categoria}</li>
            })}

        </div>
    )
}
