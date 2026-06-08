function Header(){
   return(
        <h1>This is header</h1>
    )

}

function Main(){
   return(
        <h1>This is main</h1>
    )

}

function Footer(){
    return(
        <h1>This is footer</h1>
    )
    

}

function App(){
    return(
        <>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App());