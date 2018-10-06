import React, {Component} from 'react';
import {Info} from 'react-store-locator';
import Location from '../location/Location';

class EventInfoModal extends Component {

  render() {
    let location = this.props.location;
    let closeLocation = this.props.closeLocation;

    const infoStyle = {
      width: '300px',
      height: '200px',
    };

    return (
      <Info show={location.show} style={infoStyle}>
        <div>
          <Location />
          <div onClick={() => closeLocation(location.id)}>[x]</div>
        </div>
      </Info>
    )
  }
}

export default EventInfoModal