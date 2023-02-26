import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

export const AppWrap = (
  Component: () => JSX.Element,
  idName: string | undefined,
  classNames?: string | undefined,
) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />
        <div className="copyright">
          <p className="p-text">@2021 ROHAN</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};
