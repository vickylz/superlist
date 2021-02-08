import React, { Component, Fragment } from 'react';
import './listproducts.css';
import { Row, Col } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ClearIcon from '@material-ui/icons/Clear';

function ListProducts(props) {

    return (
        <Fragment>
            <header className="sectionheader">

                <h2 className="sectiontitle">{props.activeSection.name}</h2>
            </header>
            <Col className="margin">
                <Col xs={9} className="listproductscol">
                    {props.activeSection.id != 12 ? (
                        <Row className="itemsrow">
                            {props.activeSection.list.map(item =>
                                <div className="item">
                                    <Col xs={4} className="d-flex centrar">{item.name} </Col>
                                    <Col xs={2} className="d-flex centrar">${item.price}</Col>
                                    <Col xs={1} className="d-flex justify-content-center plus">
                                        <AddIcon className="addbutton" onClick={() => props.setListItem(item)} />
                                    </Col>
                                </div>
                            )}
                        </Row>)
                        :
                        (
                            <Fragment>
                            <Row className="itemsrow">
                                {props.activeOtherProducts.map(item =>
                                    <div className="item">
                                        <Col xs={4} className="d-flex centrar">{item.name} </Col>
                                        <Col xs={2} className="d-flex centrar">${item.price}</Col>
                                        <Col xs={1} className="d-flex justify-content-center plus">
                                            <AddIcon className="addbutton" onClick={() => props.setListItem(item)} />
                                            <ClearIcon className="removebutton" onClick={() => props.deleteOtherItem(item)} />
                                        </Col>
                                    </div>
                                )}
                                </Row>
                                <Row className="other-row">
                                    <form className="form-other" autocomplete="off">
                                        <label>
                                            <Row className="input-label">
                                                Product:
                                            </Row>
                                            <Row className="row-input"><input type="text" className="input" name="product" id="product" maxlength="30" /></Row>
                                        </label>
                                        <label>
                                            <Row  className="input-label">
                                                Price:
                                            </Row>
                                            <Row>
                                                <input type="number" className="input2" name="price" id="price" />
                                            </Row>
                                        </label>
                                        <div className="d-flex justify-content-center plus col-1"><AddIcon className="add-other-button" onClick={() => props.setOtherItem(document.getElementById("product").value, document.getElementById("price").value)} /></div>
                                    </form>
                                </Row>
                                </Fragment>)}
                    <ArrowBackIcon className="arrowback" onClick={props.onClickBack} />
                </Col>
            </Col>
        </Fragment>
    )
}



export default ListProducts;