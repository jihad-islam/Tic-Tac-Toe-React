### 🔍 Problem Background

In React, when you update a **state**, React checks if the **new value is different from the old value** — if yes, it re-renders the component.

Now the tricky part:
When your state is an **array or object**, even if you **modify its content**, React **won’t re-render** unless you give it a **new reference** (a new object or array).

---

### 🔥 Your Code

```js
function handleClick() {
  squares[0] = "X"; // ✅ Value updated in-place (BAD!)
  setSquares([...squares]); // ✅ New array copy, React re-renders!
}
```

Let’s understand why this works the way it does.

---

### 🧠 Concept Clarification with Example

#### Case 1: Primitive values (like number or string)

```js
const [count, setCount] = useState(0);
setCount(1); // ✅ React sees a new number → triggers re-render
```

#### Case 2: Arrays — wrong way

```js
const [arr, setArr] = useState([0, 0, 0]);
arr[0] = 1; // Changes array in-place ❌
setArr(arr); // React compares same reference → ❌ No re-render
```

#### Case 3: Arrays — correct way

```js
const [arr, setArr] = useState([0, 0, 0]);
arr[0] = 1; // Still modifies in-place
setArr([...arr]); // Spread creates new array → ✅ Triggers re-render
```

> React checks whether the **reference** of the state has changed, not just the content.
> `setArr([...arr])` gives it a fresh reference → React says “Aha! This changed!” ✅

---

### ✅ Final Explanation of Your Code

```js
function handleClick() {
  squares[0] = "X"; // ✅ You update first cell to "X"
  setSquares([...squares]); // ✅ You give React a new array → Re-render happens
}
```

✅ `squares[0] = "X"` → modifies the old array directly
✅ `setSquares([...squares])` → creates a new array (copy), so React **can detect the change** and **re-render the component**.

---

Excellent follow-up, Jihad! Let's now **deeply understand** how the **spread operator (`...`)** creates a **new array** in this line:

```js
setSquares([...squares]);
```

---

---

---

## 🔍 What Is a Spread Operator?

The **spread operator** `...` **"spreads"** the elements of an iterable (like an array) into individual values.

Example:

```js
const arr = [1, 2, 3];
console.log(...arr); // Output: 1 2 3
```

---

## 🧠 What’s Happening in This Code?

### Code:

```js
const squares = ["X", null, null, null, null, null, null, null, null];
const newSquares = [...squares];
```

### 🔬 Internally, this is happening:

The line `[...]` does:

1. Takes each element from `squares` one by one.
2. Puts them into a **new array**.
3. `newSquares` is now a **completely new object in memory**.

Visually:

```
Memory:
squares     →  [ "X", null, null, ... ]  (ref: #123)
newSquares  →  [ "X", null, null, ... ]  (ref: #456)
```

Even though both arrays have **same content**, they are at **different locations in memory** — so `newSquares !== squares`.

---

## 🔧 Under the Hood — What is `[...]` doing?

It's almost like this:

```js
const newSquares = [];

for (let i = 0; i < squares.length; i++) {
  newSquares.push(squares[i]);
}
```

✅ A brand new array is created
✅ All values are copied **shallowly** (not deep copy)
✅ React sees it as a new value → triggers re-render

---

## ⚠️ Shallow Copy Reminder

- `[...]` only makes a **shallow copy**.
- So if the array contains **objects**, the inner objects are still **shared**.

Example:

```js
const obj = { a: 1 };
const arr1 = [obj];
const arr2 = [...arr1];

arr1[0].a = 999;
console.log(arr2[0].a); // 999 — still same object inside!
```

---

## ✅ In Summary

- `...squares` spreads each item inside the array
- `[...squares]` creates a **new array with same values**
- React sees it as a new array (new memory reference) → ✅ re-renders
- This is critical when updating state that is an array or object in React
