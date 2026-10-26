---
title: "Transaction 與 ACID"
description: "資料庫的交易（Transaction）是什麼？"
pubDate: 2026-10-24
heroImage: "/atomic-orbit.webp"
category: "Database"
---
## 什麼是 Transaction？
在特定情況下對於多筆資料的操作（寫入、更新、刪除），只允許同時失敗或者同時成功時，就會使用 Transaction。

## 什麼情況下需要 Transaction？
以 7-11 便利商店的點數贈與來舉例，使用者 A 把 100 點的 open points 轉給使用者 B，此時就是對於點數的兩筆操作，並且這兩筆操作只允許同時成功（點數順利從 A 轉去給 B），或者同時失敗（可能因為網路連線不穩定，點數轉移失敗，100 點還在 A 的 App 裡）。

## 沒有 Transaction 會怎麼樣？
以上述例子來看，假設沒有把這兩筆對於點數的操作包在同一個 Transaction，就不能完成轉帳了嗎？還是可以，只是假設過程中出現任何錯誤，導致 A 已經將點數轉出，但是 B 這裡卻顯示尚未收到點數，那這些點數去哪裡了？錯誤又出現在哪裡？所以 Transaction 的存在，正是縮小了出錯的範圍，同時也能確保資料的完整性。

## 什麼是 ACID？
#### Transaction 具備四大特性，ACID 就是這四大特性的縮寫（acronym）。

**A：Atomicity**
<br>原子性，這裡說到的原子是國中理化課裡的「原子」，利用的正是原子的「不可分割」特性，說明 Transation 在過程中不是全部成功，就是全部一起失敗，沒有任何例外。

**C：Consistency**
<br>一致性，指 Transction 進行前後，確保資料都是完整且一致的。以上述贈與點數的例子來看，使用者 A 轉贈點數前，100 點就是在自己的 App 裡，轉贈後，這 100 點只是變到使用者 B 的 App 中，點數總量恆為 100，不會因為任何操作，總量就不是 100。

**I：Isolation**
<br>隔離性，指多筆同時進行的資料修改，彼此互相不造成影響。同樣以點數贈與為例，使用者 A 轉給 B，其他使用者 C 與 D 也同時在進行點數贈與，兩個情況並不會互相影響，正是隔離性的核心。

**D：Durability**
<br>持久性，指 Transation 結束後，受到變更的資料不會因為任何原因，改變已經造成的結果，即 Transaction 造成的結果是持久的。

## Learning Materials
* [What is a Database Transaction? Be ACID compliant!](https://www.youtube.com/watch?v=wHUOeXbZCYA&t=310s)
* [圖解資料庫的工作原理](https://www.tenlong.com.tw/products/9786263240360)
* [維基百科 - ACID](https://zh.wikipedia.org/zh-tw/ACID)

