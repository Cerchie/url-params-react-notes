import React from 'react';
import {Link} from 'react-router-dom';

const defaultProps = 
 [
      {
        name: "Whiskey",
        age: 5,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  


function DogList(){
   
    return (
        <ul>
            {defaultProps.map(dog => (
                <li key={dog.name}>
                    <Link to={`/dog/${dog.name}`}>Show me the {dog.name}! </Link>
                    <Link to="/blargh">Broken Link</Link>
                </li>
            ))}
        </ul>
    )
}

export default DogList;