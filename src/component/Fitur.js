import React, { Component } from 'react';
import '../index';
import menu1 from '../asset/1.png';
import menu2 from '../asset/2.png';
import menu3 from '../asset/3.png';
import menu4 from '../asset/4.png';
import menu5 from '../asset/5.png';
import menu6 from '../asset/6.png';
import { Row, Col } from 'react-flexbox-grid';

const menuList = [
  {icon: menu2, title: "Baca Sajak", description: "Anda dapat membaca sajak dari kontributor lain"},
  {icon: menu1, title: "Tulis Sajak", description: "Anda dapat menambahkan karya agar dapat dibaca penikmat sajak lainnya"},
  {icon: menu3, title: "Diskusi Sajak", description: "Anda dapat berdiskusi dengan sesama kotributor sajak"},
  {icon: menu4, title: "Event Sajak", description: "Anda dapat mengikuti event dari sajak senja"},
  {icon: menu5, title: "Poin Sajak", description: "Anda dapat mengumpulkan poin dari event sajak senja"},
  {icon: menu6, title: "Toko Sajak", description: "Anda dapat menukarkan poin sajak dengan berbagai macam hadiah"},
]

class Fitur extends Component {
  render() {
    return (<div className="fitur">
              <h1 className="header">Fitur Kami</h1>
              <div id='rounded-line-green'/>
              <Row>
                {menuList.map((menu, index) => 
                  <Col xs={12} sm={12} md={6} lg={4}>
                    <div style={{marginBottom:32}}>
                      <img className="img" src = {menu.icon} alt="data"></img>
                      <h1 className="h1">{menu.title}</h1>
                      <h3 className="h3">{menu.description}</h3>
                    </div>
                  </Col>
                )}
              </Row>
            </div>)
  } 
}

export default Fitur;
