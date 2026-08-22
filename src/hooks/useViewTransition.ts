import { useCallback } from 'react';
import { useNavigate, type NavigateOptions } from 'react-router-dom';
import { flushSync } from 'react-dom';

const useViewTransition = () => {
	const navigate = useNavigate();

	const transitionTo = useCallback(
		(to: string, options?: NavigateOptions) => {
			if (!document.startViewTransition) {
				navigate(to, options);
				return;
			}

			document.startViewTransition(() => {
				flushSync(() => {
					navigate(to, options);
				});
			});
		},
		[navigate]
	);

	return transitionTo;
};

export default useViewTransition;
