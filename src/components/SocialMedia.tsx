import React from 'react';
import { BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { SocialMediaData } from '../constants/SocialMediaData';

export const SocialMedia = () => {
  const handleClick = (link: string | URL | undefined) => {
    console.log(link)
    if (link !== undefined) {
      window.open(link)
    }
  }
  return (
    <div className="app__social">
      <div onClick={() => handleClick(SocialMediaData?.github)}>
        <BsGithub />
      </div>
      <div onClick={() => handleClick(SocialMediaData?.twitter)}>
        <BsTwitter />
      </div>
      <div onClick={() => handleClick(SocialMediaData?.facebook)}>
        <FaFacebookF />
      </div>
      <div onClick={() => handleClick(SocialMediaData?.instagram)}>
        <BsInstagram />
      </div>
    </div>
  );
}
