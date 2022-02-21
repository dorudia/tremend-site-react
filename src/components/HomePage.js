import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {
  FiMessageCircle,
  FiMail,
  FiFacebook,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';

import { Box, Grid, Paper } from '@mui/material';
const arr = [
  {
    id: 1,
    imageUrl:
      'https://www.tremend.com/sites/default/files/styles/header_image/public/tremend_joins_publicis_groupe_2.jpg?itok=jfEV-l7e',
    html: `<div class='text-container'>
              <span class='coloredSpan'>Tremend joins Publicis Groupe</span>
              <span>and becomes the newest global </span>
              <span>delivery center for Publicis Sapient</span>
              <span class='smallSpan'>Read the news</span>
            </div>`,
  },
  {
    id: 2,
    imageUrl:
      'https://www.tremend.com/sites/default/files/styles/header_image/public/000-r.jpg?itok=AyUbqPHJ',
    html: `<div class='text-container'>
             <span>Need a competitive edge?</span>
             <span class='coloredSpan'>Fastest growing tech company in CEE</span>
          </div>`,
  },
  {
    id: 3,
    imageUrl:
      'https://www.tremend.com/sites/default/files/styles/header_image/public/002_r.jpg?itok=IKwMf8GN',
    html: `
    <div class='text-container'>
      <span class='smallSpan'>Embedded, Automotive, Linux. Delivered as intended.</span>
      <span>Enjoying your German luxury car?</span>
      <span class='coloredSpan'>Thank you for using our software.</span>
    </div>'`,
  },
  {
    id: 4,
    imageUrl:
      'https://www.tremend.com/sites/default/files/styles/header_image/public/001_r_1.jpg?itok=ZDRsLt6j',
    html: `
      <div class='text-container'>
        <span>New York, Zurich, London, Bucharest.</span>
        <span class='coloredSpan'>Meet a Tremend representative near you.</span>
      </div>
      `,
  },
  {
    id: 5,
    imageUrl:
      'https://www.tremend.com/sites/default/files/styles/header_image/public/004_r.jpg?itok=olRLRNno',
    html: `
      <div class="text-container">
        <span class='smallSpan'>IoT, Mobile, Node.js. Delivered as intended.</span>
        <span>RainMachine<sup>@</sup> - the forecast sprinkler.</span>
      <span class='coloredSpan'>”The 7 most useful smart home devices" - Fortune® magazine.</span>
      </div>
      `,
  },
  {
    id: 6,
    imageUrl:
      'https://www.tremend.com/sites/default/files/styles/header_image/public/003_r.jpg?itok=DKb6chK5',
    html: `
      <div class='text-container'>
        <span class='smallSpan'>J2EE, Java, Weblogic. Delivered as intended.</span>
        <span>Orange Customer Care.</span>
      <span class='coloredSpan'>10+ million clients served.</span>
      </div>
      `,
  },
  {
    id: 7,
    imageUrl:
      'https://www.tremend.com/sites/default/files/styles/header_image/public/005_r.jpg?itok=KMvjS__g',
    html: `
      <div class='text-container'>
        <span class='smallSpan'>PHP, Zend, MySQL. Delivered as intended.</span>
        <span>Startup? Not anymore:</span>
        <span class='coloredSpan'>Rightsflow<sup>@</sup> was acquired by Google<sup>@</sup></span>
        <span class='smallSpan'>"Working with Tremend was an all-around success."<span class='coloredSpan'>Gideon Kalischer, Director of Web Products, Rightsflow</span></span>
      </div>
      `,
  },
];

const HomePage = () => {
  const [circle, setCircle] = useState(0);
  const nextBtnRef = React.useRef(null);

  const handleCircleClick = (index) => {
    setCircle(index);
  };

  useEffect(() => {
    const caruselInterval = setInterval(() => {
      if (circle === 6) {
        setCircle(0);
      } else {
        setCircle(circle + 1);
      }
    }, 5000);
    return () => clearInterval(caruselInterval);
  }, [circle]);

  const handlePrevBtn = () => {
    setCircle((prev) => {
      if (circle == 0) {
        setCircle(6);
      }
      return prev - 1;
    });
  };
  const handleNextBtn = () => {
    setCircle((prev) => {
      if (circle == 6) {
        setCircle(0);
      }
      return prev + 1;
    });
  };

  useEffect(() => {
    const caruselItems = document.querySelectorAll('.carusel_item');
    const circles = document.querySelectorAll('.circle');
    const textItems = document.querySelectorAll('.text-container.active span');
    caruselItems.forEach((item) => {
      item.classList.remove('active');
    });
    circles.forEach((item) => {
      item.classList.remove('active');
    });
    circles[circle].classList.add('active');
    caruselItems[circle].classList.add('active');
    const activeCaruselItem = document.querySelector('.carusel_item.active');

    document.querySelector('.carusel_item.active').style.background =
      '#3f3f3fef';
    setTimeout(() => {
      activeCaruselItem.style.background = 'rgba(27, 27, 27, 0.4)';
      activeCaruselItem.style.backgroundImage = `url(${arr[circle].imageUrl})`;
      activeCaruselItem.style.backgroundBlendMode = 'multiply';
      activeCaruselItem.style.backgroundSize = 'cover';
      activeCaruselItem.style.transition = 'all 0.3s ease-in-out';
      activeCaruselItem.innerHTML = `${arr[circle].html}`;
      textItems.forEach((item) => (item.style.opacity = '1'));
    }, 150);
  }, [circle]);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <section className='section-1'>
        {arr.map((item) => {
          return <div className='carusel_item' key={item.id}></div>;
        })}
        <ArrowBackIosOutlinedIcon
          className='prevBtn'
          fontSize='large'
          onClick={handlePrevBtn}
          sx={{ display: { xs: 'none', md: 'flex' } }}
        />
        <ArrowForwardIosOutlinedIcon
          className='nextBtn'
          ref={nextBtnRef}
          fontSize='large'
          onClick={handleNextBtn}
          sx={{ display: { xs: 'none', md: 'flex' } }}
        />
      </section>
      <section className='section-2' style={{ minHeight: '100%' }}>
        <div className='circles'>
          {arr.map((item, index) => {
            return (
              <div
                key={index}
                className='circle'
                onClick={() => handleCircleClick(index)}
              ></div>
            );
          })}
        </div>
        <div className='grid-container'>
          <div className='grid-item'>
            <img
              src='https://www.tremend.com/sites/default/files/styles/client_logo/public/orange.fw_0.png?itok=A_XhsMMz'
              alt='orange-logo'
            />
          </div>
          <div className='grid-item'>
            <img
              alt=''
              src='https://www.tremend.com/sites/default/files/styles/client_logo/public/ing.fw_.png?itok=VYDI04Gk'
            />
          </div>
          <div className='grid-item'>
            <img
              alt=''
              src='https://www.tremend.com/sites/default/files/styles/client_logo/public/coats.fw__0.png?itok=HIUmiec_'
            />
          </div>
          <div className='grid-item'>
            <img
              src='https://www.tremend.com/sites/default/files/styles/client_logo/public/wind_river.fw_.png?itok=6q6WAcnI'
              alt=''
            />
          </div>
          <div className='grid-item'>
            <img
              src='https://www.tremend.com/sites/default/files/styles/client_logo/public/actility_logo_green-redbaseline_rgb_hd_crop.png?itok=LYYOBt6m'
              alt=''
            />
          </div>
          <div className='grid-item'>
            <img
              src='https://www.tremend.com/sites/default/files/styles/client_logo/public/1logo_carrfour_500x_70.png?itok=9KrSMBa9'
              alt=''
            />
          </div>
          <div className='grid-item'>
            <img
              src='https://www.tremend.com/sites/default/files/styles/client_logo/public/exia_0.png?itok=2nnIEA4v'
              alt=''
            />
          </div>
          <div className='grid-item'>
            <img
              src='https://www.tremend.com/sites/default/files/styles/client_logo/public/rain_machine.fw_.png?itok=Rz7wurVQ'
              alt=''
            />
          </div>
          <div className='grid-item'>
            <img
              src='https://www.tremend.com/sites/default/files/styles/client_logo/public/worthpoint_logo_newtagline_1.png?itok=iegNqa0r'
              alt=''
            />
          </div>
        </div>

        <div className='socialMedia-footer'>
          <Box
            className='socialMediaIcons'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <FiMail className='socialMediaIcon' />
            <FiMessageCircle className='socialMediaIcon' />
            <FiFacebook className='socialMediaIcon' />
            <FiLinkedin className='socialMediaIcon' />
            <FiTwitter className='socialMediaIcon' />
          </Box>
          <Box
            className='footer'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'none',
            }}
            sx={{
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: 'grey',
                marginRight: 25,
                marginBottom: 3,
                textAlign: 'center',
              }}
            >
              Copyright ©Tremend 2005 - 2022
            </span>
            <div
              style={{
                color: 'white',
                fontWeight: 'bold',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <span>Privacy Policy</span>
              <span
                style={{
                  borderLeft: '1px solid white',
                  borderRight: '1px solid white',
                }}
              >
                Cookie Policy
              </span>
              <span>Applicant Privacy Notice</span>
            </div>
          </Box>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
