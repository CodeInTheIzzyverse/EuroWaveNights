import { useEffect } from "react";

interface SEOProps {
	title: string;
	description?: string;
	keywords?: string;
	favicon?: string;
}

const useSEO = ({ title, description, keywords, favicon }: SEOProps) => {
	useEffect(() => {
		document.title = title;

		if (description) {
			let metaDesc = document.querySelector('meta[name="description"]');
			if (metaDesc) {
				metaDesc.setAttribute("content", description);
			} else {
				metaDesc = document.createElement("meta");
				metaDesc.setAttribute("name", "description");
				metaDesc.setAttribute("content", description);
				document.head.appendChild(metaDesc);
			}
		}

		if (keywords) {
			let metaKeys = document.querySelector('meta[name="keywords"]');
			if (metaKeys) {
				metaKeys.setAttribute("content", keywords);
			} else {
				metaKeys = document.createElement("meta");
				metaKeys.setAttribute("name", "keywords");
				metaKeys.setAttribute("content", keywords);
				document.head.appendChild(metaKeys);
			}
		}

		if (favicon) {
			let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
			if (link) {
				link.href = favicon;
			} else {
				link = document.createElement("link");
				link.rel = "icon";
				link.href = favicon;
				document.head.appendChild(link);
			}
		}
	}, [title, description, keywords, favicon]);
};

export default useSEO;

