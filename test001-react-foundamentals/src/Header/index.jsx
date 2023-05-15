import logo from './logo.png';
import { ThemeContext } from '../ThemeContext';
import { useContext } from 'react';

function Header() {
  const theme = useContext(ThemeContext);

  console.log('UPDATE: Header');
  return (
    <div className="header">
      <div>
        <img src={logo} height={50} style={{ backgroundColor: theme.isDark ? 'black' : 'white', padding: 10, borderRadius: 10, margin: 10 }} alt="logo" />
      </div>
      <div>
        <h1>Hello World!</h1>
        <span>
          Dobrodošli na današnje predavanje!
        </span>
      </div>
    </div>
  );
}

export default Header;