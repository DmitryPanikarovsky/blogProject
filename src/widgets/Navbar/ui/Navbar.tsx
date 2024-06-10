import { classNames } from 'shared/lib/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation('about')

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/'}>
                    Главная страница
                </AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    )
}
