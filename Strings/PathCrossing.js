// Leetcode 1496
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const map = new Map();
    let xCoord = 0, yCoord = 0;
    map.set(xCoord + "," + yCoord, 1);

    for(let i = 0; i < path.length; i++) {
        let direction = path.charAt(i);

        if(direction === 'N') yCoord++;
        else if(direction === 'S') yCoord--;
        else if(direction === 'E') xCoord++;
        else xCoord--;

        let coord = xCoord + "," + yCoord;

        if(map.has(coord)) return true;
        map.set(coord, 1);
    }
    
    return false;
};