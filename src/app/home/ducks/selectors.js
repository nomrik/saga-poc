/* Selectors for home. When accessing state in mapStateToProps in the containers, should always use
a predefined selector, defined in this file. NOTE: should use reselect library if memoized selectors
are needed (for performance purposes) */

export const getAnimals = (home) => home.animals;
export const getStatus = (home) => home.status;

export default {
    getAnimals,
    getStatus
};