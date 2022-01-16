import React from 'react';
import './Footer.scss';

import twitterIcon from '../../assets/img/twitter 1.svg';
import linkedInIcon from '../../assets/img/LinkedIn .svg';
import facebookIcon from '../../assets/img/facebook 1.svg';
import instagramIcon from '../../assets/img/instagramIcon.svg';
import youtubeIcon from '../../assets/img/youtubeIcon.svg';
import whatsappIcon from '../../assets/img/whatsapp-business 1.svg';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__navigation'>
                <div className='footer__navigation__others'>
                    <h1>Другое</h1>
                    <p>Про Нас</p>
                    <p>Блог</p>
                </div>
                <div className='footer__navigation__cooperation'>
                    <h1>Сотрудничество с нами</h1>
                    <p>Реклама на сайте</p>
                    <p>Партнерская программа</p>
                    <p>Контакты</p>
                </div>
                <div className='footer__navigation__contacts'>
                    <img src={twitterIcon} alt="twitter"/>
                    <img src={linkedInIcon} alt="LinkedIn"/>
                    <img src={facebookIcon} alt="Facebook"/>
                    <img src={instagramIcon} alt="Instagram"/>
                    <img src={youtubeIcon} alt="Youtube"/>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                </div>
            </div>

            <hr/>
            <div className='footer__container'>
                <p className='footer__container__privacy'>Privacy Policy</p>
                <hr />
                <p className='footer__container__rights'>© 2021  All rights reserved</p>
                <hr className='footer__container__hr'/>
                <p >Terms of Use</p>
            </div>
        </div>
    );
};

export default Footer;