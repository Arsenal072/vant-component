import { createNamespace } from '../utils';
import Cell from '../cell';
import Icon from '../icon';
import Popup from '../popup';
import { PortalMixin } from '../mixins/portal';
import { ChildrenMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('dropdown-item');

export default createComponent({
  mixins: [
    PortalMixin({
      ref: 'wrapper'
    }),
    ChildrenMixin('vanDropdownMenu')
  ],

  props: {
    value: null,
    title: String,
    disabled: Boolean,
    titleClass: String,
    options: {
      type: Array,
      default: () => []
    },
    multiple: Boolean
  },

  data() {
    return {
      transition: true,
      showPopup: false,
      showWrapper: false,
      optionsCopy: []
    };
  },

  computed: {
    displayTitle() {
      if (this.title) {
        return this.title;
      }

      const match = this.options.filter(option => option.value === this.value);
      return match.length ? match[0].text : '';
    }
  },

  watch: {
    showPopup(val) {
      if (val) {
        this.optionsCopy = JSON.parse(JSON.stringify(this.options));
      } else {
        this.$emit('change', this.optionsCopy);
      }
    }
  },

  methods: {
    toggle(show = !this.showPopup, options = {}) {
      if (show === this.showPopup) {
        return;
      }

      this.transition = !options.immediate;
      this.showPopup = show;

      if (show) {
        this.parent.updateOffset();
        this.showWrapper = true;
      }
    },
    reset() {
      this.optionsCopy.forEach(element => {
        if (element.options) {
          element.options.forEach(e => {
            if (e.hasOwnProperty('checked')) {
              delete e.checked;
            }
          });
        } else if (element.hasOwnProperty('checked')) {
          delete element.checked;
        }
      });
    }
  },

  beforeCreate() {
    const createEmitter = eventName => () => this.$emit(eventName);

    this.onOpen = createEmitter('open');
    this.onClose = createEmitter('close');
    this.onOpened = createEmitter('opened');
  },

  render() {
    const {
      zIndex,
      offset,
      overlay,
      duration,
      direction,
      activeColor,
      closeOnClickOverlay
    } = this.parent;

    function genChecked() {
      return (
        <div>
          <span class={bem('icon-wrap')}> </span>
          <Icon class={bem('icon')} name="success" />
        </div>
      );
    }

    const inlineOption = (item, index) => {
      if (!item.hasOwnProperty('checked')) {
        this.$set(item, 'checked', false);
      }
      return (
        <span
          key={index}
          class={bem('option-inline', {
            checked: item.checked
          })}
          onClick={() => {
            item.checked = !item.checked;
          }}
        >
          {item.checked && genChecked()} {item.text}
        </span>
      );
    };

    let Options;
    if (this.multiple) {
      Options = this.optionsCopy.map((item, index) => {
        if (item.options) {
          return (
            <li>
              <p class={bem('option-title')}>{item.title}</p>
              {item.options.map((jitem, jindex) => inlineOption(jitem, jindex))}
            </li>
          );
        }
        return inlineOption(item, index);
      });
    } else {
      Options = this.optionsCopy.map(item => {
        const active = item.value === this.value;
        return (
          <Cell
            clickable
            key={item.value}
            icon={item.icon}
            title={item.text}
            class={bem('option', {
              active
            })}
            style={{
              color: active ? activeColor : ''
            }}
            onClick={() => {
              this.showPopup = false;
              if (item.value !== this.value) {
                this.$emit('input', item.value);
                this.$emit('change', item.value);
              }
            }}
          >
            {active && (
              <Icon class={bem('icon')} color={activeColor} name="success" />
            )}
          </Cell>
        );
      });
    }

    const style = {
      zIndex
    };
    if (direction === 'down') {
      style.top = `${offset}px`;
    } else {
      style.bottom = `${offset}px`;
    }

    return (
      <div>
        <div
          vShow={this.showWrapper}
          ref="wrapper"
          style={style}
          class={bem([direction])}
        >
          <Popup
            vModel={this.showPopup}
            overlay={overlay}
            class={bem('content')}
            position={direction === 'down' ? 'top' : 'bottom'}
            duration={this.transition ? duration : 0}
            closeOnClickOverlay={closeOnClickOverlay}
            overlayStyle={{
              position: 'absolute'
            }}
            onOpen={this.onOpen}
            onClose={this.onClose}
            onOpened={this.onOpened}
            onClosed={() => {
              this.showWrapper = false;
              this.$emit('closed');
            }}
          >
            {Options}
            <div class={bem('slot')}>{this.slots('default')}</div>
          </Popup>
        </div>
      </div>
    );
  }
});
