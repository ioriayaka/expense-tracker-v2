# Expense Tracker
利用 Node.js + Express 打造的簡易支出與收入記帳網站 <br/><br/>
#### 登入畫面
![login image](https://github.com/ioriayaka/expense-tracker-v2/blob/main/public/images/login.png)
<br/><br/>

#### 收支平衡表 畫面
![balance image](https://github.com/ioriayaka/expense-tracker-v2/blob/main/public/images/balance.png)
<br/><br/>

#### 支出 畫面
![balance image](https://github.com/ioriayaka/expense-tracker-v2/blob/main/public/images/expense.png)
<br/><br/>

#### 收入 畫面
![balance image](https://github.com/ioriayaka/expense-tracker-v2/blob/main/public/images/income.png)
#### 後臺管理者 畫面
![後台](https://github.com/ioriayaka/expense-tracker-v2/blob/main/public/images/categoryrating.png)
![後台](https://github.com/ioriayaka/expense-tracker-v2/blob/main/public/images/userrating.png)
![後台](https://github.com/ioriayaka/expense-tracker-v2/blob/main/public/images/userslist.png)
## 部屬至 Heroku 
[My Expense Tracker](https://frozen-castle-59243.herokuapp.com/users/login)
Demo user account - ```user1@example.com /12345678```
Demo root account - ```root@example.com / 12345678```


## Features - 專案功能描述


- 註冊/登入/登出
  - 使用者可以用Facebook、Google、GitHub及信箱註冊帳號登入網站
  - 使用者註冊重複/登入/登出失敗時，會看到對應的系統訊
- 使用者
  - 使用者可以瀏覽屬於他自己的所有支出/收入紀錄和支出/收入總金額
  - 使用者可以依據類別或月份來篩選支出/收入紀錄
  - 使用者可以新增一筆支出/收入紀錄
  - 使用者可以編輯一筆支出/收入紀錄
  - 使用者可以刪除一筆支出/收入紀錄
- 後台管理
  - 管理者可以瀏覽站內所有的使用者清單
  - 管理者可以瀏覽全站的所有使用者的支出收入清單紀錄
  - 管理者可以看見所有使用者的收入排名、支出排名
  - 管理者可以看見所有類別的收入排名、支出排名

## Environment - 環境需求

* [Node.js v14.16.1](https://nodejs.org/en/)
* [MongoDB v4.2.14](https://www.mongodb.com/try/download/community)

## Installation and Execution - 安裝與執行
1.使用git clone下載至本地並安裝套件
```
git clone https://github.com/ioriayaka/expense-tracker-v2.git
cd expense-tracker-v2
npm install 
```

2.啟動本地 MongoDB 資料庫<br/><br/>

3.利用 .env.example 建立 .env 檔案並將對應的 ID 與 SECRET 填入<br/><br/>

4.啟動伺服器
```
npm run start
```

終端機顯示 ```The Express server is running on http://localhost:3000``` 代表伺服器成功啟動<br/>
顯示 ```mongodb connected!``` 代表伺服器成功與資料庫連接 <br/><br/>
5.新增種子資料
```
npm run seed
```
終端機出現 ```category seeder done!``` 和 ```record seeder done!``` 後 <br/>
即可至瀏覽器網址輸入 http://localhost:3000 瀏覽專案功能