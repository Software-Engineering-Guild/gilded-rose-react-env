
export class Item {
  name: string
  sellIn: number
  quality: number
  constructor(name: string, sellIn: number, quality: number){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const maxQuality = 50

let updateOperations = new Map<string, (quality:number, sellIn:number) => number[]>()

updateOperations.set('Aged Brie', (quality: number, sellIn: number) => {
  return [Math.min(maxQuality, quality+1), sellIn-1]}
)
updateOperations.set('Backstage passes to a TAFKAL80ETC concert', (quality: number, sellIn: number): number[] => {
  if (sellIn <= 0) return [0, sellIn-1]
  if (sellIn <= 5) return [Math.min(maxQuality, quality+3), sellIn-1]
  if (sellIn <= 10) return [Math.min(maxQuality, quality+2), sellIn-1]
  if (sellIn > 10) return [Math.min(maxQuality, quality+1), sellIn-1]
  return [] //never reached
})
updateOperations.set('Sulfuras, Hand of Ragnaros', (quality: number , sellIn: number): number[]=> [quality, sellIn])
updateOperations.set('Generic, very boring item', (quality: number ,sellIn: number): number[]=> {
  if (sellIn <=  0) return [Math.max(0, quality-2), sellIn-1]
  return [Math.max(0, quality-1), sellIn-1]
})
updateOperations.set('Conjured Item', (quality: number, sellIn: number): number[]=> {
  if (sellIn <=  0) return [Math.max(0, quality-4), sellIn-1]
  return [Math.max(0, quality-2), sellIn-1]
})

export class Shop {
  items: Item[] = []
  constructor(items=[]){
    this.items = items;
  }
  getItems() {
    return this.items
  }
  updateQuality() {
    return this.items.map((item, key)=>{
      /*for unknown items decrement quality and sellIn by 1*/
      let [newQuality, newSellIn] = [item.sellIn>=0 ? item.quality-1 : item.sellIn-2, item.sellIn-1] 
      if (updateOperations.has(item.name)) {
        try {
          [newQuality, newSellIn] = updateOperations.get(item.name)!(item.quality, item.sellIn)
        } catch(e) {
          console.error("Error retrieving empty function for ", item.name)
        }
      }
      item.quality = newQuality
      item.sellIn = newSellIn
      return item
    })
  }

  old_updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name !== 'Aged Brie' && this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name !== 'Aged Brie') {
          if (this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
