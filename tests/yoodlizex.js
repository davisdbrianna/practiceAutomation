var yoodlize = {}
module.exports = {
    beforeEach: browser => {
        yoodlize = browser.page.yoodlizexPage()
        yoodlize
            .navigate()
    },
    after: browser => {
        yoodlize
            .end()
    },
    'See all button-Rec Vehicles': browser => {
        yoodlize
            .useXpath()
            .click('@seeALL')[1]
            .assert.urlEquals('https://www.yoodlize.com/s?category=91')
            browser.back()
    },
    'See all buttons-Outdoor Gear': browser => {
        yoodlize
            .useXpath()
            .click('(@seeAll)])[2]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=84')
            browser.back()
    },
    'See all button-Electronics': browser => {
        yoodlize
            .useXpath()
            .click('(@seeAll)])[3]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=85')
            browser.back()
    },
    'See all buttons-Party & Wedding Equipment': browser => {
        yoodlize
            .useXpath()
            .click('(@seeAll)])[4]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=88')
            browser.back()
    },
    'See all buttons-Tools': browser => {
        yoodlize
            .useXpath()
            .click('(@seeAll)])[5]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=86')
            browser.back()
    },
    'See all buttons-Clothing': browser => {
        yoodlize
            .useXpath()
            .click('(@seeAll)])[6]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=74')
            browser.back()
    },
    'See all buttons-Home & Kitchen': browser => {
        yoodlize
            .useXpath()
            .click('(@seeAll)])[7]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=77')
            browser.back()
    },
    'See all buttons-Toys & Games': browser => {
        yoodlize
            .useXpath()
            .click('(@seeAll)])[8]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=87')
            browser.back()
    },
    'See all buttons-Lawn & Gardens': browser => {
        yoodlize
            .useXpath()
            .click('(@seeAll)])[9]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=93')
            browser.back()
    },
    'See all buttons-Sporting Goods': browser => {
        yoodlize
            .useXpath()
            .click('(@seeAll)])[10]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=76')
            browser.back()
    },
    'See all buttons-DVD & Video Games': browser => {
        yoodlize
            .useXpath()
            .click('(@seeAll)])[11]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=97')
            browser.back()
    },
    'See all buttons-Venues': browser => {
        yoodlize
            .useXpath()
            .click('(@seeAll)])[12]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=92')
            browser.back()
    },
    'See all buttons-Music': browser => {
        yoodlize
            .useXpath()
            .click('(@seeAll)])[13]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=96')
            browser.back()
    },
    'See all buttons-Business Equipment': browser => {
        yoodlize
            .useXpath()
            .click('(@seeAll)])[14]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=89')
            browser.back()
    },
    'See all buttons-Misc': browser => {
        yoodlize
            .useXpath()
            .click('(@seeAll)])[15]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=95')
            browser.back()
    },
}