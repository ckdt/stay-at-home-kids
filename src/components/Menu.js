import React, {useState} from 'react';
import ReactGA from 'react-ga';

const Menu = () => {
  const [menuIsOpen, SetMenuIsOpen] = useState(false);

  ReactGA.initialize('UA-163473118-1', {
    gaOptions: {
      anonymizeIp: true,
    },
  });

  const toggleMenu = (menuIsOpen) => {
    if (menuIsOpen) {
      document.body.classList.remove('menu-open');
      SetMenuIsOpen(false);
    } else {
      document.body.classList.add('menu-open');
      SetMenuIsOpen(true);
    }
  };

  return (
    <>
      <div className="navigation">
        <div className="nav--toggle">
          <input
            id="burger"
            className="burger"
            type="checkbox"
            checked={menuIsOpen ? 'checked' : ''}
            value={''}
            onChange={() => toggleMenu(menuIsOpen)}
          />
          <label className="burger--toggle" htmlFor="burger">
            <span className="burger--icon"></span>
          </label>
        </div>
        <div className={`nav--overlay nav--overlay__${menuIsOpen ? 'visible' : 'hidden'}`}>
          <div className="menu">
            <div className="menu--about">
              <h1 className="menu--title">Stay At Home Kids?</h1>
              <p>
                Yes! Kids, please stay at home. Here are some links with fun activities you can do.
                Please #stayhome #staysafe
              </p>

              <h2 className="menu--title">About this site</h2>
              <p>
                This site was made by{' '}
                <ReactGA.OutboundLink
                  eventLabel="Ronny Wieckardt"
                  to="https://ronnywieckardt.nl"
                  target="_blank"
                >
                  Ronny Wieckardt
                </ReactGA.OutboundLink>{' '}
                a Designer at{' '}
                <ReactGA.OutboundLink
                  eventLabel="All This"
                  to="https://allthis.digital"
                  target="_blank"
                >
                  ALL THIS
                </ReactGA.OutboundLink>{' '}
                and a Dad of 2 awesome kids (age 2 and 7). I felt the need to share some fun
                activities parents could do with their kids in these weird times. So I turned it
                into a sideproject.{' '}
              </p>

              <h2 className="menu--title">Forever Work In Progress</h2>
              <p>
                This site might look different from time to time. I'll add features on the go. So be
                sure to visit back from time to time.
              </p>

              <h2 className="menu--title">Submit your activities</h2>
              <p>
                Please use{' '}
                <ReactGA.OutboundLink
                  eventLabel="submit form"
                  to="https://airtable.com/shreSbjnmSE8qd5zI"
                  target="_blank"
                >
                  this form
                </ReactGA.OutboundLink>{' '}
                to add your fun activity or tweet{' '}
                <ReactGA.OutboundLink
                  eventLabel="submit twitter"
                  to="https://twitter.com/_home_kids"
                  target="_blank"
                >
                  @_home_kids
                </ReactGA.OutboundLink>
                . If you feel something should be changed or removed. Please{' '}
                <ReactGA.OutboundLink
                  eventLabel="Mail Ronny Wieckardt"
                  to="mailto:ronny@allthis.digital"
                  target="_blank"
                >
                  let me know
                </ReactGA.OutboundLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
