import React, { useEffect } from 'react';
import ShopItemTable, { Item } from "./components/ShopItemTable";
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import WelcomeMessage from "./components/WelcomeMessage";
import TabContainer from 'react-bootstrap/TabContainer'
import Nav from 'react-bootstrap/Nav'
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems, updateItems } from "./data/reducer/shop"
interface Props {}

interface State {
    items: Item[]
}

//TODO: add type safety
const GildedRose = () => {
    const items = useSelector((state: State) => state.items.filter((item)=>item.quality > 0 && item.sellIn > 0) )
    const discountedItems = useSelector((state: State) => state.items.filter((item)=>item.quality <= 0 || item.sellIn <= 0))
    const dispatch = useDispatch()

    useEffect(()=>{
        fetchItems(dispatch)
    },[dispatch])

    const updateShowQuality = () => {
        updateItems(dispatch)
    }

    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <Navbar bg="light">
                            <Navbar.Brand href="#home">The Gilded Rose </Navbar.Brand>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <WelcomeMessage />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TabContainer id="custom-tabs" defaultActiveKey="sale">
                                <Nav variant="tabs">
                                    <Nav.Item>
                                        <Nav.Link className="tab-title" eventKey="sale">Sale <span className="item-count">{items.length}</span></Nav.Link> 
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="discount">Discount <span className="item-count">{discountedItems.length}</span></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="sale">
                                        <Card>
                                            <ShopItemTable items={items}/>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="discount">
                                        <Card>
                                        {discountedItems.length > 0 &&
                                            <ShopItemTable items={discountedItems}/>
                                        }
                                        {discountedItems.length === 0 &&
                                            <div className="empty">No discounted items</div>
                                        }
                                        </Card>
                                    </Tab.Pane>
                                </Tab.Content>
                        </TabContainer>
                        <Button className="btn-update" onClick={()=>updateShowQuality()}>Update Quality</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GildedRose;
