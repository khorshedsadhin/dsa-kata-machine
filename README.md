# DSA Kata Machine

A daily practice system for learning **Data Structures and Algorithms** from scratch the same way ThePrimeagen trains: implement every algorithm from memory, every single day, until it becomes muscle memory.

This repo is open for everyone to use, contribute to, and learn from. Pull requests and discussions are welcome!

---

## What Is This?

This tool generates fresh practice folders (`src/day1`, `src/day2`, ) with empty algorithm stubs. You implement them without peeking at previous solutions, run the tests, fix your mistakes, and repeat daily. After a few days the patterns stick permanently.

---

## Prerequisites

-   [Node.js](https://nodejs.org/) v16 or higher
-   npm (comes with Node.js)

---

## Setup

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/kata-machine.git
cd kata-machine

# 2. Install dependencies
npm install

# 3. Copy the default config
cp ligma.config.beginner.js ligma.config.js
```

---

## Daily Workflow

### Step 1 Pick your level

Open `ligma.config.js` (git-ignored, so edits are yours alone) and point it at the level you are on:

```javascript
// GREEN  Beginner (Week 1-2): start here
module.exports = require("./ligma.config.beginner.js");

// YELLOW  Intermediate (Week 3-4): uncomment when beginner is solid
// module.exports = require('./ligma.config.intermediate.js');

// RED  Advanced (Week 5-6): uncomment for senior-level prep
// module.exports = require('./ligma.config.advanced.js');
```

---

### Step 2 Generate a new practice day

```bash
npm run generate
```

Creates the next numbered folder (e.g. `src/day1`, `src/day2`, ) with empty stubs for every algorithm in your config. Also updates `tsconfig.json` and `jest.config.ts` to point at the latest day automatically.

---

### Step 3 Implement every algorithm from scratch

Open the new day folder and write your solutions **without looking at any previous day or reference**. Struggling is the point that is how the patterns get wired in.

---

### Step 4 Test your solutions

```bash
npm test
```

Read every failure carefully. Fix, re-test, repeat until all pass.

---

### Step 5 Repeat daily

Run `npm run generate` the next day and start fresh. After 35 consecutive days at the same level you should be able to finish the whole set in under 2 hours from memory. Then move to the next level.

---

## Algorithm Levels

### Beginner `ligma.config.beginner.js` (Week 12)

Covers 80% of basic interview questions.

| Algorithm / Structure | Key Concept                    |
| --------------------- | ------------------------------ |
| LinearSearchList      | O(n) iteration                 |
| BinarySearchList      | O(log n) divide & conquer      |
| TwoCrystalBalls       | Square-root optimization       |
| BubbleSort            | Swapping & comparisons         |
| InsertionSort         | Sorted insertion               |
| ArrayList             | Dynamic arrays, amortized O(1) |
| Stack                 | LIFO                           |
| Queue                 | FIFO                           |
| SinglyLinkedList      | Pointer basics                 |
| DoublyLinkedList      | Two-way pointers               |

---

### Intermediate `ligma.config.intermediate.js` (Week 34)

Core patterns seen in coding rounds.

| Algorithm / Structure | Key Concept                   |
| --------------------- | ----------------------------- |
| MergeSort             | O(n log n) divide & conquer   |
| QuickSort             | O(n log n) in-place partition |
| Map                   | Hash table internals          |
| MinHeap               | Priority queue                |
| BTPreOrder            | Tree traversal                |
| BTInOrder             | Tree traversal                |
| BTPostOrder           | Tree traversal                |
| BTBFS                 | Breadth-first on trees        |
| CompareBinaryTrees    | Structural equality           |
| DFSOnBST              | Binary search tree search     |

---

### Advanced `ligma.config.advanced.js` (Week 56)

Senior-level and top-company interview material.

| Algorithm / Structure | Key Concept                  |
| --------------------- | ---------------------------- |
| LRU Cache             | HashMap + doubly linked list |
| Trie                  | Prefix tree                  |
| MazeSolver            | Recursive DFS pathfinding    |
| RingBuffer            | Circular buffer              |
| DFSGraphList          | Graph DFS (adjacency list)   |
| BFSGraphList          | Graph BFS (adjacency list)   |
| BFSGraphMatrix        | Graph BFS (adjacency matrix) |
| DijkstraList          | Shortest path                |
| PrimsList             | Minimum spanning tree        |

---

## Project Structure

```
kata-machine/
 src/
    __tests__/               # Jest test files  do not edit
    day1/                    # Generated practice days
    day2/
    ...
    golden/                  # Reference implementations (review after solving)
 scripts/
    generate.js              # Creates the next day folder
    clear.js                 # Removes all generated day folders
 ligma.config.beginner.js     # Algorithm list for beginners
 ligma.config.intermediate.js # Algorithm list for intermediate
 ligma.config.advanced.js     # Algorithm list for advanced
 ligma.config.js              # Your active config (git-ignored, create locally)
 LEARNING_PATH.md             # Detailed week-by-week study plan
 package.json
```

---

## Useful Commands

| Command            | Description                                     |
| ------------------ | ----------------------------------------------- |
| `npm run generate` | Create the next practice day                    |
| `npm test`         | Run tests for the current day                   |
| `npm run clear`    | Delete all generated day folders and start over |

---

## Study Tips

-   **Do not look at previous days** while implementing. Struggling is the training.
-   Day 12: Everything feels impossible. That is normal.
-   Day 34: Patterns start to click with less googling.
-   Day 5+: Writing from memory. Time to level up.
-   After all three levels, reinforce with 50100 LeetCode medium problems.

---

## How to Contribute

Contributions of all kinds are welcome bug fixes, new algorithms, better tests, or improved docs.

1. **Fork** this repo
2. **Create a branch**: `git checkout -b feature/your-change`
3. **Make your changes**
4. **Commit**: `git commit -m "short description of change"`
5. **Push**: `git push origin feature/your-change`
6. **Open a Pull Request** with a clear description

If you want to add a new algorithm, look at the existing stubs in any `src/day*/` folder and the matching test in `src/__tests__/` to follow the pattern.

---

## Credits

This project is inspired by and built on top of [ThePrimeagen](https://twitch.tv/ThePrimeagen)'s original [kata-machine](https://github.com/ThePrimeagen/kata-machine) repository, created live on Twitch as a daily DSA practice system.

The original repo provides the core generate-and-test workflow. This fork extends it with a structured three-level learning path (Beginner → Intermediate → Advanced) and a curated set of 29 algorithms designed to take you from zero to interview-ready.

---

## License

MIT
