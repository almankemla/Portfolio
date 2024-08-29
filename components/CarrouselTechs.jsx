import React from "react";
import styled from "styled-components";

import { Amazonaws } from "@styled-icons/simple-icons/Amazonaws";
import { GoogleCloud } from "@styled-icons/boxicons-logos/GoogleCloud";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Postgresql } from "@styled-icons/simple-icons/Postgresql";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Java } from "@styled-icons/fa-brands/Java";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Flutter } from "@styled-icons/boxicons-logos/Flutter";
import { Django } from "@styled-icons/boxicons-logos/Django";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { LogoVercel } from "@styled-icons/ionicons-solid/LogoVercel";
import { Netlify } from "@styled-icons/simple-icons/Netlify";
import { Materialui } from "@styled-icons/simple-icons/Materialui";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { LogoBitbucket } from "@styled-icons/ionicons-solid/LogoBitbucket";
import { Api } from "@styled-icons/material-rounded/Api";
import { Oracle } from "@styled-icons/simple-icons/Oracle";
import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";
import { TailwindCss } from "@styled-icons/boxicons-logos/TailwindCss";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Linux } from "@styled-icons/fa-brands/Linux";
import { Windows } from "@styled-icons/boxicons-logos/Windows";
import { Android } from "@styled-icons/boxicons-logos/Android";
import { Ios } from "@styled-icons/simple-icons/Ios";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Sass } from "@styled-icons/fa-brands/Sass";
import { Jquery } from "@styled-icons/boxicons-logos/Jquery";
import { Figma } from "@styled-icons/boxicons-logos/Figma";
import { Zap } from "@styled-icons/boxicons-solid/Zap";
import { Gnu } from "@styled-icons/simple-icons/Gnu";  // Example placeholder

const Carrousel = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;

	svg {
		width: 38px;
		height: 38px;
		color: #4b4b4b;
		transition: all 0.3s ease;
	}

	svg:hover {
		transform: translateZ(20px);
		color: ${(props) => props.theme.colors.branding};
		scale: 1.3;
	}

	.slider {
		height: 80px;
		margin: auto;
		position: relative;
		width: 100%;
		display: grid;
		place-items: center;
		overflow: hidden;
	}

	.slide-track {
		display: flex;
		width: 100%;
		animation: scroll 20s linear infinite;
	}

	.slide-track:hover {
		animation-play-state: paused;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-250px));
		}
	}

	.slide {
		height: 50px;
		width: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.slider::before,
	.slider::after {
		background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
		content: "";
		height: 100%;
		position: absolute;
		width: 15%;
		z-index: 2;
	}

	.slider::before {
		left: 0;
		top: 0;
	}

	.slider::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}
`;

export default function SlideTechs() {
	return (
		<Carrousel>
			<div className="slider">
				<div className="slide-track">
					<div className="slide">
						<Amazonaws />
					</div>
					<div className="slide">
						<GoogleCloud />
					</div>
					<div className="slide">
						<Mongodb />
					</div>
					<div className="slide">
						<Postgresql />
					</div>
					<div className="slide">
						<Sqlite />
					</div>
					<div className="slide">
						<Javascript />
					</div>
					<div className="slide">
						<Java />
					</div>
					<div className="slide">
						<Python />
					</div>
					<div className="slide">
						<Flutter />
					</div>
					<div className="slide">
						<Django />
					</div>
					<div className="slide">
						<Nodejs />
					</div>
					<div className="slide">
						<LogoVercel />
					</div>
					<div className="slide">
						<Netlify />
					</div>
					<div className="slide">
						<Materialui />
					</div>
					<div className="slide">
						<Styledcomponents />
					</div>
					<div className="slide">
						<Git />
					</div>
					<div className="slide">
						<LogoBitbucket />
					</div>
					<div className="slide">
						<Api />
					</div>
					<div className="slide">
						<Oracle />
					</div>
					<div className="slide">
						<Bootstrap />
					</div>
					<div className="slide">
						<TailwindCss />
					</div>
					<div className="slide">
						<Mysql />
					</div>
					<div className="slide">
						<Linux />
					</div>
					<div className="slide">
						<Windows />
					</div>
					<div className="slide">
						<Android />
					</div>
					<div className="slide">
						<Ios />
					</div>
					<div className="slide">
						<Typescript />
					</div>
					<div className="slide">
						<Sass />
					</div>
					<div className="slide">
						<Jquery />
					</div>
					<div className="slide">
						<Figma />
					</div>
					<div className="slide">
						<Zap />
					</div>
					<div className="slide">
						<Gnu />
					</div>
					<div className="slide">
						{/* Add any additional icons here */}
					</div>
				</div>
			</div>
		</Carrousel>
	);
}
