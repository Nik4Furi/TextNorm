import React, { Component } from 'react'
import PreviewText from './PreviewText';

export class ChangeText extends Component {
    //Creating states
    state = ({ text: '' ,alert:''})

    //handle on change event
    OnChange = (e) => {
        let value = e.target.value;
        this.setState({text : value});
    }

    //handle to change text into 'uppercase'
    handleUppercase = ()=>{
        let newText = this.state.text.toUpperCase();
        this.setState({text:newText})
        
    }
    

    //handle to change text into 'uppercase'
    handleLowercase = ()=>{
        let newText = this.state.text.toLowerCase();
        this.setState({text:newText})
    }

    //Copy text on the clipboard
    handleCopy = ()=>{        
        navigator.clipboard.writeText(this.state.text);      
    }

    //handle the extra space removing
    handleSpaces = ()=>{
        let trimText = this.state.text.replace(/\s+/g, ' ').trim();
        this.setState({text : trimText});
    }

    //Clear all the text of textarea
    handleClearAll = ()=>{
        this.setState({text:''})
    }
    
    render() {
        return (
            <>
                <div className="container" >
                <h1>To <span className="text-danger"><em>Change</em></span> Your Text!</h1>

                    <div className="my-3">
                        <textarea className={`form-control border border-secondary ${this.props.mode === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`} id="text" name="text" rows="7" placeholder='Write Text Here!' onChange={(e) => this.OnChange(e)} value={this.state.text} ></textarea>
                    </div>

                    {/* Adding buttons to changing the text  */}
                    <div className="d-flex align-items-center flex-wrap my-3">
                        <button className={`btn mx-2 my-1 ${this.props.mode ==='light' ? 'btn-secondary' :'btn-danger'} ${this.state.text.length ==0 ?'disabled' : ''}`} onClick={this.handleUppercase}>Change To Uppercase</button>
                        <button className={`btn mx-2 my-1 ${this.props.mode ==='light' ? 'btn-secondary' :'btn-danger'} ${this.state.text.length ==0 ?'disabled' : ''} `} onClick={this.handleLowercase}>Change To Lowercase</button>
                        <button className={`btn mx-2 my-1 ${this.props.mode ==='light' ? 'btn-secondary' :'btn-danger'} ${this.state.text.length ==0 ?'disabled' : ''} `} onClick={this.handleCopy}>Copy To Clipboard</button>
                        <button className={`btn mx-2 my-1 ${this.props.mode ==='light' ? 'btn-secondary' :'btn-danger'} ${this.state.text.length ==0 ?'disabled' : ''} `} onClick={this.handleSpaces}>Remove Extra Spaces</button>
                        <button className={`btn mx-2 my-1 ${this.props.mode ==='light' ? 'btn-secondary' :'btn-danger'} ${this.state.text.length ==0 ?'disabled' : ''} `} onClick={this.handleClearAll}>Clear All</button>
                    </div>
                </div>

                {/* Preview Text Component */}
                <PreviewText text={this.state.text} length={this.state.text.split(' ').filter((ele)=>{return ele.length !== 0}).length} characters={this.state.text.length}/>
            </>
        )
    }
}

export default ChangeText