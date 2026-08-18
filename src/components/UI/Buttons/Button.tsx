import { Link } from 'react-router-dom';
import './Button.scss';

export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'pixel';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    to?: string;
    href?: string;
    onClick?: (e: React.MouseEvent) => void;
    icon?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    to,
    href,
    onClick,
    icon,
    type = 'button',
    disabled = false,
    className = '',
}: ButtonProps) => {
    const classNames = [
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        fullWidth ? 'btn-full' : '',
        className,
    ].filter(Boolean).join(' ');

    const content = (
        <>
            {children}
            {icon && <span className="btn__icon">{icon}</span>}
        </>
    );

    if (to) {
        return (
            <Link to={to} className={classNames} onClick={onClick}>
                {content}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={classNames} onClick={onClick}>
                {content}
            </a>
        );
    }

    return (
        <button type={type} className={classNames} onClick={onClick} disabled={disabled}>
            {content}
        </button>
    );
}

export default Button;