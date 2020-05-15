import { apiextensions } from "@pulumi/kubernetes";
import * as pulumi from "@pulumi/pulumi";
import * as input from "./input";

export type WorkflowArgs = input.Workflow;

export class Workflow extends apiextensions.CustomResource {
  constructor(
    name: string,
    args: CronWorkflowArgs,
    opts?: pulumi.CustomResourceOptions
  ) {
    super(
      name,
      {
        kind: "Workflow",
        apiVersion: "argoproj.io/v1alpha1",
        ...args
      },
      opts
    );
  }
}

export type WorkflowTemplateArgs = input.WorkflowTemplate;

export class WorkflowTemplate extends apiextensions.CustomResource {
  constructor(
    name: string,
    args: CronWorkflowArgs,
    opts?: pulumi.CustomResourceOptions
  ) {
    super(
      name,
      {
        kind: "WorkflowTemplate",
        apiVersion: "argoproj.io/v1alpha1",
        ...args
      },
      opts
    );
  }
}

export type CronWorkflowArgs = input.CronWorkflow;

export class CronWorkflow extends apiextensions.CustomResource {
  constructor(
    name: string,
    args: CronWorkflowArgs,
    opts?: pulumi.CustomResourceOptions
  ) {
    super(
      name,
      {
        kind: "CronWorkflow",
        apiVersion: "argoproj.io/v1alpha1",
        ...args
      },
      opts
    );
  }
}

export type ClusterWorkflowTemplateArgs = input.ClusterWorkflowTemplate;

export class ClusterWorkflowTemplate extends apiextensions.CustomResource {
  constructor(
    name: string,
    args: ClusterWorkflowTemplateArgs,
    opts?: pulumi.CustomResourceOptions
  ) {
    super(
      name,
      {
        kind: "ClusterWorkflowTemplate",
        apiVersion: "argoproj.io/v1alpha1",
        ...args
      },
      opts
    );
  }
}
