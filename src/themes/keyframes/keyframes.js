import { keyframes } from "styled-components"

const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
`
const spinBack = keyframes`
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
`
const show = keyframes`
    0% {
       opacity:0;
    }
    100% {
       opacity:1;
    }
`
export {
  spin,
  spinBack,
  show,
}