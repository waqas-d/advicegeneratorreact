import React, { useEffect, useState } from 'react'
import getData from '../DataServices/DataServices'
import './AdviceGenerator.css';
import Card from 'react-bootstrap/Card';
import formatAdvice from '../Interface/Interface';

const AdviceGeneratorComponent = () => {

    const[adviceInfo, setAdviceInfo] = useState<formatAdvice>();

    useEffect(() => {
        const adviceData = async () => {
          const fetchedData = await getData();
          setAdviceInfo(fetchedData);
        }
        adviceData();
    }, [])

  return (
    <div className='cardCenter'>
        
      
        <picture>
          {/* <source media="(min-width: 768px" srcSet={pauseDesktop}/>
          <img src={pauseMobile} alt=""/> */}
        </picture>
      



    <Card className='adviceCardStyle' style={{ width: '24rem', height: '16rem' }}>
      <Card.Body className='cardBodyBg'>
        <Card.Title className='cardTitleStyle'>ADVICE # {adviceInfo && adviceInfo.id}</Card.Title>
        <Card.Text>
        {adviceInfo && adviceInfo.advice}
        </Card.Text>
        {/* <button onClick={}>
          <img src={} alt="" /> 
        </button> */}
      </Card.Body>
    </Card>
    </div>
  )
}

export default AdviceGeneratorComponent
