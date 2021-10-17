# Activity 4

## Test Doubles - Stub

### 🔎 Exercise 4.1 - Recap - What is a Stub?

Firstly, let's remind ourselves what a Stub is.

- Can you remember what a Stub means?

<details>
<summary>Click here to see the answer</summary>
<pre>

An object designed with functions returning hardcoded/pre-defined responses.
We replace the real-life functionality to provide the values we need for testing purposes.

</pre>
</details>

- In a similar train of thought, when say 'stubbed function', or a 'function has been stubbed', we mean that we have forced the return values of the function, so it is returning some pre-defined response.
  
---

### 🔎 Exercise 4.2 - Let's see the Stub in action!

- Head over to the [bubble_tea_roulette_service](../src/bubble_tea_roulette_service.js).

- `getRandomBubbleTeaType` function returns a random type of bubble tea from those available on the [bubble_tea_type](../src/bubble_tea_type.js).

#### 🤔 Why is this important to know?

- 😬 Oh no! There's an issue here, if the `getRandomBubbleTeaType` is random, we're in a bit of a pickle.
  
---

- Is there something you notice about the use of Math.random() here?

<details>
<summary>Click to consider the following code</summary>
<pre>

```javascript
const bubbleTeaType = require('./bubble_tea_type');
const randomSize = Object.keys(bubbleTeaType).length;

const getRandomBubbleTeaType = () => {
  // Random val just created for readers to
  // observe how that is controlled with a stub
  const randomVal = Math.random();
  return Object.keys(bubbleTeaType)[Math.floor(randomVal * randomSize)];
};

module.exports = getRandomBubbleTeaType;

```

- Notice that the code uses the statement `const randomVal = Math.random();` 
- In JavaScript this code will produce a random decimal number between 0 and 1.
- This will make testing the function difficult unless we can 'stub' the Math.random() function to produce a more deterministic value.

</pre>
</details>

Using the Jest testing framework we can stub `Math.random()` function


<details>
<summary>Click to discover </summary>
<pre>

```javascript

const getRandomBubbleTeaType = require('./bubble_tea_roulette_service');

test('should generate random bubble tea', () => {
  // Arrange
  // Stub to calls to Math.random to return 0.2
  jest.spyOn(global.Math, 'random').mockReturnValue(0.2);

  // Act
  const bubbleTea = getRandomBubbleTeaType();

  // Assert
  expect(bubbleTea).toBe('JASMINEMILKTEA');

  // Restore the default Math.random
  jest.spyOn(global.Math, 'random').mockRestore();
});

```

- In jest the 'spyOn' function provides both spying and stubbing functionality.
- Notice how we use the 'spyOn' function to enforce that Math.random() will always return 0.2
- Then in the final lines of the test we restore the default functionality of Math.random()

</pre>
</details>


---

- The comparisons above show why considering how you test something first before you code can be a handy way of guiding how you can design code that is testable.

- For our testing, we want to make sure we get the same type of Bubble Tea every time we run our test
  (i.e. it's deterministic); however since the function chooses one at random,
  we have no way of ensuring if the function returns a type of Bubble Tea correctly.
  
- A way to resolve this is to use a Stub.
  
---

#### 🗺 Exploring stubbing

- Can you add another unit test so that the `getRandomBubbleTeaType()` function is stubbed to return `PEACHICETEA`?

<details>
<summary>Click here to see a solution</summary>
<pre>
test('should generate random bubble tea of peach variety', () => {
  // Arrange
  // Stub to calls to Math.random to return 0.6
  jest.spyOn(global.Math, 'random').mockReturnValue(0.6);

  // Act
  const bubbleTea = getRandomBubbleTeaType();

  // Assert
  expect(bubbleTea).toBe('PEACHICETEA');

  // Restore the default Math.random
  jest.spyOn(global.Math, 'random').mockRestore();
});

</pre>
</details>

---
### 🥳 Wow! You finished Activity 4! The next activity is the final activity!

You can now head over to [Activity 5 - Test Doubles - Spy](activity_5.md).

---

### Key Study Notes

☑️ A Stub is an object designed with functions returning hardcoded/pre-defined responses. 
We replace the real-life functionality to provide the values we need for testing purposes.