/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const xPoints = [];
    let maxWidth = 0;

    for(let point of points) {
        xPoints.push(point[0]);
    }

    xPoints.sort((a, b) => a - b);

    for(let i = 0; i < xPoints.length - 1; i++) {
        maxWidth = Math.max(maxWidth, xPoints[i + 1] - xPoints[i]);
    }

    
    return maxWidth;
};