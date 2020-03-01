import React from "react";
import "./Modal.css";
import BackDrop from "../BackDrop/BackDrop";
import Aux from "../../../hoc/Aux";
const modal =(props) =>{
    return(
        <Aux>
            <BackDrop show={props.show} closeModal={props.modalClosed} />
        <div className="Modal"
        style={{transform: props.show ? "translateY(0)": 'translateY(-100vh)'}}>
            {
                props.children
            }
        </div>
        </Aux>
    )
};
export default modal;