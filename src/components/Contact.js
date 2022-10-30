import React, { useState, useEffect } from 'react';

export default function Character(props) {
  // % Declaring States.........................................................
  // * Destructuring useState. Setting the initial state of "isExpanded" to
  // * false. The updater function variable for "isExpanded" is "setIsExpanded".
  const [isExpanded, setIsExpanded] = useState(false);

  // % Using useEffect to see when "isExpanded" changes state.
  useEffect(() => {
    console.log('UPDATED', isExpanded);
  }, [isExpanded]);
  // % Event Handler Functions .................................................
  // * handleShowDetails is a function that will update the state of
  // * "isExpanded" to be the opposite of whatever "isExpanded" is currently set
  // * to.
  const handleShowDetails = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <li className='contact' key={props.data.login.uuid}>
      <figure>
        <figcaption>{`${props.data.name.first} ${props.data.name.last}`}</figcaption>
        <img
          src={props.data.picture.large}
          alt={`${props.data.name.first} ${props.data.name.last}`}
        />
      </figure>
      {isExpanded && (
        <>
          <p>
            <span className='row__header'>Email:</span>{' '}
            <a href={props.data.email}>{props.data.email}</a>
          </p>
          <p>
            <span className='row__header'>Mobile:</span> {props.data.cell}
          </p>
          <p>
            <span className='row__header'>Phone:</span> {props.data.phone}
          </p>

          <button onClick={handleShowDetails}>Hide Details</button>
        </>
      )}
      {!isExpanded && <button onClick={handleShowDetails}>Show Details</button>}
    </li>
  );
}
