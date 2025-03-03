import React from 'react';
import ProductList from './ProductList';  // Importa el componente 

const App = () => {
return(
    <div className="App">
        <h1>Tienda de Productos</h1>
        <ProductList />  {/* Mostrar la lista de productos */}
    </div>
);

}

export default App;

