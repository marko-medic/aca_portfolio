import { wrapFunctional } from './utils'

export { default as AnimatedArrow } from '../..\\components\\AnimatedArrow.vue'
export { default as Arrow } from '../..\\components\\Arrow.vue'
export { default as Exit } from '../..\\components\\Exit.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Preloader } from '../..\\components\\Preloader.vue'
export { default as AnimatedLink } from '../..\\components\\AnimatedLink\\AnimatedLink.vue'
export { default as CircularLink } from '../..\\components\\CircularLink\\CircularLink.vue'
export { default as HoverLink } from '../..\\components\\HoverLink\\HoverLink.vue'
export { default as LandingDesktop } from '../..\\components\\Landing\\LandingDesktop.vue'
export { default as LandingMobile } from '../..\\components\\Landing\\LandingMobile.vue'
export { default as LocomotiveScroll } from '../..\\components\\LocomotiveScroll\\index.vue'
export { default as Modal } from '../..\\components\\Modal\\Modal.vue'

export const LazyAnimatedArrow = import('../..\\components\\AnimatedArrow.vue' /* webpackChunkName: "components/animated-arrow" */).then(c => wrapFunctional(c.default || c))
export const LazyArrow = import('../..\\components\\Arrow.vue' /* webpackChunkName: "components/arrow" */).then(c => wrapFunctional(c.default || c))
export const LazyExit = import('../..\\components\\Exit.vue' /* webpackChunkName: "components/exit" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyPreloader = import('../..\\components\\Preloader.vue' /* webpackChunkName: "components/preloader" */).then(c => wrapFunctional(c.default || c))
export const LazyAnimatedLink = import('../..\\components\\AnimatedLink\\AnimatedLink.vue' /* webpackChunkName: "components/animated-link" */).then(c => wrapFunctional(c.default || c))
export const LazyCircularLink = import('../..\\components\\CircularLink\\CircularLink.vue' /* webpackChunkName: "components/circular-link" */).then(c => wrapFunctional(c.default || c))
export const LazyHoverLink = import('../..\\components\\HoverLink\\HoverLink.vue' /* webpackChunkName: "components/hover-link" */).then(c => wrapFunctional(c.default || c))
export const LazyLandingDesktop = import('../..\\components\\Landing\\LandingDesktop.vue' /* webpackChunkName: "components/landing-desktop" */).then(c => wrapFunctional(c.default || c))
export const LazyLandingMobile = import('../..\\components\\Landing\\LandingMobile.vue' /* webpackChunkName: "components/landing-mobile" */).then(c => wrapFunctional(c.default || c))
export const LazyLocomotiveScroll = import('../..\\components\\LocomotiveScroll\\index.vue' /* webpackChunkName: "components/locomotive-scroll" */).then(c => wrapFunctional(c.default || c))
export const LazyModal = import('../..\\components\\Modal\\Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
