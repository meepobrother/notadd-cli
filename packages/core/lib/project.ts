import { Module } from './module';
import { Config } from './config';
export class Project {
    /**
     * 项目配置
     */
    config: Config;
    /**
     * 模块列表
     */
    moduleList: Map<string, Module>;
    /**
     * 编译项目
     */
    compile() { }
    /**
     * 开始项目
     */
    start() { }
    /**
     * 添加模块
     */
    addModule() { }
    /**
     * 构建项目
     */
    build() { }
    /**
     * 绑定环境变量
     */
    bindEnv(env: string) {
        this.config.env = env;
    }
    /**
     * 创建file
     */
    createFile() { }
    /**
     * 创建目录
     */
    createDir() { }
    /**
     * 项目
     * @param json 
     */
    static fromJson(json: any) {
        const proj = new Project();
        proj.config = Config.fromJson(json);
        return proj;
    }
}
