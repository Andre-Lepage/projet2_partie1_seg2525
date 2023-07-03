import React from 'react';
import './index.css'; // Import the CSS file for styling
import ConsoleGames from "./assets/Console-Games.png";
import AllGames from "./assets/All-Games.png";
import MobileGames from "./assets/Mobile-Games.png";
import FPSGames from "./assets/FPS-Games.png";
import MOBAGames from "./assets/MOBA-Games.png";
import ArcadeGames from "./assets/Arcade-Games.png";
import { useNavigate} from 'react-router-dom';

const CategoryGrid = () => {
  // Replace these image URLs with your own images
  const navigate= useNavigate();
  const gridData = [
    { imageUrl: AllGames, text: 'All Games', category: "all" },
    { imageUrl: ConsoleGames, text: 'Console Games', category: "console" },
    { imageUrl: MobileGames, text: 'Mobile Games', category: "mobile" },
    { imageUrl: FPSGames, text: 'FPS Games', category: "fps" },
    { imageUrl: MOBAGames, text: 'MOBA Games', category: "moba" },
    { imageUrl: ArcadeGames, text: 'Arcade Games', category: "arcade" },
  ];

  const handleImageClick = (category) => {
    navigate(`/Results/${category}`);
  };

  return (
    <div className="grid-container">
      {gridData.map((item, index) => (
        <div key={index} className="grid-item" onClick={() => handleImageClick(item.category)}>
            {item.text && <p className='grid-text'>{item.text}</p>}
            {item.imageUrl && <img className="grid-image" src={item.imageUrl} alt={`Image ${index}`} />}
          
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;