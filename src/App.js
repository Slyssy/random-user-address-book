// % Import Statements .........................................................
// * Destructuring the react library to access the useState and useEffect react
// *  hooks.
import React, { useEffect, useState } from 'react';
// * Importing the css file
import './App.css';
// * Importing the Character component
import Character from './components/Contact';
// % Exporting App() function to be used in index.js ...........................
export default function App() {
  // * Use state is an array of 2 elements: The 1st item in the array is
  // * whatever you pass into the useState function. This item is the initial
  // * state of useState().
  // console.log(useState());
  // % Declaring States.........................................................
  // * Destructuring useState. Setting the initial state of "contacts" to
  // * be an empty array. The updater function variable for "contacts" is
  // * "setContacts".
  const [contacts, setContacts] = useState([]);
  // console.log('Current state of the contacts array:', contacts);
  // % Setting "useEffect"......................................................
  // * The "useEffect()" function accepts to arguments. First is the function
  // * itself, and the second is a dependency array. (The second argument is not
  // *  necessary. You can not include it if it's not needed.)

  // $ Function to fetch the data.
  const fetchData = () => {
    fetch('https://randomuser.me/api?results=25')
      .then((res) => res.json())
      .then((data) => {
        // * Calling the setContacts function from "useState()" to update the
        // * "contacts" array/state with "data.results".
        setContacts(data.results);
      });
  };
  // $ We are fetching our data by calling the "fetchData()" function with the
  // $ first argument of the useEffect method.
  useEffect(() => {
    fetchData();
  }, []);

  // $ Using useEffect to track the state of contacts
  useEffect(() => {
    console.log('UPDATED', contacts);
  }, [contacts]);

  return (
    <div className='App'>
      <h1>Stevie's Address Book of Strangers</h1>
      <ul className='contacts__container'>
        {contacts.map((contact) => {
          // * Setting the contact data to the "data" variable to be used in the
          // * Character component.
          return <Character data={contact} />;
        })}
      </ul>
    </div>
  );
}
