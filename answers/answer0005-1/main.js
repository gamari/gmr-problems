class Injector {
    constructor() {
        this.dependencies = {};
    }

    register(key, instance) {
        this.dependencies[key] = instance;
    }

    inject(Class) {
        const constructorStr = Class.toString();
        const paramRegex = /constructor\s*\(([^)]*)\)/;
        const match = constructorStr.match(paramRegex);
        let paramNames = [];
        if (match) {
            paramNames = match[1].split(',').map(param => param.trim()).filter(param => param);
        }
        const instances = paramNames.map(name => this.dependencies[name]);
        return new Class(...instances);
    }
}

class Database {
    constructor() {
        this.url = "mock-url";
    }
}

class API {
    constructor(database) {
        this.database = database;
    }

    fetchData() {
        console.log("値を取得します");
    }
}

const injector = new Injector();
injector.register('database', new Database());
const apiInstance = injector.inject(API);
apiInstance.fetchData();
