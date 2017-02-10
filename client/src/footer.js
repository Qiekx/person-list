import React, { PropTypes } from 'react'

class Footer extends React.Component {
  render () {
    let styles={
      color:'#fff',
      backgroundColor:'#00bcd4',
      paddingTop:'20px',
      paddingBottom:'40px',
      textAlign:'center',
      marginTop:'200px'
    }
    return(
      <div style={styles}>
        版权所有，盗版必究
      </div>
    )
  }
}

export default Footer;
