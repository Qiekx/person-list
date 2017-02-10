import React, { PropTypes } from 'react'

class Header extends React.Component {
  render () {
    let styles={
      color:'#fff',
      backgroundColor:'#00bcd4',
      padding: '20px 10px'
    }
    return(
      <h2 style={styles}>
        人员列表页面
      </h2>
    )
  }
}

export default Header;
