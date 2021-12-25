'use strict';

import { randomInt } from './utils.js';

(() => {
    const chars = 'NOLAMEGIRS';
    const colorScheme = ['#003B00', '#008F11', '#00FF41', '#ACFBAC', '#E0FFDD'];
    const canvasFontSize = 20;

    const canvas = document.getElementById('matrix');
    const context = canvas.getContext('2d');

    const msInterval = 50;

    const minCharsLength = 8;
    const maxCharsLength = 30;
    const yCharStep = 25;

    const minYColumnStep = 30;
    const maxYColumnStep = 45;
    const maxYColumnNegativeOffset = yCharStep * 80;

    const yCoordinates = {};
    const yColumnStep = {};
    const columnCharLengths = {};

    let columnCount, columnWidth, xColumnStep;

    const calculateMeasures = () => {
        canvas.width = canvas.getBoundingClientRect().width;
        canvas.height = canvas.getBoundingClientRect().height;
        context.textAlign = "center";
        context.font = `${canvasFontSize}px sans-serif`;


        columnCount = Math.floor(canvas.width / canvasFontSize);
        columnWidth = Math.floor(canvas.width / columnCount);
        xColumnStep = columnWidth;
    };

    const generateColumnsCharLength = () => {
        for (let i = 0; i < columnCount; i++) {
            columnCharLengths[i] = randomInt(maxCharsLength, minCharsLength);
        }
    };

    const generateYColumnOffset = (charsLength) => {
        return charsLength * (-yCharStep) - randomInt(maxYColumnNegativeOffset);
    };

    const generateYCoordinates = () => {
        for (let i = 0; i < columnCount; i++) {
            yCoordinates[i] = generateYColumnOffset(columnCharLengths[i]);
        }
    };

    const generateYColumnStep = () => {
        return randomInt(maxYColumnStep, minYColumnStep);
    };

    const generateYColumnsStep = () => {
        for (let i = 0; i < columnCount; i++) {
            yColumnStep[i] = generateYColumnStep();
        }
    };

    const setInitials = () => {
        calculateMeasures();
        generateColumnsCharLength();
        generateYCoordinates();
        generateYColumnsStep();
    };

    setInitials();



    console.debug('Height: ', canvas.height, 'Width: ', canvas.width);
    console.debug('Column width: ', columnWidth);

    console.debug('yCoordinates: ', yCoordinates);
    console.debug('columnCharLengths', columnCharLengths);

    const draw = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);

        for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
            const columnCharLength = columnCharLengths[columnIndex];

            let yCharCoordinate = 0;

            for (let charIndex = 0; charIndex < columnCharLength; charIndex++) {
                const randomCharIndex = randomInt(chars.length);
                const randomChar = chars[randomCharIndex];

                let fillStyle;

                switch (true) {
                    case !charIndex:
                        fillStyle = colorScheme[0];
                        break;
                    case charIndex < randomInt(6, 1):
                        fillStyle = colorScheme[1];
                        break;
                    case charIndex === columnCharLength - 2:
                        fillStyle = colorScheme[3];
                        break;
                    case charIndex === columnCharLength - 1:
                        fillStyle = colorScheme[4];
                        break;
                    default:
                        fillStyle = colorScheme[2];
                }

                context.fillStyle = fillStyle;

                context.fillText(randomChar, ((columnIndex + 1) * xColumnStep), yCoordinates[columnIndex] + yCharCoordinate);

                const columnIsOutOfCanvas = yCoordinates[columnIndex] > canvas.height;

                // Re-roll random values
                if (columnIsOutOfCanvas) {
                    yCoordinates[columnIndex] = generateYColumnOffset(columnCharLengths[columnIndex]);
                    yColumnStep[columnIndex] = generateYColumnStep();
                }

                yCharCoordinate += yCharStep;
            }

            yCoordinates[columnIndex] += yColumnStep[columnIndex];
        }
    };

    setInterval(draw, msInterval);

    window.onresize = setInitials;
})();