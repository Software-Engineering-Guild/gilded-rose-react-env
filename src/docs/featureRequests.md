Feature Requests
---

We have recently signed a supplier of conjured items. This requires an update to our system.  Please read the [Gilded Rose specification first.](./gildedRose.md)

## Discount section support:
* If the Quality or SellIn Date reaches zero, remove it from the on-sale section, and show it in the discount section.
* Add a numeric count of the On Sale and Discount Items to the tab headers using components from our chose component library.

## Conjured item support:

* "Conjured" items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any new code as long as everything
still works correctly. However, do not alter the Item class or Items property as those belong to the
goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code
ownership (you can make the UpdateQuality method and Items property static if you like, we'll cover
for you).

Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a
legendary item and as such its Quality is 80 and it never alters.
