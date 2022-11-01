import React, { Component } from 'react'

import ChangeText from './ChangeText'
// import PreviewText from './PreviewText'

export class Home extends Component {
    render() {
        return (
            <>
                <div className={`container-fluid ${this.props.mode ==='light' ? 'bg-light' :'bg-secondary'} ${this.props.mode ==='light' ? 'text-dark' :'text-light'}`} style={{minHeight:'100vh'}}>

                    {/* Change Text component  */}
                    <ChangeText myStyle={this.props.myStyle} mode={this.props.mode} alert={this.props.alert}/>
                </div>
            </>
        )
    }
}

export default Home