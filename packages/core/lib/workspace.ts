import { WorkspaceTemplate } from './template'
import { Project } from './project';
export class Workspace {
    /**
     * 模板集
     */
    templateList: Map<string, WorkspaceTemplate>;
    /**
     * 项目集
     */
    projectList: Map<string, Project>;
    /**
     * 创建项目
     */
    createProject() { }
    /**
     * 启动
     */
    start() { }
}
