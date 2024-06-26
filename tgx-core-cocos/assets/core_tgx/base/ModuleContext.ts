
const PROP_MODULE = '__module__name__';
const PROP_IMPL_CLASS = '__impl__class__';

let defaultModule = 'resources';


export class ModuleContext {
    public static setDefaultModule(moduleName) {
        defaultModule = moduleName;
    }

    public static getDefaultModule(){
        return defaultModule;
    }

    public static attachClassModule(cls, moduleName) {
        cls[PROP_MODULE] = moduleName;
    }

    public static getClassModule(cls) {
        return cls[PROP_MODULE] || defaultModule;
    }

    public static attachImplClass(cls, implCls) {
        cls[PROP_IMPL_CLASS] = implCls;
    }

    public static attachModuleAndImplClass(cls, moduleName, implCls) {
        cls[PROP_MODULE] = moduleName;
        cls[PROP_IMPL_CLASS] = implCls;
    }

    public static getImplClass(cls) {
        return cls[PROP_IMPL_CLASS] || cls;
    }

    public static createFromModule(cls) {
        let implCls = this.getImplClass(cls) || cls;
        return new implCls();
    }
}