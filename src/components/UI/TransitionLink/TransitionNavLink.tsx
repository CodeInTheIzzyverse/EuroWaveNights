import { NavLink, useNavigate, type NavLinkProps } from 'react-router-dom';
import { flushSync } from 'react-dom';
import { useCallback } from 'react';

const TransitionNavLink = ({ onClick, to, ...props }: NavLinkProps) => {
	const navigate = useNavigate();

	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement>) => {
			if (e.defaultPrevented) return;

			const target =
				typeof to === 'string' ? to : to.pathname || '/';

			if (
				e.metaKey ||
				e.ctrlKey ||
				e.shiftKey ||
				e.altKey
			) {
				return;
			}

			e.preventDefault();

			onClick?.(e);

			if (!document.startViewTransition) {
				navigate(target);
				return;
			}

			document.startViewTransition(() => {
				flushSync(() => {
					navigate(target);
				});
			});
		},
		[navigate, to, onClick]
	);

	return <NavLink {...props} to={to} onClick={handleClick} />;
};

export default TransitionNavLink;
