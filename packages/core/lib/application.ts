import { Workspace } from './workspace';
import { Config } from './config';
export type Path = string;
/**
 * 应用
 */
export class Application {
    /**
     * 工作空间集
     */
    workspacesList: Map<Path, Workspace>;
    /**
     * 配置文件
     */
    config: Config;
    /**
     * 绑定模板
     */
    bindTemplate() { }
    /**
     * 一键部署
     */
    oneDevelement() { }
    /**
     * 创建工作空间
     */
    createWorkspace() { }

    static fromJson(json: any) {
        const app = new Application();
        app.config = Config.fromJson(json)
        return app;
    }
}
