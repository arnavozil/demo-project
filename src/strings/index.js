import image1 from '../assets/why_1_logo.svg';
import image2 from '../assets/why_2_logo.svg';
import image3 from '../assets/why_3_logo.svg';
import image4 from '../assets/why_4_logo.svg';
import roadside from '../assets/roadside.svg';
import prototypes from '../assets/prototypes.svg';
import chart from '../assets/chart.svg';

export const FEATURES_DATA = [{
    title: 'Reduce congestion and expand road capacity',
    description: 'without pouring new concrete',
    image: image1
}, {
    title: 'Decrease travel times and increase trip reliability',
    description: 'even for regular lanes',
    image: image2
}, {
    title: 'Tripling the travel options for drivers',
    description: 'from “roll the dice” to',
    list: [
        '"roll the dice" or',
        '"pay for a fast, reliable commute" or',
        '"carpool for a fast, reliable commute"',
    ],
    image: image3
}, {
    title: 'And as byproduct',
    description: 'vast monetization of road assets',
    image: image4
}];

export const FRAMES_DATA = [{
    title: 'Future-proof lane enforcement',
    image: roadside,
    list: [' no more transponders', 'no overhead gantries', 'over 99.95% accuracy', 'deployment within weeks',
    'interoperable with any ETC system', 'solar-powered', 'wireless data transfer']
}, {
    title: 'Democratizing speed',
    image: prototypes,
    list: [' vehicle occupancy verification done right', 'low friction for users', 'near-perfect enforcement',
    'high granularity (1, 2, 3, 4+ occupants)']
}, {
    title: 'Traffic management, reengineered',
    image: chart,
    list: [' reservation-based traffic management', 'industry-first predictive dynamic pricing',
    'maximizes vehicle throughput', 'opens the door to free flow conditions 24/7']
}]