import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AnimatedArrow: () => import('../..\\components\\AnimatedArrow.vue' /* webpackChunkName: "components/animated-arrow" */).then(c => wrapFunctional(c.default || c)),
  Arrow: () => import('../..\\components\\Arrow.vue' /* webpackChunkName: "components/arrow" */).then(c => wrapFunctional(c.default || c)),
  Exit: () => import('../..\\components\\Exit.vue' /* webpackChunkName: "components/exit" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Preloader: () => import('../..\\components\\Preloader.vue' /* webpackChunkName: "components/preloader" */).then(c => wrapFunctional(c.default || c)),
  AnimatedLink: () => import('../..\\components\\AnimatedLink\\AnimatedLink.vue' /* webpackChunkName: "components/animated-link" */).then(c => wrapFunctional(c.default || c)),
  CircularLink: () => import('../..\\components\\CircularLink\\CircularLink.vue' /* webpackChunkName: "components/circular-link" */).then(c => wrapFunctional(c.default || c)),
  HoverLink: () => import('../..\\components\\HoverLink\\HoverLink.vue' /* webpackChunkName: "components/hover-link" */).then(c => wrapFunctional(c.default || c)),
  LandingDesktop: () => import('../..\\components\\Landing\\LandingDesktop.vue' /* webpackChunkName: "components/landing-desktop" */).then(c => wrapFunctional(c.default || c)),
  LandingMobile: () => import('../..\\components\\Landing\\LandingMobile.vue' /* webpackChunkName: "components/landing-mobile" */).then(c => wrapFunctional(c.default || c)),
  LocomotiveScroll: () => import('../..\\components\\LocomotiveScroll\\index.vue' /* webpackChunkName: "components/locomotive-scroll" */).then(c => wrapFunctional(c.default || c)),
  Modal: () => import('../..\\components\\Modal\\Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
