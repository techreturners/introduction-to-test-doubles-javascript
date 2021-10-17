# Activity 1

## 🗺 Exploration

## 🔎 Exercise 1.1 - Exploring the Code

For this exercise, spend some time familarising yourself with the code.
  
- Part of your journey to becoming a great Software Engineer
  is being able to read and understand code, as well as writing it.
- As children, we learn to read and speak in a language while we're learning how
  to write it; the same can be said about Software Engineering.

- 📖 So, flex those reading muscles! 💪

```
💡 Top Tip: Try looking at the README file first.
  Diagramming / sketching things out can be a handy way of
visualising a codebase that you haven't seen before. It can help you
  focus on the key information rather than getting lost in the details
  too soon.
```
  
---

## 🔎 Exercise 1.2 - Questions

- What is a Test Double?

<details>
<summary>Click here to see the answer</summary>
<pre>

A test double is any kind of pretend object used in place of a real object for testing purposes.

</pre>
</details>

---

- In the [bubble_tea_order_service](../src/bubble_tea_order_service.test.js) test, can you identify lines in the file that show the creation of a test dummy?

<details>
<summary>Click here to see the answer</summary>
<pre>

dummyPaymentDetails = {
    name: 'Some person',
    address: '123 Some Street',
    debitCard: {
      digits: '123456',
    },
};

</pre>
</details>

---

- In the [bubble_tea_roulette_service](../src/bubble_tea_roulette_service.test.js) test, can you identify lines in the file that show the creation of a 'Stub'?

<details>
<summary>Click here to see the answer</summary>
<pre>

// Bit of a tricky one because we utilise the spyOn 
// Jest function to stub the return of 0.2
// Stub to calls to Math.random to return 0.2
jest.spyOn(global.Math, 'random').mockReturnValue(0.2);

</pre>
</details>

---

- Look at the [bubble_tea_order_service](../src/bubble_tea_order_service.js). What two dependencies does the service have?

<details>
<summary>Click here to see the answer</summary>
<pre>

Bubble Tea Messenger and the Simple Logger

const bubbleTeaMessenger = require('./bubble_tea_messenger');
const logMessage = require('./simple_logger');

</pre>
</details>

---

- What types of Bubble Tea does the [bubble_tea_type](../src/bubble_tea_type.js) have?

<details>
<summary>Click here to see the answer</summary>
<pre>

OolongMilkTea
JasmineMilkTea
MatchaMilkTea
PeachIceTea
LycheeIceTea

</pre>
</details>

---

### 🥳 Yay! Next Steps

You can now head over to [Activity 2 - Test Doubles - Dummy](activity_2.md).
Remember to take a break though 🍵, you totally deserve it!