import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import Best_saller from './best_saller'
import { Card } from '../card' 
import Larg_card from './larg_card'
import Subscrip from './Subscrip'
import img1 from '../assets/image/p_img1-BTuXznJl.png'
export default function Home() {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=20")
        .then((res) => res.json())
        .then((resJson) => {
            setData(resJson);})
        .catch((err) => {
            console.log(err);
    });
    },[])
return (
    <div>
    <HeroSection/>
            <Best_saller type="latest"/>
            <div className="container">

            <div className=" row row-cols-2 row-cols-md-3 row-cols-xl-5 ">

           {data.slice(0, 10).map((item) => (
  <Card 
    key={item.id} 
    id={item.id}  // 👈 تأكدي من وجود هذا السطر تماماً وأن الحروف صغيرة
    text={item.title} 
    price={item.price} 
  />
))}
        </div>
            </div>
            <Best_saller type="Best"/>
            <div className="container">
            <div className=" row row-cols-2 row-cols-md-3 row-cols-xl-5 mb-5 ">
            {data.slice(0, 5).map((item) => (
  <Card 
    key={item.id} 
    id={item.id}  // 👈 تأكدي من وجود هذا السطر تماماً وأن الحروف صغيرة
    text={item.title} 
    price={item.price} 
  />
))}
            </div>
            </div>
            <div className="container mt-5 mb-4">
        <div className="large-card row row-cols-1 row-cols-md-3 ">
            <Larg_card link="src/assets/image/download.png" text="Easy Exchange Policy" paragraph="We offer hassle free exchange policy"/>
            <Larg_card link="src/assets/image/download (1).png" text="7 Days Return Policy" paragraph="We provide 7 days free return policy"/>
            <Larg_card link="src/assets/image/download (2).png" text="Best customer support" paragraph="We provide 24/7 customer support"/>
    </div>
    </div>
    <Subscrip/>
    </div>
)
}
