import React, { Component } from 'react'

export class PreviewText extends Component {
    render() {
        return (
            <>
                <div className="container my-3" id='preview'>
                    <h2><span className="text-danger"><em>Preview</em></span> OF Your Text</h2>
                    <p className="lead">Time To read: <span className="fw-bold fs-5">{0.008 * this.props.length}</span> minutes</p>
                    <p className="lead">Total Words: <span className="fw-bold fs-5">{this.props.length}</span></p>
                    <p className="lead">Text Length: <span className="fw-bold fs-5">{this.props.characters}</span> characters</p>

                    <p ><span className="text-danger fw-bold fs-5">Preview: </span>{this.props.characters === 0 ? "Plz write into textarea above for see preview":this.props.text}.</p>
                </div>
            </>
        )
    }
}

export default PreviewText


