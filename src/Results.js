import React from 'react';
import { useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import './index.css';
import overwatch from "./assets/overwatch.jpg"
import lol from "./assets/lol.jpg"
import spiderMan from  "./assets/spider-man.jpg";
import codMobile from "./assets/cod-mobile.jpg";
import donkeyKong from "./assets/donkey-kong.jpg";
import cs2 from "./assets/counter-strike.jpg";
import Navbar from './Navbar';



const gridData = [
    { imageUrl: spiderMan, text: 'Spiderman', description: "description", category: "console " },
    { imageUrl: overwatch, text: 'Overwatch', description: "description",  category: "console fps"},
    { imageUrl: codMobile, text: 'Call Of Duty Mobile', description: "description", category: "mobile fps"  },
    { imageUrl: cs2, text: 'Counter Strike 2', description: "description",  category: "fps"  },
    { imageUrl: lol, text: 'League of Legends', description: "description", category: "moba"  },
    { imageUrl: donkeyKong, text: 'Donkey-Kong', description: "description",  category: "arcade"  },
  ];




const Results = () => {
    const [filteredList, setFilteredList] = new useState(gridData);
    const [filtersAdded, setFiltersAdded] = new useState([]);
    const { category } = useParams();

    useEffect(() => {
        // This useEffect hook will update the filteredList based on the category in the URL
        if(category != null & category != "" & category != "all"){
            document.getElementById(category).checked = true
            addFilter(category);
        }
        
      }, [category]);

    const addFilter = (category) => {
        // Access input value

        var updatedList = []
        var updatedFilters = [...filtersAdded];
        if (document.getElementById(category).checked == true) {
            updatedFilters.push(category)

        } else {
            
            var index = updatedFilters.indexOf(category);
            updatedFilters.splice(index, 1);
        }

        setFiltersAdded(updatedFilters);

        for (let i = 0; i < gridData.length; i++) {
            var add = true
            for(let j = 0; j < updatedFilters.length; j++){
                if(!gridData[i].category.includes(updatedFilters[j])){
                    add = false;
                }
            }
            if (add == true){
                updatedList.push(gridData[i])
            }
        }
        setFilteredList(updatedList);
      };


      return (
        <div className='container'>
            
            <Navbar></Navbar>
            <div className="sidebar">
                <div className="filter-content">
                    <h2>filters</h2>
                    <br></br>

                    <div>
                        <label for="console"> Console Games </label>
                        <input onChange={() =>addFilter("console")} type="checkbox" id="console" name="console" value="console"/>
                    </div>
                    <br></br>
                    <div>
                        <label for="mobile"> Mobile Games </label>
                        <input onChange={() =>addFilter("mobile")}  type="checkbox" id="mobile" name="mobile" value="mobile"/>
                    </div>
                    <br></br>
                    <div>
                        <label for="fps"> FPS Games </label>   
                        <input onChange={() =>addFilter("fps")}  type="checkbox" id="fps" name="fps" value="fps"/>
                    </div>
                    <br></br>
                    <div>
                        <label for="moba"> MOBA Games </label>
                        <input onChange={() =>addFilter("moba")}  type="checkbox" id="moba" name="moba" value="moba"/>
                    </div>
                    <br></br>
                    <div>
                        <label for="arcade"> Arcade Games </label>
                        <input onChange={() =>addFilter("arcade")}  type="checkbox" id="arcade" name="arcade" value="arcade"/>
                    </div>
                    
                </div>
                
            </div>
            <div className="title-results">
                <h1>Results</h1>
                <div className="Results-container">
                    {filteredList.map((item, index) => (
                        <div key={index} className="grid-item">
                            {item.text && <p className='grid-text'>{item.text}</p>}
                            {item.imageUrl && <img className="grid-image" src={item.imageUrl} alt={`Image ${index}`} />}
                            {item.description && <p className='grid-description'>{item.description}</p>}
                        </div>
                    ))}
                </div>
            </div>
          
        </div>
      );
      

    }
  



export default Results;
