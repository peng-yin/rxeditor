import { inputBaseSchemas } from "../schemas";
import { INodeSchema } from "@rxdrag/schema";
import { SchemaOptions, createSchema } from "../../../shared";

const inputNumberPros = [
  ...inputBaseSchemas,
  {
    componentName: "FormItem",
    props: {
      label: "$showCount",
    },
    children: [
      {
        componentName: "Switch",
        "x-field": {
          name: "showCount",
          params:{
            valuePropName: "checked",
            withBind: true,
          }
        },
      }
    ]
  },
  {
    componentName: "FormItem",
    props: {
      label: "$maxLength",
    },
    children: [
      {
        componentName: "InputNumber",
        "x-field": {
          name: "maxLength",
          params: {
            withBind: true,
          }
        },
      }
    ]
  },
]

const inputSlots = [
  {
    componentName: "FormItem",
    props: {
      label: "$addonBefore",
    },
    children: [
      {
        componentName: "SlotSwitch",
        props: {
          name: "addonBefore"
        }
      }
    ]
  },
  {
    componentName: "FormItem",
    props: {
      label: "$addonAfter",
    },
    children: [
      {
        componentName: "SlotSwitch",
        props: {
          name: "addonAfter"
        }
      }
    ]
  },
  {
    componentName: "FormItem",
    props: {
      label: "$prefix",
    },
    children: [
      {
        componentName: "SlotSwitch",
        props: {
          name: "prefix"
        }
      }
    ]
  },
  {
    componentName: "FormItem",
    props: {
      label: "$suffix",
    },
    children: [
      {
        componentName: "SlotSwitch",
        props: {
          name: "suffix"
        }
      }
    ]
  },
]


const options: SchemaOptions = {
  propsSchemas:inputNumberPros,
  slotsSchemas:inputSlots,
  fieldOptions: {
    canBindField: true,
  }
}
export const inputNumberSchema: INodeSchema = createSchema(options)

