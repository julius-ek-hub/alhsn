export const mk_el = (name) => document.createElement(name);
const __ = (id) => document.getElementById(id);

export const sleep = (timeout = 1000) =>
	new Promise((resolve) => setTimeout(resolve, timeout));

export default function _(el) {
	el =
		typeof el === "string"
			? el.startsWith("#")
				? __(el.substring(1))
				: mk_el(el)
			: el;
	return {
		addClass: (...classes) => {
			classes.forEach((_class) => el.classList.add(_class));
			return _(el);
		},
		removeClass: (...classes) => {
			classes.forEach((_class) => el.classList.remove(_class));
			return _(el);
		},
		addChild: (children) => {
			children = Array.isArray(children) ? children : [children];
			for (let child of children) {
				if (typeof child === "string") el.innerHTML += child;
				else el.appendChild(child);
			}
			return _(el);
		},
		truncate: () => {
			el.innerHTML = "";
			return _(el);
		},
	};
}
