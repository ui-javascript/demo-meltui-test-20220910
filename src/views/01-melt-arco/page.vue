<route>
{
    meta: {
        layout: "main",
        title: "Arco基础示例",
        parentTitle: "MeltUI",
        icon: "config",
        parentIcon: "eye",
    }
}
</route>

<template>
    <ArcoCrudTable
        class="mt-2"
        :options="options"
        :schema="schema"
        @showItem="showItem"
    />
</template>

<script setup>
import {
    ArcoCrudTable,
    FormSchema,
    CrudOptions
} from 'meltui'

import { Modal } from '@arco-design/web-vue'

const searchable = ref(true)
const editable = ref(false)
let options = ref(new CrudOptions()
    .edit(editable.value) // 编辑模式
    // .header(false).visible(false) // 不显示表头
    .row().hover().border().stripe()
    .size().small()
    .layout()
    .search(searchable.value).inline().cols().sm(1).md(2).xl(2)
    // .row().selection().radioType()
    .row().selection().checkboxType().checkAll() // .currentOnly(false)
    // .row().expand().width(50).title('展开行').render("{{ record.key % 2 === 1 ? '我的名字是 is' + record.name + ', 我的地址是 ' + record.address : JSON.stringify(record, null, 2)  }}")
    // @fix 开启虚拟列表后 复选款无法勾选 --> v-model:selected-keys
    // .body().virtualList().height(400)
    // .body().scroll().y(400)
    // .column().resizable()   // .body().scroll().x(1000)

    .baseUrl('https://mock.apifox.cn/m1/1087009-0-default/api')
    .fetchList().get('/v1/fetchList') // 初始化列表
    .viewOperation().fetch().get('/v1/fetch') // 查看1条数据
    .editOperation().update().post('/v1/update') // 更新1条数据
    .editBatchOperation().updateBatch().post('/v1/updateBatch') // 批量更新
    .addOperation().save().post('/v1/save') // 新增1条数据
    .removeOperation()
    .needConfirm().confirmText('确定删除吗?') // 删除前需要确认
    .delete().post('/v1/delete') // 删除1条数据

    .removeBatchOperation().deleteBatch().post('/v1/deleteBatch') // 批量删除
    .customOperation('自定义').clickEmit('showItem') // 自定义按钮

    // .customOperation("自定义2").clickEmit("showItem")
    .parse())

console.log(options.value)

const schema = ref({
    name: new FormSchema()
        .title('姓名').center().upperFirst()
        .width(200)
        .format('{{ \'[No.\' + (rowIndex+1)  + \']\' + record.name }}')
        .readonly()
        .column().fixed().left()
        .input().placeholder('输入姓名').clearable()
        .searchable() // .placeholder("{{ '请输入' + column.title }}")
        .validatable().required()
        .parse(),
    salary: new FormSchema()
        .title('工资')
        .width(150).center()
        .inputNumber().placeholder('输入工资').clearable(false)
        // .props({
        //     allowClear: true
        // })
        .sortable().asc().desc()
        .filterable()
        .gt(20000)
        .gt([25000, 1000000])
        // .filter("{{ record.salary > value[0] }}")
        .searchable().advancedOnly() // .placeholder("{{ '请输入' + column.title }}")
        .validatable().required().min(1500)
        .parse(),

    address: new FormSchema()
        .title('地址')
        .width(150).left()
        .filterable()
        // .startsWith("北京海淀").startsWith("35 Park Road")
        // .startsWith(["北京海淀", "35 Park Road"])
        .contains(['北京', '绵阳', 'Park Road'])
        // .filter(`{{ record.address.startsWith(value[0]) }}`) // 也可以不用写
        .textArea().clearable()
        .placeholder('{{ \'请输入\' + (record.name ? record.name + \'的\' : \'\') + \'地址\'}}')
        .props({
            autoSize: true
        })
        .cell().ellipsis().tooltip().width(150) // width会覆盖
        .searchable().advancedOnly() // .placeholder("{{ '请输入' + column.title }}")
        .readonly()
        .validatable(false).required()
        .parse(),
    province: new FormSchema()
        .title('省份')
        .width(150).center()
        // .column().fixed().right()
        .select({
            province: ['北京', '四川', '广东'],
            // 'province': ['海淀', '朝阳', '昌平'],
            '北京': ['海淀', '朝阳', '昌平'],
            '四川': ['成都', '绵阳'],
            '广东': ['广州', '深圳']
        })
        // .props({
        //     allowClear: true
        // })
        .parse(),
    city: new FormSchema()
        .title('城市')
        .width(150).center()
        // .column().fixed().right()
        .select().keepWatch('province') // 联动
        .parse()
})

const showItem = argv => {
    const { record } = argv
    // getCurrentInstance()?.appContext.config.globalProperties.$modal.info({ title:'Name', content: record.name })
    Modal.info({
        title: 'Info Title',
        content: JSON.stringify(record, null, 2)
    })
}

watch(() => editable.value, current => {
    // console.log(current, prev)
    // console.log(new CrudOptions(options.value).edit(current).parse())
    options.value = new CrudOptions(options.value).edit(current).parse()
    // console.log("更新")
    // console.log(JSON.stringify(options.value))
}, {
    deep: true
})
watch(() => searchable.value, current => {
    // console.log(current, prev)
    // console.log(new CrudOptions(options.value).edit(current).parse())
    options.value = new CrudOptions(options.value).search(current).parse()
    // console.log("更新")
    // console.log(JSON.stringify(options.value))
}, {
    deep: true
})

</script>
