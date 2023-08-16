import React from 'react';
import { Card, Row, Col } from 'antd';
function Projects() {
    return (
        <>
            <Row>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Card style={{ margin: '5px' }} hoverable >
                        <p style={{ fontFamily: 'sans-serif' }}><h2>Document Center</h2> the Document Center is a robust solution crafted with the power of React JS.
                            The primary objective of this project is to establish an efficient Document Container, meticulously engineered to house a diverse array of content including files, images, and PDFs.
                            Seamlessly integrated, this platform offers easy access to stored documents, ensuring a streamlined experience for users or clients.
                        </p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Card style={{ margin: '5px' }} hoverable>
                        <p style={{ fontFamily: 'sans-serif' }}><h2>E-Commerce Fashion</h2>Built an eCommerce platform from scratch using React.js and Redux, providing users with an intuitive shopping experience.
                            Designed and implemented the "Add to Cart" and "Remove from Cart" features using Redux's state management, enabling users to interact with their shopping cart seamlessly.
                            Developed reusable React components for product listings, cart display, and checkout process.</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Card style={{ margin: '5px' }} hoverable >
                        <p style={{ fontFamily: 'sans-serif' }}><h2>ChatBot UI</h2>built a chatbot user interface using React & integrated WebSockets for real-time communication.
                            Implemented a chat bubble layout to display messages and chatbot responses, providing users with a natural and intuitive conversation experience.
                            Developed event-driven logic to handle user interactions & WebSocket events, ensuring synchronized communication between frontend & backendand.</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Card style={{ margin: '5px' }} hoverable>
                        <p style={{ fontFamily: 'sans-serif' }}><h2>Personal Portfolio</h2>Provide a brief overview of what your portfolio includes and what viewers can expect to see. Mention the types of projects, technologies, or skills featured.
                            For instance: "My portfolio comprises a diverse range of projects, including [briefly describe a few key projects or categories], highlighting my proficiency in [mention relevant skills or technologies] and also highlighted other skills"</p>
                    </Card>
                </Col>
            </Row>

            <Row >
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Card style={{ margin: '5px' }} hoverable >
                        <p style={{ fontFamily: 'sans-serif' }}><h2>Real Property</h2> Developed a robust & user-friendly property deals application that revolutionized the way users buy & sell real estate properties.
                            Enabled  property transactions by implementing a user-friendly interface for both buyers & sellers to list, search, & purchase properties.
                            Integrated advanced location-based services to allow users to virtually visit property locations & explore nearby facilities, enhancing the decision-making process.
                        </p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Card style={{ margin: '5px' }} hoverable>
                        <p style={{ fontFamily: 'sans-serif' }}><h2>Billing System</h2>The Online Billing System is a comprehensive software solution designed to efficiently manage
                            and streamline the details of products, customer information, and billing processes. As a key contributor to this project, I played a crucial role in developing and implementing features that facilitated seamless communication, improved customer engagement, and optimized data management.</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Card style={{ margin: '5px' }} hoverable >
                        <p style={{ fontFamily: 'sans-serif' }}><h2>Grocery App</h2>As a dedicated  App Developer at Adyant Softech, I played a pivotal role in conceptualizing, designing, and developing a dynamic and user-centric grocery app that revolutionized the shopping experience for users.
                            Leveraging my technical skills and expertise, I contributed to the app's success by implementing a range of innovative features and ensuring a seamless user interface by using react native</p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Card style={{ margin: '5px' }} hoverable>
                        <p style={{ fontFamily: 'sans-serif' }}><h2>Yashvitech Startup</h2>Developed the frontend of the company website using React, implementing modern UI/UX design principles to enhance user experience and increase engagement.
                            Created backend functionalities using Django, integrating databases and APIs to ensure smooth data flow and efficient user interactions.
                            Collaborated with the design team to implement responsive web design, ensuring seamless performance across various devices and screen sizes.</p>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Projects