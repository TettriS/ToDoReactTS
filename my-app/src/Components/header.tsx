import React from "react";
import Anchor from './anchor';
import Paragraph from './paragraph';
import Image from './image';
import logo from '../logo.svg';

interface HeaderProps {
  className: string | object;
  onlyLogo?: string;
}

function Header({ className, onlyLogo }: HeaderProps): JSX.Element {
  return (
    <header
      className={ [className, onlyLogo].join(' ') }
    >
      <Image src={ logo } className="App-logo" alt="logo"/>
      <Paragraph>
        Edit <code>src/App.tsx</code> and save to reload.
      </Paragraph>
      <Anchor
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Anchor>
    </header>
  );
}

export default Header;