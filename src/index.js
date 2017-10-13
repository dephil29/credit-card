import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var cardInfo = {
  name: "Guy Face",
  exp: "01/20",
  number: "1234 5678 9012 3456",
  bank: "Bank of Bankiness"
}

function Name({name}){
  return <div className="name">{name}</div>
}

function Exp({exp}){
  return <div className="exp">{exp}</div>
}

function Number({number}){
  return <div className="number">{number}</div>
}

function Bank({bank}){
  return <div className="bank">{bank}</div>
}

function CreditCard({front}){
  return (
    <div className="cc">
      <div className="top">
        <Bank bank={front.bank}/>
      </div>
      <div className="bottom">
        <Number number={front.number} />
        <Exp exp={front.exp} />
        <Name name={front.name} />
      </div>
    </div>
  )
}
ReactDOM.render(<CreditCard front={cardInfo}/>, document.getElementById('root'));
