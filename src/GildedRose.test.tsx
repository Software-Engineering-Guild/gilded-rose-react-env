import React from 'react';
import { mount } from 'enzyme'
import ShopItemTable from "./components/ShopItemTable";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import Nav from 'react-bootstrap/Nav'
import TabContainer from 'react-bootstrap/TabContainer'

describe('ShopItemTable', () => {
    it('updating discounts tab count', () => {
        const items = [
            {
                name: "Aged Brie",
                quality: 10,
                sellIn: 5
            }
        ]
        const discountedItems = [
            {
                name: "Sulfuras, Hand of Ragnaros",
                quality: 10,
                sellIn: 0
            },
            {
                name: "Generic, very boring item",
                quality: 0,
                sellIn: 5
            }, 
        ]
        const dom = mount(<TabContainer id="custom-tabs" defaultActiveKey="sale">
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link className="tab-title" eventKey="sale">Sale <span id="sale-tab-count" className="item-count">{items.length}</span></Nav.Link> 
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="discount">Discount <span id="discount-tab-count" className="item-count">{discountedItems.length}</span></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane id="sale-tab-pane" eventKey="sale">
                        <Card>
                            <ShopItemTable items={items}/>
                        </Card>
                    </Tab.Pane>
                    <Tab.Pane id="discount-tab-pane" eventKey="discount">
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
        </TabContainer>);

        const saleCountTab = dom.find('#sale-tab-count')
        const discountCountTab = dom.find('#discount-tab-count')
        const saleRows = dom.find('#sale-tab-pane .item-row')
        const discountRows = dom.find('#discount-tab-pane .item-row')
        expect(saleCountTab.text()).toEqual("1")
        expect(discountCountTab.text()).toEqual("2")
        expect(saleRows.length).toBe(1)
        expect(discountRows.length).toBe(2)
    })

});


