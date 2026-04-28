import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Card} from './card'
import Nav from './component/nav'
import HeroSection from './component/HeroSection'
import Best_saller from './component/best_saller'
import Larg_card from './component/larg_card'

function App() {
  return (
    <>
    <Nav/>
    <HeroSection/>
    <Best_saller type="latest"/>
    <div className="container">
    <div className=" row row-cols-2 row-cols-md-3 row-cols-xl-5 ">
      <Card link="src/assets/image/p_img1-BTuXznJl.png" text="Women Round Neck Cotton Top" price="$ 100" />
      <Card link="src/assets/image/p_img2_1-ku4Fyxmj.png" text="Men Round Neck Pure Cotton T-shirt" price="$ 200" />
      <Card link="src/assets/image/p_img3-Bhmp8mac.png" text="Girls Round Neck Cotton Top" price="$ 220" />
      <Card link="src/assets/image/p_img4-CYIvCkUm.png" text="Men Round Neck Pure Cotton T-shirt" price="$ 110" />
      <Card link="src/assets/image/p_img5-BMHJXi1_.png" text="Women Round Neck Cotton Top" price="$ 130" />
      <Card link="src/assets/image/p_img6-B2VXR-Iw.png" text="Girls Round Neck Cotton Top" price="$ 140" />
      <Card link="src/assets/image/p_img7-Ds_MiPCY.png" text="Men Tapered Fit Flat-Front Trousers" price="$ 190" />
      <Card link="src/assets/image/p_img8-BeUACWv0.png" text="Men Round Neck Pure Cotton T-shirt" price="$ 140" />
      <Card link="src/assets/image/p_img9-DmR0Ahyl.png" text="Girls Round Neck Cotton Top" price="$ 100" />
      <Card link="src/assets/image/p_img10-Bw8q3bg_.png" text="Men Tapered Fit Flat-Front Trousers" price="$ 110" />
      </div>
      </div>
      <Best_saller type="Best"/>
      <div className="container">
      <div className=" row row-cols-2 row-cols-md-3 row-cols-xl-5 ">
      <Card link="src/assets/image/p_img1-BTuXznJl.png" text="Women Round Neck Cotton Top" price="$ 100" />
      <Card link="src/assets/image/p_img2_1-ku4Fyxmj.png" text="Men Round Neck Pure Cotton T-shirt" price="$ 200" />
      <Card link="src/assets/image/p_img3-Bhmp8mac.png" text="Girls Round Neck Cotton Top" price="$ 220" />
      <Card link="src/assets/image/p_img4-CYIvCkUm.png" text="Men Round Neck Pure Cotton T-shirt" price="$ 110" />
      <Card link="src/assets/image/p_img5-BMHJXi1_.png" text="Women Round Neck Cotton Top" price="$ 130" />
      </div>
      </div>
      <div className="container mt-3 mb-4">
    <div className="large-card row row-cols-1 row-cols-md-3 ">
      <Larg_card link="src/assets/image/download.png" text="Easy Exchange Policy" paragraph="We offer hassle free exchange policy"/>
      <Larg_card link="src/assets/image/download (1).png" text="7 Days Return Policy" paragraph="We provide 7 days free return policy"/>
      <Larg_card link="src/assets/image/download (2).png" text="Best customer support" paragraph="We provide 24/7 customer support"/>
</div>
</div>
    </>
  )
}
export default App;
