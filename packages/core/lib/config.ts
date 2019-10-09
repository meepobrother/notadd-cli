/**
 * 配置文件
 */
export class Config {
    /**
     * 名称
     */
    name: string;
    /**
     * 版本号
     */
    version: string;
    /**
     * 类型 module模块 project项目 application 应用 service 服务
     */
    type: 'module' | 'project' | 'application' | 'service';
    /**
     * 环境变量
     */
    env: string;
    /**
     * 依赖
     */
    deps: Config[];
    /**
     * 入口
     */
    main: string;
    /**
     * 从配置文件初始化Config
     * @param json 
     */
    static fromJson(json: any): Config {
        const cfg = new Config();
        cfg.name = json.name;
        cfg.type = json.type;
        cfg.version = json.version;
        cfg.env = json.env;
        cfg.main = json.main;
        cfg.deps = json.deps.map((dep: string) => Config.fromJson(require(dep)));
        return cfg;
    }
}
