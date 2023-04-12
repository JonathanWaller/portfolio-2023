import { primaryColor } from "../styles/colors"

export const particleOptions = {
    fullScreen: {
        enable: false
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 10,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        color: {
          // value: "#f00",
          // value: '#D3D3D3',
          // value: '#ADD8E6',
          // value: '#4169E1',
          value: primaryColor,
          // value: '#DA0463',
          animation: {
            enable: false, // true makes colors change
            speed: 10,
            sync: true
          }
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 1
        },
        size: {
          value: 3,
          random: {
            enable: true,
            minimumValue: 1
          },
          animation: {
            enable: true,
            speed: 5,
            minimumValue: 3,
            sync: false
          }
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          warp: true
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          resize: true
        }
      },
      retina_detect: true,
      // background: {
      //   color: "#000"
      // }
}