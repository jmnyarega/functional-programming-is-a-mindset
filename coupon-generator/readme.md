# Problem
- Create a system, CouponDog, that will sent out weekly emails with some coupons.
- If someone recommends CouponDog to 10 of their, they get better coupons


## Assumptions
- There is big database table of email addresses.
- They have counted how many times each person has recommended CouponDog to their friends.
- They also have a database of coupons, these are ranked [ bad, good & best ]
- Best coupons are reserved for higher no of recommendations, everyone else
  gets good coupons and never send bad ones
  
## Database Design

#### email table

| email            | rec_count |
|------------------|-----------|
| one@mail.com     | 2         |
| two@mail.com     | 10        |
| three@mail.com   | 5         |
| four@mail.com    | 20        |

#### coupon table

| coupon          | rank |
|-----------------|------|
| MAYDISCOUNT     | good |
| 10PERCENT       | bad  |
| PROMOTIONS      | best |
| IHEATYOU        | bad  |
| GETADEAL        | best |
| ILIKEDDISCOUNTS | good |

## Breaking down the problem

##### Data
- [ ] The ranking of each coupons
- [ ] The subject of the email
- [ ] An email address
- [ ] A recommendation count
- [ ] A subscriber record
- [ ] A coupon record
- [ ] A list of coupon records
- [ ] The body of the email

##### Actions
- [ ] Send email
- [ ] Read subscribers from email
- [ ] Reading coupons from database

##### Calculations
- [ ] Deciding which email is sent to someone
