const express = require("express");
const path = require("path");

const app = express();

// @see https://velog.io/@tlatjdgh3778/Vanilla-JavaScript%EB%A1%9C-SPA%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

// sever.js의 실행 경로
// path.resolve를 사용해서 인자로 받은 값들을 하나의 문자열로 만ㄷ르어주고 정적 디렉토리에 대한 마운트 경로를 지정해주면 /static 경로를 통해 frontend 폴더에 포함된 파일을 로드 가능하다.
app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

// get요청이 오면 fontend/index.html 파일을 읽고 내용을 클라이언트로 전송한다.
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("frontend, index.html"));
});

// port 생성 서버 실행
app.listen(process.env.PORT || 3000, () => console.log("Sever running...."));
