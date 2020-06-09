import { createNamespace, addUnit, noop } from '../utils';
import { toArray, readFile, isOversize, isImageFile, random } from './utils';
import { BORDER_BOTTOM } from '../utils/constant';
import Icon from '../icon';
import Image from '../image';
import Loading from '../loading';
import ImagePreview from '../image-preview';

const [createComponent, bem] = createNamespace('uploader');

export default createComponent({
  inheritAttrs: false,

  model: {
    prop: 'fileList'
  },

  props: {
    disabled: Boolean,
    uploadText: String,
    afterRead: Function,
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String],
    name: {
      type: [Number, String],
      default: ''
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    fileList: {
      type: Array,
      default: () => []
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    },
    maxCount: {
      type: Number,
      default: Number.MAX_VALUE
    },
    deletable: {
      type: Boolean,
      default: true
    },
    previewImage: {
      type: Boolean,
      default: true
    },
    previewFullImage: {
      type: Boolean,
      default: true
    },
    imageFit: {
      type: String,
      default: 'cover'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    },
    async: Boolean,
    progress: Boolean,
    progressInterval: {
      type: Number,
      default: 1000
    },
    title: String,
    description: String,
    tip: String
  },

  computed: {
    previewSizeWithUnit() {
      return addUnit(this.previewSize);
    }
  },

  methods: {
    getDetail(index = this.fileList.length) {
      return {
        name: this.name,
        index
      };
    },

    onChange(event) {
      let { files } = event.target;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files);

      if (this.beforeRead) {
        const response = this.beforeRead([...files], this.getDetail());

        if (!response) {
          this.resetInput();
          return;
        }

        if (response.then) {
          response
            .then(() => {
              this.readFile(files);
            })
            .catch(this.resetInput);

          return;
        }
      }

      this.readFile(files);
    },

    readFile(files) {
      const oversize = isOversize(files, this.maxSize);

      if (Array.isArray(files)) {
        const maxCount = this.maxCount - this.fileList.length;

        if (files.length > maxCount) {
          files = files.slice(0, maxCount);
        }

        Promise.all(files.map(file => readFile(file, this.resultType))).then(
          contents => {
            const fileList = files.map((file, index) => {
              const result = { file };

              if (contents[index]) {
                result.content = contents[index];
              }

              return result;
            });

            this.onAfterRead(fileList, oversize);
          }
        );
      } else {
        readFile(files, this.resultType).then(content => {
          const result = { file: files };

          if (content) {
            result.content = content;
          }

          this.onAfterRead(result, oversize);
        });
      }
    },

    onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files, this.getDetail());
        return;
      }

      this.resetInput();
      files = toArray(files);
      if (!this.async) {
        files.forEach(element => {
          element.status = 'loading';
        });
      }
      this.$emit('input', [...this.fileList, ...files]);

      this.afterRead && this.afterRead(files, this.getDetail());
    },

    onDelete(file, index) {
      if (this.beforeDelete) {
        const response = this.beforeDelete(file, this.getDetail(index));

        if (!response) {
          return;
        }

        if (response.then) {
          response
            .then(() => {
              this.deleteFile(file, index);
            })
            .catch(noop);
          return;
        }
      }

      this.deleteFile(file, index);
    },

    deleteFile(file, index) {
      const fileList = this.fileList.slice(0);
      fileList.splice(index, 1);

      this.$emit('input', fileList);
      this.$emit('delete', file, this.getDetail(index));
    },

    resetInput() {
      /* istanbul ignore else */
      if (this.$refs.input) {
        this.$refs.input.value = '';
      }
    },

    onPreviewImage(item) {
      if (!this.previewFullImage) {
        return;
      }

      const imageFiles = this.fileList.filter(item => isImageFile(item));
      const imageContents = imageFiles.map(item => item.content || item.url);

      this.imagePreview = ImagePreview({
        images: imageContents,
        closeOnPopstate: true,
        startPosition: imageFiles.indexOf(item),
        onClose: () => {
          this.$emit('close-preview');
        }
      });
    },

    closeImagePreview() {
      if (this.imagePreview) {
        this.imagePreview.close();
      }
    },

    getRate(item) {
      const randomUp = random(70, 90);
      const randomNumber = random(2, 10);
      if (!item.hasOwnProperty('rate')) {
        this.$set(item, 'rate', randomNumber);
      }
      const timer = setInterval(() => {
        if (item.rate < randomUp) {
          item.rate += randomNumber;
        } else {
          clearInterval(timer);
        }
      }, this.progressInterval);
    },

    getStatus(item) {
      switch (item.status) {
        case 'loading':
          return (
            <div class={bem('file-status')}>
              <Loading
                type="spinner"
                size="20"
                class={bem('file-status-icon')}
              />
              {this.progress && this.getRate(item)}
              {item.rate && <p>{item.rate}%</p>}
            </div>
          );
        case 'fail':
          return (
            <div
              class={bem('file-status')}
              onClick={() => {
                item.hasOwnProperty('rate') && delete item.rate;
                item.status = 'loading';
                this.afterRead && this.afterRead([item], 'reupload');
              }}
            >
              <p>上传失败</p>
              <p>点击重试</p>
            </div>
          );
        default:
          return (
            <div>
              <Icon class={bem('file-icon')} name="description" />
              <div class={[bem('file-name'), 'van-ellipsis']}>
                {item.file ? item.file.name : item.url}
              </div>
            </div>
          );
      }
    },

    genPreviewItem(item, index) {
      const DeleteIcon = this.deletable && item.status !== 'loading' && (
        <span
          class={bem('preview-delete')}
          onClick={event => {
            event.stopPropagation();
            this.onDelete(item, index);
          }}
        >
          <Icon name="cross" />
        </span>
      );

      const Preview =
        isImageFile(item) && !item.status ? (
          <Image
            fit={this.imageFit}
            src={item.content || item.url}
            class={bem('preview-image')}
            width={this.previewSize}
            height={this.previewSize}
            onClick={() => {
              this.onPreviewImage(item);
            }}
          ></Image>
        ) : (
          <div
            class={bem('file', { fail: item.status === 'fail' })}
            style={{
              width: this.previewSizeWithUnit,
              height: this.previewSizeWithUnit
            }}
          >
            {this.getStatus(item)}
          </div>
        );

      return (
        <div
          class={bem('preview')}
          onClick={() => {
            this.$emit('click-preview', item, this.getDetail(index));
          }}
        >
          {Preview}
          {DeleteIcon}
        </div>
      );
    },

    genPreviewList() {
      if (this.previewImage) {
        return this.fileList.map(this.genPreviewItem);
      }
    },

    genUpload() {
      if (this.fileList.length >= this.maxCount) {
        return;
      }

      const slot = this.slots();

      const Input = (
        <input
          {...{ attrs: this.$attrs }}
          ref="input"
          type="file"
          accept={this.accept}
          class={bem('input')}
          disabled={this.disabled}
          onChange={this.onChange}
        />
      );

      if (slot) {
        return (
          <div class={bem('input-wrapper')}>
            {slot}
            {Input}
          </div>
        );
      }

      let style;
      if (this.previewSize) {
        const size = this.previewSizeWithUnit;
        style = {
          width: size,
          height: size
        };
      }

      return (
        <div class={bem('upload')} style={style}>
          <i class={bem('plus')} />
          {this.uploadText && (
            <span class={bem('upload-text')}>{this.uploadText}</span>
          )}
          {Input}
        </div>
      );
    },

    getTitle() {
      return (
        this.title && (
          <div class={[bem('title'), BORDER_BOTTOM]}>
            <p>
              {this.title}
              <span class={bem('title-description')}>{this.description}</span>
            </p>
            {this.maxCount && this.maxCount < Number.MAX_VALUE && (
              <p class={bem('title-right')}>
                <span
                  class={bem([
                    this.fileList.filter(obj => !obj.status).length >=
                    this.maxCount
                      ? 'max-count'
                      : this.fileList.filter(obj => !obj.status).length > 0
                      ? 'count'
                      : ''
                  ])}
                >
                  {this.fileList.filter(obj => !obj.status).length}
                </span>
                /{this.maxCount}
              </p>
            )}
          </div>
        )
      );
    },

    getTip() {
      return this.tip && <div class={bem('tip')}>{this.tip}</div>;
    }
  },

  render() {
    return (
      <div class={bem()}>
        {this.getTitle()}
        <div class={bem('wrapper')}>
          {this.genPreviewList()}
          {this.genUpload()}
        </div>
        {this.getTip()}
      </div>
    );
  }
});
