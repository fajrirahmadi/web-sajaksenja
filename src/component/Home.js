import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Divider, Avatar} from 'antd';
import Links from './Footer';
import About from './About';
import image from '../image/sajak-senja-icon.png'
import playstore from '../image/google_play.png'

class Home extends React.Component {
  render() {
    return <div>
            <div className='content'>
              <Avatar size={128} src={image} />
              <h1 className="title">Sajak Senja</h1>
              <h3 className="description">~ Cinta Sajak, Cinta Senja, Cinta Sastra ~</h3>
              <a href="https://play.google.com/store/apps/details?id=com.sajaksenja"><img className="playstore" src={playstore} alt="#"></img></a>
              <Links/>
            </div>
            <About/>
            <Divider/>
          </div>
  }
}

export default Home