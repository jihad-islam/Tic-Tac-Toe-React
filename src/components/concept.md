# 📘 **Winner Checking Logic**

### ✅ Full Function:

```js
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // main diagonal
    [2, 4, 6], // opposite diagonal
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // get 3 box positions

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // return "X" or "O"
    }
  }

  return null; // no winner
}
```

---

## 🧩 **Explanation Line by Line**

### ✅ `const lines = [...]`

- lines holo ekta array, ei array 8 ta index e abar array rakha hoise.
- This array holds **8 possible winning combinations**.
- Each inner array has 3 positions of the board:

  - 3 rows
  - 3 columns
  - 2 diagonals

```
0 | 1 | 2
---------
3 | 4 | 5
---------
6 | 7 | 8
```

Examples:

- `[0, 1, 2]` = top row
- `[0, 4, 8]` = diagonal (top-left to bottom-right)

---

### ✅ `for (let i = 0; i < lines.length; i++)`

- `lines.length = 8` because there are 8 combinations.
- This loop goes through each of them one by one.

---

---

---

<br>

# ✅ Explaination of destructuring

```js
const lines = [
  [0, 1, 2], // line 1
  [3, 4, 5], // line 2
  [6, 7, 8], // line 3
];

for (let i = 0; i < lines.length; i++) {
  const [a, b, c] = lines[i]; // destructuring

  console.log("Line", i, ":", a, b, c);
}
```

🧾 Output:

```
Line 0 : 0 1 2
Line 1 : 3 4 5
Line 2 : 6 7 8
```

### ❓What’s happening here?

- `lines[0] = [0, 1, 2]`
- `const [a, b, c] = [0, 1, 2]` → `a=0`, `b=1`, `c=2`
- `lines[1] = [3, 4, 5]` → `a=3`, `b=4`, `c=5`
- And so on...

This is **array destructuring** — instead of writing:

```js
const a = lines[i][0];
const b = lines[i][1];
const c = lines[i][2];
```

We write:

```js
const [a, b, c] = lines[i];
```

---

---

---

<br>

# 🧠 Explaination of `&&` (Logical AND)

```js
true && true && true; // ✅ → true
true && false && true; // ❌ → false
false && true && true; // ❌ → false
```

---

### Original Condition:

```js
if (
  squares[a] &&
  squares[a] === squares[b] &&
  squares[a] === squares[c]
)
```

---

### 🧩 Example 1: Only `squares[0] = "O"`

```js
const squares = ["O", null, null, null, null, null, null, null, null];

const [a, b, c] = [0, 1, 2]; // top row

if (
  squares[a] && // "O" → truthy ✅
  squares[a] === squares[b] && // "O" === null ❌
  squares[a] === squares[c] // "O" === null ❌
) {
  console.log("Winner is:", squares[a]);
}
```

### Result:

❌ The 2nd condition fails → so it **does not go inside the if block**
🟥 No winner.

---

### 🧩 Example 2: All three are "O"

```js
const squares = ["O", "O", "O", null, null, null, null, null, null];

const [a, b, c] = [0, 1, 2];

if (
  squares[a] && // "O" → ✅
  squares[a] === squares[b] && // "O" === "O" ✅
  squares[a] === squares[c] // "O" === "O" ✅
) {
  console.log("Winner is:", squares[a]);
}
```

### Result:

```js
"O" && "O" === "O" && "O" === "O";
```

Which means:

```js
true && true && true → ✅ pass
```

✅ All 3 conditions are true → "O" is the winner!

🟩 Output:

```
Winner is: O
```

---

## In Short

> `squares[a]` checks if it is null or not.
> If it **is null**, it’s a falsy value → so the whole condition becomes false → `if` block won’t run.
>
> If `squares[a]` is **not null**, then it returns `"X"` or `"O"` (both are truthy), so the next parts of the condition are checked.
>
> If all parts return `true`, then the `if` block runs. Otherwise, not.

---

---

---

<br>

# Why is `squares[a]` is null or not check important?

### ⚠️ Because Without It, Null Values Can "Fool" the Condition

Let’s imagine this:

```js
squares = [null, null, null, "X", "O", "X", "O", "O", "X"];
```

Now we check:

```js
const [a, b, c] = [0, 1, 2]; // top row (all empty)

if (
  squares[a] === squares[b] &&
  squares[a] === squares[c]
)
```

That becomes:

```js
null === null && null === null → true ✅
```

⛔ **Wait — did we just say "null === null === null" is a win?**
That’s wrong! No player has made a move in those boxes.

This is why we **must add the `squares[a]` check**:
