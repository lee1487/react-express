## react-express 설정

# 1.step

```
https://hello-bryan.tistory.com/122 참조

npx create-react-app react-express
# 설치 다되면

# 폴더로 이동해서
cd react-express

#npm 프로젝트설정
npm init
#기본설정으로 계속 Enter

# 일단 실행해봅니다.
npm start

yarn add express
```

# 2.step src/App.js

```
import "./App.css";

function App() {
  const [username, setUsername] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        {username ? `Hello ${username}` : "Hello World"}
      </header>
    </div>
  );
}

export default App;
```

# 3.step

```
react-express/servers/server.js 만들고

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port =process.env.PORT || 3003;

app.use(bodyParser.json());
app.use('/api', (req, res)=> res.json({username:'bryan'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})

App.js에서
let getData = () => {
    fetch("http://localhost:3003/api")
      .then((res) => res.json())
      .then((data) => {
        setUsername(data.username);
      });
  };
  useEffect(() => {
    getData();
  });
```

# 4.step

```
yarn add npm-run-all

package.json에서

 "scripts": {
    "start": "npm-run-all --parallel start:**",
    "start:client": "react-scripts start",
    "start:server": "node ./servers/server.js",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  로 변경
```

# 5.step

```
yarn add http-proxy-middleware

src/setupProxy.js 생성

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/api', {
          target: 'http://localhost:3003/',
          changeOrigin: true
      })
  )
};

App.js
let getData = () => {
    fetch("api")
      .then((res) => res.json())
      .then((data) => {
        setUsername(data.username);
      });
  };
  로 변경
  react-express 연동 끝
```

# 6.step

```
servers 폴더 아래 routes 폴더를 만들고 index.js 를 만든다.
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>res.json({username:'bryan~~~'}));

module.exports = router;

그리고 server.js를 수정
const express = require('express');
const app = express();
// const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;
const route = require('./routes/index');

// app.use(cors());

app.use(bodyParser.json());
app.use('/api', route); // app.use('/api', (req, res)=> res.json({username:'bryan'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})
```

## express 서버 자동 실챙

```
1. yarn add nodemon
2. package.json 에서
"start:server": "node ./servers/server.js",
node를 nodemon으로 변경
끝
```
