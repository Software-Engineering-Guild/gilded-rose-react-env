import {Item, Shop} from "./gilded_rose";

describe("Gilded Rose", function() {
    it("should foo", function() {
        const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("foo");
    });

    it("should update Backstage Passes correctly where sellin more than 10", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 8) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(9);
        expect(items[0].sellIn).toEqual(14);
    })

    it("should update Backstage Passes correctly where sellin is 10", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 8) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(10);
        expect(items[0].sellIn).toEqual(9);
    })

    it("should update Backstage Passes correctly where sellin is less than 10 and more than 5", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 9, 8) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(10);
        expect(items[0].sellIn).toEqual(8);
    })

    it("should update Backstage Passes correctly where sellin is 5", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 8) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(11);
        expect(items[0].sellIn).toEqual(4);
    })

    it("should update Backstage Passes correctly where sellin is less than 5 more that -1", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 3, 8) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(11);
        expect(items[0].sellIn).toEqual(2);
    })

    it("should update Backstage Passes correctly where sellin is 0", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 8) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(11);
        expect(items[0].sellIn).toEqual(-1);
    })

    it("should update Backstage Passes correctly where sellin is less than 0", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", -1, 8) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
        expect(items[0].sellIn).toEqual(-2);
    })

    it("should update Aged Brie correctly where sellin is 10", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 10, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(46);
        expect(items[0].sellIn).toEqual(9);
    })

    it("should update Aged Brie correctly where quality has reached 50", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 10, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
        expect(items[0].sellIn).toEqual(9);
    })

    it("should update Sulfuras, Hand of Ragnaros correctly", function() {
        const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 1000, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
        expect(items[0].sellIn).toEqual(1000);
    })

    it("should update Generic, very boring item correctly", function() {
        const gildedRose = new Shop([ new Item("Generic, very boring item", 100, 3) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(2);
        expect(items[0].sellIn).toEqual(99);
    })

    it("should update Generic, very boring item correctly when quality is 0", function() {
        const gildedRose = new Shop([ new Item("Generic, very boring item", 100, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(-1);
        expect(items[0].sellIn).toEqual(99);
    })

    it("should update Generic, very boring item correctly when sell in is 0", function() {
        const gildedRose = new Shop([ new Item("Generic, very boring item", 0, -10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(-11);
        expect(items[0].sellIn).toEqual(-1);
    })

    it("should update Generic, very boring item correctly when sell in has passed", function() {
        const gildedRose = new Shop([ new Item("Generic, very boring item", -1, -10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(-12);
        expect(items[0].sellIn).toEqual(-2);
    })

    it("should update Conjured Item correctly", function() {
        const gildedRose = new Shop([ new Item("Conjured Item", 2, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(8);
        expect(items[0].sellIn).toEqual(1);
    })

    it("should update Conjured Item correctly when sell in is zero", function() {
        const gildedRose = new Shop([ new Item("Conjured Item", 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(8);
        expect(items[0].sellIn).toEqual(-1);
    })

    it("should update Conjured Item correctly when sell in has passed", function() {
        const gildedRose = new Shop([ new Item("Conjured Item", -1, -10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(-14);
        expect(items[0].sellIn).toEqual(-2);
    })
});
