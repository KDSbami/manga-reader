export const pathGenerator = (width, height, eccentricity, res) => { 
    const twoPi = 2 * Math.PI;
    const resolution = res; // Change based on size of object for performance [250 - sweet spot]?

    let path = "M" + width + " " + 0;
    for (let theta = 0.0; theta < twoPi; theta += twoPi / resolution) {
        let sineTheta = Math.sin(theta);
        let cosineTheta = Math.cos(theta);
        let r = Math.pow(1 / (Math.pow(Math.abs(cosineTheta) / width, eccentricity) + Math.pow(Math.abs(sineTheta) / height, eccentricity)), 1 / eccentricity);
        path += "L " + (r * cosineTheta) + " " + (r * sineTheta);
    }
    return path;
};