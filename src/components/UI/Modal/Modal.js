import React, { Component } from "react";
import "./Modal.css";
import BackDrop from "../BackDrop/BackDrop";
import Aux from "../../../hoc/Aux/Aux";
class Modal extends Component{
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }
    componentWillUpdate () {
        console.log("priya componentWillUpdate")
    }
    render(){
        return(
            <Aux>
                <BackDrop show={this.props.show} closeModal={this.props.modalClosed} />
            <div className="Modal"
            style={{transform: this.props.show ? "translateY(0)": 'translateY(-100vh)'}}>
                {
                    this.props.children
                }
            </div>
            </Aux>
        )
    }
    
};
export default Modal;