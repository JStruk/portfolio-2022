import { ISourceOptions } from "tsparticles";

export const particlesConfig: ISourceOptions = {
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    fpsLimit: 60,
    particles: {
        number: {
            value: 0,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ff0000",
            animation: {
                enable: true,
                speed: 180,
                sync: true
            }
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "https://cdn.matteobruni.it/images/particles/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 3,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 15,
            random: {
                enable: true,
                minimumValue: 5
            },
            animation: {
                enable: true,
                speed: 5,
                minimumValue: 5,
                sync: true,
                startValue: "min",
                destroy: "max"
            }
        },
        links: {
            enable: false
        },
        move: {
            enable: true,
            speed: 3.5,
            direction: "none",
            random: false,
            straight: false,
            outMode: "destroy",
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detectsOn: "window",
        events: {
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 600,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 20,
                duration: 2,
                opacity: 0.5,
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 10
            },
            remove: {
                particles_nb: 2
            },
            trail: {
                delay: 0.005,
                quantity: 2,
                pauseOnStop: true
            }
        }
    },
    retina_detect: true
}