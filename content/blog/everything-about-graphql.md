---
title : GraphQl [دليل شامل]
img : img/GraphQl.png
description : لغة إستعلام جديدة مطورة من طرف شركة فاسيبوك , لغرض إنشاء وتصميم الواجهات البرمجية APIs.
author : 1
category : [GraphQl]
created: 2020-08-09
tags : [api , graphql]
hotest: 1
status: 1
---
##  [ماهية لغة الإستعلام GraphQl](#ماهية-لغة-الإستعلام-graphql)

** GraphQl ** : لغة إستعلام مقدمة من طرف شركة فايسبوك سنة 2012 إستخدمت داخل مشاريع الشركة الداخلية قبل أن يتم إتاحتها للجميع إبتداءا من 2015 تحت رخص مجانية متاحة للكل (open source) .


## [الإشكالية في إستخدام REST APIs](#الإشكالية-في-إستخدام-rest-apis)

قبل أن يتم تطوير لغة الإستعلام **GraphQl** كانت جميع التطبيقات تشتغل بإستخدام ** REST APIs ** , ولكن مع التطور الكبير الحاصل سرعان مابدأت شركات كبرى تعاني من مشكلات في تطبيقاتها , وعلى رأس تلك المشاكل البيانات الزائدة و كثرة الإستعلامات بين وظائف التطبيق و مخزن البيانات .

 حسناً , لنوضح المسألة قليلاً .

## المسألة بشكل نظري

لنفترض لدي جدول به مجموعة من المنتجات وجدول آخر به الشركات المصنعة للمنتج .

1 . جدول المنتجات

| ID Com | Name  | Price | ID  |
| ------ | ----- | ----- | --- |
| S1     | PES 5 | $ 700 | 001 |
| S2     | Xbox  | $ 900 | 002 |
 
2 . جدول الشركات المصنعة

| Location | Name | ID  |
| -------- | ---- | --- |
| LV       | Sony | S1  |
| NY       | Xbox | S2  |

## المسألة تطبيقيا

ونفترض تاليا أننا نود عرض بيانات للمعرف التالي 001 .
وسيكون الإستعلام على الشكل التالي بإستخدام ** REST APIs ** .

```bash
GET https://api.domainname.com/products/001
```

والنتيجة : 

```json
// Result in JSON
{
  "ID": "001",
  "Name": "PES 5",
  "Price": "700$",
  "ID_Com": "S1"
}
```

 لكن الإشكالية ماذا لو نود الإتيان بالشركة المصنعة , والحل مع **REST APIs ** , من خلال القيام بإستعلام جديد وتضمين معرف الشركات المصنعة (ID_Com) , وتبدو هذه الطريقة الواحدة للقيام بالأمر , وفي كل مرة نود الحصول على معلومات , يكون علينا لزاما القيام بإستعلامات جديدة وهذا يستنزف الموارد بشكل كبير , خصوصا في التطبيقات الكبيرة كتطبيقات شركة ** فيسبوك  ** , الكثير من الإستعلامات قد يؤثر على الأداء .

### هذا وبالإضافة إلى أنه لاإمكانية ممكنة يقدمها REST تمكننا من تحديد فقط البيانات التي نريد الحصول عليها , فلو أردت الحصول  فقط على إسم المنتجات الموجودة , يقوم بإرسال كامل الحقول .


# [كيف تجاوز GraphQl إشكالية REST ؟ وبماذا يمتاز إستعلام GraphQl عن REST APIs ?](#كيف-تجاوز-graphql-إشكالية-rest--وبماذا-يمتاز-إستعلام-graphql-عن-rest-apis-)


قد تبدو إشكالية REST APIs بالنسبة للتطبيقات حاليا إشكالية مقلقة , تؤدي باالأداء , ويبدو أن هذه الإشكالية هي ما أقلقت شكرة ** فيسبوك ** لتطور بديل جديد يقوم بالمطلوب بأقل كلفة ممكنة في إستغلال الموارد .

فبإستخدام لغة الإستعلام ** GraphQl **  لك إمكانية تحديد البينات المراد الحصول عليها فقط , الحصول على بينات من جدولين مختلفيت مرتبطين كما في مثال سابق بإستعلام واحد وفقط .

## [مثال إستعلام GraphQl](#مثال-إستعلام-graphql)

نفس المثال السابق لكن بإستخدام ** GraphQL ** :

```graphql
product(id : "001"){
    name
    price
    company {
        name // إسم الشركة
    }
}
```

ونتيجة الإستعلام : 

```json
// Result in JSON
{
  "data": {
    "product": {
      "name": "PES 5",
      "price": "700$",
      "company": {
        "name": "Sony"
      }
    }
  }
}
```

الملاحظ في الإستعلام أننا إشتغلنا على جدولين مختلفين في إستعلام واحد (Product , Company) , يضم نص (String) يسمى بال Query , بالإضافة إلى تضمين إستعلامين في آن واحد قمنا بطلب فقط الحقول المحددة , بهذا تجاوز ** GraphQl ** ال ** REST APIs ** .

## [مميزات ** GraphQl ** ](#ومن-مميزات-graphql)

### 1. تتيح للعميل تحديد البيانات التي يحتاجها بالضبط .
### 2. تسهل عملية تجميع البيانات من مصادر متعددة.
### 3. تستخدم type system لوصف البيانات.

## [عملاء GraphQl](#عملاء-graphql)

يمكنك التعامل مباشرة مع إستعلامات GraphQl مباشرة دون الإستعانة بأدوات أو مكتبات , لكن توافر إمكانية الإستعانة بأدوات يسهل عليك العمليات بشكل كبير للغاية .

### Apollo : 

> Apollo عبارة عن نظام أساسي لبناء رسم بياني للبيانات ، وهو طبقة اتصال تربط عملاء التطبيق بسلاسة (مثل تطبيقات React و iOS) بخدماتك الخلفية.*حسب تعريف من منصة أبولو*

### Relay :

> مصمم من طرف شركة فيسبوك.

## [العمليات Queries, Mutations, و Subscriptions في GraphQl](#العمليات-queries-mutations-و-subscriptions-في-graphql)

حسنًا ، لقد أبرزنا بالفعل بعض الجوانب المهمة المرتبطة بـ GraphQL. ولكن ، لتطوير تطبيق يعمل بكامل طاقته ، نحتاج أيضًا إلى إلقاء نظرة على بعض المكونات الأخرى التي يمكن استخدامها .

### [Queries](#queries) :

هي طلبات بيانات يقدمها العميل للخادم , وتختلف عن ال Queries في REST كون أنه على العميل تحديد فقط البيانات المطلوبة .

```graphql
{
  Users {
    name
  }
}
```

حقل (Users) المبين أعلاه يسمى ب (root) بينما العناصر التي تأتي مباشرة ضمنه تسمى ب (payload) .

نتيجة الإستعلام أعلاه : 

```json
  {
    "Users": [    
    {"name": "Houssam"}
    {"name": "Salman"}
    {"name": "Fatma"}
    {"name": "ali"}
  ]
  }
  
```

من الملاحظ أن طلب البحث هذا نتج عنه أسماء المستخدمين (وذلك لأنه في طلب البحث ، حددنا بوضوح أننا نحتاج إلى قائمة الأسماء فقط). 

على سبيل المثال ، لنفترض أننا نرغب في الوصول إلى معلومات آخر 3 مستخدمين فقط من القائمة. 

```graphql
{
  Users(last : 3) {
    name
    username
  }
}
```

لقد تعرفنا عن الطريقة المستخدمة في الوصول إلى البيانات من خلال إستخدام الإستعلامات , تاليا سنلقي نظرة عن الكيفية التي من خلالها يمكننا إنشاء أو تحديث البيانات أو حذفها .


### [Mutations](#mutations) :

Mutations تستخدم في إنشاء , تحديث او حذف بيانات معينة , البنية الهيكلية تشبه إلى حد ما بنية Queries لكن مع تضمين كلمة Mutations في البداية.

```graphql
mutation {
  createUser (name : "Lahcen", username: "aieLahcen"){
    name
    username
  }
}
```

### [Subscriptions](#subscriptions) :

تمكن من الحصول بإستمرار على البيانات المحدثة , فكلما طرأ تغيير على البيانات يتم إخطار العميل , وفي الأخير الحصول على تحديثات جديدة للبيانات , من خلال الإعتماد على نمط PubSub حيث الخادم  يمثل **Publisher** والعميل  يمثل **Subscriber**.


## ختاماً

GraphQL لغة إستعلام جديدة ألقت بظلالها على نقط ضعف REST برزت في ظل التطور الشاهق الذي تشهده التطبيقات , وهذا لايقصي REST أبداً فلها سجل حافل من الكفاءة والآداء لسنوات عدة . لاكن دائما مانحتاج لحلول سريعة وجديدة للقيام بعمل ما على أوجه الكمال .




