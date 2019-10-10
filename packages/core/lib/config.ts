import { writeFileSync } from 'fs';
import { CONFIG_FILE } from './static/index'
import { join } from 'path';
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
     * 类型 module模块 project项目 workspace 应用 service 服务
     */
    type: 'module' | 'project' | 'workspace' | 'service' | 'application';
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

    /**
     * 拷贝
     */
    copy() {
        const cfg = new Config();
        cfg.name = this.name;
        cfg.type = this.type;
        cfg.version = this.version;
        cfg.env = this.env;
        cfg.main = this.main;
        cfg.deps = this.deps.map(dep => dep.copy());
        return cfg;
    }

    toJson() {
        return {
            name: this.name,
            type: this.type,
            version: this.version,
            env: this.env,
            main: this.main,
            deps: this.deps.map(dep => dep.name)
        }
    }

    save() {
        const root = process.cwd();
        const filePath = join(root, CONFIG_FILE)
        writeFileSync(filePath, JSON.stringify(this.toJson(), null, 4))
    }
}
