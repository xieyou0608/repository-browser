# repository-browser
GitHub repository 瀏覽網站

## 開啟方式：
1. 直接前往線上環境 https://repos-brower-app.herokuapp.com/
2. clone repository後，移動至 repo資料夾內，依序執行
>npm install

>npm star

## 程式架構
目錄結構
```
├─node_modules
├─public
└─src
    ├─components
        ├─Footer.js
        ├─Nav.js
        ├─Populars.js
        ├─RepoDetail.js
        ├─RepoIntro.js
        └─Search.js
    ├─pages
        ├─Homepage
        ├─RepoPage
        ├─UserPage
    ├─styles
        ├─style.css
    ├─App.js
    └─index.js
```

#### Homepage
網站首頁，包含
&lt; Search /&gt; 提供查詢功能，輸入 GitHub 用戶名稱後將會跳轉至瀏覽頁面  
&lt; Populars /&gt; 提供熱門的 GitHub 用戶或 Repositories，點擊後會跳轉至瀏覽頁面

#### UserPage
瀏覽單一使用者的 repositories 頁面  
進入頁面時發送一次 API 請求 ( GET /users/{username}/repos )，獲得的 repos data 以直排分布  
每個 repo 皆以 &lt; RepoIntro /&gt; 處理樣式，顯示內容包含基本資訊、內部連結(於網站內瀏覽)、以及外部連結(前往 GitHub)  
滑鼠滾至底部時，再發出下一筆 API 請求提供其他 repos 資料，每次至多 10 筆  
當沒有更多資料可以獲取時，會停止發送 API 請求  

#### RepoPage
瀏覽單一 repository 頁面  
進入頁面時發送 API 請求 ( GET /repos/{owner}/{repo} )，獲得的 repo data 傳入 &lt; RepoDetail /&gt; 處理樣式  
顯示內容包含基本資訊、內部連結以及外部連結，如果 repo 擁有 topics 或 homepage 的話會顯示其外部連結