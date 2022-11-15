---
title : Laravel 8 متاح الآن , تعرف على ميزاته الجديدة
img : img/laravel8.jpg
description : تم إصدار Laravel 8 الآن ويتضمن العديد من الميزات الجديدة بما في ذلك Laravel Jetstream
author : 1
category : إطار عمل 
created: 2020-09-09
tags : [laravel 8 , لارافيل 8]
hotest: 0
---
## تقديم :

تم إصدار Laravel 8 الآن ويتضمن العديد من الميزات الجديدة بما في ذلك Laravel Jetstream , models directory, model factory classes, migration squashing, rate-limiting improvements, time testing helpers, ومكونات الشفرة الديناميكية ، والعديد من الميزات الأخرى.

قبل الانتقال إلى الميزات الجديدة ، نود الإشارة إلى أنه بدءًا من الإصدار 6 ، يتبع Laravel الآن semver وسيصدر إصدارًا رئيسيًا جديدًا كل ستة أشهر. يمكنك أن ترى كيف تعمل [عملية الإصدار هنا.](https://laravel-news.com/laravel-releases)

## Laravel Jetstream 

يعمل Laravel Jetstream على تحسين سقالات Laravel UI الموجودة في الإصدارات السابقة. يوفر نقطة انطلاق للمشاريع الجديدة ، بما في ذلك تسجيل الدخول ، والتسجيل ، والتحقق من البريد الإلكتروني ، والمصادقة الثنائية ، وإدارة الجلسة ، ودعم واجهة برمجة التطبيقات عبر Laravel.

## Models Directory (دليل النماذج)

يتضمن الهيكل العظمي لتطبيق Laravel 8 دليل app / Models. تفترض جميع أوامر المولد أن النماذج موجودة في app/Models ؛ ومع ذلك ، إذا لم يكن هذا الدليل موجودًا ، فسيفترض إطار العمل أن التطبيق يحتفظ بالنماذج داخل app/ folder.

## Model Factory Classes

أصبحت مصانع النماذج Eloquent الآن قائمة على الفئة بدءًا من Laravel 8 ، مع دعم محسّن للعلاقات بين المصانع (أي أن لدى المستخدم العديد من المنشورات). أعتقد أنك ستوافق على مدى روعة البنية الجديدة في إنشاء السجلات عبر مصانع النماذج الجديدة والمحسنة:

```php
    use App\Models\User;

    User::factory()->count(50)->create();

    // using a model state "suspended" defined within the factory class
    User::factory()->count(5)->suspended()->create();
```

## Migration Squashing (تهجير البيانات)

إذا كان التطبيق الخاص بك يحتوي على العديد من ملفات الترحيل ، فيمكنك الآن ضغطها في ملف SQL واحد. سيتم تنفيذ هذا الملف أولاً عند تشغيل عمليات الترحيل ، متبوعةً بأية ملفات ترحيل متبقية ليست جزءًا من ملف المخطط المضغوط. يمكن أن يؤدي تهجير عمليات الترحيل الحالية إلى تقليل تضخم ملف الترحيل وربما تحسين الأداء أثناء إجراء الاختبارات.

## Improved Rate Limiting (التحسين)

يوفر Laravel 8 تحسينات على وظائف تحديد المعدل الحالية مع دعم التوافق مع الإصدارات السابقة مع البرامج الوسيطة  وتقديم مرونة أكبر بكثير : 

```php
    use Illuminate\Cache\RateLimiting\Limit;
    use Illuminate\Support\Facades\RateLimiter;

    RateLimiter::for('global', function (Request $request) {
        return Limit::perMinute(1000);
    });
```

كما ترى ، تأخذ دالة for () نسخة طلب HTTP ، مما يمنحك تحكمًا كاملاً في تقييد الطلبات ديناميكيًا.

## Time Testing Helpers (تحسين الإختبارات)

يتمتع مستخدمو Laravel بالتحكم الكامل في تعديل الوقت عبر مكتبة Carbon PHP الممتازة. يقدم Laravel 8 هذه الخطوة إلى الأمام من خلال توفير مساعدين اختبار مناسبين للتحكم في الوقت داخل الاختبارات:

```php 
    // Travel into the future...
    $this->travel(5)->milliseconds();
    $this->travel(5)->seconds();
    $this->travel(5)->minutes();
    $this->travel(5)->hours();
    $this->travel(5)->days();
    $this->travel(5)->weeks();
    $this->travel(5)->years();

    // Travel into the past...
    $this->travel(-5)->hours();

    // Travel to an exact time...
    $this->travelTo(now()->subHours(6));

    // Return back to the present time...
    $this->travelBack();
```

عند استخدام هذه الطرق ، ستتم إعادة ضبط الوقت بين كل اختبار.


## Dynamic Blade Components (مكونات الشفرة الديناميكية)

تحتاج أحيانًا إلى تقديم مكون شفرة ديناميكيًا في وقت التشغيل. يوفر Laravel 8 <x-dynamic-component /> : 

```php

<x-dynamic-component :component="$componentName" class="mt-4" />


```

## ختاماً

تعرف على المزيد حول إطار لارافيل 8 من خلال الموقع الرسمي والمصدر الرئيسي للمقال : [Laravel 8](https://laravel.com/docs/8.x/releases)


