import { Config } from "./config";
/**
 * 模块
 */
export class Module {
    config: Config;
    /**
     * 启动module
     */
    start() { }
    /**
     * 创建服务
     */
    createService() { }
    /**
     * 创建magnus
     */
    createMagnus() { }
    /**
     * 创建实体
     */
    createEntity() { }
    /**
     * 从json初始化
     */
    static fromJson() {

    }
}
