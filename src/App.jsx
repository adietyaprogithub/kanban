import React from "react";
import Homepage from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import Discription from "./components/Discription";
import { useState } from 'react';
import Navbar from "./components/Navbar";


function App() {

  const [bgImage, setBgImage] = useState('https://cdn.pixabay.com/photo/2017/05/11/11/15/workplace-2303851_1280.jpg')
  const images = ['https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/03/27/07/32/clouds-1282314_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
    ];

  const handleBgChange = () => {
    const currentIndex = images.indexOf(bgImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setBgImage(images[nextIndex]);
  }


  return (
    <div className="App"
      style={{
        backgroundImage: `url(${bgImage})`,
        height: '150vh',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }} >
      <Navbar handleBgChange={handleBgChange} />
      <div >
        <Routes>
          <Route path="/" element={<Homepage />}></Route>

          <Route path="/:paramsid" element={<Discription />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
