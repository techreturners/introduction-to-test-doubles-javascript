# Activity 2

## Test Doubles - Dummy

## 🔎 Exercise 2.1 - What are we testing for?


#### Can you remember what Arrange, Act, Assert means as a testing structure?

<details>
<summary>Click here to see the answer</summary>
<pre>

Arrange, Act, Assert is a useful structure to help you plan and write your tests.

#### Arrange
- Arranging any test data and objects you might need to run your unit test

#### Act
- This is your action, what you do to run your code to produce a result i.e. calling your method

#### Assert
- What you’re expecting to see i.e. what your function should(!) return
- The assertion compares your actual result vs. your expected result

</pre>
</details>

---

### What are we testing for?

- When we're figuring out what we would like to test, we start with what we are checking for,
  i.e. our assertion.
  
  
- Navigate to the [bubble_test_order_service.test.js](../src/bubble_test_order_service.test.js) file.
  

- Our System Under Test (SUT) is the `bubble_tea_order_service`. This is the thing we are focusing on for our unit test.


- We would like to test that the `bubble_tea_order_service` is working as expected. More specifically,
we would like a unit test to check that:
  
  - **Given** a `Bubble Tea Request` (represented as JSON)
  - **When** the `bubble_tea_order_service`'s `createOrderRequest()` method is called with that `Bubble Tea Request`
  - **Then** a `Bubble Tea Order Request` is created successfully, and the BubbleTeaOrderRequest is sent over email ✉️
  
```
💡Top Tip!

Given, When, Then is an approach of writing business acceptance criteria.
It is helpful to specify the conditions we can check something against to ensure it has met some requirements.

```

- The acceptance criteria is captured by the test method called `TODO()`

---

### What do we need for our test?

Here's a summary of what we need to do for Arrange, Act, Assert:

- **Assert**
  - Check that the result we get from calling the `BubbleTeaOrderService`'s `createOrderRequest` method 
produces the expected `BubbleTeaOrderRequest`
  

- **Act** 
  - Call the `bubble_tea_order_service`'s `createOrderRequest` function with a `JSON Object` that represents a `Bubble Tea Request`


- **Arrange** 
  - Set up the JSON objects required to make a `Bubble Tea Request` that we can use for testing


---

## 🔎 Exercise 2.2 - Recap - What is a Dummy?

Firstly, let's remind ourselves what a Dummy is.

- Can you remember what a Dummy means?

<details>
<summary>Click here to see the answer</summary>
<pre>

It is an object that is there to make the code run, it doesn’t do anything.
Dummies can be used in place of when you’re trying to pass parameters into your function/object.

</pre>
</details>

---

## 🔎 Exercise 2.3 - Let's see a Dummy in action!

### 💭 Let's break it down!

- In the production code, the [bubble_tea_order_service](../src/bubble_tea_order_service.js)
  makes use of two dependencies (`simple_logger` and `bubble_tea_messenger`).
  
#### 🤔 Why is this important to know?

- Since our System Under Test (SUT), i.e. the thing we are focusing on for our unit test,
  is the [bubble_tea_order_service](../src/bubble_tea_order_service.js), we would like to use Test Doubles as pretend objects to
  stand in place of the real [simple_logger](../src/simple_logger.js) and [bubble_tea_messenger](../src/bubble_tea_messenger.js) for testing purposes.
  

- This is because we want to **isolate the [bubble_tea_order_service](../src/bubble_tea_order_service.js) from its dependencies.**
  

- Since the dependencies are external, we don’t have control on what this outside system might do. We want to make sure
our SUT is working as a component of our codebase without external influence.
  
---

#### What is the approach taken here?

- This is where you'll find a lot of discussion in the industry on how to test. Aside from the jargon and theory behind it, the main point is that you understand what is needed to test against your acceptance criteria.

- For demonstration purposes, we've chosen to use a Dummy to substitute in place of the `SimpleLoggerImpl`. 
  
- In [Activity 1](activity_1.md), we identified the `DummySimpleLogger` as a Dummy.
  
---

#### 👀 Let's trace through how this works!

- Navigate to the [BubbleTeaOrderServiceTest.java](../src/test/java/BubbleTeaOrderServiceTest.java) file.


- Can you identify the line of code where the `DummySimpleLogger` is being created?

<details>
<summary>Click here to see the answer</summary>
<pre>

//BubbleTeaOrderServiceTest - Line 24

dummySimpleLogger = new DummySimpleLogger();

</pre>
</details>

---

- Can you identify the line of code where the `dummySimpleLogger` is passed as an 
argument to the `BubbleTeaOrderService` constructor?

<details>
<summary>Click here to see the answer</summary>
<pre>

//BubbleTeaOrderServiceTest - Line 26

bubbleTeaOrderService = new BubbleTeaOrderService(dummySimpleLogger, mockMessenger);

👉 The `dummySimpleLogger` is a Dummy that's solely there to stand in for the `SimpleLoggerImpl` parameter.

</pre>
</details>

---

- Open up and explore the [DummySimpleLogger](../src/test/java/testhelper/DummySimpleLogger.java).


- In your own words can you describe what the `DummySimpleLogger` is doing?

<details>
<summary>Click here to see a summary</summary>
<pre>

The `DummySimpleLogger` implements the `SimpleLoggerImpl` interface.
It has a `addLoggingText` method.
You can see that it isn't doing anything with the method.

</pre>
</details>

---
### 🥳 Yippee! You finished Activity 2!

You can now head over to [Activity 3 - Test Doubles - Mock](activity_3.md).
Remember to take a break though 🍵!

---

### Key Study Notes

☑️ Make sure you understand the business acceptance criteria before you start coding!
- Use the **Given, When, Then** approach to understand what you need to test for

☑️ Write down some test scenarios against these acceptance criteria

☑️ Identify what your System Under Test (SUT) is, this is the thing you are focusing your tests on

☑️ Pick one test scenario and use the `Arrange, Act, Assert` structure to help you write your test
- Start with your assertion first to identify what you are checking for

☑️ Identify any external dependencies your SUT has, you can consider using one of the Test Doubles to substitute in for 
these

☑️ A Dummy is a test double. It is an object that is there to make the code run, it doesn’t do anything.
Dummies can be used in place of when you’re trying to pass parameters into your function/object.