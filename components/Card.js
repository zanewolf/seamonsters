import React from 'react'
import Tooltip from '../hooks/Tooltip'
import {Modal,Container,Row,Col} from 'react-bootstrap'
import downImage from "../images/downImageSmall.jpg"
import {useSpring, animated as a } from 'react-spring'

const styles={
    modal_image:{
        objectFit: "cover",
        // width: "50vw",
        maxWidth: "50vw",
        maxHeight: "80vh",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"
    },
    modal_text:{
        whiteSpace: "pre-line"}
}


export default function Card ({data, style,bool,flippedStatus,onClick}){
    let tileStyle = style;
    // let showImage = flippedStatus === true ? data.src : downImage
    // let image be up or down
    const [show, setShow] = React.useState(false)
    const [flipState, setFlipState] = React.useState(false)

    const {transform, opacity} = useSpring({
        opacity: flippedStatus ? 1 : 0,
        transform: `perspective(0px) rotateX(${flippedStatus ? 180 : 0}deg)`,
        config: {mass: 10, tension: 250, friction: 80},
    })

    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => {
        setShow(true)
    }

    const texttodisplay = {name: data.name, creator: data.creatorq}


    // there's definitely a better way to do this with state, but for now....
    if (bool===true){
        return (
            <div className="card2" style={tileStyle}>
                <Tooltip text={texttodisplay}>
                    <img
                        src={data.src}
                        alt={data.name}
                        style={tileStyle}
                        onClick={handleShow}
                    />
                </Tooltip>
                <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    dialogClassName="modal-90w"
                    centered
                    scrollable
                    show={show}
                    onHide={handleClose}
                >
                    <Modal.Body>
                        <Container fluid>
                            <Row>
                                <Col md={7}>
                                    <Row>
                                        <img
                                            src={data.src}
                                            alt={data.name}
                                            style={styles.modal_image}
                                        />
                                    </Row>
                                </Col>
                                <Col md={5}>
                                    <Row>
                                        <Modal.Title>
                                            <h2>{data.name}</h2>
                                            <h4>created by {data.creator}, {data.year}</h4>
                                        </Modal.Title>
                                    </Row>
                                    <Col className={"monster-mythos display-linebreak"}>
                                        {data.mythos.split("\n").map((i,key) => {
                                            return <Row key={key}>{i}</Row>;
                                        })}
                                    </Col>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        );
    } else {
        return (
            <div onClick = {onClick} >
                {flippedStatus ?
                    <a.img
                        className={"flipCard"}
                        src={data.src}
                        alt={data.name}
                        style={{opacity , transform, rotateX: '180deg'}}
                        // onClick ={onClick}
                    />
                    : <a.img
                        className={"flipCard"}
                        src={downImage}
                        alt={data.name}
                        style={{transform, opacity: opacity.to(o => 1 - o)}}
                        // onClick ={onClick}
                    />
                }
                {/*<a.img*/}
                {/*    src={showImage}*/}
                {/*    alt={data.name}*/}
                {/*    style={tileStyle}*/}
                {/*    // onClick ={onClick}*/}
                {/*/>*/}
            </div>
        );
    }
}