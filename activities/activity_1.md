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

- In the [test files](../src) (those with the 'test.js' extension) within the **src** folder, can you identify lines in the file that show the creation of a test dummy?

<details>
<summary>Click here to see the answer</summary>
<pre>

TODO

</pre>
</details>

---

- In the [test files](../src) (those with the 'test.js' extension) within the **src** folder, can you identify lines in the file that show the creation of a 'Stub'?

<details>
<summary>Click here to see the answer</summary>
<pre>

TODO

</pre>
</details>

---

- Look at the [bubble_tea_order_service](../src/bubble_tea_order_service.js)
  class. What two dependencies does the service have?

<details>
<summary>Click here to see the answer</summary>
<pre>

TODO

</pre>
</details>

---

- What types of Bubble Tea does the [BubbleTeaTypeEnum](../src/main/java/com/techreturners/bubbleteaordersystem/model/BubbleTeaTypeEnum.java) have?

<details>
<summary>Click here to see the answer</summary>
<pre>

TODO

</pre>
</details>

---

- What does Encapsulation mean from the four pillars of Object-Oriented Programming?

<details>
<summary>Click here to see the answer</summary>
<pre>

Encapsulation means hiding the details of an object which is not supposed to be open for interaction publicly.

</pre>
</details>

---

- In the [DebitCard](../src/main/java/com/techreturners/bubbleteaordersystem/model/DebitCard.java) class,
  can you identify which line of code represents the `getter`?
  
<details>
<summary>Click here to see the answer</summary>
<pre>

DebitCard - Line 11

```

public String getDigits() {
  return this.DIGITS;
}

```

The getter `getDigits` has a private backing field `private final String DIGITS;`

This keeps the class well-encapsulated, so that the Debit Card Digits won't be tampered with
after it's been set by the constructor.

</pre>
</details>

---

### 🥳 Yay! Next Steps

You can now head over to [Activity 2 - Test Doubles - Dummy](activity_2.md).
Remember to take a break though 🍵, you totally deserve it!