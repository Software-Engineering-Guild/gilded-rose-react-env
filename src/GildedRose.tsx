import React from 'react';
import ShopItemTable, { Item } from "./components/ShopItemTable";
import {items} from "./data/shopItems";
import {Shop} from "./api/gilded_rose";
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

interface Props {}

interface State {
    items: Item[],
    discountedItems: Item[]
}

const shop = new Shop(items);

class GildedRose extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            items: shop.items,
            discountedItems: []
        };
        console.log('Initial Shop state: ', this.state.items)
    }

    updateShowQuality() {
        shop.updateQuality();
        console.log('Shop State after update:', shop)

        this.setState({
            items: shop.items
        })
    }

    render() {
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
                                            <Nav.Link className="tab-title" eventKey="sale">Tab 1 <span className="item-count">{this.state.items.length}</span></Nav.Link> 
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="discount">Tab 2 <span className="item-count">{this.state.discountedItems.length}</span></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="sale">
                                            <Card>
                                                <ShopItemTable items={this.state.items}/>
                                            </Card>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="discount">
                                            <Card>
                                            {this.state.discountedItems.length > 0 &&
                                                <ShopItemTable items={this.state.discountedItems}/>
                                            }
                                            {this.state.discountedItems.length === 0 &&
                                                <div>No discounted items</div>
                                            }
                                            </Card>
                                        </Tab.Pane>
                                    </Tab.Content>
                            </TabContainer>
                            <Button onClick={this.updateShowQuality.bind(this)}>Update Quality</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GildedRose;
