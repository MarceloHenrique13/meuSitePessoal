import React from 'react'
import './style.css'

function Features(props) {
    return (
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="wrapper_home_feature_card">
                <div className="content">
                    <i className={props.icone}></i>
                    <h5>{props.tittle}</h5>
                    <span className="d-none d-lg-block">{props.subtittle + props.subtittleTwo}</span>
                    <span className="d-block d-lg-none">{props.subtittle}</span>
                    <span className="d-block d-lg-none">{props.subtittleTwo}</span>                    
                    <div className="pt-1"></div>
                    <a href="google.com" className="card_button d-none" target="_blank">Ver Mais</a>
                </div>
            </div>
        </div>
    )
}

Features.defaultProps = {
    subtittleTwo: ""
}
export default Features