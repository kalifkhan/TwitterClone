import React, { useEffect, useState } from 'react'
import './Home.css'
import { twitterIcon, SettingIcon } from './leftPane/icons';
import { Card } from './Card';
import axios from 'axios';
import { useNewTwitteContext } from './ContextList/TwitterContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { curTwwites } = useNewTwitteContext();

  const [twitte, setTwitte] = useState([]);

  const [twitterData, setTwitterData] = useState([]);
  const [PageNumber, setNumberPage] = useState(1);
  const [totalitemsperPage, setTotalItemsPages] = useState(6);

  console.log(curTwwites);

  const fetchTwitterData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=40")
      //console.log(response);
      setTwitterData(response.data)
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTwitterData();
  }, []);

  //const [currentPage , setCurrentPage] = useState();

  const handlePageNUmbers = (xx) => {
    setNumberPage(xx);
  }

  const startIndexofpage = (PageNumber - 1) * totalitemsperPage;
  const lastIndexofPage = startIndexofpage + totalitemsperPage;
  const currentPage = twitterData.slice(startIndexofpage, lastIndexofPage);

  const pageNumaber = () => {
    const buttons = [];

    for (let i = 1; i <= 5; i++) {
      buttons.push(
        <span key={i} className='btn-numbers'><button className='btn-btn' onClick={() => handlePageNUmbers(i)}> {i} </button></span>
      )
    }
    return buttons
  }
  return (
    <div>
        { !curTwwites.id ? <div className='containerForTW'> 
        <Link to='explore'> Click here for the First Tweet </Link>
        </div> : '' }
        <div className='conatiner-center-curT'>
          {curTwwites.id ?  <Card title={'recent twitte'} content={curTwwites.msg} id={curTwwites.id}></Card> 
          : <div> <Card style={{ 
            backgroundColor: "rgba(255, 0, 0, 0.5)", /* Semi-transparent red */
            backdropFilter: "blur(10px)" /* Adjust the blur intensity as needed */
          }} content={"No tweets yet"}> </Card>
            </div> 
  }   
  </div>
    </div>
  )
}

export default Home;
