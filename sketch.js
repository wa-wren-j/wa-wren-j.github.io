let r = 36;
let g = 36;
let b = 36;
//citation start
//"confused" from the files steve uploaded
let speed, x = 0.2,
	y = 0.2,
	h = 0;
let easing = 0.1;
//citation end
let canvas;
let tru = true;

windowResized = () => {
	resizeCanvas(windowWidth -20, windowHeight);
}

setup = () => {
	canvas = createCanvas(windowWidth -20, windowHeight);
	background(r, g, b);
	//citation start
	//https://www.youtube.com/watch?v=OIfEHD3KqCg
	canvas.position(0, 0);
	canvas.style('z-index', '-1');
	//citation end
	//citaiton start
	//"confused" from the files steve uploaded
	speed = 0;
	//citation end
}

function keyTyped() {
	//citation start
	//https://p5js.org/reference/#/p5/keyTyped
	//ASCII codes from https://tinyurl.com/wm9mkfm
	if (key === 'r') {
		r -= 20;
	}
	if (key === 't') {
		r += 20;
	}

	if (key === 'g') {
		g -= 20;
	}
	if (key === 'h') {
		g += 20;
	}

	if (key === 'b') {
		b -= 20;
	}
	if (key === 'n') {
		b += 20;
	}
	//citation end
}

draw = () => {
	background(r, g, b);

	//citation start
	//"confused" from the files steve uploaded
	// I changed the colours and the ellipse size, as well as the easing, and how far the ellipses go before coming back
	noStroke();
	speed++;

	////easing
	let targetX = mouseX;
	let dx = targetX - x;
	x += dx * easing;

	let targetY = mouseY;
	let dy = targetY - y;
	y += dy * easing;

	translate(x, y);
	for (var i = 0; i < 360; i += 30) {
		push();
		rotate(radians(i) + radians(speed));
		translate(0, 10 + (sin(speed / 50)) * 50);
		if (mouseX < windowWidth / 2) {
			fill((r + 25), (g + 25), (b + 25));
			ellipse(0, 0, 12, 15);
		} else {
			fill((r - 25), (g - 25), (b - 25));
			rect(0, 0, 12, 15);
		}
		pop();
	}
	//citaiton end
}
