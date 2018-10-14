import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';
import Panel from '../Panel';
import GlitchText from '../GlitchText';

class Menu extends React.Component {
  static propTypes = {
    items: PropTypes.object.isRequired,
    onItemClick: PropTypes.func.isRequired,
  };

  state = {
    isOpen: false,
  };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  getNav = () => (
    <nav>
      <h2 className="menu__sub-heading">Links</h2>
      <ul className="menu__nav">
        <li className="menu__nav-item">
          <a href={process.env.RESUME_LINK} className="menu__nav-btn">
            Download resume
          </a>
        </li>

        <li className="menu__nav-item">
          <a href={process.env.DYB_LINK} target="_blank" rel="noopener noreferrer" className="menu__nav-btn">
            DoYouBuzz page
          </a>
        </li>

        <li className="menu__nav-item">
          <a href={process.env.GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="menu__nav-btn">
            Github profile
          </a>
        </li>

        <li className="menu__nav-item">
          <a href={process.env.TWITTER_LINK} target="_blank" rel="noopener noreferrer" className="menu__nav-btn">
            Twitter account
          </a>
        </li>

        <li className="menu__nav-item">
          <a href={process.env.LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="menu__nav-btn">
            Linkedin profile
          </a>
        </li>

        <li className="menu__nav-item">
          <a href={process.env.MAIL_LINK} className="menu__nav-btn">
            Send an email
          </a>
        </li>
      </ul>
    </nav>
  );

  getCredit = () => (
    <aside>
      <h3 className="menu__sub-heading">Credit</h3>
      <dl className="menu__credits">
        <dt>Code & Design</dt>
        <dd>Loïc Goyet</dd>
        <dt>Visual assets & illustrations</dt>
        <dd>Marie-Isabelle Goyet</dd>
      </dl>
    </aside>
  );

  getInventory = () => {
    const { items, onItemClick } = this.props;

    return (
      <div>
        <h2 className="menu__sub-heading">Inventory</h2>

        <ul className="menu__inventory-list">
          {!items.allIds.length && (
            <li className="menu__inventory-item menu__inventory-message">no items in your inventory</li>
          )}
          {!!items.allIds.length &&
            items.allIds.map(id => {
              const item = items.byId[id];
              return (
                <li key={id} className="menu__inventory-item">
                  <button type="button" onClick={() => onItemClick(id)} className="menu__nav-btn">
                    {item.title}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    );
  };

  render = () => {
    const { isOpen } = this.state;

    return (
      <React.Fragment>
        <button className="menu__trigger menu__trigger-open" type="button" onClick={this.toggle}>
          Menu
        </button>

        <Panel
          className={classNames({
            menu__inner: true,
            'is-open': isOpen,
          })}
        >
          <div className="menu__header">
            <h1 className="menu__heading">
              <GlitchText>Loïc Goyet's folio</GlitchText>
            </h1>

            <button className="menu__trigger menu__trigger-close" type="button" onClick={this.toggle}>
              close
            </button>
          </div>

          <div className="menu__nav-wrapper">
            {this.getNav()}
            {this.getCredit()}
          </div>

          <div className="menu__inventory-wrapper">{this.getInventory()}</div>
        </Panel>
      </React.Fragment>
    );
  };
}

export default Menu;
