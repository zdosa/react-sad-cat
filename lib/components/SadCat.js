import React from 'react';
import PropTypes from 'prop-types';
import { CATE } from '../img/cate';

class SadCat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {this.setState({ show: true });}, 10);
    setTimeout(() => {this.setState({ show: false });}, this.props.duration + 2000);
  }

  render() {
    const { show } = this.state;
    const bottom = show ? '0px' : '-352px';
    return (
      <div 
        style={{
          width: '100%',
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: bottom,
          padding: 30,
          transition: 'all 2s ease-out',
        }}
      >
        <div 
          style={{
            width: 400, 
            height: 290,
            backgroundImage: `url(${CATE})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            border: '1px solid #696969',
            boxShadow: 'inset 0 0 2px #696969',
          }} 
        />
        { this.props.message &&
          <div 
            style={{
              position: 'absolute',
              backgroundColor: 'black',
              color: 'white',
              width: 386,
              height: 40,
              bottom: 30,
              opacity: 0.7,
              padding: 8,
              textAlign: 'center',
            }}
          >{this.props.message}</div>
        }
      </div>
    );
  }
}

SadCat.propTypes = {
  duration: PropTypes.number.isRequired,
  message: PropTypes.string,
};

export default SadCat;
