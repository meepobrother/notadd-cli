export abstract class Template {
    /**
     * 创建模板(文件或文件夹，并更新响应文件)
     * @param name 类型/名称
     */
    abstract create(name: string): Promise<void>;
}

export class WorkspaceTemplate extends Template {
    async create(name: string) { }
}

export class ProjectTemplate extends Template {
    async create(name: string) { }
}

export class ModuleTemplate extends Template {
    async create(name: string) { }
}

export class ServiceTemplate extends Template {
    async create(name: string) { }
}

export class MagnusTemplate extends Template {
    async create(name: string) { }
}

export class EntityTemplate extends Template {
    async create(name: string) { }
}