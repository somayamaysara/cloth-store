import React from 'react'

export default function Subscrip() {
    const [inputValue, setInputValue] = React.useState('');

return (
    <div className="container text-center py-5 mb-5">
    <h3 className=" font-bold text-black">Subscribe now & get 20% off</h3>
    <h6 className="text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam magni repudiandae quis libero asperiores tempore maxime doloribus velit odio?</h6>
    <div className="input-group mt-4 w-50 m-auto">
    <input type="text" class="form-control" placeholder="enter your email" aria-label="Username" aria-describedby="basic-addon1" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
    <button type="submit" className="btn btn-dark rounded-0 px-4 py-2  fw-medium">Subscribe</button>
    </div>
</div>
)
}
