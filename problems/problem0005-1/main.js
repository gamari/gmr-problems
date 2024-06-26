/**
 * Dependency Injection(依存性の注入)の仕組みを作成。
 */

class Injector {
    constructor() {
        this.dependencies = {};
    }

    register(key, instance) {
        this.dependencies[key] = instance;
    }

    inject(Class) {
        const constructorStr = Class.toString();
        const paramRegex = /constructor\s*(([^)*])\))/;
        const match = constructorStr.match(paramRegex);
        let params = [];
        if (match) {
            params = match[1].split(',').map(param => param.trim());
        }
        const instance = params.map(name => this.dependencies[name]);
        return new Class(...instance);
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
        console.log("値を取得します")
    }
}

// 初期化処理
const injector = new Injector();
injector.register('database', new Database());

// DI（依存性の注入）
const apiInstance = injector.inject(API);
apiInstance.fetchData();