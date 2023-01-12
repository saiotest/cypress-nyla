# Test Plan: \[Challenge\] Technical Exercise - QA Automation Engineer in Cypress

[GX-6470](https://upexgalaxy6.atlassian.net/browse/GX-6470) Created: 1/12/23 Updated: 1/12/23

# Test Plan: PDP (Product Detail Page)

### **Overview:**

This is a Feature Test Plan in order to test the following page of the website: [https://site-e2e-git-develop-nyla.vercel.app/products/qa](https://site-e2e-git-develop-nyla.vercel.app/products/qa "smart-link") Taking on count the present component is the known Product Detail Page of a e-commerce.

The Test Plan is designed to figure out all of the functionalities to be tested on such page with the technique: “Module Requirement Spec” (MRS), which is a Functional Analysis of the features in order to generate the Coverage property by every feature.

The Test Coverage scope should include 10 Test Cases at least.

Just 1 Test Case of this Coverage is taken into the Automation Framework Cypress for E2E Testing.

### **Naming Conventions defined for Test Cases:**

{{

{TestPlanID}

\-TC

{n}

: Check

{Test Case Scenario description}

}}  
**The naming ‘Check’ word will be used as a reference for TC, as ‘Validate’, 'Verify', etc.**  
_Example: Nyla-38-TC2: Check that the user can login successfully by using the correct credentials_

The TC Specs will be written as imperative verb for actions, and expected behaviors as 3rd person with ‘should’ convention.

*   The format and level of detail should be as per the following:
    *   Check that the User can add to the cart successfully
        *   navigate to the page
        *   Click on ‘add to cart’
        *   The cart should open with 1 unit of the added product.

## ![](/images/icons/emoticons/check.png) TEST SCOPE:

The Functional Analysis will be done on this specific page: [https://site-e2e-git-develop-nyla.vercel.app/products/qa](https://site-e2e-git-develop-nyla.vercel.app/products/qa "smart-link") and Those functionalities which does not redirect the website page will be on count for the testing.

Only Functional Features will be considered in the MRS Analysis.

For recommendations purposes, the Page Object Model will be applied for the Test Strategy.

## ![](/images/icons/emoticons/check.png) Test Coverage:

*   Section Level
    *   Feature Level
        *   Possible Test Cases Scenarios\*
            *   Specs

**Component: Product Detail Page**

*   **Product Photos Container**
    *   **\[Nyla-1\] Story: As a user I want to Display the Product photos by a vertical carrousel**
        *   🧪TC1: Check that the product photo is displayed when image is selected
            *   Step 1: Click on a different image selected card from the carrousel.
            *   Assert: The another photo should be displayed correctly on the image container
        *   🧪TC2: Check that the product photos are displayed when user slides to the Left
            *   Step 1: Drag and Drop the image container to the Left from the carrousel.
            *   Assert: The another photo should be displayed correctly on the image container
        *   🧪TC3: Check that the product photos are displayed when user slides to the Right
            *   Step 1: Drag and Drop the image container to the Right from the carrousel.
            *   Assert: The another photo should be displayed correctly on the image container
*   **Product Content Container**
    *   **\[Nyla-2\] Story: As a user I want to Change the Shades of a Product by selection**
        *   🧪TC4: Check that the product shade is changed when one different inStock-item option is selected.
            *   Step 1: Select a different inStock-item Shade from the Product Container.
            *   Assert: The another Shade of the Product should be loaded correctly on the image container.
            *   Assert: The Name of the selected Shade should be changed and displayed correctly.
        *   🧪TC5: Check that the product shade is changed when one different outStock-item option is selected.
            *   Step 1: Select a different outStock-item Shade from the Product Container.
            *   Assert: The another Shade of the Product should be loaded correctly on the image container.
            *   Assert: The Name of the selected Shade should be changed and displayed correctly.
            *   Assert: The Name of the Button ‘Add to Cart’ should be replaced by 'Email Me' while outStock-item Shade is selected.
    *   **\[Nyla-3\] Story: As a user I want to Write a Review for a Product by a stars ponderation**
        *   🧪(assumption)TC6: Check that review stars keep on the product after selecting a star ponderation.
            *   Step 1: Select a Star as Ponderation of Review from the Product Container.
            *   Assert: The selected Star should be shown in the ‘Write a Review’.
    *   **\[Nyla-4\] Story: As a user I want to Display more-Information of a Product by accordions**
        *   🧪TC7: Check that the info accordions of the product get open after selecting a subject.
            *   Step 1: Click on one subject accordion.
            *   Assert: it Should open and display the information contained.
    *   **\[Nyla-5\] Story: As a user I want to Update the Quantity of a Product so that I can add multiple items to the Cart.**
        *   🧪TC8: Check that the product quantity is being updated by increasing when the plus button is pressed up to multiple times.
            *   Step 1: Click on the ‘plus’ button multiple times (given 10 times).
            *   Assert: The Product Quantity should be equal to the times of pressed button (10 then).
        *   🧪TC9: Check that the product quantity is being updated by decreasing when the minus button is pressed until 1 item selected.
            *   Especial Precondition: Given selected quantity is more than 1 (given 10 as quantity).
            *   Step 1: Click on the ‘minus’ button multiple times until getting 1 quantity.
            *   Assert: The Product Quantity should be equal to 1.
        *   🧪TC10: Check that the product quantity cannot be updated to cero when the minus button is pressed up to multiple times.
            *   Step 1: Click on the ‘plus’ button multiple times (trying to reach 0).
            *   Assert: The Product Quantity should keep equal to 1 as quantity.
    *   **\[Nyla-6\] Story: As a user I want to Add a Product to the Shopping Cart**
        *   🧪TC11: Check that one product is added to the Cart without any changes
            *   Step 1: Click on the ‘Add to Cart’ button.
            *   Assert: The Cart Panel should be displayed on the Left side with the current information of the last added product.
            *   Assert: The Same product Name, Unit Price and Quantity, should be displayed accordingly to the added item.
        *   🧪TC12: Check that multiple products are added to the Cart when the Quantity is updated by increase
            *   Step 1: Click on the ‘plus’ button multiple times (given 10 times as example).
            *   Step 2: Click on the ‘Add to Cart’ button.
            *   Assert: The Cart Panel should be displayed on the Left side with the current information of the last added product.
            *   Assert: The Same product Name, Unit Price and Quantity (10 items as example), should be displayed accordingly to the added items.
            *   Assert: The Subtotal Price of the Cart should be equal to the Total Sum of (Quantity x Unit Price) of every Added item.
        *   🧪TC13: Check that one product is added to the Cart when a inStock-item Shade is selected
            *   Step 1: Select a different inStock-item Shade from the Product Container.
            *   Step 2: Click on the ‘Add to Cart’ button.
            *   Assert: The Cart Panel should be displayed on the Left side with the current information of the last added product.
            *   Assert: The Same product Name (the given Shade), Unit Price and Quantity, should be displayed accordingly to the added item.
        *   🧪TC14: Check that multiple same products are added to the Cart when a inStock-item Shade is selected with all added items.
            *   Step 1: Select a different inStock-item Shade from the Product Container.
            *   Step 2: Click on the ‘plus’ button multiple times (given 10 times as example).
            *   Step 3: Click on the ‘Add to Cart’ button.
            *   Assert: The Cart Panel should be displayed on the Left side with the current information of the last added product.
            *   Assert: The Same product Name (the given Shade), Unit Price and Quantity (10 items as example), should be displayed accordingly to the added items.
            *   Assert: The Subtotal Price of the Cart should be equal to the Total Sum of (Quantity x Unit Price) of every Added item.
        *   🧪TC15: Check that the same product is being summed 2 times to the Cart when the same product is added two times in a row.
            *   Step 1: Click on the ‘Add to Cart’ button.
            *   Step 2: Click on the ‘Add to Cart’ button once again (without any other action).
            *   Assert: The Cart Panel should be displayed on the Left side with the current information of the last added product.
            *   Assert: The Same product Name, Unit Price and Quantity as 2, should be displayed accordingly to the added item.
        *   🧪TC16: Check that different products are added to the Cart when the same product is added but with different inStock-item Shades in a row.
            *   Step 1: Click on the ‘Add to Cart’ button (Given Shade as 'A')
            *   Step 2: Select a different inStock-item Shade from the Product Container.
            *   Step 3: Click on the ‘Add to Cart’ button once again (this time is other Shade as 'B').
            *   Assert: The Cart Panel should be displayed on the Left side with the current information of the last added product.
            *   Assert: 2 different products should be added to the Cart (Product ‘A' and Product 'B’ as expected).
            *   Assert: The Subtotal Price of the Cart should be equal to the Total Sum of (Quantity x Unit Price) of every Added item.
        *   🧪(N/A)TC17: Check that the product can be added again after removing the same item from the Cart.
            *   (This last TC require Cart Module to interact, but interacting with another Module is Out Of Scope for this Coverage)
    *   **\[Nyla-7\] Story: As a user I want to be Notified by Email when Out of Stock Items are Available in Stock**
        *   \[ Email Feature Flag is OFF - It’s pending to implement - Cannot be added to the Testing Coverage \]

_Footer and Header is out of Scope._

### Total Test Cases for this Functional Coverage: `16 TCs`

## ![](/images/icons/emoticons/check.png) Assumptions:

*   As an Assumption,
    *   Every single Test Cases begins on the same page, so then the Precondition is a background:
        *   Given user is on the ‘products/qa’ Page. // or as a Step as: ‘user navigates to the 'products/qa' Page
            *   In order to not repeat our self on the Test Coverage, the sentence is skipped.
            *   But it needs to be added to the Automated Test file as a normal precondition/step.
    *   The ‘Type of Shades' of this Page ('DOMINO BLACK', ‘SCOUT TAN’, ‘DERBY BLACK’, ‘DERBY BLACK CANVAS’) were not considered to perform 4 test cases as the quantity of the shades, because the Test Strategy is pointing to the feature and not the data. Data may change over the time. It can be another shades in the feature. That’s why the Test Cases are validating by equivalent partitioning (if one shade is selected should display its shade new images),
        *   So, since there are only two behaviors with Selecting Shades: **inStock-Items** and **outStock-item**. So there are 2 TC then.
    *   The 'Write a Review' feature seems to be not implemented yet or it’s an actual bug because the stars cannot be selected.
    *   The Maximum quantity of the Product added to the cart is not defined by Business Rules. that’s why is there’s no limit values for those Test Cases.
    *   The Cart Panel is displayed after clicking on the 'Add To Cart' button and the Price of the Item selected should be multiplied by the Quantity in order to give the expected Subtotal Amount. And the Subtotal Price shown on the Cart Panel should be displayed correctly and equal to such expected amount. Also the same exact quantity of added items should be displayed on the Cart Panel with the unit price and the name of the Shade also.