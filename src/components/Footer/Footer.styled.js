import { styled } from "styled-components";
import { SIZE, COLOR } from 'constants';

import {
	footerTopBgImage,
	footerTopBgImageRetina,
	footerTopBgImageTablet,
	footerTopBgImageTabletRetina,
	footerTopBgImageDesktop,
	footerTopBgImageDesktopRetina,
	footerBottomBgImage,
	footerBottomBgImageRetina,
	footerBottomBgImageTablet,
	footerBottomBgImageTabletRetina,
	footerBottomBgImageDesktop,
	footerBottomBgImageDesktopRetina
} from 'assets/images/footer'

export const FooterTopBgImage = styled.div`
	position: absolute;
	top: -250px;
	left: 0;
	width: 300px;
	height: 300px;
	z-index: -99;
	background-image: url(${footerTopBgImage});
	background-repeat: no-repeat;

	@media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
		height: 600px;
		top: -240px;
		
		background-image: url(${footerTopBgImageRetina});
		background-size: contain;
	}

	@media screen and (min-width: ${SIZE.tablet}) {
		background-image: url(${footerTopBgImageTablet});
		height: 500px;
		top: -400px;

		@media (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
			background-image: url(${footerTopBgImageTabletRetina});
			height: 800px;
			width: 500px;
			top: -400px;
		}
	}

	@media screen and (min-width: ${SIZE.desktop}) {
		background-image: url(${footerTopBgImageDesktop});
		width: 400px;
		height: 600px;
		top: -500px;

		@media (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
			background-image: url(${footerTopBgImageDesktopRetina});
			height: 1100px;
			width: 650px;
			top: -500px;
		}
	}
`

export const FooterWraper = styled.footer`
	position: relative;

	background-image: url(${footerBottomBgImage});
		background-position: right bottom;
		background-repeat: no-repeat;

	@media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
		background-image: url(${footerBottomBgImageRetina});
		background-size: 200px;
		background-position: right bottom -10px;
	}

	@media screen and (min-width: ${SIZE.tablet}) {
		background-image: url(${footerBottomBgImageTablet});

		@media (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
			background-image: url(${footerBottomBgImageTabletRetina});
			background-position: right bottom;
			background-size: 320px;
		}
	}

	@media screen and (min-width: ${SIZE.desktop}) {
		background-image: url(${footerBottomBgImageDesktop});

		@media (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
			background-image: url(${footerBottomBgImageDesktopRetina});
			background-size: 540px;
		}
	}
`

export const CopyrightContainer = styled.section`
	display: flex;
	justify-content: center;
	gap: 14px;
	padding: 28px 0;

	@media screen and (min-width: ${SIZE.tablet}) {
		gap: 28px;
		padding: 32px 0;
	}

	@media screen and (min-width: ${SIZE.desktop}) {
		gap: 40px;
		padding: 50px 0;
	}

	p {
		color: ${COLOR.dark};
		font-size: 10px;
		line-height: 1;
		letter-spacing: -0.1px;
		opacity: 0.5;

		@media screen and (min-width: ${SIZE.tablet}) {
			font-size: 14px;
			letter-spacing: -0.14px;
		}
	}

	p:first-child {
		font-weight: 500;
	}
`