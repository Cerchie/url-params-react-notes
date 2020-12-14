import React from 'react';
import {Link} from 'react-router-dom';

const defaultFoods = ['burrito', 'salad', 'sushi', 'pasta']

function FoodNav({foods =defaultFoods}){
    return (
        <ul>
            {foods.map(food => (
                <li key={food}>
                    <Link to={`/food/${food}`}>Show me the {food}! </Link>
                    <Link to="/blargh">Broken Link</Link>
                </li>
            ))}
        </ul>
    )
}

export default FoodNav;