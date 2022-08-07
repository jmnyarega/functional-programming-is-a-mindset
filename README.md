[#](#) Functional Programming

- I am reading [Grokking Simplicity: Taming complex software with functional
  thinking](https://www.amazon.com/Grokking-Simplicity-software-functional-thinking-ebook/dp/B09781TWFL/ref=sr_1_1?crid=2BYF4GIQ95TMB&keywords=grokking+simplicity&qid=1659261285&sprefix=grokkin%2Caps%2C553&sr=8-1)
  by Eric Normand, I thought it will be nice to document what I have learnt.

## Definitions

#### Side Effects
- Anything that a function does other than returning a value, i.e sending an email or modifing global state.

#### Pure functions
- These are functions that only depend on their arguments and don't have any side effects

#### Actions
- Anything that depends when it is run or how many times it is run or both.

#### Calculations
- Are computations from input to output.
- They always give the same output given the same input.

#### Data
- It is recorded facts about events
- It is inert.
- Safest

## Problems

- [Coupon email address](./coupon-generator)
- [Affiliate payouts exercise]((./affiliate-payouts/)
- MegaMart
