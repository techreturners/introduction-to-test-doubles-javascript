# Activity 3

## Test Doubles - Mock

## Recap of our Acceptance Criteria

- **Given** a `Bubble Tea Request` (represented as JSON)

- **When** the `bubble_tea_order_service`'s `createOrderRequest()` function is called with that `Bubble Tea Request`

- **Then** a `Bubble Tea Order Request` is created successfully, and the BubbleTeaOrderRequest is sent over email ✉️

---

### 🔎 Exercise 3.1 - Let's see a Mock in action!

- To recap, the [bubble_tea_order_service](../src/bubble_tea_order_service.js) has two dependencies which are [bubble_tea_messenger](../src/bubble_tea_messenger.js) and [simple_logger](../src/simple_logger.js)
  

- Now that we have a Dummy object to stand in place of our `paymentDetails`, our next step is to find the appropriate
  Test Double type to stand in place of the `bubble_tea_messenger`.
  
- The Test Double type we will be using to sit in place of the `bubble_tea_messenger` is a Mock object.

---

## 🔎 Exercise 3.2 - Recap - What is a Mock?

Firstly, let's remind ourselves what a Mock is.

- Can you remember what a Mock means?

<details>
<summary>Click here to see the answer</summary>
<pre>

Mock objects enable you to check (verify) that expected calls and actions have been performed, 
e.g. checking a function has been called an expected number of times.

</pre>
</details>

---

#### Why are we using a Mock?

- On the [bubble_tea_order_service](../src/bubble_tea_order_service.js),
we send an email on line 33.


- Navigate to the [bubble_tea_messenger](../src/bubble_tea_messenger.js) file
which contains the functionality to send an email.
  
---

- Why do you think we need to utilise a Mock for the `bubble_tea_messenger`?

<details>
<summary>Click here to see the answer</summary>
<pre>

The `sendBubbleTeaOrderRequestEmail` function on line 7 doesn't return anything.

The `sendBubbleTeaOrderRequestEmail()` function is a command type.
  
A Command is a word used to describe functions that don’t have a return value, but they perform an action which changes a system’s state.
  
There is no way to test if the function worked as expected if nothing is being returned from it.
  
Also, we don't really want to use the actual `bubble_tea_messenger` in our unit tests, since we don't want to be sending actual emails everytime we run our tests.
  
This is why we can use Mock objects.

</pre>
</details>

---

### 🔎 Exercise 3.3 - 🏊 Deep Diving into Mocks

- Each programming language will have frameworks to enable developers to use out of the box functions to create and apply test doubles.
  
- For JavaScript, one useful framework is [Jest](https://jestjs.io/).
  
---

- In the [bubble_tea_order_service.test.js](../src/bubble_tea_order_service.test.js) file, can you spot which line
creates the Mock for the `bubble_tea_messenger`?
  
<details>
<summary>Click here to see the answer</summary>
<pre>

// Line 4
jest.mock('./bubble_tea_messenger');

</pre>
</details>

---

- We now have a Mock object of the `bubble_tea_messenger` 
  

- Thanks to the Jest framework, we now have access to functions to check (verify) that expected calls and actions have been performed on the mock `bubble_tea_messenger`.

---

- In the [bubble_tea_order_service.test.js](../src/bubble_tea_order_service.test.js)  file, which line of code
verifies that the mock `bubble_tea_messenger`'s `sendBubbleTeaOrderRequestEmail()` function was called with the correct JSON representing a **Bubble Tea Order Request**?
  
<details>
<summary>Click here to see the answer</summary>
<pre>

// Line 38 to 41
expect(bubbleTeaMessenger.sendBubbleTeaOrderRequestEmail)
      .toHaveBeenCalledWith(orderRequest);

</pre>
</details>

---

- We can also verify the number of times the `mockMessenger`'s `sendBubbleTeaOrderRequestEmail()` function was called
  
```
expect(bubbleTeaMessenger.sendBubbleTeaOrderRequestEmail).toHaveBeenCalledTimes(1);
```

All this means is that we aren't sending out real emails to our users when we run our tests! ✉️

---
### 🥳 Nice one! You finished Activity 3!

You can now head over to [Activity 4 - Test Doubles - Stub](activity_4.md).

---

### Key Study Notes

☑️ Mock objects enable you to check (verify) that expected calls and actions have been performed, e.g. checking a function has been called an expected number of times.