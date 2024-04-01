class Injector {
    constructor() {
        this.dependencies = {};
    }

    register(key, instance) {
        this.dependencies[key] = instance;
    }

    inject(Class) {
        const requiredParams = Reflect.getMetadata('design:paramtypes', Class) || [];
        const resolvedParams = requiredParams.map((param) => this.dependencies[param.name]);
        return new Class(...resolvedParams);
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

// APIクラスに必要な依存性のキーを定義
API.dependencies = ['database'];

const injector = new Injector();
injector.register('database', new Database());
const apiInstance = injector.inject(API);
apiInstance.fetchData();
