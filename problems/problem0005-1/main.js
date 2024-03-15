/**
 * Dependency Injection(依存性の注入)の仕組みを作成。
 */

class Injector {
    // TODO 機能を作成してください。
    // TODO 下部のinjectorの利用を見て、それに合わせて実装してください
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

const injector = new Injector();
injector.register('database', new Database());
const apiInstance = injector.inject(API);
apiInstance.fetchData();