<template>
    <!-- <div class="flex">
        <span></span>
        <el-input v-model="state.username" style="width: 200px;"></el-input>
    </div>
    <div class="flex">
        <span>密码：</span>
        <el-input v-model="state.password" style="width: 200px;"></el-input>
    </div> -->
    <el-form ref="ruleFormRef" :rules="state.rules" :model="state">
        <el-form-item label="密码" prop="password">
            <el-input v-model="state.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
            <!-- <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload> -->
            <el-upload
                class="upload-demo"
                multiple
                :file-list="fileList"
                limit="3"
                @change="handleUpload">
                <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
        </el-form-item>
    </el-form>
    <el-button @click="handleSearch" type="primary">登录</el-button>
    <!-- <h5 v-for="item in state.mainDataLiat">{{ item }}</h5> -->

</template>

<script setup name="Model" lang="ts">
import { ref, reactive } from 'vue'
import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { UploadProps, UploadUserFile } from 'element-plus'

const ruleFormRef = ref()

// const validatePass = (rule: any, value: any, callback: any) => {
//     console.log(value);

//     if (value === '') {
//         callback(new Error('Please input the password'))
//     } else if (value < 8) {
//         console.log(value);
        
//             callback(new Error('password >= 8'))
//         }
// }

const state = reactive({
    mainDataLiat: [],
    username: '',
    password: '',
    rules: {
        password: [
            { required: true, message: 'Please input passeord', trigger: 'blur' },
            { min: 8, message: 'Length should be bigger than 8', trigger: 'blur' },
        ]
    },
    
})

const fileList = ref<UploadUserFile[]>([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])

const handleUpload = ($event) => {
    console.log($event.raw);
    const fd = new FormData()
    fd.append('avatar', $event.raw)
    
    axios({
        url: 'http://ajax-api.itheima.net/api/file',
        method: 'post',
        data: fd,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

const handleSearch = () => {
    axios({
        url: 'http://hmajax.itheima.net/api/login',
        method: 'post',
        data: {
            username: state.username || '',
            // username: 'itheima007',
            password: state.password || ''
        }
    }).then(res => {
        console.log(res);
        // state.mainDataLiat = res.data.list
        ElMessage.success(res.data.message)
    }).catch(err => {
        ElMessage.error(err.response.data.message)
    })
}

</script>


<style>
.tanchuang {
    padding: 20px 0;
    border: 1px solid grey;
    border-radius: 5px;
    text-align: center;
    width: 200px;
    position: fixed;
    left: 50%;
    top: 100px;
    margin-left: -100px;
}
</style>