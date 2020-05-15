"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kubernetes_1 = require("@pulumi/kubernetes");
class Workflow extends kubernetes_1.apiextensions.CustomResource {
    constructor(name, args, opts) {
        super(name, Object.assign({ kind: "Workflow", apiVersion: "argoproj.io/v1alpha1" }, args), opts);
    }
}
exports.Workflow = Workflow;
class WorkflowTemplate extends kubernetes_1.apiextensions.CustomResource {
    constructor(name, args, opts) {
        super(name, Object.assign({ kind: "WorkflowTemplate", apiVersion: "argoproj.io/v1alpha1" }, args), opts);
    }
}
exports.WorkflowTemplate = WorkflowTemplate;
class CronWorkflow extends kubernetes_1.apiextensions.CustomResource {
    constructor(name, args, opts) {
        super(name, Object.assign({ kind: "CronWorkflow", apiVersion: "argoproj.io/v1alpha1" }, args), opts);
    }
}
exports.CronWorkflow = CronWorkflow;
class ClusterWorkflowTemplate extends kubernetes_1.apiextensions.CustomResource {
    constructor(name, args, opts) {
        super(name, Object.assign({ kind: "ClusterWorkflowTemplate", apiVersion: "argoproj.io/v1alpha1" }, args), opts);
    }
}
exports.ClusterWorkflowTemplate = ClusterWorkflowTemplate;
//# sourceMappingURL=index.js.map