// 🟡 INTERMEDIATE LEVEL - Week 3-4
// Focus: Core interview patterns - trees, efficient sorting, heaps
// Prerequisites: Can write all beginner algorithms from memory
// Goal: Handle 70% of company coding rounds
module.exports = {
    dsa: [
        // EFFICIENT SORTING (O(n log n) - Asked frequently)
        "MergeSort", // Stable sort - merge intervals, external sort
        "QuickSort", // Fast in-place sort - understand partitioning

        // KEY DATA STRUCTURES (Top interview topics)
        "Map", // Hash table - O(1) lookups (used everywhere!)
        "MinHeap", // Priority queue - top K, median, scheduling

        // BINARY TREE FUNDAMENTALS (50% of tree questions)
        "BTPreOrder", // Root→Left→Right (DFS pattern)
        "BTInOrder", // Left→Root→Right (BST sorted output)
        "BTPostOrder", // Left→Right→Root (tree deletion)
        "BTBFS", // Level-order (queue-based traversal)

        // TREE PROBLEM PATTERNS
        "CompareBinaryTrees", // Recursive tree comparison
        "DFSOnBST", // Binary Search Tree operations
    ],
};
