---
title : شرح Data Structures ودورها في ترتيب البيانات
img : img/Data Structure.png
description : في مجال هندسة البرمجيات جملة Data Structure تعني بنية أو هيكل البيانات والتي تتيح لك ترتيب وتخزين البيانات
author : 1
category : [بيانات]
created: 2020-07-27
tags : [ البيانات , هيكلة, Data Structures]
hotest: 1
---
## ماهي البيانات ؟

عموما في عالم البرمجة تتعامل مع البيانات بشكل أساسي كونها هي التي تجسد تطبيق ما او موقع ما , كأسماء المشتركين أو محتوى المقالات , تخزن هاته البيانات على سرفرات خاصة ليتم جلبها والعمل عليها وفق تطبيقات و أحداث على برنامج أو تطبيق أو موقع معين .

## الإشكالية : 

تكمن إشكالية تخزين البيانات المملوكة لنا في كيفية التعامل معها , لنفترض أنك مالك شركة عقار , كل يوم تتوصل ب 10 عمليات بيع ومثلها طلبات للشراء وفي اليوم التالي كذلك , لكن يلزمك في اليوم التالي أيضا التعامل مع طلبات اليوم الذي سبق , لتحديد العمليات التي تمت والعمليات التي فشلت والعمليات التي لم تتكمل قيمتها , بالإضافة لتحديد حال تطور الطلبات وتوفر العقار والقيمة المطلوبة والتفاوض وحالته , كمية كبيرة من المعلومات المرتبطة أساسا , هذا كله يجسد إشكالية ألا وهي إشكالية ترتيب المعلومات .

هنا يبدأ الحديث عن دور مفهوم ** Data Structures ** .

## مفهوم Data Structures :

** Data Structures ** تعني هيكلة البيانات , التي توفر لك إمكانية التحكم في ترتيب البيانات , وتهيئتها بشكل كفوء و سليم للتعامل معها بشكل جيد والتعديل عليها . بالإضافة إلى تسريع عمليات المعالجة والبحث من خلال خوارزميات فعالة .

ول Data Structures أنواع نمطية متعددة نذكر منها نوعين رئيسيين , ال ** Primitive Types ** و ** Composite Types **

1. ** Primitive Types **

وهي النوع المعروف جدا , وأساس جل اللغات البرمجية ويندرج ضمنه : 

   Integer 

وهو العدد الصحيح الطبيعي دون أعداد الكسور [-,+]

> مثال عملي بلغة Javascript

```javascript
    var myInteger = 5 ; // integer type
    typeOf(myInteger) ; // number 
    console.log(myInteger); // output = 5
```

-  Bool

وهي قيمت من قيميتن [true,false] أو [0,1] , ستم إستخدامهم في الدوال الشرطية وهنا مثال بال Javascript أيضا :

```javascript
    var name = '';

    if(name == ''){ // true
        console.log("Please Enter a name");
    } else { // false mean name = 'value..'
        console.log("Valid name");
    }   
```

-  Float

هو نوع العدد العشري الذي يحتوي على فاصلة عشرية ونأخد مثال بلغة بايثون 

```python 
    five_units_number = 16355

    p1 = 1635.5 * (10 ** 1)
    p2 = 163.55 * (10 ** 1)
    p3 = 16.355 * (10 ** 2)
    p4 = 1.6355 * (10 ** 3)
    p5 = 0.16355 * (10 ** 4)

    print(int(p1)) # 1635
    print(int(p2)) # 1635
    print(int(p3)) # 1635
    print(int(p4)) # 1635
    print(int(p5)) # 1635
```

-  Character

الأرقام والحروف يشكلون لنا في النهاية  Character بالإضافة لحروف اساسية ك Tab و Return 

1. ** Composite Types **

البيانات المركية أو Non Primitive بدورها تنقسم لجزيئين , Linear Data Structure و Non Linear Data Structure 

-  Linear Data Structure

وهي البيانات التي تشكل سلسة بينات موضعة على شكل تسلسلي بجانب بعضها البعض .

-  Non Linear Data Structure

وتشكل سلسلة مترابطة غير مرتبة وغير موضعة بجانب بعضها البعض وتوضح روابط إرتباطها مع حاوية بيانات أخرى 

مثال توضيحي : 

![Non and Linear Data Structure](./images/NonandLinearData.png)

# وتضم مجموعة Linear Data Structure : 

- ** Arrays **

إضافة مجموعة من البيانات من نفس النوع في مكان واحد ويمكن الوصول لكل عنصر من العناصر عن طريق ال Index الخاص به 

مثال عملي : Javascript 

```javascript
const arrA = ["Ali", "Hassan"]; // array with names
const arrB = [21, 15]; // array with num 'ages'

console.log(arrA[1]); // Hassan
console.log(arrB[0]); // 21
```

- ** Stacks **

 في ال Stack البيانات تدخل وتخرج من مكان واحد ودخول البيانات يسمى Push وخروج البيانات يسمى Pop وهناك Peek لمعرفة أعلى عنصر في ال Stack وإدخال العناصر وإزالتها بهذا الترتيب يسمى LIFO بمعنى Last In First Out بمعنى من دخل أخيرا يخرج أولا وفيما يلي مثال بلغة Python لعرض الفكرة.

 
 ```python
    stack_example = []

    stack_example.append('Ali')
    stack_example.append('Hassan')
    stack_example.append('Aligo')

    print(stack_example) # ["Ali", "Hassan", "Aligo"]

    print(stack_example.pop()) # Aligo
    print(stack_example.pop()) # Hassan
    print(stack_example.pop()) # Ali

    print(stack_example) # [] // Empty
 ```

- ** Queue **

نفس فكرة عمل ال Stack ولكن هناك مكانين يخرج منهم البيانات وتقوم بإضافة البيانات بواسطة enqueue() وإزالة البيانات بواسطة dequeue() والترتيب الخاص به يعمل بنظام FIFO

```python
    queue_exemple = []

    queue_exemple.append('Ali')
    queue_exemple.append('Hassan')
    queue_exemple.append('Aligo')

    print(queue_exemple) # ["Ali", "Hassan", "Aligo"]

    print(queue_exemple.pop(0)) # Ali
    print(queue_exemple.pop(0)) # Hassan
    print(queue_exemple.pop(0)) # Aligo

    print(queue_exemple) # [] // Empty
```

- ** Linked List **

 هي بنية من البيانات تحتوي على مجموعة من السجلات مرتبة ومرتبطة ببعضها البعض وكل سجل يحتوي على حقلين الحقل الأول يحتوي على القيمة والثاني يحتوي على مؤشر عنوان.

 ![بنية البيانات](https://elzero.org/wp-content/uploads/2020/05/data-structure-linked-list.png)

 [مصدر الصورة اكاديمية الزيرو](https://elzero.org/everything-about-data-structure/)

## Non Linear Data Structure

بشكل عام عكس سابقتها Linear Data Structure فهي تخزن بطريقة مختلفة لكن مرتبطة .

ومن أهم عنصر في المجموعة الشجرة أو Tree 

-  TREE

سميت بالشجرة لتوضيح مدى الإرتباط الكامن بين البيانات في عنصر Tree , حيث أن ال Root الخاص بالشجرة في أعلى الشجرة والعناصر الموجودة في البنية تسمى Nodes وتتصل ببعضها عن طريق ال Edges وكل Node يحتوي على بيانات أو قيمة ( Value ) ويمكن أن يكون تحته Child Node أو لا, ويطلق على العناصر في أسفل الشجرة Leaf Nodes وهي العناصر التي لا يوجد تحتها Childs 

![Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sorted_binary_tree_breadth-first_traversal.svg/250px-Sorted_binary_tree_breadth-first_traversal.svg.png)

**1. Root   :**	أعلى Node في الشجرة
**2. Edge   :**	حلقة الوصل بين ال Nodes
**3. Child  :**	عبارة عن Node يحتوي على Parent
**4. Parent :**	عبارة عن Node يحتوي على حلقة وصل بينه وبين Child Node
**5. Leaf   :**	عبارة عن Node لا يوجد لديه Child Node

-  Hash Table

hash table من أسرع هياكل البيانات ويجب أستخدامها في حال أردت سرعه كبيره في عمليه البحث والإدخال ،،
تستخدم هذه البنيه داله هاشيه hash function تقوم بتحويل المدخلات الى قيم محصوره تكون عباره عن مواقع Index في الجدول table .

![Hash table](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/315px-Hash_table_3_1_1_0_1_0_0_SP.svg.png)

## ختاما 

دور Data Structure يتمحور أساسا حول الكيفية الممنهجة في هيكلة البيانات , الشيء الذي قضى على إشكاليات كانت ستكون عائق بارز في التعامل مع البيانات .

وأدعوك للإنضمام ومتابعتنا :
- [مدونة كوخ على فيسبوك](https://web.facebook.com/Ko5Blog/)
- [مدونة كوخ على تويتر](https://twitter.com/Ko5Blog)
- [أو ودعمنا على بايبال للحصول على دومين خاص شكرا .](https://paypal.me/ALAHCEN?locale.x=en_US)

## مصادر المقالة :

- [ويكيبيديا](https://en.wikipedia.org/wiki/List_of_data_structures)
- [أكاديمية الزيرو](https://elzero.org/everything-about-data-structure/)




