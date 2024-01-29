/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PreLoader = () => {
	let span1 = useRef(0);
	let span2 = useRef(0);
	let span3 = useRef(0);
	let span4 = useRef(0);
	let span5 = useRef(0);
	let span6 = useRef(0);
	let loader = useRef(0);
	let nbsp = "\u00A0";

	let once = 1;

	useEffect(() => {
		while (once !== 0) {
			once = once - 1;
			gsap.from(
				[
					span1.current,
					span2.current,
					span3.current,
					span4.current,
					span5.current,
					span6.current,
				],
				1,
				{
					opacity: 0,
					yPercent: 130,
					duration: 1,
					ease: "back.Out",
					stagger: 0.15,
				}
			);

			gsap.to(
				[
					span1.current,
					span2.current,
					span3.current,
					span4.current,
					span5.current,
					span6.current,
				],
				1,
				{
					opacity: 0,
					yPercent: -110,
					duration: 0.5,
					delay: 5,
					stagger: 0.1,
					ease: "back.Out",
				}
			);

			gsap.to(loader.current, 1.6, {
				opacity: 0,
				ease: "back.Out",
				delay: 6,
			});

			gsap.to(loader.current, 1.6, {
				delay: 6.7,
				zIndex: -1,
			});
		}
	}, []);

	return (
		<div className="loader" ref={loader}>
			<div className="loader-container">
				<div className="loader-wrapper">
					<h1 ref={span1}>Crafting Code from</h1>
				</div>
				<div className="loader-wrapper">
					<h1 ref={span2} data-text={`Raw${nbsp}Design`}>
						Raw Design to
					</h1>
				</div>
				<div className="loader-wrapper">
					<h1 ref={span3} data-text={"Interactivity,"}>
						{" "}
						Interactivity, The{" "}
					</h1>
				</div>
				<div className="loader-wrapper">
					<h1 ref={span4}>digital realm </h1>
				</div>
				<div className="loader-wrapper">
					<h1 ref={span5}> becomes their</h1>
				</div>
				<div className="loader-wrapper">
					<h1 ref={span6} data-text={"Tapestry"}>
						{" "}
						Tapestry
					</h1>
				</div>
			</div>
		</div>
	);
};

export default PreLoader;
