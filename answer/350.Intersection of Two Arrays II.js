/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const result = [];

    for (const num of nums1) {
        const found = nums2.indexOf(num);

        if (found > -1) {
            result.push(num);
            nums2.splice(found, 1);
        }
    }

    return result
};


// 或以下方法
var intersect = function (nums1, nums2) {
    const record = {};
    for (let i = 0; i < nums1.length; i++) {
        if (record[nums1[i]]) {
            record[nums1[i]]++;
        } else {
            record[nums1[i]] = 1;
        }
    }
    const result = [];
    for (let j = 0; j < nums2.length; j++) {
        if (record[nums2[j]] > 0) {
            result.push(nums2[j]);
            record[nums2[j]]--;
        }
    }
    return result;
};