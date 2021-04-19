@OnlineStore
Feature: Online shopping
    @Test1
    Scenario: User adds product to shopping bag
        Given user navigates to "skincareproductsbyausrine.zyrosite.com" page
        And navigates to "Our shop" tab
        When user clicks on "Honest Beauty Facial Oil" product
        And chooses "S" size for product
        And user clicks on "Add to Bag" button
        Then message "1 item in the bag" appears
    @Test2
    Scenario: User adds additional product to the shopping bag
        Given user navigates to "skincareproductsbyausrine.zyrosite.com" page
        And navigates to "Our shop" tab
        When user clicks on "Honest Beauty Facial Oil" product
        And chooses "M" size for product
        And user clicks on "Add to Bag" button
        And user clicks on "Add More" button
        Then message "2 items in the bag" appears
    @Test3
    Scenario: User goes to checkout page and enters valid email address
        Given user navigates to "skincareproductsbyausrine.zyrosite.com" page
        And navigates to "Our shop" tab
        When user clicks on "Honest Beauty Facial Oil" product
        And chooses "M" size for product
        And user clicks on "Add to Bag" button
        When user clicks on "Go to Checkout" button
        And adds valid email address
        And user clicks on "Checkout" button
        Then user is navigated to payment information page
    @Test4
    Scenario: User goes to checkout page and enters invalid email address
        Given user navigates to "skincareproductsbyausrine.zyrosite.com" page
        And navigates to "Our shop" tab
        When user clicks on "Honest Beauty Facial Oil" product
        And chooses "M" size for product
        And user clicks on "Add to Bag" button
        When user clicks on "Go to Checkout" button
        And adds invalid email address
        And user clicks on "Checkout" button
        Then message "This email address doesn't look right" appears
    @Test5
    Scenario: User enters payment information with optional details
        Given user navigates to "skincareproductsbyausrine.zyrosite.com" page
        And navigates to "Our shop" tab
        When user clicks on "Honest Beauty Facial Oil" product
        And chooses "M" size for product
        And user clicks on "Add to Bag" button
        When user clicks on "Go to Checkout" button
        And adds valid email address
        And user clicks on "Checkout" button
        And enters payment information
            | Country   | Full_Name        | Phone     | Address     | City    | Postal_Code |
            | Lithuania | Petras Petraitis | 862222222 | Verkiu g. 1 | Vilnius | 08001       |
        And user clicks on "Place Order" button
        Then message "Thank you for your order!" appears
    @Test6
    Scenario: User enters payment information without optional details
        Given user navigates to "skincareproductsbyausrine.zyrosite.com" page
        And navigates to "Our shop" tab
        When user clicks on "Honest Beauty Facial Oil" product
        And chooses "M" size for product
        And user clicks on "Add to Bag" button
        When user clicks on "Go to Checkout" button
        And adds valid email address
        And user clicks on "Checkout" button
        And enters payment information
            | Country   | Full_Name        | Address     | City    |
            | Lithuania | Petras Petraitis | Verkiu g. 1 | Vilnius |
        And user clicks on "Place Order" button
        Then message "Thank you for your order!" appears