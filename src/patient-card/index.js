import { createNamespace } from '../utils';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('patient-card');

export default createComponent({
  props: {
    type: String,
    org: String,
    cardName: String,
    patientName: String,
    default: Boolean,
    codeUrl: String,
    IDNumber: String,
    infoList: Array,
    unbound: Boolean,
    incomplete: Boolean,
    upgrade: Boolean,
    mask: Boolean
  },

  data() {
    return {
      showMask: true
    };
  },

  methods: {
    clickCard() {
      this.$emit('clickCard');
    },
    clickBind(e) {
      e.stopPropagation();
      this.$emit('clickBind');
    },
    clickMask(e) {
      e.stopPropagation();
      this.$emit('clickMask');
    },
    closeMask(e) {
      e.stopPropagation();
      this.showMask = false;
    }
  },

  render() {
    return (
      <div class={bem([this.type])} onClick={this.clickCard}>
        {this.mask && <div class={bem('mask')} onClick={this.clickMask}></div>}
        {this.type !== 'healthCard' && this.upgrade && this.showMask && <div class={bem('mask', ['upgrade'])} onClick={this.clickMask}>
          <span class={bem('close')} onClick={this.closeMask}>
            <Icon name="cross" size={14} />
          </span>
          请点击将卡片升级为健康卡
        </div>}
        {this.type === 'healthCard' && this.incomplete && <div class={bem('mask')} onClick={this.clickMask}>
          <span class={bem('complete')}>完善健康卡信息</span>
        </div>}
        <div class={bem('header')}>
          <div class={bem('header-left')}>
            <p class={bem('org')}>{this.org}</p>
            {this.type === 'healthCard' && this.unbound && <span class={bem('unbound')} onClick={this.clickBind}>
              未绑定院内就诊卡
            </span>}
          </div>
          {this.type !== 'healthCard' && <div class={bem('header-right')}>
            <van-icon name="health-card" size={25} color="#0B5A2C" />
            <span class={bem('card-name')}>{this.cardName}</span>
          </div>}
        </div>
        <div class={bem('content')}>
          {this.slots('default') || <div class={bem('wrapper')}>
            <p class={bem('patient')}>
              <span class={bem('patient-name')}>{this.patientName}</span>
              {this.default && <i class={bem('default')}>默认</i>}
            </p>
            {this.IDNumber && <p class={bem('id-number')}>{this.IDNumber}</p>}
            {this.patientName && !this.IDNumber && (!this.infoList || this.infoList.length == 0) && <p class={bem('empty-box')}></p>}
            {!this.IDNumber && this.infoList && this.infoList.length > 0 &&
              <div class={bem('info-list')}>{this.infoList.map(item =>
                item.value && <p class={bem('info-item')}>
                  <span class={bem('info-item-key')}>
                    {item.key}
                  </span>
                  <span class={bem('info-item-value')}>
                    {item.value}
                  </span>
                </p>
              )}
              </div>
            }
          </div>}
          <div class={bem('wrapper')}>
         { this.codeUrl && <div class={bem('code-div')}>
            <img src={this.codeUrl} class={bem('code')}
            />
            </div>}
          </div>
        </div>
      </div >
    );
  }
});
