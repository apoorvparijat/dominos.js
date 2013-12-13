Instruction
=============

1. Navigate to Dominos pizza selection page.
2. Add 2 pizzas in the cart
3. Press `Ctrl + Shift + J` for Windows / `Cmd + Opt + J` for Mac (in Chrome)
4. Paste the content of [dominos.js](https://raw.github.com/apoorvparijat/dominos.js/master/dominos.js)
5. Sit back while the coupon is applied. (Might take a minute).


Advanced
=============

Call `stop()` to stop execution anytime.

If the coupons don't work, call `start` manually with different parameter.


```
stop();
start('e', 0);
```


Working Parameter
=============

- Dec 13 - (d, 755)
- Dec 12 - (d, 300)


Links
=============

Follow comments [here](http://www.savemoneyindia.com/dominos-buy-one-pizza-get-one-pizza-free-coupons-2/) to keep track of
what's working.


Troubleshoot
=============

Make sure you set `halt = false` before calling `applyCoupon` function.
