import React, { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        error: false,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("Error : getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("Error : componentDidMount");
    }

    componentDidCatch(error, info) {
        console.log("Error: comoponentDidCatch");
        this.setState({
            error: true,
        });
        console.log(this.state.error);
        console.log({ error, info });
    }

    render() {
        console.log("Error : render");
        return this.state.error ? (
            <div>에러가 발생했습니다.</div>
        ) : (
            this.props.children
        );
    }
}

export default ErrorBoundary;
