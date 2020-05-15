package main

import (
	"fmt"
	"github.com/argoproj/argo/pkg/apis/workflow/v1alpha1"
	"log"
	"reflect"
	"strings"
)

func GenerateCode(output map[string]string, rt reflect.Type, inline bool) (string, string) {

	switch rt.Kind() {
	case reflect.Struct:
		if strings.HasPrefix(rt.PkgPath(), "github.com/argoproj/argo/pkg/apis/workflow/v1alpha") || inline {
		} else if rt.PkgPath() == "k8s.io/api/core/v1" {
			// Redeclare core.v1.Container because pulumi's container requires name
			if rt.Name() != "Container" {
				return "core.v1." + rt.Name(), ""
			}
		} else if rt.PkgPath() == "k8s.io/api/policy/v1beta1" {
			return "policy.v1beta1." + rt.Name(), ""
		} else if rt.PkgPath() == "k8s.io/apimachinery/pkg/apis/meta/v1" {
			if rt.Name() == "Time" {
				return "string", ""
			}
			return "meta.v1." + rt.Name(), ""
		} else {
			log.Println("Unknown struct", rt.PkgPath(), rt.Name())
			return "UnknownStruct", ""
		}
	case reflect.Array, reflect.Slice:
		sliceType, _ := GenerateCode(output, rt.Elem(), false)
		return fmt.Sprintf("Array<pulumi.Input<%s>>", sliceType), ""
	case reflect.String:
		if rt.Name() == "string" {
			return "string", ""
		} else if strings.HasPrefix(rt.PkgPath(), "github.com/argoproj/argo/pkg/apis/workflow/v1alpha") {
			if inline {
				panic("cannot inline")
			}
			return "string", ""
		} else {
			return "string", ""
		}
	case reflect.Int64, reflect.Int32, reflect.Int16, reflect.Int8, reflect.Int,  reflect.Uint64, reflect.Uint32, reflect.Uint16, reflect.Uint8, reflect.Uint, reflect.Float32, reflect.Float64:
		return "number", ""
	case reflect.Bool:
		return "boolean", ""
	case reflect.Ptr:
		return GenerateCode(output, rt.Elem(), false)
	case reflect.Map:
		if rt.Key().Kind() != reflect.String {
			panic("only string map key is supported")
		}
		elemTypeName, _ := GenerateCode(output, rt.Elem(), false)

		return fmt.Sprintf("{[key: string]: pulumi.Input<%s>}", elemTypeName), ""
	default:
		log.Print("Unknown Type", rt.Kind())
		return "UnknownType", ""
	}
	if rt.Name() == "ParallelSteps" {
		return "Array<pulumi.Input<WorkflowStep>>", ""
	}
	if rt.Name() == "Item" {
		return "pulumi.Input<any>", ""
	}
	ret := ""
	if rt.NumField() == 0 && !inline{
		ret = fmt.Sprintf("export type %s = {};", rt.Name())
		output[rt.Name()] = ret
		return rt.Name(), ret
	}
	if !inline {
		ret += "export interface " + rt.Name() + " {\n"
	}
	for i := 0; i < rt.NumField(); i++ {
		field := rt.Field(i)
		jsonTag := field.Tag.Get("json")
		if jsonTag == "-" || jsonTag == "" {
			log.Printf("Skip field %+v, %+v", rt, field)
			continue
		}
		tag := strings.Split(jsonTag, ",")
		fieldInline := false
		for _, opt := range tag[1:]  {
			if opt == "inline" {
				fieldInline = true
			}
		}
		if fieldInline {
			_, inlineContent := GenerateCode(output, field.Type, fieldInline)
			ret += inlineContent
		} else {
			elemType := field.Type
			if field.Type.Kind() == reflect.Ptr {
				elemType = field.Type.Elem()
			}
			elemTypeName, _ := GenerateCode(output, elemType, false)
			ret += fmt.Sprintf("%s?: pulumi.Input<%s>;\n", tag[0], elemTypeName)
		}
	}
	if !inline {
		ret += "}\n"
		output[rt.Name()] = ret
	}
	return rt.Name(), ret
}

func main() {
	output := make(map[string]string)

	GenerateCode(output, reflect.TypeOf(v1alpha1.Workflow{}), false)
	GenerateCode(output, reflect.TypeOf(v1alpha1.WorkflowStep{}), false)
	GenerateCode(output, reflect.TypeOf(v1alpha1.CronWorkflow{}), false)
	GenerateCode(output, reflect.TypeOf(v1alpha1.WorkflowTemplate{}), false)
	GenerateCode(output, reflect.TypeOf(v1alpha1.ClusterWorkflowTemplate{}), false)
	fmt.Println(`import * as pulumi from '@pulumi/pulumi';`)
	fmt.Println(`import {core, policy, meta} from "@pulumi/kubernetes/types/input";`)
	for _, v := range output {
		fmt.Println(v)
	}
}
