/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-12-16 09:17:45
 * */

import { TdPickerProps, TdPickerItemProps } from './type';
import { PropType } from 'vue';

export const PickerProps = {
  /** 取消按钮文字 */
  cancelBtn: {
    type: String,
    default: '取消',
  },
  /** 确定按钮文字 */
  confirmBtn: {
    type: String,
    default: '确认',
  },
  /** 标题 */
  title: {
    type: String,
    default: '',
  },
  /** 选中值 */
  modelValue: {
    type: Array as PropType<TdPickerProps['modelValue']>,
  },
  /** 选中值，非受控属性 */
  defaultValue: {
    type: Array as PropType<TdPickerProps['defaultValue']>,
  },
  /** 是否显示 */
  visible: Boolean,
  /** 点击取消按钮时触发 */
  onCancel: Function as PropType<TdPickerProps['onCancel']>,
  /** 选中变化时候触发 */
  onChange: Function as PropType<TdPickerProps['onChange']>,
  /** 点击确认确认按钮时触发 */
  onConfirm: Function as PropType<TdPickerProps['onConfirm']>,
};

export const PickerItemProps = {
  /** 数据源 */
  options: {
    type: Array as PropType<TdPickerItemProps['options']>,
    default: () => [],
  },
  /** 选中的值 */
  value: {
    type: [String, Number] as PropType<TdPickerItemProps['value']>,
  },
  /** 格式化选项 */
  formatter: {
    type: Function as PropType<TdPickerItemProps['formatter']>,
    default: (value: string | number): string => String(value),
  },
};
