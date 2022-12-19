import React from 'react';

const listItems = [
  { navItem: 'About' },
  { navItem: 'Get Started' },
  { navItem: 'Sign In' }
];

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const showMenu = this.state.isClicked ? 'overlay' : '';
    const hideMenu = this.state.isClicked ? '' : 'hidden';
    const menu = listItems.map(item =>
      <li key={item.navItem}>{item.navItem}</li>
    );
    return (
      <div className='menu'>
        <i className='fas fa-bars fa-2x' onClick={this.handleClick}></i>
        <div className={showMenu} onClick={this.handleClick}>
          <nav className={hideMenu} onClick={this.handleClick}>
            <h2>Menu</h2>
            <ul>{ menu }</ul>
          </nav>
        </div>
      </div>
    );
  }
}
