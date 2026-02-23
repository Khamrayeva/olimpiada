import React from 'react';
import { Tabs } from 'antd';
import '../styles/TabsSection.css';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TabsSection = () => {
  const onChange = (key) => {
    // console.log(key);
  };

  return (
    <div className="tabs-container">
      <Link className="notice-link" href="#">Barchasi</Link>
      <Link className="notice-link" href="/natijalr">Natijalar</Link>
      <Link className="notice-link" href="/imtixonlar">Imtixonlar</Link>
      <Link className="notice-link" href="/tizim">Tizim</Link>

    </div>
  );
};

export default TabsSection;