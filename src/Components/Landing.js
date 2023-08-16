import React from 'react';
import { Row, Col, Card } from 'antd';
import MyProfile from '../Image/pic2.jpeg';
import Acedamic from "./Academic";
import Language from './Language';
import Projects from './Projects';
import HobbyList from './HobbyLiist';
import AnimatedBox from './AnimateCard';
function Landing() {
    return (
        <div style={{ padding: '16px' }}>
            <AnimatedBox />
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12}>
                    <Card>
                        <img src={MyProfile} alt="My Profile" style={{ width: '100%', height: '513px' }} />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <Card>
                        <h3>Hii , I'm Harish Sen</h3>
                        <h4>👨‍💻 As a skilled React and Python developer, I bring a wealth of expertise in crafting dynamic and interactive web applications. My proficiency in React allows me to create seamless user experiences and visually appealing interfaces, while my proficiency in Python enables me to develop robust and efficient backend solutions.
                            <br /> <br />  🚀 Beyond my technical prowess, I am also the proud founder and CEO of Yashvitech, a forward-looking web development company. Under my leadership, Yashvitech has flourished into a hub of innovation and creativity, delivering tailor-made solutions that resonate with our clients' visions and goals.
                            <br /> <br />💼 My journey is driven by a passion for technology and a commitment to excellence. I lead a dedicated team of web developers and designers, fostering a collaborative environment where ideas flourish and solutions thrive. Together, we create responsive websites, seamless applications, and cutting-edge digital experiences that leave a lasting impact.
                            <br /> <br />📈 At Yashvitech, we take pride in our ability to transform concepts into reality. Whether it's architecting intricate web solutions, optimizing user interfaces, or formulating digital strategies, our work reflects a fusion of technical mastery and visionary leadership.
                        </h4>
                    </Card>
                </Col>
            </Row>
            <Acedamic />
            <Language />
            <Projects />
            <HobbyList />
        </div>
    );
}

export default Landing;
