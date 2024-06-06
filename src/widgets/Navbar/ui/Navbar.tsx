import { classNames } from 'shared/lib/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/'}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    )
}