import React from 'react'

export default function Larg_card({link , text , paragraph}) {
return (
    <div className="card_content text-center pt-3">
        <img className="w-12 m-auto mb-5" src={link} alt=""/>
        <h6>{text}</h6>
        <p className="text-black-50">{paragraph}</p></div>
)
}
