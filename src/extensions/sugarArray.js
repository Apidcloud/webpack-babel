import { isEqual } from "core/utils";

// we need a specific library to extend from built-in types when using just Babel...
// so this doesn't really work, as insert and indexOfObject are undefined :D
export default class SugarArray extends Array{

    constructor(...items){
        super(...items);
    }

	/**
	 * Inserts an element at a desirable position
	 * @param index
	 * @param item
	 */
	insert (index, item){
		this.splice(index, 0, item);
	}

	/**
	 * Adds index of object to arrays, uses the object "equals()" function if available
	 * @param search
	 * @returns {number}
	 */
	indexOfObject (search){
		for (let i = 0, len = this.length; i < len; i++) {
			if (isEqual(this[i], search)) {
				return i;
			}
		}
		return -1;
	}
}
