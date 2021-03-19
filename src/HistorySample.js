import React, { useEffect } from "react";

const HistorySample = ({ history }) => {
    //뒤로가기

    console.log(history);
    const handleGoBack = () => {
        history.goBack();
    };

    //홈으로 이동
    const handleGoHome = () => {
        history.push("/");
    };

    useEffect(() => {
        const unblock = history.block("정말 떠나실 건가요");
        return () => {
            if (unblock) {
                unblock();
            }
        };
    }, [history]);

    return (
        <div>
            <button onClick={handleGoBack}>뒤로</button>
            <button onClick={handleGoHome}>홈으로</button>
        </div>
    );
};

export default HistorySample;
