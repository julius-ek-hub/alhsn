export const mk_el = (name) => document.createElement(name);
const __ = (id) => document.getElementById(id);

export const attr = (el, details) => {
	for (let d in details) el.setAttribute(d, details[el]);
};

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
		attr: (details) => {
			for (let d in details) el.setAttribute(d, details[d]);
			return _(el);
		},
		style: (details) => {
			for (let s in details) el.style[s] = details[s];
			return _(el);
		},
		clicked: (fn) => {
			el.onclick = fn;
			return _(el);
		},
		drop: () => {
			el.parentElement.removeChild(el);
		},
		truncate: () => {
			el.innerHTML = "";
			return _(el);
		},
		disable: (bool = true) => {
			el.disabled = bool;
			return _(el);
		},
		on: (events, fn) => {
			events = Array.isArray(events) ? events : [events];
			events.forEach((event) => el.addEventListener(event, fn));
			return _(el);
		},
		onchange: (fn) => {
			el.onchange = fn;
			return _(el);
		},
		touched: (fn) => {
			el.ontouchstart = fn;
			return _(el);
		},
		untouched: (fn) => {
			el.ontouchend = fn;
			return _(el);
		},
		onkeyup: (fn) => {
			el.onkeyup = fn;
			return _(el);
		},
		oncut: (fn) => {
			el.oncut = fn;
			return _(el);
		},
		onpaste: (fn) => {
			el.onpaste = fn;
			return _(el);
		},
		moved: (fn) => {
			el.ontouchmove = fn;
			return _(el);
		},
		hide: (bool = true) => {
			el.hidden = bool;
			return _(el);
		},
		appendTo: (parent) => {
			parent.appendChild(el);
			return _(parent);
		},
		plain: el,
	};
}
