import React from 'react';
import python from "../Image/python.png";
import react from "../Image/react.png";
import javascript from "../Image/javascript.jpg";
import html from "../Image/html.jpg";
import css from "../Image/css.png";
import redux from "../Image/redux.png";
import php from "../Image/php.png";
import postman from "../Image/postman.jpg";
import git from "../Image/git.png";
import github from "../Image/github.jpg";
import antd from "../Image/antd.jpg";
import django from "../Image/django.png";
import bootstrap from "../Image/bootstrap.png";
import canva from "../Image/canva.jpg";
import { Row,Col } from 'antd';
function Language() {
    return (
        <div>
            <h3>Programming and Technical Skills.</h3>
            <Row>
                <Col>
                    <img style={{width:'150px',height:'150px',margin:'12px'}} src={python}></img>
                    <img style={{width:'150px',height:'150px',margin:'12px'}} src={react}></img>
                    <img style={{width:'150px',height:'150px',margin:'12px'}} src={javascript}></img>
                    <img style={{width:'150px',height:'150px',margin:'12px'}} src={html}></img>
                    <img style={{width:'150px',height:'150px',margin:'12px'}} src={css}></img>
                    <img style={{width:'150px',height:'150px',margin:'12px'}} src={redux}></img>
                    <img style={{width:'150px',height:'150px',margin:'12px'}} src={php}></img>
                </Col>
                <Col>
                    <img style={{width:'150px',height:'150px',margin:'12px'}} src={postman}></img>
                    <img style={{width:'150px',height:'150px',margin:'12px'}} src={git}></img>
                    <img style={{width:'150px',height:'150px',margin:'12px'}} src={github}></img>
                    <img style={{width:'150px',height:'150px',margin:'12px'}} src={antd}></img>
                    <img style={{width:'150px',height:'150px',margin:'12px'}} src={bootstrap}></img>
                    <img style={{width:'150px',height:'150px',margin:'12px'}} src={canva}></img>
                    <img style={{width:'150px',height:'150px',margin:'12px'}} src={django}></img>
                </Col>
            </Row>
        </div>
    )
}

export default Language;