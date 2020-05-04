export function clamp(theValue, min, max) {
    if (theValue < min) {
        return min;
    } else if (theValue > max) {
        return max;
    }

    return theValue
}