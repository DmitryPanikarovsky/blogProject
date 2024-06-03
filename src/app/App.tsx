import { Route, Routes, Link } from 'react-router-dom'
import './styles/index.scss'
import { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage';
import { classNames } from 'shared/lib/classNames'


const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Загрузка</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;