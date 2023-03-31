import {Menu} from "antd";
import {Route, Routes, useNavigate} from "react-router-dom";
import {HomeOutlined, UnorderedListOutlined} from "@ant-design/icons"
import React from "react";

function App() {
    const navigate = useNavigate()
    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <Menu
                OnClick={({key}) => {
                    if (key === "notFind") {
                    } else {
                        navigate(key);
                    }
                }
                }
                items={[
                    {
                        label: "Home",
                        key: "/",
                        icon: <HomeOutlined/>
                    },
                    {
                        label: "Films",
                        key: "/films",
                        icon: <UnorderedListOutlined/>
                    },
                    {
                        label: "Profile",
                        key: "/profile", danger: true
                    },
                    {label: "Style_films", key: "/styleFilms",},


                ]}>
            </Menu>
            <Content/>
        </div>
    );
}

function Content() {
    return <div>
        <Routes>
            <Route path="/" element={<div>Home</div>}></Route>
            <Route path="/films" element={<div>films</div>}></Route>
            <Route path="/profile" element={<div>Profile</div>}></Route>
            <Route path="/styleFilms" element={<div>Style Films</div>}></Route>
            <Route path="/not_find" element={<div>not page</div>}></Route>
        </Routes>
    </div>
}

export default App;