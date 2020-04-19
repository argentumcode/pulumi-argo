import * as pulumi from "@pulumi/pulumi";
import { core, policy, meta } from "@pulumi/kubernetes/types/input";
export interface Container {
    name?: pulumi.Input<string>;
    image?: pulumi.Input<string>;
    command?: pulumi.Input<Array<pulumi.Input<string>>>;
    args?: pulumi.Input<Array<pulumi.Input<string>>>;
    workingDir?: pulumi.Input<string>;
    ports?: pulumi.Input<Array<pulumi.Input<core.v1.ContainerPort>>>;
    envFrom?: pulumi.Input<Array<pulumi.Input<core.v1.EnvFromSource>>>;
    env?: pulumi.Input<Array<pulumi.Input<core.v1.EnvVar>>>;
    resources?: pulumi.Input<core.v1.ResourceRequirements>;
    volumeMounts?: pulumi.Input<Array<pulumi.Input<core.v1.VolumeMount>>>;
    volumeDevices?: pulumi.Input<Array<pulumi.Input<core.v1.VolumeDevice>>>;
    livenessProbe?: pulumi.Input<core.v1.Probe>;
    readinessProbe?: pulumi.Input<core.v1.Probe>;
    startupProbe?: pulumi.Input<core.v1.Probe>;
    lifecycle?: pulumi.Input<core.v1.Lifecycle>;
    terminationMessagePath?: pulumi.Input<string>;
    terminationMessagePolicy?: pulumi.Input<string>;
    imagePullPolicy?: pulumi.Input<string>;
    securityContext?: pulumi.Input<core.v1.SecurityContext>;
    stdin?: pulumi.Input<boolean>;
    stdinOnce?: pulumi.Input<boolean>;
    tty?: pulumi.Input<boolean>;
}
export interface Prometheus {
    name?: pulumi.Input<string>;
    labels?: pulumi.Input<Array<pulumi.Input<MetricLabel>>>;
    help?: pulumi.Input<string>;
    when?: pulumi.Input<string>;
    gauge?: pulumi.Input<Gauge>;
    histogram?: pulumi.Input<Histogram>;
    counter?: pulumi.Input<Counter>;
}
export interface DAGTask {
    name?: pulumi.Input<string>;
    template?: pulumi.Input<string>;
    arguments?: pulumi.Input<Arguments>;
    templateRef?: pulumi.Input<TemplateRef>;
    dependencies?: pulumi.Input<Array<pulumi.Input<string>>>;
    withItems?: pulumi.Input<Array<pulumi.Input<pulumi.Input<any>>>>;
    withParam?: pulumi.Input<string>;
    withSequence?: pulumi.Input<Sequence>;
    when?: pulumi.Input<string>;
    continueOn?: pulumi.Input<ContinueOn>;
    onExit?: pulumi.Input<string>;
}
export interface Metrics {
    prometheus?: pulumi.Input<Array<pulumi.Input<Prometheus>>>;
}
export interface GCSArtifact {
    bucket?: pulumi.Input<string>;
    serviceAccountKeySecret?: pulumi.Input<core.v1.SecretKeySelector>;
    key?: pulumi.Input<string>;
}
export declare type TarStrategy = {};
export interface WorkflowTemplateSpec {
    templates?: pulumi.Input<Array<pulumi.Input<Template>>>;
    entrypoint?: pulumi.Input<string>;
    arguments?: pulumi.Input<Arguments>;
    serviceAccountName?: pulumi.Input<string>;
    automountServiceAccountToken?: pulumi.Input<boolean>;
    executor?: pulumi.Input<ExecutorConfig>;
    volumes?: pulumi.Input<Array<pulumi.Input<core.v1.Volume>>>;
    volumeClaimTemplates?: pulumi.Input<Array<pulumi.Input<core.v1.PersistentVolumeClaim>>>;
    parallelism?: pulumi.Input<number>;
    artifactRepositoryRef?: pulumi.Input<ArtifactRepositoryRef>;
    suspend?: pulumi.Input<boolean>;
    nodeSelector?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    affinity?: pulumi.Input<core.v1.Affinity>;
    tolerations?: pulumi.Input<Array<pulumi.Input<core.v1.Toleration>>>;
    imagePullSecrets?: pulumi.Input<Array<pulumi.Input<core.v1.LocalObjectReference>>>;
    hostNetwork?: pulumi.Input<boolean>;
    dnsPolicy?: pulumi.Input<string>;
    dnsConfig?: pulumi.Input<core.v1.PodDNSConfig>;
    onExit?: pulumi.Input<string>;
    ttlSecondsAfterFinished?: pulumi.Input<number>;
    ttlStrategy?: pulumi.Input<TTLStrategy>;
    activeDeadlineSeconds?: pulumi.Input<number>;
    priority?: pulumi.Input<number>;
    schedulerName?: pulumi.Input<string>;
    podGC?: pulumi.Input<PodGC>;
    podPriorityClassName?: pulumi.Input<string>;
    podPriority?: pulumi.Input<number>;
    hostAliases?: pulumi.Input<Array<pulumi.Input<core.v1.HostAlias>>>;
    securityContext?: pulumi.Input<core.v1.PodSecurityContext>;
    podSpecPatch?: pulumi.Input<string>;
    podDisruptionBudget?: pulumi.Input<policy.v1beta1.PodDisruptionBudgetSpec>;
    metrics?: pulumi.Input<Metrics>;
    shutdown?: pulumi.Input<string>;
}
export interface WorkflowTemplate {
    kind?: pulumi.Input<string>;
    apiVersion?: pulumi.Input<string>;
    metadata?: pulumi.Input<meta.v1.ObjectMeta>;
    spec?: pulumi.Input<WorkflowTemplateSpec>;
}
export interface SuspendTemplate {
    duration?: pulumi.Input<string>;
}
export interface RetryStrategy {
    limit?: pulumi.Input<number>;
    retryPolicy?: pulumi.Input<string>;
    backoff?: pulumi.Input<Backoff>;
}
export interface CronWorkflow {
    kind?: pulumi.Input<string>;
    apiVersion?: pulumi.Input<string>;
    metadata?: pulumi.Input<meta.v1.ObjectMeta>;
    spec?: pulumi.Input<CronWorkflowSpec>;
    status?: pulumi.Input<CronWorkflowStatus>;
}
export interface ValueFrom {
    path?: pulumi.Input<string>;
    jsonPath?: pulumi.Input<string>;
    jqFilter?: pulumi.Input<string>;
    parameter?: pulumi.Input<string>;
    default?: pulumi.Input<string>;
}
export interface Artifact {
    name?: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    mode?: pulumi.Input<number>;
    from?: pulumi.Input<string>;
    archiveLogs?: pulumi.Input<boolean>;
    s3?: pulumi.Input<S3Artifact>;
    git?: pulumi.Input<GitArtifact>;
    http?: pulumi.Input<HTTPArtifact>;
    artifactory?: pulumi.Input<ArtifactoryArtifact>;
    hdfs?: pulumi.Input<HDFSArtifact>;
    raw?: pulumi.Input<RawArtifact>;
    oss?: pulumi.Input<OSSArtifact>;
    gcs?: pulumi.Input<GCSArtifact>;
    globalName?: pulumi.Input<string>;
    archive?: pulumi.Input<ArchiveStrategy>;
    optional?: pulumi.Input<boolean>;
}
export interface Arguments {
    parameters?: pulumi.Input<Array<pulumi.Input<Parameter>>>;
    artifacts?: pulumi.Input<Array<pulumi.Input<Artifact>>>;
}
export interface Sequence {
    count?: pulumi.Input<string>;
    start?: pulumi.Input<string>;
    end?: pulumi.Input<string>;
    format?: pulumi.Input<string>;
}
export interface Backoff {
    duration?: pulumi.Input<string>;
    factor?: pulumi.Input<number>;
    maxDuration?: pulumi.Input<string>;
}
export interface Template {
    name?: pulumi.Input<string>;
    template?: pulumi.Input<string>;
    arguments?: pulumi.Input<Arguments>;
    templateRef?: pulumi.Input<TemplateRef>;
    inputs?: pulumi.Input<Inputs>;
    outputs?: pulumi.Input<Outputs>;
    nodeSelector?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    affinity?: pulumi.Input<core.v1.Affinity>;
    metadata?: pulumi.Input<Metadata>;
    daemon?: pulumi.Input<boolean>;
    steps?: pulumi.Input<Array<pulumi.Input<Array<pulumi.Input<WorkflowStep>>>>>;
    container?: pulumi.Input<Container>;
    script?: pulumi.Input<ScriptTemplate>;
    resource?: pulumi.Input<ResourceTemplate>;
    dag?: pulumi.Input<DAGTemplate>;
    suspend?: pulumi.Input<SuspendTemplate>;
    volumes?: pulumi.Input<Array<pulumi.Input<core.v1.Volume>>>;
    initContainers?: pulumi.Input<Array<pulumi.Input<UserContainer>>>;
    sidecars?: pulumi.Input<Array<pulumi.Input<UserContainer>>>;
    archiveLocation?: pulumi.Input<ArtifactLocation>;
    activeDeadlineSeconds?: pulumi.Input<number>;
    retryStrategy?: pulumi.Input<RetryStrategy>;
    parallelism?: pulumi.Input<number>;
    tolerations?: pulumi.Input<Array<pulumi.Input<core.v1.Toleration>>>;
    schedulerName?: pulumi.Input<string>;
    priorityClassName?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    serviceAccountName?: pulumi.Input<string>;
    automountServiceAccountToken?: pulumi.Input<boolean>;
    executor?: pulumi.Input<ExecutorConfig>;
    hostAliases?: pulumi.Input<Array<pulumi.Input<core.v1.HostAlias>>>;
    securityContext?: pulumi.Input<core.v1.PodSecurityContext>;
    podSpecPatch?: pulumi.Input<string>;
    resubmitPendingPods?: pulumi.Input<boolean>;
    metrics?: pulumi.Input<Metrics>;
}
export interface TTLStrategy {
    secondsAfterCompletion?: pulumi.Input<number>;
    secondsAfterSuccess?: pulumi.Input<number>;
    secondsAfterFailure?: pulumi.Input<number>;
}
export interface Histogram {
    value?: pulumi.Input<string>;
    buckets?: pulumi.Input<Array<pulumi.Input<number>>>;
}
export interface Workflow {
    kind?: pulumi.Input<string>;
    apiVersion?: pulumi.Input<string>;
    metadata?: pulumi.Input<meta.v1.ObjectMeta>;
    spec?: pulumi.Input<WorkflowSpec>;
    status?: pulumi.Input<WorkflowStatus>;
}
export interface RawArtifact {
    data?: pulumi.Input<string>;
}
export interface ScriptTemplate {
    name?: pulumi.Input<string>;
    image?: pulumi.Input<string>;
    command?: pulumi.Input<Array<pulumi.Input<string>>>;
    args?: pulumi.Input<Array<pulumi.Input<string>>>;
    workingDir?: pulumi.Input<string>;
    ports?: pulumi.Input<Array<pulumi.Input<core.v1.ContainerPort>>>;
    envFrom?: pulumi.Input<Array<pulumi.Input<core.v1.EnvFromSource>>>;
    env?: pulumi.Input<Array<pulumi.Input<core.v1.EnvVar>>>;
    resources?: pulumi.Input<core.v1.ResourceRequirements>;
    volumeMounts?: pulumi.Input<Array<pulumi.Input<core.v1.VolumeMount>>>;
    volumeDevices?: pulumi.Input<Array<pulumi.Input<core.v1.VolumeDevice>>>;
    livenessProbe?: pulumi.Input<core.v1.Probe>;
    readinessProbe?: pulumi.Input<core.v1.Probe>;
    startupProbe?: pulumi.Input<core.v1.Probe>;
    lifecycle?: pulumi.Input<core.v1.Lifecycle>;
    terminationMessagePath?: pulumi.Input<string>;
    terminationMessagePolicy?: pulumi.Input<string>;
    imagePullPolicy?: pulumi.Input<string>;
    securityContext?: pulumi.Input<core.v1.SecurityContext>;
    stdin?: pulumi.Input<boolean>;
    stdinOnce?: pulumi.Input<boolean>;
    tty?: pulumi.Input<boolean>;
    source?: pulumi.Input<string>;
}
export interface DAGTemplate {
    target?: pulumi.Input<string>;
    tasks?: pulumi.Input<Array<pulumi.Input<DAGTask>>>;
    failFast?: pulumi.Input<boolean>;
}
export interface UserContainer {
    name?: pulumi.Input<string>;
    image?: pulumi.Input<string>;
    command?: pulumi.Input<Array<pulumi.Input<string>>>;
    args?: pulumi.Input<Array<pulumi.Input<string>>>;
    workingDir?: pulumi.Input<string>;
    ports?: pulumi.Input<Array<pulumi.Input<core.v1.ContainerPort>>>;
    envFrom?: pulumi.Input<Array<pulumi.Input<core.v1.EnvFromSource>>>;
    env?: pulumi.Input<Array<pulumi.Input<core.v1.EnvVar>>>;
    resources?: pulumi.Input<core.v1.ResourceRequirements>;
    volumeMounts?: pulumi.Input<Array<pulumi.Input<core.v1.VolumeMount>>>;
    volumeDevices?: pulumi.Input<Array<pulumi.Input<core.v1.VolumeDevice>>>;
    livenessProbe?: pulumi.Input<core.v1.Probe>;
    readinessProbe?: pulumi.Input<core.v1.Probe>;
    startupProbe?: pulumi.Input<core.v1.Probe>;
    lifecycle?: pulumi.Input<core.v1.Lifecycle>;
    terminationMessagePath?: pulumi.Input<string>;
    terminationMessagePolicy?: pulumi.Input<string>;
    imagePullPolicy?: pulumi.Input<string>;
    securityContext?: pulumi.Input<core.v1.SecurityContext>;
    stdin?: pulumi.Input<boolean>;
    stdinOnce?: pulumi.Input<boolean>;
    tty?: pulumi.Input<boolean>;
    mirrorVolumeMounts?: pulumi.Input<boolean>;
}
export interface ExecutorConfig {
    serviceAccountName?: pulumi.Input<string>;
}
export interface Parameter {
    name?: pulumi.Input<string>;
    default?: pulumi.Input<string>;
    value?: pulumi.Input<string>;
    valueFrom?: pulumi.Input<ValueFrom>;
    globalName?: pulumi.Input<string>;
}
export interface S3Artifact {
    endpoint?: pulumi.Input<string>;
    bucket?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    insecure?: pulumi.Input<boolean>;
    accessKeySecret?: pulumi.Input<core.v1.SecretKeySelector>;
    secretKeySecret?: pulumi.Input<core.v1.SecretKeySelector>;
    roleARN?: pulumi.Input<string>;
    useSDKCreds?: pulumi.Input<boolean>;
    key?: pulumi.Input<string>;
}
export interface Outputs {
    parameters?: pulumi.Input<Array<pulumi.Input<Parameter>>>;
    artifacts?: pulumi.Input<Array<pulumi.Input<Artifact>>>;
    result?: pulumi.Input<string>;
}
export interface NodeStatus {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    templateName?: pulumi.Input<string>;
    templateRef?: pulumi.Input<TemplateRef>;
    storedTemplateID?: pulumi.Input<string>;
    workflowTemplateName?: pulumi.Input<string>;
    templateScope?: pulumi.Input<string>;
    phase?: pulumi.Input<string>;
    boundaryID?: pulumi.Input<string>;
    message?: pulumi.Input<string>;
    startedAt?: pulumi.Input<string>;
    finishedAt?: pulumi.Input<string>;
    resourcesDuration?: pulumi.Input<{
        [key: string]: pulumi.Input<number>;
    }>;
    podIP?: pulumi.Input<string>;
    daemoned?: pulumi.Input<boolean>;
    inputs?: pulumi.Input<Inputs>;
    outputs?: pulumi.Input<Outputs>;
    children?: pulumi.Input<Array<pulumi.Input<string>>>;
    outboundNodes?: pulumi.Input<Array<pulumi.Input<string>>>;
}
export interface Inputs {
    parameters?: pulumi.Input<Array<pulumi.Input<Parameter>>>;
    artifacts?: pulumi.Input<Array<pulumi.Input<Artifact>>>;
}
export interface WorkflowCondition {
    type?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    message?: pulumi.Input<string>;
}
export interface CronWorkflowStatus {
    active?: pulumi.Input<Array<pulumi.Input<core.v1.ObjectReference>>>;
    lastScheduledTime?: pulumi.Input<string>;
}
export declare type NoneStrategy = {};
export interface MetricLabel {
    key?: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}
export interface Metadata {
    annotations?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    labels?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
export interface ResourceTemplate {
    action?: pulumi.Input<string>;
    mergeStrategy?: pulumi.Input<string>;
    manifest?: pulumi.Input<string>;
    setOwnerReference?: pulumi.Input<boolean>;
    successCondition?: pulumi.Input<string>;
    failureCondition?: pulumi.Input<string>;
}
export interface Gauge {
    value?: pulumi.Input<string>;
    realtime?: pulumi.Input<boolean>;
}
export interface Counter {
    value?: pulumi.Input<string>;
}
export interface ArtifactoryArtifact {
    url?: pulumi.Input<string>;
    usernameSecret?: pulumi.Input<core.v1.SecretKeySelector>;
    passwordSecret?: pulumi.Input<core.v1.SecretKeySelector>;
}
export interface ArchiveStrategy {
    tar?: pulumi.Input<TarStrategy>;
    none?: pulumi.Input<NoneStrategy>;
}
export interface ArtifactLocation {
    archiveLogs?: pulumi.Input<boolean>;
    s3?: pulumi.Input<S3Artifact>;
    git?: pulumi.Input<GitArtifact>;
    http?: pulumi.Input<HTTPArtifact>;
    artifactory?: pulumi.Input<ArtifactoryArtifact>;
    hdfs?: pulumi.Input<HDFSArtifact>;
    raw?: pulumi.Input<RawArtifact>;
    oss?: pulumi.Input<OSSArtifact>;
    gcs?: pulumi.Input<GCSArtifact>;
}
export interface HTTPArtifact {
    url?: pulumi.Input<string>;
}
export interface HDFSArtifact {
    krbCCacheSecret?: pulumi.Input<core.v1.SecretKeySelector>;
    krbKeytabSecret?: pulumi.Input<core.v1.SecretKeySelector>;
    krbUsername?: pulumi.Input<string>;
    krbRealm?: pulumi.Input<string>;
    krbConfigConfigMap?: pulumi.Input<core.v1.ConfigMapKeySelector>;
    krbServicePrincipalName?: pulumi.Input<string>;
    addresses?: pulumi.Input<Array<pulumi.Input<string>>>;
    hdfsUser?: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    force?: pulumi.Input<boolean>;
}
export interface OSSArtifact {
    endpoint?: pulumi.Input<string>;
    bucket?: pulumi.Input<string>;
    accessKeySecret?: pulumi.Input<core.v1.SecretKeySelector>;
    secretKeySecret?: pulumi.Input<core.v1.SecretKeySelector>;
    key?: pulumi.Input<string>;
}
export interface CronWorkflowSpec {
    workflowSpec?: pulumi.Input<WorkflowSpec>;
    schedule?: pulumi.Input<string>;
    concurrencyPolicy?: pulumi.Input<string>;
    suspend?: pulumi.Input<boolean>;
    startingDeadlineSeconds?: pulumi.Input<number>;
    successfulJobsHistoryLimit?: pulumi.Input<number>;
    failedJobsHistoryLimit?: pulumi.Input<number>;
    timezone?: pulumi.Input<string>;
    workflowMetadata?: pulumi.Input<meta.v1.ObjectMeta>;
}
export interface ArtifactRepositoryRef {
    configMap?: pulumi.Input<string>;
    key?: pulumi.Input<string>;
}
export interface WorkflowSpec {
    templates?: pulumi.Input<Array<pulumi.Input<Template>>>;
    entrypoint?: pulumi.Input<string>;
    arguments?: pulumi.Input<Arguments>;
    serviceAccountName?: pulumi.Input<string>;
    automountServiceAccountToken?: pulumi.Input<boolean>;
    executor?: pulumi.Input<ExecutorConfig>;
    volumes?: pulumi.Input<Array<pulumi.Input<core.v1.Volume>>>;
    volumeClaimTemplates?: pulumi.Input<Array<pulumi.Input<core.v1.PersistentVolumeClaim>>>;
    parallelism?: pulumi.Input<number>;
    artifactRepositoryRef?: pulumi.Input<ArtifactRepositoryRef>;
    suspend?: pulumi.Input<boolean>;
    nodeSelector?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    affinity?: pulumi.Input<core.v1.Affinity>;
    tolerations?: pulumi.Input<Array<pulumi.Input<core.v1.Toleration>>>;
    imagePullSecrets?: pulumi.Input<Array<pulumi.Input<core.v1.LocalObjectReference>>>;
    hostNetwork?: pulumi.Input<boolean>;
    dnsPolicy?: pulumi.Input<string>;
    dnsConfig?: pulumi.Input<core.v1.PodDNSConfig>;
    onExit?: pulumi.Input<string>;
    ttlSecondsAfterFinished?: pulumi.Input<number>;
    ttlStrategy?: pulumi.Input<TTLStrategy>;
    activeDeadlineSeconds?: pulumi.Input<number>;
    priority?: pulumi.Input<number>;
    schedulerName?: pulumi.Input<string>;
    podGC?: pulumi.Input<PodGC>;
    podPriorityClassName?: pulumi.Input<string>;
    podPriority?: pulumi.Input<number>;
    hostAliases?: pulumi.Input<Array<pulumi.Input<core.v1.HostAlias>>>;
    securityContext?: pulumi.Input<core.v1.PodSecurityContext>;
    podSpecPatch?: pulumi.Input<string>;
    podDisruptionBudget?: pulumi.Input<policy.v1beta1.PodDisruptionBudgetSpec>;
    metrics?: pulumi.Input<Metrics>;
    shutdown?: pulumi.Input<string>;
}
export interface WorkflowStep {
    name?: pulumi.Input<string>;
    template?: pulumi.Input<string>;
    arguments?: pulumi.Input<Arguments>;
    templateRef?: pulumi.Input<TemplateRef>;
    withItems?: pulumi.Input<Array<pulumi.Input<pulumi.Input<any>>>>;
    withParam?: pulumi.Input<string>;
    withSequence?: pulumi.Input<Sequence>;
    when?: pulumi.Input<string>;
    continueOn?: pulumi.Input<ContinueOn>;
    onExit?: pulumi.Input<string>;
}
export interface PodGC {
    strategy?: pulumi.Input<string>;
}
export interface WorkflowStatus {
    phase?: pulumi.Input<string>;
    startedAt?: pulumi.Input<string>;
    finishedAt?: pulumi.Input<string>;
    message?: pulumi.Input<string>;
    compressedNodes?: pulumi.Input<string>;
    nodes?: pulumi.Input<{
        [key: string]: pulumi.Input<NodeStatus>;
    }>;
    offloadNodeStatusVersion?: pulumi.Input<string>;
    storedTemplates?: pulumi.Input<{
        [key: string]: pulumi.Input<Template>;
    }>;
    persistentVolumeClaims?: pulumi.Input<Array<pulumi.Input<core.v1.Volume>>>;
    outputs?: pulumi.Input<Outputs>;
    conditions?: pulumi.Input<Array<pulumi.Input<WorkflowCondition>>>;
    resourcesDuration?: pulumi.Input<{
        [key: string]: pulumi.Input<number>;
    }>;
}
export interface ContinueOn {
    error?: pulumi.Input<boolean>;
    failed?: pulumi.Input<boolean>;
}
export interface GitArtifact {
    repo?: pulumi.Input<string>;
    revision?: pulumi.Input<string>;
    depth?: pulumi.Input<number>;
    fetch?: pulumi.Input<Array<pulumi.Input<string>>>;
    usernameSecret?: pulumi.Input<core.v1.SecretKeySelector>;
    passwordSecret?: pulumi.Input<core.v1.SecretKeySelector>;
    sshPrivateKeySecret?: pulumi.Input<core.v1.SecretKeySelector>;
    insecureIgnoreHostKey?: pulumi.Input<boolean>;
}
export interface TemplateRef {
    name?: pulumi.Input<string>;
    template?: pulumi.Input<string>;
    runtimeResolution?: pulumi.Input<boolean>;
}
