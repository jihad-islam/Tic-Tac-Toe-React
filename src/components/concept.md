```jsx
<Square value={squares[0]} onSquareClick={handleClick(0)} />
```

## ❓ What's Going Wrong Here?

When you write `handleClick(0)`, you are **calling** the function **immediately** during rendering — not passing the function to be called **later when clicked**.

That’s the root cause of the problem.

---

## 🔥 Why This Causes “Too Many Re-renders”

### Let's look at what React is doing step by step:

1. React starts rendering `<Square />`
2. It sees: `onSquareClick={handleClick(0)}`
3. That line **calls `handleClick(0)` immediately**, not when the button is clicked!
4. Inside `handleClick`, you call `setState` (like `setSquares`)
5. `setState` tells React: "Hey! Re-render again!"
6. So React renders again...
7. But again it sees `handleClick(0)` — calls it again
8. 🔁 This repeats in a loop → React shows:

   ```
   Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
   ```

---

## ✅ How Arrow Function Solves This

When you do:

```jsx
<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
```

You are **not calling** `handleClick(0)` immediately. Instead:

1. You’re passing an anonymous function `() => handleClick(0)` as a **callback**.
2. React stores this function to call **later**, **when the user clicks** the button.
3. ✅ So no immediate state update → no re-render loop.

---

## 🧠 Think Like This:

| Code                             | What React Does                                    |
| -------------------------------- | -------------------------------------------------- |
| `onClick={handleClick(0)}`       | Calls `handleClick(0)` **immediately!** ❌         |
| `onClick={() => handleClick(0)}` | Saves a function to call **later when clicked** ✅ |

---

## 🔍 What the Arrow Function is Doing Internally

### Step by Step:

```js
() => handleClick(0);
```

✅ This creates a **new anonymous function** in memory, like this:

```js
function anonymousFunction() {
  return handleClick(0);
}
```

So now, when you pass this to React:

```js
onClick={() => handleClick(0)}
```

You are saying:

> "Hey React, when someone **clicks**, run this function which will call `handleClick(0)`."

So React **stores the function**, doesn’t execute it immediately.

---

### 🔁 So In-Short:

> The arrow function is creating an anonymous function, and inside that anonymous function, the `handleClick` function is called.
>
> We're passing **that anonymous function** as a prop (`onSquareClick`) — so it's **not called immediately**.
>
> When we **click the square**, React calls that anonymous function, which then calls `handleClick`.

---
