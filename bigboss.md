/////////////////////  HOW TO START  /////////////////////////


1 > NPM INSTALL  > lA MA3NDEKCH NODE MODULES


2 > npx prisma migrate dev --name init  > ONLY FIRST TIME > IF TABLES CREATED DONT EXECUTE

3 > node server.js > 🚀 http://localhost:3000/login

//////////////////////////  ACCESS  /////////////////////////

chef dentreprise > 1234567891012 ADMIN


//////////////////////////////////       SCRIPT TECHNIQUE              //////////////////////////////////////


Aujourd’hui je vais vous présenter mon projet un peu plus en détail sur la partie technique, pour expliquer comment j’ai conçu l’application et comment les différentes parties fonctionnent ensemble.

---

## 🧠 L’objectif du projet

L’objectif était de créer une application web simple pour gérer une entreprise avec ses employés et ses ordinateurs, tout en mettant en pratique des concepts backend importants comme l’authentification, les relations en base de données et la structuration du code.

---

## ⚙️ Stack technique

J’ai utilisé :

* Node.js avec Express pour créer le serveur
* Prisma comme ORM pour communiquer avec la base de données
* Twig comme moteur de templates pour générer les pages côté serveur
* express-session pour gérer les sessions (token de session)
* bcrypt pour hasher les mots de passe

---

## 🔐 Authentification et token de session

Quand un utilisateur se connecte, on vérifie ses identifiants puis on stocke son `companyId` dans la session.

On peut voir ça comme un token de session qui permet au serveur de savoir que l’utilisateur est authentifié à chaque requête.

Ensuite j’ai créé un middleware `auth` qui vérifie si la session contient cet id. > dossier security

Si ce n’est pas le cas → on redirige vers la page login.

Ça permet de protéger toutes les routes sensibles comme le dashboard, la gestion des employés et des ordinateurs.

---

## 🛡️ Protection des routes

Toutes les routes importantes utilisent le middleware auth.

Par exemple :

* /dashboard
* /employee/*
* /computer/*

Ça empêche un utilisateur non connecté d’accéder aux données.

---

## 🗄️ Relations en base de données

J’ai utilisé Prisma pour définir les relations entre les tables.

### Relation Company → Employees     >       one-to-many

Une entreprise peut avoir plusieurs employés.

Donc c’est une relation one-to-many.

Chaque employé possède un companyId qui pointe vers son entreprise.

---

### Relation Company → Computers   > one-to-many

Une entreprise peut aussi avoir plusieurs ordinateurs.

Même principe, relation one-to-many.

---

### Relation Employee → Computer

Un employé peut avoir un seul ordinateur et un ordinateur peut être assigné à un seul employé.

C’est une relation one-to-one optionnelle.

Le champ employeeId dans Computer peut être null si l’ordinateur n’est pas assigné.

---

## 🔄 Logique d’assignation

Quand on veut assigner un ordinateur, on récupère uniquement :

* les employés qui n’ont pas encore d’ordinateur
* ou celui déjà assigné

Ça évite d’avoir plusieurs ordinateurs pour un même employé.


---

## 🖥️ Utilisation de Twig

Twig est utilisé pour générer les pages HTML côté serveur.

J’ai utilisé Twig pour :

* afficher les listes d’employés
* afficher les ordinateurs
* afficher les données de l’entreprise

---

## 🔁 Boucles dans Twig

Par exemple, pour afficher les employés, on utilise une boucle for pour parcourir la liste envoyée depuis le controller.

Ça permet d’afficher dynamiquement les données venant de la base.

Twig permet aussi :

* des conditions if
* afficher des variables
* créer des formulaires

Ça rend les pages dynamiques sans écrire beaucoup de JS côté client.

---

## 🧩 Architecture du projet

J’ai structuré le projet en style MVC simple :

* Routes → définissent les endpoints
* Controllers → contiennent la logique métier 
* Security → vérifie l’authentification
* Prisma → accès base de données
* Views Twig → affichage

Ça permet de séparer les responsabilités et rendre le code plus lisible.

---

## 🔄 Flux d’une requête

Quand un utilisateur fait une action :     > EXEMPLE > ENTRE A LA PAGE LOGIN

1️⃣ La requête arrive dans une route  > LROUTE HIA LWLA KATCHED, LINA LA REQUETE DIAL USER HIT 3IET ELA 3LA LOGIN KAINA ROUTE LOGIN
2️⃣ Le middleware vérifie la session  > MIDDLEWARE HOUA JHAIZ MORA ROUTE KIHMI CONTROLLER
3️⃣ Le controller exécute la logique  > CONTROLLER KI3IET ELA PRISMA DIR KHDEMTHA
4️⃣ Prisma interagit avec la base     > PRISMA KATMCHI DATABASE TJIB DATA W TRJE3 L CONTROLLER
5️⃣ On renvoie une vue Twig avec les données  > 3️⃣CONTROLLER KICHED DATA MEN 3END PRISMA W KI3TIHA L TWIG

                                           > USER KIKHRJ LIH HTML  F REQUET W KATBAN LIH PAGE

---

## 🔒 Sécurité

Pour la sécurité j’ai :

* hashé les mots de passe avec bcrypt    > AU LIEU DE STOCKER MDP DANS DATABASE > LE CRYPTE AVANT > RAISON DE SECURITE
* protégé les routes avec session        
* évité d’exposer les ids côté client inutilement

---

## 🎯 Ce que ce projet montre techniquement

Ce projet montre que je comprends :

* CRUD complet   > CREATE READ UPDATE DELETE > EXEMPLE AJOUTER MODIFIER VOIR SUPPRIMER UN ORDINATEUR
* authentification avec session  > LOGIN , INSCRIPTION
* relations en base de données > ONE TO MANY ....... 
* structuration backend  > separation de dossiers
* rendu côté serveur  > twig 
* middleware   > middleware > dossier security > houa wahed hajiiiz kihmii ga3 routes

---

---

## ✅ Conclusion

Ce projet m’a permis de consolider ma compréhension du développement backend et de voir comment construire une application complète avec authentification, base de données relationnelle et rendu serveur.

Même si c’est un projet simple, il couvre les concepts essentiels qu’on retrouve dans des applications réelles.

Merci 🙂












////////////////                               NON TECHNIQUE                                       ///////////////////






Bonjour 👋

Aujourd’hui je vais vous présenter mon projet, c’est une petite application web que j’ai développée pour gérer une entreprise avec ses employés et ses ordinateurs.

Je vais expliquer simplement comment ça marche et pourquoi j’ai fait certains choix.

---

## 🧠 L’idée du projet

Le but du projet est de permettre à une entreprise de :

* créer un compte
* se connecter
* ajouter des employés
* ajouter des ordinateurs
* assigner un ordinateur à un employé

Je voulais faire quelque chose de simple mais qui montre les bases d’une vraie application web avec authentification et base de données.

---

## ⚙️ Les technologies utilisées

Pour ce projet j’ai utilisé :

* Node.js avec Express pour le serveur
* Prisma pour la base de données
* Twig pour les pages
* express-session pour gérer la connexion
* bcrypt pour sécuriser les mots de passe

J’ai choisi ces outils parce qu’ils sont assez simples à comprendre quand on débute et très utilisés.

---

## 🔐 Comment fonctionne la connexion

Quand une entreprise s’inscrit, son mot de passe est hashé avec bcrypt avant d’être enregistré.

Ensuite quand elle se connecte, on vérifie le mot de passe et on stocke son id dans la session.

Ça permet de sécuriser les routes comme le dashboard.

---

## 📊 Le dashboard

Une fois connecté, on arrive sur le dashboard qui affiche :

* les informations de l’entreprise
* la liste des employés
* la liste des ordinateurs
* les assignations

C’est vraiment la page centrale de l’application.

---

## 👨‍💼 Gestion des employés

On peut :

* ajouter un employé avec ses infos
* modifier ses informations
* supprimer un employé

J’ai aussi prévu que le mot de passe ne change que si on en met un nouveau lors de la modification.

---

## 💻 Gestion des ordinateurs

On peut :

* ajouter un ordinateur avec son adresse MAC
* modifier
* supprimer

Et surtout on peut assigner un ordinateur à un employé.

J’ai fait en sorte qu’un employé ne puisse avoir qu’un seul ordinateur pour garder une logique simple.

---

## 🏗️ Structure du projet

J’ai organisé le projet en plusieurs parties pour que ce soit plus clair :

* routes → pour définir les URLs
* controllers → pour la logique
* middleware → pour vérifier la connexion
* prisma → pour la base de données

Ça aide à garder un code propre et plus facile à maintenir.

---

## 🎯 Ce que j’ai appris

Avec ce projet j’ai mieux compris :

* comment fonctionne l’authentification avec session
* comment structurer un projet Express
* comment utiliser Prisma
* comment organiser le code en MVC simple
* comment gérer les relations entre tables

---

## 🚀 Améliorations possibles

Si je continue ce projet je pourrais ajouter :

* validation des formulaires
* messages d’erreur plus clairs
* design amélioré
* rôles utilisateurs
* API REST

---

## ✅ Conclusion

Ce projet m’a permis de pratiquer les bases du développement backend et de comprendre comment les différentes parties d’une application web fonctionnent ensemble.

Il est simple mais il couvre les concepts importants comme l’authentification, CRUD et relations en base de données.

Merci 🙂




//////////////////////////////////





السلام عليكم 👋

اليوم غادي نقدّم المشروع ديالي ونشرح كيفاش خدمتو من ناحية تقنية بطريقة بسيطة باش تكون الفكرة واضحة.

---

## 🧠 فكرة المشروع

الفكرة ديال المشروع هي تطبيق ويب صغير كيخلّي شركة تدير:

* إنشاء حساب
* تسجيل الدخول
* إضافة موظفين
* إضافة حواسيب
* ربط حاسوب بموظف

بغيت ندير مشروع بسيط ولكن فيه المفاهيم الأساسية ديال backend بحال authentication و العلاقات فقاعدة البيانات.

---

## ⚙️ التقنيات اللي استعملت

فهاد المشروع استعملت:

* Node.js مع Express باش نبني السيرفر
* Prisma باش نتعامل مع قاعدة البيانات
* Twig باش نعرض الصفحات
* express-session باش ندير session (بحال token ديال الجلسة)
* bcrypt باش نحمي كلمات السر

اخترت هاد الأدوات حيث ساهلين نسبياً للمبتدئين وكيتستعملو بزاف.

---

## 🔐 تسجيل الدخول و Token ديال Session

مني الشركة كتسجّل الدخول، كنقارن كلمة السر مع اللي مخزنة فالداتابيز.

إلى كانت صحيحة، كنخزّن companyId فال session.

هاد الشي بحال token كيعرّف السيرفر باللي المستخدم راه مسجّل الدخول.

ومن بعد استعملت middleware سميتو auth كيتأكد واش session فيها id ولا لا.

إلى ما كانش → كيرجع لل login.

---

## 🛡️ حماية الروتات

الروتات المهمة بحال:

* dashboard
* employee
* computer

كلهم محميين بال middleware باش ما يدخل حتى واحد ما مسجّلش الدخول.

---

## 🗄️ العلاقات فقاعدة البيانات

استعملت Prisma باش نحدد العلاقات بين الجداول.

### شركة و الموظفين

شركة وحدة يمكن يكون عندها بزاف الموظفين.

هاد علاقة one-to-many.

كل موظف عندو companyId كيشير للشركة.

---

### شركة و الحواسيب

نفس الفكرة، شركة وحدة يمكن يكون عندها بزاف الحواسيب.

---

### موظف و حاسوب

الموظف يمكن يكون عندو غير حاسوب واحد، والحاسوب يمكن يكون مربوط بموظف واحد فقط.

هاد علاقة one-to-one اختيارية حيث ممكن الحاسوب يكون ما مربوط حتى بحد.

---

## 🔄 منطق التعيين

مني كنربط حاسوب بموظف، كنجيب غير الموظفين اللي ما عندهمش حاسوب أو اللي مرتبطين بهاد الحاسوب.

باش ما يكونش موظف عندو أكثر من حاسوب.

---

## 🖥️ استعمال Twig

Twig استعملتو باش نعرض الصفحات HTML من السيرفر.

كنمرّر البيانات من controller وكنعرضها فالصفحة.

---

## 🔁 Loop ف Twig

مثلاً باش نعرض لائحة الموظفين كنستعمل loop for باش ندوز على اللائحة ونطبع البيانات.

Twig فيه حتى:

* conditions if
* عرض المتغيرات
* الفورمات

كيخلّي الصفحات dynamic بلا ما نكتب بزاف JavaScript.

---

## 🧩 هيكلة المشروع

قسمت المشروع بطريقة بسيطة بحال MVC:

* routes → الروابط
* controllers → المنطق
* middleware → التحقق من login
* prisma → قاعدة البيانات
* views → الصفحات

هاد الشي كيعاون يكون الكود منظم وسهل الفهم.

---

## 🔄 كيفاش كتدوز request

1️⃣ المستخدم كيدير request
2️⃣ كتوصل لل route
3️⃣ middleware كيتأكد من session
4️⃣ controller كيدير المنطق
5️⃣ prisma كيتعامل مع الداتابيز
6️⃣ كنرجعو صفحة Twig

---

## 🔒 الحماية

درت:

* hash لكلمات السر
* حماية الروتات
* session authentication

---

## 🎯 شنو تعلمت من المشروع

هاد المشروع علّمني:

* كيفاش ندير authentication
* كيفاش نخدم ب ORM
* العلاقات فقاعدة البيانات
* تنظيم المشروع
* CRUD كامل
* middleware
* server side rendering

---

## 🚀 تحسينات ممكنة

إلى بغيت نطوّر المشروع أكثر نقدر نضيف:

* validation للفورمات
* error handling
* API JSON
* JWT
* pagination
* roles

---

## ✅ الخلاصة

هاد المشروع بسيط ولكن فيه المفاهيم الأساسية ديال backend وكيبيّن كيفاش نقدر نبني تطبيق كامل فيه login و database و إدارة البيانات.

شكراً 🙂

