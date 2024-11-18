## create new folader call ONLINE-PAYMENT.

-- create 3 files
  -index.html
  -styles.css
  -script.js


 ## Create an account in sandbox intasend
 Navigate to the intergration part and copy your publishable API key.
 open intasend documentation and navigate to ACCEPT PAYMENT section.
 and select Payment Button Element
 follow he following steps to setup.\
 
How to add IntaSend Payment Button on your website
1. Install IntaSend plugin
Add the latest IntaSend web plugin before closing your </head> tag

HTML
<script src="https://unpkg.com/intasend-inlinejs-sdk@4.0.5/build/intasend-inline.js"></script>
2. Add the payment button
Add the IntaSend standard button where you want the customers to click and initiate checkout.

HTML
<button class="intaSendPayButton" data-amount="10" data-currency="KES">Pay Now</button>
Note: For standard button integration, IntaSend uses the class name to intaSendPayButton to recognize the button and trigger the payment action on click. On the payment button, you can add already available options e.g amount, currency, customer emails, etc using the data-* attribute. Learn more on the available payment data options here.

3. Complete setup
Complete setup by setting your publishable key and other options e.g redirect URL. Access your public API Key from your account under settings - API keys panel. IntaSend also provides a sandbox environment for API Testing

📘
Testing your implementation

Get test publishable key here https://sandbox.intasend.com/ (No sign-up needed).

HTML
<script>

  new window.IntaSend({
  publicAPIKey: "<REPLACE-WITH-YOUR-PUBLISHABLE-KEY>",
  live: false //set to true when going live
  })
  .on("COMPLETE", (results) => {console.log("Do something on success", results)})
  .on("FAILED", (results) => {console.log("Do something on failure", results)})
  .on("IN-PROGRESS", (results) => {console.log("Payment in progress status", results)})

</script>
IntaSend uses events to communicate the status of the transaction. Events will be emitted on COMPLETE, FAILED, and IN-PROGRESS state. From the example above, the on events will also a results which is simply the payment details results.

Now that you have payment configured, you might want to capture payment results and customize the button for a better payment experience. Below are useful resources for your reference.
