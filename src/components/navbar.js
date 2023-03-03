import React from 'react';


const Navbar = ({handleSearch}) => {

    return (
        <div className='navbar'>
            <h1>Elans Grinfogels Cook Book</h1>
            <ul>
                <li className = 'createButton'>
                <a href='/'>Home</a>
                </li>
                <li className = 'createButton'>
                <a href = '/recipeform/new'>Create</a>
                </li>
                <h2>
                    Search
                </h2>
                <li>
                    <input type = "text" onChange = {handleSearch} />
                </li>
            </ul>
        </div>
    );
};

export default Navbar;