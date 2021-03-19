import React from "react";
import qs from "qs";

const About = ({ location }) => {
    console.log(location);
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true, //이 설정을 통해 문자열 맨 앞의 ?를 생략한다.
    });

    console.log(query);
    const showDetail = query.detail === "true"; // ?query=true 라면 showDetail은 true일 것이다.

    return (
        <div>
            <h1>소개</h1>
            <p>
                이 프로젝트는 리액트 라우터 기초를 실습해 보는
                예제프로젝트입니다.
                {showDetail && <p>detail값을 true로 설정하셨군요</p>}
            </p>
        </div>
    );
};
export default About;
