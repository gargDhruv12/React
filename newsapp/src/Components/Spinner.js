import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  static propTypes = {

  }

  render() {
    return (
    <div className='text-center'>
        <img src={loading} alt="Loading..." style={{ width: '50px', height: '50px' }} />
    </div>
      
    )
  }
}

export default Spinner
