import React from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import LoginScreen from '../src/screens/LoginScreen'
class AppLoader extends React.Component {
  state = {
    isLoading: true,
  }
  handleUpload = () => this.setState({ isLoading: false })
  render() {
    const { isLoading } = this.state
    if (!isLoading) {
      return (
        <div>
          <p>Stuff is loading...</p>
        </div>
      )
    }
    return <LoginScreen />
  }
}

// const mapStateToProps = ({ currentUser }) => ({
//   user_id: currentUser.id,
// })

// export default connect(
//   mapStateToProps,
//   null
// )(AppLoader)
export default AppLoader
