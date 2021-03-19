import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
    const activeStyle = {
        background: "black",
        color: "white",
    };

    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink to="/profiles/velopert" activeStyle={activeStyle}>
                        velopert
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profiles/gon" activeStyle={activeStyle}>
                        gon
                    </NavLink>
                </li>
            </ul>

            <Route
                exact
                path="/profiles"
                render={() => <div>사용자를 선택해주세요.</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
};

export default Profiles;
