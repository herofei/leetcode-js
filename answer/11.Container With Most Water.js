/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let len = height.length,
        r = len - 1,
        l = 0,
        h = 0,
        maxArea = 0,
        area = 0;
    
    while(l < r) {
        if (height[l] < height[r]) {
            h = height[l];
            ++l;
        } else {
            h = height[r];
            --r;
        }
        area = h * (r - l + 1);
        if (area > maxArea) {
            maxArea = area;
        }
    }
    return maxArea;
};