import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/VitorGuilhermo.png",
            name: "Vitor Guilhermo",
            role: "Estagiário em Desenvolvimento Web"
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
            { type: "paragraph", content: "Fala galeraa 👋" },
            { type: "link", content: "👉 jane.design/doctorcare" },
            { type: "link", content: "#novoprojeto" },
            { type: "link", content: "#nlw" },
            { type: "link", content: "#rocketseat" },
        ],
        publishedAt: new Date("2022-07-28 19:49:00"),
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/VitorGuilhermo.png",
            name: "Alphonse",
            role: "Estagiário em Desenvolvimento Web"
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
            { type: "paragraph", content: "Fala galeraa 👋" },
            { type: "link", content: "👉 jane.design/doctorcare" },
            { type: "link", content: "#novoprojeto" },
            { type: "link", content: "#nlw" },
            { type: "link", content: "#rocketseat" },
        ],
        publishedAt: new Date("2022-07-27 19:49:00"),
    },
];

function App() {
    
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <aside>
                    <Sidebar />
                </aside>
                
                <main>
                    {
                        posts.map(post => {
                            return (
                                <Post 
                                    author={post.author}
                                    content={post.content}
                                    publishedAt={post.publishedAt}
                                />
                            )
                        })
                    }
                </main>
            </div>
        </div>
    );
}

export default App;