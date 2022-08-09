import _, { sleep } from "./common.js";

export const qrAnimation = async (_top, right, bottom, left) => {
	_(_top).removeClass("move-right").addClass("close-right");
	_(bottom).removeClass("close-left").addClass("move-left");
	await sleep();
	_(right).removeClass("move-down").addClass("close-down");
	_(left).removeClass("close-up").addClass("move-up");
	await sleep();
	_(bottom).removeClass("move-left").addClass("close-left");
	_(_top).removeClass("close-right").addClass("move-right");
	await sleep();
	_(left).removeClass("move-up").addClass("close-up");
	_(right).removeClass("close-down").addClass("move-down");
	await sleep();
	qrAnimation(_top, right, bottom, left);
};

export const countDown = async (holder, count = 60 * 5) => {
	if (count <= 0) count = 60 * 4;
	_(holder)
		.truncate()
		.addChild(`${Math.floor(count / 60)}:${count % 60}`);
	await sleep(1000);
	countDown(_(holder), --count);
};
