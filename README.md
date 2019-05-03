# leetcode-js
My leetcode answers written in JavaScript.

| # | 题目 | 解答 | Difficulty | 备注 |
|:---:|:---:|:---:|:---:|:---:|
| 1 | 两数之和 | [JavaScript](./answer/1.Two%20Sum.js) | | |
| 2 | 两数相加 | [JavaScript](./answer/2.Add%20Two%20Numbers.js) | | |
| 3 | 无重复字符的最长子串 | [JavaScript](./answer/3.Longest%20Substring%20Without%20Repeating%20Characters.js) | | |
| 4 | 寻找两个有序数组的中位数 | [JavaScript](./answer/4.Median%20of%20Two%20Sorted%20Arrays.js) | | |
| 7 | 整数反转 | [JavaScript](./answer/7.Merge%20Two%20Sorted%20Lists.js) | | |
| 8 | 字符串转换整数(atoi) | [JavaScript](./answer/8.String%20to%20Integer%20(atoi).js) | | |
| 9 | 回文数 | [JavaScript](./answer/9.Palindrome%20Number.js) | | |
| 11 | 盛最多水的容器 | [JavaScript](./answer/11.Container%20With%20Most%20Water.js) | | |
| 14 | 最长公共前缀 | [JavaScript](./answer/14.Longest%20Common%20Prefix.js) | | |
| 15 | 三数之和 | [JavaScript](./answer/15.3Sum.js) | | |
| 16 | 最接近的三数之和 | [JavaScript](./answer/16.3Sum%20Closest.js) | | |
| 18 | 四数之和 | [JavaScript](./answer/18.4Sum.js) | | |
| 20 | 有效的括号 | [JavaScript](./answer/20.Valid%20Parentheses.js) | | |
| 21 | 合并两个有序链表 | [JavaScript](./answer/21.Reverse%20Integer.js) | | |
| 26 | 删除排序数组中的重复项 | [JavaScript](./answer/26.Remove%20Duplicates%20from%20Sorted%20Array.js) | | |
| 43 | 字符串相乘 | [JavaScript](./answer/43.Multiply%20Strings.js) | | |
| 46 | 全排列 | [JavaScript](./answer/46.Permutations.js) | | |
| 53 | 最大子序和 | [JavaScript](./answer/53.Maximum%20Subarray.js) | | |
| 70 | 爬楼梯 | [JavaScript](./answer/70.Climbing%20Stairs.js) | | |
| 78 | 子集 | [JavaScript](./answer/78.subsets.js) | | |
| 88 | 合并两个有序数组 | [JavaScript](./answer/88.Merge%20Sorted%20Array.js) | | |
| 104 | 二叉树的最大深度 | [JavaScript](./answer/104.Maximum%20Depth%20of%20Binary%20Tree.js) | | |
| 136 | 只出现一次的数字 | [JavaScript](./answer/136.Single%20Number.js) | | |
| 141 | 环形链表 | [JavaScript](./answer/141.Linked%20List%20Cycle.js) | | |
| 142 | 环形链表 II | [JavaScript](./answer/142.Linked%20List%20Cycle%20II.js) | | |
| 148 | 排序链表 | [JavaScript](./answer/148.Sort%20List.js) | | |
| 151 | 翻转字符串里的单词 | [JavaScript](./answer/151.Reverse%20Words%20in%20a%20String.js) | | |
| 189 | 旋转数组 | [JavaScript](./answer/189.Rotate%20Array.js) | | |
| 206 | 反转链表 | [JavaScript](./answer/206.Reverse%20Linked%20List.js) | | |
| 215 | 数组中的第K个最大元素 | [JavaScript](./answer/215.Kth%20Largest%20Element%20in%20an%20Array.js) | | |
| 217 | 存在重复元素 | [JavaScript](./answer/217.Contains%20Duplicate.js) | | |
| 230 | 二叉搜索树中第K小的元素 | [JavaScript](./answer/230.Kth%20Smallest%20Element%20in%20a%20BST.js) | | |
| 235 | 二叉搜索树的最近公共祖先 | [JavaScript](./answer/235.Lowest%20Common%20Ancestor%20of%20a%20Binary%20Search%20Tree.js) | | |
| 236 | 二叉树的最近公共祖先 | [JavaScript](./answer/236.Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree.js) | | |
| 231 | 2的幂 | [JavaScript](./answer/231.Power%20of%20Two.js) | | |
| 238 | 除自身以外数组的乘积 | [JavaScript](./answer/238.Product%20of%20Array%20Except%20Self.js) | | |
| 292 | Nim游戏 | [JavaScript](./answer/292.Nim%20Game.js) | | |
| 344 | 反转字符串 | [JavaScript](./answer/344.Reverse%20String.js) | | |
| 350 | 两个数组的交集II | [JavaScript](./answer/350.Intersection%20of%20Two%20Arrays%20II.js) | | |
| 557 | 反转字符串中的单词 III | [JavaScript](./answer/557.Reverse%20Words%20in%20a%20String%20III.js) | | |
| 567 | 字符串的排列 | [JavaScript](./answer/567.Permutation%20in%20String.js) | | |


### 笔记

#### 深度优先遍历(DFS)

- 排列组合问题，一般可使用DFS解决，详见46、78.
- 二叉树的相关问题一般也可以考虑使用DFS入手，详见104.


#### 数组问题

- 单指针解决，详见3.
- 双指针解决，详见11、15、16、18.
- 滑动窗口解决，尤其是数组中是否包含满足条件的子串的问题，详见567.

#### 链表问题

- 递归或者循环遍历解决，详见2、206.

#### 回文问题

- 一般思路，可以用从中间向两边扩散的方法，用这种方法判断一段文本是否为回文，时间复杂度为O(n)。而用该方法找出一段文本的最大回文子串，时间复杂度为O(n^2)，详见9.
- 最优解，最大回文子串的最优解法为马拉车(Manacher)算法，时间复杂度为O(n).

#### 最近公共祖先(LCA)问题



#### 括号问题

- 像括号这类，特定要求的对称问题，可以使用堆栈解决，详见20.


#### 链表环问题

- 一般可以通过快慢指针解决，有无环就通过快慢指针是否会相遇判断，详见141、142.


#### 排序问题

- 无论是链表排序还是数组排序，都可以使用快排或者归并思想进行排序，详见148.