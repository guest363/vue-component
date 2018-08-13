import dictionary from './colorDictionary.js';

export default elem => {
    return (dictionary[elem]) ? true : false;
}