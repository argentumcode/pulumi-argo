import { apiextensions } from "@pulumi/kubernetes";
import * as pulumi from "@pulumi/pulumi";
import * as input from "./input";
export declare type WorkflowArgs = input.Workflow;
export declare class Workflow extends apiextensions.CustomResource {
    constructor(name: string, args: CronWorkflowArgs, opts?: pulumi.CustomResourceOptions);
}
export declare type WorkflowTemplateArgs = input.WorkflowTemplate;
export declare class WorkflowTemplate extends apiextensions.CustomResource {
    constructor(name: string, args: CronWorkflowArgs, opts?: pulumi.CustomResourceOptions);
}
export declare type CronWorkflowArgs = input.CronWorkflow;
export declare class CronWorkflow extends apiextensions.CustomResource {
    constructor(name: string, args: CronWorkflowArgs, opts?: pulumi.CustomResourceOptions);
}
export declare type ClusterWorkflowTemplateArgs = input.ClusterWorkflowTemplate;
export declare class ClusterWorkflowTemplate extends apiextensions.CustomResource {
    constructor(name: string, args: ClusterWorkflowTemplateArgs, opts?: pulumi.CustomResourceOptions);
}
