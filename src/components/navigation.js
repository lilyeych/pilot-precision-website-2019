import React from 'react'
import { Link } from 'gatsby'
import styles from './styles/navigation.module.scss'
import logoImg from '../images/logo.svg';
import instagram from '../images/instagram.png';

export default class navigation extends React.Component {
  constructor(props){
    super(props);
    this.state={
        nav: false,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if (window.innerWidth <= 992) {
        this.setState({nav: false});
        console.log(this.state.nav);
    } else {
      this.setState({nav: true});
      console.log(this.state.nav);
    }
  }
  
  toggleNav() {
    this.setState((currentState) => ({
      nav: !currentState.nav, 
    }));
  }
  
  render() {
    return (
      <div className={`container ${styles.navigation}`}>
        <nav role="navigation">
          <img className={styles.navigationItem, styles.logo} src={logoImg} alt="Pilot Precision Logo" />
          <button className={styles.navToggle} onClick={() => this.toggleNav()}>Menu</button>
          
          {
            this.state.nav?
              <ul className={styles.navigationItems}>
                <li>
                  <Link to="#about">About</Link>
                </li>
                <li>
                  <Link to="#equipment">Equipment and Capabilities</Link>
                </li>
                <li>
                  <Link to="#applications">Applications</Link>
                </li>
                <li>
                  <Link to="#contact">Contact</Link>
                </li>
                <li className={`${styles.iconInsta}`}>
                  <Link to="/blog/">
                    <img src={instagram} alt="Instagram icon" width="22" height="22" />
                  </Link>
                </li>
              </ul>
            :null
          }
        </nav>
      </div>
    )
  }
}
