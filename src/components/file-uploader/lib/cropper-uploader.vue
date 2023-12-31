<template>
  <div class="d2p-cropper-uploader"  :class="{'is-disabled':disabled}" >
    <div class="image-list">
      <div class="image-item" v-for="(item,index) in list" :key="index">
        <el-image class="image"
          :src="item.dataUrl?item.dataUrl:item.url"
          :data-src="item.url"
          :preview-src-list="_urlList"
          fit="contain" >
          <div slot="placeholder" class="image-slot">
            <img src="./loading-spin.svg">
          </div>
        </el-image>
        <div class="delete" v-if="!disabled"><i class="el-icon-delete" @click="removeImage(index,item)"></i></div>
        <div class="status-uploading" v-if="item.status==='uploading'">
          <el-progress type="circle" :percentage="item.progress" :width="70"/>
        </div>
        <div class="status-done" v-else-if="item.status==='done'">
          <i class="el-icon-upload-success el-icon-check"></i>
        </div>
      </div>
      <div v-if="limit <=0 || limit>list.length" class="image-item image-plus" @click="addNewImage">
        <i class="el-icon-plus cropper-uploader-icon"></i>
      </div>
    </div>
    <d2p-cropper ref="cropper"
                        :title="title"
                        :cropperHeight="cropperHeight"
                        :dialogWidth="dialogWidth"
                        :accept="accept"
                        :uploadTip="uploadTip"
                        :maxSize="maxSize"
                        :cropper="cropper"
                        output="all"
                        @done="cropComplete"
    ></d2p-cropper>
  </div>

</template>

<script>
import D2pCropper from './cropper'
import D2pUploader from 'd2p-extends/src/uploader'
import { d2CrudPlus } from 'd2-crud-plus'
import log from 'd2p-extends/src/utils/util.log'
/**
 * 图片裁剪上传组件,封装了d2p-cropper, d2p-cropper内部封装了cropperjs
 */

export default {
  name: 'd2p-cropper-uploader',
  mixins: [d2CrudPlus.inputBase],
  components: {
    D2pCropper
  },
  props: {
    // 初始图片url
    value: {
      type: [String, Array]
    },
    // 上传后端类型，[form, cos, qiniu , alioss]
    type: {
      type: String
    },
    // 上传提示
    uploadTip: {
      type: String
    },
    // 对话框标题
    title: String,
    // cropper的高度，默认为浏览器可视窗口高度的40%，最小270
    cropperHeight: {
      type: [String, Number]
    },
    // 对话框宽度，默认50%
    dialogWidth: {
      type: [String, Number],
      default: '50%'
    },
    // 图片大小限制，单位MB
    maxSize: {
      type: Number,
      default: 5
    },
    // 图片数量限制,0为不限制
    limit: {
      type: Number,
      default: 1
    },
    // 可接收的文件后缀
    accept: {
      type: String,
      default: '.jpg, .jpeg, .png, .gif, .webp'
    },
    // [cropperjs的参数](https://github.com/fengyuanchen/cropperjs)
    cropper: {
      type: Object
    },
    // 上传参数，会临时覆盖全局上传配置参数[d2p-uploader](/guide/extends/uploader.html)
    uploader: {
      type: Object
    },
    // 构建下载url方法,不影响提交的value
    buildUrl: {
      type: Function,
      default: function (value, item) { return (typeof value === 'object') ? item.url : value }
    }

  },
  data () {
    return {
      index: undefined,
      list: []
    }
  },
  watch: {
    value (val) {
      this.$emit('change', val)
      if (val === this.emitValue) {
        return
      }
      this.initValue(val)
    }
  },
  created () {
    this.emitValue = this.value
    this.initValue(this.value)
  },
  computed: {
    _urlList () {
      const urlList = []
      if (this.list) {
        for (const item of this.list) {
          urlList.push(item.url)
        }
      }
      return urlList
    }
  },
  methods: {
    initValue (value) {
      const list = []
      if (value == null || value === '') {
        this.$set(this, 'list', list)
        return
      }
      if (typeof (value) === 'string') {
        list.push({ url: this.buildUrl(value), value: value, status: 'done' })
      } else {
        for (const item of value) {
          list.push({ url: this.buildUrl(item), value: item, status: 'done' })
        }
      }
      this.$set(this, 'list', list)
    },
    addNewImage () {
      if (this.disabled) {
        return
      }
      this.index = undefined
      this.$refs.cropper.clear()
      this.$refs.cropper.open()
    },
    removeImage (index, item) {
      this.list.splice(index, 1)
      this.emit()
    },
    isHasUploadingItem () {
      const fileList = this.list
      if (fileList && fileList.length > 0) {
        for (const item of fileList) {
          if (item.status === 'uploading') {
            return true
          }
        }
      }
      return false
    },
    async cropComplete (ret) {
      const blob = ret.blob
      const dataUrl = ret.dataUrl
      const file = ret.file
      // 开始上传
      const item = {
        url: undefined,
        dataUrl: dataUrl,
        status: 'uploading',
        progress: 0
      }
      const onProgress = (e) => {
        item.progress = e.percent
      }
      const onError = (e) => {
        item.status = 'error'
        item.message = '文件上传出错:' + e.message
        log.debug(e)
      }
      log.debug('blob:', blob)
      const option = {
        file: blob,
        fileName: file.name,
        onProgress,
        onError
      }
      this.list.push(item)
      const upload = await this.doUpload(option)
      item.url = this.buildUrl(upload.url)
      item.value = upload.url
      item.status = 'done'
      this.emit()
    },
    doUpload (option) {
      option.config = this.uploader
      return this.getUploader().then(uploader => {
        return uploader.upload(option).then(ret => {
          if (this.suffix != null) {
            ret.url += this.suffix
          }
          return ret
        })
      })
    },
    getUploader () {
      let type = this.type
      if (this.uploader != null && this.uploader.type != null) {
        type = this.uploader.type
      }
      return D2pUploader.getUploader(type)
    },
    emit () {
      const list = []
      for (const item of this.list) {
        if (item.status != null && item.status !== 'done') {
          // 全部上传完再发通知
          return
        }
        if (typeof (item) === 'string') {
          list.push(item)
        } else {
          list.push(item.value)
        }
      }
      let ret = list
      if (this.limit === 1) {
        ret = ((list && list.length > 0) ? list[0] : undefined)
      }
      this.emitValue = ret
      this.$emit('input', ret)
    }

  }
}
</script>

<style lang="scss" >
  .d2p-cropper-uploader{
    .el-image-viewer__close{color:#fff}
    &.is-disabled {
      .image-list{
        .image-item{
          cursor: not-allowed;
        }
      }
      i{cursor: not-allowed}
    }
    .image-list{
      display: flex;
      justify-content: left;
      align-items: center;
      flex-wrap: wrap;
      .image-item{
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fbfdff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        position: relative;
        margin-right: 8px;
        margin-bottom: 8px;
        cursor: pointer;
        overflow: hidden;
        &.image-plus{
          border: 1px dashed #c0ccda;
        }
        .cropper-uploader-icon {
          vertical-align: top;
          font-size: 28px;
          color: #8c939d;
        }
        .image{
          width: 100px;
          height: 100px;
        }

        .delete{
          border-radius: 6px;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          cursor: default;
          text-align: center;
          color: #fff;
          opacity: 0;
          font-size: 20px;
          background-color: rgba(0,0,0,.9);
          -webkit-transition: opacity .3s;
          transition: opacity .3s;
          &:hover{
            opacity: 0.9;
          }
          display: flex;
          justify-content: center;
          align-items: center;
          i{
            cursor: pointer;
          }
        }
        .status-uploading{
          border-radius: 6px;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          cursor: default;
          text-align: center;
          color: #fff;
          opacity: 1;
          font-size: 20px;
          background-color: rgba(0, 0, 0, 0.5);
          -webkit-transition: opacity .3s;
          transition: opacity .3s;
          display: flex;
          justify-content: center;
          align-items: center;
          .el-progress{
            width: 70px;
            height: 70px;
            .el-progress__text {
              color:#fff;
            }
          }

        }
        .status-done{
          position: absolute;
          right: -15px;
          top: -6px;
          width: 40px;
          height: 24px;
          background: #13ce66;
          text-align: center;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          -webkit-box-shadow: 0 0 1pc 1px rgba(0,0,0,.2);
          box-shadow: 0 0 1pc 1px rgba(0,0,0,.2);
          display: flex;
          justify-content: center;
          align-items: center;
          i{
            font-size: 12px;
            margin-top: 11px;
            color: #fff;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
          }
        }
      }
    }
  }

</style>
