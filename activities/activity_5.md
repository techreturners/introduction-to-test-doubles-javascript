# Activity 5

## Test Doubles - Spy

### 🔎 Exercise 5.1 - Recap - What is a Spy?

Firstly, let's remind ourselves what a Spy is.

- Can you remember what a Spy means?

<details>
<summary>Click here to see the answer</summary>
<pre>

Spies enable you to focus (spy on) specific functions on a real object. We call this object the ‘spied object’.

</pre>
</details>

---

### 🔎 Exercise 5.2 - Let's see the Spy in action!

- Head over to the [bubble_tea_order_service.spy.test.js](../src/bubble_tea_order_service.spy.test.js) file.

Note: The naming of the file is not important. We've just used the word **spy** in the file name to help identify the testing concept utilised.


- Which line of code creates the Spy on the `BubbleTeaMessenger`?

<details>
<summary>Click here to see the answer</summary>
<pre>

// Line 4
const emailSpy = jest.spyOn(messenger, 'sendBubbleTeaOrderRequestEmail');

</pre>
</details>


- This differs from the Mock object because it is our actual `bubble_tea_messenger` in action here and it has been infiltrated! 😬
  
- We can verify the calls made to our real `bubble_tea_messenger`, for example:

```
expect(emailSpy).toHaveBeenCalledWith(orderRequest);
expect(emailSpy).toHaveBeenCalledTimes(1);

```

- Does it look familiar? You saw this before in [Activity_3](activity_3.md) for Mocks.
  

- The key difference here is with a Spy, you are peering into the real object, real functions and verifying calls to it.

- In [activity 4](./activity_4.md) you encountered the spyOn function. There used it to both spy on invocations but also ensure that we stubbed the functionality. In the case of the example above we are just spying on the function.

---

### 🥳 Congratulations!

You have now completed the activities!

Feel free to head back to review the concepts again.
We encourage you to do some of your own research and experimentation in your own time to explore these concepts further.

### Extension

- Can you find a way to test multiple different Bubble Tea Requests without having to repeat the same test code again
and again? **Hint**: You may want to have a think about Jest test parameterisation 🤔.
  
---
### Key Study Notes

☑️ A Spy enables you to focus (spy on) specific functions on a real object. We call this object the ‘spied object’.
