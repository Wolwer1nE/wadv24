class Cache{

    constructor() {
        this.cache = new Map();
        this.logs = [];
    }
    set(key, value, hits = 1){
        this.cache.set(key, {
            value,
            hits
        });
    }

    get(key){
        const data = this.cache.get(key);
        if (data === undefined || data.hits < 1) {
            this.logs.push(`${key}, null`);
            return null;
        }

        data.hits--;
        this.logs.push(`${key}, ${data.value}, ${data.hits}`);

        if (data.hits < 1) {
            this.cache.delete(key);
        }
        return data.value;
    }

    getLogs(){
        return this.logs;
    }

}
export {Cache}